package pl.pbs.serwisit.Repository;

import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import pl.pbs.serwisit.Model.Users;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<Users, Long> {
    Optional<Users> findByMail(String login);
    Optional<Users> findByUserphone(Long phone);
}
