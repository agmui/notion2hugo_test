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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGNIK7AO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDpFgtrtK3oN0pNl%2B6WjTmhMWAHij9WojYrA%2FZvUMm60gIgWDxj%2Fb6pVxTXVBeQLGWfJTBOxOLNIHuQVxA%2BKbJinw0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFXJ1OINYoB%2FS6l18yrcA80zZSlNnENKGe0jfT1MLAcnOdo2vkSv9BlUd8Zwp7ZU96GR7aWhLLtF06dTZ6bjZEF4P7%2FekqD9ig66qU%2BdcUIzBzHhEj7ey0twMfc%2FV1Mi70LgNjXQSYzeRvej53WA7XiOZEEfewL9g07N0PqJQa6r6J3Okr63lLH9nhhIH6FC27gdGMjwiJk0tNpSaPXun25tCBCrq9bg91GHhtBZ%2B2GWnuw0Ne%2FJMXFX5J%2Ft%2BKfGMJXNq%2Fv1r1PJhQ3k5KJU4DbSrzdhSyL73ahYmk09Q7XqYHqVudBgbq%2BdRj31uppGocH71FfzS8XrIdJV%2FP3aKVosQjLl1zoveYn%2F5QfrSipNbd3kKC4XTU5q5hkaXPxGXl30dfw7HX81NOSsdTz7eWZs9nH4tNW6MFWaidlKlNaBy76O91CrKKjoXMpCuUieNPU36Nd4W8LQGXOAdY1t%2FnAh%2F4Q6J9WVVJekwVWkX5K5%2F6RdaAFTbvGNyPaDHJ8D7xvneGaC56IRcG2qCE60%2FrT76zObjmVDPVhRZfsVq%2B7fvVRqdZ2FWAQeV69RyUcg%2FrwcsaCEK5ScYZP12aAKAHeh0qL%2BX%2F20RZf%2BjOecFTTHIFMESeRgQbPD0nMyAA1OTAnWLnofJ8yQa0EHMMLimcEGOqUBy9kGi4X7sLHyfW3yfKURz172HvTVPg9l18PrkPqqK2U1HRkmtqITDXdcab5oAG%2B423NCqKIJ7Lf4EwlRjhDn%2F3QhX1g6aF%2BWvjMz2fYFk%2FG%2BEA96x0eJqXRrimyGSKH64MuTBTicShus%2BZAo8GgSlqYkQ%2BwpMIueVbcaQrxA2KPXBKqd5BH6kxEkr4nDT3Mw222H%2BgVOt%2FyrjsxwqpEJKPdg2ruo&X-Amz-Signature=b01c85fd5d8b0133740ef756e072d12992e51cc26266946a411da085e4f38c03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z266ET4U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHRnbhTRaYorHDtXAJfelC3pSGNTGAUR%2BSmzJ7HTcrS3AiEAjpkrIg0SPOdMhwoWxY1EunBIKxVbosUpWJAj%2Bm%2BHKDcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFTf0jyLGUcSnjCixCrcA09HMKXPmHYagfnipuMeIzHUF6drEdF%2FWHWRwD7Dz6xAT4Ne0dyVR9EvZLi4nDS62nMIqeOI8P6LDSRSY5S0x%2B7NyHrpU2JSfkN4hOaRNxr1eQbPqID0tUSs75mdUebQTKXQJtqWWPcelprz%2F06AUOjajP5Zo8eiNooB4MroWsZ2yi63xYxN%2BuksbvwJhsFnDBs4sxuTuUh9PlS4S2ZwRBo5oJzcG6IAZoPXi%2BJHu5nUXtXaNyCpM0RTxVZSxSt%2BZ6FoMALRT%2B2CwIL40ligtie2fDzKOnlQ572PINRC6HTELnRMqLDhEt9Yg2L9EBSq8UORmYCSDJacpMDrxtv7alwm%2BvKx6u8CLbYZsHq4Sg0GvsE3c759U5bJp4R%2BPZe1Oeoyz%2Ffm00qmEb%2F0e%2BP9L1eP6rHQgsvFgtlBHkOQr93QeVEEchxvJEM4yKvOl6sc85WK%2F1nkErVKrRF4pRFYDCjWdwrXhjZROzMH7oH67uto85p2%2FXhcqE1N3FJ8NVk%2Fy%2Fbnp8G3ZfcMCJhfrAs6qhNv5X25wvrAtqgpewVwow%2FwRaXzbS9hwyYc%2FkF%2FsG386CHES%2B9a7V0gdcDT%2FplfLhg188hnLePif71MGSelhgfM5dUhp5L684exKVBfMO%2FimcEGOqUBcxGJiQAAwrpHlv8FLq5o5oDGakPG%2FQ696dkcRl3AMJ8Vh02NFuZ32qgUo%2F0pjvhtfIxGA0htI5VTlBtqnVvH1PoYWNxlB0Z6g%2FA6lebczIep6XVBcAveNONupC%2FNX%2BiuWRl%2BskZkZpmv7lCak0IBBJr2ob%2BjSOSbIQKl%2F1HZlwWzIL0cogqTNhaAC%2BMkPkbD%2Bicty4GyxB9Nsa%2F1ZwXrRI0l9lDj&X-Amz-Signature=adfd1b23ba3b9a2f0914230fd1fe13bbbdd521d61fc940d12d5ed0eb48564c45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
