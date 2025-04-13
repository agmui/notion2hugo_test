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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLP76EWW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDGCugvcHje78Q4rW2uF81WS%2BNG3hSmGQ4SS23Nj9nS3wIhAMrUPLB6DyzOm%2FB8fz8ctel%2BwzSgFvqxf2BRja%2F4e8grKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9YDNQNvoymmRI4aAq3APbNthJ09fNC1QpJtLj4%2BrgC%2B8G8HZphrRWlZ%2BD%2BqnQ64xrqbAVrqjyczgQ7l4%2BN4iM1k8CZFKru7hxAXevJcutQvEj66dHQJu7%2FHhyW%2FUcu06VnDxXZXqzrAhZ14kKXD3AshJnPV2mK3BcfTuewHOscXSZKWhqrN2KJn3%2F6Eklaj%2B584bgUrDfrHHFhz5QW5qnwrZB2bc4blXHtKvcYmJZ9cn9y6atgIwlokrBqv5Fk%2FDVv6hlL1dpj59ImApqiApheuEk4vjiCL1huYgHf3muS38rh0NkoNc6lr%2BO3ARXAAN%2BD0dNyCIPM%2FTnnWxVzBaxWWjRBRx%2F2%2F8zDIa%2Bz9P8HAUDocg77DT4%2BQXX4XbK6WXFZDi%2FThKBWBMCk%2B09KKvmT7dFiO5%2B6ksNa6s5q%2BXhh9uhpwTwDT%2F8z9vj3mxd3I%2B2WTYfFgjgScCK%2BlpLwQvWtmKsO4X9FaG3JGCafEIjSwatBwfMcvmncoi4SuA6d%2BixGg2F2jEwy1avQy1Xl0IQcsN7%2Btgl%2BzxgJUVNEMJk9UnHdq7c32%2FqbfcesdoVGt1j1NuQbKmMtDEboxzSCCgF%2FrLpX%2FrHI8Hkdu8cChAHchKs%2F4r2s9DaXLyofS%2B1xbPKtZi%2FdbO4H%2F5qwDD8je2%2FBjqkAb6yR%2B3UIcTd%2BvhlFprcIYpCGolckvKzNBRKuVrjbgDJv%2Bz2VT7cKbcJjE3Z6btDUXVTcgv8Eu5%2BWjwiwuPSeP6dOFipWTJlA3qkD%2BAahXMjvtGN6I%2B78wbpKB9yUsLFgMjaa7XxYoKOQRNO3FGyskEig%2ByXTptsJ1%2Bj1E7a%2B%2F%2FkUSj%2BG9xmbwe9OT4A4iyKzt1OXkcTrRCxSovAuUr2XkZ1CjxC&X-Amz-Signature=aa8dff2b0e03539aff66c7dcea665bf5950c9d7f2007edb40f53687c65f453fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXYORSK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCgGBl85JAcpYoNnoY1DzYdJaI12HOTi%2FiqIgzwub7LXQIgHq4HWY3hKlYGw2FLgNnSGDP%2BfYT7R1tKfbLMutBOV1gqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcLTbRg8NF07R1%2BkircA%2FlMkso572to8w9snO%2FgOpwmTSaRyWI1cYQteSnEWJZcbB35UbBMOmPwtKUOSv6M2DfxeS%2F3Ip50gg1aFidU6XCie%2Bk%2FuTdjH5XgRLRSO%2FXf2E6MDOqoxxmE%2FY810CJelr5jDgeOKbtG7GUsgM8U9%2Fylb2w0%2BKSwhYOwFehJImQ3PE2H98e%2BtQzCQrzz10odw02NpnOrvcXSsNPL1IIeKBenWl4gy9Kk7nvx6kYiBFqJheUmoYibc92XrxOrZFZEreD4i%2BSMciVkKYnW78cwjSGStoACFZh3gNC3XDUyd9%2FoUY8%2Bu%2F8Ql5HzUzd0QwlZruhyMQySQ2VtDc1FDbf%2BbR4m2wW%2B1jloWv24XF8RFCP7GKkxN4hlf8PSNRvqzeVAdwUax30jMyQNnQeLkOS59qKujv9DiqXEeaxW4yF2ZDPcRfvpg%2FgJ9A9RxsE4%2BeRntxjAoRcf20ts06OWnM1gWq7sF6q%2FURZahE7vvFmYkKR6HQyIZx27gORLipBkD9wACVcLdO3osoD4Ujwmdbja%2Fn28NGN0gn%2FVZGHxs%2B0vqg2zjwqaHG46lkR%2FI%2F%2BK9ovrydFACEI3vi%2BJGgVI%2BW8zCprLHEclGBVC9yPXDruFV8u19SFwN63Qti9sQWB6MLmN7b8GOqUBLJJ4lIzE3Vf3Hz3rj3oNfTi%2B3Q4cp6llegY2kDlqqEZuxn8%2FqZUsimEB6q46EYTIOmJF%2FLCDV9XCUzQsyRbA3V0dNdncgLTzyWzXtekE5Dun03kA%2BVKBUmlxrCJf%2B5GcicYsps8Rnet41PqxPhpNYYqt%2FANmqslSAdrIYUaR3fOxFJcgDA6mDi05lWcJEIH%2BO9pNH5HwYAfdlfvHsuJdKR%2FowMu%2B&X-Amz-Signature=c12d3c5ebd5bd5ab6adbc2119a501c4d6fb5c4effe61a601973577dbc3ef9d79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
