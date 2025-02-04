---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666APJXF32%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICB1w4XRqnAJthhnP20c6Zdk2DRNNm%2FHjERNvcjum0t2AiEAyuNPiazNo%2FInqDu0Nz4nodAoViI5udg0dE1PpMR0RIkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHG2lOJW7yvJoQyN8CrcA6gXS4kuXO5mT%2B7v2ajoCi%2BuR5qDT1hZQz7KyUUSjTh14elomdStg36GtcpjHjP4QeH7CCz4TeZ0dVBJ57gL4o6Lfr2IfF2Bf6cpsf2aH3fUnABbkms6s2oOVUKXOUN5tS9hxy4oeGQyOjhgUi1XLa4OvL%2FXK2IKXfr1mJL9wPB%2FY3uKG51%2BDHa%2FIUTOpT06ChwD6FhdpM1s0pfryQIKhznApg1AVBO8gXOIKdE9zXUuy2BB63gjSWIZC5zznuT2Cm2nWmTgYn8vgbkQbXM%2BLroCeR1MAVTUAUtSL9IohawJqt4vSgoCLXxKPW8CC%2BDyAF8k5wQCc0n0ubkDqcV9UYvQtfilubquz4h0aBRw6kEvyS4rMeCK6qJprEwHEGalJ5o%2FsGdgxfCFEHk7PCKSOhoOTVoZz6i40KkptZ%2FGbxvfqzi9wFitS9j%2BbQG2wb3twMG1Hgl6o9LMR9oQ2XN90GMPFOg3yBr%2B07d%2Bia82SZyfhycX%2Fy7UK2%2BOK7YpX3yHuaXcW3U5huXNDViKO0z6os9exFEfBX%2FPYonlny5CcH7YEprjR5%2BHtGYrZQN7mmXfNCp8l6rY0Wf7Qt0TsQHO6sAwqaYcwb83jPzpYpjqiiTFlCEB%2B5Ltq%2F4xX7pmMKeWir0GOqUBWtwazEdIrNJfYHSYxuddrrsvZKoIrpdXB71%2Fb7LKNM%2F%2F1oq6YHVINjPXJBMCRqFYnTTIxiQuElRH2nEUSuvhAv1SA9JYxHUy5LEZYoY%2BW%2FZgL06lZjV4GuWYp0mKGFVB4svSVDUzBd1PCmgqs9e7%2BIt6HI8bxlXwvosX3GD8lYiIVrdIYiMv59Vo%2FyRUvnVP4ITlku5nCkCOCE1apCuJYNSJbGVh&X-Amz-Signature=087d344eaa6f79e96d4619685011cf44306d530849401c712721abd753b126c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNVWOIE6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIA0tqIfsP8JTy88LersJvJh4JRP3nWVnvlhdqk1OdguzAiEA31zfK47To0UW4BeyoUyZ%2BcJLUKd7AWOAoqLrsSfTUzsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHA%2FFRCbOA2ICYLLiSrcA1J2LUXy6CWr8m1wONsSsV12DwueJFSxgmcEUd03Q4eY9WzSlUKPUrwqt4R4fgqRUfzKLiyYsKGsNdhKMLM3s9uSzSkUvNvj6pCtiF4QZl5GBWhhCB3S2EoaBC%2FrsN6uJ1DHIF0g1xHDNRCvUBUdNwSCMQ7beksoOLGfyKtA25n%2FBTU5qf1Xjaa2lKXPjFkTXqVpicVPywOOUiCsccs0qXwua7slnsIwt6Lk9oMnOB9LOFVha6sYYKT%2BBVWVp3qUHRqGszSvOsNeeDyWkRc9YD1gBx57s3sqR%2F7ZRRk5wxhpEakW%2FaySJUUYzG1xh40G7joAIccxOA6sNJ1MOAzZDMcxmLDatwiWzatZu6u81C8n66d7CVx9BFO40jv1pszvPO7YruMWNHgrJAA00GTsBt1DyEknSOJCjFNF1vACk8Z1aqdMTBX4Riu5sxwlCzlIBkrJYbXUDLsUxAsd%2BhaxKVguMwxdxq%2FhGcF1y60Qlz0MjkXgik0X20GwruVw%2BYlrRtAOJxicnsjBdEw2OyoaJ3GPER%2BgKSD%2BPFwjHXSjUmw0kmCQo%2BljBaMneNS9pHa3ofkV86NCNANwuPb5b058474GgJErJs5MZU9CYW2YiZKITvaXV2mjmbj7EOjLMKSVir0GOqUBngTxp4bB65QbYmK8q3FTWkrH43%2FkncfuPc5hP3Wa9%2FMJrldjYzI4lCtGWldOB1nMeUZxGGalQLmKHwhRamqIo%2FXf6BVsr4u8seeYISeGUbrY9%2BRmnTfFOAB9rTtnj%2BzKzrxGmQmpwrA986e9kutaLRYPMJTdruPS0yLeIohDry6cgjDmfEK26IvMHa8suCYuWwiw4USFB74e97DvgCqMpSD47wt%2F&X-Amz-Signature=3dd744cc5d565581edc09dd4519515a7b0bbecf94abcf38cdaa87beed037f04a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
