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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTE6QIBR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyl592zPgCqw4%2FQWeitT9YRQ6iclSZYbpg%2FfnUFAu8qAiB8hPIZ6cG6CCcfdqliAQpxNsh5cMEP07xNNEHjF4XOjSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMoRWERgO927llRgVbKtwDQq3E%2FMuIV6miN15mRwkhmAmfo0FBpXxqGTXVgbHazfE95i2DNJ8MbtP2knMWL9sJTgsWD8jC96gaGNO2xGA6WOKX2zmX0SueNHX8cHBEiKOEiC8LTmeDLvPxEVbUa4DzxxPo4KDE0h4RLUJoL2lm86epYNwSx%2FOApkSk7%2F%2Bt2XNN6td2yoMv31tJqyNaK4dAmfVb8WlAhHrC0ac0Gf9N4cqIMd%2BVo3Xl5IIzj9iUGLmtF%2BzMuTUUIIEV%2FS9OREx3CheNSbMA4hO4%2B8NVnBHt%2BSbMrZirCZAEU8elIkMe6ZdVtpLQuMyKn%2F6%2Fb5%2B0BlXoDJKC9AYNxb5ZiRUAulRDcM%2FoOvUqToJAwfM60EWNaNDBNXe31IrUPmaCHkHM47Tn2Eh5lWbMwVLqsSGAh6kIIWxeeIL2EqFFy%2Ba%2BdpPem0h1nUTMkiK%2FmkjbZuplfPcauMZ%2BBJXnU6ruvCW7wlN%2F5owaSkNtVCZhZcXCKqRS7%2FeXwmnqiSUOde2d72XfCuQU9lvIORVDqW0kTVK3k1xspKIeGTsHIyt1Yvxdm363Ona3Hy6ktj0lpPVtMUGFQsSf1PgRbwFnq70%2FsicPbtFoHIczfRDlwvcrfaox3Z5sd1PsBv5%2FDBRIByFZ%2BCUwkbTpwAY6pgEhbgH%2BGOcP9jtHLOebASY7MEDeCp%2BYdITDp%2FgZlW2fpMFixUsaadMC%2F3D9AOASWk9NK6bQnuD0xNgN4usmalsUgNiJz1FPCcykLD5Fuf46x%2FJKvO2MGHoyCrX9ZDmXi1b4QK1pgKLr%2BJGUM4%2BOcyvEE8Lqut5cIgrogtzTDMMcdixa67nOMgLvCO2B9ehMTPiOIVorVmHjVpkgPwInpydLz5jshMOc&X-Amz-Signature=9c03ad6c4207f1c1ea82aa50139d0dab28800918fdb17743e48bc6566129267b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FME73M%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T190619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlHXQ5JvT2cSTYr%2Bj3%2FvP1xCxNe1Zol53f28Vg5ujgEAiBRhpXd9xPJz9E4SnbFrlj5vzXAAVvIW1G9WHt73EpClSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMR2oBvPcREa33L6m7KtwDDOqVFKAaSEM4B1OTJf7EnS35GRJIDYSohbn4NSl%2F5qm09U2lzOHwEJXC2deoI4FVdtzvFf81rzK3xKblLi0UMqRZak70%2BFPUa3RT8QMVFmg8IXIM%2B0D2VUrzBq430PTKkP3IhydmAWgw2xIbXVNdyMglFu9NRzy3W28MDOnKe4kN90uCCu7ofv%2FcCFSl2wRj5356wS8q4v603p1VvX96c04fBESX%2FYmLmutWLPZuAC5%2FVI5zSUGWOBSsoJQ5K4Klu7zZQqHU3WL8%2Bc812OWH%2FSUTX5d5y0NSQUeW2VSbv2k1sbdOJiwEfTHaCBCv2NoBUoQhKXJDVxMCnyCZYJRt3mUhCmPfcrph%2BpK%2FoHAQrZf0jS3w67TW5oOS%2BTVu1ubfGqwrdU%2FWrATuADxrY2KwPoJ8GRTwQhKhETlXgJ9vr9joEJbL3PdpCN8l7S6S6WwkubYIAbC9OnjU5NbkS3bcjHyCK1LwOf3M3lHg21PBnifp5V7Usow3NkccBBONk%2FzckLstBRgNsFXHVCRefdKn4xpyaedT%2FLFyQZDMqPMMSnkmXYii%2FTHpmpYeqcWMtOWcxH3KUL%2FKFX9HMu8Ut3oyMjsypqNo3jAVhx6gpOg%2B5xSeyDGhqyZ9Kpy70wAw8bPpwAY6pgG4oOTJCywf0IZ97ixUuhG%2FNmV7D8LvWeDfqr75KtXDWOfILBCRnJ38A0w5KLwLqf1Wmx41d%2FwQzj%2FR6lmL%2BZS74hXs6r8DJ8PP21JN%2FOd67mjd0NeTPdzcXVcw1z1t1nlYaxIADuF9BRvLML8HVMmQHTFSGqz566aTRBQk5lmm4z81PoohKgr%2FD%2BsG3GtkNVNN8y18E4JGTXXMTiYgjQ7O4HZqc8bS&X-Amz-Signature=277ff59ad251b5042ff47c41693229d25c4f72db287d0a0799b56f7f15bee95a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
