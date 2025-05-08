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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBVO5BJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnnj529S5zk780Uts661g2l54uMbX6YMIVDMrcZHenWAiBBb1g834H9yA1oYtH%2Bml93xHRD27GSs4AmCfi4lBN3%2Fyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM3encl1Gepna1GOIkKtwDR6tYWimaRO2yDHKX0La4KuG0qGtRC%2FTVJ%2FLTqbTP0Iva37GEuullFXYE1uQnBkH6PulufpyTc93EnIXp6Fethi19mwVXybEHJ8PmNO%2BoFjmB5hF%2B3mbpCxF1Y0YQTbWZWZOHqJAJtEaYVUp2Qslvgvm3OBZnwY9%2BVgeYhVBStu8fS4FiBbJslyMkPq31J7BzXl6BnRak5o1OM4XyXTbZ2dZTQpliFVfaBHBxwq1u2KZ%2BAeZlMo9Y4wVo09BX5e2Rbk8mgSv%2FKHaUQskMUtzEJb3BUiegrzIdnrP%2FbBXd54A%2BxiifZ7hOR%2FwmF%2BQyVeQhUIYPngvPtusRTtAwoVTiuLXRQDJqOT5LWdXrtwx6dKVoXrbCarkKUrf4G4jex4P75%2BRUrsjFM2Mpjfa62bNlf2Jlt4i8ZpImCFyZzpIzzebwZN8Bd1RLbC5nmjGYNTeaJxBzSwi4F3J84neFD4bF%2Fx1e1NDnb4Cm9uMsIw1zQngAn3SjyyS8qkFWr0AaZhWyyudAHcY%2FdQBCK7tM3%2BD2cqaa2G%2BY1Nm5YUn2WxX8cqR9iHlklHo5gAZvhGf9qh3aSUH95pM6Sv%2FlWWDY72jnr8TI4KaZnyH6IsebPnjZ7CU7CaQCNMJpbjWGWcQwhbTzwAY6pgHJhzKuZ8b4Y5MYtFCaOveKpEJso0Oz8MXp%2BDNzr9oIRGt70qYzphvt6k%2BRlzlxTwBx5gljLZT1XoS66Mtsa880MsNvdJ5fATmNlMNCrxhmIISbQawChxIkN9y4FKSftOIu8f8pxbCQ%2FsKhjYoCIENtircEHcx4uZm7XiqH5knid%2Bn1WUYopYwjIX9Gf9MNA7I1J%2FgEEv4kw%2FCIYHak8ZRaOTa7lOEH&X-Amz-Signature=edb78bdabe791ebfd01d17b7b9465288be10d74fbb34a6bb4d3ffb2f8193cb9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL6M2WON%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMxRwsOOyUMbqoi6l4EhkDAQgnoOBQc2gL5HDHXbuMugIgEKGuG1NgSaAYxi%2BRQpfgdmHKybm4aH6qyd1xV%2FE0WA8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH%2F4isVjsVR7BsoZJyrcA%2FPzhxi4nSvRkSH0SBn5xo%2BqLo%2F0x%2BtM2b31aUaLvT9PNTXW5nogRgL2M5Tj%2FUJQGWaC%2Bq6B6pTZfmkPlvBHmo7%2Bl5l3clLGT%2FeI4NUqLAn1KpZjA4dlrQay6D2kLQwk9yqZcGM%2BvFi1cpRI5uK5wZaiEqz5c%2FNMZLnVdnLr%2FhxgA0ti55B7h73Run6WrDEDw4twHtJUaCngamVMlpCy11vF8R2U9T7v6a6%2F0rbyKw4MgYlIe3mWDb2OfIKjt9ynSI6y1w2IeWPkMR7GCrbrVBbx1MS2Mw4lY5M9Wf%2B5MO2%2BdwBmu%2B0yBKh8Cnt%2FaEEXDXah7CkOgo12VvpEj%2B%2FguKayQQ%2F2ryDm%2FvHRljgpqFRlCx31UyDOvjsaD0H8JTlCqbRDFAD0vYgV7Xf8IHXBtr8lzddtFPPaS7U4xWBCsvBTNfrlUxx0Tud1ygIotQflQICMKz%2FRtGeuvn%2FCUlExPpjj8vX%2BXe5oybLe2yJqrDCmAuu8h5%2FPDyrKb8i%2FdsqiXLUAv5NjJuntjcsa2padeuJV5%2Fgnai5oXex6%2Bv%2B65kvlsN50EFHtH15UfsnOjHZ6oqrOkAQbSMmrnYPj%2FRFJeqevyjYIAny7gAlYIfyZG%2FqS%2FR%2BxQeL1cOfFVs%2FNMOyz88AGOqUBc7qPFVIhOEkWfZglfANQexpk4UaSscYC4aY7mNrS0tmuiQTu5XzRYfkuN214WMyCUyzPsIBfhjClBAT9RBCqj6Oa8L5MqUg%2B5x%2F203IT3XnEhmZXzMD0Sd%2BDyM%2Be69Z4xMzdgvj8PHjzj%2FXN9nTNgtXM08FLZ%2Fk3t8kf2mqYznkVKmaDyczR%2FGe0V5ESIBFDTpTFyRR3ye0hqEeK16EeTlx7cScu&X-Amz-Signature=51fb07cab30ab4ac5edbe5530b65f795fb109d40e979d33d99ec4b2fa477c8d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
