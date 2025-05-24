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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CXTDQC4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIC91PwXWyaDoC2EwKmSrQoZYU4UvQ4f4wgEkB8DApfibAiAmcuIFzGNn%2F8eDQwqbXaOScW6w4QgNLhI5Zqh%2F6sfWgyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMdK%2BtpFTz5%2FO5W6RhKtwDCleIKz0V89ule1ros2x8jx4atOV1Fo%2BJC30JpWGVJAhPj05yidMP0qNvNA1TV4gRFP4ufdW7pqGX9kR5TbO0ZbYGrYM3SL3CfM8OhbfnR%2BN%2FqXt5Kb4mrihbubSJ592MXBhLNNl8zN6z6EHp5wxJgqel0FTPqKU%2B2oDIRRUn3Bbw1BBhZYCHjK12CrqbT8IpoDEtayQtaBB7yueWG2TmAhRoWnhMgvlHmB3yPK1QXnfOHCRrreD2UXrzn3O5BpAYhl63WTl88PBgkvbvrf5gEkV7eMKk%2B1VTTh9SoYWCh1v4TTVFZzCHMV1lOgm2JkbPhrcLpbnCvLAb3xCRAB%2FbYzruGX2gH8Mnu2yH7P4dqRsgaBOX18tcof1lUwltRqzF1uOwE57P%2BMQL5NvjM068rKhcu06hXCpn6rnr1n1%2Bdq%2BERPrtkORISnzOE6T%2Fp2RpJ1GK%2BOSjMRhrX%2Fc4jCkixhnHmuxkgtKAEYAKz6fmyj%2FC3QoikNqQoWzrYHct4c4cRaAViUPHUEcw3P4ImctBtsFChkx5g37D08%2BX4myQumBwAiEkV9ctqwBbBs0lK5ZqVANefXj1Y6gExM1Dkm6HDBxeGkmeCAOU5UsvRr2A%2Fv7Mbjv5D6hv2j%2BbUckwuYDGwQY6pgHUg8nXCSnCZpVNHw7lgDOE5aEnZEVdmjzRufUyJNc9Z8bRO75YV9Ka7eeDV2IEnETYu8Pll%2BhlvHOS1Ez00XKwaZ7Vswc9kbEvGiKekKkij5uiZCCQ8EpAz20lo%2B6CcWGSIlPI%2Fg0%2BzKQ2bgXHILDn2uBjCdPQf7rcj2Cc3a8p6JksWSItPEdFQhL3hOfcmAK0fjjPeFYCu75UFRRS86iIBmr5ZgyS&X-Amz-Signature=a32b4231711fae413f2ed07f4e2dca7b2ef8507754e9dac034e6a16ecaf5ae71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWQAYKQS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDayoxS23VBraYSAGBGejGfzgHARHVpCThAMJm4J0lhUgIgbFrPluac2WUSitEna%2F9qgWAqBTgCZkXekthwQK5EijMq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKClhLPsNw23M3N2xSrcA5amtGI8ii%2FqLPpq4qnTLriE4lASDEhV%2FY6Gh80ncVpFzzDEqod6yfJfGQBubM0IFJy0knobHC0PJMEJZFUyWCbAtqbBz26WoZmkAgImTGupTq2c84REN3%2F8gHWY1qAFuM5zu1UVRaMw7VMRu6A7mwzCo2sauRSOk%2BQCleFGUG3RzTgeWWIhCBbCLkNuOQeG2yX4CpX3Lc3XwmZCSvkkBAM8AZOpq0i0RW3HnXENIqiazkCEEtvLmFKsZ1vXQp9AQUa0rXUlZQ7YcFRmoQLgSC9fvHRBrII0OKwF0jc2hnJQpGW8gkEtmNS40ko28SolVOcLMmtl9TeqdIffucAQkgltTsS43Wn0Kgfohbvb6XUpiBTrySCIKWasc0YVQWAAtbs0QxOm2iY4rY82UrSL7IftUmYWjjHYqIqwqi48rTo8Mi0sRx2OBioNwOEY6sRch4N3fLHhutNJ%2BPHoS%2BFzU31ewoIbbbMhbFpL%2B%2FLJ9jUCMnq46dB%2FSs8DAlDMT%2ByE9hVCV4P3V%2FbBkg5ZZw%2FbaFT9WzsUrAGkvyTHHhZAmOhVF7u77IPiCMLex0Os2RLLyKee9eRtTNlwj9ofrV02e4SG8JvebgGvoZVvsr10HyfVrhkuGoGhvU3GTbxRMNrOxsEGOqUBWqSA11UK%2Bap%2BA449uv%2FpY7yDI2yhEL9wga9DP8wndK%2F4bteGydezsOxOqnMMN%2BwpUjd3zJcqzPh1KiQzhKhhnvP%2F6Y6Q2fTr1xlAZ9BA6rfS4mvfiDWWsRV2Ga%2BmfTjWeijD%2BL3bKkcnwoRLhMJ6U1Brj1kxhoGJB1TmQPx%2FBadYq6mW3h9IkVVoTMUTvv9HHqvEsXL0I%2FGXvGwNEc%2B7z7n2Cio%2B&X-Amz-Signature=80940a105d5ce902faa5a31cd9b6958e0580a56a1dd8cc3e70150b83a4919024&X-Amz-SignedHeaders=host&x-id=GetObject)

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
