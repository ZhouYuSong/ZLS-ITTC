package com.water.dao;

import java.util.List;

import com.water.beans.DataAnalysis;

public interface DataAnalysisDao{

	/**
	 * ��ѯ�����鼮
	 * 
	 * @return
	 */
	public List<DataAnalysis> find();

	/**
	 * ����鼮
	 * 
	 * @param book
	 * @return
	 */
	public int add(DataAnalysis dataAnalysis);

	/**
	 * ɾ���鼮
	 * 
	 * @param id
	 * @return
	 */
	public int delete(long id);

	/**
	 * ���һ�鼮��¼
	 * 
	 * @param id
	 * @return
	 */
	public DataAnalysis findById(long id);

	/**
	 * �����鼮
	 * 
	 * @param book
	 * @return
	 */
	public int update(DataAnalysis dataAnalysis);

	/**
	 * ͳ���鼮�����ٱ�
	 * 
	 * @return
	 */
	public long findTotal();

	/**
	 * ��ѯһҳ�����
	 * 
	 * @param begin ��������ʼ0
	 * @param end �õ�������
	 * @param sort �����ֶ�
	 * @param order ������� desc/asc
	 */
	public List<DataAnalysis> findPages(int begin, int end, String sort, String order);
	
	
	public List<DataAnalysis> findBySql(String sql);
	
	public int  bulkUpdate(String sql); //批量更新删除

}
