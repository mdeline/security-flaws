package fi.mdeline.securityflaws.service;

import fi.mdeline.securityflaws.exception.UserNotFoundException;
import fi.mdeline.securityflaws.model.User;
import fi.mdeline.securityflaws.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User findUserById(Long id) {
        return userRepository.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " not found"));
    }

    public void deleteUser(Long id) {
        userRepository.deleteUserById(id);
    }
}
