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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANJOMDG%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDPyIGS5kLqfMcb8V9MGh7je7DFLvw%2BNu%2FreU2%2Bt6m88wIgOODOrPONahmxeP3z3tWI7IZM79rojNR5jYIDIiuHW9kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIF6LDvFNwCMug0C1SrcA%2FRLWgXVYbNOAAWh4j715i%2BPKageD0hFaIweJ2sRkcIMbEgnfpg6Sb%2F2FEthWd0%2FpjpztEGt2fLRjn4rlj6ip1px%2Bj%2F4NuS%2B%2FJMEoypxw02pmrgIUQZzQyvFO1kmP9MWiXYcXNTsotBcPaOkNVFfc%2BOMnNNU6fMtHINuKEzgQNMMMdjcfhoyAPVkUEDvCOtRaz7IkWRE8BQM9aSwnjCi4u69LFMyn%2Bqr%2FzM4jVgRg4VVPaH5QlwRC8HE19QxrdA4cnA7GKoJ6vMaoL6w5STU0WrIYEfClKx%2BgXIoHx%2BmiTIyV6095dYnq6L8yNrP4GvcYokHCfdpHnf25UuiPX6cp2AgEYZznwm8FxjJEqD%2FYBuv8n91DTI8QBLNggz15VF7igkyZt5GqvkdxY5zrFv6%2BiIsuOKbeQIgYuWXDZDXyGk8x8Gh7Fmzzz119os%2F3KpDnJ9IfBMYGHLc6uyVu0VsbV730NKTm2hMl8cW249%2FzpAN4nN33mNtCwOcXXwSrnWVD3TcLsM4bYQlwNhPcgdtq15f8mQb%2FgV42351kxzLvkpXTfl44OBf%2FX4Nr%2FdMi2%2BVSx9cSUrPrSgABk8safjrZhRINdYH6sutCE9P2bFpgR8roMJHauIohLL2qPU2MNLd4r8GOqUBL1Xc2TbCcAED2wSXyoVK5r8bVgaP%2FF3rsh3dJI021XRBPZZNEYs6ocOeAYMPSI7HTHWY4vrS2%2Bov5JxzTF%2FxqpY67DhVBREYcXErMIK91zJ8kcn%2BUPXdclEuzKy4mE17kyfaLRKwmw9v6nb9qdonm60Z66Sn%2BeMBLiQDxRXBHZUWKnjmfxEwfMlJq3TliZoARPlWW6R8FrT3rwMMLtGlf2pucL7i&X-Amz-Signature=1a934defc2771e78f822630ffbb6ce04da77f9b15b0a1fa8b69895e5a765f783&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU5F3VXV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIALePJcUsIfkLvBJLmm3yNhBHm7HzkkTvkuijS2yBIBGAiEA%2BKhysvdONJ%2BL5T4QxpoP0rs5podUsMzeAR6SoUBnnAMqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtPNXPEmfhse4PnYCrcA3NMqlj%2FQlqALj2Sxq%2F9216bLu1imwfel4k6DCIOt2ZxIyiz0p%2F3BMGpvj7AvzU%2FLnZuXd7Kk3iC83Rh%2BFOpDaePnq%2BbWzVf4je%2BgEZAggV%2BheJpk4LigoDam1ufT9y7H4K%2FydST%2BAgMfuUJeGOxAz7r9xwJh4JlwS2nDolRjsMo1I52HP4s5ViQQ8kh6nTtFRhEDIU4UVj42aFSovj6eOsJu6p2Z9ZCpYmXKWTEb1VIocwSoqkKQN6ZuUbwH0pNrC1WXK72PmozfEnzHv8qwnoBtsAdiPJn7Ed95qgS4s2icH2XrjbsVeT6sQmNuxARgEvrnY1vh4lUfVE4l436KqPskMBtsQ%2Be6AoCiqpIW90S25vO0Fi1rgl8uS0IHu2ZTxZgrrMN78ANSDlzQ%2Bn8i2XU4HWfl%2BtsPotu6L9aozfAsdxn5Tz2mritZ9DTFxefm1io6zlxitGyVmJPdQ5q%2B0taAwJ2aisPkZLoO%2FxU94PDsVjSd36%2FO%2Bf9t6CFxxI6hI1hne7eylSPsr86B%2FSbgSOBR8ggH5JfrwcwsG5qrVUHJ%2BlCOfJFdA%2F1k8oLihzGiDv1f9PEdF9d4EiY4b2XwROyPlpKa1xkdz3FstKIs8%2B51BijYhZv9sq1CMP7MPPd4r8GOqUBXYid8lovgDa06nUssPA%2FXnwk1Swqd3WYBeDiOz1%2BDYaYk9nD7WCcmbpijgjyWkQbm5jOuiZVu4%2Bs4Lz4ayAMhXaotxHT99QLe30PIFrJ8fJ5kJ%2B4UFNqKJey5wCdOccWsuFGWmsDfVA1vyK%2Bh1jTPXiCx4De%2BqZ4JOcUsWZWKx7dL5jv9GyP52krX2cKAfXVdk9JIbzpCdE9UjwWT8Mdba0lJvLo&X-Amz-Signature=3c961738e32e991454d0971be52e0f61d4cc59ecaca81abe49d5b510fe9bcf12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
