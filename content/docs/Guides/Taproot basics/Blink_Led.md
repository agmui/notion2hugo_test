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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673A67QPU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEfeZMpBww%2F2Q%2BD5KmGQlRSJ%2BRpQVYSU9nTa%2BfTuTh%2BFAiBI7sPpe%2FMjlj%2BQ3L%2B7T2VuqW77EXE2tjqUgpm63O7A%2BCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM6c%2Ff0vBkIPHl26BLKtwDSpu1Xvd%2FtWKtnGp8JPaH8SrYjUVI%2FEqxrGxpY1yp5pmLvK8dXFVTx4fd3cXL5p0PS2NB7%2FBKlMZV65jBtRHKWv4KqYtC4CvsBjdWRkwSNdLf6KNvZjs%2FPrdWvnsYSo06%2FCuLA8iO4GPxfcsEZ8q8wl6aHyHa9VzEREOXUA04%2Fm8tzVmGUeJV2Az5cgy09Ff808X4Ezzg3zvzu5lQihisnE7h9iOnypQeHzNx2OfdJVDLBcVWCAQq3G2C%2ByQrLPO9wNkJ2qaHK54uD2PR9NWMds0t5AwaHxmZ%2F1hac5z%2B2z5HDZMoKpYuoQj4lpYlJqgePxxI%2FrQd0WuEcPO1WAfVdHDAd6DSyhbZSD6ot7%2BxIVFPmP6nROYkgajskWsDmh0Qgfebbya%2FOdVrCZF3cJqHALifWpG1iZ%2BIaSE7zjEhikO0%2FrQYHK%2FPZRJN3hW71oKPJQ25KdCtwNfzPuR6vCjP9BaULV%2BNlOXIUTIwsi95g04sJD7JqI%2B7qjPZKcIS8qW4ALwhU%2BDRxy%2BcH9pTRCNDzDnpnciuDsS5oLz2QURdE7FQuFzcxdmD21VeT4aTiLKF9OUmSTNklGar3dRkkuJ%2FXuU2C362n63luetm6mf055TSDeTYF99WJCa7h30w4PeAxQY6pgHpe7WuWvJ3jIz6o2DyG5HP24828a5WtdT2T2uhOQAvjIVLDPnBrm6s8pqNZAJ5pn%2Bj8jx3ZA9KDllp7SOmZ8q1KxCsKAiKP9Co4Fz8og3UTu1jUKZPbaeWsj6VLnN6j4pYtzCe6losmNkQNJLXpfg6xg80TpWu%2FpUBHWKowVwnHI98xoupqxPgjT9EoJcP430wg1vZ2lUrDV%2F5kOq956U%2FeVHvLRP%2B&X-Amz-Signature=7f91af590748abbe0e4d7fe86345cdd0d0731b58b5a6a837dd7d65d779ba8b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOKIRR4P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCGHDqwWb8ilTKRk2jbAf%2FvRhuGqUY5VL3hZc7PWkVwqAIgBBjBLm2ehNpDMOqzZuFn25%2FlveIrQcJk%2F7MzdRegQR4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFadTUC2o3qp4PcuOircAymeCNb1K041A1%2Fp4fEYI1aKh0a%2Fu5aUlLI6BHJmKETApNxrG44skW2H74NK6fK5DZWj95w0kJLVHloxfYDjcWswzWPrR3fyaBZUMCfqsNUyB%2BcTO9ewcJDf%2BdzI9FgJfBNbgS4pxyBYFLjsSRfWkKO2ASUAZL706p3XHKkDa3H4H15uZQDRS5Ghjh%2BPmKhJf6hUoqvqoocTRp7CUIZATlIxHpesDBisqhJw5KKxS7IDrIUdcDNh%2BCHUnNDh0uFn9sZnjZayKS8DQumf3SuV%2FLBpV5fdqbUE7zmQFm1mRxCX8N144ZqRkONisIAz2PIUCCUYY%2BEZ6t735cIKMiLZvlFAxZwb4SltV6zljOkVfiDg92nNoGmE0M%2BrZY4ZYL6nrf6mIZ39Rr9ZQZf43MQsnBRnO3HOVJ1INIbBL3xfxt9MkhwlY%2B0FGmz6ysBiCbMvDFcsalAFp0oaIaAhEW%2FIu7EHJd0tpxbejm9LfGDunKfuFG1%2F1Fj1iOcjDES2Fj37eMpZFPvcuGj58Xz2unUpaX2GviVKP63VAofvXDnMZMM2kOd2YQ%2BUpI4T9JIxSElKkj5IifY2yJCudqZ6ImCUKif8lXhBFmhw3t4%2FAsADUWydbNvh8%2B%2B4rns81Zx8MJD4gMUGOqUBZQEKA00B3YjMazaFoS1NlW3D4SnM3E%2BZTcJQqFvIWHkDX2%2FenQ4H5QOUMQq0n9YO9K1w0jMDGZtMu3Q8yCBSD57YX%2FeVZJeQDVjWix7uFseRaUVnZ2ZpJnA3uOecwEjPWO51omZW1wP9H43aYfDVra0N4X%2F22JqBXPSNXxh9MGBXCYBmZXfCme2WVkC2auF728%2Fcv2%2F%2FWWJ4CJfJj%2FdSz2F2JaYO&X-Amz-Signature=5dba2b07beecb07078b183c9c7f884cec080fcd3bcb1820b671924b02684ce87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
