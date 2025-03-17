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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYBRBOM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7jy6U%2Be7UMJ9kiNaYOkaXdBQDMVj2%2B0P4z7twhRPIsgIgGqObD5uu3JijSB7MNQ1kdJQwG48r04mWHOKsDUGdMfYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFGnlitbvDrzRcJBdCrcA9QlyooY2SAqZusAbbzcz4vDIi%2BWDJ1uYpq9a6d0DM2e5JY1dh%2FS4s3Nxwz6VVWNgiHXIXtpCf%2B8MCErKwAaDOrx2ZARmbfNLFCOib7cRsjobp1EXI4mMDu0IlnKd%2Bjerd1RHWS1Y0KDH8BxiMTNhwLbmUKQLXGu2UaQEtV9UbvP5%2FKxAjSplczJIi9AG0Rz02ed5UF9p1f81SHWGhvo2Ond9Z6uufvwrT0D2Aqfn0%2F8QJ95Iji7SrL1gtlUSaaxsUTHhtv4KN4zig0SQy8ua7limJttZahnk6JmEqa73YGGkdE7dA5uemCyyLI4mk22KlaeIz%2BycR2a083bYcCZvPZZzODpVORaE9u6OdCk903eswly%2Fgq%2BzXsmZ1EtC1TQOspnu93njK5INhKsMgDXhjhCzg55F4UAwxbXcAJpJZnwdQVqJEjqIJpDE0PVXwCJZQeYRC6j2Q2Qv1ulKoUkeU1iFzlBwthybiRoz5YpzFOrSXBSLZ86LX13IM55%2BzMTr15CHBEXdiB0lPups8BuUP%2FDwMJPat34TRpjUXKRSr1wVj2K3OkdUqtgL1U9GaBN04Y%2F62AyEayFmYZGcRONwf5I%2BkpMuSgOa7TQ%2BaFPJ9G11EZeDdkmmeqJZdJhMLzA4r4GOqUBnWRqa7GJMKVpbRod%2BGHAYCYZyHb96rAwNM8idwSFR0okVF6BnsVq8gZumTVoPKVNn%2FgIEmyM0wBbFoQm%2FSVDSME2RpGwja9j3Y5g6cN6Vw5Vg60X5wK3FieXX%2FeEH97bv%2Bt61ZMNAB4LRzeqqRR48onoR9eCrbMUCb1V6q3nh%2FJtv0ZwtVA4NHWKUl1s%2BafzGEaREL4mF7za18J2BiVfJMjK76Jw&X-Amz-Signature=800b973cd77d048d02e0b43592b20aac9c3fd246301dde84b4369deef69d3c71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OPQZG6O%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXf78YxOMYsLzvOdd2JuCTYtNl%2BBQl%2BqpDqfnT14rv%2BQIgJMydm3vPD9SXPhYcIMOyUkaiqAodFU1iwTFCLEQuU4Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH%2FQxNseiAVv2%2BH4hyrcA3hZDhSfwH5rhbeNtIvQnvLrA7ckULUagYJ2M5hrapPW1A0nt8xEf%2FRZvKFZWhLvYKLMSIBBgYLw8DBXxoKgXXyNrTU8xlhVKhrC2R3i%2FWXej0FQN106RPZlHVXxukd0k1dUQm8mL98usQ%2FMYux2cqoE%2FaUVccqqhxZT%2Fw4o9O0Y5nng00tDMfH33hI2AuKRWY6kFpFG3sefsI%2FHB3ALWQLmD3P%2FwrI5W9Nll00CxQp8wlnkN32ZfaN5xiAZFLXZ9k56rn%2Fuq49uziqz6y4k14IOYvQO8ZzuebzeIhfbtieW1o3Rdkkz1YtVOckJTNz68MysN0hOHG3Seuq0KHVx3mxVHf4wuNseZ8KYGUI711Ebo5Qrf9ZCGXOuoN0TSQEYbtKKDtC2wvbFBSzIrQNwlRDkNRUezwdL2RFtbU8PsBr%2BsB1iUaGNf%2Bnq9QHOad5WuUvs7TdALMDxkffaDO7UV%2BOhJLBnD2NqcyaoAL4mzZ9Y5VOpr0SqSl93UruHO5fJII%2FVppNb6aoLS7fz8mHjGrGtw%2BLhgpT7QIa%2BNoqVl%2BkXrF%2FVS%2F8KQwJ0dSaMAxpeMqpuHS439MUGTLmTI7LC2yO0ripmI0uuUSg03PvRfNgBUZNCPZ6MNGWOWqpvMKPA4r4GOqUBU%2FE4dACaGsiuCcf4m%2F2SOmTc5pR6PXECZSt6x3RSajlLD8O4viZ2G2l08VuVurVE3bGPxi5pRy28solhwFCxAbSrJ9qPWOssQ%2BLAW73eeyuxpjBnKT1YTW%2FVin5BchCx7N6yXBjHIwxilNHHFQrUzQM%2Bn%2BLPw8LuRvF5auiRNfalZId7RCBFO526qtsj4FuJ07svizwud%2Bv6fXNS6iwdfwk4hDsK&X-Amz-Signature=618feaac8cf2b8c23a57ac0260f056607bf8754fde7da9bf22e2e077928e9d52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
