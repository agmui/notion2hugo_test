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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDK6UFF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQZ29vMSEIUxV%2BkodlAeawStRR916RDWIq8m9%2FP3Do1gIgD8uUo43nkwZLq%2FEb%2FFs%2FgwaaZFesd2qdltfBHFRwsncqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd9EZej6YFz1eRdUCrcA%2FCLmqm0lcmMOyPGZ4p9DsJxtfGmQ6sRR3%2ByAn%2BrPF%2Fo2NbwdM3zybeWVtpNMP4agb1G5nk8aOH6fRi7TWoG5o2FRTFoxNERns0FkulNwvgrwRbeJq1KcRqE1XvKV%2BL2kYNpxHGSfxJj79HFSaeQCaLGfFu1RbcNKqfEJnAjEwTs0dKJVJ1L%2BWkART1Jng1zFJS61LqmXrp%2BEudoND5ntedzEg4rIYaUXJ%2FevL1s1fH6RtyLlOQqfvxMnbef%2Fpmx4ccCvrCkV2yxje1sEWBAc8%2BljGj%2FTGDLzSVQYCBVTCG%2Bgm73aw094JUbk8GuDfgBtW0UXWOXwOt8VuaN2ztwbnZotN5shh8wau9F1y2w%2BVZ0KmSicjlwQ3%2FR%2BWfxFyK7hx864224lzqBht%2B1uonxMTMVce25YMim4IeM7M7RcvMAV6DGIdOrlvKN%2FOyCI6qvCrL30XuygVx44oYHQ6K4PSEucg3TCtJ8G0AMuCIrOjTuXOuKTXHqCJYwfMhJ%2BnlQRoqPyaszvtFgmyBVF5bgIE2z%2B57J4kD690ZIX%2BUdZRez6yXw7r4%2FyIXPgX1tbrxw9KwmrUut1RsQiad94Hr5a%2FxbzNOk4g73H4mrA7u1dmTGUYNA72hlPwPcO4ScMPqN5sEGOqUBDo1dQrmuYlXhYoGqFNQrffhtBiRTsRA3fqnrGAKTOSz%2Byd%2F6ec%2FfarL7penDJ5k7jcpBlhlwQ%2FQ0SKBrwdJF0zu531hPIzuVmVjcPgZsarQJgSKFany0xCrak%2FsAMKFULzZ3gJyzdkFEbtqaiOCsXsAnFZkPyMEliOHYs3NEAaGVtWmOP7oFrrli6KU%2B8fTQl6yyolzUPx6WnBoQf5SvaXSCKnES&X-Amz-Signature=fe8528b1364b792683e5bd0bdce9a0ebbd796bc88a37b69d1cb361bb4b1a4949&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYTD6FGK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE5dH0pMwmrKyCdojOTWsOF6e0s3Dk8Uot7hl32sKNvQIgO1f2NlmruaMAXlht9Eti5iezgmj4vJg%2FgWkTymo0%2FeoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZAOBVo17Ga88SOvircA9r4dd2UmbahLyB3Ps%2FJ%2BX2pRlIYr7GcNBflZ9DnVk1%2FQYNQcSkEUhqwp85sxwbvdwZNAorOGoS7ZLOsmvwhj4GTcSi%2BFelDJius1PTtREmZNjXovxgmaTHQoVgHLQdfQWF%2B%2BuSKEDAeyjP5b%2Fa5NMiQZ7oyLuZYPpFwUKM7DhLTwcnpWy%2F2O3Z%2FOTHG%2BWkbbNbO5%2F7PR6W785AkH%2FpX8a%2FgtfOQat6wneaYanuKvtsLNCpAFenHtycCJwrl%2BxjGYYG%2BS7x8fWLEk06bPkADvq4vwxZcNV1iPWjZQo5bDRKse%2F7tHv7659HA9WfXcO9nAStOiPIkv98uTYYxu%2Ftwhae7p9H3676i13rHRgiAf5fvteajyUKJpgqVfRoDia9MW2yJZLj7I3VWKJPSQWQRtZJVkY63vh1xesQfPqvE23kRgRTuQkACbJPvobMYS8QLQBTyK9hW%2Bz4ZebYJH8zGGeHbruYKfxqVknqN0%2BlypYh2dHNtAjCojaL5tTpUej5ozEqSH%2BN24KvoKppSeR%2B3jiou6ZSoyL5x%2B1cDg0ydlM7dFdre6EXUhAyvNpVP0Xw%2F0znJWFHlkRLzX9yNb%2B10Jg3wuH11if4U4fS9ZlIvukvlcTcgyvFQbQGmIWW7MJyO5sEGOqUBArELucBr6pdn%2BvJnUOavxxG9QbLl9fQVDGaQDPiPI9mdwRmjXCPTu4ss%2BwJi5jbf5EJwTs70W%2FV7RiQhgmsgmDRzyBe8yEqvYlS4TR8bfCfTxSGS%2F%2F6pTgybHJb9Hd1Accg3xCIfvlxwzGZAeMLWDxSnxsM%2BUf7H%2FqGN6J%2FpPjZ9U%2BHQy%2B3KnpVevMVkS7C2Cey5Tlf0%2Bpta8xFN2CF1Dw%2FAUByD&X-Amz-Signature=68481066445040bb49d332b659fc245f4358d0ccbc6308dfc8af3f89c551c928&X-Amz-SignedHeaders=host&x-id=GetObject)

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
