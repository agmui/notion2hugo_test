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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCP5IGDX%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoBlSOBzuWBjXnLPQAC9Q6JT3Sb3g2xeDwVcvWv3jmNAiEA7w2KMtnhjJVGGrJ1UM7Kv8p6eCFIJQlbp0Ypb31UE3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEHo%2Be17IWvnMoLnOyrcA1j9%2FD%2BlRWqspeIkNc5p3fXAd1%2FmEEr%2FgZ0csLVJpi4sbcFi%2B9odVn1cBU7RPUZwMV%2FZAR3o00Wp109rM1GhHZcJFknebjtR8xK%2FjPbhBFR9Bm1IbUS5O1NGAC0B%2BcjaB09gHCs1st96N6aubRP2%2FLGDKcTVZJ2EkNLVt3ULe19cZk3uuxuMUyE%2FruqCiD%2F7Gq9HLB6pWwAPN12V3LXupAny0uwEqokGlyLGP44QYkhRGQ0XTs3wvxdR%2FzzFEfGyQJ92%2BP3%2FDgDOENqT2lHpFWZNNjNl%2BKtUKS06%2FgTKlmTcQUFo52t9%2BDzxH3bPw15OtImruYiHXI5CI8U5YosXQJawt6zQbVAHRLviuzhZGa3qX8FvAVhjALSnpflxVqzTLNdXmEK80o27QU4h3G%2FCpgpXU5Tzs1HskGYMlY%2Bs46CHZ1BEOZ6G16xlFezieEGR0jT2Bedk3hFO5FdyMalMpyuQmAlETbCWNJjt2cpW0qAzPNMuleqH0WMYk0O%2FQKFywroCgQc6NRHmKAXigaVHbAF54tQTg%2FnhGRm%2BlNUZ7e0ykP8Rev4yOU43VSw8YQWASGWBZM17%2FLE68dJVQzeMwGZuPAYLeKBhEYJNteLLj0hjfyF%2B1hGuF1NxPRIQMM750sEGOqUBQR5UC9CtPOYpD8HK%2FCThYRffdrgP9yzCLet%2BhTYbDg3W%2FG9285lP1QrARN8IIJ6X3nd9jIF3P%2FZ%2Fw99oWna%2Fzx6gcURtZMTZcGYvZbLu9c0GgYA469JAof7u6qG%2FFEac3pq4l5XYeQoI0UAHiX3YXT6bMred%2FojlsH%2BHVKcUsu4JX5VGxfRqVJOuZmh6Ahh12Lqdux0TcryWGy1LLPDStlHCdfjc&X-Amz-Signature=29473310a6e9799691931a6804d5690088aeb6e883139e6119b9c7439a36d750&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIGPI52%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgQGd4zHPW9dKqiC3tELAxEV8aKbn7CkS3IUqzKo6ligIhANrEQEWZ0iRBsWo7PXKQxnSQ5j5Rc877O6k5Os4Zok5dKv8DCEwQABoMNjM3NDIzMTgzODA1IgzBlVox4eFHBdILJlEq3AM%2B3rd%2Bd%2BMR26Ug1vqgLwS2o%2FJmnZv2vbAvLIXbYzn4czoopcWzR2r%2FdqcEmowZhtYzyYk%2FemhEqI%2FAwUxT8Xacvq2hMMZ7dt3La5FY6yF5Y28b6%2BO%2Bjbstm7A%2Fxg2HLDTt85m58IudctpjU76AILQTVjkVqgikGxiqvXgxD451S9LzmnhqwmFCM5eRvMfaRuTq0hz7t%2BxWs3iv40eXgUSCGX5xlbm2esQqbgr2hwDjFyMO83tdpSbblsRo2EvBjetDedBa%2Fn3N4CyJBuQmb1bo6%2FzN8hmaZbbr%2B92KYZAVrU0Xa6QbFpX0F9d9t%2Fk2qX3jkMicbK2QRDrIUHaxFns4Mq5KqsexsehHWlkvX%2BM9ZXUXPZsg%2BlPlknwq8P%2BsxM3Milsu2N71udXx12VuHBkAnv4gJHCc7wkcpghK3poBRiv2JefB8n8LEOk3s1PGYXYAVYnuDGBAdTHz3fgeSWiGQr8my0zzClaI2Gu1EheDtxC9s5j1CiMA0BlD5fL%2BEYWWDffacZYLbe5y5rZX4GWE8Kr5nRM0us%2Blopj%2FUVd%2B1inXhGgO7wOH6VoOdDvq9BLlDDCKtnGf%2BlfNg1mbaLpRDjnB615EEcB64gQ1Q1GfxvMHVbopNyjxdb0qXDDx%2BNLBBjqkASuW3ysJbyx%2BblwsDUFBFRNPxAOut4T4fZhCcJWze0qLsSUZLCroVYI%2FXmMen%2B888RsYyV2rp%2FvfAeiQegNUlWwFf6LYs2HPR8rXiq%2Fq2qu0MEdkebW4C3IJJnXOndC5Mn%2BKszfeJ63YInKeD61fiDf%2BYyMNKPJur9pQuhzvbtWwkSa2HCapRhS%2Bs%2B2XrN899oa%2BcFOmTt2A1fWe9TRu%2F7nvGcvC&X-Amz-Signature=72a12e7259f9196a1c2b7cdb9193daf0dbcd22d9f466e6812cac50e92ef4a6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
