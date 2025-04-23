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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TZER5M%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDb%2B5g6xg9aa8GfHySXDk%2FIrMLkmC682ak%2FrevqAb7LRAiEAs95VbWcNU2nooLJCWf4AxBDfXZ82e%2BdqbN%2FhitRacvYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLC3GXDlxL2EdaJkvCrcA89GvGFH4%2FnYkomQ2qNJgEU0%2BO1zsBs6xdU9GsW%2B7D3%2FjWqEH8M5eQLGJfqFxz03Zb4CLN%2BC9k2avFXQ5hQz%2BtvD5Nn6pRP%2FWfae4jRWL6LjJ5lL%2FzeRS9SR3WokXUGW2y6ytnP5uLK%2Fy2li%2BvSuOMWthd3l3QFg0jfJvmEwfVRKNWTa8lWQoSHsriXzYVhKHHVgLb60BrQfQsZ2kzSYmH14evjkDIU%2FtQruLB30Pc7zw%2B9lEezoLwYGnbX7ryOTwBmZbajp%2FNdYIPtHiIOLp2MqDtJX8a%2B1RpdH5fGCJ6YBCcKB2G4LmP48QXZHztBmASxOL9z0LU6nBXciiunuKqfTF50qPpKq1D8wSeaZwOp3iu%2FbeTWd5vigWmZuYCykeeP1VtCUJHI6PR32v3%2BI02rxdIE92auZtXyb%2F6RXIJmN3CYkiLb4sFCDqYpgMm1jbsklKBRPCq67TlZj8OXhtL8QyzSw2%2F%2FXmhuKb9nu8MGQNR2tMEt1nDlfVqmekmHHd4KG3pQFYiNgGoiGPqOi7ti13AJJCSFU5ISou%2BbzwodXuSuj%2BSir6dbbpJwuM3JMibLht8UpN3CN7r2qFH9AS6XMsGMFi6NQsrunEmpw5i%2BQ1heiIaHDIKfOZtxWMKWlosAGOqUBRWbbpiVZbk3i4qi9zlf8Hbv5I%2FqQQyx%2FIsK7zjqaDjm6x2DgF13Ofss5Ah9%2FAVlQ%2F%2FtYrd%2Fhel03O5dPuE5C5gbbK23Y8TJwAtH%2FFoBHSSbmGXqnCDg13wsNtPINvQgqSxfOfN4gfi391tC5XFaqhcwCgBNX0ALpkbFYzzXV0ipmiolbETx54dZYup0Sk3X51RKTr3rMhjt2WUo8nnCnhE38UH%2FY&X-Amz-Signature=529b5ae97af012a6d71f70e9557cac2660695c1b0fe028143a4b9550bb246fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWTN4O3X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAKRyWFU3P3MJtpy7nSQbhQM0kS1vA5ayprREykcIr1bAiAJRw26MgTI10KduzSt6KP97ZYdRBxklyTAxxfLtqSG%2FSqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk%2BUFESi%2FFL4uqfWAKtwDUIGrvcMouyiI8JYzcK88JU7JGJFGURSf1gyKitDfTcBHbcdp3TsXfJNC1b%2BP%2F8XutlBa2pwWDHrWRKSf0k%2BSrBbVfqWNfO1N%2B22ASFJdJuB8JGwIQbN9ZjCfNNemTOYPnWW2fUz2oJXiVuYr84AVi6P%2FZKybnAbitBVJKlQjLxGQouDHrv%2B0Wv%2FLwvEzeCWyR7JgeBPXUEbNU0Bb4gs5oFFEoDoX%2FcZlOFEs3P2y7A34RPTjLZX%2BSLEoci7doYm6M54qLimAFxJDdxPuBfrxCN9ksvLX%2BKtbSaUNAxW%2FUYr6z9BQNcUPnd965U0Pm1wXGQBu7Ug5UGE3ctlJHxs9eoI%2F%2FXfpHXBxmKPWGEzERhUSSpaSrkN6Irv6HUQ1jxb%2BJZdrMpSZrAj%2FbJo%2Fz07GSw64hxTB9toyv6nSm0JrUjbHhFf4x%2F0yG5THIsza2oIHWZtqSruGF2Ir3gQeXcTAgEECarWZrmEf3LjhQ45fDfitB1R5H8dJ2BIjdbhfhIrosxP9fd0plYD2jQHikJLS%2BPoda7sLyGCUWxgeS3Mfg7bKmbut8zGw9zu6cqsUujlnkBx9mX2XDyzU6NbyBGMAEB3NKLPJncnrv72OK%2Bqzxn5lxKMrkBbyHJ8Qvsow0Z%2BiwAY6pgHHOkQjAvQc2uoK6qk0XYhSKIcO5c7759%2Blm7pCClzHh2567uFtF1n7mKxflBaT1XKgynyNwuPKQTZQ3mKed46pNScSbezzLgW0qziDm9JPtBU5QOEC%2FW4FH4%2BPzoqYfTMDz%2FHIP9GVM3GHoSVf8NxkyMe3BdnLxk%2BDqvt79sLO%2FCUbAuIW1ug5wiPC1cBYbv4CxtIHYN78B7QspXX3WV9%2B0iVq7sAQ&X-Amz-Signature=3ba280ef9a96f0ccbd600fc15998eedd918429353be6b12ed6ece8edba0905c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
