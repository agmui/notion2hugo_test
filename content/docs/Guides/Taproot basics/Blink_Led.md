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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5JLBHV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCsCOsk0nW5z5Wd5VfzoHzLUAuaImP0ys7v7N%2BmfllutwIhAKHkD%2BeOEIJqo51WpGw71EuAl4IOBHi3V8JZ1lwQ5L9rKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCbKsSeYUB0Iat2F4q3AOpYEs9WG8w6WX6jCZo%2BoTHJaKadNQ4yTsvyWDO9LX1gDpNLQYXvHOrVmkQtlr9OBE0uy5okRwd9u%2F9DLiSGC1iJ7HpkzPDWkarm7dLkFFi4lrw4Frn9DKLDbe%2FDy91RTYClnRKYQ6pfyEdnYym00TodJOIFGEQX6bwqdGmweblSuK3U7KtFyQD9tJmLZJusuNSkGfEL%2BoQBcWlV7IjNgR%2BvN2BinT40jkxHq36eZaZ5DEaePZMqR8qAzQkaM9CCFLiAcH7XMrijgNUWkduWE096voVoOqaJLusqEsyXLAazUvXTzrY%2Bcc9f%2BffF%2BP%2F%2FEid0tAxBZucInqFUlNk0sYXRoDpyytnbrGDWdlAYLpbjFynNKfB%2BTAcdKrKsKptMxHhZYx%2FP6DdROumU4Hg7yiK6H8fPV9oCm6ev5LiJkPMoH2meB3CSIUmVLkP7q8faXb2vEEuHSuzcnmA8QLJIcM5Wg025UPfJg4Ik35akAXKv2ORC%2FELNifXLE4ZBniVr46t3jTPUwe0c1y1XnBBEwKxw2MRxhOzexiwVuT1NAOz%2Bqy5rZMfU454ChcgbzTXaB5tKRju9H8Qov7Mdg%2BGl4c5tEk5H1IIJwVhGSDBB3wcp3Ufx3ebEfhO%2BTFNozDZjY%2FBBjqkAWgbOjBVg65dWILqWa63JbCEmMnMJrRjE6jwISZRsAbuz%2Fem%2Ffn1Q2%2FBQaZHd6%2FAmzG%2BgCMwlTFfZDLOsjkB5XU3n6JSc0npp57npH2v6bq8hTayAZKceco%2B25E3S3UwAUbaCx3tk1lU1SCltoBdiswqrUtLp9rznQox%2FvDvajNGzGArOV0gbF4KnjfoeGdo980l9rMJWLIo4hatRUIzfjZV1g6j&X-Amz-Signature=d835df42e7971a43ff3ccfad8c267aa14a237b4cd2aa4927227b57630d63f7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFK2MMU%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDN3phFBNqTlMGnWa0SSfd%2FvyGvEnZQK1mwH2cABMp%2BXAIhANgqOd9%2BWgDaX5ya9njv4XyTCFyf4W8DmKJbxBwLNn64KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyObMkkDx5sW7JIvDAq3AMM%2BMjsrCZ4uXbQlEVQcQ09pCe0wck3pi0DSzNgieKPNVL0VPHKGdmlDXP2SVhrBdshKCQMp2br2pEaaS7VPeacMt%2BrKPd71XBIfkJqM7h30tlJ1ZHtOKXY7VfH4ww4UENkNJomKjJAHSA0wVWwJ54TtuSJ6koA9UeD8VV3Wi4sL5Gapb6NZ%2FWTojXPJV2gmYoEkNoITuQ37Uzmmh24g%2B3Vp3DlbI0OijdeLXOBJRhEUyWq8YYbU2kYHhu41RdEyD2Xnj5LQGoH0eFnTrlHbcqh9rQY%2BEAGzUauMOU3%2BqI1bdRGhuowb3OF%2BGYwXvpK21wpoRZiY4XHbDZzszbwv%2FVBX2Kvkj8OCSpiAfp4vatsbdg0z3FgQ4kn8gD2VgiLXnpXr6tqQCdVkrDFTFMVku%2Be1PpXoPAJSgCMbC1Fu3QqNqFlKIdWnbrKxIGrqPTYe%2BImnoYneoIZpDzItxm06MgKumuXWHGEXe4UR5%2BlO3C%2Ftsb4jzD6yvq0%2Fxs1XmVz08UszBZRbwIcYtIiuUJNMNX64tkL8eg2s0x%2BeXbF84H581wP6SUbqbs4CJw0r%2FRoZQ9QuZmKfU3gUG0olhhRlTfIdRSAax%2BBOPE9BMH2iJ0UIcCN0W35gq7oSX77UTD4jY%2FBBjqkAUQ3KdSt4NZ61TUn2i5Mg4jTzDONMWxgndVwNCYc%2BPTBVFYhmYjUaPu0rjpX3Mck1bDlaxAKSBjDgLUsP0VZYok3czNySBGtljjt7S15ux933Ux%2Fug0Lkdq%2BAAn9cLInhTJh%2BAXP0%2F3fyxnHCAWNj6wPS%2F1%2B%2BfxqbwnkUX18uRpKjmqOvzfuyaFGTA4dkAB2Z78NeGOVxQmUvR9dMJe1E67okjMR&X-Amz-Signature=5c74d9791c16b6db9571fb70a2bfe3c4e494f2f1e3b68eb38e0165400c42644c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
