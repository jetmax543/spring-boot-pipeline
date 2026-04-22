package com.rp.quotes.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/quotes")
public class QuotesController {

	@GetMapping("/hello")
	public String hello() {
		return "Hello World";
	}

	@GetMapping("/up")
	public String up() {
		return "App is Up";
	}

	@GetMapping("/test")
	public String test() {
		return "test";
	}

}
