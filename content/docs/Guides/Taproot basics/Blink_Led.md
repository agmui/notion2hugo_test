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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDFQ7PD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFORXOAMg3tCSTstBneY9CfzTSwcD7R6cLEjjls2f6NYAiAYdWHHPoEgmeqrEfYwv9g4gIhBDLcq1mRaZTBxJVnByir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMadfkSYD7ONY996CTKtwDlGY8OhThzuO20qpwoTVBE7ddn%2BixYuUR4mpBABilIWCmJSUjea86yUgO%2BgpMskOCmmuFCGpuCLyt0f5zJCYvF%2BOAfFRJHoRbIWHI0XKgDlpPxeqN%2BzgyNHRaYLZuuwv7jyxwxKYtqiSyTeORO5h3ql46PBdv78WR8NPKy3olnSSoB32nB%2BeU4efVOAIVkobVnwXG5BHllb2m74gSHhRZPugO%2BRMqtQkBvxoG9U1PYUjFYiO522tmlkHPVqs%2FZ%2Fc52i4MyU22JTV7c3PdBpzuy3GUAHZSSD6UTitxqbNilIzK%2BQFnJutZpIFxgkchb2QmB%2B18jrepxwFOwlcty9Q7%2FoPfdUx%2F1T22h1gD%2FWa1LpMAeteEfeBfvfhZO5HFHueQOZKJoUL5fzPoh%2FhBgbYjG%2Fs%2FlOVt%2BT9f1ShJF4%2F2pSYGkFNoh3OTY7HP3Zzlz8WqrwKI%2BgPnrZG%2Fy9WaX%2BHRuYHD9WZ5NJai3ZP08e72wvwhlqVpt%2Bs2OH%2FghcOo5uRu2veHhQDHS1Gzbr6l3WqgxrQ1TYvC62LyMF9qW7mdirWSALW0%2BFCyXJA8Au0RNbD1G32xTBtClsgGlKisrj1hCqHOWxONHl7nNwLL0vqrSdGuyJAzIAV%2FDfJEPl0wn9%2FMwQY6pgGf0qniELkl7Hpa6z10QPxX95x54Ttyb1VtEPY0%2BxVGiFMM%2FrdN4W1TIGagtLDMIQrM%2BeAQpXnlMiViyVnh6Ee1mLTWgw2B2TQi%2BzY3q9w03nph0bbMuOasbxQtRXXUMYEoBDxDt2vRpCIKQpfcw2omfQ25xbo5FAGT3N8kO%2FmfAkLYWC%2Bz9Y1ld7XqOCURj3%2FkYXmx04gMh8s%2FKpULU6QPW3rX%2BJsH&X-Amz-Signature=ae78a532c4abc317c3cdb57ebb2a8dcfbbb40210232c72b21294adf524b9d273&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRJK3EG%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDo2en1DHqUdm%2BXMMOLkmnBXgPLbodMv2rtY9swP1m9cgIhALc%2B2sIqYn0huklQ72jaFvPLgRpUrrJoSvqMJGUiDKsaKv8DCDAQABoMNjM3NDIzMTgzODA1IgzKpGUyTdtHeBgiyHIq3AMFqOC8CdoI8ot8TCsseQXXgx%2FyvT40DHVUmXO4nxzcLyJfOKM3q32FNn%2BZ8VKAOSMXGNGcnxLZyRPRiwph3FG5bqczrA%2BkVizvqWKIovyXMFVQg4pIG9Q9YnySkPw%2BAqW9PVbF6x%2B1h3cmUwvMM0zpK8bIIQn0HPNFo3JutN5CWCl3CkVkbEk7fqguwuSeftx9km7VoimveGhVWUAd1S%2Bu97%2BR%2BFQxhHkJspL8kSRBQI2YOJj0e0EpZVHtNtrYPzXqw3fPduXABEekvNlsiT7Zzs%2FkJe43G%2BNTEmb48YV8FR9NZ%2B1J6AvMy%2BU9gOMGIH0b3%2Fux02dMy4EuQ2PTJymwFZ%2BuvqylBUEbH2T3HrMKfeFZ0RWa20nqqLPG0gYeaI1j5DBU65YEHYwrSprYisuvkQ64s7K19knhT29zmuQZFuX%2BIvFqEF8eniIdTdey1yuhQj%2BORiNtTEB6YTG9Ri6kQQmOws5hRceZjrH0X7Tcy1O%2FogalD%2FoGX6pAGFdNvFwG7N3HGzdPUhUTD32Cvc0r%2FTUxypS2pLa8RYeBs1pxRujspxy65Rk%2FLicFMb8uxvsk8gFfXLSgKDc6NyqcXVeFcpuKfwdwmsJQoDEUmGKzidi3WOShSZGFtgTjlzCp38zBBjqkAcEaCrfVU9MNnUDQ8CeJz45HO1ecw3iNcS0YCf8%2BoUeM%2F4VgiOZVIqBrXHta89jtXwU8W0NAPI2BVYSBtZlYHdoWCuRYrBayarr4a%2Fveosb30eFbLQ4Uh%2B4HJQA%2FOLBDA%2BKoIout%2F5LF%2BM75CYLdxf22JPZ%2F7t7YT1nNQnMNgx13%2FWuTD9SASHoPVCBDTDfKkMzp%2B0p7j5SxDEJ3%2Bapd%2FwJLFOhM&X-Amz-Signature=f239c1171b41d119cdde1c8e994ae3e1c90aa28493d1b6b826b56ab25ccefd31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
