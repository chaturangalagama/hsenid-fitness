package lk.chefsick.service.menu.technical.controller;

import lk.chefsick.service.menu.technical.model.AuthResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
class ApiController {

//    @Autowired
//    private DiscoveryClient discoveryClient;
//
//    @Autowired
//    private OAuthClientTest oAuthClientTest;

//    @GetMapping("/service-instances/{applicationName}")
//    public List<ServiceInstance> serviceInstancesByApplicationName(@PathVariable String applicationName) {
//        return this.discoveryClient.getInstances(applicationName);
//    }

//    @GetMapping("/call-cart-from-menu")
//    public ResponseEntity<Map> callCartFromMenu(){
//        return oAuthClientTest.testClient();
//    }

    @GetMapping("/menu")
    public AuthResponse Menu(){
        return new AuthResponse("Hello Menu", HttpStatus.OK);
    }
}