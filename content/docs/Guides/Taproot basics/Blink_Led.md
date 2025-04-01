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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GGDHOLX%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBkWRtdn88oDvTiqP6ZaNeIlPo%2BlQN6gzCXxqXnFKhtWAiBC2QEfR4irZMa%2BbC7IieOP%2F8QzjKubQDJvLyLEui355CqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcmZyxukYwUohUmktKtwDo3nbptLtz%2BXLLwsWOEeZxch9eYC4EuIcSLF69GGp6puLrAhnlB7cHQyPvfOX0LFMhBQbz5a3KHT6QCk4jl1HN1tlxjft5v6cuq2sdBvP%2BvsUvRIqeiyJ%2Fr95nLFMBQEAbJiZRoJh8RCyjNGI5qwEy2GFIha6OIsufhFKW4lRfsG3A5cJt7ueIwyLx%2F4fbuYb7IJ9wpMsMXPy%2F9jDEuFZpwh%2FIO9%2Bi4hCr9gTcgN7zeuAAsByr44FDcKyjErezDsjeZqVVKXXg104uRoJ0%2FRZoxG4VxE5TLpS7gR%2BX8VOOmWXJ0OksYHBAVweUJmvAFzBIizSYIx%2FzfSmt2Ir%2Fa%2ByLcWTCgM31t%2B9RcODWfGLo2grArqwwMbY98B%2Fv62Hsb87ReMHpPci6IqYcp3Ai6n9HdZJ7AJgm4Zvl0HaFIFg38iflEyM7P96qOU6S9JbZiTEHRISCxm0r6GULefGPdPRC7QMTNAIUjTXMv04raeSQb65ZGoPb8ci3RcF9wkWEJqtxkKyZY6s4Ov%2BO78%2Fl3qUENoneGefqTvjnTAL8u7QcLpaHcrNcKlcRbUmmkHuMmyaw585crvaFTRXAt40ku8dUTK8wd7O0z1rFAfexxZBqKfbOZszUBlBgYgbfS0wr6StvwY6pgEl2eLby5CAQcT5A3OSeMQs%2B%2FSEcI08spnzJllNkbFnDuMcgDiETKDBaf36D14oJPL3jbQe%2F7FiOnKcbl0zhc3ITkRm3Q4jWB6%2BbRGonUiBDBKTjRYAbQ%2Bp4bvR93jmNGj5McYHStkh48GSktWHBV2nzM0FzNRmUX2c9UU%2FxPHgUQMYmW0lf4gyyo2IPneF4peMTQWmr6wFcQ5S3%2FHONZdVJMBN9F6V&X-Amz-Signature=b305a2e8f61a5c83b646b74d0c0baefec7f23abf370788bd53ceeaf19899b415&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNIFDVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCcjlgCG85%2FpUtE0baNYAI11M0198kCjxUgqRGimcmkvwIhAKAkn9yaZnMw6EDRUc9SOR5Rtmu%2FrbAnUOg3bjzEfT8AKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJcvXtyudwHhUch0wq3APzev5R0LMWoC742zxzSrpvNX9B13y762RDHPyFkT4jSGzLigEsGzxqOC2y%2Bsq%2FdYO2vcj0IowXwmlO7KI6BfuB%2FJVoDM%2Fb%2F14eJR6oleLCC%2FQ3R%2BgFZxprQYuKJBZpRN5agAmMYBnpniCryyaqptFF%2FmJlpOUalICsDhx8P4renGKzrIaTr%2FYmdNwVoR773sTxICmc8pdzDWGQrCZJw3x0XZaqcAeVT7bX7%2BGBixbHRcBF19b5PC39oiV44LVmUJvrS%2BjpUKdldNxT%2ByJhfUIqqE2q3Qe5H9ghefQoJtVdekTl%2Boy6Ka54Bawy4LIdolIhDCxXTmtX9bfyXitCJewwhv%2BvjYbrdq6oJ8Mt8o7w2aPHE2LDOp92Q8NmG2n7Iy%2Bktr9JxK%2FNBwRAlB%2FRPbXTJozmc9TLQozt4obVAKPjREttWKdZ4Zc0mRYXurBiRF2ux0px1P87XWW3krUBxZLshmAshzG8KRj603C5CjWsdZ0xj9B7HmK1hRcIbezSuwDrjQLU8uhnrb42NVMROAurhs9%2F2rMLaUZAf763UWjE88%2FHfiCL0vAlalHe%2Bty8p9XQ78cSNBj15NIuVhhrvJzImART%2FdhAnlrdXYyQnegNRYzF8oHlY0VvXullhDD1pK2%2FBjqkARgYtCmdBLI8TgsAcVd3B8THaIAIDVDytVQxCZ6c36BdD2Ua69QSWUJ8ohwkHFxfSHgv7crqIeHD5CtV2GF5y7T%2BcFJbgntsQDwsdJSxpTmBNp9BHZvz3d53o8rBTxZ5QtwYj3WoL%2FPwttcoeuMw8ezsaqRgFjAD8921RCLDjXch%2BWD7iHqldBco51u8RK1cm%2FDOfxR86nG8Bi%2FfhTt3jtcguq%2FT&X-Amz-Signature=b5bb7532c22083a868f6aae135bb431c9f7a7d5fcfe105861659ccbcbc04e0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
