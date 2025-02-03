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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFWXQO7S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsklTptaX97n%2FXFxMcztbCe3q%2BYlEGfo0YhWOpssl5sAiAtr%2B7VAl%2FswGoSjXVMDTs65wt3DJF4qMkuVr9tJQgxSCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM916jTym%2BQioqXRd2KtwDIYctxXtCoXFQrTajtR3cFoLXNzSurfVRKrA8k4RFLRIAMeRoMNKNl793zIrIsTG1YZMVNjzXWSwQ26m8rLWIUzeLnNEvlmaI5c8Mw%2BoR2j59BjWYk2FGPagA3lA%2FMztelVGkPLvDg6Uu00FrA7tymsLP8Mtd4IDn8y2pcaUMDRG0mX5GYlPfS3kBXgmWyAwxtFZG3a%2Bll8zlyJcmTO8uqONBdtvpzcvAPjVkx5Q6cY5rX2Qm3pOJboplDds%2F1WjjQbBsf4Vbe%2B6CwvB3guaJ%2B%2Bp1WA0wBe9zVJAIA%2BEyJ1gp5zqU2Zce9IvXMHZhe%2FVI8EK7bO0rWYaHwkup2bmUYntewADIRC5SXZlGvWzzf%2F99x1S5UlpHk2QEnLB%2FkXFTzOgaKXwO7HJYC8hzUYEKRvxkADQYZceZZUUaVVZwfuszB8GXwP464NjKpee6Yn39XYHmIX69X8FVkL9dVVn9ntYvq6eTJ6%2BKxoA3RsJ7i3yD3glWUNdu4PwyPZX2kynIgO4t2%2Fr9laEeAX1m8ZIJPhfks6E8okM9Y%2BVS%2FeEzJfTkK77UHBua3tuEs37D6i8r%2FAC5o5Fpo9uIVfpJFEXRt43ALBMSdJ00tDevA9BPOnKAzYFUNcWmtzs3fREwv8CAvQY6pgEVjPpZDohfYoHWM0eOcLnzZ1mileBQR0PTHG%2BLtX5zJB8YDfY5LlTeUoeqz50q6QXJ8z0z0UH7ww1I6B%2BKGQWTDiPlxi%2BO4RYh9XRkLHgXWlpZT0dpPxxyGF8LxBcm5QgjKgi8xo6IWmyv%2FbeNNGzBX%2FgJcaMsQKVJgXRCOqBDXjErOZSj8R7Hcvxjwf3K%2FINNANm4KD8SIWUyl1yRDqz1ukK6IkxU&X-Amz-Signature=83d9cdc75fc7371608ec1ecde487aaea18dcabf25a779a4b3f231a9f2c777949&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLKOIHS2%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUChDnKtgT7Qv97JMD5fKb%2F%2BpMmKL7RkTbsRKGyT38XgIhAJNnZ5psDhNHxbFEjAOQBf2CIIEd2xc2sN1n0Vlv1qMUKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFwrTo%2B22cbCTI4AYq3AMKv9qB%2F7NqCrrFjUQXj1wY6tk7h02lvjNRjYmfPqVjT7K5cdinRpuWzy0PObPLdLvW7I3psekk7u382I1Ae3kHE3ysNgMy9oBKGvh6G%2FMnRfyQuKXORyT1%2Fv9Ygb8H%2BkB2vbdEYTcOtgkXuiKdCiIky2eqBowgb00Kmh7uNnDkGrOJpDmdSK7zA0TsrkeMj2IiOeMW3V2rO8vo%2BTMqWteJpCelJoXPTQgFC2rdDFNO18QzctYV7lJoXxyd6o1IOvF%2FraPs5Xri2ufx5n6oeR27nPcIYGzxkUfPmjZ5m5BFx8blzK%2FE3zJjdulwQxgB%2Bw7jkFJQKOPP112lIhkP3Nej8L%2BYNSDp8A%2BzvzRTGBpCfEfzWMvMsZI7034JyIFW0WLisYyt1zT24rSrZGXozwP%2Br7qFHQpgT9kfo4UKwvebnjqOPWkHtZ9QUG8hafUmzcMRVBdmbOvmpV30pRq9CW4j0IbsOPF99wtB549k2%2F8okaCW%2BGmEDGtVlGMKEHRrP3kHLIHgMrmvJFH4qRvzaTy8ylTyihaRN4UQv3rBmkEFthG1cD9yWa%2Ftn7Z%2F9S6Yzb6PxAk6NoEXEXwVKzKtoVKhL%2F3cHjgYb1NKP%2FO6FbYabnGwKF7V9dGlCMCLLTDTwYC9BjqkAeWihinLua2CKG8MLuoYm5GH5bBy%2BIQL80hm0gMTBy%2BeJhASyZwWgDv5dEuyP2XDj6eZz6Zo1uf%2Fy8mva1YTPycDBL6TPoos9VbVG4jaBXzsFJD22ZBfsjpU3wNXCCIJiT4sNOMY2CWBfdkfWuRmwdFvhEk8LrsTHsFBQ0DlgFWHzdbgkJCc8fb0fGDmMYY0ScK%2B6ihEI1bUxIo2MBAdyLwAjFi%2B&X-Amz-Signature=d015bca9b89de3a3685631ca4ece1accf8c9db51349b19095f2a3fecbaaa70f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
