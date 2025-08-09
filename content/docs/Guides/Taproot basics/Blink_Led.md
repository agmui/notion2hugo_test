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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FP3KCXJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe%2FxXOcuoIY97lcfedou8esoun6Z6M0ImjQ5VZc3432AiEA0Rwov7ORbWWM4rRQMDAbbR%2BQeKE1DS2SQtegJ%2BQZIOkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPcLVhYAUaAoOGimircA3nw%2FCPeukiPyWa09LwLsSED4PfoRC28eLBqy5NDXjw%2BCxXogffTFTxTNk2pcLhTw%2B769WO2DWu6epnB0AFTV6e2pl41RRNVqjdkxujD0BV2xPVJSxuqBlndqoA1kbQcgD5pFNimK7Y3SleLRqB8ZWN%2BSLJh7M5o2TK09OFOOAMQAUqaaO5LwbNaKozoMAVw9ZXbpPmr6%2F91LUNjzD2UrRA53lMBgBVTUqVBWV7P7n6Hnr5PWAm4fxD4p%2FkaasQucX074cxtYnCX7DQaNYdPMp7B3rws5DR9mKnMkef%2BaFBeXcloBf0lB2nsiHMdb8cdPEuPgeBud26Ek1mctihW4Zr5zs3ZPvX4Fe0bO6RVKtX0uknM3%2F8fvA99dcjGUWeQrKhfoRWyVgSOsxI91k4nZNEnhJdQrKC54JJbmCYaY3MhBHFu4kDqddjMmXp9K%2FLaE4ow5%2F7wR0TveWHsqwELE3iArUOj02Z8SKX%2Fpu%2Fdmz%2B2stfzww0wXkWdrsXLRwnmXCBdBSHivhQCw9dnu8bIYhzW9p0TOHqLKyTEtfkFy09xo0014y1bfgfeHyX5voH0A4DUSYaw09FlQ3HnCWZ3vBa%2FFpZVEqKyyKc%2ByVgYUubljd9uSPflfDqkYO5nMMyL38QGOqUB6yVclRGwbia9trR7SKlVPMp4VzGjL7eAs0MBwT65%2BlT2b%2BsKxqm6T14t3rVkVNEIF%2BLcxUqETwWRt%2B6WUV2ylHGjqZX%2FbmM1VrjD8flcE99nUdi%2B8lOzJqYVkRhlN5C6Q8GYIsoPwrpWKa6yIbfr%2BswwpE%2FRFypg7JuVV2urIZvzFYYvhz9rkYcyTQVpAUxUU8RP6A%2BcIuqNomr6zU9fHJUVz9ga&X-Amz-Signature=753e4837071006bd922815d76334409cb9a32ffd080df24beb483a57290f606b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2PRLM2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcJoENn7S5HEGNZBaP%2FHfw7nmXbUcyUDhARhFgQv5thQIhAJrhgLMEknBllQAAGYM1UVpIfMx0%2BKetNXqDHpn0JhEQKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOX7XvP5S9GX9rPJcq3AOcG30yav1tBVabx%2BpC4UaYrCbwCcFdMgd%2BYUYmnDjOYbbf3HhCS17OoSTun2xVSftq4uvM9phDxZoa1mQP9Q%2BaDFfXTj6k6FSUOQJmz1HU4qKQTTPPiwhCPsWuHW4vPGGFKQzM0tsNL9qSNVzp6eusYmzom%2FyAW23hyHID8jXJqMWt%2FPAeSbCDD8R6rAPloMydJBUFoCY715pdworGgXEkbhIJYts13Qde8GzQfDkY9vMzAtWMTbZznIq%2FsiDim4rcWothHFQESa5IT6mse5CBrheQo2v9C462Sju8wV3cvQAfnA2ISRFVSCnEH4BE5FMn1jCsldd8H5SuvZRZ2hhcoQQZnPVNsodQeqmI9IXitdxojjwp5eR1ptMqmoqEI6vuz%2FnNgKX%2BB4yaqFIzzm5hNRlfKCtqIhFXWNzi6dYlkzfvriMRNTMSgMboRbCTfUtYM2NN%2BcTSxbbHhaKDzn7BuhBWs0oltbrShPPvxNkeEw9xxH0pNaBy1uvfGkaL7nZ6dOVEmckgj3IIP7nDJD3%2F8q8ZXy8iw%2Fsm17ii%2FcCdF%2BIETwS%2BXf3%2BvFzRiJxmGG9WE6jpZYY%2FgUucgknNN9kyEWF7iUb%2FG71EQHz%2FamLIQ5qX53m8WuEoiOp95DC%2Bi9%2FEBjqkAfyTFDsVFuE%2FKkI6%2FtccrC2daUeIhD8iEAdxQOKBsSBz0Xux0YSBUk1d73MDFW6rWwQ7VyHKdhP8MP2GV83tBn1F4L%2BFvPz2uIPKJXcga2b6iQ43JFvDvmWUL5xUGfsxzdTGi5PF%2BX2X8dRg4XDrMOHPLVOqas08Gj4GY3eZTiyJ%2FKDq8BEVUgE6JbTcR%2FRV8NRfbnN3%2FR8PYbeyQUoLFIdFlR9k&X-Amz-Signature=76f42b86b11ee27cdd0fd3942f40c23d996b2e81d06310c06ab613ae3a9220cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
