package fi.mdeline.securityflaws.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "Subscriber")
@Table(name = "subscriber", schema="securityflaws")

public class Subscriber implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String email;

    public Subscriber() {}

    public Subscriber(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public void setEmail(String email) { this.email = email; }
    public String getEmail() {return email; }

    @Override
    public String toString() {
        return "User {" +
                "id=" + id +
                ", name=" + name +
                ", email=" + email +
                "}";
    }
}