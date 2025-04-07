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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RL5M3UE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD82wwm6a1H6iho07clNFXHhu%2F%2FMrq%2FDJ89zhUW3I3hPwIgV7%2FkXLxjoCSJ5IbCpCRNz0s4p%2Fc3SIrCe0%2F0%2BmBReJUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCAtQmIsDjG%2FVZn0rCrcA4hjVY9iaF4oCnVRUhWl9j7VgqShmRGEXNmF32Q1B9E0nW%2FYHVRXy7Yh%2BOmq6uIJeTMp765YXGPayAt3j1pW8EQfFsxeNX3g0qT7YiAtXt6HxbRgeV1hxH89j78MwJszwuTSkFb%2FSEZhdmBIEnDn1WzO9rDFzk9gTo%2FoAHt0KnbXEhdS%2Fd5EFBM8%2B712qUQJNtGT369G4GdmQM%2BOO9udoqqG63XAy1pvocLygWZYUKgbOaDfCuZXkf%2BaZ56iY9LUiCg%2FgrWo8YDptbQ%2F6xaxY4ozBeGOiOJ81d60l9gfkO01FPYfuZUHEQbt5o%2FSVGm%2BKqXJH61Vl3XqZLPbhOJ0UMEixQCNAJjwLZnBhxCD4uki8%2B3zEsdemdqKBSLx1c%2FEpX45FNsNTztVv4v75ugkqtDeQP8mZFfBEa0LCnVY4cXhOB0bsnF4h6PYrdg84VTRpZ2U0Bp%2FM1Uau7L9vaf5Zhbllx2y8OB7bpejKCtIU7o%2BGATVn%2BTND6tNs1W7A%2BXf1o7Ak9sdfZ5zCwLMk6%2Bb5ck59Mq4%2Bl86WIXrpJf%2BoVX3RiDglZ4x1yBUJdOnOS0TY30g4xSl8U5m69nXw%2FWc8LVzHpoL9IrHI2laXJzPg6WMc%2F7TcflSkNS1%2FFTsMPagzr8GOqUBwTjHaDazGlT9qsCsBHHi0biF9pRkPEZ%2F5qlAXSiDWt63ivF9C8J33xSiCqTwvDP75nLorXLJLuyklCouPJx5bzRGFkD3YtcmVLyf%2FbXR9GS7RWIisD7gJizZOqsZl6EkD2BMHbxZkkBuWEzIZmnh20aQPVUaK%2Fh1FauMDSTSkzkJzAQPOwxOPwHfkLFjqQT3QJu0dmCyCLQruGjpmsOxzV%2BCFNYV&X-Amz-Signature=9bbc6b021b36f50cafb00bfc97331eef2f187f78dc8f5579628fae94c523d9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SHIWPR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtt6aYHuOgm4zEWUXcX2rOOYii9kpjpTiL%2BjSwoP4foAIgRDMZ%2Bq%2B5uixKuOERoFoAncnseOyZsJmyx2qILn4zFkcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDbhj6P8xRPzKn1WQCrcA73ClZTWY3RCn6B7Iaeawtl6Yd5KAPEJ2OHoOjJnuzFVmTGH1nuC9ZGCAiuQyq5MyIsS4jshGUilaOnHZ9VwxXm0l1CwGmbmeNjX%2B2dPgrKr4mrrMsnaVq61RTAz6tb2Y0kbKdcIdXW6k9ezRATRSfmL7iDpUyAzbfphrZoFWsTDahfIwr8%2BlcHvKQBdD4ASqGf%2BvyldLPYTc5lqOE9NDEdaUhiglO%2BcfyluyuqhtJ2G3RUApSXpm8x4dCaGOzEBoHN6Y3edQb2HFCEITbOsUTV1pkR15ERymYBCjqC5ojG86Ti8%2Fv9atsUflELCbBufIyjSSWCFQRllGeeHGHYggrGt3JP2sTR3HAhIctzE7%2B3OTR8%2B%2Fn9GDPP0jOLZUCT4LxjruLae6jvvUWdKQg%2BlSFooBNgq11pJ%2Fac5wupQQN3kOK4cr5o8SR8TFFSj8xJnSzUPMJvBl0SzVYQdafKeWRLC6wTpke%2BCUpR87yzqniVPtyMQ5u0NDkG3dikBcjwhOm1msV10CSsMdDNR63fow8Xtjtv8xKFtmAc1nHJrsz2M6YffzV%2FrfgB9ZaFA9X1MidZhsilhw0f%2F66Ob4lCAV0Y5vtUt2BtXm39YeGuDuEKo2fsxqKxYmK%2Bl9feFMKChzr8GOqUByCYOZ8MNvYjITdia15iPLBqQm0tpzh9OJKIXqbB4PRisTapVj3StrlvnWXNaMzOO5oMTMVyUMagz3D15cn25CAy%2FNurktea6r%2BrXgF9pU%2FC4IyEadBYPxeeVjkWn8GGO15hq3GkEK6CBkYZ0noa%2FOXjCQZ0OVFRI1AYFJosv6TkP1EKREQlgHY1rvha0idcsRoHYcwAL5IpMyY0jfzMt4ZzMekRX&X-Amz-Signature=64af200f1151f98a678bfd62164b39ffe2642fec40d6dca61dc81a45e6a4096e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
