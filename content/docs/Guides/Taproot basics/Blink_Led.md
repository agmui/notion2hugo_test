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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAFI43HW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFNwAB6wkuDn4XKjtLxOSZAKOToQ59JqnPDFbfYOO0HUAiEA0o8K4xEitC6SuUTedqMZD%2BlTWuRPxnuejHu%2BWmEj%2F8sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqS041yTsLQLoe2TyrcA8DZ0vUbnlFn%2BqGJpikRapD6Erc%2FQM9uTi%2B69ZgzhIFJz65vQVCmhJEGRQwj8Avycwt61lokd4iPZHeBjeFCbmm%2BOucnTcEUvEdToUPwOWJLO%2BCRh%2BkayRDa9P2Vju%2B%2FCf3IjOkfehnilYrn1iTVef8iBjUvXpOioAo0YHbJ08EdqhlI%2Fa7cyiidb73uu79PnfFwMGcef%2FOVh%2F3JoOWWkJf6Adwz9SABHheM61FuUqdIXg6capmOfLZf0AbAJIdE97qNJ%2FVDXBsZG5R1W9bQXUrnYIffKjB8PDHfngDDLR%2FHzAuVFYk7kClpIdKYeREgdGeRRPHBhC5mxAKJ3h15jQplnYGwhMXHc%2B9Akm1p57IxcnP9rAJ2%2FZwyDxpFfF5d6rnbeRESd05h6qDxeRLH5RhjgIxsDYwal23525E79WbnDnTvdBsLPM6gBLUQER0QDszSYPVCy9nTpvBjjqMjydlpw3%2FBrjKwDMWM%2BjACj5KNsj3R2sPscF3wWuvZa%2BkJEgrbM7zex2rgu16wXm7l23cVLcSC0pzPv2%2FgdfsLKJwP6bDo8cHn7UOKm0Q2KUOpVo%2F7uLCusorWXvuv3aWXfyh7burSveSXdKCyZUNzBls1Ez%2B%2B%2Foih83aizN8UMMXr28AGOqUBwhtjtrdloeKh8SWQof26PJhiYuJDuX%2B8kKMoHazYfBEpKHeW4navihEzdX3en02CrDHgt853urnCD9mqsTRRifj2EfnY%2BAgOgt0Z%2B0C3b3CPceVToeMZQN6z74UwsfWbL%2F3Ggo2E1jxjyuDZ6fzIv1wVFT9RxzHRuAwXofK33CWGZWxUnNLK%2BHHFvcq0f%2FTZI79%2F%2Baf%2BT9UxTQ24jHX5w7keE9eS&X-Amz-Signature=fb4644bcebe20eb293659d4f7054a986eeb335fa94dfc6e69e92007acad354b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRJPU6B%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICD6FnxyojcRhSnPcEcsKGq3erH6jHKzuenQWgtl5Lt4AiB9RQycP6V8PP6cHtVkbw68GFixsCBfqtxny1c4AEdwkCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFhDh1TNIN3xgokvtKtwDluDLCxOwPNxSbjLJiGG3e4ShGQmyU2qH4hQPHUEqzYh2EzD53bhDdhD4lIUSPUpE6UO%2B0%2BjXfr0gWKiOfq60xAs2JT98pMYNkVfQqz4UUh4o3lsup3EzUZj%2FpXP6gsA1HFW6mWoEGuNyFYKkrm9%2BagIoXKWEHjOVH98j4uv3%2BUzwLmfvsjFG%2BjL6nXtbvltdApQI2v%2FT0VjalugjD%2FzVxOeK7KNHuxrWNeYDv4k0IMw45vVka3JK6o3ZvOzIL1NZRWfa5Jwp9mylUROtH50SrywIuG96i1YQH7XYbZbIXIdt1SzeTGMh8fb2Rewn4zyAWic7yxxvYa5pedbmt4EmpzQwvY22CE0WqsaQvPMAscso5%2F5qYJzfmOiqmv4HL4C7Y2kX8qZ1SajiVXZNt5Nt3i7OR4VeS%2BBHUPSzBDp16MaXecna3HImheN3haFvDLZcnngUdZw6zEFXdsyiO0rZeSoPBp%2BDiCrTGBYvT4aFiiFwH3jk1lrx%2BNT4IPI8VYkRBDfAVaGne0aXSdsYpLt9Lzubf10BsTK6JEa69JgqdudXYrhljilDDvme7EOR8lhUStGwMd7iW3oB1zaPzmTKCBvf%2Ble4GEdkgZMTfbUx5UKl1QSO2PUsrztCc00w1%2BvbwAY6pgEd7WHXcx8FB5xXlZyaD8wIh4lOif5dCj3rjmP8e4LGP6gY05%2B3kz26SCco8nek%2B2AdE0Sqx76QZeUPZVmZqFcUU1SHoV3P%2Fnn804UyG7muXl7AtobGL0VR%2F1NdHcvygmWOtRZ6TQiQ5QAO%2Bjw35lrQYw97eDdr2436lJ2qyGizKnraQNKHuMkgM5KVq7tG%2B7RMzBz9C1i237sG41s1cYYe7IsAVh%2Bm&X-Amz-Signature=42770dda3f5abab5e89ef84578fd0554cf3de9b93d4aa6a992d01b096f960041&X-Amz-SignedHeaders=host&x-id=GetObject)

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
