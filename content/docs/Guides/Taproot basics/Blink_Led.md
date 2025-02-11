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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BPI6OQW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG84KQhecTHZ%2FRGz4Bohjks2JBVxXLS2%2FmvkdaJxtiPLAiBd%2F%2BW0nxi4%2FSTI1%2ByF%2FB4QYk3CN5OiT2mIvuRo0LWxJCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMek4ZR1AtNf6Hr3SSKtwDyTWZU%2BUl8ZickyRvcSrccC2UmOVfDovBQ0HEisDdg6KqHJAh8Kttfcczyx7uGQfQiWmYinXcBWqVvAd6G5FxErFPj1PFf8U6zU6eQwENBGiyhOLGiJDUUwt4BCxLsH7e7JdX5g5qR0KqZ8R79VTg5wMP2FuNeJk1%2BQy2UzMBhzt4KhCOZnqi0g3kGWgiNF%2BL1BQ8SCuRZsSYj2h%2B%2BJtyGjD9eM4imQyQm%2B1ZPSgVDv5xbgHmvq2%2Fmor3u1oIpjmx8xPn2%2BPkvMUlSZgrHZXNZgUWDyb%2BeMaMEXjgLnuZD05iCLRyT%2FapZzBmyn4MwvZbZT8SOTndBaJRL17hVdSi1nfhXSEvgiWIM1S83P04B3xMEEXIu%2Fo%2Bt12AEU1LqlChP5mNxZqJ7LrpJYCIz%2Fu%2FShPMD0XL2l7dT6j%2FeyGuWfGWuqeuz%2F3eUnfxL5vhMVq8PasfdlJlBCjlxnozOYtTQqHZnbJxnOdGWPXj3SRCds22OiGjz56EC3lbWSvgshrWDBwtSvLkpZyjEiPYk7HALhHUbI%2BcTu1B%2FmNQOgjPQTi6ceIB%2BQFnaU1wMwlT3qnDP0NBv8733p3zLWlRzSwZXIlfepvcfLSzJnOhd5DFj9Vo%2B8qt1uYKDA8RxP0wlIqtvQY6pgE7LrCjjANtamqut1MLq7dbLFGrtlNh%2BhAq1WKRpmBAP1t0Kjbbt9oWJ3QwNHfo3wXlLpECiyadS9qIL9pIB1GFESUF63bcbBR43g2TEBbq1KujGEFMe%2FOziw%2FjOnf5rtp19rjAwAN19stclz34MxMQnH7j30dtGsyhpDA6UnzoDPt2oVt5eiDKpKpW80RBC5eH9QHcaBUHTaflCG3nA20WPbHKvF%2By&X-Amz-Signature=995b8a60893df30de4dfddb10b3f3b3f0510063367890329f79e6cecdd669b52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLW2V4BT%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsZsIgrSWvjUbOReX0tRoFk%2BQjEeYXxhrpr6iV4VkTgIgJ2FfJmAq2PRSPsOv7JWg8Ltt5Ez%2F0YEX2DnEvTi8B5UqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6nX6mCyRwdxTkv8CrcA0zTUO3GfXPsm3cRnLg0sQF%2F0NClyi48UU8polOUsKkdc2HNejTY%2BDWzoFzbYpsB80c9rF%2BCzYhFz8j%2BK%2FFucA6jcyUrEy7p3iisxVmklSRb%2BhLG1uo9VW5tKEvLWmdDf2ljbGVWDNqF3CT2IXNSAm3k4LihZQa611nIi4dVdEnwWjyDMb0g7%2Bwh0iSKAFR952avnCHMG0QLl1RuBKX2X5xYBQRXsLmHrCsTEzOXXVv6e9fWNPJJWIM9ZmQFJNrK8ol9AiwYR1DEYdVjmL0zjq7clIfoi4wHK%2Fy24UHxlswhr%2FnGM8EKo%2FDopEHRD9ELQe134GX4O%2FWoYvWSg4a0ubVTTpeVZ%2B682CLIdqyebv1zmynoYxAjCFeRoEm3Va27l%2F%2FYgkxUi833SYce2P3qxN%2BZplyZCg11e7%2BRJf3tHSQ4abaIbLmT3yGnnGI8n4H1hzOHcHOXG8gmO5RR%2BJa9c58JJSqqXRCFh%2BsbVN8budrdAjxqvtgh%2BzwTZwQNyhyBM7g7APAZvPcwkcRMhAcAHYJxeYgPdRR%2B%2BBfqjWTRx49%2FNWMccZeeP6NrmtHholr7zdtvmQj1faz4t3BLQ9NjRlV0geBjVGdNF638j30Ux0gXHzBFRDB%2FTRg4G8FSMJSKrb0GOqUBC55X7lZ99aR4s93ZpXRo6L50IGJeR7qhWscJrcsvWjhJtgUA695B95%2BHbRbK289jiQQV3QDQiZvpkDvt4FFPQIFMrcdjsyyu5%2FHA5EwVsnNtmlsC1oQDxcfChq5BVzbEtJAVKFxIFaCBfaNudks0aJRokegYBgfmtHY2tJCTjGEKztscmOE8BVc0ELb7HjxZ3g%2BlLUebAlxL4nwhmd8mCiJqrGG5&X-Amz-Signature=643fce5a4c2c03479f2b4845a604b7dfc23f5322ce8aacad129a12931b2e918c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
