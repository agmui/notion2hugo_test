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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWALFTGY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHYBYWO8Nzi8fWJX1%2FucGXBqgoJs%2BEPuiVct0j20osfPAiEAyRt7mjHaQaGlt8on%2BhWRFZjoJ%2B4YxYFWjiMkBVsZMHQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0qjvnV0aXn4dDizCrcAxlA7PEuzYJPXMQ8sLSlG9LF8suBk7EGi9GUlSuXuUji%2BY9F3NWKHZ6jkfdxGvxqA00a68o%2B9Y5FCaIVOFCAB81oguZMKz9LI6Pn6kDUMvedvfFIBpCI8Chkwnv1Eyi%2FoJreN4qTEHEtaE9pdA65zjn%2BG6k9na93GBF%2Bu6ORfOKasg4%2Bp%2BSzHNqzTlohbDfPP1NlCUVTUeaMf16sVmUGE5UFc3K29IAuCxCbsRf4gGB76Q%2FELOLT0AWjJPe0NjpVaSLoqI0OrSIItHMHIMlVHwV3FOfHHVbfyrHBihmujXILUfA%2By4EEXvWodpLViMPgoZu%2F1ngPBRcZL73dokjxnhM6KvCkShPRv4Kqehe9f7BIdrIp5vIvSUX%2F0GrlhYSDsNMnBr28UXzXCoRHd1Q4lyDfVWKChWcViMSG4CcW%2BvZWkERZ4AfpoP6qFO3wUhtzffaz2WJ47Y0Wi3TVtddaG4j4WD7Qs%2FcbQZsV3OiRwUJCkLhfBKPLKhjnaq6%2FOoMzEIc71YCAKI0gH48Gjan0snTR2eRIwlRcelQzL7EAdw%2Fkn7CrL5a2f3GQ%2FR2meHk9w5Ws98eaY%2FAnjTKKxSczoqIZejiT7Albm3yf5GpZNZHK5jmyLNRwyEI3%2FlWFMKmR4b8GOqUBTrFvKZoO%2FSQnjjB7IXFDfLv1y8L%2B3deJk3oU0i3h5itX6IUYQJ441allBtXCh8L9PpQ106%2B%2BQ9NvNMK%2BEQOiDyYYdY64F4KXCjPcpPAnGTisBCpg%2BrPJ9Bz1jcyw1WbS4RbDKm9FdKuemdkwClYH%2FGnMw7n7pB%2B86SZsxvnHqOGU%2BBkRJyoiXBaSgcAxXdhiTirqN9zVAi0cEOtbOfg8v0TR1CDr&X-Amz-Signature=7c441cfebc73165929d089d7b0283722551542c43a11bd6b9047fbeaaaef5b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FTVI3PR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDe4DL0196FWiVKbObDZA5dG%2BicqUxHSlFIm4%2FQukDFOAIgFdclSUoYca8XVFUApANeJOGJ3Yft%2FZK6DHfj9yyr3D4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU0qlDWMBHeoPgUnCrcAw4rRxUonPyom3kcfJURih62V1mbOgYg7XljbVQRgyfG6BW34KhzzdEVUxMr266wan6e%2BRwRtDiLuz%2FNpbkoixMsPIjfafdZhYZKH61TQvdqTYd%2B%2FFzuZnLRwtXiPyeDIyGpc%2BiJ%2Bx2HdRy%2Fqd8CuuY%2FsTRl%2FKE27B11kFqCWX91A8udCq%2FO68NU0S%2BhT2rFbnpFJqP1UuOhBtxlHgtJqAGWT7uTHQGLJwpDYDH22zpWLth3yTGD%2BN46O3YW9IhJx9qNKJHbeuQCnifEYGB9BVuCO3Jni8T2J47jrIFZV5tFTDyo3tpIjlW8KR3MJw6UGWbELx4W47tGWBmbkFoGPiB%2FBqKM1%2FADbxuFhdhMJbqqTlvwR%2BTT47lf3qF2IfXexY7bWPSNADX9GXiYyVNLlyh%2FPogGatBcrHTLcRqxEFuV1ZPLnoEeXSCBDArCoQmUuCH%2BTmc4OLNqdXtCDYSvgn8oJoU5qrEpgSYdE2sfcTOw26UNfJ4y%2FhgLjqipNMFje2Pg8VIIZbTazka2ATDp6N5E8Nteys0E1ZDEGByZdHKEZi52%2BL6JfrJOI83txdSx%2BveBE5oa5czLnJAEmJC0l%2B1f03%2BSJnMyj1gymatWIWx2BJLjFZLD824deMMZMOmQ4b8GOqUB21ZzSHbmOmu3NWi2Qn1hrKg%2FDRhSI5LvqKicI4nX5acDzKn3Afn6eTIWumoq7SMdE6Sm3%2BndBNgvRBUWJV9CF3Gzby3Nwc7STCjTWU0H8ibWIrRq7YaFX%2BzQWsB20HSzia%2FxlkXfhF0fFePjhtoao8wFI6nPfBE2M%2B%2F%2FLkOUXXkMSiz7gZIxI4h47TeDPRWpsW7mHkXo6CrwuhU%2FNxTwT1gZUJ%2FE&X-Amz-Signature=164433fd3ba380c2c26894254f33d18b99bd5f20fbec35924eca8ac72d32805a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
