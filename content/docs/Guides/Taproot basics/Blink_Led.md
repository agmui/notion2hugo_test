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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663QOYZ6N%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQ5ERE1DVlzitNVmbTwlQFrxk96wGxfObM2HyBiIEJqAiEAh%2BNGhh3d92KLLhYyFYh%2FvPohrWuHNGLZH4gAeIQbHKEqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPcg5qZ5Ly9oX%2F3bSrcA1Q%2B7kbst%2BC5902Dkc3WQxPdXEmu6y3WVZ9h4r%2BYBwo%2FliGomO3EQS2%2F4LAw4NjpUJlk73nEFuuRnS%2BTg8wDXMY2xdsKyJnvvRibxPdYNrjzwAaJABQPRWs4nskpZDyEPKBL1k8eWtMlCYA9Q0cOsgydE0aonly3NMfGhnTiOgbHumV6C%2FcTcQikYrIM61k7I87TyUnf%2BPY4tPnABLN9xu4kncUXl4uk7Bph3PcFvl3MBfuRuXw5ITB%2FMhoKgeDoKnksDT66d%2B0k0nUp8DpUyodAtg1vZMkl3TZU1NJpsVoHZJdBlWLT4T%2BzI1ZgmKzrjXKpImlHj02KEclFUzTbE25VhzNeTcXqknW7rVZr3Q76r4YbZ%2BdxvVk51SiKoRKX2f42BOmLgYROo8yIUb9dylth6jj6%2BrLyW8BR44U9tnxXPQ8udwMaFIjyYKXyItkE6SOUSc%2BSHt0ppriZAWY4MmezrcB2v53XLtD5rHgTWM6q6ou3OvlQOpwwzLMBjuSxWHnZC346gpXa%2B8IuqHej1vCysrsEmKRh0DxZxtf3cZpS2BCqogzocey5LclQkZI9c7KBveoUeQrFpzxt9XOeV0mz4%2BFEz4YuGmqJKLP25tOybbXEnbsl924pI%2F1qMM%2Fe0MIGOqUBKhBY0dgIFE8jF%2B1%2BVTHxP18IZdmIbxnJ3x96i%2BLnz%2B%2BORZNR56AaWMuutdcET%2BYmcljQyiebiYfSdwoysj988T7%2F08dreRcAoMNyHnKxCQNMdaPK2%2BEqBHPIHIovLkHVVtpX%2FVGUweYvdFmkZdEkVJI6YEpxuRW%2FTwpJuLXlLemVmrUwT4XDeyE2EaZY6wkUAi%2Bbc%2Bb9jYfoiwIg%2BFYkEcTqAezS&X-Amz-Signature=abaa060a9fbb4da2a4890a8baa5394e40e8ad1672530ca5c7c5eeab6e9be41b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPJ5GOQQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHb4Rdg7UURsZEqMAsS0igmfUzf87lfr4JI9zPkVRX3AiBrISCfkcsE4HaX%2BIOUrbYdfLe9V2NE6%2BypZagDKwA%2BKSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGUs5A0UW1T62mygHKtwDSV865rUnOKOu1HHSItxfPj9dsYV2uKJUqZDosQNDZMGBBOVO5zE1S7YkhIOaWy%2FOOaN0cHZQ3xSu8%2BAQdOQ3A73PR82BRY4vYN%2F5tWMXxwL%2Fkgw%2FhHYsnlNzOrUYeois%2FI5nnOs8Z4Oscqc1KkpTcpkSl0oPDleuSrChQQ8m5B88Z%2FWrGl2NJaY%2B0REXU9cds%2FF5l1TqOfqXwzQYIPW9fIRxhfY8ljZ50aMMJZJ4ynOXbjFuT8i17w3Vl1rM1s3zKH%2BdfZIZtHrCVYgKoIzgOgVGR%2FNFZg1Z%2B7mt26h%2FLQR%2BHpZVU9WBPMKLd6mtntWpTx3Q6L%2B%2B%2BtoMtH1ZbiTWKQpBUXrokeUE6lecy3k415dfK2ExEiD%2FSHfX2rYwNcrWps%2BJAyQPpT455xO5q6bDY9D57F2ncZsvBwhcVolZhSXdxI%2BMf7T7Gg%2BTdsVxOrlXTyOWJ7FaOOGXZQsIlrcVw8QrIo26BvzvPQy2FEnDlSZ9HYpXdv4EPS0jMhseuDczCYIww0ZakbQNYTBhmO3AGoy1DaISRN8vh%2FfR8BHhuvfaIW6k3kxnvMY9koGKpX9eEg8O7aCHtee8Vi7uUyF5ZugipS2KWwBs%2FhiWTNTiWzvRVSj5dPmMb8pV680wm%2BbQwgY6pgEc%2FJVffsZ%2F%2FyWD9nkMmPiyOa8KRe8wFFJo0UGPozF%2FJ9X%2BBXgBDd52%2BnSEUwjBmBJdX4%2Bea7gkKTFYzCpnv%2BM50CmbTRxPwfeDJNekohP811OW87GrkHkVFpamIoHVkGDN2T02Y0ZXuPq6L78sMxzO9BByzIRwWNM3TXeUcDAlEPST7gOXykN75EeDJK3LuYSU%2Bd2%2BVYhniwh7ztlJeVvkbO0gNsV1&X-Amz-Signature=36426f50b1be7ad8d6440891d5ba8634fd07434da7f36de44d0dda6c23cc2225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
