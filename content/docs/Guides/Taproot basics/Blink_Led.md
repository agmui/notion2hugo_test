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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GHXM4UR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVemf97%2BBUDPts4rEDh1UiMK%2BFOIx0dcWmOTFyCiA0VAIgT17tW8h%2B38TRnhTGYpxThSXXitTObdyaLZwIhRgHjPsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNi1RZszOhaCpSsDmSrcA58Es2ssLvp15MrH%2Fc01ljBhQFkyfL34OU09LdP8lEFr09Spg5Dbqpk8SXOh4xf8pSr80VEWYba6GleeScW%2FEvjNqEh1ypgqFO9SNwCzSVg7NSuPM3WEMkk5VkaWGDd0gv%2Fr1qwit01Sin48qDQ0%2BeQgUILLQ5YVIdzgjlS%2B1K5QPxpFzeYG2duA4Y001cQVdRzD6lz6k2Rok4VnQA7UGoZQpU0MK3lAxtKI96wWu1dJSCqBkWw%2BF3VZKXNw0KG8dUhj7aHyUdZO%2FZJobU7qMUq5zs4ksrNgHQWKKPqiv7bdJqmdbm4om7FCK6uQY5jwsdo73n%2FnhxLIgj%2B7XnYeQMHkPkddrzS1hpxFtz%2FDI%2FPdpNwd6znWjaBWj4wT3SLGpbo8FlHlggaxfmm%2FWaANRU5%2F8%2FH3ha81cfCFXYiqs26grV0tCXphpPZp8zVPSIx9KT6SS3g3zfUEn1J2wmIJzzrFH92o7FO1yHwy5BUgN9rQmD68QzWpikbAF%2FEjNHC7FtJu2HK6jKkJrQ0UXWG1yhc3GmnXEhVF540HbQdAeeCrmZqWB3RFRnLoM39goHvevlQLv4qJJHgdp3GT8e0cbd36f%2BYSTCRnAK%2Bxfs4owFUGXflNE7jn0cw%2Fcl6OMNm%2F0b4GOqUB4qexpF%2FhaOtybQlu9nzkv1Rc3KW9Qsuf8xDu6sg%2B994dlhxgQMeVhc778ik18ZOC6TvZ2CZvYltfzLRpStS%2BN2D2TFppCKM91ic7XjTYXNGMwE1130dYYUF3xcWB68vcwMZjYzmsLrHQ%2BAFVYWE8T1AwurIubO%2BMLTt5lT7cZjza3vMeo%2BXJbWKEhrZTcK4b%2FwWodnCsyZDHJH9HSWHHucnuGNoV&X-Amz-Signature=0b4cb555f015a99da67145d12a69f962d92076b90a8edf45fffce967e0688bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXL3EKFN%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T170652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4hmYS8JokcgDQoYZP2KNZM5tb0IUdzR%2BmM%2FtxlOZ0cQIgDLGUrb9MPrT2BRTMRw70L%2Fnzm7QZcguu57PzQQHs%2FeQqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEHI5%2BrBmGMLrWYCSrcAy6JwfTh14PyjdDtsbvnHIsemdBM2lZLB9dh1oRuJLNKuAFlOSo2G1a5q1JONxvCjPWEMtVbdFli6JHJjPcLcuM60iUv4BhFka%2Fs8JILZSukNpxW4%2BML%2BQTX%2BW%2FcamCuC4FnW7qw%2BVBFloHxY2rV3E4mZYlEI7TtqXl2spwa0HaOTP6rdr7YBfM7S9SlrEMtsEHaCPJMyZFr1HDXmY1nzl0yxbcSxHD9%2BoutoIPGk%2F0aiSyXkUGlCfAf4vPe2RVpVtP029sBsqVC%2FYTKE4xKeknitmOUPYkOYeqF%2Fd7DMW7S2aqFrs745Ok6jy0MU95vlhfCHQ9oBxuL0X5ReKg0CUxSB2AlErQUL%2Fv%2BsAyHkTpx4BVGvRS%2F%2F1AvXKG8tQIxjV%2B5lrK3K4cznFj5FX3Yi6DtE8VkeKUUshz0%2FP8r8KAiGZEZdNgyOnXqWklj5fOlQfxe6d1LnpzUgYU74WeGHWjYFDBJiXGkgiKbk%2FYtVvC1QYsYfKDPEFZ95%2BoP%2BTq7AoyJJleVuLJzdb4fiG7RPSXKREDv2d3jEmFahAnV5Gy0mT%2Fuyb5tpXa2pQbS3vBIAe38Y26STGc6dzXgkgwpdMKImNGYHqFbae%2BDxsriOcdvzKvAhSgR6VsRcx87MPC%2F0b4GOqUBbeLkae585JOovdBNv02rEHK2z5KdhRGsFLH%2BtiXOasuFxot24UiHVkhFta62GkXo%2FVqqDmsqKfllfeAQOtZOl9I8jQPV2ld%2FYhMtltARAKzIIQPr2jLt6XhePPQMMmk07%2BR9CH8e8R9oy3C2hOGpSVCgh3vewFMJ%2BxcNF%2BTUZb3ljCAmqoloDx3XyeyDSqA7FqVZvIiCJOLCUuGwi2a0DI30oMRd&X-Amz-Signature=100a9fb0fdbd29450ca67bb4901095a82e5660b1c2a7db77e0d5f3fb69a2a2ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
