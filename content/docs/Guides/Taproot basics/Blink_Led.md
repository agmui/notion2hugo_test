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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXBM6MU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFdSoJ9VW55AbYu6yc2unQ3DUpxXSGoxR47GzZStNBrpAiA1%2FTAHL%2FUsIfke1MvI6Ad9O9LMki5c8NSe02VUMlvRQCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHsl56xQ4Ziq1jDWJKtwD8u6ncNxVDly1cU406XmprMVXcg9i6qAGbKz8g7g450QzNVlL8RjP60y1lZfSYaDn2UyeropX9mLS2xYeO7UNkk1n7J6gJXWpXqUy9p%2FPrZQBOh9dSYvmPHDtU3OaLG8GVUGI%2BU3XYb9kdIe5pEAP6%2Fv5wHi1mICvy3dylBhZ3n8gGY8yEtTz1IInqK5YZwyzyiSjFQCq769KMS85WVGeCW6VlMIWWK4urhMtWOl6rI36035TyRCwLJCtvZDv6Tv5U8MdLXJU3iMUAhLI42lYx207n2zfMJ1jQX9vVUmsmW0dDl7rXcEGOyeSNMfU3OvM1QdgNOtrwChnZkdfuFuXpKFKOxuJUc2j3qyu8FxyV6ttKinAaYyNLHMpsxytW3v7ee%2Fnm32Mo5QzoSn%2FUIOWqP6cNLxbhMGtBO8LhMg6hFn79veKqK2se3vB9tzIKFwsdp20OKhflRrr4e9mRjq3%2F6YbbqwmodtfpsplJRoDjPmCPX8MXr56jvK72VzJch8qK1su%2Fpt%2F%2BwoA6ruIgjDCjqkIRNYhoyNaHTCqdew9XSmj0bCY3ZP49MzXl%2BxeRTddL293vzoLLWNiz64O%2Bl86zuM8vwru4EVX0RV17Fx4S0e2FStHX%2FVRZRwh0eQw05WMvgY6pgFqK6CClFQEKxpv3760iSVTdOrzi2NeJt41IJvGOzxkJyrODzEqS17HAa%2BwZG4mK4CGxg8GtwoWexseWh3Akv9xWLgIfBlhuQiTQM4ziHxoxj0QUjqrRlQdWPO50yxrVLbdERxYe16w6JfOyfHdeTuhgE1DLjtCulgbuI4xUYSRQ2gYxv984%2B4BOOG6vgzmzwhUmoMjmmsO2quIIBalTHPj8met4cPy&X-Amz-Signature=847a209dd52e3a83f91120c379c5f6f553329a6e3f2d46f155ec56cce266d058&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BG23S5B%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDIJCgk%2FUbQ3HU6NNqOTp3W%2F4D5cyTEKLfDotD%2FTapAWAiB6nkRaSBT0%2B%2BVI4Xa2BMQxvhCJiD%2FCNoJXnI6EoW2IyCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH2O74iEkj7TvxPjcKtwDwpzDobX1Kq0nTFw7ByTkobe6Sj1%2F%2FQWi0JF4G0i%2BH47aP9kk%2BsjGlEa2Rqmqx%2FNRix%2FMIi6nvQQILbHUx4ZXDjdNmGya%2BeD5dtFGDgaVSJNsylgPixyLHYBp0vMWRt9etZhpYDMPDFOuwonloXCSZ1ur41OjwZPg04JmF2G2jDQIrVQiPIQJWAV08ewebJCvDQXJcFicGm8IKwZfguxLLcFfSkB4TYPand8nDU7k754Osto4ShAv7AvjPYu7Jvp7CpTLC2XODIinmpWIcyl42%2BhP1snIIk%2FdqJkKah2%2Fv3bC5ZcuAYLACCLQtPeV9fOPLO9i3kzycapNTF%2BpaShjVUy8pv5%2BxeLnifBCJOJ5LEjYtJXQDeH7RPZxXbcRd3kMVQgUVnByWGN3wz7sZYw9uLMY7SJE%2FH7oErQMHIvSgnKonD9i%2FYoVy5M8CMhv%2BxKqShZ%2F5WAmgYuLdFuEDxWqUYX48W4K6QaJdGO%2BmyIlrm6hljIpr3odoMtv1hnzpADF77Vp7UGCOS866Sp3dyxDFu362Or%2B%2BgqNyjhvnHUcf6kVYk8W3VnnGBjCiM1DHgsMwdpnMEXbCSagsm%2BBgj3vwHnYrOml1iynL9ze47%2B%2FTWWqRYtPYW9o08zLH8wwyZWMvgY6pgH3heHsLdfGim8%2BVcA9uPab72X3s%2FDZlYRQWxvxKZB8o73ViquUcaQgr5h7cXiBLRNqIa2RifFqVHXHXahT3gvNLn0JTv10UxTsnozetHCtBHDjcli%2FKH3bDa074gW%2FlEWrGGAIrhEICxkHi5IZbUV9sRgXWa0RWxddu5CFsMmwsG4VXk0mgkvgYQVl%2BeaVIo5WSO2s0iCn4MVI3HSuW8Cv0dSpPqzN&X-Amz-Signature=90005816ca6daf2515bcff1bf6b06293e81436a35d5f8621e86b71da62223681&X-Amz-SignedHeaders=host&x-id=GetObject)

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
