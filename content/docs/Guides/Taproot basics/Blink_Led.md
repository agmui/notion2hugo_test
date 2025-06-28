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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6A273O%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQqplR3fLGfKE9EpDSvTTP4CCzQ0vU1bD9QjfyGp5t1AiEAom2WuFGTHM1%2BX0%2FkVAU5FC35LvapzyCsvujP4XVJAQ8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF0%2Ba4ld4tSeLZ7DircAzGOw0hjNvWDewT93Rw%2BT36cNC3lOcLSc5abf0EmfFSZXXwA0KqAeavzEhHj6kOoFn%2BYdmYsqXCix8fkP5YUd1pEkVqK29G73CfZGELwWN6CqXdx8M6I%2Bg8qZGW5XoJUR1iB6ZziIw5rb4BZA44l95mODk3mhk2%2Brq0JpEYlIKUV%2FBR9A9UfSFWskkfB9RXm26WlIbonWZijCii%2F9YmcyPnHBt%2BG9n4bbuD%2FbwaquitIT1%2B0aJ%2FzwOGGXH4E1wz5EKw%2B63QtKTmD4NoEthQsEG58aRNOGQlINW18lYKi9D1lx3uSbp6BmK1lpo61EXKBMJl1PMNSG8aljHUoO2wTXkY5H%2BmgdZ0T7IoX7DWnM878mvWLfc9fZ0z0pkzjedsxHSA8bZvmdWZYg3T%2BX9eEQP5Zx%2FmTJu%2BYF7QPVV2f4JbPNlbEAPSy%2FhzQV159%2BtrEv07MN6r0majggMbcg93nicW%2FQfJH1GVhl%2FQ8Te0EIa%2BZy61Asw20RISxc%2Ffs8yHpZzVTMM67eGsbs89f1NwtgmMZD2sqOE0Mac7DFadEruWRh4mPieYkkEw9VqbYW8NQPy2zlR0tVNFfSz2OMtKQn966BTcnrhKmVV789%2BEPgsEANt3ZREjgUpU5VS3lMNbMgMMGOqUB0g5TeLDKa2fswUiUrN13%2BZeTGsnOCWWuh6nI%2Fi4FjFtUptB9dEv%2BACBOeLjDj%2BbXR5ItAekzRLe7UwzB28lQxBn17OAQEBJmAEGc7nFR56kkmNB%2FBv5Bq4V53ZftMnbLLjCM4kw02nic0F%2FiFEXVI1%2Bkcnh6TQ2ccFqsE%2FEuXcc6TwS5sMNWtVA2xuzAGsYS03tg3JXsR7%2FRtHGtndtj8DJR%2FGm6&X-Amz-Signature=585f7a6b5acb1899c6300a414bf1c328d06dbdea13cb655f43732e542ac6934f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GCAWT37%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyzVzkEusEG439clzQQ23yf12zsibutZ58JgJG56SSrQIhAPXmBI%2Fj%2FiiWx5jXxdIP%2F%2BVnHtnGoEJ%2BL4x42Wp%2Fvu8WKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySTyPgGm63v3ZNn%2Fkq3AOxLmoF42EoTni5wUB7NWBSwchCSobPKsgZ1CjSzN%2B4xo3usxTBZPrk4yZvAxPFlCtO%2BHU69T8vgtkViI9uYBY%2Bn3URzcAR4jRwHeXzCozojxq3OAbR7s62C8w8V8TiEkiY9ciYE%2FYuHA5GUxTaq0CC870vynUJzZ8Ljo064pkQXtQjIdaX%2F1v%2FCJ137v8LoCu5COdma5iaZvWIldhaKlS7%2B65lMkgSBfvC34sLlvpzMiHxwhwTApyGqyqwr6EFODJTY22ioLRyE8xWFeryKuNhQ0ZLvCHUx%2FamQjeOaTrmslvrWhxl7CidiChSuUtg9mhKB9ii09jg7bPlHegjCdL%2FMKFnfi5cTjYpZgU2n%2FEt9TX%2BYfiZ%2FQMi5cUL2WslSW%2BmZklx5GPo%2FtroTAHd9FA6E2zBaHOmw70OKn99HaiZVuzqFgN%2FPe36zuEZ0GKiSawz5jHXaxvZIEFMfTrEZY0vVPnc%2B5Vi2QPjQFhxyMiapkPmTzvBmsyuTnSaPBoI0EJ0vVmijoPlb2Ahy6FCVUAg3BHo6fYNLYbb8W5qyGY4m0JAIg2ptvbS1qWSww9y5O0DLKedIaAIfX5VJn0EHFTcJKu1yUFb9ocKdpXdU2byg8Z%2F8OZH4nJttRJ7PzD7zIDDBjqkAfgvMJ9CTdzlTj1erttSlcOhuoFoJtgYDJ2YyGwMaLNXcaugZfet7VtFrTW%2BGJHUGXqda9ybcCgQSnxB3TD6qnN5ZHjDlStV5IPRx0rE5XRfYCwuH9jnmyX0BcjtCbbw0Twvs0rZBT5MiYNPD5e3V5aKtUjiCrQY7xPFMIHbTlks5ORsAZjqW%2FjVij8Rf15UOOk4u0%2FIiBNCoAH%2F0%2BnOImQLbO12&X-Amz-Signature=7c7801db467ffaf7bc5d3840ea44328302e7beb03a991456b51dad72b922070b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
