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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QNVE2RE%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD51istu6B54OMM56uffWM1lQTMVVQQQ9BiEK5LlfYqEQIgaj3RHtJZnIhCoZxEpHb8ZKUFcCwfo79wN0Tq6Sn5KMsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDC7ywr1WP%2BKhb8VdEircA4eKrpTDAdphP6T%2FxX6N2CNbQPLjpi072%2FYSaZ9ImxA4bAGzWuxZpu0xhQGcdz1Nlt9ubZkedzmvucNA3ae%2B%2FptiwWVd7XAb%2BaBZxC8gOzuiS1dxreQpJb57%2F44I8FS0kTk3%2B%2FKnf8ItGXqvgBnWaESbEP5I1%2Fo9cfEKB4TOHRDZ4VXalPaqc%2F7wpLvNVRt8m%2FT%2Fd7orjc%2BSoVQbB0GlIZX91FlKGl6kyXMe%2BcFHkPbgMVwfGoOQf2Ecw0SuFluNtVM32jrHHXLCj8uYHHw2G2xFhIHquhIsosl7gvNse%2BUX8bcWCrugc2ae7yKwhwyTD8zZ8YetXisS6Mg4l37nbN5hWtFjUZcS0hSLKfeTG2q3VVNTetr18oWJldxuieIgmtTXIY8JegYOPUcX3iukDf5brq1gNSVBO8KyCN77FzBleqNt7CQDr7GXUdlyacL3Xr%2Bb9iqLlLHN7K8VPpszi4HWOlxDyk6nRTrci8LgoWNsQYBlgevrXBd2iGwELM7%2BPEDDXZ%2FRUgrbvUbq6XX6gEcfI6VDuCKlS5Jhr3YuXEy834chSNepbavjag0Ksa%2FLSCvAB0HKrimDWX1NeETIuULifYZSzWCDGdU31lTtrO3Iwixp1nnhz65eCW5xMJO8rM4GOqUB00oFsSAZJaWcxZ%2BrKHMyrukLRv4CVHgrQsumpBaq5Q1ftA6f%2BwOyM2%2B6rzMU3mdYB81ev6hkFBce9J7XfLZiFmmml8b1W%2FV9y%2FnPkUx%2BHyvgt%2F3lavPyOUHALfy3LaW0bQj2sZ3eUVzRhaVTKcSqbtJFE%2F6N81W89aiskFMPO%2B7SgRNS9%2BCLHy5r8N85EtXZGXZXGP3KiIdxwl3pvlFdi64RG9Bg&X-Amz-Signature=14d92c5d636c3a9a26e7b70565018c86d8353488ca5754d52d30db216350ed6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEUELA7%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIER82kitfglp6afXjl49kohDSRId9n7L5p2xJbIIbwNuAiALiPJbRMFFmQ6a5%2BD%2B8lsrZXGdWc9I50yGt8gOhHrjxSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMVvKCwr4BSWZwdOEaKtwDsz%2FXzFwXCDe5rbdiyql6MFpTamsBm4a2uuM2bb%2BdELK1s7qbAmwym16iogUSSQ2PhGN1QgMImoj4CCC1eTPlt1MW0T%2FS%2BxvwLx5xsjFAbnlPiCJi7KrOgIbozprKg%2Bv363UIUuFji6kUP6Ba291OiDYu4cR7UEXZ%2BwbVDAU4inirlcp4FcHALmaBYWvNoAC2tFx2TtJRtMJWLxhAeXW4FOySNSZ8KiZXVd6DqnGg9TPF57RF6bLLyj%2FICyM%2BVIYs4kECh7kvbCwnK%2FiX8GEcynC31Dskkixh90XhRCP%2F%2Be5kJ2YShj2UOed0U6Dn3mIULphLiqWDbvI%2BYN1uArhYXyE%2BB7jBAOwQqffot7JtIEklkBdNVYEF%2FQV9NTmOBjVQFSv1TjnCKmLIy8cUlKwmwhGHXbWmEHSVJrENYNYXA2lUMTgdgwToSc23crnr7rtscpoj%2FB%2FyO%2FNmNC4rOw8csjUculJvj%2FVwBUHw3V5fDOcM%2ByhYu0iAcrt8GLOcp%2FaqAqUUIbhcslaNCSjpF3x7XJn1fMoOJUl433RW5eNyPnsi2a%2BJRKKsISIIDxDxWROHdrQG55o8YAjCICIdt4ldltxEDprZlO0vthzUTaLpfPFEvVRvqbq1%2BbHAlNAwjbqszgY6pgHXYXgXGJVeq2pmygxjGGQjdbKXa3xsSD%2F2wduEwaSFLjfHh8Y4yR9xu2XJnD2Q6Ps6AIY%2BB0S6%2FlUwhtyVJV8%2B1LEzrz3P3CJotSVj1CDN7hO5hO0oVHz5OsqhEcSY0w814su59ZZi%2F5EjgBbNeO7mMl7B%2BjyJB8YKXUwl9ivGuwlH8EWUYdRN8l3zZGGKFeMt7U%2FDsk0yqDA7SHcciD19ONfsxQNy&X-Amz-Signature=4373b9e1ffa3b2173122934acef62a08d0906d60756a0df10e6e9c9b201766e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
