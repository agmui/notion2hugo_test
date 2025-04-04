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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAEOUB6%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfjiiumumXuGiTNMA%2FPoeC9qRADPG0b%2F3Fcy2a8FMY2wIhAOs7Eo17A9BmKnQnjd5NEJtKiVENrspfoHXKTvJD%2BvqEKv8DCBsQABoMNjM3NDIzMTgzODA1IgyVKEQZVdPJAHbGAaEq3APLB2uPENolgcCn1GSHhHDBHGvTFC7XDnfu5tkYfY0%2BUie1yHfl8usGyumhl2uXjvX9IOQWD0NgBNk6PA6k4Vj%2FZQa8FXGOXHZ%2Be1cLeQsgtzzPnwEM7nIu5rHHeA6w8XIsOe49srTutvOtcfBE8ziqX9Rq8fhjbr7%2BnCA1kJVLQfyV1B%2B0hfiUWSWFzxnXwD1N3Ch8x3%2FrwQMdH4oOcFXv5YwbyibfNu1cxp2Cxa02hLA3L67GwOBvQNK7G1QMI6HhWz7RyzvUhPE2ohApKQ1RMUNxXqXWLI8H4GHl3eXUQOQ%2FUSDu8%2BUJLDDVKrkrEzhYu8jcddI1xZz0lsgoQVYp989si1g6tlIH2QEGvnVBaZDr6JyiWUzbl9DHPFMZ3wqzxPodBSDDQLq4HpsE9kfMJ1UIGGBUS6CBZYljhAuJ7DXhtoFyUjOUBpgcsMGluK7O%2BYoplYHGEYAhFe37EHSwkj965mqPcIWd0c6NsX29vv23AovPQfADbH%2FPDgxrGp0Y0B5b8QECTBwYFJ%2F39A9%2B8d1YCQjfocDkp6Mdc5DTtxoBruKraAmZq48jaXvjLeuqM5gDOaVmieyUmExnejvESuKoTVQ%2FBDcRlftKAkNioQ6hzSkQ1GmxtIbFmDD%2FuMC%2FBjqkAQ5ybCy9aMilV0rX5%2FcvSdG31Jqmo1pYDjGUkT1%2FfgvUozP2lFYtaMxpEjYy6obfJFiSrIr6KdWV4QE%2BYHzi%2BL%2Ff%2BJCdUlnNL9n5g7HWIn9zcKoohSAfcj38xHePlrRolinAMFcP5UG0mYaEseu3KdN2857ZqXHEgw2gwNUfaW9LViU7Mh32k0h3bJEORuClXf%2BWIGrBQb0Dh%2FaYUFYnr69nWvUO&X-Amz-Signature=0255fc5105983133686539fec75791d5fa20f018c45d8883398420522b651648&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD2MCUJ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhovAgUl3faQKxksOCUymUta%2FWwRx1mXVt1BnO88COqAiAWxArfKqhZ42km%2F1r1WBOvTFqNDPYk7QtXJAtVI0mDqSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM7x41atJJidki99brKtwDGwoJ2CZgqY0TKe25nxuau3kS%2FoxI7arpXeur5xt49PQ76LqgkQDncScU90UZZnRXKFC8JBBbrBLgULkx2AQF8NFfeg8q0%2BNtcWc3NDs3AW9kK2VHFImc802awzc5rAV0bZZkst5Ww3PPxFvsmFTuR7jAvEHjxjo9%2BVisIA24eJufavqk1xyszkMQCfQ5RmveMtKGDqZR44kp%2B7HJCLn6ZRMmpT4HT1vg6U9ZvZ03gWTkjZPOKm66MGlmNhGM%2F3EX91XJv8ZBxM%2F1zSYDJjEjSxZotSDShofQU7DAowJ7d5n6%2BjDh5OePlmeZprz2YZA80NcdZohkNMhQAiqicWYmW2pUO2kdAmnifttiTuAAGOjgiKT2EK%2B3PcEMCewSqRHTdUQZf73FckBWSYb5IY49D8y9n7rfgKqhSTbp8TTV3yywHZKvAPjcPFVXwLnFJVDDe6sEToOmNkrbL9iRdwjWGh14Ay6CPcqcVpjQPniKsx6Tz1gjvHu3Pp8nQvPCDgLIhikMixvKpH%2BC8zlKpWPHrmVmj4iUyuQ8AeAHRsEvO3J5st1F5yz5jMWhZAPvIKvMdR0kF5gGER5ukJcotnPaUThvkQ7W9VR0D%2FMEeQQhXsgE%2Bf%2Fwgy6CNHKPVQgwsrjAvwY6pgE%2B57neSWB%2B54RBrCP2ifJbLNhkv2FcZN4yq4RyNBa9vSSOO3ZziOKa6HNawLQ0Y38SzkrFWae12%2B%2Fmf89%2Fx0ekQjCjqqTO9ZnCx6P%2BaRA8TG67Stof%2BN6AVabv9ZuT4%2FTlRIPWjjSQAmSaXDeH%2FVFYUb6XxD%2Bzs2Qd5CHgBilxC%2Bv%2FyrnabEYHpxfwLLIzfa2rmM8d7VQSfOijGSuY4KNqCNR2LUgH&X-Amz-Signature=07e0bcb97b0cf03f9677c4bc97ed3bd26a5a73faffa788160d7aade78a9964af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
