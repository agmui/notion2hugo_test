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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNYWLIM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCK0YvcsAHS0VhcqEZfOxD37K39hJH2MS0Uf7wT0YnEZQIgJrAxFmOeDyFcBt01sceUyYnvAh6uQF%2Fubb%2FIe07xut0qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B9EPlj5KNo9lPDVSrcA5x%2B7wDdzgGqKa0IAouV9syAr5G2Bfrb6wBgt9CJyYmI5l4bAcRNAJ0JcCBm1VGyN4YuHBHcB%2FVfL%2FVsklPMzrqRegZWC0EJXunRH9Mw0enR1DJM139JGehdL%2FFc5k7nGaaLnfdkDLW3FW3jyPZ5rV93%2F9jzkvG6gu3%2BV2E873sboEpsf3vRpVW1%2Fpu7oXOPgILdzd5MvaWePv8Qg7aR0o13WGI7ySOGcOwWKvSGmYHiWvjho%2FH55NQbKdRwJaE%2BezKKA7ZSOMZhw0WSyFFDUboBmHVzSR7HZKDpqmC3BGOi6iOVndNGAaU1QSeaVXB0o0RLVXhOefxh%2FsfZyRqY1ogtWiEK1YYwEj0GEPMmI%2Bxg2jrJxCAs%2F6xLYGVUrnbweWW5ajlXSNupe%2FSaM4nRODE7DYgDk2zUjMFEskkbJ369gMj4bod2%2BINYGYbMIo0%2FVsmxkSMwB2Haj6lHjuuoBe9BHK76h49aOJL%2F9ZoFsD8wYYTYqsDSipRupSUN1VBBt9N7Qhs2b4rKQ0FwsMIHga%2BJWCoUmstnYhaIQwVNWhL7ywZfmz1%2B2%2ByefbBLMEvAhi736psE%2BCcFqTvtw0qwZDsX2WGkJsyp8ms75FuYC04T%2F7hxGgF19DU3PtWsMNSf7sEGOqUBXdJ%2Bf%2FEUSPCelPM%2BMSZKfMFcZwXlqe%2FmiOBWaNJQBj3Bq8bO%2B2Axt96K0ptw%2FC1F%2F8e0gP1uMFZF2kw6Qnoq%2F%2FHdwxjqwaKbnOkn5F1Y0OdROANWGqLDlX8ZXN5Mdu%2B6gos0bM80utou7p3Agmik8bhpKxTbdY1OuIaTQeOZE4bMIFarjqAJtPr422iiZjvpmxJjehaymyutqOUN91Ooz%2FJ57bMO&X-Amz-Signature=d0bd2cdc83e28c1266a30027625a6293f2dc1969d47e261130ce6c5e1f577538&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFZESDJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T035347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIDuQk576G23GXJzpVW29p%2Bwh8xwArereklPJ3i0e987JAiEA0pvwoUAik8n4WSc5abM6Rex6YC75wKACkM1huCnvoagqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvW479C7gnucfMvJSrcA3Q%2FK58PRdqej3aTaUtQCRtRAqdHjvrvY%2FxfZB8lboY1F5yksB%2F3L%2FY7TymgjxgBHupvF7SVV6Ole9o4VZyosG5zl0T2UUq7F%2BoePuhGNYuFwtytai5NEdY5tdtqRJ1ODNiP44Jh4O9l9zEqNBe%2F9Q3XZrv5nAgCbVDmM1f9hGCkfXMtrs7jBZWiOH6ntMk5EVJ37V94%2FEnxClWNFsYRhltvap5xj%2FTiTCagQ5lSwNWgps%2BareOWijLrMGgrn4sjNXV2Rp3vRLg%2Fq13acaQ9n%2BQqhhLkq8NJeRu1%2B8%2BOo5m18%2BTT867VQMZo9bdaUgV6CoQLhPYd6Ni0fPdiM1jjqkVDiRV7ke5dHfE89RB%2F1WUAAp2u77bvk8XWyhCme3FrelwIaYneV0iiI4Eg3UWeU%2F9aRNz%2FAwWIT3oeNQiNckEc0roXUNK8kJJfRUHzffI4WMnHAf181HrxPg80N7YDrCIeMoNUnDf9%2FdUwPdwtAWZwRt9qoSn0q89wvo9o0mbDFBhmhbJA5ghDD%2B7Gk%2BWbVLbpBwwCw5RumqBcNvU4OtY4d7XBmCjqCmQZ5i8wjcEt2TQ7hol3wD%2FcyRckf%2BJKTXIYILJLNDanq2JrnyAPo6ZFjL6P29ZoOCp34CV5MPGf7sEGOqUBsZKd9sz3c4RdJ%2B5%2BNNnA7LLHXE8p9SPmE0x%2Ba5v8SQBahUvhHmkG8Zv71B08ejdpmMEPrMxSis2vJtYTAcTQCBxzmFzalxAN89gtiPn81RcOitILfH86CaYU22B%2BVcNRg4od8VGSBM7LDGJ3iJnDc7PnoHGsswtKqgcISTCB7Go4ggDy1XszyO0PlxG64bLg%2BRpBlPv7AQ1MyY39aCcOdDCfh1s4&X-Amz-Signature=9a7dcfa8e6a030f8a11950459724643b8105ddf5475df69ab775aeccd599ef5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
