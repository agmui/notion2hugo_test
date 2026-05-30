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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPYQYON%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFrdHHSdJEjZ%2BPOki8D643PuqA15UvRIFeZ%2FNZjFB4DBAiBEP63CUv4X%2BxLM4m7%2FYtgfeg4BpMNPmLC38FTgpaxl3iqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFiES5LL3q6nfFPfOKtwDhdMAHU%2Fa3aV4NT5zSRzAG%2BUvvUDI7P1m81Dp5HZ4VD4EsHLAZeQqSA7FyVNXm%2FkcgGK8Qy%2BVMPrIUjvwK0P560uBOnyN2FzqXZvwFdFVAJDrJ63OzrN1kMlJMV%2FUvTgiTC0jaPbaSmOku8HvrU184UKnrj%2FKEYMQnKaa0KPvPhsVVvtAoI0g7rQM%2B3a%2B3iTkOv0euZ2F5h6NDSbLqUxBaSEZ4j9U8Qa7q956KKEAeMEz36zAsZ36NUQaRlHn5%2F2mBb2Y9HtW%2BV4EezwZpNjnrdwxB0r9dkfW4J69Uu4aGfsJ3Ku7b12ieC44YqKb%2Bg6jDFHwgJQEThTbw8UGydMr%2Brw2Q5Kip3eUDeczkbAeWXnthdNPj%2BTusRcAJqrd6XtY5s9PiTM6Rnn7gMql4U3zyTlGOuaG391Z4%2BKWhVhGoNoMWAqMWCzZauT5NZaLLkF6KBM6X2p%2F3NU1xeifHXtsOIOka4J91JoFAnNlpN2pto2%2BIapp72YeG5QwBriTB3uhIvYdHSANmxLObkX%2BBgwDoB%2FEoybMeZNh7vCQa8ao577PVPJe8xxHCe87IN5GZHUQ2pFRthx%2FYlk4SbAwQ6nM6KqRMxMFjVx3OilcS5R7c9UcNYR0V1eP%2F5iFdGMwyqjp0AY6pgGS7kGLSMIC9jwvUHk94xCscVJGXCetOfEMy9i22VwOG3brgbbp%2Bm3NrDDMxKGWx9ZLadwqYbegtvMGrf3QMsGijzr7zrvZU85ZCDGoaCOfuw2IUEeHT2MmgAKGclDQKxQjh4sQiUgf%2FlRZL%2FiGrF0cBdnJWfi7F3a8rxcAyarohVXa%2FNgfHxM29eHUdnnT3i%2F8XAl0T%2By7yKJb8ev6pkXPXE4TbxV7&X-Amz-Signature=97e765a613b3c0ca950bd0b681fae55ac411e87ffe1adbdf26f37ecbf88e1133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI2GP4JK%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDEKpMUvZX49c468ZySLWESOqWNsPdecBjaqq0aPjvr6AiATBpO62YukkgPTAY%2FzmkjdSg8WHBNSHVImeLFW3%2F5ChCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hKdhBl8yAystx0%2FKtwDMIjaOOH%2B6MhIr2u2GcStYFy1XGRoQs1KomtfhnN%2F4J1dW2ZHTY0OMozSomzkVO6wKYZt1hCdgQ8%2F8tol%2F%2FXDxB%2FcsnW2nGlkA4LLn3yEyPFYZXs83Q3D8bjsD3FyW0xgAkxwoQJX3lJeF19MJjUAkdmh7AbVnM%2B%2BGgw5LOREyiewZA9jb7%2F%2FaP2o1UEhYYj6sHexoee0X33WDammaNypThD8PHzmXW9%2Fkz8dt9tVd1sUdDnIc5oOpuLZ8G8YXBW82D6es7jKQxaOUC50bZgkPoGTztiTAiCR0N7PIKNq01FiXXpZp0%2FqhHrkk7yScj7K1A1BNwOiWVDS%2FTOmT2gAAB3PBYfjd%2B6diu%2FUpaBE7PHIssmAcFLvVjRCcNH3jGUV8mzE0%2FbFIq51JvQW2AOsEYPqkl99EM%2F3bPfhf8UJhRK3P4E1AKHQAT5EJf88%2FAgq3QnePTO%2B3f4ADDTfO0V4annq0rMS6%2BCZ6I2XkKVfADNKBlhQDKDnpwejnSdqUaDqKgQI6FHQg53nG1fK30iykgNYxF5%2FFOu%2BxqyClvlr4w%2B%2BEbnXvBIsm7qyEFivQkzPMzztf9HJSiPTV3vTdDX%2B%2Bh43VGG8lkG33PRKPX8rnNAr4aQqGN5U5Id%2B%2FKEw8qXp0AY6pgHJlrR2b%2FCE1yoUbrmb%2BHgcPM9lmWK48gQa%2BHlyhcBhbwwFRl%2Bpt%2Fo%2FsI%2Fbp04EPH6gFec4Pn6XHkwPFCepspDSvU9KLWJIWaBJlGQ1xs8GZMLd6t7PSjuBaWzfTa28TQvXCerg7pdkAEYE6XNV1lB5lGR4K8F6BOR6UyGOmaba2DfHeSVl1krgsPdvb2y3EqUI6FG6EC%2FWccu5F7u2dlNf%2FOOavHmE&X-Amz-Signature=0ea694d166dbf1afc6a7064ee98b4d05439d2a0c135e5fac38fa7c35e6c9e217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
