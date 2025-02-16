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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFY3XT3D%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD5IfWv5xRRGEI4wdix6NvnVA5y19XlvBlXksBmaAofiwIgLJDXViU%2FW9Y20HleJj97XlRH7lgLJePE3bZPpgVU1b8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNaLNGMyh%2B8A1SuQQCrcA2rU12GWVEQGnoE0ruPgDI2BSpuYNepvKDnO0sFdnHokasXemMb1iW1qJKImz3iclgUjAfriAV8HnkLZ0X622%2BzIbL7%2Bg8Ca%2BEAMBnbImKzeLkkKurKHuNVkUAu8SKKCjGpKkm5UP00o5Y2%2F1AQWm%2FDzLZNsT0dM4Ikh4I2Oe1DpNTDwWPqwvr3lF6lGoq2TkH%2FFRld6U2O4aYfEboCFK63B0Tm0rVFKgdIBHxifwfYCy69NyhUbV78VBH6J6O08lnV6knp6icVBUyWgG0SOEweqSD%2FqUZHQZ%2F2kgocufCYNd0Y1oF%2BbIpOjsBu%2BoX0C2dMnSGrCqfP3Xdog5MvN6cYx7dgtg7rgF%2BgBtN%2FoMAhJkEcj4HiqyOQne%2BtJotTj%2FdhNcoRetXA2CoqWi%2Ft8t68YJyGEcdA1bXdLwrOItBh%2BRr6QhBEGp%2BtTsnBGnDoPllut%2FFIMi52sw9Os3dsq%2FCGXVR%2F8A2VoVSMnvi3zVTUuQxHJYowz8wgDj5GbOsn%2BgAtF2dObuPPo42neA6BlsZHuL3SBWwTAnS%2B9%2B2c%2B0l8W8KiK7OivoI5fWYJa3uTm7u%2FQ1U1szsyGZO%2BLF1CqQVyuaq6q553O7Krew331XTYXzDgZaPVPL8cV8NPCML6Iyb0GOqUBA70F4I3VN2DBbeHH%2BGiYqxxAsKXcPIN7DPLjRu65A2F999FGqW%2Fn2Ss9BllVrP7v4nc25090mVQdWqs10Wxom%2Fa63D6PRKIlHILv%2BOu%2FIBRb7EKpzdWJGssnN4rYH197u8YjphU9kMll32MgykI4KuYWyXLqzlC94d0%2FCf3LWJW3URgDcjUwGTfnLreVre0N9eXRPs%2F3jNJBzVC8oboVd9EO9YT5&X-Amz-Signature=30b49901146356aac2df772e406209367979740802e57badb1ed94b5d36f68e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SUFCTQI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD4IpIkoNqRs4n8sRTqmZ12M83uS1O6CVHIfTfwzD0FGgIgK55aWR2fpBPvRUS7yaMqN4PtCDD%2BLPT4oSbTsALSYDoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDLLTZdrnmRkQ%2F4o13ircAz5aM785E%2FibOZg7edVdPpI6YfNbrDqESCJXwJ3jq%2BqshIM017rSZHfiRwbeD%2FTFyMcxOsJb844rnMssqAQZF7G2FJR5w%2BOLGto2jspTFnhyOoZ5qLjEtE086ogw8UiDBorIimqZ4YiDCnPCRi%2BmHyK4m7erpne1LwCkkQ5DaOsmI5Fb6lPgsQ%2F51FCbxH1QjrnwTOtfZ2RMRlIiX3NUK4AazBsy1FQ7vOz8%2FyVE64UVURWngdML9WWYdmlK629PIaAKIzrLvy%2Bhd0NPMe7fimkm7d3C3HgSp%2Ft5gJSYMngvZNNSP9hUAKmNreRJc9SsdQ6MiZm3ywCCjjzk7AOoVwBPiqrRBhpBbQePc%2B74g7KiZHaVhjfQvwD1ksoGKZ4M33Sp90hoj9YX3b7QroImlpi0FQGfKLISS%2FVGuAbs9SxtLdlSnj%2FmsmLHQlyHWc%2FhnoVcA32dk4tDSle%2BP0UF7ReUBwLf8j1CaTClG2NCANgy8VMyhyJHbI5AJwZwajoZBqXn32eoiitYTV0qZadDSAltBpqmw4rg0w2YRsGbUfUDAD61jHJA9awr265DiKCiU%2BndzQ8aGze4VwxOtE0C056PNaUTFpECB9GpDUQyW78PbJ0q3y%2FQk4xk%2F50KMNOHyb0GOqUB5KfTi1%2Fst2Bpe7bBVvINwO4NqZVt7z8axRwwvSQ6brendzoTsNZkY8gjcX6Z1C%2B%2FabIU1wDuTqr9F9hqCHY%2FnQKKcIiRkaYmq8YbYb0%2B20WPskVzqJqCpxUIdMo6srPjiGlUTP1av%2BSmpzHLDENnIKTP1P1USaVG1DyOr5QtO0UrtResiCOyHPz1Eiu3ghhY2rSodcU2NWtut%2FuDt26eh6wb10M8&X-Amz-Signature=50fb959fe04eef8a76c24a6a016929d6e170cc91635085452a4a37e24f1ae266&X-Amz-SignedHeaders=host&x-id=GetObject)

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
