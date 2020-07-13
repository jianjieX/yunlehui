package io.imp.constants;

public final class InfHttpConstants {

    //请求方式
    public static final String GET = "GET";
    public static final String POST = "POST";

    //请求分页数据
    public static final Integer PAGE_NUM = 1;
    public static final Integer PAGE_SIZE = 0;

    //请求地址
    //订单管理
    public static final String JD_ORDER_ORDERMANAGE_ORDERINFO = "http://xjylh-platform.jcloudec.com/order/ordermanage/queryOrderInfoList";
    //用户管理
    //供应商管理
    public static final String JD_USERSELLER_QUERY = "http://xjylh-platform.jcloudec.com/userseller/queryList";
    //分销渠道管理
    public static final String JD_DISTRIBUTION_CHANNEL = "http://xjylh-platform.jcloudec.com/distribution/channel/queryDistributionChannelInfoPageList";
    //分销等级管理
    public static final String JD_DISTRIBUTION_RULE = "http://xjylh-platform.jcloudec.com/distribution/grade/rule/list";
    //资质认证
    public static final String JD_USERSELLER_QUALIFICATION = "http://xjylh-platform.jcloudec.com/userseller/qualificationCheck/queryQualificationCheckList";

    public InfHttpConstants() {
    }
}
