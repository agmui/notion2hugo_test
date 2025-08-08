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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOJYYGX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDpvO5imSqEM8EmW62C8vBXdGxfYHVnjDzoWgWhc9ej9AIhANFhp1rBWaLF5R1P0HUiU0lxcJUxUThD%2Bc7Jlk46qQT%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDxmgZhBWtVHFzRCEq3AMd0kHTow%2F3eNB4Ob9cLXcoDhHmJfGKe2RCUsWMMSfd5Po93iTydVHLb3Lbm7kAjtcIFQaiTYcBH17bvIc6%2FOjziJldIZoP5l15Hn7pOe7ZfprN7Rzfnyv4ARadGq0Prtqd3ftz%2FIx002q%2BqpXTYoneONvcp4QwTHpMfBoGC0qHKAyxpp6hl8YfxyTG7SQUGKFBvXqOS8HUvFQ9HibtRgzrOqScOkRSLkfhJneeGNZqum8%2Bv0X75cUMuYldw69PG0cH3rAetKprN34x4QnYGmEtvQbUT2GqZYLhqjNoifZzqGZwZ%2Fno7gg6U5YTURdfxo6dJjZBx8W66rY5eA5JQQNhuLKzuGvmLv%2B2c1JAk%2FBRH54dnYcS3Z%2BUYUJr9Rxo44d4m680j%2F0luFUCYrG8VX%2BQDukHdlZuk5IiBHqggWt35sAOEOcRum%2F7f52uhOfLms9WO1F4PaNumuS95fCvSpA6c2bSsTKQQZBz6ZRcaQlK6FZiG5t0mns0ZVdSmMK%2BXmMhdJOrfysXtnCyMY0Ai1ZzYu7jyTbvIQkxixUviXtHepSlqWBFYcH5V3izFQWaTSmKPQXRt6WYndgrMw2mn0mjOQMMwyCh1MNaN98%2BfM43aDEjN7Qt5XPy7ChX5zCoktnEBjqkAe9T5HXwCJd3ZjO50fanfZBUc2ig6ZdQpSt8TlRkRxI0Jgt0t1aPdSoQfqWwrRGzjZ3AXliSDxwuGPudWdPobZ6ofaHLZ3rIaruDYeS1%2FHyuxqD6ZTPcu%2Bm4lnRk4JNYxf%2B7bYqKCTyUXnx8NyxP1p%2FtAB1Bhxb6MiUgqnfc0RcgVghY7BQDHVCDDVoDyWYrDiWKgPnGwMV1bvfg31lDZ%2FO6%2Bv3E&X-Amz-Signature=472644d21a51680b5570c34c134b3b97b3dceb162a2ae1579cb36eb967679818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQGXJSE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDnh%2BtTlYOy7rjpJwoIz%2Bk8xWaLCpuHOUOAZrTksdtzggIgBaiWR4c7RPD%2FrjMsBmMxHZm7iZVZ8TBbQYdwZCs9awgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9yHfzsq8fjQOaytSrcAwmGlgnYqLd%2BeenMjRmZ%2BWl6sKr6fgeaMzskvC6d%2BGUJiHRKbPyWgcnt%2BPUMW0XCrcGEhMX2Ps3cZoidEKxoW2cn9A%2Fo06ANplIevnPMgy%2FISORnceP2auIuhyx%2Fsf3KMkPob7HjbPcoZU8r8pEgZG%2BbF1c%2FhAVeVTigKNTwkhnThMBQA9h7D7oFKxM1fEVIUqmcKrDKx96gCU%2Ff8xev07k6ZRAZb2aU1bo479utAZHXqFDE1P364E7Cpp%2FcEwTIwKRmPmmyfnfJUH2G8aJ4Yxfqkk9rTWgifB8Sp9p3QcBykLd0HZj%2BW1%2Bf%2BzZmDKYr0eHevHy3o6JNSFRx7khOJQnsQkr%2BUCbbZO1m6dxHWOs0bQR%2B6yXCp4LEE0oOYrkZ%2B%2FBh2EL%2FpBe7MRHEmwcJ%2F9YP04X5k5hJrL1P2MOz3qmfQP6J3AgJZDPthmNgs3wQRPZZmeHq2lwgsu4IhhmMjRdfF0On8OwxMEDVsZ%2FkQSeFfAl7J9nMiOVeRFzWP3KHoxX6cr20lFnpvXGJXEyGPOEepec6gFibgsEvaHxFtO2%2Ff3waqpmfQJNEZDDkh6RgKtEsMa6OQgWZWJ7hUOZQmy4edbXQdvWEb2R8vPRniWJhM4hpvXf3%2FM2AKIYEMKmS2cQGOqUBYvyZIsTqTw%2B5F2L1AGFueX1ExlsX2Rao603mVQUV5IC2uzXAyOu5lgHwExM3e3OvU8K4osro%2BwqWDm1Ii854PmAsFhuE0sqfA68xjSoCb7h586NurbOTZQDkeM%2BLYlcy8%2FyIBAofe%2Bxp5tOAXbO37wNdoUV14GKukbprgbXYD6M9esH8AdPzPoQ88G6dgmLQd9f3TgRet05YEitnVYypmwRLbwY2&X-Amz-Signature=7931de5b9c3595237abd4289e96fa74133cb6e13072929fe69f5e91eb79d4811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
