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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JQK3ODP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnFS3Pb5OnRy7KWImU%2B89sZ%2BlSEp85eNrtWauan9OSrAiEAiPdnp3vIQOXsbyDwqdEuBBMn2f7Thx6u9elGR7TKUzAqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjdVDq5w3T21q8ExCrcAz0JXdmNdNZCqq2D6G1%2F7TMBSqXnGVWAHB%2B08b6U%2BoXPDQT7Sr5ZHl624gh9Kf%2BVTmGBL6kOIt3yLqBlZ4nY%2B0tjjgDLRf5gvH19Hf5Zueb83aM2q%2BL9Y3NYRpag7naKta729cH1aIKEdxl2oEPmRuhIWLD0MIOrJcw%2B9HSTKHndOfhod9NOmDRaM3C77P%2BEwTy62Ee9SAkL1aa14a88G5ZWFYT31j9yEcT4bDrje7AsKdweJMir15seSv31H28DDFMAU8RDX%2BVeCxO57FmjoFDEQ%2BJsWw7%2FHLBcPQHeFt42PIiXZTHWDzIFMUTGNaJcJcEW2jAB30wZSKozqds8Jy280SDPHGg8%2FCVbtYMsvzvIyuJjcC19DpABeAWjOHkAucJdBz0ciAySzGiXX9dX60R5OwAOclnQbTPo%2F4NUA6iZjFV%2B4qcvOxSVOUGPvNC7sIfzeEHFvRkEYBbiHRd5AP%2BGWegUT6WPd9CfMJKCnoloLz7knE6KwEYFtmjobT3sftsEkQvt9%2Frc8ox4XqOg0NmnOjmrjYJ0xBGr9M%2BVdkH8NOMrDkTjJx4X9OjY%2F8k9JOlVtaCCtdEFdWzeQb2ruVK2lmwjsatVl1G1ymitHQHEkHy%2FqIG8iKk1O53GMJTUtMMGOqUBSXDzHvvRCOc9aD8EKXeaDZoXbZHb2qxfty%2ButP76rYR5PZmtX7kw1Q22YPfHFvzwbKTVEAgt%2BLbE5H2AbbVo1rKi6qVL2gnWEQHatl8lVDHXW3MmD2Hy3h9hPUj8oMfTRcpUgsjHe1gS2tp32tHUiSE4orrEW9P2Nujxz9GsgoA%2F7c%2B9dLLhZvqS6Uh75oQPheNX5aEwhPVM00u%2BCwWKk%2BimC2w2&X-Amz-Signature=9e19d369c0e4dddcc7bbd9590ba5c1920ce928c2bae23bc9505632b53cee285a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVDF6KJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoP1zDrvs%2FC8ztGeuh54JTLUPhEsUY%2BmHD4zd5pIULUAIgYQolUpbuawiSDAELQ7JctMU4GHJtFZWB%2Fqn6ik013k8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6HN%2FiOHfdgX4HLzSrcA0puG4oAC5fWrkpfWN9oDWfbHi9z8V%2FetkvW21J3pBwt3oGVAvXJVT29OYHVxlhX8YwvyNQiUE2COCa6Hinb5OXVMnlr49bF15HfJgkVzxq4eGpxQXCITojppX3OwRd9xsjomiaEIH9HmJ0tzyyufW3EuQTRDqqgeOA7CGIhzUuyHd5UcsPoOUxIJyS%2F5avN1H25Y15ntI8hC%2FEQU%2F53ONZi%2FCdiK33qMiNq95n0RTFmpWuSvgTmKKZD6Oy92K2G9kGGKBgEs3h9HUZJsg6YTtJNSb0COA3HQ1%2FY6spAfLf8S7Jq4QoukSfaojtVMFYOKt3T1NNyKUc8QaIQZ1BBIMUFUNrfhjiTZSA%2F3312HTf7fAyZ2sBVLlfiTFJsgX7EJjTGK9csksKhue%2BG9B2ROXTbU1I0NcRZtHM34IDQ9GhtoWytuwjvA1z%2BvuGVDiPSED3OpgCIzwDmazunsGnz1J5Bvslq5TpiUcdl23xLHhHZLvXa%2BZp%2BMIT6UVoScRB7H9Z63q290mh2P2Wlbt3s3WX6dWPO3DE4%2BQN0fnYyy1MPf5eHgYNryhlkbb35OQ%2BzG1kkyE08YFLBVS8tz5Tft9PdBEGuOtAdyX8mNAwYW56YVMLL1ZVeVjS0v3RPMIvUtMMGOqUBiHBoSFAB1EF3Uuru09%2FBdmbNedIL%2Bn9XHmpFsKHav7mdQjUmUloze8yH1omY3KEk66PMHr%2FCChs1VsyDDniXWaIDMlwGPZgkmKecOSI5pAq4EYIkfV9LWrP3iKNcDYaMrGBQHc7syrsxwTeERkOPqkJOJ92SUSE95GaVvmgKTb0dWY13IR0F0UNGBzrqa7%2Fj6hMRQFmbUqyLyiifsVixbfH%2BmgjE&X-Amz-Signature=f0e0020ff2bf6713a377794a21a5d2763d09b964fa826c59feada4bf01d3438e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
