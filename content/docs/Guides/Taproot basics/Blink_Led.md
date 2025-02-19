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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RS67D5Q%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvD4YTzTvxLFjJHmKj6StDlHM7kmRTEgySgTMtoAHGOAiEAgcK3BDUWYLSfJ7S7ZBWKexaOpU8DpEA3Irw3ZaSuEZ8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZDo6RRC%2F9TdpR3GyrcA6h1Y%2ByWRmdYsuNTe8cwRvJyAVezCO12k46PUTAxjB33SoA%2FRi5PBbanAgfgo3VrLtQTTpEnPxUtS1vYGmi5h6oJQQIc8joaY7%2BiSd0tiuGEZuA6rGkDyGH%2BPLTMeEIO5kX2%2BP7xxLvzUEGTl92u7hEBxkfAnYlVJa6i%2F%2BLwDADcEh%2BFFcN%2Bb203%2FZBjQrl0phmYh6Z73iU4F5E3C%2BqDvEqJ7%2BzdxolU2Ysq01HzpQoIUAcqcPKrdykIjNjuAJPgqY1VFhNYgzmqb2J%2BbC5CxsfIk4f%2F29QAYKxZkgVCbZn8dFVU4MVEkpjZxWQnQ5z%2BI0Z5JVzaGS31wUq2EIzPL5HfvVRtvcKUNYiGDH8K5U1HFyWqwOWPLAL5wiuLCc5ZEX7rowOsgSCHG347fHEYCNFE6uc%2BZwfDpSPr2yt0va9cvd2VsJyH8wTkIHAcxArngSBY9GonPpfM2hxXiXsX4AUjMdGaNrmYVSyEbiIn9fZ3Ly9J31xOJi0qmBkUoy30p6pKnixZKcAkb2AXF9a6gV5uN69nAfKHCNPS10Yvyw%2BYgZyvBFMgQ9UfYW1f1Nf6%2Fty0U95nKB4fA0JfcvAgQlP7KvLc2b770PUgQikObZIVB4EKN%2BzWYyBIDHckMNHu2L0GOqUBlwL4KrLfJc%2F4Lv6VZr8pWp363XCyHB%2FN%2FNur5R590kvOzYi7Z2pxHI%2BsZ2F2J32gpzSqB4IKBOJ6q80zfZ1JuDYsmV8ge9rn0AVVqlmsKrzIPWCj5%2BDTrQJaD3d6ptGZVPjLYivORVjAaOU8xMMgcRIhpHWXiGPRLAwjLpiW9ZxJDbjIchIetXNNzjhRvbEBuofU%2BjSvxQK%2F70WdiIocuLRsR4ks&X-Amz-Signature=22f2d35d19c8ce5c657075a99a96c5a5a6ca3f10e64564d8b476990e11176731&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWHRRAEG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoM1IP7E%2FUFYophRZjo3%2FTFmkFCEjGzwLEJU%2BD3VEpDAIgX%2FLC0Qkyc82IMxRsXQUbADBIJpxoTQLRivcSXeWtZvwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVb7VIynTpSAnW7FCrcA3HdnphLq6UXukisGrW8c%2BBpXQQZVo135RbnbC7RT1AbFR6Xr31V%2BT6thQm7cePCNVzarZTvSBB%2BQlSckevuVZzugKkhDnPRDuZ1piNkkuOTjOMc54x80PUmS786Mg2XnbEtnBo62Zm78fAn%2FlLvcrT3ljtumKsjLx3qBMQnRZEMNXSqYREUWvZtpDvozmUGtTaDLecqT%2FLIDuaPQ9QgqRSPY9zZXE0YL1dfYA5CMMWIqSeCdBMb%2FMbYAbnz5ZUYeGWVlvcUS2PN4MYWf0HfKU%2Fvs5KTgczwb9q9j%2Bs%2FxaulFtgCgYrxudM9DQdFatBa0oi3z16Xsdd6%2Bgipe3Ef4lcnalJ728zp6906ka7gZRmd3wMCRL0ZjNgDLnJn4weXrRSrzzj3HW3qPYfNoJUiNydtBfMwBdEbV41qP5%2B2XoBsbRX5057WF2hXMV3yhyh7cvpU886essyGN5TW3vDarpEWMzurgZvkrntattePhfSTu0Yym51RvmOIRk7srWcjRh3BKJpVJMmfsBDWOVHRTZ7kBlv%2F5F%2FuC%2FRuC6oErbLVFBy%2Fl%2Bk3PzCCAzKyddWH6MhXusuh9xSvqd%2BUqVWyzDrmJ%2Fk9WRcM9zDTiJaWM0t0UsGdZGn0lRuymFVxMOTu2L0GOqUBw9U9yv9g1epGrKiH8a6IpFEldx53cK738vKChnP8Wc4Bzwyu7vIg%2FNQOuee%2FyoKPQReG%2FwEwi1Fe6BRGbE5GuLSdiUYI3xUAgiSTPZ0XNHtpKXniaboz88oMFRDIHs521Df3AagnD9rLrIxIagnu%2B%2FzKU%2Bc26Y4ZajKG6rmrW3wU%2FWMUo4YWI0d2dMLllhAXkVBrSkTf6qbVAysoeYQOjEHNH0kJ&X-Amz-Signature=da51d0c32a1a6245fbc2d8eb2c5f39ffce248f501725068e60ee90d07de378f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
