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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662HCIDZR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBchruqM2JwC90lDMLZWPM9uMB1OyfVvefg0I2J%2BLbP2AiEA3zJHLWDHck%2FODJbX7UtX7tE8KQmjpWOZwG%2FZkI6%2B%2Bj0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAafr22bBklx0Xj0gircA90VojzuyzsB%2FGyY4fhSeRbKCAdwjX%2F82vvMTzn9auFqXRsKWUTuVYaX1s8Q05qiiJBIYxH17FS25dyyHLrv7a%2BNVbcakN1IF59sSWJgftyN3ZtSq4qwvV4X8niaZESzK%2FmJ6OKBWy1g90GmxSnDT3gdkoO%2Fu6DwzBjCvAM3is7Pigi0aylZsoQmJiINq7MBaGhNgpZ0bQ7G6FY6m51fbsTnIYsYMylZkoYevT95SaS7unB0KEZ%2BHK7mE0youcvKm68Ytx9H2yGO9Hzs2iS1EJW1D9zwIco9Y0%2FEDfPkjhrsqX3hOo4YWUXcpIQWNC2g7L3kV6okbVtLRG6%2Fe%2FBYBts5sMrkpLEE1zgHRdzeXh%2Bwczi2stW6NKsX0UI2AGUx62CfVvUswc1bgDzWd%2B%2BPano0sIiennOxXB0MgMmKrjUMtmj4zt7MKp58txuVeYucJgb0ekSyFza7HPjqZJev18b7fNfTvri3pFOlNRXGFNqndAgio4PrZET0cRgFrOOut8vwEM1uckn7F94ceyBSCOCQwuOotTICrFwRO40%2FVX5pzbWd%2BqicV6pENatGH96cVrs0ebm9c7uYyRSa7u4dqq%2B3uLKA0RyNfFdGNA0A9XMHxpI2IwztSfr1q0%2FUMI3p2cEGOqUBajidHaHImfELreGIBQxvRBJwROQLqCGJowhdgtRzIb3sqkflQBAnXgoFluRuHinS2c3ZQ7oBgL3XMcZ5noL9BUk2s8gLHzswQDMTr5h8Cobv1JfCrFOsgIGyuLajBBBBF4H2C1aNu8WXCwZDPLcQbUEFO7hx7SVMv97GCj6rkT0M0Vzyleo%2BQyfGhxvh1Ihqr2KC2C5RN7GckkjSQcyyuXF0Dato&X-Amz-Signature=d98e4ffcb01cad8288b2e1d8013798d83bc102146620d4dba9d10e0bd64a25f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLOKQLAX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T033646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFsPtB7CHeltlgKJGvpEViEbE4%2F02mvReYLV%2BDmvQApQIhAJEX22rLOL%2F6c8R8X53mSKJXPK5Vh4ai8hDmMzSSeW4AKv8DCGwQABoMNjM3NDIzMTgzODA1IgyYYre43dXYTuBf7Boq3APBYQGK3M9riHv2Amb544QesSnA1aVSfCmLXMpMZeuOb5Sk62GQCoFaZ5zV01K5838v3bVSPYAuj4RFVKkiPD0ojFYbmbtQ97IEMBepD6DeNl8xZxdN%2BBdG2fei55nGXHDDHVmx0tzV%2B9aQA0WIbx4%2BLHCIGdt2FwU9YkvU1uNh%2B59CzTwkPJJbXkNTP3%2FNckWF0WtMC3aKr6IMToLFxfUtlJvbzawDiUO4XL0GckktC5CfRn7F2VKJ6RNa5PcISIkXKQhv70MXgLl8gdzsHuAb3QQPhYNw3yEuOGlNeAaY43CTg1gy8nWDMtO7zx%2B%2FPg5OvPDA%2FdQfYrYGnKmHCJq18O7TekkTWoR5khbHYi1hVSMP%2Bmsl2s8V5z%2BogZM73XcTUC25UP7%2F1X0or7QZUF8K3mfQQcw2T0GyywH2QgHlpShHnduqffgj1FjPfbCETokadgd%2FdWwPgoY7J21lCDnaXUHoGQ3HHkx1tEzzL4uj87GiD5Xt28EoDjH1e1DZporo8wtG%2B%2FXraukyfb0k%2FbjgxWLunwHeyKAXbXy7xe9p4gI8Qn%2Fa3jX0viSs8tr%2B1M8G6HtFoebltkGRwq59%2BYdh3I0ZGeqOhHZsFWVJ2Gzs4ED4DNYYynZH2dC6%2FDDE6tnBBjqkAYxCpvIZvmkcelUIkvv1MpYLf51pdEoqEgvVodscQ%2FiPgx0R9nn%2FuF0cL%2F4RrwUgDz0IGVOuJ9wzqAiw3ENQ1t3nZRqcwjeL5uOe7iw%2BBuwl%2BaPnlKaotgYo7J1pvK2bNvQ87yhhMc%2F1MxYfbr8%2BQTZm7ko0%2Bz5wdxksine2bfulb2OwZ3ZHe%2FsePlr7d770BBoVEIPi4o3Rp5zmhQ1aP1wMqnOJ&X-Amz-Signature=8f46c9aca597957dbdec5138d712bcbeb71f0f151cd4f8f7e2ef78e07411429d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
