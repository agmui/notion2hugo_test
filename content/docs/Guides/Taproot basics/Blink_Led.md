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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RT6FYEI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC0FrBAGVcZ%2BoPwjL696pHXK0PdHjtK1QQmIo6FpXfQrQIhAP6tKgq0xsHgbwICa7ZGiajehKbHU4irMSpaG6BCRiMYKv8DCG8QABoMNjM3NDIzMTgzODA1IgyQyTZrXtsZauUgMzYq3APs74Z3o3u0AcW0uXwBXKrxIchmUUwuGgBfoHvai9oSqskOIlkfPpFX0mOnXl%2Bl2gPvtXSZeFMH8k%2BciujYZT1A59UrxOexMLUKHehzqDTkflONhrfQn5QC%2FKAPMcBKzkj1%2B2n1hH%2ByQswmc21M3bXlmuuFuuu7RkXd0gOkLllVPMtmc6Es8PcH%2FoCq0SUHaQgJmkeomja24R%2FSlHXTjlO3MXW1Ax2G1cCAUG%2FFVrL3lu%2BQUkTbqQxGdaC%2FEctn946uFz9r2FihB7SweRXPDcUtgvsRxDH2x2LDTPPMaYQTKMZV5r63B%2BaE596D27a%2BzS0KeKY8oCVHusqPjmG6ZFOjeGnna2yfnBDVj10QfErEVutSNy9MFxPr%2FzxTm3njE%2BrosJ%2FEMrMKQugcPAmA%2BfxVt%2FK%2FsRPYY%2BceKVnFSBdt09d50425%2BN9ubT%2BRdoh%2FTR%2B%2BnFpxElSjGbqn%2Fxq0SdJMpBlV3pKuuY6Phq1jIZSMwkXNF2TMlBdJzdc98oTnPW70zty5IeXdcXDFQjCqw0Vj2tSTDK8NJHxevKTAKL6WfJUoJUTDa3bDbwTBcDMOeURWoiDDVKEY%2BZWwpdX32xf0%2BuWmBaQrNyJvgxjnbFyftIzcxNcofLCBNLinEzC%2BkJ6%2FBjqkAcl9EyUEaqlsCdGdRy68VtsYG16H2aP7Ka13LzuVsCie3bzwbfIugae9mTP%2BdGGwM0VfFOCkDncPPH8OGdFepnl9oTBfO69XocFPQB8DQI342KKnUBbKm31%2BBFllu9s775n4qWbUr3cEgmjjdC8FRfvfKs1AVV97Quzrq1qgSyccpAP0zQQvB7pNFbNkjgu6Y9Ko5Lp0C4pDDY36gXbJj7uVmAHm&X-Amz-Signature=6a5f6a132850691e7e72dbc9b2678d34bf55a8dc8e0ddedee6b683a242dd89ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667Y25DAO%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFkTvrIjSjUL%2BhyPkpPQmw83Jy7S3HssNUBLfSJy7DN9AiB0jV5mvTcl09AqD1RCFkNSqQAyRU%2F6b3WqoIQ4eFlGUyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMu7jbcghAKA0Ft0XjKtwDj9EWVGXqpx0eKsruWHtPUwO63n6Sz3GRQonBdZeFRZU37nN1C%2BKHw5e8KcYKHTgNPL0kBD480F7UitKXvSSnvSRlUVhKikMsqX3bHoUAKppo7s0mgiHABvRnrFslSyDq%2FFEmsf77V1b6BNdnFf%2FiGk6xH2noSQCrfRepY7abFMPro7uDH8Ay%2B0bW%2FWlBjFuKfWxZeMvr34B7f40C0evK5ShHGkXd7ync0iUkof%2F9%2BUCYasKJfjOz1x15PWv4VgOmG9eRFlNIw%2FtJr28Hpddank5QH5300%2Bcr03zEb%2BljPS8%2FUg7kQEHCcGNXtPMzfksJYQRhxKduVYyKTqfdHwJpX9xdc43xNPpLwZobEw%2F70Kw7YRdTJat43XMjNqnbEVGd%2Fv5xjbtPBXJU4gI9Vs9Q8it1iUZcDIXwgLFvoSU0mqgTM1cYOpR%2Bgc0jqbbiROBlNQYa8BiFzN8Q9zgKS2CSDfPSF0pnmyF9fvIndQNymv627mHK2ozsY2e4K7exT6utrPOFPQ%2FTQaW9DocW55DFdmsQGyCovk4K6eZU2A%2B5hw77k37uqHINjS9OlCNhQtSQBl5sfdVAZh36cU85KTbo3r3Dlx0V%2FT5iHWvNe%2BTiRBon9%2B6tZom1u06iyp8woZCevwY6pgGJIriO10pSeHLyh9xKg5nxmGw3jiwIKt2fW8wG9%2FhSTdM634V%2FZd1b9sph0SqByVfKQhHs1sIu1inWDFu%2FghKEUHk9%2FnExS1de1bkhDCrrMu6h1mhKV29gEK2%2B3XNR7V8c%2B0u%2FAXEuvXxfYnnwHRPkZoq8XyCzaf3B78AlrIoauvqZichzS0pBU9w9KWGXOWobvAuDFZAlG3dgm3w6OFlNfW7LxEt4&X-Amz-Signature=f16e347a01b1a9c97b5f292bd9408d95df0601bd7fcd3acac2328e67bfdee81e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
