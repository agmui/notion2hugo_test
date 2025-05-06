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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4JUMLT4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh%2BlnsLKc76N0jSEZgV8SsgGSCZYI7tPlr5h4HIXICBAiEAqqEldtWgpBHLwhRtMSBbSlSMVuNixbh9BhcELbeVsK8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDF8e1O1zjYuFsJ2%2FCCrcA5UAx1iJ12o6LCG8sQxWVb%2B%2FBrnqblyR28mqLbvtAvfh9ijeBib6tIwKCTJ%2FgiGGd%2FDEsxElwYxFWaB2wHAGXqTQ%2BrLOvaPgRFDPtmr%2B1EquBONFZbLeMYp069jUCpUjx%2Bi%2FPzt0CR%2BXaG2ZV5xYQz%2FK9NqUuaCyxu2z3TrNvPUq68UyT494wrJ%2BFQlOasT82kF3Z2CaDUvMVdqxjCcr%2BJhr1BiCvcUXufUqq6tJAiH%2Fat4yOJkFWlnVBfiehROvkhOi%2F1LuDiUO1WM6bkI7VOHYyl5TDZkrJljO74XS3jsUrrINdxE3xTZ881OZ8OUK9PvUyumlvK%2Bg%2BU8nc4JLQLHlOtGXvUuGx%2BAMdSxU3kvvhD68BDNjO%2FxrHeUAt75Q%2B98UVbXbHsyjbl8Ynwmvs7y7Hx9I3DDWJ9bZ83KAYnbiW67%2BAXmbemPgx1j3rlIg5%2FNGdTWN43l%2Bkoyw8dT%2BleXszL%2Bk72mfw7eJMQXHZTP6w6exSEoSRYRkGoAq%2Bz%2FrqcqnhO5BQsDKUGayFfIdxwbgzUdf5RnsNpTwoqh6izdo4IG%2FVgTYtg2QZSsNu3KH0UjCTyUEwzTv13ynUreOHkKeOfLL5gc28GluGR%2Fu2SyLXBl2lqi6tnnGv%2BYkMMSL58AGOqUBTfQicK9jPJGZ1Zz%2FDiay0auCTcB3PKRDihluylsfUBJl8IxhYll5WAW6IYbDnuuOR8ZehCeLG3rAdRQKRrkQbroESnCLhrqBHiEdw5c6qoW8rkOfJgiVr7H0TBiageH%2FTt4LORiowJTj5125ijv%2Fc77wgZhER0XTJf8XpRuiqYuWfM0pf%2FAVu6%2BDK9rwZb1HLLwg%2Fqo%2FbuNozYXf2jFr0HpRWkYk&X-Amz-Signature=cc5af2020ba3452d6924668c59972d462b64dc85e7dbbb44eacbce5bf8ce95ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JUIQHEJ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokijzeT1t1VQBC8pdf%2Btv9z8EEPYdKkSPL5evdI%2BXZQIgMubFdliIyWRWy6hsrXVcSogaPBKwnp5fDRxAm7ujOhwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP%2BaprJOpSpGaXwe9SrcA%2BsPPjY6j6yeKb6uk2r60DlprLLQs67gDoKn4yrW7lFjCy9rPJE9dZU7gU%2BYLbC2y9KK6Yt%2BSL6X1H4IzxagNOPI4M1ZAyg8c2ANIPmEg1b9sbzCI%2FM%2FQuW9tsSpQf2ShWRH3BQ4fmiAWaCMjPfnym69oFL6znHosht2h9nQTCNwKwnoi1KQC8Cg0uTWR%2Fd%2FyCJHbdH6kFk6naF1v9laXdI4bAaCd4ccQUmM8a9wFaXSnHnX5n8ln3iPfcKudyzozU3ZZLp%2BJStTG0uA6OG9wce5xbJ9eLwF9%2Bpr1CkrKmm6PZABaJ7ihLo7GFXX22ThxNATfBLcD5e3hVCXC3C4bXpAWxThMGgJXHAGq7zZTRkYQaJWtP%2F1JyvKd8G6SPOva5mWL5XA2XQOe7VsdTSHXqWDx%2BTn1RGIf%2FKmEVQo9E%2FVtYewoe3zi5CtZWIgkzf3cdfXHwa3ZL1VjM8R5ZO5QRkBc19YHGrnfC13Dr0M4TeOkBHTM8l2t4vYOLyKcUIgJBlzAlZgFUl4d4TPryrtNNB%2F5s%2BTWV2C0qfweDHbNmdiodEhBPJJB3qyZ12hrMEucS85WjVR12sZ2RemoX1fKxOWYThHpDYcJAhClV%2BUjQQr%2FSJCjyfCpc%2Fqh8A2MLCM58AGOqUBD45xqmK8QoAP86CZpC5gUoaPK4WL5dfOo5uUUKNoUFipm5SeuPGA26VcAaOQNkl%2BAK%2F%2B44YZYxSBzBg1dDaTCq6aorIXNjzwDEa%2FsVRYoRqMKGSyv55ko8H51xS1pHo1UUSCpWgYZLMxgemTZGQZYZmgKi%2FkgSuH0iiWfUZqTYOx%2BUCxLBoc2YpXgWDdsoT0aJnxRswdd9L5WTUDG50lMg9Lex7Z&X-Amz-Signature=a18fa6609273e49fb539f2790079e522eb85d3a2e9250a36fbc969e80c7a069b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
