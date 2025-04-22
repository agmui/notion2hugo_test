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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHGQ3R66%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAkCpTo8CsoguvBZwI2WM3%2BV2gv7RigDiqwfPAMYIzUJAiEAtixeDQaevd%2Bc1%2FZgfNlIBDh8%2Fr1vKIOi8EsB5vQwfX0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG89HrqHZUQp10fAyyrcA%2BrpkjuodsvqedIRgwHxt0Wo2oSDY6qg7ytJryFPRtSLIyeFASS6a3sbSmKkn4M%2BPsn7WyH57dylSwx6kDA8at9%2F6KiML1n7vDHiLnRuIgnsqWToArODgB%2FTbhYGhaMzD8zqAeCTbPu76cj9XRq8oIqqNZzXdKpZCslmjxxo0YnjxMPqy0cNKCEZBytjYZB4cZHHtWXSqEuc6YoLZtc10KoGeNlrnOQOFR1x3SQcV6BsHvU%2By5oTFPlJl6sWzH4OBaUi1i4oQkLeH9UwH1zK8hpWFlI7vGopnMx4Wwq%2BnQRJC26z7zceW6Vbxe3ufa0gvTNr5WXdlFZTBLWL3N%2F50KBidSb7txjxRy0%2BsdXJkVGc2eoaZLdxI5ud5xs20CZ2eCQ2MM3hgdotOoUaY8sktm184jERXIYaxh0bL%2BM8rjCtVZ2BN8kYpofWTKiqp5YkZnKQZLkDZBo5zoTDEH3GtWet9x6kJinQeQNMwlcwrfiVdhI4crgO8VGocFMBXy70uyWUDHzHGOa46SpcL6pmEF803JMbnMn8tCi3sm3MJLhCUsuQ9GV6HObOZ8HltdmoovALuBNyXuReMRG8GWDnQ2a34pqxC7sF02QmyfrOYkc0qsW%2BFcR2cnm7GbEOMJ3Vn8AGOqUBO1q%2B6OyxCa8JLgMaK7xJZ7%2FKX2wSmCF5AWFc1SwU65yaBqbO5Cane6I1%2FCB3pbqTTz%2FCYRHDODJ5Z%2B0y1rYou%2F1faLBZsSjb0cTAQioAeQ6YmrkUH134aHxZwB03iV2Cu3KJnWRy0VUQSRLE7pJ%2FbPofVIO0CpKKx1Vpzt0FAWNKYPosfKzAHoc1qN6%2FcGfnCNjz6cdbsXHY1CZG3FzLxXZWbbbq&X-Amz-Signature=cc925671a534c2dfba3ca38825ef39067b56dc59a995fa6559002382f374ff09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K5OQAET%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCQA%2FKYPYRu8XG1QXp1EjsLM73yiKJd3DpHOhR0xUIMqgIgQ8SO5%2Fr78gIN%2BJIlT6ud9GRoGE6gwDzjGMbtbQ5nK6YqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR3EPKOyzl7hnnrECrcAyqtMGNjJ2idMiv5OmNErCm%2BuXyeLgZ6tU7rlVFYSkYziFwD64Ro58WO4CF19vsYe2I%2Brx5OT4wGvgi%2B0PKGrrDACF%2BLlYA8F5WwRDk0vKS20HhCpl0zau%2Fi3akYP4oMR4286u9kIx%2BVeeSokgLtaD4lE9%2F6UeQ%2BJQrYkk0yUCk%2FTNeb%2F4hEthJ4wmEimeFtfPDs2lhbMbTM5hsFgHEtfO89Te3w%2Fkn8nL0ktHTdt5GjHpaRS3hs8z2LoSKIHZBd2y9ah73aPswb%2FGzTS%2BJR3SlDGvSy76dXligZSphZP63WC%2FCdbFx9bufh6s4ZB4ZDj2E13x%2F%2FD8TAPY18cQUpvhMXKq5n6G7GXdRoj%2FK5ju43mRlYzPXC2WqH2ULIssMdZZe1sIjfIKDgCmMstiMRmXHloeNAOGTqnfqxcx5SaghuXn7mTz86DlGLTcnCXuWTERlvGATdb0LKnOmwSWsjK%2BDD7yZwLmu4dqfm61zPVvgzOkRXIPZp7hRxr4K2A%2BO4nY%2BF3r0b8CR%2BF5nplfbDzPHSUlQ0uNkuOK4zEUD7VZq9WbOeXRh%2FuD3HhorE4pBLLHmqV%2B%2FRnuL4f1YTDGIQHpbD7bJUAljqYtHJtDUKbd9gZjRSQqDTV3kA0wDlMJ3Vn8AGOqUBMyijlx0Zuv1gdU0nxovakIBfGHa1BZgKdcNRaJpP5jiWi6g%2FZo3DrDiSiX9zR9kLj2X6EoBfVqTBBijFK%2BNm0neRjPy8GB8gHH9mYP8CnC3ySbVx7uiQVM6pBs5y%2FI0YbqrHCNNf554xOG%2BMHxZsUpVqI90z2pEDBn8d6pXly%2FnnnS3ZMSBOSYv3S%2F3Px5recPIV5sBJCowh5mGDvHuF3Far2D7c&X-Amz-Signature=e655fa9768d797e543ee6e87f89e158d870ba686b7a77a2501130718af847451&X-Amz-SignedHeaders=host&x-id=GetObject)

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
