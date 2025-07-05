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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPXGKCD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICbC60Nvl5Vupt8%2FNvfw8dS%2FVrx8vFwiyWhxWDNd6k77AiEA4yNf1lozDp7carUZhiqjxMhy46tc%2BkB4kr0ZXVvrKcEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCSY8gLD0XdH%2F7aisircAxuUkaaHo4dZP7g%2FWjPxJBljtoQFbYOPH7xjUwQlszSD57e5%2FvQrYFTc596S5FEURTS612FiyeUYKxE8YJa9Hn%2BETXCgCk2T8m3RKtH2DyQBuchvy76IRYP6hi92uVUGHc2wdV5dEqDuRZgqzS%2FMV17t%2BWM9anXX27XBAoc4qCZY41ZjLaqcbG9Zzbdo66KfOUDEr%2BJguwgRLcRWBPe8gPFDvHWOU9DnX0XNNvhs64Ox5aeZBvCUDNIkL7K7dQyYriwQNaR55c0vUaqINmgcH1J6SU5TOczdxExst5yhwJX%2FQoKqekr5kXiP%2BQ96Hq72Mp4wmkW6xMn702vVi3T1Ein0zVnGCdiAmALdKa88wDp2MENd54o2zEQN09wR1J3w7ijf%2Figqdg5FYS5q1Nqu%2FtfemcZu%2Fp6N6eBidIRM4SGjhRPp405spflDaPBqkcPazWTk5k%2BFWT0H7hpNC%2F081hPU%2FIYWk7Xm%2BvDolv4OEcwYUzOUjGdunwa29u6%2BxUqvPdLOWyCF4qeZa5pv6uXDOimra4EOyvj%2FsMT36QPprfCCAxRTYTjncnjkciH5tkpudPiAOQ%2Fkez45A7tLxBl9rtkY9G2Eqhbz9AZ7sFD9bQ7w6A7w8QSVeGfiGVrQMJiqo8MGOqUB87C47BJ3wTPwA2Oe1JUD0%2FqrbGpy0rrDPd%2FfJbO2cp0zNClPwSHSEXGeV8PGKpKBLFbceJPJv%2BCXoZsjYKJFZSFGlaVRXQygnCboFM2InSn9TEsBRZTFBuTKuQ4iDlFv9aQ4n2eCVzQbZlphLQdvmP5yaVVx28P%2FEcOpuyAazLBgDtyhpmMfIRChcrgP%2FgJlmcIODigvCtvlNnR7cFW8Xwc0Y0Ex&X-Amz-Signature=513e9e1488896ed455a25645cf5d88ae2bb043328e75449630150b70595fac10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633F7JJ2W%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHX%2Br5wDyjjqB%2B9w5L%2Bvlt7mx9hsXHzcvwZjqYwZ8nu8AiEAlnzqqDdPscPpBvX69JjjtCsbvShydWOVmHCKKQsIWWcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGLcBwo%2BIYkv05NseCrcAwIq2OWQRVpv2lJB4kut8KRzXi1Po9NqSsb7jJvuNsJui1hdG02Es8Nwt%2FVibCrSFk4bldaCR56lGsegDq0GB3%2FE0eUp3FUdrD88Jpag8jGPfQ4MlDo4xIER38%2F1YDGGvJYLjONU3Q8rRBLm1sOuLW3QbnkTYFXgLPKKyD%2BxQMo1o0VQ9WOaLIPxUDhHLBxJYzQV2nUIsMK3TsgevVVC6QN%2FGavIJLu9TTpVT6K1nLX8K8SpBse7Ir6V01Tfk1euYmNeLldOkwy4HAGnFtyruw5XFNzJdI%2BuEGU80tvlAoUWVZLX37sR%2Fl%2FkhSda7mbNIGkRjfKqCgSQbaoQcLe7tIRUgoXJEKl7cHPcL2KOGB3dgeUpegzgdRFTWDITvEfAJilNu3xvlHiPKrzjIZNCty9JR4Pmj6kUCf92i4ByH82W7P7Hx5qpBgNUvGledgm07HPQjfLgrB6KzS5jyBZAuS13nyxEMe0LnburLNGFrJwWN4tHNTg0yO2NOOHe%2FkA8y66iU7bPTuSR1k6D1yAxi4FN73%2FcPvraKyhxUDlN%2B6h6lat%2BWdoZQoPNdQt3VUFZZYTcNqkwRmf1RzLDjJZf8hE1JvHPxS4UyN0c6JSpDe1wicvLO6wflJ5hq749ML6jo8MGOqUB9HMFnDQi%2Flf7jLZYcfO%2FzGH602fFYqZOjF2AQdolEt38uj0e%2FJz%2B8ZgBj5CmuuhnzcSuVTqBeDvWgMkZWLkjG1rWS%2FtFeAowJ61PM2VqkUeIg%2BEtlfFo%2BMSzH2O6bwhYqAu7%2FZJUxYzGQBp58995GLjYSo9pE8tQL0BECsAKrCRczbVYdayAHsqRbLNZJrddTG1m0jKDwHnvT6ZKctXopFtvG6ta&X-Amz-Signature=5ef40169fe21afafecba3f52a4b1a2319d30d4421db589ea9ded8ec7f450578e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
