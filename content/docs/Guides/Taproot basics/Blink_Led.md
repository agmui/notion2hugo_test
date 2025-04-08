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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYMQ32U%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRtHFm14qmxQua%2BLUbhRnq3%2FcRnyJhMY4TUUyRHZLNtgIhAJofL22b9t%2BnATnOU%2BENzp6l4RjLuoPajiaxl4GvbURQKv8DCGsQABoMNjM3NDIzMTgzODA1IgzEineBQ4Jtf%2B9VVn4q3ANbii7U7gixIIO87yLvQKERNO0qGY223MO7bSj%2BItA5TCpv1axE5%2BMeN%2FdOqxbCr2yZR%2FTFJY60Vqxc9xLjeOzBpdYximhQO3XBa8vBvPVb7ifQ2PUGkFwVcVCU%2FJ7NY5sLhzSZllg7onSjtirFlDpvV8fQjyUPdvig9Rnlid4KkEVBa9e4HyCkbjIwwl4eRBUAT0QCe5Z4INQNJHrm%2F1SPwPhM9CkX7dudNKDlQZdciNPjkfyivCxNDJyd731AbNK5g5M6HDabwCAHXBahTHf41cUj3M%2BSZRFwC%2B8w8c7AjuAVBwjOTI6CTr8WQgtCmqsC3eJ8Y%2FFuGQEjls84ghV%2B93kKqGyPBKkMO%2F04CV6STf46yI96Rvc9zr8i9YsxOFQOCrnVe%2BIyT9ig4tHHTmSKJ3rt%2Bu3asAHXlczMdmLgBHckyFPhmJyMzMqK2G%2FAGhu9GOB997r3bscvSdeeZkctCrFN0SyXIU0LLR5%2B58fZpDcUSdmxbBFPkgy1lTBhYg%2F0PO0%2BerD77cG3dHuevE9dqOgM3IZfMqpnYY0ej%2B9vWf2jQG9dHYWTsN0hYH%2Bn8iS%2BOiqM8gSr9RS9xhJn7PJOTk0LJ5gGcnLgZnnoRrV2m2fPKIRiFG6CN%2BltQjD4hNK%2FBjqkAYp8w5%2FGwWNyzm6fZgFKtCUen1f96gY4TGuFZJlFeeBE7J5FCG2HdkfnJDnXTCJw%2BfoQGLAVMSatTWnr103O6Jxi9C%2B6COdvkDde8sFB7NeUATp3gF%2Bo6S0cu8qD%2FC4kyRjWwP4S6jK5c%2BksnUwCXx%2FmZiyl%2FN%2BM1dITQV3fRQdz2HXLrKdeLjfvLT0c1HOfY2XNzli6fSZMWU25rdL267tTQV%2FO&X-Amz-Signature=427377ad714eb0bcef806971b9d02bda845198182ce8d67f4d1e60131855fba3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXEYLEM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T021926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyDVDZUllgBlq4qGR0efB454WIiJ7yFuy7CMVdwOulWAiA2%2BnnwSqp6XVSN24edPDY9c0dG6GWJjQMCWJpQXjlVWSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMx0Nd%2F5K1gBUJSwo6KtwDfVbBKFsdp%2F%2FsgGoa9VC4O0zyoNTjNRb3gFvMXsPsEUddqEzdtMdFRMaRSs4XvSwtICqCXUlxn29OtzxEGoP1VKP76v5roEoeikEe7B6I97K4RVoSAcujZZqMT8ZZhu%2FrF5FqrQ%2FLBzacVpY4bkkVGUHkLtJ8L1Lzll5NNGqCRcutT%2BaQ4LMD9wUUQDN%2FgCv7Qo9dVr44TGLHVR%2Byw4WFGrCzqxVLClGH26xhhUtdzRX7O%2FGxD1EgBqNy4nXr8qQy3TRJo1PORa%2BAMWHt6qimnz1RfOL4uizOXoaOmI9TyjX2N9lpikNjAuuvQEVaauUl7%2F1dlSQtSl1ac1D%2B%2BFeYq2YCFs511qLY4Hg6wIidFi5smOB7bljyTEt139ICa2SbfrRpJJhpbpUgylb7N8no6Qyts%2B7oQR8rBt2T8fcF07KDMtAWSF3r72UNialSjOShs5%2B7RfQa5iwq3RmoYQ96A0NKW6IsGuXTfjMmVKM6w7gh1VMRq5JfCyIYXYjKhRf5GUpI7PZOk89gEICIcRaC1H9TekdlkE0Y3OQB0N8nhWcpK9n9NjxFRO1d1bipa4gtMOSM3Odf93VEp0xhSKz0eOIfHbnKt4rq9FDn82GlloxHw7%2FXq2MXMCk08owwlYTSvwY6pgEEV%2F4Ur%2FJqyLQNdPf4sE2yC1xkmQnetT4%2Bnrb2htv6NBTMwwkzjh%2B4z4gpHBDmJGsHgQJrwwtVfoFq%2FsL69JIeiphJMfNFot0Q%2B1btjj9T%2FnKkmsubmpL%2BkwNQHHeotvubpbS4GRyupourk6%2FkLCNyNPmgClGyEYatgvCxrocyQNO2uQm%2FhLcENDZBlCmfDB2cUwoLb5zxqg7av2FA3CbX3qoYmxol&X-Amz-Signature=2466683b2f5e4c5368fadf605bcfce7df01c84018d4c8468dd73f66dd2b7c928&X-Amz-SignedHeaders=host&x-id=GetObject)

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
