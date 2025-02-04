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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNNIKATF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCdLUQZRIgX5Y9g0LoLM1pLyrM34H5R1W%2FkY6pUz1uGtQIgXK3D7rO1PVqLx%2FbitpvNGhzS3NqENvplSkOlUzdLG3Uq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIWzzpj00CjFgANbBCrcAw05p3Clni5oBPQLOPNBZ%2FtrRpQbs82R2jg87onR21Pi4W0M2D8s5LSlNLBEyQZ9JTHa6%2FrScUjoEYoTruZjM0ouBU3qaAgM3k7d1CHLP81ChqW9Bs2yw%2FNYwmN5cV8CbC7IJZon8UiVkqwBgo1VGMcbW%2BtLr5xEo%2F7RD2j0QzyKF22ZOecAq8jf%2F2bCJ6ZiKRAIfyeZCSClDswfBjMY7cVd2ub%2F0iKDeLxTKP2XMjlheQKbFVwx6doXoGAozbwJsBVeO97efburSlhxzcHowX8rcUh7H3kbMYqW0KaHLipiQ5F2iVz1%2FJMGw2ZSiCSQGAK%2FAnHpwjSPRfjnVFs%2FjGKCzd58lmTrONG2PJ%2BxomvV0KVgHkfo5M%2BK2JcEgHNiF2tJF3CFB2kIlSjEA8zMD26Ue6O%2B3zmqhc045TY%2FtpG%2Bp4Go1nyz4IwjkryYijBa%2BhUS4C6NKyf0WcCkSJFYR0KTg%2BXTQwBx0m%2FBppe3AhbZM%2Fiz%2F%2F0Z%2B3o1yupELVgmK1LBtCp83crzMIOVmzUTnCXWvdmlgGQEy%2FebCBhUrrRzzVLAXGLGC6GiFdKre%2BYA6EgkB0U2T5w48WDNG1DTL4XrA4AUNdRKMcyNKMDgka2aVnJkLnu1gxJeeYxFMLaDiL0GOqUBqRpJFKP6KDv0iGfTM9PUDnZAU%2BUE%2BKa96nuLasR2mgr3s3621dbpzEjOJ8r7miFNhfvFcND%2FRqb3cTphhS32TmzeSiMiUDfPQVAT8ZvvuuLwGyzmssINbMH%2FHTZplBkfua%2FO%2Bfj5dUbQ2VSbhW3WLle%2ByLo%2BalLLqlz4K92%2BDi1ft2PSFxhl%2Bx553ctEGTUc384Squap54PVIlInQWNlYUx2r1qH&X-Amz-Signature=371ae491536ab936f00b9abf47d1e7ec73fc4a40332b3264f4985a6125456f48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIQVMWP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCAeLdZbbDNCYn9nSAsfPxyK%2FPZ3OAu710JpnAWR5gbqQIhAKt3Np4dQFBv5G1EePYndUKl8lvX1B00O5XxjuczOKWfKv8DCC0QABoMNjM3NDIzMTgzODA1IgxZ7%2BJwKHFdik2CV30q3AMYmYUb2kNEGmOXOX1RtKSK8K%2FXD%2BTl6nTzMFe4Kujp5thSjOKxlC4XCq7amaCD%2BoObNic86OLtpkkfJ4LaX59yq076CZHmYUdLwlBOIrCXKIhgUWyJeu8kpJahKOmxW1zvBitg%2Fnj2bI2qZOj808u2ZECSFkd0iNkWUKaaixeFXnkEq2NPBNIm1a%2Bof5jNq869vcrwoNhLInnuGZapbh74s4Afk6u5zVx%2FmVd%2F78gagIh4YeCfCu7V%2BRTZ27uAM1e64FpxZHLeznw4g8GnuicSfxL7mCl86pfc2OKl8M%2BwGOMspfjwjTVYnnjx5vnm7VrQF6%2F0EqlvrxdLQ2wD%2FQbwB%2BekacfY9Jd7hOL5q1fFjPjVhZns2sKpBcnLnKVbLIzA48viFDYKlpEZz%2F5xy%2F0lG6IiY3ywywf%2FezKAjmUrcRkGGyhw0OHDtkkBlYJArLBWVI4zGBb0YTs3Duql8Tx5quk18fBcwPEKVp%2FcmfhIG8NgE%2BI1Z5EpSd87xxyOjF6cKJuUYF2OhPfbwv3SJ0S%2FHtXTIQejGLexOUuv0ktetOVwauDMBJuxrB0XElCaDusRt3aBhHhW7shCTRPY83jAwEL4tctqb%2BTAji9XpWiMj8g%2FIN%2FbevwfkhF92zC9g4i9BjqkARXzO7Z74v8K7WNC%2FJTK4foW0tr2mVwtnP9t1u0dmoBeB9QA6NNEPqhYze6%2B8WvMPLYhkog1FzlQ7rwfGcDPd0Q5u6MvXXMWmFYWF3YnzrTqr8wI0OekXgjnw3dCkUapR7GTQykjIa2DWoXLn0rY4j4CzL%2BUjDQi3DIfs%2B64yWj0bYyztZXmiPOXRCAlZ6rw93FQFA45DM6OzF9A5lDTfykhDo%2F1&X-Amz-Signature=114a268f93ebf8c92fe288982a45dd3b52b5040901c83700ac6b9c779800b196&X-Amz-SignedHeaders=host&x-id=GetObject)

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
