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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NBP2FO6%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCwayVVni0VL%2Ft%2BI4bVJ38j6%2FNnLBvVp3fp7hfd39D%2F2QIgOcDUsWxnGw%2BzDVeaSGuiwBc1b%2FoaN2EX%2FLWUy0bCU6Yq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG7GWOnBcm4MvMarMircA4ktvtvIFd9ec6yHLSPbDpWdh1JHd8%2F%2FGm8apGivaCQHiCxzA8QOU56hNNVryQ1mf%2BUVeqCdS1PHW2ubtd0La%2FSXBXOdpLB89ay0YWgqLOIWAIX4b0oDn8Q6y2py2m6X0PLKo1nS6jpXoRNRzNSgcGWIeq03jZtMsHQVfqlyQQzVothWi0t%2FJ21UGQQBR5UcGlmpQDihLvLOrK8NBG8CD75wXmCqQMOPAKMo7gKO4RRmFOHT6THgNQlqCqP55b%2FV0JlMjgID7NibyUogxq3CI1uTwbStN8d2xewfDI3UZi3k79N9r%2B5gt7y9DE3GkN48mi74ZEycWP4kPmT1lCedjTCffv9RgIU741I9VXY4aH3TLNYnDE4oqToA82D%2B%2FNfBMPH7o3%2FzYkwhmA38XE%2Bc7XNPfpJKgdfI67exoF3QGUENO90LI8loTJ6bOJuPkdkMriAblFa3bmn4rpYUIRcR9Gax%2FUvqqvLtqs3d6mG0yNvQWeytnCaFSKwH4Ub3Do30SiUQWIgll8nweZfBu10tlPHM7wSJoPFbyU%2F5ZMFq3cy%2BSP1qM70LsvVkW6VKjE8DZsvmECd5y6clipgyfFQ9GfgakQ9jRgENKM3P48GFoH5hz1nprdWhRpjIgWKbMLLgr74GOqUBXWZYbo7uN2VevLlFVaHisxEby8lR1z48JuMimq1H06Qodod3N8TosZGcw%2BRIrdnCzOP%2Bn0TK0XWR9f2pfugRD3pB7dsDszYHGWOwldK7ovQav%2BMK2XuRhJ25sOWZDtWS3RE2UcNH7uvenv1wNMyfNAjduXSEd%2Bi0JvirLWK2%2BZWxXSNhI5VUKhYGOmQpY%2BkFfTK557i8%2FbDU3EeMRxk8O8136uvq&X-Amz-Signature=5ebb9227e823f94502470e8282043feedebcc09704967a4fff6ed80a42dc76c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTJ2R7V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIF7rOHkM6vOriF9CI5XRkilUBDenxIBwEJiolYVmFuOaAiEAn58GTeVpiQalC17pOyhiE4H1%2FfBJqY4SkNBaj1GDW8Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDphe3%2BbpWIIDU3IFircA%2B0axd%2BNWCMoVZjKpAZzEfLf2gsQ8WX1XOcmmQS8ztibZ6bZeI6c012snOqWAqTSwtvhJUGPETmi7RXylXMa%2FfFLaBK8W3kE1Z4SUia%2FZBoW31eYdhXcGFtwD%2FFaAexrVRuKAs3BwFZpF05rJN4P1jmlQMB3%2BoA51SHQdQNrLs6EkkIVsKWSDnDaNNdvAf4b583XMAgFdLAodE7RB6NEhovdNppbwS83ywbyFeYIWNd%2FKcQx89uUaGu4BzZgtfKeDU%2FE8h9bqau6as6pO3XZEbuCyPUd7aETJ9wSYpZmkZ2zrgq3%2BIDQ03vRNDvzgxzG2IAboTLDdYlfzFOi4y%2BZoJJrSwK%2B5KWElYcLgTr0la6ulE1GfCcGU1hm2qbZxWTp%2FM3%2FBrxYj5k78XUFvkdB%2FrUZwi5B00sGbBpw7AhlFKAnkf2Eu%2B9Yku7pAb2PIK6IHVPUIrDE4OMP4QbENsQ7p1GUKt55qpusm7oMl7hZ0ROaLQhSBm4B0D2gBqNPpf%2F1kYoQZOL%2B40OlS3UoS1k29ksUi4SRyJIAU6rUrL1aj90Lb%2F%2F%2BWgYKPBr2kGySBmrWPnUxAmI2GrDNjLJtRdzrJOfxMgtUQbienXDCNd1C7sH2gPVwgMDivm4LxHu9MOumsL4GOqUBPvLBJvcM8g%2FGyMEL2%2F5BNTjIMqmBNIzpl73BhjKpZgC8Mut3k0a15emzD2uOgH06EOF%2Bi9vK2Lg9C6rORnUsv6orubEJoiyEZWYQB6A0RbXE7RYSEVhe5%2BwS820dKpK7UQyOjk9LtoE3f8U5BZRWbogYLsFS%2FD3bORfABOKNeVr%2FHAGzNWZ8NowOvep9lRjbstVLa64B3HwzPIXWtxqVfUDPlUv4&X-Amz-Signature=cffcb48b2de036424b366d7ba8520ab7e8a02f5d60f8d10313283ae5c9bca980&X-Amz-SignedHeaders=host&x-id=GetObject)

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
