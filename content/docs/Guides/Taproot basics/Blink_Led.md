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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWNKBX3%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDtavdzGoI1pawTm6drZnwFyNu9o%2BDBEms7ycuRB7jAHAIhAMOo5p4hTzBfzWh9fuoV7Ti4pyA3Sy8K8Xde%2BzX%2Fw0jvKv8DCDQQABoMNjM3NDIzMTgzODA1Igw%2BJHyqAUIwdvPISpoq3APqQllh%2B9wMTcOXsm0%2F30sTHxn3csRUGDxAQS8pSbKaATt8IISWSYsFWg5jHm1msYqlhbWNSJu4KL5t9TzNMv%2BS4RPaVb7g04pGngQUFPqni8FYTp6S%2FDR46ZIsfA%2BwqLHv%2F1H3mdDSfgC0xoOV%2BhA6uDhx8UZA58iauGgObZ%2FlO7u0%2BwcKvL3LGNqHPzUXuTM5bIZn1Sg4p4%2FXxxYvCP%2FZ3XIpDw6Q29cwj57vJh8pGMHAsElFQU9%2F8PSKGojIcVxjFzb3EKeVi7av39b9%2FC%2Bb6RlJRadF1waMX1LkgkNBoqjctYbZ4iaDjwsgOP9l7nnSUpysYnOn5lM1oj9Rr3lcJ7F1CNfKUqjFKNmU8G%2Bk7tdruyMwTUmHnh7AbYA8LDJo4EZ6zbIlMy9isRwB1Ofv74apkfMrFOXxiM%2BYQgAVq3UUnhHqQyzE%2FxOv6STUD9Vwq0o2S432q5eDr4f976q28a3i53LBMoeiflwHTToaC%2FnR83%2FrR8nsjPo1O7uYg3lr2vtu7xvbB5JbCmKLTFQBa55DOv8G2Eh7oFYZM0nS4bBTPHEwcTcsXdDZTAeIilygQKWpyqGY%2FR9jROIIi%2FwiFa9kjYc1%2F0%2FWSjZToTw9JsbHrAneyOuePFTjhjCVroLCBjqkATQNP%2FAaSbNjJeO795VR4%2FTowYHozK0c245dthj9XdyeN0dgZJcMJInJ8aqGTg0Urd5W8i%2BuqLKdhMGt7kViuIBxDLWsQ08ID1lrV1PUzF3PjTjxB2T8Z6vhqUGfa1Ul3MxE5344J6kwjvQgL%2BkBUBlFUl2c5ClLIj0vtJKMJ9QxWuHy8GSpveoEdTFjfJs%2BmTpeYUwkiXU%2BvMgwSwWp6T0pqtSu&X-Amz-Signature=ef02b3e7b93d746c8151693197ff723e605bf11db159aadd7feee38c60ae6bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTJCYQ7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9bwywmG80VQU275rXPyCjziYiFVPY9KrMD6l0pdzLYAIhANH0fDFjmfqkmxXfHVu7EwO1CQuIzsHWXF38L234w%2BayKv8DCDQQABoMNjM3NDIzMTgzODA1IgyDewL%2BQOII732GXfQq3APXmiZ%2B6LZS9D%2B83fmfIySz7nXxfRt4i9E7VeLMSP%2B8i%2BUdGlSieRfAzLgnjMpYV1mseLEoDkUetsXqB%2BsU51irzsh8RsWFCn5vP%2Bzog53KbFURcP6YP0PUsNKs2ItO4Tpbb7eY7S41Vc%2FJTtq7f%2FfXQp2clNh4dfSPijtEx7pghgJWqpL0povxUKw9hlTQ%2BigtHnjrblIrAzUNabz00ztKukaE%2FcguSAluikt%2B9SLQGsA1ypERL9D71g0G1TWLKB%2FByu1JphEbviOSv2Z9wJt1s0RhFE5qked9IX%2FMrMiJ8sG8WBZzv7XWBO05y5DDKtJykOyKcbcABOkJGQ4M0qVQRWpjmiB9qzKNrCTTKL9gcv5NcDnb7W%2Fb6V8BcTd1nEmXtm7OAt57ciKkrJ7l1do%2Bb9T7VZ6mt3w8tMpeC%2B%2Bun72k69qWAcUxsyPc%2BADXhwW9JLc5lar9AeoICSeDe9mvmvoN686juVC4b8108Gh%2FLiHia6qO7aQMiw9sZQ7VIqTEgErpLgPATtPK8arPrw3j8dy3PTZQRmhE5RKDkeXnx2glMc9JBVn3A0Kvlanz%2FI6%2FImQKk3M5z%2BgyHCFL90JS3hJAPF62nqWf1tCul7oA3OFqqW%2FpivOrRSf%2B9zDFrYLCBjqkAUf9oZ96hQo7S%2B7oE%2FBhjy2gL%2BNGKdxjcyE7zxBta07AvU9Qfic%2FRP7n1%2FFLTMuCcl57AfMXe0VS6ox6hi7ncKe3thLXYrtd4DHZBV%2FSEETHAO3jJyvzjSzDRUD%2BOGCJTuNJvxOjibsEkHUz1Zvn5XNFJ177I%2BrShuLHPN8m%2FQCSZZGudSgSwKrIwEVxytI9l9YvcTYolS1lFYbaIi166KKz0JOh&X-Amz-Signature=862485651b0691d563b51eeea6e0c851f0a4e7c65c5adda796d4ea24948a6829&X-Amz-SignedHeaders=host&x-id=GetObject)

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
