package com.quest.StudentApp.Model;


import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "student_details")
public class Student 
{

	@Transient
	public static final String SEQUENCE_NAME="seq";
	@Id
	private String id;
	
	
	@NotNull
	@NotEmpty
	@Size(min = 3,max = 45)
	@Pattern(regexp = "[a-zA-Z]+")
	private String name;
	
	
	
	
	@NotNull
	@NotEmpty
	private String dob;
	
	
	@NotNull
	@NotEmpty
	@Pattern(regexp = "[a-zA-Z0-9]+")
	private String cls;

	@NotNull
	@NotEmpty
	@Pattern(regexp = "[a-zA-Z]+")
	private String division;

	private String admn;
	

	@NotNull
	@NotEmpty
	private String gender;
	
	
	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getCls() {
		return cls;
	}
	public void setCls(String cls) {
		this.cls = cls;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String getAdmn() {
		return admn;
	}
	public void setAdmn(String admn) {
		this.admn = admn;
	}
	

}
