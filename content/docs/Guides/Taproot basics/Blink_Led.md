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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDX6ZST3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHs6fdbRmEzHi7m%2BHdVdWw9Hmm6u%2BH8XlWf03fI50rOAiBj7xiaVe7CjL4MLeODUmS8q7bu6KGR0QpWkiHFZ4LE2Sr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMOXiPZzBAZvyH%2B1zEKtwDpFbcvFkAlaNKQt7LlekQCkyyys3XLr26XeSv1j9bVwfXDXnW8i41ipmle8hBBtwaghbf3P3DpS8gU%2BnFy6PG2dadZIe2Lp5HpD0pGWhzEWouI4wwLqiztErIilGMSf1aW%2BcTCFsNLPuG%2FnYdQS4udn7lC4u%2BKbJLrLP7S6kbTMgh1tP3SBueZIlRSYr8SfZqNM2dGc7YLVor9acDYfhgBu%2FPxkdZIs36%2BTcXyvaX3A8iIsG4I3PqonRK1wC%2FST7UKnjkvHIAVsO4RMBQI98vAveFmXYDFL23UrbuVIBsnMDV2uGkAS027gkUtu%2BX0sHtRmBLRYch4JT8jHL8tJwpqBUER9OWvsnx6Kp0O9F83Ax7d5S2h19IYvhMZs0DNIb1VonT8yS%2FZfi38xdh2KBakLQkg05UMyP2C%2Bfh7SXaF66LX8IZWd5U1RmMf4R4xV8MsArZ0IFY0a3x%2FoJjg54IPC5MAqyy8JjvjioJY3nu2Mj4RGCiSzBTtIMGRpXb7ymZ5%2B90LTC%2FSUTiomNlBPbBVTQoL9V%2FP%2BXRYBaULdK3qGEzshGrQa9QIHtjN8C%2B8FCmRow%2F1pMHlQV7C1K5QRMphEd8sorTsTvwzzPZ3DXrGmyw35AA4mNr0tphXWcwwumYvwY6pgE50z7f6Cggdd3q7Yp5fVzPB1uwx6kBZ3ASElphl5z4s7k3KLNy14TqOxjKZ0K87lOqZ9WmL9xVZkhZrgPijuakw3QTFx4c2HFityHmRSnNxwb7dMgSSbhtQsV%2FoemvTXobUmwIz%2BP1mRtV%2BGaq1Fj1C8SU8wXzsAxRgOJnOckLzVGrH%2FOCzLAD6g%2FNPx%2F7OnLNyASvj6DkJ1Y5rHvY0bir1OGVlnSv&X-Amz-Signature=20848768a5c66731ab9549bfcb3e502863c5347670fbd7048dc3e9c76b1d9928&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBYA7HEK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFYvpjfeKt2rDODRqb317qdeM4do%2FFwkhcYZrw82vJIwIgFIZTEBcTOenM55JMa8dQ2S8VqHrs6UymDeeuP%2ByCnMoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDXobIWV5ntWyamTVircAwPNNEeC9pzEYv82eH3znagfiGsvcqP34cDQezDV%2FbaBGpZ%2Bt%2BrXBfXg5LnCciqGqMSYu0UAksXk%2F%2FteB448rubNxfXBix068wcy3NoO2GcCn278mW0zww0LksYAFetJSRjMn2BQNojYB8uipojQwmqVu%2FbiBCmWGuI3FA5T40Qd2WCh1Yn2oFAFrPq1U51lc1WmdBLpA%2B1H6RIJhjRnmswupf7pxhR45Bb%2BmDVkG5d03mziHh%2FLm36dFLi30AgAWnVK8PeaFYoBcj7WwGrW59pRY9skMDbDqtuTOh%2BHpFsJFsx%2FLm2hsnnXs7CclBLpRapC5gqb8uIWG%2F6yQQyXbOMMMx07PtYDkS41Wr4xa28bvQ4K2k%2FudaMh348STbM17%2BJsV7dG0KMXAKjH9wVv8OtJjiTA54jIGTXJN%2FS55dDyeKt5HlGT1LSL%2BeW5dj4GWIlW89w5I4g%2F9NnSoc%2FNzZAhJGHPu8dqSes3oyencaPW0vWekMr8hYjXmhEUzTZTZhGrkJJaT5W6R6KezILt8tg4QShO3LcusDaVF3G8RsV71xRaXSS2%2FJOEd6dFmjomvLVJsdv0FLnp8LdmDhfEWZBEGqKac5hlXhj8apOvV4oPnAgm8VllaZ94WDeZMM7omL8GOqUBGdOSrvbL2muN5iA0EgtxuWyaVeC%2FL8nvNCY7LeIgMOR9AjRHy%2B3w98Srrc0vq7E9HDd3lAy93tFtl7SNtSb8rycVqzXi4chsu2rbByqbbTM21drBgmgnhskgozVqM5XvgMcfkemg7klwsusGpg7uEPSRk%2FA6qWZnM5Me9S%2FlMqKc3nf5Jpwg0wYtokMWhnyrpMSJ8BT24dOgm8nm9Z4%2BMdo%2FpIUz&X-Amz-Signature=9d720611d8db393ae841d295db33971be202e7be2f6f08aebc404d5d65f5b994&X-Amz-SignedHeaders=host&x-id=GetObject)

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
