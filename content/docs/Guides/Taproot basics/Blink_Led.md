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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPLKCTRF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BCp5d6rlAy5v7ZhjhwWXcwo2dwYNY0NpdoDS5DFSyNQIgXyeYxZgAukSD2AFRJZ193h3k6MFzVfVwbP86Inzx7MsqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2Fo947LlyLrH9vDwyrcA7hb61xg7aWPOW55p2U8PFJ%2FLHIiiQAzYUN5L0aNkBOublLxrbDY2aE8JLrt2TAKaG%2BBNM4D4clB2qGxcepsXglYoQLWl0tYpvx3%2BsasFvIvs4GHMBITyWkCIrLpSLu5LhUZet2oRYRQ%2BIHURwD36gzVVVpPp%2Bqa9qkY3uq0tohokvv4SGVHsSjH18e9AskvMa3Z2c66KCYMytXkeT6yiCwAuGIUOXZeNuC0nBSpQFoA1tBd27v4MSULIDVPJx0%2FAJ5Mqu%2FwPuLEUej6ddR92WcNZV2ZtpCw3mAzrYB%2F9E8bKQh2VNAiaD0TC%2FWWaOYrO%2BHiDqGwgVh676Ky7LPKbhfzSfOWq%2B5JbPWLOfmQApLJUXGe%2FnplFRf6DDkHESzC19Rd%2BXdqMjNZ67hW7FJxwDub0xQXVdzi7REoOqh7iHGk9sRdXynJtZhWGRXTrjIFr6OZ3Rp4rRabC18KW%2BHVsj5OQUAr4MYHCNyyQ66wGG2ci7tPjkDrKuz%2FG4p%2FgPwfF2gRhJ6Skz0CQ4SEpsQeX8QtaudPw58RS5ovBlune8bff9nesnFybbD6ineFESlMd0W%2FvZS%2F996eMXnr1ByYHsFo5QKYVTGh57aQJO8pNtV2gGRY9gs1P%2BP7%2BSehMKPqu78GOqUBVlcX7yv1CtPIgv78b9hILsKB2Tqm%2FFxdsRfKU9PJx4A3dPVCye54gMX1XjgHpe1tg%2Bngy9DtQVcsEU5OemqU3%2BvQ2RCm7602D92kii2Ki6zZo5%2BdPDND6OY8X2dU3CmqcdETFCBc4GYMQ%2BNcCxlq%2FBQFnT82vcqMbxl%2F4FiMVdma%2FqUizrK4l6aTGyiYqemnVjUrXBmTIJEsscwsaxR9CvKt1QoE&X-Amz-Signature=2f6be428acd3768ee7f7a3a1e9df5d1b90b2d0d8c972d42435975f7071c7c497&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZPLCBKN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDCA03b3%2FMk0mN%2FnFMdXRdRKf7RSf4vp80k5euMcJ1wAiANuogV8%2BWx4cSm5ZX43WHMgLeET3BjhdCMzUQuVDA2DiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfg5Gn1ltonhz18s8KtwDgKGjmrlaYqSta9qb9JKa2nq4ylyWOTNTfPL2vwWv3NDI6rSknR7vRfcnA2O8nHS5DDLvtl6xvRKuO%2B5wYoO%2FY9fpiLeW2afV21o4YhsL9B%2B0ZPANFhWgtLgo9Gq%2B5qxDRpiNGbaRuqbaJQd9xuN2wlJ5%2FHsJQ1LepP9aebRcw3vNaLII0ngOa10Zledcls7B%2FOiDAaYs0M4Dq8X5IeLxpjIxr2Iy0sdxNwtipkW258zjE8rHpa5u95ImfXKvq7WrCqH0%2B%2FPLIg%2FOYDxDw8EgtezqgtlWcUL6UhnxsVN7AoueobwPiiovDGp0E2VRa8seeQiDUb%2FRyULVZTIl1bkLvX3xT%2FqyHolzg9MAgPqKuq9F3gOuFjBU%2FfbGn5ReTIcK16gs3AI8UFnRKP%2F0%2B1y23aGg5KHoTk5E8l0lB4LDy35KvXKJofDtftSn9Swjc4sLql99GOx6vq3M%2FWvLcRY3AkdVI0Xl6BDfViKVVQe03UMoArpYsMYnWSOzgMSSafWZvn%2Bdr7fMmCgl%2BJMwz9DTq%2Fir61Smj6dSYG5NzEgr9zs114ss1jHzmOMurtBZMYHJZ2wo2Hic4oxIUiCn15SMT6pVeGPSwh2gpGjTw%2FT8G13hU6hWqBY%2FbfqBUzMwjeu7vwY6pgGrjC9RLzAI0ECVj2qpJI4oA8toPt8EItepo50puI%2BP21BTtP9CY%2FtFVdCm0z4b39skS4TJtIAqs2pGx8D0h1q82EE%2B2khI0nYG9H4795NQPnMeoAA4R35REZryuEuVmq1aDW3nFHvE1YEkXKnO2SQfIhOD7JwwGRP0jEgbcPf7kHf5dayDiQ4mcB0%2FrBMYQkd8mih4vVuNxu%2BQiCQynszC%2FkXE2sWa&X-Amz-Signature=6bee107deeac5ad81a0344870c3f3b8171a62954a861a15518bea60ec52a1976&X-Amz-SignedHeaders=host&x-id=GetObject)

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
