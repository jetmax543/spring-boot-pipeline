package com.rp.quotes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {


	@GetMapping()
	public String getAllUsers() {
		return "Returning All Users..!";
	}

    @PostMapping
    public String addUsers(){
        return "Adding Users";
    }

}
