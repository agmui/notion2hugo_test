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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WQUTIK%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQC4Umr7ceM6A3xYDckRvCK0YpxeGlAReijo4rhyMXukbAIhAJunqVqTnYBV07nzzRPPaWNprtkcYMG9DR%2FphYbqti8eKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLp8AQJsmSRAKMZvMq3ANxbQrL8fU9dDa7UM241eX5nxAHTVVhRyVhhbbNjG1Cd5vwlkADAbUTfHQ8Q%2BkYrAEIkn3mRQKkfYT%2FhvZtuOfNOzUWj9MIezX7sTYpdVlBuz8rXavyD%2FQTkR8AS8lsa3j3aP6VIAet4MFHNQeqt7wzAltkj3y2zUNfzPuYY81KjV%2FUCnMtntcSrfWcn2F5%2FZuunhpsCJj1ES5vq3dNloc%2FRjbAAaMUM13pmnE2fm50%2B3arplTWgL9I6dNlH20rN2XWyxgEnrlONJDmIHuQ0cjrB%2BdbUAlud9cD9SDKD6aGWhP9jJP%2FALPhqKSmt3c4mAzSeVA2CwPZtEKYtoAyPVb3Wy3HoTRHN5DWIqaB91pyvRcARpkHSixMPPuUPHV1b7R4Ac9t6MWJ17Iz76DU3z%2BD%2B7B9lUr4CQNnOGlVQrsF79isv5CNKYWDosaH05OxifzxBBHmn0Aks7tjdXF5cT5gsDC691vda2C67%2F4MaqvtzTxKRlvmE%2Fv%2BB85eebEuwG4mnNCkaj92r9TjnNxHDXS42wEG0WT1jeWN%2FzZX%2FezIa8ejxd7jUZJpoIhhdE2vu4odk%2FY09feUbqGjuIc0tn8Je%2BA%2Fm%2F5z7KuJuNIAZGahHgF3ZCDV1svCz7jjQjDSkIq%2BBjqkAVZc3yAzwb37cJV5vEsR7BZUJzCovz%2BuvI592C4Cvf2gkJxvMAXWXGyJLhLlV%2F3QJUx%2Bt0hGYy9wJOZwFLKzDxa2S%2Fi1%2FeQxq4p%2FcVrOi58vV7uHMv6UI0ztk2GlGR1qATCeuSSlWXZIc6u5DKPl%2Fs0ZPwf4SIfbavWSTHoA4pq%2B04MwF%2BFa2jieip4jl2QVw4ZF3%2B6hPHKsJT4XA509e2d1pCWA&X-Amz-Signature=c44ebb83e5da37d26bf039cf56ecf1db7a62e9cbe26e1f97d6bb8938c0ba07f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372XN347%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCNHij8tBlU%2FjfbxGa2iWcc%2BgYgsewNX%2FPdobBPdwmUDwIhAJnGUoiPupDNdHSgrbdnoS1P9k46Au7HwfKb8ihkWh0jKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Rp%2BJxdudW2Bu1uYq3AP6yTOdkT9CkPS0rQaCGX6taF7a7f6xbRaskM9LRvAjNaiiVofC9z5CHTZdEz5hJQ2LgI4RUHZMqrTEt55tlHNdD1TzXQl0XmJxoY9zNveUJtURV503cS02GvAmJW7FWHtEIASANQvRuBsBy2cvXNq0PoGZ49gydH0w2r0tUMwFRb1rhtr3FAs3JRbscQTo7WjYUWaA7hSZaiMGOKPtGUNT%2F31PrscprNP5V84uvF7QbsXhNiUgp3kgaznWFXfALc0Ufl0E5n%2FLq2LbcxpMqNawLwsnzyqtjaJNK4SuyovJqCPdHZGSBfpOJbUlf05gAp6u8hjsxfNUzYKokmv4rDgM11h7Iy8SuAfQZioZ8t9czcv7LMT%2FjRn39W4aGYhH0Ez6sJDgtmnbHAUbHPU6Yh3FIiZeeDTq4Cl8CW%2BMBBX0yJvqTaYETe84uAAdvJAowgSappKXWvEZMBY7QlXjeMDOmjSWaDuKA17SMXgpQZfCd3ftxbZCdgkvdBclS8j1WGExN2zOBjzWokp6fVHH%2F7QaboPVWrsdmRUQYEQgVKT1UJTlnEVBV4KesseoGPHezHSykKNjV4cP5sm1iABC4uF9w7IjokKG6hmB39Vhdho9LDBxu%2FyBlEXgUk0kbjDFkIq%2BBjqkAbpksgQQaHksggCs8g7vdTNoRLRbxrJj7uHprn5zcyZEyoU4fEcWza7pMaHsVk%2BE49JyLiypsoFoaIN4YAMOCb4am3iDir3uSvzgCWysus80pY108UwcAF04znHivZddt32WG%2BC3SUEEmq8bJAyZblHZxmzxOGWs4t%2F8TqPMg%2FCMNHrO4GVQdMSQgN1FVq3V4UZvy%2BVNpc1vF7qQnwC5Xj8R%2FPnf&X-Amz-Signature=f0cefe07f7d58655c02708bd6bff6fb582df85a1b562a3f641bcc5998f8a38d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
