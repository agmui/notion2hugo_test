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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKUJ6FWK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCSMOR%2FwUsfaA3i0emnYwXsJE%2FBV1RvCXxdFeMeWk9k4QIhAK80YoNyvJCpdje%2F0%2FjwNUwobFR9L46vAkdKOO%2BDIB6VKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtrIBkkAOU4RxVSskq3ANruaeiFXa%2BYAJcMfpjM2w3VSG0CQVJPmp315%2BMvEknaliDdH97z0CKEvLN6Duw8H9zrIf3nAkeAwclN6NsBL2dvwOl34A46UxFmqXr88Gvw93lEX5rDVfaPYSU4zR5JU%2B2ndCLwJEzclJeRrKqlqilfWQ0ySIwChn7I%2BwGnZiT9zW5umlkyA%2B1HWMige8ap0MYgHvjLcXn1dMbl%2BZJWvp08dEwAC3iVspuHRE6ijxNM9CJQ8rxu%2FZgdwMe4BejGaYH522NmpFzlDpayex1ZzvpbTwNxU3B1p0iicQv%2BCl%2FS99Znrzdiwjz324ZaYMSLdy94P093mhBNgKWPfgnczBZ3yQADqW1nMdPC8VqKyTZYWavDQOnVVYGzlaUTY5JwW5UWkJmt%2B5AxmPKX5QntPSRLtrCX21krziNW8fD3cZbj2wAnbjuC5OI6rVWWfC6Yypw7C7MPRRaRz3pNqHjZhsOtb4QG%2F%2B8iPmD3Eg%2FEzFlzxAOESD%2FOYQpSLw0oJy6odnUD%2FiMccYPD0JIC6cimP3VFHZOBykupEcZLCUeDxRGLtuRdpicg0QA2ioXSf54MG5qyp4GDd62yjYJXz268Z%2Bx8LsCsJZ8z7i2qbz8Yw72y27gSCAp%2FAKLdQmJBzD%2F8Ym%2BBjqkAWNw7rI5eiis7klN7RO6lCKC3HxJWck6yJ86AAW9PgvdnO%2FklU15NpmH2mRHxPEEMN1EWrWxKo84rAQT0x8%2FY%2B5rwI7taepZaT7o6q9HWaJb2Mnat9MqdXYRXOgzQoKYmQ58YyxH7QKfLKPgjLhrKvGWvzs71jKEf9ognOZKClj91iKTkJo5KkQAtymZsFLfN%2BwZIxFSCKNBmxqvgr39Nt5ADAmJ&X-Amz-Signature=033805c3f540b71ada31274fd2163ee6c1482ce8da870ba3b141f4ad0e6c3628&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2M7L6RT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T040919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDkQykgFuySU99oZf5kRMhqbr1t3mK50WkIXEQjj4DgJgIgEZ7f4Wbl4l1YmlKKDxeQFnKDTBrdyu7z9bigJ96lDO0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTXBIu6cH1xeNAf0CrcA5NjAFd6EMndnS9di4mJiszz36bmQ2GQhy%2BJAbm1c1TJuOFFg3sPjU%2BeF2tJ0L6c%2FVqi8bIRC9foV%2F1GRfqifqOQY%2FGdkace%2BhJdVuWBHa%2Bg91dmRmOWGOwIbRDPMGdbg%2BFsWDsn0dVYUpEL3cPi07w1rRW5Hha3j1LeBXq8KZOYe%2BHotZ1ghSeDdq8yypzzUVuw7F156W74Cplx7XRjNyo%2F%2FPeeS0zgFLuCSeRIleLLr472dH1AmvY6anlaC9TzetxHImcf2iEzfaZU7t%2BTsRQIpjkXCnYCHcdv3RBbLEBQkkSGRuIpCyk3so3RawKv4OFFCmA1voNwjkBn3%2B2T2LksJNhgRY8%2FAMfqgoevQAGNlAInQKySC426O86xDEU5HtxC1DP%2Fm1mVkySMZXx41AfMCddFnSJh05riZqn662cmrATeueORaOabWpZAPcKEeZ2y%2FN6gQUDhmp3lZN%2Bamkw6UZfw029cXva1hc2QattO1t2DmPfeCYRVwrJwfe%2B8A8zcXpm3Gkty8FqWPov8%2BOKwtuKSlvl3O970jF1GJHyGQo9H%2FYU1iuGA0fe%2FepX%2FnKIRJpYhMxWMB80WAfvNP8b0prvr9kHuQzA35oLEi6z5actSHEw1Jcr2MnGOMJHyib4GOqUBTSYHMmI1ZjW4ShzQOl504H3mMrnF9NGEyZKIPFqLc5zaNKHrgFp1N%2BeeufeUQMyMgF%2BEHOCJ4%2FB3WX34gtr7is%2BZfXV8JVG%2Fsgo8e2tnNfVN2h0sbyv6HzDNOHTin4x1CQM%2BMlWpywqsPOgv7urTiD8JWQ%2FlvXQZyzCKi3wH2DHkEkRYi1IkXnHkND%2Fld0ozmuzgg9ef71htJEEk%2FmqRflCs5yHA&X-Amz-Signature=443010507531ab815275b051c4085c36f772d44bba31cb44683b9f1f876a395b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
