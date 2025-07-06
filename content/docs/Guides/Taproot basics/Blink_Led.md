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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERTMPKW%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIEOPJKVmSx7c23sViP%2FOQ5sUnynqgyi2j3ohdzQPsRo2AiEA8oOfEy5mbVZgn8Me3itAmQ2m60LWQ9217WEXF3N5MW4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIgeROGyIIOzt4xqWircA4X0RFPyuR3%2B8ZSXtWRfbbIwJ3gXGWkS4QonQqqdDBygV%2BL%2BJij%2FdNbCpYTeuGBEDffRagiAOcrlLIo%2FR0tuN5Hdl9zkmMOKM71JUjeg4k3rA1ejv7FuYSnQuTnjfeWSRYcZQV0%2Beru5Wb%2BaDTXyIfsH8jQA8T9BDQLq%2BgyKhp7UaS4xOSSwnMBnZKWSupbhoekCCuS0iKEakjESxvXHUdbI3Qhlpw7ecwWnpjwqkHFVwGUPL%2F6BhbUkYxu2rsvZ%2BAHXLw4SZ0UstQ5YK0uchmEYzY6%2Bx6zE2I5CbZTNIClye9oSa2k1ndHq2uD6wsrV1Gu1wjin7JiY86kXQORfYWPA27nXjkP%2BpdbkPOL4Sk8%2BZPMMSFe%2Bn6q6m1AO1mcz31VA%2FFjygqEz%2FtPp0ao8STYEjThvx9YtoG0CW7PS0C5IsktsGmADvoRVBR%2B7JbwLSgdxJn6%2BjhFoSHcFw6XzUvuVK09cSdy0fNyFXaMKJKG0aEPnN8DfPqwHVfydprt%2BPVcPR42XY4mcR1TMF2BHLk6pQ8f%2B%2FVWzNQtf9rb2vfEY5jWi1%2B3yciIStHmSwdzR0ahA3LySCvuSV3z%2B%2Fd%2BwclAnLr4WQa39NSZOLXJApM1nyr9091QljH9tepLMMLOxqsMGOqUBsyAEdvMsXiGK3hQdJhub7lk%2BVDVhnyKEZUkYih4wp4GyX%2FuVr26wS1Ft2IWas8J5wvEIwi4j1Mpiv2vNnef2O%2BiN1iqrXWj0NMHmM%2BmfsKOPZKhaxR3fk5DFIpHTu2Q%2BzRM5IeDxUwsu4ellfSQvZ7CwwYuegvZSaIhhUzmE291qQ%2BLZ2Cp4FmmKp%2FLwYxRgDA5M4w5baSvRTK0lJvK1MEhyJC4S&X-Amz-Signature=6c6711d51ffa6bf661e33bf4cb79d7bc1349e49bdf4302fbd4b22562c6041988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EZPCX5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGlTmuCYnS5PY6YrxG2Uj87U%2BKt0aVMS1%2FC3KGBHMGmyAiEA5t%2F7r3we%2FWiiD8%2Bg0cPX5osjmP0CPfgWam7KmqWjt2sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFBWdjpAkBk8U1e4yCrcA45GqVftQQcS7HLNNH5%2FGfv%2BYzngeDnYqxPItbXsOIluZzIyHOrrKgkI17LZFsYzJCPQYsgdDB6hrmXXj2vM8hoirbhjhpUt%2BViCzVXfR1Bt6j4VD7GH202H8haWL2cRk9VrYS21oh9f%2BE%2FJx%2BCMBEayBMV9ci5glECiKcBLPvS4kgi%2FSSYa1xbBjNZERSwlyKnjPgiuVnkv%2FYOHWf52CGhoXVHlrtfPytOhkJkLeWvPj%2B5o0QEXIut6JGHRUEvO%2BpMlDcVjO00C2Tq4I5n1PfgfUSASLQsm4pFXwliYElNZQy%2BfoMTzQoosbZcD3l9fEJJHim3OAbucvQqBV9tRDrL1i%2FZEvCj9IjkUdVJkKRwPzL%2FJ9dDoJqw4iqnQWffS8OvQXU0u2K5sE4%2B1euviGUxKoD1OdLUcKmgFGeBU82jIWans3o6PbmwoxgKYLO9WS%2F1X2qHHZRTe8g4XqnJV8wY0%2BP8YKS9DED216tlBzdOzcAI3w99xgU6LTBjF3Difa%2FdDbsRP7TW2m0MWV5VBOWnhrxSxhuVqauzxilU94AlU1g886ogxuE1X6ZhZ7BoHY266wqUm%2BVdMiDbjPgNRAgEqOO7kqiZWFXUA28gtKFLo6ad8kgucTG1kIgLTMJfrqsMGOqUBBxFVCGW0U43wOxTNaWUvZU9oK1Wwq0fxRQwMBBycUutU5Gs45fEKDosQOfdLFvo6h3lT%2FRg1XmoZJonhJ%2Fp6gxpisyT6qaCMpfnyajEHIjxSTqfl0In3%2F1%2Fbf849JYya0%2FNBM7%2BBEu4kT7HMgQVSxWoFDZRja5Ve75G8naA2EmC0AHMu9XyRrYZJ4vu4bXgxgWyJ75Tg%2FwMs4TwGRJU7tpwExi0E&X-Amz-Signature=ff55b8b4051f33a63e73570eabecf573633b5f7d586233ba82f14419ece7b87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
