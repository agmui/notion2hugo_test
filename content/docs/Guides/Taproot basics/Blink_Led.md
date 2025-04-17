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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LUGBFXN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEd3JzYrOEuO38TboyvoGX2555PdtNBcFwNaC%2FniOlrGAiEA8gOigyn4wsZfxGEHqJFZM%2BkhHDBXTs%2F9AxKM2fQH8lgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFKec09seKtebXMl%2BircA%2BsRjZzOo7fSFibOmGFPVrhyBUBlTU5WmslNKUVvDk1VjCFWs6Sq0VAzelCmIfKicAPhe9%2Bpwzve381zScOO9x%2BNpe142qATxyqJ35G9vQJoJ54Aw67n39i%2FQO4mdLW6y%2F3%2BLCl%2BRvUDaAc%2BnqGLWEGAIsnOf6F46AtGK%2BNycIJaXhy8qBVhtNoEuzkFeir8brZASJ1spDT8MNOnboLZARt8raGqiU1DDq6flrPs8KXIzzIo9mpUPFieoZMQOMvG%2FkHmlS%2BihGOIhMGi38ePFRmor%2F8nU5FDxNIv9B8vb88wlD3Woq7DWZj55SFxXXlcc8FHbDR4zjdkgoSkpSUHlhccCmnaGBkpuhFFKh0vok1IhGczddgE3V%2BKkz9a61u2k7F9RH7VwjGD4rKChKPT%2FW4pNTByMHTW5XFCPXztCx5zXov3NQpXFZnTMS%2BwGIG53E32z6d3KLTzd4ALP5H%2BBIwhwSZDUWoVaLD629clgiR5kgo4Y8mRSIIM1Bd2bPx%2BG6BbVTN4C1I8%2FF1x0LybskNBg2xiBz0aBvT86OOOfUXZLyNnyb39FDmPJ6gBKfbU%2Fouvc9vD%2FZp4EuCtstiXPmwpljyuEtfCPzcBMxn%2BjhM54hNUQtMsH6x2W6IVMMyvhMAGOqUBXRJ1qJhFw3S4nX1%2BcnxjHYMbHhfWBXgAZ5%2Blkc4mxOfA6ul4VOy2KrE3iMit6GqJm2igYGRTlvRUGh70v6dy0A0FRXTrfiTxPVEYk0hl2P0zFXs01vm%2BL8AlOF%2BH1fZKgpbhDUN9zuhUhSjxOX%2FKYfZ9btF%2FPry%2Fs6QvMcZjFEJDNQig9j5BFMqIml9Wub14OWfFc61eyJrk1t%2Fq29J4qNFA4m%2Fm&X-Amz-Signature=395ebcfed9e1bf920f7ef3a44162838f80ff2d9696d66d4143a69bd076866a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMW5XACB%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAq3gON0sT4x5NUZWVS8eYfRO33i5lIQPBofgouyZnUgIgAUX70JXWd8d6HDsyBkf1zvLgzt3pvhLGZ%2BoApQWDqvMq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKjlRp3AceIGsr3MNircA0sPBtlbeascaIL10Z2iKXelSJ%2BYIYVBldpOHiZRSztFulXOkEIwt2dT32I3JGMbqQcHTs1g%2FMHyRKJsPPRrLyEG08dyIC4AbBREuG%2BXxpB91lJ0O1tStodWulcY2CrnmOyGlTRdB5o%2ByuvtTtahxXSxNy5FY1WyB4OMPNmhY0jN8G4syR5EbpllMo8620OO4BrIeEgHRQ%2FCfIS%2FvJC0ztfkk73mvkWQkTjjH65j2VoPDov9GuNAYV6r0AJ2BBVJYz%2FBmIfTxVWthZx2lVlFNaQ9IDTMw53pE6WQuMPBq2SJNLTwJkWgJBY4i34gu8VC5B1BSKbEuMlxCzCyCnW07U4Qrud1SvNCZNn%2BQJfs%2BnIYWwRpD1IXhFqyX9cuV54U%2BlmF8WkDnjmcqdoaCdZ%2F2GqEsDle%2FaaiUhxNWMsgOQVZTiZCZTUicSjtmsUevvOfbD8Up7Iuh2CjIo%2FvvmeKJ2xVp4CikD70pOd7%2FkQsm17w%2BHi3GUWGHOTHwiDR%2BSVpvA9Z%2FjFwcD5bYA%2FhuJyL3IfXnjHMs8mINQA8NdMsoUqPYAmZGFPbvSXSH%2FORYf3r8Q2mTNe1z6cHHNhihyXBGs3UGrQaxquIuHyZcoru6Jf63nF68fQZ4OaMKj1fMKevhMAGOqUBhiRNZcdTsIEDVpBAL%2B74wxIcdYYWDatVaNh5hjtCnQi0NRpzht76ZJkuXv8V7GLGkjMUz8Oe%2FQAFUEHikfvtGpssJ8fna8YCQMb6WbvGXXWa0gfoe0D8lCiH3RC2I7FPG5qKnYTueoWUDhfYOwPvhYzaiA0mKcmHLKn61OETQtle%2Fz%2B%2FCGQHUXXDjjYoRoey09FvWwyN%2BXdH6bVfvaHNh7So5et9&X-Amz-Signature=51752d24fb5fb12b929b73b9308211ff7fe30697a9110a5294268364f04e9430&X-Amz-SignedHeaders=host&x-id=GetObject)

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
