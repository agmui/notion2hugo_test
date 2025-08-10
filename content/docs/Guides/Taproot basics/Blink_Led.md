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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFQBXOZN%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChqcURd%2FotFObpmwsGUOuvwZJ4%2FxRsZqABNCL4nBIP0gIgJGk9%2Befvfde2lxHFr%2BL9aTDdsdxKNEf2rfwi2kfFL24qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqkPuIpl82WlO2AzCrcA3BgoI5jL9xwmnGnCHj%2FzNfuuUNIaXZ2Bx%2B%2F79BoGiFS%2BX1F12hZb3E6QTHrr%2BFfwHaKPi%2BtdPIbxvL5YPZ2PfOkB00tdxqvXcnSJfd0wnb1xuM7SHK8wFFbnGiTn06AwhIiNbN9GCNueYEZH4JWzIQt9VaB9PhVBE%2BUmP7s1HwDg%2Bk6bWC4MKhCXNa331Q6vYcr8CHQqSWa2xGElSJMvar3V2p3b%2Fq9ZC3W6j4tZqDTmSN3hFLz1YqBakzF2vK%2Bm4yL3d9ACdGeRuPJNEEuEq8M1lxgiw%2BDUk%2FISi%2BhGQ%2FxO%2FnDspDjZeiXVVVZE5t6IMz01EekW82xm2SmKdy1S%2Fn4kI40MbMQ7CG3S4v%2F6lrvPvmVFbIxGRordqQnF4CZX0eGJn8YaDxFXQIXOwx89rs0ZzQJDmywTg2dNTppKfOTtBM9ReKWUTGAtggqxSNAPFkQzS06CwZt2G%2FdZgeS87Imu0c4Uo%2FCR70JpHDHMLS2SVwvsGg9GrPZKrjUmw9yjYOPayTy5YZLZUtY6w4Xhqn9QIiYgcp0jDF1D4wuEVTPmIMmfb9Wak%2BimAOVn7Yk5213859jjrpsdzzHbqExzhy0L4XF6AhE89K%2B%2FULkfFlTz20uM%2B2tLG5gWG2FMOzu4cQGOqUBLZD3PGYsyjpWMH0HL71xJL%2FNxnbuBuSMKDydArqOf%2BZV6y9dDdl50sTGr0e0dfJrLz5pgAt47QwBsFy%2B5Hh0%2Fe8dlRxPiSHgkjZLLNx3gDmA%2B733T9NRundzUZG%2FtTRA8YE7flwmq859jFaH%2B2PvSVdT3A%2Fuu5CrKl%2FNAoBsI4H16lX%2FY81UEySGAwQtu%2Bbom978w7u5ALQ9hKthT%2FNrWkpg0tv4&X-Amz-Signature=ab6b7acee20038f953f1d95b158fa320efc1d269b58e9fdbfda336abd723a6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CCR7GQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7nsXxL2BdGmyzHfkA8BpSQZRk%2BKcwz7CEqIPtXBjIRAiBH9LHQHbOQki1VbkKPWGa27vWBawJN%2FyQJe8CUywzhcCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXeSZ7ZG0pfK9hdeKtwDyE3F0DMJ%2FQl3MxgQxrnouzaZCEKS1L8q4gLP4s8DeHOOQJikLD12dNT%2BlSsObP%2Fa0SQfhhxvQ%2FGk8cll%2F9id57%2FJ23nwYCdCgCMv2kP7QNlOrqGb%2FOUmvg1QftWYXGg8fn14Lc%2BZ9ULiAWigjq9GirGVkkSTL4ssmTzamtjJiwtDa5icGGy5qK3YkSw781AyHej1G1FCkBB4ed8HQyrCkj5KPLwdjKvzm%2F%2FU%2B1vcbFZcewA7pfOHBf2A2yoLYMOmZzUoP%2B%2FRnS4v2ZjYOBv6pUftDfSgTVAX9L74jp5SAdgQ1C4aEs1iawHNb5WYbOPpsp0l7gX5cryaGHDnUVVeMyKqWPS0cMo9d1oDkLuBHNK3A6XZiiB%2FR9ZuO6UIbR%2BXtzzPw9gLX7DVGMDyh0kJAM6qj2Bdx0go4%2FaLuNLhvXw45kMgZLEII156%2F7gelXeP7WpZAqkWLKlFfQr%2BYypEC6GrCALb%2Fpd%2FuzkiI45V9H%2BkT8jiMmix5u4Pcx%2BTuXQBlILP3xdY9tV4skX%2FjCt%2BzrRm1XXImk5BVHGJUT5T1iIw97n5%2FJ5mMdt3CtN7BJrC8P07Y%2Br9b7VjAT17ZcW9%2B9nFeN2K3bAZeIKefn0WdHdx7pEuu4dRY8cQBHcw%2Bu7hxAY6pgEVjKkpQq2f5vYoH9nuMdIpaT%2BY7xW01Vhz0fSYGuKRo6ImYxEa%2FXmXe84BnZCopNLqZoz9VDZ571oedGj30Us6%2FGaBDhihmy0OLmiaKoeLTN%2BT%2FayHX91Fn%2B8TlgiwStubnk52iSwUboS%2BOe1RU5pDafL%2By98%2BKSzEzlmG4qnkxGm8sXcC9GyzSvldG0Nm1qtTlaMQW7bRzX2hb%2Bh4Zkzxykc7rox%2B&X-Amz-Signature=c168db816d589c4af568883f583a458126450a7ac0745f9113d9f199301c8dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
