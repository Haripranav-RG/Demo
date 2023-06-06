package com.quest.StudentApp.Service;

import java.util.List;
import com.quest.StudentApp.Model.Student;


public interface IStudentRepo 
{
	Student create(Student stud);


    List<Student> findAll();


}
