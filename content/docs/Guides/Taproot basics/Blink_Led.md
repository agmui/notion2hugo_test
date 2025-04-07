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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI2RHAZT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT4yEihmHm%2F%2Fxxz3ruW4v%2Be2Q%2FyBQ8avum2zV7P8ilbgIhAMZ9UAFD58AP%2BSo2hZjvA3LJDEHZibHKI%2BY1JjtEerxNKv8DCFwQABoMNjM3NDIzMTgzODA1Igz3cKbd2jB8RTqzV5Eq3AM3wNkKM%2Fe2Qen9k4MwhucOExxJEK1ZrTpL8toq2SCJbY%2BIgjUwOvCxPrHZXNKfNhPV%2FB5XJoj7p2tMP3NL3HKTdQ6%2FZ3OHxyjfYJgAAH83ZxTLfvh%2F5ADJ2cWYDE4mB6P60IcTeCVl2qbnP%2FbZq8Q0Pylcz%2BQ10xuF1Bz59QtoAfurpoTCg5uaIY0eLTcUvCnS64uA4Yw6H7auTf26nmGUY8KUvr1jeJKSPx1rAEWdn24%2FT3sv759qb%2FSNCf3fqxZ0o%2BHbzkHEzfoyZ4SlwX7CM%2B492QDWVjdk5wzRPbNovOZn%2BxAXAKk0CQwW1pnqn35TOsbgKXiEBnglUq9nzqTJxhnEufXxiuJAPes%2BlpS1X7bsS8%2BCywMzmh7vgjjxa7bbJXpr01Bf%2BlC9l2nQEruMw6O%2FIJrroagJw3MFoyl1eA1LSmOc6MN6zf0yh1mxaIjc6FH%2FrUlXT6ZQRXbIICBiRXzOhNMOPcUd4Q%2F%2BXd6zl%2F2ECPG9P1YwZntpuC1byfBZiMk8%2F6oNFWPn0fpxX7p455GF3dwq2WYsQWcO6T19KABORztLF%2Bza8yOVsBkpkgw%2FoNRmfxzmtTgy1mkh6oXdSn5Ll5OTTbvUICw1u3pQtr7KkPy3cxfLjMYCkTCH1M6%2FBjqkAZlrTiHgflOJuH6g06%2BX4mVGu4UUCoqgUGUyqRacjdbw3i%2FV6pzI9RiQGKxPHmvRd9mg0jHQQgH30n0fe%2F8Ll8sd5N%2F5Aoi32IyOIvAbNIWG6IckRo5rTUFdxPFFZ7hbHxo4l3iNz7d7CHkO3MlKCm3xwRnFRNFeDlyiYkKiHW1fo7DW6CD764tGUuREOQyidud%2BuxWg9FRbZ5W4XaTw051gjAC3&X-Amz-Signature=c215487abe90f48b8b24fa4c0b8acc2b68e8dbd50749cc8e6de55e3bd60be1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y453ZA23%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPnVz%2FueU94snd4%2BVLhovychaXsaTSmlX8RrwX6Pd2wIgQZ3DkCfj7h%2BJWuJQ%2BfUQeWqpCebJy2hixkObU81uffEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDNH2ruArYa%2FxpucsTircA5ogHtc6Ayo86XzaLF9rrXeBH5CCB4gYzWc6ZJ7X5d3d2wbC4JlzW4aQRuArQr1anJIdrDZtKmUIqUGK5RX%2BL7zG6ZRpdYGEIjJ3rZIXmJXxT4%2Fr2jDf7DHkMEJCd7Cvb0zJSS2IP6cDsbp96GlVbGAeKKXI8j2BMjg1BlsEhFAeCSewpfpdfk3vRXOa2W%2Fm3gKj38H8gTP7Uoyp%2Bc7slcoIZqkuK1cbutFAVrb%2FFGMoXBo6E4RknsO8WMuvjQzjhPdGrVUy5iwhOsY319LWSS4YhVtgmq8%2BRxuR9TW9k1qowoF5TEXRVu0YmrBHwSpod51s2DGpzCYBlbvzIhPwTtVtPuwg7kkSrmac2vonMWzwO0aVA9cOdlpqXSq0j2E2WXMUwaLeT0FfA%2BzM%2FealgXY7TvNON3w8c8jDn6sOX49DNBukxYAmjD94sY2%2F%2BkkuYp4gnZRA8FWLVHzW9WP1dZA5t8WtUjxVeiUXNiUEaE8V3u3cuVmTBa940NIJ0GfCQU6T3rGCCFohiAFRcugAAqQmyI9a2Ard1Ev67CN3fOyTn6azRnGK27JBTv6LbKrZH1dDwobuLClWu00n1pj%2BfhnTS0TDnfoTnvCS38r5LyFf0X7wDojsBDwWyRzkMPPUzr8GOqUBFww8yXmRxwDpcIcTaw6c18WUO0m68xmrTgefqiAAFdYesfx8nGPpuPqTzlHt8FnZL6DB2N5qi%2B23OLJkUA6oqOwV0EBq%2FUEekwNqfADz2tz83SV%2B%2F1nODW%2Bz%2FmLlwz33B0JrtUYXasfWS0Zl%2BKBCqh4Gq%2BsMml5v5vd%2FIUqPAJqsnnzn2sVrjH%2Bo7ZkR9%2BtC%2BuK%2Bakha5mt%2Bu79c3VGD0CDrxnm8&X-Amz-Signature=4826d143c2de93f8ffa0950c8874f80dc2b7aacc80066a95f3325d9df9ab7afe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
