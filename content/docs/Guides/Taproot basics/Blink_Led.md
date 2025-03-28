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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ENOY4CJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyevAA4CGKvdEC6YLMc2XAKx7v%2BVLmqBHw2W4G4ZjrOAiEA6IEnT6DYiqJe3eZEzxDY7fqf0ngz3hqYvmgsZdjvZ08q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO94bw5FAYl%2F7xSANyrcA8Ijn8cGD0YUe5SDQme7%2BbScrFH3CDDJFw%2FLLITQzJPdqfIB%2BhIgJPgvXdksi8wU%2Bk%2Bd80MAaRsnFJRtzxDxzsujT1QqmQUcq2MbAirbUVqPDJo4tzFrLuQAD78uBzqRW%2BqizqOXj%2FJcktIsLzMj95rnAxGBkcqvPUR6rGyw8onIR1TSLVi3GPrcmYwe44QwXHYaxxr8ZZpOSw%2BwU9KeXsHerE75kdxaENIWDAHrbZneRSC0Cd1QgGhgVvY3X2NASwzZs1qZS%2FCOiq1IYzyJrs3mwgMcrDL1kL1au8yIC8wHN%2FgASeg132D9DPfoNfr7RVd9xX%2FVBFXgpt9yKp2%2BXLJrVb0BcOgqryX%2FWL6W6XftBXrbBsZ4EvnbdBqg9bLw0FHaA1UcSWqXq1NPP61HAc4%2BPCitxNQ8EU2Pzpm2wN4UwWUM8aIRjdW%2FSPN8PiI%2BgjX7QFfG5WSdWUD3pjkiR0yOcj1Y6p4Ow8NPTBMNa1IedbfAEuxzivikMSqZ2IunY4qBsulVCmEpIy90rCW7J3KCIW3LVaFW6sWxV%2Bhi2UqrhbbZAFgMmyIxXJ50qpezACDJ6dqlZNRe3Gss5wAS2A3YE2iYZaFiuLz76jWXWbGn1mASWwcNIkbQjrMZMKvam78GOqUB8FsLCa3XtETHTZsz7ttPjrXLAhMIINjdtYWFIYQt2dwQhh7Rk12goegnf96S23wvIfpw3%2FFcUSYrxLhsvXA4oJqq1N7KU9hB4RFMVLtSi98OQLr9Crc6iM8swEgrRQ2LrBqFVA%2FxP4xovFsJrarMC1z9sOqOFRQv3FjNvXg0cuGUBx6Xu%2FEE3W%2BkuNsL9fT1OGHksj4fyU9yZCrodl3UaagQezhI&X-Amz-Signature=2d7d502e7ab30d07ec9e03f54adeeb2b88499a5d2470128c4ed512296ed47526&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6AGJEI%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRY4dLDkfFbdxsZSWzqA0uo8lkzk%2BzGVQCuj2OuIWhvAiEA%2B0oHXjaI7c8%2BoGJiLkHp84Z8p9sN0ZSTldC%2FvXRw4hkq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDKjXyi7RTUY69di5MircAzVVzPqM5%2Fo0zLw4WYN1JAvemQF4GdyhpJWXqiIPr9qd65PO0S69qNQ2FVh0sZCQfwawRWMoIH2pP9Tg%2FBCda0WUf5mZRX0LDAZdCCv885VO3mFalyawPYMWTeiQ%2B9l3pq9dOI1X%2FobBDFYE7TszJM4156AA58HoHx0L4J54HGdhqRtrtWY0b1LGAKPhVDIDA7dg4RcNeRfbQSejmYJysPj89BtliY4WYuGfObej3ILwisF0airAkoE3R1T%2BTdWOJA9qLCD%2BZYmXMoqjcb5HH791xZc3ixkVlwA7N8WQkd4bH%2BxumWSDwg8Kwg%2FjbuxwiAHxd87Z7KNuYSYGZd3AABjswLpsb5uaa2sxfgnqbsSqpgKmgEkF4AkhfjW%2BAhWM%2BdnxhcxdXDuHMjHxAPrq1Pq7SRutiNV%2FiV2Pik9BbbVrwQH1IgD3WSdUzZwt9nSNb8q1r3LS6JydtdzYruJu7NfsG0S2NXizxxomnmI4LqAF9Tm4WXkEhnOIHzNDyd7jlcObjeAfEx73lKY%2FwhBp%2BbN4JrdB1d3NYldB1KwakibJ9fF1Yr9Oj5sa%2FFpCkPghRhYwVwE0ZR5SIWH9BJze%2FknAo%2FvN2TLS1PAoG1CVEO3vHYPnQKXJRAA9YDAvMMPam78GOqUBgEd0RUpHrRPBfJ9KRndHItHkrMjsfelvfQA1TIUmQ3XmMlwqVRWedUTH7%2B90d6%2Fb0Z7g%2Fd6mwulEaYMQAoRSqaoYZxORj%2FhV3EOKa41XyM69TPX0lxc1jLa8hdN%2BMsrm7Sn3LBPBpjM80G%2BPu22%2FjwThNHrgc%2Fqx0kz9ewfLb5RPUxvHgnRty1eVD1Mrwh%2FZgBsxx5IyHcPcgHKHx3nv9t5R9ttF&X-Amz-Signature=e732926bea195e2160b91706c8b0cdf866c5d26b7733008bf3e459d8e109f0c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
