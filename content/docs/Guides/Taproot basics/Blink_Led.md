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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWFJLYJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwI6rEbt1hJJEjMgeYaxl0YU3zzVTWBt96tXR8xtfAXAiEA72GaIo3EV65dJhDYBLp4vEt%2Fhp7Rd6hBkXvIREfphFAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIabq4Syd9GxirRsrSrcA58exIqrgsH2ZU1vBwT7nJu51YXApu6vBx8TY%2Bgc2ZNuJQ9bf%2BQw4NRXO524TeTnaktHX75ayFDwR%2FdtG1r%2F8eIb9aKg1ixS8QRPpPskNXVCiU4ZGByYidlVW1JHFSXuMlHKPFhnQM1RJcSEO2xdu6Ca1TQ6PW1a%2BIwnIyzGq0jN4APC2q6gMowkK23N2bDWcJro2V%2F%2BOOBR9JS4St3Regs8KQCtzRdYQt8EqvalSYS5q0BjzKTPEIh1w728QArcHQCmvJZoLzGfv%2BT13crTP8KxZKkxAGjDYhNh2IkOaH1GrGW3Gy5QCVX0m7Cb13ZcCX3iBypTpdEUsBxptwsaxVqre6tTe7qntAoqDQB5%2FWzBQVCd4t5fzk6fcrwaFQWeWgm46bYa46rv4L908PhEsocC8A1QbQiVw3QlA7JrXReWdYWerjjS9mlUCkrCCvFt2WU1UszaglzXp91a%2FjXnuPlm83LN%2FZmkJBLj%2BmDV2%2Fc5cOED7D%2BbDI0t1QSfKWDtOaB60QckvV80qaJWHEV%2F7R%2FcP9SVnljjG7eR5cKeB31BV4L6DAlyaGYhyAIPGc85u9zIzQcoVTdHaXhX3GosFjUYUQWa%2FE5Gr0RYi6m5I%2FHaRjKPaXSA%2B7BRjM%2BfMIXd9LwGOqUBiHGvjQtq%2FfStw%2FUDlppWYDrwYc0lZSpbOMZpN4B1l05Tuwu6KrbhOySsgHGtB4RI6eUebD%2BFfUPStTSTZ%2FUkLv5QL8ywsgojofvHXyH2lD%2F12BRyDOPQl7tqOp3ePqnr7TU8eLKADrjsykFRAWqz97Ny8tRF8zDkY1NR5pOJq9rWB29z8HRC7nUy%2F1bXyeelbsowrkxw3K7YikSoDRN4HUunO%2B46&X-Amz-Signature=d15711ffd092108f8bdfa32fe9d8ac6783bb22af3a51f66ad6527a08ca70656b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MGOSP6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsuRdeeeXNhveAr%2B3CbDrkA%2FgeyeDjuF0L1Mn74UnAVwIgZ8xc8S0rnSindeX1qhAc%2BdbiO6b6N8%2FqtwU%2BsUiFWuwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9C5qZZQOKohqSzeircA5ot%2FLxdjrrBSNeXTZZqXa4U0gmD6kpq%2FB5fAJnA%2F%2Fns%2FQ3ynixebo0vznrGJloCEwEIO0yFb8S5FnBj%2Fz7VL2XAY7A7ivodTAJQ6DHHefs4hCsuKK8fYOt39L1DTCToBCYwXgA%2F%2F24dqX4PaGs0wjVW2n0tKHDEOP5kKVPWV%2B5depZOKjnv7PkyZSuyTWfkilnwxJH0HkaA79l7XHyi98hUwvEQ6IyqLXV%2FDM5CaANiI1wh88qsRPTWTSP5ntRZlq4k0IK9CFkUw0VqTvaCX7zZDKlETeNV9LI3f5enVLxikd1OZT%2FshklRUpFEpxB1y9%2FmvNzllfdBA0Wt6MRILFGML7IXE57BZLMPig7q%2Fzv%2FC%2F%2Bx5NO9gppF4tRWBJAo37su09Ec2%2F%2BwS0ov39zBCSJ9rEg4vit7FMAoSGuxKRmbMrj%2B1Yjnoh1c8PyQjj6kIM6TN%2BtJpasSrRXzYRcpsWLyDD6Qn4ame4w5k3rAydBgdlUt1al4zviR9Ik9M1I7ybUf7WqCxfzBUeK0e7rrGypSehzJQDKc8CdPrXTjpyWXYnelEbD%2BFJKtZGh3Xx3HDgoYo9CWtHxSVrc0nsO9kw5X6gyY7RQnC%2Bk21xFnofvOsM3z3%2BqLeAMYjTeFMKrd9LwGOqUB9WQFgej%2Fxot6LKu%2Fy%2FoYjFnYE559eDVyiZT0PHfjSQqWj2f71%2BaM%2Bs0VODiTu4RyxLTRwyfSNewkh4jaMrLMGKQvAJjcmfyUSPjqwZA444f5LKYMLc%2FEXu03%2F1bdunMCtwH%2BHcF87mCYNo0mVkG5SWIr9XL%2FR3P341LLVlqlVZAr2aG742Xjq4f4LDAMOi5QRQKUYtEIzAvf52kbvdzWPj05kS7q&X-Amz-Signature=c032499e51788ef3aaeef1327b2fd6d85f39eedb7df050bc0a426b6f1e58ea39&X-Amz-SignedHeaders=host&x-id=GetObject)

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
