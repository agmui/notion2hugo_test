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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YTTA24%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFMFqn4i%2BZN1n8EYvTllH0FUwAPd9KJyxgcVlP%2F1xVrkAiEArGYX3mFb%2BMpvBadS2kKqmK3gfCyV5lmc8JxDNu%2Bc2PYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDHf7jmZ4LNcn24owuSrcA5s6CKj9MxsICPCK9Lgl0Kj1GY5lmb%2BIo6LzeciOia%2FRSPbXBLuCQTbBUkXjHeUZ99Lzr7aMNFJasBaBs%2B3s6T6dCmyeEf5DaMBZXXp7DMQLTL4BQ4EQmeDg5zuh0Yfw32ePHy%2FQNu7vuCKDrrOruEIw5xdiCReSsCgxRVhZXbyuAgUHjvKdPBzK1LYw5GcUCKfDUJb0aMQr0B4JFozxGeIJGqkmma8IFMNR9X3%2BTus6Y7rIrMn0Mhblv2mArxQK%2BXOwtT4d177DpjS0U1uVbi%2BkYc9DRcLuLRx0UXctCLqZfPnqL8vP2DN2ZSldTjP66JCnWiY%2BSWhcPA8ZugN%2BJ2PSRHrC%2F%2FBpfDsJlmU58EWH%2BQ1FmGrqOXToFsx7K7m330bSyb880wwx4afSYTlGIgG5w0oEYzCWbQ4XIPSXlHHCTU9ywqpwWPv5xhE55KjAt5KKdGi%2FU92lt6RI9F8Iif2RLgqIa9FBXVVv5D0Ttgpvz%2FMn9j6m0xEqx779pSs9A4AcPr8RpOikwi%2Fw48r1YywsbN8mnf7EoyENFV2lPN%2FSQiilvH41NjWpJD5xU1JUqCSzjIjAOdTuPyhlNcZYVhBSNbFHfYB1TVKY8aoQltP5Tq6kB96gcwQmTcUCMMjJwMIGOqUBludUo%2BZuCZ0N%2FwJGcNuxdCFP4cAugCZ3qUoj7dgAPHOiX0Yu1XRhSV9yv1U%2BPU5DGoq3muQ7UsVcOLUljloNSeSyVRz9G8epdodfUFwNYtQsFxRCceUSyUS0psYQzrlEvEqWDUzTlD0JykF3zKhxxZHr7IikchLjgsYsLkLhaeiwyOFQ%2BsRRcE5ESgXiJhBuNJzFabPhO6S3WG8h2oru5t%2FgL8au&X-Amz-Signature=d70e737e2f2e77f4a3167bf7a4edf0d5d0ce5d0665c43869b70b0f05e174f7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P6QEHSV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFwqY5LKJjCEIVB9PNhTlMvhxey5Z4EB7E7qKzhzDzzrAiEAqVg8U%2FsZdbV0VUK9pk0SHG7Num82mCx68XbZ888syL0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNaEJz4WtddjAxK8JSrcA%2Fe1TJdRJx11uLxeM%2Baw7l4YcFvnL2weG75Os0IhRX6ZqSllLqD30eAeh6HX44wQz2BboKAZOv3ur6HCHL3Yzkh%2B02%2ByYreaBI7GlOZPf3aA4SPvGOEDW5%2FYsVuMZcw%2FoqBbzD0HCtG1j31LwmoCRTC3BbcirKUhlMK65ppjTImsUrmXUEQ1EoLnUfyM0jBQSwP2s58w2CADPlYUPU2ri3UzwBEeBL1O1rlPzzkJoliWKgdsFq75cCNwTMZmFx3fnsHF4xLegBV7m06GzCFRdMMNvI0DESSpqWeLhWa1ny8HOqhlGRe8iGIw3e38f33HHClmtSwrmp29SzGvUkMcywunC%2FrhsoSSPdaALNs0hYKAeZ19NoAc2yxGsU0p%2FL1NjNG961RgwFE7vPHOwyMPHKKwdTvXI2f25ljFvNeXsd%2BO%2FaPrjhu2HtUIrPi%2FKpxAHl00FMrGWnYPjjt9qHKpUipRfAwQN0Hi%2B8zyZkqzv6AbFDySG1e0VCrHoj3m46IzlLXzIIKV4FyrsBevApgWRp%2B5jeRarRprkmSwLL0E0%2BsVzHOsKird37nPiMm29ooZOVILOcMlWnipF0Peg7aoIhFms2rM8ul4XiiC3sSXj3XrFz3XXnMlo%2B%2FaBtN%2FMMXJwMIGOqUBktl%2BBZsPwVBuaCB1%2FmLEGqoJKARCwHWpLgFSpPOz61g62RK%2BAbaVXJpsE6Lna01F2cUX1dHLkDNnxUojmiZiu5h3zAk6sFHBszyyzSGkGQdz8U%2Bxh3fE4gsy7z2yyTYfRXZUANN4ob1PlHWs%2Fl9nM4ymV730U%2B4VNjeBZZu%2BqvKg1pDxvvTebVImgTLNLiazvaM3JBBLnbcNT4QnwlNhq9Hy2RKD&X-Amz-Signature=f70ac2cc9a9e10ed4e98cebcef2108770ad3381769fb2360f9641adc693c86e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
