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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GKJV6D%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIDM3aoSqPdg3Gcf0DfjLxrmcn1IPEpxp8SLo%2B2U%2F68KsAiADHgcdL6xMd7Kl8HO8%2FSyn9ftqlr9ZcR7BGD9HoaE2AyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMweU3MqrMSLx9q9Y%2FKtwDyf%2F0k%2BHFxadmmm1KiY4gXFLveyyLK6rCtjMgclNHWZbv66%2FpbjYu3xmzhm6loSNtx1NGsaxwPC6%2FURbQUvdJL2lwNy1KCWyC7gHxWedOlbML%2BrRB%2Bs7ZXjHSJmkk1gLm6u1p%2FqjR6XDYpbSt1qKs%2FeLWMFZhilvI%2Fk4mJ7Q0kDQMskpxR%2BE8GoVQm6P4b9ueR5hDoYLI5EHFFUjmfDbnqMvwpTd5%2F9xsZQzYbnt7sCbfQZnATJ2ujQB7KtMUSJUEPRMmRDavDeMObfg1QfsuBLmIUJJmqx4Tw3SNbu0Vew0iKXrslwzLyqMAzeaG0o0zsL0eFTqphfDsn1rvM4%2BVoHZ8ErzQJEaIqzezG7qygkXkQWbEaZ2IWf6L6q4PvtubHBLXVd1cP5U2Ojgi3AcYWy26HWG0ITeXQNIlkchMoXleZjcYCothgngB%2BdL3Zmeg7Vgy0YvxsXhiK%2BnnmWIDKBFxFbaQ0sC%2B%2BnOZmdN%2FLcJ9dCr6for5TX2oJ8fW0P4nC7cxoEXWGe8Im0Aq7X7gUvVnVOJpWvFMDtGuD78gDVmVpLPwrQqvdbY7MU5fdC3RuBp%2Fnssl58BckApN7A07cAJuG2PnDf%2FdWrg9bxpxYxvtThqOhuSv6b0kZp8w0Y2OwQY6pgFmjaGQxjgea9Vi0DLF3y%2Fc35zpWOM2vtzb7ttNq%2FDosNdr5T2RYLw9jIfbAm%2BsKd6KQiQFjwOiz%2F8xw9uOTrvB%2FRsKdYde2Jj%2BT1LIzuZnu4%2Bv2CMUtOzNMSsJkfGM3tk8J2uPb9cU1fzOeAobbENTmPnjxSa%2BQ211NrO7uCA1nO5dzhPHZgpzA%2FeN8AqdYx9Buf7rYSAZ6etPamN5FkVjmrT54UKn&X-Amz-Signature=95c798415fa2408a562469caa0f850bec89b0c1999d0a2b5a1f9e71edd8f6fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQP4XR7%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHMnIDv%2Bjb4zgnaj9mxggMqaeltwonYyYx3kD6lE4mYHAiEA%2BpDIT6EM4%2BWDpkNoCx2H12802eDfWrTOWoyPdIAiXqgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHe%2FajOeN1dWJRVcCrcAyUZ9BenuoXKLuxi7n8eqkCr4TsO8F9mw8iRMdtXwIXD%2Btni4NTniSkyAux2Bn%2B5CPffTcixFK8bF5r6E2%2BMl3BfMmmdjXBayN%2BpxyvRFsYI%2BgTUZRc6J6iVUTf9gjaKzHPRA23lPI3K6iuCpJgDnxG5Q3SD%2BFevcNx7qNYPpuLHSaPx7fn%2Fw6GJGeEhLCr0UEvk%2BcjiKwWnHxAxuNHdjTBdVnrtJmLABIKUjw%2BsFliwqREH6UdvsmJEdtNE27XsF%2F8BRjC5zV4oDCy8U1lXMHtMqhvCedi%2FILHgBKK%2BbXSqJoxr7nQaOYKu2oD19Kcp0x12bWZ5j82eGHlxViRkXM5CwXD440BTmLVoUHWZ%2BIDtH6ZgMihctvyWBo6a5ksR%2BelAoCr0F3zsl7v9BFbWN%2F6CmyBUvMFxFWPwsri5ZDUcuy9%2Fs9yPzpxLrhZkCdXyBwiHpPAU6473OtpUhC8gxRNT8csMNdEDstqTMTUGBpP3N%2FQthNpD4D%2F4%2Byu%2FYddxcpJB%2FNc9bQN5nt3MZDcG035Z9Xg1T0bzsrFeu%2BxkvBoIrRPqx1ZMl0HVtvNinEh2xqtsOe3aYOfYBpvxCK1p6XZMBdZOCfzbRjD1SG2ljUBk5nW5IQDhIEGN7XlaMM6NjsEGOqUBWjY9P4XqZEN657iGAIeEoRi4IupLJVEFTLpvODaWnUaNA2Zlw3qw%2B6aYsxs%2F4gjNiuB2rC8Ica68%2F%2FhhRVttZ2FKoLNGA4R3GR56EbCDKGCHCnQncKF3M4DSdWwT%2FYSD%2B37J81QhsJtRvZe55ZJvxBpeGBUHyjSGLmQe9UV8bjfUClF4PwYAFCGHYcx%2Ft%2FPncE72ioe16%2FiRao5s07gehATy51Ye&X-Amz-Signature=19892fbba70626e108ffb8bda08c829eca85316a6a039122c4b0e2bcae6b1c98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
