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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IJQPPXE%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQC%2FbYZH0ouU8IYKZYarFUuGCskjCI7UXWF2rezm%2FNqCBwIgDiVRhqlcf5xURw1KibYTNxDbho9aMndpr9FPhTDELi8q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDiy9h0pM4%2F58cqhgCrcA7in6q7LGfLM%2BAB8yXa0AGb51y5sGFCldoxNWmW25VMRtDZRwYnXi9igLpSQEkH2s2aIVMxVc9OH%2BSXxIJUCEomDAMNc8fOVxd1MDHs5oz31dOFF%2BuNZz3eprM9qpwbYIF0lDmJm1nXvNSGZWaX61DqRICt%2FalEbUDgoPCYT16SGHiSgJFyjjisOvp6%2Bm%2FYhZWpZBh5sLOnHuPXNG2a98iU8lU%2B3%2FsXCRXlgwSrPiib36pvHDO77jydBGKbQxaBxZY83VlS87gyZqeDkp3m4%2BkyH8MHMdlsl1FF69YIzQI9afHQRFSsFJDXWnbFpkPRk2cAIYp1%2B47fZSmRUhEq1p5Ajc6QNnk9ojprqIFqRS3wtHhTdk8szYCM4FGjL78kQVjnhvF2GaN0USUMSJAffDZupBwZRzFgZ8eUCIWp%2BGcyyvAYobfLMnLjucZT6kPcJjT3oyPFQ0wK3euU9UkeTy82yjadG2a%2Fpn24SVeUSEHfyam5QlQoWKyt07f7QpLUvfn2wIUNWGG7ss1tZVuo2Hz5lyMKsd28vYnB5KYTXyLHRvhe2XrT6IIMgZnJLUfMRaUBW35EQnLifMFnbrmFy4%2BQai4Yy0XPseZd6oLgRD4AA%2BgfocdT0kaLliNo0MN7WksEGOqUB2yr%2BPqqRkwzvN%2F37Z0ALmGAw%2Fix4DexN3V%2BkDnVxTUqt8Aft0I3lRbCBkIQcFU4z%2B0k9SAdu8OkLCLRa3%2BrLC5Rl%2BEHakOSDrGLoPf6BYD3XyhxanAaLaY%2FbbMpo81ud2D7x8jy3IFAN4Qilu%2Bt%2FBQdtK3TscMyhCSzthdPhvIhYbeiJJsgh50Jz%2FqF1UggiCaU8v5iAiTRE%2FBDmhcXFB504TJp%2B&X-Amz-Signature=014e78bfc9fe871fef9e64a5ed8c8a59ab822aec4ee5a68643845ed9cc95b8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4UL22G3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGVVuymsyw8XmAq%2Bb1YFUlkHCEHWO5W8KCrILuBqmUg7AiEAqQHyDc%2ByTN0k4WuiRDPajJLNPE4Kn3d%2FpV2pjQLvZJIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDAKg5cptgY8PUdj7GSrcA%2FsKdAiTvG7CMWAB9RjsMi6qunqaW3i8KSm%2Ba%2BRD9PQmlTqfgkQ7Y61p0WQoqM0qNT2VfAQ9qxlYUxwIJu9YzwMHpytjuon5Cvt2bWQPccuEPxiFlNmVuo7pkXg7MiJYc35sHftBaO1yQ8ownZYDpbtpRy2O0WQBb56zzH2%2FXoRFbx98b0P%2FLhNbHnY9U81jtUQ%2F5k3EejLnrym%2BWeZwETaKOq2Skwi9V4Z%2BrjgHzG0yMCauxQR%2FEbVG2NJOsvijzOI6RLGcUzyb%2BGJDXMNxpNoJN6FblnYW2GURVbTEtSEsMrqFZhs%2BaWqOMxMnNUCCAGtUITq2pcqUp%2BB4goPJtsuChsQQvwyMEksv8J5B1gLnjyiqI0uL6zZdOp%2FJjDFuecpTuF8czP8Xl5sCKJFF8Bz6vO%2BTUmLs4pfjH4XzYxkrP7duglE5AAO8uZXhOnItXGSWJ98rHt3w20YDi2VHLiSBwhL0dOSublB7PsK%2FkeaDqdPfsvxva5AxOl%2FKKUnwNnvMNPzqA520YvUDyudxxGs9DFQo3m9rH%2FQaWw5Ce3rbz2DteS16IVF0NPy4BsPj04PMz8qTTp%2FIlu8TX9ymCaz8%2BhLZVeB%2Btw3EnUHah81aJTQdpXf1joA167gBMKbWksEGOqUBFvd2SADCWqrldWU4bQyut0YP6brjZ3Wga5lECz95mbRvyUQsThhzXOSk2MyqLAZPaZmFb8c7i2zTPUdjZWWymcT68qjzDm0icYwI9asvCHtuRZOaTBsX3mzPSw86ccLyBQRRojgieU1TXSX6S14tt4jYdPSnSWoKFDSragAGcJW9gsMECh79EyDe26DsPAG2t0lmdsC1QmiXPP8Axf2fshsQEXMr&X-Amz-Signature=bdabaf6fb5b1d4d2b4c10d4109aa242ba8f9c7e48e9bb486982e78cacb586190&X-Amz-SignedHeaders=host&x-id=GetObject)

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
