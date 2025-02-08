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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLQM4GE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDOeWy3o%2BI6sJItdXIgwzLXgjkTJ45BmIcm8AEb0cz0PAiBp4NadA6S75CVIdrrCi8wBYe7LLjIZKgpJ4iih%2F9KdZSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3TSiFb6bRVTj2RoVKtwDffqbE3LmC0KsTsyVM5m1YaoV%2FuTsTZKjbIapDWxzRh6bJ60sM%2FeWN0TAfTFb87XnVvx6JREyAh86HWzGqRpGO0BprVONENNFR%2BoNv5sUCJUn2UDxx%2BiZMslTItVHteveGRDngEmEdAPnW3fPMmPmU72yIA32ig5pb7ZwVywBpV7ctAau3WYU%2BhhdMRRAZcKmmxDTWCprIz0obhsi3xrqL3xQRg1hNtklQIxX2nuCS60aQAn2W6UR%2BysSpFmAFicCYDlAiIqb7vtsQd0GrDLDN%2Bzg%2FTWpw%2BvAl1SpQlNdzSfPQS3%2BWNFbU%2BBbqUhDDVj3kNyz%2FPQIY3RQVxlEjxn1imFev3aU9isBCCjtU4gcvH%2F1BeUYkZOKKSfj%2BV8jDBflPXyaqe8a%2BhKHuFiZZogzrx78AbAA9xjNxMhISB5aBrQqC5jjOOQsqGtfsFy2UcUr%2BUHft%2B8cYVq9P1Krck2pLXXEjFsdTKUnY%2FTCN2yaz7vuYCaZNjJAchmQTc0lJMWa9TjqbGdDzV6SJtbewfygKC27asiAS1bZsoM%2BsBp41q26IdhhmJ8%2BmXaB1QuLEJ9TQzvnVZPi7YpGmKkFHoDkSimjZGCalbo2FfjDiw3gost2cABW5EofLN0VZEAwoZCcvQY6pgFHgJdCEK87AvLTx1%2B%2BRJtUJGcDpZjALR1X4pjWEQ1G0LGTr6PbmEUtKV6kKPX0P63GISqKiF8Sz6hLax361GtZ%2B4s9Jl5uJaJv0xP2K0V2M6I%2BlVgJ2oZ2oIEYbfVmE2B%2F9iK9HH1N8W%2FpTpt7rT7eBrsMncr9KX%2FWo%2F5kqCVKjpSnIZYGA%2BAqOHLT8n%2FQej9RzRfFGFJMgvIXSI5JYvaSShsc6Mfw&X-Amz-Signature=cd93233e90aa1f053d1d0d86b8754e4f3e564296f7ab116d0f9f15592ca97a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDMA22U%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCphsHZT%2F1pqNhdtKBuOnZtQ7gYjNS6A9nMahYgnqIUJwIhALXFhbaF3YD5D6KMxipYK5gqaUsm%2FI9P%2FcJGNFCtFV%2FDKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJ1J1tghc%2B9Ua%2FTUMq3AMqjjru%2BQcLciYGjwMrhSDb4OQQlWvFwc1spPQPw35gttLmXhDtYhswIO%2FySfBZIf47n9fl9%2BogQUjRaDKGZ3kLJ1t5%2BBnMHo58swrc0ydx6AuMnUy4K4ElOkdgZOdAGOrOighjFzrpt9RwAaWryW0HE2e7iJbK6UYQCd94xGzMplhOl8CKj40SIoVo5Y347EQIi12WjzzCLmIHU6PgMvaT3NKOHM09pghpZ66fciS7S8uN%2BYo6RU1ku29guWIQY0ewWf0lN%2B7IpljOhl0hP7kYH3WAMYSNzuK6T0t6KIa9p51XJ5XWg502bO96BP%2FJZ6bZT1NfvowpcLXUYeUoB9RMA0lOp%2FbrakzINRwRmlfnlr3iEoM2Fez%2BCPz9Ho%2FkWo%2Fyue%2BY8NnoaxNOsPWxSfwcbaYPvp4kEwE1a%2FDGGbsCIqOnIlgyEgp8dRMBJlu5gsqTlQ4MUvMecdWsLi2nM04MAwEUc0%2FJxBw%2BjMYSvm90kBejOdHVCCc21RYV0b%2B7RjkHuj%2FpkVUKhR6KxwnuD0f72eDiXPCPG3iBF%2FF76e04g0R3O61PN4MN5%2Bab1zaU3y7lY3vvm3toU2xyLPLQ9Eaz0XRTVlQqzsfvt%2B0FKek4HvjJIQOHdnAOZzU53TDUj5y9BjqkAdZD4bQxbNnPPWhwDBv%2FIx3ayJXYweqBruYkMgwvOyB%2BccLAOmgfq2IoeRffhU2JKwkbGB8mowcfOzo04SnEZhaRKJ3%2Bj0ZCGmdd17WCFsTdJkwcCIxIGey5rFzoJZgCtzMeuaUrgvt%2BeCCh3dTccolKY%2B%2FJ0FnPJ9VQoouGXeNIBQA6ORvUAtr0iPDtCu3n3SOPys%2FS6yd5YPE0ioYoY0XkT3px&X-Amz-Signature=ac3dae2a45f001dcbec530da3aa6083fe110503ba19f723c8093c5924b880d89&X-Amz-SignedHeaders=host&x-id=GetObject)

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
