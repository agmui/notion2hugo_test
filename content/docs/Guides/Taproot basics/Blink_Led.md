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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PHDO7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDaJ%2BGqAw9u9PPG3ty8%2FW9NEWBjAC6TNgbPx0mNWeSfIAiEA0JYE2rm9fvoD%2BdG1QYl9jBq0pf1%2FZmX5%2F7XvuetR5hEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrGV86O6L4FI6KqwSrcAwoiQhtzNIt5Yej21KLCS%2BzBOxYBbs3Oy2naoQkbsHWAEVZOlfVZS%2FLMtg8NTV01oTI%2Fp0xGJRYfiQtSLzngKQQ%2F%2F2QpvtVFKEpNDmt5ujxF0LqaokLcxv93lKeAXBgribeiVN4ZlI4%2Beqkak9CMb1m%2BaJbnCZOu1iss6vMUJGoJFdJEc0Kf30tEolQ9RMEgjZiXLfNMrIwJTTtJ0XC1dk1Dj%2BSjmkOPeX2CdWk9tl%2Bbmd2IhovcDen2HMPjAoZ2Q%2BVHGSNENxpuTJii04Q9%2Fv4pCn2j%2B7unmT1FIVER0HhnUV%2FVAhd%2BViBjMnUGzOtvvGEQdMAAY1B5%2F10AsZLDWeHAGEotJcovZZ85pt8cbN3NHuL58u%2FY2IuOwncCeiQoadtO6ETHhN4mBwdLahnLEmiPaRz4YtE6WJhQ4KA3NAHoCvia5P08W2H2rUBEMyqKqiNkCL5RyoQwhfrertK5xQY7iVL6Co5elsq4QJPbSOhdDEiowyVFdL6dpNf45xNH%2FQlxdwLNcdD0BvV3W5uTnczQIe%2BUlb6Z3Dps4h6FzBuUlaW8Fpc6DLjhJIR7T4bxGp08OyTqtO7iCjzEhUvwTWEMIDuXqID6fmx9k6ZU9EdNkdUDlqrtyKy68x9FMOnRuMMGOqUB6CjMZubmwD64RScFV9VReQXJBQh7tyn23MTaJNCKxgzHjPyxSTmXSbZhvXcXS1CtSZAWbtiCEUxwEYP%2FsP0Edtg3cj84YaaTigEqFN%2BcqDun%2BLXcQQQ7b84kShX6JlIvVAONpf40aC8viX3SedOQu2XApcaI135DW3nCBmJXewKiQofEGaL4wePHaOdIR3v9eBD2%2FplH7tNdxMHNkJtDG7Qk8Dqv&X-Amz-Signature=d15576679d3e860da36bdfeaaaabda6ce3cc1c192645e8ac85e1bea540468ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHO47X4S%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T091208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOE3Qg3Qbj%2B9t6sbCSoB4YuFw%2BjqwSD47gClJw1DWUsAiBobSmy9g4bH%2FAPyI4Jo6q92Cs6ec0M75ZcKg93BASaKSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUCt6FcfGbyGp42vKtwDYRtge4bxMRSQNQ0jkEQrH%2F%2F%2FmYiwfavnLTrJoQPveYxT%2BQLJ3hFgYP5WW7bLZsZP8xJlEnWLQtJTwEKF2C4WLfAwqGoVkMovlXmeXpgkOd78cO%2FcTvr953L0IKZPhhcWGv4Uv2bg685oRYfBPb6XNOo4Kfxdcc7d1tdFQlND05ICMJ3ChnMZfipVw1QZMNDEdTSVzluYV90jsyl6iKZf5bXEcIG1xAgAeESa1CmzXq9fqQR6N%2FDwj5j30mT9ght55VctUMvavbK5OwBQT1Xy7HNvTJG7zboyo0h8w1Qv%2BDYNJWJs11q0Knafvrxk7QY5M9f%2BRq2S1Pggtpn24owLeDjntcGKmEnKHWNfGf6C6NehbNy%2BrvvIi9mXU0d93GsU6Ph6a8CNhOtXqxSnMqRDv4%2Ft62Yecb%2B1JLscMSFNsNRTlb6t3vIQ%2FQuBVfYNTeohWzbguaF0%2F0w4PB%2Fp9TJPc33ovwdzLrHW3QQsIJWX2U4EfETR%2BTBAua1w%2FAtNgToHB7MESw%2F1XsdKlUaIW7Mviw6Ne1XPD1R2BslCaz%2Buvip3Ezaib%2FS7AXa0oejHqBTfLo4RilPFCEiiIIM4hFmBZzzeZnGpjq9PCaSFwPZx%2BgVIFMLgq%2Bdj4gEdBPgwidO4wwY6pgEauTJTjsbtxfp%2FHiWF06G7z61OOwQXelS0ilQH9lrfkmjUNfLxxnQPXAW%2F%2BkcRZe60FTuRNTKZp9AuOGL4iZEFxJmu2D5V%2BAVseLThD%2BP1lGjWdwJuD4LU3JY05l%2FE7uwsnYyYv9ffuTUBlqafON1v6KgMN18eJmGfpCs%2FzmGGFW9xJemK%2FSeVRTg736K2vRYCL3gypO7IVZPLLUoJzNdqBQA32IUc&X-Amz-Signature=59dfe3bad7df2cb8439285a70f562edb47c07330b5589f7ba9a309c1d20ff6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
