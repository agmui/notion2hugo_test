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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUPF5C22%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzlSVn%2BWz41V0EeMmYfdE45SAAy34rHqE4R883g7L2VgIhAKsCkbphsYKwFQi5lJnsbmwcRCtmPSCUMzL1MwMiJdG4KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1orlSsoxcpEvuCakq3AMagvM5UNkYvR5dOFfWXf1ryaWcMNxzQGMcmoquFM685sXnFuUYINV5ZDSDHxr2B1EyQ2DO199K5SF0SfwdRV30hdBmEY6Q1EB8GwlwiYjSMfj7T5eg5zOV9hvlgvFsdeBTlVmQ4OC7cgusJGaqm%2BonnphgzmDJ2B8lgNTcYrsWvdhSJjUU%2BWLNZeB%2FdAMIfylMO%2FZj7riXPVY7gBHSmf%2FhpNstvZmi5MSHY5q48eucJCkbjH1X%2BJV8ppdkNXjN1X%2BLgrYLFxid%2BXa39gGb9dU93cFNPAq3cfcnaBM2GfHXYhN5hjU3Bk8SImUnVt8DFSoPz4avRG2WZP85lisA%2FYTJSMcoYT2cGiuOYhMlpoAcwPTR0zX1rAhsWQgHFhZM9GBj62ZRxksqjGJGxcKqvjQWSpipj4GGSH5YoOYeFGZuLlO4KxlKatsesTTUSe1nueHEtvgZuA4uT6jlilp00wq1lfcg431RdOVfRTxfv7XCtZafOOMc9xSlrIckvy7JI8EaPGPnWES2SMu4em9Q3Lbhj4heRcpfnRPI3I8sR3A9OLwfxgw6JLzMLMNHDn9rTd4io9EqYjMXrkgVmql33yNWBtlNUEXhvbKAI%2FWlc7WzakJybFHATtV5c3ry%2FzCY0avBBjqkAdcmakyf3SmfujWDdy5H7wLaK64UAqVRcmLBYIFkzImWN%2BlquW3Awvh5HG1GOFr5%2BNPN0Wfh7uzCvoZ0wZr9hjTC%2FJxdPNqQ%2Fr545685hLrdZ2kqWRDYd%2FUKg5n2Txi1fGKZ317%2BAtlG3KuH4xNeJFwZWqCFkTcdhvb%2BNRpIA6X84eJhFR0Kq2Oh6EazUEnqktPhhFbhgYG5tlZq8tCI4wb7ltdz&X-Amz-Signature=723969ba3f8518eeeace0e4cf1df388475c10cf358578198008619e168ca8def&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MZOW5U%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8k3o8X9cyBzZwgo1RlfQf5waeZQnlgSbkk0nIeD7S2AiA6kNwSzMVOoXLwgaylEudezJUR25Cn8sXOsIUwR1ZT6iqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY5eT2tup7fcuVL49KtwDl2ac9799Qrvk1g0etyYbF%2BLNWi02iZwBAjsqHplacS%2FjD7Acfm3bgeq29shK8jZ3KESkK2vgEimg6WZ04crqlj9aP8DEZg%2Faa2VFnvCqRL5y%2B45%2BzQvJ%2BTh4AUszNEd4BRmjHYiW5l7%2Fh0h5T%2F357V3GSeRG5OJgnyVCR5k%2FUqMVjQXOf0kjSRmlB2mUvesDOJgQyycBcqm2u2il3KksoOm1H1jQnVbNLMKKtb3m28oeKA5lsZ5a7vpHWBNhiCanMxi1bSEmsMW8gOnPQvPt4kFX4MP9ke3Y5m7qsq3xxjj%2BgtB9hmf%2F0gtmO0F6tdtdfbKIEAxBsIUmIIXSzlXXUr03QHKUaVTGaNjyVvOGEWFHvmfEPO3fF0ejNvuZeNvWlHzYd8BD2WS04IfmQ3JFMFryhS%2BTavv0gUKcZk0th3fbWGdVSRPzFWVpp9C%2F4sNIswraemPT9l7q7xz4k%2BW3Q8ehpPjtJv8RKL7VV1fPeMr2k2PHf%2BIolVuSOhf8cVCiGh%2B2I9gDduikKdAHjI2mLk19P8Wu3ARPpPDaln3WrIBugijnJYf1%2Fv2gkCUG6Me4DCXATE8XyCl2X1v2Z0GykFUA3AcyfJ57WbaWQIY0iIgMHJZxt1JOB%2FNygd0wotGrwQY6pgHxE2cbPUGZ%2Bs21Kh9k9LDYSHUkdLQOlNLizCDOX%2BrbS%2FV4vAPnuGd%2FYe3kR02WNHqKZgAfiKa9BSAl59hbBqwH6Rv9FwhALCX7WCoduJlEZSl%2BhLlQ%2BdabDmHAsGYO%2FgUW9CZqQEnaSsVPbZFxkpKY0NMniEh5iv%2Fx9ayORgBqNoyCF5Cabtg%2F2k74zrFIFwTV5NJNL%2BrF2oLoKqgc3Dc1NSGFE3bd&X-Amz-Signature=62f33a1875f69a3834efc4dbbf200bca6a0d80873e0996319c09a4415c1b90bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
