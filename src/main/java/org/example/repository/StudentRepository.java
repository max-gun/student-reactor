package org.example.repository;

import org.example.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author max.gun
 * @since 01/07/2024
 */
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
