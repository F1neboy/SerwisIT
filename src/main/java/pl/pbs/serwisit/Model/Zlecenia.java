package pl.pbs.serwisit.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="Zlecenia")
public class Zlecenia {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String surname;
    private String mail;
    private Long phone;
    private String category;
    private String description;
}
