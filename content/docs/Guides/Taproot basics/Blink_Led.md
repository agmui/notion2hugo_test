---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPVYQLS2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt4f%2BkxpzxB1RSsj05zX3liuD1fl5s5CYUMkEVfiy6oAiA5VLkeWdB3fWybOaHEf3M1U7sn8arbJCxuPybxfPaR2yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ0ivyoX7%2Fp1mC2apKtwDF8HZ%2B%2BEzvu%2ByIToADuts3n3pERW3HZiDtwmvW74y6PNPiI8QD5OPaKs9AOW8Xy9BN7Mytc77y2JdQ0QD97F8zLtsypIlfN4lYMiWVP7sewPLGcahxARZXmZ%2BYJPKSh6nqJaGypElY0zrVgKZmqi2E557uoanLAYnGT7twJwlTeqikTGZzp5oPnN71gLXsPgFn2rO4iUE9GFhVwT%2Bh87M9VtxVfUUWHb1%2FJS0TI7MSeYMI9qGhzIvcz5lP6pbfQtEVTP7AB%2B6N1tMWDWR%2B9JjLolUWS8i0mNAimQ5zZAckRyS3wb9zdiV%2BQUpOwvjCX090vkxwABp3aQePdj0nG%2F1gnyYoGpa2nGzfiOy2FtF3S29JMmWkW%2FeinWQXMfLed3yPE4iBX11MIw%2BOm%2Ff46FWj6NTOXaCnMOumxM0k5vUF4Bu3APQ3z%2BWTjZHtkfRfQelrTmFwm1tRuobwgrRUyEoJI5dHpA73WyTJLlwVZTYhvbtFLHFuBxc6yUVC4nJ0RWgkrACgxdC8YAh83B7RON76sqQqzb8W83jgOu2zt3hDACmA8qpbSMp4JFro1OfCZYN5nInQsJIKJFx3Nita1tIhurolnylzNaRMP%2FDolyZlaopEuNrNzSb8ShREqow7PyQvgY6pgHEbs8DXUeP2X6IfVlFKNg1as5ZCe22imRSr4Z4xsLk1nhtu0jFf%2FYXr5s16No8tzrL9BZJ3OlIdUDJuN41xDxkLbAkXpLu8rzMKmiPibxWKbgHJO%2FD6oPGInOjgCsupbDMTnjDLhSF4MpvUOcuWCONzzpCK64HzuAhE1p5BaSBxm5pL7Jrinn7uxDKt9d5Daj7nsvdYylPBu3XvZQ2Y0d1GO8Ji60b&X-Amz-Signature=4c812cf1175fdc8158748be51c6d16b9a07af44e439cd9036f4f1000c5f3218f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXMQ3GO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICicpI2MDzGaGemSR4F0IE6eDjFLXhmx299%2BHsQoE6MSAiBybjLR4gY5BoBbbUoQIbuBUqbe6j76ZlZ%2FzmMUsEDgAyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMioEPa%2BmOWBXlOL9ZKtwDyJ6ez5SGNzDfmOZiKU5UH2KOX9E1ieKYlIOfNhsuoeHq5FHpqAqAqvLtqcVAVXAy3Gg1N75AwHvom5g65MHzfpB692aI8yynCniN4ltGAclpJHKnJ%2B05GQ30bDfvToSL0FoIMrtM5OCCFzWuLcxWIxFpXC%2B3u5NU19LQGvghunxHDFEATnnXRZp9d0D2u4G8%2BvSTCbZ%2BJ2JQdsYdIWqPk7AazrJ%2FHuGaAnR3%2FNNYkWKCzRRK2l%2Fo%2FVPSYwW3lEcQVitJxO%2FvF%2BKPX5VYWlaNIWK3a0dcZ00pvlIxfz6tLfgcaA%2BvxaW%2BK1LdLoyyJcitkNypbFhJOW97lRG94uTFNxtEw%2FQPX50vD91%2BN0LWj%2BEoUsTCsX8jAOdh7g86pS8XjD5aZjj8qyNTCqk5EJ0XlQalC6zl7uUcPPMT82aT5Qc5FsgTGKRIhVY8wWODKNuqtWrIrXiV0YQ19yCOi3cIXQV0cKmwsIqkvhmpu%2FltBPSySieWjA61kvCqPwqgroFse3Nx92facNQUAQ6vzFwu96hi3ED6AsV3aAGsUMeA3VBs5W1%2Bu1VHTOD0hkIDbeG9eF%2BB5jTlPtTbyEiBRVlR1KQiYx%2F4TbhpXRUtbx9Yz9%2B7llElAPRfNrAtNUownPeQvgY6pgG4UxCHrlCo7Hv%2BT%2BCQ4iudFwaR6EW8MoobNlGXhhJvcLbXaORLf9z4L9FU9g1acjWBgG7%2FvNwtSwAAjJfx109ZaabF7a8qCAL%2Bm9Mw882aRbIT5Q89V0%2B56V%2B6SNnEPB3zbDZqUOnvXBAwnWLtkfqHbgV%2FaPPOTQOn20%2B5lVT4zpSosK%2FjzBrGcpbCWvYoPPL97LGhK2ZveO3rJNJ0vpiyhsjnRzt3&X-Amz-Signature=41398b041e5b6825975799cac3bbeb2f0de5c2800628340175a51ddb6e785817&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
