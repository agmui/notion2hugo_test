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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLF56KHH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDpal8Atsy7yPGE9AghjqZfY2pAy%2FKySDajHZX5PZukLgIhAOcOH95FkBflT4hi4O8NrAaPuzK6ACMhBxwQmLviBw9qKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwR71okApmwHEo5IRUq3APLzeOvo8o2N1YFFGeRbZdjIT4A7KIVQHiVopabwmx3uaxb%2FEIt7qP9b%2FlKXjb4xQp%2Bg8mrfeyjPAR1xLU3%2F4Ife%2FkHWlsmBjJAM14930xGOaHJrxoMjgERe98lIy2Fojoi1ZySLjTZrJ2UwJsiDUNgfxs%2B0VzwssnQffRu4O0f6i%2FviKB4tObI0VFczIS%2BRwQ%2FxpMpjXrYikRxB9c0GmcHhtYQd%2Bimusf7t%2Fn9Qp8pEEG3nLw4xuxPFppRQa6Dv0GMoIv6ioIhE7W8MoG2ev84JF2xd7hZzRwcp6joXmEprAwArLTde0bHp%2FzY2oJbYKzsMhgIehJFNswJILWB86cSS%2BLsQjnrrSHitu84yBO4hgX3Wc2OuFzPJu9WSBHdszUG0um6obG9yzaTxOPvTJdHuXn32IlqJLaNJsFVdhUUN8UwcEYe5gUxyP5Jk%2BCWrGgMBQazeai8aTGYNoW7kyYDq6NfrppNng1zhmSslsZky%2FQ5KnMbm5R2FIO%2FGLhR4pEKqB1kEaLFG0vaFa1q6iRiMpqBG%2Ftwx%2FFnBBhZCrhxtKvP7c7Hj2yuc%2BzrHKNIAlvJFwneSkZ8poO%2FjUoLbL2DVBBl5jPd5B%2FuqD17KXC%2Fe2KsQsFBm6fmV08g0DDxtq%2B%2FBjqkASUlwPW3nvf4tI2T1QiDgo%2BpoVgxZHd8MomW8EeCFFC%2F4xBYNCx1iLRyne0PW4cBjkZ1JFYYo1lz3kORCGxtaVvxDxALTY%2FP%2B9cQrQB4cNzo5s1%2BX7B%2BtFh1P%2FBbopng1J3Qf6hgqJJYeJOJ0fHFcl7lZldzmIZJmdNFzM65Zqh%2FsgRAZQh9GjQUU9S6eHALxaqaB1k4ZA%2BCiExZtmzP9LNug3ED&X-Amz-Signature=fac012b95f0e8097a3d488b6b60e1e734db61cf3fa27106fd382478e7fcdcd72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNGAE6Y%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T132041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCcZ9qwdposKE9l8b0cRbf3GHyYjGLeoIMsIDpzWeobYwIhAMoBdwzHHEq5CYWTgbBnHF%2F%2Fukfy2MkQueITqH861mE4KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMumPvEHQLE0AYOhAq3APrI3fIDrB4RDEFMyFWy7mCWlS3HWsq3B3S%2Fz%2FB8nO2aBVks7PDPg7C0%2BD9XCHa4EKLHqqlUj37De3VjFHe1rh9l6YbDIW8QQQpUO1DCQLl%2BTSYn1CBvBlOorgypuZ8XblChQMDlGy44CquI7EZWnH31aZm7925RSbNkmA1568%2FJFUWS5VzlgDa1DgIiHwFMPzS68Dm6lsS6bTUGUbL32NHLxRATIUmKNObItBhhbE1Upb7jRs7ACpsu7i0%2BvPiVujNHuXQrxouviRAuV3Ol2YCFi5Q42P1IoOb%2BseDgOSsYuGnDDxxj7cM7%2FkmMQnK401lNwFTLJcpljWvcqYY7xghi9Eh7mc6vj%2BMGK90MIR7IVx6NJXQLlLlXN02BNSMZmRps8J1JlfK%2FPIs9NeHW1dYyLf4pywALyGMlayoPGK5IsThjvMvAMegrMT0LslHSyc6%2B4FPHeZQMhqdVTfwFkaGM2Y1ZpRPx%2BgcbwTqfsIzqqv0XIqJqQso724NQyBcWTlIUt0lK1v2M%2FIC3msAHoeycqeQ%2FeoVG92PriKUrMx%2F2YBp4sk0YqyTwRnxG46KPZrdjkPmtg74Pv7mmsAiweMeXOk7O3hUtO27wjOXzVsuh9p96YxMTsOfssrA5zDGtq%2B%2FBjqkAe8dvrxVVlgGe%2BRKfto14bVWqU4i4xELSu0%2FvKO%2BJs7%2FqHl8kTyQZCF2a73EX7NoI1SDoqe4QN3xrmLKY2qJr8aExdAo5%2FN3ilLpeI%2FlrtfWMFcz9IM5dEOEqAEIV2Ss7Mwyx8VOxyrX9L%2BmE7XqvtI5k9S9CyXHIDYmku5KfL0BDAK7xTLeoIshWoBIlnl4fPcQcRQTDP3MNUXpeFlllPB%2FbnEF&X-Amz-Signature=e9bae8a5c57914e99a46d3be79f3a2665cae8d69a8efcb675083d4831b31c10d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
