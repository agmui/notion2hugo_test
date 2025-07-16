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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTDZKEXH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDPzEc1gIfa8yX6es9033PqRCSdzvY%2FhuBMnkpgV6f52wIgQ0FsPb9Kvkp%2FrX8qRkatUK2k2pZRjzMErbOfEyySTdIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMaxxI1mSiI2rxPpayrcA%2B%2B53dd5odDBM9pDgOUoHSBN8Z%2FCaT3Oxm6Q8haJj7qmkCK8VnrV2D5Sr3gIUqQSOGpTnD2iDfWkF96LGSJDTWRU1ml8JZYWNkPm3cfoLqqJ8gtgBrXr7QUX%2FmLv4spO4wvfwhL0ASyewYOViSFzw3ftoCa0C4qQlJy5tJnmRXQz%2BMTJhigRHMCeiZ5LyJ5r7xC%2BU768orCTx80IfiVYorS%2Fr6kPpIARE9ORJnkOQ5oDc742vxROfFOAgH87OPHWhMoTX9lK%2FzNKIqc0Wgjw76ihv9pbl%2B6o6v%2BoqzZjRyR%2Be2%2F4mSGuq0IW0hKQPakidPERLL%2BYH96Nplq6TL%2BrZIKGy4pqKO3U35MlpzdkiZaWhoHCtyJQcP5pPt8w4om5dBcobwtK%2Bbxk06A%2FuM2fNPt3GJkhEchOMCE5HsJmynmEGpue9y%2Bmt6ugsVN0Eg8a5gO9k22zzTgGsi20%2BKgUhpteQG20wlIMFqMlFgqWYLrCCpUW5IiS3dZdZic24KvHSPWn5aeOX%2Fiiz9K84S%2FwMgqkfBv%2BlWP1EtOwGmuITMr%2FAvUAgURf8ik6WnI51cyCx2GYXI1jBDJm3rBhp4udH4Bhcu98J9A31Jj9Gt1LbfQj3USfy%2FUSDRaFo%2BW8MMWT3sMGOqUBF%2B8kGeHiTvmCsKT%2BV9ohInbyHWSTXp0POltVkyJq5M%2BVcUPOlMIfAymTVP7k9gAEtmcQg6BVvxZLmNygFA%2BoPxpyyS3JCsFUtOInXUiqtPBaApsei87nVNiNAZ%2F%2BEVnE5LPfn1Oow1VbEdxIZkJIOlN%2BxY4d8QT9KbADJ8rORrswYJTGVd%2F6jDaGz49fIJqQy9YYJ0Oc4UhXTl7dsWkq6aARqmZK&X-Amz-Signature=abe6969dd83a2c94ceefbed8da4e94a831f3e0be708c257a887b5ce573e9e85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCTZLCR%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGBc%2FtTBEhss1PCfMQ9VEa8uMoYz9MoCgSVF28tjxCzfAiAag514c9kvWKNPLsvHpizbvCUtt5HLcMmJQCv4wNzoYCr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMlDYYZDMK2dlVz%2FkMKtwD2EFo4y94VjUX%2FlgdauRpVIBSW%2BnKTXJBKwj8qQHhffDcAJjn3CoMYISzSGCqTGHjpci9er8zhgaQz5BqVwS5sJaa9u5tgdiretw0OTxYtK26tmhZRvIvm%2FEyPZ%2FWvb6rKAPTBrp1zHo8Krh3XgXlE0mK%2BzNXs3Uk7gTXU72JG63VPnEQo%2BbLG6Wl7zLQix5Ko4FrHwgMn%2Fn7BY6aNqgPx7qrol6HjMcGlDOF7QGcXJcBm%2B%2BFXRq%2FR62vYFsZLc1su3GsiuFEbtFGEOgbFh%2FD3YdQnW6l6b5CLZOemCKgH3W2OLWkvdV01%2FFnBJd4YCGd3CWTyytoClTIe7TqIsPk54WbDMubC568jbSOUeRQ4D%2FR1u5RUqWyuG2zGXWlc2mKgnEa3o6NbmHqs0jLr1S91h5nWqshY8VhxDRyi9jIAM6OfW3rYX8jPG%2BSeS44KO2q1iatjzZJ9jaObaCYe9r6RqR%2F3HjPvfCb5pQuQok6HhK4tSAqSkD%2BUwDLAdVCJ63OKF1vc0f8JDRY72rSEbk1J0uQMOhc3YJ9r24LPzmPFojOJag3oHo0np%2BzFuSxOwyNQ2s79Y%2BXbw8TRDlVN8ADRBmcXgPrBwoV%2FyWD0MSDmUf%2Bbi4%2FiEvSQ66dTBowxpPewwY6pgHjNv93QfWP7aG%2FDK%2Fc1ZqIsfY%2BwAMySC2P2YRrBbYzTYfGg9htF8N9iqy%2F6yPtw9lXp3jnZCa9xTzYZjPbL3U2riJYbzWUNW8padGze%2FDabhpElAr6f7gXdBUF%2Bs0KexMKjhCpYARZe%2BHfgLA6gBe9MJNDBqs6g9iJRgEuZ01dgtppQNjOzwc3i%2Fb6ubiiVqc2WuSIhuKysE3rAPyAf6XfAaOffU5E&X-Amz-Signature=6ed143545e76061e0c2325ff91d4b4f750cb945c77b2442735a68641f1b678b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
