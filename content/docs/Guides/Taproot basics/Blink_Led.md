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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECNJVYJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUrd5wPImNCGosCf4jgBctqMP8KK1yb34dB12LlNyGdAiEAz97Yzex8k0cPy8W8M8dslQhZCQJ%2FsJ9KFPDo5cdqXuwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2X4FOjUC7BAlRMWircAzhElzAeUPzj%2BRspF6tRZFWRbwn%2BBnPzK%2F1qLhBT%2FaePCs7fLtw%2F9rgmE97xXn38VX1%2FmFiDlBk8RDWOFI%2B5j%2BxIldiSzVNLMjw9Ygec2TgNtKxO%2F9BwBhrZuEMDb4jSnNoEh9dqQ8OutbFigvJ5Akub9kRF1Dt4he0%2B%2BJL8lFEG9SvOZi7eO4amibqOS6%2BrC1lP%2BSSwyHfPkkuYSIbZnT20VF8G44V531596eyRcu05PUiR5swl%2Ft0MUrMTJFyKLxCPDgjj58BHAGgXPBYcY%2FqB6MwtzMTmmghSy0BAgnOzFdtp8yp0YJ%2BWoNh%2BAeFQKIWZAtqBpTY6jvuXfYkFN5frkK14Zei1uToGVCxX8n8Nci35PSEhtG9MzhWnw5MK9aGKltjnly8hbKkQ1jFNlDmyy2bcROiZ3VhMF6IlaKMP0vLgZ2MyXloQd%2FCOQ26nBrHxrAodrE1U%2BfkWkQj3%2FTYLBb12qaF1A%2FZnWv5ZI5UWdEucHmH6NL8Cm%2B5D8DrWLXJ6gp8Zonu1mtURfki8fEEJcCoqMHYwTnUYZJ43zXWkPpX%2BwCxwj4P5wuYCSjP%2FF5%2Bz5a4InJ5N8%2Fa%2B%2FL79%2F51e09hWArE4HCHrIheqelOKnmGK96Jp2mUw3%2FgAMJmHyb4GOqUBawknuEWJVk8aK3TraJji1lkpo3vWAf7YTSF%2FKmkYsdjkVhgbyqWiqr6iL%2F0twne4js6F77PKWbhNMWbcCAM5psqfXicUswzUJUphnXiknp17Ujq1G1iETpdXT%2F54htWdaxBh0cmDQh%2B6vju0iAnhhtfaM43%2FIGPHkMVDe7QGKI7XRS%2Bmk%2FUw%2B%2FVvUo4bStHZgBeFd%2FxLF5fWdguO2qftzguYhcH6&X-Amz-Signature=5cba2bb7fbc4692c1c617feccc726b989a06f2da8a9422ca9665b2ef14ce2d20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UOJ3HV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcHvyK6kQ6vwCt5rY1%2FdtSlHouVDgb8rO%2FuiyQPUWl%2BAiEA1YQiOHO6WW38BCVSi4izrdlySOk%2BBEP7K0iIPiT2ipMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFN5PanzhDCpLnXixSrcA9pskuTagVhRYVnjfl0sWnc9eewBYTe0Qj6BkHH5%2BwwDjNbEkdr5XPs8cKupHcGwzG2oRaVcv%2F8toEStTTlNFuN61hkg6QuHhxY307Ztp48VatsUx9LCcbpQoqZbK2Az%2BA4VsXDnBrs4g6j8GjB14GDJxTXoKJjuWXrlPUlaPDfK7dVq%2Barq4O9XY9VaNkhiAJ4KxdSdqJ9SufmrB5D%2F9%2Brdx1jAPbo3COwSb4euhewpTXSqxx%2Bn7AlsF4KJ8JJMnFj1J8A4CNNed1Qrp3IiL8ptUfSjx364Eg9DptkjwRy25Cs0EBiGDL3RmnLUBy1Tp%2FXmphCUuaxREfCwfq1TMTFLilNx0Vpb0RFDV079W3f%2FHJTgOdj3Zsn5q1qvqsfHoTyjbhSQ2zOkIk0Luj%2F3evRViFjHiOLKJPxbbmjyolp9p06ASQC%2Bl5AbeYiePVbNiBBBK1RnmvWXPBqu1dkC1nSv2b7DhGhUXE8%2BqPGXIHgxK1qhbkhOrNZc4T%2BFhwCImltWovaM0qVE8xywvmEZ47omN%2Bfo8wNVvqI%2Bb1N%2BH7C9Dk0i%2Bf7w4ouiH1hqRTZHLQKCR%2Bh%2ByDe5xroxNhrY2cDOT2wJU9KgSZJXmpRTOydLuuf0fUAqkhAQFnveMIeHyb4GOqUBVqs3jXLG2chb9NIKX44YuEU%2FdtQQ6OtLhNqzUM5KvWBR2XfqXl%2BkV84PU4sdnLEGgJ8lY9%2B32Dy4bGJIG44VDgqCEev47SAkXqrNcXuXZl%2BSpqQVMs1AaplRunATvT634%2FIlsIbRQmKiIA4Qc%2B0ujuF8reEHVKR5PrIPNvwXHWAeE9%2F4fYn0k6fWImwNarqPaeYVgIcbAubGXDYEo6SqEOYVPng8&X-Amz-Signature=a5198c51141b20ea4134da354c307903dfabf563c155bbcdee28697fb2ddfad3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
