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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV56ZGF4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPbY7T8rdoxMagM1QfRrAKy%2F41o59Qv1YdknC3MAU9fQIgOWX%2BMS%2FtXVCi3PZ%2BIYrGehSp0Lh3tQ%2BEeMyZbdwO54sqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfwtrkMU4GVASdLWircAzMZuvLPsWaeaxK5PBgDKyYXwCA2MtZS6%2BHOnfAw3N0%2BTxdaIg2wrgpfkNmH2dP5ubDy%2F%2BsfJURFqmEzJ7mKrVartakazTHzN2PvDFkrXmQbiKdzInfzIIpC2NEMR3cMok%2Fzypa1HBI7S%2B260JHiO0a%2Fv2DfqUNcJ6y70YS5aq%2BodWcnhu5SN6o805lkaImty5TR8nUt2cro73D7tjeS8C4ksYruf8n3wScr8RwjoezIkCaKgdO3qHzevpi7I5mRtj06fhvyq13u8x58pUm%2FSj2K2foa9D0uyR4URtEZuzEiq%2F22EnzM%2FpaL49lw%2FC40bMezHkhDgBgHypIFRilEGTzkZwxiXd9IxzDPjQY2snfa%2Bplnjfd8WKih78xBywKjRUj3ksNwneYJS25vt%2F%2F3owFJIHqaYzFCwjUMl9ZxTHeu7rF2IqXyHHZNynmUTMF3hzPinWy816wfXiJl92uK422MhewAIAlKLoi3b0KbrCShU0zeHbLKpN0bLia8phQtvoxahk6MG9PMX1aUIu%2BBRRn31ZiPcrcEVc2y4%2BHz9dJ6fu%2B6nwU73FU6PVjiLC%2BrCW4a7%2BURJGZE4F97a3uSpUuSAPEbrBRjdmozBrlQt%2FE1qawpxL6W7VO6qz1TMPG0xsMGOqUBtw63P%2BZJgYE8m%2FULKbT2GA43PExFgXNFI4bAoD%2Fo1delytCJ7eMroe9SgnizXqjvx9H0IhY6x4upW85cqkdXhi%2FIYgeVaZkBM9wCaE7vf1PbhfPuVSzJWjEFz8m9rL3ay4p5JQ5PdTxSsPn73ZlQ1XzwE65qlX659mvTKRxnQVCzsnr%2BK%2Fw0j2rciFZHnDr0Vx6VdAflcEkZUJLs5%2FqMNH89Nft1&X-Amz-Signature=760c1a6f507167110721b2e6449708fbbafeb95b64b4edc20466f6296c7ce427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P7ZTNBJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaf0iP3GPRZ6O5Itt3dwror90OSPPEcEyRXvIl2VIDiAIgIT%2BE4JejzxOHDAUTb%2F5rzaLkIvmjRJI053rOEsJk3KcqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuam0USlfPG%2FcAC9ircA2tXjDufF0PuhkhlB9%2FkyCSGOXymQzb2lGbu7ru4dVeggX410ofcUHvwRHuIzHV%2Bsrg4pMerj1zlbAr3FrW%2F9GVm5va2KzJPqf1xe4MrMqQI5nHiE3TIya%2F0J0LHlpXcssModBggqbTWda2xhkYtC8lHW1hl%2BLA%2BlKbwuCEdl%2FxbpJhx30VGBGgZjzwxMSX1RBh6YQZ%2Fw1RpfF1kG8dRosW%2FNOwUDkuY04GpQFaUojDdhiOTg9r82Gwkp%2F0gsYuQ9J316Z1G741Qe6DgjRIPUklc8ZEp7eEcMSquAgg5PUSUGpkQEvnh6TZEx4oG3MkRu7mF6iVCGjanih%2BgPGMOWNgtPrfzgiPmZdZpug3f4Rglb818C3NoYWtnKx7bAtvjZh8%2Fy31IKq5oOk%2B%2FxxMip1%2BX1ChkTNGvXzYlG3B2qUwtF4G6B1kl8njkNOCtxNOt3G%2BGnJguBE4UPxIn0pYy%2BUjYrUGNWS30GyZf5dCgs0CYQ7VymfJ8hZEYjFHhobd6ExEdvJnrGR4TIy%2FRIu8m66O8eLTUeptvCM0S%2FiC4SI3UMoPZCeo1o2gzTuKylqYQZ7i86YTSDl7mZFMGymnazhVlhDMkeIxJa%2FVn6AYFu5ZtCZcvhzFKlOa3%2Fg1cMJS1xsMGOqUB4yAbIS%2FbaK99B37ZepoxinFLHmQanHhGuDcG%2F0ck6Vy8UzBTgqDrbPS4gcOWmDx3KxoZhoVsp6nW%2Fdnya7zGMuJhd98h07soYen7dtxPCoEV3gvISZyH0OrCRMjaw6mDVtoVjgtlOhwX%2FAXkjhxbNqY9sWNgQrpw1mSFghY3yJZnHF8eK7ljtNZvPkfVY%2B6aYS1EZgHqjEFnp2j2R1POZdsVZJH%2F&X-Amz-Signature=1ab289702905aa35064d11b422629c29ddb835bb65c5f1ee0b65e2eb64e1f553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
