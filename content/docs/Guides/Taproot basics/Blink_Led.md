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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEBJPTU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDgxLBlPuKeM6IPQXrvkwmG96o%2BgrJSzpBCFcnajs3lDwIgJTpwYQxKzfDqYfPVep6VS6A46zg7yio9oL8XvocYDGMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWwCCfIFkVLpl55OircA9MRZs1%2BdPsKhRdCfdKKO6SFR5iOeFCtOguMZlHN9mAjRaYwA46JcgdZ0C3cJL47BMHwgvQrfjpEWriI4TA7AfvPNoZjwS8mNGsjH3BGt6sEWU2VLUNzjLgfgaY8iM%2FVDPLANd1kbPMNBxmoaL2qFg4%2FX%2BTqe%2FeZS35lzVEplCB0Qm64aI9%2FYzWXF%2Baa6Nxeb0EuyTjoyqYohZWfHTrdUlSi36wIqJHB%2BkpKdN5MJ9Gy8q1YZi1c0U%2BHADdJW1xu5ctIUemUCUmY1UNrZULcDxs9d9AskQRDHzlkgukFHBLnhoWW4TG6niGQSIaM02S1wwY5hrLis7e7cjlu7h5tCNcva99cybVZQG%2FrYuwcg%2F4c%2FdFKK2iswV260e0Xxx%2FOidk9%2F0n77G5djyJ5EW2C9AQFZtLt9L%2F14i7QqeYE0SdhEgCLGIUSkydDv%2BuQiCC8uhVUo8AhtDuhlP86GpgiGlIY3PkyUiwdf7aHmDg32fxAVCXhBCVcEFDN8Xki%2BZN5pxG8B2wsd0hrc4BhD5XjYPzrefx%2B%2BvyRlPeClbcxP8VCpG%2FW8ka7pwN2ZOVWm2LbVStGObZhoBHY%2FUN4vWOCErSCnJhJeJQ7YHoiiAeVaOOaesBmU0p8BBeQSjTiMKTvsr8GOqUBzJ2dX0EUs5oU5cme930rF%2BEwLTTK%2FkACe7aWzmhTQ8oK7sSWU%2BQbe1XVsCJwAAwpe85jdKUIDt74z6nolbqZ3KpVXqssVkIYg14bV1MO8bVqWvP68SmELIkST2oOVb8%2BH2iT%2BtFZWdLUG7P0scT1kcxv7oMtOVe%2F5o6K9lojz1LSn9b7A1Q9cOz2bFQn46zTFCyKgd2rpBXGCTiYzCsZREAWpdru&X-Amz-Signature=3bd508e5fcf459f6d1170c3ed5b0690449786474237ee6496d493ca43db582dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22UMI5R%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIELOrvdL%2Ba%2F%2FdB2STdAtolg7GEf4HkkCX%2BpvqIi2iWzQAiEA4qr7lrQ15gf0J06AR2rth1XLFUMiPfZ4h708aX057f4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BYCetgpvcyDJI1NyrcA%2BKDWgrRmnxaHVwjzcfekGqi142OJTIA1Tu5ygzP4ux1ru7y%2BKglPfpft8cOQciAfB1LYT0oxqSIQXIg0WHBNL8LcJUz2dZXz0FU1rMCUzkL9FNQnyCCufO4cTgWhDdaajTOyY3mY3k900nvkkGrZbUoyPHy4VXok4XjcP%2BwDw8UmHaTSD%2Fq07kN6hyjv92SHRcekT3SE%2FNZwEZHxs3jh6bb%2Fx1SG9Ha3vfa03mCT0qgi8khLquT%2F7J%2B1OpJmBySS%2BvbURxK%2BPc8m8EksmEoMOzBxsTdzsNnEnp1ea1ifgTp77GWdPM4njP%2FadslctZN1nZtL10LdXG%2BJ3uj1EzbUBXSD8ajwh9NNq1C%2FP2fqq1Qwe7wcDfTVxj7zZg1kGFJi%2FenaIaThF2M4CoPtSb6WS1nZly9vNTlpwgjSeE2NWAV%2BBOpmzCOwldFZjCaq2KOf7CWI9u4O10myFbfSWKyuJlG3b2wywcFOcwPixKUHEh5jYWK8WU%2BEr%2BptL%2F1k9fSIpB2U97InhaymYLnKtxZzV%2FuSeSoLHFp5%2FaPlweoJ6rM3xtAoIuvDrUljqzOsWohGktTFMIPtKV5P%2Bu1lYUV3ezGSyCUMaLIdOfFqGbJyXF%2F6b8fMh0K9Z9Yb65YMKPwsr8GOqUB2hCtCcqYwvZuaOu94QTS1bMxErqUajOTWDKkG4bMtrGH%2FGUc7a0ARpPtRJvYzAnTgLsS%2BYSDEgXT11lzsiKf%2FrD0ZfWhx3qurR2sFGLcatEVbH%2F4IAA7NtRUVW97C1hDwtY2Ttc22yWJor5qZ7edplaWdTwj3kH9Ke1%2F8N63R8Ie2n%2FS6dHhj6LwlUzOsV0Xd%2FU2nebO9kk3UuVRAiIqVmSmJEjw&X-Amz-Signature=a69e2a4e643addae3649623fcd1a4acd7568d3654be757b65b730deaabc46961&X-Amz-SignedHeaders=host&x-id=GetObject)

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
