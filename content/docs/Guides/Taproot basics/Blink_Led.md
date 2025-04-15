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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLLIRIGD%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKAVs5NXs0SQtvtUnnCOqGlBs7hxXWZp49Pdacp0ZWAAIhAOQYGqUKGmw77szd6wyEuQZDAGKj%2FjXMTHq2Lrpfrl32Kv8DCDEQABoMNjM3NDIzMTgzODA1IgxDTL6UTeV6WUh%2BvlAq3AMJTJvpAAS5aggjKJc4eSDLXq6kBr8CFrd%2B806gHR6eRjjhtgaqna%2Fptg%2B7UikInERAXuOqyap6GkQKt%2Bd0rT3WujhO0x2Rw840QM%2FivJHlSJm7UaxJ2e8qfI3VxZC5hPE79aSAkVsYWrpOQWgf98QJu5e7mJE9hNwBvDe4I42r8mYCjswh7oKhRwn33tENduCFi87fQ%2B%2Fw4R%2FAsntML5euPw%2FlZZ7x9U2QATOWTl3LfVIAfDhYBUSNkZu6Xu8lPENGCPMErJE92EZI0448OsyVskcoMh5kfP4FlDONiPKz5oWlZg%2F9Wb7nBmNHfYjiKmH9T5xGwEJ7%2BFY98TUhgdhE%2Fo3U3NGKcZ1RtJr8mlxiUqGdl43aHRFe25tyj0v%2BWFquRcGoExcfDRyjpjFbolbXa4p3k0ggeRFt0sZVXRqEyD1Kne9STggkSYWYafJsmZgKGysuQVw%2Bu0wf2dt40B1wwm5DGaghL9ffo7Rvy4SOVynxGHti4DaRJUDAPlbSXh%2Bldxncmk88SsEfYGWnEFblpGG48eKac9qQ%2B1fRSYyq2ovtgf%2FXFtBzcE2ulByyzCtjxhRpA68Of6HDujqKBRv%2Bj9S9%2B3luCYecJhWGbfe8of0K6CTF%2BCIWzyJCdTDIhPq%2FBjqkAZnjRMSOstR0toBvpDR%2FSb8jMHPZYlIlDtJ1%2BNRcEgQep5T2aZzqCR3ZBsQ0YH5Av4abQ4BUYrpO4u0fAa2OihRSdrf0MpN3W034woeGz1x%2F8LUhpmWZuKlTJeYSY0QLR0N4PThM%2F3raI2b62w%2BA%2Fy2k6M5aW7pF%2FbT21aErEc%2BEjyGHLpQUEtPU1O8jk9af97BFJrnc5Szk8Ow%2FDKXQ9Ccq%2FV4v&X-Amz-Signature=3d63fdaaf9bfb17cf3a1d65145d3bbdb37ac4f00eaac190e4856a7cfef77dd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QXUU664%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA%2BK48mQNgXrwC%2FOO3nSXyMyKG%2B5s8oDBeeOv3Ovo3KAiEA6MK6yThrhqe7e2MaGyepr1lmqKqG9B8itZWx1HQyMGQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPF5kRj3pTeD49RT0CrcAxwEv3H927AMX%2B5NtoIKOm0IgbnLd5YJdvfAyxVl5RLQFkqL%2BNeOuUepYmotlZIRDioVxT1Py7wALVX%2FcmDOVUTx0kJv6fGNG6Ww87%2B5o4%2Fpo65bYkxRePxr0sRYhswbwn1j1672LY%2B%2FtYateGkeDhbvAUYWuHe812wiHD%2FjMlfDpQmnXiGscvU4y7blAD7mFeqAVm8Z0oVo1oXTw8ANGQbGXKOiAan1M1i%2FY8tY3gM5ZQj8P5FsqqAgKRq0Dvue2cuw%2FztcLwDI5n1pzmCfcPOHfihxHo5vlAB8twVd%2FP%2FISlSpJ2zWs5h9J%2FBEmkyQbciQSAOgQaYkl%2BT9amKRO2TtbmiIfaRUKNdT5OdZdxIQwGowKWsf6FKEEgMEIKtP4%2F31fI76D5c3NFjhuoxujkSYgVQB7qqIb166i4b3WxsyCwESc1QhoIdIRPxq9OaAQAYfuLThWW124vCAD2YmH6%2BGtpJmnVZ8C%2FCfnO%2FKPEaX2eU8WU7q4pChTG%2F4XMRhFB0G6B1B3HWNNb7yEbzc1LrmuEbPtEbfeJ8xu1FJoqK4wjO6TSqTfU%2BqwmeGNDt5SXamaIyk9I0GhKljiPDuw5Ug2fm7sN3wdMfIPMprRmru%2BPIeVAE%2FX69CqlhNMN2E%2Br8GOqUB0xWHIO84MZh5sworfMFIDc0oq%2Fz4zOQkNx99VuR83cEAsIIdS6pR6llB%2FvTNaDJhM%2FGupXhlNay3NdtXT0pdOAtJJDpjIY6KEoOGrQ%2Bs6tsPVVtOpe%2FSwfjCcunU92g1BdNHkDHboOvKUSzGlnP%2BZ05Q21gkxNUI9Lt8ovJ40lR6tB2q1r5pFddrGlQAJUl%2B%2FHFahbLOoHwMfGPcqvATDKRjJ9IJ&X-Amz-Signature=956c2ebd3ff0776cca4640006509315dd57782f284814214e00c9c34f960d6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
