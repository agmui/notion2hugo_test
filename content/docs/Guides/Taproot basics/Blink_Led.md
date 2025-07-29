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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XFJ7KWX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJu1nuyNzpcpuiOfyt7iLu9z36HjOsfkeKpvev6nQ00AiA%2Fi8e1nn5DwAC4qXPdu4nQx48OkjiVym%2BzT9TLrzaGziqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSxk1KULREv58aCCKtwDbXwFH3w2YmVwZWmDleaG742hA4PitAeNpYh4D66PoYOlApfAku3qv8P9OozH%2BJCm6jqy2BjnOdYPC3NWtrheCQvX1magr%2Fib86CcX60QJ9JFb8V%2FMr6WaOqV9N4jb07yZzWZ3yLpChg%2B2cj4wRQOVpv%2FydQCZ6K6uhxSN8lx32PwGrw3bR7F%2FpdFzaLjNTImaTl379DHI97q2AcO55yj8B36D5SPxpWYMUbKMouEekBcikAcn0d0MERmmvtSk29iHTj%2BIZ6DVLmHiROy1txeGLTii%2FMFYKQZxsEAVtsyhQtc12240ERaRf%2FNedEGrE8aX5%2BReLYK83aPQzEWJY5YCSjqb8iFQxnMnTd1DGmS8nO4t5vzyUWhX9MdoX4lgpwsJkDKQrOTgyNPPXn%2FM%2FQzCI55fccHGqeHK%2BuasIEzDp%2FmUrBEKZWtahLA7yXA62r5NELzb%2B1tDLSlsUsAv3jX86ZvjC52RtRILXtTIlk7H6G6cvDos6X%2BLHxrDxwEr%2FFpGmXtZcwsmI35S%2BBhXyTvmNVvRYfRCuUVwezUAlHbxsNQNPjiEtRoIjB%2FwB0PBWI9K6pXcGBqhv3PA4AKFPCRAj3qg%2F%2BRcsvSU7U%2B84ODSOHWpglKKpthDXAHcJcw3q2kxAY6pgErYxWOfLaGiT5IAXg7vIKmUXq62%2FIDWxkFfKJErd0JQaIxca9t44O%2FzfMRf8xrtIhSMcPgW%2F0ZCPcJVvfVKnJuUV2KIIEL6pjLy3WyooLSjooUt0uqG5jCMuv%2B8vII8Gnkl85e%2BhFQ9snFGUvRTU5k%2B9POZIsg1ysQjO9YFC1LnhapOPdeDQlZiBGo8OLUVrbETjGymDW8yiGYgOCGKCyJYk1VX%2Fxy&X-Amz-Signature=76756e59bb87cedecd83665092c6778de812b971e894c668a1333edf26d51489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPAFDIAC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T191228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe6BWCpMsCknVOItE1QrqtWe2UBTmiLbPp9C5YNAQ31AIhAIpG8C8LWhtBkAqGgsutyqiDT3Jl3C0mpg1n3Gff2AonKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaZ%2FeygzdjLum%2BTnsq3ANUZSSqHK6iRVdy8QMM8u7Ov2PkCBvpP3bY5BpWOnbyZy8yt617rr3pfbJWCBiMcNSOubVyUWW5Vr7rdKb3sCwZsa%2BR6Kl4C3KDzPgnLXQ5XtxG3H%2BJgjvBwjw7DblIGbfWmi%2FNPguodRfKcvZFWf98EKG6dL%2FCw9FTWfeLZ9klaBokshRh0%2B0mtCEX88Fu8F0yOoxKbtm%2B9BIn5FchOYnolrLJeG%2B8gaRzwF%2B64vAXmsG09NxAdCzbymCiO%2BhZReJ2i4Iw9CFLZRSuwkfPbqm%2B%2BA%2BVedqSWSFATTjIZX%2BUqlxWMA1z1DnIHnnWm8QccI5nAAkGHqMArfYiCeIfPGtgxyemEVfpsZhxkq%2BHHG4R1jfQg7Y5B9RQZncKNZoUPwzSnpoNMvgrWp07GoARp%2FE7eQh35mLNgGA0%2B98yIgrHKq7vbjthxvuV5qfBSQ%2B%2FBZDfQpgb4sMFAe3ifxm9jphUP5rtsZ5VblHWgv%2FIsFgd6gZrpY%2FWlYxLZjfhpXk3txPzXifohPdGYBVIdtSB94oZaiS8HaW%2FEPabLW0wxNWAMPI9LzMOvQo9J0fPqpYYFr5Iqp6%2FYq8fMiZLwuKO5uvMhbY0rZHI7MerfkCllmUu7s1GNgaTYvM64%2B2pJzD%2BraTEBjqkAeMmVJf0FhvJHKQfx6mVvj7CCHsF%2BAsPsNBTaIo9WbYnCAJfOdXAvMrCG9k6y6%2Be%2Bt01dE2BKqDbxOaGXVP5kqOfzGZLsIF2jjtRiR%2FJ6AXUMdRVucNGQU3JVOYVK9JCH4gEa%2FX5W5t54Z463aiKRZJPc%2BJUzPo3e1Mt%2BD4RgML6pDgAXb5FJpyT5Zv9TswvcLVgTwFtKV4dFX76dOMXk7XsdS34&X-Amz-Signature=5752a8012ff583be0fc3605cd56ec673122216efd6500c2b90b3c711d3631768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
