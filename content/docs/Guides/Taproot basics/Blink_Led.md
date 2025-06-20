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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=3b42c7ec9cd83303e37b168dc100074e8b80e677657a5705645e57e14981864e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA6MHGDA%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG72D6WVnsIB%2Furx8vCijt%2BrXuwdSCCnH8YoozUMiULWAiEAmZ72Mc27QCU1Mt8hBeB34VhS5Kg%2Bw8%2BTyCBNEDTzovYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkJQqvnCdlskI2FtyrcA4Ru7QflOkC23ljt9YZx39zRKuoENyVrR1pUzS290s0FcTEfSxINrs%2Bhl2a5A8eLc7EYWbxL5Z8UWIc5OrEmgO5jdYvBwgQeLEPardszKBM3NZsyalH8jPVrQZxblOnWDQZCmkPlImtH5SVZ9m7%2Fp9%2BTdB1f53O2fhjJofShgk5kP9LfWmwBR%2BwvoIjuz9wRZtwhYDHBTKMLaYW8TQatH%2BdDDVYVuvLiWyf2MqH9SsMhBcNXaam6JJJeKss7ZNWVxscbgy%2B%2F699waexCMW2zNZFgct1ZNFFYxSllUF%2FGmv%2FPAoI93C%2FQsgDwEOxwU0h4NHpBzGqfBAkYvXwSgAb7ptUdJM8e2saounLUtuXynAL6yhAtwMPAMHhy8OHnc3PFqb8QvV3QS9jdCZHdtc9o3JdcLWE8uIgwIs1ITVd3A1GSjT7OHSNPnNjKQSNepDBs0C0PBQc9Ztd4ZUzxTT77P5BiejFbm2gCsOTdeGyXPqgcflsl9f2DLiDNUKUyoV5yafCJNmXGr2p5%2BykNvp0CcME1X9gmy3V6Bkg0B0vYh2eREIfYohUvizEQ9u9U%2BTSjWjqy5cY%2FkkLOwwZyUVikneliN%2FzUNRq%2B1YTIVIVLOrdV53Y4jasCO12K%2FSubMPek1cIGOqUBzeAm6j0xdYkrsAqpJDz0ovX0lZHhmYyXm%2BzpmQJ5qT9exSrNmjOJaJBdzjJCf8P7EY1pxlMnnbUM%2Fv2xQQsSIQL5UkvKqowoNpqkhwVEymRrO%2BadnMJo4lx75xc4KpEy8HpEsTRCHFoHkBHIULJPo8Re9gnbxoyeGUMMHoBimSNxwoT%2BQv%2B7Nplh%2Fm2%2FxrzCryqwsZI73PjtqyrcTMloFv6WnN4I&X-Amz-Signature=3f563f0cd7459aa7666fa967c4604f7ea9e4462eb25715d67e1005b989685887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
