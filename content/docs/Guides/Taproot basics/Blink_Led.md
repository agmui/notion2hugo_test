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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFLQSXF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFUNVtYhqAuqzfRmvBgpUlPJMhxrVmY1yWrqYYx7bIypAiEA04n6vX7scL1NJTXmfATioTj0qxvrTr%2FI8v2nV7ZWw0kqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZJGNvQHkltBnpV%2ByrcAyzEWU3fFsKi0OqE3yXkXiXmaSzF3pJVDKggUQL07YJ%2B8sngOvKpTkxmnj37HnPsSbLSrVl%2BTyydBfgWkuqVvqhkxSM2Eo0yjkygsojBunSpifBpTEwGzOQ0%2FAiKZNJx19jEnqmpdU2%2BEZvcyqNueJmHuNdWrCmXD0hZ405%2BDVQka%2Bs%2BKvV%2Bf0LA0NiRbWkb74EVhwx0dFfiHTAUTgRYBWuoNxZVfAV%2BsnM%2B2eY98Al%2Bfuu6QRpbVGYTX3GbdEWl%2FoKGl0Fwl%2Fe8R%2Bz0ilzFqGaPX5kDFA4rb5wedUMPOUrnV7I%2BKiV7vBhyPgjzglzg29RaesbblPvIFGJqNUwJOCX1vEJVxmpCF9cO4QMhukzahDMeU7vPBK%2FUCh7hgqdBwg0GqEpVsZwow%2BagcFuX0kTuiu7TKHkTV%2BohrRnQCyX4%2FUvNvANl72qj0vPpfY9hup8hu2tiZSUysPt55wL0zESPWVNjhR%2BRNe38PbMyWciMrKsOMu8TH5AG63%2BfnjyeTFat%2BguJxigB167UOGJzFFXffMn24W5BlGdTF1yySCgWuwqNfrel08MJxSJwo%2FhzE3UCisqn0utl1vQ4vwuP5OYEfJiUjJmycg0OQ97Di66w9ypeNhKgt%2Bw6BefSMIT40b0GOqUBasfAtql3dvXejQRgtAhf87BjsQC3Q2Ay2EAd9Fm4sDXX7PL6jcUMkVOwDCb8RiHjf7McdP4gmG4UGb3meAzOKMBMMu6iIlYTEWHou68OQhlrvuSRvX4e2AeyBj6P4yRmqAcBVo51iVRnc6tferZ%2BxspaQleLY1vIGIzYpbrPeeOXx5WLSX%2BZ%2BA5golpGTpzXi48GUDKZOu%2BPgVAI9S0qZud3uGeU&X-Amz-Signature=b8837cc525979935b0b66793dc2f5be5dc776a53738dc4774c92c92789016cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXDC6RIT%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDYxMy0NlMh%2F58rD6D96V2cBu6%2FYPBOg6PvFn%2BDONIPUgIhALf1jY55JcO1LIbBKAarWiFRE5kXTYwarq3XFCnpTlldKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkgr%2F6s4jFoS37dNUq3AO%2Bp1XmU2kpFkpVXKI0m7ETKSem8PxcvcMEuSXsI4oKLQXLwOY5hOqTEtFaz2MNpGeIWwvrBSGeFjsZdpOx%2BGZIh1F9GHYzY7iQ9Dy6Dk5mShriMSLnMt6MC4E3hjoqvGCwJfZY0NVvbSbpByUdYZf56TVnNKBNL07%2BfySXjUpGZwlwrM9tCd%2BEfyBzA6n8DmLqrT7%2FbtVDwDMnmTDPDpoO98ldpXZejfg6QOp3Hw3bdxWGE7vG2mrN%2FxvVTzdj3II5nPn0Ub2AgGekboK69wEc4u9tbxW%2Fwq4OzsI9ZMXA%2B8hVj8ZndQuAvxPWNIWEDYh0TMq9jLK1XFsyWuPGX7cYpFWGBbwCyR4M8dD35yc1428E%2BUwnHasYjJUMKDa3eIIhf3jAgYx3SQSkjfopqFWaGa9vzzE4LBerc9H2%2FtHaob91rVsSo37sQuFm6iQWkakmyPmAWCwknRbjQMlTvQZh%2FdBoC4Q3u9DbZCEoO86N7%2BwF7IFOEa5CWpXX1shL9KRboJV%2FhpFc%2FjvQIndu0YwTWruirIyi5oBcEIX92N%2B0%2BhjcS22tljK7B%2FD1HPdilAxcoj24Pq60MX04y6dRIQYWL3hZBG9K6f%2B%2FT%2FVLUUILk385XcqyPcD1znWZ%2FzCb%2BNG9BjqkAfma%2BfKmyhINT2qNK2E5DvNea9XSTCJ3h36FL95BxaU6Psmshl3JDwtNKhPmM4%2F3nUwaJ7LdiTRRxAUvqhwbPU6eswpwafEgPhblhhphQGd4kFOw1TNc6yRLXKj2Kxcd28KpKHZFmd3vOarSva1lluIaWkyrY8S5jOEYzkjTba34xr4WOIOjricLsV7agJFg1uK0qfy7%2BJYmYCscHFA5rm8PCHtg&X-Amz-Signature=c7d00f34ebc621426ccc62f6f2ac511d5a1c956ef769e36e011a247b62e6d3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
