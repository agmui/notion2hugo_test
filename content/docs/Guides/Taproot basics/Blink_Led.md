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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT3ZWPCD%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC0CC5q4Fuba2PKwnah18AtWdmueyE9QhHO7eoBEq2%2FAiEA4Ig%2FseCkeyokKcja8HWHl5dLLEak8EqDJ7MhpRX6Y54q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPo55%2BsFciaS7UV5FyrcA0HR%2Ff8sY1IoY1ZwqpjeNrdwLH6176V3TVF9tFUskrL%2B4ScWjBatYPpG3y46e9qPffWo4nN%2BsubP0Dk45bDuXTxzsh7ax4bmC%2FHkVmAEoVV0zkCx4oShWnLFuxsR3DWbNGaxfxQKdXO5yRpSQv4TYPYZ1osDKNs4o20aY7joeuzhYovTLrlHPVP1yqWuNclNuoGlAKKUsQcs2TEv78oYKJ8N%2FMzboqKk6Cs%2B07nxcxZ3S9Y1%2FZ%2BU2f1pBwNkatG8PLPT3wnwBu2nJguT4%2B8c7%2Bry3vk%2FvT74mlOjUNOtmG1vehC5DOPJgEUB8JvDOmAujSh9NR8R2BNmWkmn5ex1hiWEFq7d52nF1SJkJdyR1BLYS03LRBDP3XAWkqGLGrPQavGBBYr7NK%2BOgOy0H%2Fsxs62LpEmRKL%2FUx%2F%2FYu27OMAYu1%2F187sKgUMQ6YudbTIKCTDQ6MJPp8tOA7SRoqvRWhJegc%2FEU2wq5v6RC2B116GruhOj5VbejcHRU8qwgPVVBBWrgeBySwQx7%2B2Bn6LfwaK3xxMB7dGqScY8FRePzN4yZaHRBqZiB8mAq1Xih%2Bn427dBBHVXzkUiMqbyQdcBwSqRn1VeRQfciDXjbx%2FrbHOsUrRxihNDHbPulGnjiMKmUlb8GOqUBxXRUeS1W%2BvpXlE7KJXSV%2BeRa3oKlE0SUIne91xql2RxkwRvVY7G5hpcxRWHQI9OxxtILzhEM7nAYketh0d%2Fvb9PARmeUCJxqZBUJXrO3NvEhjY7NbS9Gg%2B4sb90OEOuor6FeI7T9pVfpaNbMWWXqEumAEpFvz38Rd8NdYfnnSXQ50K%2B6HO%2FJ%2BegO5JdY9jbfjN2iB1eiw3ou60PUljo2kLhsTPLH&X-Amz-Signature=7493eb5c315f6ed6ceb6b797b767bb565ed517caf3bea839863a035cceac4e87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOXN3DIZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ1E%2BEMHeh%2BZoTs%2FRzr2a5LlnHd36Ob666VyF%2FmRXG6AiBrwKpaBIc5BPmfw%2FewVjB%2FSKhhINtLAMymN%2F8kWpedMyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMcSCoI1yE2ZaYt9v1KtwD2CcaoO10m75lIMB4JvKalCTT1rSQSm1gndHeVjULoEcko0BgXh2EsbBFdXpqK3sFRVs3DkIiBECw4PFdaXmEtxqQCVnKGTgvfFENlx2CE7YVaeBBaHH5UVqJ9ORZziV7vQph9E4LyCmATT0rJkEeMZa9aaMM%2BGoq2uQ5xnGLZ13FnbHPfML0TUdVepSd0A703urPSbmiXOz62Lu7Dn4IaQ28qPIgPRLG%2BiRkR5ldZXJn3%2FzEn0iHEM%2BjALs1gaH4UmzKl9HXlYRB3vNVHnQf36ojhU48J4SsYFbrsn13NvsHP0jt90P5eCmMU%2BhK0V%2F%2B2%2F74cRFqcfiPsjfFFJNPz3Q3vz%2Bokr2GEJlNteVuKlIpkP5hAFQM5dx7QXVNih9d2DuDveJsQiZFbeRrND6F7uQSC5v9MHKgqVoZ%2FHCdcgp0elCKCBocovof%2F8km%2F329LsogScJul1g6plAjT3i6MliVcfz8xa%2BDkyQJxlhvF2j25HYhCu%2FlktpXUTzXvxcro0T%2BiW1ciMC01zx4ZgUhcjHLDfs%2BDFPZannGkrmE78WUvwd7X3zOeyH0R3uMonHaU%2F6i9BGMkKKb%2BEiTARHRuuv69q6IYjXwi%2BgeeSx4rMVYI44k8t5AqgrbWA0wg5WVvwY6pgFp7Hsfj4hlK7mMOhPd1NIJm8NmXCju5NazSUOwqfC4O1uSZx9vn%2FFzMwtUfQHZU%2F4aLse4tqiDIIzOxsLdHbBfYohfPQoX2SRZifTRfhDz3QWfjyMUjTfutg%2BgFDWo5hZF5VJr6vd%2F2XWy9MKMofdkJaThZOUKvpVzYP0LiC84fc5JIXBEtf4OPIuCjgA%2F01gS9cbj%2BYTv6aEII81oJIr1G5Sm0X78&X-Amz-Signature=f775458abca698e85dcc0c0227f654d2e6f2b452a1f39e15e50fe56bacda7793&X-Amz-SignedHeaders=host&x-id=GetObject)

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
