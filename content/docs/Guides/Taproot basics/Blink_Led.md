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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VGNK3Q%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUVWGG85gymmSB%2BYr4upxSHk%2FW322yhg6K%2FqD9w%2FiC%2BAiEA1fb2y67yRBfSUF0bHcha9lrxxKXVVgATr7RImFIFx3kqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxCe0t70ZvfZ7CdrSrcA%2FxRKx3fc4QsqvC%2BElZuqnnOCaenl%2BQkmV7T6UVOBpyrbTe%2FWFSxQM6%2BjUi9zqSvejq4JKWSgeVrR1u4Qv5EteNVB3TG7JwowBg9drJGtOYYHbLYa0BLd8yCC9kshYpFS0WHWIz9QqtSWt62EAQm5ZB164mDrw3xRr2u7XQkThVr9KO5Lk%2F%2BB6tiIhHs7EsbQ78spciI0DwoJvaylzalShgj5HYjahD5Gio%2FxAHQ1pRJaaETeTzgyKqMGv5G8ow9UyYia%2FJOMw9q%2FSvvBHocL%2F1KFrZLokzQnleAhaqvRm7wZFpG8WdWLXPLjz7XLxBZ%2FqB6I3eYjvboA7k40sj1Ay4srsxCeH6IgCXPLSMTDV5eYMsMM9bnjQfftR6JEjhpli52PqctfYrmv3tSwzbKBwZcijMCjMsdzZPM0XQYA%2Bg7xtLkyDo3RtHUhAmAY8NjYC5wJI95r0aZK8K6rwEar%2F4KhSRjLoHTCgFc0Wc5p3Lc%2Fls74kNHqjflO%2BCJaVDVvyj8K2sQOiAfxiej7lCZCr%2BWtLUUvW4T6cIHw5B6rFJNsCJhWapW9R1Hsz%2By74YkOEWEMr80WkDuAdj%2Bt1f0EnQKg8jHtwZAgCfHUAv%2FWrMNR24d78NnxSAlNQOtMLvttMQGOqUBAvAytpHJYGeon10frK0x3T7KFDu1JpZpmIffA2ONZ21C81G%2B%2BrRmYyWueZbHjA0jD3fxxhN4sx2cNRkCBpiyqqkNvY%2FHx7zgW4OgVN%2FgmxnLqMAEqsVFknfHz2JQ%2F8Wz1q82xoUnxDTckB7IDVkwE20c%2FQI%2FDgA4VYBEEUjOZEyv2N0NAsohTIJhQel%2BMlU8WWps1NjlKp26C4j%2FHIs2KoDLq5Dc&X-Amz-Signature=b53571c7631b880db94bee030637269cba33ca1b96cc615c4f79c5e30870a5e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47NJV5U%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB4uK%2FYscs1oUd2QmCW0mGuGXKa9Mzny8wBgOP8yt5UQIhAOrZtSGIH%2FjcuMUM1uvIf%2BXr5DZQXHsLfWjc5dFiUjS7KogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb%2BU7bPtlKtlwWjIAq3ANTD8zWxpt%2BbAe64tPSIIRTHtQFIXanmJ3%2FvysfVqDh%2FXEwIxI0GyqbhTjSOmFc%2BK0LPLLCnPbbEov4rf3rLzPg1khtsYjBXuD%2F9BPdEDp9sUDdfhFjFyFdOAjQPlLoFKyr%2Ft3Lq%2FvtVMWUOdRvrf6jWom1OjQ6fh7Bn3WqPLyrJB2ELnDzhQon9tvKyOhBKQFVVlF%2F8L5SqfrFVhnLnLq6p6GGu8LfcwmTEn50hRTur2xYuuKDfFOumu9xqk8%2FRvNEsJZ0geVSwRm7IJpxcyQDog7Ye6hu%2FyTjqLsn%2Ft6B7eM8C%2BA3hHEPchVCJd075Bm%2BQUOZNuU4YNrZQlo1KggVHck1ZtlZ7SmJVPzkEXAfk2blqYrMnpVpC4g0XDxowdRtJco6FWMsY5yM%2BSI7ZVUd55rTpqBpGgx9j1rkRa4VGbOnt58CfuI2uVNYESTB6mgEzPCHpDC35tWD8D0aiNpG08qfkGRcsgqE5YrUiZJoswyRS%2Ff%2BsnmYpLu5PgklaznRzP96ORNJoJt%2BuhMKquK2q6p3zxjXOzq3yGZ4NgO29HJIGEQcqO%2BMFcfE5HXofzckW9q5D%2FhiRe0JF71Wi6fiA7Lbc80fExfO%2Fia%2FUz9CgNsq%2BVzhdQLcZ%2BOqRTDz7bTEBjqkAWFzeA%2FYm2QUKT5zWVecTMz0EmTx1pEjtbjiWcUW%2FDys%2FBXBADTOihAMCbESYu%2FsQjIJR8pb28EiCMDxI2IVkF2nVfbDrKtC4JGv%2BWm5cqMU8jKMY1BGUKYjaeONEnEv4s%2B9W5Rjwrz1q1RXakfNX5fHeExC9%2F1Kjm8ycOlc2%2B8oH4ZHl706cXq%2FOuKPyA31nPzIuVOMPcrmc%2BsmQhp317z7u%2FDy&X-Amz-Signature=b5b6e940f6d8944033586d2b8c08944038dcda2abeb0b88c82048fa8aff57d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
