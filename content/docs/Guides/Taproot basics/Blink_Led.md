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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZZM6YC%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDpNCjG10rY6stadfb3Uv95bCNYGf4L1ZKE9TTxG4t57QIhANs995k2b%2BKr%2BmSbXXLS9L2em5GgxFnadZzcFNJxQTALKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxqXdM%2BAFHn7D2S%2Fkq3ANwG3pwYnLPxsQBITcPXP%2FMRuAfD%2Bej5Xg9lzcwrBFIYD%2BYSZVHPPHi%2F6gGg%2F2vMykSsixUPaA7CX8K9nBWtKBSXXf%2BtwuE%2B2yc3U0Kt19JuYV%2FDAw4OpwVOrcAeUjD1%2B8bN5ICtjPi5QCnhx%2BLctQIDZWmkcSnIJ9lARFyxIUzuEIrvyOxVNTBNTJbNL%2F4tS%2F%2FbALm6NuUHTXuuIP%2BJfZKEpKpKNnxH3e3ncAVTZizFRXa0fGPd1tLCbFil1Byke6gZzuAvkRRLQolSm3qg0BsCkyiTq1wSJJ7UcqndLYHQO8rQ8xsUZsuO3EBE%2BNNaycV2oJM84shRdPIBrMO00nmyQIwrUBZttxME8kcwc%2BKQgB2qBzJByVtrvmrEWgXty99p%2BkLdeIYs5ZTuyDDcwt%2BUVd1GQg9JJq4NB7a0DmfkD4r%2FFklWZ6utrkxkcJi6BqlMaMbVcbVy33HJHyiN04tFvwFVbVqdEEvoqLBDp%2BbDFX2S%2B037Jk%2BqId6NOOicuWVJ%2BhkZVrrhqTiX%2BTLmW5JWtU2U2lguauxzN52SUIuMPcMz9pq%2BKAbvD2HQGMggfiTpM6oLxLdLAWlOZUtsS8U273HlJdXIXXRAm7ofurwgrR7fNdNx%2FVu0R4NpzC0gLjGBjqkAfh%2BJB4QQsji2qtSTVoHh1Kd2j%2Bt%2F09XJAu6INW5pVrw8aqdNCgjAUDDBp%2FHeNYCIliDAwRI72bokLuQ7VQwerHsDt6teUpuYyHUvp9UHHg%2FPRA8cE3QDntZ7jhg8ca0uNbJQXzGGdHVqGMMKmQzD%2Bf9f6HVGCeB2XP%2B0wz6%2FGa9RC5EKxMjnX3BXb7D9fufVxXN5Mj%2BYw02EqRZo1b%2B4CKwouSz&X-Amz-Signature=436bdade7d672310d3ba16439b88f1728c9612cd7a887c7be2673e36678bff59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y64K24H2%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD8OYPms%2BYOJFbIan6uG61Ac%2BvBABP7rCidZ%2FEKy0PhNAIgCHIbwck6%2BY9tMaNxh4Xtf1kyacsL%2BRPInzdyk5N4HN0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxxJu4iTEtU%2BBWe%2FircA%2FYwba6rofeIj8ynLQHiMpur5JrRcsTSARzdokKWNrMi1Kqub1Vb71L3qgiCKKe49DBJgt9rfup0lSaCuBxG7Xs1M9uonzNAOYo34Rc1rF3N13%2FHKi%2BQkYLZQKRg0SX9L3dm9tXpeZCsuYuFIzIW8O%2BekgyoJTGWjIqjGqxGUOpPvu4Q1epnyWJUKuoeDIRe4BKSAYx%2FAcoLkLNTX1l%2BFGcaec79WHogrt2eeUI%2FEuCm9ghAxbrYo0r4DIR0PFN1HewamKQqWASd88rbrocgTjDxB3fxf6PTRIdJXlDL07BwWmcTHR6g6iYEvhroqNczTYUcENtHGveaH8bbjb6wkLGfqyJgTdqt84yxDv5XD8sIHQe50onZzodN4gvxSykyy%2Fgnp4cDS0mGdQbskAVyf36WSCJVGroUWxduxBEgNqSlqrJjnbSrudx3zODqIlBjJ3jJHjrv859OwHZLo8YLhp0KNAy8VFG50DwoZ1WTKOYBHKXRAgizOrj84ManNyi8ClF%2B20ab6Xmyb%2FNrYhdFmgWz04DHFrXMenHPgCtLv8sCFhfkJ2QsAb0jIkV5WGA9adwvaUFnpzKaby67EDrL%2FGFGyWXbiRCdrzk3PLjUr2QGCbpdWekez5yLz7b1MMv%2Ft8YGOqUBV7zMHWjXzNrnBC8tuo64WOk3AbKkUHv1MC%2F9yntEN8qEIfpSAV5VNxO3PEPh1Pxjla0hQFVRjK1N16P7DsZRw5tjhVp%2F5ma5sXO7Hpei8vX5SgTBupgQHC0F16fJhH2kByZkyX1Jc5KR8KlCO3RK6uoWJ7R%2ByFbGlbLi1GE6znQm7qnj7RheP%2FDCjVAcgoMY1JLv%2FwVDto5XaNbcOkurFKqomGAp&X-Amz-Signature=cb89f36af7e60a5930bd801d5c38d09a5ecc6c9fb891496ab3791e57b4b4c7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
