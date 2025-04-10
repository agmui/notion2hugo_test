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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHX2SOUU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIENaoL0JyzqbSnHCOCCSuxJLL4RLe%2BDt6haZaS4CdKVJAiEAjjJ4AujLg%2FyCtvgn%2BHcCwaSnF4BtILvPBIBp6tGmdKYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwPAeykAEzyX1R0%2ByrcA7UGWGM446tZ7FQOuny6orpuV%2B7KKDV4QJoGYzj%2B79dfn9eUOMyG4CSWoeNsifUxFxfu12P6yILNYcbleyTejSxZMkDZeYK5tQycWdHrUsDBy7CTaLkKUzEeb6uE5a%2Fl1ikldasOp889F5MEb4V7HoUAiJt975PsgDASaqGvCayWFl%2B1Vdqq9v9UKAAXI387%2B%2FtwctcV5MSLzH2QZLb2342fdXa0BaAATSge7JQKvrGnM1lQeUU0bF%2FtB236h0GT9hAGKgijDupZGuf5HluYW34Yb1OCZN1v28mqiBY8DQSpCYcTgUbSD6HMtxaCMO24MwvR4MgHQOreQ4V5lQw0w5%2Fhz0wVc6YngbIlSw74t72v93ABK2vMCTUV8yG6w1y0vjmKBwMg85I%2B%2FOvec4Cbo4Uwq5JJVkyhKgD6Nslp6evua0CbrW26hO7I41VmEdxSxC3cSNnLay1a8XsvQ%2B5KzVN95GpkW1X2GMIu4cUVZhDr%2Fgm8b2xKSDt57wZ332L5fRyaFu33ogEzYjKz8dIdnFkYCZsv2MZ7YmDDyM3Ua9kCYCemLzqPdfxHJCHbb%2FXnTiKZ07s12WIA04LrWFsk09%2FpXY5Wk4KZgZ8T67lqEa5Yi0NdmxQCbfBUGzCmMKCK378GOqUBElVLdMmvgfI8DjaiPnJiBeE7GFIWjiFomdByC9wujFpFyP6Ep%2Fl37C61SyfmKOrRkdegIOkpAm8zMrV7YEzaE68KW2FW8j%2FF6n42yUdmtJSwPoa2ymzR5qbgAr47MZD%2FWj4TMeJz0wSJDKWh0wfgO8C4fs3WDQtmqToKmtx%2Fon37QmUPogDlA9yVS8xJ39v6qiimG4A36nsAFec9uKaMJMprQyGV&X-Amz-Signature=d19e8412cde4567584d3430703c7ddbf31fddee2578021a5cbca7d029c50e745&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNWQV24X%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFuPvhlDaeydt9ctXG5it0M7shGYs4I75Qydzf6OnF1BAiEA1w9BT%2FnudJzQBPw0qji%2FF4rFTuP6FP1h%2BoaCUWSeMQUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpRa6ibYb%2BWFiwXZCrcAx8ZDuy8GJbhi8TbxuQ6W%2FztAzQG%2Bg4hn9OYvTwJYl7SZxVBAzbt80juROXM52chgMpbLOF5cz0T2aEjhuGhrs7muOtQEKPaBBVFcVKJWji5xRN34peylF9%2Fo9cKqtjAlpOPSOEBtCFCcgkl2kHwAars9TXt08XNU7R3RdhnzpwPAK0lgM5q91RrHauIH6cyPA%2Fe%2FE5YumWNwCPl%2BVDF92ZZt39giwC%2BNmFTIwk0evk%2Bpn7%2FMhbJDegUEhgs1MemhHRa46htqjIv2iKcn4lwZy4ccrCpwogZAdXyeIWGka25kAFMZvB05fbReuQowXN5tb9hw0vC%2BiZZ7aqEFHJmyGZ9mHO3bHbWRYEV6OOaJCN4qYlK8cqkyqJO7Dsiy2A2ECetfnBDg57J88lnBemIV8Znc7jVJEQ7u4HvU4cjDeomke7LJtD8%2Ffxt8kdeEYR9PSggASbisK07%2B24D%2Fk2%2F1mqjfD24boIRbStsZ%2B%2FebMQhqwD54U8FOV6APNYIlupzLtUpMBMjfH8pUhCNkoNcCuG3wUO%2BdlnMorj1%2BEWasp01BtUpkAeWLFqqUqinIUJvdTdZQMU%2FlBk6J4zanyCqpYDZ4YlX2fzZpjmhhPX%2F9kM8%2FBb9d32SzyYvdUOaMJeK378GOqUByOvHTw8GJci4852jmb6dyJjhTf33%2FJM7gxBly1dojQRSBA831gcUyQhJKMaVaBooTeKiwuQKaHgq%2BmJq0UqdCQ6zDPWvNeyjyOZxHeWRMFzVztZR8%2BU3Bd2MtfgiSXobgba%2F9eXfdvFT%2BwSI0PcTi%2Bkmi45j%2FZd6lA5T5j4wzWdy4v8ERkN3AuqZFnQcWv6REZtzfM2S3ZbnbyoiCpMdKSLGGFXA&X-Amz-Signature=3c89e933dd4a77d0a75637a869d833e4c57eeb7c23e53444a315987527dd5d30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
