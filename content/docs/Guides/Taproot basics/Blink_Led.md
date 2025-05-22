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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVV7ZC5T%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDwYmBwB1cUCce%2B6U6tXJQ3vDmc0DMZ49tT7NN%2FB9oIUgIgNrO7EJiHyIP%2F9CXmpD8RQjzq%2FkkRCKeomdrhL45buQcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvAQ64SDF%2F8dAVkQSrcA1eAdI4KgttoLkP60tPgjJia3Hz1kvSokH%2FPKUPfj3DqfjYLwpb4EwS8YN7iqSyPmF6djqAgpoPQloIyrZf3ZaC0zK6r4wfKXdUGY6LQQklwXRfr05BOs6FP2AE58YX8sp9DQPqZPtXr8kSXWM0U6ccZ6df54AE9BNmtTpQ20naCZJ2aRC021nYQ6%2Bgm7rDBWICzpa%2B8rDjgLFQ7kJlkAYA2spwZ8qTFxdP0H1zgJOCHckO3vJ8KtMJnXNzyLVjhuLaXNJdA1%2BoUPaLevCJn1O7acgOe9Cj90jA98WZbtzSjNmO%2FWpAGYDv5Vesv%2Bru%2BnRZRHb2hxvd1hx9ekWaQsmTeVLih99b8iEH75swV57FJmyZ%2BcMzSjQozwjZJUa9MWtX1Z5deRdcmd0j17a1cFiPxqSMJRxA%2B0xIACnKBC6H1tt9Lwg%2BOTpku%2FhHfWZtbKfXAsHIsCMqpAHsQz9Z3Lw4GDIKeaNcBrFN9Wdj%2BYT206xsNksR8D3Y%2BgykMI4HA0qOulidNBKNZSF%2BHWybNvv%2Bte0mYL0zBKB7i%2BxtIZO5jFf12su0%2FCQvcxFxC9Ew8mF4zZrM%2FEjXtsTBEbSKvckgDS5IuxEJ9TvazDf8W3kHYW%2BEIafwGOpvCNmLlMPGTusEGOqUBLt1Di6tubiI9hgz422mAxYXDNEptYzXkWICf9qWOSJqn%2FiAVjPdC1y%2BJjfZ%2F%2BAxJVvjs6%2BO4S9aJGRAlyqRwuo5J07ht5Vy4sRaFFMgL0%2F%2FFUQHKanra6ngE1Rw8EF2Vfobi8%2FJiEbcpaFSgH223lYG9jroBUdPpPx7Y1flL58deRf5KHwcOSC0ofpAWIvp2%2F552AxR1caWcJeMUzoASkuv9TU8D&X-Amz-Signature=fd22f7352976d24680940e0659c9ac4b2687d2f3bc91e222cb923bfd495e259b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3AXBG2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDqn5Y7Wt8zKSk7IIcoGrDYcMSj6LTwrOORMzC0dnp%2BQwIgSIZLFUXklFXO98VoCRgD48VWresa9br4OQn3ri9N%2BY0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvExZ3oBq0DasaU8SrcA5NWtWMGpbvtyyZqLbggLz7%2BbOtytbkysQoEPPxXLs3nKszwEieMhDQxYas2tzU1Y4ESOffPHNq3Bbb8k0kxOfCT%2BiPjbXLda7X3ZerliAd5i8lgBdEvVv9TcUcQGRmdNM0QyWV4eACSSALAdW0ndyeb5ZBsw155DntykP72j2zSqTLzD%2FwW13lTmRRW26rIEVCLvAuYFUWYA6v5JNypSJyuiS25HxBQ%2Fnp0lgcXbH2enIKqxwfdZ3ZTlYEporWZVMLS1kmAFhLRHJnonsfD3XGl%2FuWXORNommrHoiMJwRCrRBHVPyAdzeItUB56gt0DCGwflYu5GsQcxe6QBq%2F2clwWyh0k%2FCZepn2ItMsA4Os2U2vImAY3aUXALQP8L7Gf9fhZkVKvVPLUqzyA91OUvIVfMIZzWs9FM9M0Qj7GWOom%2FY1XAHn1OroPCnbTfkTNFEzNDED8tA%2FBSbrjTo8fK6YnjjbrCSXzjpNZrhkDfgAxZrVwyq3maUe3BVd28cDMNvYfS0hDjLUuhhRjzjiUO4ZgkVz8aQfU%2FItVdgnBfagKQoViumpbjlw9sof2kVC5vSAFJUcdvmuNH0PFVXZPuhGQ6Q7MptDr7%2B60VzK4TnOmKMLRCqGvguh%2FTr%2FNMLmUusEGOqUBJVOagSrFPVfx9e%2FdJnxvA6rDP%2Bfd72yPwyTPZJtL4W7x%2F3NhyDwRbNK45e%2B%2Bx%2BjJ5LVMFAbOxVa1V1t9xPZ2qvIhS31yFZzeXl%2F6MSgyCir7Vyhxo4gK7ERtGY9Xb8%2BRHqul6Pgn23N3XTN6Sg0Nx6i2nux8UuEABSngRNm96M5cbiY%2F2lmLIfqB2%2FzODbq4S2wtmnA33bw5wzYz9uv6zdmAfEcf&X-Amz-Signature=93bd27e74a67385658b773bcaed2fe18e8abe247396165860b3d9c6a062885c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
