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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTSZZJPT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDxpUmehXnj5ZGT5s%2B1CXdgqH6JOAJoZoug%2FgjH2B600gIhAI12l%2Fcr97Uslvpe%2BC4yqQXXoI8JbD0DT%2FGAbZSRQenbKv8DCGgQABoMNjM3NDIzMTgzODA1IgygUcsaUM0KFS5SIIsq3APxbreO%2Bm42te0JE2RKEaedM84uKAazo4o624G7BUKvCzORkN7nw%2Bc2kfcYxV%2F8feLJKf9qGY18srwxvR0Yk1v5C2neih8BzwWHcWX%2BjtgwfHfCQA96fbqefq%2BmNWfgVg5iZlDQcqx2upc%2Fjgzsu8boq4EnWV52EvNgXpf0QOlZ%2BrsVku1ZMYH%2FvpaFFCr4C9kkvJ4Nn0JXJNqQGwxUbjE%2BDbjI7t3S3RZxBEmonlpZ3Nd2CEQwm0z2Q1%2FxyQwpqrqB%2FW4bsFgfcI%2BmxA8gpbZGm6jRQsCK%2BKNPEDJfEDwcBfXPcMA%2Fb%2BYmfkrTsk4akzNkCaLxLj5avFMZ2whZ7%2FnLGrUEgaZJep9sYizQ8vqpjRNoOnkuwifcHElKaHKT%2BehkWy9uUcXY5XtEca%2FxIhhaaYwmRMrblfHG88203CZuinR7WnWHJWaRI0PwX%2BITn%2Bqnz2LpKKWkfzFifaHPlF8S3folUaXOVKJALTPr9q2k5SIbGFhYdOUp%2B1zRpICTnGkE4ZFGix9A7XlKJEEKndWDw%2BDNezwbyB3rbqcxykihpGIWfgQhp0PEN581hZ%2BXlx54LJ%2BZ3B%2BMkoD3LvQQ6I%2FheWUCwk%2FgIPgBj2p%2BdWorHgZgEwVG6x8%2FY8KEeDCjwpXEBjqkAYy%2FsrT02ClaxHFjllWbJ45Fr4A33aHx6aq258C%2BdxezI460EFqkEQuQy%2FXq%2BllhZCaEAwGIo%2F0S0R9qttfEUmvuym3lPZx4nRo8x5vokSYjpGiZB0SDLYcbm%2F0oufsoCtguQPX41Vgxj0eSmAFQERbB5QVANbsVUrY34WaQlS7drJpJSSOOg2ry6upxZV59eYQ%2FSR9GQRty4PJWAhW%2B65mnLvVf&X-Amz-Signature=8bb131ce371fc6a04fe8849669e250459a29bf39337a00548877631be3210393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVLNR7SW%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDWHvo8C15wlwAmvclM9NbW3nl0wTnM1furUMNAZLbQ%2BgIhALfZIXankSoYJBTTdLLmRAxwqfCaSU2e0OWGCAfigogSKv8DCGgQABoMNjM3NDIzMTgzODA1Igx4FtxHSh0KPZKw%2FR4q3AP4bFTUNygveeHsmXe%2BLyAfpEPRLK62nGdELEj4UmkWXCpW7G5NVNIqhbNrK1zSjhoJGN4TnPsd3JYn1LXUon8QyyVmTzKuoRFBBzdeN%2FUR18dXqDOJO6b6jtos8xA0vOJW4Wb32mllNrMZomNlM5cCJLLhEdmP0TDVXQi8bFO6457QjVDtPj05J9RltqFIN684%2BMAoxRKTbaY35yj8uAiBh%2F%2BQVBL0yREQ%2FdAChytoo7Xnb6P1Fo9IIP73gHfbk1SJdTZTi%2BnAECt2aRhuzU31rzbAFgo6mpoMgCKP09rURp3zBYiBlBlPtUJvPE3sQeFXEvHRnQmmg2oTM8cfq7qjniAnkxlV9LQA%2Bzdl6bqmM5O3T7w5KYcStVAL%2B6EZrBjI1g0Iq9FQxp%2FHXmjy8V53dBWiQ9ddtAQcZMyCy1%2FlRI36gLhguZuGWHkWh1psPWYs162toOF%2FHN%2Bz1IJmIiFhhWF29LhAPdUOZaGOTrCDfaXFCcMuKFv0AHZ12OENQg18%2BjSgvOoQGOR7Go%2Bb8R64OY1whuD2z620DS4c3o3ovrJUaNXHn2CdMiEH4946x9OPwSeu%2BRvBnEOeD0mlyfeOx9bZUZBNCvH822HiKVYDzQiI01awLy5TekspcTCtwpXEBjqkAb3nL6%2BXF1Jv%2B%2FagSfWlJOm7i1bB%2FU2gpW3fMbSnIDDLJudC9MQ3v68Qb09po8aJujMG%2BfaRley6y87fgVKSQyLjJi6yZfzz8%2F84p938LpcQChLVDrbDsJbnzZQcAm%2FiNTZ3v3RY0e%2BAD3u%2B088AqBy94lrUbsIGtdnFW0kdYovh4a6C%2BH1nX8YwdaYV6ELWiXOwIkDhtFcUQia58h1ck1YxWpiw&X-Amz-Signature=7abe9581b11647932dfe2c434178053c88c763ad8803f22f36774488ba16fb40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
