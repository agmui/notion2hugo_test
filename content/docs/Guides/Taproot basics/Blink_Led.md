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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKVIAGA%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIE9%2BBZCsHbCL%2FL8%2F5t4%2FW0xvyKhikWX3BDIIKUc4rzo1AiBeeeoiADiVTH1BdEhWt7%2BUVU7X2NMJi9sXWgFQkDcbQyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMabjtCg9I4QJLWfwfKtwDC38cxZw9uMew821Cj94EDJdMPHvxzPOW9MgWXoZCYKOGVo68BHkdiP%2BnZaYU4zfrDdMTPyZlf8MzDUtdI7TV2bV%2FrLPbvFmI1MMNzb9NfvnX%2FYO3QIzT6HY4r%2F5btNKYlwUXE1v79WqBbLjyk%2ByCh0jfbuMGlbcnP1XlBzEWvT5JPOOzPba8ZWlyW2kTwAfogaVqWKRsoBUVcbKNAgMRLq9Q6r5ohyaOLzBiHlsMo08Tq1L%2FDZDosD7pf8srtiiEM60bqkwuakyHeojpeNpb5zn0Pmbtkh4nFjkfKX5XPnWkbgxbPJ%2F51zBOgA61Dcp0FiQIsvySPjarn%2Frl7WQLlWdpILevggGPihs1w7E2YvQj5Hi69%2Beq54FYq52DkxL5z5912x9WLaj%2F8r%2FekQVCnNIFfWPIx2hxKbUr5%2B%2BcIN%2BWmUGV%2F4eTlanhUdaN8aehZmsutDpWxE1xlJSmIYBUxiKrGtDfbwxukL5oOXiVJJAAvSdWLU8vXr6OKnAC9cme7ho656%2BHOPUhmCqdZOLzoxBCTGgcGlH%2BfoQvinGhAXuZUC51GKnBWkLjrD5KpTztLAjKLcGhDHYEeFdLuRIykTC3zdab8IoxohFLiHikNmUFap7NGQhKIKFuDG0wn8qRxwY6pgHkMqEuUNVA%2BbFdZMKovLKRGZbgm91Yig9TvGT6zkRsEyUwPGztDJTw86CtPQbMKwJqcec0ghUvwSEI7vXrH9R0WDrvopIo%2FbCA6gNrPkbdGWXsJhmKYMkZJpIrp0GcccIqmzgSmydGcbZIvCtNaB54ibcXtQh7fD9osmsSARkqI5wt8OvDoB%2B9EOtg%2B%2BC7K7Ktkds8QTEvrQOOqSobPni1uTj9NCYg&X-Amz-Signature=864116b2ecbeeb714e9c215b444e84b2e9006d3e3cee87e12b209c5ed9646d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQTZCN4%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDpGw71Jv1iLhCbppiTwPptXg0H%2F9NdVkQAU67qhviKxAIhAPg5BLHHra1%2B%2FyPmBlIe35dzp5VKJ9FW%2FxcvvGpA5%2FTrKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnDo7kYHV5vrXtgTcq3AOK6Klwk9OzSPUZLt9z16ZgbkjCAjX%2Bxvo5Hoh2ydgfsADeUFZBl%2BZSJTbFQ4%2FW6JhrQ8jzhLIogjZQFm1EwSi7D7DFGc6ukT4jyBG%2ByZxmctUhlA3JQvIC%2BTk3Ommfv8TxIbN6cpPT7b584317pOGKXEqCCY9S6Y5%2B2qrOEj2Z7uBwBY2oGXoGKe%2Fymvtsgl5dtpbO2fHd066YwtuNODViR2C%2F9kF60khbqk3e2D%2B%2F5Q36W%2FE69EzI3UOMfYeA9WUHyMGYFoXGHOVt2Kuz8FgG5M6mUZBrXyeGELr0jQezGsnsyw9g%2BRbHzxy5DsmVAER4U4ZTYrJuFWCZNlNhRnDtiDHvxPm1mQJ9rznqNbewcWy%2F6UyydulwE7UUcHMeZqFMw%2FGnt8vnpkwuZSiqbF2HL%2FIs8NAtoO6wfYu9NidBfRdaOn6XYlidXsGB9yssZFFikCWk76Z6pTB9keqta0%2BO71i4HB1cKi5UHTBV7vrrstWS00qiTjk43hHxFDP6fMaXq794AM5EMa%2BX1qj%2F8LxpNe83KZnJLY18v7k3wx36bVL67o3CG1PWQ7MG%2FB84OZ7dmYBWyMhf8DJCAOpwStQrFW7f8TZdMUEI1yplExFCI%2B2fuOaMTv0jjmOeDDCHypHHBjqkAaWcL3mrp99vNHuX44M%2B2e0VM3SxaUwPgR%2F%2Bm0o66AJv7olRTmSAa3mPrkY8KhOkZzh8KH%2FirZeIE6GDFHDATSJDUpt7SAgm3DUSGauuajMj3nGFb8VzhmHYRZ9j9OrUtKKcSBOIfPS8joTOqKYA7unzNBY11dtfKuWaFrNc7cs6DsE3iOCSTMWG42TU2swwbGuKOMF7vByc0RchMdfuNGfekBXd&X-Amz-Signature=e3e191cbb3ece5fc5e604605ee6fe508b5d8f0a0703d197febf9a365ac188a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
