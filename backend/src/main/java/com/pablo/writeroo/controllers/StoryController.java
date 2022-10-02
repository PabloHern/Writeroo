package com.pablo.writeroo.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pablo.writeroo.entity.models.Story;
import com.pablo.writeroo.entity.services.IStoryService;
@RestController
@RequestMapping("/writeroo")
@CrossOrigin(origins = "*")

public class StoryController {

	@Autowired
	IStoryService storyService;
	@GetMapping("/list")
	public List<Story> getAllStories(){
		return storyService.getAll();
	}
	@GetMapping("/{id}")
	public Story getOne(@PathVariable(value = "id")long id) {
		return storyService.get(id);
	}
	
	@PostMapping("/")
	public void post(Story story) {
		storyService.post(story);
	}
	
	@PutMapping("/{id}")
	public void put(Story story, @PathVariable(value = "id")long id) {
		storyService.put(story, id);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable(value= "id") long id){
		storyService.delete(id);
	}
}
