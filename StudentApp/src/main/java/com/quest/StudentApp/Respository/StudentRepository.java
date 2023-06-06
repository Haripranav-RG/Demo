package com.quest.StudentApp.Respository;

import java.util.List;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.quest.StudentApp.Model.Student;



@Repository
public interface StudentRepository extends MongoRepository<Student, String>
{


	

}
