package pl.pbs.serwisit.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="Users")
public class Users {
    @Id
    @GeneratedValue
    private Long id;
    private String imie;
    private String nazwisko;
    private boolean isAdmin;
    private Long userphone;
    private String mail;
    private String pass;
}
