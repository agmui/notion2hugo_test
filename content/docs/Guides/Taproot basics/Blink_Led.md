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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJD3YVV%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIBnes44x4h3svrQi6sEn9g%2BeNqCWTajuYQPeYHbc4zM6AiEA6ChGdqRz%2FcQj8wze3dcEXd7IFnYd59L6A2xRCA6%2F9VgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPfcen6O05CSdVRjlyrcA7686cK7tLfXp3GvfQs8ew2%2B0LzmcSyuLhFpgmRpVADmUzTHxzLiCTkaN%2Bk1k9i84ZAuQA3OmNY3LysrsWXCuIuOY4KLcugyDVJSHL97MtfzmX71%2FrMXx6dBJFSEMCljH8Yu0lm1kGWWPM558fC8OoAw0kCRMVk4cNfWu1znJseSYzt5ITDDSzBB2jXnjinyD1g8ku5OHW6GsUCxZKF1gXRtyDgOhkEQXKv5gsR4cCJuNMfEsvF9PuamVwFBO42WZhGtapfw9d1rr2sVoAMF4id3MvDOYrNBC%2B8SG0MYx%2BQO62%2B1ZuW3rWQFgswr1BjCvLbS5bDmtZPlgZ1DgzqL014r6gMyJ8HY2pkJfkAUua3ro0QINatBLsqGNaeZ4Qp%2Fo9nu95XzItgSo4VB1lKorwgUXFckUyuxUmnq96Voax6UM%2FJVT%2F67JbpN2Kc1qFNY20V%2FrIzJiRVJLG28Kpf0eZR%2BrE7%2FF%2FwJRsp1XNEuR3FfyIM39ItvYeY1gPKCQUZimD4dXLJtnlk16f%2BfB%2FNxdYOByLyLQb%2BpODHnmcjo61bmgu78cCn%2BhpL7fIyWN5rrxefQ%2BzWGYtO3hRi7ekp6t1YJRTaNrg7GWsv8axneggY9GjK54Mdlf6%2BX%2FfEnMIflqL8GOqUBO98pXmtneKIRAQp7GElAf%2FS8ckd4qmQEaeHoY7axSoYA5LTkTDDLqJ2M7LdA72vdT8IasvVLGmBpMVGmGf2zljQhT6D%2Fr93dcdilA4aplJLNTWoY9wOshMVbTpwBY1zFiGhNesajoSqk9E3WoZwOOhRMjB5duYCRofhkzQ3JSlaDs6mmiW18DiQ%2B97WpsiyTulCsqeUIvDA2hujhu4g96dm%2ByJFt&X-Amz-Signature=a8d07425514e152a714e1529f822e2684c6c671a5ff956488f9dac90ca29934e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRWM76G2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDkn%2B8VEiyQ1q%2Bs1vaQ%2BT2kcUCdcXPKXot30jD4lQ%2F7QwIhAMQukzuf3MqFo5y0cFPC27MPqy2OhfxDnIE8jtcq4wp2KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2J6TwzSOMyT9Tidoq3APxTwf1AskNcBjJXDlXS1O2kzdabVM1HT%2BxImv3zWfm%2BYzprij2yZx9YR8gXDWmknHhb7x7TNg136ueyXIt24df65x2wLwBINfVM0sI76mGM878Eg%2FZDw%2B4BH1QNq6Q4F%2FjY3DW8IK%2Fi1EvBpVv%2BDbMaeiyBqCqt%2FS%2BSOEyGmtLQAlJAdaIrpGPIvYbhpkhN5EwwK7ob2EPT%2BD6xA43g3MY136Yh08d%2BYQa3JLCtmvdkTBCmP9fpsNY9JKaNbxdF6l6rnWA0cCRcnR%2BbUG%2B9TYlu68gXZ5%2BFQrQ%2BoCzX8eeeBbHrlRXn8Zfnntz0HKs9nuOUkOxgQaS8ZVHWAyEO2kpR%2BT2CeQzStnjL3vUQE6mrSp0H6U3lbWu%2ByebGp7IAHNpYnaHdiVe65FZ%2BohxlKExeicLGRMRVGd%2FUarWkbAbrRW8dHMv7bJr2OBbQeQuOfcZr2LCqT9G4%2F6EXMIBgsajxkOOx3Iziy%2BcGuLnBY%2B6ccgXOMOkaZfmg8kqa6qR7PdiD5s2GG5az6oNwEO56ka8GPYarSoz5y7h82Gay6SEgxcQ2LAfrYz127%2F34UZ%2FvmvVjPhQrxF7gp76hn%2Bbng6FgQhBTd1c8ER2JaYmDhA0B2FgSX13LlPQJgTCuzCh5ai%2FBjqkAQ%2Bn%2F8SxRFfOw6GZ0qRmf7iAPT0kSncHyCezjTMxARl9GO7ZSXd9yoxzpPzGiyhznHX%2FVVgTPq4NWIwJOhz9ZVdQHIG3YfK5B8VfE7YAtaO5P5cke%2FpbVHlbmBSSTvy1hx%2BCzAq32AYqXMk7luCvPynntg2Q3G%2FVgjDQernFky5RqtBQovVQ4XhtG27CrwPT4UIsZf5oc7iA8rQGZVfW57t4vPV7&X-Amz-Signature=217e5d17794576ac9498c0ab8595f3c8ec6c31deeb30e6f38f746b567466e10f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
