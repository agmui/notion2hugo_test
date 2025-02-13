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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBVJW3R2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAceeXpa1jU%2BP9o0%2BLyJqus9a6bYTTPt2fdFSZ1hsLJAiEAua2%2BMphBJvals%2FcyKeJtvoDYRbuWiYPabm0aKvl4jvIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0T7Cl2Gc30oSOruCrcA2Cr62%2BquRdXZKJtunT%2FETo%2B%2BeJAO%2BnK5%2B6wt5%2F5K%2BGRQwR01d9qgd5F7PAMtass3exoFG2ImLpwodTR4cIG9HUpRXcxsGEHGlYILtjQrl6Dlo%2BxghMaxy9hTsz3NIj2caT%2BXRj0flm%2BFqtGKdsCQ8KCWwU3vZbuxbb74uQdZ8eypp118Vbf0DVwMEpGdfxoPkVC9FFThd99LeiDAU9b2Lagw0T5L3o4mRE%2Bodd0wW05RIoaH%2B1zU%2FRJd%2BoguNevpQpieo%2B0UabucYT8ebxtHo0MMUB3n%2BpLU7pry5sk3CSO2UjNmZcqPQ01REgxXoeO40MWzNbC6nS9%2Bt9Deg%2FDBwkX%2BNZ7hFvoqolRJIqTGLpaLZ7JDDpKpv8c3qMo19AvNn%2Fiox8G2BmHIZdXel2BHGcux%2BY2RwUA%2BeWsbFXyqnac97XZ1%2Fan2j1CoJ%2BB4gzMTvdRtE3k1FuTPTneco46BF8AitJup3B9QGZthDJ9iDYz6LX3WfIcMgLKajwsaR5lwuBBQQhs2AkLJ5mds%2BH65j3tfhr%2FBfou9zPvYLZUquUETnQA8Zug%2Fo5xQWgdlI0sbR424V31Z1Q0q4ODGq9iSn78Kdcni%2Fos9j4itNJfBtFzN9YqvcbCCMoPld5jMM%2FhtL0GOqUBsu4NH65HzWxxeUROl5aUJwkDUMZ42Vshq8eTpu5GcPOssZYPD%2BdYAfb%2F2E0659G4TC501nrI3EaHGuEJplZCZpymnYyFGoJBfSJUxmKrpNfIIyUcA1c8pP%2Be1y3aOWyYDvSYOKaZQckL9IBEwt6Esb1osM8Epk5Ix8aQFX7qDTIv15cMef3lGAa6O8bdLGuyUNSA9IbmHbN2nwF16SyVornNCl73&X-Amz-Signature=b4947bf715e992cfcd90a852b1eb5e7df07bb35513b005c609761a63e9114718&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKMSTHO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQ0LNZhX%2BlOOXhSBlednE%2BD5LIFyiuR0bxHCSntxhDBAiB7oEPIBYytRnZx2brxVkYzaEFS2tDchejwGYnLo%2F6MeiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtBljhhTgOxvI72ABKtwDI%2BEOwAjsFW29Bw5oNmE9eaAGnHLiiXMiZBjE%2BlQ2kAINi9tniIKigCYcsWXlaKlxVF93%2BRvULiYxsuBLzqp07Eja0jkkNN%2FBKvxxLpLjiGR0veOU93ZpGzse%2F2S17yegIsVcsJFsKKC1xI4a2aSLBNXtnJ5o95ILZvQoiY5hpeFfSOEIz86QXJEnLZZ8iO88CcMWhmk2zEmS9PyEVurt9ivOxV0gSIcjV6K1xfE1oLLzyrYSpOL7Vgh47tVZqJWF2DqnrEVF5WeWff%2FDtxPweeuyBlIJJ72O2rlFTThMtZexo9r0lFiIdrzkZ9IcZ6o6MvqdGLwbc5c%2F1DhVKYoWehUc6VR08IiNmiIv9IfscpiJWmnIoeXtRElQVn%2Fxou4%2BYA2h7Quttit8p%2BIfxNjsohaYwbx%2F6W%2BkkofsjEVHhi4SMNPXIEokx%2B%2Ffx8CG6yeDX7NRzsA1QoPNEa5b2bYWDA%2B41rr41KXZ%2FzFP2jzxGdNtf0RBOT6iLR9H6ecC6KFiKE8u0%2FHflhDVIYa5IhfezYLCobxUYRmvp%2Ftfo9fsmYQr3js6buN1ZXrrVqVPMBIXFmWG9oferW7IH7pbNFXs0gN%2BNGVWlH35NjvAp3NsIlqhqDtzi967TpmNX4MwjeG0vQY6pgG%2BcvYNFxcge7nJqrZzNM9OFvewLPUifj4Qa7Jg95XsupiXiMlTelE34hq0vNDlKXmLGDCiSVp6Fd9yEdhZVNWUONPVjaeOrfQYC7Xd0z%2BJWV%2FnrdUXDvKP%2BW%2BA5aHtbatS4czpYF9zw9huZmYE86tgv9yMn%2Fls3diWaUPwHwh6JH%2BVLknCiQ2GJjh%2Bv6G68Xs8Y3yRYDnvkH%2B5xgqvJIC6bKAieCHT&X-Amz-Signature=b2ab5ac85d3a5a76cbddf5baea46c74c2f0ace755cdb98fe1cb75ab9346deb82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
