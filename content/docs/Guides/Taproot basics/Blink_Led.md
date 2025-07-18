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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYNW3OMV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIC6ZUTt1stKSC%2FCpaLRDs%2BPij2SMHq2pr2yTNfMWlSAkAiARf2d1pv3q6Q1RqS%2FoydJXWZx884uBDNcsNv8OYxBltSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSi%2B6Ki32Nlomilk4KtwDi3LNjgoYxpi9NrtwMGBTtiICE06XMrM93dQWe1PCHZtU4MfBMr%2BhpboIZd3FszWPko9M%2BiHdSk594GmEmLQnG3QduAKEfp0XEnME7uWtV9dzaVAS%2Fq85sJef5uipN1mXMVU6rMwMNyw%2Bsjb7yeA0KEOPcaDph4qAVLfEDScs8dFf8kbnogkObagipK3LKt46KsFaNgUNatG%2BudT74k%2BgsmnZcoCxBt8669f1t1lK0jQvNVSgUfmbO0Bbl1z55tifnmOOBiRf0Xf89F4Bwfv40eIfTRlrQeIAZgcwWkrKWVbyYY21%2FdDX3vwLflf86X6dVwePhtwUvf7Fq%2FY8c2zJMOjYRFW%2F2Le%2B%2BikR3M87Gr3OMYzfwZUQdhYHfmDymDYf402q%2BvwE92RgSBEXSkG1Fl7eXj4Lny3FpoBgjEpjyIZ24%2FX3k7jKbMtsUJXhewF5qptImQ0p%2FnG9bZizD1zUw9DGCiyJqzHzgPMF%2Bk40t1E4blOOj9rHtDpBghcsxt5dXas%2Ba8q2eCYUAAjn4L2M5spSb54ZIUYHQcD8YLVtToI%2F6sDUj55nxRkrSDgpwpBZN4KmJZ3yRROkk2GJguL7PEwBZGaJcd0MCl1850W3UNyCr%2F%2FPaWZIzyWFNrIw7ZnqwwY6pgEL%2F9JtydixTozM%2FBCwjIFiFLOju%2Bc%2BAAYikNfS4wKygNew24h1JeMTiY5gx8GrJDmshpj4NA0PPaEVSSb6mf3sTBZHnlrg2S0UYyg6RefNqRAZSpoKLjYc6KneFp1ZDHuLejPJnCLptPjiiquRjNl4Mo%2B1hAgIUd6O6M4htALA3TiKRH56k4zmXxjyV103AxH0n%2FUm3GaE0aha8Bvg%2FP0h4LMbcOwH&X-Amz-Signature=61526aa5cd809ff70444496a4a2b3e9fd247b7a6292960dac5035dd7f54e6b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4COQ237%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHXL2bE%2FUer544ZULJggBuDIjMHb8Ni0gFe65dXdwEyXAiEAx6R15npoAINKw47sP%2BzS2WIVQz9T7%2FBrU6%2B9qLIJjxwqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8MDg57%2FLg3ryVZiCrcAy8USeI5pruU6GONcWfj7f2nAXRaHTLusZJTlMHqbjpoDfqzbmFRs77XM09vygvFLL0QsSwBFF3jUkY0jdN6N9Qrs22aAVRQMqs8RgYDJuy%2FC3yIC8KSoV6UNSTkYifJjaQ3YIfOhj6WlqRC3%2FYHrOCIv78a4wEtCfPZNyncsYc7wKYXTzf2WX%2FZOWDzoVOcpSJ6IANVvsH3qHe4xj6GMw%2FXL9qQGiDvIB%2BpVmUe5OUBihk0iYjZLb8OeHfRm68v6EacNUeqFxQUjxneg%2FidRKhOKdzR%2FurjfgAZWHqqCVY171emOhTe5g3F7r5bDpawiAkBZpLo5zMtgj59akEAwvoHiTno5IdKu2Y3YWkh9wfB0SUy5KVHPDGXGbLZ8l0wkRV1VjlOqrK1e%2BKn4OssV1v5j01sOJNRmbMmXCMOPmUenvpDqQJbkgLox%2FchNS0JW%2FnJBsLFs8BEb8Rr5ZdJgLytuhZ0HAgd88IeBuNgl79jbS6ndziC5cz4J8OlM5ODLIAolDdWx9VF12x29sK31N0UUJrysj7TkFcrbXrld5hw3rzpUTArJrP3B7MmwQm1LcJy3%2B7FqZomJbTeWt4nFAo%2F6SlwMYvNSLaQZCIyjV1kNtLcVU4X82dyvoalMNWZ6sMGOqUBxmzLDGa3Vfp9cQ2DnF0Wi2smMjEdPpg6fNkl17fbFCG%2BkC5prfSkyRt0iKZSV3FlwLgIA9L2A9ac5N8aFvVZ%2FJMNy9pJ36l34UlfJzRd3im1NPDgIm8BBYRV9NuIGZSEpuLeRQhdsR%2BqUagtpIpnOGJOlB9qUxwnNxIsiWuei5ZdIzQTAna64iOX3vUSJYzCRBc57Giu9qe5lTjVE%2BEPZ2Gxr2OK&X-Amz-Signature=f27844bf15b3230221c720825ea79e04fd72dadd75d7ad943417a6982e17bf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
