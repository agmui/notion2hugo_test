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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVONR5F5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqRmyLpPGwOTJR6YLd4hkeeBtsWbpQdRa3eHrkhc48hAiEArlEZ2DKkqMFaS%2Bl4Y1MaKya1eAg0Mp%2BIs33X6RBISwEqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqMUzudE2A1%2BNFYxircA3Jv%2B%2F8zoJiFqGlgZsUwQlG2TpuNzE7t9PKHA5JI07m3R99xMMxddCvw1rswr6%2F8kWkiFYjTRFZrzzXh5cNIdR%2Fz8UwjUGWFRYTCmJbD%2FCAm6BtQHHaDxfSVMvU3s9qt9%2BKfYFSLWYa3nLs9wWtZ%2FBoozcKo%2FWx33KVbG6bV1Kxcv6r4WGzkFij7HUELLnHqfrnOzhKKamljsBL2hw5Jm3MP8lGTQhuH%2FcwwGJ3XMQVc03mDKDR%2FveRpvE7PI5kXVdcmapA7xd7TuDdMRc94TSQAo9QBjaFc0xymAc1Aso4WdNrf5RUTqvhbU1r1ywwjOG8RksrC0sU5tIohIdK%2Fyi4U7xrYq%2Fe4zFOYJFBi4Kxh41uc7PTHrOE%2FqAud%2F86SKFNJKHAJERyFkApUhCX5CXD02g4LDrTrtvV8D%2BBZCdlvSXW%2Fhe5y70Bg454xfMNnExTqB2tdcg3%2FdaN0kM576LCaZNhkrgUnj1LnfHzLP5PBw962iHEXVI8ty6eTNRPThjPQxL7hms8gB2827tILayjMzHj46uCJYyGtLmyHuJzY3jnGf3WJyNlydJxy3YYU%2F0ul9y3NgMWuzen11maEbsjh70Ib0JrmlQ1lYYcbNHZebpUG5I8hsLqgKIu%2BMN%2BP%2FMAGOqUB8saZBSt9IW6aIBz6tgE5B7hU5emQWXprYpLaDDXGUVAYyd1VVY%2BXmHbvy2tjBI%2B8PtRA1tcWVXkGc3XU49W1r0uovcFG920texvVxenepTyUCtSZVLNXTdAs1gUh4Kl%2F6Vb9%2F3WGyjM%2FDxPi%2FYAHDOqp29GLR9ui8vY2BHFMRWZ2MZCpfQwaqDE2dQkGoqwqb%2Bo5rlVtK%2FvD4p1Wd2sNW9aeg%2Fzw&X-Amz-Signature=ab838b00e7e2dfbd4828f4f5c4c4b73d37ec052cd736776f1d91c89841c670f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFUL2TW%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU1g0q453TdDhpfwroBvROrK7Quc5but25lg3YIVDGFAiAxUQAhQzwcsZSPry4YgtIS%2FYL7iy7AiEBIpn3wx7qC%2FSqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuPr%2BffOkShKwkBMKtwDaHBSvGzY%2FAEw84AqH%2Fn3tjjd0yhdzjtQpNXhJNzMT0fmT7hDYRgz37E0bkwO1x4wNrwBB4dCkvHXgCYJ4NzMAYwWeZzzPXKkpXeaY13YLu4wxNJCCo32U1iM%2Bq%2F0E2FtSNZb%2B1%2FVWHJV4AS6%2Bsa2ClkgctOQkeuFuRYWIIDwYwW2bVubejDZdq09xPvfkQSC2a5asI3PrIp8cForp5XRzJ1F92FDSq4yuohI57t60ne9NM0P%2F%2FTE%2FiXobpLTCJg2%2BsidVrDwVfs6ASBloOE4%2BWUv2ZJ2Ql7487UKF8i1qn29FqqwLK8n%2F4UPUCirM7h2zOgM9uifZrZ8kGCm7PCzKDdSEVTjGrxuyMt%2BcvUEwHL7UY79QAIxn9FGcvLp6Mf5%2F6u5HqPVJLxe9baz0h1bxNN2cBBfiqvAn%2BvdWqwdvdn07ampS2iFBQtgE9AyyKx916tQRv6uFtt1ZNEutXGJkYVb1rh994UGZtx9g7T0UuSL6ucd23L955TXV8a7v0Ex%2Fgaub7af9ldh7pwvRNA5zEbVybdKH6UtJQRGjDM72oOnqYYhVU%2FQLsbuMtXGeH97Pq5U4L%2FdXXM%2BNBwObtS58dNCXJF16FWsXImjKGYotwIAH%2FhviwTnalYggJYw1I%2F8wAY6pgFUWEQqvg%2FKy8huBEmBjCxQqKGxuFCdh8ztDhka3WDoCnnski%2FaOjXqNZcYB42zMlamSAfNgQ7A2WBk31bNYyXjD0hDgPBHreb5bzjXwJ4ziqbbJKCQZaSmj6MuiUKebKqHiSmi%2BGXh67RUYZD2VbwmoOvMdLjdqcRKLdaZF6xkwPB%2FVhiO%2BqQEXFZoTXzKpJni1POCYh2MgoOJ2DTlq6ydyj14ix9N&X-Amz-Signature=0118d52d2931542efdf3450ac3fc24ff623c69d52c715d126457e6aca59f13dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
