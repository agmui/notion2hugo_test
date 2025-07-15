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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTHLJWKW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCOQZvVnq%2ByyRXOc%2FendnfzEogpXjdSr96bd50wMziZ6AIgcSp4U6elq2NCnjxBOhwgCt7DzOxuoe4iFu92CECsotsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPPZPstyHg2iB2tcRSrcAwfv3ZXrAqYItaJ3vlkvtxXe36isoscKQL%2Fdu1lWJRtFUnIAqPxpSD3jdUrbwf9Kh0yEW%2B4eBCSsyIZcSNXUj9nxDQgpl9VtqqnJaJW9SVJGIVFIjfIn0WTBBPE9a%2BC3JdHjHfFeNMmVJY6jmnX85IOe4r062SnWUJat7vTEPu6bjjPm7Nq%2Ff27XHbgyOr7tXSXCPfhIdsY8fvV84n%2Bb8tDnjElqLNCsBC9dUaOQp4d6xv6cvrCb8ddUUjfY%2FXjVNYj0IXvHAumvT6fxuBnjMdffjrVlMnCSOPhQmxhGqDjKS82cOXuw08pq1VdASOaylShe39kS1KAyWyR9tFnPyrWZsBCIZ84L22MzK%2FWJugvXp%2Bk3IxO5NQZmdNJ21EKwN9QGwBssTpzFUR46oqS26kbNMEi6wsQR3D9m5uIYWL8KvoJfATdeASohtClOAaXgek%2Fr%2FBYPvgsq30tfkFNadBP%2FQPPT7DHuWCMDW8SFq3tGIgObhG83u7OQNccXE18DVQko7oRbsLiDlJnwBPFu15VQD%2FWQY7NmnGEMSgJRcaa4tTvJsii3vLZSO7QiQS%2FOoMfmJ6fPiMjuj7unepzHHJTrM3gvyn2tnlBI1Z7VeyoU%2BmkHpratTwSCpjyiMP%2BG2sMGOqUBaaeGp1afucBgGMVp7TLXmKOc1Mqbgog0guoAtcZyfT9%2BrftwY6R28nL2jdFtJixA%2BdF%2B3ZTIWULX8o%2FLED5IJOry92vRWLYugta1KuiNOxUfQu6IAaEeRO0m6dWG9n6bbn2%2BXYpWCakZ5EfCPI1F%2BcohdZbS8JWmBPH7I9oZqOG6EEuXzFNBausy1d9cjmhvcbNKy8BHeDE7fVlprgu9OKJYgIJA&X-Amz-Signature=860abbba58e0a63350926f3bdce9aa6f1658dbf962b41ad43e6ef40aa92a4fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZVOUVL6%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB3sbcf9ocOr%2FeTB8kfWdlCuPOXNS8BOWHsr3KRV8RbsAiAi4irgOLqFAzGeLlUVoDHRfy0lj3wjiPRIwyPHjm3A0Sr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMeINhbicyra01WJNTKtwDMmtfEVrt2HaKg4emVwbxMp93HZBrAU1Haz8%2BGi6PvlpF%2FpF1AiKMayRY8AOIgRNG5RRWePOVS%2FVlEwGcUrEFsuf3ChKxR2IQS3aOV2B%2FGy0chcYPB9hafg7Er1dS%2FgCSzIgcCb1VNHHpu9phh8Z%2BevqgJV63g1ZUIhbVbIjnXb1dWVaJhRmW1H1LcEEFSFcYKv4lNKncrAx%2BMXGi%2FoxwpwDfRajuMhbN5%2FSJGdBmiJk8RdypN28AWvnt%2B%2BCnmVbaPbk%2F12GXO%2BE%2BkZlOrPFPSlt2S%2Fh1oqkoi9jMgj7%2FJvHfR1QRHoxTT2abkAzfikxN2JQW33vJ0Ki1Hj7%2BUxFCDJ%2B434VmUzmgZwfb66WOgJkusf8TEk2391pYHBtHVlfx67YjvmiX%2FkXITD0pn6klyLkjd90sM4Egm4GVZyiBnYzXcTKJcWJVeMd%2F8IK0tSeEUkvEI%2BUokz1%2FaSupezYOZsSqKs7R7NVsFjYvyNE6HmFMSnf5ZHuhkTEpIiM2cmS2PTrdfHVkcixK2CpdwVyX1RvFHVQoHJUe3WajUqbmEZYPJQCnzhNI8FSBu7dl2vzyYAPNrpqnrZXdh%2FA7j7R1aUV%2FXAEfaXkeiMaH4aMZMlXMWjKj8%2BrRz72Xrigw%2BobawwY6pgF0ABqSLwQGrnP6EGB71VgnczsmJ0psxVzBuvuqKMyanZF1t734mPlUdRAmpndyDaDjWLmKfhQojjQSYk9St6Ye9Uw7XCK%2B7OGnYJwUrNsW3gNKfCCbSlw34FXrM2br6ePMGtror24pmPTenQFdK38%2F4P8dM3lZAaMXfI6kmbPlBrpig1XXuXt2qxJnIl8KgqYnW2PBRAgS1S%2FvZCm4iKbASOrTtCsJ&X-Amz-Signature=8486cd0fbfcc1a6954b4235960008d649c6b063b4a63f7efe0e60376f0acaa64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
