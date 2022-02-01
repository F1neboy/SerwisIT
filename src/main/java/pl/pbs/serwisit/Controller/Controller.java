package pl.pbs.serwisit.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.web.bind.annotation.*;
import pl.pbs.serwisit.Model.Zlecenia;
import pl.pbs.serwisit.Repository.ZleceniaRepo;

import java.util.Optional;

@RestController
@CrossOrigin("https://serwisit.herokuapp.com/")
public class Controller {

    @Autowired
    private ZleceniaRepo zleceniaRepo;

    @GetMapping("/{id}")
    public Optional<Zlecenia> getZlecenie(@PathVariable("id") Long id){
        return zleceniaRepo.findById(id);
    }

    @PostMapping("/add")
    public Zlecenia addZlecenie(@RequestBody Zlecenia zlecenia){
        return zleceniaRepo.save(zlecenia);
    }

    public void run(ApplicationArguments args) {
        zleceniaRepo.save(new Zlecenia(0l, "Marek", "Kowalski", "marek@wp.pl", 123456789l, "Konsola", "Konsola nie włącza się"));
    }
}
