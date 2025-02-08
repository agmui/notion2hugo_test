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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4XHPNF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAxLch5wgoqavG49mgEKLqK%2F1GSFKAljGBuLAUYJ5U66AiEAmHBFyKsV8FhnZ6v%2BpKgb9CmZvOFJ%2FwT0UzPok94A8UoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhq6WcYCM6H%2BQHkdircA4GioYUdD5sB3oSqNZbddtndlwDM073tox3DYuQTB7sdYGdemo6qo9XLguVkCx3mdY6QCRJSASVAc3V9qYijvmuc1x3brS%2FuNtsOAgVEafHF9Dz%2FEY34uZVoGpIz2j9yT7cQ%2FKSCY9MEB1Tir69kNfXhDdNVF44xvXSCOA8t6M5qF1Sbqw%2BqToHv1m2qDBsdrQFoPSuXdeDAbDDOHeqeRvhapu%2F1UeyWnlggQCPDfv%2F%2FbibK1V8rFJaxxQCzjIN8oqS8fouAergccVDpJiQWvWqu0KGFJO22qLD90FRkB9TdGOunZa5GM3sZ37jmU0J6cEYMz3DswHdFw%2FtmjExAHLAEUPtvYLRkIgR%2BFfF1uXZeLIntsmwGkVk8FQwZQ23ifQPC%2FadnGMVn%2B4Lx%2Fk5Bw%2FuYJxKDZdkDEdMvHGsiuweBBL5cdJ2SuSVejJSCdNyKurr8y9p%2Fms%2BzfAeMSeaDX%2Fmldl8%2BnarSOONezYYt43coUZvSDi1I3LnpPvjRHeammWjgUV3UaMVZko1tshQEdz6A4WSTAs2Uw00lVpek8FyAeS%2FlHO%2FVw30PfjNEuMzO%2Fv4SH8vFYPS8EpT3fx8H%2F4%2Bq7bPTd4hgIj36BJI5qJwM%2BGzwXIa6%2B9eaVKiJMJWXm70GOqUBCrkWpNk0Y9R2g1CBTohnwCUYDGCsSfgNHMMdwoMCvfhLGdhbsqUHiENYP7wIWweIxqOo3xAXXnUsvk6PSKI2vpQfOJNCNlI7nP8uVpMI3L1LZkJ3pTuSVHA7T1nuDcF2FIjM6eoNI9qkbH3iZiZ%2B%2BEwSlxj7AWqofp5vMp8%2FvHxAH8o3AVXuFPu7HcMi58FbhxELhXaVVQGhjsIhZwe659CTrFG9&X-Amz-Signature=f7580e674e764ab47677026d161d23eac756df8db4363c66de2079bfb7a3843f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUTYG2W%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCCxBfoXSIbWZtf3CExfCvumjTiqZm5xxDmE2Md4%2FB0cgIhANm%2BRg306rjEnvLUjkICZst7tVZgsnyQOEy%2BHUmolroNKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznUbWLZZJzdHS8CaYq3APzLnaVfpINfbLfWwFb44ANtaDWpgk4Q1ML0prraWqAyYXfKWtZRIpPLgPeD9kQPAJzzzu0dCAz4YrGJ8VQxIPoKlc3q3oeg%2Fr%2BxjzV9if%2B7tVTE5GiTDIKwwghsKgNz%2BBZioGMJreiQmSNT%2Fx4IMDklWKSWJLIoVUqX18KOVwfNPFSyL%2BzRcWolG7IgqC1XOh7whwmwqN6OVrrFsOAVl%2FrIkfND0EY%2FUOg7sW1whbM834wU89sEw2fovyBD55%2BlduwFUD%2F9WhRQDkF4LmIeIcJL2J0jbYDrrXoUxqIhYZFOar%2F2O%2BFqNCMozO%2BWSa3H6uguc93zLjymDm9OdpVMoYjCpRoimZHBhK5ai8tWQ%2FmoHIEMIszXtlznRJqWx%2FLrsk0vDA0lRKhlO84E88%2F5XK1QC2RGGdYrZyZNRCtpYI2PY4pjk%2FNnurV0UYC6n1WoaPbb0rF6OG%2FRZF4v8JbDwzbq6wFnTqZksq%2FBwIOzHJVWoa%2Bl%2F2C5xF94pZcQzHsuqyHSmWrwk1fVrhMju%2FTE%2Fm1Wu%2F9dIC2fRoEcipKu48xwF5wDuik4Zid3kcURulqtU73%2FkmPYxOvEYp%2FWwBq4JEKCJsSw7ZDPtB0%2BDTO4XHzw0piEU3lUk04EMISHDDMl5u9BjqkAZw9vd1aqpVGTk%2FHhyf%2B0eZ3YN%2FHlRpBwTHQGMm0%2Fn0Wp6I97Vxg3S0DLSSot%2BM86RmhRcrQNiZamFuXmPmkfGVG4VwyVmOUWpCNCv84NxFFGocRc3H2fMI55bV6LGasQ%2F8z0CRNLFgG00LaRskwSRa5pk3WoU2T%2FNPl8yt7stNlKa95tqBKi5lYND2K41shsNyYDfcRtPv8x%2B9bP3w7VUYck8l7&X-Amz-Signature=b94e28b1984ce7af2f3bd1df2f36bc38f57ee9b829be592b931ede5a16acfd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
