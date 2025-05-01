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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSOAQRA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDhrqUJWGYiVEGmNTI56OiYFMV9uCVdUQvRCUjxlBP3PwIgZcqVKyXfBidRonpCug0udi0lukKONj5xPsN%2B3ot9YOoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB5M%2Fuh4vOOx9wsTSrcAwL9m2wZLwMXMwctwcLEnZoNN2tUTkE9o5NRfHNseVWpI%2Fk%2FnW4F8nDMCi17CEnGQb6W08xVMtgl7Ge20gpaTvHGZ3Go%2F2q9IhTRRaseZxUrB5Gdnj%2BLAbBeXDD8jWuGVgLN5hCvd97ZUXNB6fFPUXthqeiQa7GaF7YAS2Mq6FyTb%2BDtfML5UVfqJXPTeA3kGZ4xJ%2FcuaK%2BJnx4HSbXmefmF4eWPQLlZwY1qYdEZB0%2BmRVpLt80l%2BQSVodl6kbKIzDf8ujWdi7fbUHOB1T7SWM8AYb8ADXz3e90M7nf1TSjCp9PZC3mDbCr1Ctt2dTcS95ZI05OpcUEJ1E9%2BVMPfgDF8BiN1%2FQhyA4tqHaHH19KLURR8V3rIMNmI9GwK%2BvednqMZOiHPn3yN76R857gmlfOe%2FCbjo3zyvqPoRwPoUw%2FHdDL2NcZ29j2TGqdtKKGSYOvyYGCXiuqi0IYnUr2jZwebco9jJcAA6DO%2BP%2BL0VMjsnrrJp38pCmNcmNfl21rHJg%2F59n59tFcCTfFzvzHsyrHtt1aNYgrncsc1Js6LY3%2BICcHPW7GFr1HQHOM%2FwpZHf15%2Bb9JAmJuug5IfGGeK1SqsiszRi%2Bh7JkT6ez3%2Bvhxn3Ppa4gabA7sAjVmzMNigy8AGOqUBQQwR3wowFsMF%2FQWbCbwoDpwfhQtp%2Fj9LZUaii8TyiBDWi73x8oCV%2B2pYBOLmluT8kb%2BrZJFs3DcDVQNX1dlDGKW86WGJJ%2BoVmTxbvRinKSC773YH%2B9SC2uwvDmTTVropzhJkupDvOvDwMpj2tR8QvBGFB6LgQJLO7UW%2Fmklorqwn2j7pL825w13SSP24tLjFvtbPV5Qj8r0MdDIcBLDZ3s8u3ILg&X-Amz-Signature=34f4101db9df403072dcce853f51246952b16a0c289852f1e044488e11a6f03e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPMPC6R%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCcbiynYyitKGMmXBME663hKgV%2Fq0AZUVsZ%2FRjsZGYh5QIgBLoi1EtEjaNNjlP44BGiKxXlcLdZJOa9fHXw0QcRn%2FkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXdInSRWinTZtCLtircAzTFrXy9NdksdZhZclzkz9xXATQyWH0aDPGL9oURf3%2Fz%2FmEgKzj13WLmPfXzeo%2FV7iKcCNwsRwnsVjf%2F6H4b%2FZyies%2B303jJVnWh7F1%2B4i5T3wejog0Dh%2FvZWQeoP6OOx7yDkvPSTTGCyxau0SGn8stuPMlvcKMa3aDuepWZloCe2LzcY7NK%2FH8B6CWCZZKJYosCSkBMx4BxzYxWwVxjVqDeE8KJHUIc4CiL3sNqTrMTWEKlSV3b%2FG5y586DDgiTS72b8UbELuCsdy3Doc%2B63ic6KRp4M0W51%2FriOGq4mDjZK7hU%2FCaayHey4I0I4HHh42SW6jmuGAR3qix4Ni5fhvBfgY6ccOKwfljiYNQdhoPxune5sT9PT35IE7xtweeaJrwDoqeaO01%2BX7Nozun31nUhk2D4JPQLfzhfsPaNIa1ktFe4Geqn7N4LTsT5hD6j%2F2ghITTwOncyHtBkNL9jhR4%2B5wVod2%2B%2F%2Bnk8TOL6kuHe7OniFer%2FtkgXQs4jYBmD7Xy%2BS31EJowL21%2B7XqKtQVzJ2P4In%2FRi6gZ0zbfx4X7bAzB80yfzve8KBkA92No6oTTK75iTycz5Bh07vEqb0SFsvawOYWUo9WGXfvfk8HD4wBha6X5x27ak8GDRMImhy8AGOqUBBmhZIi7rjaXDSsghtT508QfXtLyU09gJxZaztIqnKdQSnDhEAsrw8425F79c01nbr0tDUkP114XS%2FINFuz43K5zBxp4VRQXiTitSqQGCtkxB8rv6dOG6fY2B%2FVKFKySye8ZTwj0XIbbql0CXIv%2BN4DYqgYoxgygLkKAoupJzH2lEy7f07nIdYusy6gqjUz0QE%2BVVNoaLUdUfuxVnzrYCmlKSvJ1n&X-Amz-Signature=09f6e0cadfecd7909e0fc2bd6afea505db2a601592b1495318fab769928616c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
