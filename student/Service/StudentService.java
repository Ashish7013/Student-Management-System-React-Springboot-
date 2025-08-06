package com.students.student.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.students.student.Dao.StudentDao;
import com.students.student.Dto.ResponseStructure;
import com.students.student.Entity.Student;

@Service
public class StudentService {
	
	@Autowired
	private StudentDao studentdao;

	public ResponseEntity<ResponseStructure<Student>> addStudent(Student student) {
		
		Student s1=studentdao.addStudent(student);
		ResponseStructure<Student>structure=new ResponseStructure<Student>();
		
		structure.setStatuscode(HttpStatus.CREATED.value());
		structure.setMessage("Student Add succesfully");
		structure.setData(s1);
		
		return new ResponseEntity<>(structure,HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseStructure<Student>> getById(Integer id) {
		Optional<Student>students=studentdao.findById(id);
		ResponseStructure<Student>structure=new ResponseStructure<Student>();
		
		if(students.isPresent()) {
			structure.setStatuscode(HttpStatus.OK.value());
			structure.setMessage("Data is Available");
			structure.setData(students.get());
			return new ResponseEntity<>(structure,HttpStatus.OK);
		}
		else {
			structure.setStatuscode(HttpStatus.NOT_FOUND.value());
			structure.setMessage("Id is not Available");
			structure.setData(null);
			return new ResponseEntity<>(structure,HttpStatus.NOT_FOUND);
		}
		
	}

	public ResponseEntity<ResponseStructure<Student>> updateById(Integer id,Student student) {
		Optional<Student>students=studentdao.getById(id);
		ResponseStructure<Student>structure=new ResponseStructure<Student>();
		
		if(students.isPresent()) {
			student.setId(id); 
			Student update=studentdao.save(student);
			structure.setStatuscode(HttpStatus.OK.value());
			structure.setMessage("Record updated successfully");
			structure.setData(update);
			return  ResponseEntity.ok(structure);
		}
		else {
			structure.setStatuscode(HttpStatus.NOT_FOUND.value());
			structure.setMessage("Record with id " + id + " not found");
			structure.setData(null);
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(structure);
		}
		
	}

	public ResponseEntity<ResponseStructure<List<Student>>> getAllstudent() {
		
		List<Student>students=studentdao.getAllstudent();
		ResponseStructure<List<Student>>structure=new ResponseStructure<>();
		
		structure.setStatuscode(HttpStatus.OK.value());
		structure.setMessage("Details are fetched");
		structure.setData(students);
		return new ResponseEntity<>(structure,HttpStatus.OK);
	}

	public ResponseEntity<ResponseStructure<Student>> removeById(Integer id) {
	    Optional<Student>student=studentdao.getById(id);
	    ResponseStructure<Student>structure=new ResponseStructure<>();
	    
	    if(student.isPresent()) {
	    	  studentdao.removeById(id);
	    	  structure.setStatuscode(HttpStatus.OK.value());
	    	  structure.setMessage("Recored deleted");
	    	  structure.setData(student.get());
	    	  
	    	  return new ResponseEntity<>(structure,HttpStatus.OK);
	    }
	    else {
	      	structure.setStatuscode(HttpStatus.NOT_FOUND.value());
	        structure.setMessage("Student  not found");
	        structure.setData(null);
	        return new ResponseEntity<>(structure, HttpStatus.NOT_FOUND);
	    }
		
		
		
	}

	public ResponseEntity<ResponseStructure<List<Student>>> getByName(String name) {
		
		Optional<List<Student>>students=studentdao.getByName(name);
		ResponseStructure<List<Student>>structure=new ResponseStructure<List<Student>>();
		
		if(students.isPresent()&& !students.get().isEmpty()) {
			structure.setStatuscode(HttpStatus.OK.value());
			structure.setMessage("Data is fetched successfully");
			structure.setData(students.get());
			return new ResponseEntity<>(structure,HttpStatus.OK);
		}
		else {
			structure.setStatuscode(HttpStatus.NOT_FOUND.value());
			structure.setMessage("Data is not valid");
			structure.setData(null);
			return new ResponseEntity<>(structure,HttpStatus.NOT_FOUND);
		}
	}
     

	
	
	
	
	
	
	
	
	
	
	
	
	

}
