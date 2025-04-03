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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLIXLSA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwF98JDYAzHWK9Ok%2FeyEkcd7PhWudKYr0mcVFc45aRyAiA0pqFmQRqyAxxIFMPzoQiEMTGO167XIq86Itqp1F%2FRaiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWxVa9%2B11l9lW%2BbBCKtwDWiMM1EbrAEqKgM5AppS2boStm0qCSHSRZoyiYvYf9TpKM8wXf56hdLWa2UvuRMNHurJURkXT1CmA7YohtZjbZb%2BhMQNB%2BNmMA%2Fz78qMo6SgrDV7q4%2FIbMUHh3CL3FpWUouiCH4WMYPIC5EnN23Ql4XLV9XYrz3Q8rIgw9%2BENmX4EbfmPhBGeBbjIhfvoxZpNg%2Bza%2BFJAyn8s5jgkQuCSHX7nxz%2FyvVROtxOK5A3LXPK92OqzrB%2BL4ndEflclomt7vKzTewIiyvGad69AnAxSXm0GYvZPv848rOldcBaMkxzG53kSo93v12H1Ywuiq3kF2Ze33aMb%2BBV7%2FCCiI%2B55DgtiqFTRmJ5Rm08PFSS%2FKxxPUcmCt8cF5vTwya2VsHWcrZOEkdaZ%2FQ5mqFsm0sn%2BiY6WE9KBym23F3lgsxTnXk2Qe%2F%2BwN6r5v3k%2FWSvGpLsV2SUPIygp77PyCEqNxKpXckvqaok3h7o8RaULgAOSARhYZkaZ1vvzWCVEIwKUhsxG6e53%2BHbVKqiCq5rv%2Fv5Q3DT65OzkV6RB%2B7x7EClgR3dn7pSwrLA68brIN%2BoLLN%2BufHsKfEKAJ%2FrgBTnWRP6eWmsTg5QCCjIHKM9wGfDpvWHLoVOHUuaTYUbtTRUw85y7vwY6pgF1ub6XITVN6T6pTzi1yaH5X%2Fed%2FUwLmgeKJz5LhKy%2B7Nop02zmcey%2FN8AR3Pi%2Bn8M9MPhI1i6oe94RRNnSGekPwhP%2F6p50gAvOQ16L7qF01v9MXzvu%2B%2FR0Q4zqsoH67Y%2BGcdSFlEmSc%2BpZhrkwicaOA0HT%2BZ7%2BTXCyoiAujBKfyrfpaNr1UE103opqbN5lkLp2cwq7cWnQfG1q22eL4frdTzDpGhqk&X-Amz-Signature=5da263032e18be62228846e0e5fc200cd456d80e9119934086b0999bd9d60a74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KQXKFBC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG9Z3ed3i84gyplOQxxiCa7W%2F9XNldmOCzEd3T7WChZQIhAO6zbnt%2BVyxqWfg5IMoXL4hTjD9PsOlCZDDUHyTtdDpFKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFxYbdToWR76Rraf8q3APD1x6FLNZq0alg1M2vREAT3iyLDFIBv2ox0IqbAxPV2b3qoeQamfkbgqOv4RXGGpxs1mcyISC6cbUW1%2F2o2mm5XsMiSX%2BwspHxHqBt1xmErLio0Wjbe4%2BPgNly9gg5gR1ADZO5%2Ba19tTk6eZZS9xDby1TuxOk1uoucf8jZne4oZ7BKXzXl9rB3BOEk%2BqMTO8bFgXjhrgKgG6Iiy6RTn8dRPojaHsPRUx%2BgUGnL6X8BLu%2BcTElPdGekGy221RwsUqYASknGH6doJhuVVMa9VyLhhsPL1sEuBk%2FvRIGCZlPz3kteVA0Ikcs1%2B%2FGdORKUV4ueuGQ4U7qj%2BiMwR2BHRT2NqWGzZM0FcISKtyEDkT00%2B%2BrEPdpUwWZw05d%2BloV8WLLsWPEI7iZXh3THACiAIZuKY8ugBv7nnoJybmdTfHRNNZ9re02576ObW3oiW5RhsGEPhOVm1dgh%2BwirhWithWRsz9XTI9Ul6ui0PpPn8c9XADxRb28SLv4lHScJRYuBafv4we%2FCjrF5T4Lec0l%2FiHzHrfhQyhpFC2HGbWej7xl99zm0m7wnyGFCdGx6gptIyyhL%2F59GblSmJNzA8beFW3tqGRQCgOaUefDTIO5G0hEPxfYFV2FgsML%2BkvKbdjDDnbu%2FBjqkAZH5qgDjrgINTDvlAZI6pMaxFJwmAmRiNEDeqzlaTqcqjTzU9XTPPI%2Fu9u7sPOZedEKq%2FR5plpbVobNtvB%2BgKt3gfz4blMlyrq7ySdP5H7LX%2BDGkdTOpRZRuUjpNbLS003vUrzCH7hPdXBwnBiLt12Yr3d%2F3UnrmmNxekaYIVhPWFTy7Oy89DsHpjWtno4qg34REG8ijqjfyyW8e%2FUkvbzF2NAHx&X-Amz-Signature=5eaaf0c22299b5fcb498b609c18f52c22e6a0024a6a4aaf2b052199be3e98a37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
