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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BRT7H2C%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIE%2BW6o9JP4Kb1Aky264SwDps0FRrER9jG85Mv2oin32YAiEAha%2BLsIkx6Zk%2Fm7wgoLIbxNXpuroBi2t6kwYH3op1%2FYsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNBVChRd%2FQLT30jFpyrcA8oYbJFGJYlpWdgqIXQvkCIDGMSCJopYtkM8Sq5LQiVGAhbJm7CNOkVFMvLT5zDbnmUJmuB5EGnCYpbkS%2BRHUwDZM71TcYwaEMrbNaSl345uhhtxr2dzAMH3n27WHKErFdtqvuXIoss4NULkRIkaS3Bul0WQZ%2FsG1akjrEJPrnm5a5LPVHoFlCLkCr%2FlOYLVXZQxGO2hQ94RkEvtnQkBhUqmco4rUWgbauiJSyILwt3VYc0cvK9B1ZiRtEt%2BAPwz5SeQuRRnDoBYV64C8OU2R0qooNcxvEN6MPBjGBuXEYpwzU1HdzPEWzLI6ywcZ6srJLE7Fx%2BJC%2F8B0RjT5lTUcZQslTa6hDkgLCsO20S6lJShFe8RciTEZnO22X5LmoBQwR1MoSlTTI1pyPGqvJVJ5PQfXM7GU1EAwTdJQbC58eqO%2FwnePx8VxCeuDGgEB4vxkbQuQ%2BeucLqU38Q7mmAUAqjtGzyuB%2F%2FOTCs1al%2BOQnWRc6lT%2BXJQ%2F0pASypJljqt%2FFiPb%2BZti%2BpRWRomFFJJnddGy1ACLqpNe9lUT%2B0PnakknBkkcg9soboja92umAvo4I%2B9BGFsGklE4QH67h%2F8Vp8dCVL7s238%2BQsFtiemeNdrb53bH39yYJpXexkNMKukmsQGOqUBQW22PnqL0G%2Bn2bNbSqroRxvSN1%2FlroXsFQQRgYBkISOIa936AUrWkFayPKAFg8lcIO0XI%2FMicQTDQPHD0aB3RIKDruHo%2BFstlrnCDmBJu4ZDnTsps2fEWs4VFeN13klxmyeBJVhK%2BVk6sTSkTK158uYbeR3K2aDY59N%2FYkPhOBDiz1Ik1qUT8y4na1HXCV1azMem7UgWI0C8pvchjKYDNOOg8ReZ&X-Amz-Signature=444f7406cc922ccb3aad969509ed5c8b633761040f721c7a4e69c105ae72e9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVYSJPNB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIDlpiIuT3%2BvajfL8avnJRhKGN3giwfPnd0lYfS92DfrKAiBJVRwt10vhgyWPiVdVdmfTguTXfwXs2BYgH%2Bw4kBa7Syr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMlhy3iOXkhZ9pb0k1KtwDkHyoNfaaZ%2FBh%2B5oMjy0sTQvoCAMeVX0QyQ4Y2ar%2BdIFBV%2Fheq05U2GZ6f7PcVXQOjPtPKm8rEpHgzXJZwjWZly%2FO24aJq0M%2BsTgfEfGkm5uiDUagY15n2YI9exL5Doo2nKsiI16Amff9ZYh80BNT2hZzz7%2B1Jc8UKfLa76ecXWJ85r%2FH%2BirQrzFsmty7kUYEoj%2FmhMQh8nlVECmNEogWEsETy%2B1u56kQWpB%2F9ppJLhTBeE6yqeatVoIxB3CWq%2BR%2F%2FTGaPn4oqbGVsL9mC4VKBQrP3lMsKJzF29h6GTvbF%2F1FcxcrAxUrXBixD0RVz%2B7mmRgbdeSwKmzYXTkuEVVwaet6HsqIZsXAx%2BPCYxpsO3nYPzy026ydk6H3zOQVG66V0FGbA07Yl3dDvva67SsDjFHMfisGBwpGogn8LC9%2FIwHsFBxX3QLMGLVFwO16hCbrnFxcPkO73dDTY57aU%2FaPBsi5wHB%2BcH5qJQffQLn2ly%2FKB9eobnknmvmf4WhQwwJNlleYFZFpLNGnYx0Ml7TR1SBhmNMAJX1NioposwX1ooIsaFr6dxz%2BU84NsxNjG%2FH%2FWcQ1Co%2Bs9A624FlYMBVJEoM5%2BjF12Yo8yS%2Ffd3YYKKoMSpfb57WQ8DJ4MEcwiqSaxAY6pgEjXReZ8wBS979hj2qHaFGk2U%2BV3PFcTaSXla92SOI9cJ2xtmth7EnXLRmM2Sbq5dEGkvz9wi18mljjtv4lrhR44tV%2Bn6z1%2BK6ODWvhIGffJFJVBRJXrI%2FV66MD9%2FS4io%2FVr%2BlXcluIIKZ9AY7fX2aDUhARPDLvD2V%2BiRKolxrDqQKJubzRkGhJKcgAollMCYypgFoahd8NslaFVJAboMh2rtHEZJxG&X-Amz-Signature=21115cae0eeec798ee693bc68ec9b4c45c91e0d74ba046d0b5a927d1e5ba621a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
