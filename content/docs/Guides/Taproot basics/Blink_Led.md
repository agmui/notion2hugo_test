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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3VBG5R6%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD6Ziw8buAhdVMqnKkr4eT5CLLRK8bWiCpx754OYIzIYgIgdE2Yiua0lGkzRkgNUjNjUIolqjgLPqPuYKv5KHQ9nvIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDON6EjGVOGqnM9pxuyrcA%2FYwy0%2BduhdZQdkZxU%2FNtF2Bjj9xufW3MZpEs5hfyGsY%2BAwEyLHonCijWFw%2BZjWkw4qRZ5oG4k1GmBiaAEarczgKfkRg7Oh8NlgwjCze9oNIST5tUBkYwU7t%2Bhz6migyzYoXpZNbgfy7vlHKdVQipUa9hhW1dvTdbhMpNVjLA%2Fm6Y6xSWcvLiZmnFXpimrkZvw7ol9AN47eTQ0UEEt2Zc5zw1yUsszEmzyvfAz%2Ba%2BWxADj3zdL1ZhRZHDWKEV%2BXCP965Q4YlxggxUxfeZSMGiMYL4k9N5ejXT30l8wej7bJLc7sFMZT%2FTffTMPf7Awk7nSmZ%2FPha592BRkw3i3pmlvAaGUtCApqZfQlRwt03PzuGFDYdrlaoTBAh4nqkvGU0ehe7jheA%2BWJm28d3IH%2Fr5OdT5E2tNiSWvm%2BVTziR3odMnsOTUDMt49e9Zb1FIiteJbGr6HYAGgkD5wqj2HEN2qup0VgzcCOnR9h4IyfnYsW1hFRJm7J0qUhZyv3oux6mzfTKWwggpRCInv8A%2BzH9zFA%2FOdm5LXFKr3c7Q44O7FoGMUEug8RpDGqClg52Vdx%2FaoXqBgd7JuJoYoqC991Xg3sTE9pNxW5JW1%2FsQxlmTmve0xuCLGtFiLmqPi8%2FMLySgsEGOqUB7LER%2Bz5UQfQCbFXgrJ%2FASRfmwcR%2FS2mv77v30IArNKlG3aAN5Yc15PqWPwexBWvTgEsDLYad%2FGFVIlBNZ7s8Nefoqw87BpHliaQtdQbqhZro%2BmgZeXtVTFr421cvsMM1%2Fy57SDRjz2zGKQGaNj7mbO3BHp1uPU%2BX1D2%2FpcHAIwNLm2RS%2BMr6kdhNDKO6UCzHRB34mGa9iceUTP8OcEOJ5ZNRc%2B5A&X-Amz-Signature=8501353c5aa1f5ca7e41518eadc0cf35a6b0875ab8dc98d2f0b9678fcbb5eef4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O6P74JK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDVL39dHr2ivkKzHDbkMIWdVAM9smVK4dAV3GdmWk%2B5wAiEA2DuGlhczfhtHrsXlWiW3%2BnVIwTRyqFE7gxBbUTp1YxQqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUKf3NLYXZHukWFTyrcA8qXFEa%2BwOK8lrvg%2BbXdAZrAIsnLdy9cKJ6YAyUwj049TYTvIGLL%2B1eaUcmS%2BjQ7q2C1Uq3%2Fa4BTrRnSFH10UIxpk8zXFbgVM8E%2BBPUA6g9IJnIaS1HxhOGdqlHYgqtIL1MHKL%2FY3DkCsOYTuOeehhBRsqGFoVz%2F4uhNKFlZ9U9txq3haczyPslrKEOtzTiCqjbbRFLKZio3bT0Zfun0CS8LBobH7Fsqe3w9gOPHVEFVNx9UW%2BMvAGtKZhy0Ba6IYdquQ8CbjhPv2MHK39YODDctIk7VmrzrceTszMWNYKle4zxoYi4NLtbeir%2BHXL0aPAvp9bxYucjvU82O6AUU16YzESkycH6luEsrg%2FSn9Z%2BPcLiIh3%2BilUuY7TeIZKbPh36RSoGHVORTEYTagkMvBLl72QwdjFt1%2FfzlLusEts%2FuyFH%2Fd07P3OuryX5OrFEQkRrWibQnq7RWaC3MbVSMjtGIOZGTj5E0nLvztrny6BLekEVcGeBweqDCz4UI%2BHjNxgUORO%2BHlxtDV0IQW9P%2Fz9TnziCHVVWGofP21eV4ieV2c%2FH1Dv%2BA1WDRHjM6snjFKjrLbG8yaSX2N9wlqy%2BjtALyrubIIfvayQNFJPGBcVtui0rCyteZ0S1maglSMOzzgsEGOqUBcw7dOZWfjDS58uNTOh2WDIZNkXcaoT%2BxebhQE0uaK84Omf2VA4E95Mg%2F%2BY6Pp9RxLBOGxygyC1%2FTAxeDDCq0vXSooqd4%2BfGmmNVtghbZCCL8Z%2FxRcGDzwvC6dtM306LrHfjMgSaMaFxp%2BJ4b0IixXQSZeS%2Bxjj14pQ5IwNehFvmwZvQOZaTAAI%2FTqjcYboBVgfteDCEjAtq%2BedHp8UfvLQRZff3a&X-Amz-Signature=b3519cc0dfde78651521bd4924de3f633f39dac9296ea704cde63ae41d14647c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
