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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMWFCNF%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbCN7E1FWjVI%2FoQirQDgzZvV94UZsrmmMvKdBZvCOYwgIgVf6fgzItLokTqLBS0KULn44JgqWlIUtNzavh1AyfgrgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEUhWdGvnZaJLneySrcA5qn9YFQJjwdy5RFVPIUuyhsg%2BiL1%2BOVIRvbIWa%2FkAkaaKt73aXE7lWEXcjraJ9scD1AZ67DXDZF%2Fj76Mo4K2ar4A9eoLfMjz%2BoMIuDjrXVG0Yy3hfu%2Bbhla%2BtwKak0hDLoU2Od3sjSI24E8netc0w1P5FiREtAdpi0Xklq572B6df9nKqtdNdTDioreyyLZoP7FJ0%2FOWZfmnhOzKaFU603qIJwXjwRhJKIC7Im29zmn8NRvlBJViMjSmKJEIs9u303Jgoow1sI3KNkpzRuEstz9QXG%2FvDa2pEe8alseG4JtvvSfK2%2BpDPNgawesI0ED9Q7qRq9WfrgaTxylgfRfI1QEtBrACqitEVfRoZoET2uLNhdXk91W6BTg5lmsJaZsWS7szdkRjB8uo7j2p9AEbQQOoVz0%2BQxyjBrlTv90lJFZyJaPeh%2BkGOYJNnTn9DaAfAAIqExe2MQ1SdG3FqSqqLS2G3xbj%2FbKWftywfbm81Q78KFiurEIaypAR1hlQ0o0bJTRKMj0TtRP2ZT2kw6WPybWHpEYJRxpaiONpn6gs6k8bneaIGkPuw0v%2BV4vnmn1fL0S4GubDD4Yv4p%2FixsnaanbPM%2BFi30zkIvjybUl6nlTvbJNmu2ElVwLwfvqMMW9qL0GOqUBo4j7BWBr9mOcpuxhmCW2zp15P1kP6U4qs9rmSYIijLM1tvHysHstrO%2Ft8yvmRo9iq004DgN%2FlAdzRKVOf3gyk3G0tTrZSA7GybE4Obr3zyROsQuBg0dxIjVtgbY0E1viDTeSHGkWxYqJsytSx%2BT59eAup3x%2FGCV2qv5sfqHXjXElT8KwOSvTxqm3QUbOptbTeM%2BhqAH3TBzGYT9gDANMZqrdVvWJ&X-Amz-Signature=d0715b713961911bb780c74e6f7cb49daa52b55a2c0682da098d0f7f0a1f95a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UZ2OMXT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcM5VH1VPIz%2BNTRkp9mDpmJY53dfBAbqFDedOa3n3J8AiEA5lauC0qPuN228YOknsUkGUpbD3gFDDKfwl1%2BunvuLpQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMopY%2BY5l507ApcvmSrcA1p5MPaORFhXOer%2FwmTdd5PJeo0nHtCjdv1NLUgG3q%2BzO7ga6qiEBR6HRJpWpINz6IcmXxJX1S4dLhcSQ3Y0IUYra8YbSeaqAmM%2FZH9Dj0fOOGL4rGra8xKjtV5xhRcRMDhoxKz7HjqFRoefDUrzTSS7wvnLfPK1ZSzY4b92AnR9DKebN8Boa3ZXMaDiHytQsTsofIDHfjdtTcw8kMKum4mhmHZyIeMPKhNBXwE0cc%2F1bjrgOl18bBi059jkaRnHMP6dhdC5gl15syNf7a1JQoTp6rEL%2BZw2zGaC%2BPDflKO1KSRho%2FEZHGi%2B2hSbkSetxYszzlUHS3OvaDOSJR2nks8nNF2EUJtJVLPEEqFQ3Fpo4sMCIEYfIIk%2BjJJD8p8YfRpHECbbX0TToDu0Wt6HjT7x%2FRZuYcQgz6vggGnISd4OQb8vXpTIK71Hk5%2F2S1GlovjCaMwW70LUbMegXLUeNjjI%2B4O8fyN9ZFCCpbvv5zGngHlAW2zaqAYgS%2B7gBtuUVGvmJwZgT84KAG3bTobg4INL1y%2Bk4l0dcLPX3GAu0NP%2BWCsfOpFUjXvOgCc9%2FvmKEocDmJo%2BO%2FOM%2F6sotQAb8Kp4buS9bmi5wWHkQkXwc58ABsgrSHQLzvSQVDi9MJ68qL0GOqUBUJFoHbW%2BSyLY7ICQNfNJNrCVvrn5lsgq1VlX0QoFR8sNO6IFXW5ykYrzBcumuuiy9nOeRJyuQQAusC63JSPgBnqZEPtOgaJruuugZ9ji4lwfuRJHV3y%2BvuH2vnuYHLKTrGxOqtwshRnsQ1H5wDm1UwshrKBYeqmiyXQQSWy0NQLmQwAqQtAUCJ68tloF0LFz7OvP7I1P2kKhNYFgbJKXF5Gd5XWb&X-Amz-Signature=2baeef3fb23fc26a10938561789f57f07e133c69cce049884a6fa1a57c9d5822&X-Amz-SignedHeaders=host&x-id=GetObject)

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
