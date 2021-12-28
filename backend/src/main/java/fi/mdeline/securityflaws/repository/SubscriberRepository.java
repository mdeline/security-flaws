package fi.mdeline.securityflaws.repository;

import fi.mdeline.securityflaws.model.Subscriber;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SubscriberRepository extends JpaRepository<Subscriber, Long> {
    void deleteSubscriberById(Long id);
    Optional<Subscriber> findSubscriberById(Long id);
}
