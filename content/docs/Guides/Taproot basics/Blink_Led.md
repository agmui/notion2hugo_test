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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q44PKSQH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFvpwmTe4aTl46ie2QaH0rx9tUp0MAAz%2BrjrKY%2BdHZUIAiEAotjrsfx5lmsPLx4M8FCusjubuKSO6XfigFhGjDZs84gq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKuGPBYHDrnIhXpiHircAwmsvSNFxFTolSczVG0lCmMsHAhJydu1LfTv7s82kPffHOqI3YHHX74ICpzY18iOsZlLVgpIkejh8LASmJk8guPRrz8CY%2BC5%2FjM5iBwEdiBDEv5IB2jRt7xVm6N3fhUhHSYKcQ8fmEWQebCkXosmbdE04ZzmwnBTYfQQgUIFRCl3nUjRBbBeW764rPaEzpuk0rwsBH66pcmiuCFvw6TUE%2BjltCk3o3OSHav0L0wyVOkvJC7IxFCW6d9n8WSl5kfiLPWWHXF2%2F9896kMqTx1mUMcOeAQ9p6mR%2F%2Fu70C2bfUf%2FoctPHGSYW8aqUJOte%2FfXfN4u7%2B5%2Bxea%2Bx9X8XXwuxqMWiX1rUkheJGpcG0GUAw9KWBzYo55buwEX%2Bz0Oqg0ETN8Y2l%2BmgVChzSAUqrdIUgvyxPEP6TEeAjAAW4%2FDXyfXoSBqqks537vdlVSWbmwPZKwzhsge9j7j5uKDxkpRTQI6kA%2F4zYiFpGcwfdvPaucBu9HR3OjiRJNcl2nuQH2d6STIJxmC5Z8cS5NCo1aiYU1NDNkf4C9tnMkzJdnM%2F63S65ZNYua1ipViQFdmXLbl6F7JBZQI5G0jr01fJtnXbaFNQnAnQ2vdcmbJVb%2B5SNpIIKUrBOZxfl4qeUqcMLyw0sMGOqUBJo%2FJBciPvNLHv5783DriihHZG5qoTFttjn0GlVKh4aq6VGWqavxHAuKyQhtpnKDXfZZOgkZD%2FtAqyANEwBWt2RGt%2BimS84jiDFPe3D0J6tRvb6qV3%2FAqiOIrfxmo%2BCQA03Wqw5z%2BZdJQ1qILo5QC8LWrU5v6GnLlvVjeZPeIPblxusfoorWQk85d03zReRojcQRoex7u59Y%2FPNCg9ceRQAlPaPZt&X-Amz-Signature=c75366b63ba9ce9242be3d8c1fff814b18e1e6b1207e5612f5eb6164d6595d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2REVJZM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDNoPAAjLKHmWyKSM99kOYf6eatYkxshAbqIJQzOZatzgIhAP%2F6aG5JmR8t%2Fn4AnIzzv4LMJMwNDKqOsf9GEw8KMOyzKv8DCCcQABoMNjM3NDIzMTgzODA1IgwnZzmLKuJKz9WuJs4q3AM%2Fs46d32HSRi6swq%2Fy%2FBmjNqzLYiwTW2Boebe65KpD%2B2sAcucPXKJGjzZ%2FsvPKG%2Bf2Jeo7sG1ZBdz0%2BgbH%2FzjAjUrAoHA1NrRncDpFegcbR4fWZkwB7ZmowdKILUJiNdJkpW5Nc1xvz220M4jtZFbCHEy4GyXG2TzVkwEuAzsHn9uGFusk0kdlB0qtBrVeSfRdbRPxnTERpdF0qKu24Zkld7%2B43DF58knvGHFPD378EKR6o5s9wYRdYNMxflATX3AQ8Gu%2Fm9w4pDSicpV45NlQUTF5wEJHXi9aV8P99aSVaMV5UmI8hGeoAVBTA9RcOfZH8ydT0am9OFLehBXHvMgDUgHGQ1NNOpxpBYbyLcFey48%2B7xdnErAszPmlvyvab4BvT3NTyxXuMaSY5RpFBC9fqyhRqKBfC9jMKna5l4FVmppm8zkT%2Bcei6l1t05TA8TV4vqTKAPWaWnnqF30Sj7hTVlP7tM56a4Y8XzcM1NIgvmb8zQQwtSfbhbpE0ce9CKlxJC5bt%2F%2B5yAIJx4GpYoEgW9IVYQXBkyDjzO%2BCdaXFkz3PjC7WRDm0uS6MD9HoiYaBSH99CVDqXKFg%2Bk1OVpPLBorEHKRbgUisBh%2FGq%2BtQiVfmTmJ5UChmjqoubjD8sNLDBjqkAYfdL8D5g29vRd8IYM4Tj2nd656OP98CFAiLxwPrINlYLQGuxoFcC8QXPGkwKdSk1w%2FgTA22ugu3LD2PlI2u%2BuuZMaCfgBM9CTNcAy5MF6P3q6djkH0J3lSpd6Du49g5dMHRp7oOsQNjssaBOrQreFRHuM6lnjL4nnZ4TLWGw%2FT6cI7utVlyGpSMVNu8typZVzldx%2B7lQHFnEGVucTeiZjSZY5Ik&X-Amz-Signature=50eedf0a43a1e485556e4ec3325271a3972b0f8787aa7c8c4faccc038bfcec45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
