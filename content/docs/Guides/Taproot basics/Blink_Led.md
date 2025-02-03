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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIMPVI5G%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFv%2BQLqrGxGlQssJLOXABBT1SJ3GwqaJaWomrVIWl5BAiEA1LN7ATmdZeAJAnJqYFXqyWoPadZj%2BRU9qJcHANZhr64q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDPZIFYHove46IWkO%2FSrcA4vUKtt3UQ39fpPuMfMesN8p07c2JS2i2R67BCEkBB62kWSkkObYDVm4s35yh%2Fg3ER5w0KisJANB0anNi36XlqKdytDmvDF9GfOnLrQg5tlxMepKev35w5nfQRr1YsY98j0t2hQx9%2BvakivnzHb2zYJPQXgo6zcpcmD4beldNLAYktir1Y7dDGcavPRDJMU2z3OxEQqjyez3HuHEcbiDVpAskK44mXpSpmPn5FiiC%2F3K6tJMG%2B9rWoiSP6AacW1xG3dNuwDca5OWdIKHXZAxus3p2XI4BU1w%2BGGwJgLgdqeapU829eoEu6nXh97ODeOTRJTfgsafukmBfvhmKqg9hiXK5MiHyzXy0iBRrTLSh%2Fz2fh3bIbjz%2BcWJKUfaSlYhibeIqrBo2dsjCqpgadICvRJbk7mB%2BaJPNbDCA9Zs%2FVa2LTFSoSwMDWmsEaCJ1H6GKky31qu2zVJtbaTSV%2FAvxIZY7niKB47hTAWMo9XVyEs5uRLXQbdR8OoNlCbtWP%2FsHfSD6s2Z6EfBAfjc4QJARWMRu1H4Jq0jQolkCMkritqZZy15ss8V4BTkU%2FCNd5uCZn4ruXYHcEZ3G%2Bv%2BpXjtd7hhnm9C9dAiHThQqMCvMpX5i2%2BCXua4WKy9smhEMNWOg70GOqUBpmZcTRH2I89WnLSEcYFUR3raJjwZHXmWpGcXhK%2FC5nvJR%2F%2Foa0wIPzt%2BBnHYgmph9LJyA43uEVX2mob0VSzky1GeklAgaEuqV%2FXww3E2i%2FqAUeqk51tqALdBn3ufDVUNA%2FZbSEZuiBrOPdcLeLmvRqlHyFdiq0K%2F3beMVfDZwbL4SvO0OAk52pLK4l87fBadNQahNk7oyixgnm9HcPkUgC7HbAa0&X-Amz-Signature=afbb73fa6505bfefe2b974f28e988f13742efb52081a1d8a9842574d53ee33c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675UNPYER%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FHtgILuSu4udpiDot3snIvTIVb1NbQ5WyrzxfO2ItUAiEA%2BXuDZaavtFKs37xNJ1cuBe2irb%2Fb7%2BT8eLfDFZn47Loq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDISNny2ZhzGR867e4CrcAzphhzWEyUKOEKEPMfW%2FSRSAAt95f8uv1HD7FCU834oWwj8pIVUs%2BE%2BfiF7mRtjNPLenrlfjVSK%2Fq6CIEpJXBrcFpk13F5FaDOa%2BPBwNUM78wINS%2FYonAxoKlikw4flaNFeuQIGcD3iHvzIV1JygqG4F0PTd9HjdtqIlCKUQ79loWO8t%2FDyJ7fQhMQ89Gh0P%2FQLZqeK9TCFhlILN1Kad3HEel6cbTLLeDthWlqUPu83DT%2ByglwnfNFITRkpIlqdHZT5tU9EoerfTOCqMUwsRg6maljdjsoJykfefLqJWj3jeQAB5pDu5OsEnrVg23gVn18yaFyiDzcwDk0pQHYYLnM%2BBmsbPbr2tPbflbg%2F4hgBLmKrWj4qO237UUe1t3fL57EXlOGpXoH14%2F1g0xVkEYjquikYZJMILBRcbsGSR%2FPJ6PwptNTegRFStxeUxQKCyht8ZPSgsADrFaAY5gQ3ODKbjIJbE2iomgsckHMo99nzqxP9Wg6kHNsLDBC%2BEDoGvxO%2F55rWFDRweY7bzvWI2VuOPgHExZbiHVHjlXQl28lC8MHgBfzwHUgsp9Th5QBNWlMS2KW0gtdpD2XzsCzPX6L%2Fg25k8SC1reQz4FLXovBEA81H6Z6QOLs8wpUisMI6Pg70GOqUByoJrIHUnvuR8cg2yZ%2FUyCPyFbn8Qt%2Fp0u9%2FucpAnfSIogOH%2B2eRA5CIRNUa1eVtS8pRPqoICxWQpH%2F0JS%2Fbx5XeqzEiz52kSY4357mXAsXMPsUXCsztA4VNZa8YhqdTrLrtjeJZF1NKNL3rfU7LgL0nU2Bn8WIGNcGlch8s9eX4lQFuOHolnlB1jID%2FyjB8J6jYFtX8VBL8ovxpcydC5dFyTQpWC&X-Amz-Signature=2d0a533c8c5a4f0aaff86d946a86877726be6a2443979ec4a67509f4e7310037&X-Amz-SignedHeaders=host&x-id=GetObject)

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
