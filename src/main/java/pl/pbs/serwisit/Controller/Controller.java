package pl.pbs.serwisit.Controller;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.pbs.serwisit.Exception.ResourceNotFoundException;
import pl.pbs.serwisit.Model.Users;
import pl.pbs.serwisit.Model.Zlecenia;
import pl.pbs.serwisit.Repository.UsersRepo;
import pl.pbs.serwisit.Repository.ZleceniaRepo;

import java.util.List;
import java.util.Optional;

@RestController
//@CrossOrigin("https://serwisit.herokuapp.com/")
@CrossOrigin("http://localhost:8080/")
public class Controller {

    @Autowired
    private ZleceniaRepo zleceniaRepo;

    @Autowired
    private UsersRepo usersRepo;

    @GetMapping("/zlecenie/{id}")
    public Optional<Zlecenia> getZlecenie(@PathVariable("id") Long id){
        return zleceniaRepo.findById(id);
    }

    @GetMapping("/zlecenie/all")
    public List<Zlecenia> getAllZlecenia(){return zleceniaRepo.findAll();}

    @GetMapping("/user/{id}")
    public Optional<Users> getUserById(@PathVariable("id") Long id){return usersRepo.findById(id);}

    @GetMapping("/user/p/{phone}")
    public Users getUserByPhone(@PathVariable("phone") Long phone){
        return usersRepo.findByUserphone(phone).orElseThrow(()->new ResourceNotFoundException());
    }

    @GetMapping("/user/all")
    public List<Users> getUsers(){return usersRepo.findAll();}

    @GetMapping("/user/m/{mail}")
    public Users getUserByMail(@PathVariable("mail") String mail){
        return usersRepo.findByMail(mail).orElseThrow(()->new ResourceNotFoundException());
    }

    @PostMapping("/zlecenie/add")
    public Zlecenia addZlecenie(@RequestBody Zlecenia zlecenia){
        return zleceniaRepo.save(zlecenia);
    }

    @PostMapping("/adduser")
    public Users addUser(@RequestBody Users user){
        return usersRepo.save(user);
    }

    @PutMapping("/setuser/{id}")
    public Users updateUser(@RequestBody Users user, @PathVariable("id") Long id){
        return usersRepo.findById(id).map(users ->{
            users=user;
            return usersRepo.save(users);
        }).orElseGet(()->{
            return usersRepo.save(user);
        });
    }

    @PutMapping("/setzlecenie/{id}")
    public Zlecenia updateZlecenie(@RequestBody Zlecenia newZlecenie, @PathVariable("id") Long id){
        return zleceniaRepo.findById(id).map(zlecenia -> {
            zlecenia.setStatus(newZlecenie.getStatus());
            zlecenia.setServiceDesc(newZlecenie.getServiceDesc());
            return zleceniaRepo.save(zlecenia);
        }).orElseGet(()->{
            return zleceniaRepo.save(newZlecenie);
        });
    }
    @DeleteMapping("/delzlecenie/{id}")
    public void delZlecenie(@PathVariable("id") Long id){
        zleceniaRepo.deleteById(id);
    }

    @DeleteMapping("/deluser/{id}")
    public void delUser(@PathVariable("id") Long id){usersRepo.deleteById(id);}
}
