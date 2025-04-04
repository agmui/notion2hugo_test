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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4HP7YE%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXPMPF%2FBZIJNXQWUaJ5R77F7lbNTixGekcRIBHUf5e3AiEA290uUqQTwSnpAr7MZSzEr1OYII%2Fy9F9ftacpvnwmdn4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDAvemYGGguPoEXBlnSrcAyy5lQR%2F1O2BmpwTdcjtAejtjI2b3dnuiZ9DWGG0H0WeKiTD3nmxoU1bHMBEfGW6JmmrgJTXFmYzKZNvl96qQlBKv44HeOCeLGUfe16urPyrFZzuFa708mbOI4uB6KMxROfsQsV3Udn4z%2FWAgDdm%2FeK%2FyKLoyC5Crp1%2BGW9Zxmql60rGDrqeC%2BUt%2FjSfaUCTUDXk3YhXIqGZ8L2r2Mn9uO%2Bof57HvHwOOuM7xsMQQx1Mk5JqmCs16T96MoVIhDVl%2F3rlvdExkm2LVi1k8uOhyQQb7DdFa3O%2Fnz4RucuEQH0t9Ek47TtLmRQ337%2FSX%2FYpfIudue91aUNOdWKRh35%2BEmMfErlvxMylxSEaId1PI9zxZpFMUdS5HnPSZSpIZgRZ%2BJX%2B704%2B0O%2FxHQDL0yr4SDCLUihhn3dLUITV9g8Dmoxkze%2FvGmqu%2F6mcUBTFCjNzwoHLNWFXgByqqCmXwR35OBiEFSUdx5wFyCkfzQh7qoJFNW1ip0XiJm2EMVubR8%2BzDg82eIj0uk4O8atLmehogAFlIVr4ApoiYySCr3Cgw8fP5KdKxb9cP56hTbLHHA0JNIQceCAwFiLQQVEVzJTbhFI93EyS5AZpnyWWn5IlxGG%2FmgfkEVcfw%2BD%2Br3aQMO%2BXv78GOqUBIZ%2B98zBUgbaqE8RgShcJE4iraU%2Baj1cYEAUHFjJN4Q7m2vLRG2FHEEJJQWSDJTuceNMZavDPvjRaLpuInRQ3ZWiOhsIbyfirZclSvVLtx81qGOXmvUYz5D%2BDqqjjKuotxkefy7YWgZejVvexQPinBDH3Ios666ptzZaD03rSiYb5X302NhZNS2z2vK5F8Js4mmwZhZjn3rLLDtr4zbamvwqxxw59&X-Amz-Signature=a8dac0ce75f2521d805ea0a41fad76dac042e687493862d9df884baba7cd120a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELQKN6O%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfzG9PZc1YUJkmbb6x5Gdiyp%2FyJkRwgTEK%2FeWkcZYC5AiEAsJSM9Vtq8l%2F%2Bi6AN94ImpMrkqo%2Fg4bOGlgQiaJKxB48q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIcrbGNDVPrIR804XircA0rG1S5rgIIfpwYM%2FMKDuj7qydZf4LWdAeJICfH%2FabXmGnyE6aUk3a0PRMm%2Ftnq%2BhVbVVb7jnSBlaB1I%2Fex0EsoqXxbgM7%2F6n6jnS52VQsmbneR%2FCUNjY7FveNa%2BxP0o1grjT7o6SBGh5sAnXUiI0yfmOYbXgM3cNZ2JbA9QDkOIWtFSzRa8fIYZAoRrbH4tRJlHMcunj8p11pSdIdBB96DMxufZJ%2B15aMxQgSgCBaq%2BqK011UsBOjUDYlyNMeTt4Rn1oDV4E99eZl1LgcNrqdHfQsM3kAz%2FMLBxwmyjBAkJSayrzJfej7X7QhqbMM4aaiJL6u70bEyOfvOJ1Ux6lsYJ4MNmXE24KaKvx3fCxXkGyhvG%2FuRIyM%2FIWpjd0q9kfO1ZrEH8%2BA0ElRi4PtCVnRbL1emexEs6pn2UkYKwvoNakl2fJiDJMpDO4FvSPHvfTQm9jml%2BuJaR%2B%2B%2BHoHbVR0JPhT8yjrtkOX%2B75uQfEkISYseH%2BawYUJD8D1r5ZSNpBg6v%2BFf3mAYDbhq%2FMPfYv5HX%2BJ3r7Ml%2FOMWIeAAhT2yxim33I44ANk7yVMyQHMGfblmsepuJ2D74a1z5yzlbYBRq8MCacK0DOeBFAzkxXZXSBr%2BQW97n9J3mI8R%2FMK%2BXv78GOqUBg6%2FfIdoK%2FVlAQwOQvRlPb1QRrroO0eGw7%2B8H0vXdEAS9QhQi%2FnhfeixQAumOTukUxZ3SG8Kf1IgJftCbpJKC8%2B7ByYPd%2BojCdohwnGodTevYeMEtMetLcrd%2FYRMcpKA0usBy3yt0XvKkjKBIBOJvqBPdyxdZ8RvUJ6cGci%2BdY5OGJLe4dMUsXUd%2FbzwY%2FTPOgWEjW9kjKnk8ulDp%2FBZJT9iOVQ9h&X-Amz-Signature=3b838c4db12cfcb359826a6d052a38c34852178bc4814547fa8da2f4b7c1a885&X-Amz-SignedHeaders=host&x-id=GetObject)

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
