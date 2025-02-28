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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JS4HLKH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCICj3NaBK5dsahw1Ep2mEmO5kFmglUwRvnmcaJ6H0WDvHAiEA%2Bpn05loRPLueuLJuxgu2NRzQU2aA9MRNas70BkNVxbMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq2XT4tQkwfqPAjLSrcA9Vqyqhy1ZyzXRrKExkNB%2Fdd0%2BK7h%2BoZg4SfJSNnKmVHRWUpuYzCbvRyUOilRx%2BzDcPt8MFLZvmrQzuteQlKZ9iAHgTwWxItXpdCywqJg8JY0%2FLndYOmvwmKSVGN9QcLkHi%2FW3FmJ5HIehInawj7aEUxxo%2FguRAIhkG5zDWNgIXpl8c%2FkIrF2cY3dmZ%2Fs9FH0qoqpg9ezHhnc7nFKWxk0tp%2Ba4HHJpMvt21Ie8j%2F2lN1KdQaxUegqSsbxu%2FSraXFmMhnXaOyaSLv4uny9QzmMR6Cggpzdxq6EN%2BGfJEWkuUJYm%2BLs9mSYM2U%2FQndt4E70AF%2FVdETzBDnXwIXtcWu3oIojNSe8gMmLFySLd4ceSMwD9sqS0%2BVApiyY8pKW9mNmCkmiJVvGMrDwTMS3t0HWPz8yHLUCLJ9knrWd3CljlcH0G41YlCvi4iycw2yFCnasNTBVXT4lM4SbXWnJMfl0an6rrkPVDxfTuOChHPWXt87e5RMkrlbN0lHcrFZNr3fK2No6e9H2%2BkVulO0g1qIvlm1fy1uK32KbImMkXRcXIRpcjBydx9GLuDEIsG%2F2uAmAJxD%2Bxmr2EYFArCOM982eoGGko0WuuQiBVDwQxS0F91U9EgJ782jSlosVmT6MJKMiL4GOqUB5WEBX%2BY2deGtqfz%2BZCrz7FOQ4pE2k3KdOODHk5RAOiUDiXnOyINHgsgIiI54L7Gn8PWkkcPecpb8oIjuM%2F19a2KtKMT2kxn8eK1jD8N7URzus6XpFx7BQgCcjsf7GcrlPSzt7SmGVX7%2BlVHACSVc%2FZdMOxRRtiF%2Fx50LEVCu9%2FxylIvSQrzbKkfge7SIGOEVDnxLizDC6MoUnyy5vNy9yKeUgg82&X-Amz-Signature=410f31e5af20e07461bdf051639d6b79f5d865626699d030b6906569a7140463&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONPT4VB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCBfD2vj5VMBJcBtBvnNK4va%2BAf7HfzAYUXKUY45fOO9gIgC3WH103CYL%2FgP0LqLEyAiFt5U%2FomDDL2TVwRJlw4cqgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJomrqKAHwAoXM0fQircAyrbBLhdeVI9KOZDre%2F1UxXGwMQSPOilKy%2F%2F85kwhwQyu%2BSbX8Qpp6ZEAg2Cu9dEjbSMjawDOpKUvoL2PPMcLK4Nnf9952m%2FoPikHI1BTCjjNjAIRi2Qt5XUdWTbgTJ6PCp%2F43wpi2lQjg76bvEOb0r3405ositiTV8piOpUgwXmsGf%2BJeYIAin6brOTmSbWMOJMVUqaLyFc7Q6hf7rlk7t6zH35X8Dzwb262AWkhDi3mBtD5z0ZXmSqCCyuR4%2FJopHFwCJffHW6QTuVwvW7bx4KfheaixuLcrh%2FGvNSKFAJsBJ%2BMalEcw10aFLcLHzXWBA0Pocy1np%2BrnqUKGq9cOEzbC5AQViFUimT4mm%2FY3hipi8Us3ZbkuNrYtwBCVJjFOBsx3YDVZia0ohGexqThryWPkCOjA8oXN3E2q3BNBhT%2FKtEuNW3JPcwK7RR21H624ceYRzFnAtc%2FG1PPeBFERyOaf%2BauqZWoOKTtSiuVcEqE%2BepXabw3D1Sp%2BHmRgZzpSSMC%2FD0kaFAc2remszVHiItschjettEYAYWI8SCy6b1%2B3awPja%2B0K01P%2FEM%2FDgK0noI86UhEFSjy5Mv69zPAaATS5NPvW6g8MDT08Lsu528vlTq2wNIkbMYWSFQMIWMiL4GOqUBA8VyDaPvv1OykKEUW3bu%2FoIoEsyaNI0ULSLJFip6ZqhGSEV9I4fMCinAsbzPGS8mB42Q6q2VrpJcn3Awljl30pkmYApi0zA7B56DqAT54IVJjyB3QvWS%2BUwX3w0K1hCqvxvJG4MAQiobfoAV7ZUvqav5xvy%2FJD1B7LjmT05WFTj3m4M9nnMmnBaxAC9tBRyvUnoifX9zE8LynNvJu6FGwy7YqST5&X-Amz-Signature=69698aa56107ca4e58b67d3c4525c3230855e68562d1b7cba03b8a85521b516a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
