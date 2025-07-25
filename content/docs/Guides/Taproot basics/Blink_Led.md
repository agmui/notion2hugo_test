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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPKUWTI%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDocBzajVmUn%2FaxsVZBFShwLMkSeVYOzwPk3a0tTpEfowIgIImheumT4MDamWfm2wv0pADIVB4YqfMilacT2qWZE%2F8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPme9%2B6wDIW3S2qlIircA25wgMPWsktbdc4hQLCS4o4p%2BMdyIn4xMUq9hA4Xbm9StF5ALFXEQdZQJpvDraQtZetV274gCTgryDENPPSpALmRsP%2BasOr3y0lVQv3FdhnHOtkjCE%2FMXOnkw13CbJTuOF6pP8Xzh1n3fddr1e%2Fh6GA8kJRQER1OxEGVo%2BSzn%2FYOJ1Iiw7VF6pof9kjhulK3vX%2BdPf9FTlwfNBllV9IFUxS82RBv8lcfYhESsvdd0qcocLa4IIBjHVhyLkPZgfIl7EK8P06Ftnk02DnDh%2BzPmpIA5UkwPiVGZSBtK%2FICTm8OfUg3R%2Byf3UflOred9Vrp7Oe15DoEadEqCAXFh3Xjmlbdf%2BQTfKOs6eQM%2BwzqfDlZDk0PdMuq%2FV7lFPBJCYgcHueKJepnDppDpuZzCGsQpFWYrYO2%2FbzGK9luRl3vrJq6y7WX5P2kkYP%2BrimGTkZ9mcOli6ThOauR8%2B42fICjaBkC8jQ7ZQZnrdFDnSe%2BvK8aLeKD2OaxDUApeNvM0KwODIENCOvYcdZ3u43UHTB%2B92b5bWUQH7vq0WvqhaHEAzU81tA8wKyD87PjRZboEWhNTXUJUe6tsFqfVrZnQA%2Fw7lAnf2UNsmRV00lNbggxpytNUxnv7GqmCLmNGyG%2BMKfRj8QGOqUB2hripd7Q9VYlo0EWsdKB9mB5xPzicl%2Fds7HiPzAD3%2FLX1mRS3WsBXHPQaQOWIETfZOU%2Bsm5RMSm56mDCskRqCyu%2BzFXLmcj%2FFlmRffgR%2FgPZrmj3llRmPI5JmD345UGDLoHVYLZudYwLi9wEZQHMKutMcecZ0Fsg%2FDDuV%2Fum1wvF9EJ75CbqeabvNjV2OhbMH%2B2cy66m1j%2FEqzLAZ9zsClcoIYSS&X-Amz-Signature=f8a345d2431303b1cea81eec0b2df0fb3e390af04477ebf00bea14dd0b9f835c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6RHV2YH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIHM1xj%2Bwl6mDeMsTZ8gWwx8wxxQWLZZ6rHPjNt7skyo2AiAegydEZzukCIEunwGoLGoJMxi9v8jnCfKqvBFcB%2BS3Xir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMxblEDzI%2FVCsfCUvKKtwD9dt1VWCjQDruc6kAvW%2FLVhjszPjztkAZPuYoKgqE7ntKdo7abwYw%2BnRKECOJkugPQ9jyTllzICULt5ZC2wd9x3ZGIs07Y55LTQ7%2FdwYTkvv1ZJBtWWVe5ohI64Ey7x6ITarBH1hiE4wyqTZEUF0kE45YqdcPyaHqJto7YsplRb129nCPgAMBgkijTBH8Xt47X4udC538finT5y9oA43le1ZmhOijSV19NfazF6zwzXz22mrTS0CfRi4LyyW%2F4jddTuOy%2BYXtFcYlDRbS7zgVsO%2F2QD%2Fm6TBEWOkRueSMfoSfxNXQDSWbSNTiOguwli1Jit4F%2FZZPVpbz0WWXQwVIFUNJh1JmpJTHfXfccrK5837Rls1enxtyFFP9CU9%2BGmAnCycAICVzY0La5ig8BXKp1MyQYwgE2OZCQj6oPLvs2SYoCbzsT63PjlPJh59BTqVyp3MAwkeXldtKRNoJV%2Fc7b%2FQ1NMcyVY0QkGtUr%2FBkZ7LaDV5%2FTZFoXeBMoajqkKTmanFYNJ6eezvSF%2BGRMH4Oey8%2FJ5yDiwdRyGQaA7fWvOmYAhsh%2FZjI%2BAwDA9HH7Fb1V%2B7M61hcw6Wymj8mZBOBYyFjsdJZE%2FPWQELPHmbXbH7NwNpYL8LQqCkZ7QYw79GPxAY6pgHuZBI0cIhM3KbaD7UPGSutWt7QkX9R0MlTUtAZPBZ0ymT2s%2F54joC2Aw2nL5LS%2FBaRj4%2FwpvS3uk%2BKUExs5ENseyJzlT8aBbreeRxhnXs7ygoQhIibzQd3ErGPbeefL%2Bvr2lntqm87TwfuTwRuHNKXFso%2F5ObXlqw%2B0NnTlZ%2FXYHcBzqie0MrMvRkrjYviL2K5oTfFkOMhZrNbbFoI8V2A%2F5UtyYbT&X-Amz-Signature=cbe6af84278e0511ac6894ef227ff97a1fa6e5b645761b9284c02a162fbf8b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
