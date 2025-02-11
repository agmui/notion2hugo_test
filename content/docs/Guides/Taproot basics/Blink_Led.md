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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZLBG62L%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHosHMUHqIMmlZwTkru3QUOJixMfbAEakxoEy97TKCwwIhANO%2F1THd1wYzJCxPsIrFVQhc1UDjLVltp6mgCd6Ye4WCKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJTRLP7R%2B0SAGc%2FgIq3AOVooAhIY1jxsIcbe%2BoNGJGA2rE4vN76AllNeAAmYCpJ2yMcSrfACl1%2BSm75DAv4e8emb6Ecf%2F95z2MXqzO4St3XJ%2BykoHuhThKiij7E0xRAlQnPKfNgV4x7uj%2FrcGaRjuslRe7InwmMGZZ8m2flGJfwsLVUpLZPFSiveu6fvGqXEHGTqbAakR3CtpgsEpmSeBxc%2FjWPcdFv1lvGxq7QrXcmkPUWgCYUDf5%2BygBP4fEbay0QwbgI9bsIrI%2Fq9UbLyD9VEst0gOMT7rOioXVW96ORQvcTPXEIhBa9N7k4pPc2N6bPmrkN6UsIXfZ%2F1S7XsNQ70ml9bNUA9glPUOr18EZRySmituFEcKpnvpPEZN1lNKx9IMQ42U6uf6qeC3a5inejUBvRB5YwGetIGd2jhvPZ9rPZT3UU5Ccd0zrDv02nzvCk%2B6l5Yvmg3NLt7HWY%2B4Bzxch3yJgLK%2FbLpnyAQn0tqFEyI1sQd8StVnknd%2FjGSvZZkAXk3%2Bm32GDNPHY%2Bsd7BkkA9vit6vwmwS5%2BORGW0LLAp8y%2BI3MaDxAi1HdRdTb%2Bkaw%2BMmaygpwyO%2ByKQ5XroiTOul%2FjllQO6bVgmzuOEatsFkoVPHXpHCIAy50RqoueEXkAG3lhh2Zc%2BzCArau9BjqkAZcA4bCHTofmBU0X%2FAgbq%2FDrKTHgz%2BNS0zfxqc8IMUB2ZntxMJOgLWJ7kSEfEqra3YftZ%2FqD0I5bWdAJNPPz5aIZH1fDvSN5NJ2EBs0X0HwyXMt%2FJLeieTYOLdR5%2F7aIqed60Jn50SC27IKg73MkoqA7gsB2RGrjzW6EjIOxrCDW%2Fhyt47akpDoxOmFY9iBw54Aqph7M2orIOwmb8DmZxTjfFEx4&X-Amz-Signature=7ab3f04fd4655572d87d8d295fe6fe823cceefe69e5e1573835e14d8a95247b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTINGKC%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQoxpl2WIQgPAl%2Bx2S7JaTq8WYmQMj%2BCy7qE4dLGICrAiEA4hEgcCAe7Ivy52YQ1q9t%2Fi0Ms96JQCcejIjMTZb3L0IqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMZPJfPzaKURk56rCrcA1BBG4nFgSzhfhqqrQJ8tI0AmkgcBQ%2BcIj%2FhhskN3XnIdg0euHkDNzZh%2FzuS7chbg3Omkpr5tiJidy8Ax8khob%2BxU6%2B6mCH82m8B20N0%2BQpFhhv4s%2B6nSp7fX1r87mWmCjqWLoxFZkqbSKnHx8fFO%2Ff%2BixSIr2VKdfXkTf0FLFDgovJzESD8Ljui3Q3vPXvbSFttJ0EikJ91Re88ckox9USMyQjLkxpyOh777qzRV06KnMRPOjrlcwjicSul17bpdoTrgbEWqfw8IGRsneyZeIchkr23BGNOg8H9zMazYhy%2BCCf5kKSMoPShhBq%2BKkkgM%2BVd9KGRhxLQliaeKIIJWAMXo1vPb2y8y%2FYUiCiPxKX%2FyVRrNMbzws7%2FUo5BjeglaPa4v3n3YCklpyn0S%2B1NG72zmgeYVCtz0lw5wgzAFF%2BumIU1XyGj4aJDotivBoH5tj2qgyuXSJfoIMPskmPw2l85ygImXmJ3lYF1EaHZ%2Fef7LjUyXdXYQbV0n8MEZxVAkW%2FCzonxxwaiTJ5VXjO8mkRMi7p3Aly%2BAEMuML16PPydqW6BsOKpMN6FVENY7bVftGHC1KobBjdHPniiscwGNTZRy4Ic0TXbggi4j5Iq%2BJrqxzzVLlEt%2BeJh0DTXMIytq70GOqUBG%2FcpOcTbtQCY%2BDjfFYMGZSzQMalJIUyxSOkmGc98IJ1wreVsZbofD7iSTcR4ooB5jib%2FJYkTSScyzhlr2PPfWrkrOlzADZ19NZBs9wEfB1ehLXy1YRSEHlF3%2FYOEHNGcq4Go5AxFGighck7y1Emsha3yeVkxQ6sA0hibEEyirDyjnw%2B2ZTur82S4eSd6lbV2rCNUOxnwRpf8TbaS5SlreSiiaav%2B&X-Amz-Signature=4860dd4f91252761785837ce48b3f3337b528c1f7a5e5bde847bd2e5277da9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
