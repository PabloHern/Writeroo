package com.pablo.writeroo.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pablo.writeroo.entity.models.Story;
import com.pablo.writeroo.entity.dao.IStoryDao;
@Service
public class StoryServiceImpl implements IStoryService{

	@Autowired
	private IStoryDao storyDao;
	@Override
	public Story get(long id) {
		return storyDao.findById(id).get();
	}

	@Override
	public List<Story> getAll() {
		return (List<Story>) storyDao.findAll();
	}

	@Override
	public void post(Story story) {
		storyDao.save(story);
		
	}

	@Override
	public void put(Story story, long id) {
		storyDao.findById(id).ifPresent((x)->{
			story.setId(id);
			storyDao.save(story);
		});
		
	}

	@Override
	public void delete(long id) {
		storyDao.deleteById(id);
	}

}
