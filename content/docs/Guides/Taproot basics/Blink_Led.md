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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADRHF6Y%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBWGNyzVwtk45%2FKq%2FSuI5JH4j0bidfELIklL0%2B9xRsPHAiAi53k4ZJhRzgF2CeAbtA2setVvPBh2VgHBau6VQIwpeyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMG0qE%2BjmAAVuaOVNhKtwDhaXNl6juevUn7R9X0UbNKyrSNkXeAjYzHjd9chHEp27RmaOjLIHqOwQrSvgpGOilJSurMsrvXEFiwrFDAw6iBs0FAP3A0Sptw2jOhfMmf%2B3yM74fYk181ByBPlCncFYFnLqgrFn%2BdcQ7sT7RVK2N9o2KvDAQUgi3jFH6ppUvdJE9OhzH%2BqVOcY6S2iTq57Q8LcXkVMETVsELc6qZiSMvP7blMyqk3P068F2gqQ8VbjlZjo4RrFhnvqo7oZsD18DQR%2BY%2FOEeQCYArNKrscc5DgUb9kZb4s4KIh2LFhTqLtEZ3%2BJm8qwQ3P0Olx2CUBdll47PQbUkL0Xzvwswj598ZnYqKIaHfB6LINjGSls91ZbjVs4BMB%2BcSMNu9FO7b6nIADg6jaLVwd1G3HImPgozf%2FS2vLIPXcdup8O%2FAaty36EPtLx%2FLYAgzUyQe86Jz%2Fmi06wuJ0Ll8hHNiuSgEqpOOJSDIuAAr%2FiarF2YOy5KyDIqh0W4DakyUGm5sxHroCRYSaDf9e%2F5DL1xUffW6jCIli5It8VYXaj6MtiWuIDmEDE1Rnsi%2BIZAJx16HHLiIRziO4Jy8XHRDuqBmWxX1bVrOd6bBG6pskYGoxFMG1m9m1sc86drFWkrqFoNRZXgwvrubwwY6pgEl5B0Y%2BkQ%2FbFMPDugPHHNUh2NYBEetLAm%2FqDtZRkyv7%2BHjk1KGj7Icw5ecBBgZrkj2R9tznV9S7QxVJGseP4QrARmkL67CruGzlcNZKL%2Bk4L7ZKuwieOyJzseIPZxZ5CA74BDp7AE2iAQiSSa2SZaQ27W4LQzRDKOdQ7aCZ6iRz8S9H2JHJBVH6t1IRyGAJ9KlCGh3ZvYbDDPkm8scPEmvSleakgKZ&X-Amz-Signature=0901bd891973d8c7460a1ffbf5eb68d8e265cc88a4bc866aba2f00f356ad907b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVNYSIDZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFFy%2FnAO4YOEXrVYM2Yr6X4LRLHacU8fF32nToc2mWhvAiB6JimkA6UcU4Kbyq2mkP8f9h4A0qtWtXXnouxRLXvvWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMrW5SG0RqWrdMDCHgKtwDPR0%2B5dbq%2BDDDVWu%2B33VHdt3MDRTT3nv7LjISe7M%2BwhF%2BKoxuYI%2BN0Ecw%2FFoOYJy7JVEBBn6v940B4arnVRLAD%2FpxjirZc5R3drirChYrVl3iscS6zsySMsHm6tz%2Fr7nMmBE1hBZLhdyXo3m4uadjEsj0kUrZkWY5o2jhy5xqzx5tzGO6FS2X2mKk%2FsF5GPydnHsZSUBb26KFimzV9gtNWix4bqi56cMkewn52DcRT%2F4b1gzMYNrGYPM6QWu8nRpffuMF3U7mrwRyKZa5hgcJy3uWCHNfs5zrtVCwjWdjyhJrzu0ZEFrpeeA%2FVL0EdJKUs0Xf8AfA7A6uxRBtsZBLJsxwUMrkM3Ys0Bn3u3CKM9qg3cNpl2XSiWNQwFBg6qusL0dKZxt4zqcBIzHFuLygnqW4HMKRlsl4Mc1ADTCl6GX86aJKgqwQOW96eFnN4geS6uC0v%2BiH4dVvKfKy39luTqOtPoi4Sfg4yVYPjW%2BdMGbwxMnGj2S2Oae3sHXMBKjZ5JlzRsIrM3hXFp5NXw2EpK8QK9pLGkTHh%2Bt4%2BY9NzRs0q6XjEqt80Z7pG2Q1s6EgcWe4NjcRHFtG8%2Be391Jg7L0ge4San32%2Ff1mQx0QF%2F1ZhjQKDIiA9t1t4s%2Bkw8bubwwY6pgGciSdEpGL32y7lyhYGD5Ue978sbeJ%2Fde9bOnT4Q15CDCP61%2FofLTBIvOehhj7WU8le3fyveUZuydQCKW3ZoD%2FY29lBYiQ3H0DsxKAFj7QB8aOIhk0iwyigBxkxMchrgaaZXJumWkplzHfMO9ER%2FKR%2BeFtQQeY%2B7aAJJl51BBxQQI4k6zQVUYIscSqtPyqYhzPruycbtj%2FcKb7XLaZh%2BhPPsPXGcA0x&X-Amz-Signature=8e2d5ed9a3357f5f71b33d1e4f332de26fe626c955213bff732ab6100510fab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
