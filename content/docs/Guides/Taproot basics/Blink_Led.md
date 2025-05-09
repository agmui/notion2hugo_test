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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAU5SVN%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjl1ShcpssXkWLzGvLscyzQ8eSlJo7AxDaQesDeNyz1AIhAJNHLeXiRTn6ukWcPHMFF3QkU0z25NUBPGi5VhwVCBwcKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBo75z%2BvpNN6hKEEIq3APSuLvD37n1xi6MGuukS63n1K0Y%2FGFHmKgLw1h%2BK%2BT1cYTeG0AXeRZayvzfpXQuGBzlQD1JaTXXguYFDX%2FvVm1qYJ5kedZbqqEiH9NXtomFX9KY78thh%2BETbu%2FM%2FIqocAoJotzg4SuMjH0qeoNTUg9s9z3K183wYxMEl5%2BMHnAem17P%2F38D%2FuBNAaUX8HWfll5%2BDhatFniSeuvL05HLcAjKJoClQMfsD8URQ%2FF9V6YLe7c7pUDGqkVy20OxU2hVIngpfjisfrdszEL%2BWxCrlEkz5k9ifHdz4XgaXQsPn%2F%2F2T73c%2BOa4LfVjP9k8ej27uGpREqIeU629rEgBPNrGMVewdrSb5BbgPKzxhPHl0aR%2FyA0CgJ70L3JgyAgJr5LW6kvpoF%2B9dGRQ%2BdK3tQorJNb10Q3Mt2M9%2FphyrTD9JhCZOqGPWG%2BoGPIy5LnAIjHNX2lv933AnlnA0H1WA%2FSGOjBGgAeAafYiS0PRB8kaOBrUSv%2F38UGncTUJCyzKPJWJDwUQesz5QMamvsuYdhJmFeS7Gjd5Y0d1hEoU0AdR6Q8RWF7Dt8VKEvnwF0p%2B7Lxn%2BnxK1S%2BphZcw3gcAweuF09WBjvQq8kQqxmc24kQ%2F1%2BqSmFUZopSGSNP44jDfTjDHkvfABjqkAYnCRtc2RHijdLOtl6Mp8jaNmhr2ZU%2BapqJRW0E27II8WP0dsNGF%2B7MS6mLpgBOvuCfb6M2oaY9bSt43OzkssbxHo8pTBxd3ToAhIAraq3lmFMWv8OxkI%2FjIl3TOpsa54qGlXCrwSgWAlkk0wIu7uLV6pFy8uNFHhcGN5xjdC03gP5myCPFLT3B9Lf9G3cKeENCUqgpw4U6SjfPmz4ZD4dgqN5oi&X-Amz-Signature=6f3786fe0f07e0cf9e84008c2d6829abfafebdac90308c1c3f4591f51c01dfa2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4ZBBMK%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T100914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZVMoXeir4oGfdpuSgvSiuXlkelXB1fSq5RLRNpUTCbAIgcLJyQDvy7F%2Blh3SZNQ14ulzcb6ssC9NJ5p6nEhs59LMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvur49bt5MByRAFKircAyWbLRTc%2BVejYVdzxl%2FhqrM0grn8Wsuep6ArwSB0Bg5JP8IdwOzBqseyvjvlPdc2imCF0hDvvMAYkHAsK%2BMJ3safJWYFBhsw57Ted%2Bp8bs3flcvO8vKpRz5GGxaCKgezMIjkNSacyx%2BrZWHHddhjnQKbFdHgGGeccs897tNmLmZJNbI8B5b2oxQxGWLXs9I0M%2Fnzr6wpeZ4lTcBNgQV1KcUehOb1S8tk1n6%2BLD2IaTYjeT1sZWzpXknq6WrKRVTIX%2FtDg5DV1sMQR87jMpMWs%2F28D25RupFHD2z%2BKcZBQn5t9BGwY31%2FBfgnk1IKONxYjw9an%2B4Ja2FLk0WXjgxmDn4WYDCCC%2FyxMgVXV6KoYfUfExqdaUO7ivwWGb6hwQyKT5PTSdxC3xPR3nBUlVqcEfSsg0u%2B7%2FnSDY4FsBF1KnadmTNq44zCMA%2FDBqJgxm37vgNxA2Tl%2FlvpMmtU703lkm33g4O5WBK8T%2Fg89i%2BDhEks6P1hSTXjjyIyDSTcOYxCSUeBr6hKtenh0Ks0AGQ%2BbvgluZmpR1SGV%2FQVUejeU82LQ8cY6XxElOn%2FcGPMt%2BLr82zoqKuZW%2FhuH0AYPiCegR0vpz9cu%2FY9jh%2BZqb%2Bin88TAUsuECuM8%2FBM%2FM4LMMSS98AGOqUB5gbwiXifHa2jl0SVblgUejLP%2Fu4ESOQd1RCvgbmLsDW1hxXXkYVo%2BE1EFdg%2BZ1Gol1%2FsVrJtB8SV8S9iawUkEzqyOwW3oVz8MEaYmHwy59NIqOkOh8%2F41l%2B90jCJDkxTR11WlzjuThy59ITsKoZGPIwGb%2FZqCsqqBntASiqarDd6QbP%2F%2FuownCvoOZMec6KUwhNvHsH94Bpc5aWth2BLR8ZF2%2FSY&X-Amz-Signature=a4e90e84f669237f65b7294c69f0cf4dceafe1e401a7f004d9ee756afaf81e53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
