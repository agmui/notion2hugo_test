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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIC324F%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHziY45Z22CelwTLZqoqKSJeQklaAq31%2BWnWRJZlkO3iAiEA6TZVD%2BeMxhTR1e3Yvkmxx%2F31UOQQ4rbBRt71keh5lpkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF2MZ2ymYziik8xQ8SrcA%2B6yPxC4mmZrcp5zzfSHxd9L9bjYSRQMVEcuwf%2B32%2FtZdDr7P7d9JEDoYzRO2Dl4D6ggPLQLDOW%2FlDNhjVlPy0w8dMlt%2FLwmExhYRmFk8nx09yMwhi%2BOwu0pRLGR8Vz4LsdnU395%2BtV23%2F1AzcmIpSLBRXusbaC2bTrFlTNBgdr%2BexTMYbGhVykF8dr9G8FGrcORECCu5vQwd4LN6sHNDzUFkqwK9v0ZxzkTSB9LZLUX4WPgmgQ%2F4yUFO3AF55AoRBiMhSwBQjjo4HYjKN7IB2T9OrTWmt0rA%2FQEGf07xCtQEnElbsYx18%2BS6Li9SUIIUHHfiSou2QKsR%2F6iQWtrSkJhwVtQ1Le3IGCNUcA4h%2FCQQzQRSFZVPi1ZPwrE%2F8PrYhArjfkPu%2BHysbfMQug5d%2BlKYSDT8Yx3j3EslEfyvHHcc%2Fiq%2FbMzY55hCNrVeoT%2Fvazycn3W0ElBfH84mQCGerxbb3lunznXv0wGhmYohKM5o76cUv4E7BFGs%2BFttIemp9Axg8gOfhtlZ3R74LMXYWQcLv5%2BxjbBJTUKfHhYw3TIacAkuEYsSYA19uEB2%2FAePDb4kHjKevL9wFPt5GiiGR%2BcptWenDGvf5AJTtfFLpSy%2Birg%2FiliqlrUE8DuMOb378AGOqUB6YRLAmj%2B1gRQsYMH1erGA8m84ZOC%2F7XmLqMlFI%2FiOCIXF8YF%2BzaRlpIuQQkHVAh7LE6fQ8kG4%2BwKYGTOOQc0%2FB8ATSIwJjYJEnu0d4fqEpn0MxLQPpsLdyzDAXxhdKrf4O8sE8%2BNifD5QlRM%2FMlTBhjkx7c1bNIUUK2VwWmX8FL1s3UaUKJnrTJNqDfPfIjdesjzO395qDDfloeN1WpP4p0FKWCh&X-Amz-Signature=ec39189fca1482f1a34d3c9fcfcfe41bbbc11a118d5c60c73437277c066c1204&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMRM6K2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHZCGNfl1OQUCVaL9WxMFXfIjFC%2F5OYADkMBkVdP1f9AiEAwVFwGWpB2eO1NaRaWbPezqEZNTZ69l3Xu9V73krMEHUq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAnvGIunSnTkXeq07yrcA2r7iO36Z84RxNWqW0ziNLYQ3BEWokshmVmd8mHHuSvivFiBR8d1A%2FFLTqUVA5zjrIw2bk1mMF4UobnEc8lFnQpoOOBFmILaCnRuBopGTgnJeea5GFoNRBHQQz5gNjkS2kGndfB%2Ffl2KrmUpqY%2B9ADuuw%2F01jjT%2F%2FNOtYBm6UHxTZosGddtogqV7CsHqmmWLNbcLI6RVF8ilm0TxeA0MXQxRAXmz96EJ%2B9P%2BXBsv2kwpV1%2FLJGa2BwmrwufCMA3o6XcpptSOXZMBtiGBDfazGIQccjRryqPOlbZu13z7V%2F1Nu9kZQ%2BZYeR%2Fm%2FIFYR6YSiJnSj9ntxZ2IhTbB6%2BrNRb6L7LXs29mFcUXf1F%2FfQ30b3cNUtJ4bx92pLr6NWU5XvvO8VJo17tP4l%2BoJRE0P7wd%2FmThDrdTD8SrgRbsrYGZRGcJVcnbEz3aBDYw8cXYbI1P7YyEo9VbAdK0qH%2FzrZvJP9X3oRJzhj9wWBuD8ldyZ2PKwg37t929S3ZEuiwqiEiYfd7WMAVNhxaXYfI8GZfA8JxwfzIeHCCzdRdHQpMKZ07Dpg5VoBFKL9WN0QVuipwIJqmH60woYP9e%2Fkz1OTdM12ZbkIhBmwd1YM90NoSfc0a3ynUXsD58dhmSIMMf378AGOqUBvwXRCjGR%2B1Ml57mB%2FvHZseKuFaSFfzyjLKLeR%2FkADMGZAVffZZY6e7fsohBGoYOA%2FeEA%2BhT2tk1jdQBPkjIkXq5SptODPOqwozUEvqIcDWPWnY%2FqHIy2xef9XbTm5bvKv1lEvMbUNB3dmBsAzf2Uqxn9rK1dPQO%2BLthXR3enrrZqnhPq9ZDe26Q%2FLnX7PZw50CuupVGjRY%2BKHuGpPSBcitaExfJW&X-Amz-Signature=4ca2b518c10ae44361fed2936ede602433c0b3fe5bf226498179181c93d448a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
