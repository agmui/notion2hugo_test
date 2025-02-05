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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BJYNYD5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGvSdXVmjZRgGIxuRHK4d2GofZJGtnVZElD%2BpfwO8XOCAiAU2aEq7dOWZ6RZj4uwhurspZgPkpFuJkmi1k2uwZ%2Bomir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMsyiPiw8Cr%2Byh5HaXKtwD3rOdQAGa0tgdzJNVVs9DLOSUFCk1dChvjoT90FlGTi9dua7Q01mjxcrjmSxRzmG5G9WaRSD6MX84xpX3B1mQowmyuDznIh4xXvdhvNTAMcXlphsk54mZLSXH3I1RzHF1ZiGAPBI0UdI8srDU08iOrgE%2F9NlMGR6Jlhd2iEIbCdkO7ndcMrPuvcqc%2BQMcbKPGuj8icLPiYmRlZYhR6LKFeTMuXdyYyQnISoBtSedsIy893L%2FYGdImvM7N9DwkxC4Fy1GYOwkAqG7gPi3Sbu62m6TOWIJPTTLFj7BGQR28J3p5jXjneftauI54voY7ZDgnbn45c4EEIb6BZXmmPRN8GR6Jl4hOHp6bttQ1TdKNCV42W2%2Fp0dde0OS7a%2FEFpuEjJd6bfsi37c1BpT6hM%2FqJ6OjXr8C%2Bq%2FRh%2BQw4mqviLfNohkWuirPHvLHlRQRJu5xTvMGyylj7qpJhwIilJGaX9v5ZOd1WTjQHs3VozyXgOA6SjaFD0nUiJpAeNRf9mZYauyf7KheddB9WzXwiXYkAAky%2B7a5BSMGmzx70uAGw%2FQRqYUUwCbR2N9mcSCL9zdkeG5qFv6gSb%2Fta5CK%2B5Ap5VQFtHIdBqlsZgnWCb7aozXceleadVpY0v4Lhk9sw8YyNvQY6pgEv9VTc136zHxOrjEl6ffZI9SMvzQTv6mVBTJIw0x%2Bg59KwUkJGuGQ12msBJDOTffWlrhUQJT8f2XXPII%2FSasLMrlFzmUjfOo1qo4dOO7wRPSI3fXX1v5iOAg8sa6XrqC0hp3Qx1vO%2Bx7UyfKKJnBoTf76o9D1j44KYgxeFlMMTvHu72JVYMXygeCAe0E8LbJ5EMxwAyWzKl%2Fm7%2FP7o%2FvUrJFiB9xpy&X-Amz-Signature=9599bd3f73e7849e3c1cf0788cd96ab65a5a39d637410e56e644315ba35ae98a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2M4Y7Q%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICyO6jYVaWqSFuh4bD7S63UWNrkVdcHg%2FzXDurqPsZycAiEAnxCwEYkBcdzrmlkFFWaRrDzrpgR2kYIBOGzP4c4Mo44q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNdlGNGHiqWaxB%2Bi6ircAyVKgViYw27okSVT8MEhzBFpI66WKa3sQQi6at9EZSIDbkLHJXG9NP4B5ES6Z2V%2BIInCm0FqEF45WqpzoTdDbLg4FXSyyU6YF9mXNR%2FjAZS5VIsRfu3SexxBFelDdDgQoO5bdrznl6N8gYIqV%2Bh9l3JVmR%2Ff8p8AEKT2RM8KHWsnli7ugNSeeNCNGZLYsYgOMrn5Q77JpMWt0n1EmC9WgJN1xe0NgoLDA2%2BMw3tSLWNJEag218gDkHma9jIhuFaEPPLFaDdQiB0cRO6Bbd6n6BMhB%2FbzwsqobaoMsL0fRcPW%2FcCK0ETLUxKXwYt8AO5bUhsOg4mC9xHJkL5rQp4l433GXqjiBZhmyNJX64OXlJROJQ%2Bjhxw2GTI9tHyVhLrezmw8%2FVLqHa%2B569R3vR1DbBLubLZ8NPtugTSuHW5en7T3N7ZvdlL1OcPXzp%2Behbk%2FKxgaO8%2FuRuPhiYDFRDUedyJ2sFztDypqEgOwikQhT%2F9WDQ%2F24yGZU0%2FNTvZlGEJbJaC7qEV14ppb5fQwC85qpLA1iY1qacMji4suFXz4xBEN9sXN4DQXYogFnUAEMmfw1bXX3GTGqjlUk%2FCW1jKgGmPs32tSiINct%2FIDBW7Ax73ufZt0pE7v9XWDamhuMM6Njb0GOqUB4SqfCMpDSTOt%2FGGwUO4tur%2F%2FoS%2FB9BJkXfqfRnK0%2FMx4ZSd5nPsTIHgToitxLOJRgGBUdc3lgmbIcbyZUt%2FEDK9Ko9U1X7vHimtE9svYXFba6gIANJmfNxJ9ARvzvICkRp%2BgkWHNHeeRldhHgrxGRGbcW8vlftDyuBtK2IUVmM7%2FXM6Uod8I%2FeBgX4%2F6DuBeb7lN6GHtRFaf%2ByKi6XCJyRqAUxpG&X-Amz-Signature=b44ce58196c02a768761225e43cc8fc7ce2fa109c7a025f2416c57c4efe7805b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
