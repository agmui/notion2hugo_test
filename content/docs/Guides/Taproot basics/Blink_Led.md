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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHMFDFT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxelBkMkKjgSTcesN%2BiwNUnkToVw6acN6%2BPgL4g5PBwQIgZBVv2aXWZJ5dRbhv%2BqmAnA%2B2sYzemAVlDGwIPMVDAA4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKdrjlXHYxUYf6rRFircA26Bc2OAPvyuZb5wtPFUww%2BeMf8p5jlz0esWxerEoZ0wcPn0rG7%2BgiKjgrvnxe5%2FHh3x3TgU%2B6vi%2Fs8nuYoBWjA3JLyqNRnoRoRRbtEwUXDcIxSTWlEXdWaQybSFbj2X9UsS80fnnXQ3HE9x7%2BPaA72f%2B30M0P1A9muBaj1cZKSO8KfM2lnvQyyk%2BDKcLM6bgsUD3dMso0aRaY9RRm4hRqfm8AcpwfW%2FH4zGv6mslfLqzEhPOmav6pPfz1UbqQNP%2B%2BmhN8X1QDxcLWpmUkDbPwXnzT0H%2BUJI0ba4cHhS8CEyVHLYu8L6iS0JqP31wtbhZD1lRHHsnjjV5KEjaRrQIZkaKARWHAaHOUxkyHPnzGvnLnjokZ00kp0IEN6%2FYNTGMNLA0G7xXBep8l8kKGBvnzhvmXD093QlrfEuci1D1FpGXCvgubsDs6ncamgaQwr2UP9HweRgnh4LREt18azacMlNltVHAk8XCLGuS4Wrf2rKNnzN9ftLAWhFlDJVEK9n5eW%2B2mPrAWi%2BFnBoil9SU%2BpgF8WdPyuKLDIQEJIRSyfpuEuL9B85IeXlUyxhZ7dMWTp%2Be6u5RwueeiTZhkeXZY8QCYohu8FWS1Qvo2OgZDo9aeJTrapTJ7gczAzDMITEnsEGOqUB6AaKqHFmIOZpVtG1lLbN72RimLRsBtdIIMuXmEOkX3%2Bvt2AiFj5lf4bhtOviiJ914aFllx%2BCmhS2aD11gxdCGKS2QQEQyltwhBi5jhbiIbqMsi80%2FdczYGJ6G3nagBCiOuDMqs1sbbO7Us3Dx2jx2j4X3rAM1JURBsFPEpFs0boWhe3hRinx6kYhZfrIoRzsTJQOG1NRynBop%2FVNb0N1EsChh0SX&X-Amz-Signature=4f2eaf26b15c1792acc9a2c5a86d27fc6281fcd735d2fba9677166aefe45b30c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QORPADA7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCev07wlFP9rEW3%2Bq0GXUEyVjeKhknO2Xz423oWQKAOVwIhAKYJv64enwd%2BJ3iRBXW6Vk3%2FPKP2tb8%2F9qpeBYolRSy5Kv8DCE4QABoMNjM3NDIzMTgzODA1Igy1i1m7E8bJy8isLlkq3APPCseyVlN4BhxnYKwTFrYtgMGopNgBwbbc49qX8OLixcQHf6ZwagGeeLMNVUyLsSh%2Fsm4%2Bgc1cb9Q8L9QjHfcBcmDaDry8cIhsw%2BQezOU4Oq%2BnXYOykPpVRqkr8M%2F5%2Bmf6PlKhy9qe%2FQzM1r9jfxOCFc%2F8DCfNkfrE3sHhugN3Z%2BbTMu7vmnsiUgVrP3%2FmomLfBIDT%2BoL3GGN9UzYucs1YaHNzMlvh%2FMMZcgy6vrFJOEF4zwhp%2BvemB1AmmAdIwMNJAOhLbUiTfPg%2B3g1esdoz4pVkxsyMhCUn4LpdE1UKkVYioxSLjvApcbwnijeDSkNiCLN9%2F5R6EgNVVw0zRJqDH6p7oN58Jj4AsbF%2Ff2xYRFHqEGXzJ9rMfLgBAg0JlZTf4tl2%2BFH7kHhf7thBxA2%2Fqc3csNsbt7p%2Fxl1p6JgY%2BVPkbUoH7%2FtdjUs8BO1uIGZaRS1JvVo9tzB6x4iJRWT8Fu1RHjOQwtT0YXBackqHfLLjp3az1wOkvmAv4qQffihUqCf2B3RTUmrrScjg%2FMEGmaR26GL1AjLKWCtTwmSfIfRB2d870qStk0hLmZRna9rRIv68xNaeDHzfurUqsrLJxGQW9CD2ODFm2qYDgcnbajedUCK%2FE7CgBpQjSTCJxJ7BBjqkAczBVKj8CV4EB6bldT2CNVZEaA%2F2sbE0w%2Bb3FdvG2Df%2Bt%2FM6lYTjFCRx8tfJCBGga8gM1Kb9DlcmimG9skaMRwYQ3N7jy%2FEvCqZHjEbaLNzPkwpngdC3DPmIKIYg5fS5xsCjWDue0WHDDWVCua9m2uFJBuxC69TCfI65NzOHp%2FfQaPyG%2BxqUkrMLAjiDW8F%2FT%2BVKGfc1MQWinGYht%2BK4Jvq3FX1J&X-Amz-Signature=ff0e663688bd16c2fa5c5a80f2bc162f5b0a5753a64d4e4402eb14c1bfc6a274&X-Amz-SignedHeaders=host&x-id=GetObject)

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
