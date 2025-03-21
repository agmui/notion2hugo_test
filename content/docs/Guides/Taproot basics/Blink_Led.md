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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GALE6B%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA%2FNf%2FTMjPeWR7cGGFOl0%2FYlUdYMRSp34e%2FGUxYsIjXfAiBgN3757T6n6guXfKeMJg4fa0mOWQmlq8CHDGOs%2FSU12iqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA7kftZhR%2FwyR8%2FS9KtwDctnGOfa0lC5pxkcj10zNN3A8HqOs1QnGo6vpgxw78qapwx3hnpoK2mcy%2BzFIu9XrI5DgtG9DtQZO3DiOAEkLxDTO070UiqtZP7ArQB7MagOsygmsywiPKthiI9FhBLwreISfEwG0DbKHQYMmupr8kx9ZmQ4OmzPo7fcIRXQXfxB9yAYNInEcUiMx2B2xcwU9kh%2BOoV0bM6C6YuTGmHYP%2F6tn6AD6vOQGV7AV490e9PpGQH1eTRQ9j0Rg2DfwEAO4EIc2l5sOnrqxyysSPvFiscnfDok5ir%2FRU6OnNMvJTyrL7sKJlqYuWXX1rnWLANGV5v5sJsuatDHgNPgVXPSwIXRiPwbAcHjWqOiSoCJ3t%2FzC5KaNci1YYYt2BycK6rxkjnnkXlotvS9SJwpGyAVSAKBqvtN%2FsO1A6PDi2Ea5JprIXve29YYjchEmKHGBmhEO2NupDLUAc6TVZxDlOZWv%2BAQA0I1WujneOjG40g%2FkszPO1z%2B49PBWc6yfXL4h0iGhGH2UuNOfJOt3Vvoh4Mua%2B%2FZvzwaT%2FPJgjPQ%2BVPM3WtA3w13U7yJxlvjwa4YgXq5OOiQgj8HARLN53uZH3MsDy0L%2BaZZ%2BaVXpCxScEViQfCYIV4VQ8kbZ49CNYI4w%2FvfyvgY6pgG5mzTOcx21cUxp824g21Mu1ehabi0QwiZPqr2am7zKDwitJn09d2Gq0CAU2kyubAhdrIn14vDgLHM10Y11XH5sIdWU%2Fw4XBcLyBb2CvI3na%2BRKwROCXCyd%2FVSLXE3U2nZr3K4WopvPxFPV5X96%2BOKlSv7mo5JcvuxU87Iwd%2BJnMumBZ41zkEhYc7ZKqqUk5U%2B6TwcI6LTo6iVpcDrQbzThlNXnHnog&X-Amz-Signature=2af02dfdecea88446da25b60d8eed404b5eeb8b6ec284d3e61da01c1be607275&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DXTRFIJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGVpYo4FGrhmH81EIO%2F3xtWimHmUkOQbTOERSZ29pWCaAiB044F%2BBOzzE9Jp1Sdj%2BecqS4ZgnkbiMl82skWPVjMmESqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqPMENdvK3VpfE1qbKtwDV6C1FDDdFGTAUimRfjnsU%2BAqNkSlu5dHTkUS2nkuAnbbgw2lDyEwYNsZ0HNzmoVDFHpJAGQoMcuCgBOmDzlgXhSgHpijm3mJ%2BHdrAkrb%2FKiJbYi5JoewIXrukKxMpEp8FSkwG7j%2FwV6Iig59VNliuPjsgmykD4DKsqk3lek2gNFA4qnaGigec2CtSPWSvGwdIbMxi%2B8uuPaSs2ykrdIzs4TFj14Rc9vOYy457fIA0duVndrFL9HW1b88WtRs28aOca06DmyCct2%2BhjO6h3sx5uEBiDXmtT1CGhbBBc5kAta5y4qTlK%2BgJfyR383c1KPzdbUOFA9hBe%2BJzKJo2DrwKmNbANtbjaIvami2B7Bo3syr8E7Mv0b%2F%2FdQuEgmVyDnYNflFZsEn42A3qY5jBV1oQP42RiC0viobrwLtluvUbKy%2FCDw09NKRroDjjRpbNKEcLravHiYxT9R2g4bou%2B9btuS%2Fb68aRl7RN86uiNTzAEw98DgHGdUh03Awe35NYfIx6ILAD%2BrLAftmqzZvUvxUJw8q8uPKfU8ktRZOXtfqBRjTygxw60guVcJfoaHpzj7gIvqR11TtemaAG8hV1Z%2F%2Bpv0BjpGxtAt5vLEI6tw0ps8sphJk4SanY4U%2B1AYw5%2FjyvgY6pgFKOmSitSaYsZEz1YT3J0oN27%2Bjbz6BabfkP0vKPOv1TZnVkMeIt8TsDYSV8sY9E%2BTIEeScSBw398CGCeF6Z1DzuvvvccAmOuIwMdF7WUjfpPy6Y0fPSCm%2BVY2TW3gK2uf91Q5DAA%2BLgTBBUzsCwCvbFzUvtiiSPLIH9npqh6nn%2B7CHSDycRKqilIac4B9gZ2LiFB2fHCXzoUaBKvcQ2SmYl9dcuuEL&X-Amz-Signature=d86c2f711ee1922445730ac2634e14d8b99c13771fee69d3892c1201351d8190&X-Amz-SignedHeaders=host&x-id=GetObject)

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
