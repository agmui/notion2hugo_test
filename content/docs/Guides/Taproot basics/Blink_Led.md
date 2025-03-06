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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKCQ4EX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBlYVGY9G68UU24K7qbpFoymjqWuNIfnJCayhOwmDIDUAiEAlFQK%2B5udpwC6uk4AS3ID2JRXZ5uPN%2BsSTnWJDLnc%2Fz4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGu%2FaQ49IU31bxlq%2ByrcA%2BhOemYF%2Bj%2F5XUK2ftp%2Fak%2Bjid6x1OFkVxtRq2eF712Ka3R0nO35b3MtjUtR95%2BC%2FZvx9jFOEekMYLZnR6DAs7JqK2Vl1tCPNHcTakX1uR8Yu6UvdsAg2XtGOUV79AWMJ2fx7xuYvkhIoAQzsxohe1eFtkwsoTIc2lEueilUfsT727pZ4MeOsFC%2Fs5DRgp9TtMmIBzlXyQTKX7MtsuotBkBKHHuNpgCDpJd8Wdk1rXtWbC90tjUA9%2FS6CafHaBxU9inheSXdhYTSmRu7w%2Fw4gOyE0uqytumgUOB%2ByRpYCQlgf%2FicN8%2F2IkTVywNjuPEdhw5iqnVGAfgtK65S4Eq8xT%2BqxuDbWYLJrwdpOyN5wtw51mi9Bkbunl%2FkKEbeNlGn4ERyGAFv%2BmCvLaAouRdIcZue%2BYoqb9o8xAwCv7izRhFZqMGiyOR962fLKmdVAwdJJqfUzGnTte3vO9j%2F26xbDfJkDPasDH7oOI4dLNeXpsLWvito1eIpoJlM0CLHR9gbaUCd3Ix2X2Mnzzm0bdInMem1M8GXZgnSaiiEtMJrQ5SojP0E0DkDONFwbbZS%2FnPYURWfwP%2FS2KQ%2FWbiO1b4gi6UInA3VLSKML9EqrQQC5a3Fkv%2FNHf%2FRa%2FYdQ76SMJj3pL4GOqUBb6EhxG5xMwwTscZltcKmYEcgl1uDQTH1T3iwiITeLES4eiv89iRqmrqRKbXE1k5mWs8%2BwPfCU47JyNLB1YCR3Z0xo8bqK0Mzs9Wspztnm1ntCA693s3F%2Fsi5qYw77ESbfAUrJGYC8vcgWI4ZlWDao5u%2B64bza%2BNPDTLcBtAPjyQ4opwpp7moN%2FDqXAI10x8S8PSjHW0HyFKrPuz2WhBi19F%2BrwH0&X-Amz-Signature=9e450569cf4c230d4774b0e18978b9060c6eae761b69e5476ef76cf8dfe0686f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637JTJAAF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaWLJcoch99%2FhttFa0bfDXL4X1J8filVCic7TkzHJ5XAiEA9NX9YI5%2BEyYY8ZHR8lnLQ9r01tSJ2FVwfSAgEAEpzLwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNzUTQbsgbW01cUQcCrcA4LWIr8X1TLohLWmqRgOxkVaI%2Bl4WywR7HYU9hbiQSQ7LMK7%2FdZkhQyYT0USSxDVtxRBvr9vSaofYjDbVf1MLsbAwBWrmTWYWZupDEpmyjoD0jqNX6swUVtWhkgWm6qUO7Fhi%2F20KloRWxXZgEVXm0ALMAcKUlurKsJeBrMdBu1ishCrnO%2BntFLJf3og9gQQO2m6W7tPg%2FI7M0JaEa2Xr55tGTz8rfPqOPTbIg09i47urRNhA9dPLUlN0ttpJNPSWym%2FAIeRjaWXEssqXFo5J%2FUz2en5TgXMMj9pyMVFGFrNZAypYjRscakjtsKKEZ7TH6QBwtUpngtEmDOSwpL61jRK9kobd7xoULs5etdw21QmtJwZY3T%2Ffn5Esd0MQSPaY62k6i2%2BA0z1D2ry3Q6U%2FUVi%2Be2Lo6R23QbxQZILrOpulv80eaz%2B%2BtCupAz7vtOIMSDgvvxkt9qxgoqtz8hWsVd3OpFSNOq9e7dQhyPIpDObXmZXDxyByl71PfsL0Qd6JjE4ZGxKsd51gLyZmeL6lS%2FdluKNNWmjcfC0fQI44zQvVMmEIP2sjQqpJR86pWV5qqK6qj6rz61uIll%2BxFYFTiXB7uknp89rcPbRj7sFxbBI8UnqfKhM%2BzUCx9E5MJv2pL4GOqUBnsPwpvEBcnBkn8SglB5gxeVrahG7PTBorjBW%2BGjt6ZOtMXIvDPX7M2TtH8Z9QlFILWBGwKsw3mzFeFb3iEABwEZ%2BQRZ2d6%2Ffd6nKH4VG51mOfwfoTvI%2BNiES4cq9a8o%2F9Fd20ltJc2U9PqBKbiIfLZe0xMfax6ZDzyBssRU9%2BfV0DREvR6BVC47NJkCSrDraMatXU%2FiwolMIWTl8rSegFhv9r0Gh&X-Amz-Signature=db2c803c65bfc9487c34a72b834b277e3f02307ad82b82cb3e4a5365bb0c42c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
