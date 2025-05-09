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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGH2VV7C%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNkQU0hyC%2FfOTiSCc4%2B0oq0SdhTUGoHzaP%2FtOyigXgEAiAqQp5dYUdEfKy3xvGoZCvS13Fhftun7k8fkHVVBPXZICqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3247qru8Zd%2BG4c1UKtwDyPqRyzV%2FIG2z0uc8gOx5x4JqFoU8DaOV02JaclXrJrRbzCtQecRdWCcHyxeCVfCOgVJFqjbbOaN6De8fPvQLSxlccaQsZnrf8f9Dgp1SrVyccD61ysCSxSD6KBOCZVH10bVnaS0eOBBgaehU%2FJZz6pIMaeLiTKxdvhE6DtAjpi46kd0ntptl6jD6wmV%2FtrE0eyoaqzwp6XQuzoSumxXsHl0XckibDaaNdi8TUQ%2BwgPNIdgK9gcCIbwaPkoLGikA83CC4Ic80FStHOlUdyxuMJU938jh9knRvQCcZSg8l0l50DCl87i89wOWNRCyc4TcRIUEjY2cB5IEt72zMzVpJhsNRWrbnjzVtYjffRRxjG%2B2OhiJhWl64eolgXAehDyb1Rn7ydlaO9PT7rBelqqfPst8pLNyJyzK4xBxbNQiA8tF9%2F8TWvkNogQlVKJfkgnOidnHyyv9cXJwsBX1Fc8%2Ffpzn315pdRpFB5oeEW%2Foz%2FEkAUsUMSJ1lgofxcMM2mFPpzXuL6S317Vnq0GrWZ%2B94YtfABITYoYaT0Ixq2ptv%2FD8HWG4DYbDYbv42aE%2BzB7a6sJj2G2OvXDpyige27bUfeqNSkugacTkYOE%2Bn%2FIRNAHE0QnLGbo4%2BlPsCCIswtvj2wAY6pgHtoGqAnu%2BnqHB9KLmmT8POLO6LfW4mAqwrTpG94afSA0EJTO5ToL9n6jtxVKGdIba4mDJMD6eoFoguYos9MzZ2Dmk5c%2Boiq5C8DB%2Bb8VzdvE0jluxX6GEFqX3w7Bf1StkNiq4XOs2XtOZRPzZDvg02dsNc9pDMTcnVgvq6yo1IQkXP%2BmUd5sCElh2%2Bv3Bg%2FoxrFCVJZ0zAFdMkrdVDwu06NnbwFWcf&X-Amz-Signature=5be5a73009daa345263f62c0325524c26cc911c3b4ada390614bb2b7507dd92a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOWEWAV6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuHfWZf15cdOkre3pF6p4GtUuOw5apPtvQifEQtianXwIgSytn%2Bd84WgJeulnr22fozbjTqMGkKJqMMfCVSMRP1aUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPw%2FjEL7q4fq6d9mlSrcA3G4KLf5xdL0s1UTSCj2vK7Tbj%2BCSr7lzthGDvO0EdYB9E8MMHx9n162nJvwecw%2FAppmKAc85WtJsg%2BS5gUjuwhwh%2BC8pGS0G1MkZr0HKOVPqtGCZwogBiRLidAvMZiqv%2Bp5Nyk1cGbyozhRXUIH1NOASqMpaf70iaeYDJ7%2FlQueyD0jPQ4kBArdx86RSbeqqFSl6wna8pl5CW8BimQeUfYlK2DHYQOciUCwS7m1Jlo0pxffagUb4E6bQFnXWn4RVmwAF61U7X7uJ0%2F0Qk014ONefJ3UNWp9uiiUFf4r1bmigkS5ZsQ%2FtZp1Cc6a44CyrhG0o%2BbZ0v36LkJWm1CWOF%2BCBzmFKQB2WKgQpC0%2F3ArsSPqerZ3ULkEGpJB%2BOeY0QtT1vF%2Fh1oWeV8pxmuXDtDbyZ190GwU82Ab%2BX88ZaTtiK4PYQpdf9ICcfjO74UHWpTEkbzpvJt1NWY98CQ8rt%2BR0cnIvXjuPmVLBbJvWp3OT76Y6082YxU4Cw9WBZIhDgKmB%2BumIr8WjZP7wBbmn34%2FujFIjsvASIxEJsiLBdPdak74lGm59XgIGGeMEi0Glpm83bJcPB%2FnrRirgCzmXZnL%2Fzk4idVWCIiWZ3tlKJy3E3dfdyhJpmE5wrrltMIv59sAGOqUB2Csq7XtUyescxIx1i7ZjQufFC2x0NP52x8kjvsJSk9kVk8n2GInEstfo3T2zjka0XAyPVKu%2BcxnAZ6MNyj91JcncBLV4rda5B7TMvf5dJ6DgrEVaqsNcXc7NJbLej%2BOjWiLwmxt3ggkf68M7tBbEXeTjle%2B7sg2T4qnOlGZNlfDh2hPa8Coa%2BIyKvdaWNuiqDJ3pFryvRuubGXaOqCbPHEJIRpwg&X-Amz-Signature=4a82afba7ed4384ddd41d08d362ff025a3225ddce1390b11d17dbe5a3987000d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
