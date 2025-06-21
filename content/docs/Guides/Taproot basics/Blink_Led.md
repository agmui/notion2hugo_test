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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJO4AHZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuOX6u7EYmKHz%2Bqr4%2BODDHxdEssFPWfEqqDbihqieqIgIhAMdiGdpVyvQNIV0PBFxgLQNlvfW0mJA3pEgd%2B58QTDcyKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzdk2pSSmNJ%2BNxQpXUq3AOhCrs%2B42hp5f8lrWT3q78roR6Z%2F3MTimME1sTgQRPs7%2B3UKQVsvv8wlXkEbpgrAqGUAPoXD7ofIm9Jsb1vtOxyAf3I9NRFab6dgOI2JQvBYzsBS%2Fp7j6wW%2B7qUUJ0elmFiIRhGJm7gc1mE7XRfjIFWX7pk%2B730SOdydQpaMA61fqNjTvjaUKP5vwkOVL%2BWO%2BcfQoqOHBQmn3WV4RAAuuPI2b3Mi%2Fth1VX4DOjWz32Du9JVmGOu8%2Bp8PIm8THcv7YfOyCYkHgLUNxrWfOK5nvaz3hXj9zz3%2FI1Qj4JWMToLmj0bPZrfHNzvNGfDLoWihguRqIjyLwlSQInOEbzzC98c1RSvIojaSG4eMpPwnarHgGYAR7RHDIuY4c8LS0QFB076JbJ5BKv5ikTh7zbCYodByTu4v3wkxkkYMzRm1qxULT%2FoCmsPiWXbSqLTtpNTt8aID6omsdlxxYTetNFEYZdX4pZ4%2BdJisjHAOc8PfK%2F2IOmVBwAB5qudS8eG3yrTgw2QhDavR9FbYYt%2BLpdPjE8nBr0o1nz0F8UA1jm7VrO0O6f0dEBelLTcfyhQ%2BrHi5CVwqsmkP%2BLTQt52XBjl5mlEuHOIhrfxKV89h3arTnCcAJwdkn3QAghtFTNHDjCij9vCBjqkAaLJc%2FeSgiSJ%2B%2FeL5hc6Iv9Ge5viCOLPKfp%2BL6LGVpq2g1DaS0LdO6iBJjAVxkHwcfy3sRb3cGkIjgmT2MVz67k89ZIThw7avTRcXiV%2FnTKxYgf3P6A7sg9k7AflvJXoWn%2FWzTrGCwDDp05nq%2B5xfGP5efNRkOguIgH4EGAxp4hb1lHLNi%2Fe5T7rfQuDR6hUl52IHLUhod6yZetXOg3pRmQzaeAx&X-Amz-Signature=914b472a09224febf4bdd104ceb2b0a90853f2258388459eefb42b679f7f68f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466436KTUJR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlwewv7LBlY7Jsw%2BL8JK9jUn75UUBhdsFCKe2QCG37nAiEA2aDmgT2hWEmaccygT3pZJywkzIX%2FELua4q9gASwmBXwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPacNkg7f6KgztgaiyrcA7rFGoXIGipqEufn1nPQ6tOqsQXsCX5j9VHh7Of7D53dZ6JRF5FCrZPOJ6EM5lvHxtShX03L141aSHlcbF8HaLy3zf%2FQdEXmp6AtnjG7IV%2B8nVcE8OCp7%2Bs5tKnb7z7%2FX6%2FMLfGU3driFLF6sr7BH6gCrhxrzvc8Y8vYl7pAoddz%2BcBhAqfhcVXFPE0VTYMHQX4KAcfqItJLzOE%2FEwscafagcXFxNy2pt1IptdgYSvREtL%2BDOpPPMvgzENZqCUubRsvB3rSUHSbt%2FM6UTzXQjGpj6IRZ245Isf9bcch5WgYUbvvnS4vppTGuLpxwOJzij4PyVTnEz%2FNT0VB7YQBSurBZ2OLYkSMI1naxjlnbX4qKXfpgR%2BxRK%2B%2BwLeGbe6DMk3td5Qn6MwL29Rds9LbdBZMOzi%2BQURMXwEvsquSBZxiSqdfVk7%2BgdhNR%2BXcRHYdKeVDYLoSJCz%2FvAPSe65e54yLq%2BKEiJmhDeEYjUZyMbtYN%2FAXNxNHxQlfiBwB%2BnGmbftKwrEqZM5QMaK2bBVsHa%2FWHulCedHDvAC6pKOoKszGFf5MqwyhHIbzFAViyNl8KtVXtV9%2BXSjjMbGHCETvRqj2MPiiK3%2BqE99CZRGEiYlGfcgcBJ2LZ1ofALS%2FSMIqQ28IGOqUB9EK1Sn6gVjAOFs9m0LjAH2edFr9TASMWZicwC04eZ%2FZ%2FKoWG0q7MIBupagPtutSZrb5A5O9m3ylwYRZ5WN0Eumy4X3JNDanjmkfWF17qazMrb2PH2RgTmtQA4hnfDiuBATImrAiSQ1eeB45OyfFYf1Y5u3QS7bWzb8gEI4r92IFqgyx8kI754Bv%2FwctMEhwuCU9%2FnBw360Hgi2x%2FrjrNqQCmwW6o&X-Amz-Signature=efdc0ae777a8c9d43cceab385fe8f4882c4ada42337c97a9981c34b086ade348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
