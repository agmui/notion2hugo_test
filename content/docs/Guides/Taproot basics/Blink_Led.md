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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAAHFES%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCTkxbejtbABAe6OWK%2FhFGCVgawKjeFR42BWGTMF0DJBwIhAMju0RHMSeoZHzE99R7m7yZh1RohdBmraYdWCfRdGSC4KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJEB%2BpBlzchA0ni6Iq3AOjKdno9Aq5Jled77c2IADqvSNBeJgy%2F%2F6lOi3YwuOJ1myKbXnOHWRbEVQ1yDoKYMpIuybePQ%2B7uLyyRr50g%2BMc5uWIyaJGVSUlKdD2drzWKEnRPaPM4Qy5X43PdmCnv%2F3Hq%2FKnnet0DGoGIMk2C3ewPOVdbGVMWzCv9rXzSfZarnjDWxgq0UXpMO7rqhr1R1WiESri6RT%2BsBaiBSsq94dfyNy2wxLMMrVa0wdai0JlqIdF1aozz%2BRxY1BsdnivyUEJKVpq9KD%2FVo53UA%2FwIEC4CZfDsk26smAb4PzmtHKUuqaI7HhEbNjJ2OA5J8%2FuMaw8ZLglEL1OYjvjmNiGjSg4Ve%2F7n861Uu%2BkAl%2F2jbF6%2ByugN5jOb6P1NkYY%2BwQlWtnKdBtlwAxHP5W3VY6%2BgS9nxJXoftAUkDRk9QSl3LjuaG4HyXA9ZEYoT9h5hIRMNA4v9xt%2FOykzcFvf%2BNu8YY6oHhCHdDgSuP8SstgqznajnqUG7XdostpJg64fz1tbjn4%2FW%2FpraVVjaWU8KhlBNKI7bCdTJ4Sg7ubvMfyWrRm6mCNAgLeghXZbmOq4crA%2F6%2Bv4GNpTlFVKAVn0tk5uRaCICj57BrpFXkWAhPXP8icBHjAjPln91klHXlDN5jCbi53ABjqkAdk%2BWreIXpVT05O3ywn4e5FyXmaQncb%2FiXWr3A0sTlePcukkM2R6zrnSVgjU4UG7hS7vgp5xaenp2JjPojuv1aULdi4azZOh3jz2viFgm8BcGQi1cLL5uAEJy4Hh1AGjShpCG0fs2B7TFDnIS8VXIix5D1Df%2B7lHRJAwX1oNpQOARnD7aoV9Zexe9tVX1j7eZLoK9i67sUy48YxXPHlzbjuTyZye&X-Amz-Signature=a940d9ffee1ea191b9913e05d2619cbaa58dd72575bf999a2242f53027afb9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644Q2T4UK%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCzYJED1vUAQp%2B0hgcLlAA6qvDZ2FpRkw9JTyVaATn%2F4wIhAPQ7liiB%2F%2BlUIEkP%2BFdRkhoZeyEISLK0EBTJEOj5dj04KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ0nLmr2YUKrXFcGIq3AO3ssL9JKTtgcjYNib%2FwKBROM1lRSscqWQdgrkQQRezAAxseajJ8foyOkHg8ZASicc3eOHhuNLLij1aT8wOH8LjZJFi6J9fAXMgU1722cNadEwe%2BznG1Ap5NtqtJp2Cp2hSzoPl6OrnVWT33CVUKmodQ7F9xOVrsN0TOleCHOivFeBCKhCP42NOR6PL7C1AXBpS%2BpzITKUE8i2ZktePUAjgvoHRLvH1LOQwXKblUMxjWLL2eQrPeOW2cgbRvufg9CDy7EkRpDrChIwmtx7X%2FQr8J0OEN%2B2qhAa6l00JEstNzJPXiJN9Ojx9wpr2nnQ2BTwddbaXlDR0P2S28yxnrg5b6ucg%2BynIuK0xYm0qmBK7FueQNp%2BZUV6eqBX6fjY8JkFQWCDn9rGWFF18%2Fw%2BYOtz6NG4gm6S2y839rztN5ErZMAjA4LPCA51%2FocrMY2w4K0%2FIR70HyyJT2IBRtFoKEH1xgIK1JFnHFpCqUWqkFRknW58GImeGejH2dsRKoss7WY0aPAQvsY0C7dRlHQaZ5t4UOltjgkiq25la61XezRSY7UQZMg0EHCqwDz1Gjmj9xxv4YUIUfYkyaQPhCtNF3zzlgWt5LYGu53b3azTxOeefbh%2FdZQt2b7KmmlHd9zCLjJ3ABjqkAWeY0Az8ZsjqxRsZIgKLyY%2FunI4Iedt3UTlsMoBCpVxJJxskAmIRRGKulWd%2Bm6kXLr%2BpvpGiZZ2oYFr37SwxqpQUMs0GVauIKpfqNeZfzl2jokyi31GaMgqMs2kPuxyY5aiKTi8%2B4ASruaSRahy04tOvQCUKI7OAbVET7vRarg2lCpOmaV8GbLk01Uv7Awh6q6YZv6fnDHtp3nMYu6CzGePiduPh&X-Amz-Signature=2b77486cedb4b698f554eddde2b56160ec3ae6daeaee7bc9a92936fbd095c9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
