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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L4MJQSI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtz670oBgji341LW67BjPNly%2FraujrkPRylPMkpKXV%2BAIgFmJkLkugUe3fb%2Bd5myuch%2FZdL6jaeBNCO8Fzo2LmqVgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwhsqcDiCvaD7g0aircA%2F%2BAdY9j3ARkw5za8qbizWY6dL6Jy1T%2Bi4%2FH8PJfrvbQOhWN9Md3fx6qffAfZhHNgA%2B3zSMlT0Mv7IUTAmbuZe6hYeX%2F%2Bjlr1HOT4aSC80NlPsw7sA0GFk72djjf%2F7wp2CALRuu7L69QhQZUEtcdnNHm0ZWvTD5qrrVAi0vwXP7xCbVSzmp1ZqlikpuvLRx5%2Fwma4a8epyfHPM6XlNuRu1vfSfCUFWzV15wLjncK5ftH1qbarRorpVwmcdYVXEF9xdEj00MVNkpXOP9sJGzXpsWs2eTri%2FwM8bXpFKkpGiyFy3lvnSCm3Mnw4UB8cTJqVEKdRZP7FRYzLlSOAZbgq1Iyvm1eltwiybVAuNrLsgVIZ334YHki10yeFOLKMmNCqpq%2BVGVWhn225LT6%2BnDfEbnVcTx%2Bfy5jC52n6uftfTikS8Q3Sz7ZtWN5FMpGgyIIib%2FE5mVRkeFx4H%2Bz456afootZlz2ozgOBGGQW8oX8Yqr3429ULWCcMktpHAVPcDGwKGCtvqbF4bOon4Ncx7YAyUSNPmu7IAW73kVuhZByXkaXjkQwdhkgI21LkDsXc%2FyILIQV5kE8Cd4MFDM9W8RSk80pdAj4GwFrFIBKbvzNsj7ipLz%2F6en5%2FS4%2F41IMJm%2F4sQGOqUBQ9LGVD265E72lfrHMs1md7vqFlqWJ7IjiqolHgHjPnY2ZwJcNmQW1%2FRCxPawFpJQ3cjoBYqfWZK4jwBP1FxI5%2FSS5utUUb2lMeOC0%2FEMzfG19WC52%2BN2u5t%2FsSd5X7vvvH%2FBewdP8e9UUDr6xS9iqv0%2F1gkDV8QSqDCWte7%2F2h0WJzsO547c%2BNRGZ3lmyc7P1POqRAIyjCGlseL3pC%2B9Gc5panp3&X-Amz-Signature=05261a7a0bba088db8844ec1fdd79217680da948b93e654f82ff40ea3cb3fb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGFXQIE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrnreS6MbTVqt%2FW5oy0Dv9WK23fWEb79LwOQjG0AI2wAiAbV%2FzK3r5Nw12soaK3a%2FKjzsgwsnYT5eV%2BDJdC%2F9jRSiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt0rdoCP8SOg57aZAKtwDQ%2B2tjStesxfeAlw0jPjgm7wHjThQdNKffVLbuEM2PZDnPmSdGIvRth30ZgXCti2ujP4nvn4KzUNQqkgeoix1ozWRJnErcu%2F2yK%2BDyqcJnMbPzLqUXrMwmWMNsLcIm1PzVnMLCyyi4GNeB%2FIjhnuPM7er%2BzIlvwLEtmxdInDxETMI8uJCsazKPPWlevXISlV%2FVaf0DxKzz07A0PbGZhiE%2FVusU79m1JXdxHFlbOM1OzQGQXebBjSBUTzZVlGf48VKJx2L3NRB6K80NpwpemGJAv29731lrbw2aBowdGQdem7xHa1hW56BYDNFGUAtfMaFEbT9n746dOvFKZw7PyAqc0XM4PHBvHcYX%2BKyRor3zTrLrVPOubBJnTYiH60ppymoay0Ry6m8KHQrrryXe8NsKXHg1V2gSVU%2BaY04I1qyyZMyINOVeQXrVhxTTyCuM7l6I1tgbJWPnc3EMM7h0Z%2BmrYDUNpuoOimrs84kOTmyceKyKI%2FQ29cyILyEtFcR2hKm2zzQPQCbf2mc7sHuRyL5umOINNRKxYYDUr1Qlvl25ptNYFs3lbkUrqJevK0Tww62cdxmf%2F7Vifb5y0aJXbHQUGsHGkp95EcvNlO8Jrx6Z6%2Ff1mjUD50HBAuEyQAw277ixAY6pgHCcGXozaL6yhmaQ7DQm%2By5BVuHbQflJLjVPuAW3G9EKtwXUUDCIsIjto5wS86QsPhlOgmsawpXH5IxRHCuYbqZJz65pbaZOjCvbtIZa1sFGCu4WZRj6QLjFZB4ZNFFtQbLayYyK19Tc1ac%2BsmODWWPKPz1CzXcjXZR2KGQPPKni%2BmujI%2FbmKd%2B79afnCeBMVGcOfHXig3qlwN4maT2KZxHNaSsDfEL&X-Amz-Signature=bf24b8be982bc2737cdb616a7dfef1bb488d9c13c472dec2df6df9b90d057ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
