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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZBP5TD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDeq34h6abTcZ9SFzZ8vFSkhRja1w7rmJ7%2BfazIBk7HcQIhAIJ6wFpuAWpIcm9MXunh4VCaSKpNNlDqk3hPM4DZwRfLKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkoR393MyuP53SMUoq3ANSMLepwlUSz1VwXYRm6xjjw2NTMW8pnGp9Z00h5iq4ZcYGVu3YtVAdnjU3%2FhJxg8F8hkGpJs77tNZrFhjp8I%2FLnIQBCKvVAP4A9ZBWfWT8Ak4XJz2aLRbPTRFPVDqDin60lWHxl42E16Ny53V7GsyFx8NFbnUutPAdty%2FW%2FPsr%2Bt8eVe3ZMxmJuks1Sb33BDCCN9F6yljn%2BSaJBiza04B6MaqTBX0LOmEGmFHwtBrDHWdnirN8CFAYYzIoDZl1inao3ffZYwieRcAd%2Bci8ek9YecVvx2w7aX6JY8E9uXwZKhFufjmHeFs2Fke69ww%2FRW9sv3Pps2YoXu0%2BCMHjEuyqsaoq6%2BhWjYoEjfWYORKy4GUwHediqpjn929KbzP4lgQ9zaXz%2BJl%2B2K%2B23h13nwbsDWWvVky8S6M6MOp2w4VxBE4hI3aJ7%2BiALcHdLHSK%2FpWZ0mMQVZi9P%2FobVjWLSg7JTZFJHZ5Im82L8iMlTmr9CEAWjj0JXSrt8Y5rBteQpWEaOWgh%2BVhDIrkHNO7RYV4ABoCKuM5cDlRF769VZYqsiL4gzTExuOx5iEpeOY4UNWu5YwORIVKBGBpTIspus2RAmOm2gyuAj769KuO1tOtRpDdKKh6GEQX0TIOgiTDP7tXABjqkAYYhc2qWOnmuL8uYrqoKGg%2BoMl402nhQJSe10AdhXxyibV8SghYzspkdwuxceDH%2B%2FQdzXvZCSPfLRaZtDzWCLkCLo8ji2zGfbZTsdximxlVeoDjBCCNoJzg0WLNlRvOQljN1IRltLSw3gW33V4AnO64sL%2FSIYziindQlfiRfdrLOsNuWon7wF%2FoKmDOWcCJA1v4yohhnYdhffnUzaYyV1iURyLiH&X-Amz-Signature=c4e7465e6bc25e95ffc2c45e3a5594dc1c45b6df493cb707b8dddf624a425218&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JL2SDBB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDpAyQ8jfvTP4rP4p857CSFmfP1P1vv6q2KkFxMZ4VGcwIgSWzdSyRK2kFmWQIkl78SuZ2ls9e%2Fbh47GUXUL6TWIkwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdBXMIsnN0MCMc1bircA%2BFIw%2Bv8hVm%2FtsCxO60HRmwBkjIVnA4%2FD4UUm4V%2FtSFNyODMxYQfOLUmhGwqT79jm7M5TRWtihz7MtHOVau9iWVwIwk4VYQp1ibr90PqEychx9lXVfyJol5yxl9GM7hk%2FHm%2BkvwnWX80T%2B7dOQnMC3zMvAiiwEcn%2Fp7ThHU0aQU3S6OpE4nwxkNMDDdrao90J4g3D2JKdDTFt%2BHvWpmB%2FZDXGqQ0VAo60exElrLTgYt5k1efoyM7VH9GoCaxjuzMIj0eINyud7XnlL984d5KHAr2wEgNDb2S11cqRmB6q8uOik4qCtND4Y4E2WEj%2FDrwd5ulAIoyBkEXQLbhqL%2FtEdCyXSxHswDjd2w3Ht04sA5MzYsLcQ%2BG9cGoTkMOl7jINLZ89%2Bywsc%2BbdVY6cjxjXEOHD36mDinkDv5bQb%2Fxq%2FFAXEsr%2F84U5PXcMTR8ZtcY6QCatWmX5hBlmJcq9xt%2BYtzDYIy86LmvPQtLbE8xwIbRQGb1V8DZ9Jz9zQE%2BGs03qsNpFS4lePp4A7JN50dP6YlLHgaw%2FwBIDARHq8bTU7sECVAYsVoSHARhs5bbIRqWugDg5B0z1EbeESdO2SxZ6Ux30LRx0IHfKU%2BgUYynO7q2lSo2gmh5pofbbn1TMNLu1cAGOqUBNT5DpK%2BYgXEM63ucq44zmezVHpbsUV%2BESNFwJ9mXrVoYehClCIdNSeLEcUVlBiiaSjxbGjBG9oCtYoMWtfaNxr25cxyr31%2FvrIBSVelhUtyJNdLy3vDi%2FFaYmVLqtjtJ%2BihjAZmaKiE7fYBNQQOPDKirSh8HWMxi3rBNLniPAORd8HPhNHyaj4%2FdqiBuyJZ95zEu%2FghZ6Pa5saRDFbYI8e2pZJNm&X-Amz-Signature=e12b2f04122b5aae58f5467a99f5f8815eb5187f7437b0ad8509d38fa4fb1e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
