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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632F7TVBL%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC9N%2ByMYRZITcbifyp1Hg3vbC3SSdBZJ6Ps%2BYUKY7zaKQIhALOCBvPJU4qUYWQvAtJ%2BEreY3o8Yl2h7EYYXgQHTcdUcKv8DCBwQABoMNjM3NDIzMTgzODA1IgyKXjBG9IbLRX2n59cq3APahQFHF%2BGU7tcFhvfXy5QAAuekyTWmnb51RkbffzAI5OEtIYkyX%2FXBeysLZxe4Yd6wxywp%2FVaviKpwr%2B1WyZykXBV4flW8361L8a7oIjtZ6%2F3dJbvC6phkrzFDjDyHbWTdtUr8fo4N8zdGDC5Yyp8xWcJLxrsvSjgku8jUwCczjZqs0chLrWwKTYsQaWqcvAtj%2BO3VKL1tKGbPMEDzoankPTw51FYIEn374KrCiwRdRiW7dTGe9dGsGF8swhYrsIbsWMWQOZRk2obdrOFDZ8DIucPFxNaJaGNaF7mcr84mPrO7Hs3VWkslv85%2FIrgQryS5IuvZWfZhNXjfECG6WdGxvcd3XssT4jqjPpZWsZxHpvaD4ca3j7Bes15re%2Fbc1dclm5bx2dn3iMYfg9JsWGWKRcpaYhdTyZShdKC49neXkyT9dDmTISo7XcXzj5ut56upy3zwKM5wT%2BWwCd7K1Ji7Oh9LYSF36xtLlmP4ylah%2BDBeB%2BYMOnznYwyY30DvZwopx73PnwoVucnZqraJmQj3B7KWXyNfmM6wJa3xfaA5j5420wMrqUHPW7gqRdfUk26ifQvlSVb1P%2FfbiAlkvNtYUXN85ennENOM0hNLl3p%2BnKUAsxsWgmR%2Fta5EHTDBhf3BBjqkATzI%2F5xbUAmpCvc4eObdxaiSsye7xJ9tOMNOgPPIUK%2F%2BIObjyIA%2FLPdjqXSc2l8iQebfVqg7zHOmpxK%2FBM3wN5QecKPH9jXA9GIsrEB7KM%2FEfS33iiQuGY%2BcSp4dyCFoEsqkfbC7775ImCfkv66AgREPaoK36RNL0FHR8f1RH2LmiK%2FxMqGKm1jx1v%2Fwi1HFA1pSr7qBn7RufZg2TeMYrQkIUbkP&X-Amz-Signature=bea8d44b40402455f3bd112f5a93be3f84b0da6353733f46e5117324c19feeab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LD2NWZ6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDrlRSD%2Fefby3h9rdrxEYe%2F8AMyImEopHLPUdUHDw3BRAIhAOWCZ4f77SW4IXr5ade1vgumiAA6d%2FE7zWOiwcYg0ioyKv8DCBwQABoMNjM3NDIzMTgzODA1IgyqcIMk5Xr36tWN7uEq3AMbVvWXPCEJtaE25icTQVo4YFiuY17ehsFyRGR1Tat0%2BVbAGhm2ZVPLjKtfLbgJF%2B6OTkJLj9E7Vd9cfW5ir%2FTB0hCfsLIpkhxHPqteEQn1YPaVgm4qSE6GDuJcKEs%2BE%2BztNYMd1PMcVxoqv1dpOYZ75BuaVVvXVKf8%2FFYYtR1Q9%2BWZDZ0go%2FWao8trzOZOvYACbQYzmTD%2Fw9QJA3Q0SZ5xJkIVUAjCceHi%2FCKmOSLGIgRDWRoQob7f97IozHQyJYs2Gnq1oka2NnSvWqFdFdJz%2F0fDhMTHu20GzInskS%2B8SmSOX4cnKwBggV5IjBpYgF%2BWgCHlCj1pBUW62J4Bxk94q4DvZ5mTTWMXvrsa8MUZb7TlFWBWzqtTcOUtl2TLJcz4DmvKNwX2wsaVEhDV1X0Rpkh8Je4UlndSzCCoIsxqC6C5pwt9GkC9pEnXyzxilvLAzviZEZhiTtu6YPBhtuL4QpDtbylrERYwY7XyjxhxL3CwljZssjVbG4augSVjmBKBydhLnfXm%2FqFMJXY6xnTFnl%2F8u6glrdy%2BqnL454f2JLEk%2B79O%2F1buIixyuiReZKGS22B9vXqKOnDosBK3ZsaxZTWC6IBe7en4v6AMRNJ3hU2QHy5r7iUMj5XGbjD2hf3BBjqkASITUJYyUeScP0nQ5hVW%2BTe%2FBhiWoeDWO8ocLqV6toLeZMiu9Hp2QLcAHtnVspMyIRfjubaWtmJhO2OeFUvG1NwQqJ3pNksfunaYl8APfsaJ6GjQdcpAKDVqsEF5W40f%2BN6GE51fteWEzEQJQ5b0TCvptbC6EAMsd01ImZJNLXtDXivq4p4KBnavx2Phy15edaW1QG9VTRWH1iWBWHkzyUwhemcP&X-Amz-Signature=1a0c8f57a54e6a347ad0af0258205140586a4b050d5cd87acb6b0b68f1703201&X-Amz-SignedHeaders=host&x-id=GetObject)

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
