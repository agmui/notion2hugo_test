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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPIM7Y4X%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCJm72bWajniE4eBt0Ni4jwemLl12ceilyrJtw7CsQ5LgIgcQKUKWpjelLV4KN7tVfIS%2FeEL2R3tsuJcfB%2Bir32MkMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObpe%2F3qjRjcsCkUqSrcA4DyMROI6M%2BXSkY%2Ba65G3P36kygycYoftEAqxKmAGXJ8naFk28GThIsHWS%2BcfCNieeCA0lPZEAWwJfSlBNYBe5CcdH%2Bgas0UWcp3EBF%2BBpma06cXTfXZ5JqL%2BRHndTmPm97lDRcoojoSb8J%2FqSL3379qVJWLhh3PvJbVLDQ6jUYH%2FzE9a0yVz52EPXpXeU3twoQvTQ%2BDjWzxPvBTHEGjwPkRASYYoTn9adRBv6UkF9NN4TsEbRT7e8zlO9JbG9SZF05dtQB4FxPVCCvLrWKIant8ENDh1s9w0DZlYHEcvBkKsPsda%2F%2F9hH7VilU1%2Bc9RbJZEbOJhL%2F6NImfFctN%2B1zLdfbNSzgJn13MdpCkxGIcvOtCU7c2V%2BsSmRu%2Br%2Bs5LL04CftBL6nMV1l7%2BEYfrlLKvr4AtGlhw8sFa7hkAXdEAcn67zGWkwYIznSWY5SPWvx2agXCLMWiVynjcWmv2uDPc%2FX0aqIxMLGaxOCbP0SD2rT1fdPhE9lceFMVfJPcQJAIGK1t2Zxj05m5sQ0gbtmNEtUQKtCa9RFYAWwXzM%2Bt2zq%2F%2FEe92iRkjyDPIDcO10sfipaCVaXIg3JIx0gTagHCFh0jKQVdPPpM1xexTVvNlXppjauK5NoDI4zv1MPCO08AGOqUBIL52NpO%2FOtzCC52SksPUWW6tTk0iOz1mI2L53l0IKCVbARlqLecGhdROb6UqCkqb0HFfMSDTOL7oCrsvB2%2FxUjKp%2FBoQAtuJTCe2wgZZE4eGim67ViBCUbWs%2FgnWtYsm0NsB74UMK1bqaMg4uWAUKffe50%2FqHdDJPwbFXmQJGEglFBh4Rv6OTzRbLIOnwjeU6O26z3M0QOgtSl6f9IseI2FcjUDe&X-Amz-Signature=bd8533d8db21dcdce2370a1e6e0530cebb59a458ac51be609abbf2c6ff65f6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URAGGKXC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCzHcZs06tc8QVtWbkLXgf9DloXUWkUpHYgu9g1lgVPdAIgenoXsrlRI%2BH4P59PE9JIw%2FnQIggxXggYt%2BFDLb2mAyMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSa2RNgshdvhpJ0mCrcAxeSIIBIgHUjamz7qUGyjkKXQAuOXIphiF9a%2FhjG2f6Yc3Pms23WQS1snXuzhjVInigOEqxMUzoQjwV17YUK7KXHCWHXF3%2FrCoByx4kW1088xnU9dhuod3jtpiMh78nK8s%2F%2FVvVt%2BY7QLrJWLDsRxY%2BSzSpsWuVLWF0TaVj4P6rqKE0sOgd%2FLPufmbuMJENZFJs4MD7VFMOVR624U0Z828UVmMzgpcZmAhyGDOf0T3oXewHduMMA%2FFBnwUugXvqY7UWTI%2FpOzl0o33omUOyL3z%2FANCYeYYAp791xPFCsrk2YMAe8olabwBzMikxwjDXifIR95P7X%2FP9%2FRI%2BcsMWmpONoa%2FuUerM4KZ8yRHaQsx%2BY%2Bqga2hSWQAWZ%2FfD7v5pJrUkwPlO9nrGMqsc3cGrj3tRuS%2FqwkjjNJCKB%2Bicx0fKe7uHmFReJl3voC9Uf%2FXycCfqmmvvXAe9e%2Bd1qirL0texQziwuGllf1lPLli0FwDI4DF44eiVqVaWkh8Ulh9u%2B4Gvp0i478MvdW6yDLAkYUcRKQwM48MMjOP4BQDfMbNb%2BiLytBbOie9mcG5KBycrPZQr%2BGIG18cg2TtmobeRMEp3l1lrKSY275KgrQDKTnlAOTcBsBjJLiTGLPzh%2FMJiO08AGOqUB1C%2FMe9qpMDQ9BPyNaaJIwCcZpaxt3zkfE69zQMN3FnW3uw9VFznWUsumqZoWAO77T16XaQYI2NnNqTIRLQy57AapRrzYxqT5oufZTlLLQnP4TPRXugowsdF5p%2B7MeKpxBGc4HfObi736vEV1U3xCLwTTOgGpLR8cRgY3v8i3PYPTaNIii8L%2FkHHhDa8dFVOO15Jx%2FTOWM%2F1QiDsesyxSRxM27JDJ&X-Amz-Signature=d589e767fd1daff5574465754c65aa79fdd3e3373e1c07f125e4bb0ef4a60be1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
