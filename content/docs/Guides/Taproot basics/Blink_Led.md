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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGAKTEB3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH5T3St3k2EKRTjlDtvICrAYb8cJ3aq0%2FIix0rSSFydAiBS1T1bkwBekmBYtoLmYkZmGqNnKlb6jxZxTZ5hE7VyEyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVcs44lE3n4JpX%2BtuKtwDyGcVstpUwrqAooWGWGfhmQRP%2BImXWSc7%2FkzRabyk6iv27ynCGi4lPXjsj5G1JeYP3akgnZNHcYRukJb2PN9Kjwidh9K61miN6esPpxbtOpVkcrzao68JI1jtId6iYbv3Gns0BtuvK7thLS3UkuxBUDz48KQkO4qdrsxyy1YI5lGS8%2B0B6voPQYB2wfh7xhrUQndIlLRHNXALh%2F6HjhnXgJMgkNfB9Gt%2BJPYPzNVKEC%2FpYmRrwcJQzftyqEfG%2F1evjUJkRro8SmkA6ANao4%2Byqyyb%2Bf9PcEe2G%2FbbZiLMmpFUod4asqu5fEEPCZd1KbNFnm1iDnJU1NY%2FOiQq2dYLBjUo3mVZmYXQnECI9S9V4g8ezFkRG6ZN%2BZ%2FXyFzgn5bBO9YYRRhN4CwBG9pwZN3rdDOaR%2BuxvLKYFx7fS2wWEw%2FDiVlrXUFZFMlUS%2Fm9dPizlZZhXjjb5GtAYm%2FLujrMHgEMm3raCW%2FperGOgsOXwTRJ37FIhcwuByxyYeNVRseFc2OoE0oFPXfujeUv7KJsir0Gwe2drAMQ6fzAEmPkFW6s7SUqhMWD7lQdb8pdYcfFjc2kTtdxg7kEoXEkTx41g5%2FKWbioSlXBs%2FbvK6Eos7Wmix0G7RsD80sOYRswtcnzvAY6pgFCLxgTXLYoMDm8yeK64UX8knTC9LI%2BCG3N4M0MQ%2BDDn6LUIqOOfMzZ9sdwz2LMpniIBxPw4d8Mb8RN4BQbZ5fKIOKsaw0ypvLqCaIvPcNQPnYguylAS%2BGAet%2Bkw06hMCucwDShjJWRstTOke1nLqsips7ZpyZGJihE5h7cXxJ0MmcgE%2BmUCg4bL8trY94mPz6285sN%2BG1KfEwBOWM9nypfw3NFHLvs&X-Amz-Signature=e7afca83e9cd65f0b33a5b0ed0ccce3dbadca43fddf305d82113941539ae96fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJULGB3T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvfra1bkBJosxUk%2BP7Bx7NxNkP5Hk7kIuxO%2FDqCwj63wIgU21ExgbcchrZesxQd0xZu5T%2B7mdf3TGB7ZehqS3pVVwqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAqemkry%2BPZtkrCIircA7kLRCb%2F4t%2FIR89otQtS2DlKeC%2BaTcIyhNgf7XC2eLalWrRpqMEquu8wL3EjolPebJ3kh7eXcjZ11ruXE7TMf6UIe3UQUFmdRIx6dIMVnDOZpNKB0maeEWPWo8AxRSYyd24M97LdXDJnoIavBQ6rTpD3e7n432jR2aT1bDpkeJFcBBL2E90Zp6Yw9Vk02YOAf9ZLPyyuIEeenSxyOR%2F5kTsHxIb1l1CwXxhuEsfttWGmZTHfzImKxaUfsPMPQrbMedvTOUZmD%2FPycBn7VtWFdAcUc41JZ2eMCTJ0siiWBAP2ggNMhGmIXCG7jBfalx3KtypZcVGhQT%2FzRbVr%2BSh4q5RUcEhxCSaYMl2CG4v%2Ba%2FRzjO%2B9rYxEZacclg5A1%2FgX3o1VEN12F%2BKvFOAWy6rGCOg7mb7eeEMOZFbjH26oOWK9IoNkCAflJb%2B5oWV0R4swZBP5tpXTpUDxdbA59buCHuWz279KnhZxCW565MLGqdafP4ktqYcjvHpbM9kix%2BwPraePsmzjVqjTIo5Pi0b5zqhXgLFx1iM939wjj6RSQcXLxV5tK0Nb4MK6E7CGelTQqHnQ2YoGZWwYVxWcUn1gAi0k7AsHjLKHg70TXaMPUg4rH06BuI%2BCxBOIZJglMIjK87wGOqUBAsOZxRG6vzZ4rU%2Fd8FvDwn2l8TV%2BM2OyUGUXpCP0lvlH2D%2Fjh4zhl5duM80mqzUL%2B2J2gqE4wgSocsKHIB8Smcjo56ZRu%2FVCfzXy5IU%2BurSQTG%2BW%2FAD8WFP8PgPhG%2BL0Z6dt86M4svplSwihzCYs0ppu2nK2jHQcjvArhyVGSl%2FdPRFlKZKWZzu%2BNCEpZqsGVEYuHwOb12gFOdyDbb%2FM0nU4PmCU&X-Amz-Signature=62b3bc1fb494eb75c41a6d940c5d965b65e92f518a20ebabb0e98919f0dca4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
