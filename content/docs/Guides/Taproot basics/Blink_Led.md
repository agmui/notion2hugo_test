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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646W4VDWZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCICp238rGA0elD01X8L3QHzeqXBptDgHlCVXbG54RLhhlAiB4R4M9xBmmBVkQvN8CyU31eSl6YsgRgQgZpqZ7bFQMpyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXnVakonMpFk0Jty8KtwDS1a%2FJF42msXEqykMj6BUl8HGIlK%2BdGTUOrhUG68f4NEI7ROlErkUuWPZg3jO2INR8SiODCsI7aejblV1Fx72aF8oMtajPvFapRt2G2PV82gAYSSFvlLg9SYmz880MkRD8eGrGtTfqprq0xOpuf9NDmW7TYjFysccQ%2BPepJznme85HHyfBHtwiACiPIrWwNIDDLML5bb%2BMWeDKv7vJXiurf0ja21PzNjvkiw70C2bpwpR4M84jEcoczlzVN0nkdTL3S2w0ymBE80yYSaPK2ek87RJMcBC4n2YjVPOSeZYIdxu1PoiXUCMXYjV4Py72A0InPQzJwacPUgvqwwRLyjbTVAnseCDq7sBHR9Sc4EGCXfA8hVeFaTFXv8NcCjr7hLz%2FF5JNGMC4qGXwWoAS3oGpgY1AEA3alDa46oOIu6dvIlveRLyfuEjTlc%2FarFkV9Aq%2BbRO2PIw6f5nn9ya46uKWhcq0xTeQIuoak9aetScn8MxLBFIarCAjOSMhA7JFZQJRUs3nbLIuraCyxmVwPKT%2BDb8xZ5rKKP5gJvJsefjazhADcu9QsaWKDdug6N86uodDMRdCDvNrzVhN21rCVkyiV9g6%2BfFriurL422EvhcdHzvif7LSOvQ5dq0VAEwpe3BvQY6pgHvi0B1nytwV2iRItEfw04OzUXJfDGar060S5PjatYIqYBRMau64sDHZM6yd%2FOKNEtR4KxCSHBbFB2%2BJ2Czxi47JtEP1P5YZv2J7d28UQB%2BUzFGzLk28lpNVlLNxnqY01%2FghqgzoGBm8wpCXLdGtCaIRi8348iS70UFukrc7%2Fb6lcnAbdj5E5gv5BlXuoPxZ11vCrwlnBBfwxfMfZnsl5%2FEue6ZbyFn&X-Amz-Signature=39538abce79a184d563db8aff73661df2b7ffe4e80f0f23ab89e6b4dc7fc7f15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2TATPE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHzDbjyvAXMwbnknrxfMgwxEAjNd%2BYAqFJm2dW5OJKGCAiEAkZNE5qTjWEHP5f55Ea5xUbSi7dZyu1nFJQTqNZT9jYUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDA%2F734z%2FsM70S0PCnircA5kLWBjmdQBy9TJ%2BZPTYadQexZgZrq5btzFiAVQb3RmSDAU%2FoIYOvyFtgLBRq8ESSSJ1q9O2JeubgCfvFfi4hLN%2FjuDOLR59YoSJttTjWtQYCXztxW81dP84WV6pyimonl0qvj%2FBSWwT1ssBgDFywZfWzeBSmqFjQdM5MPhizSGamGTwKD55LxyOJJDD9unpHaWlHRmr6TjQ5W6Snn6ldbJVxm2qbXipQ2igXe8tyVbyB3u87sq00nKahcT8%2FRmN3ElFyoC96HNDYxjdSFgYd5jjZpfnEF3wXxK2CcrOMHJNzep0Fs7st3DGezIgfs7A7d83Pz4ua4FyeU3H4gNqZ4a9%2BjarEBNkrbkmAAhAFqMW7MGYmTOiaVxV5MWmVSb4iW%2Fkvi00x3xGUvfnBZVsbr%2BGGVB3nr%2BZBd%2FlkjF3lNtYPaOJ5kfUZe4hTjoiHgGMad7UoScDCQ3AWqCbEBf6KLSP7%2FryKTRbpYqJed%2FLiVwkPPq5myTBvX2n0mQUpEAulNbJPsIBaKl4n96QfFLkMIppf339RTSGuCRJGwBguz49k%2BXC1JHsegNxiMYr%2B%2FJAkWmscJmA7CVaQyUJnU9TxI8Q6IzWuUniRaAdoOwAHUK%2Bv4MnE12ToL4NnzsTMLDtwb0GOqUBsCbB7W68m%2F7%2FHRQnAy3AXLkUltvXj1Akfsrc2DpA79fPN1gM%2FUbtkqghIVK9pV6mzRPX%2BeZMcukBaYc2KkwX6AtGHEqUNRU9a4aN8%2B0Mkjos4e2gXiXf88kyiKkkLsTwYBbzqTIpw1fQaiORS53GVcLkJpz4k%2FbDuICCe50kyWElSnwi8Z5nIqN27CEj%2Fpmei%2BUjebqBAChSC2EueXYasOalgTQ6&X-Amz-Signature=75075735a7705a24397c7c407b1ab44226c768f4987d087462ba345fab1b509a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
