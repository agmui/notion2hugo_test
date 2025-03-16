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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV2NH4PH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2LuNl%2BV4fsOWmsAzWjXurXGLVOL4oMLR5WEB5jb3BggIgIRWCzqwKMaMiUGX%2Fj4LIptSlhRDRf7HCn%2BvcO37hrZcq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDAmv5nXDyutn88liHircA97wyBc9tg4nIY%2BPM2F7aMzvniMW01xERxvpcQuZFf7y0%2BEAFpRmgOGrswyegbmak6kT2wdFjfDp2FOgguMg%2F8Idqt52ijPxUdQPWiGm9koQvhIQfC2HHB%2FP6eMGRJOpzBVKjWJZh%2BCTW5vHIb8taA1Y%2BL0h24QejcSy1xi47ehSs9Vj9NylkfFdZjpRHAY0l8peI%2Botzenk%2FDchiWy88zakh1XeLew%2BQqepkU1zMMuNgptDbGbAMRR1d4ct25dZfg10aGPU93VIm7q1lxj3dBUu0fVFH6ji%2BrQWoiSk7dwwKT2yqQVBBYpH09DEqe6zbI%2F0hmcIBU1x8z7aJCi6K6J8PVwXQd3qtf%2Bw%2FAz2QKOe1hMCZqHfcIP5nXhgLayihHyOxTALY7Ofa3Lf%2BMu2WKBgmkc9vREyXqe1sSEeLym2IqHsAqaBs3r7SHMWztlNqHD4WVzxt0WOoHflIjQQVUiQ6DnAryALlRvoHJ5dJVPDInqrcMskbS7cZ8sQcsozzuaxkFrbEH11FqC%2FRRMnV2iMK6CQIpTXREjH90Sdda4HuGJIrBtpHin4QQtU7nvshs4ftn%2FsHUNwwOfqf4EEWytZ5gb0sciOx3E9UiU2m4KFuIqe9RTGOqRv%2B1CMMLzq2b4GOqUBZ3ZupStLK0chHqkATksu3C1lmaUK7QiD2ZPh6bhq%2F2AuQv15zdQRpU2Z5WbrS9KvGoOrFtJEHPQXx3nojnnXByG%2BMQRXHuUcHH1rtMlaTqRRn6OwmGhi3V4QfHahroPlORIaPtQ3%2B%2BDrKauSdK7W2dYNxX0L3fcujHtbn6Zqbuuv7SWa41ZnENC%2BB3IbPNEnqb98BX4zjVzQX44g5jMeiycQAodx&X-Amz-Signature=4bf7a1e44bf80f7d7034f347c0b22a391ed02dbc118edf85bed8ae1e65d181ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBMSZLF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoMgjRqwqAYuCV21mB0Z7Y7x%2BdQm1WglHXZ%2Fv4%2BFEXKAIhAIa29XVx1ATkTsiu0WOI61iUIznrifSHrWufRk3HYdsPKv8DCCgQABoMNjM3NDIzMTgzODA1IgwsgkQ8LtqKDQ%2F3v4Eq3ANIwA0isITnpAw3C2sTQdCvZ4t0iNQbsAjk7FHjWNP2BPZncZ%2BG5mjRv9YmwrydChE3mXtmMec0ZqJBxW8ahBHYV9nRGNjkLbhi%2BhYij3GnmGMQYstk2lblc5t2%2FvBsRZfrUcxpH8gUaL%2B8Sgrlvk3a3T%2FCaJk61kVUG%2Bz0%2BW5auLRSqqpGlKfUXABs%2BIDH4rKNEY36SYc8nKPUMjNSrstGWf%2F66rn5VTebavR4spwHWv0XP2QOFmq3dpXUwxuLa%2FMc8qggC1juCUdhGc2R2O%2FUvDtmKzoCMuctA%2BBNkreLJBXgDfGbMM8oxKTt19oJefx0%2Fu5jquac4me2IeuOaHeQZZFOPKqSU3z%2FI%2BUBpGIgIWpG3AFQ%2BOH8I7ieW%2BA58cyJxlNjFVq3Q3mlc%2Fq6tYVCjW2pVRonh8SbzvYLNLIkh6FBpGoYlgsoT4Iofsk5ZqtpPU7CCrUYnUBo2nNPqTDksP0BjSbx7Ag1xy1Dv%2BGvIul1mv1RSmNKgNWzaejnjEKQAM4io%2BPLJD5QV%2BkTRl2dGmykdJLShAShnixVEftBuxMHIWliuVL8loXsf4L%2F%2B0qDZXfgkgddHfdAG2Nc4KXJcuL1uI6yPbn8pBrgo9V3EfiXv5SU9e2sBtXzSDCC69m%2BBjqkAS%2Fd8c1W5CR5VjcWzEThHO3O75XlbRDyV3avbnBTEMUBYcda%2Bg2b3myq9AbBxya6zw4KkNe93iBH7AdXACuzktaLF27pKBNdqDzQlSs%2BzFJmSU8IHp15lCao6Q1ZlTW9aTdsX04fXeQwZu3rIwITVdU85%2FXshWLUYXuO1Fggm3mZ2Rx33HKhtXkufwn9BnehRDjITKBTRixBixer3EpYKv5LF6rh&X-Amz-Signature=28859aace73db0dcf5140f83f106a87c223786f3c81a522e146ec80b9514f35f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
