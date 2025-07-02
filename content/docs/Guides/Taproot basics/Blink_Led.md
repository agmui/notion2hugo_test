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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBME6JJB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGf2RWcD%2BfHOEDuaC1%2FCD7yHbUIaKn0VAVBz%2FBkcLXvSAiEA%2B2NUKNd3ge2XOhuBOLs%2BeDV2VVxqoFHXrf5mukz0DG0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmPRnqq%2BOijaaCF9CrcAy0eERNky6oaSIHYFH%2BOQ7kObGr%2FiShUH9LE5y3Nlp7DxHcv0RGkLkk8lydFUlt8ZBkRWAxSPd%2F%2FdrgmEcZA2CuUcltzDOHvsIhPTUCS%2Bi5lbjtMXeW2LDR7e%2B41ck8GtHN4j%2ByroiRxHlYQLlUWuqg7bLX0nvKkcHxmO1Pw1%2Bg0cy9N4JDZuNfCh2OpBFmLR7S5Gt5rt39gsYjg6%2BcBlvt6NVFMMcNgzlQX92BbagNmsFC9hbLcsZTbz4XyWHkTGSkQvCpys3gCX0EVRZP6zlI%2F4Cblv6kxTn%2BOKCirIcrecjDU%2B6F0RMG4WdABJhmYGpYd1eKdvyuy265Pw0ltI8HpHp3zqPtXSOUkW8tw1uQS%2B4LiO1W3ANpkixJY5zEZYxicOtSXJvYeTvFvjKUFDh%2FKUaLjKGWqxZpPPRyWltwplf4%2F9N3K9KfoTIp%2FCHHBhmocpKJIz%2FmlwVwjp3qbe7JRNXnSobm8Ml3R4%2FKGdhH0DIVz%2BjoFt%2FRmtBVyrOA%2FI30zJH%2FMLoEzN2SB38aZWaEH%2Bu0hJxue70DD9yz0dxf9EXAfAAZ%2FceQwE4U6OGU6yygErwDoFZl9bD6TwwiLovQ%2BaCoI7gKVQj1wmotpDluyWoZ8C%2FK68Ntw9w%2FMMNDqlcMGOqUBsQ5fkVP4t0IIcEce1JH421wm4BcHtpBdIdmk1KylAicfmluVkXBTK4DEJPKN95rny3DKlJ1qtLfVIaBRiR8ocA6FVD%2Fb%2FZ6Nex3zJkZNHsZixF9DMCJJ80fmthCFwjkODKxW%2BLbGl2fuGIIJ7TSvSTV9XF9mENRFaEyug0mT2fedSMow07tgef9cMBkLt8ez7pN43Qd4OxbF2y%2Fu%2Bcpp9V30NwNM&X-Amz-Signature=f298ccd1eb577b25137656a64ff2b9293d9da73399c9c3d93c006c8bccaa649e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDBX5JD5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3aCa4M6396yp9fGuAMTo9mT8vgVHt61vt%2FGJIfaxizAiANH2AtwHq%2Bv9lQ%2BVLlzx9Dmpy7ium9x4EPJ%2BFO0oTHdCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd5uCkjuwtnWnc0nHKtwDpeS1mRgceZ32UjFQKyFh6pmlrEkugY0DJWZ22mhIN5DfMYB3q9EdzLZyiLr0thg%2B9F4rptXxNBaInXlALDKo38MrdIIEQVvN9pYrb5FS6gdS2EBJ1hGUVvyPeov3kYwLMeAGjlXkY2iraTuTO%2BxIFd41coggmqbw%2BoFrqbnO5mrnpq264kW63uLkLGCR0Pt1Bje2x8%2B3u6q7y4QbQcXV2ZeokScK2dYkRJ9qta8Dx9Ogev6vPID0sk1U4cHDM1B9uhNFGNyi%2BmlndaMgAuajpOGrgiquxolVMnPO3kIV21EhCM%2BKEmzaMuvjXggmVHip0AZAVrIs%2Frs9i7ks2pk99MoQqeaSV0mj5wYBOqbmCTcN2p8%2Fhx0q2PtRfvaAGaLib4%2FWFaN9AkRXVDK99h7X8Mw%2FJd6K0vS5LQvwxkmoS5be1rvRdeUNdW5MEsYDEwtJQhkn4Hc9Yev6uKIjkGG6z%2Bdmp04036r%2FoRFgG2juEd1%2Be16j5ZELhcYteFfPoRGjIyp%2By%2FPc5LaoqBEDGzS%2Frju6zL8MqCDnKINaXVB09t0ynOXUt0Ot2wg6qCY%2B8e2LxjmL6dX40nqnJvWxynUgQE%2FZESXYrRntwQikEDTNYxcZ5u5pVAvhOr%2F1y7MwguqVwwY6pgH%2FxNf1Kt9xgO%2BtRBs8G8%2FEWYH%2FZ4%2FfIuHaTNgPGMZga1GXDRDWz%2FYJMlOBl4Ogfnhn1Jm9yx%2F8gofHjIZTGF0Cl6pQA7rWYzDmsXdTMWM5zYIwO%2BPYtuyd4HsLABgKEK3f0vo14NRBcrU%2FpVJ2ZtsBV%2Fd59%2B0Dv2VVwyDpcl5z%2FIZ%2Fn4eGoj3Bujr%2FPk2M57PhUZq7l7GUQlOJSM4KlrKmB1no8K%2F7&X-Amz-Signature=6d97b2711cb7f4442925525f4f8cf391337084629180916927535e686c834c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
