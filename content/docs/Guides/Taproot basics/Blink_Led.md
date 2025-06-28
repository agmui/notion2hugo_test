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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DVUTNLM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9tY7OwlZVxDHf8NBLMUdUOFXWZAOZMk1zoI52TkvhAIgVghqT6Hk2ATFzM%2BK6wBmEn01wSka8x8%2F4%2FrVc%2BtsqyIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1GFK7Sa3yZuxuPhSrcAxjQrRzrSm%2BKS9JHb5ff3P0m11a4%2FJp%2BLh6CbqdcNNSYuYlYWu%2BupeH%2ByGn1vqtYhCBZoMt9cggZZ7vvEF0cwBbx47%2FgF6kH38PgMKZ6T5pKmt5%2BqHmnSqqprssgHJlshFmV9CSqWdOUanep0SWa0DLFiqlA0nghpN%2BuLx9AAn6mWHr6sEEd6rfbuIc1PsNl%2B7llxIal137DaFkmhj%2F%2BmTx4ePKKl0HN6GLw1CTZ7oSLMxlMKd2zeVm%2BwaG4ZQctYYG4yIAjk7QdgTbHh5fsO83WAKawiLMAuV0q7enYxzBRICv9so24Se%2BrHM3FL5GmM8AqNK9G2stnyiK%2BMTb%2BuQ0DjmEf3qO7lhy9FF3oKIHXJh5y1%2BltnMVEj%2BL1Wy1gNIohILg6aKIylONEo21ncy0xVm679%2BtKs4M6giRuobCwrdp7Kp%2FNSUNE3Y1xGyFr4FanUDB7smu1xae6xElKZVc5xYr7xLIZ%2FvQu%2Beuc7O55lA5uacHkLBWqNFvz3QcPN8A3lfX%2B5OTt5JwS9mrFApDJ09rWVxNX3iIaEgCDwO54yEFVT6Cie6O1%2FBUAPrVIrszHbllunaCVIPZYDEpOzqo9rLQGfy%2FXjxr1e9xodmn2G9Vf23jMqF5Q7PYZMN%2F0gMMGOqUBhGLAgRpvxd6OolLGbUop6HP7WVrBkkHQdXN8f3nHY3EJ5QTNkFZZhzCh63bAtUL6yAoYZFMTES2o21fJdovx2L4nogjkszoGaL4VfN6rHVUKWZuK0bd8es2Y4Ko9AUOuRXt34wJY5e2RReYHU6STwA0tV7%2Bo%2BDrw3noAxZiSMBhJVeH09hwRD1KV4Edgggk1r%2BXI73O95JD0IZiQ8pAOhd4Atzub&X-Amz-Signature=e2fcdccf547f00b81c8791941a46c882e012660b1ca369df2bd186a1ea8178f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RWYADCB%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjVJtX4aHZvcc0E2kOIVGxjBbfV%2Bjkm43d5HaNd1KpDwIgD%2F7WU%2Bj8OKWGF0nhviG3gozgNehv3wmWCoIXouNQCxYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBH14ElKpwV53bPUmSrcA%2FrdnRvDsZ6J16f4IlN8RSuEnJoLVCxUeFHBGHm6t1ev5WaqEqMZ%2FI6LI7Tr5XnS%2F%2F%2FK7uBigTWZHN1kysyD0lEGDyTikd6vVeXR5Wu%2F98zNgkjLguFogsEM5ixI6NoYnecalZZXlDztEK4PX%2BJTZ0I3j%2FaCO8PBowScwTAL5X7w2%2FbP%2Botti2H%2FkQHrh2w5PF7H9n4mlNtqXrNqxw1SfBqR0KsFVlbOa9p4vfYL9NAltxsu8j1wBXyBOALF20UmJvPTSBzpdVJ5yU6aoMJToVd5jIQ%2FOgRbVPe3%2FBA%2Bwota3HCrBCS2bRdll4ZPUh1he1lAwLqMKSS5jZyksmbcsNKWmv6DVp7SOvU4lNQGxABV1UcbGLsbwxeN2PXN1rWjWDARifXOa57ICBdMQEvoCtHr%2BDb7qs9Jguat%2FSWOLES%2BWNFRMlf7o3zDNq4dv0cG88L3wXNaUG1zhZvk%2BYf1w1XGraQ7fOEsBoJrnWOo4M%2BOJ4qUbeIuFxmGMrLnArdN4Ehz5IUIu3CWFhaV4%2B4KAzeBxHUd%2FckheKxuIz0UhT2IRZg%2F5Fxds2WQu84rvkHqvOGMjLWfy9EogTGPrAWF1HYTMjYQnZnY2q%2BOCNQb3SW0Ihwx2SU8XrfG3HfXMKX0gMMGOqUBs5pNlEgvfh8r5DsFx4fb2D3zSUxAFh8s5laSyPzxwYW4Nu205aEscdn2XJ5bCxUzIbQwxESBC%2B6mUIoamE0BH0eULfXgaNwXuSPVBxjj0NtCxd4vmeK5sjpOIih9VieUa8qf9rbXIMYQQfTdYtzbzjo%2BJjp3X6UV3974bTam112TkopTdfYfYg8VJy%2FYZ2Lb3EDSJo4rW1fJSATtlg5tAWk%2FWjTd&X-Amz-Signature=5a5da710527c474b71f9893c57ae32356219bcb3edde3989e64e847c31962b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
