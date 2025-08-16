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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F627RFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH98kgF92fwYoV2Wg9RMZGT0h0rfDB4nWO2oipANMOieAiEApnp9pYt77lolaLMLqGFakEPX5ydi8X4Wk7z8J7gk0%2Bcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDF%2BHu%2BXW1q3SFxB7%2ByrcA3HemY%2Bp35co9Z9SleO%2FbkpU3KFSAFZA%2F63KtGDLkXtrJXIMmogJA975UXWd5GPCntYfmbGlfoG6remR2WA3Plma8EaFIt%2BM4xDjD9p3o9dTuKgkC7JpsTLh1KozkWGI5ptK5MwYWDRhayYWg8aRGPhMrW2mQsWc4YN4uEseywtEwr3p4g1AkaVf1%2BQ7209%2BV2NmAajOnFMNVtXnS2HOrmR6LMCXGHzln8oXRDfUp5vSylqTpOUrSEGctcTN2ohKRc5aubuvO%2BvqTaCOMrBJ7Mim6xLfkRW1hLk2xYQX45l%2FaUSQr5aIQCezDf736p7MGEoMBJMWBp%2FusIXUjX2ysVotkQZNZMnIVGRAh8RQQAtEV3DIfAZlZqTsMOJZX4pi%2FOx4ZG2sr%2Fa9oDp667AO3Y5lvdWerWxS7dWXHKvYktWgxVTjs2ZZDP%2B5qg%2FTjgXIFO%2FS6NNI7TtFFiVKASAY2ttj%2BgSIhHBofzAd22IWvk9x%2BrUF%2BGlnrKu%2FHY%2B9vB3PH6%2BvsRjtd1i3n6ArR3Cty7dAWaGxfO4QeZSjYi2lAtHwwND7h9iE5GVGR4tnC2r4bB3ixSWElGZE%2BK4WqcEqk44uA%2BI%2BUNintdVv0hAsGWA9H0aSnAtlL4LzFNOKMKr4gMUGOqUBt8ETe5lTSxyA9v5PzBWjqdz1lqmaUSu34NCrHU1PtVs7%2FPzvButQYqkk3n5XlWpl5baAfLcpgLR1JMl414YfwgzckYje0YdgowT3ifbbv6TJdmxW8cn4N4cCAmaAU2MXRNPFQArelEKrZ%2FUVCb2ZvVQjXq847tuJUoz4j%2Br52zcJD5bLym00L2K4XXoWPsSnVOhiXyiQwz6SCSfFj3xB9OG7n%2F%2Fo&X-Amz-Signature=4efd4d27b24cd820eef26739802e0f65a4f28a7b24783ec0a65f9a0eec80f093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLF4CAG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICxTFzQWJc7wobeReAdXBqcFe15C4u52TQ%2FnLoyK4%2FoJAiEAinGbLE04sQ4Gu3E03eq2LLIHmUcnBuGp7lAEznpb1awq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCUECdSfkvwuGLQFsyrcA0oQpD9nQT7KGOzKZYAkQl8J7ddT80NHJoDcckBsXIqBNijvw0BEOniPp0rwjf0LJ%2ByxINC8DEtqbMf7KDmOe6vZqZXiX4bvuiAcnSRWT9R5fcyTHQ3%2BQTnKDzn2yPpum2myguTK%2FfNsB7E4jSsylMW9rW0kHwEwlKmj33iMAX8lRbVfJUop9pqTuSXX7SqwdjUikLLuUpg75ai3e%2BhH4F4fHfPanMdweOV2MUbskQsx%2FQy2eN9NI47Y28DTZI2cdhAzlHh%2FmC9JnJ4dDh6CzrciVa%2BwOhZhLKT4NFpDulHEDk7h5OH%2FZmUV732cLdLsifkKoeBNUW47H9iaLqRPOn5XBMmiJVXkS5QBLIvUPlLUvukYqyImKpjezeKDvRaUZgL1zPh2iZIROnoDUK5O3w3WrM70bC%2FcjsuGeNNgigLU2wJmNUDCK879puooXKqtrW3nngc6ikBBrd6LijlWrORpQX%2B3tMKl4sqYb7SZHEuxv0sZKw%2FaglvNFVrib2NDVVLoZ9VLyBqJjErKhM7KwOppxAk%2BfcqsMkTK1o3%2BfoVXZItfOgWKWmIIxjfsF%2F5MmPnr54wA5rnbb2qqDEbboj9o4eXs2GzDFLP5ytJ4cWTzJwYQ9NKEsSgFAF5QMPL3gMUGOqUBbULtZlPkoQ4LvLljHIyuN30dGgJH%2Ba%2FSuXKwuqxhmW7w5EgD2fdann%2Bf21bLymlvEDggfuHcqAijCtk6V%2F9uKfYrovJLXIjCdtpyEfT64nZVQKUcIUoyalAd7R5xUl9WonqRjsR6MZjr5PIIx1t9Q2WcxlMIg%2BBTpVl3nw9U9r9bnjaIFjrKQtBDFnE6kiqqhC%2Bx8aMZfl2uAGIAL7MlifIrYOV5&X-Amz-Signature=b5e745a0365dfe7b9e426218974bfb35fa8882b1d30dec5333e0fb91b940e290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
