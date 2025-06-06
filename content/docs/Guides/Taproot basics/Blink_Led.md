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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674N4MCW5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICf1FJHRv1i3Av%2BrFoWFkCEDyF9x64CoEGqDxrPNgfmaAiEA9p1xDkF7mjIW0gaxpRytxy%2Fs%2Fy7n9tsjjvyjENkClOIq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHwZx%2FLAg3%2F8f9PWPircA3juutLtax40P%2FJaU84uiIroTbtmDPBJCbCkSm4hdXCHwdH6c0HyDA2kgej9qOXPA5P6kQTZCA8aFKfee6V%2BX9e0eqOEsaEq8KJwzPAbWNpo%2Fs7evuWHVl1ma4LT34YITnsjAfoYeVYEaFZhjewXwf3I8G7A67dOLqkcjpE3PDoHNLceB1jHJKh%2BzYffIuDKvQXrf4lihHsGfwQfTBXBo5jMoCgYEi1cBcNzTPssAJ9bTKbOnbWg%2BdCw61OjAb5J0NhhQc44B0eIz5uZFHVfVfx49Zxj7x%2FQWMvb%2F0j0G7icXgqTMSmWcoZoE%2BR32YYWdKOdtS5g1SZQukggHU4B3l0Wnv%2FFC1%2BP%2BT%2B2HVvQu5aKQHMdjYwG92bg5rIOCic7WG7yhWwXMk0VZ%2BFCNv7vY4calbmXvkhLuGCpvYDTC39gAiaf29GHzSsQ1el2QuhIwYSd5CSh4Jbc6epBCfGjZxgM7szS1EoVa1lG7PHTczBCR4ETHpLOvSW4lPJYL0Xhlo259EMFC%2FmfRup1GHXiCaerRHticZlgu4tKzEdqPY6D4h%2FZgYji16gYGvw3suViZC1pIZvBTlCFcPmRAZliwFcVIBtO5oAf%2FQBwvJNiKZRBzVmxdeEfM1%2F2%2B8CMMMXXjMIGOqUBPqeSiXQPv1tkIZnd7aKZokYxmQ3E4zHMyTKfEFUr0tBJbYWlVNxqxgPwLp1SOinTtBS0g8hOtXTkdnW%2FWIwdi9AdAvETUHKQ7D1jpxbwhHe7UJT2vbKPFS6qQleMhPAl6vzy26osJ6sp2jtMN731U8HIUG1UUDrOcw96IPnNf5KISVfAvVQgP2s99tPgIi2qBBjZ%2BhvFIA%2FW%2Fw0JbSpyix9f1Mxn&X-Amz-Signature=15bd4281c13042721a6d755034d9f275a32fdd29f83f15f66222195193d6ee68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKY5TSB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzRPHp7u%2FqS8gecI41l4vFqwhEFxSuaN6QToh3yhm6IAiEAkhZDB3bQ%2FTyEpj1ffdTd4mihh3BDhet1K%2FALmy4EVcsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDM1fkv2OyBl%2Bae0ygyrcA%2BYAAsgaP18PxXGz%2Bt5sH%2FC0B1K7wNzJjAt4vWYeMJ1qO1PTZzTk8NOPjtXdlRJg%2Bhp1QQpl2ikHMTr3j%2Bv%2BYuGDhDlbnV%2BQP08oVzriKtvLap186Q5uTBEVv2fY3udYpf2AKc%2F%2FStMKfKTONwSV6dDpdlF1BNUn%2FTvKDfrnANKDQVjeV1Hsw9gCFCJehaIKxC04ItHFkw3v4HTEA7Cam7hlNpz6VhJ4jX0XHu%2BtkGMDk2EbOKTJD7PIrOKQNkQMW1fnqJkBSvH9AlCrZSKoiHzuOoYZ2q468cz0ok8DfbdJ0rDimJX360WD997fNa%2FGD2VYC3QU%2FGJML4YISp%2FwkSpPKaKca7mirbb8wyf8V4wd6ugbvmBaKhzpuK4%2F65uL1QK1goT6cuE1R9RUa25PxoSreODrgJbicICgHEvOnGT7%2FfNy7JiYHJKRXXlYR%2Bk1H5wZWQeyoxB42VIa7auuzYVKib1kvenmVhV0UX9TEcnNY9pR%2FD5%2BXg9PqZgyhUkilUkr2%2BPazQwx%2FKfW%2BWAV2NaD6R9S0bs9SO0lpEijyZZfhJiSWeD9oYbiNnuMcZJyl3UYLw3l9Hey5TERUqmf6aqwaIaGibL0y%2B4CvLQ1ZEf4ArcHUqCo8gLw%2BQmTMKnWjMIGOqUBlNFq2iqRLeYjajDyZSNbRd9PAIFB78Vrwud1iAchLrhX7choeYlGA548dbLqLtnX7wXX4g%2BxxVEiauyGHx2CEjTw%2BC5As56zP%2BdL3pBeoWtZHwpxkUnBcZzR0OhJOB7gE1EUx8f%2FM3BI4HK8Jrzze6rupKUV%2B63b6AEPUvZtI%2FTQ0VGCZGzndKxZxJwRqQ2aLTOcCtFnSDR4WUb2UqQbUW6qdJ5N&X-Amz-Signature=ad92083d0f76d66349ed6305f71172b5440ec43d7e3c1533e30e3016cadfb3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
