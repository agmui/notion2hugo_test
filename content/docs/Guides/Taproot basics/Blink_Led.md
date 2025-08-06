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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXKGHIK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIDBAe8dgjwS%2FRwZwH6l%2BhgV8vsTT9553uNZQ7Bj%2BLhGLAiAd5kq26kQCDqhXiHf6ir7I1Kx7D0A8lQITHAkPUbyAhyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMGnV8Ec4bo5mZKWofKtwDrvTssGbUej7tC9xvIE0uBIDSsGeBIDrzKel3kYvaatshA2yo%2F9DTfB%2B8u1FpsGdZPNhKIaH8RWhiVG5RB4dMDf03nshafsGNi7QWlFU5ccZNRvjXyNWO3v4psRAlHvICGo6MQNrGhmseymOG37GdZCZDF9S7FSIsGGRJSGcXwjiQM6JValI4A0ssSvmTNxRvXiwaZB8xha%2FNPtfw7iaXLZ5rZhxtPQ8fJxlZfWXA0SEuBuQQCNCWKCLp7Xw84eZTX5OqDl4ArJmqXJp8qJ9VICohyIfy1TIBjCx0xO75pcHCG61vrKTfe%2F7aFPvfR0oT%2BHvgUPL5Bfk68KgxrqLESx%2F4kgYX%2FdxwoTSkQ1xlZxtxcT27A3ijlwoZZ%2FbNpRWe%2Bi2Lm09I0ihONypaxiYzdHfNl3UiOcwa%2B6QZc7NqtoDRpx3ZUjodZXXn0Ba0XzE9DfRimlrcotlvbNK%2FcjHJISWANBxRJjek0VHMJelR0Fpy4J8GixBdecn8JxFFZ7ZJEw7P6x6a5FrqlXwgBc1V4XxZhp7dkWn3UQD1KO1Ot6jViIpmihgr5RU3%2FWNhFEjy3sGdN4OhODZdV3Usprj5SVGzHQTtBynJX0h5ZErjlDdh2lkuB%2F%2FSfHkE1%2FowkdDMxAY6pgH8TOD3eBLcldzzxjrTvWEuvz9tLdTWLIQwoSMBdbGA5lQD2k3a8LEBTv1lNy0Aj%2Bq8pH4mmpjsArplrirhbngznDKLNhmw8ausIa2hz8t3dtWsRpNXoR50ALMr5%2BdWCxC279qgqowuZTPBgdrVTc0%2FEVLOX6k8FfFSoniOz3G1ozOAuoy%2FBDdDzvJpXPJkPfaupgFHCt%2Bg%2Bq0DcdAT9X7sse7jBlcN&X-Amz-Signature=c37986c30a441f39691104646534319c1e4f3fcdae14c4a1546d685afa090f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFPQT654%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHaR06PUSQDh0YOoHxhZwN8ATui5PleHqTPjXWhsllmGAiEAr9%2BNw0xBdeE02YF6My0wSOxetdGuJMHNG%2Fny49aFFJ0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMFFon84bmi8WYFBJSrcAzDC9oXzaIKujGyCMBdUyiPafCUvZpUNa%2FnNbY8lD%2B9Je58UVwsgqCmnE0Hx1pJk2JC7xIJ6lF3h1JY48Gd1VIzebN5uKBPzoLgxL8Xct0URsmdoTPGLVPufplXBHM1hhbzvqjhkM8KweAVy0B0AgxkCDPoy5Kzy1Sd6RfRyIJZsO%2FTqiKU1Y16%2Bp58np%2B8LWIZJLZxtuuO8nwlu6UFKKSn5l69%2FkSijEw9ZBrL5LV3LBOSBjjyyI8yLbOOeTrFdd8Vy0%2FLZMD53WAyrysEGa9f00gjbGVhp8IGGuUumnQ182OuV4wjp3D%2FeLa49ovRHE4kaR%2ByFCSvPLc50QfzO5kBEtz69KajoIhJZOFbonVl%2FiRWDmFto93mbS7%2FUYgmYpjXWTQL9IVwQNrqYfrq3lvfDo3N0yQLt1l6gAyUQI2zmAdVEnQIzzqd5RhP7FZysDh2qdoURS1VrM4n%2B4RTqRuJdzlDRcHhEvA3NvfYjewcwbjf07z1MkGEB8HwHbKSprkzdq%2F3RqEpr1LLMHCI%2F%2FduEx3jsf661GDBPVuxrhehcs8VyQYe7EW%2FfK0CXNfhJHWEiwmXmhyci%2FIgqHBEuiwp%2Fn5QcyAZ3t7gGiv2dBOkT9gIk6kRXsGVLOLIYMPHPzMQGOqUBJ3etv%2FuEss%2BwDkUCWJ%2FGhHTKspTSR4jzgNEIIhH5BJtBOQlhSDYbiNAEHF8e6DW9aiooiB69UoF3X2KtRanJhB2k3VHWRZ6DkKpk%2BiBlB3S4%2Fy5cNOhYRpurmBahkTbRGlOlIU3rdQEIhRQPyi9ofRi6MhX07q%2Fuyy2RofbfOmUwa3aKNpKp726B0e62iph4Op%2Bg7yDf5m1ooy4ValqFmllaU814&X-Amz-Signature=b71b7b23fc1e6e86d504a868686b4aa2f3fff2ab6cb11429add53dbb288a94f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
