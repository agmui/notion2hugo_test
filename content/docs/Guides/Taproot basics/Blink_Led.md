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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHWI3ZF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRgW2pl094dnfyEvpJP5wPsz8HOWGsHaJD6zgeWnasFAiEA1mcEH0KtYBCBTGNY1YDEaJMtOaxTNw16Fad80oYg01QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlTaZ8gDzi7W7dvdSrcA9mXexAilx3tVKgK8HrUM3r959%2FBSVxrMYd6DwlgS7Zu9tZv72%2Bootcvj14NFxPnH54y3mzIDcDl4gmPRlQuOpwxKWI83zd%2BcV1aOmNSEYNAJT90upF1R6t1eK2iGh5DDMj%2BSLT81bvHpDV1HaLrUTji9l4EVhMi4XUlEeqQFXwNZz5MQHCIsb9Djq6lNo66HQ8gj1GaZK6nSR9cZzg%2FDegjP1kuZHgtSukhdwrSQPF2Ra5Z8kD2V4uzCO3U4UAV7fb%2BQ0fphNmAbTs6N%2FWfsGOKHnD2a0Bn7ByzWN%2F4WaLBieztruf5CSZa8WGOpllIe%2Bkr8H6xL%2BBUJKLUEd9K4E8W%2Bqg60xvxIVACNA8btuhysxeL7KMB6%2BgugMmMB74sqJCl%2F4safoKh4Wj7wtttlpupJfNmhl49Nq5C6Fn7cXBOg0pgKfrA69hmrTy6h5KSIb4GoTDIICaH6SaNVsxT6Gy8TFnyapsoRLEb%2F2UKFRz6St0EbjjeBRSRhQ8EDze%2FjNVgo3chB1sUlNakifngwpeOCWN9NtCOPzQjmbJzBqw2izm7gIkLtR0GTiIVlRFUatiSk266%2FxJgmDH0xazIh3QIpDh7LjIkYVstyy3nEZpdYulY8GIUJKIFoFSMMNrU58EGOqUB2579aAMPmiqfg5C9agKqaqrC3Upo1MOBtwxBDdDBC5Lv%2F2iUwHIpkX4TON757raahNlXdNmNni3Va2wn1YDh%2Fe9yUomtmYX2Kt%2FnuxTiFrzSdVd4h3CzXbWWVhmJK1ziav4veYIyMPr%2Fbc09ouUFuVYgeDQ2VKERcm5hm2sKR2CGld20cvmFNEuOjI%2BOQ%2BOZTJmk5TMoW0bVqo8KA56ileYJ0s00&X-Amz-Signature=651fe4cf9e8b2d163a33df9a408afeb37ff600bf903e9a95aeea960f555a0787&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7CC7JH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ1FEBC4POmSBpRXTWi9TZcDLO4dRadeRYxPc1Ubq1wAiEAu8HuR%2BCTCVUrqCSj9TUNtwAuTib245c7ia5napbbo9YqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArN9Upqja2WBvF7NircA4TNxVXxT1wCM4p6jSSFRLSAruiyKdhWexKGXm0HfC3TOODhOfX5Skg4NETlNbh6BGEHu%2B%2B9zLOL0nRSe%2F0oZRSBMchz6QYcSgO5Mn3AV%2BxbhfzyQd4KDTxpCbXZNwV5NslJHTJVUDiovHIIKlN8t5kPVt3krepBx8S35lh6O6wv7tLA6xAQwiWZPPV9Auy0p5fPojSHvlnsOgu55hmEslW%2F15QWJUL%2BW23t6nCdIra6ucqwNRHQqqDo9ypluygXiXbA3HWAbByvsjW1w4bEmojLiyfmAdvnATiwV3vh7dw2LM4vGW7IEt8rhGSXIp%2BMGp709D%2FPV52LGNYVrCJmL055W22XPPJxWnJeClrge1ja2exlBOgyqLYYHVheb%2BMZUBiQuedYQa5WV2A4KrRqk20%2FOL4UlPLE7xROlC0eHxwFZykTTmcIGY1D56qf7GIShFTBcevXTUTJm6yUfk1YCEV6%2B13WDJrJINO7qhZPrREXGki6OV5LeW2g3GJgLzfkhneb40CPafZHpyqPxkQCZQPlCtNYyvbwvjDTZbldWKX0W96we4%2BhC7tKp9bW1%2B1U4s9eDdnpKUCSD8S%2BZv7ApIZrLCEW5c%2Bl9rnftlksGhtKbfqHpNZ%2BDm7GE5paMPjU58EGOqUBVAq6BMBsZ0yvuxvvNFke5saNgYprrbl5xJMfeqiC4WccpIAXf3HN36HAwN8jgnWbQ%2Fj4LAl9eqYYoXIBnC1ajTIwXlpcVbZPrt7ZQApGwlASos%2BGNpLSEsoqx9gWpzEneN9Ldx5f7oqNWwx34wXGGNbpXL6reeMucKi9jjXnl0wHfT9lReiG8ReNzYuDYNTYfgLCZ%2BvKjBLTIp%2BwT30fE5S2ZB0S&X-Amz-Signature=ebd6e90fa808d692ba52c21b3671e1cc3e68364bb498cc103e93142534c0c22f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
