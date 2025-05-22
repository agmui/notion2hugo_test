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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ONI2TP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIB4jf9twzjKgoubHsOxO56Dylvf7C0uU7AZFgqzC1OCBAiBJDVNK8zatfNbhp9AFk3UPFQyZh5ILGbohHhIV8zTUViqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWNajNMiC4urScCwYKtwDKsTVDMb9fWGl9reYaLvzEY%2Bxy0CWeTbKfCC8r4lanYOeA1fBGtLKpeXyBtszbuisHdy3Am%2FVT0ruo0maq3X5sXOw9ZaQIliUuzxhYwnU1yH407mj4CRryx5VXRdrNWPeJqu2MIA5pqnTEyd47vmPiGtMy0sfLNux4wVUgFDu3XIcD6dWr1vbcWTeZQUnwYSC22LpLMvPgPMBMyiq32IDQjYbnORreCynyeIHREhS4SgrgS%2FoYQ%2Fg4x1bF0%2F4Zh%2F4nuh2N3HIjUu9L0Ud3Nq1sAeCuwt%2FdmBBDJyKFjxPbpGpi2bV2hbsWEZDgNcQTYLrCuMYDz5q0pNj8zotmFkxKiYoG3R6uk2kHVh7z3wa%2BrCmZGEYqCX9GTo%2B2ot%2BfwBM0dF%2FtHPqrtG%2Fe2Awk%2BB1GrCCTwSWxfkAoqdUGxEaHIOm2XDLMq7R%2FDrR5H8RSbGyv7LAAHLpVe7oSETnPaRvfQrqnKqDedvWW5rPT8AqbrK6fIsM2iJud5njOtapCeNCvVR1VxRl3btRypFRyQr14hkUJw7TbD6WIXcANqwgKxlOobJlwyX%2FbfL8YzDg1ThUS8SlqMpCzeAWiicml6pjO08QwnLZsPvudjri8W33aEYCME%2BjfDTTj2YNB7UwoJK8wQY6pgEVsG52%2FxmWjxTuxCHZX4F%2FDKdStOIdorqWJZmBJ0WQO%2BE%2FKwazqS%2FhMBJXVzOePfMLwcQGImvN2e5trFSEDticbFFSlYMNK5dy9xlbNb2xxFni0SuUK1KdH7Xu2f%2FmU8PCZ6oAYUDWTVKx6g9OPLvisJ0YhO%2FCOm49AmJu5%2FdLwwDUp7dohDG7WySzYlX4ZfdkjaRWRjvG12mvHKtBNaDsIjVB5aDy&X-Amz-Signature=f07fde4dfec282c0cdf18c4c201b1b870e0d9183ae439973ad69afd548a7e553&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPKHTDV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID2228%2BwKEseGnFYCkGaoxJ%2FwcCDUre%2BIvcI9ARH%2BUTWAiEAuWMtZbsUzPCFLXjlYXsZhVfFXPU%2FiinyPh%2FlltMbuXAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmDp7d1a9GCtIip6CrcA%2BEC5HPTVkawgoslm9bnrI5qC3o45MGGkESMMkiLCKoSTh09q09sJ9tYm1Md9YpjepgRg%2FrQ7jFNiWN7vKoKoiJ%2Be7EeSYnP0lzZWbVWP6BjjcZczF9gOsq2Wv3%2B5IO4RDTRp2LIWh01axY1s01eWNXgWBCLhkjyftLDrnSUkxp4bmK4zsmBJFPSP2DOdHyP5g8%2BOnLhlJ%2BPzXtaV46aYQqeUTgpqaHc9R8fhvKogBwOX18eNFc7AgfChfnT4Fq1PZIdqgAX3h7ZIE%2BJX1k%2Fi2DzTGwhfNgtBSTDkwV8tvH85YXCkjnsNcwPqAkSKWbKP6il0oZKjpDBSF117Gmdq1qHBMiwkN9NVNmz8rpPv5y73GIeMzu2g7PK2gX939FzpyG4H3Cx3L%2Fr9r98D7P0pJyK%2BAQ4YyVFJJxWgSntvYnSN0OTO%2FbjzCmzb%2B4LVcDl3yQgdRFVeQFdVVXnQTfzpoxnOTmJXtmsikLvDh6KIQfyjKAgMyuppfyxmiL%2FPVDHbuKlBR709BJ7azQ%2B3UNk%2FQchaE%2FAm6iU1PzWsk8d%2B5LKSxN30CaSAaznBpuNo6kHnV0atrIbamZSJX41CP7L%2FZhyu%2F59vO61DV3GJEnCQI1OKqKBeTqYYavMcSdTMMyRvMEGOqUBZEZOL53nf9l5%2F8Ok167EoFp%2FiU0nRTE%2BVUptudAe%2B2Hss0JJLigVqzKaxFEGqYXglhSf%2B8OBRvLjdG44ywkrAqzXA0naOgxXcOjX%2F6CDMNZbjATd9j%2FHnHLn%2BfdmJJZjUF4WcKGmrwf7Pu1IPcylSgDNS2qi55X5%2FxjWMGtZkSnqGCcUQfDw7d8i9Pm6r4gPnav0ybSG0SKjsb%2FaW%2BIijCMw2jgI&X-Amz-Signature=d42cc05653f95f6d6bacdbc48e44a0b55fb80bca318f24a92d54e87953f9c9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
