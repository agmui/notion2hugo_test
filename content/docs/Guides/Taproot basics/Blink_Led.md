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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCJLOPYV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPXWj6O%2FMafO2ez%2Bi7HIyKzQaMXJIrrZYDB4hqQi08gwIhAJFv70SY3dhaUPaTHcvjWHD%2FMPgR6e%2BMJ%2F66113SFkILKv8DCHoQABoMNjM3NDIzMTgzODA1IgwrZM7GFp2QWL1fpe0q3APxuQwHMpovoTzvU1vixXTjMAcC6pYnoVFwOF2Lc%2FKXd08Yd7RS9YiFV3msQyjnj%2B78laghi3XRtS51ojgE%2B9IFMB2%2B1dDmWOwP3FiIEC1c2pbrUY4%2BYZceREzS6UjEKN0Dd06oPjbsKKQyq829FJ936NF6F0nlnkE3jZtLZCawLtB6tjs8ebyrQCyx4ulS2U%2FsRLileUjhsRtV%2F7ugio2CvpUO02Iv2CyTy8OuvNCfRz2STZqcxqAkdSoThwX9Pi1VkGYshONN5T0X3AgA4X0k%2Fj3W7iNawiES3CCRIHD0ytUfMa0LXy5XbmMmR4menjndMAy%2F6DUtOoJW8OnvUGfKjhjt%2FAFjYLY7fULDjZM%2ByG4kIq7gq3ADHRcli9jtQWktXzKfT93VBo%2F7GhkVP2mVAeaMOW7jPZ%2BEnnn3mazFEpro2nA49ijwajmCuD%2BwRJ4Tv0HPhxxo8Vcf%2FWkkmUP6eCm9M%2Fj%2BIkzGKxxsHuMSeU3GTmIoc%2B4EQLKeAP%2F3RCgh0T6JgfTVg69hoF2X3PYI%2FUKfCDbgR273vMCK5vXhuMV%2F%2Fvm%2B50XqKBeDdhj7LCwGdEudoI35ccTGuhrk8CiC43yU%2Fwrt%2FrszU1zxSPNgeytVudY%2F2rWC4jigizC7tMbCBjqkAT7Ov6dhbKPA%2BJz6uSTAnNRqkft%2BBg%2FXtrHb3i4BGBAvGMuHLtiiS2cdim9wPbLABPWT4fWVWgEjtCiU60hf1YqE9miZGrF2L%2BC8C%2BIL2AT4wcQUTcXnjv8SBgJ%2F6xKI1c2EkgSvCVhyTRCEbHKF7ghz0wkZaQZy5XP%2BGCbaBWrjpyiAIDCBqzx8Tf5hm2rDKgUE2I1bT0YElfI%2FCeO6w7l3GfH7&X-Amz-Signature=d9ef590da40b0e70e49e2288d97c1352973d9d4707500889d9a13c9fec4a2049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFPHEVG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlvVKSC61po96o%2BMSWWO6jDvynOmwyfzsOQKKsj9Ls6AiAt7Oi8pFuE8i84vemQ%2Beof0cC%2FIk6uTm%2FdOTfwO4HidSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMz06t6TaOD%2BILEve4KtwDKpvnstj7rWmoUVV%2FNZV9dy7Me8EHbFkGXb4k5DLYEDjcN6i8knWCggLx92WjYLWfto%2BopZ5BcnrDKfmCgERV6hPR9fv2cZ6mWuc3sO%2FTMwm6%2FPpVE5j5w5w%2BaEr93sYEYV2bb1n%2BC6wv%2FQQCCT17K1aK%2FMVepwchLURZPRt4Mr2a2%2Fm%2FAKa5ZegHvCi451XqLssQ%2F55SZdx4%2BNYnKdtIPfzblXhg92IR6O7RdwCENZHlK%2BOxa7O%2FPnf2lrM3M%2FQ24LXMJpTv13sFGclFxMpm0LVkanhkTr0Y6rVDN9f%2FbLsFx2Ij2zoCgBJVdW2GcGiMDVKKfCA5NrXr7tfoGHlx1ZWVrbOM4B%2Fj3fYEeb71JGuA%2FkfXiMh7yzVS3%2B%2F5spbZiEXJvJJrwhq3nxXxGSPjSg%2BFkS%2F%2F3cRKC6uKW8eMWacnpwe4vpcJ58spTm6ImwEImgZzsy6DhratN5TaDj23rgHd2nLA3UWjP6l6iB5k4MOWUb9N%2FjzLdkCdu%2F%2BITxNrv1beS8szbNsGFU39ZjviAR7%2BMgocUCr3rTy%2B%2Bj6w1a%2BXZ1jJ4lDfdgtH9lAm8jjjLAChw0qx2ZDUSVbTOV78cWw5EDQQ%2BRaKwM0wcDyVSadG51iuNmghniMcTZ0woLTGwgY6pgHwYWdEjXPg%2BmmmGUjLlQ3GIu%2BmwAc6oG8j9TAacGqV%2BJGUFRq2HDBp8btntidE5uqC2D2xQGf9WMzCMs%2Fhj7q6HjM84KEJ00RAzM6Wnzr7loe2ZQ73UeqTr1B7X50QgdoNdc6r21ivdEWo%2BD1Coysb5do5ifasCd6N%2FuF8mOUmbq%2BYNZxSwv6TzfqmuTIpLz1tRdd7LAeJO%2BNT%2BzpsvCRNIopNPqy4&X-Amz-Signature=f8764f70b672b7c40192d974ad33efd0884e87e832a933a01bfd1f4b2886d86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
