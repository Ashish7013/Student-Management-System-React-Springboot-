package com.students.student.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.students.student.Entity.Student;

public interface StudentRepositoy extends JpaRepository<Student, Integer>{

	Optional<List<Student>> getByName(String name);

	

}
