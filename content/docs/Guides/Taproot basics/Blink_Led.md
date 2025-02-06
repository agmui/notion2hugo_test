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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FX7ZYHL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCoJImHKd%2Fr42CGqL9Ay5UGfSIo9cfPybWwxOVZNB2CaQIhALlihkbk%2FpuW45dOzU%2F%2BBVflvHIdxfkeBNedAg9VGKZgKv8DCFcQABoMNjM3NDIzMTgzODA1IgzXD9%2F%2FYrSYDyo8CP0q3ANi22ps7RHHGoWLc45CJpaYgUfOtw9KXm3PG4%2FDNAc0uAf9961xYC7OyzYdlH7NbyoBGw3TlOgml73cbu%2FRTH%2FH%2BH6IO2h0mRSB2y39PmhIikDh27fygcVmurODdB4zfcOzUempVs6HpXtppILbMDuUs8XT5Zx%2FbfaqT0suwkYpz6qQMahCTBqmIkpfv5dLiR%2FPfi0LsIUkpMdlR3NczIm1V3Lr0XlS1I4ZQ4UiMxKRXLGK5I5I5Cv4aiyOLaZPwGR6xl8YL%2FRbIDhQ8J%2BsBt257Unj1LG4TQcppIVr9vGKsX8Qe%2F4ySN6JC6lUxPKeZ9FDJ2Whboi3h2gqqObQ%2BRtsE8dwa%2B8rDOfe2fS3vRQbfRgI%2FQPHjvDzLC6uO5j725%2FpTz2HgDCvnUPNkgt8fDGq0QdWO0MgLQMvPRkar43z6oB7EqcZWo5nniSagnQMkKW9RvKdOoklvCw9b8VpoNrBdwguqLlbijxEmjuZs%2FQuCz%2Bk%2FVEC30ZjOVojBc%2Bqc3o9dWii3pctTNJezqCQAI5ESqIKGdBL8c9cbC%2Bx%2BpQBtdrnK6ga38t4sNdJQs3%2BP5FJb3GFx1KRoiHD%2BJChFLM9pnJkw7NBTBAgFstvZH6NJbXUO3YNZ1O466n6UDDQm5G9BjqkAcdXmTd%2BHEs2s%2FlHahlwTFD0%2By28LHEOQltlQPEq5gIr8SHzycFK5IFlgaSOfE35kaMTcHdBi4WhsMowjMGjHEXNiD3NUI%2B3Qf4%2Fgkf7GUhj5LPauRipDDpl9rUF79oGhXEovIsZQ6OU4NjNBNq3ZgBbdXJUWMaAW0vfs7NznuNIhY0VAeLL9hhxnlFLX%2B9DTUVNoTWmLbLY%2Fx4NNA3PirCzB980&X-Amz-Signature=747615c7a95b55d2946ba59e173da542215d65b9d6f0a31e0fbf93317c4a980c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ2GC2Q%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIDCNakmzORhy1fUA0ClRnPbq2Cvxv10%2Fxs5VdywrB0loAiEAo2FW3bkqQVs%2FiptsySwsy6xm546Jucu3Uwgy3mtZv%2FUq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEsDwTnGkLE5QEghSCrcA%2F859mEMvZTwZ1RVSwhxWsUfYnX%2FkvaEwjVGLRf530SjwJHw9NCb0lyF1K8eILL625vn2p6IHA6CXMFB7Mao2LgdZzI%2Fmu998KPfOzXJ5NVVA5ZO4SPvN0HDAxvFbcwZ%2FNJEyEOn3drS8uK6dadnMcgGT6fpLZfWdUi2fdI%2FnVYnhWSLJCKLzVt3u7RFFOA86mrQG59JNiebvA1Q0GgivrHyFmF73h4%2B9LS2%2B9P3cB%2FvfiA9aFkrcLDwn%2F0n2tyGiViY0aXi%2BF9jvGYmtZVuDcbPi8hDfe4%2F7Wy2ot91ofllpFI4vgAwHdJRA3ITGslipHjbgKEPn%2B625T7fh%2BJ31l1kC6DoFv5VwE8nMd%2FBHEDVEjXpBmC3ncI15U1f1g4x9pG9Hr732qoKbNlWKYH8ldR4D1xidyJxiMVvuTvNTo2PzF0TJ31qJAPkFo92ovZYe%2BixCI%2FKuTVRDQFMY%2BCWhS2TC3VOfy%2B9%2F7fhrCQ6n3esgr1D8utgz4x4y0vyeX5mvKHc3c%2BYYfWGEk%2FZFtztnnk0TKUgbkpYsGxg34HyKOo%2BqU%2FEgFJX%2BhEBH3OiN4yTtieA7JsNvbjPM1FMvdjlvK8Ba1XcsJdrcmI%2BhGHlDb5JAO6BkRqPK2D5HHodMLubkb0GOqUBkM%2FB%2FI%2BTo%2BZIQFejW3waYKR%2FkdHrWtZs%2FLuySZAUi2M19OBm1p7indAxlCPch8kT7l7pyy%2FpBYuJuwm07IQq9U32b4uX7Jg6j7WcohF1WpOWFgyd3o6%2F8Mm5cmkMXQ7briIG%2FaoQtIvZ1B8okQrVg4q2aqfgtIMc4atncSJRHmCPUpFPB%2BmsJmotRnZ2ZZtqtHb%2F2mMXjOFgHr1SrV1h%2B%2B9895FX&X-Amz-Signature=bcd0fd22de3768cd0c77154f806ec1ef337da8f65a5be3706fca48fad1c06367&X-Amz-SignedHeaders=host&x-id=GetObject)

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
