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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF2W7UFV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGss4LBazLIBuvsklJVBSLLGFtDjmOvCRHsZS6BZj2syAiA%2BbZiN2pwYnLaNtt4UqcIF7upqhgVQ7udbNnlvsL85KCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq9P2%2FEAtH09bcSsKtwDcpwI%2FBp5iPFfHXXCCiBZORwmNbJ9MmrwQ9trbXQW4b8u2oYf%2FrN33aiXhHTzb2UBSCc8QWzIS9EoGY8uQCYZzEv38usMeuWZg2Sm8l5dV1MDA4xlf4Zo5oYwygRKBF1C9QzVMQEUXjzMSKSaywX1r8Sq10Byiebh3tusBXPTl4ZpPZEGQRyzWaenoYOQ2mj2fm%2FYNLrxvVq2n3u%2FAfnscLRYcr8KWWu9us6wR6t05YZY%2BkncjHa0Q8bRTSrw49WVHgRM5kQhnIRFjWFADUTDhg7EO%2F5gdQRQ2KRzaX6ZiZ5dpW1hVJQ5VMFwfyhymn4F50OU4%2F5NPyhhwD33Cego5qj4u%2ByEZ%2FgxUYsJRLlYO3dJSmERHf1enAqtqQzOZH8jMrWIdCdqXm02xFle9U9UAJHkcsU9Xy4bJnqUcrv9zxsRJSJwjNeFhUboPXEPpQUOFwB%2FRYpn961SorI8lxys1zeKeMYD%2FDKn8cJZKMI6z06k%2FedHQPrUJaOO4IioUrJhVoGqOcEWy%2B3Yj4iKl0tzuW%2BIcJaSM9mpjGIlWfe0T8%2Fz6eCEj%2BOxwQ3y3URCrdO%2BzXxV19E%2BpuTQKg61ux56MQtr6J2OpUUTYnVxQwRk0J61XSZcjz1pN0bgsRIwn9zlwQY6pgGUPLKlQ%2F%2F%2FFpfaXmK0%2FfZxu2Gb2JM4L%2BrxHg0xocIZ5OKoVu1NY%2Bpi68tE4I50Bd2hRHU542VumA0dUNGKJASs4XRokJQ%2FR7nEgOtVKhbTe%2BDHX4Dmu8jkJtflO6ZpLI7qK9tmIhrL5A%2FgmdCyhyUiO%2FDs%2FqaspfV3Gaf9Z72w%2BNk5NirF8jYGpBhX0wzr6tYjZhyJGfLtLX2OKNhVHkdZMshYMI4b&X-Amz-Signature=8e29c26ed0ed38e4f4779a9a1ac8ab7185ea5693280bc9002e74bd31f75a5e37&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLKWKDY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXzFR2OSyPIWcoi7xiZmd1wf2EpUTytsRdM37rfi9eHwIhANbTYzH0MM1S6%2FIrXjiQ%2BA%2Fkoq%2Fp7%2Fm5GqQ9hzbnT7uXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyei6CLqpUSoqgiS7Eq3ANZbKozBeVn12%2F%2Fcvtd0DhGU2mfBp0f6gzImfiDU8Ih%2BEarvs7nmpqItjHnlChOYXno8YpdlE0z%2BCbe0o2UrsJS7IUawMPIsv%2Bnjgq9PzDgjohMtesi3cIqtPTUbIBMAfn96JgVLt7ZJFhE2zOFy%2Fuf8iHeuHXNdDo3mm64VtqFGNTovZwzC3FlY%2BVrTu%2FoUJEJH8Uz30nmkSFlmsmaGgkLDlUnESVcVRWNxzM%2By%2Byc6yH%2BP0P8IF23M10V0yUZhb7zeclf%2FRp9oBBH21jN19Ui6nXV9JtQ5pPWPGMRyRHsUmfJRI9Z9g9IcNgfHJZgiRB3%2FrWdiLp1fZ86G2oBHLiI9bc6YPRiBcFmxvi%2B3HFpMWFGydT014nvjrwiHU5P7Z%2FYsU9BnXtSBlS2GeYfLZs45NSDHKfNH8zDsTCptFGnWu35GP8Rv28UjowYwk%2FPtY1%2BnfYJwJPsqqrNQNmXJRo%2F0zDdz22PSP9%2BJ%2FDJZ5eIlQrGQ4m25oyJH1i394o9ocqJHWnbrNRc8HS4OntrJywx0ZZ2ZTo0hWYwHcLA5vzNdHDZH%2Bk4BFaCniOLL8EU%2B0YqhHKu9%2BhccyCZWnKyugfMewd32ndKdA1L524tnfusEB7Tik1isYYBJHgVXjCJ3eXBBjqkATuOlSngrZ7WEY6h9riM%2F91fhwwX2W1muOKVpg3a3dKiMPRUqSGR4xbxIF%2BaI3uI8vbQw9t6NyIDVFm3B2WEk9zr4dZcmZJmZ%2FPGJXrlZ88VroI%2BF%2FEGHGIKYTsviQJMFEv7RXT1NKMkeSlZB9V6VhtY4ri%2BkTZnXnU6aWJeA3lpd%2BpAB%2FP4JUUtLPT7lHKpht4P60AJvnRHAYwpOmEzJRbz7ANm&X-Amz-Signature=76c039d529c013654fa9c59411eaa47966a388719fa6c0dec9a0ff5574602961&X-Amz-SignedHeaders=host&x-id=GetObject)

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
