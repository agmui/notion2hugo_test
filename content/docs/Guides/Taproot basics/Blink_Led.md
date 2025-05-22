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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHU34MH%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCzy5JVWSsWBYpKrr8SZ4hvn1HEPtZ2%2FVslrMZesIufbwIgCZKpJpAOQaoK5cbctRgkmL8QCi2YmcptircynGLqXs4qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2zO0kjEQ48tshhMircA2Yh1k1oGRWXStBtXhgvS709B3pVoQCNtn%2Bz9dvlmT6dEFtjlI1iVNcNhZRFilccLr7Gdef1Dr2t4j%2FjSH7h%2Fei9cjj%2BJ6Spa0G2UIetENWe4Xg32qHn0y7WakUy1gq0xRJBg0s0XTyaJ%2B4KwxsfBLfXLXE2okrSsJ%2FG3cOMEZm5IKXMgJ0ESVBhVFjG4pujiNHr9JNbYQL%2FmZ5pyspqRr5bP6Ajb5vTdF3EWS2tuXX%2BPA%2F2RlIPs9FUfbPFsg5OF5PRJ2fSfx7WLFJc0c0Ec1a4ZWeDvQ6KPXMoiMEVtcTJxa5MEv%2BR8LGlE6MN22u3j1XO3WEgsVSIlHbJ71ZEPzsEWIpoVZ6vap4b1NhW5qTcswt7KRKLWnhQblafzWCQ7faBIbH8ruG1%2FKNdRyQNPpTPQ%2BzwWJmnSLrKK29Hj9y4S%2FvJsvcYLBLu95nafpl4%2FfgmyowGLaQP5fWKigDRTEzLJ7qeakcZg7KUVTkFKGlYYIXU6LJVOUJfff%2BlmFCW806NYn7q0whS%2FZ1TaI9JMZYkaKe6QSBPXv%2BJPrz7IX5GPox%2Bc%2FTWz1CXHKultVmPp5F2I4ck2882rUyEyf7yOxZyHfOs%2FsZ0es0ZohiQy8nj7%2FKDe3DwICBr0Tt8MNupvsEGOqUB2dZqGsUWI6an2z0Hi7Jl70P9glRmAmSTUD9oJMB%2FXPF8hluuTPSDCP4gwLaTCzdyfhm5Cg%2FEBdcbLZ09GHjdOnRI57gsAu3mjV4332x9vnvr8Yqw8HCMyHaATzQmpA4Lbecnht4IoqWzGG9gfWZpDptc14fOYoL0DzpO7FJO0PPdtKvGFlkcExgM0qAS%2FvCjaLvucWmXoxot5TUkNZlS%2Fb4XL9kw&X-Amz-Signature=567ca78e748ee93259fe8abca04dd53a3c79f4e8833fa6bffd22ed16338a09e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXSCDDR%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDrTrKwjiPhSPZUiwbsFSY2Q64ybtjbKya4XLGCstqiswIhAOmvGhCaa0kIClS5JjoJZ9JoFD8irkkxZ85zH43wAOO0KogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXH6XvTUM5snkt9Zoq3ANd0q6eL%2FqNPvrhydk%2BLM6mPLJ5Lv2nv6hvea6mBXQNQS8vvKoKsjhtsR0Tpqb8McWsWmvwcD6V0A0wYLo%2BDJrPMI%2FstFeuE3VgfBnTk7dtXylNHruHwLiCl3wwt8cSsTq1oGMEGQ2NcSVbKatvUdv2JWz%2B93KU1w%2BgIaCoC52UMA%2BY6pQYFGiq6tsp0sA2aYy55snyN9zM0N2T3ozEIQZtam%2BBX%2BBn1OUK8NHnCNBhIQhrsK2ABSyzSl985XJiIvQx6viBXJR0XssQidgxzB11kEWfr%2FLLsjpv7apQc0MyZe23CaWvkeitDeY8GrfTI4oW7sVrAKgdqdp%2F344lu%2FuKQa1GYPeU3DkhqWA3Y0Ri5T0Zp3JPX9Lqey8DOVuLHikknTl7pDHzE%2BRWopHXDEPx0i0RP%2BPS52t7aSuEl46wQ1ICkuT7kt%2BGgGizWMCfR4Q6ejqcKunAqdTP0eXeJ%2FsGJLPpu6OsxLueQeXpmASCCkZ7WJihTWrNl%2FoiF%2BUHLXzcCN6wVVmRwOu7wq2eAGsH3by%2FFpU1Um0MwhxkTjYz74zqj1NHpXVNcq8TYy2K7TeQ%2Fl53l%2Bdon%2BiW5jDQwoMVI6wR%2FL6nIyP6oZ2mGnDFbzxN4YktMVB9eD7CdzC5qr7BBjqkAVQDb%2F8tdcGjj%2BdVoPqqbqGHjtU6t4B2npyEG3T3LH94eyd53DdPM8t3ebiXFhMz%2FWBgVMXBrAxJIxhApwxcEyYI7eCpFCyVcBVrYPYtkznwh1E4SOmPEfLzieZp27Ch2lSjLrZHCV9k2TlbhgXpeWx%2Fp4jLw%2F4KKZhwTKu0KopivxC2K%2FlMVySb82mptLbwD50c%2BkvK0Gm8CjNO6xSjN6V38eRd&X-Amz-Signature=8e656d6a608a247b651d0e45e2f6fdf83b9d9b53027f0450d1dce4f0cdd5a768&X-Amz-SignedHeaders=host&x-id=GetObject)

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
