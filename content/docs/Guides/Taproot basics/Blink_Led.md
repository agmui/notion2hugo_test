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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDKP6A4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPk%2FwCC5Mds2APtj17RsP2DfAfIyqPrcsGuqZrh39JPAiEA6c4CYWrJQhUOIXVONI0EqFdVnEFFXkBI2L2FPFp2vGAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyAaz5IPjJskfhmjCrcAyTh1V%2FhSyeewl%2FTY%2BPhBUkgZNYRrJbWjNHJcAGYVvo4uZCnJF9clubNgKiEQS%2BJi70MhQgLf32tyf3DmYqWTZaeOMrQ8QMxRL2M3Ez%2FahQu%2BVkOfITIzROsq0BN%2BLCFHbGo0g0kDzo2DwObkVRVpY8UGI2LkSFRtQ2MXhKUvc%2Bv8%2F2tQkRs%2Ff6GCRibXa5Ei9Dy1dHTq6xucaPe%2FmuVNQ0sDQsF1yTxAWgjdiW7v3nWjY0quzHOXh%2Bc%2FQ8Itw0c0ak4TjTXp7ZyHQWmmVHQPwqwTNyPNc0M0M2xRobS2z0PHSxLD45C0nnlUycKKIysnxN4%2Bexhj9Qrn0L1tE4fynhDgxVQ%2FSjhnaC5HxAhN2KdoHNA71eRI5TrfxjH8g9S0BoRiOoKl8gLAwcoaE37%2FeG%2Fn6lVxY1Dqp%2FkIIvFzd8ORi%2BxduO9fGPs7GrjuzwxZKGpNUb3qNk5qyM7e49B5IDr9%2FBF%2BqPBsC8S9wwQKvo%2BebTTOHP9PibJjwduTq7dSpX9JKq%2FJJtO2oJx5o0Z9YBTPsINqJeZByEZ5FG%2BK5DZ2IZRl8iebEXBII02kEgz4%2Bekkgwm%2BcP5LUNAxV%2F%2FumLO5%2FghgurPBso4uJDzTKrk7yNDQXTP9VfWkXWpMNKk7MEGOqUBtmKo8xDW6iewFKhjhE3PonrOKGzSIZZdhbSXW5ywLmG7CgV%2BNca69E8QGVmqz2NaBcO2b6vhCx%2BDEmmX8zrZdsKM0UAmUgO4Zi0sweAjnadWerV5nrTELzX3bZPUyDfuEDz7KogdAcZbTfqCnJS6HUXV4e1jJZekBP%2FvAq8mKAE2%2FIhuXt9G7KNpXpUAEHjNO57ynfPkI8faYhLnbUoyfD3GWd%2Bu&X-Amz-Signature=dc01f2aed5fa21b09f50db2d7841b4a5f090cc359a280508bb3d011ef8077ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGL2HMV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYHp1jBAuxTv5SIcohcHn28%2BE8sSBAabMXx%2FCipRL7CAiEAz9ESSk6Weuwi2PfeZHHZZXSAsidVNRip58uTbBo5iYsqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTMpUqY5wn1naZWUSrcAwuWBB2lLP5jtjyQn4pdpNiice7v2pD1PjzCeW2YlD8ulYjlkn66jph4Bh0y8TMaLY5tsW3hWwZuFN5HmnrDuO4%2FmSqLwwVmbRUGfJkzKUJG3b3sVrz1dMpBYdR1PBJr%2BwkbVDbeEblB8ACkCeEsEM3abGtebs0wRcepQ7y9xd2juGJ1%2FYQOW5dDLDUw9vPDeKsv3VWmy%2FmYF3my3Ik1DbKSeZfuiSFZ1hfhYH2pZeMCJVAD7ZELL6xMfEytkhwRMJrvgFxUvjuv1v9m18zfWlO%2FzdzX0IvBcD5Z1OwqNNnx5gvk95wIQxFGKKs%2FQpPTqacvqqpYfQVa8BD6WBFEXSHwlBUfF75rmzBnluuyFLStiTLvQwa4KpEFdg84kCuL701hJN7UB7uw1AIXDj2P1F%2BVfHfXhuFZJ9QlKT2cGIaoydDuIwKTchmzlPTK4e5PK9Rlk%2BRymQMjp806eFKEwU8QUMQu%2BGCoGe9dwy8JLYrJSsCxSZRZcfh4r7Qe5tyDX7OsN5imJKJN6ceeAoqao%2Fpq%2BMz0EoTLy0Uok52PupZ%2FybRQbF5Vdx1yQE4LouzwirfvXLrvJy2iZvgB6A5m%2FNHpw3Klf%2BMQaI7H7fNu2xPY5jOGFw7k038K3T9PMIym7MEGOqUBn6TRp5IDDJFvP7wyDJmF8wENhuxHj6l8r6M5cvGxBc7MBqYMjs12%2B%2FgB%2F2kXb%2F9C1o07mGvCsfmC6EvSVGdsMlPQ9w0ouYQKxW26jJ6eifjGh8qzLQuXfHsE4H5uvFPw%2FaxHmTOOwaH4rHv4VkFQycqZKcNhsTx%2BhWQIseJ9HjYYQpG%2B0sIUo3q1rNlZZdCUXZ4HRw2g9MQVHtqg9b%2FdylED2TuF&X-Amz-Signature=9a93b2b75c70d5af5323c4c2a08cee31ee3b829f962db32c920055243d26faa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
