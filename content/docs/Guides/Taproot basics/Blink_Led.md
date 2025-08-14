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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKXRQSJG%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7SPD3IuSyQjZ8fM4xMWITGBSOTM3KXHv3V0%2FvEodMbQIhAO0aYEq9wLdM%2BTcRDevHZMpzqfTMUZYoEzlPSTkAk1EAKv8DCEQQABoMNjM3NDIzMTgzODA1IgyD7LlnsDb41ITVM4Qq3AOG46dqaNgg2DvPOsbBzqiITeTPVVIe5947maNZAr5h%2FRxAyHjHQgT2tHQckbAjd0V%2Bv5e6eOvlSwHmJrzeXDvphb7V8Y%2B0trqna%2FzgpC%2F1pfaQ1nUoacWUUAU2sKhpqzZSLk7ILFHnmMw8ozP2LpdpHexgT6U2Y8SGyEiUNGfhAE%2BEq1SUu3W00tupqDw9n3Sr%2B0HhFdS4Q6aD55Gx8Ex5rsvuUKo%2FdHqGZNewT3hxcz82J6P65mQTUV4iu%2BhDnHpzN6XOd5ZPL9igy%2BJle15f6UoQ3h4s8M%2FWYjSM1CDLKv6bJvViSz5zX5zMHzJrJJ1LCw7Wq5Sg4y1tAHIswpaYxx0CSiUTq7hg4kfqiWI24%2FLZmRgpz3utfmlmvic7BDF0%2F9rvKYaZ9xkV68QiLxFgwurWVAxGvd3PVdgsPrEgwGBdMEIIQh06u1iXLLWoUHpGqLhpgmsQKBwOubfg9wDifnTVA8%2B7pwdp2T2xGdpJtCAHH5PXLVrqNMA6LchklbO3sWTkZbjFEZdswklvqNCLi6esciwTySDxXMf5Mift%2Fix5EqMZcwLIFF3De3yW5z2zm4TOsbIHn4wZ7HuDGk7oB%2BWLzhYWocSaYmzSn5q4ukXRs5XhjjIsrchz2DDihPfEBjqkAQHF%2FTWLSvwNPYiQpWsuObzR2%2ButZb1OvpApQ5u6f3ROfJTNsv62lqb1Mg7jkDD388kJL9DdmydRHdWOQFuLDVq18Q4rxB46MXZEg1NlHS%2BmjApaOBxV8UwqUIa9J%2FGY2Nvd78huUfxfZqPBqs3SX0bmT6GQVNEkjVOVrpP11eH1%2BjhlpCN15V4QvDR8lUpAZF2s9WgyAUDgxFWVrvYUSRgFhTQp&X-Amz-Signature=a05fbc42a7eb6e9e742fd29bf071f55d4008df77a4ef1600be372cee6a87ebd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPVUWYC%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjACKVj%2FMcR6Koe%2Byk8Td4Rj0gf75ztISDDD6vYF1PQIhAK%2Flj%2FALpaKxfcB%2B0P5%2BhJoFgEdj%2Bm3qLeTFzUAwSl5sKv8DCEQQABoMNjM3NDIzMTgzODA1Igyp%2FPIzCQn4D9OKi2gq3APxh3dM1Q4dXwufKUz32Ztq0lIig5h9gG%2FsoShV%2Fd0YSjN%2Fz%2ByQq%2Bo%2Br0haX8Xzgd1kIFquT6%2Bg6C0RGVim70DD9qe56dyY4hLIhfayOu%2FpoVfxUX%2BjkdX229ml17Y42efqTZmPwz8pPJQ1iCKOgVSR%2BgaxVh8g8Qpn1Cmriya%2BNMmYv6ecaWgueslZwojUnsz%2F%2BFs5KP3yI%2FoH%2BhJFXy1QsdUZqHAsp%2Fw%2BEYJ6dgEJkhCX2f35JencUbTRnt30L3j4efyJrR9U0EutB0TJxFfKINqe9IXukNWjUgSyG%2F7EtzqN2dnOLK%2FAQtteuDllJdDZk8JZMTE%2BzAJLIBqPR3tWeD3ypRUuonoDkm5LxVRSpVPOUX2LsiKYhz9CdS6VFPoNsamV2c1460jUp9IC1HcMqSqs1oM3NKoIJAaR%2F%2FPscN%2FAZQFf5iXElXP5Y9Ciy3JOUXxNh38mCgNSNjfux1sYuXsAkr8JPNBoQX0dH8cpjcmOZg6olepotlQOPwaaDXslUbXgSzsZlrI38%2B9IsIHKaGu6N8dOlVqcgXtCEqykEtchXPsioFOD8Z%2BYyLrQyLUEd4xCuaXyiq%2BfnEoWqoTS%2BJwyJ6wuFWveI4WlSpfzuicLDt%2FRgoc5gjaQWjDMhPfEBjqkAaQBH3E3DsVTptPKHpdLPt3As9rYn0ClrOpz%2BLYAm9U2OVeryHaBrbarq8PJ9TCiERr%2FdrKuvpV8h8r5ZI9Nj51odFw7AgGVTk%2BAsk%2BeHlOJ8LgGr7dQJoVY4KxyePClvnWI26X8otfyXwiKluImVkFi27r0m9zJsM3dh7648YuO7HhQJGZW9W%2B0dFAZZwZPma%2BqsUjhIHI3k6rmT3PKkkbS3WnW&X-Amz-Signature=670b027682403b016c7debaa4c0dcbfb4fe4613be06fe736cfd69a7e2983d5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
