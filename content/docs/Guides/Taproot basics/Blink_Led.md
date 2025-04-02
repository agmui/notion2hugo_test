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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VPPQN6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFCSY4hfEP%2BzrJGOVRy5Q6DORjm%2BQot0YVn53tdZ6aNuAiByu8MTwZkTeYMUQAy5X%2BIhRil%2FJiq3mYAq23Z0KrXJkCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNizVdaWz5y42g%2B%2FdKtwD4QRSn%2BdNdpKHfCDlEUA2GcGZXoO41eUKDeQO%2Fcqs6LwshHWqGMTScR%2BePbac%2BhPd%2FeQsavLWvOjiRNHf1TTaFx0f8JrAic1%2B%2F5XH2VdSVWGcCsSp%2FQR2PLuv5%2BKpPLBhWwgKdgCDh8m1v6arzA1zBxtXpsTjWAod7P5CSmSn6oMQNxSXiNzSYV54eZxDTTucVVgv3Xi2IrqL9V6%2BntguOOyXq7pH2307bBsx5vCdWU9T7w2mb%2FmqQ%2F99oK4UzszSUagxSvVk3zzmnxpKJ8cyjtnyhrvR8ZA1jol%2Fc5LfHhExdG9aRx%2F8K81iXcxTxfJsa%2BHExTN9v6SaNBmhRaWlO9pmrb03uCUiKcW7uPhEVUzWB4PYEn6VxSbgJdaIjYkSnwvPU50cCCXmcx1xLi3rZ0%2B7wzp71yyRXtV2ITjZU0enoy%2Fu1SpHq5jAKMbYdiDJ6QWMX%2Bjx5tizUWX2pmHAw1soIYRv2hBKwufUHdIoQnnyGgb%2FUoiqUITXjSL1%2Fb8N%2FEPBhjmgI0AFJPawhSUYv4ry4EPACdhO9vWbbf4c%2BHPLQEPBVJPWYAfvnthxiUbbCjcOzCxCcmy%2FC0yhlSgaFJ92pnQXPBP%2F9uASIy%2F6IRcNb4cxkexr5tgYH48w99%2B0vwY6pgFllHZ0vMoBDHdyldF7bIkKJx3LFFP1vE5zLr5MOyqSTRmYXcZg%2FWcwFuc1YbR1lMWvv4KW55feAF1Q8P55tvTjgnYxhzDzfDHJ2uYDxC%2FurcZbuEeSXowQFxAKvj%2F6iSrochnGfojtVb22%2BJ7FAH79QFSdR6Ml9FFAy6ibG9a%2FouXx1pBrLz6dRSMwl8cYCzxZf7HfrrBMKWWqf6Ii3BOc8rrDG5yB&X-Amz-Signature=ce6eef55d18970f529134414241099ae7288f7f8ad0991cfe406133f9eb50ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKEPDGV6%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDJSWfctlDVongxzg28CTVCnGhgMeekUsvGTTTwQGBiQwIhAOOSXOCKtTKetE4FIJWWfA%2Bjc0Z5fprzREH8OEFGk%2B2FKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOn5oPOj2uOtG6n%2F8q3AMO7k8BKuiVC7ngPfSWwNJNWtDQX8wnD8ExHQ%2F1patjJ75780z8VtNh2WF%2Btnkadjmp8KdRNVONxZuEzxILtWkGx2moXa%2FXra1ODza%2FQ%2FgCApI6%2F%2BTHc7l3UuJdQ1XGBSQyVWBbHAzn2zM2jFFdH09lggmO4xhwhtaJQCJJO6ZE3jTApz4OtjbqCwlwQsqBngm7oS2MZyNYxpjsAv8jGzxd5ckDM8I79Ib0jInAJ23yhfM4bRVBEV8cuSob5ARsxJcXXVTdW6dPT%2B%2FCp76Q3MJ%2BwjD5wpdwuB6%2Bw3gBbKX64p9FS1ywFXDj8s97FM%2BlarVrPk0xS%2FpyU7sq8EukFc88Uzmd8kMO5jxQt2BVHDX15ZE2FEWcaxTTR5ZYx8JJ%2B%2FImifG1NQT5MWk3Kz%2FiKHHQJBnW1puAqT0QeXtePJIHwE70ZyYru7PcL5Gx20%2FR5stUKJSA1xBRnzeVqXq4hFk1zkd%2BsWSemL8FGfkPVknRf%2FIrA3bp%2F3RkOq2lWvOpXY%2FlT%2B8r5u9JvuwlkWpod4WqUSzBomZBOnGgRv37rMhZTjytS0dUsSpX44o1VD1DpGGU5Lqn8IkrElQcomSG1DqVHVcxPOcYkMElLVNir4ab93VbWy0QMrgA0AaTfzCB4LS%2FBjqkASjOwqfzpeWU0XEhs8fwOskmooG0U5YwriH4hQwmiMGLHNkQyMr1tBTA4%2FNy%2FqD0Xp%2F%2Bft2EliryceVgdDXuoFRr4r76g5vmH3aw%2BWwdY%2BM%2BH7hcM5%2BdMfLuVJsCbuAW%2BYZnUWYZz6FFM1b1FMsMBd3TNYjGkTaNqtTlakBeSbY1UwDjC6O1nsYmd1AR5NNbutfsb%2B6yB4l6TYfIgYa5KwBcd4ul&X-Amz-Signature=49d61581a9643dc50807967709e3f262d5557e4890326d1ceaa1c40586d8ef58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
