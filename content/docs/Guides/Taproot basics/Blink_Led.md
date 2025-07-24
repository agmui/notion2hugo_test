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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D277CTN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFC5sJJv6Yq%2F5coyzEtWa%2Fhseh5%2FlDzL3Zz%2ByxjWy1%2FGAiAMR7EWBrNhW1xT0qRABzW%2BmywzDuHtaBIU2iB3UxENCir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMZvIz1Xm08rvHdr%2F%2BKtwDIbe%2F09Ua6%2B5N9FS0ariNvwJXDLQMrUTtNBfqaRhYtfGmJFrCGKLqAu8m0g6GpnKyCstw5BvSD%2FsFLATgpTy5FrB9vsox9Ute3SeLTlnBuXE10BITznoxgUXk3Jip5DROyUFfUr8rZUqK82D9t8VmXJxz6DsSKp5ZH9Gd0tcTCPkIePw66J8wHKEY3%2Fa7kwjs%2BOHrPc5bN95jz%2Fdg%2FHErGELulreV4dKDgqZrGf46%2BUTlijU84EWtH4tkaKhI4FDdSFD2%2FlOuRQF9Y1zeKOlkVFFMDEHxhOagHXKOYYqtAZNvE4EcNZ3MPA629HRd3YBH1XGWjqhgGwI4qKHnu758nMBmXm5VoH9NYL7GujjEtZDoopV4%2BsFeqDsYKBvCcJNH2J%2FglOdFaS8BJ0x%2FseGqXujkEXjz%2BoIUGbcAj50C%2BBslWLUTleMzhX6MQhJatrRIPwjJf1b0QJYGNZW0PcBw3VFDZbE8SD18QBUC8QNlwpTbOtnPniTo0fUcuAWwQNy0InZnW4I9OnGWugvMlrBswfXJdxbFAFs6IEB1ECdgNzkwD8ERH6ucAJytsh7Sz79Cq5TOccPx%2FP4nNPeMbCo0hFyBGZJth7n1okFL1ukEk9WQjUDuygcJY09%2BAicwmeuHxAY6pgGBPh3Uaw9QprgYkrkPFL4ZE9TPILUqRhe0ZFINk31KYttDH5KYOQ5Q4SwQZ2DzBkZgYDEyq7lQXS2f2lYulg1jpoZa7Nkz2Gn6YCcjh1KOpOPw1lvwF%2F5lyQ3HMkygpdMpyMLda0jS9OjzDdA7DlUA%2Fg3wph7xn8%2BH%2BbrBmxFtnBfqK8hvwfXciivZWKO0efVJiFPUKB9MSItG9vRKZPmwB0GCBxbZ&X-Amz-Signature=350a3e9272824ecca7a9e7ce33998eca77615ca568ffd29a43a2422ae82b04b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVAKSQ2E%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFnvdRc%2FwePqr%2FYsqSGAN2T7rZN5IHWEghwCjitsiSHyAiAyyW3kyzgY9CWL%2B4YY4OFLGivSRFaj7wHoF%2FZObQOwayr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMFYMVCM0JmH7FVMo%2FKtwDPgAfu3e5Jv4yDC3g33hNFxqqNK0xFOD3VGBrUREPfXhrQzvvdL1y0U138vHP6LIAfK%2Btki67mWWiSClu8kb4zgNvl8FVi%2B%2FED9GWYxVf4bmZ1wDK7SesVwp1zkJVA2wZoIifyM%2BgfjvvEoxbckXuXT%2FF1rsiUfgOZ%2B3T3ATpGrT%2FdREpL8awkKgTvFQO8xM4%2FsBtf5Cg1VFThM3tPiGwYl%2B3bZuUJ7wxklEBgHhtBpKC8czFyfFWXglCfvveiq06KKj0N28th4JzjQEzBxkHoTCBleyhXgu9u1M0V2SJ1SNSLAwfqHVJ9C6DzUta42cmthpepm7sYZlBT2MtT3PxPQP%2FDE8gphDLLUjPOZ5PcBYVNQKcrSf768qXK00vyrrupmo0txC7%2BEiw3rCnCVa%2BGcKwEkhfj%2B3wlF4PFtXco9lSOBZ9ekQrXYTsM%2BcGTZOHQPqmg2igFSWXlvVAb%2FVgLHnBjfuGdhSMUZHlB1SBEMKoQS%2FSA5zW%2FNlsqMRLFmEv0VbNgoFmpT8scKTU3znwcxkoJyGT4%2F2U91lF3ZXftnwfEPTzfU9RMAQSH3bt%2F0Ei%2BGsqFLYeet%2BsSZ%2FXEY9SL0bdtwXkgNjZaz4MGih72wjUFgeRM5kCwpln82UwieyHxAY6pgHAMV1rD6OJe6nzIkP%2Bv5iZNZmSWzUJUS8Z5q9%2FA66b477B%2FHt3xetjP4uC5w4HZ3KMc2CmwAWliErAC8rCIWfeWIZmm0m8m%2BNnHUNTny15FAEI267tgCWOJPprXzOisbu%2Ffu%2BsLxn5%2FFmmlOwE9zqNxnHt7XbeZpAofpXiUdwy4pG%2FascDAVJHuhs33P9M8MgTGXrPV%2F5RTS9U3GTWe5LzKAVlKG2x&X-Amz-Signature=e5efc68544b7a2b49cebd87ce8fdab81fe57729d2841c4ee021a728541b7c415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
