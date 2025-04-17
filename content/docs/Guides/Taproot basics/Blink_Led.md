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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NNEZPS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPXI2w03ahFijhOjQUsJnpP160n8rXKUABPC8xYzG0YAiEAosQTL54NK7h%2BxVOftOHyvQ6VlWNV50Ppu3cFkA5IVvYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDB9sae9ECJIHUta0KyrcA0caJJLWcaW7gHwwOj7uzXHNaDeWLTXLgmN9poiCuYWDVsgoLLixarOvD7BsKzgmc8DbWfC94lVRjuqCH8lb%2Bc0HqVopxXazDiu0nnF8R1gPEhvcvadyx0vhwZ1TqtuobpZRcwZysZJ%2FWD825J0QTSTzeJbjQ52Xar3urgxSp7RBN5gGEa%2FSn6rtjbBs5UMFgohrDCwsOtfXf9SvdCimaklfnZpfypev4rJgAgaipS7AXQgsI%2BXj%2BBWhIdnxNPHi09oliJlxcHk3R4JWTf7KTyU2Yn6KGH%2BLDhdrT0OdLFFkk7t8KAU9HGZIwpSn2tCGrHaZmezNtaSU14wauCLEf9IUTLwh9yuto%2FeNb%2F0pSHMvlRHENYn2CbAWRcJnX0zx6ntxr0v1wGAcYc8X7wt7Xcnm6f2IBgLPsFFiaI9bB5kMHCGSQj8iL1npccLPYE2YqezZDJ%2F0NNNS1cR%2F%2B%2FhrdSxPMDEx6m3tPtF4suJR7QjKtYm7S5x6DOH9JgmxNLGm%2FqOzi5Hq63N9GL61LI15cT%2B9z%2B9pCKYyGFhCShQokVI7f6KVqAYOBjSNDabXmgT0OUo1C6Q5lN0WuUU39pcWnWrozH%2BED6KZ7nPKNvXNr1KWxm0tBPFGDN4yhODiMMTQhcAGOqUBUIhLcdZbFqHJGSQYAk%2BAIsctsDZUQc5rYPUMHXQdUKdwLJfdqnaZmSVyv2zZRW%2FEX1CbwhqrKc929ofsyQjEZAgUFCoN5zR%2BX4EK0y7UeCMIi%2BPgSP0Njce2D0awsNfuoK5uDSycV%2FQ5kbX8tIIFNKXlBFzQI76%2B%2FHRGV11S83gVU4rTLUmusOvzffvKhZyo7aoWp28wcHMPtu4SFlp1PqVZcSH5&X-Amz-Signature=734020ba0aa9d0387530fddd34dec9def3229bfb67abb1a892ad603fcaf3629f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZFJ3YX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5pI9gnitWbXZcu6B7qHoDE0HNYtfpy6qCwdpF38kHWAiEAwZATrDuXwx3effYXcQPd0utanQkxjTO1PCdAak4UBhgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNVnTk5RqNFXdsLzJCrcA8rwDSFteTvdE%2Fkb2SgzcliLUgP%2ByWOm6W3WqxjR5NcJaQTfhw63Q9IDZ8I%2B4VsHO6xqeILXvSiw2FpCX%2F%2FsnAnON2Hs21Fi74ssToM9xbILa0bXzb%2BE349C92rwrjQG%2FT50U1IaVwzEnLzoC3AeJ5F4Uun20VhRZos6mSZZynH9eyEocaslexOVTNzTDSk%2F7%2FqpZbfmbANkTANacgo7NXlOPlwjJr07SuOMNoIaG2Haw4nC%2BgI63d5K9DBEQ6Qd9zX4US3nr9P7KeD49bjy4T%2FRjv%2Ba1ttp3GrYxsdTwfo8X8Nz6J7XvGvXE7SnR4ZNqRWjj74SPOk7aSqwyy1fCweiObjhKmu8%2B%2BwMeynbk40bqqFshmE%2FETggFwUg4PxW6r5v9K6N7OTV%2BvgHQaNbrpamxDf4bAiD%2FeoYeeQHq2%2F1vWXJWOVZwz0F3gguzz3D4ibRX5KfPfQUh33weTqf6xLMV0FCAbckehjljXINUlGF%2Fh04OW9Cp%2FxIrHOht98UBtMKj2Yig816jeCTrYYVxML3dzoeLphQ5kCzoCBvi1RtUiNb%2BA%2FQhk9DIEdFaQC54oqCBHf5xp6s2hhudxNj76M4wlNenQfy6pPoMKW1RlcDwkAv4UmY%2F3sTecNXMIrRhcAGOqUBPldPVinRghBnmgoCHPI%2BbrJEh826u9r5m1ut6V9HNhiDcr%2FeT4OG97JLosneH5qqfSjW1HODLLURUVLsUnfFwWW60oc%2Fg%2FZlo7Td%2BFHljX7j2OlE7ytMC9fXLm1Q8bxPjPNh4kRqp6gBOSWgkHsmN%2BTq9vJM%2F7%2FwQ97DvpFw%2Fvu7E%2BkWEcvqwGIEyV%2FAL7Y%2BO3LzgtLpZh8rnSJqgQAEa5IED%2BT4&X-Amz-Signature=f322ebaf46e1c741b6bf6fe7b6e3c6975ea307ab45fd03321aa0b9ca33df9cac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
