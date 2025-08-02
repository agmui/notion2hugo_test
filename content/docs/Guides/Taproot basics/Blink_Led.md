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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B7JSOT3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLEvFtT%2BOa2ivuIyzdf%2Fmxey8UGv5SeIgpN6uNbOX0OAiBJYn0OiH7B1J%2Baab2z9N%2F86BFXq5VaaMFCVTI%2FOPeaPCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHGXPb2eZ5X6%2BPWFKtwDaNdxbZl2wGPakG745%2BKxRepMXfuA%2B2Nek1e%2ByBQ%2F7%2FC3DPyOb4tRBSC8oiFAUJyWyukPgH9k6tlaRXc0RYGmXC9B%2BjFa8nrBFWlXmj3KV8iqm33GLLoViOpR4BTM%2F0E8mvuTt2c3p1U8Q0Pw9E4WygXj%2Fjj0dWhnEQrre79rLP0UONBrnkeEJKh%2BaxWaYL8kMVTMO0zIw3XCjUFJVxZY5O0PVhBOAJ2v5ZXGzYUnXZkPmG9FvR%2BvBbgwxK%2BvJp2OzoezGMeKhqMVZ7QpN5hLATOd3S3olf91ordaO1lgAr21ZDFtwOeludHVya1Fdkq5n7dRlDVKDpJb552HB0PNnlEuSzi5UkDq0gV7lcYxOV8oeMuMuXK5Vmw0pe7xghp8Hk2xdi50PRNK5ra8fBVddMOAuLH70xCc5LukNOPb5RVrGDqKij2G3yMfL4f8ltfgeQ7FaEdCLbrXiT6%2BkrVLU4dFP14i%2FsJ%2F9rW8Rt5harb01%2B5P8myAsl7DuA2ZtRSi2p7uZlEdCISCptHTec%2Bp9f81zSLVygvqnZPbbgCthlKG4YDA87iJKcXhHuBAtuR98GnzCQ4pxvzmK03NUU9YC5ZuyQmuCU0Z92NQR4i3qkKtP8NfE10%2F5DwsAowwp522xAY6pgGCwWZr%2BiCXu2MrS%2FZsDYCarrG49uipsEqJ3PJ5LGfxdO36gDcXnhNSfv8DCBOJa5JXwoWIb7mzH5NYISDkn0%2FQT8kMKAPVihKVjO0EKPh0LtgcIVvwObzl843BU7lCQ2jDBVMP1GDZrCRK5ufdEcODDRL8lmSioqIg7aS%2FEKOOx%2BChIbAy3L%2FTNDY1N49ont1pDh7WC%2BTCshluLWXtFU3A5mdtJiFT&X-Amz-Signature=f5b493fb249e305497710aade974b9190fc69d62ca658eeb17bf5dcb0e41a026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652AD42Z5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2B1QyFgl%2F4W%2Bt4GNVd%2BH9VQ%2Fb84cCgGAh39uS%2BIX7kAIhAPcw5fGC99nmhbuWJa7GKhDBlMBKvxSVV%2FehjlfHYrg%2BKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycbrlPfPcXx5c93cIq3AOwrlO1nIhO6Rb%2Bp%2B13sVGUqSti03bBSDTkYGd8PEi4K2UE%2B4uQV6NBPyDM4MdDLViigYb5YZPBmOPK47PtSC3NQ1UoN9Ac8b%2Fn3TaUkj7Rdc93vHpY8Nu4%2Fsho683gtfcxGLOsu2NSiulMvKiiUCi5OU4Hz2hrwkQsNem7z2CY2Q5UY5whdaukiQILRS5ePskgfuyHHnR3ESWBWe%2FOoLBDeDxvPGuJYG6Jl5VOCVx9%2Bcfx8ll3yAouk5PHXLJtCVsV5Dw8Yn51Njhzmz4ktfgEo1G4PcrPABCXNB4g0eRJCfprsai7OKvMxr%2FQ%2FxhUxPT907H6%2B48RiS7w696xFi888wjgIWsNqWOQuC59uSGgGYrJm1doIwMI2Rmz91VyR7SzX4oClOJo09KafBhJDatVzJVP1fIpdFcb7TIevl1m5NoLkJRAJa5sf%2Fdz79AMCMtOBYvVag8OkYJ%2FssJBa7B7XN9xU4c4cKwo50oqtp5Vf7nMGbVSXDEazBwCMywIu3h7CS4BDy2rlSSztsYrOPITQLA15R7%2FYgmNhXSfdTaz45uNbJA2a4pc84pfuZJslELwE89DEANPlcsLOeZRIkRh2lOqw9aIxbyPv%2BKe0UtKV6LZepXBOejalOPD0TDLnLbEBjqkAZajegNrjZfTLpIEHTCUHsdj0G7L3kFyflnyKb2U19lZqN2Lx0QtyAkOBPQ1RK5L1CkxOjAsr1xxYpJY75QbEabyCmnASS2%2Fzf4JjGYgpWNuZUnxi%2BOkndnd2tjWSfYq6LIYdFuBL2hm0%2BoLz%2FVklGY4fMtpJaQfagcXIHzVJokZiZvFKSTrIHWoEMvGWONHYMO2v0zNxiHE32nP6nOoP9IrbiMf&X-Amz-Signature=67431143700d3af4d00950ed0b91058db8da39658a752932ed925cda9763c2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
