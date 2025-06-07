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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CH2LNAV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGcS%2BW0zvBYIMg%2F%2BZl66ucdE%2BfMWFh24oWV6FS1Kzj4KAiA4vSdDiXke5wFGl5%2FO%2Fe1ZVB0WxnBpqFA%2FmZUjQGG98Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMPLB%2BqexgJvz%2B6xMFKtwD0YyA5p8Bpr053cXwbMAP76%2FY8isJHvoDcKSdAvbP6Rk6Gjq%2F6Ntas%2FBxPBQCo8nk0OQ7neq7UPeMagU00IpSmnJXNNP3Q1oBNLJXg0ft68vZ5Tk4zGlbm597BJSHYD2Bb54ZoE7WrQep9WAGfwWm7HAI2aBjYBhTGbnPVlgoNKKQ3lZQT8t7xb7nNSQZugGz5RxefPi3hliOWksG4qMfPa4LExr1lli3U6gNQQe%2Fx%2FndZ6IL0MEZV4kr33bCoz0HcXljGoxALohIU3tDRcaQGE83fb49EghTpP3ZdUp4HsfCiNpiyCteizrfvTpuNWfpK5hGlab1IItrxSqDofhCCuh1vwHZTlHmA8yTO5pJ1BgfoSoxZyqW6A2AwPjSdmActJAjHd4mKvabMe3aFfbikYeZZ6HDJHrtKqedX1BwsnvDOFo06v%2BvZo6sMqqjPlCVrHZkz4RpOwX6o%2BmB9CS1JgwyHFmenEI9Lmr%2B4KClfoq26tonHwvYdyzfp%2F2BmvelTLCv4w5vU29jHqmNqEMV4B96HelQuQHd%2FP4PBXYMWKpa%2BsbLUxEYNDE3unQhaNIj4zNh%2F3JpQixGjc2em%2BonZm7ABynQS89QpKGwlWWE%2B%2FWSEFUPhA9x5XZeDOow0bePwgY6pgGUgzMr4ts%2BjCEITKEBiMikLzm%2F5FCXoC%2F2NaBOzfwVNTfCfcKgs0EGYjYDLXV58UHaIi6Fk1tIc%2FYOxyh%2BrGEQ3dka0bZf13NDiUH%2Fy2ZMibLx%2F3Nv0l%2BfGF6RjC%2BFPGHUIfJWrOL9FgWBCfXZjlMZd6534bkV%2FBeAX%2BXy%2FCKyG7lrphytaX6DrKbw2xTG%2FCg%2Frd54zP9KkCcE2F1oJy4DRQwolbZT&X-Amz-Signature=cf1ab39e58a5fb8d48e3edb994d37547d9f5d943c7cd9fe14a043b2334149384&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLSKAWH%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrlYP02x4l%2B86y%2Byb6HSu5dr0LWkVc5DWPJvK5eWZ3EAiEA7yHVyjSE6ORiBeAlGR6ju1RShmSp%2FHNm5S5IJwIP65Yq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDE1lO2LnFHGXq8JXCCrcA%2FVg3Y9wC8xc4IQsoO8zaOd1rvFo%2Bc7flLYMB2qY1gmzObOeZy4dEe%2Fr%2BGUVAVopaumf5Q1hbKK%2Bfj%2BRj7KwLy0wYTRnS3b7YGYTIguz9luxeTHGBMXYlPjnqqz%2F0n7a%2F8sK25g5jf8LDQjukAPXeUAmCXEr6V8vloRCFWsyRRUUhk0t2%2F1ZlHAI%2B2Zsmxapwhm9oNdgnnY5jqswQZuKMaNwV2yZyhdLTumNCW9kH5SphbYztM49I17C0oTqF26lNK7kqmqrZHidzs7LgDbYZCz6cw24TFnt5PXvmvBtGbitXtZklXLDLA9BtU%2FtZbe8RqMDo4A68C4OSLcjXTG0M7fi0l%2BcEiNo%2FsGcA46lqteBhZgtCEbPFit%2FJN3BkZPA7w6UYOlSEs934bSUy6HlF4nluL2%2Bnpw2FTDyTHnqlN%2BMhRJIoF6K7Yfwf8Y%2BFlNeb51w6EoVEXTFe4UZPOzJ4%2B2bAVnF5sx1lU6fU4HOqJVv3VdekeWPncYupbylGH9d8lgW1feXKeud0j86f6BKjrke%2FE2ylZJ57c8V5fpYSS9E%2BAX%2FtstzrpI7xvDaxDfdfzCo1gZCJl30sPNaiUZwnqxU7fuAlVXjk6iGWseciDi%2BflNktdYHWx5r2YSqMNC3j8IGOqUBRy6oR1x%2BA3FJHHKzWidgwaAekoombuhaeDh%2BnXYu5GpeuAsya3kcmFu420gVk7%2FK4gtxCQS28XnAwLEwSsQdIpioYBjWbHhWkvo6CeRk7isSznt0oYdLD6YQ1LTeqeFTCen%2BuHwjAbONT5cYv55fc%2FDh8vdswF%2BOrwmQ8hm44Kf5LAoOFjG76uLo0lB5R9ArXSJkenoUcHIPznHFrquEM5G1lggF&X-Amz-Signature=a8d47e162ebc17a0c7ae785996b260f55a3084dc7e7a1c3cf3da4e8ff6e6d945&X-Amz-SignedHeaders=host&x-id=GetObject)

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
