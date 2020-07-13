package io.imp.jd.user.distribution.channel.service;

import com.baomidou.mybatisplus.extension.service.IService;
import io.imp.jd.user.distribution.channel.entity.JdUserDisbutChannelEntity;
import io.template.utils.PageUtils;

import java.util.Map;

/**
 * 分销渠道
 *
 * @author renrui
 * @email R132616216@163.com
 * @date 2020-05-11 09:12:36
 */
public interface JdUserDisbutChannelService extends IService<JdUserDisbutChannelEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

