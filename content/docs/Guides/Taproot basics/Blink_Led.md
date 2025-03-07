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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIPIW5K%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD17YdMbmXY%2BRrlUBSfeMV%2BRegI4plSX4H0onqkkt2sYAIgUnHS7NiJljP24yKf3H%2FaEtVT9RwzhCRhqzkTbmhxrK8q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDA2yVyq4bb6arab7WCrcAxS%2BnxCv4Q7JArk17BSKhOn5SWtogH%2BlWC%2FBr0102VRKcXAgFx6I%2BC4QnKg%2B4yAru57koZY6HYi1n7G9HminOIsV6awQ44XYvrARcrbIiSn7FoKxKJ91fErUFr6rLvQve6rqFezQxZn3U8oO1EhVQz0kKZOF20dktZrJk01U8324GaiuVc0oO3d%2BwC24paoEcomRI6XvRhx%2BhBDqbj%2BFgYs69YOV1YVeVaA6kEBQq1reYgPcQu%2Fnw1AbhYP0X%2BLMdzBozzkAbQup%2BxZQaLRw5C2adVQDjLG366QzwWDcG2YM5oneT7x1gc0Q%2FW%2Fcn5yYLcMPdw4%2FwUdWTJMpmU8Hr%2FBKJp3L1QhgEa3FnyyKCrGe8aG1uhiE0Yyxv6BKoqyu%2FtAXS%2B4I8LfZUMEcuWWXGVUIJDiGqkEGyVGpYxB%2FHVRounR4UY6Q%2BEeYgKZNj7uBfd9Ik1N2jIiz9qy5TjUiZn%2BpKYzltvu7basilxI4Hrdk9g7Ra20OKk%2FM6pprCtJ0iatN05zHmSMFznAfw89uxMREvxCHTDfEu0zaynjHPYa%2B5Auiduy0fcYaZnjcChC66lsKX2WPv4Boh7KH44xmd6vz57dU1z25HrxDRxq8H9Loir8d%2Btmff0wyH51nMInJqL4GOqUBUt4C4vwCW5jtQYPzzrMDVlGE05PlxWXh537WqKDbzTPJt9gcfT3avBD%2BzYY6p1EoGD8sCjg6wTtlZRnbZUEMUq9I2gu0Yqn4izRyG5vgQMkYv85wKxpaXGC3U6HtMtO0sQUjgGSIjbyd%2FDeDZ708wLF59D56K4mNC9CCwLGsCeYIyz%2Bba%2BWVgbZsmk6bi7IxlUFcznz5NYVFHoXSGxRs76zvmCXA&X-Amz-Signature=d24d3333def9b5e207e8c2d12bdfc9c8e79df6ee2741eaec74dd99538c557fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3IXX55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BmtWzWRLZ9eaAHY9FKwVAQ%2BGWQVF0Y%2B%2BHoMHrc8QEVAiEA7HGJTzyCVyokx8wrQGCXLsyXJIPdJ3N81UOS4zlog68q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLyj9WJpw7Cn2QzihCrcA%2Fmv9ba4ln1Cd0uch1Pz5BPqBXBjZAZLaJ2bPjqmsUV8BvBeSFkFvzQYRjOUAIrc0k7zTXc7y3uE%2FA9B3AUQ0%2FreFtEkOWq21JsS%2FFIxALvh7akU6SJLBAKmsUva3e%2BRkPatVAre2%2BkPVWxTivAFbQ1auYwhWcGOEUe9szclUvpvJKcjaRTpSvrBcm5MmRhnoU1gHnf4t5hCx2e%2FFjW9hYWBEQinA6rWLfzczNhZkB2XlLgSaulaZD0nNtU65WXlAw1JEbuwaLhBTVdoR8mOxtZ3vAnGvxSBTZgYFB5WK70LRlEnP3Fx9tE6qZRqcV39ul8V1BN05%2ByMyEqnP%2BAtbPDJye9rocD5bHo%2B%2BpVfqG1nakjOKF0FTsO4AOlqTtQVICBuZnDihqSqjjeVprBSBOfaS6U9SGvF2%2FsSP8N%2FKS7XId8Gfpf0EhK%2BjgbcRUOxntT1k6OizSNhHAzbdClapOaoFm5XvYcC5l2YqV5IHGtBov1%2FATzqtZ2qwOm7efF4nfTH9OvvMlOIH9e3uj20oF5n5%2F%2FzTgm1sRf8F4ZDLW3kiJ39UdLpOfsYnblNr3qgoNRyqFGyidQsrzTk%2FkgqdkbBHxlJq5xzw2Ert78uQN7qGQyn74iJEnxZisS7MO7IqL4GOqUB83EzVzoC%2FgRhepw7pbVzvbX7BgsNzBQtcN5Zk%2Fe9lc5MYuirKT%2FhMDjBhfTwT%2BW4Xxpt1plfKMV9LdKM1NqAfM4A1ajdYrCmxbhQwZqJnTQMrWaRZjD%2BP5hPjpW%2F6AEouhtvIfp91HRs4g5OpasFO93%2BOvZtEDe%2FvfAGTUUWXPVxW%2BW8fybZXpYCtUdUDTJepO04mEXI3rKSpV%2B9yKgeK8%2F8HX0O&X-Amz-Signature=18119decdf5ddd8e946f58d0b48c6b8ae33b8978d4774eefd7c7507eb864d236&X-Amz-SignedHeaders=host&x-id=GetObject)

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
