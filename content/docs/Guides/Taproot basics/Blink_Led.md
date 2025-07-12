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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSI6WF5G%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr19p0HbzDSbOVJUHWdmlZxcMQVqBUQC34%2FsIq0TXPAQIgUxrdFk0nkLnXrHe%2BMUwq0AKbuo0tYWl1ITtLTsVOSzAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADBmOQJhN1ZL8k82CrcA%2FsTyKaXG8M53diCtEs5iXlAJEyOhM6v0HP0LcRXXzwXWDg%2FYboZUpTMeLqzEk7SaPW2j3%2BuJHT52v8fzwNTunu6rCfnCmJn9KZk00gK5CmcnSWbGOtY%2BboASiiDTyqCpzFmZIML8sdxjHsyUjkdYD4vBKImbZalQIeR%2BS8sLxP1HDWn9D8pdpPgoRHVXcyHkdk7gB50MspmTeHaQLisnkW%2B9%2FtNz0dS9Zbv7gP899xFqY5prjnOIYzmCO6sJnpHRTvO%2BYdnG1XAEVRpk7ENt2%2ButkxTnSm26r4Qsyq88vJ1VhNMz0o9coTXYMF54iasdsCnB1kNNycvnJkVVEonKGAYYHMvYOlYntoFrygScqUWyu3Pu5E%2FrD%2Fc1aT60H3Zu7PWwjcg%2Bn2upwlvMGaqhM20X3JfXVcWjhE53OCwoKY2k1k4oNyKGsBByEvxO3XlJNx9FuIZtkXx1Y41sToV7i%2B6MrykhK4Uy4B%2Ff343MWe6d5z8iE9NMCcY3B%2Fc2fUugk3eWqKzkHOca19aLXidLSQJba2Jm0ESsK2%2F8vaeypsIzCgwtf9tRcUFe9hNhZnzCCinm6MWpZQtCcoUL39Cg68wQmOfV%2BOJ%2BDcVIHQY36zIPuuW4ZS41qAxKyVsMN61xsMGOqUBFY7z4awnqThkE1ApLWTQzEMb8nMquMrmXrZreZ3QO5%2BwEr3Y%2FaYzBwUDc%2Fq0Bfo%2BPl0fRhItXi3ekB%2FovIfF71ggP8vyFv0kYF2hv%2Fu15Px58EKAsVveG25FZmGQEGHlVEtVoLZCJ8L69LEJ2u1fxnWamPCKsqJuIajc1%2FEcVG0R%2BuTzlounR62Tsdf3KmhWPqzrLqVx9e57QWC163EEikh4lP0M&X-Amz-Signature=07f1be8e712547a78685056a2c938979159d90e74b96b59a00581af439223f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTXFFXIR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT%2B08lvXzhJXIov5RgnEINA4S9vJU3GQ7r2ceeWjndgAIgGVGR9QNQktVe5SffSx0mJtJhvaw8S1bMGjbtPUaGVgMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMb5GJSVtyAN%2FQhwDCrcA0qs96yhOvC0e%2BJ87bKLwM4vJoBfsx1Nv0DjyA0p4Dj6yxIvwkbeX29YIvB%2BbLJRoFwxrcq8cxZShtdfd2XiyIRpbx6umEXXdS5EyspNhaesFbjbGinWc21Mn1BH9D7wRo1VPu0QqLYGx6FdV5KUgkIq%2B%2FH4W3%2FAEF8aAc3ntql54Hq3sZMIURYpTvpyW9c4S%2B3cXvHvaMu1Is%2FP%2FVk%2BY4hNTCU4rm5PQBMYy38W5HE%2FDRTpvffWtI7aWpjRVWWqdIcNekb1LQowPNPq%2BWx06vThagFFR2VUf4soOVxothZG87s5Edba8VW8Fl6w2WmedcjAQ8XiXjCbZeJjglRwGhGISSEhHMEJnvTMHE6PrAo8Bc3xv09gSkzaTlssfce4Dguxjm%2BgRCa8gjwuCUDlDi4%2BgLv62GLB%2FnMfN1AoVhWW2tKydt0VRRaNziYqZVtafFoze%2BhQnICBvexd8hUPHsiZz07e03yyAxldGRevFzxUHIhGgmexs4RcP3eeFuSVaR9mE0%2BY2gJX0%2FGenKANWwRrCaQSwxq0AHS3JQ%2B9GrM8JZgr%2FDpEzhjT1uoOulD4OiwIP8LkkKUX2tP42ufEHBE0QeqLiNiNyizBr0RoI7z%2By%2FWynt1jKKmbWFWWMKi1xsMGOqUBhCht3oLjbGBmLvczVgtV9XpzDOxCbDDzJjVuaZjxqZMOmQqbEUeU9%2BP7B1JbXFig%2Be%2FWRzrcyqfg2TXm4WiW%2B9JAkjywmrY8JBp8JqWqmEVdoMI%2BetjlxyHPY%2BpcEPt7lckHcsfi3UgkLYwPkEeE5kacYpqbjR137m3semCi3PANLhHI9LCmLQQWCoVbaLo9L7kPd7CSuu48ooFfruhDOQgYw0Gb&X-Amz-Signature=149b947cb2dd39a4d9151f85d692127a53b47436dd283d199670e350e01385e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
