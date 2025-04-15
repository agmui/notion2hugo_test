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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CN63ANS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTIMpxfcOBCtGKSW6bUuEI0htVhdkIrF3H62CDSimJaAiBx4ROK1gfBwVc%2BiXvaSsEnGjHqH9%2FhXSxmCDA1USceMSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM3tZhpJgL%2FPgBTe%2BQKtwDIzXK%2B9ZgdBTZhgXg6lmClcoNKm%2FeriNo%2BD0EMSYQ5q5wjwDTBoeZZ05Aodx3RwIZtQuSIAmPP7vJ%2BrvkHxHHwqa1xtJ%2FcEBIh3x8EJbP9Wf21V3p7h%2BVzm3aNVDXm5RPGd54DUgo6PaCHxL86KT2JzCURQJEgQFgHw5bZOoBWC8QJC0o75p5d6ZoyJQKDtoe1iBxLRPl%2FlVXaOmRRcCGCqdU6r5QzwIdw6lyr701fxbjwXFwkBT%2BRGSE%2F%2B163IzVaTmzKvAawQjyMtpjp64aHkJHH8Y6dCmapSP0awqXGskkAIvzdkcDdG3iGMTUYnHzXSZEEmzx%2Blcm17cspek0nWiHWT%2FL8x3gLO72Kto%2FLxVXXhrF0Zzsp6behNG2aGnzTykZCbYSIN8bYhS9ZuIvn0czDwZUhBgu3pd7Yc3n%2F287suZiwMG70Wd2C3x4py2Z76oCaIwbMRlunMplbgHbTCppRtnYKlZ2Dylzxjqf7it9Nc3WMZxB0YmZOAf2EgvKXhoc2bd6Qz74wnvbkooN9JskjFuW0FvIZTu6k4Fa1bH%2B5%2BsX9d9V%2BUWzrivnSWPOcrbIoB5UdcNrW7nZfl9oFdfNG3BH5q7Lv9dwf4Ta6hfmu2BKOwkFr4rVXH4w1YX6vwY6pgEamsk8F0r9jj3w%2B8%2FDHjjiXFux2rBznD569rMwiq5QcbohEuU2otvt%2BZvfn2TK3cJEhaXyTx8mpSp9jeFdHJUifjI3zvZpGj2j0QBJ271soZcIFTbOl6%2FnT%2BCOJXG6kj5yVbILwEmor9PAXMS7MjqbSFRJYaUI1qn3rOv7LeJ4vZTTQduVW7H8GCa13RtfZL0hlbL8wUINDLLl%2BY5IGY7Sk5hom8De&X-Amz-Signature=d36af72c78b6d22de4c7bc7e50d6c78d1fdeee7d8fc1adc915870139532b6d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2YLDG5%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpXNJF9nmAU%2BTS40rKsWK72hBl0X%2Bo%2F%2FWIRchb53YufAiBU86nkZbWIqLhSXyPoEXlfZMa3QVIpmHgHlcQ66%2FsvoCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMgjWfRPANnu5w8gRfKtwDEaHYSEqu3AqJ19YaFjK7jG7CI3rddBL90bifSiykaIXbCofZD5ld689WPTnhEqeYK%2BklnFoU%2BmqYTpHldL2aKCAJKbp9t2dvdjMPV5Ro5CoA7OjAvZKDda4oEP3zh7m8N%2FGBhxepTgR4r3aNGOf7J%2FO%2BnVaZG5wdR4Y2jGus12kREPCjpeHWG9e%2F%2BfNnBd7RYtZVv9kNpZshfrxgNlKLMJ39kRo5MjkExhRdaxjPRSbB9Bt8IThrWn7Di9hDXmi51YGvzoMzrBvLQT8GJOZLHlN2k7owTmxN9FxLyGxSTB2g5pFQXF7Tda6QV5ggjH3hnfxpO8gLkyrO%2FMK43VLGmqiXebRpZlMukbgln%2BNRuXZv4pIRj3OlgWOLgg%2BpqukSH2P6vURTsbLjyhfKVZyv3BvUmPfn3%2FR2V3oFnCEhobdnAhE3Nq9rE8ZlxPLU3yxanH80YthulZjnqyIXknSpYpszCMVuLkhIBCQHe6WSGU%2B%2FhOHIIMDuYHHM9GDOn2NtCNFbft33y4vxc%2B6k1y8mB38AXd%2FqMmsnWhLd3emKO%2FAgkQWS4Hbv8FIrcYENmUYaOrcVmY7jdR%2F1Wy1jEILS7qLannyEUk%2B98DIDMvQQgaahY6DgTOvpEQpdG7cw3oT6vwY6pgFIHpdHInkNEF3nkMpk6euoDxTJjEH57x%2FbSapAyuUkq0UJt64NYpOlVhiixdU0r1gCDwhN3AtrxVdZKaaqnBWmGgSsqxDWfUpVV7HZgLWJxYEzCoJ%2FaR1luifZhRujJBnXf%2FN0MowyTHuZTD2naejjppW08Jnwny5xblQDn%2Btk8yYNMfCjZNUtfyKfxAaWo2Z1WzeyHeUWqH30T%2F%2FXlkSAGl8bjqwq&X-Amz-Signature=486ec9699ec1a3abe8766386da49ae20223ac43cb32e7fb3633fd477608cf072&X-Amz-SignedHeaders=host&x-id=GetObject)

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
