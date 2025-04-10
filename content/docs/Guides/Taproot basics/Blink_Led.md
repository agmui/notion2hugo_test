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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSPSRHJG%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDzlBMrBo7VLXI6mPd0%2BENFnOJXnyAIAVDIlqasE8ywoQIgUhEIQHlt79nr2x%2BJvPZq8llMUxcwM3sjnAErlysBoZUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAs499FlHkL8w4wLWircAw4VSHndw0cF9MNMTD%2FDen5O2xfwer%2BHtb1HhPO1Ndpj3pmkLUJAYiDc4OXaMK5arlEgTo0OZvq3Cj0AsPO5ENJYSFTQq06V9Hk1f3JJMc6K434BzHGNRG41Yi%2FNbYIVpK27YZ6KEw9cRkDOv3MeUVqW4%2BiqHFi3vC0LRzRGN%2FXRZm5tZur7BsPsI%2BL4rwv4SBQcDRCiVCR9qphIUEf%2BD8tejjHatk0j39VYLMT8MlWCcwy4xc6UtBNYmbjfReqbr%2BYXpOvZsRn00FoXRqbusu9Esz1OxlaKxiRywlCWNO7VyeQYRMqlVWetSe5Eh0WyyCuMoAahwMf%2BrmbXRjOYi5oCfE2B8Na7IWXWVOy5Q%2FFVarmelU4BN2ccDSwwblEwcr0fANE3AsxZbvftDyzK4biI4aR%2FMDT5%2BK0LMg4iWKomNaULinfU8Puh73sgbHFi1J60tizu%2FPTYm%2BzHVmx0QexqXLoyD72%2FUoUgkqlWXLg85flH4f17%2B%2BtFb8W8ySc6hjgTUQjYTRQkaa4Rg5rfHAR5BeKYiTv1X12vcPy8r4HE99Bu9x0OYR9BsflyzElVhOOb0WS9z1BP0z5JYUuuxWsmePLxbXJqCeysB04z2mynudXziBTTV0HCZfZLMOaf378GOqUBpxju4bP2KqOXQPVn%2FLpOBDYhsDbwYt4%2BO1z2AB%2FFaGeOnXHjkeIHk3j4UjDHYBxzd5rmSuUrvWvrYfARWzZ3x1OLxufI2smOrCzLJ0PlkX0OQXwYy2tqwaRqbjqPW%2FO4Bobivej5S75ldCCaNEm%2Bzt4%2BT6mN3Bsdi%2FiwAbTd%2BlpnGtcN79iZqYiIZt1e2udjcVkz2tEp29WZvZHiXSJMEjJD7E3W&X-Amz-Signature=ae26edbaeaf9b14952573d8176bcb71a23230635b2d37ac4d96811f0224f4834&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZMUPQW%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCvhN5LPRbM5q459wKep8Z6%2FWPCAj6q1bjYonVy3SVx3AIgTJaokHd4wldRtWaPn2I6geTlsBnpzsiFXjRPow4e9fQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIctX8h2RYIEt6vlUircAyDE%2FoA9F%2F5eVblfMuQWkgJdppa5hcbJGg%2Bcb8Us4uD8JANIkLdQM%2B%2FjwGUCKKlhQEIFcTnrwR9G%2B6K7P%2BMdglqgkKAGiCMj1CqJ7PiMQVFNhKJFB2CmUyu3k1eSre8YI04Ny19yobdtfIuqr8f0IlPXCCwGCxFsFrpKaNBtDpJyatlEXPnozWkWhuQzEPvZyISs41q5M6x%2Fn9LCfaTJA6VSfbcrJ6S4b8itbJb%2FehT84Il7AfgVESx7VbbBq73%2BLsysiOYekmD%2Bw4pE9RbtpEaDa%2Fx10JvZxI6nmVavAwiO%2Fur0waL3o3A0sDmU9u4LTnp6eYq%2Bo5KCcyf48AAWsz5IQBJ7gBeJfjPC7ohPYqtK9zdO%2BAlM13U7lEuRrLnJKGUN5Ui8igkJiHuPSbH%2Bi3%2Bx3dHU6%2FPMa20Dih8ol2RN6%2FKpBoe9MDN9lDsbrbFF%2B3CYy2Zu%2F40BjxZpsIRpi4AD04fBS%2Bfng3XgRP%2FAAySy5pXURtPFT%2F63bLe%2FmzwOJOvPP9Sf2r184tgEjq2hJlD6IPGIQL7zDhUGugKPGEaM%2FG6bPTpXkSQob09WKNssDKi8O6vhTgeW39Pi8fp6Jd9jAcwqyH9arbmEDxgB3X3tle4zgbiOunZYmEesMNSf378GOqUBLxwj6lCJp2o4xljWxVaycBc%2FvVJLVGZoHCfJGXgdtqT%2BTm5nr3BzWTnnfHjW7Ai8fUJ%2BSU83Pr1oaojZbmGNySm%2BkskjDqf8K5NdJWGfPJS3EVhyDh32ZuxN1N3d9GatP%2BYOQqlJMv9XUuQbdibOVmgB2EVe%2F%2BOgEb4S%2Fszi1gzXnEKf3aAOWjFASvT2kb0RjfcxCzSgWa5UclOe2f7tZ29pt3Hu&X-Amz-Signature=f400653450d3c020e9eed0bcdc8af0962edb778464f0eee1fe804b32dcd7ed15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
