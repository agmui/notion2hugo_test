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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV63ICCS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGEgHuXHX3V5KDmAYJF2xkUuheh3JNxUTSSo3wzcvoGQAiEAlCrbE5FkD%2BM3WIENXYF9fNek3QSp3lrb44R0sKbzBIYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNL%2FlAaaVek988tvYSrcAxJAEcCuZGVOenq6HuY3xkVwoQMuUXNiMAhg8NerOOAn6f1xBqh70pzg4hY2N4MlzDUuFFicaaOJP5zUHEk26v52q4ZcXf2JPVM3MtUcaosJNNZWrpiHQSOSva0GhZTrZ2GzSsI7a41ZQVgqqqadQnV3knrGuk1VSOoPCPOevAyRUw85J7VSsuwXhmBVTl1diQWQZYenuUHDHG%2BB9DvzXxdeQvjgwfrL32yDHbMGXCBWABu0%2BDObXL45wbXjuQqQt7iTWKYeIXH4%2Bp2LF0ZsRIJ0qZvqidkffS8CCX2uuhHzu4A7FoICA%2Bc%2BitmRIHGuxkcag%2BDVFi99ojqxBu%2BJlEhWdaYbjE4ymC6CLvZKKuNZ7IluGbdD2lXdoyzwwmIMF2P0eu1PqzRGfDzeunVGjzie0404FXEjCtn1sGcQ4HleO8kfYtVryqNqPh6N%2F5IWxs%2BLRYWkJLs40voyQMqkcFXBMikU35FTI8AIkoVQxGZs9x42eWTLViATEr1%2FlxAYnd6ANPJ%2BYRSumKN9skQ4lQwsYual%2BnK1TCIbxr66%2BKn6eDPNPgd57Fudkv7SRHgJ3RivFIpiimE%2BjEB05UTy4TVH81zl1eHzaL9tEB6FCyl5Q%2FArOstsPjkFDqHgMMT3rb0GOqUBA5zdHcNqujt3Xn6SV3rO1DVzcDJ8GNX7uTE%2Fg25aoWdfxL1bvtXilVxDycwGO9Fry%2BBRyhxxu5Xic2Sgtl63Wu1HmhcegUTzx4Y0GPn5S7yFbXMW%2Fd5fINoqQcw2YlPzP4RoCVhsZ1nS3vGIA78LN0Qvz2BLqiHqX%2B1F6uFBddjv78%2BEBQEozOUbK5sYrkCMUtnM%2FVHiqKL7YByCSAJYgDQZIRSP&X-Amz-Signature=6e38fe8d29d86945ee50bb09eeded25ac58c7192496ad2e1151d9322a45f3237&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72HYM2C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOStchMFP5Wp3YK85VRtxKPuJ%2Boe%2FceT9M54PMf6Nn0QIgJs7bVNZLXb%2Bgq0rNHu3IvX%2BgzwuaLQHCU0p3MtbCreUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtA1BeKTB22NxVtsSrcAxIHdU5Y4%2FqxAmwDW7QWe39N4oEIhhSXxzvcxQe4h5x8pRIj4V63kDBSpGzLjdz3%2Fm4Xc5p0oY24BgCRJkjuJW9mEyAncVrXZwgM6gnEZanCGNHQLVLFezzZ7lyG3jMtGsKexVnghJ4Uj%2BIYpEBGR9cukLcs6DmGs57vmr84fhYNddkDRVElhP7xxGN8aooZsjWtQR63dRbYrQHCvU8J%2F3rnnXyqhQRaAYLypTFsxv1w8B5TAn3Bpi8qm7O0xYbdfr6riS5j4WA8%2FqNpXhlxGZQXO7B1z743WsW2wgoEGeujZa4ycb4Is1HX7WzrMpMNP71Fu3Rm%2BOUjREUpxGEA2K%2B5QDDBmNyLklyK7IjkMsXv2ApA1dlcwGboBeX%2FjkhkWezUwRKi317r1TSHogUKBLK5CpTQ8rdv013KOT8OtwDH295kEuNO2MDjP2AguAEv9Me2m78RC7X0n6Li2IDztiWGd93MZ%2FUiT03ElYEm%2F95rRKE7iBuqCUomo9uwtI80a0rZ87fbSxri9RM3Yn4PLsezKWFqqCInCvPp7pQNx6ZBH1ecvlsnb40qxDzS4R%2F70NNGh70xnru7hHfZrf0gcoU2D6mXtOzUJpTB%2F1QXLcit1osROSgb%2FqieffMZMPT3rb0GOqUBwDfo02c5CbELPWBYaa%2BnC8HDVGMh1UkRG0c0jl7ixyvANQIGO%2F7xBMIfQXQ8aznDTN1k16hQgrbzDk6fi%2FCJPNNiL%2B9OSJFMDlmVN6Fc2rq0Ioneyun%2FzQfkLHjyqI3VNeO%2BrHNTqw1NjmJlXfoN7pRndR%2BrIhXFuk9xtfVvtZOpRnBeUxwK26gtBhMPczNVXxPdP1JLpIpR%2B4FG3wijdNRjkwPE&X-Amz-Signature=fcb30faf8830c1c062d3bcb5b4552fe2d131a3553595559a8f733d25ab252e27&X-Amz-SignedHeaders=host&x-id=GetObject)

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
