package pl.pbs.serwisit.Repository;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import pl.pbs.serwisit.Model.Zlecenia;

import java.util.List;
import java.util.Optional;


public interface ZleceniaRepo extends JpaRepository<Zlecenia, Long>{
    Optional<Zlecenia> findById(Long id);
}
