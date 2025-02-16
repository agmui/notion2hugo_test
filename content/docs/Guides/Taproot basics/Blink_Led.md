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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSN3VB4A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCJ%2B6bGgtG3YyIG8OQMGORar2bF6cpzg8y4b1KzQ%2FJYiQIgZWEyfsMvveCOaU3bOK%2B0ZcMCz8fJWrjOUiwu9MRyiPoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBE8kSXDNTpiKDs7JircA3mmegyUp6H5o9O0G0%2FBGn0vbY3AP2nnQrWBxJYEjWzPr0q9z4g6ERxfbEGJvALbCHTl3BzCmhBmgKil34HiPDF45Uq0U5c4bZmIM1tERg%2FJoy%2BkxNHIOSm%2BUi3%2BGfaFS5p42pInJw2TPdoXU%2FnBH3vACP4OWO8W2wUwUVqI%2FSSZDA7QTdcGzCOuWNVCrOSkt60q%2FQnwNPcMMf%2BaNNld%2BbR%2FtaHzBkHIC2iM4%2FNLIU8RYm9k9XK6KQKPfcUAmBwFa%2FOxhlf%2F22U53%2BMSmJKEEhtNomGV8mE9uQkQU8iQqb%2B%2FuuBQqBww%2Bl7WajFUO1bH9syebvDjSQKi1J7I%2Fh1CLgL4U1DrW%2BBPU55wo%2FOBDiIk5YlPfMpq2uP%2BgCTlTacDaKMQeTeTvoNbQ56fnSXzkGgaZy8nho5l5ChonoQltjZclwTeVl%2FLe%2FjsUwbLFS44YBzDZySOIUuS3OFRTRA%2BcBaLvlVmuWxor%2BEXSqa5q8s7HzEBRcUz9sPDItBLnZuoFTYGVaplh90rBUcE197fNLTGYEoR%2FiRwU8VNIdVYNWW0FpB374fFSA0M%2Bu6WQ%2BFgaOl8H3yBWwoAbW8vtuQ2r4jNH76I4%2FHCkpznLP6I3AoL%2BV0UoFpJyHp74mnXML2hx70GOqUB6pT6tcYlcF9c0dQPTe06JKzquQWGEcmR3v8TmoQiCrJc%2B2Y44YESYQ3Oxdmh1lITdXHrzyMdERPldqeF95qUFobwwbIXaaWmkFqYV9EDi0IBw4ZDi2ETz41wNXMRBjBTHHL0O1XDOPALvNVsyJ4pEtxUmjgwQZKX2gTzqsxYGI8NtgGgZRKTV%2FOFS3c6H7ifSHgnt7pEFCq%2FvDRiLSwPBUFo9MjT&X-Amz-Signature=d6550794657dcc60f3d9a5d829407e162d1ff0a58a76a9b350bc899f1b33a3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AA5PUMD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICuIyIlvztkdbgbtuGlr2DqUvW%2Bki75wqoeb%2FDWTXxPyAiEA5s%2B%2FAPB21vdnx7FeY2bq9qU%2BosL8ksXFi0E8kGUmh4gq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMaDuC9ojf%2B1oscWaircAwnmgecPrKF9sP4%2BtFnouPfcGcBW0OExe9nWgEpdSTGaE2PvZtoGfkw58K7VLmm%2B9O7dQxrVqT%2FnxZSJYbCVzlixA5YMeIavqLUdVsCnUIbWmCbwT01riWyaSCCdOsYf10sgqwYMn3HcOd7XdkiCWhNlT34nU%2FFkJYcH3qRROHjV%2FYqz98Esl9zcbQTp86vT9OuJ%2Fs7BNKgiqrfcqO%2BtCKKlbuPLLrUZvkfntWIQLUvXev6qq3zxhYTM8CcSSzfwsgxEBByAVoGfLeE%2FN0g6tDZpWwoFXJb%2F5TIqnqmuogfaWI8FLpZNW5aA4tYJKg0MBuo61G%2FR0%2FXKZZqmSfvxD8CXlozH%2BNKfs842RW8w%2B3wjFJRcT6juMsnJIWciFA%2B0y04GOxlhVW5mT1i1MHTgh2%2BsYI0AYGDR%2Fw0nsL0qxFE0gi6MetxNDcEX4kfBP4qxjTKUzEg2dpKo9lc9yCbehSXBBvCXbWZbrffFD0QGy3ChuH1auJb9nePQIJlrh9k1yp5XHrwxAtiIHrzaoxeh1kO2YxuLr3uDoxQgc2lxhrbVeWFiuCB7CdeFSVjL%2FKWDVXj%2FUUhs5d8PBrczJ4PfIVJI%2BZmLhQEM5Hth4XTfNsmfCKfxp7aIOe%2FSARVvMMygx70GOqUBCbXn%2BfkBItYvcX6SuAn2UVPEG1C%2Bh7L49%2FLm3xDBw1EmRsUe74mghcpY%2BCEB6plzLcFaTC%2B8gTh0vPV7HbKqZLPbb0HWflPEEyU7th9oaPlBeUYfrDwQFXeBpdb7TEUoxJX4fVdZExF8jFxQFFV9gfN14gXQhdYAlF5xUcZAz4jK2xD3izlXjIxl%2F2IRb5uyUQ50e60GFStFpm2mUprCH1EZiMbN&X-Amz-Signature=172c802a137e237e3e16e6a0785a05001681869135706d52e95d0d8c2dcb34b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
