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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGTPJC36%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC5Fx6XkpvtWAqJrEL%2Flc8jJ5Q43yyKv7NPA%2B2IXFWgVgIhAJB52nNjj%2BepChiYtsL1f5JtzQTFk6P97pTLGDWqxTttKv8DCC4QABoMNjM3NDIzMTgzODA1IgwRP10yfZH6gsHYZcAq3AOYqxcHDebQQPNfV7Vr4kJA66C%2FsNoDpO%2FGCQQC1Szj7rMu5%2FD%2FyAEbxpDLfhEUVzHvw%2FvNxH4wQunRWRBH29ukMsJWXXjBVZm26a7Wmk%2FhROqQqpBlMsW8MqWgsAfHM8khT4FQifjLfmx%2F%2Bwi6UYehAEHsWRX1uVonEk9fPRR0civqJQmipl4sj6vp%2Ftvo5TTW7WKoKqxYeAay82eu9FbBvPy9fTnMK0k37CY6x8tJ49QGgnpgLI6jSyoZKE8yHV3Xi8ZsEEleI2%2BZ1LydVO4T5my98qsXRCV8Rgd7%2F%2B0VoTwju%2F0xi2TXp3WoVEdN3hK4TiJw8WHHW8zV6WbdXkILrkGEGRwHsMWOYD%2BuaRDhVfpHtU39e6LIuoWDm0HHPpyyHiEikJm2VVSyG5hvQNGOYlebggznGSR0oYF0Kd8rNyW5uoBbTJd%2BwSAsJZQVcBKeUGLabKuov6xzFRWYG7a1rnWypF7iNPK%2BaUXEeZ971uB546l7UxOMxIR5UsON%2BRa7h3ZGBgCS9%2FVwEIaCJS4nS7sp3iiXhKXe%2BUc9WQCY1ASyw1%2FP2JtBk3K4KVbRWkdGwP4ZyxK0y0%2F3L8sdeyfG8w9JSB6O6rLSmHDCQgHaXfdFkdp%2BMhyPDh03LzCKnJ%2FDBjqkAWmRLG5lTcTykRTOCwwh3Rrh%2B%2BANIH6%2BuL6SL6vHRYY%2Bvb%2BfVL1k1lpVV%2FXhA1N6yfg8V5JbVPrd7F85d%2BoV1t3wyv9UenMJ3Boo8ynfawPaSudEvLNC6KhiK50sYY6nZafRSBYRkDJd8Fz5l5RS%2Fo3%2FcGcfOehA5y2U5IyGN9e6CS39N0WCCsjbcskcWuyuENm%2BpFlc3HEkXPg7UhwWSm%2B2%2FDDC&X-Amz-Signature=4e2e60e82da609b9bd67d838d55fb67f245769e38c49059c354804dc1a9e04e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM5SYLXB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDMhssGOS3EpPO4po9okve3a2r1MpgDa%2BrR6b2w2nV6lQIgFGOlkPZuXQukNMhlSthLB2FVyTBw%2BWaH8VgH%2FywqAPsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDaleUVPp74%2FwA7kOircA8VPAdoBEvw3aWFyWS4lWf9Kl1fGUnoCW1boKo17dnxoVVK9%2BsbJdJ5gcL9U9NPaqX%2BOmx81y6aQxA4r4Fmgdi5bd8%2B7FpFSThcLn19m9y%2BK9AeM8c%2B51dlbyzqSnggtYlFqe96HK%2FvJHw5SPFj%2B9MryvPW0IXZeh18L6ASECg4QmmVAee4pC07IOtpBEKZYqlwvxuMnum4yTSbNtklPe3Sse5HMfXF5HJvRFtL1xIuA10fnY4ULPEEfpUuIXLgmdRCohJMEc99E53l%2FX9cQFa4EncijsN2%2FtOGM7pt7L9uVXQYhLG9HTOePKJxHKvr14V7p%2BrP8mvzeJiOgjEVO%2FsBxDY18fKbqKgNzgZJ16OFWRRRzxKzNxo1458p%2FdlCCiw9xoDZG9599bfIz%2ByKCg2esO8rgG4CBPzUkeI7mXpH7%2BnbDQNB%2FVc8nQn6YtJimyX6kdLA%2FP5k13GgqH8dLxmNQVvQVk9fAnb1%2FHTYe7Kx8so%2BboHire7zDoN%2Fi51jbDWLvZD5Lbq8ZExDROGPCcYjOqRjhYu3TO%2F11Lc7DiPcUY4sXS7dIMbnV81jxs30vGOqpUi%2Br0qoO4N0GSkfYB6SVc8jfzE7Dmfe5%2Fhs8foKgau1AlBv1R3gDM2IYMLqcn8MGOqUBz5%2FuoFHku6HIl0gi2bd9BkS2ppo%2BymrZWkwLctkQPf1%2BBtmbzCwZGVhWwZnBT%2BodVbmXEwzHlFhyB08cVAlz%2BZLP5Z7i8wjaJZoL5qizMMi9vPhTy4xzPl%2BX9jXCmKEF2iGVBXSimj%2BzdWWXlxW6WK7DUqY%2FHAO37UCnhkLStvFwN4EyikO8aJwD%2BqtWCHFLhud38j6OigjXYF%2B4RUdefHtmXLHO&X-Amz-Signature=439a84aaa04240307225206a31031f538b911155c7e4eeca597a3b8b8a2e5222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
