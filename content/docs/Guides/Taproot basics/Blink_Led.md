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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LBD3I3M%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH39YxsDluH7Sc89afKJ%2Fbogw7wPkAZKBwOgB%2FaFgXkAiB6Jx%2FRspcQ7qdxQaYJCY4zWaAlmSalrnq%2BAZEnGuPK6yqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0glLGx7ij%2BwAs2sKtwDBtvkMgXBOLP0MQ5AdB4c%2FCaBse3BhaJLQAuu2NRfNUYkbV5LxoTPBE38vHlOqmV66%2BnBHi6Fg9LMHszltdYEgHaJT4PvslKjXZkYFr4YZNV0XExZn2K6W4kp8j9vM5cIX3QJXWxdw1qY2Tz%2Ba%2Fu6FSxvdu3qXw6BSE8tgWT4GVzPhf2Fv%2Bwpjd1BSQJYzOiGBHA3ih6nuKaXQTtC6oIcj%2F078%2Bnfh0NvaS9NjGGtku%2BBGk%2FRtUggU7i5IA0Y1AqbfT3EM%2BS1BRCaZIZSpbe7o9eA2pasJxaqvRRJ2rkuKUi11gwbeoYJ3HsKRM%2Bl2GUompkEVwcsswZuhE%2FXIna%2FxKfSXMsT3BjgJkA1QclmS0umy5cKpjeYrnhF8bQDUTt8x4%2BjlrDHVrE3QrWxxOyvCyyrf43qxT%2FMUFVctNag3tYQc78adfH9q9Q8u7gY%2F4b4B7CfXPk%2BQIo%2BRQM7dc3hwxXzgwfxp97%2Bk9bzntmKjd9BXRc72AOdTOR%2B%2BL34rd5%2BQr1p5H6bnEKqEUQpd0lpeBEdQQDUn9AaYAUaLwZMx9J3yyngm5wgcrE%2B9fSLMnKBHIsT3NEPM%2FTrbLJRambWfzEreWHHAcm9KMP4rMj%2Bve2vbkJRqBDJSgrmrkww7aXUvgY6pgFeraWicon6zdT4RhphOsjKlS929VHfQpvrHNhsK2bcoQhJU2M%2FcKP99x5H4taGDCu%2F2oQ%2FyozLYxpq65AuS%2Ffb9w5aMSoeCA%2FiEgWPPaM%2Byb4oWxpjJ3DE0fvTli2LO5JAyw8lAV8u%2BytjNBW6A3r8dQVX%2F2FbQ16hPPA6lbyj%2BqOI96%2FXM9DcAV5Bqg%2BlaZeCwmDpJHqITLdbQzaY3Ue51jdPyu65&X-Amz-Signature=ec9f1b0c0be56b977ff1c00c56d8a611753b7e161d1e4b80b8cc1fc75a34f546&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFZ5D2H%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFoTf84vdZbrSbjaQ%2FAB8afS0FvB6mJavkIYENavIZogIhAM6m0qlWdVpEixn7L6FfWhtJ21M2IHgmkbzOrrAPQbWcKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRKZ6NBN74xOSbmXUq3ANYzhti6JpDcjVo9SvGhtcL4%2BegiHtQ9sjraFPJ3IO258HZoOu792CwzaX%2FtXBp3VYtGjpxsCvCzqXZ3dvo32k%2FLYvLdIVXK7IY7wmLjyoLfG5ujuLr7AOFR2SQ%2FSM3gv0HDfHj%2B%2FlXDdN3uO390WJI05Oio3rj%2F2OOAe%2BDU%2FpMjhTIKUNoHUmG7USUrwb73KLNAP5Vj2fP2MYC1H%2BOXs7RFlZc%2B0n60HDXhbp%2FnfwU1z4RfD%2FGTLHMhZIwyA1A8fNV6UjudZKBbtjErbb4Cf7Xw3WgnXIAdW87OsJ0tsejVGMBDV2S%2FDwIFBlE%2Fi7bv111A0308NIwsO2QHKViRJU5HgaS4HlYfsXwGysEiEWn37jZ0DGtut4d1BTRmC0aSakHZRxQEMN1PH%2FNjc1hic7drnCP0hZu4BFJaY1I6u7c%2BwLrkvXUy7nAK%2B%2BSWBctAfiVvaZ4pfkwQxekd0kk1bauw1J6ZQP1DWfI2zJnT39jw3xGXwPY9FRJrSVbQ3W42G1tFgYAlcaXc7GzvUktA9japahWqYLyMzy1c%2FCUNbn%2Brp%2Bn7afowrITcjbX3oFEz4F%2BkyCOlw6kIFgFoVgOh5FkigEDFBvNc6NP1sSgSsRe9XOyyn1JhB2CPFP3NzD%2BpdS%2BBjqkATwuNRgLPXUCUPh9fQ8VbUX5DfaWG%2FsJMnGWNV2oNrhFRDzHoYe3muzTc8Tg9zBn%2FVDzBYov%2BdsPFcMctkAYVKyw4v4QZh2vvUC%2F6I4IC%2FMiruz41r7GsKK82UvBfCyrOZdhSVQf%2BxAYgxqUo%2FURVgE%2FOHEeiIxSJAoHfJJ5kqK%2BCbKmrF9kzHwASZ%2BlXZeGlih1UVtAo1CES1CzMe58gePk1ELS&X-Amz-Signature=a329db1e84f02d5247ffa41ebc89411ac763d19ad5cf329028f091e52df8d662&X-Amz-SignedHeaders=host&x-id=GetObject)

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
