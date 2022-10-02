package com.pablo.writeroo.entity.services;

import java.util.List;

import com.pablo.writeroo.entity.models.Story;

public interface IStoryService {
	public Story get(long id);
	public List<Story> getAll();
	public void post(Story story);
	public void put(Story story, long id);
	public void delete(long id);
}
