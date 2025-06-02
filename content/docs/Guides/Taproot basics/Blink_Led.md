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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLS5LF7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIGuY3ViN3cSuWOmM8rwfNn0zXAd1kSMYCS2UnH2P1KR1AiBa7uo5ASsuSZ1xb%2Ft0tNKHpd5f7ROFqRUI37LoB3pYdCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTyD9nNsVUrds07VSKtwDMlW8B2zq0ozE2o72vRWmsuW6c4OLTjbjaLuSXmYh7Dv3SZzZlaeRnoVuidZCZIBs8E9QUz3Vip57nrxFWAJSMsSBOMIYyR%2BQ2j5%2BcoX4rah9rwuuKVo2sqE9wHxoeq3Z2%2FxBgCwXyLNq%2FDvaMvcutjhDATtSvZ4pyucWKsgwUSzOoFcl83GRH1VuZ5JUaEaVwyvk0wX2DKYL22qs5wRhlvl04MfCrL3LREHWXkmwQj%2FTVRtWo3ta1x%2BZtpaKi6QsNYKh9AGW4Anu8vwFD6H4HSPWnC1tplUCIIRXZL%2BxWpvMxv4hLvDdgURKZ45MjoPYFYeHcEeL2%2FuBAWUrDH2mnrMMzjhkfZs2TTUN5CdYDw9SoPszmOomnbHuaJ445uysyJPZ%2Fm1%2F3ONdNT0SZRsbiS5vR0QaCoyJIvVPuhGRvIYYZW3eUZlAE3iGb6y8Ay8iEkf07KSrPz9Jjz1%2BwbTo%2Bofr42BGruSR4AE3sfOW0sdG7x%2B26LJxc8xhvlgwx1GIFmAqqmRcpKyCjFeBmJrli1bgODOGyE8QBAKu%2FQV5k0ID95ow4hClpXZfSsWMpG5wD%2BHruNyDepR6FHBZhA63WR3%2FxJBly7evE1hplSrHU9%2B87cFf3L0Gn%2F9DASkwsZH1wQY6pgEiZuQt9jNi2VM6Kl0YT4%2F%2FcDCEqZNcUaGnuOiSniVZ7w12vrnIwOhsrWcVI2cFIKp%2FyOIrGwrJDOdibEpFNMMUXV6B8mfrdxjhqcLU8bvqBf9KSGWO%2BlRZbD5A70oGnfN15lqZT4YxbepGKKLCUGIQoNloBbYSryKTyxTHUQLMaLJplHG0VJJ1qX%2F%2BJf0H1oQcj%2BOGTjaK1V%2BMS6ErsSJOcuHwa1WZ&X-Amz-Signature=fceda8383fca67938cafa1065d6cc1a9ccbc703e58fb2ccff121cae0ce9718f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ZXO7KT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCaLa3AdmLV2vW9CBO2iMSvznKQL7bXT6IQsj2PlpFIFwIgG2b5CO6%2BcvLvMibultp3kVJ%2B5BAqpk6mJUNde007G0wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvvnq8vOokt9RMF0ircAz5L%2Fj7r3dnxGr9SuLfSVBgUoF6dYv0spZDcHmXe79yqXRqk9PUagqwoP4sYO7laOVTCIfkVtAu8j57nisPxRe5vOFS53XdSX8aQyU1jhDmp%2BmBAKmMWeL7%2BJIdMVk5xPRl1vmiCrtu9A%2FEhqEUxZKV%2FtSWVlgeewjykz5aDpfXavOi2lSJG9n2KQvcfiAPABqooZd6M0ulpg%2BaUP1Jw%2BVVqvFannyxmAvvFQkivlIWUJuVXjNDw9PgF%2FFlSM%2FOXi0xWQiDG%2BoPRk5MXrsSAzPNJw4I%2FAg1C3DDrLzKFzNvLBNcdG3OXqo4kWa0EZVTbZ%2BhF0FXkfRq6LNk%2B3zYvaBjPbg9yI07lQwCFuBSbqhfUqMvJgSDQIhb0x78UVw1fRO7pBdD56ZfZAwKXhvJAwnfVX24ASbF7x%2FWMRLJBQkZkdzXzTSn27Ff1JNcMN9S%2B2tmuDz4pIBbcIHShAF4JIsYAlABrJmhYEKoQSEW0b3ZRBxzU0weisJzQgZuxSAfXOXm%2BlnEOVeHIFtuw4qTXnxC89BZHAH3yXAF2nMvGwVSlYJTIGIDHEvk0ag1DmXKHTlHXfkW3U7KM30DhPtOSAbE7oR5kKVH08lzcBw8Ky8cUDTnYcjv8ZexDW1EEMNWQ9cEGOqUB02BfdXYLnx2txvq0EFAO03dmT2wqqmHd%2BKQcmKsAy3qSGHlqwH6hX49fyAOTCIVhVqK%2Fc7plz7YZfiTly1d5bn3aIcxbmSb8wcRTdGLXh%2BMko1sjUoSGEEzivVGttT0AdFTjORIZWOcaLibLa9MqVDFJ2r6OetXN5VNaA0w%2FzCne4ULdupvRhUX%2FwWRlB7cg3feaHf9v5vc292FuIfrujkeWD4U7&X-Amz-Signature=9d4a80df341a2a299746ae05504c37ed69f162ca3b811e8a5e4d094c53987a12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
