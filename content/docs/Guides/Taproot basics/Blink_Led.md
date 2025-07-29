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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRHTFMBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMbx%2B0OQp0dFO%2FPJfUM7izDDrydAM2RTnQg9PM%2FOT9IAIhAIue79JHOQnrZGA6E4iuNCu3Yr2P3KDz0PvQt2%2F0hYBjKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxemrIOTxlAcYIGDRoq3ANE6DToZWHY42FTWLYb6XX53T46kIe9rgGNJCoEgLmnc0lMWsP%2BdIkkcG0PqWGqopv22r3a9JOV6yVD4qnR7hvumFxbjc7lCae9QqE1eejvoBK9hmlKWOmJsNhNOUUe9LfRclykSItCMJlF%2Bs57mg3MkWXOq8NbPjhLLCpfFBDHXR%2FMf21cujt6ooHE1u%2Bofkyt%2BvX3Hx5OSOG90T%2FV1w91kW5rg%2B7j53GHi818dr8Jc2R84DCtw%2FQxlmnOnM9BEtpkkNchBMfkfLGyKAK818SE1MB6C2eqa4Z2gxwzeBIZ2gyeCJlyvi0oS4LshqC%2BbpoalQ7EsDyRWcGRe9gq8IsMpAq0Kl05ozvyI0S%2F0UBid1Vc1dCduXiMIhqPKD3bJYUV%2FZQ00wvTMH1TUPK5xko8wsOevDyCFGpGgU2hVLJVLky2BeLiDOw4YgD%2BGOygbeRDCYKJ8U34w7HJK10UC34PqwxJG18%2BGbWDGVpVN789qzcil%2F6LH4utkGDQ9oxIMS%2BoX22zoUtwtaRufIWUu35OhG44eRw%2Fj7wVj21oJq9BUqpbN5nqdke%2BkArcjhDQTLG4wf82tV3Ta9zoue7LcqgPx9AGltbamm7QNCDrpBMhW0afv6z4x8e0wEdb%2FjDT3KTEBjqkAbJK6akbQR7mbIyZgfK1Yjugt7KHZVcEGVW3IOJvWJe2t9Bd76cRnm8IoXj%2FPNWi2i5p3qKp1MlaQrA4Ia7GJXIKBsVhn%2B9ffWnrn6MIV%2Fvd9oDAIYrlO3HdIkrmLN1kCNIx%2FdH3TjygnEsxVW1KifV5spwekWNDl15p2VHQ6bum0jEJ0%2FWt2%2F0t5zLUdE1zvOgaInixasHSbOZXkFPEW0Yo5rvM&X-Amz-Signature=d3853fa8ecd032eb3e72e79c419f350fcca721e0b293c5d0c208a11d8d5322a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6S47HJI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZY7NyRIqVVok1Siy%2BZ5fGa9v1IXNg%2BU7wgeT3BhrSQIhAM91XzhmvMMMkr9TdA9gkUQzYtTGA5dHqfl6Ib6tz1QoKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTxfngyp0PjJvyJIEq3AOAqJJjG5EWltObyTWmH9uJo1PI9FJEw%2B2Er%2BWLHO88Cznq7FAvWpkHUmLHUSipp44VUk0gluFZHchzIcg8hdZ0vrsZ8hjpHnsQSdVh3DHhhKU%2B551qjA6%2FfBoRmA1eZHeE0%2FjovAsb5iPFIsXlBOL%2FdpEcRU0Cd69bs9b880SFFNy6wAE2NKmB6qPQM96V7H53DHYKpGWx7C%2BkoDwMc3o%2B0KhX3nCKzfBy%2BBSsMnfF6a86DSrGTFapd7yY2AGqhJg9GCtaNdkUv61HL8LJJD8xygfgZr5IFw6WGsjBXB8Ic1s7HTdMDg%2BTJbxvtidvP2ty3c%2BkiJ3dIyqAQljS49vqbrYx9lvIVCZriR%2FJb9oV72XGSLbe7cV4sEJAcSKDeQ%2BmDrl574%2Bb%2FrBE1K6b39LcbLFL3i5pY6irCXdGySyuquxE9zrTjY%2BFfTUU1%2BxjljYma%2BUN%2Ba%2FPOO%2Ffkix2JME9MW7gHBZHJITbHSCtzo%2BIrObJoSU9%2Fb2AOjatvAgb6PP8h94JK6KpDMapeH8lRB%2F015EIdHPS%2FnTMi08jvVfqiZhMlSEjwbvetz9N8GhyFp13TPwBEviVMSAu21EgDVtvMSGj%2BrfoVMdIu9N6gi8lVM0Ft64gR7BL%2BZ0OwTCf3aTEBjqkAQ5x8KuCc6w1SvliBgRB3RK3fV6bLeI2EQrJu2XGjmpwGOPXCCDGRG64OP4%2FUoNKI7JGV9FyhOe9U2%2FKRm2MRkbNDJJnOorCSwQdSY6pmUP5LMw6kH1sZ0vN2CNAP%2BMv4lrZBhmKfbHIcENuBmycPLooOdR6IQ1zDEFxR2YVBfw23GKtSudLb%2FwJOCOG0zxqvTY9%2FY8xClCzVLg%2Fy6sg1%2FBTTx7d&X-Amz-Signature=3674d62fb252c2a4cfb8a584be12d05960de75914daa0836517a6310febc82e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
