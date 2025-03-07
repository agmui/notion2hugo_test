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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOHOT7OB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy%2BumjK3wDkcftwhwjOGYXDrnFEttHb%2F%2F8FCIebJOnVwIgMzYRguBDNbMyvZW78XhGvdUy%2FwsFPcuhoClxMZteNS4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDF407dHc6H%2FVh%2FNB6yrcA%2Bn2wXaM7BTqbVps6is6zZLPWikVUI%2BkP%2FkpClLtnZe%2FHBNTafPJhGGpY4owjvdbkh3Q0oq5BKP8wpjLMKWxBGSudsf8yXZqwvs3fXOULiTDPREV%2Be5%2BRDRomPu83RzC7LmH2iuwaGfZAXxy51i2H5CZQ2OswxTEC%2FDmLeCRhx4PAzFTLjj0BEYPwhk0eWXSAmxABijrv5lTPgBl7hgbD%2BAM%2BCgKfAMLx8bkRA%2BrgQCBMfeURQAahCgFBED8ewjaLAVrpql9oI3o3JqMQL64OapAvqMCiEzYD78KbjILp3oZFoPtZFC6fX7BU4Ec6gIOx3SkJWo%2BZr4LAMdEFs%2FD6auD%2FwltZzKst8RS7VH%2FCatOVcZec4m1eO8Pe7V7ZlgD5PJ3ujtDxl4tXFfiq49BcyJAnuLQGbWoAtp0JGMzjUo0d5YPyx5wwNOh%2FkjoeUIk76dyN8JIJXdmsviEpqOVc7z63zqAR5DGSIorMiVkQpDIz%2BxNNTe9mhH%2BDuvFHKUvPzZ8IhxulSz9C2osvSKqFPWT5RoYWOxn%2BpdHzKVt%2F3q%2F6f5rqmYI6n2UYPnRE9EH9kuzdg%2BhN27lQS0lCPFNFjQnH30hOoMwxKXLd5Ej7GxXBVljP4X1VkMouLzzMMLlqr4GOqUBT7i%2FsXv6Gr9lPfrXzfwa6rz49VNZZP3lH5Km9uxDjUomovLI3c0eLIGxKPcpiRBEzC4Tk3pvyplGYPBRxnHjhrVa7LSqVkipfpD5mS781Yyudp27vvcUvtiptqNVmFLCuTEc4hit%2BLroqvKCn6ota9dTHz2DLMuuX1Tu2UKTyihB5gSSbPA%2BIBR6fFWfbc8YcFiKYT8WKUNQrcO69qX85IMkbqTY&X-Amz-Signature=1ac8e428fba4c20854f3ea1d04ee9f8035568acab8bf63f88b9166d4b580a023&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFUH4Q3O%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9EPEmlqXWDOdZEGUToDPN6xQzz6uo4dnugv3YdS8sxAiBHsp%2FVFooJpQM%2FDSYJ11dYd6ZCqCUc9T1iFBqN9eyQ1ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM1dmdtfliRZF2Gs%2FoKtwDT6RNXKqRk7tuyyv%2BfkBDBIv%2BYvUoBWDx%2BMSFadQBrrMOCWcWR1Xaf26aCEI71nmvdIEI35rnI9XbUXfja83GtpgwVClVTN91J0IBpbHad0YyE1Yl5d2OA5s9lhZN1AfCMDoYcmX0%2FPhGkM1%2FBrEnnFh5gYuD7P2tgJRsdlKSE6B%2F5bb6qpXx9UDspma5Kf4D5LAdKI1GQX%2BNazElsmMYCSub49usPu0VwgKB7v%2BiREJEN8a7P7CJU%2FGyIVuQ9YFZzG1qK93YRN2kMW3C1AY6bH9rwyqijin0EAkEu%2F%2F51dh7MW3r7hg2rRCRl2mOXaRnHCoWvl78mhVzilpKyAHoc3qMNDn3hLlETOe8EWOrM101KS30jJy7z7yAIoFdmM4PY8SFxtinGo5CrkTyymqQ8zCV1v0uxJ4CVFPr6Axovda15cZgp4LFlXbyOvn1EFc79NaDLY7vsZZWwdC1yt%2B5%2Fl1l1cnf4qToTMj0pFDLjsbMYIqMNJ%2B8TVo0yqOplkRpeci%2BA8d4qf3ovwqJpj20Rb7v%2FTczUBVYM5d9jOe3Ebv5Mgmb31MAuYt4zpc62x0gJJ%2FigwotQcZtBJjAjhhYtHHX5SnU82nZVYIG1Ma9rAP%2FHvn3uSBi0Wuyf80w%2FuaqvgY6pgGOEL1ocK46oRh0J380yJy6ME7%2FERSE4lOKCMTlergFZFMBYzkOesrjYLxXZKRqyBxahEVe0S1A2wXrDw2wZWZcmPjtf4vYhNb6mtzOWQrD8flVP4I8YONyaFjQkhr5A1S1RqoNg4L%2BGQjV7xGazTPI35mjMSAIIpRRAFrl42X90URQnzG5LYyp32i4ucF14K1KZpIyLitzk5c4sXddmnTsO69HmgiS&X-Amz-Signature=e3de52527fac67be30be198b41a3529e11dc593aed00eb2a70937317f5b36713&X-Amz-SignedHeaders=host&x-id=GetObject)

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
