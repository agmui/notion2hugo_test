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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPCWH72%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDf6k414CQ7xod%2FyZsxneARhs4rNyKece67it%2BQtCcO0AiEAjd%2F0eSVF%2Ba8ZdTyOWrQ31I9lhwVzlSA1Kz1wz9NxzucqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt45BuaES4753V5zSrcAw9VwaWOBJGk7%2BzmD66xvprKmuacqev0kn1o5n7KFmQnH2VQrb%2BndZrZehRFNODYfu24gS3VTgq8Q5%2BZjmJKZWOSDsf2H33S2KRj3lbBm%2B0q%2FujgDfxO%2FXBSi9fIKxsOFbiFKZsh1NxRAzOdSLKxi0V0PKL%2BamHa79u%2FjFDB0HkJnbWqAInyoUBQPGnDFOLc2H0%2Fk2tdSD4AEIpgaPthrk5QJdWtexBd5zmG06p5tj9CxgY5Ac482HNmy0il3GQWG9%2FHC%2BZM1BVFIlR%2BGByuSYSIk6%2BRk6eldz0CNrct93aX2KuAfOi1dDcRkWWTuqhlMWgKOQGM7hMH4zU0vzHMRwwOe2QTOnzfGDMSuFOt1oXD0qi%2FH%2BBYX7WpbSWpiNI6jLSkOXo%2FgaZQC4zq03yNnFoe0nZLp722ZtX2hrNPfXoR7wccI13ilq%2BpbqlnfVf4xAd2e2lP3Z%2Bp70F5HqWrpi3jpQemxZlooGiX5LsIgnGnxNIOSmenJEBGskhvN9%2FaGNdQEeU9%2FrZTOtAWxQyIoc2z2v2L78q4QuFDq4NFplM3lp%2F5mpAEd4YZi%2Bib00Wi9Em20gs%2FIkD6Fudxsltb4aHyemKIvswu2uPOuirMVq0qVEBRDfYhfHAKk4DvMPLo5bwGOqUB3tKcFc2iyNl2Ix0bL8BUgEuzeNG31dLnFMzCsRhY0EfwGTkBai4PPXIZPeFu6XKdxM7%2BizzCKN92nVGojSbagmLtsO2cJ4cEzssnuCWyL9KXTm1I%2FncTISHFX5YbJaOmkiofX4xwQeAFZxaPxOPfJTMbqjiJvfPDvxG2HorPoRlAskgsNEYii7jnWXicRLMMItYM5CeyDFa88Ta51YlDHW5VUlXW&X-Amz-Signature=266047bee5f5725a9b7f286ef4d6deca38571b3d7f56e8fe6d79f219f6bceb28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I6X2IUT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHraGdyYfWWQHot0ZQMYiLeClrT9AKOdr2yCCCwhxLfRAiEA3kaclqk03q81ynL97icbv%2FoX%2FiCvxMMKaaSTFbJ9%2FcMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5rIZGXM1YGMhNG3yrcA%2B2rvHiMM8HPmFUxhux386zKOAk%2F%2BIz2gmoF2v%2FqSvbfjvcsnM0SJ0Blar4l%2BMmlr0Nj6KvxEk9%2FFMluXvyUnx9PVbNv4G3mAe7mzXzZdiN%2F4o0I%2Fav1cykDv4r7cWO7e5Umd7B3yqh5Yvfo1BZ7QnkgMZ7rLTAnaQnNz2fZHnMCBdBAW6NP1NmQVoMB%2FduVyk629kqygmZ9XaT2vs5SpHGvSQIAOF9YvsphK41E132TI1IvAvOaU6ygPkwBw9jaL5G%2FVlziBtVv2AJFY2lghHIFT7Qlpwj6oo8UA0%2BbWju6KZzKOuqEeMbFBWRbhwgffAb16bO7en7vdfYk0k875zbcEW89GYD8EHPOIau%2BIw5MxgchI5XqSXgNbmYYSyDibk%2BhSxac3FhQaq3Y9nhWRni7mfA6wzZ%2FvwC6Em620pfdvhHW7vo1jHkqJmqDChszJZzeuQAaUcegIRbd%2BnKLA8qYgV6431Sf7%2FK7mGAakxVRaAS8Htqo6wn9VfzsL64bSKKKokUr56BLxOUK4EUeiO0gfxtODLZGrPrO7Y3MyEuSKfP2CrFrKBOcgqEbvuMo7o6ufKG40gK4erB%2B8g4SKvcfEbc0xPvGqROVHXhdEDMIUYVZaGDKBBTWweSuMOfo5bwGOqUBhdAV1vXgJLhmz7nCvaOAPfgYeVy%2FoWSu2xbqxZeW83C8QSssUqUdxywe3fnDQQrrtuCtS9LxQkZoYlKhFMBb3AeumPwv%2ByOZgqF2ecqM5NV4XINGu823%2FvULBz501m6or3hHB%2Br80coZ05cbv5cjPQC8JphPuIOvJpRZYz1rG96LDmBLdBeBBItYfRU5InlioLvhoXSo8TmJgD8iFRo0HqQvepM3&X-Amz-Signature=bded5c0160bfdf3c9b2cf2e61410bc1194ec3a2fa558ff8bb4675c6e1def8ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
