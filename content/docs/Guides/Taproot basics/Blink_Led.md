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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNK3KA2%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHd4Y%2FpH5ElUvCMXldlzIjhG4w%2FNDmvbXoh%2FSec%2FbO84AiEAk5Is4rIG1Yt7hQTqTv7XZtz%2FVzqHoB%2BsHl4dSE5NG%2BAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAImfZW8kc06%2B627ESrcAxLzD3RCMkDz27uQeiW9EVmkK9x2pGk2Z542A7ahpVtDipS8X4LBHkZ%2BzvG4qE1EgNL0AKd%2BOOhF1VoqtgE1jTvKuRSSGpEfLQh%2FcX4e7FIyjna1WThfFpjTJ0EFL5gIyjDr1K7yRlZ2dia9KOkKshP5z3WMG1BluxDCe8IJi3X98pRTb1xFGa9ghxN9x4HGbNE%2Bhrzz9qsZam%2Bq7ZaJT%2FPBBTjxLdqhkoB2hVBwFvbvmZm%2Bhm5%2BE11jmAhDH9o8KOrqWsQX%2FsgKhpwZYr0xqgM5Tgzmzi1RrMocrcuInqcDqszUiorFkBUQBBEqrZ0yf4HAyrSnNjYu0czWLlm40%2FFNyzha8fBu2mK0mxtLWYh8%2Bb5N4%2FINOR01jKiQyV96oyvPhVSFRRb%2BCupbxY5QfdpHFmPt6pwfNr9emODqvxC03w4%2FSBeIdo2jXfC1sh%2BCIGhVYiOJr9r%2FSQonMaSvA1pl8Y8RQ58vGM%2B3G8jGcOw9A0MOReUR2LqDr%2FU2MiOSfXmKizyQRDJSBtrUiYbeIu1MkeJaRP9gbzh%2BaZMtgoiWd12LhsvB%2FZdQUyW2yqddukTQhUFFnk%2Baon61lYezAPxWh8qyiRERYTKZDoX4ohlYYUUvLW2ujcq82g2uMOSx0r0GOqUBruuRprVYqMz9mQlxkG9ZCGqPrRdPeqol1jk37I4cKw%2FdVmIO5hDI5aApszHVQuubyFPjxzrSumsUWl1dSw0p2%2BXyHkUGf4rBoXQYbJQe8tapGWMmomPl0f%2BfZjuLDIiYlBdOHR1%2Bh6QIuQu%2FVeg5miFz%2FBsLTZBIzqdVkE6s3V7PeQleaZ%2B7keKmzoxDEjY77%2FQ%2BmTSAB9wFKGM4edoSe7LKNfNj&X-Amz-Signature=f0a7edb311e25e57a3e32a09f90a8e7a1774155f0d9651744b8a457514237555&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMMDIBDQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T160946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD8ahmSnNERw1526E62DgQ%2B00SxLA6YXGUZrf%2BaPJAYVQIgWyNCJcvo%2BfQfUHsdis%2FP0sigEE7lxWwrQEkAMvmesgcqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmaD%2B8XmXL49S9PxircA3cZLRToQLl4LmFONbJpIp6KqAQuDw4CoSJ%2F6Ux78NmJcFGC%2FC3vL2UaBLiFqlk4cfhenDIBXGlkP4nxjh1Vm%2BGdzC8sVwCEzV%2B1VQy16KClAeBBaSVArOezsERWY85CiGUpF6mop6fn%2FJif7JXaBRlu0W1bF%2B3v%2Fp52NhcS3LRhTYTiW7wpgtT359A3eofMmokeBgAaL%2BmsejwZt8JpZI5s8%2BNE%2Fwzef0ikJQhyXig1zEj4IRzI3vZGoqTQ1%2F8WWnRjbrCK2Sns3zwGPyYObgv4Iyk%2B1LvMn21JsWOlz%2FPlwgiwTvDlt%2B%2FngisJwraPxNhJyny8oyvhN1u861Nrmhy4SlPN9vl0mIIkBEoPUMUglGOJY74I0HET5WkoFWhJD04MOMiaa4Gr1idxvTnv%2FFwbxo1m2CKyarqUVlTcfgIHLyXjxR2lLkMU0FvNvB2J1XhHo1h9G0P%2FW31Y7VlkSn8WrmYxgvabzL8KW04q1hMMq4UBqPfgY6y2oqcVCbgwrKQF30KqFAqZqYJrci%2FVIddGGQLQv%2FDU2bdJIXT52KJUy9tP0O8lfcvWWsq3q3dicKGrv%2FUnvNBT28c3exUc4V4JTtyDAfCtXhF%2BScX5mogMgKJIq%2BAv4AW2it%2F5MPGy0r0GOqUBID3DT2EhwvM5UPEoOMZXAIP79lB%2FK5l728Z%2FQCBCnney2aun3s7lC73MJG3e2TWoHdhmv4ZPbY%2B5remVoFw3W6SAUaCsd5ipsNOaE2uurMS%2Fpq8GGE4BfjScmWFyMJgPQK0BAeBjbE%2BH%2BYrvexmOrtcRdwybgplpJLkDO08d6kpelCGNedB5iWkmb70c6TPw771QHgX5Y7KTpYXshmNoSYuoW01V&X-Amz-Signature=5f3fab61f4e42ac5c9bf63736f0c13c6daed9c87ec9513de14d3672ef62f0311&X-Amz-SignedHeaders=host&x-id=GetObject)

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
