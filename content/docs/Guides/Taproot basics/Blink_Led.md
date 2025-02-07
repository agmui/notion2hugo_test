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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQ6WLFD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC3AUlHf2%2FdQZUcLDG3WyQnzEmeNrnSMBKecWfuCptzDwIgJsxSUec%2BSfg%2FyM25B9qfiOCEE9e%2BZxXlp38v%2FDWx4REq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD4iOjcGCLKnvdW7LCrcA0aaP%2F0rQNwfWw3XKdt6D8qDDg8lY3JPLqw8r%2BchnW%2BUMKyDnpHQH451JBoawHvNd5FiBMs8ef2nGMkB2uuNurjcZBZ%2FXykLb%2FFwVRfECO%2F9%2FbVLDVGza5A2C7iLs9Qc1RnCQqtD6T2LoYKcL%2BQc0g2R96ZaNHch%2FOa2ymRgpyCbR%2BhUCl1XjJG1lDoy05JeVQghSSqXDG5ecqWUPh5aZS5j7L134wbjhZjE11rlJ5%2F94YvUUkxfTswJpB0fzO6T05u5Iw%2B6WXZg45OTdytKd8uuSpy5IvDFzTTAXzAkXj9nnUctPbNVMcyrOrvPA25IyyPPYEfN18LR%2Bvs%2BMQ0x8CMfdwZJR3K98ZOWFqnA3jnMGGMmKpmSQzQySs2GHvIpD%2BAbU4LpOY0Xp9nH9YMcQKbZI0its7F3YuOPh4kwcz%2BpsKuaSFhfAlzgp6rl%2BopbHciTaYw53cbBF9ovDVhjgZxbEi3a5xggQqc7Rsvof6Vzgi7jYYj0wOj7dTVaZuySpZLTKbzQXYKfDH2P7Pt2ZthYXurAUwf1pqJA%2F%2FgBLslwrJvXogOIMpxJsSp43DpxPnpThdYGy16vq3ZF6GWngxzQa4fPEJCP2OZD1FdqLLg9ROt%2F8dh6o6EXINnPMMiamb0GOqUBrQ3rBQe9gUMIUYjCAUjNcKA9w3wlXo8rPTjGbth%2BoixAVye0Dzw8KwlhuVcTTcBZQfgaQeDm1uxgCvIcLGugqsc2k1Nlo5y%2FSpNUIEOmRSO08uQCOYbI%2FT%2BRO0ViaPes084OejV4vcJ0uVZR0xxv1YllS7s%2Fo0EVsCm8lcVPTbVmTTYGOTSu%2BA1peRoA3zEyBdheXlc5fHeZcIe%2B5h8jUgWd8RWY&X-Amz-Signature=9548be9e24eeb9cfa3b2901be42fefd26ba083c5857921267a35c353f3e26a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTMR26A%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBrqtvchTPgnsgjLB0gd8JhpOXBP1ddF2Znap5ZJQVPkAiAQShPtTv7S4%2B18obremBZBAHcpGDZhhKMuYNrqxkFrkSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMQOtNEHcpusxhQ7e0KtwD%2FaDGVhdUn3IBNX2rR5kXsx7%2F3OCqzRNxwFeKJgWyJfncpV7S51wdKrtViwISOI6o%2FUxpmMP2oHKRwUyq8oUSbu9EtLJdQ4Em03kW9%2Ft%2FCDzcjYfI%2BU2NQ%2FbFYIDADCS0T7HMAiA0F4F9mTLpnyevnh6wdVyl4w9xqsOOFeItkjkxYU0jmLiItO2T6cbcZe0%2FpWxD%2F8fFjlBAInVoCG6DtLZ7cqgGxJ76z8MzqSgjTjzjmyXDhTk6XnIB6mKfWl1Hx03w0T04CVMIvIHZSLrauJ7Y6Egy9tmtcrlR%2FihlmZMSMdrsbO1tVPHSdLZf1bdAwkCO4eWVBPIYSVDVpzTZ71CSOUtkxgZkweb086BFS%2BOBv7cTYGP7u7IJqUiq%2Bz8Sj5uQ9KXWFwXwaLdheuaQh4wT%2B9RB4b2%2BVA4r%2FOKXRNyXutybnZkOuTJfdz5jmfVi51V4274HUKhcKxUFS9xge1m64MJVK1vxS%2BhTStG2s9t0Co2lz8FxkDw8hkgX4OvPzTZNhj0Glp0q4HMUx7JqyckEZOv2z%2BM1l6vw1moxwnFl6DlxaI7I4lNuv%2BE74UGOEctd0nVUG6angMvl3DyR6kNlgDX0L%2BmzQ77aQPwbVJTmr7CKoVeZR17878Ew4ZqZvQY6pgFeNVzNP2ttyO1gUuWlKZpeNlViUnBr1l%2FQeK7y3AFT8g0sUXNx3C6vU93dsxQ24qR%2FkK9mO08Mes2BFjjotaCCnx2BTF9oE%2F5%2F5Dct1xACUIGVirkhfD0qIH82KUf80XWRkFQdCpuVJArOK1eZlq5wKJ2iWwioM9HA8MryBjEf0aHJ7r0xM7NucCs4oLi5RGu3zb%2BxpFaFsEGIW1pT4evzoaZOdS1Q&X-Amz-Signature=95cfcacf5417ee8d144a02724f0e2ac4a98e6d7d25c84657c850b04bcdd52217&X-Amz-SignedHeaders=host&x-id=GetObject)

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
