package com.students.student.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.students.student.Dto.ResponseStructure;
import com.students.student.Entity.Student;
import com.students.student.Service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:5173")
public class StudentController {
	
	@Autowired
	private StudentService studentservice;
	
	@PostMapping
	public ResponseEntity<ResponseStructure<Student>>addStudent(@RequestBody Student student){
		
		return studentservice.addStudent(student);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ResponseStructure<Student>>getById(@PathVariable Integer id){
		
		return studentservice.getById(id);
	}
	
	@PutMapping("/id/{id}")
	public ResponseEntity<ResponseStructure<Student>>updateById(@PathVariable Integer id,@RequestBody Student student){
		
		return studentservice.updateById(id,student);
	}
	
	@GetMapping
	public ResponseEntity<ResponseStructure<List<Student>>> getAllstudent(){
		
		return studentservice.getAllstudent();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ResponseStructure<Student>>removeById(@PathVariable Integer id){
		
		return studentservice.removeById(id);
	}
	
	@GetMapping("/name/{name}")
	public ResponseEntity<ResponseStructure<List<Student>>>getGyName(@PathVariable String name){
		
		return studentservice.getByName(name);
	}
	
	
	
	
	
	

}
