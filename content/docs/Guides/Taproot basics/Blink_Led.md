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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTWSEIGQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFesptyuLj9ReN1j2OKFEjnKhiXILK2FW18KlG0BwJ5NAiAC8cfv7uKVAgs%2FbiTXQANQZyqztGQNwPEjnIoGlZYVhir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMsWhdtJ16IMLp1rOgKtwD4lnv9PEQ03M%2ByPFFf%2FJ5RhKn3r4fT1iyZSIlr%2BqTuUbDoL3SaBizVHBEk6gj9NlsisSrQaBKZxpC508XEZj1RTn5t0gbifVuoPK0ahckYazOQV8fckC1bBxRsFjgdn0D6qEdRCnOOTcPjOY5boALYJuswu88a5hqqXPW3zOJXOoioY10oINX4zyYzo0nRtOExQ00Vk1sObZ9xd14wpy4m%2B0lOvFpBAet3uRPnmnVRwDYU7idxVd8ipMqoxMHzd1dAR7M%2FlKCHYIgHRfsnJrDhkH9kPGSpDWxRJPzUOLBnAy1vxiye%2B2W0zG580nQK5wmVLdNOzAFfBIrr75CG4qaVqhBl%2Fj2tpHpkQDzqTbRZqW5BjS8wMaZPc2DVFfXRyfqPwn2DaahzNDvjSBzYKTDPxjLAchwULvpT9oV30%2BuFlgeocY6NWn8%2FUQ8%2BQPH3qdVRgk3k5flnBKCT0BLhi5Bv2fWycs16iwPhEC2pIc6LcpveOAeDllxGKoNiMndSl1E9chUsWK77mXdIBcZU3tII%2By2Y2UFzFj1jhceRLxukaREvkOGQSaO3lVRyznL6MTd%2BqHfrWJoEfgtNGUMERGq8wlI89Hg6%2BuuL8sbaVy95qdnOt%2BYaIw%2Btb%2Btsdsw6YTBvQY6pgGFyTwaBt7atFp7RojsmGoSLTvJs6bqMH4K8TYR9DDEYchzThsjdCAnkj1%2F3zwv%2BotbBcmm9BSpPIVOGIcDuviwko85xk1dmz8uGd0twnwOmu6IhrB7aVRQE042letf1OhPb0PLXayuiBbTVH5lWaZxy7wXGSiy%2F8pwcTix0ii4fKJkHSfs22t%2B1RPw5jn75y5BhPbgd0zbtuz1znIOXPPkW2TqHkBv&X-Amz-Signature=e8b4b49799ffd525155b3c0cc2c6ac83976d1892d2f1880171d8285e96c3be72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEENKBX5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE6Htz1ZWSHimvR58wVaD6L5Hut%2B7u6xHcoqlsw%2F8%2Fh5AiEAlCkHtGYgL8VXp6P7X5kLOs9XXKC35VNAMK1zcqzVmrkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDE4q65PSBiDVDrQk%2BSrcA8SSm3AF26Vn46lNH2aYtm1coEkhoEXVuPQ%2BETNtzLlRt8tivkfrfYJafhchrvFhqzt64tvShC2ZHBElrTGqbtogU3%2BjhpItLtZ1U95dLRzp7TjLvEOKbUPFBhOeLKGDjOYn8nfmcY4dIjyPIycC84pPvZ%2FOdjQanxPLpcR3ZXk7A1r4HqnIbIZ3xIrSLToUctFHwR0z2vChlEQQ3IYl9Ml1kah8HhyI39qCU%2BPpBQERACDF5EXAPGSXhtjJAILfjcIU7a1rkHxg7VIa33wUo38GgCo7TQgDu7Y6YbKy7kK%2FE6bfRFJyJmxAKsegCOVUGxg%2Bl96%2F%2FA2m8EVXKO2%2F6z1xmZVofelgm7uS8wiTnBh6RW3EdHCYxirIb%2Bkesk9bdQPYPRPbqcuWtkiCJF6u%2BIr%2BhyX2Z5F8fx7NFIWHTBgv4vX%2Blwgl14%2Fixihx6i3bjbayWZEOskgp2xmxdsB3uzdFMWTeavskpzgwuc9l%2BVG6Bz3AADJHiVmsbmv3u48XG8hdTO3e8WsQBAL1F%2BkoKP1F0stS5jHXxkzJhJPbpgNAsQ%2FyMIViggNUsJJmBFQKah2DtAC4bREhmEEpO%2Bek2EFS0BJKUKWndtqoSbtCTgWYeBs4Mk0hRNS%2F0iloMPOEwb0GOqUBdWK4rNNjz%2FOYxVa1Ex7n0EqRkkcY%2BU%2B0wTEpAYAY0bHhvWvvAXwF3koG%2BK9vmVbvjAwylEl2Xkkv%2FhJ0N0aAuMC49pV01AXesuDqJfpK4AP9IB6o7aETeXPlyoOQwpr4WqKTNloMow3gBJeScsX2ypazXQT%2FAgV%2BhtA1E0OFGvAzSuLh0CYOJoXlXanS8pGmo9Ul4%2BeNoonFVZuyLeG1LvlPKpN0&X-Amz-Signature=770570899c6b514524fc00962cddb04e6b91716e6c3d623f5c9c289313bd8277&X-Amz-SignedHeaders=host&x-id=GetObject)

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
