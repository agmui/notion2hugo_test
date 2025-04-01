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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX4PYA5E%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCPB9W1jq7tmKif7mZMRfiHYWDDJnXagLUz7Pv%2BcFmC2gIhAP0cd%2BzM%2Fuz2jqxV1sxwJtGWcftFShWanggTCLI7UjkLKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5aPMwDw5e0jLdaq4q3AO8bfknZE0OJoj8DtZ7I0R5JGmge91SiUc7Ygo7R5kQYkUeVo6QEsbuS7yWUJfBWs4VUjjlcGuQ%2ByqqPCHKNc8iqI8nzcbd9NnBmh6kmfh1HlBoOxkd%2FvNf40YULC0c23zVVVbtBN5zV4AwfDbTDyiSREyygPkto096cQ2u2Jfz3Z4lfS0g1%2FDIwxHN0RrrdpYFRojBKkcNcgqDD7ocuEx5T5%2FXGAgyPiFzRH%2FsnU2cipxlyVu1qZNSeKJX6xx1pza%2FTGpmlaQTpb%2FDwsV1F9j%2F9QbVcrtNNpV5n%2FqcE1Mm5NVLka6TSs9uqjj%2FMiOrGaiKh4kesCPX5Q9smIoi4I6aE%2BqhcD3XCeOnCFLjVMttRj641cbyLSgeylFn4oL9hOtJVa%2FjVe3HWBV91%2FTukIw2%2BqL7aCsPcQrBh5WqsdZyddubTnZvZYSfDD60y2WKE%2BP5m2lcee1yaqXvV1bieu616G7IQFuUK51AwYd%2FO0puAKyrnIVcCJQKPYyRieVSwedFTzhQ74OCATmgr19LHZuuRjR5ZefFqRkZrwxmNsG8XCPHZetr63Jcwtc5LfvJZ%2B6RzMFpYRRx7jhhQ2bAwcfQ4m%2Bm%2BReg08I%2FvSrjFC37osuM2Vs%2FLgNN%2BLq3dzClqbG%2FBjqkAUYze8v%2BaXgSCYUo%2Br2sJKe5O%2FOhehokck1Bg35y1P5KPgfFsHNV%2Bl3N60Zbteff%2B0zcU3oi98pTMDD%2BC0xJ9NOEKcN4GVhBtuBwBd9p541duTlANtgksmys2inccxeMrWMvIyYLoVGtiwMGjmIrQomc2P75b4sfKUrbWyqd2InlyfB29ZHb1te5hItfSTV9V8bWv8pIn7oSacObLZNWzKVEYkk0&X-Amz-Signature=43dc900cbef56b8b746c82953dc33d27379d1316dbc4de73deaa2c2ee2aa3a76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHJRGTU%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDMm9skqMRDV1oetUsfiVmm9kR8CyAdRkQXzSgOZ2i4rwIgL1jmoNCTnB1dyffk5VcQB8HljI5OXY2%2FTKCOFVya4aQqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwUPgnCWSRq%2FcfT6yrcAwPB3RkzI6TTXZyi%2F9AgR%2BeU4npsIq%2BQI2T1ATWnLq9z8Sj72eoAe7%2Ba3PtNarvj%2F7hZJZf59zE7c%2Ft41rR%2BWq212vgfYpQZt1mVKOicvGvvgeHGcLJ2rPfO9KCYx6Zpu9jwNu0ypXsPc1gKc4%2BvR%2FsUbk9DLrIdpZhcFFjaVn7uG5mPlOJ51Qr39IW9AUS7TG%2FX15sj01CQJgc39N84YNExt0k%2BReF3drp40F8ZEDDyeg%2FRrBsjhuTwbSlGNiUmOEQlUexf%2FtfLTCDK7Tlj3PFVyQs%2Bc8D7UHMrfYW5rSbl0KqF3zOJBDhy3BHpzdp%2Fg4WPErqKtFSPJ%2BpBTqM77SkYDegGD%2BZGbmVdXSxQOibLf2Ix4dVKWTaZN5L%2BfcfLaPFQm1Pb1xnZ5QmQzAynxB0kJEE2IGfqT2P62zdzzjHOO71DZ4bRjn0yiBzH8zP1B0ZZeurW04gart4h296%2B%2F0Xx9r6sexB9GKp7opYYFGWIUSnTr7r0G9utaedC4PW9GaTGzh9wSbB7CrkTeGIWWlQOs9csaPtzNESSHe1e5A9Zsf1rlaFWzmld1%2BtIJHQT8W04rGk12NP%2FVszdVNxsiDMZ5uu1V6qRf3uH1mjc%2FskV5fhn8KsZxn5m9H0uMMOpsb8GOqUBPT4vecT0kdysbvjGeba2yV2rOtknz3qe7s%2Bs%2BOXmQ6xVyOVQA3qFhSXhtU5U%2BaYizFxOkGsvhtNCTDctGQvRnYp%2FyyBVy15Rilc725oLONEiXAsWBCFEbaRY%2FEQZKK2d2xeDfbkiebDOrrTwBBS25itQayVS9zVPPAjWMnjlElxm6xahN8eIQ%2FUX%2Fj%2FxIfj%2BoExZPMJUDK2Q1SDfyw7b9nNgQx%2B%2F&X-Amz-Signature=505a7cad8b04d17caab860469ac3f2ee99d28be7d2ab30bc74d44e64406adb91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
