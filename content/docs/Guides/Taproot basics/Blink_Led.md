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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWR5XPB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKlp2cNr3FZ61tK%2FMWnl3HmvMNyjT9EDFPnHLxw1KD4wIhAJTo7n7CJWoCj16qE4lzntcGOO1p4oeb%2Bdhm3YI3znd4KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMeBehkMnU7gIpQygq3APxQ4PAmmldPf8Km3hi0NTCf%2Fn13SwHZrYAR7thZnkcxF8C18vVVkh2Q%2BNtTcX1GPRJIH%2FfNTvOR1hrJbxRzl3KxGQIsmOMCHj1s5qPLFprorvkHNj2DwL8eEW0X85eeS5NkXSNNqTV%2Fl4MnyyBURGekUv9%2FoC4pdI3tbQ0BaHbb%2Bk4N6jQN2PnaXybCg%2BRKEuWXVURsSncbGZUexRYnyqlZBb%2BYkWlaezVCC4%2FJ7XNDtoK%2FMoslX%2F8IxXOYbtOitt8X2usygfJ34UeKk6MmHgdIBmblqaq93oiGgpbI47Yn2fkfdR74KEp9shelbQZkfPO4Er4tnR9ibi3p9s6AMLSfOzwFV9x4BrdhETKoZlb6zZmz9bYIS90h1leFZpFip1vBSHrwqzUKroRCtFUZzoCbX6MuL2YdCXFT%2BeKv0y4ajZihgbXWP%2BDsASqNJgyWtB52MpLRlwgidso4JzG3K7dcbPl6Gs8wf3BpwPjIFI2dw%2FHHoHdvcINJP9zIFPQcaUThF52XYlmhWNJSYCW%2Fp92VPMezYKAAALpDsotw39qrofhBDcOK%2F1K1xKMXqKCggKX64g6KuwXQaEtxdiUt3UXC%2BT2g8ojtl4nyh7SHrg4pvMaXYTfcxx5gGGPNjD%2Fju%2B8BjqkAZukzsM%2Bgv0yKEi0DpcttvktrOopslVWDRIjSGO3Hvk1fXlUEqtUf9SjP85V2jU8Xqtkgw1MQ2TYUofFLpM8TwNL9eDEHAfH5RqBsrmxdTHZOgRRoPgL3pGT9PkuqpCTQPlJ%2FkAe5rOt9zVB%2BERcTCfFk%2BPinNI2Fgn7x3TC0AJr%2BMQhVQa5qdFc2YmJGO9gIT2Kiwb41sLa9C8BaS2W0UXsMFOA&X-Amz-Signature=7d9a1c16ab6e3cea76157f451a23cb7a1e18df1d276c7f98f225131c7f90c5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUS6M42E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSGmnrEiP6uxcApozR3dNAT7pd%2BRgBTyqZZL7PAu8WmAiA1%2BuyL0YnnQZ%2Fi8rnHeHxA2WzmsyKzufyODU87xC%2BkviqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEr9x8AHkH33BwH%2FFKtwDWhAasSq79QOTzn18IuZxzefsNSEbD7vWVLWQLbisvt03jocnI1qGGWZ6dzShaxneYWyQwZ4bjqRVcIjn3US9UAokfm7265NgGGgKtjJBBm1PD4fe%2B7yZzseXR0AdxbNrAXzX9y09aGczOQgtrva2xJnN77kDtKMWUy%2B71VaTfpeGpf0iH3hnLeSq0kWyX0JDvxoozuM8Fma2NDt2npWOCoiACAjKFV1hmnSj%2BjYsfwcvaXRcfF%2FNPmXkh5vnJ1YQXcJ01ebcgt0MBOyvh415oLvyd475V871D2FaN4ftQZFJICGoLk4DV54VK%2F9SWuqQLJ61u464lAEGoLmtNS1kvctpETt%2BF2irgpkNpE0lXYLOFeoltOYCAgJBuE8dAT6Mge89dbTieVlAFYteYhSOwa5d%2Fo6JMcley%2BTmQGWHvk%2BUI7zoXeZRfiSPeS4sWE5fkULpvTWULQ3X7WFFcXmEYSyrTPPxjj89KyXV%2F%2BPaAWcQWH8ctygVczok3UX6ubEyJvxqBgaB1nJGhFKBpNnZzr10wsVynErCKjYNyggyDJnJXo9SwXVSR%2FQPCwvyXHx5UDPz%2FyoR7rw9wtL9gqpwrVm8o2rpq0c6u2VDbMjhPtTaJROCUiJYyr34GkswqI%2FvvAY6pgGXi%2FbXA%2FlTC5jtkrSlxnaCI04NEMwEpUHcPjeTcvCLMx36Qs8bDvWy8IC1Ymn84PJq1mUazmbjAEUHWpRdKjSwP9SDCU70knKIdsRCg2IcvSribiRahZ5uc2%2FJ3YUpJyHatok7Don0ORR8rzYI8p2g361DMogyTQHwYMoYNHkr4TAekiSMeiTKwj82urXmkYzYYhKb3RztoemjEQ617XeH96dUkPo0&X-Amz-Signature=1803e05b88de3511532f088c865359a05f74657262861d360132e37dc69aa528&X-Amz-SignedHeaders=host&x-id=GetObject)

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
