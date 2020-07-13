/**
 * 文件名：JsonUtil.java
 * 版权：Copyright 2017-2022 CMCC All Rights Reserved.
 * 描述：Json工具类
 */
package io.imp.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *  json工具类
 *
 * @author renrui
 * @date 2020/5/11
 */
public final class JsonUtil {
    private static Logger logger = LoggerFactory.getLogger(JsonUtil.class);

    private static final String ERROR_START_STR = "JSON parsing exception";

    private JsonUtil() {
    }

    /**
     * 用Gson将bean转json字符串
     *
     * @param obj 实例对象
     * @return java.lang.String Json字符串
     */
   /* public static String bean2JsonStr(Object obj) {
        GsonBuilder builder = new GsonBuilder();
        builder.setDateFormat(DateTimeUtil.FORMAT_LONG);
        Gson gson = builder.create();
        return gson.toJson(obj);
    }*/

    /**
     * 用Fastjson将json字符串转对象
     *
     * @param jsonStr json字符串
     * @param clazz   bean的Class类
     * @return <T> 对象
     */
    public static <T> T jsonStr2Object(String jsonStr, Class<T> clazz) throws Exception {
        T jsonObject = null;
        try {
            jsonObject = JSON.parseObject(jsonStr, clazz);
        } catch (Exception e) {
            jsonObject = null;
            logger.error(ERROR_START_STR, e.toString());
            throw new Exception("json字符串转对象错误", e);
        }
        return jsonObject;
    }

    /**
     * 用FastJson将json字符串转List
     *
     * @param jsonStr json字符串
     * @param clazz   bean的Class类
     * @return List<T> 结果集
     */
    public static <T> List<T> jsonStr2List(String jsonStr, Class<T> clazz) {
        List<T> list = new ArrayList<>();
        try {
            list = JSON.parseArray(jsonStr, clazz);
        } catch (Exception e) {
            logger.error(ERROR_START_STR, e.toString());
        }
        return list;
    }

    /**
     * 用FastJson将json字符串转Map
     *
     * @param jsonStr json字符串
     * @return java.util.List<T> 结果集
     */
    public static <T> List<T> jsonStr2ListMap(String jsonStr) {
        List<T> list = new ArrayList<>();
        try {
            list = JSON.parseObject(jsonStr, new TypeReference<Object>() {
            }.getType());
        } catch (Exception e) {
            logger.error(ERROR_START_STR, e.toString());
        }
        return list;
    }

    /**
     * 解析json文件
     *
     * @param filePath 文件路径
     * @param clazz    bean的Class类
     * @return java.util.List<T> 结果集
     */
    public static <T> List<T> parseJsonFile(String filePath, Class<T> clazz) throws Exception {
        List<T> list = new ArrayList<>();
        InputStreamReader read = null;
        BufferedReader bufferedReader = null;
        try {
            File file = new File(filePath);
            if (file.isFile() && file.exists()) {
                read = new InputStreamReader(new FileInputStream(file), "UTF-8");
                bufferedReader = new BufferedReader(read);
                String lineTxt = bufferedReader.readLine();
                while (StringUtils.isNotEmpty(lineTxt)) {
                    T object = JsonUtil.jsonStr2Object(lineTxt, clazz);
                    list.add(object);
                    lineTxt = bufferedReader.readLine();
                }
            }
        } catch (Exception e) {
            logger.error("json文件转换类异常", e);
            throw new RuntimeException(e);
        } finally {
            try {
                if (bufferedReader != null) {
                    bufferedReader.close();
                }
                if (read != null) {
                    read.close();
                }
            } catch (IOException e) {
                logger.error(ERROR_START_STR, e.toString());
            }
        }
        return list;
    }

    /**
     * 私有方法，下划线转驼峰法
     *
     * @param line       源字符串
     * @param smallCamel 大小驼峰,是否为小驼峰
     * @return 转换后的字符串
     */
    public static String underline2Camel(String line, boolean smallCamel) {
        if (StringUtils.isEmpty(line)) {
            return "";
        }
        StringBuilder sb = new StringBuilder();
        Pattern pattern = Pattern.compile("([A-Za-z\\d]+)(_)?");
        Matcher matcher = pattern.matcher(line);
        while (matcher.find()) {
            String word = matcher.group();
            sb.append(smallCamel && matcher.start() == 0
                    ? Character.toLowerCase(word.charAt(0)) : Character.toUpperCase(word.charAt(0)));
            int index = word.lastIndexOf('_');
            if (index > 0) {
                sb.append(word.substring(1, index).toLowerCase());
            } else {
                sb.append(word.substring(1).toLowerCase());
            }
        }
        return sb.toString();
    }
}
