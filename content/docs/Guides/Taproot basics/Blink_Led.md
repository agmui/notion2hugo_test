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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMMKV25%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIHJN8yg%2B3fSs%2BtSHHquYFzY5jzL%2FuJwUoQwU0awUdXcAAiBG5c6C6gbXNcFGTepLi3omneWe%2BgSPMkvvhh6XzZwgqSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMmBhzZwV2OIX0%2F29QKtwDPKMAe%2FxuXOHMeos3OsliN9gZhCrOrqQ1PVMRg1Sxu0VsKDSP3P5Y%2FogQu66cNUO%2FNyIKeQeD%2BBBxujD%2FbkqPFmuvxYUlu05bdZx0p9wMK91yCEe3H%2BVJtqVJ5ABUiR6WFHiI%2FiwPTOtyxOttk3P67nbs8Us47cj6Aqs0OD8GPyxEKcuyFTViyECSzMNIN5QlFIeXxyR0WPD5XJOI%2B3Tmdzde7qESlGU0ebd5hO2Rye0cQ2nb4s%2B5IOMlDsjcihbW6SHzLhANHOOXa5ZLdbMGdhLSBsWRJrKHsZ51P5KHru7ChbOCecA0Sglo%2FJiLKPXRunMs3xRDgTN7jPdlNgy1T%2F89uy3HjNsQjKq%2Fs3dEDRgZSjAA1KGB55vuJng42LGPDfaARt3HYXxRISdSL%2FILiw35vyp2INvEhjFUgNh54vwBZUk4pVNzmLJoMAgys6n2IQFfYtdE84bsgyApf%2BsKwHpsGAYuELJYzTbXxUkvlN8O0ERWnCrwcdeB10ZGMzeJw%2FmYU%2Flu8Xm%2BTvTpat6a03nAG0Bl0tZgAY42SbfUh6oNMdXZH0K19SNJY3ADr2Szptx0n2b3%2FIDMPsbIp65UaZNEbWOu2%2BP8BhZ59X%2BG7reSlYuUQCe4Qzob%2Fb4wsrGJxAY6pgEWcvpXmbaXUj%2FRuesdZM8%2FrlNpV%2B6aX%2FJdhXLHFzaSFC4SVQ0d188QF%2FJzjv6FUUUtaoHeyxYZCtOgSwD1m1LzZAcNfPvigx%2BVgyKlVhE6NwevVVebCo%2B2kl50owBjyQOUu8tGMZ31XX9yLzfvV6kXvwpefyh5l35u5%2Ff1X61AP5mzoy4n%2BsmUljNUIhXbnUwRzb%2BHBTtKup%2Bd1tnvO%2FmdRznZ%2BXxK&X-Amz-Signature=74fcc510c1a1afaf8d13619efc2a75d9dbf895a3a4836865be18b462b725c663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6YFBD7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICLi%2B%2BBkkAndgUG3pk9e%2Bsl%2BpONduemFJDmgfv0ovpu%2BAiAWhZBmjDPCFR9jAPT9cZma8TxYgwfX2r2P5w9rLh6eRir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpxk%2FPPWaDjf823zoKtwDxbhA4FkHD171PwfhDMVKWA7z%2B7xOztJjZTcwYdRzx0AgzVhAq57oN0YgujPSxoYoyLdiKWQkTKduZyqiOf7%2BB2BD16IRi1RkMqYnMIh1moIuyjmQ7xug%2BcTr%2FLdURGAdjuuX%2BkodXuao2866cw%2Bnm1zDtZYd9fP0dV9wI15A6rSjCTlhqcsqihe1O3y9tgR4pinRHjWn82Ky9hnrDnXVQlQWaMQlQ0zShNLzdJlux%2BWjcS4EDix%2FOlKJ%2BPUANEtP06wZvg3BFv8pi3I068yN%2B57NkS4iw9Uw4HAkmmrh2nxS3SQVNYMuUxubyj6Y3iSkqlFQ9O4AfrkPppyUXT9mL9NqeKFCn39ys1QXs%2FCRTaz5R8smTCGN%2FXBrTgrSQBwE45Ealtam4fjeKSSp4AeXpmm5%2BGMSrSgq%2BFX%2BCNLAJd6isBTWrqlTqxKqA08pzNnuUfks5b4Jsoh0%2F1LM3pso1OXDvPgfV9esqj3zVJvxkqt4Kd4aMk2NFBT3nRq1MZdKnl%2F1Qy67nCdLnb46IX34UO4MUHH%2Bw1dFfD8wpC5XdZPlX%2BzztvnYqhygRx12S%2BE59XeQXZg%2FJ%2BpeFRl0Gf3F6j2r2tKJ%2BsoVF%2FXAhjYfe6fRskwXen%2FrdP9u6QYwvbGJxAY6pgEhtGqY0c0WGzKnZwktfbBfWD17YL7UdwytD5cKnpgUJtfCBWzFatS7dc%2BO5btJPgq7Foe9MrVseXrPh%2FluvIb8Ig15PlKZrEn36MJybc8wGP1G6AFFdGIX0DE8n6i6JxGpygdIN3B2mvDlEzW8gsJ%2FyzSWfYQAElp5jgBxSb%2Bs%2BRC8PHP2nn7Kz7TFCVBbjcniqGztO7%2FQGCqHCKu1fJ9ypYxItf6e&X-Amz-Signature=2db6cb8d2c1766d06fb49d7bf061837fe984b2a5a9e86f3104f40fd60a9302ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
