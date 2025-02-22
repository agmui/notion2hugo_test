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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466547QKATR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyIAW%2BqtaJVRbSAwWShhabDFyEUts5ZxUAfRd%2BsyJdzgIhAJMtrodS8oI4rAu3NL3wl%2BT2XOkvYa793HymXy2AsnP0KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FpsmUMAPcsqhN1UQq3APyJmMi61BJeUkIx9ulqa4o7z7hiS2A3xXpu0K1MzN0DhHllm0Fp7M3OLXBqBK2%2F4y7GYHZndq4X%2FRA95UTrMJyWR6KBoNHCch471fOwfii1U%2F725BvcBrvVZqXnEMMwgGOdwbufKHX8DTxbjKBPO7RdaYeuVyjA3B%2BjRoccsoVEIRPC%2FlKvbV6hkqgyP6fM3UkJn6EajObdYFOthLc286FNJ0oFUtsgd%2B0P5kSBMLKkadBK7cQ%2BnM%2Beqt90E5CuXVp2fQ0s5DAh%2B1U2wbuxjKN6vo49fDpefjVwCEFDqd7QPg35A%2F5J0%2BK316FH8%2FIvcZbAHI1BkuNFyThaUyb5qwE%2Bef9z3atVX3%2BRdvLb8wgSZM8BBenj8NUYIOkKsYpNsjtR7s5dXXlgYRhWcC5xWMuKcffwtg6ZigKpYyMHqrsqvM9jWFXRgZUNWyfhEtPY8dKF7MpreH22AHFsJZyCWdsvMs%2Fy6I7pGf53dTpFmwv9elRuPJ5upTD7jhzZtiEz9k3ikK4xyCTq%2BDfycPwg9krnbQfCwJzhUYz85c2MGr0gALyqDwdTjgg1sTXTWDR7h5Wkc5DGwJx5WRLk6thxdQhZJdXvkF%2Bsx%2FCdP96lhzyp2H4R3lI2U%2BTONVEATDNx%2BW9BjqkAfJBJ7OE%2FGasGrkVBpf05WBCb33gykz0hsJsBsxPs8%2Fu4Y4iIGDkxYHErpqYVbCeDDsliGip9SdAFxT6yA6HImqSq%2Fm8KgR%2BgRovp4uI8pw%2BX5MiyAOJtzjMdJfOYycGlivOt61XxnGP3fmp4lgqTUgHxc5jQr6QBgI2wTAI3CZI3crRsbBUXgYK4p8F0bC1%2B5kU7lwAelcbMrZEH7Ow6fTD9gfk&X-Amz-Signature=ae5d20e7dcb4de84156869299c3a52cd83d7fd94f40761007fd2ddb641783469&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SMSD2D%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg3hFqEl25SYFDjlcAHFYqjlkEHrDLB%2BHZRebhj7UUtwIhALCRlOBv5cqbtTzn8x9WaT7ceQp5y%2BB%2B3zyX10GlRlVrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1TUl2kE5Yy6JirJkq3ANZ6KI4kHgpGXDLKFmYU%2FIFmNHb8yZESxR%2BKxpf%2BtXZH01pewH6E2cp6cMNKT%2BqCO%2BCeU1y9%2FHUA0aJLfElCqggVF2LO87HHaeVYY%2F4N8jJHxnaHLzPIg4MibtPEClIzFuvVflcNtIZqcCXpJA0eswNrYF78B5fDslK0Ggel01KSkAah48zsoMCVkFVoz5ZM3tAQKTWUxpZdtnx3s8l464STHZxbaRzkSSr7byuX3I9OR9%2BSNO0CKA4UkLuvw0%2FdArw3f0pS6WKRJmqaxli0YzRB2I4%2F247ySY86ssomBXHlszG%2B6vhW4k42AXZysptGCmZ74M%2F2ZzVGswnbWSjPY6FM8yEzOwRHFZIe%2Fa4CzwWGj4RUxWCXbtoLdUHr0c3sjuZc4Qlyh%2B%2BXJj3xw1V4IdlYUrzo5Sh9clZUtLBrABzaFOaC3OePCHF%2BmqjnSssGqWvprQ5hzx8XfqclDroLqRHJbSZ%2Bc%2Fns1HvBwruFTwJekMUP90W8VNmIc1o9eBW7j2IGlWsHwPygM%2B6z2QUAGIKF1zILB1JPQ7jr4sp0SwGlpIGbHs9jZOnij8V64llBXOPUAi4g33r1907bpZs5XmYaS7ni7hkSrOI8aZEfwdDr6l%2FSIp9osskhtEHNjCryOW9BjqkAdzVXCufqzSmHxFX2lQSYozyfhJ7gEuzDcE8zzCawYaxnvdZzykx6%2F0J%2FUpjqYFtgHJqbYQtdX17%2Bn0HcO9%2BryAPiYbtj295Vqga6VzraXEGvdL5fLsHAmO3u7mJMtBjRakb8TBL%2Fh4VPfcnBlfSix45PlQuIrWjPSUaw4kgdaLtK9zy9mqAE9%2B6%2B66y95O9rVQpgmKsUHaOQpvr2%2Brt083c6IM%2F&X-Amz-Signature=379f960b5b93603ab18b7ab6580cd973a10706675c09d184238c5dc0166894e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
