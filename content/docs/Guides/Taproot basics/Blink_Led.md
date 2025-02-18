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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRAPWN3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHp70ZpkIyreFAC%2Bvm7nYmOr%2FpJcCqTEzaztlclf6BfqAiBMarSTDwQ6fMASYJ3eIibMeqhwdoeWaDH7FXon9rZfVyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM81QKsdd7Aq9lEEqBKtwDlzc3VL%2BvHavlwDg%2FHthh5yUCEKBzHP9aTjGU441kTUtMhEMO8dRSRxywVOiGWboWxtmaHCt3O5R7iPoiHAArvPreh8jQpk0%2FPPBVxdsHtb6wmOpyPCQf8%2FGhKrCPExIV4ws35S7GUY6fm24pFrPON%2Bo2Q6fCAN%2FIpWMzkaWZzAPipO94RmP3ZjgTnPnAZdWN%2B3oKfHT%2BXcnvTWac33H0HtZ04MkP81lKdaY%2BLL7IcBOPGa2qFUy3dxaxFzOY9SDSR956lYKyi63wrh5K7MZLZ2tr5Yye%2Fg6%2BS7M%2Bp8K1fcmVVtTdB5YSKS9vUtyqlV5ehnEuKgllQpoBeGo4CJM0nIROvujW0fgWNffJldKnzyrT3ME3EQUfvBk42FjaDBId1ktU55EJsJzykZpaYTwhS6yQGP2ae8TRo5d5JeI8IUlOpOYHdWeFkRGw8m7u82G%2BoiUAucMANxUFlpz0vIR6v4vWOCDH%2BRqND9nGTddn7yAFU4CqF%2BFLsmpoKJqFRuBUTdMIWnxgfUvq4tcdw%2FR2oMY8Hcw2xm8sQUW%2Ben03FCMPMdVY34ovP1LBaf5%2BPWDyJcCQGcWlkBKhxBdZq40xNnPZIR4MAJjlmhWGHncYgpKsV1ZC9wxpKyoCX7Iwr%2F%2FQvQY6pgERdFAr04F8gMvrMG6R6G7U2MrLUrcZGHs4zJvVtsgAtS2SviXmY1RtU03%2BiziJVYoXkQLuPbIQCnkIlA%2BqF99KBXmOer6dVvjR3gjQADvj7PCQn7TYkirgHyfxLYp%2BIlo2hWBWfCZGSUyllqnTdz%2BWzFxVP37hSXfqNJjvaNuu9A2zX9PQWRL5jzfUfdHNDyFWNEU6lBBsvJ3jwkdV65ZVn3fUDbvw&X-Amz-Signature=e5681a659e0abe71aaf941c75e5536d8840092e9f11892ba9888796b61428a89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SSOXQE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDd72vsobcOFUQp2jkSoSCmBBFULbXz8tNwCCfYXeFxxwIgFaf3TgVNl%2Bc53jGjoEn55Mk8k3n7UEBsuBFyywytf2cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNkzQymu8oP71LebircA90EDh5oqPk583CxiA7lyhi6ZRmba9r2qHUPzSbCRdmjLZgemEg%2FL5NvJIQOAGYtbNVRnrp%2FrOaGDQrbxVRsCL1N10CBLSOF9TDP5wr1L%2F%2FF%2FcKr%2FObMVHMq0sHu%2FFKohEy%2FtKEHTqwlxoejQXuFElP0CrbloAW6CKyO9t5zGHnImg6o7Mt%2BeH%2Flsnc9kuwZDjD9gyWKziz7Y%2Bjloyqj2FOMW96W3dlT4YByCi5MiJFO%2FyhtNKmGTZ4phFcO%2BLPp2i%2FZCRhlRDMiiVRfCralMyMM6afSX%2FJR8yRNTboSPkQ3n54Qkkj99udYUlqu%2BWZIFnpvVSEV53PkssHAl1Wv2T9eMgZOvcNdRunJ9K0N3CgM2ViZM7bcsqKDSV3J65K%2BRzXlXgq5H3ndj3%2BALq%2BXKlEDdthRn%2B1fS1%2FjJS1zvYiCoNnAAg915adNNcn0lUIYpPxk21t0biYijhgS7cjYuPs5N7Pyqwtj7USK%2BSADYLDjOeW9mzFAL%2Fctj%2BRghChSBmWmOTXIcf7bJ2OOnh6nytexF9jNB3HiMb%2F2o09o0newDz%2Bimo%2BHmYKGVpJC03PJgbTODpPKCdXusmfJqZoNrRJZEGAWJnFhDQDFkXrXoW1MCi3lRnNc6ycjxWAXMO3%2B0L0GOqUBCPAlJo0kLBwhsLRl9n86g7ojW6d%2FBQotmubF6HDPPpNpa1%2BNx6h7ZSV%2Br6ZfhhOjtiTDqdRHpF2B5%2BY%2FDMJi4xQ9bgcjMlcG81Hn3VQ1U5z6yWpQd8NapBUEnQ8b2bsNlW0wgmXfiBeh7wRSccladnXOVwlQEdMvA%2FxNMwIh%2FHw1xjzgkbur4%2BkBiVcFWZL%2FTmuCFC2akrBV6GeD2E6dBcOjUPt9&X-Amz-Signature=263876e061da8223af3513896a36461ad51ebaea5515f5707ce258d4785f0b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
