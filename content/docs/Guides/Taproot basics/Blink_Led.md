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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZODPWEF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIQC9COYnJyDFZh6FQb719UugZiBwe7zO3Nsa8Ah0sT6szAIfdSJBONdenN7jwJ8se7UaadOmJjgx37HPEd6A9B2oMiqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI2lW5eX5LZCgmXSUKtwDA8nmBpz7rmEhERpmvMUBKHDE6uuoI2wCSw73CsRqbxH6NTTT2BAm%2B0CIWSFve9d67aM%2BbJGn7Ww5qvpCAEpvwOdYgoDyK22vEJr01i9VQQTMUBVH4yoSjqiuBYHxH4ohbAH8iMctUgNjsIGFdybWOkB19MH5PGtmOCV1HTlroClwPXpB7hiJJ2L9iENRemTNA1nfmOBfs%2FxYj08WkGXMYIIBQKndZjCAd3e7tT7oOaoI%2Bb19gc6MfOn7dQilk1othiXx%2FRuuKUZXNIZqYy4fVOlYbQEro6kImh7GsStGJY8%2FmCVz%2BJGE3RxFDDAxzV30bkTJX2AjcR8QKCDbuSgd3w2uYVtgzzb1y3Zn2VcM0E0wMt%2B20a5oqpp9IDqPUumpqozWYLsDPT2NoH7IGyei1VKEJbnI%2FRhwAslW9zHCM9BhooDIteFMyyP6vsUFF%2B3UmcX26P%2Bs4OrK9H2M29INz%2FPFlUh4BV0K5zqDfI0C%2FUIE%2BHqG6AybMrpc1hvgbsIm47lEPuvXPxTaJ8F0oCZGn8wp7%2Fg8%2BD3CkerXXWGjYbWZAH9%2F7CUjGebN1YujflGJo78GzwPmdLlfsYkr7yER5ATA78s72%2FU5MKXyxi7GFx3ajflhyMV6elOqwbowz6uevQY6pgEcLhYi496Cjl4fgdjWFtFwEq4krFwvFWkRPsPqtzI3IFMueNzBTEJt9W5%2BpxDNN7qhQl30adNZd%2BCZJKlBVK1xZ0FsF9bXnckypvwoPw6CRcUia7WQXA%2F5%2BzD6pZRp95LxaETQYrvWjsFOGgkOR19rSXJj0AB8n3OaSu1h21xMffr4oqlsji2k%2BTjoovhAp%2FtGAW2hgP3lqITGU4b%2FvNrVAqwt4Ihx&X-Amz-Signature=485bb65c9ba46cb6e0dbc49c09da3d4439ca4be640594b55da1a8a4a9c032ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CLEMYU%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCqG1MCVwYIR5u2bnAvj2c7jSApxfBMoGKNfAm0mTUmtwIhAJ%2F1dDeBc8P6fxBFjD0AH4SCUoAsJ6OGVvPCw9ipcQWTKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7dzdH%2Bj18vmmH2Zkq3ANSkPDjaI24%2FFWd1Ah1AMMOxBUWZHSQOIvVSIkyBRAxlwzDcbD%2FNZZjDw8qRUy7Q%2BK0pq1m27IFF%2B123HlDvldIoQYShu5ceJInXMoCOKwkJjixh2fMpaWcHuMzFjGHxNIHRbyv8Q%2FlOm1QvbfiHv1%2BMwU4gaMepk5kOFoOo0bu%2BH%2BTRB5Zd47C6v8bfmzX7lxPhq7PLrMXmWGsGf1SdtjIemBzUyNgraOb6c6sIsjSaLYuWDhd3yyiObCsKA3h9v05e0ma7BnkrLbUQbm2zEXp3lnmvFeM9Jxi0W0bj%2B0z3PbFfmcP92ICoImGCcLj5wYmL7a%2BXjaL3n6VFySr3ZLKU22TxIdyYQvweLbXWXx1IjWrlJ8tbYFQPFPWbiv6YG%2B52ikYg5b%2F4Cv5qhZZs9eJAkCC1lKhRgPMSB%2Bd6DUVSJeLQ9FpkU0Ilx78FGcJ%2BNMA8p4dTPH85GCUV5srBYIEcnrU8jGepnkendbggFdcI1VZqrWkJE7vHUU5YHazh1EUcmtrHSMlZEW%2F7umuv3qI4sdV308ADBdvgnE67okT5UFrP2U4i6WE9A6fohjVHabpsSfJBWqYEGiXE0xkkHW4GyPLvXXz71IGZglliQwFcUhnElK5pz6mv9Qw5zD5q569BjqkAQ0jB3ItKeSoMasA0XErHmVtTpl24vfwqu38ZkeNLQ1Hpp8QcEaROoETXE3kTeMwbtHwO8Oe%2Fs7z48EBov4FE%2B69UTl4aPiwgn4IWMOyCyBr4NPZIyHgp61O8oq4X1336JbFSL%2BZtAuOm1hIOsedtfvpJ1yk0IiKtN%2FvX%2FN5xIq4Wdcly0JR4HQDUZag4DRaSIyF93S5W3b9J3NEnphCe%2BN6yzCz&X-Amz-Signature=1c4712c5596d5c63cff09be3a92f449a3c9811cd94ad92516fc78e7df036ced9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
