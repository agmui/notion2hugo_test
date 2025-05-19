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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFQTA23T%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUhowE%2F3DbWUR6G0Md%2FhgURniIN1xGoL1YzMfrF%2FX9RgIgWZx163xohKoF2hAUl5BiHZyX1zOVlR1efE4zMCrHnaUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUE48JYLoXtn8ps1ircA0SXp2%2F6iGGIJzynJ0kSCapAJ%2BXNhUVQpiXM0dzO1m4cx2N0UhEZfJQyQpV%2BZmX0ItTo3FGjgMxumt6bq1TShFXF%2BHfB4QHwY5R%2F1HVWr7vJyyBw3Wy0GHNN6Q%2F1kMh8dHqz%2Fd66e3tLFuSpFmt0w8vn%2BdKpwzqLJacDlrgcAnRkbjUQYePsIMx2goNsdffGOl%2BDPaH2zNEJUe0gYNbZZ09tU1Y41bosTXcbKakGnlZ87NeIZ4S1nEp5jwiBhP%2Fql4lOlAXEYaySy2w0j4a4NpQHhbcHfNPIKjfXg7DesjS6uNN6vE4sweXhPfrN%2FTzBzP1fcixbppWX2Q3LlwN1U5lgHv2u1O7o6m9pjcFgSamExzZDb8FXiWMRS5MjFUuLwC%2BB%2BU6U81FfhSqJbKIeY%2B2zLN4Bibp4%2BJ2xYnubGIKCgO080J5XySqFtK1mPlQwi%2Fi7P0yzCC%2FkBv0XiocTJPlDAdoCCjL4Wq%2FZVH53%2F%2BColJfkaH%2B7vy36UF2WefE0SVRsfJYZLOieGf4jqJRPQCEEOhlDcveNrYeT76t5%2BgDobHOB7ry5xOXukGB6WHf93by%2BRkkA4CCZBkhTCBiaTqhDjcDZ03DlH7RvlvrA3tFEVAwYno4yIUwS%2FoVzMPr6rcEGOqUB7D5h8CBUOOSbiSpue%2FBZk08uugZL%2FfC9H7op1E2avmxUKXQ6CePYfFsTVgECpW0k%2BPp4KDAP7QKIjDwA9dqsYkvlqhK7my7YA7J3t02E71LIaL4n9ElTGocBf9tQA8W8tWCImwlddXf5%2Bg12Jf%2Fs%2B1HXL%2BPOVmh9IIrAvUSmlJoROhuqnq8p5qPmiLDp3GCv6%2B%2Fmul6u3sn8TLKCSzmMEzCFt%2F9i&X-Amz-Signature=940cb3fa67ae67260b2772e167d7c13f75e1f1d9391607d20f588aba132ce572&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J22DBIA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpZDUH8JAfVEXt3nWuw0qCAHz%2B2BolyknEswS%2F7hxvnAIgMGbUzTjip71FuW1ideOPvU7DOfmogxIb5Mp3aE8EWiIqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSpS4CRiQ6YLvVY5yrcA0128%2F0RxOAB98VjqMAQ5YaTppO9cH62kV6WZAlRDe5m%2BAxdSdLyVmINSLVIGgXb3XNSDmaXUE1a9zLlsidFnDZ3%2BxoKTVhC8qxT%2FCVMxo9iLDy9aYjxQvA5BTZgZ5imFhHuraLnBu%2F6Y9FDP6K2P0JK2wyKFb%2FE0ylsnCAR5OxB%2FHgvdPyxeOngGN5HjHNb4rc%2FE32tazp5RO06XsVmby92K87OTEIHjfcTuVGxk3ITZnJBUfGabJEmAIv%2Br%2BD0Dyg%2F%2BqhuGHlemW%2BLk3noMM1GVQcm8uhUROBPyIqCJQxKO9bySWKQkTOtcnSAPazM4EjvDM7JS55UFd0R91z3%2BbUJzOMYej9f7no9ocHdRJDV5%2BSlef4UgXu8R398E4KbF7KR%2BQt1BFoDTPlsbwW2dtbv4ivWr%2BK2tQkXQ5UrBxB0BTGgGpJlw%2FdzSQbBgInN33vkjgMl9wY37UvRtS4rzv4LwvR4JDbtgytKGtKIdC86lVAbXlvYzrrZqU%2BrpIkRlwZqX9EGL8W6PiFMKx0zp0%2BY2l4W%2BIvEe0q0u9WT7lqOpki6nc8xeYb1TLeMpCq%2B2RXGO7TQf12ticSJDdTNMWsvfbKpxONOQTndulKauqX2Ip57NQgp9q2UnWo6MIT7rcEGOqUBJtzTzzWOBCbT8n2U6N2ROn%2BrSVoC1YTn0WYXTd%2ByiBDCSVpxKPVOH4fApkf61au9xqy2V6jZ9MTVOVVigUlaG%2FJz%2Fk483OPRMVWnpVTA5aQQ4wBXsi9ItCQhU8ayKOVIb8k23kSbhQGBA3qB2UxNDr5m87qOjMVeyI%2BLMk20NJxWhew6wpmwU405tK6goKa8v7x94HsX9uRZ%2BDZhPCjOiAadrDVt&X-Amz-Signature=d33093cffa5ac9e72220cde42fa58d5a13c8b6352da00b30bcee4d8cc4344a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
