package com.water.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Tools {
	//判断字符串是否是数字
	public static boolean isNumeric(String str){ 
		if (str==null || str.equals("")){
			return false;
		}
	   Pattern pattern = Pattern.compile("^[0-9]*\\.?[0-9]*$"); 
	   Matcher isNum = pattern.matcher(str);
	   if( !isNum.matches() ){
	       return false; 
	   } 
	   return true; 
	}
	
	public static String transPoolID(String PoolID){
		String temp[] = PoolID.split("_");
		StringBuffer s = new StringBuffer();
	    temp[2] = temp[2].replace("SC0", "");
	    temp[2] = temp[2].replace("SC","");
		s.append(temp[2]);
		if("JJC".equals(temp[1])){
			s.append("# 机加池");
		}else if("QingS".equals(temp[1])){
			s.append("# 清水池");
		}else if("MoChi".equals(temp[1])){
			s.append("# 膜池");
		}
		return s.toString();
	}
}
