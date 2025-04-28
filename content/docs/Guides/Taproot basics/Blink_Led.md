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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFYYDOBR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDds0m%2BXKG6STP6mcexenXYB9cL0o0ihPVOGZ8JSAZtIAIhAOeV7lWltHS%2FuNKkUxwFHa%2BBfsOJo20GY92mNgZTblaRKv8DCHQQABoMNjM3NDIzMTgzODA1IgznrnxuxcIfwth2qcUq3AMHnc6ZQ%2Bs%2F1qZmCO6jrmLIi69raI%2FZ0F1XgyJ1RBVEiDP6IdAKMBjqxGjczbbOKENAgxOgC9eynilgq2nx%2FdSOpE8zotXLCS955WzowIUAlc2WtkwGMAXI%2BzH1d0oOyFSejOgPCWOW2Y5AkP%2FXC%2Fv9tT0%2BMN7oJcZcowcPTouobeOeZQYBTD5JIDWdo8MQOj%2BTY%2F2hSbNwBsJ0oYLGcCGPpFkkNL69PtaL6okDl2PvBBgLZxHjX3S5KVLfvtAxgmyiziidG0wdKy3ZQnD2Re%2BHOYzUQoEOmzk1R%2FuOeJZDeSCcYIYsJ%2FBy0qLn8elrFCXNH8QwSIBJhOTcoqB7Rhpm79LKZSLNL065UMP13T8q56jL11sfRXwXwH5fFJpMD%2FdagIHEPs%2BT7tP9Gpe6dO9BHE9%2FkYh1yJ8LrxllGj%2BWa4s1ISHZQN11%2FrEMYaWKDn7JBOLqKev3HKY6DwZi3jYTSsNzw6sPox7VLh4fJ%2B%2FGiL3fbvcAe%2FJNfzgX%2F4TM3zRt%2FO8tPXVo1Y%2BqoAFAu5mCTd7zzmdx6bqDty5UXLsIuCUcBYnKZsRrSJS%2B6VPNEVSEP3WqCQvYvMUGsan0ONc5Ok%2BkhjeX%2BF656E3bzjzFhSq5z9MXjkQIijdgHjC0yL3ABjqkAVlra7SIsuMM8P1F8mOPnZ5d%2BRp77WOttQlUJN5jFUSSjLBIev6%2F9W9zJuG5F2K%2BJwdItJnhWbWWVKp%2B1GdtiuZG95qCgVbgEGr8Ymm5Os97oD3TFg8PPI%2FhufFZ1teVhkgCO1%2Fz5JZwCU4XUZG9ul2GcZRhlxC59O02DfORM6%2BTWEjGoAkdtGYy0jNEBhKCqtk%2BPWZR3eRw10j9a%2BxbuGE5zmBB&X-Amz-Signature=cb3dd47cb8f6b9ac398f6e38a185621fa7f8805242191ed0636298dc19c7f39b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGDPVW6F%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKjHInJWBBLV24LVVLov6X3Cvop%2FrplrDTDfw6%2Brmm7wIhAIc15WGv4CRF1lno26TR3jqSIRPvU6w1ky1XhTzX7FvHKv8DCHQQABoMNjM3NDIzMTgzODA1IgzoRKCqx2CYP2Djn5Eq3AMGUyPyLeOh3BABs22qQL9%2FPwe3w7ijEwx46vnOWpxnQ0P0X6KHxmJe1ehmzCd8dsYlncJPNpHrVhj5REaq1R1jIxAnW3M7tJ6PB1QGT9tUYSPpiRMhCNHJuQ5bwi9ZHXHWSO1bc5naOdzw8o1Lzq1fTi3dQyzp4%2F19d%2Bp0DbwoD8dXXQZlXLEfXOyRnB5eS4iflL%2FERvmfQjZyTkLKtpSQCkX6to91DhSW0clOPjS91EC2Qelm6S8uFrcd9R%2FaGjMentCPfML1m5hjw%2FBEUfVMwh4TtGWaK%2BPknNTu9PJ%2B4RS0kKT6HAJ3RNcDYETL%2BNEeBGcf8kFNhfiVcQpxOKWJrXT9SMJyaZzJDov%2F6hFK3hNsRvqLq5nBVHF5dhOa%2F6biiZia2CekshFXVth9GCAkiUECWTlnbEPTF4lnxwLwU24nscYrqK81wGRHvC12zIijY33P9YsyNaHEysVCCvxI9hFlvwDmZmqLFCwTsUtbAqaAsr94AdrzaINb1Hk2TamVYSOvfNGs%2Bu6s7sjpWcKG35lS9x2QO0yHPcxmTfQ5ykZWLb6joU9pMTUSNTGeeBrzaY0QwslQ3lt9BRjs5vnXFVYSZFuOQJr7rI%2FQhDPw6l%2F5bGiDv7VkZK43dzC3yL3ABjqkAZK8%2FDCWQ6pG71%2BYqBY9o4JtaXsQ2FAoosoeFGWxUyarsMErmS4AH5MJZD7LLZmeKF7iKTFO4q3Ivc185bR5pR4hDkhDmUpTQhvqTtL%2BKK8BXiFAaT8VjGWEytev8MUv30OO5roMM9RHbUwz1ZKubvWNH5mX3vSZsU6cMu8fCphQtCa4uA6d%2Fgvp3LAXj7BZHxi2Eye60FeP66DHxbKOX6P1Y1PD&X-Amz-Signature=b18c7eebf6175a0ef616beadc1d490e64a59ef8be8ed2a1972cdd575813d55a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
