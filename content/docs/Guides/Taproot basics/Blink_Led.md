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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAF3GIB%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyBUjBu9%2FQiifEsGwos7SaONfIrX6mhuxMtk%2FtwYuY2AIgaIW3Dj%2FlEpy3qkJ%2BBFRtuRWKxOACg2I6%2BquAIUxyeB8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDECW%2FXPsj9TJYUU8YircA4%2BGWMlrr9onf0tjBdO%2FM%2BNg2v1p5duucarvBr6xKb4GwvIB4UCgZmfhw44IQP6BCPczgoQaAU5A2i9ljucCHZAxPfNna2rZfM6JisNk38ZlD12yogQ4FiAG6C5tuyvzEziSF%2BlEiJyH7nQhnuUt70hRpotnUnfhUeGe%2B%2BzFEE7axvzrMAeaHI8nMeI0RX49%2BSLDY8PG6TmEwsS1X%2FnHfki2FVddtOxVOSIstgveFtZQyhBZpfXXkJLyHd59CRccHq1w9et9AxB1eY11qVstqokfHBtyAnM6CNJJrDbUWEzIV6In1IaIGdqubtpZszVfFFyA%2FOT9U5G9fp7Qy91By8cWckCGLI8rJYb1yy03LijYTIELmXbnVZqZgB80FAMXh34MqxccoG257X7MomMiLxgtOg40q4CwBykOR4kXxC4qzsqdBHP1A%2BkcOqiPNdvx111CKEMcn0vKTBOyIi0Mae93u3dO6bgtSi%2Fh05PNIc7RtbrOOl5vvNrObZWaKGI1QUFMFW4blXHRkx7Wof%2BcNn6LMoiN2pngVF5zUJJdXLu4KfzhLM8lZ24NSQTYOlRqGGq5UrPItG%2FB%2BoplTHHOGbhPINg6pO%2FqRxBcjbiH%2F9sQ%2BPudNE2EWZ0o%2BVDVMOzmo74GOqUBlPU%2BY8cVIYpv%2FOfkZusP%2FQpsufP5XK%2BcJXvfqzsmtvA9wnYglh1ciWLgQn%2BZY0KELHt9XIL2hNosfpb87qopxbirSvkbV8Q3Kulq4B%2BVc1BglTegnijbB6r%2BNCJWvOH38EoZqO7n5TEWPM4AbgFiQW5MQP7ARm%2FkCuLc6%2BHt%2F9UPPGkaCbDks04EeWMkWJ2vU9OMMDNsfwDFR%2B%2Fh%2B1XxJxTCO8Sl&X-Amz-Signature=341b31ab6a4b78988cdebe5c5ebb57503310c357c860aadc3852f84a3c530c47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BCRY7HZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7OsXfG7plF34Wirq5opKsM4E5aAPzToJETnyC3cXseAiEAoNMrZPjy2llO4XRjpNDNQoQQWogZFfdxN5QSgDGReoAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIh%2FIvgdwLa9sJBi4ircA9LyAtQi3jkuArHPPyv76mTCz0lZbo%2BRBtaamja4Dn1mJhLMjv%2BZjnQLA7rlW8P0e%2FNQSwnOHb3RzmrXFsbgqeNPYoqlMP8x5p5rT1KKRcqLQPOwF3qPlKFXVk%2B4SAhWdy2J%2BM9UtzCqJgbxYUJjNacxTvlZa%2FYBN3bnC06aWDZtDB8fCKWMPj4J1PcdksEbOVlEstQI72gKWAZcGv6jY1f7fP3vUvv4ecmnCfwHfcTi%2B20PARGxkV0SndN%2Bj6tB%2Fnf2pH8eTH16qN3eoJbhcYANZKzm8T2TqHr8nDSa31LLlkuLKUeG9o31T9w22EI6aRn%2FZ%2Bh5y4EgyMpTgVPc6NO1%2BQ%2BDRPTpctmZ9AVYG7Siq9crLAFzP1ZKCevVPbIIammreuXldeEYu5vgAM6%2Be4r7X1MBEGUdhjo5BKN7CjERxSvjhBsPOHYU%2BBx%2BrgPZDv46acoPd4xfz5Y%2FyndnI8ftFp6PVoEdGV%2BjjItxqA7D3UAOOOBhwSd5P9RkL1TMJtY%2BnvaVnM3DAMvj4oA6ukbzbS03es%2BjhYb6vo6leWNeweV13W6cGYetXuSycXt8dZh%2Bygh46GXBuVsfVojU3GG8SE%2FJj0g5hr88j%2BRZVDMOKnfmZIcVFaINcTEOMJTno74GOqUBtre5GSofg2l2MASUTSjBACsWGhiH87v3dU3LspbIxl4H9v1Nfo4VaPpWz%2FlmGg%2FyIm9K3Q%2FEXkOip%2FtoYH3DtJnixAibCVd6dJfof9DmdlAWM4JoJ2nfFFcZZz0kPseWm7NN%2BJqdUbXzN%2F2gEGGrha4Ra5ajU4USMXhC2yMktkjn6WSXJyJ%2FtSGYWp2%2BVoKKD%2BauqxaDkJWPLQckZcgN4Vrxuvhk&X-Amz-Signature=76fb70e3472917ca665414265cb2cc9172809e76730881f2f495e9a3d6684798&X-Amz-SignedHeaders=host&x-id=GetObject)

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
