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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKWRR3T%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDl2P3RPQqhFU8IhxHP01n8JqSa6IRP6NE5JllsLFR6twIhALyQ5xMpavBq10WBifZaJkVZ58CoimJOcV%2BT4zUN7Go8KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfTBFAZoH25mKGaVEq3ANLYxglgAV1AHsd4QQgte8wSuHB6Mw2saHRU8bINVxRi0z0aUg9ngQ1ZPahALraa4jjFJmSMrfjG%2FzoSEKwQJ%2FbPecIYb1UrwTjdbc7zV9HspKZa29OWmb1A5QiwCaS5KiS%2F4WpLDwPY%2FmEsXtGqPpqF4uoIkCppZ5iBXQB3QHFfqZNAvE0WAmezf9mmvidbwWJ%2FAtEysu0nGEqhbhIY%2FlxXseAv6Dy%2B9fNw6y0NZ1aBwCm%2BtHTH3%2Fn4umfQx3I61RaBMgd%2FWUMzQdGaQjiSWVetpSAAzkchsRnhSP6XdCJMOKiphjbwo8n7SP%2FNJO05exnFDIyocVDINyLwYrf4OqO8j1CBublaYBq0iyH8jcd%2F4Ug6S5DhMpOYmlj2C5V935rVeVShaGyHaOz0imhvlJtMUKzGCvWUXebZKPB5bhf7oI5EVBJirLsiqDUvQY3%2BYjWLvwOaYWUg1T3iashr7CR45g%2F5%2F0iUOU%2F8CPMhNob16i08F4%2F5TilahCXzSHyTknzF9F98QGlAoYA%2B7PPAfLES3MmJWThmRumTQmV0R2F3uQiBzBj9BlK8TVfUxDHm6Qx%2FkI3kgvqknr6wtU1kpiZ%2B%2FVLW%2B9oEtHC97v%2F%2FdL75BWA5BlvtzZV7dJHBzCD8KO%2FBjqkAWLy52tHNexjWMzGAPfVN18SnGNZ2Reifr3dH8gy7f8J9RDOiW7uB5nuReqjzrH6Ob8XohOuQSiiVXNdIIVeCNe%2FUmaA7VBNndBrwqph8noHf4kdDRKgBg8lYzTP84nOvGfMVoEJGnM%2F7kMsuSVR4%2FlRuLSPyIJBkT9dQOwz1yA4yd5FajYw5Bowh8esvngyF25mHXBSkv0KqNzvnli4x2xGLjC8&X-Amz-Signature=b3d63a2892f68bc6591980915ed459889544603a5ac2e778e65b21c50738aa52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCA4ZMQH%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD3BY%2Ft7JWiFrvlcoECoYD0kcpE%2FewlvgZnfwYCvfrXCgIgBPnT3giSAoC96JQ%2BjZHlfv62AqJY7Jf2rC%2FE5VOEE1IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPLyDslIczh9VG4jlSrcA1MnVPn4f2FZWZpbvqOJQffitZIwMPhRvIKhS7paS6tceye9XFZTHl4cSan%2FHDcq8PPKQGUOaaZ44Yyd%2BjU%2BGNfvXrv%2FyZrbvjrLpCQzBGdsoP6wkPyoEnfKsCLuYrdfc3AIIc6QrX3aZrEnIcTI6klBG97vg3%2But4uR%2FbRjOcJWVhPTCxty%2BvLHEPcDUe%2FuV%2Bbd7wLOBkTPwDuI2kp%2Fw36IEfHUGOvERN4AEM3DHOaZ5zIPBr6qYLxjZOxfTxrT2%2BWe0JACH0B30LJdoM%2Fp2m9r%2BUXV5wWE9%2B9j7veZfEK2vHkJwbR5a5xS%2FkYDAKzlPfTdISGHt8dlnfYG7azJdNqcVcSkFVjcbVkg%2FiAd%2FuP09S5BP5vjhRXLCc2S%2BRpbrs%2FExbio4M%2BTUmEhAKWEZZogY0sNwYbZpnm9QGHWYN%2Bunbw%2Bv9X0joDl38XEcjfgVGCDTkdgAnRm4MphM1RFugpWQ%2FNrkfSGyF7p8H0tLciXpuPrb6%2FBF6kgbwUG3taBm0QgLlpUMA1S%2BA3QRl%2BZuSZdNa0ZeCsOOTQlnbRvV7pxlGtJi0XmmlIxVczSrjpz%2FuPA4MMym%2B28EVihE7TW0FoxjSJ2V8FegTVUEr3lwvP9JI%2Fx6ahyT1pAR7v3MLnvo78GOqUBC%2FqKvf6FU9q%2FcHUaYIb6wWjSjHN5FlHoLgRIVbNqWEhr22V2OXmlJjsE6L7yP2S9%2BZTb%2FS2h%2BTBOzfDkSWmfRP0MmZZYzTd3H0ODJeBNJsd%2BDaPvVLoPw%2Bfnyapk4CLkUoojlxJxSXgwNME%2Bf7KeuwAVvUrvTJrU6fEZn5SiLSrpgmnynX%2F64jPE8jsnmAQbQK7Q7mbvVZOIiYfjeFp2DsbN%2BCPu&X-Amz-Signature=af263194f1466b140b7aefa346a23a96643f4528e0e8217eb254830df6675026&X-Amz-SignedHeaders=host&x-id=GetObject)

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
