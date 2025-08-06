package com.students.student.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.students.student.Dto.ResponseStructure;
import com.students.student.Entity.Student;
import com.students.student.Repository.StudentRepositoy;

@Repository
public class StudentDao {
	
	@Autowired
	private StudentRepositoy studentrepository;

	public Student addStudent(Student student) {
		
		
		return studentrepository.save(student);
	}

	public Optional<Student> getById(Integer id) {
		
		return studentrepository.findById(id);
	}

    

	public Student save(Student student) {
		
		return studentrepository.save(student);
	}

	public Optional<Student> findById(Integer id) {
		
		return studentrepository.findById(id);
	}

	public List<Student> getAllstudent() {
		
		return studentrepository.findAll();
	}

	public void removeById(Integer id) {
		
	  studentrepository.deleteById(id);
	}

	public Optional<List<Student>> getByName(String name) {
		
		return studentrepository.getByName(name);
	}

	

	
	
	

}
