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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHAFIFRS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwd%2FM6ycnTUl5gDiJ8UuihIE%2F%2FsUmau7zjffo9QihbHAIgIv42EY1fc36mlct4e%2FbNYBWHFUYExmq%2FqJB2b7TCGM8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJS%2FAGcSWGJom3Q%2FvCrcA8I35etQCCGJ%2BUZMP%2FyY4jEqwrg6XHMpeIYoEio05APRNPPAqHOlAVnBrCqKzwaayuW7nT7OfHXiK0xr96%2Fd0f304toGrPo6%2FrWXgtTgxbfQ%2BA%2Fizy2PJp7UdybrteFcY4vNfqsK6TKW0BOwJdnJ5RoHuyqMdye5VcZiEPZbB5YGjnLuv1%2FnR9D8nfvyrD0J6cKFyPW4YLUiKTIOGlQK%2FvWUWKHSvDlCjoq03Xy1Ku95Ua%2BhOYgxCE1tn%2Fpyb87whl5W8qTSH4hlunDjqeNyowE9b7lYocp07o28lOVPiVtqpKl9Uaai3yn6HLOqS3Q2kX8Zlf3N4cUM%2B3T9yFZhs7DurdVYjXTowvMa5fZn4%2BWatSpLD6KbOX8chp9k73BE1lvuzbaN9QJBzgqwgAcIN466%2FRZ36Jhg8P9unINn%2FZtbDvS1L6Xb2pBbbOv7melTUH0rcYKZk3vOscrhZxtUxQ2CdohXkhRM4%2FaXLFzk6AbXrgnGfmiWcuMOrwHf%2BdUQxpWzN2WH52fdnbbBeHww9sPZVc6JWzXQe3R%2FgOQC2NJJwbSCO17jI5jm2UlN8aMW08Uaj6FW5HMncAzh39rQ0huBg2nDZv5XXzAoZRGcsr4zbYzwLElM4svsyg85MPeW4sAGOqUBx4UJ2P2KcFPLuPAS%2FKuipNG337SfTgLGC7HkjwoF%2BoQBnnRbtGNvpNF%2FQl3U5W8iSnQxRrUR78V3Sb0Ox676DUfDqE4%2BfGMunxj%2F067R3ulVOrz1KHNg1gRLGi11eUrD3UhT4orF5rp003dd%2FfYt%2FChQO8y0C5B7jz3lE8LZJzx3wU7cwUR0YrRI2Q8nzF62COovxTiZW4ZL%2FkcrbMzDqRUuHtqT&X-Amz-Signature=486d283d5a414dae989fc1eabf6c8df2088279a8f32ef0359f89cfc1eae024a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUMJ7YY6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcKbNdZUpKxfsQTmj2Hzl8MVL10RTrg6vLH8h2s5nAbAiEArJmrySFeb1pC1W7%2BNMKgZmgEvY3LrrVbWlTBSqkiSaEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDC6ZvWFpKBO4vDE6%2FSrcA6wQRcHHUhEkIzAHjEXUqR3xiVh7hSkeYGTXYSHX%2BhESbTIYFviB5sC1FnnmpdWXmM6KOf8uE9gMbWOnL3mKEh3hQOIita6js%2FDLMRP%2BH04I2%2FyTBpGGjUjNtFru4FvTG93SPn4YMuy3FVB8j4vJeQ2XO%2FbkPk8CzIHZnFaYLjhWH1M4g%2FlxzVO3ua8DO7kqiyKFjuttUzpl9szeUkEuI4p8ppcabfNl0zz200rW8tn326K7PxQ8Oqv2vohWM53ICQ4dqMia6rH3EA5rIE73P%2BuzyjVBOgRf7nbwVuuCErfr7g2xg9VciBySb5V1vC%2FrTs7c7PE1yFC3qIxtR82N0D8FKvBB8o2O9TE26KWljx7qH0Rvv9tQCmrr8kDy6mhmM5ODyksZb4nXlNMdhAdHSgW%2FW9zgS0e2i6pCLxAgYqR6XfpcCRCqR9wyyVRP9ISoCrRwFisSwnwySJm2n6W0WFeJCAJ939WOQ9YRUU7pVYPISW1tLrAAuuQvvL6ja2lG6p9PzJOqaAHdFxSjCr%2BLeqaaxu%2FroehzpCoZVL6hF3EoG08QtOcQfgDdyxxKUSfmjRshatkIFjlyiYMjQNPHDpKy58%2BhTK9rLJTEAx3rAGXHlWJypP8pgCnxMXtJMKm34sAGOqUBPuVG0750VoQvTMv0N22Av1IUVJF7njejrYeD2KSbnt5J%2BAx6O71%2Bmz987CTOt%2F5pU8ETinSDgmZdlz6n8Dsyk%2FNqCYP3ypL2By4U7MXPawT1Ll6oOBNHx7L%2FdgGUdJERwabup3mCuFgSXCDtnN6HV87Eskn2TqW%2FcFTuUZu5fP1K%2FSGf%2B2g8floDRbcVXQLYnGbvfMDGYBfwOaf7uKwfuwx1PxYW&X-Amz-Signature=369ae53e5810445667a4783949f8ff6f31c61bee2d8b74613e1e6e91e096eaa2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
