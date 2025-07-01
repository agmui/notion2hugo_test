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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6GJ3MPN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtujHP4UZOX7TSZoRIQ9MpnDGPfsD4PIwK5hrBZyBCIAiBKE5VnNU%2Bw%2B1%2F4j18yK4FeIzBoZaBueV%2BPGHqJ0SV8eCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMzqBg62av3KMinVyKtwDzgk1MTVenfDHtpuOWBbyFX1KKuH8JUjfQvjGKgSSznt8GUhjGzyNuFBEZFF9Wnn1%2FwSUPu3SAzZMEG%2FcI%2FMwilO75Qec8srzNp1txx2LW33zSznNC10tFZ77SGXZ2IL1x5ka9hPdXjigiDtisCeU0h9ssmVBkhyFNvMUidhRHv%2B%2B8ZdgmJ%2BB8IXOli0f%2F6aTh%2BJH6XgIstvQ6H7b3qxMA03cGHDik8p%2FybhBBnuulQVSj8roBBsOavBAvHI%2BhoAOoGVQHkmeUSBRC7Fg39nMW0g3cvDw3%2B2S0%2FhY6Av309vd8PQopsdYbXFlzhyfI0JPUovrrmKqPbRWZoV38P9nopvHy6arpnK43mmknekkNyOp8kJ3uL6zFLiN6EvJQtkBAATx6U9G%2BRX38xWiQU%2B1THi3Lkc6zLzkZxQ1I7dsCvcV0bw%2FDTHqBPA8YymGrCHV%2BeTEkmMQoXY6ZqXkm5NGCBxUAE7B%2F9K%2FdeZKMi6TVNQerkhLE7cbU%2B6GvyXiQS2LnHIwANXt9qoEJjYnTOZoNSYAb9kR3TpCTkadTmGzLiS2kCQvb88YX7M6bcFJTV%2B3YpTnhpwcftqwSoHdrpIOmfS6aEkO0e0nsuV9Vz76syd01BvguC%2FpaezDA2Iwp8%2BOwwY6pgFQi4tVWzzH7k7JOJihMOHlGA%2BrY3PYdnrtyP0v1aGlJshYzHyfNKKihiBdQoDYPfn%2Fm8r1EHjoJK9Tr2y1M8sT7%2BwXgN%2Bi73r0L2t6kzRD1E0MEnuLb1CbjHk4ub8ydiGWBuH3V6yRYFYPf5UOLJRPuZaT8JLJoreuJxnqAr2%2BUssZ0yl1edwtD4n8zpX0oaMSvg4fH%2FZv5T41lyToEP0J0On%2BtsZ9&X-Amz-Signature=50e00a9de984eb669027b02c3348eb0bbf1b5d5c38fcf98b5d47a8f0d6eb499a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ6GSP7P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUCEbRrY%2B%2BuXijpuleSPauRcGowIlNnoPOqDj4hoVTjAiEAg4dQtcrVuQYLvOWHCYY0Uu%2BwM9o6fg1pgKgMQJzmnqEqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKM8gYPHfY1ldRAqVircA7SjHHGiCVto4d0A01Cc3P6pMUQj67TUqVRWTjLeKZaFwtjpGRSRiEx1AmtlNl946nk67CTYZ3Q%2FN9kspKY85rqYaC4i0G1mJ7YYEKwV%2FBmfV8VJLI29133hAK%2F2O%2B92tSQNhm0TrS17yytyJUbGJqIUVUGgme5ToBww5s1QHselYImtfP0pfUpAwGEx2jGNzx3mLglhbi6yjJcvgLepOujv24s9LJDFxT6IndwgH4owjcw%2BSPb1r2X8Qw0q75BlfRPDh%2FFuYEGOeLmTtu5WfVkDJjnkafPLRyKUf0iVo7Mof1Df6eoYXObR1YGqrDT%2Fe3S4QnjW0oVae7JUzsg2lXvUsUZnXTCvxBUcuE54R2R3nHuF7i1H1bp8SrgATIgqDZhB7NJKm8YTmY8WbUsonJm%2BODFGdGlT9iXcf6xh7naWfuDPf8ZV0kw7P%2Ftc7Y30FUlKxoEwzmVaDYjd4owv111lzWxgVOx7DlEOQv9PxzfMtGq%2Bst8%2FMWf00o4%2BzicBTj%2F2mpB4wxGVMkL8tvzNewHjVvpbdbybYZFAoVXUn1TVky%2Fnlw2dlS%2FbvugOxI6XLzOYB1Q8CIcH%2FM2eNrju9agkki1WSBM%2BmnjtJeta4uCikKf75iYLYQAB5WtvMI%2FPjsMGOqUByVPjF9pNuKelit49wJr%2BVA7I9kqpmoeOrOIpdwfyrOghM8lSOOf9oG7iQ5V4NOeelnrlS0LXMCJ4ndnGqPerUuCTqTW47iq%2FFJezBb57WCSmjeO8Lk%2FEYXDcLqnLBHdvFoaw6WKaR%2FSOnGQlG%2BxrerzTaB7GFnw3W3XpQ7UO9dyNqfkuvRV7XKTHQGXya2vuGOKAxm5bgh%2BSWE8mE7Wt3Vqj0x%2Fj&X-Amz-Signature=776bf5a7a5a342435bb0600d5749ecdbbfe7c90c7b2c92eab81c5586c46d1f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
