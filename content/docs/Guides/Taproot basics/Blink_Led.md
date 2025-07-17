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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YIC2YEC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGg16yVWnUg7Ho%2BIMhzVx5eseOkP7PQ0mVnJrDYR7XZsAiBRbXf7CiBJvAA905plXzBxnuUxsuEZ%2Bw3ErhF0vUAaaCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMlgvpcJGmfVyvpdwoKtwDvlSURWuBzQOGg1Bbun6TPC8QVuvBCRY1bpgrZ3Glte1EqSg1xYDKUN5cZdQSCcW7SIfMfaQW9ZIGTJ33hJosQJefA87RYsu2BuOk%2FSXDSVo9nZkWTlzgHtPfcZrEXHTGRheb0mu1SBmfiaIK1sa1ZULYxkO88mCZmmURI%2FLGrmj5jPu%2B8i7bqHNcsZo%2F%2FcY0OyjBcr6Vhag6LPZxpbUDE6hHmK4fyushZrwItrcJstWOIdXQG9MlQQcrni45rjTzJ4akSI6YPbjVRnvSQxNQjMNurc8nXKsRRRRVtS%2FiiJbfu4n7Zu3A2ALTS%2B2G1IBTs6a0qeyYGzKsZsP89GB2v9adxOCv%2FEvYaPkU0RCwkm7IDBIP44NptSbPzfA%2Fy47MIKfgmYkwY%2BFQlZADziiwkShiKENfpyMCG%2B323gz%2BdnTk95Rp5MEhHupg0isRQiWtrxsjPvkx69VXnaYAATzT8JmcwJZNfl%2BKQiNG1To5VZXysD8xLI%2FSfKRIx2DnIrg9uKSt27Y5LuZQQf5QcLpM8fc7MliEJuXo8s7KKCn438E%2B9Is0yiipXDxkv3fRBcZT4pbhqSd%2FnKoIkqS2fvnrOAtagv%2BccJHLuGAhEFSbyhbIVeGQhnqsTwTgZ8kwofjgwwY6pgHiDEvZp9zO6F6kqOkAan2iOXMaoVwmVDnh89045LdAK3wS%2FP6uemoGvmnKCblbU5720RtSurB5FZ6uEbKH630T%2Fwz9SaVmGUkgdRALzlQA5uhtcgsHnGcj6U1XgqlBd5NrM%2BrFg6qCRJmvcxOC82cKnLiJnEQ538bLNvuAvdDDNgr1yeu3wc0oxHdf5WTvafVbP%2F1QFg5ozMCy4VM%2FJ30WFvzZOCBQ&X-Amz-Signature=241f64a778254af333a5ed48ac0d2e327d3b3d2d3b045370506b6053764f640e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AW7QKQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBXxVCUEMJ8v0jHzT0K9JhYD7GMbL3snhV2pxlYDKimQAiAWY9ktzwGG2wMRhD3BL7h5fxPOKpmBZcvQQnWlraS6pyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMT3udfZVbUOiPw28TKtwD04aCdCC0K%2BtTLoGYNXn9Tw4JjbWK0Zl4ruLRQxmpiXOwfUAZqL05kEEweIQQu5vELuoNdUzjB9ZEvnM32k%2FiFChaEHDLjuGcBYwuF2fiz1Eys%2BRwb1Ftztvocnse8NUlyTLJY%2Bf6Wcylu6yh0WXtaiJBzv09e0gYz8mdqsW1GNQmOvjCBI2GKVpdkrlPXMKr9J8DNicsCTjGnoczqmvO8UpQrJZ%2FslbZNLcctSsuCn0IeLOMkKsZeoTtC%2BVR4NNjsaDqpNJG8%2B0AHvbh8gxFGceZC920xtGeBDfMpymPAgwfAwFJKVSoUx%2FEzUmIiTie5OQmG0730HIBukISTJoOoUXC9MDXrjglhLvgjOHgNRNt5E%2FL2BubLZEZPjcwJ2cE2sUoWDqFlRINv8HUx%2Fh7zNFFDjZZQIr5zF5jClgDlNqmXh4nsDjQktlQXOK%2FE3hKYpm81V7fi%2Frk%2F50GIqahEXPhJEJe5vZ1KHfRrkaLpKhmLWY0MKzfXJIB7Q7KwsrzsS45VunIvOszvjlfU31cQrlt9c%2B5EE4lX2iZxKHpiBf0iAJktA3dOzsUTIqjhRcbrlEU%2BEqXM3qy1BCFQX7FC1VcMyTHOWcRcbfq9Akql%2BvvT5CAu9CSaRLu8dAwu%2FjgwwY6pgHX3zhZO4Wo%2B2KhF2tk05TJ3SxTjztFE597OnqQGd6bXKHPEnAnlCe60AsXv3ezdktl0H01RgIrC9Fhv%2B3vPac8k%2FSqZGpaBkqxjdK77TXj72RHwqKxDbv7g1cXHvAqykjhjTtKV7li7ZDCm24OtM38l65it4%2FTFua9nvMX6gWvQpH5hhbBewBmjFOwVht%2BHcKXmIgzOsLzedtFZRntld2WPvoUQhZX&X-Amz-Signature=ad0c3f17433421da1f00c6056046d9a8cc08d019eb4069149c45be7b2ac8591f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
