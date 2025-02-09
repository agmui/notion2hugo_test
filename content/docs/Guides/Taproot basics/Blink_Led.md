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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCYNBEPC%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEahfptFkHCBF798jkun7UDCHuDHJVRxU5veerxcA76QIge%2BjSmRJxMGpRCTVbEayrMMGnZYQqTPHS5wK6frZp7xYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYs%2FItifRZBFoV0CyrcAwhzNl24ox3dHhby9xcKvlzbbMuaRVff%2BMTFa9j208yF5jzMoPrhfyD%2BkdsIp39TZqr%2F2BHFFCrUO1CZAMNzUwHJuA6xAnI4PJQwKTN9eiVcfuqwyh9IaBsaT01Gi0B7HXDTX%2FruUEC6T7lZHHIRgOMqS7%2FIfgTHGyHI1FfLU90HxtmJT3zbaMpEPmZyRkdaL5eVnCeyOmVtEEUe8vQGrcmEPibroHTc94PFk9Uhqp5Q8%2B%2F6%2BYEf6djuIKc4nLlmBTQYJawUce%2BUuSmnmaoo%2BuSxLvU%2FAK%2Fqv6hWAVpyiJi3AohCM65Ma46ajTut6%2BJkYFqCzW1%2F8Ov8rgFCnJ%2BTZfwf%2FoGs0%2BKmarFSK8o50perBVM5miElX6pM8aDrS7FfWFjR0Qp3D84ieG7Bq0%2FKIuLCpu8CiWPwlFV2y1UmvfWwPXQH%2BD75VB5d2jP%2FGUVWY%2FPPxKUPxA0d4yVHefKu80oCNTKp%2BrWrng5YdPJtu5STJgjT8PLURVbeHrzUmXndsCA1SOJ3cew%2FbLkcQMKLyIs5XuXfjVQUo0XOoiYJ2s3%2ByzKB2NUzXS9Uw1ypqEcjP%2BlzeKN0Jz448NLuMNJwY5EcNlU3YHF5H9LrTMigyx21lfT4ObBhquBc82uZMLG%2FoL0GOqUBQbOYCaQMf0PYyAElFBhS2TB54MrQnnEG%2F3%2BcRdQasXg03%2BCvqgkliYDnSWQztiEEkfSZsSatsRZ%2FoUCEiYKcT55wUp8sq5ekTLxrTHu59J9%2Bi55MUtQjU2eySJ9Sgc8M1gqmN35otZXh%2ByTayfosyJwszozQglP1%2By7wLwzWclf3CEnQQ1qTuK4jcDH67Bk1Yog%2FGGOtvVU6ZMDlxa6NvYUmISIp&X-Amz-Signature=bd4e6f852125505b7dacc138d65ed10e405804835d2e8b82810ab9b596f7b7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSBMQ3F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4tFqQygEefK6EZtF01pacrZ5hWJqcvUEnT1EdszkmxAiAsjLSWjF1N6Wm16IufF%2FqJT4XJz4A3ZAb%2F8Z1KmYQSFSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoc3ig8cXzQjzu4m6KtwDXQc6sqB%2FiViLNwSnt6LYANKBwgqNdSEj71onxkjHRe8YBz9t4Wg9jgK5bp3zrH5MtosvBa4WACoeFkIBLIG%2BBFmuU4qJMzGvfVGQ15wFAP5TEy%2FagCEpr9818HydXdTByDHmIA7cSC4bRz5ZGxYBT6RGjd7hT1Oc7PlQizRZ3Z9LUmgK%2FAxy8TLxb2E3Clr3SH%2BB%2FBvEjmGwHO%2BEQzuFtExcqA5SeyowjzCHgY1Z5MrPiDpGlPy7TrOfpSv11Bs6nNiGxFo%2BJqHt%2BFuJHQ1ntFhAJC%2FOdLddSRy7QgJsey8%2FW9lPGLQkTJnOny6WF1l58mVypABZreF0sJuCFDsTqYJ0WJ6kM%2F0Ca77wNNHlWYgv%2BseCZL3IQfOQwR%2FwpVKq%2BnyrUkjOWp3QIJmfJIymKAdEp3fQ9Pr2ZjZ9WF5mi8D66Ydj65XqNxMabg%2FuHAA9kJxk4F%2FrRWaZxeIvVbMlFhH5MBYOTNzc8p7OSF8OGqPu%2BaHTrkXFKFkXwvXAQ5S%2FtkP726HDmqdmS9G7FSjQ5FifMI10HAudBL2TMvCWKs6rEz6NPaeed%2FKsh3aBT5cMX9ENoCl2iAflPMLk7wk7s3GfQ%2B%2B5nJjj84LFtyQT2T4GupdkDZpcGbGuYtswr7%2BgvQY6pgGvh15jEoOirWAIdBhqKqyqjA7wpmIfoSZhxspjHeI3G8qyVpp59S4xsdDjoa12dQ9%2F9gWzAj2vhNW1XgKgSzKaGoyRYwvMPcqazg%2Fzpln1KxlnjzcCvDHXarqHOOztf6e1ZVOwPohBDBWjzkIe9NXJOwqsvDf%2FKgR1AdxjRwGsyVsd8uC6RmL6oZmOf8Og5nLIlXxEK5dSiIzjS97N1sHeJXz0hA2E&X-Amz-Signature=961625b71b2554b65e6b24a1b888e2f066abd64523e811b8b94b0d9f200bc2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
