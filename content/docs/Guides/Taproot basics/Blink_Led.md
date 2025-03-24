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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GLEJ7Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiLzZRRFC30GoEkX2lIPrOTLASdyV%2F7Vypwn7gx6waBAiEA%2Fn6cKHeg73A1%2F3SOyMe46IE%2FNsPlFYTPZ7HKy24lnUsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdWxls9ujsm3GYhPyrcA%2F3UGQtLePKXC62TPYkH05NDHXLc3WF6LM5JzMnjtJ0glXXC6Obyx38f%2F6nOaAq0bgn%2Bc8zz90iovHsdJ7d%2F2h%2Bg8otT5eWGLij6%2BCvYsit2Eekaord7onIZjPvoUz0lucvhPG%2BxIr%2BXzWSdxNMUkjLb3gESGwK%2BOBfETyBOuWccErYKj0UmEHvT2RdsKCPbGUwjWvfBLWTC5fGFQGO3eb5RH0w1lX0zl1wL6d7NGG13ghvPstZ1O%2FaJ6mLV%2B8bZd2SNtXBYUuIMRJw%2FzNjfEPEvPsqZ7NdAZC2o8gLaQcJxh0Nb4%2FObP4QAIW7XmklUA%2BecsvnL5b6cGutLm8QY%2F89iV9IpwQQbCVBdlbiPs4x8PoWuy0y14BfyJ8G0g4VOAxim2TQ%2F5BwNnO7yvG8xO%2BZSXfQT4NZscmpOpMHElx0SZ3L5acaXh7fAx6v0akyXzxM2GiQycQzZhMtZZfaR6FfF4g40a%2FDSdAsjwMWinq2ZJ2w0ocRKBDMfxG3nw9JD%2FL5M%2B1vYl%2BKAtUsZtHX7JG3VJE4urIOsTeQTLX2RV27U7g8hyNyNfohEyQPRNGUAu2qvewr6pSvBdjwHbnZA2um%2B6UprS7RY%2BoFF1YEGqIr6n5Vnq7SFSP%2B3xS8XMMWPhb8GOqUBylqd0N7xr3e1jQpgBoq785d4KWE2Z%2Bo%2FWcZ2n5RZNDLyeX58CXj%2FOR%2Fs7gubowgriM7gKfAdywbuUySYedahmSWalR%2BOADilvGtITcQGxhce2Mi5tiI2mbmjvUiHBSLx3ztIt%2BC%2BGIRdaWsEo9pgq5g%2BqUFx%2F3myA%2FA1Ymwu5Fv5gPA6Wv4Pzptmr4qDxwdaKrMMh2zyR7hrTJXJL%2BnOSzrH0Iol&X-Amz-Signature=61961a3366c7f956cc21a35e5987ce2d59397a2f5e087e4c57dc64eb3ce70661&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYU5WHXV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfPdObDKag00gphk8VgdlGf8vbra4e7xJMbApCB8MMgAiEAsZ8XmRo0Siy6vqv1yobpx8X3%2F1LyiLiGkzoTY91rl5IqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGW9%2BJY2jWRleTJC6ircAwv1AVeMy2MlOZ9tEW7ITDrb0v6RCBGh3DSiSGlDYkz1tvEjllbAYAbi7pEgnnHRV3dsIWpo0wKbbHCYz%2B0BKFKB8IKTxj52H4yTz8tbKWaluwrDLp8imNfluEVgVcYq4sNRs%2B%2BW9XT9eyoyhD6TkgTMd6bfTA4MkicdMMAXvFxZm0LtgO4kYlP0FzUEvLjjW9aEPrBgwP0%2FXGTpC%2FjJbdPDOeKo8wFV7NRDyg0L5snyfiXronBbd9KhuJc124sUPACcl%2FHcii7tNc1i35ty2wjyvg8IiIEjc1DTL16VvShR3FtFZoAwVjwBmz8WWCwUaljz7Jm4CFZzTjihnc0%2BbMsemVffUY0Vb3apzYhRPpeXXu4OoisoTxmFBYFZ0R4B%2BVeh%2BCurpMSn1080Qlm0CEY1tQ%2Fa2uBiSbuPOI6CRMsZygqdFNFRTk7CsUQyYNY9wj2xxxUiBnhkvKvF%2BlQXX5u79fLD%2FOoUqC2aDiX1121YNu56hxz%2BVPDJrEwDcdYlXYoGz2%2F7gS42036Skw3YVN0McbhBfdgPCt4EZSxk2Da4gyUVolGjD5q5wOomlaK%2FlmRIb5jgZ9NDwanjwMgmvNSB5IuLnuyhO5vbPbCSgw3ASu%2FX9DxY8vyt5nQSMLqPhb8GOqUBVwDr53Wdi39dDVlsl9f%2B0anfjSVCGBKXhLg1kjtd0lRjiLpRF30ju1agiHSbw785WRikdn9X8XcEfX1mOoyPZvF8YsMIG%2BTRjfcQbpSVbmiJP%2FePNiuoTAgWQA7peelyG9XAO1PWDyPdSUWihzlFHgIosxP88xKCtvaXXnmkznfqIW46R41nhoW2ouraRxvMmxy4vzwsqXeQYZo0tfCvuz1L7msR&X-Amz-Signature=f72fc8d65a321e5a566410a807c89fb755a6b4134284947ce65c1621992c3c43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
