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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3AMRZIJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUGt4R%2Fm8pcSKkQi3qahDnPoKUoKgDWYCQwf7UDoHvHQIhAP%2BFJRdtcBWdc58BlQB6sCZwNO41VItSA0BVGlLu3uvFKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJqFswWf0GvDgIbmYq3AN%2B2Hj%2BUw82XIUF%2FM5JsgOdkOR21c70Z9I5POniYyufCuV%2B7mmvGpB8OaBjgjyQbqQQRGrxZgXIp0KzIc0XgyfjSRLKYEuazt2EAAytQQXQK2sDCSJlgvL0t5Jgb0LiUaQn4kFxx3Yay3o5zEYawi916PymALiIHOLI9Q5m2J5k5OIUPBOPuOJL%2BmVja4bZc1oGXan0ISWQWc03VqdtyFtLM3EuKXGa0%2Brb9DJzXaCEelTrvkZ1I1G4CBN6Ofp6h9bk2ZNw5vUKYZ%2F2mutPvo%2FrlvwLTSMu1wHhCS4pxspm7QvRMHMn1wMf3q%2BvXCHKw9AqTzZphy9KEFGaipU6d3zUuJ9pdqv7gJQa0zGGsVN%2FYL%2FSkoLrNaLG6QDoFCJpq06Zvor5SkXPM876LRQ23b7SCz7bO1sKDWvAya6wqxfWALcRU5QDBsUoArj4B5%2BGS97Ln8flPV2ay%2FjTtin6goTZSyuCcgqtAzqzMZTuj%2Bv3kD%2FAfmzqjydbGjsyqcFRr7iYTp5G4%2BFHq3kRHsGUKjpfHu0Az1L0NiB4zLikTecFmViKspwJYW54%2BZFpaP57YMmBoRo4ztlr6HLbHJMpvuMYOUnUp%2BpqRbwF7qvzF3CAIbbsB2zMq5UBIlf5SDDEm6W9BjqkAZnVXymlygzJkUIRaZUKW%2Ftmr3KmVgdEEC43dUP5XmDX77FxW9YnM6UvvwluNBDD0VYTPlwieCJ%2Bf5ItFh4DUTKEp1GnUfD%2B3MU4LanXgM7VSBANxZ8mYMGSO0BfApz8HJTA2PtVxi53UtYuuRWwdiTOPeApHF21RlGkBOcfvA%2BvTfiMmgwQOj5QylNRTqP%2Bjba51XF3ePrtaHVM%2BFn2HvkhG0aC&X-Amz-Signature=3390631fca700bec622ca27a7f6741ae7df947940f45555bb74f36431f90d06b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEQYMAQ7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs6HsX2r991wcg2bPLAzEq%2BNrz6CoXnPKQY0aMYNkLTQIhAM0hsbcQIDos8dgTwZO3yP1bcLRZ6PREGvEeS8FU2QgSKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1px%2BjmvPmFP9XL%2Foq3ANHWf6Ao27NW4tRCBnBJ2XZzFlHHIQIgjsQIsGCVhFlMzioDEyYoywJ4seXwv86zUYzkU35Rfl89vawcH4foNPEBGDKeaqCiE0OFqXt%2Fc%2BPWnhPVX4zJgXhOUCsuvlqYawFVl1XI2wdwp8CS6fnRomePJ3qB7Cms%2Bu%2F1msJmTx6xPdto9gepVwuSfRhAiCu%2FbEq6E0LCH90cs%2BBMuYJH%2FR%2BVyirn%2B5u0Su1u0RvCGbgyvCBKcHyAfTfTQwpeLq8d%2FfAWf9nY%2FuK2f3c4RCnscApdOWBSwrOt4WOy49poD0uYfqdi5TP5%2B0zA44%2BHMwR7N9PZTmnnKCpeoznnhFTA9PNW3gIBBAg2wY22KQWB05bUPoNur0RHkuNmTO7cgTvGiaSkHcAvCIY32dKJv1DGgNN%2FjksF4yCp1xkZzILenc4%2FgI42ukJySSrtIaI1LUa4sqB%2Bm2EjsMM2FNVNH%2BoaPD1PbVk2cSz%2BoQa69Ius4K3IW2b8Xyv8ioqwycBBOVtoTMlybC9XE6%2BSz%2BDNrb2Jj42XdvTfI2R4y6bCatXC%2BbRFcoim%2BelyaCFpkxVL28bN1luTxtLcVDhFi%2B891dUKisXVmOE0xEEqtNF%2B53ZZ0B77CIxpz4xQVa07eWnrTCMnaW9BjqkASdTAyfEH6eUAS%2F1CxNltmXyhF2CfFwD%2BuajeSGkXUhL2Dg0T1Ex4SaOHDndiWdkTXrCzkt%2F4pPacPnVwNao1n33QtmE9v75hETC1sqydA0SvKjnKNcdYsRFoePf%2FuhcXPw5ARmNRYceN61SrCQCBj44SxqtQyghesd2e2yV0sTRi%2BqgnsEW88Mj557fIfr5ediEff6zL1QYF1B9bHpSCxZmkZZK&X-Amz-Signature=6b9c859e64ad4dbee5311e09a4a862873a4688ed09e1550e58130241f3a9ed16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
