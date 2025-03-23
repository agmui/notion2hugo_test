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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJHFEDP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDaqk57cx%2Byk9UqWgd57OVFsCKUSGqywRVyI6HfOlTQIgAZ1yL00shu28zR0F11kkD%2FBBbvjvCP7iofx9Fj9oQvMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzMeQoz%2B0G8ulBbHircAzTCoh%2FAzZOYA2CzOZk%2BL%2BSq20ja%2B6bj5DqaYm8bLo8Ncwlb9uIZY7ziGIXYA9eFnswNlHQBF4CHyETKj7NPdiSML3R%2Fa%2FocTh1%2FYhAq9XyOxH1WS7k5GiUE9Xtk2EXPg%2BHMmNOoz6vLTKRsBrZT9nM%2B41JISY5%2Bfy%2BU8QYMUbgZEzDosLykDFHfkgW%2BsMGOpwFOcK3rR13MzSut0vQ%2Berl%2FVLTpk5gzFcL9khDj9mtOHs5tmsHN56npfzrWtj%2BurJKRWDPq6YcI33PLIPnXNtjiWLKiSf3EXn3gn3LTU%2FTSDiNd89ayCH15d4wAN4mO9B6nESapednoGxS3BiEoU1gpyeW4LRxPr5Rdm33YHfY16fWmyIUwL97%2BCbRdBZmRips13e2ChKleoUUB1TrJjbLBxlklQDTKHjuTn9k0DDULW5aXq%2FxH7T6uZjUXoo4oUjq6WxWQtPZxHGSmwETHaWfWUwbY%2FlyYr1XdPJwBFC2WAJ5i1WWdKzmMEOs6A7iYIYq%2FCgEaSMdu7FU4f%2F0R7uyFI2B2tgVYGVurd3z81j2RTt2EYchXntW%2FeUvH%2Bl3eQi%2BzxWu%2FmTkpLvaqJnPnPKjkjbyibhuwzwR6QN8PhLxoHkzkQdf%2B1gAtEs8NMJLLgb8GOqUB9b6tpAz8vyjzt2yFPls0fjxSj1MWQID%2BjOTQR3PJDBJAgNNVyo58EUx%2BFTkXkhpNd9h%2F0WJ0MzXpAqhU1qf8qFmtS6fzri%2FgdscUwtEmcgYSxuqE3ftYra7D9WZMfw3uI93rNQ1o594JQ%2BB5J9Bp7C63VvuiBcOY6TAJmxmGQVdd1TwaLRWK6GQjPUQCoCLGEIhghgw5MxNxZ8vJZUpMqCBawVqX&X-Amz-Signature=1e0be73cb5dcdc3a4004d0da332f5b589c9166785211bb516aabf26243779c22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635MUGQKK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDJm6CR%2BAvkgqrwaINdG7zGiTfzv6XahU4pqgsXmlxywIgPmlZFwgpvHzCelzXGBjAWuFCUqkppHoSZeWWL268M0UqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGL504c4hrNhWLuGwSrcA%2F4JfE9ypUL552Yba4RchdpgPh%2BdxGRpZjTfn1FsHwJ1B5PSGo8RS0rONVPQLuGOMGeWzR2r41U5fecxB1qy%2FfebOKEJAb01LswUO65MyuGHYIp25A7j1EV%2Faa8g1tvphZDGhc8lH0rtQJi%2FGAwtn79tYkK41DMMY2wGVCW1V2u1xBKDyEv5wimAmAaA78jiZiZ7kDlP1MZXfkvLXREopHOWnd91OKrPtCLsLMxsJDFtinvBQak27Zb7vrZHkC10mxYdY90jGstg9XR5CQs95tMZ3szkt20tI%2BZhe6vSVG%2BWBz1QQ1yfeznvBkVZmlp%2F%2FIq77evqvXbzAAJWw%2BnX8j1lSxbu4Dm8zG4dRX2I%2FtTb5i6H6aojQ4SoTHKxNeML50sbRKuYB4kjQxUidQSmTw8MKSccn1ylabj2u5k0evsdV3SL8JczAhlUCewmSEVX7xGUcERE%2FcfUQSY9g09QzanbDgfJi4noOwYnmyTJagXfBUJnbrT8x6MfKWmzdVKcYIdwUhVteCY3z7f1M2LtRU59QDswrAOFNhYnNDKhlUiTmdMw9T1rE3YUxiYMBYkkeTbSbbjH%2Fd4acI%2FQKDuHEgF3KgIMYdtQd8bL8xPRVedrjJIsy22cldWVF4G8MNvLgb8GOqUBDhT9uxbYWCD1UGQ4%2BDfmGm90ItfE%2FZh97niSQBEo%2BI8Jh%2FcnhUVp9SQg7iAq6dyc2SCGCeUjJtSsrL3VMTM93edQQFebeDKFCnkDXfREXcugNSoiF%2B0aNCSiquWW7wuzaEIav3W6R6nr%2BbbLgVR38MZE9MtTT4evX8A5sdylAiDG4CFVHESuR%2Bz5SfQDosN1HiORIQ2rQ30wOLJl2iw%2Fv7v8flzG&X-Amz-Signature=f63b5d0f357d1bfbb536a8352f2fa8936b58235baa59c1ae17a8f20c1bbd8c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
