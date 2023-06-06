package com.quest.StudentApp.Model;

import javax.annotation.Generated;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "sequence")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SequenceGenerator
{

	@Id
    private String id;

    private long sequence;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public long getSequence() {
		return sequence;
	}

	public void setSequence(long sequence) {
		this.sequence = sequence;
	}

  


    

	
}
