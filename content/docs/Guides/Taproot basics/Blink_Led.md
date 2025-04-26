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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSKD4MG5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMwGJpux0fPRUs8KLwMfmnloiklkSzO0cAufJZL%2FIZJAIgaAkCf7at3JiZ2yByIDJe7p6%2FiiJQOxNOHIpHWwSqXCMq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDH7fLFaoHIt4p3cGLyrcAxgrjU1JItHO2vGvYlScSapE2IuWUlOxpbCcH9R0%2BcnrxXys%2BeCUm6Vlx3SQHM3QdRs23%2F9b6Q7G3MfslQNJO0uujBfhtxFs%2BvxnXnB1qzZjlSfgd4FDWkH49cSxDqr2hBboSJUUUAVnMONQ2nr7jpizdmKwIqAy%2BjsQ3rF3BerS3P49mIt34Dp0rjeDjZNrERlfRwt9wHOPQ700PolN8DPPjpD%2F4DgSueEq5H8KRKEcXhzyaOBODSpzeJm7pvb8QkiQ7DW4z%2B00DpZVrv5%2FmLy04xtuoTH4x8HCq0YcBWFV%2Fq%2Bra3kVjODQoK4BULOlNSU6ErO12fcM%2Fsc%2BaHNoqfTs6N1hZzv9ep3z7dTJBKxVIkhDBBVj%2BnpgWO1HogyVwYZzqAc5Img3SforJAKdWzRkPczC%2FmL2hwPjc7xk6ZKxeQHBTuyvW4q7BSjwtofERwz2LfdZ876L1LWYYN0km4%2Fh%2FRS9rKY9pJNr8OdX3B%2BXFhPRUA%2FyrGnLZ%2FtjCycwIZ92GRZUvt9LWPBNtVXWug2hpOCc%2FabXttws98hMXqYdcP0OPBlzECfCVeF9wqlSXv7qO%2FGYpCADob4jvIAYuC8RGadpHFC7b7cW95cTV4DEFNb70Za%2BhF2B1UYOMLa%2FtcAGOqUBtgRK8gGQiODTolsB3OxCgF4EIOK%2BauIMqzMDhXDh032mEr%2BztB2OUQreEqmA%2Bj5thyGOTsiQ8iYP2IAw2sXgBf%2BHo8n55xx8jQTwf6i15nDaKPqq%2FuTgYmqP%2FwMyZqkllH7GcvrcbU0IhXRqstayMaRvkcER4wKFp45w%2FKEeL%2B29nM%2FwmFv92Y3cp%2Bt4P8%2F3JPgyFOj8sH4daf7VIMCBukacQD%2FR&X-Amz-Signature=c4f9c66f066af81b766907b5eba71d387a5c1c9d83d6d50aa7189552707f6d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MZNR5LT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDj3hNdAVLmEmC1A413akv0lvY2wZ7xEYTVaUduPw257AiEAy29Ina3guTP5gcWW5z1PvGnV%2BH%2FPw8elZHscjlT7M2Yq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDEw6UZ5c9I%2FFXpjwSircA%2BGdwf7p8jgiElGuHkN%2FQkUVi59uV7%2FpesEZqJrqxGAZA4XwWiLGgGTInne0bJkZC469Ru%2FzhTFAsH6%2FBtYFZBT%2F5JQtVN%2BBI8f0gy4CgmwXxEKCJ8ip3Y4jSfV1K0ryynnBVx7yT96GGVYg%2FpIwVOGxBbGioy6myWxxxyK3wHWGrAiIsW6q2561QOWbYbF819UB6of1BAla%2F51GC28COrJ%2Fi5OGrJby%2BzePvTcyQb2MPcP8NYFq3pPzxB9SVUPawkXqq9fZiFnIBktgSnkGNY1VjBAAhC7Bgu37E5fiKthbxagPG6k%2B2lAlPlBUA8dk%2F3IoP8OqSmoWSuQt0ji8M6CfPckVWmOo5qNKshdcvSEdarfCngcKV687LGUzUMUj1dFpIw%2FbA6J2X7kSQT4EHORWvHizq4LSC16rpBmtZGchWsxDI9V9s4aLiT1XNeLK3Ze1NFVfrRzHBhu6j1Te55M5l%2FeTYSInf2DvavOdrWReh7g%2BeU9EMoZk4sqm2kxXwGGRXAjCH4hkMxLA5fV%2Bd1xO1JVbqSmuGzu3kZ6CWluQf2skXwPMh1Ht1ZJFqbstOyzHOXfCeG20JkGnCjskpDjqDd%2FYdmeA1OSqhlzf69bj%2F0c4eO08Hdhy4xuMMOy%2FtcAGOqUBzcJ5BqCrDuFGxhXD9ehEYnquaYrP54KCXxm9ZRfAztd9FoBgxt583skRZ9n8Oegxy%2Bvxu4goUANQcg8O6Uvr7at0u80n9jY%2FoYBGv5t7JY%2F8i2RAcb4vk4XECUo5GY9DLJtWivJ5HrHca1PWr58211jS5PlJEZcRlNnKC4LR1Pf2L%2BBldvwO%2FXL3sS9YWJu0%2BreS3guzRlH5IAvoYjOOkHErE0Bx&X-Amz-Signature=33a2a84398a150e2667036875174542cf46458547a4ac6b1239a729980905524&X-Amz-SignedHeaders=host&x-id=GetObject)

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
