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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTWGI6A%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCICiutRPycwwZdtXVkpPeD5JyC66DSIczVYlrO1avsFUtAiEAoCjkZ3NMt5LZEwvlGBruZzYrbSLhL7Cb335zTutIMvMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4w7pbnQgjfIHEYTSrcA%2BohxauHQASezfOHxQqL5gAptkfWfHeM6koDxQSp2TIqPDPvjI8oy8AFiiSjpoHYD6U6vsubm3bFl7aMs0J%2BZwRStJ5nGFDOPV9qkqybGUMvmco6GVWubxNI31VfkBF83AA6sEa7nP10P8lQws3WzSpKIgrbnCT1nr8u3oWl8FAYlfuCgaWXr3ZUqMw76110ZzU4%2B6VZCoFe0OB6k%2BNuJUr6rdT%2FFg%2FlA0ixOOQKsTc1w4eNodOjcLzNj5jBRhD5YYizwdcKBPm%2BArQHc%2F4dJoKxZ87BVFs4LnZoa2S%2BVoEXkn0mkZ2xW1FuXb0IfrND3E2ADHyKIZbABGQMHW8qyIqAT%2Fdy59%2FzirQcHiyJiDbIqEuScS0KdT3%2BM%2F%2FZI6MumXFfLAXtvQ%2B6S70gRtH5Ray4rM5rctrshoLOCv84KubKU9YmpobI9nsB4LyYhuIveY94lR42R2xt89RMvtw8m70P06MWDuGrAkdDYXCMvHXTlhHnnQYXskiWwBBxQJoWpduDYDNkH2EWX9w8j0U9BrBMczyqaEF3q0r4Olw3kpRtL0o%2FvKCB2Ox7ZlKOc8pBQiqorjFrRLFcerRZnCAnkhxbrBQm5ptXJ6E%2BWP9zefkI2FN9EpPxGOipkIRhMJ35874GOqUB1M9oRhzons1m0S9ffNeZWzunL9SVweSMV%2BPxy0cuh1Dq91UYU%2F%2BCYLHW2j%2Bs1o6CXfWTMmF0yIJM2zdH2nkPEzk8vsfpcWc4KcnmIACi7SadK%2BJYdphGV6qVp97xF%2Fwd8uPSvx8IUGng7zt8SwMyUOBwa56IXBkvt9Hy%2B570iG22kUEXm%2B6gOzN7yRwE4BDUzTy%2FnQBMCNtk%2ByFSzgYB11VDK%2FHh&X-Amz-Signature=0c19a577bb87a994fb9c4074f038c7a9028bbc91c5206096266998ed81cae134&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDYV3OF4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDqiOFpJvJHx5ytiw9ATUsN%2Bx8rCstOz5fDm4yE4aUJCAIgZO1ROeiBBNaERyyPRZmGfn2lPOHROCBZBGEfCszfiG0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgU251ta3ohKLpwPyrcA4viAUeA%2FO2IXw%2FPFu73u63R8R0XV1%2F2ivV4tDDMg0IoDlUl1CbvOTJM8xai1rdA%2BHuSpBJm0qivz6ss5l%2FJ%2BO%2BHNZpC5pl139rFgBu2DvA9VLlqcQjRcvxcdB1BesIaLPlLyV4QYagVF%2BbM7XmzDLB5JkDRDSEYAFBKIfx15Kv6to2EtJtq573KmKFQsNV6V%2FBYYEb1Lnvwdej%2Fm89%2FRffq9%2FDygmQbVLTtD1ek5ZrKSuBM4Tupo89TOh0h2jnTKMbcadNOad82W9uyn6ftxIK3COpeY%2F9ckGEQvaBb6OwgoEflcM7xooPil1r44zACFofkme2jYuHHQWgROQHzc2b1CMWPPQlPi2iSfnYLOhC%2FTPwOhPwx9juw949sd%2FJEaoUW8Y%2Fu%2BIYqvqrJhXJUrE2y3KvlrKH7xrmbBkxI8QYZayJlpUMbi9omjPI8v43hxxQ7yfvSbUQ4W1bzZeHOXXytzCecOqeUxJZppxxt2lpcEvvHwIi9N%2Bkxx2Dy2o0C%2FVzei2B01lx%2B1FSOp%2BqdPIPF96uOZYLjSbWma0F92gA6WxjBmB7WMCSmou9QSym11uwafYx2N6IbS2q5ylYvWyYcJTLQl9f1%2BBC79BbTjrLwhMyLtBoNK1SAqoxdMMP5874GOqUBx%2BvXzeD0reKR%2FOINkYH4zUIafrikOxHwIrUjxczIW%2B%2F6ZGhuuTXxPpFc6ZYXBkb3oudNUbbHfw7D8y3u1TWJXG1a2RkoqKzAu0LKr4DLdc1x%2FJe%2FbxZg%2FJoOL6KTo0A8cMKjrnY0qnD%2BnFgOefWFT2I7BIaGnuRCehhixocqYI%2BQyn4o5rSlXajQLw8szU9%2B6HHgonKrebD2a%2Fwu6QWT3lBRtwGB&X-Amz-Signature=fd3e6f1716a3ffd6f3caefa038685a847fe201d31f4c799fe3842ff6eb6630a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
