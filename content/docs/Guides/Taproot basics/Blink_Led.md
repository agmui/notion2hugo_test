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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPM5VQPY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjJqEKCYBKfwidwXUcCBuTSNRv7UIFPE6vaWflcrdErAiEA4ggZ51mklqN%2BEy1NMenTsCfuwURnHVxkqzAOadEK8d0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6HhH%2Fz2pFDTv3KPSrcAwvI0pizkLKX6bGtZkAf4FQPUFUfHgbUBikEsEckanqB8aEyF2XXE8cBR3hZeeE5lIb6TLmx1Jli1b9hJF8tAM2vPAWMnJwuKh5mr7szlyjlGeqvA3HzIj4DecnXUXB1dR%2B7BCwo4cIDmndhmVht18apUGN8pNey6y6gjM%2FekSNLBw8CDepSf41CVuUzo6Lv6JBPDf%2FAef4HJx%2BhnDkTtIKHMRWnTxX0jVK%2FtQYCT6yavav8qwc8rukcJDPpbMTZDIo0WGhKnX2JQziSRjCYBatAZFYFJjEQ1SrhveY6GeodW%2FMGHwW9EAmaotMS2lRCxFBGrLnI5rD9%2BikzXVI0sNiWHkHf%2B3L2fvlS6Oo1tRPcgLXbPHdSHA3%2FGqKga359TGxDEEDsZ%2BVKNvBw6ki6XRBHUPC6Q8bEqOToNyUaUUNZS3VcruTlqoefOnBniO4jo0BbiT0YmUA4ptghJ7Rnj8VrXcvZr3wdUdyYMWS74UdCFCPs%2BkNF%2F4MGddxI4fyIjZp%2FK%2BRmjjATgDHjj6BS3KW6carnQn1Qz%2F4B5wDDm9MzT4PS8r%2Frf1wj%2BU9mdf56MxWBWRBWx7i3nS13fGf1ZkCLHVypmtt1%2BCkke5tOl1NBrFBFEYX7BQnR6KxFMJCJ9LwGOqUBExZwaQM9vuKe0STTD%2FuwogUE9rtaainPdTH7XgQ4ayQ0bCWNEePEjYCENJt7neuCDEAIlWR7cME7f%2FzHhFmfNOgMUfzJcyGbT%2BdjoPeS2GTI17aH8qmOiqYGsu5s%2F%2BB0IPQV2JZ6%2FnW474mmS%2F0g77T7w79Q8SW%2BqJUdRkuEMy7puocTzCRRAjnOuxqrPUkSwPhb9NBZwmiCD9K3s%2BXSQ4cEws7u&X-Amz-Signature=3be10bbb034b14a560910b902ece50ffd965eb5a11aad90d5b4aaa0823336afb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZVLP2M%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6tmRLm8%2FOgpv8AFlAow%2FkWs2bBk%2Fo%2B11%2BVwUCzw%2FOFgIgb9aWUpraQhHpy5iTaBWVIc9rP2magT013um9M%2Bmd19YqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwOC8CMZRBdVt%2FdWircA0w%2FoSjsX2qmsftaHtKpLdtEvKt1zsKA2ZGYiNq%2FMKDBRleyaK5MxlFEMEirZVEq7VWuVS4SfnMIsEFpBDzDr1jPpoq3JruJGsNLUgDvMNKMVV014n3L6tO3WHpAPjKuizoHEhZhlZHIQiONO8ADXDw2By86J6mM2vtqWNbine0JsY8W%2BPuhaBcR42RmSXorsEvFB1fIRvZHCukK7DdD1WEC6SSphpOW9P%2F%2FufSem3t%2F1WcwUQIA3H9V5y6047BTKvmaeCfzlBtMr3MN6DoOf%2FfGoLrqj5Ymo%2F%2BNB1cFV7dqpoIkCfeB1smf6ACiUTXVdtAo23kqpiF7znsoddomHR%2FEHsdj5zxq2sm2%2BN04YH%2BqhFb2c9Tio2%2BdP%2F%2BAsDZpPBNK2iWHSoFcJ6dqkC%2B10IdUmXJpchZ3RqtPLcpVqBuplUWqx%2FCUd%2Bn1G%2BMgaYIHv8%2Fl8qkRibMJcgxCTNjcbpMBdqu4e6O8ffjkMVSPW%2FYhDp0TS3Bb6E22axGe3GjgVIuwMpDeP8TXVEPTgfCpiM0pPm1ITRogB%2FKJGmZdi1HVmIVFdCzEgKLMt0tF%2BbxMqpPvxBJknFn4UCN9IZWbKqhjP4ICAoIkLKoaCrypEetch5yIORWxdenYN8YpMLOJ9LwGOqUBUdKkOTk9QaE2OHGvHpIZDr5eSs2jKhBif1idWXYuUuN21BC9j8Y5ilpQu67GNSIvj8JQy11fV%2FIH7gS9TAoWR5SVulYIr0EsHoGCoqVfQM%2FdSN29l15CXMXqVjc4EhUcosYyQFN89FvPw%2B%2Bb%2BuVt5B9x8b59vQ1csdakq9k0bay%2FkK%2FrrmDADQVupRJjA1No0csUGqFwVwKno3PBqdTG4gedEE%2FI&X-Amz-Signature=6cd041fbcfa1d82656ff8a0a582067ebd77a1c3516985cad5e98b323020407d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
