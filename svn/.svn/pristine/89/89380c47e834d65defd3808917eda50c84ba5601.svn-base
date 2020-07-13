package io.imp.jd.user.distribution.channel.controller;

import java.util.Arrays;
import java.util.Map;


import io.template.utils.PageUtils;
import io.template.utils.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.imp.jd.user.distribution.channel.entity.JdUserDisbutChannelEntity;
import io.imp.jd.user.distribution.channel.service.JdUserDisbutChannelService;



/**
 * 分销渠道
 *
 * @author renrui
 * @email R132616216@163.com
 * @date 2020-05-11 09:12:36
 */
@RestController
@RequestMapping("channel/jduserdisbutchannel")
public class JdUserDisbutChannelController {
    @Autowired
    private JdUserDisbutChannelService jdUserDisbutChannelService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = jdUserDisbutChannelService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
		JdUserDisbutChannelEntity jdUserDisbutChannel = jdUserDisbutChannelService.getById(id);

        return R.ok().put("jdUserDisbutChannel", jdUserDisbutChannel);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody JdUserDisbutChannelEntity jdUserDisbutChannel){
		jdUserDisbutChannelService.save(jdUserDisbutChannel);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    public R update(@RequestBody JdUserDisbutChannelEntity jdUserDisbutChannel){
		jdUserDisbutChannelService.updateById(jdUserDisbutChannel);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
		jdUserDisbutChannelService.removeByIds(Arrays.asList(ids));

        return R.ok();
    }

}
