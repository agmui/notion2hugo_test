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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P5BZF3T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPgfupLJ%2B4ckPa17aWMc37zkWNardfFEmvhLqkw7td9AiBZp9ozQZWj0MNwKONfcQNCEj5ogNsB5g7DOI%2Fwn0QwayqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAyuT2bMKLiGFS9fgKtwDnPA4noCPrRzb2I6qiPuI%2BsQil1DZuYhJoCmpdG%2B1BA17HbIONLiyLT9WO51ZG1V0lW7ZcB89spi4mGCRKcheUaQbA7dpjNTuJ8udL4GkPH7VBkmYzXi1HSpuHIJLmJBPSIMozcSFJplm6br6HpgyFXBzZ%2FSlrs3PLlBgZ3L1gEsWMn%2F%2F2BLY06v9d8u%2FAnXtlS3H1fYFqf2VEhYD%2BJHApWFwJEv0qsyA5AfFhIp%2BD2J6MEkvJRp1U4FH%2Fm8tTyJPfG2Jlk7yvMuJvxkwjLKcY14yUqgbdJsIvlwXHa8ne2JRtGMSy54uPF5zZCLxZmAMIUdXDI3jZ5r18qacoKfM8BbtzE4JtnL0ACHWy9G9gfhI0sARXQ7edYoRYTPz5HMdDcZD1l%2BM9oTu17J9oBLqRRSm4kvW%2B2%2BoovfKKh%2FRHDI7hMtlhIjW9LS2XBWle5SyYiM1VWTvaehJeX6vDy2dvstyyMDlDE1nYq5kUlc2CkUEpyIzyvhOdNYFD4SFGruw%2FmDSeaPdFO9btqHcT3MJq%2Fn9q2HSNzbyQX%2FsFVlHOhsxVyBN5alz3yb%2FOWCijKYaF0Kf1Rv7NL5i6lO4x89GEf4Y6iD8uqFrsfvykHV1p%2BXrqgdt3I32LNXwtkcw%2FrnyvAY6pgGK0eLzGU4PN%2Bl9BQIqSQfH7O%2BEalm4oRcNVJkzVU8kslbPBuiHr%2Bmr22dMxAWvN9fyBU6GH0Snn77kLal2IBWD7%2FBbfv3xUWZCxY3Zy5H8Mn%2FOvcSARgfN%2B%2B1udiTdwK49mfhO%2Bpk2Zww%2Fb3HRg6bL9g2BDTZRPfaDhbs%2FwyZTD9XRZTPPWDjPHLIIrfRPuqQ1mivChglFGjP4PBz5etdhOISwD6y5&X-Amz-Signature=a335fb186ab2e844efe06316a1fbce400601f537de849551dcd727db10998e70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5DNLEX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BlB9OeuBS2P0dt3iQYoR7k3ZMDuBAFaxPveEo9aSCuAIhAPSOLtLBY1x9P4bmvB5X%2FYo6nSefIi217nqjIdR96%2FiTKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5PMAiLKqjRYVKTAsq3AP2mkhLhRAghYuUlbp1npl4OeMqonjTYBn3I0sET1enTJgvsrW%2FmNn1%2BZSVf5z8qeU0isiAYNWVPPbt7xLAMhg7%2FmETup6icaTmODwh%2FPWGPfTeenaVR%2F6net0yfHg38tGOgFoHNDyae2IRlRHcdU5%2BntBEjxuPSDbfKOEJ2LfgmnHGbHDy3q7leCt3HRG1fifUDL%2BWgy46AEenPsZ9wL5JTJkKwxYAmpsTXirIwsChKu%2BHAqqXt9lP1rFTSUjhTlVhKqPyfHpVf05bfdwxNr6oVW93hGhIg75AV2lqBDenO8Nidj%2BFLVjF3eQ16FBYmLt5nepAEvQzlB3%2BS%2FoM17XcbF8FST11sPo02JFc%2FXpod9QFYA0ne9EGK%2FJLGYuwV4js1uJ3fHtpQ0BLxW1omPeXkhBfCMhchDEaAOb1myxVdLiOoKZIYhEHtbSBlWxXXnmDo54lhGfa%2FxhHE9vhB7xbJQOXksT12tIagB6Uvf16wCJvbMJTWy8l1dnr01fJek9nVYIltiOqI1TQQiBBLX%2FIgAg%2B2YDS3SKXp7Og61%2FB9nUbKwjgKqpYKSCQpccOC4QtRCzY%2BXbckWRFUhe3gyd%2FmNetUiYUj0P1hJwct1PDEsbULCdSKRC3HOLmRDDkuPK8BjqkATF6GUQxn5mAJFf20ngWYbuU8ozPnWctYRma%2Bg%2B95iV1Lv2enKKiHMS1tUaeQI55a%2BNKvM7l%2BdTg3O3iCY0ysldmiZltTOOdZAdIIvnOTfm2N7fFUGwReuamk%2BJFoKuOElJmWZ5MVAjZJLIIaPkCoCkkW6x%2F7nCArklRn%2BXTzgihSzg8ddv97WNnY1IqSGJ3v3lpCpdT8mskC9R61F5Fr2IOLaov&X-Amz-Signature=d8b81649ee09c0fb80685b3dd9200e9d49fccddfbdd197d1f74932eccb3506a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
