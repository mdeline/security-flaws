package fi.mdeline.securityflaws.service;

import fi.mdeline.securityflaws.exception.UserNotFoundException;
import fi.mdeline.securityflaws.model.Subscriber;
import fi.mdeline.securityflaws.repository.SubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriberService {
    private final SubscriberRepository subscriberRepository;

    @Autowired
    public SubscriberService(SubscriberRepository subscriberRepository) {
        this.subscriberRepository = subscriberRepository;
    }

    public Subscriber addSubscriber(Subscriber subscriber) {
        return subscriberRepository.save(subscriber);
    }

    public List<Subscriber> findAllSubscribers() {
        return subscriberRepository.findAll();
    }

    public Subscriber findSubscriberById(Long id) {
        return subscriberRepository.findSubscriberById(id)
                .orElseThrow(() -> new UserNotFoundException("Subscriber by id " + id + " not found"));
    }

    public void deleteSubscriber(Long id) {
        subscriberRepository.deleteSubscriberById(id);
    }
}
