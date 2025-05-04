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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFFXTEP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE26K2CNoRNP23uT%2FB7nnMymP17sz6uI%2B6lQDyOcbJpkAiB%2F1DWU9tB%2BKJffzVAL3ErK2Dy4M%2BzwE08nquiac4jUnir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2F6GExTWWplAo9Ni1KtwD7rvT4yJI7OgsSUzNTRoVsiu8Aj2CeuKexg1IlBC5mijfYd5QANXGWs8tfn5O3hEpBPDdZEgvvNhiYDrQjXpIAZHjE%2FnvErBphRWEes%2FS0wzMT%2BzbjbWn7z1p5UOWH6va%2FWQifxHF1jqmiHVA8IT%2F5I45rQd%2FKHotob2jFQjZ0PYFezHqTOHFqJsFqCc63mmYrPZf0VgvVaVgaP63qWTxTiUPJD7A%2FXtFCIl1SJWlfEW7XUqVtvhhxfntFljttNnglZsPCmA3jdqO9TBzKU3X6eyngpaPKmIQvzd%2B98Qi6VDfFeKESjMC2F5IpLA78ix1OWo7mBxVVJ6Yr4sbOjWuHIROPCV9ZWnmHdnOTeY%2B852h3WHiSxRFerWK53sDqY674KmvmlrPYGFQxE5GRoDwH1XhFoGu%2FvwTHgKUn5fOrYu6qCfCUa2PCr4It4tuO53JBfmuW788JU0OR4MZmlEOkbPDUrQ1Uce0id%2BQn5xojQI9dSfEYQYIymck8dVrcM8NmshIfqifL%2BpufZIEVsTCIqRE8I1iz%2BHATEwWg4rx2ZfM7y2e6Oe3CO7g7WCwzyxT7KnadiDHJBLkg3BMoKRwmdC%2B2CH6oY7rc7ZklDBDH%2FmFLVDdDEgd53yjcHMw%2BqzfwAY6pgH9oH2cpqFo2zYWu9%2Fxd2ueftctzLd15Wn3imAVFUdAvj4Ys9%2Ff9jSU1eBUWmvojw6p7UbNTRKXQ8FF9IhNb01Jszx1EfRK7B8LKz04j8nvhNx97HmdqiVF0uJjbaC1%2B9KlE0ciZWIDVgcejY6LeTCgfEkqv5IlTE3u2QtdOg1cnsApOOckdWqiPmRbYXjisc0YQ7jz0oUrPIobFC87Rg43CIc557z%2F&X-Amz-Signature=3a904b788822a55252dfe42e048addbeddd1868e07ebf4e09376b4e06eb94dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFAWQTS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE9TvrsGE5pW%2BdsnVqJV19xNObHy51oLf52peN2ocHtMAiAB94fYSIiT87WFdwXjIaPg%2BT%2FddIKUU5BT5LSdBC8Veyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMPno8Gfa00SbUGYxGKtwDXfDFcw5mSEH%2FAIOmKgMoS3DJQFw9bnvQseLcVmYLRNPkqsX5R5OJ5SjpMsfO%2BEMJrNZzI4PGSKO%2BG7TtXgis1aUBtFz%2FvF8W9jI0aKr5l6NxUoEppuzssplprfJ23OrHhr8z%2BU4oDp%2BSmqplZufcrzfhNJOVsF5e21fDJathnqVC1VgpytnWCA22fHhJXCsR65dDqFvjv4qk3l%2F3yj7qUErJ7EZygWDRONeL7Qs5aE2ghTqWQhNwj4A%2FmGWvd9XCEwhU66m7UtxUUw5Y9aSO%2F6mlzt0ep%2BIDbKZyyJX3QIcYLquJocS3kOK6i1xW7GqWlEi4A7uOVqV4WkF5PRbdggtF%2B9x5XOxEhSI1oPJ8OWWQEXZ%2ByfUjPI%2F5dh03BV0ceCEzx3H4eBRD1ngdoBmP7R64hhv1dXrZrzmiQUY6lJlY6iSsYGHkX6UtqvIQWBdozMgWWpgCkYng7fnDbvwYG11T4ScgvblzmZ31ENxhlI8SO2ViRmDzBKpIN%2FMEdmTfipYPSNrhFPiEENbUNmmzYCzcO79VWz2sACzGZUNYHntbzg%2FsLernyMUyd4ZQENzsTQ4KWQ84djZPlV3odtmr7yYpyYP5yOj%2Fadbw0kiuOT3iMOVPswKBL6eotIkwpcLfwAY6pgG0%2FTa5AuFRNzJ6azUM7hCGUmfnmAlB4nyfb%2FbP0uNOgC6D4DMDhFNaYehi8TrJeaTUBoHGm2SUmidrWoPUISmMq6kf7qtpapZ4dn4ccOTuhZ4YonLYQDLvZBeKTK66SSkeVIhOErxGI1kxnARiWAATSMmtpyYoHdYOuaIAUXdI1ALTfN2fu0CVJxNKinIFUOM6tsHdDnoagdmulV9Ge2bSZN8V%2BA5c&X-Amz-Signature=8083c025107a42b47485658c43d462ea514960b002998d2164a93f622d9f4fca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
