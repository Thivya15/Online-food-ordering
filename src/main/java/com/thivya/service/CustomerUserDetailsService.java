package com.thivya.service;

import com.thivya.model.USER_ROLE;
import com.thivya.model.User;
import com.thivya.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service    //we're gonna stop auto generating password
// if remove this @Service annotation there will be generate a password.
public class CustomerUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if(user==null){
            throw new UsernameNotFoundException("user not found with email "+username);
        }

        USER_ROLE role = user.getRole();  // role illanna athu default role get pannum user.java la irukku

        List<GrantedAuthority> authorities = new ArrayList<>(); // create Array list of Granted Authority name of authorities

        authorities.add(new SimpleGrantedAuthority(role.toString())); // add roles within that authorities

        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
    }
}
