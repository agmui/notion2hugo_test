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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNALYIXX%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0lZJuYKJjDQINY%2Bo%2BhjFegScNtUQZ5Vsf2QoCfzXfNwIhAL%2FtbBsvSu8ByxznsaJqEfSmbVdUDsYulr8cJBKaWPQmKv8DCGEQABoMNjM3NDIzMTgzODA1IgzstlyD2J7n3l6NgFYq3APVCsHNJMrBFheUMSsQuFojY3h6K%2Foukrl7MWaZ%2BqTgoww11%2BZ94Jgs2XkE70PgTE9gjnsogSRo%2FpUZjewTObrBmxZhSYfRwMH%2BOIk7q4dMspU784pQSWkgozjS4vFjJ48d6FnjTcGa3o4YQXqLiU%2Fy1sSlNjlsfY%2B8an8LIaYLPy8BmQuy6%2FJzWxXbWC%2Bsc14NVv0rV9AkYou4j%2F5tKQepd8DWrA0ExiVo7EcwlQREULoSqfYFsKaw%2BWVMejmCHXeORP7QATp%2B7%2Bl8b2cZppPN0m7sHfCtmw4xpNJDrUsKCuiUYolRwre2OHEiyL2HpVPBv95zFyMGdlJ4s4uuK99DF6yjZd9SO7UzZcmn%2BBPa%2F7n9lWKzRAGKiUnrF7KXH8IG6uXFfpUkgjzDh1GuEt%2F%2BuoBGAuPIPoe1UwZG1M0%2B9Oe%2F3zxI0ZFi7tB4UGbc1KJli4xpxMg2f51v3uvNePg3Pyeuqb4oios8pCce0U7WO%2BS0lhFmA%2FfiWeuB0cOV72kdYihsiFT7rk5WWBPIvTol1wa8NMhscNAtVH4HuFK5ccNazCuzGc1fTdMosEb8uOY3EeQb03rfKBLoiilSFYj9PyrYd9UHWaE8YHIzVMIgUfyXA3NLmSGDTdtCIjCYyoTABjqkAdPBECtnEl06mStxQlKOOh24QouDtaG%2FVUMDaLYaxlxgZRe2EcZyWemaq5ALblZpmWxrojzFdGTrS9BXJAjCOazeBuzWgdd5jDEf%2BSKdGtjKrp17spo8a1OE7HMbBruhim6TjCM5FYZkyBqFZZfqQ6Ekhpbo%2F27jvfzGbgi4dpPAvo6a8aUa0mUgbtZJ3XwrnT5%2FomOLC1KoIJfRc4L%2FdzRqlI%2FP&X-Amz-Signature=0f1baddce07100f6acca32f8b3204a4705f1379a693c9e58cab82aec6b14147c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOPRUOP%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwCgZ0OusS9vn6NVOj1%2FxToOjwfZ5q4u6lz9zcYhKwxQIgZJsHsmk73h0B9KC5dEhXVaIOuOUoZETQaW46SH3cXdUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDcYL1cZqanHan7zWSrcAwv4YYxTXNxa23zxwsZ5zkioRGmnLyxlB79AwCQWdSzg4ZY7bRp02cjm%2FNdNHKQSkUIVeCQ3PYUgDoj3s5EX5ankxItAN7CKyRDKq1E81jQ%2FVE2EkGTTHKjgJVSi14%2FrFBh8ss13clN%2BUI4WMu4Mapq2WDwdcl3KQdYnBEeunR1g1KMU7LN1TPEqirK67YNJ3MroQdg5bgtKusyoBY119f%2FMK1aG7pEl6VqC9EyBJWpfEQWuXbNmuOaWlwzdJXIQM9IbC8WQWHeJBCnfgBc4sQNt0z5fd8dwnFssSMgYUNEn9qqyB56EVwVLHQi%2BEi0fpXXV93wyMj%2Fl2k537K999Sg2ITDB7%2B7DKPTA%2FrRmCYW4Btpr7G1FwfV3ONgPoTsipJGAOs3NolSvsauUuoGyOIDdZMohKV%2BK%2BNyXxosutyCN23SyB%2BX4I0KFl9LLw3lPX1JtWytYtbInHik7npg2v9wN%2BnWNu%2FnNmLO%2FiJ42DvqZ%2Bm0q3Ks%2FchrzaGIRBijTGvvxHhGEYfZQ%2B4NEclx6VuNdPy9iRFK9KcvQqgLaY6Tu2ulI5Z%2FqOjrQvKF7efTmKbHU%2FBKW9epIDtmva22JlXpyOMzn7MYbsuitwQIUL6zE9UOnEloyyNMjTWW3MKHKhMAGOqUBe9QoNcOh27kLngfcZyno528H9o4H%2BsYvpHt5pzNu88J5QWsLUWfOFQAZNHeCAH4KwRd0jMn60hJaXkuQ6JrLaXPazJicnDYK8vfaWNf9UJHNu%2BbOU%2F0GLA468Do3MTOZX1GUly1S6jKcd51EfKZw%2Frr2eTw1Wfd5D1m1jlESQ7qBx6S1JDPo8hBzbFjw44lLRdQbphxMBjA30glNSXrliuvbYj2r&X-Amz-Signature=decf36cb98fdd2d44ce426675e130a062fb9b899af5cf4c9bed1706ac2c36d09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
