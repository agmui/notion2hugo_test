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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56PEARC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC%2Fzve2fz1GcXfF2x9Hqd%2BCQ6%2FesRMzpyC5D5K0nzHQwgIgehQyaY1NYQ6PuWe2BFygkACL3IazOlbktwbmgZVM0Ckq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDAaRmwRPzYWtsiulgCrcAy3taQsxyVa1dI3SM06g0zrhyvavQ0J7hEMWmMuB5atNZz53m0a%2FY4jhE0cR9NS0WhE22DiLYdl6g3aQIS26rypQulU94oXrRr%2BAwXbuZ3cUodGGkSP6m%2ByrbmsoVD919zaFdvPAWZhOEPmDzXqzT6otKX0kRn0YGP%2FEnghRk1fZKqHKnWq5Rd6OBu2cXt7ZI3Nd0tEM3kv9E0MWrJYa21c7MG0FPqi8SZI%2BLJZFF%2FPvj9y6oYI14lgY01r9qg0RAJfRdHTSsUhz1juzapD0XeYSyAiDAU4QRt3Dcw9XhSxycNogzlEMFtvUFIgd%2FH07EESJaJdf9fpuK8kBeMtGPH74HuAVOQoCuhNtjh6LzUgams3%2FFUvz%2FJ%2BuNYu6vjIzU2Ml56l7H4P%2BaNTFsfzQfVDjEepQb7UVXKfUXxP692Jkl0CjSlgR1crWn3XffoMcuhEcuyKH77PBf7%2F%2BqTTw37yLKN%2FNmJUQafTTMOw02mDx00j%2B5tcVYUnUMJflsbarbQqa4xEFciV9C9XOLzelUekaQBph8zHm5cJNqmAYo02M7IaLyUe8wUNVyOzJMY9X%2FM6xM0IhmF0bIW2p16eWCj7xHHDTpceB4snUwh4RUTvP2cVlVpEJlUoF%2FKf9MPy%2FhL0GOqUBR0b447FjQZciUg2fpHomTQeTA%2B%2F4mwZLCMYHJ3%2FtzOL5Z9vgYGJDAYJVo%2FD6cjD8%2BOEDFeJ513mM0e9PNjrOBSATJ%2Bb1ZiyHQ3BDje%2FZBe3wUla7LU5HZoK6aoFkw672Yyq3CYEHVYCmQbXwi2ydTUo2iPC51dwaNafEGG7mql0Tynsou1ia4rtA%2BhFr1aQcjSqoG4x9Ww6%2F5y48MbyPa4szdQSt&X-Amz-Signature=12e53d86a7f0282011340d307fc22041df868a4ffb506b36e8ad1088b2fb797e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6WW6UG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIExSfzhXewGyzJLz0pXV1PvbA9jWYf89LBQ3tlp6huSXAiEA1XvFmkTT6f4XdiJXoi%2F5p4Dunxsigt3Y3TonB8jgfRoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDElU8HLsH6GawnAFUircA%2FKoTgEhiNy4h3ZaP10Tff1sOi9%2FXXKxZTj6iHaxNdc9bkWJVllw%2F4rwXf8HNIKABrw7gtzVM8S6AivI%2F3ybIxuYZYEcGL05TqbjF9y1JL4Z7U8Gy3QqUtuvbKAAW4U61QQ21XjvqqTJzPueflbXr2sEQgWsm5OVlO6OxPBjYJ42%2BpRkRCJq8EmBsiQlibZY6D48AZLp8jSyH1IF6lNxeX8Js6a%2FT0QX4Q4b0DtkxxoL7snUWwlLDUaChKfYgTCxqXKkl2U8i%2FL3QdNVDNGBdERfKpVmTfOnJ8B%2FSnX9rt4W3Vr8RGaczz2q927nJlkkzFEDPaX0vmuJrKmDxqF22iAmFvxTitUuSWnTd1olKDoE2mrqwXx2pEhX0xjRxGoqcDveYjTi%2FC7bfADRuJkN78uj1Sh5rvawWsmO7IpzfPzlNOU%2BlXcZxONRVodZzLLaocJpRcryftix64QmZ4ETqMz3dhRShMZgSTl7ixX0SCXvaaB5rA6HMNULAOJMd9RWaQ4W98rNFHUFE1yZiO5YoIPLbdSWOFR7iTNXho0iq5T2Fj04VPjW0%2F2BUSZ1TpR3GgTWwRqgNXmIqscP38i1hGW808UAWK41mb4NjW21M%2FplgFMTvsRFNcQ7xxKAMKvAhL0GOqUBOIMVTS5TBPxI%2BHrvcnd3MU1OHqdnl%2FIZgjNnd26jhV5SeqN06wBdt0ARrVU1Wk%2FJrTIydVJtM9Z135Hpgy7cwCGcisIkseAMzTbEL5MSerjiNuu8rQg6Z85W2JRzexPK1LP9iy5BsmJU1OLLXAuWEgugYp%2BhhjKWnit%2FzPNJMGSzs1cMDh76ol9HtnHytiXjm1eK8XPpmjdfnO5yk%2BhaE7VlyL4K&X-Amz-Signature=39b78af39c0bad19e3b7abdf5ad02bcfcdd0fb37919d9ca672ff64444e699b13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
