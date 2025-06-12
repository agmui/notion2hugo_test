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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQOGKTER%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDOPUiultuzyswxMdn5yvy8Zyg2QRncp21wvqVg6tqrugIhALfv8pCL90fjv8R6sZ%2BCfVlonSOF2DOIoZXbM6waU%2FMbKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqovTrpDkXDCTEL8kq3AOkDig9EtShzvG4dI2PkuB8f6rv5915yt9ATSiwjyMX0XK8t%2FslnlGoLAoTEiua9uYeKgK9n2yHwVX0bcWJTVPZqeXxKXshRVzhS2dy8pNE%2B2Ry4narW%2BFJvF5MVGFmRPXdZfzSorx1RwU%2FfbDD0l6%2FP8mxEWuMwiuCSux%2BYa6WEt12g1yUuYfA40X34uKSFgXprmgAEyYW%2FQmqKVSINVIQktH6o7xKngRSNGgLMmayo4PxGPfTIkpeAha5c2cUlVRp92myvLOPjwiepdVWqCQksU3s%2BtyAwXRFXIJuGHVhwqwJqqoLMKasde6FHw%2BfjnoQZddSNJPKnEWmo%2BfJHH43YPPXEYPd%2BKEFoEiOoZyqF%2FbQbJf2MR4c%2FcFTJfTJJCwDBR8pypzvBvVwgxKd2lfWgZsSWd3x6G7GkV4XEDCSHOEJbSUZ2oBnpNoiighrDXTql5r8V65yLCds8C6GONmsxIPbeXkGYpldbEbRrbIXkcAb9zL9gPEbBwi9Sqta2MrwDkF3Fj1vxWODVgUn%2FiWI%2BAe91OUAXiO9g8SRDbXvP8Od8zBFFk0txziL7oQBamUQpplu3HkqNEGPaV9IzLcQjdnvYlAC5MJnQzJCZBCMvDk%2BvJZslctEMyM2oDDtt6jCBjqkATAPPDEovP5g8CdUEG57t%2FMgCFZScidWvLBCjDWCHD6sprj9Rnb4ZGbDvFiqwk%2BlcbO1VvHfrqGHTKORTxh9XJH8qfW8bjx6KIY8n2CHXDqHBG9sDZ2vUwtL%2FIiYqjH7jbwNVIzYiB04OQ4T%2By%2BSheEF10nfgZb%2BBUoAJ8S9eiuqPv4%2BwbcJO45O%2BwLNGAyCQlmG4QQsJ0jnu8S63v4oKjV1tMSb&X-Amz-Signature=8cc69790607890a32dede171c65cd4a44c1014de4d7d6c59336faad4362e85d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WESLTMA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDyuwxh%2BANK1qfFIQajEsVRdkAygHXzWvRjyGI8BMn04AIgXpW8vmkQaMlHflX0ns6E1mCVF%2FmGrMFQKBwSifL8LKkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOcOVbKhhgF5LNx6yrcAyvbzN96xEDJU80ju%2BFojmC2JRRucoEUfDzzVns5ShFV5abn%2Fk5jVqU4AkMzf8ULvu49PLanGszb7gosanu7GG2RhPT2eelQfdi%2FixUNHNkaX0G%2BBsnH6gxg5F5FcfNgLFQZ342iwBrUO0fJIkdpTNmSFEK%2BbCOKlFBZ5vsPXqNcKgwgCRHZccUWrKa7kFNDqLqTGhRpul6%2F%2FBkARZnRXYhh6SOzgZ7mLnDcIFADuXJpPjmG93ySSfjRxQE74B10VbnGqgyPgiylaK%2FPrXHVs3gzPQAO0kAjFtSN9DI1EgqlZ1MDct3J5Mj1VMjlwCMFkI7Vz5LGdIt9FY6BdtPaKPUodv0EVpjd35VFCdsFVCWlic0ymcViLOE%2BDc2ezqjJj5VPzf%2Fb67Qza3ofmCQIt7F6dxTf%2Fd3bkw87SxpBVUZtKlJL4G%2Fp%2FfMurHZNVsg%2FgOPPdDALAVuOW27FEvNs54KlpHW%2B2nUV2lm5YIqDLWVm6xaX2HgCfx0%2F2epKvQkxxpkIay64ooH%2Be7Su6VOLsPtrbi6mxK1gRgq%2F5yH7J4D2lrgjwxH7ulCMLNDLJsBFFj3V3HPaxt472Vqs0fv%2B%2FaYYCKrHx6PWbw6T8QFU9EtEkGXesShwSMN4H%2F9cMOa1qMIGOqUBADPkdK1cWtsQg3v8yTS8AXIzLeZ%2B2z%2FD%2B4nYkcc2EumSzpdj1u%2B0U1f1etfJRW8Yo3GnYxF0acrCwIG6j%2BntWNZbyyoICX6K9BUf1lKx%2FMEcasSjWNxMkraUkUfGFr6BN%2Ffz3mATnO1LnJkyDzYctAdoZiGRy91KuJFZhEOpWuUirJ%2FNb1fmuVHatFTg%2BkDjEpHGMDaI5hOKIXiP2HYQ0%2FYiHawS&X-Amz-Signature=fb25126ee628ac0b7c8f714cf2463e0634ac900736a6dc94dfe296df9fca5839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
