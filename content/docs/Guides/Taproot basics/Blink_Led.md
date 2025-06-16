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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KR5JA5M%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIC%2FWZR4LRf7beLRJGZT3ySNXzsDYIHvNVzYfIJadBL%2B6AiB6xrc31A8%2Ft0d0%2BUH0AVfILkC4vwzVnbH26Jv%2B9MgDryr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM4dlX3MXIozJ3%2FkRmKtwDmKQx1PIQc4LUuXN3O%2FqRMMxc0xmncf56R%2FKECYRZYaZsiItJDgdb7jV75R2%2BLVrA7z1wUYCS%2BuTNBwx%2FZp%2Fm1hDWggWzHOnVCU2ErhYLAQqwC3%2FGJPnKJGN5kuOZFay13oNn2%2B9T3hr4Nmn4NzjCN%2FJZU0n97kfvpdO6IY%2BJx2dVmws2Z9UO5ThxWp%2BLbkDcYf%2B1sbAp8rGLjRWEaylShbNl%2F2yPnPtof%2FLOkCGUHXkWztCp%2BeALTx4yDAjgYlJARBzzojQS%2BcYPNK3Qj4rT258PKVmHYoeBpEzXJt6JeHjeDr42LVB0n81xmUEYq4BMbApPwTzQNrIb21QiP3jSt%2BeFs0jo3TRg4WOQ3AMnNPKDuWgzu8e8l7Mm4AOfSRA8VUVtpzQXAckE0g8IIYgI2orJFtFpX1vZvshV2Nixq%2BisV4g%2BB%2Bl1c%2FKJ2V25TpljCD%2BIia4KA8oeYPgm4w%2BQGy4uU98607U1CKUy1BbDA%2FUQWsooXjwbE2d8S0XxhSu6cZAS5yetksBok3jeHQOUHjFqBHoMIkBC7H3uyTI%2BqIJyxNyNvC0XxhF9blUwcyOJu7FLU2JYLdQLrPT%2F5kYy4HHFf5XWkeajslv2E%2FfA1P9MJ%2B64Qnda6pRctt0wxcnAwgY6pgGDXE3yc9KtP7AQjP9DUjLGEWGaEUw9Z%2FIBqgMtJair%2FkCcOirzgNeWZERguzD5Q6qepW8QNyQzIw%2BVY8Ci5cKfyXYt%2BRjXnn2VJhAmGWR36I%2Fh8rRkYXmnVr%2BumAwFtB4XmYL2qSJEXLVTk2A85pXigc8167S%2FJkuORLP5bxpBs2B4urPFQDxpsG%2BaCIecrSWRQT9tiLw99nqrb31RHE%2Bh0tZP8toT&X-Amz-Signature=58f57996c5a4fe823a220367b44f8ff289b4f92fa676e76a29806a21b2da0e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665VKIY4V%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDmY2pP3ntNY9fCCfk%2FoQhiv9bJ0xnYY0XmLyACQbqoXAiEAlvYzE8sE56X%2B83taajZWkarsuZe6rwyR%2Bn%2Bwppr7o6Uq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDAQBGndJfpz7LB458CrcA7udfsodZ7RcsCcvK%2BWPPCQLkeoVDGjoqWt7CYn%2FwqodVWwq2oAeEgZFXEFrTd74X3ulM6gvMuvROif9TMIiqSCSJjXOtPch6NMFKomvnXu904TetjbbqcvIJgpDhW2UTIUWupXmOJoW9q1cDd%2F4l%2F7vgIsXV8B5OHUwrth0iD2LgEweIQWyFmrAy3is5DwTc0byaLqUQ64kH9VUyulyr0evzZZX7kwaiYEOGGDeCxpS%2FsFYSkkRzZ0EspxPnjABqj1Jqw2C3JBxtaKnsRatRS4w5UHFCwPcOi6QT%2BsspBt68TigSoRvaCcNVd9zW2RKjCVDncYk9mHCDw3t8EuCxqI36V0vjmhpQ80myTSLPlZyiE1aXwb37pWUw2e1n%2BFv4LTsE1rlYIW3UgqsmMjnMjSmCc9gpkj6J5AeXMvb4%2FFlUPzDSwcZ%2BOV9S%2FnjLxyUUqqILEGWDz9rAHfZ41LfCi%2FSfAHiit417wiJjzrJEuo4YHasuolorxrDaKSHYE7r41EGF5v0GTL%2BId0DqX659LRX7vLKWGM7MsC5T6NwAw9PuoLZt1J67K%2B4G9EjPASvmlxuOkT1YjGmQyFqBj7X1UI%2B15%2BBAIcGp%2BBltMfrWJh1qjUL6Vu1myO2YR8uMM%2FJwMIGOqUBAZmlmjx11RrCGU9Gy3CJmps1vUn6rb9QAKcp9%2BM2E4Wdj68bfMss52kXo0xMPH1knh%2B4Aivmk3MztyKkttoPqr%2B%2F0y4aCsdvd5VLpehHqISmoEU0TuUZc5qE7x9Uud2XxThWq95LjYd10LGQ4IOsycVGHeNesemeVs%2FFCwJ%2BQXhAQpDGZ1AoPE3I44BgZGFPTWoe7D9xXSt%2Feb6c4g56M6e9eipZ&X-Amz-Signature=924657f353fc6f3594247488d6594ba9f2b8b8300479670222b2651025dce7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
