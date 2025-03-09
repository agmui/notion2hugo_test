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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKA6IOWC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC2TnaeUO4bdaFSSx1Dc8EfeQDuIS39HijXyNBuM0IxXgIhAMUMlH0sTZ9LHU2ysD1VSjxLwGWHzKl%2Br0oIV1UOlEteKv8DCG0QABoMNjM3NDIzMTgzODA1IgwffA%2FcLdv6VXWvmowq3AP%2FSOrYKk6dQml2iG6qwsFm%2BiJ2fwsvQTZ982Rz4g%2Bj%2FO9ztcUa0SD238slxWamrdltltYXbGenfA52qDV4bGCEURiBYBuSEcmOx1vfcSHAcrPRR3diqAo3YsNqgoM92L%2BnhiH7frMtCbOEwEgZB%2FAWolsVgHwLQgmqHRxuHJQvGwxuER4WmPNNzAOuLVd58yroDSH87nDM0VtKGoP5l%2BJy2r%2Fka9lPwcNb1AwurGauf%2B3i%2FmXQePTiu5dIqpSXmtpcLjdOVZIhMUIM4Tn5HvYZaKYwZMdYU43Mgf7lOo6eoRGALYMc2W1G5kHWN1TZkrmltT0W%2BwtQAkiqN%2FrxWi6Lc2AA7Qli0XroVOrUpsRY71HOPoXLWRxkNlN29IkaQJ3d5mhEmZXvMGikErg4zq%2FYgYQVvU0vwF9BNXdNMxDfceCZfDd0WkjL1Sact6862S9ozqlSuQWzPavKRgvyml%2BTa9%2FODZ5I6y%2B7sVDekX9ldYZsgudUUFGa%2FzIBfyiJBYIwPWNYJXYe76weGpaI6wW51YEDj9uuhSgncHB3Ynsinlccjp%2BEAUzbz1tS06udl4%2BpK6qBo9SVRrPi2v7MokbVo5EYNKpqnbdD7sdtRgeigh3EHf8kJRmyA7MVlDCeqLS%2BBjqkAVMzWs2Dja57uh%2BHpxGd%2Bep3kooroYCQfWiEk56ND2M2%2BCHQqbfFPUSeVYAoS5zbslILSqn6YJTvitICseRFmk3rGpHPvhUVkIdDob5iguC0fWsHtrd%2Ba8hAOhDkPzWvBoRaId8Bq%2FpBhuuRx9nDtUP6DYpk00%2FrZPY7f76cR3gO8JIS9t8h31fWCm9xUMn7hWI1RjX52d%2BzSOZhBMgir0H4XDod&X-Amz-Signature=9c6ce995ee8370068c03fed78028ee215b3c3686b5e3a0ba56f72df9e1795d82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODWJB4X%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCoYerAwPmUj%2B8v0cX52BCDKKSAYorOP4HPSlQmx58A%2BAIhALUgtkppin7PcDh78fSyOn%2BPZ3kRvxA2ISfshJR0HzQbKv8DCG0QABoMNjM3NDIzMTgzODA1IgyOd%2B%2B6iH9FcxDGR0oq3ANowwEr9%2FBCFklPXwSrci2y9RpnuXNSiOKVPNYVy9ckJxBO6kIMYgXgHAGYkPirW4yBNnJbJVVbU0yaOe8KK5C7%2B1J45AIUmIwj7kREeSdV4W0Reiw%2FmjfJBFYRtoi0NYoy1DwzTqgcdzUmbiqV16Du4lQod0MZqe6uC4z0bVAv1JXBGkn79PpO4I%2F9DS4qQhbQkYkn9k4igmkNyBVMU3Z5pdreI%2BPkZafQrAJY9qM%2FYNFXBXxlKYH%2FeJ6EJIpYn6MGhYcz2O7mPTtvBHyvTHfxBot8cyL7CWX3xPFlLxsXq33vohpxTSmQWBEL1s9pJtuXdRKFhOZ90Y8xyvZVAsvRXw8GCcNAgECqSHnImVAQFfV%2FS9u5nV9qjN8jCEz6OvFHqoXXq9C1WpdNtJ%2BVkcCwF5ZiiYkiYI7GwT2kI1zuMi3ceq5CVgyS6QR4PwFlE%2FnXBeXkdnlE1CJYs1eZqzrNEWNA6a9SEYtgFxRsXZjeJIRO%2BuK5JuLmold%2FIZ70YaqfCnoR7EyJ03SG3vOqHsEeVT4jTYX3VFfsvK%2FX5dG0z8%2BK3QQqLOezl65aB3CwEs7rF9VeIhgiOc2qGcX4kHLa0%2BRpmE3HqaDE%2BuTKTudWquBW%2BSdcuVLTqoMAGjDgqLS%2BBjqkAVS0R3AKA5h8ckOoue1WZ%2FZLFm4q0SklJesSHmqyDA9TAIG4iZxb%2BbRlCWA1He9QJ9X4nT9G82LzFYfbwZPa4Z6BHByz%2F6x1nYY4h2xvSH75L1WQBf8J8yfy5JOl7Zfeunr%2FbENG6iTF1FIZMMo%2BSy44S5ZYCT7pG%2Fo5qNDilleWBL6Y159UtMMecaj%2F14ldzoFd1%2F%2BHK9e5yBP5BSGTHTCFwPvE&X-Amz-Signature=b372188ddbd82050e402ae72aacbcbb48350f74965eaeef98af7e7e69ffc7ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
