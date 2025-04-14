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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOJSQ2I%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWjNQsEnpzjvai3m%2FLaEEVo6Ktg0ee8HEZcrU%2BwFVirQIgBm5Zdr8vXwYlEePY%2BxsXj%2BKQkMvyAKtNaEPsv2n6y1oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJTCT6gPJeRwswlBRSrcA91k1FXBYu5qbipjOwZecdHsWOcfnDNU%2FoRn6gBnnyJmNzXPptxB1kWJdR%2F2OzFaZ81f9yh13m0c5rncK6rI423RxwCQ%2FCvBGfvVCvvtT8GE9rMeTYHMPSt72SbVmKv3nm8%2Fk4%2B32wMRXP%2B4uBIJakcXvC%2BZcjBry2NyGToqtEeFM4r8dlcIZBLMI0vk1wUuMHJmBTB%2BoBie4jf5DD7sLdaYyPJ8%2Ft7eAbQgAbJnRdTR9EWxIYWDXbiyx1j0Crc9jtkEyVjeVHOE3RC9y0cJJ9w24ctm3Fgb27XLR1xDKCJANTKNaLQrVIHS6JTQ%2Fxo233y%2B7YwdAK6iw%2BLdusVK71ZeTNwlWdEs6r0zfh5Q0WMozbmNkbaAWAgeiG5SQm%2F%2BcnDd%2BZySfxmtOQp6gyUYyyOCUIAq3JwXhzI5qJiYXdhkQmpnlpEU0zyyn5sPWqe5egMbVPt26qLq4P0GIf1xaegrqbdclQ3HHiCaBx92%2F0oXz%2BH5LuEK6vlZYuMicB80kmvs%2B8o2qqDcMmv9NF%2F2W04nHz7CJ0cw5V0vuiKslVqKaiEJnJBYn36RIhkKcLqgcZk74HmXUTteSDwPpH8XkJP%2Fl5O5yIa88yzx8JcCf%2BruGmIk1mzeoeHfAevNML%2BV9b8GOqUBMfcRaEMsPOAGGFS%2B6Z595B5xK2xsIGGVQ%2F3lfcZJEj1ybw%2Bd%2FD4G1tkZ0yZBavm3p0nQylyh4YvKvaWdIsN%2FWX7mKmXrct7b4WMqceORiSSreVdqE%2FWAqeljtbCtaNpuOaHPjpJAz4XvamnaN8zBMxKvQnWePxh6cIfKrTCJJj468t70eI662rzRLSokEiDnYqIXp9pHxpv466FI3D4I4OyFQzqG&X-Amz-Signature=e730fb0ce365ec24bfbff75147183396db153ef4ddd4a0ca6c1be8034ebe1270&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSUYTRAE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ2BZFDEb4JVoGfYA901wpks8BLn77nJTM%2F%2FIgUc%2BkUwIhAIIjcE8Cln45l5rWZ34SSWagUsEnnFqXGd3jFtRBP05TKv8DCBsQABoMNjM3NDIzMTgzODA1IgyZR81%2F%2BLfX0OHmyCYq3AMnhuYGOH4iDa840eJBHLkARkgpr86BBXb8V6A1WDQatJxrhQqQA2A5TPpm5VIk5hKCqKBSVcDl5SqxL4QtpF4UQMzpMfY%2BAmQMnSNlkQpdNbRKy7bXtP2xCm%2BfUSg9vHxD2RquCMPUEs8TzZqX8rDd%2FraUTlbGS0mfLpTl2IRDjYogbhpXmoq0kGZwbpnpenzNwxUy5T9H4PdVhF3rOp%2FGMlD4xJCz6oXWMfhstCL47FTOK6wm7By3mUwRRRfjes%2F9VHhwWbyoQk13vQRA66Lo81cNeJrgdlcQPnNtiLhw9raN9z5zKaap527iEGsgksjSvzxZBQgPhD2VaPv7LufOWZM3XpMFmnna7vMtfpEFO31pKziGklhdmMoVdLWfVIO7hX8TAapupbUEaj2Rqao8ntIreb%2Fa%2B71tsnEE3YZAgBlVxu%2BaMdCb3iYl3WRd8KY50MySZzlx6F14bkQYsMa2pKA0mWEXPJGslfwfZAOwZHs16Gz2ErIE8Q7eSuKipGTAI8cr68Uzw4ozL0HX8wMX03b8El9VzYxpOlZGufcJ%2F0FDL17uIwj8JUj6GAUZrSPZPeiPvn0F401JgWB75s4X1x30InwC2HqDOBZgYrYUiTeIp4gHFR97WUQZITCRlfW%2FBjqkAXCEEXBMqH2hZTNDya%2BtEQp4vkrr7JkOayJbolwrpuJ987oZ2VOVm%2FRFQndGFxoi%2FAPqJ1c8ppIqViajiJ1t9L7yiey4fzdf24laACZC0CNbBH5gUuxYpKzN0C1qjze9Icy4ENPqf%2FXYiv86caxBPVtbWy%2BCgD67HPdIEx3ZNkzpYEZLCihFTDAuGPuxbxmb3ImgJoWoA%2Bq%2F9hGcRGFdeJtupQae&X-Amz-Signature=edafa0262995d5df9c77ca81f5eefe20fad91da6bc3ce621d3e407456c82024d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
