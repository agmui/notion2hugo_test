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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOSK42G%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIE7kfW3vh%2FHttqsId0hqDZgIUx0%2B80iHabBauy7aurrKAiA4DEYOUDU0BU5m%2ByEuxTQY0FY1CugfRG7yc920d3oPpSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMTriVKZzehKJR1KjVKtwDn9OQ76sUQG%2BoyZkp7LvFZKG9lTvqc2LrE%2BSxMIEw6mMPovR5hXCONPIrFMpvUr6RCssbp0f%2FZH9Q%2B7lJQdZmjetHlo2tmG9OXB8m5OYT0e4dm%2FD5ehAVqv60dsAUPDv0%2FpO3exR0dcS%2BL6133TauGiKixoQXbg3%2FB9PPlRMKP8C20Mcs4nYQp%2FVWIm5467DMWC8xjAxPjFtngdm31%2FBywYBaAzST935aeqljA9%2BwZKAaO03IaUq8qVMgLIVAQxaEws3on8gR5lzgWrWKWA0BF4qElSHmj4HmR3vlRl2Vlq23VFd5BQnnYatZC4UgpUYq0Cao04%2BuklNmF1ZID9j4Oz5zJyPEGkywgC4%2FFdjnaWtxbCNIgfSe2%2Fwj2NwAVimkey%2FXVKA85K7t2T9W7qATq1RJxL8dMizr8sTAY6y4b746d4b3njBCkgjjEzNIuq9R7PBWos1MSCtsmTlbI%2BWHMlo95WeB7DH3t%2FNJ6qMaaZ00Sp7ufAtGYB4tSbmsuFJqfVER27fLXX%2FML2jx%2BvBAo4GSC7qJ7igXL0u4kJ5DgQ5pdlReqTOuA7vgcdxHWyx5kyfm8kEjmkuja8yMnoOCOkhESRVotwS3%2FtdSqhwyt1Alj8GVXk%2BviHt%2BDyAwoMTFvQY6pgH3pNZhY5UcIzuHGTVTb3E5vVHd9PWVE3GYMKGh80MuGrDtr8g7wrf8WJ%2BtUyRSF9Es%2F9DyL%2FRPplsA5cgM4evZuXav2q1HkSuzhWDM7VyXEBepaTffsNBA3Fdg1xfLWPXj%2FRutgMzIaVBQ2sK9AmWw6WKUl1YeoU9kwaTtu4uCzzTQ1uDRhWab0OR%2Fxezu7Pk5ufmq3YjLXUrA60mgGJQfqsUnEcDu&X-Amz-Signature=f794e3703361557e9d9b1652b72099e0bcf2c1fe3322acd985f433c15f145be1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGN7I3IG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFBHKjsHnnhf6on2vYJwA%2BT6JzezMMAIegzMFW4TbS2UAiEAl46GAufST29Jtw18dFJ%2Fxq84DmQbsACBd9gbO4LeZ14q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJvl9dU2dhvg%2FbrShyrcA%2FHaVxGy%2FRNbToj2RlZdSH6uIN2fi6gzVLIN4tDDjXXb3Sb138G4v01JNroWWeqLDmh6uQrE97gZboWuunhD9gdllJ1iQUENDDugOH5HN8pz4NkDsnVLx8v7hXlmnmk55qXyKbTzfvkIEN43B8dc4%2BcBZnuRaikuggTn8TJVy5xlSIVdykZGY28YYFOOW1aEjjyj6Qe%2FoK0ZL%2FBvwuK3qMlg36VFEUx%2Fh440%2BIHaCswnjY21m4%2BSzlp6nk3nVF4Kq1rW8tLuwlQOSXs3i4JL6AhecV4%2BJPUu1WpmC4Qm9YXP613vaWNF%2BPuCxS5BOcogdLg%2FNK5hJv06iEK6KT3Hz%2FRbgSaMtzsUgeDIVSEehJhCtfY3Osy385WL8%2FHJKYG1ZTK%2BrHQ8MZJBfLM4wy4NWV9XM4tVStG5njjSAgzT4Dyfvq809UaH0UkiJ2SSpfIvljoxEG4N9svr8cmJwVzgFZdZ5l30WvcAJGLY1kG24jeC3KBW%2FTzWRCqu2ERXEeKAdHeh5WCwc8eOOg%2FDTHyD41EK46bP4%2F8xyQjPMK1PYRVoaEfpmM7Lx5ikZlpTF1hmiRGBF8l2TEJSBweF10xtTKeCntCXNuP3JFQETGaS0C0Kfq%2F%2FcsZ9VoJT0hnCMLXExb0GOqUBTg4ZKwe3az9%2BSkVyZrJ%2FZmdVdycvyM2g2PYaWX58wwinmivQPtnN8EL74fkRkBXcAVDKo6x9AdellZZORUq0t%2BZkxeKk0WaiaKByYCe%2Bg3%2F8PdcTJz16nu0DKuHEJqIqcKbZehsPVeuhvTJzS6U9rpyyveM1YxJe2mNkatKtLzuC1721SdMVE%2FYz6o4jWyTI353fXuZWNExCM1BiirzkEiXAcy7a&X-Amz-Signature=a78446417181d0d6c66f37219a0c79a3df48c61b5a94a26ca496789a5c19011e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
