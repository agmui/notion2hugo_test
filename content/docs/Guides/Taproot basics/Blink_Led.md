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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHHUVAH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFtJ%2F%2BBqGcIuHaUKgbHSeqc260DXddW%2BfW4lOsV%2B8Z6yAiA4NSrEjz0Jp8m1lXP7RYl2fPXm4usHBGFvhpH%2BktcOZir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMPlqnQ5U3EHRJdT66KtwD1Uw2COB%2B6Xg1vC3RBNDGX1ST%2BDgnvSyVYtHrjpNJwj0UUmnMjx8CN5XYrwNuYwVShhODnEOpN0rE12oj0mY67CyzvdWeUGu5lT0g%2BpKBf78y%2BmKxJTrlGfwlE3t1HuPlo6DBFiA0JcBkRQ1Q8j66vm8urTZ%2BeoI6I7zJDTf%2F9dFlg5bwVP7UHC5pAyNPFVZSjM%2FQyq0wDew4ORMHys%2BfiWyV0K83S7LoO4TdOuBPLAuIP68%2Fl2vugj0PRTCBFjyi79jI0FFXUPi7KDNJ7MXiOQTwyRSZ2ywukx3%2BEvk3nB%2BObfja3KTI5gpU%2BR2RzTLCzkLjv5W27inMnwg2lBM7EHIolymhVjcWZkGrYSsW7rgxhXA3Ln6QqE5%2BS4fZB9bbDHIwb4ODXRz6fKk8oen4%2FMG8lFQIUBWIcxXyulJeVgjasKNiJFkKT4N1Ef7GnIneqwJdZ6J6fToSLOUFf2zqiVg4Uk3vg0bwLxAtwQvn7Duksao7CYl0KYSo%2FrclqiaHhyLsp%2Bl4lZ%2FWlLnKV9XIGFwOCWJibUHAyRAWt6YQiIK61qMvHgOGkTjyqRKDSwY8UIxzKWhNPVGQus%2FaS8DorfkuT%2FkZDvI6oF8gtLGrQugqU8RM7Qkstl%2BPBuAwq4bawwY6pgGmwE3NgYwrxqB4pQc%2BcQxXQW6iVnqMBT%2FuFtskBPVt%2F4UXR27jeJ6dH869xnOUHfc4P0qp3qKbeEghP%2FjwvptsAGSz2v330p2fCcHtEcjWC920%2F6j4%2Bqbdy497WU%2BpNCxxpsqT5Dzz989PdFWF6EIjewtR8jk%2Bx46OU2kSlJUHhUG2QKATdRxNDfsDGV9SR9Hex7D65wbV1YcSBGsHXssXZlh%2FGkJZ&X-Amz-Signature=0989471773b2ecb5c217eff2204432457e012666c76a5cb4c15a612bcbad1781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WESI3J2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIHHth63SSqM%2B5SOf3OJDXsPkMvMHpdi%2FMmbwVE8gAKFVAiEA2PKsxJI9UqX8emF4JjLgGi4V%2FrgJTMhJBLJabdBAn78q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOMiUZEhG0egW4GilircAyPEA7TJZxV36Vrg0R21nsjg0Cwc6%2BVmDpzslxIJ3S1qnk2I%2BP%2B7u6WMRrwhWJm9JlWDzWfFg08Xc%2BXdLEkBFzzTas8c1XNXlUGM1fBIhIkjeLnENSAFptdDIYcrAeI24d2JlUWCeqwRh3KZidsEUcYdeC8SsjjQKo9JNMPz5J3s77tfpdLlpfWM8YCGB8BRgWvkcZ5BV9eMf8mwSSrvJorvix%2BSLpyIaQs8msVGfHyfYNf%2Fct2ohJIIKp5PwjZocKzoF8fqwnu9H9pwdX4QVj3zW6tWoyKRcN34ajUnrbmCY3Dk1ltJmg6NjTRPZi6nLoU4tUDawFLMkHn7ecVw7NVnMWfhPv9VmOujgN7LAc05SeznfN431ir6Z4WQ58dqMh%2F7uIFFiqdf3CoH5n1JxezDMNZPnmyPN6AT%2F5s%2BIJB90lS1O7myaur8NdbysEBSLbuKhSeild3Mq%2FFyJYacJSnzBQXNPjQIbgw7uh5dMk012NukeEQM4LhAc8rTXLt%2FS37OBm4z1uSnBC0lShw%2Fqv%2FKZEVrn9fTVzldj1BEDnHGRciqGCuSDbMw7ncrjD%2FqIgrQZih0eqPJe52BrAwL4UtMDdADXcbBWezR494xz%2Fk2NcogetRvTrkK9JD2MLCH2sMGOqUBFdaf86IwvK%2FhC9w%2FF0SD01pxBRhazTjzNxIAndO3O71qNUMwHoHJMrjAcCgbi9Wfz5a6vPSfoptPCna38dVdGJuiA0U0rlmXwmCqG6%2FPcdyam69pq87yXebZeKJyfoEPK5fgewoxdbtfKTqEBE79soK4NW26WiHyym1ZczSNqjJHI2RokRDDtN6YdFJlC3HnEkIz0v%2BKiQB4Mk0C%2FzuPPhLj2HKz&X-Amz-Signature=329ad006137b474f451285a275db5546dbe9f1ee646afcb1159edc454997f232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
