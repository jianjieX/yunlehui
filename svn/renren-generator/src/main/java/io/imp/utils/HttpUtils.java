package io.imp.utils;


import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import javax.net.ssl.SSLContext;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;

/**
 * http请求共用类
 *
 * @author renrui
 * @date 2020/5/9
 */
public final class HttpUtils {


    private static final RequestConfig config;
    static {
        config = RequestConfig.custom().setConnectTimeout(60000).setSocketTimeout(60000).build();
    }

    public static final String DEFAULT_SEND_CHARSET = "UTF-8";

    public static final String DEFAULT_RES_CHARSET = "UTF-8";

    /***
     * Post请求
     *
     * @param url 地址
     */
    public static String doPost(String url,Integer pageNum,Integer pageSize) throws Exception{
        CloseableHttpClient httpClient = getSingleSSLConnection();
        CloseableHttpResponse response = null;
        HttpPost httpPost = new HttpPost(url);
        httpPost.addHeader("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)");
        httpPost.addHeader("Connection", "close");
        List list = new ArrayList();
        list.add(new BasicNameValuePair("pageNum",pageNum.toString()));
        list.add(new BasicNameValuePair("pageSize",pageSize.toString()));
        httpPost.setEntity(new UrlEncodedFormEntity(list));
        response = httpClient.execute(httpPost);
        HttpEntity entity = response.getEntity();
        String result = null;
        if (entity != null){
            result = EntityUtils.toString(entity, DEFAULT_RES_CHARSET);
        }
        EntityUtils.consume(entity);
        response.close();
        return result;
    }

    /**
     * 创建单向ssl的连接
     *
     * @return
     * @throws Exception
     */
    public static CloseableHttpClient getSingleSSLConnection() throws Exception {
        CloseableHttpClient httpClient = null;
        try {
            SSLContext sslContext = new SSLContextBuilder().loadTrustMaterial(null, new TrustStrategy() {
                @Override
                public boolean isTrusted(X509Certificate[] paramArrayOfX509Certificate,
                                         String paramString) throws CertificateException {
                    return true;
                }
            }).build();
            SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(sslContext, SSLConnectionSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER);
            httpClient = HttpClients.custom().setSSLSocketFactory(sslsf).setDefaultRequestConfig(config).build();
            return httpClient;
        } catch (Exception e) {
            e.printStackTrace();
            throw new Exception(e);
        }
    }

}
