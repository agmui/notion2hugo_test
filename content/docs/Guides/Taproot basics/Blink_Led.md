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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZQQSX4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBwLcYMQ8A0Clp6EdJ5l4exckEZ89sP38oG4CLeOonDtAiAyv9GYd7ONNcNW9OZC%2F7q9g%2BcOgVG7%2F5t5%2Fwynu1ixyir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMKkf6v8g5bQHdaRCHKtwDSa4LSFAie8vPKNdob1q2sfQduYMzlcE1Z9f98%2B97GIQx5keO0c%2Fs4Aeg%2F1rmMgvgV8CWCXEX%2BSr2g8ASCb7iSqkST95uBQ6Hjjx7TApg64nEu03XQY6w%2BK20BnVhZQT6d8Dxhmz7kwmpnTadKPTHTw9UQ2niaRb4b1xedmDc1TpE91SZdOgygHjguLWIwPh7xAhRWSeuQQjqW9R2sM9zTtfqf7drU%2F%2BrYFClA2KTbqzKoX4JOdQidqN3o%2B2ME78LpaCLZdWVclmN%2BVDGzgSn8tJ01HEEPvE42dj3lLa%2FQIfXuK%2FioKbaYEuAoWQ1o%2F58diJoOhWpw5QZOeUbCSY9yIGqnp022PzgnmRH%2B4COK9hEOUnL7PAumNq%2Fomg6lH3VZEmolOqAsrLQh%2BzcEBeC0eTmu7SMgLZ1TS1EYKXC1Ut6fdLtLRbr0lL5%2FnjTO8Vv8WItCV0AZ8LUAG8MebG01CrjwR7xULaK%2FPWPJK3Qo8%2Bf4PXwsUu8LxnnDJgjRp%2FZCuk8Wzi7Ws9si%2BLodXvOO%2BgGagwJXAIkSQJKY%2BIRgVlehBPPZJIhyIy0w7i5okoTsqT2AUSw7DeYanBw%2Fb%2FTLhpGQhD2PG7ZmiqaNmSj2RhgoH%2BbOHQ1OqvgNgAwnN%2FywgY6pgFyaYp%2BSi2rBUihqND9Jc28bcYli1v0RiwJtGqVA4IpezlSm1WLJoTzOPFTwXLfZdYazgGMSO%2BaGrmumTka975eE0xYW4t58Hi%2BBAp5qUu5Vl6ghbdWEjzjGijCEcHw72xls9dRQ7ynkcGh2cC9Wt73xoirQpsQFUTQNvFqggiHn4BKJnTYuR0YGFCNwn938ddz9kQuFBZOlnYVrPtfn2tgL3zTyV6Z&X-Amz-Signature=9a628afe7bf4f4a1cbd520bcf9fb8ffc2da54bb36fcc18d3bd13225c2fd5fbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJMUWM4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCICU2MgO7CpVXTAUKu9HNLu7T1%2BlGIepm5Jc85pUINkVhAiBozKuGzoHE%2BK2nMlEZSiJDbPlOO76pO%2FZqW1mbEYqEZSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMcGV8QhSXNZ88cV%2FbKtwDhfbi4TlbV9DJUInfxeem5tAi0HZe%2BtYFxYNAaXUN0NUWLcUnRG2VCjw0TZRv327xzcB%2BbEYLBhZ2n7C%2B7Z5kR8%2FJQ8G%2FfJmbgXXUCJ7FJDf2eDwjGlqlIcqGesB1AE9MNlWAEPVRkoEse3B1ENKOZkRYUAny%2FYOIg8Hjbr1UpIHtEI4ju1JWuxFgMxY25bEz1kVWd6jNIeWZYavW8gfn%2BiGFh8AVDSukK96TstTwnZHs4SmLg8a84Z4ZGV5tjprEbdcjhLRipZ%2BKbP0iTU4aOjKqk%2F6eMC31Kq2JY7JmFy7sZZkWjwyc%2BINy3talUbdBrnC0j9%2FsMdmPS2EGUaiIbYQ7TVmYBJ5iRjdn14TrLu2SjzI785XjF%2FV0neb3jmpxGBnft%2BhmX1X4xMj3fGXuVuZX5rAzD5BELC7gItGTWjVLICpySzlOBHyWEAa5VZ%2BvD9m1mHdRJMQo4jLKpwwiiUs3%2B1i%2FyIydjUVo%2BvyF5jOXliJmWcd3d607QZq4ul8SNxa%2FOLeguQ8nZJwoU6i8LkvGE9m1jkBHXKZaHmq4q44NMCyQrXpZM7AAPG2MJubsYulPHa8xyN8IvybXWiqV5qpMWhg4XRnKwOM6KSxWqWet0ZNRNnBYDzdEd%2FUw097ywgY6pgGydVr%2FsXYEa0mrkyRPb03UN8%2F7Ksi0%2FGMjzHjhyx1mTUfZelJ%2FVQKm5qXjw22NbNqFozgqS4HhMxaUXn%2FU3Gw7V0dHfPqerWqnuUpCasQ3z%2Bqc1MD%2BwpBnGbtrx8nxSpnhKip3%2F%2BvH%2F7u5%2BEJCxlrHq2GCdDU2vR0%2F035WxfW0wFMUl1wbgWw0hlxiyDQTpG1SrnRweax5UVTL7qdu%2B3CWBw35HGRf&X-Amz-Signature=bc20ca8bb64582b54290284c17c872107737d34efd21bb5debffdebbb6ea4927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
