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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYXU6YK5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FtiPjxmAnd7HbMaXbOy%2Be7%2BE646PoMsVwkT6fhZcuFAIgKu399AW4qzwTpoIpf8l0Cf%2BmSGNiHch0ZvauR%2FEeykoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJQzkduxHYK5YGG2BSrcA8PTpJtJPvaDqEFtGVHLf0Sg%2F8YEV7zY1zQx%2BJLOKJQIeQiTdC4vEDpVvDADLjfTqELTwB5xHPQ5m2CFGfxyDy9GnCFDYrZQrSI7Y0ee5RELr4xTruozssS%2FXe4IhGWBtyspiYBXwvYtyzxaVoU%2BB3lnm0%2FQDYOu9GTHMFvkUAVM11jnNnyCuJUG6WoEZ3J85AhQjGNpcxvimNp6Jo74lTWZDiDjp78xZA0vM9JSTFiLD9omBED8EL475JfzbJBEVY8fwqzLE2orgat0HZ9b2K6cZLLQkyeqilK9xuMVMxXna5kqcC9%2BTHMvJNXaPUPiLl6kFYXMcOCMWWuvJ56Tpa8xilBcWdywMjltYAa%2FzhJnQGuj2biqtvSC6opapGvPt2EWO5p97dbW6h4xTzLk6hfoVsEVmarvgwWTSXnz%2Brdl4Z4eCMTPzFqInoJTb408WDdmlFxM105fNEhcSpGyK8t9QB8fzHQTmN%2F3uF75IPJHK4VUDghUt8BwzP4qoVNGmUEU7pI%2FDcWc4Bv5%2FuomVDgIi%2FXiczsYMS85Y7NEz7SX%2BpUoBbwJGkUGvdRdohUGGuYe55q%2FL1zcRw997UvXyEY69%2BNrAGnfq%2FrZeVY3ezFpzwRnHp77q8MYTB6UMLKf0r8GOqUB1EGObNaFrEZre4LL%2F3BSC2MDN9ARhCzPTdtv%2FU0fZHdlpDfm6lsi2veW1v5HutCpEFC6lIVx52Tq0udvQG%2FenW5xEuFjkj8vcDDdI%2BnFCIcXgf6ehBIoOb2y%2FvFwG4LbKekFSzsWIxY5Gv%2F1WW%2BNGv3J1kGRtatR2CmTtdu0PGGS8MTJe5VV2jgh%2FUL%2B4cLJbQNu1C4pATGd63riAU1wtRQAySIn&X-Amz-Signature=aa603dddfb78b41777b8b52e28661976bacf6249f67caef3493a01e11882ad43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPOH5RPX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SgY9giirCREN2NoLqrv8hwtoX%2Bdg%2FwqLk6QD8nQGvAIhAILhKtoUMm2gx2My1JY2a51wVAuM9bvITLYBqWQgpob9Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzphDV4N3kij42nToEq3ANvDe70S4hbbFju1amfWhL7TYA9yAvR%2BeOPwlWYQtAwFSPJhfaGhZ7mSfB5yGOZ5TwcSngUbAFSV%2FqZ9o5A5w7LMgREc%2BYj4m6rPmhcLmdcEbSLS1C%2BKNq%2Bcs3onYmtQidSnqK3JkH1xOk5ZR30WPHpdO%2BRecXCPxqNNXnMrTQtdGfJCwmG0r3xsdZovzjfVLB7Ob75PisYED%2BG3hBeJ07akqySHrqbaJSbOMKtfuVb3bqNt%2F9hJGSwbWwpkSQeQNVC3XF6%2B0QlJe%2BntJCvZJ8tUS%2FDNEidcLir%2B%2FoK93E2ejDgDT1HkZfXG6G%2FjJRJ4k97%2FkJj1X%2FwwkqWpe8I4ZSvxpGOjZ8UN92UTyM9nTqezYcmJXfYjsaTTCb1Autu9Mt8UrpjeMnkFU2kE69FdNnQ6w%2FuFcSHtR08c0386gcrZcQfF%2F7IPRA2B9nkTGfaiNJJCmeah%2Fpgcmn23feQQkFCMbiSfbpddWrM9A%2BEUi7mmcmuQ9IuF2A3OKPmDsTuAQRAY%2Fp4fMh8pDwfeW26mqt4kglgatqdNsURWbnFxMRoOjGEvFGODd40uEY8itoemAkZnzeeumzd6%2B2A2%2Fnt8DFoVdQGLaNe78McDzECk3XFbAC3p%2BgU4XVP1ilzHTDSn9K%2FBjqkAYThuQyOQ5fzYuzAWPIKhnU0nUARTZwLnvrCyZxxCxkb2SNvtMV19yYP0V2qANzIClyFZNKPiaHCanQmOV5lSrWmhNBV68Zi1IaM4OGry2nGHUgp7IfNa9x6AW6QYm51wbrSflWEiRTwoKlvCuKXF8AnLiimQVTb6EiR%2Bg8CtCmjy6wJAqA5Y%2BtaNBiD20Rqyke4vEvO%2BC4h4R0HGbIkmIQ3GnlJ&X-Amz-Signature=7d5156dbd4a19df2e39f106bc52af8db8e0c71348884a9617723b14041ca6bae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
