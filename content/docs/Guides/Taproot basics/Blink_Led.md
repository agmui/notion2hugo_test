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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLH3RZ7B%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIB3T1jylqchnwPOr21UlgeDQDWURe8FO8tDTsp9QnCrvAiEA40VlIuWAkcIIgdELCwMorW2LxcsyVy46NKyU2QWLyxgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpSsyL6At%2FysQdADSrcA9LZVHgR0aLp9rKK%2BSTtDVvn8Z6WCdEcLz7U3UeQmKZ12iVunuLYydctIKcA%2FaJRpwsyu6jVvsUEqqxoQ26qfpbRbUFN%2BLws4W%2B5tBNeWtRVXdyntzHX4RBF4Gz%2BbjjrtiIJ3%2BSB4B6GByihyMQhwN0v8Na8pM6lebr0hHjjrlTpLWvNY96IOdyyzwySlhq434dfjc6YXKhfgx4GNGykLSqXEZlgnV4S2BlnpH5ytoK3qE9K9ZRYOocOYpqjJozjhgqbD5vjVZsLqQZXbYMEB03mxJ70sixeGMFdINrCDJLTHxbAa3uiPoWM05L56prJFIXeRrJp%2B%2FPX6v%2BKvpJcES3KmVsErR8NBnWfLm8lAi1S8VVt0O7GtZ3zSOf4sKw1mDo5s1w1gMBNVK%2FhA8rrIxXeGc0m1p0s%2FlbmRucYm725xtffTC0lK%2Fsww0ymBsQacztwB0TzOfzbUW2Qua%2B5BhCTmuWz4xkDarjg2YvC4NuTndcPQC4JZJd%2FOumTATXu4G%2FT%2FRJYNdeRxSwSH3YsPFGIEB6xTbjhAU%2BZ96zdg6SpkXINA8yDFoDppBuUCkeE9L93DqvRb%2Fe3Us3HW1drh3cU09U%2BGtsPrrGf%2B2zFRDnSjvy8lx7NRePWXUNfMLGfoMQGOqUBs7jMNKTameV51a%2BRmH%2F%2BRdjIXUIYCrFIMg%2BZxifhxKRGPxXax%2B7Y5ddNTq28SKqyuiBRd%2BL40OVIKL4xquC40kIczwWZAKVWukyTcjmvDkgT6jg55J5qYoZg0Y18WpxX8GTFHBLcRGcZEYeSJ5KWNleZ3t627uovyH3%2Btn1ynUYO5NyAYDQb%2Fwqlb1ahya8XQbA%2F%2F6KsIzGlnvqhYsBTW9cLjK59&X-Amz-Signature=7ee53c834bde2e51412e80968f6d14f3903153011572dac3999ef4ef552592a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDNRMKA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC2Xr8xVt0J2itWr3pMUvQIftNhGFj9OfFoJ0YkhFu6AAIhAMZhrGCV%2BKu49rIVNnF8wSq2FYrEO0zoPaW6KbexjuAjKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcUcBNOBDKnVmK2D0q3AOx2WEDoGGZJJ7tvOguSZio8dxL%2Bo3cHKVqY0snCcIoOC0MxLoAoU4vVxn0xIUIBVrzlPvW20rGfv4APWvRMOBnvXVvB8G4b5r1uYHhmMP4wI5CS%2B1sY4lcXpnBPdAssoeFGH1boiaI5qWlh%2BdPkICJr9qfyOGrCG%2B8ZP0rTZMSL1WOy9fZpLR730TT%2FZjq%2BLEFmFPz0%2FPZ8Eom219gQtptFUQUorOHtdxmFCF%2F9pQIkFjvG%2BQ%2Bfats1iVegWIAwnxqipjSAI5ZBc%2FZOe1I%2FcWZh00zy7wLf5uKbWvNWtlCDz4waUKK0J%2FqK2OBc2Iih74Yp4l%2FYFFN0tX8bRvs1xdswMNm6Fg6BspGL5mOaRekxDX%2FhW61o6PI6peAWj1ujKssklCf%2FTkhZigyD4nmn1pBSh8tpNzdtISRhP4kVnL9N3AGjite3JhwiZyaRozK315dEfivcx96lWhxLG7nVLwAboeOeIREu7ZZFk2px7CGCkotkQuPbmPw1%2F%2BwOB6xYTyjgRQOEeKp7pm9ifgy7aR9gdQWDtA6TQZHU34D9Q25xzSnCBs1Js%2Bty%2BmD5lS%2FWGAHzEV2MPBDZAAup8Wi9h9wvduTRkb6r6i%2B1DWN3qAFj65Jcg523aEjijcGqzCun6DEBjqkAbi8%2F12nT7g0IjNvbiK68uY5tLpILenwz301q1NZXsBJYm15fl70cpwV9mRXT2U%2BUbclhhAFJCRiPLoRcljvW2cZwh60JG4GBewEVeS4jfQtCXVGnneHhWPeXo7tuqV8W2zlSmCo%2BXCfCXRUXZrXqiWTN8uUrNNEKyy4YNJNTlnvnWn7FE8jueTVT2xpWZa3fqqoNPBC%2FbPPw37loZKwbjiuJjDu&X-Amz-Signature=ab917b187cb6f0f460ea7e09d68038258aed12144f595a7fc82077718a2319c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
