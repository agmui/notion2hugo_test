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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GZTICJQ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU1tmWASYqN%2FIemh5atk3XfxxG7cDfwrj9DC6jyJPHKgIgZCXC%2Bbb%2B2dET14YdQhj6tenj1dLp3TrsqVaQLLInEnQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDPvlaVJfiS7BkJs%2FsSrcA5MZFvnsimM%2FE0nYxEUJjB5vfimIBkeLO6aZbe5UeWUFOFZuVJd2DFn%2BSccKmCXnE%2Bjt%2BV0e8yXEUQgufN%2BfE5YaaQyRizleZPp7SmNo2TBID0QWFXwVt1k3zXXbhj24CCWlsuQ%2FMq6YYWKmnBoqhOYDmelkKMAeoBp0HEVq86TYvhEeDNYgnZmtXnXjitzB0dfzIk074h0hCM01TSCQMKM%2FeEWWAeTe7Xmx4UzNTQhfM%2F5BLRy3T1d2Dg%2FDJGlk%2Fsr33x8xF63vqv8%2Bd%2Buo1dDVrDwDGEJsKguaHHdTEwdSVQQJ9oSe95HPPyqvCuA1nF5OsJoHiv0fh0L6vdQT25DDiR4W8QUsAHQvliVrma4vTXtCXRt022dVwjKnSMro8bT%2BmlB9locouxnv%2Fo6Xo4qhafWJs47BXFr3JQ6SOcYyc0Zq8UOSWUQhXptOfHhfcWog%2F5fp5g7xOtmLA6pcmMn8a6t4rpeOxFQYLRCGzZhX773loDWR3iZp4F3Hu7Bu%2BR0IO4B28M2WTpQjU1M5v8ubhNhEo3270B5X%2BCy4r3KAfDq7Qtt517E8FiugveDJUrVG%2BT8gTK8oWAel80fBh9ED5OWT99FugrJ7jlOMT9sMGhxRlGr%2Fi5svTVZsMOXXpMEGOqUBCxSM9rgSObeQ92BAzT2UWubsncb2cw3qCNC%2Bo2EpB3%2B4GDdc8JT6CJKjarAxv2zrg5OZTk%2BCCklsJvcnmEtV9PjZ6C9R2w%2FNLrisK4Fazy5zniMXxj6ITmHRunLs4Qil2OypJnrZcWEM3kd9I6Ui1FlwiSW53B3Sl%2BOHFqvPrGrPSNXbRwCZZeZ222wRztU8wUsQBUR2vHSnehgYn8gYGa380vEx&X-Amz-Signature=454fb54c6e67b7ee83398e3898afdd1b407f34c169bb870ed23464ba30d46a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VZT7APX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhIOFDjshuOS%2BbCYj8qO3mJtj20EWeU%2Fp1qGF6HGQz0AIgNkRUnTPXJSk7nNMbpI1XWwVcGyGLw4fqim8P45Nag5cq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDIWHKR5O1QqSchCxpircA2HxGw57TVTIZR5lmGeI6ybGtHIIsN1Jlsj9PknPfJ2RP8jKCu5dTJ9Vx1ObujtaNN9c4KHjMXLeqpcvIpQdvhzsMaUXPATPdqfWzBX3rmSeduFgnbQjzxyw1sjTiVDnpv1MYKGz7HG1wM6LcpDk6xNwmCFFycwYZA0r5i07DcTQbNgwumpAdgUhVoCzRmODRbiAgtlFAF5jjsgXBgeqRGYfsXyVopgq8b1kKBFuIPW7E8TQ7y0O1a3Q7QN%2FB6iwD%2FDanwhBIkRvBjz%2BgG0W7u2UtZKrBqOYP2LBinyba8rJUVp8Y5anOptGMkRBSdXZrfpz4NKvZIlg%2Fl7%2BwKvISFeMeOJowRdpI3g4l%2FvAIadmqaO0mND5%2B1%2FxjAfSxRnLyWJxpmwS99J%2BjZTng1FuU3I9CourjLB%2BQ%2F%2Bp%2Fr6TX9PYkdTBAEnJE2Nxl2iDJ6F5Z92nfRq02zD4dmLnE4ofpex8BrtK5rtOitpXmbz4gk08%2B9pOLgwvWqMOgQRlMc5vtvMlEi7%2BN8mRffRe%2FOQwccT0ceGOgTOOn87S%2BCxFYk92Kpqh6Yz5oaL4Gb2n%2BLkn1oLKWR2%2FISbZQqwDiux9EUcL9UQxwVUGx1RTU8B7buYtXqolOOp1P1eQ23IPMMbXpMEGOqUBRd74cdcoii652Iv1dinyb8g4QxthUpTqxvobN%2BRvSg8h6xkdX6ZEAaVqvNciQNJw8KsDwKvwVg4Fhv5%2BQCM1p7Z3wFB%2BT4UnDMSM5q09mU4oyzdL24KN2KUFVt5BESG3MCCE%2B0Evj7ylzJ2vRo0DgkV%2Fqw9suzncdwM%2BaJKkjxCr6RIR9meUQQt9RcsfTRDtf49bDHkQVmDqmtLlcFkEMkMy6%2BjS&X-Amz-Signature=a88a9dcb8a4e35cf01417011d60bdec97ca9cb9c186a0f806a28e88b2ab8d083&X-Amz-SignedHeaders=host&x-id=GetObject)

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
