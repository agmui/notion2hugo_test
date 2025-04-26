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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHUGB6N2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnqhFWx%2B7myGBGCg7ak023bQ1XT%2FWT9xtopxdAphvIbwIhAOkXVnk3vmFBzZY%2BbHUvQP0WQE6WsKIyLb0HjKIt9jy3Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyRTTfrLEErtgCBYsAq3AObF9AOm9Tdi6bDXAcm5eMLsmp70mWIiqgFaZqryLKIrhiWtlFrNSb9j9hcfD7r5HYEQVgPP%2Bmz%2Bvc%2FC8OJuQbzQ%2BIZC92uD4VMJmQU2sh3ftSfYbnWX64XcyqgXd%2FD0H11XmWYLz%2F7HKKbZzZscaXA2nlMVDdSaC7eIhAzg%2F3eJIj5TAViiwhwpDuQ9cr2jFaCMpW7vNSR3RV2KG4UxilaIFEcLCxDS3PMXBqaPmhqYq6tZqNnS2N477V4Tt9X2fAxs3pDhgRkmWPOzNT0JWGIL3%2FxUJPHkSdI2GHi%2BT4kOiFKHP2MK72YdeWv6YWmM%2FQtcq%2BwRkZboYNurns2DwwK1vZiDK%2FmgXhO3Tc4tsjpqF2tVBvXwLIUluR2Jjo2%2B0iwifV2jWMcVdtSiP5OW1Q7rZVx3p3Qsj9hTgPW%2B9%2B2wlqIMLbkt8ggd44NsbvmlZxI3a9j7RuIefJfBX9D%2F1dezTLMW%2F21ZGQbMm%2FJZxaNr2C8C%2FsUWcSmMa3cc1jQVhQX4AL0ZPFmDW7rCtu6bOI0qkHwOHQ%2FT7VJP85qFaTE70KQZDamqJFGS7mzJVjU5RcVvfNtKfryVIQD7qFfigESy729Gkccm4DnzZDSac%2BxrdmVt2GUq1T9cmhX4DDw87DABjqkAcCOwiwxzCQ%2F3RK%2F8QPC1B5sa0iEwmFL60cebOhThd9KjMX1EwlqD9wuoElYiZEAb7JD%2BAsWBEiLpmbhSQ%2BPEGknywVFuIaDdFGY4B80m7ygDeZ%2B7IbysXltGGjARpdX7cesYzpLbRWIUgJ7%2BYaS5rOcqQIx6FbHIRzuU6kN06koyNwQ8XxyLuJ1Hrk%2Fqsl7t1IN8QuNrAQIOCtI6bKaFFCIrZ%2Fy&X-Amz-Signature=64298d3bd7a0fd116f5bbf6ba6b61675955b877d76b58b506406317d1a84b19f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GBI366X%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8F2ckck6rXeL2HcyNl%2BbuNHUgeRYXVeBDXtJckylYlAIgYM%2F4nrqf%2BMk%2Fn4Biw1F6SaSUF35bk4U%2Fuvg92Fesk3Yq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFOspu58EkSe7nuB1SrcA%2FvNKFlDzm5DvcNO%2FPfH3m0WXSNQQjcG62vWSWB7xMG2Rzf7Vec9ZLioAjAVwTOjL7Pz%2FN1aqgnl8gkC7Mv%2BGBTsjP7aiiysq48yjISgn9D7zsrA0YJmzmlxfAtA6m1rOoL5kGCfOvADZa339Ii%2Fqb0%2BwaBVGzYT0p1iiVHWwMQHIYitj%2BynIt4nN2lHJ821VwlMCnCCMEvtXzCkzD2R0WyhyPTkpoLeYy1gA9%2BqUUwH%2BQxeXhA%2B1wdA%2Bd1kYEMjnmTUozaINUIiE8HO5HhjQOpVRJKrHei26jZDcdDYINy4zn%2FV2%2BCp34JASCGHzzNtmDgMSCA1KKk4tfCKc4H6u%2BoxyXenp7ybhNW9pjErDTin2uYcSXfS5y3TGXhkfhEFvudlEoWlzqOorE6DUqXO8xE9eahqkSXNpRs74DCw7QUUG7yQpaQCPhBG%2FuJyvF2U38NhuFLGFEDVj4DXQlZj4SaGOxsu0iIX2Vgg0J2mbcJolEfZnNcmmjiM9RGZmYZai9eCrCO7h6FwLxAScuVZRuYij%2Bi64bCU0iulUWgtKM2JEsOCUtB%2BDHSUlV2LYY%2BcRfB6GboR8cBhJmvgWdZZszhyORFoTkwz2ON8e%2FLgFkyoho%2BXxGo3zbjPUZbVMNvzsMAGOqUBvTa%2FIZxKNxkWvfrVpTqs4ynsmPa5INuG9AJB%2Bk%2BEQqBQzNlkknbBSq6Pa5Fu2KMQiLSLIIAA9%2F3BVHPp9AXNLrIaImhMJNTxFaag%2FnkRStGXugfqpef1Ad5yoWt3gp3ozTGo8kII0uIBgvDu2MiZhnOSuPc3dqKyfuDSdvBNgOixpupoNnW%2FvXnSTwSRuT5IDvH7mq6q5VxYyeTaemzquYweT1oZ&X-Amz-Signature=fc3b9c2e89451a45262706dc1f9aa3d0420097fef41ad9ce85e8ff5e335e8285&X-Amz-SignedHeaders=host&x-id=GetObject)

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
