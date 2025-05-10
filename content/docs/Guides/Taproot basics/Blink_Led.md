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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V27B64NE%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDfnPgSAMRcJAEKvzgN9FihSXhgW7H%2BSPqJM2lTSZUnPAiEAxEgnmBpf5Vixr8Nuljo4tCaGrPqlzyyijthZmKh%2BPccqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2F5MbVLKAlGdLVBmSrcA6cJeGqNDrMwthtviHbw8%2F23ixUSsoJudQtj7MOF8hZD8SX7z%2F9rm596NkUDtjGmYq89Pe76tAGr6cklYrK6LzTK7XhR9JGM5LXPDcrr%2BGnsBIaKD7uAz1iOm8ZXyg7knpGEVfQT432YemS7t9f%2BpJ09S3C8tgkaI4eWmitDVp10u3mK3NxveOHcoDTqUSa2zDIPAcTLe%2B3HSYxYoKpNBqiRkgHzicEfO1vxe%2FRNgNm2q8I0ly%2BEGK7XfyPjiFuDGHlDcL5%2FmOuiyAEoWbYVsPlVPZy%2BwqjRXuIZY2Q6h%2FM0d3ITTCeNTcDhacE5KEijEC4KxSQNUY6UeR94w2Q4tkQESv3bTS9kNokDhKQRpcGQPnbZJkNqTEwR43R4Y9H8fuqCgZ2DqvU%2FSXQthewBhluVCenkcXBhGUYHDVko5E%2BbFxlviF2ieBObAkDzZ0t5lcK%2FJAp9GnY2WjBdUbrt%2B%2FNhiKs%2FOXFS74k1G1E4hVfhMpADi8R9t2JzzGmxPCEv5I%2FjT8rhGDrcQbgOgVFXsIumFTMkhmUFmibEA%2BdrCE94dPTG%2Fz7QcJw8%2FHD6YtF4v%2FOl4teMF0WLpj%2BAyloeQteLz3vcWViTAByAeMafkUGF9BAi3OolPjJ3a1GNMMuK%2F8AGOqUBK4%2FDcCzbzpCs0%2B%2FNzH8AR7HJxTMYS6eNQ2O4z9MPRtuyJoaOVC9qsXLkFwmfjrk%2FuEh71XIG0bC4H1Nn37H3FFyYJ8LoOC2djWSe42KK2TvQGcfzAA9u1at5Ma777MBKZB2gIg%2B5spVW2blL4xddlPB9AEOZFZlNbMpaMbiPbVQwrbo3VuVto8x2XQBucmdjIixnjylXKlCm%2FbRZzCX6agcLkADP&X-Amz-Signature=7c27622359de4178da4eae12f08f0ea94a5392a02279f24e328d0810f3be8012&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4LMEWD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCWUqyp%2F5TN733EooHReYGfi3lMR7DSqHovXRfu1eVCWgIgKMT7d5YOvhpPATxtmxInFg2m4ASZIBEJrTbrb7PwwCQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvVn55YWj7oxBJ1ayrcA1bxVSWSi4Uemljp1HoZQJFIThXEOBRe9C7cIEwTXvA7nxx21sy9256mEGmgiorTLr6waF5HL0zUXEVTjtG%2BEz8vvBd5HZTP9jxMjbgWgjO4UT%2BurGuBEYhqFfYoKSUF%2BAgBsYgEKrv4DTG0i9hg567xpX1SCjw2MSrdzEgMarScnzpnv8pTEDiVOjNXtmNQd%2F%2BjvMa5H8NOah3%2B%2BuXdRSCqjmSUOJ9L0V%2B5WmrdTzmdXIcS2p8DtkBwrDoapwmEylT5WXiJeCUi8h00618mCG76eWPUJ8oMiHCM8lYhVKKa76fkriC2RNq0FqrA1keXdYs2sZQLfOMuRRwP1vBJmZyFopU34icMHCKqn0mpLOA3Pt1ezN02jfb%2BZBB%2F0%2F6ygp8aYva8qJk%2B1YYLP2SOxzXbyd%2FOzDsI1Hpu6QAWbYKuDw3fLgs0puRjYA3vbqxuIqa%2FbijlTKkaUWSUdjeYWn%2FSuoGYoL1K3U4YkZk3Rbrhr02R7yD6OY7GlOy4lGN66kr9%2F4skhZVramUsEPopixWKEz5d%2BA8kianZTo%2BbZeH2TVX8grav0I5JbgHr%2BN9IG69qt3sFyLPWEFmzTiPGjijMzJ3xuhVXet9Bp4f4iyeAMknwbcYT%2BO7VHRc7MK6K%2F8AGOqUBcktampT6Z96751vS%2BIbkaZ%2Ffjt%2Bygw%2BFD5zN19md82vPFLR4aPgUKCcr2VbZfYFk6QxOjAgFFEd8O%2Beun23ITPsZzn%2FicwJ5qKKVlYA1k64sfkEirSu6tGkM129xINVWSQxkvBndj6cswAgarHF5Ogj5YIfhW54GzdtrE1Ej7dwzrit9htPiAzgEU6ZA3yPwO8Q6I6hwa5bERJOEAL2AxjtPOa71&X-Amz-Signature=ebe8f93b1523205ffc6c96e3170e5f3ac84cd4f899f2fcfd801be00dc65bf27d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
