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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T24VZ2PE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw0DaipLbn1GilqNvVNUCrqeqwGfvzaDarKGlgrI4pBgIgDTT7vWvJDSiL%2BvDY5hi9okYPJjhuHwHQ3SPKT7%2FrGpsq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDPkHXgHAoFMbC5C%2BcCrcA638Q8JV7jEL1VNDtQNFBUw51eW2dWn06X1h2PeRDI8oYU2mBSOauX6qtjLtFUQWeNbyd9cxxStyOsiTmH%2FM8MHQYd4QN3w6Jcuv7Tgt0paFsbP38IS%2FTq%2FjkkJqjCCik9EYdpIzrpSP%2F9SYsuClsQVEvGodFYmSUEVXcsodTSnhNpdemvEs9DhTpL%2BF1uoLtzka98j8jsOAaToy7aMipkqCKvSXNzhbOJbXOn%2Bm%2FOqKl9xxtmSkkdVqSCYJ%2FvfL0f5FH5FUg0ZvO4g2cpLnZtt3DeHUos1wQTRpqfqLauGGyLfG6HP7oakjohad5n%2FUNOROx4kiDDR4GQg4aKQUUeJf%2B8VK%2BJOn0shOjNdwpBF%2FE1khgt1vgXlwplbkiYNjFuZFp%2BXajorVn7dsQOFebcoE0NHGG1wBSXRlXDeX5TUnySi8C3lynBXfjY0jgFzZ0KLE1CWnLZ5Y2qRXHXKd2Xz71UFXRjQlwDjG2XNsMfRju14aqb2bOEMyinPwy%2BwR4jYCmR9rA9kooxXjvK5Um7VnPZa4OviIQFKjnwf4gBc%2BVYMF8jH%2FF6XIVCC6C8a5i26HD5xdXfJ%2FwArBlYwjXEScLX5eAkmjHJafBpbnChfVBdepPsX%2F1e7joz3dMIeGpcEGOqUBoL8DgFXxuUChIm1XjBtGOQbtrj4Jq7gGJj9SAK5aReu3NaP5rKkKb5a07ZN3HxxpggOWr0WGVVb8kNjTtcOVgHvWdLhOZ9qUK4j445nXJNoTBrB3Ldo%2BZ6N7lOLSLIyteCNPGFy4ZfQgVqFKgbgXGYw%2F556zFGqVth6y6K1zNq9E3b0UX3PquKtBp044%2FbaEh6nug6YNcv3ssKSsSuwitEIn9vyw&X-Amz-Signature=51bb4d949eb9d4b3156791a668f772b049260fde437cad08054465233163ad9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GFLGZC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl%2Bh5D6wXsoVdNX2s%2BpAKEeiQsKdchDick%2B7A2SELK%2FAIgJl%2Bi8khfKJRud5k1Cn8W%2B2w%2BJYC7XjCdh3sSAkysUcMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBLAZIBeQ9%2B9v2EP8SrcA99nfi2j1cwmW9VCMm9SJL0SDLz1he2tbtg7tXSwSnB4rGTKHFaDGHIf3UXqa0hakqLv5cAHD3Xg4Q%2FBkEHI7uL8aepWolBV7vJBP80bbYeYOEtftsY8bCBtPVKllWlv14iuo8YGsW3KTuR75yCs3SBmi8ZzOtVbsUyRcELVO9YjaV8vKFlGd%2Bv%2BAQZTI%2BetszhJy6rLLkO1vfMg%2FGKCi78bfMTt0zozksaSB1nCCAA%2FaKksDusSfOVWs1Nlo8GeE049kQvGtasMF9t%2B%2BRIDvk%2FMrlBpbKOdEYKvRZbKlY4%2F9pE%2BijfqSH6HGVUba6HBvdrJ9yNrrgRXnhRghAGgScM7NfBtBFCcUOkfD8k8ET6JTcdlEzMxI78fBSRVM4YNJI32jJ3K8e4Qvmat8a9b8dr75AfGzaqCk%2FCM2Frio0O16MXklk8TgS2teTPD%2BAqrG0sBqZcJPS%2FZknHVjLn0WjSoIBWv0xs5NhEu6PeZtp0xw9nVu%2B3bde8rQWVBljx7t3JSvmPv7JAyXEiuiEDeMTikZNRE9CrV3gOFasy2hQDw%2FjqFF7SyhfoyOY%2BX2B13Ncs2Sr3FOAU84bTimgJhFLZk%2B9NbPMbim5D8U%2Fz65cMIlMFE8R3hSwLGbLLoMIalpcEGOqUBofjlGJTtZtA3DAJAEC1WGnxFzAhh%2FTnVmkIYm3WWB3UHSulDZ5y8H3DAHtSMeDcsXSZDJDDi1uofD2unK9gxbopebDk1RNkAyO78WFSIm2xbVdtX73bMCdhfXxX0o5WYNdKL0XHRsfXR39oVyEO3oYMoOT5wKhQ9xOa%2Bn0%2BWqeJl2309%2BTqmdmFSpi3bzFPUHRp65h7Ke6X50m%2FQVv2LA6qZEH36&X-Amz-Signature=4bafbed5c7983c789d8bcfe9e129264357eae5c430ba8d1b1473697662fe0b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
