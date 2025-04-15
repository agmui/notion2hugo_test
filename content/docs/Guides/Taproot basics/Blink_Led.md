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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363CIRME%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARYrm8bON4HC9tW6jui0dB5yGdXU5xsA385iupBin2lAiB3JvuEHYrhg%2FrhKvUsyt0wpEC0pa1ZjKzgt0r4Do8Y0ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMk%2FdAJFRBJ5XwbVEvKtwDLnJVwtm%2BRSocdpq%2FssjoT3cl%2FLbo1OZYfzZdRyoa9hI5QFNZxta1yvOHpF9%2BITBMuHZSo8EYGjEWLRnHeCD70x67FNO3i8eHrET0sUq%2BRbG4Ld%2FouaPBH6bWhzXCaVqzVdifmG%2FsfTCkIQmduuJAwv82vXP%2FbU8M73LXoSTzsPsSGeQ8lG9JQkNv9z2AsfC9RZfyk1s%2BhuG0JjNM7gNeqdMYhp9X32Q9ooYFISmHIROv4rSPaqo6zIPpyS8CwmZI2msT2wGJ2JEENM2j1cTAPN0Rp84vX6yZcggdVgLQqWRTc57TEbZy872np3ZptCrKb2HCUAnZYxySBZ0eeeIgHymmfrag%2BUGUTDJdSqqNOIP1TvxguRsQ0VNtnZGFc4HefNm2xMeomzvWgUqMrnzxT9ZGgajKz7YQjV%2FNLK7XSll4UEhstKABQxt2UcZkMKyvcRbSXKAahCAmYpn2PLjsyYzdcHQDF%2FQNH7%2FRuThmgz1%2FhtTEPpG0SK5TUL9R28iLUryg2dHulzKnNO7RQUnL%2FMkPfyw1SBUYpGFxh%2For267UUktiT%2F8cbHO1Lg8LKwG2pviTxlDb1juTy%2BYY7uVeS%2BIXqp8NSqaGUOIkt3aSpzuNf5XuHvV8kMAElekwndb6vwY6pgEHy7soeeiKsS9AL6RU5v%2Bfj50e2KUNXXjqexMKeKwdA09FDF%2B3QqCIQqiO3Q2F9VyNkuXyD9yNQ93w25ms90Zm6zgy4x%2Fa%2FAnnd4JRs7aSYiNNxV0idp6lXPFbj8p41yj%2FlWgE2LTAlKe9TY3nw2bEN8osoL1DlI7VmIfclPMaJFRoBSYGbEZVFs4IxjGZpd8HDPXBHya7FAu3xTa8cISRWuplIrZc&X-Amz-Signature=0f1c9848cbe8973cad9f1db34554d399f7ab3f6e9743d12b9017d7b7581a35ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PB4MJ5X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrvlXDjfBNLlW9g6l6tXVC%2BRFxeY%2BMHAzoz7LjhP6kwIhAIlRqz6gE5HW6AlLrji5jO3B7sY861vdEWnRNGXyKeFGKv8DCDQQABoMNjM3NDIzMTgzODA1IgxganCLJpFCsz6Xuwsq3AOZ9BWEM3fMFxyC73E%2BWEJ9uFCvox1iRpfyvyPKfoNNGoCEQ8BrByOichsew9Q5F%2F2AxC3RD%2Byoz8ew4a%2FH5SxariRqVqkMr8uEqIFvhbnIikYPiUGRPuXpTqpfmU2zmmQwddz3ii0Qv%2BH5Cg0TtEwTWGKhNpVhD6DKhFmhxfDr4kpexOWAAmIeVZDkO%2B1kkx8tIyeqQrFOQ9Pr2%2FjljjgWZV8aQLpZL4jP2JLxc1x5mAKlWFfn3QWkzKCBI%2FfESQRnBm8UU7MBjdq8motEb5U%2Fjl18eoJQyRYMGCmSlpGEqAr%2FpepAFjSFjQZWJ6Mrn6vs8XTb2yR08FGeYlLN9kq%2F9Wqw4Bvqd%2B1UJd%2BVayUaw7qP6MP4WeEX5Ai5CY60KLQ%2F2yB2oRDQdIwtPwUvLXmdAMLVFyQzksDVRCUX3p%2F1tFXd8B6VQql4obk45MxwxteFjRjL7WLhXDJMhV4W4edhNngDodb1gN1A%2Fv3AO4r7LE7n0v4GGdrl0z3b1f2c2In6QmJkqzcm%2B1PYnivOH75wavkyEivB%2Bv%2BN5nhr8zrGGa94Bfcz4PHim3J83yd%2BDuwKnytIP%2FwQqRwhFMuPfShRPYvj4Is%2FhujxkJh5m0mbTthQB23io68qmM1PpTCN1%2Fq%2FBjqkAUT6Pt2EIguTvopdhyddaoH4XPmeHxqKkSoIvD2ifA15trb%2FI5bqy5B0IFh00QHbDDA8b5EOLJrVqVDEWTU0speZF%2BaV35A6fbnusZpNITKSdMHmYiExAH%2FJShCIoL1K%2F0lMUyzEBC3e2sgdlXbWGZ0A%2FAFoQ%2FZjRRViryM9Df0xHS%2B6XSTi8aR0%2B6n0e9GNopBPnAjc5vHwHdTJOrfi4NZwAHl5&X-Amz-Signature=96e2bbcc25c0e74751b942bbc69d8f2cc65e026825be48cc9b521d4d84ba18f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
