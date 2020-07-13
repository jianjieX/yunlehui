package io.imp;

import io.imp.constants.InfHttpConstants;
import io.imp.utils.HttpUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RenrenApplicationTests {

	@Test
	public void contextLoads() {
		try {
			HttpUtils.doPost(InfHttpConstants.JD_ORDER_ORDERMANAGE_ORDERINFO,1,0);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
