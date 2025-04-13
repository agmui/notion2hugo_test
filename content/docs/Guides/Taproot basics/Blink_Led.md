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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2C4UM3U%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEQn4kY0SvnZ358NW6ZDFoDlj7iNK9xby7bQU5FeWsuCAiAYuuwWwS9YsOvda74lK40zLoNYnIvaG0GjAgYKKGLg6SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBzQMbQ0hx%2But%2Be%2FWKtwDL9rTPi57V5ak%2F%2FARWmsz1kdTFb8c4EriDZIgZJdnHFqC8n7lq2dQ5eV%2BhqHnlAHA9dKAMO9klysAEMjlvnvS0g1GVZLCAEi%2F2%2FoJ2t5HsgQcKGpTnyuLdbsq0b1HR%2FHhfr%2BBc7ZIrzt1bjuUAknCEMUXWSz0GZOT%2B6kKAXV%2BAKgp5a%2BxbuOfIEe%2Bb34NYG2cdTtSioF41eqecep4p%2B07ZgoXF9SpIoCcmHfSXQmojkWUR7CggQs8ronAYtHP6SmasBAjiLP6wIK5XJ%2F0jy45ClIdj%2BBTDc9yG8k5w1pfejSJXN%2BwDgf%2FuNxXlNz%2B3sxHJ7GCOynnogc5UbB5RbTMVJdoxc%2Fdpegd85iQxOzVFJ%2FW5AdOTiuz8yq8idj8%2FGwA4T0zUD5KXZgbzpb8WsNpBsCg1lor1GgLfGCv3sPz4GahgxbqyvXd%2FLw4DRq4eq1u4iLq6zJ5%2F52grNPwScvSnYjNgVndPnohMujr5rTV9Pu9gFQ3imlgBDklAwWXWGJ%2BnCrHBj286CZPUrq%2F62%2Bn0AqAg8QIAutJrfbiyMGgSIBt6oN8RtFAjItksr5z5E%2F9JTbne8OOOXz3BoxgD8tnpgDqCvAoirKU5qPCOMAGmQlbXQBEks1wbhIdVlsw2eHtvwY6pgEaX%2FxPPhWU5lPc%2BEsleu84Ms46Z%2BSWIpCJj3TUyT0Zz4KCfE74F50MyV8zI%2Fw6qo15T%2BlEp8OzC1nnjK5Hd%2FPS8SIBm0jf1h3bCPsNo08KHcc5DThaoFd9C%2BWacbbmy32kU921U5lW%2F88V%2BwP7XT%2F4WF7tTcxWibgKEbWFZ6SNQgsJ4YO6dr3ziRrJ0IJWxZ5Y1SlxeCTuFkgzRLPJCfczUXVY3bEu&X-Amz-Signature=59ee11fa8cbdcc11336489b72ce9af5c6fc78559ff37b48348a9d4f0adf84273&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6252PP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC9fkXepC%2B6I%2BMos0l%2FXFTa6ng5rb2a7TJhmFk%2FrYg9hAIgTlB3kwHHXNz%2BWpX78y0uhSLwZprv3SQ1iyK9U4KjP18qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDF2%2BZFIoiIalko%2FRSrcAxHl4sdsC8Vr4EFHWvOACb11uVTD91juR55UvXigEfXjsXXbjNm3OnH3iopPYsWpmTIRtRiy7aOc3MIfFiMukMKAtn9ydKFEbpruDRaL5PhL19ypFdFN1iJi4sYnoneB1%2F7unfzEzdndFei8XjzHtYs53Py6Cd6QC9EKVqP3SPUL1IsxFW9gXHpze%2ByPuFeb9v5zA75Rwmv4GDhcZMuHJEi2%2FuzidsYzEs1vCCDhgCf8i2MPuYBZy0MOvZAsdEldOf6%2F20u8IHMg4WdyS41rQNgpj8COAbrY33DJICVCLj11gyzGYXNXWQuSTVg2CwGaY%2BZ12r2jE5tFMFRu7tC7yaJJrxpu55WSc1z5wu9RQEBD8wUzUtKcG%2FZmlBlQywDj%2B8jclCce8GkhieLK0Tjh2V5ElULY07mekCsCzt7oAhZUDM21fYUYSBbumPY9y1jVkXxwrIV6%2BofvHahW35EfZ4mQIbDng6cnDU3wOBYZvep4dV9Y4gFLxeyxPwzB0OgaT5F3Lx2egPPhOJW9%2FLSbtbXP0CDVr3tIdtdqZH0RxFRItrI5c3aBtM%2BF8IwWg1H%2FEylCfAa1Y6Bi9aQt9KH8ADfckRd%2BoAQbS7bIZq4QjUVvDh5rjEJusSC6%2Btb0MMvg7b8GOqUBrBMiDuUDXhDGFwmxpbN2j5%2FT6vp4eWXoeX8YV44AP0mfEhL9XNBaEB7xdz2%2FdwtoAyYFjxATDeqmJuQ2QYEhnYxHms6AaItwdvpoqbp4%2F%2FbzCrG45XUhoRfi3vOwYfN8agayVu%2Br9zNnHl42D%2FiSyWHbLY3Ndz8GzHliMuQbwi0BbOaLiD%2BSsgFXL%2FNfua1ZRXM5rtrX7ccqLwbVaZEMw%2BezlJAj&X-Amz-Signature=03e4834bcd9211b2c467b481cd6ba681ad8bc19a673c581bba15b8a5c0138001&X-Amz-SignedHeaders=host&x-id=GetObject)

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
