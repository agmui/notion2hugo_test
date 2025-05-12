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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FC6JBTL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCPYHHsPYdRqC8ip8BR%2Fl5v8wHUWbnLe0vhLMLIcKxoeQIgDphfoqyEtGTkAjn63%2FPPmw46T3RYot1a2BAoVIMlMQwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMK7p78FWh1bUpHoPircAxcZldMYVcrDC6BJAu4DvAvJAbAavlfB7I17kOQqIiq3cKWOQi38inwnbSYAMz8G8wcyTUopNGnvpjZsYuTp1NEusMO%2BziYH8Vu3oS71F2QXagCSyuLa0CS%2F%2BjDPnZF1UILISsBXaQ1kxH7Crm%2B3%2FGyJ3r0VtnJMp%2B9cKQ8Po4%2FpDjvj9xS%2BUlQw8pkFeiYzS4qg5kKV8RgZR1t98gh6rLMKYmCjyvJxj0daNrGsco%2B1P3J1vfxyxMPJMnANqsH3te0z0mJE4IXOXSbM6HOo8fSN2RU7zJEDelKC2QcKu0PyNtHCP1sFQHvLHbsUuUN0jOnQkxdSPmsSw9LIQICB95pIF6fYyGJeVMtWQI%2Bg08neKvrPpmcJ2PLnHCxKeUQZApA2EjozJMztcdpcAAXc6y4MYyPfXM4c0etvhV9XRrbFsP1q9MqqTIZaTaGUrjcCwwPiA3M0XdYIpTAczvidUXpcpWUcpZHaC2%2BdzmCycIZ%2BJUILIwVXIyrubUTLHUv8Q7gkFpgGtqEjV0IYn6sJdEYcEwivEEF%2Bi%2FmRi5CKVF3ImcnBHrZiGbwVbHWk%2F6P6INykCIEw8UBaLZn4Ka%2FHBuvUAFVHpRcYhx%2FAAGvyTeAbksTiK4j6IpXLrz5lML71iMEGOqUBnT0DvofOE6QRBLPGOs%2FouwRcov8GISTJSRtKl5g3LRQFJVX421x9URkfTGS3aUKuzujyqQq0NNIDN3Ip3TMQW5eDnZQ9HmQ%2BEPy1jjqgv0oThjNjekmV3ilXRTK%2Bjg%2FKYtGuJFKMM2u4EKQB0qfNrC3L%2FhgIzp36D2V4uJTpMoyJo%2FxrGOKRC%2FZo8dHWbe6hLR0sdGaIqIfiwJdV%2FUV7GNgrmgep&X-Amz-Signature=3fb852186a1a5d20958e389e008a5d7777b2b634fadc49c6cb4f3ab0a6f6ec32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5B3VIZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGHeRFhHZ2U0sI8xx06L%2BMS%2FkJgl2uCavkCCjUhXAD5wAiEA0p6gDImEnS832%2Fd2BIdr9smbAz4DVuX%2BRsMbxNf1rzkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGl7iyCq7LxXpYNRCrcA9Dh7Dej0q%2BSZaRB6QyyWEVklDgtndjdzRDs%2Fk%2F3gAdhTlkKEAUUB8O3LjwddEdb8ojvPcdB5N%2BpEiGhFAAercqPIJPwYRw%2BH%2B4zvNBl7t4dDf9YENAbLmGBo83n%2FGr3cwFus6nD%2BxXrrCo2ASwqliY6xInKsMOoNPRnlSZmmt3FifcXGMeByD2b5Xf6cLGVscIOA88cyyiP1R%2Fo%2B%2B3bZtq5jDykRF1GVROqVLCSQSfhCYa5lJAYx%2BE%2FiznWVMuYVeHnlJ9H5RcBckHk05LoZoQ%2F6cismaXJYFkJUnWq5XmFyP%2BgxlNrzkQMP3C4LRdzWi2RMJAOFC02drGjDe432nCd0qbXxzdQzivkyPsZeVsOg8bmYo8OVDLEDVBdbI1a36Zyq8l3Uh%2FX8P%2BujCikCBKnzC2ts2AbTaZmUnuruQZndCjEBKjeat4HhHlTu5h741NrT9zWJNLL7yU1VKC9dojCEzz9DErMUQPHvGa4Hmqx5jBIUHXIt5pvRlytGd%2BtwUNImjYmtVl%2BeeJb9TGDciEFrPlFDZ%2BMy9INuXlDh9dFEH2rdhP2LqIRL0QDkVPhcQUG3t4hEyZfWjjCGO%2FHBL1Trl6m3iYLIVfQZUcHboFHmclMTYMpXqveNjKuMJD2iMEGOqUBQ4MRmSuHSqNi4ACr0Rir41a6vVqWJ1TrHbZ%2F78rODGt3HzG8Dwz%2B4ynK5Un2Lg9NxpXADK%2By5LCQn1W2nyNNS5z%2B8brhcVGEelVJOEpQJv%2BnjvFmVtm87%2BEvTvt%2BjtGxXw7AD2sqWiF7ovC%2B78dwsqAqzur5etAQtVLkv1hRJk%2FgNGnK3zTwD5z242mP%2BkVKlpTU%2F3nLBTeQXEJ8JTJSsyR9IXMG&X-Amz-Signature=51253c18f72a61f892914e803310d62971705dacb44b1c9b09ecfca7422ae0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
