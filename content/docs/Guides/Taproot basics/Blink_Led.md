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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I5Y3ZVU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCYD2VO8K%2Fyk9T2EYEcZnLbTG5lbs%2FkMHpc6LF4C1eP5AIhAK4C5i%2BsfzCzq78HITmFTu9QGQXkCZZmauvgS3Y9EQtEKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7wua4DwoVjDE5ES4q3AOR0XAmR%2FWG8If77%2B7ME4TkVAl9cR2Sgke7rSugcxDOmH1x5%2FMWOw6VpLxTeGS41WZswxDfSXvpi%2FiARp98%2B91uk62dw8yQ6%2FGP8mXyCAMVLxggMmHkD%2FW%2FQnIhtOKsGYkhbhxriORo6pSismH5D6KPiOQdvC7fjzSG91U61Z%2FHw6EjtChcsZPnKeMMzhqetrdWahx3%2BGnK3VxBzuqb5FVikjuv0Kj%2ByoKQV9LpHd0p5tt03YxKtbvpeRijFon4XEmvcdpQllDHxgDpDYXALW0nDa8T%2Brm8p1Dbw%2BhZL9%2FFt%2BVHa%2FBJI98W%2BC7oqbJ82oHswkA22KhzT5s%2FH8ru8TJroGWXWeL3uJI0I%2FTILhkI%2BNAxsKL7qVVH80JiXsdPtbR9HmjxhripDTI2CqGHetA0%2Baop6lJwxYAbyk%2BsZ2ieDIHsUC4XN305iwZa9L5HDPpZgNPkKJSSj0XTOI9pTNdAl1%2BI9wg2tq%2FLiaGOEbP%2FtILTOzbHdfO6d24oy33tQ4Fj5EsieH%2FtAUxOXeakq5Yb4H2RATLkeXGOX1If3Ia36x1oZ0bazK2GfKVVejX1OjjLw67XGcsx3BdIZpXt%2BQkCy2mRGOZ0cIAh9DD2NncPLoZZDqlkKL%2Fqd3bPSzDyip%2FEBjqkAQ%2Bcp6PEzfjAyAefvTezqEQHYzg40YUwybVf%2BqwH7UvBNm%2BiMa05e1fznpsWsThiTmCZJUO3v%2FUod4vN54L7E3V6xpp78DBGACsjijeI2%2BMz25p%2BxUwRS7b6OmcVSCNgo9wHkdLPUYpUJwlDGYY6g7QExsbKj%2BT1vn7qis%2Br6kLJNL2mBmgu5wgxcQDiIFiiDFwa001IknLjZ7mSuAdn99I%2BCfJQ&X-Amz-Signature=4e18c70176e9934e1c950bf550305027a22a67ebb5a1b65a5b91c65c87871ef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH6OUBGM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBEcasNsaYUY%2F6jPxEwv5zHol1wIntY6Ef3OaUsdRbonAiAK3v4OFsS2Mbscr9rCTCH8%2F%2BQzYOw1q8loxMzTi7SOkyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY9l5Gw4nKai73HrcKtwDWLxoU4ii3dgkouL3unWjv862WXJ46fFzQu%2BjqXSyKybOgYVo44kVHTQ27xpC4msY5H4ey%2BZu6Q8gZ6z485n8yNgOnEi%2F5gaMZ6ddpSN4zg5IBYca5Y5HMpkzKPOsWZeTXnA%2Bw4BphZyePqPidXdnvDdnydLXKb160ZD0UgPEeMRaujy0Fe7pO%2FO%2FEBy79aCG9WWP5YC19q1QFgjSlapR%2B6u%2Bl2Ona9ltcLT38rzs25XHscBb%2F4yT5hoEX%2FBevQjd9O6F7jFmYDL2e5I44dKJ6gdN0gvCS0hlLjl%2FVCKFZMjxy3wGcJdR0WyZkmvGPJKBuPwMJktKrL%2Fo3X7DgKv0BjA%2BmDj2LzUq5VLL9E53qMmp9DDtS0WbZJfWd25d4Cow6k8mtXDRdv7xY5z1Hr4XVNNlJgVvbBcAcquzbt%2BQEQjYyyPdu1JhAis%2BIL%2BjVtslzGQotv0DEwVYUWBswrkPMjIj6ov8Hxvpmd40QSoZbn92OkxLoxUCb68%2B46BlAI1C3%2BgVrHIpUGJ2Qpe5QXszS0K4hxvEbBXnBNvK7ojPwM7Rj0nhOMUBOwcekHYxI5Fz%2Bvki1wZFc0sJvrTZL7pGor6qtbanXbM9KshdmIp8DN2RjpZ6jFhlDsZxnhIw%2FYqfxAY6pgEQ3%2BkkI2%2BKrjQ6tRiuNr5QUjD%2FSNMWSRGVLmM62VTOlEBr1YrI4ON5nNTiyRiwf3F0ugemeuC%2BX95rseBNhIoPNhQwFA88AiaQjt7m4ScKNEYdhTA%2Bt5g3sxMlAa2T5BexIQlPKQ6piOyzZmXZ%2B2GofoWIBvzECGktFIQ%2F0UE4xT8fwbdZAX2gMnC8HHqMEwYy4tu07xF4VBC%2BnHTfDyK6GCzFY1DA&X-Amz-Signature=565827a64a4059f35090e09c90909b4d82d932bf85e1d32f6e92b7d3f03bedf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
