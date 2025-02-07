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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBGCFQK6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD0%2BaYQWaW5kKIPiCrWrdF9pkyk4LIsT3mC3gG23bnwIwIgDxeSIikFRZ%2Fav2cIbsf2jpYOI7jRw4bN3kyl43U4ytcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC7OaNC5ImiD0UoxLCrcA39cbPNJpvSRRdnM7ZKmc%2Flbaj7aChCxB8kAAjNAhqPCfcIOMGBbbTYFpK2y%2BZU6EnH0JyrP13UJQqfdrtLwixbZ11Dmz02ezrBSeStb0XFIGL8EjL6lKZTGNQ0oVFt4ODzQ6BWDKDy10eQhNylz5Gx1udKm%2F0%2FMF24kpnwdJH8JqGsObdSIRGjWZtRd1zgxY39%2FVVjnVHEA5zvC2LInc%2Fp285DbyN6RshbPqsbvtmLRDE9KeXCFFAZj8gqN3ZRUxVpd4A8AjtWyhYTN3CIz9DNj8TOuMJIChM8UAH9uwrCDX6Hf%2FRZfCpjN5Is%2FLdSVF2EEnuv6QacD2MBL5xpJ4KYIsUYFapp04O2NHssUrQldqm5XsHmmGbaoiS%2BbsWGXZ9%2BxM4ihXy%2BEyT1l6M4xoVTb53Zr8lh2wj2NDBoqbzNA3h2RWsqEp8yRPnZzQ3CcZgZNep%2Byip6hPsQ%2F6m5Gculmkr7xWYUTR66XtGq6IEIqTi6ECalpMLMZJUPizOXz3lbtoz9kL43NsSvo%2FOOjuylsnZAQVh%2BNRrf216NS8GObNUn0cM2FpUfffo%2BplOvLkYJBJgp%2Bjqdl35GGaWn03w0Dnf6PAZVhC41sPwRxNvLiwJQwWGPEdZ1RIwz8MO3GmL0GOqUBjjYHHB8GXVtOmEanvmZdJzn4dfPnYUFm5QeTuPh2Qcys1Q2hJR%2BF1u%2BgqD6Cxp9CedTGnZW3Xep4p4XoYlj7MjKv6Xn7PewYYlFqJsYBIeg33KeXE2ez4lpIBJnIOBBqRbzZ6qBNjkKs9xGENCRjjVOZqBlReHVxVDiPS3tbSJHnAgZieykeDMwMw49WxEqXlwdPomRrAinqrdkLXZgx8%2FckwRR5&X-Amz-Signature=e53e9655fcc44e147f80a164544cf86d896e5438d83eadcf26f88b59481ba1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXEZ4WK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCFalERhx56D4naaQses6NpPLAPJSQB3tSZn%2B7bsDpHbAIhAM2elcWrqpFFKXHFY5Jp%2FHjvP0CzVStT5PwtxhhgdFGhKv8DCHgQABoMNjM3NDIzMTgzODA1IgwHPh3Y%2Fav48iDPFuwq3APOTc%2BFNlLLzgTM%2Bh0NHEVPkesJaaUR7NwBhyJwwUi4JCGtl5%2BHwT3lf0B9pzzfwA3HJCceaIiLiHYo%2BwjK8RvyOtT0oZ%2Fh36lekO3VRFt8krzKsUFeUzAH5jCDkqgGSeWOw8Fg0P1H0ex%2BAMLjq63%2Fh27pDV7t4xDMhfbqpWbkJ9sxw1uHtReRiS%2F2gODSvdVnbrbx37Ca3FL11pbJxy%2F3Gt%2FV1zbw9AbCot4V7f6nIsHSePRM81iwknzUQ0VkcwpT%2BnlVQG1SmwaDCT7in0vV0DougsD0%2FmXNZwKqzZ1hkR%2Fy47iYyvjSiK%2BmPP0QYheHatnQ7ZD1yIQREeXF%2FDgcqZGJ%2FY1%2FvFM7N%2BafU1BYehDbMM5wL8jNtxCaEAkKLFFwsBO9ZZl%2FaSqfBX6APurWQr%2BoxqXwenTRac9MtqmT0SGZcuLA1rI79x%2FozfL3s7a6JI8GiuV8%2B6XALh26aC5h9%2BWeztBZKBFXw3pxpfgXgNSau1QtpOqwMaUWCt38TjRBaP4chk5fOIMu0mWnpgU2HxpvCMU92xUugPfOv%2FlYcoo6VndRqLRQ5EIWrTyGa4g9hjsDNFlgtut5vkW4ypQ3GdnsICk1f6yOwPG14Mz8pna2UgxcED0zGIvd6jCMx5i9BjqkAZBNXfYBxhKeBXcgjagdwbHzv2nTekxb5%2B%2BcWCIKYjA4aJvTGVTaFvH8UlKOg0dJ6vvVQqX3NUxQ43b9US75K58uzPvc%2BI%2BmYl8H7xMQori6Hd0xOFsfaK4tsprTIPZJMs2lL3j8FaJEjZBfATDnHxELzIhEs9Tq2FKIs9dzkG52QrY7jmOxWKgJ3ALGWtl396TeqBVyDbvYcpRoMyV4sUR5nXXy&X-Amz-Signature=dc38e0009ae64493799690856f0178eadf22c069b59064702ebdf8f4adb1a909&X-Amz-SignedHeaders=host&x-id=GetObject)

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
