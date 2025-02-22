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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3AOYRZA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS4tqmD3KefUgTeC9iIyJ0J%2BWoaNaNSIP8wYfHN034rAIhAJb3uGci4nbieBcFkCF4k1C1IPaJ77DXyyKTxFtMCJeiKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMhQ9Z1Y5xQxlEFsAq3AOnEPANPKm5T2XNHTye%2B%2BIFCiEO4COP%2BYbFRioLLQfYHo8EwMD2dLOH8PrHZY%2FmeJclcz2FjD3gvpy9KFChKDuutOaVnGQg11CdBPzjUG2FtdbcV%2FxPLdkyd5ANGU2yZaN9zitmCK7VMRNVEyPjnHoY2VQPMue9E9%2B7djE3ZQRH4KT%2BiWStbm0FAEXyB6MDVSi4n3EPvlKWb5NXbo4yg7aZp1nIrHdyJS%2BCfjRvHtVvoCtBf%2BgFvaE%2FlzmFnvcd81RzPs7wqcZJNmMFEAj5hGUAyeXLZlxfh%2FklfwSN6Be71MFiTy1PDOo6eAM8dty2bZwIp3spgjTqmr0laSrPjRZ7MAzewovFiKYxyrLS78UGzIV%2BD%2BsdT1pBVej0Zw3ml9HyMTHlDvJBJ8BZjl9efC2cyc07T86fYgRHkRE7qsnGiZ%2B4P4WIvF%2Fu5aTZjOQcGtka5CzJFJuolm1tD7Fn6ZHaxmvDyzbwSBcLdGMSQXiY7eNDdE%2F3gigvSr3x1CnOi7Zid%2BaUa7zG7eLeDiJgFWs9nbgJCNMRP4WysdMzTpMfh8Ohoqim19mlBNyvO0%2BrSOYSMt2r1%2B7a4vU8IrPYvXLvWJlOZNapkWTG49gw13r%2Bp%2BwyiP8A1ovgjrGZBTDVpem9BjqkAaJkxz06iWL6nvSwbDKik1cYKnnOHXfUnfNmsxiKbN3yA8mPoRG%2FYluHHmUZ7aFpNNraXGaE9ohnA%2Fy1u1hhWrdEKKK12CGdWuQ0frcCuszf7sh4kTJEfs5R3wtMBU9RQfF2U1Yma%2BX9fT%2FjTqqBEJtfeT8Wpt9VrQcLMawgYWvKVEvPQT8A5zx3Xh4RSQobuhyFsrAo7brayubUqy0BM3nfubAT&X-Amz-Signature=a961e6f97af070bc92ac627c64a4eb8995af0a1399f4a1c349746382f9c371df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666645SV5C%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDbl78pqOrg5fjBiP4BBVPLJNPed7WbCjNQQlVlpUphAIhALskzg3rmhJtiYp9fblXR2e1E6Cay6kL8GOgnI54Qqy3KogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywDAxFkj7jYAz1JQYq3AMx4MNFnA%2FcAYv7umk%2F65dpzvbIZ5hJi1SjFK%2B6gZJLaA2Dx%2B447T6Cc24TBQiMfmB%2B9ByIGIU18Jdinr8jB0xdC%2F1am1xPvj6tqRjk1eRr2tD3U9L2eFUk4u%2FNSRIFAgBcqcbJ0MYAtyFQ%2BvIGvoUt9L1SRuPFbvTflKrUs3s4upCb9ms9xtZNgmDAgHstnAin1gps4xB4nQ%2BEVlxMEGrjPb%2FskdDMZ93UC4MRdy53lcY91aHcrCJ6CsWBSPQG2zbbwP6YpTqA%2Fbvp%2BhRe3DJL8ipDnIYbOpkTq4XW6RQj5jSjSuYFuYn7cBGQY5O%2FG4yAUq053l9gEWgupezxhr1fJqEW4rT1QvfOxankLwoT6KU1buxdQKm5x0NxgMjFfqrSkyhiXGZdpnXn8XMkaYt6m3u4yL12VusWgePEhIFly4NnmHrofhHfxfTH127ijTWXMiWGV0re6D7xoXNwvS3veKsB%2F03kY%2Bp8GNYkfukqED%2FGDhVEN5bZk%2F2i%2BuHS4SxKIfU5O8Hd4xIuOn7X98od7kEJ34CIiKJE9D4gLXlMio30wLboTVjsIjmo619pOwIUp10uCR01eglIcgUQDjDdG7Rh3QBsN2ORPBPei4FVAALF%2FR5FKXvS2w5ubjCpiei9BjqkAULBi1zazMOU8edXLc0nu%2B7LsOzbPKyxqHiibi8CW2O%2B%2F6RM5V1Wt0K1JDV%2BC7KrlV0n%2FkpMEzx%2Fg%2FfYEUs6RN18g44CGiyGscZ8xUkoH%2F06fSILPazpRw9aHIjHZ1vUG6WEY8yiKROrMLo%2BEgqAOB96We9L9KDmj4CUIRLEBMzoCgoRD%2BrTn5sQFTTfxrLi%2FwSOfLtDpBjLPbJnbLvnEXe4XTCH&X-Amz-Signature=23bafe09af08b73bf687db8c3b7f57e3d2257d316a7b5b8d3d168be9c716f3af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
