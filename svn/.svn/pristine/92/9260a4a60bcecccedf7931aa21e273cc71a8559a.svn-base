package io.imp.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.parser.Feature;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import io.imp.constants.InfHttpConstants;
import io.imp.utils.HttpUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import io.imp.utils.JsonUtil;
import io.imp.jd.user.distribution.channel.entity.JdUserDisbutChannelEntity;
import io.imp.jd.user.distribution.channel.service.JdUserDisbutChannelService;

import javax.validation.constraints.Null;
import java.util.ArrayList;
import java.util.List;

/**
 * 导入数据controllerc测试类
 *
 * @author renrui
 * @date 2020/5/9
 */
@Controller
public class TestController {

    @Autowired
    private JdUserDisbutChannelService jdUserDisbutChannelService;


    /**
     * 列表
     */
    @RequestMapping("/JD/DISTRIBUTION/CHANNEL")
    public void list() {
        try {
            String result = null;
            result = HttpUtils.doPost(InfHttpConstants.JD_DISTRIBUTION_CHANNEL, 1, 0);

            if (result != null) {
                List<JdUserDisbutChannelEntity> list = JsonUtil.jsonStr2List(result,JdUserDisbutChannelEntity.class);
                if (CollectionUtils.isNotEmpty(list)) {
                    for (JdUserDisbutChannelEntity disbutChannelEntity : list) {
                        disbutChannelEntity.setJdId(disbutChannelEntity.getId());
                        disbutChannelEntity.setId(null);
                        jdUserDisbutChannelService.save(disbutChannelEntity);
                    }

                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
