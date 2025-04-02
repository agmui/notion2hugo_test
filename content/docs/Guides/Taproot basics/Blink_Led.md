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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YKKQV6O%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIF71VIJplWErLxwt7irx5U%2BOocH4onman1lZycze8ZNjAiAKfu9sLy%2B1w0g%2FOEZEhz3GNGpA%2FL0k6AnIhzKVm%2BPa4CqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNw94tcFb3CpKEwQKtwDf%2F8GwXzuq0jjxMo8fXacOp738%2B1Y3qUesyGip0adDthHzUwp7lwKI969aCMjXQmNELGu%2BTUcybjuP6bOmJyOg%2BiIvvnKhySlBmwUTVyLjegmTl%2BcoUfDPyWszuxTuLl0iELgl1biRDNfora10LZ0Yd9xDASbJmyjyzSfrVL6QbKTM3y1aJIlh6K8B8U6Vh8UaN3T3A59nLJFOVfaW0Vc7mYXWvbdH7gR9hRevSBf%2Bqn7vGiJ5KSkMNerKuV2lKLkhho90qWr6ePUOLsm4g%2BJP3i19Grpq2mf%2B2RvWusvkL5lfZp1bhHlBdh%2FOW%2BItAmBOK87Y%2Fscksh%2FoiLFk6%2FzXHUJ5hXRi7boKbH9Foo%2FtsibLfx82owBudXsikkDLDnRN0flBYzT%2FNGka7GvrEuxey%2BLQwKHyBBy1%2FficA3%2BcCOZDhdMC0UAw5w0f9r%2FaBnGdNLsBwyO8iJJ3fa7U85I1cHOeE3gO%2F2gW794hnm%2F12%2BLxNjY9xMvhKd10QxvrdQkEBbcvPnh8bkQsaucSBu0MCbAVaAEYtlYzKjjzrAD1fDkgSeSWZKoxzvET1QOVMgoR6TEfrD8%2FKdPF61FD7isBZtIBZyTmmG0n2xQMOfPEmAEYWRqzooc27AeXZkwzqS2vwY6pgHvs26p1KVKwbUDFGcZ7nr8UykbY5%2FvzkLvePqj%2Fb%2BKmGKFsnzMPrndzWnZSmCh8NyIBmDmZ%2F5Owbq1Hj2LiSauM3t5tfe102na6u5q8tlqn0CxwYius%2BAOsOyo2w7UOjTGhk%2FieBmqKl2g7dzut6aRQaC2FDTsAGo1%2FZDGH1%2FX2K51m4y%2FbXL5818MSVi%2FTsCn3ru7DF7nEioNxOzghd9FUvxFSmr%2F&X-Amz-Signature=3c0d4a72ad6cd67af076199f25ebbcd2fbbe183da3dfc082879059c95ebebcc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7PYZF4Y%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDjEMCM0bi6ByCpf2OXH1E51b6sRkjS2N%2FqsSPud576DAIhAIPpgTDofQ3yTNI1OaPGVNZ23GqQ2%2B7rOYX%2FwUiwRliDKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3vLx9g0zvmq2Hi4q3AMQNfQklJZgNdLVJw8OAkzmRScK6NyVrfF5Qj%2FPkR65Rf4T21wQRrAe1IQ%2B0uBMawbw4KtOCw39m8gNTgNaexg62t202swBUXj9v5kcvHvQzEOYgb0MnEH9T%2F17GAZojczC9xVgR7aLCW%2B%2FnSLVj48ktADuB0b%2Foaf8mDYem%2BOK%2FnWADBnR%2F32hvZKuRpFXs4OUbn8j%2FvqHgJH%2BnsBXPZabUd1TKE0gMMiyDPZZa%2BJW0jdg1%2BJt4fgvIWjcSmeyBR4Ugb2twofFiMSaWk9w4BUdmRoPCncJRYkYv7HDA8BC%2BFKbGM%2FjFe%2FAlY8DQBuzAW6CCNM5NVO34NsIjnR0XVNOlenplTUAfcINPzOAP9bs2inCMED5OSO9g4UHvQJRjWIIZH0FJ0f8a5s7U%2BboHKhK212GL50dmk%2Fi5gmVNA7pwptcn2ZbfvDy%2Bg%2F4rkoyOUurRlVR4xzAJ4k6CPKxwPZknM5TPt3eflol%2FRaaAFBKOCVCs8gjatwM8pwl8BnWGtiPLVz5S5%2FXZq06H0mTqpu9Bjl%2B1OCjJBQ4e86y%2FZaR5KFPnS%2BbQJfit%2B4WKJMc%2FA5Vure0i9dHd5Ur0Fv2rFQtKwF%2BRR4CPHxwIsKr8LKde47Fx0ZTJYnykzFO1zDJpLa%2FBjqkAbfzk4ODyt2LoNJIhopxsPaOrqVew8PG1LTJa4Dw8Jqo83jf5sF6%2F0VvmQj8gz6dXzswkL4FlJROqScmrLxHhh%2FMNYSl1UdhzlNiJaDw13kpm3NssVRVWMuLaUpN3LzBRBZEz0p3ljSDXoSLSyqbM%2BchTJsNVQyxm3redzGvUyDIyY27IbFH9bmZ4MlpsaYDAaFe2JIvGyXhwplBQ1jpC7jFjITo&X-Amz-Signature=dc8a063d4f9d76a87cd501c6fce6bcf49f14cd7daabb46e626ad5e5b309371f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
