package com.quest.StudentApp.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quest.StudentApp.Model.Student;
import com.quest.StudentApp.Respository.StudentRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class StudentService implements IStudentRepo
{

	@Autowired
	private StudentRepository repository;
	
	
	@Override
	public Student create(Student stud) {

		return repository.save(stud);
	}



	@Override
	public List<Student> findAll() {
	
		return repository.findAll();
	}







	

}
