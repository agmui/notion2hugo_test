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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJDV7GY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgUa6%2F8PtA4p2Uf%2B2oL1J3amOsK%2Bs0H5UTWJf08ACVQAiEAzfhvtzsKo0Hr3MuRrJk4IcOforAYTKe5DWG2YakCtLkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDW3%2BgzYk4HIl%2BYTCrcA%2B8iIeNSDiOcGgFkTzXrTcPlfFZSCvs3rnKGdquHumDS%2FGUd66Wpdhl%2Fb2TvdV%2Fj954%2FYpxvklbBZe0p7DhztdaBX%2BCUs5ld7r6QcLayAPAbOloPfLyUdYOkAWBqGJyZf0Dsaap1Pq9ZOVIPWxUglUDP2q%2B%2FsDOGM4vpuWDBLl7uOKkUm7WwqDJtfpKwnt4ZCu5BHxNPDM0YgP%2F7f%2BYU3dLkNzTcpXh9fu7Xm7%2FlFW279iVx2AqJDEL8JZg%2FFGp4VnWO8smOI8afPgKL47TuETdhNEKbdwSXKUpZb4vvgN4Mc47qG9EB4VjPQvdvjusZM28YnYYJFFzXmgDVs9QCQjcqRSXL14PD7AtF5Flo70lxZFxMN2TohlC42LXk%2Bh1d7k9Bl482thfZkKlDdXM1nFL9z9mKGYYCLL0tsg54Vne5Cssog4g9JR7LqJw3m0lVBWfy3ckJZz8%2BaR1Oj2CydbIb6BWmDAbTLo6klxS2AjdsDYMUu%2F0jTc2YAgDFc5Bq%2FR%2Fox72lY%2FpzH%2BCC1U%2Fx%2BB8by3%2FjMDU5Z3Foqu%2BZ3%2BQYnBo0aBJ5Z2QgoSxZcIpY6FPAUuJVtZuFs1C4LedY0NhhU%2FkgnN9sOa85hlD7eH%2FgV3TTfVgURRq5d3rlMLaQ%2F8IGOqUBToGZnTMF93L6QXrOvczI1RYCfZsXAVbt%2F93h7wf7EU%2BFp0TZwKtmp33AlPkZMgBFLRfJADq4T4hdKDl5xLDTK7O9MyXNxpiyY0IqqwwtfGOzfykh8nbjYzpq5MjgqcOJWd%2Fpy%2BPswP6KkQcHXwDEIuPS8heSSISq3rk4FdAlm%2FvUS39tQN9iFemEH0JBP3KCeq7RkUvK19jqh9i8O4qZJwR%2Fg97F&X-Amz-Signature=584c6b258d4fda2083b2d2976ee6868ddfca2afabb72c4e37b3e3edf9a2478bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUP5X5V%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T150746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS3KOccW%2BNGZyn9UegYeLtTJg3JWXFHHFR%2BrVZ8H7xyAiA64Ive%2BMVoqpE3O7y8l3lLhCuhGOn43L0nrq7663gsSCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMghi0yAdI2CoJeYXwKtwDzWFl%2FlnOyrb12cGf55qQm7F1T%2BE2LlCDPVmtiiJvUVWcJXcJZdXiL7JWPlN1NQEqqDLpKaYHGR30%2BPD6tAftrs0YHrpycAUGNngcfykG87R0e7pUP9KZf%2FaZCSQCDELWL68os0XpfCdHR7rpeuZYQP3NegshtasoJwHxRoHKUpIjduKtNillD4K2kkCdFHJMKlLJF8kdFpZUnJKX9KW3sQGdHKx7q6TrUiQA2yfrNu3hbphmpgBZbaZYpUM2mW2Ntl0OfdqMjTZKw35UGVGsgKpFo%2BTs9KcjAWLC4RrhMhjrgJmKmfp0NfFv9%2BaYs1hmLTYGI8Z0FAef4fuMXrv1fZk56v3O3UxAQtsB3EnvC5jQH7La1ilkDgcadTP5xWYbXYXowMfqAk%2BhQX0LNrtgIA9bg9Tv1owa3snHpV4e7%2BEeoxkUP3KTpfY%2FJzM3tE%2BR2hVZuQqLOblKB3AIKjmzgKJE4oVEkYLuqNgZBoIMvH5wl91OqPx3F3ToQsS8kjBOVReW%2BC1r8yBD2Dk20GHSsOZmZYeYHA9wb5P%2BTEpakJ%2BqKbJGxZtj0V35GbeSpsMvKptbZJMIK%2BAd5q856N7TDD4EycrBdQvflPUUAmPSkAhMwKlezERXuvmJnG0wxZD%2FwgY6pgFAGRmDXyQBRWc5wlsQ5WDe6mIYqjz0x9IVuxUMBOxJffqLdGyKe%2FVLNAJaRQq78E0%2FjIUZEu1FF1pwdOSV%2FQ8tw9jDwivxKo3QSOcBvfNKyXj8pZsTNjUu3TbPeebiSS0vY3jZvHlKwz5hEuxX%2F5VKN4S8Fnp9hLgcR3BLd4%2B54d%2BOiChNKjquK%2B%2B2pa%2FCezPQB%2BC0t2EoyO%2F4%2BCvSEQf0elCGw9wV&X-Amz-Signature=b837bb4ad3631b39819506fd6a2fff61047e1e95e4826d74c33e64391ce3bc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
