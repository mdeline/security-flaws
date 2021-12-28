package fi.mdeline.securityflaws;

import fi.mdeline.securityflaws.model.Subscriber;
import fi.mdeline.securityflaws.service.SubscriberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/subscribers")
@CrossOrigin("*") // security flaw
public class SubscriberResource {
    public final SubscriberService subscriberService;

    public SubscriberResource(SubscriberService subscriberService) {
        this.subscriberService = subscriberService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Subscriber>> getSubscribers() {
        List<Subscriber> subscribers = subscriberService.findAllSubscribers();
        return new ResponseEntity<>(subscribers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subscriber> getSubscriber(@PathVariable("id") Long id) {
        Subscriber subscriber = subscriberService.findSubscriberById(id);
        return new ResponseEntity<>(subscriber, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Subscriber> addSubscriber(@RequestBody Subscriber subscriber) {
        Subscriber newSubscriber = subscriberService.addSubscriber(subscriber);
        return new ResponseEntity<>(newSubscriber, HttpStatus.CREATED);
    }

}