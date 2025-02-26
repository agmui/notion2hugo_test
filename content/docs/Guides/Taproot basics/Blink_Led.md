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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEB7WQQ5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4Ox66c2Yp6buRqIkctXUTouRGmLz0OLcP86WqJBHFKAIhAOkGFBeD0s%2BXjnv5fAJjyNnitUQv4oB0Hepi3RtGoBVzKv8DCFEQABoMNjM3NDIzMTgzODA1IgyOul6yEEaa7d4WrEkq3APnb5OSmkNXO4yI7uA4t3k868si21hrkYXT5V%2BZAKzjefIbRik%2FE%2Fg2YuOJdrhrDK%2FQx197s5w9S80HZ0dPLp1BqluU1mDtPYmQgbLec49oHIlP9EvWs9Gxcf%2FFsc0BhgfqKWbkehnSy1Mjq9L%2BAlQQky4qqk4n26nbWDJVIpfBpWCwKPJixJXrtG2mfJhZMpPeAybFrYD3fHJI%2BfNvlzkwVr2TVhZR8k0ovxOUffrhrGdbUMEJbOV4syi1GX0WyFJJdyZNPFAUKB23Lts2ApjOZifo%2FznTnwP77g0elZY69MWJZzKQEQ5mf2XmYlw9ysY8N1fnhIQ%2F5YIHNHYyc4H1%2FVR2ol6DyhdBp%2FH1oLqYLmcdhYfree150OTEE68DTXQg2vGYpbG6VhiqMYNuRLEGxwbWCUpCcyJeJJ0sEPx1FbSYiLcgyfEapIGMEWaJKKvDOIeK2vOvkbVgcDHgdheXXKHS7tJL8O1JeH8v3ZyCv%2F%2FEwiTL20R%2FW40SLLMaRACucfif4Zk6g1yv79V0EB2euqLFX92QSv%2FCuheL07Iv0UDuby66tKCiLNZ4xt%2FFyk3HH4w84t6Qre%2FQdMsOYfTsd2RpRZuBcvBktqhjUwH1CtjEqkS078OCeFepijDDvPm9BjqkAWJRn3iKulolVwGHliATgMA6Op76CO2kB2Taur9TLqUZA5oTtZG5dI0npU8oOrK4hE90LR%2Fe%2FJ2DgORscFC%2FRBuPV1H7zT5nmnUz%2Bv5vxaXKSUMSjKSCP4XO5OhDpuccTRNQQseEG%2BOav60bNAZA%2Bv1xAOJ1ssY7dLLI6a4l1h3nCJc7YdabFoEYCVqMHt6ueTtgX4Mu9oPRnXSzvJSzX%2BjlBCWB&X-Amz-Signature=abdad81aef3904e11f9642edfefb424ba76e9af295ad34c24685e0f89c87ce00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZUZKYW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDxTk4wgCgC8IYEeyC%2Bi4xeG6%2Bv%2FlKf%2BiFoacG4AOaLzgIgDTr%2Fl7DXKmbFQRVhBsmimUlqhC4Vu1Rt2hy96STZjwEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHK2hcgTw6CWwDjTVyrcA48PBKMp7LDsBfEi%2FQ07giZ1DkDf%2BtA5jLhpIIgmVWMyj8RqLiGIh8UF8gm1eyN8jz%2Fkxow%2Bs4Qu%2BGXtAf9RYjCLjy9QfeS%2F8VodB2gTanT%2BIlWEAeZIHlx4pYi%2BqET6ONfP6ZAUUI51TgL2ZCB6Smr1L0XiIuL07jKjRhAoqDbyj%2BSkYg2MO4h55YTRJVngN3GTHdTpl1Jxrnc1PjmQb4yaqPP397Ein8eCiseuEdW5jTvCBi3CPnxgppVJ7vOjPAgYU1rIx%2FcqIYBmc%2BHKef8DUTjvOjg47jWP5ne8NjuHZ7bzznu6HscvpCwEqii7oR7nCfB7ynwkC6uqJ7rwDkhtcvUiOMMzAU8QYwIrEPqxjBJGwYOyf6TuLBTgxgrv2ez%2Fp6xDwZr4CjDfdRljMmD3PJuljZt2hafxmY%2FskT7rQZO8EOqxEkHbzbRWY%2BdfvpuJF3eVV32NUmlpVkZN%2BHHUIPx6bPJ4HTqUlZGctP0IzaxGIUlorPtDfmBMAaRrrP908LT4vXHkSAZElfAAjBEYgCDh1CWO06ZiNQMI6F4OU11Wc%2BAfH3VhXiF3KfUqVrNgYKit4s0eHdxy7P8Ajvy5%2Femm3DfNmQeXIHMkmcx5F%2BcQVUm1rrfz096AMMm8%2Bb0GOqUBtsuKSbWm5fmvgNUuCIzMnJbUfVFVi3vFlGtJC%2FwRhePpdQyml4EQUl%2FI7Z65VQKqOu3vM3gNawCPNP1OG2HhT%2B2nCGx9bHJLQxMsY0lQxyIAGMjdxzlkJXrAwHueEfIyBSNl6RQqINYvm1tUHHiR6XrwNACM1C6yLiT%2F7ZvqAdHH9HrFSstVEETVXCyheQ11nSwK%2BBWFNa2JTp8ZToCsdA8K7zvx&X-Amz-Signature=7cbc6c6cd05ba816675a3b61339ea9afa9389261afff8e33bab1e2491095acb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
