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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LNYMJG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC42jfw%2FQeaWDIwhOdNszzLIYsB9YlQyk5zfa58kU25AAiEArrkFGNpDQHpBmyF4yjPAC1gYTp3m1nRXxICVAsRQ9PcqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIDg9yADaV6XbRtDyrcA3Nu%2BYIcL4h7wm4jFu3ADSedqiTW04O18%2F2E4PmSXSnPc4KiHlxVUMXHsFQwxdx8PdB7lYKfSp%2FpQXWd70xg6PlNITnFaEUoEph1DAdp%2BepM2tyd7B2RDIQbVPje4ntS%2FJIRlwd3clFUxGut6Gf6AAHB6mvd4yma4K81Jmzg4NnIeGnfIVHQi7%2BHyZFws%2BBBdCalCRbsZvr6Ih8BN32Os%2BDRHo7WQBNgFPorKTSr5cYqJIJnEXG%2BgNdgkD46DabkzjT%2BiruuOHmNiROJk2c7kTqbd03rP%2FTShlqx6pp7n6NPuaz0HIuk9PJBT8vT3R6iaKhU4W7dxk%2Fcv4M86mGFkLDeQp%2FhtsKAAo4bhPF8XOPWDqx%2FUWEMjdHFVbBeR8scMugXo8MJnXoxtlnN4WIIw29L9XHtCBNaXxjnbOfCEjND%2BJ5uxKkLkmceu8utRQUU8GJyuAS4BoG2fWTGd%2FOo0zPdXqAmgMusJwEGc8LfBvawHju%2FToV%2FlsF0BtgKkaXd4tXMgr2PnajQqRRbmk2kbKpTEP7yT5m%2FLgn84iqIzChgU8kPByB0oB1k5vQG9D64xEKL9o0YPLPf%2BcuHGZLawxJJIe%2BP4J9%2Fyx1E5806jqBAbQ9XJmWjxhrJZQcwMJ%2BqicEGOqUBtjmZIZ%2Fbcxzyc5IgIfTiLilhoOIZxxCiIzSWtxT4mMjFD6FnRN9GG43VZJT6Fr5PbkFnVVdPso19gGzF08DyaPMMHyx0VMdc%2Fa6dSKjAeJLOXVVcS3KEFdMzubFKWp6wSuIK14px%2FQE7%2BZ%2FEyy9xqEpag44aJikW%2BMrOEpNjESjCSHoc5DQHEX%2FBZwyQ9jA0LkZuaTxs8rqTzematUl%2FOTYYlEHa&X-Amz-Signature=d06169c60265fe6e0caeaee3bddec9fed4135fbc5fb771cb23577973efb36984&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYLT5BB%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIH%2FqbzLLo4s6VrDcFLeibwmP3XzCPK76gUVEmLySlz3JAiA3C5A8vPPu61flbDLqglDgnVi7iH8%2Bru6%2Bzw0EK9iDTiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyhM6aevu4hJOnFGwKtwDnLzQ1z7h%2BXOLKZybS7hJjY1GGqLaYTvK%2FixtoevHx8QZZMuhUNFwiNdV6zYs4IPb2no3SVQ%2FeHOBfiMOhEHzi%2FNKcNTV%2BfORk7eqS2vqf3fFgjdn1JdsCAa%2Fe8DsiznFiLxd0enLe%2BnLtzhMAnbfkrJELdkD9EimkeZBdMom1IjEUAuiSnwwDt12WENKj7Zx5yypNu9cF1qsvq9G1x%2FtX0rxTliFejatzIs97cr70o7z2TqiO2spoBqD6GR4dcPeW5kmCwuhjv2a3OXT7JyfBuhFQjaLqeX8o3ymlwFpc8TcN%2FjmMGBt9ziUp5De3E92dZFEXtzdFoHjmy0%2BmZoqL1lw%2BQit8e6PwPa8M2FG1OVReaNVxGWGvn03X7yA8YhgpF4yQI%2FuXsaJnJ6FWlqS3kAmo0WvAK5%2Ba6p1MLEDshd1rWrCVtoKCwqHA5t%2Bd6j1Kvcf3hs8MBapHyzU3RqSmP7WJH3CEnU3T5DhokNol7ywx7fYolLfWH9It4WqoLUgPbzskgN8%2BhUs%2Bqq5rafBSYmaSRCtTs65TwnYhgio7AEYZd8UQ8tDkekGen2xGa5eSD3AV7E%2FUh0sgycAIhkoF%2Bb8DI6GCwc0wxW%2BbJlmqV%2Bf2IMS2k8jnyWPbHMwvqmJwQY6pgE7%2F6ISq9AZx5t2XsGWGy6POPErMSvRnslCOFUBE4qVbcGPuUrXld5kd8cISqalpXb6Z8598JBRX9Z1T0kz4PRynFbCWEwe6K%2BywauahQSJu2YzLx2uXM5s4HrIxG5rYxYNCaqvD0P3KgS5YiIo1ZR%2FxEmZMnYv19fxDRjwMVIz18BlDaMnieHau5kPxumtbujKsoajSoDnZWTwAmgjVW4u0bJJOsQY&X-Amz-Signature=033cb60302ce013c1327d74228d10404bffbc83c41d36d79f3967f62728e7b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
