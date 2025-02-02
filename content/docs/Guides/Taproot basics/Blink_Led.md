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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVQXT2M%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbfy8rn%2B%2B7SmDE18WuCaluEk0m8D89g74ys7sopHlVLAiAbt5r4VRK%2BiJGwB5rANZ2Tbnz%2BQwY4CCLc23y07mtLQyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBdUcbegZRMXdv7jBKtwD%2FA3Pww7C%2B8PU%2BJnAR1tzvng1ckdpTLHhpAr3bPnGnR3pssnbJGI2H5Ob68rpzwaSFv12C%2F1uTnbqmd6%2BBr%2FPrR72JkJHS9WZmfaeLO6WGQ7r2efJPi3n0O104xdabPqzofPB1capEWgQI1gT3a8l84zPK%2Bb2NrsRQM4E1%2F%2BnKtJ0NjN2FhRAxPwb3dc3jiO%2BD7e0WwOFMY5nDgqwa%2BOvlrYIUqGG%2BjHWgotbfNtgmfmUmzBPxLRLNAGSPrfh4%2FaJ8p3fktYAC5P%2BVB3grjZzyFK4h3OagkZrFo1%2Fvdt0SF0lRfEWXHxK0AKd3Ef6pKik3EW8%2F6KwOuKY9742vVjNWZd3rpVa14XQWmR2uh6GMH4dLk%2BsjcbH8g6WeBnNScnUNRfoVh3ixUhBQ5tFfi%2BQRbpcUSk6ZD9ShFbQdQjxFOqYpuFGS%2BdeK30MxgetTFOFlsS0g34mncuWtf3RU%2B84oG9LVeoC0d58k3FlO9Gv1bdYRI36vV5qzPx7%2FCLcU%2BkcxXvjJhbkaJ2oWte45Wpw8n0G20y1rwqyKtHOumxYQGe3v%2Bo%2FTxNla%2Fp%2BOBliRgr%2Ffw0VInpCyPG1pEe3lVysJpEesIE3qRjOFYnij39V%2F4N8FSIaWt8BUFNIYnEwxdz%2BvAY6pgH16uJyyyza2gbbUZStD2nblC2smWCamyVZcJyw7WTILNODmXPLrguVzPRlepnwvE1GUdwGIYHjGPbZMLLPzO%2F0lxdCYUXwGln35tTpDMfhMe65HLR3GZ9Od72SK8EcXhHzw4ZogFqxlVwrJWfgjklwuGsz4E1iypy3u2HMN8RCx24jYovzeZWXabKCIyb4fGMwEDl0ld4c%2F1h%2FBk2ewgYtOvP6LSwH&X-Amz-Signature=0bbaae6b9c49b43bf9dba5b6b155105c56c82ec708edcb72db1f1e7ca351a361&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVQZVD3%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T220154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTYlAFKuSYiGZI3ClHdpb3x%2FCShSrY7X%2FpPO6ddydpgIgcPUb1YdUW0DnPwAgQ%2FH728KZ%2BuhD9Th0lTz9QCSEoRIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1465sceWvDmE41AyrcA3E06m4tUsnskoV44plqPaxegNAUhufG%2Fk1uahiJ1WBzqL5qswMPhREcY89HTJnN%2F9l3IQCOZ21zlrjknHUjCsM4p3YsU9XT5o5kEt0M%2FvUKQNmYVx8BsC4d9oRpLHx6wsuI6vFXs8V91TeIIFzS8A53vfJuj4ztxitNVmKIpYiGIpLIuV0Wzvm0lhQdfAOA7chWjIU1n9Q7usVO2%2BohxJPvJ9EpL20n%2FBS9FRo8%2F48pqhRS2y1JTbjIsERSZ4ODlWqrt%2B9DnclR7oFa1jVrwJje40jsxB6pUEipeLKg7zmEqnCM1KMwXdleFNSjr%2ByQ%2B7f8wgUIXtb%2B81mvtrd8ztgK34ArmLNlKRSVROminKWewAUPLC9aV8vwuo4UKzE%2BUHJWf9CcRi5Q3N0l93NTQVTTiwkTSPsVlrmEUKj7hXQD6Wtc5JLOxvEFIplGMC4WFnRohxt%2FwmaOd81ztYK16GChJvZfHM8IxWyNhiMs35azSwunoQyLSUsED0FxnDRhaopDMBka11JHc2e%2BXz3I%2FTQsiFrjAFqEUvsgfxubFRWqmqg5E1bcrNxtXEVv1VQnWdb5oAWzFhPjO%2B0jq8sbg74DiX6nMSMaE0BcnKrclTyNrA%2B44W1%2BWeFZtV4fMIzf%2FrwGOqUBpEM2mBGa2rRVhO6j469yWdgk16nw3jhh0phESqSPOkeM62ySO7S6c1CZny3KgRfH0t4TuletzHjMUyE5yfqjdfASwkCj9ZVLBVPHT1X3kD03PUk6n9RxJ8Xh1bJ%2FTz4pOX8dnfaV2%2B4aej0TkYD6iIAajrbIY688L1sOEgaMq7C6uOJle18v6xpuDC9%2FkI60%2F2ZZKU%2B%2FyHO%2BAun17ojgLY2UqaCt&X-Amz-Signature=8fe75df60cf3bc9e141c293c011a4fdc9f99511a5b6ae9b99f19065c4d56e923&X-Amz-SignedHeaders=host&x-id=GetObject)

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
