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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTR5UJ3T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBHCitjopOhGXAqlHNkeghJx7fNkdxjN5ftrh5n1M7vnAiA7HTsfThJzLhPjdmStusRB4dZBfpZJEtOAwOHytOgRTyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM89M3ZT8QuCWfirClKtwDxurEX1t6Y9h%2FIw1TKA6RiAWokriETdGRINNR2eE%2BL%2BerbTv69fgQ%2B%2FXbRa5%2B1SR8VmEObmCQAuXAbQVPUYI1rxrpK2iKOp8ueNIk6yueT33%2B1olmnlikdjgD3gpZIkA687HJRJHL8inMtl9kQvP0Cz17PwXwOiDPkZRz5gyyL3zKm%2FcbAzSyi4UHhOwcW2jHr%2F%2FZ3QFhh3sm1pGeNdoPYPpswJsqdeMJsV0bcnc3jEjkSzG9HEdZfxMaqDF8PRSe4d9Gp90I1NCgp19jBml2rSlSbUgDIlSbzXmeSayH%2B2ppjpKRc8PwT6WQTHZSOtyvXhgFwOn945CazYGLCwzOVrookAgO%2BEwF9s1urXmRfzt%2FYdFYI3sxhvYrLCTWrZTafmEDmYbQMPw1JsajHTc4JZlGy15US9426156AQgT7zOJ3T%2Ffq4MP%2BnexK2W738G3FU98A8tu1hDyAy88i2G6QbNHDSJaVBG65BxNzJ9EakSkvTbEhEJeZ%2FkrNkOqh54aG6h%2FMrcamS8u1mVRfQh1rStM01lAxRCT28zlnc8y%2Bo3P693vake1dX6%2BfKMDFVGxXLl0it8N5E6To6EUxxsv%2FpzNAA0m87OXemK0kFZava9D3u69lwH2iNcA8qkwnZjKwQY6pgESK5aYjWfj3Pr4kpFLYepqR8dbF9OL9c4AbI%2BEKBTldSO%2BlsVcd1XKTFxmWl6XkEjduK%2FOJNJHhm9YSzGp31WyWvP2RgOlgqL2wfgt5PrH2sooQnFQc7UzR8uXOHH7hPJC7jRhlmOgMBl7eCzXfu2ZDwJrFPoeiP7d8KS634AW4gvNSUjSbkll8iASwwZUstYD5vlZ9a8tB2FIvqqTxWj3OG9p%2F5q4&X-Amz-Signature=4d4db5be61f96693302215b9dabcadd77a31335df67cb2ac8a8cf281947218e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645R3OSQE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCkxmrmU2GqKbf6NXtTgCL2It3yUc45G4FjZ8xRMkeTfwIhAJRMg5foEpboJTypNE%2FkkeJgp436Y%2F5WG4%2Fs3lMtPGdAKv8DCCQQABoMNjM3NDIzMTgzODA1IgyKw7U07ZxwinB9VPcq3ANKo0JUDtpXachB94tcg%2BvdpvlHNPzOFKz2VTRto0tuYXN0SzjebUGR30ZO0Q2d9O5sO9ur8ndnQ7FxRNgYR%2Fovaw0bzTq4mE3ijprh1y1FXr2rrAsoq827R1cniGeAX8WOsiwOrtZkz84Lb%2FenUvMJmmAAXdVm7nyuB%2FwStV2YS2hML%2FDbfZssv%2B6cbpEQqs%2FZUYN%2Fp4eFhx1gIxTcoZMlzbvelgDQNvHwSe%2F05iz%2FmY5y%2B0p5UaJuvUvqQsXJqurxGWjGyXe2MyzpEF84MjudTCM%2BUOUGnsC%2B%2Bu4OL5tWOQ45hJstKIOHpS2JKOw2seVYh%2FCg%2FaliN29qUXxQilLR1ocv%2FGSsmrE8nIrDlG7UyOx8r49YrPM1flHcK3RzPN6zf5b2Tcbs5Q6DdiO%2Fc3hVJKU2HBBGbnTpwKw%2BbjO%2Bi%2FDPYAUXr7pewwbvxbc4T1JfjInkoHdGHlvgqQv47%2F6LZ72Zke2tg3v9JDnT9hdcH%2BOL%2F9bT9gMzewEadUvCtwqCiS%2FMjk0oaL1xHG5%2BGaBxKOercLU%2FpSnGTVH1HfESijxmgJTWt3RXKdllQx8BHOJ%2FRzWQnp5N%2B6WyJhvM0Y%2FHkIaubEnjevU8V71YzgJXMIuqvpMQAyDrmMGwhDCemMrBBjqkAZ8BaYqxgqwql1Cjh53wZQifVijDQ9NYM%2FrwNOp9BZ0fMsOTqdWf%2BiqFGXlz58o4IJkuX4dnU5X2Vzw%2FIW3TwvwEAVyPLuYTRjDg6by7tB4BF7lFkmIQhZdjmqyc5Rxgi0LKVH0lBUPqGRBIKW3MzTC3j5sg%2FMQlWlMIY6RD%2BGtVMPC%2BX2TF%2FUiYOxq1fcYuXeDaqOzBHg1sVQ2DPso%2FSAhn1Kyl&X-Amz-Signature=cda2c5747e45c96ead25073db89c4ddde4044fcda48896215ec742e3da186ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
