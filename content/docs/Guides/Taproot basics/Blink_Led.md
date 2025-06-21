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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUHRYUS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5AMd%2FuhSYZ7awVAWcbYfuqPOQUbWuLC3HUAZnJYehkAiA%2BrOCkORwdSCkTgS8LomLcadjABo2zNYRxPInyGsFZbiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs3P6aPR6KthuGandKtwDgJnc7q7wvUV%2Bni7hqQheN2oOykhwIbcmJjlQf7xejE%2FzAOFHXj77Uvlr2OyWkMFipsc507YlpGa3kSUXStEOXF9%2BWURSj0Hq22z2dNBLCnoBLwSD3y59jasnqDY5HSZQCmu5ymoVtr%2FkNex%2BkVsMJ7LriIfQbFdJvP%2BURDX6Vv8CNrF7Vk5jUEKE9CgWUftGmdYdQCaentjMWu4z%2FmaRSn%2FKezHm6aKP6n04Hkztjb%2BIVPEMYQrf4pYjr1%2FYuKeWYeii7JO9p6fUb212GQvNUAwYro6OjNOyarg5MzZzSlUjxPjAx1xWJS9KitCauIRcbwBuxQpFadSZZZOIzD2Y4eMsnuKvedmjVPIK1r8pMSslVxvU2yFcfQNZkDOnyVYqAIPLq%2FDZOG3r2e7OJXMXJd2z1eMmg6%2FR9N0EryMpYPhHdy7oyWOWvNRwyXWVyzaFPf7MhTHZO%2FI0qK%2BAAUSA6qU1sffWwihkJTiRXkEZsGxtnnLoxvG%2BgRBLQLewJGp4bTJVlW7p0wLRmYdI3a2pmw0hhpePgmA%2FAhIqZAtU16BBp9zTQDcU4%2BfyFMsXzDrTDfeYwInu41%2FX51S8wzv8ly8Ey2gskjrh0ZXJ6CrXmA8Zk%2FEgSI6aZfFrZS0woI%2FbwgY6pgHC36olyPKPZlbedoa5vwXI%2B2L%2Bd6uUMQiTSLY0V0kM%2FWxIavQNkzsoTUg1DLPt1WpNH4qVmPt1APVOn92bhPCBJEwmuYp1kB3AwO7Okb15DdT6O3sA1Z%2B7tez8PLAMzHZDAzjGFKABoOVqjciaRC%2FnmvqH8otkj6iEN91pi5DKyXLGFCbfZvNriA6s9rtrh2dDRrsk%2BS%2FKoxfUat%2FLqvWLRZ2H53jJ&X-Amz-Signature=a6e33ae89188edf3413b631bcdf0b2bd92d08831051a794698f3ee292fa826f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDL5LCRX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVvCHgWAsOFRFqxJ8BvDkZPVQY21tgL%2Bq9HnihUP3vnAIgN6yEY%2FSFdfdeQZxuxjOutQv2uqKiH5iFCIlSwS9pyAIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT6RAZp8f%2Fyse%2Fh%2FyrcAwABLKHv4RjLL98rPZpGqSOqgt8sHIF86QkHhR%2BEV8aVCy1mEhjFjBCcR9KwF441BB19FXDbMzT6%2BKcowXrIchPG7mAgy%2FwQEGiRlg6B0evm4497kMRWose8AErUONr7mDy4usd415cCKQwMYB8AHfHhwD5CN4kYAxMYfzGXlu1VpkDVG9GudNtlbGct6uvvc6lZIQ%2FZycvt9CM3j9a3QiGPxmJ5n3vBUCD7FnOEfk0yjDgz7Zh2j0T0OyduQAMXXj7944RCIUKqNeL9RHZtU%2F4q5jWCW8nP5%2B9soj5qx6aE%2F2iE9pmbdM30b35zrAgiNfScaBLS1Q43u906D6QG7LkSPGpR5FGaTi4sAqEKVey3sdYM4S62G%2F%2FBfeA0%2BzQYIvx8nQoFq%2Bb%2FLig6rAFaQ1pQczXmvi5SFgKVQLw%2BJ0b%2BmL7zSTErIXaPTR%2BMrNzUkkwN0pOvH7V3qHBslKxmIi1f8wB6EzI0%2Fa74dIALSro45OtYA21996BczJeZ%2BwqiRSMLXXQBT3lZ%2BfUKROnNxpn3%2BWSEQBOmaScvQ4%2BCkJ2L3UIcdKKfWy6zTEr3gnlfc0g2VCIXIp5iYhNFpAnJDqqGI8R%2BjbXq8OxLRe1SU7gWPFMRncChrQo5jbfrMIuQ28IGOqUBX91EnLLikg4AjTfvFixiXXbn69Nt6C1Ccjo8pk%2FcT5sAbDpt0WSCKZ2hjcJJzSvZ28rwCWDAPKMJANfmr2HUKr3KCkyNv6BHz8Xr9dmMX3y5LqMxiOgW96687d2ZGABOODCjYJFX9BlJRqyPUKAJ8MOn%2BI1HaR8kugtvQibwuK%2BS36FWBFxpw7gBliwP2TShKQy%2BlFF4k%2FvT2xSOhc5UzI7vpFXO&X-Amz-Signature=25dd302d31243dc707dafd406cafa7abccfc5900b4280805ec1bd6846e48a3df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
