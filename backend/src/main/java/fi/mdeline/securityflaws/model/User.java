package fi.mdeline.securityflaws.model;

import javax.persistence.*;
import java.io.Serializable;

public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String password;

    public User() {}

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public void setPassword(String password) { this.password = password; }
    public String getPassword() {return password; }

    @Override
    public String toString() {
        return "User {" +
                "id=" + id +
                ", name=" + name +
                ", password=" + password +
                "}";
    }
}