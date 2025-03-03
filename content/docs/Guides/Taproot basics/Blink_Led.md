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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRPDY5QK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2B%2FrMYJmzCX%2BRMsfTtqrFzHjMsCEW8hi09x75tm%2F5yAIhANwMJv%2BrmtvbJp67N8Jc11Dpm5lIRZ%2FdJ8UxhA%2FLtX2MKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvx8B6%2FkZjy%2BDOde4q3AOk90SR9rtPvHLMUmp7lF2T35Orr8q7dVdDLTZ4%2BbAePQ3%2F2wjW%2Fz2Yla2q3KoAGPSvAJJrA2mAL8y8CL4VNJG50e2t9TLZu4%2B8%2BUuTseMUkJdCF3fKC5P6Fkk5IsAmxuQYpEuZFosTEvOAOeXGCLhi8DJY7b3%2BC9ryAZbThr2OlklNaznDPjX04fxaF61LeRySQbcx%2Bczjafke66zo7k%2Flaatw7%2F2%2F84pspFnaPxseAhFV0GdlHSu2gZT0195aXv%2BGfYmLHba1nExP%2BW4xwIhdirpBMjS6b9EqBm5KDr3pgF%2Ff8HIiSst6vrwk6IYtfdlFYgJ6qb3k9msN80I8%2F%2BNxt5%2F7%2BkkjdzcT8mPZAkdqKMPVlo%2Bh%2FNJYgQ3wz9Fk01AihyhQmdXuJQ%2FxNUpn7KrAZAPGhgyI6us4aSbw1JX0%2FbxdZuQJN4fadO7gXuAjNEvvAx7ISPuJ4fdQVq6vjuV3Il1nfG8KO18y4pTVBHRCxRghQuVXUohOsgfRuu9cSvjS5qafnK1mqWH9wDNtOkRcNSloAfscJiEEbek2OFczHen3QxBHx2ZUcqwNJ6j31OvARxgSluNdSHJH%2BOvwo0xZZxrblXAcOnzIP8wQIaOwD5fmtb0SbeNfsvglOjCvl5W%2BBjqkAWQ3OLywBHkONbrfHvVYtHDn4zgfSoUNoAif2r2zmMJrPNGjnwFlFFc8hdMIkU8WlkXXpwUW83SSI7LlkX1yfwazF%2BgW3BF%2BuudsecP1EqJRZmLxFgxkxyLx341fI9H9rsQxTrz%2FVnFwy2OD5t%2FjUPEE3u7GxoEeu4LHKRGSNuBVWG6OsQ9Raxo3rifv7cJF7O%2F09x2aIs%2FX77sWXrhTY0XmS2N%2F&X-Amz-Signature=8ae5df180597b59094ac8d5e2d74f1e33c57dcc193e861f258a4678f7d2bc1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ44ZEDF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu6%2FGI%2Fkepo5exdPjWeQDjFeXVMIp%2FJ31Tu1zKoYjQ4AiAeYh2btZ22vd1apBGYEDVxg%2Fd85ICMlXXQXcPI3G52DCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMQlEF4P5jI05ZM0pKtwDuZe8V055uE3X04AjWjTIaIGRv%2Fw%2FX%2FFALdS7599sgMUhE0MLew1SPGszvtA5PqF3oIrNFGaP0Q%2FIfDewp5oljx0PT4ZY7qnVrgkgxvhAp59VXD%2B0JbeWaHJn5%2B1XE6Iq4du6DISxYBUj%2BsuOuS7LUrl0VeUgD%2BVokE1our%2FuMjU52F1F3Vzeos0RBqwLwfgV7AXU2x3OHqLwCSB1OZJ9CMpSf7P4PmOUJBmpRLHSTTxJzIhMu%2Bswo%2BouUSJs3K5hRuXzTYN01Etb3ySm6XT2F9FPTUjC%2BM5zrH2GdwAKOI8l23jHj76gbx43Mzr%2FORHZWDYr4FJ4rI%2FXyLPCEZmp8ouh%2F7JpbJYW9mq%2BAAft4F%2Fb3reAfYg9hA5M2RF6flOUoIpoAPB7yz%2FRPC16iumtMbf2FM0L%2FTwZLdMnxJ1UIxzUEeIOaMHP0cUNoeHBxZT4cZcqM8MkeK8ouzYJt0ONmI6f6oggeJ4HtvfdaJOWGIv0gGS0S4Tab35%2Bz5eQz9dnWhqOHXedxEHYsrN2uRDzbJcoUUTzKE2a2woYfcBX%2Fjb7lON5j9TwpDMl8SKilp6jUExQLHjlq0LowKIicyd3%2FG0nJUvxut78dbvJRWwc89y62EYW5CDrCmX1tOYw6paVvgY6pgEUcCjNvA4NBLHW3%2FGqcnlpZ9B7JcIBYkoEL2qB%2Bbd6sDuT7ClHtpnqSPN9XyPj7X1HKfNJtbFh%2BdgV0CcZ1L8L2YQG9zPjamPcchZg2stk0Dq1ZXvoSo2GxY19Kq67B9UYieXdj5ZnE3VxSj865hXXVFaQ1fjVzNzBmDw%2BGdW6r%2FnMjkvkALAGCLX0kIWvGHY%2F%2FGQoJosyA7ssu6mfdFwlvW6O5CTa&X-Amz-Signature=68c0e4dc0a6ac0321411cf3447176787857a03c3f80d7a755a1c25395cfcf246&X-Amz-SignedHeaders=host&x-id=GetObject)

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
