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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIFFPV6%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCambmrVihzFL0NESZ1UJLD4mcXUeKs26CqDhfuuNZTpQIgEj7O6rohxyQU847EUzbluLAlOJ8rj8SPIBT2LZsPI10qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF7sthP4pVFRczW9JCrcA27UzM%2FUmXKYI1P0j%2F9VgF8KhxIs5LW3DQ6v9NuKxHzOZFLc3oiVe4qyq4el8z8mFhzOToDBLzW0fQCQS%2Ffuz0e1qca3jomBwD%2Fh7UwmZqxieKiL4Gp137yiVm%2B0sW2eDg8LPZHtykx9boa6KI%2BxvSUw7BI1%2FRRrerKqaa4lDUzm4MnT25zAD3d4XbAdNO8GqBszzK%2FE3vHogalQQHDtAvHZ2AQFNu7px474k9QWeEGwXgtxcIqUufnR0kkh9cww16IYoFZN9BJwCnNZ7ctSBYoXSW1sEcjh6kqbioGdRBHif6ZcC4R6bmoBE3TgQXafdAa4uN2rnsneA2tftBdfzIZzWDRY85rHtwNTDwx8z0hXU3Jfmh9VmHfwH0vhV2VDV0oNhWVNILKMeRBgC8HhnEXMtEtYszfAeKy4QCbsEw162UWsSVYBmcEPj7xn7p5h0zgT1X5xAQVWh4%2BXa1ZcBhd5LdB68ZaoBa7dowor1%2FB5wgatJSn6uCMrIGMnEV6VC0iWCs%2F3x7Qxc7g2Bg6yY8XlxWu0TndapG8YHTOwGxWWkAIGHAHqxKqfpT29b0OKZTo3yVpqAs1e0EwKIknGHi29ouEAQ%2FVpFEG8OYopf8h4cHA5%2FSTUxGz1WMnvMKzq7cMGOqUBLd0noMoPuv2VL2sPF55D%2F15L%2BQVTz%2FaUBUBv52T7LGo83FVeje6OCCcSBuqqDd1gIWJVrsfqcNRmHRNRFcUU7t4X%2FwG0s425xF9BSVXvTUMKVpE7226coiM8LCPk%2BMwGrqbYoMgOqWy9g2mS2eYjtTEEVKY0M2A8TAyL%2B7oAm5YuxcijrxMrDfUoL1ZwJ4N2CqOWOR5%2B57RocJvLCFnzXvqqHYZf&X-Amz-Signature=08b5c32e9d073becae7f44a93c4bdaef6fc5a4f80ce36635e023a8cb9e82f518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQIHMZHL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3kOogH8%2BJTHTIaVquxnnB2YznY5uaIaZUGmiJ71vKoAiEAiFaJd7zilp8jZWU2oxMxP8CoZ437u7%2B1oRN4%2FzYdvwkqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrhb6npcc0g59pbJircA0MOdQbHIARCUPQ8YLb4cnBsfCU3vQ2UiFDSQQY9bYxlzLdMLoYXE3r12rby9Sg%2BAyjf1DvzsIWZOUBPwoIRN2JLTPb15JTcKassqUgIJW4PXWIMjYx%2BWf4CgkYtXiRWj%2F%2FddEXy6EeT%2Bo3YNWSRyOcGiEjTyIIDSBPz4bOrHJjK%2F3%2BRPyRm39LMrn9GES4EqAk%2Bxn7PVi2GuTQ%2BKDbhx0%2Fi79jDZuyzEItxxiEa8vc0qffOolo6XuOHxGKxMgeUKWSJczebbx0hFpt8%2BBXyeHayAm1jVVP%2Fpask66FJ4MCMCVlscI2QL15%2BPK9FZWl6zsnHqvZRPKcNCHM%2BJg91Qb6pxibzKfPQ8hTog5CJZRozdeTvIvJujcbtLs4XFpCePi0kedC2xxh4WLfjtKr8KF8MrQAzITCMqDyyvVG6Yxa7P0zRxmrAEtrB83y3gyLLQ2y2B1YebCcWSsbJLEQ3lWtdAacnQs3JkkNxbKbAIz%2F0V%2FQO4dCYp5wI5DkUTuIB9aZK8knn4KYuD3arl%2BVwBVw%2FBWsFsW76gTdsrM5jm2VjyWqV9319TT1Mrn8VQGV5VCV6DLoRNM90k0xuZ442UD2S2iciNm3jxk4nelND8IWtPZNcK7ANYATzb4yeMOzp7cMGOqUBMU8MBvTWuQVF9ZtX%2BTiOOX8gFfTMZZVntQrA51wirr4uitMCyM7BL5JmeQy0uLfbOwexeq6qCzH3otf1yH2uLrTuf1GNjmGZYzDsTZcYt%2FJGZ06iwEdvgbcFhu7umwYpqg0BLdlunqxU%2F2OsFvIojtBt5IbmDR3zZ7hm8EPSMhyWH%2B6gPBLUGhoujskhIgqazZZwoQyS6N7rZFXrZd5Jsl12wXEp&X-Amz-Signature=02593aa28dc139805e503860f3745c175da9c61b1d0ffa925716a712fcca9d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
