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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQNX54V%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGN47hWIZ8XU2XumOwlfYL0SfB9m7KNYrye9WRw4ZPXiAiAlqFA26%2FJO2JmszPFRdt%2FU8zam43ay1i0wQJ2xVx%2FJ9Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZswdiAw7n2tKhX%2BCKtwD2KUC5opCy8YYy5FNoe24wpRtvQZ7jqNEBZZ3Lfgsmc58qpw0r0BBXqxipE8CnRDtNKAL3hQgmj%2B29Y7O4M585IkIWaCktrzDl7s9m6i%2FtZYihirpQDBbsCOOwbAvOptMe77Mq0%2BZAEdZpbBqVQkBCPCy1MKaL5KhegjPOsRpdikyod%2F0VHjYLf%2Fbo%2BxwXcydkuqEwhSCAsskHk5%2Fre9b0WTFx7hcGXUf7V7c2WzskZ0Irho4ucpDBOX79IZWXFjzNO%2FALWRZ966kkMHyWREgvmtqqHyYws9tIHyQS9rHK5LgkFstJ6yk%2B08fBZS1m1jTo5XNAHoT%2BRliFpngM8itGr%2BJaEomwEoHRElBU5ZGKjV%2BTvJdZXVYilWlHQP%2FBJUtYB2o%2BOCxjUBC3wq03NmLEM1A3CtD058dPme%2FjLm679wc%2BUmrZXWZXh%2F5C3f1I2%2BJBMpoVeHFBmt382q1VGNrgE5AiceF3JIbfyIHCcZtOznwwFRREZK4HXgn0NaTCdT8sADt539hy%2BjTxbin6whd5e%2BcEsjf3U2sM1nmfviZLYG4rV%2FtXAbi0jfRKSPkJEF5U6GXHAPE%2FFBgr5M6vu2CxeHqhALe9%2BbMIV9yE7gVSWf1405bTSJRukG0xt8wloSivgY6pgHJIRzrom4GcSz1okFUanHHtqO8xc6lIp367bN2WBYFiiRE3NJos0XQPXEXN2ArKUZAC0M2aCFPpXr4n87TkxC7VsL%2BX5DHQiV9YK3rt%2BxS74RsbckUJLIGq%2FaUTFTRS%2BD3AOj6TfqS0Wpa8Ck%2FpFlUG9Q3eZkHfsyA2ewWB5gV9IMZcINtZcDr0r5qgco4MnBfVzyeNZ6hkJ%2BNlf%2FEMDP24k5q48bS&X-Amz-Signature=e981ef1af5e21faab671a327c918da2e5c45ebe65646b35a9f00c5cd73baf5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIDLXGBF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmxiSr9t7EW%2Farpd9fvbtPmJV%2B3QQUTKUE0dV%2FKpks3AiEAtl2BrnwL0JRwiqI81C9tHyZbcRkxgni0QGoIeGExfLQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOrXhe9EsZXo%2BCoN3ircAxJIS%2BUNOmmoX5VCM4UQrqLpkvV53%2FwtmSltCrfJ5W0v7%2BP2u5%2BTFFkmTQDRwezfydZPwH2IzzVA1gMP8J1yBLD7vzIPEs3PwZyqODYBd%2FR9d7tIeyTnTbopOcMw0CFq8Ubjtba0qia%2ByVmHvaBgiIPkFmyztQUj5Isl2ZS%2F2cnsQDadRnqzugL1qU0OzSVa9aI7TnBubA6ZFBEdkJoQe%2F5cGpLOsnPNLy9TS6mITbtHoMjuIIexYZiCS2Y7DQ4Zr2Gc8VdK8QH10vX%2BovsKCF71SGi%2BZMPqHU%2Fs3xj0styi0jCuz%2FVlFWVkuSeFy3ENGydypE1ZMJungGGu2F79yfl9YxRWL5EkRzzTqoIACr%2FBHKb%2Foyg1b5VVqo5e40bqJmjxJbaeRk9qJ%2F%2FoITluC2iCQ3N1npTkloIdnL7vegWACiX4g%2FhNBXXfOIyWNY2hR0M5qV41cO2g0hyfcKqX5%2Fd9mLrWfE%2Be4FTSUXljsiKxxPWm1jrzpOvZRfH07MSAyUXQsvGq0aqmmCWdOGqYx%2BUXIwYILqhDq5AgpOfEY6g%2BR2b35mQfaB1NQaOWVRNOb4xYxJnmVA3z%2Fl4IslDiq2o9oWBq%2BLguHDunMhN7Jkdcc9lFuMuMvf3H71fbMI2Eor4GOqUBTRoLs4vq%2B0bcU4G0kt1kEQMniS8MfTbKXfmSstFC9zqWadbFi%2Bz4uAo%2F%2BKR8mZ0uP6VD49JCZEroMbekQm%2FuwdzAb90dKL5ZEj329JUCWMwaPpLHYTVhuBfFaZkgVOn7QsCmzic1k5srRw3GcGPdZave7xzeaF1gP2lgWtf1HDzvSlEDXqmeNGKin87HIhiFmLTI23DIggrCCQDzEP9DvmuPS1oS&X-Amz-Signature=4461b55c09c637cc8885a35d37fd14532012fe8f243c014c5af6693937eda0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
