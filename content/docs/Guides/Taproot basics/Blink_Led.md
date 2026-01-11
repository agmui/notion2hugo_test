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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DKZPLJP%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCcylZTmiaFWZXz50ou03aFHO6iCxYhLujReIzljd5NtgIgLab7jxYnXVzeSJZSiNK%2Fp%2FhWuX83BTUo0dWSJ2FkZWIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5xbxUd4st7sWrlIyrcA51tlKvOmDS%2F8PcYUlPu%2BctqmeQsqlQH0DslT3Tu1HATVT5KCk6a1w%2BdRqch4dL%2FRj7NH0IDNy%2BU%2BCTpJN7p6sdjqFWGzOSovEsSdIH9m1xAkAUxJbwuOEx0cT4N153oMRphXEBhbAZh%2B6XFfwHS5cQNIi2krnaraL95qodLkBhY0t1iJ5pXt6ufdfjX532VrgpmhRKjLsTlPGH3IvhtHlZFr8xLrOFlVMsSv7mjb16SZvdsWbwbav4cVUsSZrnCH3Jh5Adw%2BMGPjh%2FEmgiGkgtRxJNnfbmB2loXeaxN6Lu3pHL5pol07r3suztRm7vow2FrMe2j3vzLuZzHsnS%2Fz7linmQVbnO13bOHtnDOLORL7PwL76OSkpvK9QiGMimlB%2BjZ7%2Bic5W6hFgOOYpuaMJGhc8eFrfd3r0BPUopAbukXlOfR74%2FkzzDJG0htoK%2F5m2AGYQSL4vGJrBCpphO7G%2FIyXOX3YAt7LbTE3vsSH%2F%2FsIUC8H4p29fMFd%2BPSJogmFwS1DzuB2ImABJaRUdqMCLu1lj13kGOI0ziLkCvF6%2BeW3T5RKCRxJZcJLTG4pXDskr2KQSDVXk3LrCFxAy%2B9Z0SFZ6U%2B3pWwDVz%2FC2d1AWqVuVlqh9kmRL9BIwL8MJSAjMsGOqUBEaVkA82xMqlrWYWu1xYJb6%2BfgjhCw3%2BkCFarzvafDjE7FimmIUI3nRueimqmzSmJ9KYwQC9oNmjS6MJ10g5%2BsFs8hJuU6mQVgzSSDY4%2Fz2VAfVLuGZVpRx6GE9ESrZSjtnCn1rxH0tlaf2inKWGJpCWfDnqzJTdMlGP5eClzCPHmdmZR9gGqko8lXQU7A7%2FuzqA2sUBMOzJdRiLSFmSk0i13Iq4Q&X-Amz-Signature=a61d55cebaadf834aa81c48ae9ee544085c2e6bd2c3c21470a24485d77ebf7d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3XUNCW%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC7tq09BmlSO52ociNmqWN%2FO4Cq0OQMiPT9b0NiVigGOwIgIvMgpOKQ9c%2FG0b2RZfmMjaw9xtG%2Fe%2BQzmbKi9ZrHqcAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2EC0LGrnnX4JY1SSrcA6N6nVLhMSd0JFBeSxWnsFjysA%2B8DJStuLRnw7E0uGmFX71DQHKA56Q7xM84oRnboU7zFdeThcExDdj4rA2OY%2Bzo5bYoiA7sv9PxSTm16Oh5xRRBY9zbdNV29wY3gdOlrFI2mIKEuqm1oz3sxQN9%2B%2BupdbDgt%2FTfJdj3CIBAK7VvVpap%2BwP6pYHD6MsmscG4tLXfbTxfzqs63Tyd9opcvcSyve6M0a%2BQT%2FhLh%2F6YE1NsKJm2iu3z%2BW%2BVBLJ28EFIl7kjz7ItpZRd5SXeTViRmqwg2tmyqE9dlSB3%2BF4PYGd0Q6XrCCu%2FkcMrjYSP96ULHMs284fCXxF4wlS1PaJRrAKxWP62L3ozsGrpmsIC96g8RxwAHVJsyflXEkeddU4%2BKKGb14ml1JlakJpfTFS%2Bovi1A6Ilo8jo8RhdPSryiKTVrxRXBWpyut9MPPUmNG0mOdrxc5CCCwTSd%2BBKBOnBJylV7S50mTG9fI6%2BxPFpT%2BtpzOJahLOc4IgmRg1LpfJL0I0nCIK3lUX4OyLtwdcJftAmCfHk74fSeOYWGORrt%2BJ9j%2BwpCXemoUF5TBH1dPjJIJnHameSN75QVqn0JtVs4LK5FnbZOAD%2FvUnX7eOllSMPIwVkn0ll8dLHqxsiMOGBjMsGOqUBGahCE%2B0dp%2FW1mILVNptDw9iGevI%2BM7ZQNp%2BfsREmUSJEtkAomvFrMVnAmizQEOaTfyybqBrW5I5a4uGzZIXEdMIOFTz1jMgiWLMk%2BUgYkbTCU7aNLNp5CLq%2Fx8SLJ0%2Fr3Q1xzru7BfSpjejZuk4J7jz3Do%2BWTBmadR1Kgb1I3PpyRvk1dvxT2AgpirIIYL7nk4Q1JLSbwaHcN64JOVRi6LAt79yU&X-Amz-Signature=a9cfc96716f45136980f8d794467c7d33292a7159e8f0b34384ab21fcf5793cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
