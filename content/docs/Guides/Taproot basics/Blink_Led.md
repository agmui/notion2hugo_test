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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGBOCSB%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGzVmvEngcj4HuAgQvRwk7dOJSQLB3mvoJDjrqQe0auDAiA%2Bt%2Ba3jT2Wi4AUeudbIxP5CRNSCFPZmTtE5Y8PXA4Xkir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM%2BJmP5Evw4gEMHycNKtwD7IWYnEZ%2BbhfjyaH44PRIblSwn4G73kEeSQB2t9sZk2TGUyCHHgqXshbggYBfXPEG9qHWDBYUMzB7uOGx%2BVW1HHrfmo0Hj01mOALpih2R1em01FBqzK1q7%2Blauqae9egWmyRBGQbt%2BLBZ4yYyc1dWboEPA9wsVAa8NJI5VJQSiONiCNLDKo4co%2FniJc0YP8NFFqjCT4cCkTZEsS0H8Ysy8GfHr6iX49ZOFiewCMWkIAiYO%2B4ZRZpDyjmbG7vs2sHLo4W6oNm3NYr2RGtyoET8kX8bTswRjMg5O8jGYtUhPCi%2Bl%2F%2B9XEpvqkiZAJcH5TAaEhLsyWarF4jwginlYGMj1%2FGosBWuiexOGYj%2FfTKdjrSpHUfnO1mCB6f5nNkrq3UjLaqCE1jkQ%2FFuKLBPu%2BThaiQe%2F8S0an0SaLmMQvpDbePY6POB2DIbFOzu2V%2Fbfv3HWvJ9M3SUfN%2Bdk%2Blh3RIlrtUVYcwxa%2Fh1yPgTiCa%2FhXHUvBJLo6KVWNHpxL42Z4rV6cwuN0A%2F920QmI67cAnzT7WBaokRC09J4evijlhJwBS3wNZFOHho31sMYKlNjXy4YU3r01N80p7Kd8ZUrj%2FfDfEq%2BwcbIuDn%2FrhmzzPOaoJa8cPsROKs1Swi8SQw%2FYKyvgY6pgF5HM3qCwyU%2Bh2do4C5s19BgS00KY7FvSohLX0xrVfABlU1BKrjorO4G89uSC3sJ4g9WHL2itzOCHY34VA1SIW6xvaRWidostpbiQfbTddAkrgosCZ%2BDIzUWlKfb8ypj%2BronfZ89YuDV9uEycvtWgOAdWaRwf%2FT%2FNKspPjT88QqSyslIhlnKPq4HInkib6iwJhG%2B8nddqL6DkZqMgD%2FVZcgt2KbvSq1&X-Amz-Signature=6789c04f98b703e2bdc1c240137394bb62752d6269fda72fab352b5681e02469&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UJKWWPY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIDUvsgMWPmgTt5F5mySGXdfD7XjQ1NHt9UjMi8ytnASPAiEAu8%2FwLiY9XAsQCg1I1pxQtdtYrcheP822iG7Bm9rbgMMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOFxlB3%2BuC%2BqI4OltyrcA2vQJu17if40hEwtu%2FntV9LzfJC4khMSP8yHS6R7AXPIbomEdN6OpSTADdvJ6YfplGOAXKePIPDc7TkQfkwa77LiLyDPMgyfUM3KGU2lbyck9xrFZ%2F4PFiOgycubjXo7ECLVdIOLs4SA6vtAmMBjpRTQYaVAIjaTXFmP0UnLTE1%2Frh7hwTeZxfG553wwAGu8Ws7Y7Omj%2FMPP%2BxEuKDyiw5Yb1A7nmvFe2HSXZpNTDqaEco4%2BqtLiTleV2lxHSU3bfc9olpBRYWVAvjsYsnVit12g%2F6DKhe%2FX4kVCFJogRgsmqfD6kJdqIq8CdX2THcnQeNVDo85zt5K7mwyHkLKii1%2FpRAIWT9mo6vmDUvkNkPiP6aPshCnT1THmLulhk%2BODfHwzKaSK6Tkf8CIuZ6sJGphy8gLYwzCKmBxZcNYNp1cKDDVd%2BMcYEz3FSyyZ6BU13a0EkV1nHZp9ioKm%2B5wYVZSfcOX9vLasAKr%2F54rl7pekALZ0kiTen7lJDUOkeL3ZYkgICgICChQLMSJUfnyQsw7YteM2GKIvtZWfOMvHYgBeOliZH1j1SF7TSoHnOyhovej6%2Fhp%2BR%2BCTKzd14tplUJX9wCV%2FkphSjQYLwL1Hk3102UvqzxKBSjwW%2FiSMMPuCsr4GOqUBgnU8OyTX%2Bkxmw138BmAyM5DJMkrp131jN%2BtnQTAA0lvEPrSDO2Nb%2B3DgxMUApVuIAsGgcX0LZOcuYmDDYtFzjLR2SZhXVDlLGXreHhGear9KY4y6EzGcqAPLHRZ%2BgC7hudL5mifyfqGHPNWFHE9vBLYx%2FznJOgSVVowPkG8waWWEhk0gvwQI7mEBntd%2B%2FrrKRFgReiZAhmrTAGoLps994kK2wDsa&X-Amz-Signature=f96e90a45cf2d5d517ba15d47115504a47f3a97454b6c595315d4c3c3d6ce291&X-Amz-SignedHeaders=host&x-id=GetObject)

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
