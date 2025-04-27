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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ6ISJM%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnkXax73oikw11Q0Zl5L%2B0LB7ATXc2tPRTUjsZTldddAiALkUIAO%2B6gUbqjolynVl8i%2BVwQ4qs4AvcGkIUlgPrlHyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMIB0478OfHYCC%2FtZPKtwDtTXYtJriSbRv21%2FHqseU4yJpQ%2FOv2dNspn9AJzJPE8tf%2BuByU2%2Fj4i5p3oaftGhAJlU802IjVGuOZGdYY9vLx4PnTUciUKYHNHqkSw81UvUKcZXDpqDQ7UY9DDCUXP2PGvHvusIQl8p1D1ClZ4t%2FbVjy1A%2BVTSjp9QfTHpNMtHNRefjcz9cXLAv22bBYZaO2K%2F4gZurSpCge%2BKiYRD8xl7dj6Nr2bsTRYUtAn0uNRMIpf0%2B54mCidl8%2Bgor9MLy42POdeNt%2FF5WGBRp0XWqIszCsG%2BhRKTD4sv%2BYfOYIdKSHL1Zrp6oDj%2BB4obvO8vliU3SoErtuYO4sH%2FLRK4RK9A9JCwa5Zh2QsHfFuc5SrxSz8yXjajIOdSk7ShubxAOmAg11vMdxUryn2h4Y97NIa%2F6uIRi3fElOyd%2FPgNo5wqln2WYPWwOjuba%2F%2BBAm1Wvc2GlHgWNE5UllgNLG2tCJtV8BhCLTp0d0bCRvMWEtANxttY8UGoQryoYWxxYGEeTjT86fPC6fJUCTAq%2FZtXkPlP3B2XnVo8FgHZ5YBg%2FaXDMLu3STA86e9eQ%2FH03nia8RgEsaWOA%2BZxMathGrMUs9qmEBgL8Tn5k%2B5frW1QRkNxHX0tGNmTvs6KVwjB0w6ey2wAY6pgGXTHtOTYbFPUxtCVTXbbs7hLPgYFH%2BPYUSW8BpHzxGLKRpMQ2rhDHkNPEqqhrYuWH2OGagtB3ehmcTbZj66KNV9EXzl6P%2BjOXp7I6k2MSWQdFgsfP3cdbqeLveUJtEYEOMAeY%2BVGDr499WK8bjQg%2Bq46u9qCKhzyDChalkhA6nG8hax%2BmSK7KA0NQ37LfMGuwOhceoEutMDZ%2FPP%2FqOW96xfbPigDoW&X-Amz-Signature=5a32f8fdb04a4e056cd443f7f0dca6c1a468ea0d542be1ae60d559e6f2c1ae1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56VRSXQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcmgVXSNh6P5UP9PWwhEOuOp2ZRk5LZytyjGN8e7K31AIhAMG5VRwW9DtYZqTtpt%2BKCHdSbIwe2wVR29NF9vuT92F9Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx%2FgewaH%2FfM25cS5dkq3AP9rSvFEIEdQQd36lYtaJu2TKQilviM5RNHeaCYQPDBKI32mh%2F1TiOFkqBL5yZTmdAf1zbDn%2FtMrWKZGKkXKZtc562u%2BdnKE0ZFHBeNH51%2FyPajzS1MCDRm5VqlxCcAUQlMVXDNp1sCF%2B7ADG2MfUM0YUE9JdD0CF3zud7I8PUcYxzR54SPXZYIByVze121ZTKbFEj1iMtIOJYOjjTUWcF2dCMpHYfSF3rMAGSQiaXpU7P9ralAMNg3oXOZvXz%2BDVgqAnJLVaWvjILqyY0A%2Fei5hOpPfz0j9wXylq%2FqibeK7GY7jf1dmHpZOb5ZW1CJMPPAjm7yzpltJCmHTL4bhMy%2F%2Fzu9Tmt51x4FcjXoKOBy37GhiX71IN5GYyeOxtoDBBPjVLBZBHheNNDnvTPGW5XcdOC0M3iR23ixwB0s4TS7LC1%2Fv%2BTbmtwmxuOb5NXG36FaUPUlGF67W9zSQWl7UBnmWWbpFwhG4hXFq4s3Wyw%2FAsiAOtNadF8c68Jpwcg1siVXnKGsImbHkblXUH%2B3KIKEBGf53VZqL%2FjOAXx4RnosVpbcLZInRpnZwWnvbUcxdtKZ03AMzNu2FPpnxmfmytjby0TO%2B90L6z5%2B8g1a9LitZLl6dnuAi11VbwkiYjDn7LbABjqkASqsnKOt58MN79%2FYTcLvg2UqDAThhncKAwjNMpMylTohZIWnWlxPy4HkReHWlnRao8uCyMotSOlR0iZRemfL18Mgzc8UumN66ygIrp%2F9ZaaleFeMA4x6Ejv9UhsXv2mF9qomJfKFWcqxVWTCGZl31ZC9GAbm4e%2B5kBMBKQeqASBBTjpiaEkczQoKNqrsK8kZQB%2B0QHfAaxgX%2FEbh1EEdCmB9vCtJ&X-Amz-Signature=0803b52fc4cf1eb47344325b82059cec2300d3dbb25bbd22566c6cc74477e461&X-Amz-SignedHeaders=host&x-id=GetObject)

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
