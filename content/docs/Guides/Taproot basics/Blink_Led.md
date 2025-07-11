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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYIEO4K%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR01sw0ETcnEDloAZDXXgLLRGqGfk6OINwIWHLXB5T4gIgC7wRx63CHnAbvt%2FaQbcZOTR86aDQ4cNiQ6fq5AXkYRkqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3tJK%2Byg9fF43wCXircA7I6d2RL5sEljDdXS4O2mJ%2FiE3NJ%2Fq0U%2BkyXxvIScpnWsxxqoGLiE30K8wQGWU1FyZWUMoDeFtCCuRHQoFZ28DjnKc2yJzbfD5aTiO1qcnUMYBCwarbZDvxf4EacVkny1vhkBvKbdyzsSuYV9UWb9ePSEiwVH9rjgw17uhsV6nxXE4AhGY6yMjkJRcDIk78no0PytpeiLOgXouTa0J5hT%2Fu6ewUqTruUI40xNVPaiiI9r98QCUd6qIjdz%2BGUiajsfFr5XTzUnZEH8tviPn%2BBimvvg%2FQWzLziYxMCjASoUrphUU5wlwHd%2F7bAJEHYvL%2BKXI9toEvGV6LPorcX%2Fty7%2FD9nxMkgme9W7GPMLzC%2B6dWH7bqpqVoqTRp9dyg4EV2itVSS64i%2BjWI1lgGwJNLS6Szbo%2F2JkWGywPbbeMgoCS6v68fD8%2BNSNqqtecDTs2tieLWkqE%2FXHyLDAVfw9qXMTuVSw2r%2B9fUh4HXQ%2B6yYmQshrJspLDz85KQ4yF0cS%2BpcBvMHxjKJp9aT7BL6KSiKCKzeoXwTesmim6fVGjIIzW318zkbKellt5uZCrifVnLWnwbpmfK7pPQjz1eWmrTt9mBH5V%2B4IGzOFSYdvOxEgei0ynJ2Jbha5qhRJJTUMKv8wcMGOqUB3o0N0r7I2LzvF80LMR1GOLoqb2SCfpGcI3QfnL7d7rcxYopBXH27CRwqUb%2FpESumLH6FuW6x332CPpk%2BaS1Q9YVMfE%2FXPuXA7Hw5XgUU8fhPjgt1zMKXZM1s2aqJPk6N%2BvXKirzeu%2FQasZ1YMte8SsvLIplp%2FcI8i7RGHaGG49%2Fb%2FPGP9P3w3tYQbMPcw8s16OzwFFiOogRepbRoiGlkcxAAHnDF&X-Amz-Signature=f519d9dab5e3764903f9d1198d1688e7a1bab3b05d2759de0a2378b4316f19d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF7MDWUE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T042642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdetyQG134H2xhMoF0PXB3FNppdLt8nCxzCW%2BQlYP0gIhALm8DxyL3kzSGYbUQYpE8Itxjp5kFQ82arDc14kP2U4NKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaCFa4xa4Z1eIUIG8q3AMnMju2wscRG%2F8RYDQLoTnXCHe3mPKzA%2Bas4bkjdFNO8TagfPBQXRUAuLMJu8DJHkg92%2F9JhYFviGytAnGSiiFTTP8iqX85r%2Fcc%2BUYRoaZmQoIvguFvVlHHa5kEA%2BcpI67Gk%2BtsX7eeJgnWCoeIHhBJPdnQg6jkXGTV0LoMW9qI9%2F%2Fk869v7D285fnR3ZOSZeSk1RT6%2Bz6Mo8Eb1YzrYHBLj9UDGBmQ5B%2B0LG04k8y5J6PDRhhni83fyI2BB8cjBgvAzCSy324CZWVPeAO28FPNLIPDwDZ29GZCDCPZubgqIOFoL3mRboYxbBGYe0txQ8hDLVBaqEKZ40I6eMKU2g8I6YVxoTcrS5szwxe91BDIPO%2BVyp42qsCxAcvvLkWGbTPE27GYJuNvfVr1QEfZoFI2se%2F%2Be7Rg2SIs10wsw1KupZVGmF8yXUjSEnJAu%2BdHpLiset6oiboR2eLmz%2FDe4Qd9KPIZXxvwhmlN0Nz3RLhjYy8RE3yRWLQq5socpJg3ksbKFdmsP1SU%2BNVdSS%2BCx%2FsCgstxr4JewzFnPyFy87y6sfGC1b6klTWctCwsHJFuEBuxWitP2%2FrDacg54LjvZ2bNq2F22GiEqH0pl6QKyDzskD1bDuwB%2BIdkNr%2FRJzCI%2FMHDBjqkAW0bvYskVcaT5%2FicEXPL%2BWUlrOXT3Se%2B0dmuTD%2BKiA56T1ZTmvejW10dNWtexl6Ma8EOdDirKuGnE%2BCzcawkz%2BRFHKlk3X7j8hn%2FJVllLilCnKgVezhyNIU9lMosyv%2Fy1hA67dB45lix%2Ba7%2F6QTg5aVSOfbvrpYE7x5QsXJ%2BaLWOJJdnQV5OvN%2B1URykqOBKuBmrZ1NRkrqZGOKawXCuYMtLi0zn&X-Amz-Signature=74c9f3330494f2799d0f0785df9f7ce4a5f7a308ad8dd2f91f46cfd650a5214a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
