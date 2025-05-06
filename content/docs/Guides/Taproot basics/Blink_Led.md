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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIXBUDT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGyPjxmNyHnHJabu7AA1Mq3HNkiZypvpdkTmEjk1l3ljAiBbPOy3TsEeS4XtQFh2m7sYmpucsNssUVluRgj%2FYXpP6Cr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMghnvMLzI%2BJhKXHe%2FKtwD3zynzsa7pzpmJXhNxchj27nXnPoh4kjIDTX%2BLzbdm0AbCYukkCAfX2TFIyzeRjzjjpECPbipM1p9MSy20jezAzEjhtcI4YktTyM%2FZ4BmpIBWeWllspxHn2ANPYR5iLLs6prImoN%2BH2aZvzrL6ukf5XZoxo4PaFRUzNDDjGvuQ3KxcL8WHVfS8CFmT3A9vLpo0lsSWRtrq9jlZQM4E4AH1yKWTcdGZeJ8QWXF2UT5GfETfvUXkCpKNSiEMrHUz2L9DR62SV0d8A9mzDYOzWY6xzKE7Y%2BLmnaFB4PonQpvf0WuWbjYtmN5CJcKNNMmfzBNtVr3XTZA4BMnwyt4WM7CAzVteo%2Bpu3uDnz7qpTSkNH%2BHNJ6xboca2KbOKz%2FiagV9J7sjIMdk3%2B2TUHsfNuS2HZSqO64rFYEoBiO5Z1NxjkftDDSRlY8tp%2F%2BIpYyoceIGpC5YZl3S5g8dgGFBGS3YP9EPMTyaxGmA3mjFyac38vVFsLf5P%2BJOsJDU637baRG00kMJNC2oAWFnxocf1D6eLTyUVyu7UsOMJhGt9SH6ZC3zJcX%2BzSyQPvfAF9Iqp2JnC%2BoX5v2%2Fq6NYjq7M2ymeZxi0lb5DmbuqNkY2d0ybbCaqiYHs4OZwDei0ensw6oDpwAY6pgEx%2FIiu5YN3LyawHB%2BOGbRcHt2KYJB9PW6tobMib8UX9CzCe2VT6xz7aFE7Uk8Yl7j4F93w6ZLdQyFxkW4EM4Ho8PNz7PVCfENohMBwf9yeXHig2jXSnuxduS%2F1F94eaHDRwRkb12%2B23Z2n%2BPtCMrXYnMi9jeaRRWUw%2BphhrgHMUYVbbDwMRlSl9XPdQG5jCf%2BWgDWkXILevYDDDA2GLwCFRkvEMcQ8&X-Amz-Signature=95794cca5ac8e5ca5b2cea9bfd9f14905faf291182955479ba2e2738859d44dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAROMJ67%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBO8tk4BxC3cfyOexD%2BtvwF1NrNdezzKo1Ra4%2F4YVLglAiEAqhhFKA7%2FVRu7mBFtAdZgOd4%2FyzWC5flI54HqJmcrFbMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHRDvQFhtRRaHL0toircA9ogGu53kyXC0GdB7YWFkxGQ5jTkR14X5cA%2F1y7i7FCU0O1mlmnKTBNST3%2BQ5Y7ksbpovQyzrvcheWyZ81lSuR11VJszOIM%2BrTHhLZGPmMVEH7UHL2VPY0eMrX2OlTMUgUb9NdZgfoviNOzSaYV6f5PSBhCvl7gitUukHE4Cv9TBY%2BRA6XFx0jeQAC7VMzOQ7i2DYLBUxraZ5T%2Bx%2B7wiU%2BBMr0B%2BN3qNFK0KHWTxIEUlmup%2FvM0QbFtpjjWzm7IJYLpMvmpnono3lUy0SUlbVxeTSzCHjgrwz5p2ftOHmp95msfoDcTcFZwhvUMBFSSqk5%2B9RRpcWqtsIB4wEANNFE%2Be%2BldJzk%2Bg55I6IbjHxLA6CYqwqKWgxYgvNy7VpWVn7KO%2BEIaluplmro7SZFdHshrwqojv7cx3CKPP71xcntHMJyp5JjbHSrpWuc2lXILNRfS7rNYxmm4QFZNbkLzKtqGcjO17BijWeNTuHsZtB8xTi97oJfJcXz1kveFzoX8b4NapmFI9IiDfhbPpG4mXySuFFCyBiXB2%2BVg%2BSCS6KVTxz8fm4%2BK53lUsSb3gTSmCSVuesFq6otw7pfqlNE8QbhB2Fr6dT33gvLAmeZkeKh9bQXRuRRq8aTUM7AKYMLGA6cAGOqUBsOnWZ%2F9oaP4d%2B3QomKvj%2FYSbkf4nYcvJNFDhSgDDRPYGywpI6%2B39zWX3%2Bx3sFkGNnwIUzL5WmjfhkDmFGm6%2Byj%2BKHVQFFIiTnbbo0aM69cb8vyPLmNSGTy8ArjgZMTumBHSeEpyBoRYolaOpM2Ku%2FuzqHuIkqimhrsXXxOjOc5JGySzIW4FREkDwocDM%2B4l7d2uVvAaWEbFUPhxFbukkOSrqOERv&X-Amz-Signature=a9215cdd29ec069b1f5b02c4f58b370b6e5c3b7269dda2e7c52b6172c8a5673e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
