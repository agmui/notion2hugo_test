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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWA76D4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDYpQEPCpPh1MILxvUDxHduwO23hqnYPwVwEtgjVybl8AiEAmgDg8NQkja3SJ880z8ZLO4VAUCf9%2F1hUr3glsPPTkZcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhEvnIGgZO2NBVBqSrcA9Oamyl2%2FST7ossBTfQ2emDdBaNk4PYYwsDM6W0PQknrMIIpkFCUIOE5g78XVYD6sBM1a%2BQ2D1OltDaiwGg7Z3CfFoGLVA5b195eCOk7wTkwB9SmVxiKxUjACvxQk%2F1vMHmPgtka3mKTMYb5Do7BeH1IPPYxKLKjxN%2Bpbbkain75srw0vbH25vqdzdkS%2FTzreERQZSm1HWfpNF2RFXCKoCDfG48pk5WNA7pIkrGGS3P1dwMiuWFjrZSEc%2Bwks90jDTNsgSQCMpkRJ5VOr6nROhXkaPH%2Fkk3iK%2FXCu62ba99lGLggoSBdxPEQwowTMtyv2CLRiOmwAuT3giIz3wmMbWMFWeZHE%2BIYJqx%2BK4o9sk0o59ch7MfD1w%2Fk06G%2F%2BaK%2FLoOfaGRXXxl0J1E1KZMNNLBvgKS6cm6%2BTbxV%2Fq7H6Ve8%2FY9liEjuPQ1hh%2BVzaeBEegg7mrtZpjm6Hf%2Fa0Ol8g51I9FmLGbSKZcRQctHJ%2FB8vVfUipj0ZgFGZl1vg24bhG4zrI%2Fec2HWvq9a5W6i%2FvLvRRB7ou27nenI0uZ%2B6wQi6G9UkCqGp0wugfEyzYKOA6Sux7EdjIROSHfRekajEeAYD2m8%2BxPQic7qgbOwlJdzIM51CTn%2BvxVn5vRJQMM2Thr4GOqUBIK9pzC9rdNeHIDKeoLlHpQ%2BL7fUi2sphOwMzWfyEV68XR2HoWLpehms2jOK6ln7LhgZvBSAzisvhiHgjVJOUZlsbAniXIib2iRXql5p7QT7z24S4lnG3SLk1xlewIRNO07lwG%2BKrkTVavgTHCcfGaUrl6K4j3I4PEphgop4knBsFvTt%2Fhz65Cz5qOzEeNKE0VniPuUBAsIkftg8gVoTAlTXO%2Bhq%2F&X-Amz-Signature=22823a1062c11b4f3758c15874ede9bd8faf5e769612010da73a2d44af1d0ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL4DKSOH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIFuMO%2BVRGwG0QQUmgxN0Iv6Od8Go6dDQ486Bj1UWCZbTAiBY%2BPb9G6ceRKiKLVrSVm%2FLqPm9F8fm%2BWN58pPlWCQjbiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4xYnCOLYqpg03AhNKtwDPT0dFeoTF4Z3GLn%2Bv8%2F5mSVkOZtqzQzX6Cn9nr2m%2FSwVrhgJkuIcacNKCkbL9UUmNUmwZtQNQdBlr%2BkQfv8YidTi9MuDfd9TXZANfnbO4lZbUkazMTh0rNKxRrcUu%2BuEiQtn8TzvZNnzGDahoQ7UNlSRpZW9yPouPWeyWaCsmZbsDUTMOqwOWcrzxZ5%2BksU0oI21duEwP%2FfSuDlvRePxeHpcukIUYVe2gOsV15Ubk4qnWsgD%2B%2F1QiW5wKq7wXLYHbd%2BiYVgJ4sYHyqq7gak1qJ0QylnQZXX6miEa3OMOXXoQWopG3hzaHdMrAQUJjNtRHaOjR38Cr%2FFAb2pJAEwJnBLedbeDXi6iN6ebwbJ86anZ4QT8tWEgWE1uBDVvzAvkLNw4jZZzZvFa26IIhynwNuN0tojvl9Ngc3Cm0ovZnjK6eo7JAptY8myc%2FfwInBBVSnVjQYUN3j4A3i%2FrXhpBMMA6AsMxXRY9ymH2GXgFw4s9Btlc2TalDmY0dUkcI%2FJdR1nvUKWTSW44t8uqfYAyZvd%2FSASEYUqKfmA3pBW2arPrHjHKRdobJM0foEi2HGW0HXSP5l4JXgIGQ9jFj3jzXDqj8hYALBPoDj6ctt56G6IKWfy6BaiSdLQXf%2FswiZOGvgY6pgH5KofXuclIvJ1ONqJW6PSPDWH13sxgJhLKHR8xEnzLp98M59dS4SrXDQhgGEcMRAkhRM0VMBC%2FD1jhxJl2W9%2BkdSkITvdH4hxdozLMRD6FTUTnkOZL4H2Zv9%2BXYZbd1TdhSQCvxgcpMX%2BcG2bQyoj0x%2FH6v1LaFMqRDCLeL60wqpbHYBHRIH6k94Y%2B0%2F4bkfAkF97mC1maJfUuALE6H8o5wju%2Fl%2FlS&X-Amz-Signature=76c800b6ae84fa7cdc1eb883d7c0a3cec8e165ba685a283bb6478e95032a85b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
