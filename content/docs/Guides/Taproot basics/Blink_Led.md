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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LESVNS7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDdNTIcicNMzhcchK%2BHzWErLbGC%2F4ksDwYZjzz97EZjmwIhAJ%2Bj4%2F%2F2%2BEMS97n06Jhmab6TDIT0kOg61OcyJdnsDuTDKv8DCHUQABoMNjM3NDIzMTgzODA1IgyVCt70sHZ%2F7A4WU0Eq3AMdIeLzIkFnjO2w7FPUPuGUW65MyYMw9%2BPrPEg1NLma9FaR7W0oBMFxF7W8EiXb0fP8KClsrAm%2FS1QrVrqlGijt%2Fsg2%2BFJjz0VQdUS65Bqbw5H8JqmAE1thvqscPmIjopTw%2Fm1uvLPD7qzkmWw4wDy2P%2BH445M1cb4iIO5NFoxiZaSgyaaoxDaBBw1FmARdE%2Bzri%2BUhX8yfyjdS2bvZuguQYaPwzAl5EFK4X3U5q2M01KMspPxg4pLPaMBOZJVfVmcoydQdCJN3pNxrDhKQ%2BZv5wDnanDhoUgpJ0OTxuYKKsj6rALx7p%2BmsKbUEeeE8m2YIbJ6P7Z6ylGiJfEPXnpL7lxPqBqXpPpE%2F9ilimzcHcQc%2B8cN9ow37nU7JTNnB%2BfrgkjvuRM%2BPJ3wwq0DXA%2B3E8jG5SvCm5JFQ5odZ0Znc%2BWsETwvOtXeTKkSHlb0r5V7yxItBM84SrYLuZGC9MHLCogHDEmP0DMq0sZ6ThIlWpiD55hYtdwth5x4EWXtDVG6G030l3t7JgNlPVs0LTjO9AzOg0Q2W2b1vr7bAKhn%2F44DUK2eTavurYbiwKQLR4Nx89AHMjnMgIxfOMa9F5PSjsbICrQjVd2XvyGSRQaFDnphgp6DatmgYVke0ozC%2Bhba%2BBjqkAa2ELFn3D60eIG9mUpG9H1BV1GCnWm9Zc376MBv0NLkkRb%2FYx7uUZE6jY0EA2PHAeuDAoL6FbccC6kHWfjo2XuTpGPifHn2aMWX7m0UUiQ6Z5ITm23bQyPoUxZXY7%2F55J96bPO4uF9jD4NwFQTAd55uwRslUeg28wUV9DifPuAlSvrojhvMMovE1rnx9lSuzVuG3cLviwIMnhaFuDb0OfvmcKOvQ&X-Amz-Signature=5096a82c87cd09148ad49fb5f68dbc256382b9125693eff6565db9cc5a15f661&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677DE55JO%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDS0nVXZQWJIcaPJJ7God%2FuwIUXLRxT5jkdZ%2BgufKRmVQIhAKZs4K8xcddEYPGLaIzaYJGriGW179aaP8JCf3VHwLLaKv8DCHUQABoMNjM3NDIzMTgzODA1IgwvqOGwFy8TQaTRs%2BMq3APIEpYsOhEXaCnuhHi7A6ccFxkgkoWfJ5cLMatSiPJn3H2wfWAD9Rclrr81%2Fn4xNrohrQLb6XXXubqoFkSZM89nh0Ww9ge6G%2BFHFdlA2GocpHCcgzDzUg1PSaLB5mf7rok7EZggmSW1xgg%2BGjqg58HITT%2FGN3BwCL67MqGFu%2BFOgmo60cIHGeFUM1uJS36Dl7GcLkt9bFmcIG9r2PTuic7NJ5qJvL38fc6I4pQF99d0mMmPaNdllxy2wDBG4rX1nZJe0vQKHlOnjloLoXRb5TgbINXSYPzq7iPpK3yHuZO8FsskWOSQRm6E52T9vOeFYF9wBQF26RU4po1u62jQiSTeLPXtfvTP6ybsNcPxtp2C6TMbAb4sla9Wfs%2B2rmHOgziY%2FUDdbR3Sfxlqkt1IidduNl0HskBFFClHRrd7JOcodDEzx9VAc4rBWVxzfYkrhU0N0R4m4hwufgVofx7B%2BhM2asOD%2BswZQtbYUHxmbb6V5WbNV1MkCKnYVD9hOt5B5pAVt1eU7noyJ9jAJRsS80hsFH8CSmTKwk85WwJw0iX0jW21hG%2BC8UpA1NDINj7kAALTS4jAEwjqmmoxoC6oVbKAzinjpaVdCsdnX9M7JkK%2Bv%2FgLvwMOzwVHBjuxjjC8ira%2BBjqkAe0pbvE%2FDxWCqMx5UFBzC%2BEqdQbqTn3EaBKdVwqPFhFtxMsQeFs3q6WCN%2BvoMHs%2B9X4zeHuGQNUO91bUGpvwNDptIfHfX8otUEcOy5V%2B7haM63gppKVnTiae0Or%2FmWUSvMdb%2ByN%2F0m%2FzgRl%2BmuR6wt3jJUCPAaIAx0CPfWSeBqMjDtwgldoCNQL8L836qMsP1nR3Yzp5kMdVP914u6FMTrUwMVwg&X-Amz-Signature=1c3447815443e9de90e3d974c8ffff0f1930100a04724053950d19c8f7f1562b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
