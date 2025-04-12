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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIM2UMSM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQC685et4%2BsKkGf9SXR4sG2RY%2BN%2B5UG66ns61WvfUWlEfwIgai7eo1LIARjtK8PSB3nTMHxgJ2IA%2BsTHjUxsYuQdbPUqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1xZuQgUOkVXQBsFSrcA2EAW%2Bktu7F91Ve7gxcIqoeKrbLyOjiF8trCJsZuJzno4B8KEjGzjUFxAeT2PpwmcYkP4Xnj4pxuTN%2FhuydJb8VgqPC5xGyl8O9EfqgyoimepIe66AyOuqgAPuJcbeWaH0FkysWU9Y1nWlZXLQUCc2Qmxg8QR3DOhwVs2%2FLQz%2F1LeEP4NX9x8m5k56%2BwxPXm1WiaCjaG3K6kzr2RxC5%2BIibqG66x0s1WaLmMlkIbr94kuUIC2RwFgee35DbfFUUM4ESjS16dOmrzo7SE4qb%2FJy%2BPKuopU%2Bh59u5rT780SUxL90E1ysDF3zCgmMSsGLOdjW7C3uCqkVdT6xziJkX71Vzws0LzYV8foDjiXLP7oAAqwk3UONduw0UMUQ55ED7cjpFPNUL5thQ5YkP%2BAti2dj%2F1bF8dARD3KdO8HL0fJwP3hs5sfEwXGLU3wNuufqvc0ZLTeam9oUi6vlaN6U7qnMaqaR%2BTec4sQADR9Ogy%2B6OG2%2Frgy81F8zrnfPuvLTbG4pDqfrQJHP3y3BJ9EEEcc%2BGbQvcpZWVV9IcQlxdydMn8yqr397JcqwrVEfG8I46WlSzNDw%2FINwE7c4mnA2ciYHRiu1Zjd%2BEMcuQ7N0WtQwCOHIvuu5gYmX95PI3IMJDM6b8GOqUBpuYfUfOo%2BbTn4nhnXOLeAUs3l7zR1Yd3IcKka6qW1vXmQ72et7hiqXxSCAKMkKHKfAcq%2FdMI70HIVsRy71cnlfhwbavF%2BoXhaiRgu5bqCo3%2B%2BjO8U8JTXaJjUfFT%2FK5F353dWXEA9hKny6ENXqSHz6UOmD6JWdjZpAc3p7Rbr34T%2F3jJ1GLEIMoV%2FTUUaFe9LsIN8bYAg5mD6JqNrBx3CP0MA%2Bim&X-Amz-Signature=a9159e32a1cd1efbabad438d5ddcf90463b1422c6f7733756ebd7b5089a73766&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH3YAAYQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIF0oKWCTPp4J6m7QMdACnY0bM6r5U40G0ui4TM9t0TFGAiBWRfksCO2VwBBkT7QRF9bNGFCsqDt4S3xj%2BDkMkZnZiSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4l5sY%2BYxNx%2Bnu6%2BtKtwDWEXpOiGCoRPRlb%2F7qBVumZV82lK8uOAlp6ayz4vCUNzZwtF2kWXnYyPC0XM182iKjqzL%2B8XDcTtDs8k2XrR9H%2BgJXzOGAnUzE1rJHodRTJL8ulqYkyzUELCS66dIbXl3a7Tr1LrWG3AFIRW2Viq%2BZ2Xjs5reEmVG8sUeVUoau4VntNIlnrwQUe1KPzrBzZUFkn5u0YCsV4dTJ9yOPdU1uNIpM2aEVvlC9afFandupS9IQOXxEe1VNVHtZKm6G46OAh6GTWksvLoGiReF7PACTlksPdg8VP2LFOQQ%2FDXulRAmQQfSJxS4SnXpnKygscfjdWM3MKqXPHDbs76AtVSjYpHJZHrDaQLCUnAA6L0Y5FWY1krVNwopcy2vgPcznh2bkGujp045bmVJ9spCWGV2ozaznA0Sq0kkJfWNcKhsAce5Sx5%2Bri18Idz%2FxIdKXlT9OhEoSu1wFlyEINfdsquXUQe0YgmlfccJdmSF9DeH9gK%2FbDiUANZHpC2D7MH19lWGv978h9qpn%2F70Phay%2Fo9uOucW85oRWSJT7MqPAdYAmYqykmuTRoouXZuXG%2B3r8%2F1BwNSzchHzohDGLgfIPmrR6P3H061pBvcnTGO3ezIp0oYM1bj3mj%2FxBcDxrPwwv8zpvwY6pgFjT4x4ImX8xsXFed%2FliKaafnEoVL7nWBpSalkZkvzGmEydpL%2BwL3s%2FgcsxPZrPwu2dXTXvRcrXfyvsSqGDpNHV1gXKV5VslUQLXxxn6Zql02goA5JKezN0M2ibVGvhYOaToc9tNkNqt2A1rP3G5%2FEQUA78Xi%2Fch7OdZhuleCTDxDKPtEGLHDCaOEJnALmbw1MK%2B7ThexxJCKVRyW0U2IMH9DBFOjMA&X-Amz-Signature=850e2279031ec900604e0344f5e59c7d6ed364094f0882fb277a5f873c066ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
