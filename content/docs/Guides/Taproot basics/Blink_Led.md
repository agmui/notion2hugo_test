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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRCXJQT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDxgvajk1g7o1MxBDZE3mTlGFF3frOSL1OHcXQl2HgaygIgMkE7QrDUyGN4cZ1NEuN1AhV0UdpGIFf0jfJe95qm9EgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLcdfOb1RntjapXoSrcAzdSQ%2BJwRIpgKXPnDZPp42GsDa9QgmO4UuhXaCpSKJb8zQ2WSSkXCg%2BYkma4eS61umPB8aUbD193KtbP6tqVpKnK8n3BPzn12AbWXxcaEaXVs1LSBsWc%2BRt4Fujz5SnsKoZdwiiXB0r13bW9AloCHNFa2Isq7IchkuFrFfv2O2TDIaJQk2GjTw1ID0kTzEJTwSF1SpqvUZeVzS205Xqn0GnKWvS3A3a%2BkIgYWCJUk89GvIeHguOMxLRw7pF%2F6oHyCnj8m4cxvFzXzAEj%2BHjUrjJ7KussvmYe2amUetLUx%2B5S0KCNGKC%2B4O%2F%2FQer38NgCGdMZH1UQcen4CPOZO3shwav5jPF%2FnX%2Fj0FqRJvYUaD%2B1q6XBKyVXpZ1eUgIsamuYl4iWzkrViEB415FjzwCvGG4GgsL3zbhjpdQrHzTy2txDd8YfyDYGvN%2F1OGSdakFevCJzxQQXtmQfIOkcTQPIf0mB5reyg79WTdMft8Z87MrfajyCPE11tEYVTWFWlOifdZc93Yw9sXq%2BQvQTSU7pSwTm39e8g8%2BcfMiA38pPDg9BjQVbp5Awa5ouP97103xsmh3KwBVa3luQtZaGzcVm35MfFq0%2FqnWuAqJk0S4Nej%2Fo5d4QDiZitk%2B7%2FfG%2BMISv%2Br4GOqUBfSXlkMyH0Ajanb5mqp6W9rA15GlPm%2FX7IFVdIi%2FIXdhKpeXTSr0GuUdDE5B74UXpuZfP0tawmNrL3EUjaBGHddcoFOgO3J9Y3uD4hq%2BcVmCXdK7CrStJ5N6SkKLajQMlbKN4R3%2Bkf2M3h8xHYDG5EmbF3zicoFM3cxOR0qSXsbADPTgbzddOHBmtB5G%2BwiSsF%2BHA4zCPoMCa51DljuCEngBQjqny&X-Amz-Signature=ef9bdd84ae205ffaa54225647561f2949f984c86bd9518fac01fad721f10ce43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TUVSUJW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCQ3fLdZHEW2SA%2BBryt7AkfEu8QqViIeRCDp3NMMc%2BlSQIgGRtuPBkNAhYXJpNydofTynmNnifw5U4wBP%2BzI3g1zNwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5p6z1X5YnAEh0Q5yrcA3%2FRkGYnPOaEpAjDKj7qHz6gqy8DUdpizZQzfPcfUVtNl%2BaK4JNrVhnSKgwX483BtXjNOdNlkNT7SXNTLDOAxDOKs%2Bs9SMt0m%2FVsQROoLpfMMdh9W9Ovpi1PyucWdlYX5q6DIpug1%2BxnTe4m84jWjPEU5aVUq5bXi7QnL35RTrg8YEFNC819PB6UdEiQgzxDJWrVoPNiT1eWJQls9DgMKdTXzfqTcpgczUhsj6nesZVOkVWwN54kqP2tBTHjmwdV2oJWNIkU5UqVZDVUraybKFKZqjAbtu5%2FVWm6zX8O9RvbfPfcxKL4oeFPF9hULsoV%2BXl%2FHHUXmOjs7tcLIQ5bkNe4XvxN37dLPAaWT08N9OeJOXC1JU6Q%2Fd7bfb6QlouvoWsvHDNOr%2FJGNxeq%2FitG%2F0kebtZqJbNNxjfRLQURWw3t3JDnX6ty1X4sQE9RlkEp6cTqB1LcTyhL3RGv44SaonlLMPjmtV7%2FHqfXp37qZ58demOtmQlijua5QSlWn6g2w3oQMwTvGExrJpewAoc9%2BCekjjNIJwDTGL0V6u96SMkzLbd%2BKp1G87yTePaRywI5gKGZFe%2BIx2uUxYtOov%2F8QHYpB8nZUWOyp2FgtRWhZ%2FgerlrT5I%2B9DlQiZDTJMOCt%2Br4GOqUBhJDXuEx7nDtS0J%2BHvfwSNFp2p9eaE5uf9Z0dX8BRpDZJmYBInxLL6ZFquTExjIEm7b2JJjSw2WW1w361zy8uS%2BC64D%2BjPhQqVKdaU77zUwyob%2BsXfcgJ9O%2BHbAZw7GGlfzyC4niSdczIhfkqC0zknBfCNhqah7PEJF2aIXhoT7JEVA4%2B0U2FZtYlj%2FHfJ1I3e17gbwQ9xZ9tJJ6yZOzE6TI6t9Qd&X-Amz-Signature=0d501308a9916a739032655d3b40fad0a06d00861aeb3f43a41e2e46a04dc950&X-Amz-SignedHeaders=host&x-id=GetObject)

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
