package com.pablo.writeroo.entity.dao;

import org.springframework.data.repository.CrudRepository;
import com.pablo.writeroo.entity.models.Story;

public interface IStoryDao extends CrudRepository<Story, Long>{
	
}
