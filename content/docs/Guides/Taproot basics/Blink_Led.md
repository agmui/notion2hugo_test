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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH2EE6OU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC%2F2lVVrc6NIOTrBTq169ItKalwx0wm%2F2GexV5k%2FWq5cwIgFnLvFKT9vxwRl0STsa9K6e9Lm35LDk9cV7LUhowE3OkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM627bPtwl%2FLQYcsUircA9vvQly2xotRQ9KxT23kWr6T0k%2FX8chsAA74S91aMlHkdqopdNZROouwOT7gfhFpGDQ1LYf8wPPb3WOqYySFXy4yuRhWm75ZXVJTzKLC9fH%2F1ZaVmQsriX1WoOpK8ixSpj5cByH8%2B5FQZUYLRkW9DWpTRkn%2FC5QBjfwC6BSA%2F8AyzFCba114a0tZd7BdV9dqXBG1kBmtT9JwlRnUY7nprilsgeOicw2Nq2p76Sk%2BvL1st4ct5kw9W1POvad3YNsuaRpZMOdjy5t9MbnAcUjFaUNyZrKcDnIus7fxibKh7rlkBIG16DMxKBP4ICjNVuMMFSUw69%2BQTH2%2Buoa3KuMzcD%2Bm9VNXoTgFNdVqE%2B5TgIOf35keHCPZU6Q7S1zJc51IZ3Q%2BKIVBqTJCUezUYaCk7zAWO38Gy2fJpiYpAHR0JsifNwH1%2B1RSCRco%2BS1yoNZlwZeOCRg0iXJCik62AoqZpbJ4s4sImE9SIU8663k9UcK62maSbLSbNelUx3ZlPP3Ki%2F4d5Q7q%2BjO3O7lat8XL5EtBKCaWDKAHrR%2F69QIC3BSucLS%2BFYlQxx9%2BKyK4D6OFoV0fp%2BD30vr4r6M3IZ1T8N8A2cQZ3LHIS3Ilh6bHnmALx9ie3dyb%2FPWFQFXmMJbt1sQGOqUB%2BcgQUxiE%2FBBjYdcyC2FkP1FgWqfiZ686GFITd1g5puxv6Naw7NdaUlNJLfJoDnDJr8vdDTzh4iHSXcZK0uvL3PVtPy2%2BKEyX78SfHp5NrV4FDvVQD%2Bo%2BQDS8CGD4Fv3%2B%2Bybf2PfLu0bpGtVPl1mdqxBFwvS98eR6nV5HqlBO9zgIIa%2B%2BXIrSxVqny2fIaJwynAzk8j1%2BzkVzAN8ONilZSUhX%2FEu8&X-Amz-Signature=4993efde026e75fb9f02ade3ff7e8d1163848d409ec37737027e23dbdbcdea0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWKJ7YQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDrfKsbeRutfqNniSAO111OQCdEYiiL5f6heM6YHlwy%2BAiEAjwI271GZVsIA0%2BCuvoDtL9Qrwyssh%2FH8IvSesL4aGUkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0zonop8q7JheDPJircA%2B9vuul0wAIg6XGdL5oUwwlEQ537%2BxxUYUfTqUrsAkuTZbzdtbqs7S9ekyfYpAh2c8Xz1HeOFWkfMliSucibcVj4nFpyipB98Lb9GksTmNWdxv7%2B8dSd3RxybeiCOwSBMxJgy3p07K5U1UO7xNNHdNKnQ%2FA2p%2F0wSIzGaZFoIzJbfdfgIXIJDDeNhuQ5Ug9rCF3i0zKNcVzxPyRMtAV%2BiIqI%2B2Bezt2K8%2F0lLAICY%2FV0ceBEYepzM9oqGbbY4IROe6y3rvPoGc1RsMQOE1W7%2FP2dqt8bKWdiOBq2l7DKjytERf6ajDEQjoFR0vd%2BCoKtLrIm4vEyoQaFzpky3tAEs4LpMRauE1XS7JYIRKutxU49lVzDsMkLG5osGkY2MTM3h5LfzKDnWnA3rXOPtmH%2FbOJ5Dg8yVxrr0CCfhBfRFfhVPzkqkqrSRG8lF6DgODcJU9skhL9zHCjUzL9KvitP00Af5R9k9Yibcm2UZP3Zr%2B%2BEx%2BlV7QSzp3ZjX0RP%2FfR0I4df%2BrVUa%2F2S74AcqgD%2FwZrFiThiswwOMAkjUzHEnhSdFVbZqTxpSDhsRPGGRZ31zeqK8P%2FBENtDMz5nMX9sJM7DfxL6G%2B02GT80AbOr7BjMvirlKUnK%2BCM38E32MOft1sQGOqUB%2FXhwmUXUNCe1YwXeXs9JpKOQdw1mLFTh3lilzpu5YMe0Tuf70gtP%2BPbp0%2FDJE%2FHVs8VxT5esOHx6cNLxecJERaK4RUGTwUXYS2ZSB8TLsSs7UPbgEkyhLLE27C7qhCuOOfMxFqbQMYvtqtZTdu9HNzO6Jl3k5niU6RLEnwQdcki5E2RAv%2FJrNbbhDz3oOsm%2FyiI4BfUIY3WM76PLI6oZO5RvWelu&X-Amz-Signature=07397c245fd77e1856d56778cd75b09f5b7bf57ab9c795825c31f00a1fe7bdaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
