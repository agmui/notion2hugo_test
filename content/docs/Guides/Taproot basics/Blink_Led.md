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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH3AXB3Q%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHSdbL69U8%2FHu5GnI8UaBLpghjl6ajEYTn5OslS0dPYiAiEAucJO6pZTSmfnrAQ4k39neTbR3iTsSldiy%2Ffwm01NPn8qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8z5xJRhI%2BOiJjWkircA6M4MWYqqYyjyyKBhFqgU9iZQjFbwCtvnevKJpPLfPyWq5PpyHP%2BrTxpvVf3KTCNYS8qcqYaWS6GsO7Gquj%2BeRytDmTSLJhZ49deO%2BFFCsxkAOU03es4JPgKcBKxnVAAqkQzoXGo3yfMvbqrmNKobx7DaCV6QKp5Z1OUF7KCYuL6mLPODFJo2VX5Zz4a%2FM8MJqcJfA8UkvSPU5F%2B0ZbWvqruD0g2kPRA2q68bR9vIle8AQ3cSugZrHd1gRkZ6lfUYXhxHOczUFwRD6oG6NQIjBkdJjBaiNL1qFhX9NMT%2Fb47q5bAW4d4Kk2jK3hMoBXXxjSxMb1WsZxI8zX5QkYqri4Pm1zNSxR%2FG%2FQoKNGwlJdy0GoeWgYklkWMTp5YHgAc2xAFcjPGileVCFCucVA4zMrU2vSPlnImrHoQMGkVyqR7wOfXcy1xjraUYi4vPF90Sn4zpetlnHF79LovScTrCxChNLalbfqsnyAnbkSRUkX%2B1mPtQh3%2BGRmAJnYZQKpx0F2nd6kgOUqbj%2BsL%2Bw8XgtDjRJC9pFz%2FUEV%2Bwe1vCSjcbIzBLpnMY3KnOYpNkVhf2YtxjNl%2F2F94sJrugNO7D%2FDIlvMolcbBdKdX2YWMSbEOia%2F86RroGNEqKvFWMI7Qvr4GOqUBwbXoN6uP5%2FTW9dsvruHZNwWfWQfOhQKY28%2F1z8JwukU03Stxaxzk2irCt0MKI3%2FtPjAsTY8uVt0J1MlafFVyUVoveuU6BtfWh2CtYwRHay0HEush%2Fnz41k5P6vMpEGQOx5i0n%2Fti2oQKRKq7DXw2Pa11HSWULzoQCm%2B7N2gKn%2F0AzkjP4EV8wUWNeb2NCkpGf1YkBa1LmjXW8X36aX5vxQzGzB09&X-Amz-Signature=2dc6bee5cb14db4b40ef8f8b8160f0dfb8d2d8b1cc9ba4b0d6691e7f848698ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQN5HXPR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDjHUrdFZR27nD%2BsddqpYrbmLaCdYO2shD885GV%2BRs84gIgdeKcHMW854JLJ%2BLEb2BX5C6mOft9hBTVspl2M3psvpoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGEipTD0Ep3z79WQircA%2FPn844hHGbN2eOcprYMlLPZVgu4nz2JMCQPUm4I28d3UIzczysImXNrM4cf7ErwFA0sfAQIqrKjVQ%2BA%2FfuX6lVuQtbitEXlTdgwo3NWiA0JucHmy3XhVwTN6mpdztOlra8GoxjxvBSnN3pjGnK8cIADjhNjfTPSnVmD7vFU2V%2FRZ69%2BZSpSwQyklQj%2BBN60EQS5JFy%2BvHJ7PRB8%2B0cYWoC6BAFhRR4jo7ZW8SWH%2Bu1sB5lv7RnSh0tRm08aMb%2F1x%2B4XoeOraXZZOnq951lKKi4c81x%2Br9pHOrQPh6RAjXDeCLgPBJC9A9nk7uxJqcxscGohFdc2N41fnulSHRqSCtUIQKR3x53O5hae%2BUoLVxigi8f%2BB44FsAj3uh%2FALDipEMszkn76pKajTLWIQSKT6za0nPoOQqU%2Bkvjm6VoOIdkZPqG85CuSZMYWUhbafk7MFv1Yf4f6HZ7yoBvJgfpHeXMoBeQdqDt2pOnTxCs6e2VxRW37yViAV%2BRdI2vGjVPOgLtNVPciF9T7Pg2sqeqTkH%2BouLrzjkeUkD4i6TzSfO%2BCujXut4dUfqcbKJQLa%2BG76Xl6s3vD7QeTwqq%2BgeAcHzf111VnCmzgiObOV3uJNBvNp1sntxzqKvJ0qDQkMO7Pvr4GOqUBbEQoT8X2Alg52JW8oEYEeNEmWUP5S7LPl4Mz2Q%2BdbIoQSG9iW92AJnLnAL1bb5o9VDxjrihefhObimMAdzpR9o5ohLka4%2B1DvHj8r9oTukE0HV51vOv3s1KiC3%2F0ozvBqTLikyth%2BZADHB%2BTZiQHeev8LeSsuVzFNqaU6GLT3LYPmndedP%2Fei8JJIHvWu7ah4yYswsxEHEH0%2FsdiunEzUL0Vw0sH&X-Amz-Signature=19a06ee7ff8d93e1eb7552648d606548d9d5cc81b173db3f031513363d5ac59c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
