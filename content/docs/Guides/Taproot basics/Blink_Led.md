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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6O6L5WX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIENLU35IFw%2Bk4Cxl9ssyClHXfN%2B2t3mMrqwI4YWdJdJuAiEAtbBsIiVObVSuVTJdLfqQb4L94hmUg3WVlL21hT5UgQQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8w09ivX52gMP%2FxHyrcA7rzT3Jg7ItQLkiRKTgHqITptL5aV80Y%2B0Q743MkK2ViLZs%2B9SsPmizqghWNDcimXzSrHFQTdwCmAcaKmIF%2F6VhTUrPnkSMYOkOrbVNLmeyVSgPUZtAuVCjF9XV%2BTUCBVo5o85sSF5CPSFwUnR4HEkcwpT881LTiUpxs06lWkl7O8J1x0tPteMQdKqcYwsxS%2BSEjf0z89%2Bgn7cbG6XXOT8PvvKtw%2FhfWiM7iO5qQ1EG2gA907z%2FwqKUitj%2Bi4vD9gpWkSStLnHNzNYQIG3POH1kacxT9buzZwEJ8yqidqBHU2nSZ96id9yxELn7AyTMwwIXa4pL8boeqCh3c9y3IMPBG6yizjhGspNo968PXGBfKD%2Bvc3VGMAArxKy%2FaTxAG6kt4i%2FKfD11NvXZJfeGD7SOCLdkP%2Bj5wKr5Gq7VptPKwwnnmWDl81qNO7aHYK9tCrSJjGmYSsrxwbJMK4%2B7a7JzJRVYlpDqorWP07lrSy%2FB9flUvZNBSGLvxKPMpNbhMsiNqUHjwWtjSOgx%2BOstoet%2BSH2VrwFtTuhY8%2BixXTKhgop0MHlj6IvsPP%2BItYjXCxJnP28%2FAvlkhcSKAfSmHMhiLkCs6IZbpi3cNxFvYdgD3rF8922yaQYGUsrexMJD1ycAGOqUBGMaNrPI0Yf60bpr6R3EFb1qhLy2y2kusvIqV7e8dzLsWgFL45A24iCj8AcoTmHmuZOP%2FG2BTOmmC4HRxbMDZTbM29lO%2F%2Bibm9Wau1uiiKAjdboyTgYngLOrhS80msnUmjlP22FdqIsbmuqxlWzGSwUnGCgMHwlf9jtv%2FRsykYv9b5JAdZbuAqFAYxlMbTY4dqadwx9M8XnQ5ai2C4dyo19N8jWgP&X-Amz-Signature=8d561cc824bea78fe543153d4951e5bda7b1250798fd64cfbf7b6a57a79d68e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDMS2NXT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFzf4%2Fa4a0WC9qLHsDcvToI2HZ0%2B7Dz0tR4t6Yj2YfvTAiAZKEoic9XWzwOZrmsTG%2B%2BeSjExYhdJ5gtnsJIyAdAv1yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Nawj%2B%2B%2BPvJKlQM7KtwDS7bLiVF0j2w%2FOBeIAMF%2BSjytHDC9BGOjt0OsQCr66y78EYkWaj6sI%2FfI9%2Fp09LT%2FQcB5cZUxN9qOhxKgRPYDfzp4eYJ6ANqMBsuzu605mQSQtpPutpWkeB06lFFP2TVmdmb4xf6SZ1Zkvs147S54C1ZqxD3aIrGeSPCAwGV9qPk0h8vR0XMTNoQhf6%2F4pdT2KRgwlbHdftvhmdxVyb32kou%2FZlcUxa91qY5Xk%2FCNfiMmmer%2FTA4LM6ph8%2FfZDY3JTaUGZxn%2FBTuaPQe4fD4dM8iaGFsBtmVBcqij%2BRMExzNMOhnSkERibs3DOlC4SGD8Bfy7C14f%2BJJGE5E%2FAXh7oILGPj4UVkc0%2Fv84tkgDyUua0aOnqniD2vM5LNvJGhP5fOZfhLuDpMEIP50eiUR6o%2FDTZpD8TqgdfzLKkicVwXs5F1rU3wbqJCFwE5rTscwjpHOo8bNuOZwS6P%2BU%2FzXaF7jeSpId15E3%2BStQfrdt4Bg2fkAFghvoLXvo1fiukA5gd7EZBGR9ZK3KMgSHbIPELVTNlk8wv82O1JejsvJjB7IiFTfGYf9PYxsNTaEdSex83VZTcadFoHJX3VjpuCpimakoXsVJWi7GW5PubkKjl1PcVFc0PoW9bVBQo2QwjfXJwAY6pgFQBEs4PSOzNl9kHk13GlQJuCT8%2B5he%2Fj7IwL%2BX8iuPJTDqADB6lor93Tfy0vL2MkRnhurbWSw7YVXAXEDnh8c6x6qr4EVGB%2BRGqOkLGFC6wHRuMPSl4DzDP7JbjzqyBrdfVOgvjLoI6DMU3utMCklnQDHzyoz4x7PMTpzRutHw2BVF2%2Fk7G5Ccc%2F1IH3wrz%2BzFh2%2BtK2UKqbIeVYmL%2BdBqvyu0gkmc&X-Amz-Signature=d78933df0fece2b6afeabe758356889ff20038128ec300809236ea46bb8e1365&X-Amz-SignedHeaders=host&x-id=GetObject)

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
