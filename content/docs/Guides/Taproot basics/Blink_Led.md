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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROHUFMST%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCJzpp9nd6P59VaFsWus%2FXJzk1%2Flv6yp%2BtaavavjSjOhAIhAKsiorkrPpTrTJPaBSAUu0rdmxTaoh3a2NgcaUKUOQotKv8DCBoQABoMNjM3NDIzMTgzODA1IgxobtNNEqH4q%2B%2B5l4Qq3APOE8F6Ju7nSXoAKiPCRIUcTt96YOE0ZrjI7lJZfZiEcZkF3nXuzDH1WWx%2FbjA6EWS6YNQUDT%2BYM4Lhfg53ACjigWnNRvx%2FkhA427E07jBPsZN4uVryfK44%2FpSnBQjNn74p2rciEFhjNNuv0zKfrTRih6FmIqiFmPwQ2uU16J3tl76Q7hLTOx8iZLrBawnoS9BC%2Fa8%2BHjlYscFeUFteNqedi%2BTZU0OiaMwiPtl8sstGajQ5ZQw52kQdK1CEpIy5z0s8DucMLxi7W4u2QYZWPch9Cp41mhhSk8BSLiqE6nccPu3nI7fLmfmzFvTwhyXE7LGoQekbdnL8xxbGiYebrhO7%2FRvegnJkleua8AQHJEp76zEsl%2F86cQss%2FlJcynQPqnCUNzggc3jwvLojziHzW%2FM9VG34eeCNP%2BX4HGsZIvdomLtgS6C1IRhV3IsgpNUFx3FVjdoubD2PDHUwZT6xQ%2F6UCJCcNuYvDAaEAPz%2BzFUaX2W7URS%2BaP8ebxfxU%2BG7ja%2BXy6I0wXt8ng2FFBxaocdhI%2FcHhUfNjB%2FLyctIEI0QlX8cuDzou9%2FnAB5GnGbBeWNBBxdwyVeTGK223rljXis8CD6xP08%2F%2FDQbMWgnhmBce7V11Qn%2Fu2X3HvGGnDCPu97ABjqkAU%2F9zsa06mxyjN%2FKVoHuBzef5V34sunuVbCsQwgL3Cls%2FwJSbo0e%2Bk39zzMh%2FtZ%2Bx5%2FaFdYck4gIcLu2LsON%2F3KLRDbNOY9SxvXVONFVcy2IL8bn9E2%2Bc5ZPcrV4SWnoMdh3i1zj1d1XsC9ngcK1n50TDxzGd4WsuWtH6M5b7ebQi8Z8yau6fsTUh8Wf2PGP%2BO1WJz0E97Gwguf%2B8PcaG32tl4Aa&X-Amz-Signature=fb40f85c4d488478aac9a8ae9ec19783dd04a333f7c1291c453ab8fd5b1a5d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XICKIXXE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHWo5bRi4C5viLeJWUPQpRaLBNyUEQ1jqJpDj%2BHNm5aCAiEA6DeUDfpaCO%2B%2FzNx1kwBtw8Y3ZFHpRdINtRWnV%2F1wVy8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDLJXr0nKusR2pxxTPyrcA7CCHYdOHbQG3lUc2vIMIiIu2v4Bp4aEdfzyN%2FYFzxQbLmwFAVR36a19tLg2yuzWvNPDB3Jb515ysKPTCBp6bUMFEFnQ4rXcN2Z4Xa7Urzx6tU6XITf%2F7V%2B0QMQ5ZFsFWij3ziujt5kDQnzNVOgTUC3hF2t6by7oLL%2BiAoeqiGxSXdG7%2BHZlfVn5a4B3PZe0aWXDmm%2FQPMfuvpOD95pRO6G%2Fss9zB1hHqWhLhACcZmf0lva3hFmZzgS%2BGRgZdo4EX8giMXC3OUTJDhtc5gADMjbqAOfU6qqGjpgOV44iJPUoHYpMdq9uNJG1hqdC8hud%2BrE4kYR700Nyn%2BwZgJWzPd5s9v2oRVP48VnXIrAN2Z2n%2FY0%2F2jmxmucJ85Q1UlF2S84n6w5OU17nLZQX%2FVSQN9YiE0Y1DlNDLKmb5DfwuFVoZUd5vnryzXe0%2BP1WyPdB9394VVxv3gKtlkNuv5gsdq96THj7T2h%2BaiDerqnKVjYPI9HaiFyWvMq5spsLydRwl%2BUDq2CCvblLS79s3nL0cS%2BTX4ssuSvi1ZJoguFW7c5V8JOG64mvngA2AgVi%2BFIt93ELgrV5xP4%2BX7EPagNDzpQixblK1alJmPBI4Ksp3vig2nNCqKng0w77WAC3MMjD3sAGOqUBSp2oEkp17kVrq4b0nWaITCaHlapRyjfSXixBuVyv6zDw3Q261ado3qKmi349%2FmOMYLgRo06fMGFRAjHfWLcD56px2mCPSdLsQRJb98kZlID9AHSi%2B6KRMePjJr4jaqmKLG%2B6Nix4LJJUAqMNuWly5hXOcdw6Ix%2Bqnn3HqSJ989zqJS0bwD7nc%2F1gsGAoGla1R7BT3y1q5CZ3Pw3gqww04MBVbTrI&X-Amz-Signature=2913e8f02dc41fe0cfbb4060d380683c2ce076ecdfdf173da86b9491f80c88b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
