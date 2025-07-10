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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY2GUV7E%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAO7VgHbSwt6%2BWQG9gIkUIl1nxrCgsiMjI6B8k4vOjJAiEArC6SzeUSoSzig04yIuSaK5pHZSkaU3nqRMaZ0NOtNmEqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5jXVFbV5TUwLC8gSrcAwQYLkAN7lo9pfaGcYeHoWjm7uCqM%2BwlMynzNcinPVyXFs2H56x7AoYFrzDpcUQjzfwLCKhKocultSocLDbdAipdkLcethXW9XClc9zoNr8urabkrsZCRf419Loq5vPhWVdUIOo7wdmBf9VEk6Dnk%2BpIx3gowpEwrTpOM4ix4Tsuh6%2Bpy7F26DXGjAl1dwPjKRghY0tP4MNL6njleHzSoWadzlRI3YMwgpaYNVDzaP%2BKDgM4xwmBAvCPb7VkBEDp33umWBedAfNAQUNiwwS5aQwRkBTStZTk%2FkrRJ%2BoS6a2NUPNYztFmxb%2BuXnPYqSRTH3%2FsdOMH8JKDXRWRCOI90iagLQxGRQ4WHA8J56ajYmDuPKvx7dnpwqpHP10tWpl00aMoy7JiPyNomEF2PV4MKFw%2BvIBLWHsL047VOIFU4zWos9mwDmK2mzdpasfmtfVohZ0NgiWAN6amPW7TV8U1%2FnsG1bDdSQcreHq57OR%2BWXs9W%2Fu4hrZt8XlDvuFlurtQrUN1HA7lnGnH30oj1Ot9xc8Q4l8lGe3qgmPoCjigvJzXD0dvS4yAD1bZsTfCxQEcB8Y%2FtfFw2y2oryy64%2BGjHAtCxnbLKx4qWHHaomprAP4wWLxYIDsBjQekiKEzMMP9vsMGOqUB1lJKGXldLG7UQ%2BHsA%2FwgY7Ovxpn8lWu1P%2FBRI%2BPA0t9TmGlI2oDeXYT%2Fv2EVMXY1W5qdgqxdb7ZpMfTEr%2F%2FGdtfqjodvvfRb6kLywaV5DezF38cDiTfn4nbElsJ1FfMrRIaZkXQomn80KtTgo4usGoGBXfCqhm45MTuCO1mkl027j%2Fm1kIi5ZYu916UgUiVYtrYr3Qbvh6%2FYSOfNoZGH9npFjSVY&X-Amz-Signature=e98027bafbdb23ccd85f454201d0e3a5ccfad0d3aaa3b0ccf83bf8eefb526098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDT5XUTG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T132652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlCG%2BXx%2Fq99bzDhLemYJp1%2Bk4OYu4NlFjI0GDbCLxQBAiAPn0d5x2BekFCjgZ70rZbHzmS2GA56yXv6I87xKuy22iqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrhv1L%2BdefBefIp90KtwD7wQgAKpt%2FGN5qk%2Fvd%2Bby3tCkxDrh504clJRPZwXTUFlNqHEj2GUKoG5RQIZf%2BJ6KpH0IULSaMviAb5D0fHdeEhNk4yKM4n16cJxDl%2F6TFbVJN6I2RP11u%2FK3D12QjegD38FVHVxwFAXT4WC6TolfoshoX3m3Azys%2BFgsUNmvJYvLw8FTfC3WhBhWD0HCyVRibZZuQ7CavAbLjPwB5Tjt8h5qO0c7d6NIWCOPuijNIR%2B1g7nVmorzzxjQb%2BPzZJfEX2TgAEBOSxG97EPcdE9yhfb2SykybjBp6wr1fUD%2FtrhF58dlPLeAOCm%2FfmVWfAwckiL%2FmwJw1yFCDAzEIrupnvZmS1nfN1cL6XF7Lg6KaN%2Bet3dwFEe%2B8I3mqcqBnk%2FciImWQkFyXNZJC1Eap5HwMiH4MtUKiRXZ7czHo2fWix10xF5fTgeA1oTqF8jXNjUbbBQhPrnOPbtQwqzWC%2B5rlEnfdXLPzejzRUlkMkD7YdP8krHd1zFnTt0c%2F9dgBxgAvynwqylyOAMz8NAzhjjp6UEcMmuiHn2gNJh8dyYZbaMYTCUe%2BVSRTSuD4kDRvSzTSiU51m7QohX7xHLii%2BDZQA7jLApOoBhghmiAcJtpzM6M6wDkqrQXHQM9P0swmP6%2BwwY6pgHEPJI1u%2FzMiJDX62Mg7gaTOuoROIk7dcgUjsWV6%2BwOfry0BHvmmU%2ByVzXlan3ELEq9TJgJBRUq%2Fofvsy86zh%2FYSWxsFIwHPYb4Y%2BTS%2FjNBho7wblkOVcwcEmBaD5xJus%2FgnPkCr0Y01jd2z7T1dQPQoS6lWiolLNpPsE9RWPZGvsQDiqi7HvXhXOSgioIyc4WMuo7PSgw8KoYUkUQkbtiWgQsjlKvm&X-Amz-Signature=3e1ab5d548eb93e5672577aa16bf70fab3fb46a4c139dd2cb5690eb2cddbf136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
