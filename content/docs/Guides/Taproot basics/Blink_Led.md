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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5HYTUSB%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBIbEzCv0AyD5o6t0dHU%2Bi5je1C2CJbhJAcSBQ6%2B7wFFAiEA4pqUuMrCpnCXzEqZcTAhU6%2BvP2AF8UbL%2FyRLyoulkfkqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKiiNcEFJrlntJHaSSrcA19GcRnT6h%2B4AaJ5zR7fcz%2FTYDpa74yBH1Dl0d2pSY5Jn4CsKTFRVShZE7I4VNW86XjKj6nVmWDD9444%2B%2FtgBJd%2F7uG2TO%2B5RHrfHq%2FvzCAAy1uQJpad7dv91GvdWkfMdlJmrGzX8D2WT5GOjo57NMZveiMZ2zv4xP4CtfCjdUwR7zkuDVU%2FL9kBgyStG2nyPtK5h%2BHNNvX7Q0MQz0PzmqiZQMYLRS88hovkNmdo8vKp9znJ3IyG9Xv9JSSlljgXPjFx7bkBHKGgNAfjjn%2FVdnXqgG%2B1LIwjYfoDWt8Fx2tGT%2BthtCgcUri5TNiQvQm%2Bq6DmYnF2wiJk4YU9L7rt459QgB0YVpOQVfVjveFawIdzv7MR8EldYUxOxEeRQ1TEexQrGFTmsM09ZaJjogsaiVSuyKUM4vDR5YL%2BF2MuUx6XdBuZJFS6SXwUzbizWYREQ5z%2FYI3eZJ589oqlCH8sLvg9pThF6ftr4qia4o2pEqb%2BRVI5luOaVtOTR68NxnWM6H0xsAJoqz09aaATBn%2F48kwWwuzBh%2FceCFZP5suvJmFWB%2BeLAPFugQlFg9y%2Bu3Xg%2Fp7xylwv8ByOPZf51PLiDz6cjq%2B3TDpnepApoKp6fdV2ozQrfKoqjMSAofIUMJPi98EGOqUBBgkjZ54Ob6zCEsxik3Sbjm8X1enIB4K0Vqt2o0%2FqA5IlzS8K%2FWEXtwwB5vDOtlDbFCUvSOvybg8x67mghjIblaP1uFWotPEI%2BqeAyaz1AQBGgtyNj680RWjy78yiONBwi8KVuQ7qwg49ITMwceux89RpMTItLTfG2hs93h2JUm%2FYM%2FQRe0zw7BYIJsGxUe46xqmqeEdb513FakBRddyjm96IzhtV&X-Amz-Signature=4ee07231eb3335f31ba282c90752a534275e468ee258fb49c257ef072694a158&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFVARFEY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIEQiMTCh3KXXxGByxBGncvg0NhMFleeTxX9piZw7ZbESAiBsv6TjsW3jj%2BxsZzWf3%2FSDVnrcBRz%2BNz7ttw%2BBsWNCjiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLxhSpMz6BOvlaRiPKtwDAazXUYR9gaH9lbf3iyFWII30Tb9IhMWRPtMgNK%2FjxbAgCSnHjxIlHizw%2FD19agffLiEWqiLYtNJ7oC6aFLfBOIRZ1ZXk2E2863QKvL4b%2FkmlOZj4%2B6yXQGm2dDyR0qe2lBVHUUuiYh9pFbiFomhVcCnT350jq7clF2%2FjaQVOYxY9pgS6KeDY%2FKYKLKwZeG73QN6zEklLQ%2BpMXTb2q0HqFRmB1wZIAhEXsk9oOZlkejk69H%2FM9Ac%2FnpkErgEHJ19mQM9hgZBmuVmYFwLaH5kcJ6kq10gOcVKzn5nMiroUdkS21O7K4kYi5Dnnvyy%2BXjhC9x8ZT7XIr6QHnmQZwSy3%2FJM7%2Bm1yvxF1rBO%2B7a250BnBjKYV6KdTRySf%2FCaOfXOCuIYr1aX%2BhhMFE%2BMCI2NrrD%2FqcKH9Ozh%2Byhb8i1fiH6cN8vH9sJZXf6f1LWLG56FogpuBMymj136JV2NekVdpGDmacnwGtBwNbQ%2BqqOlPbeTRbID9%2FDbOBfYl7qiFRDATiIq6uAyjISoBeRzUcKp28FW1Bu0OO%2FCOJOjA7c2CVqfMSHag%2FhHMk%2BZ222E6aEVlxSEP7HxT48CHAwWG96NNtkY7wrRrMBN5%2Bijmu%2FMVx3G4CB4pzgm%2Bf%2FxPWmMwieL3wQY6pgEdjPWLJErV4pLam64bAxVKvtxnpEXCwGvAMrsO36qXQBC39XZ3Y0zwOR%2FJaNJLY3q9kziAL4zDJGUosmCK4x6rtsg5V57t6FSqWf0msjPptJ6td4vyBOCPTTu8LMeHKyJ5YyTREGJxSjCjF7GP%2B9z1j4bozRG2avfeG05ugnkEjv99dVzHkbdJxjoBy2VFK2J06iLKScQyyI8QMxTyU%2F%2FTs1zBgkvX&X-Amz-Signature=f17ea98c61405b75ad79183b15f07604209e91431843560d14494eaf8e510788&X-Amz-SignedHeaders=host&x-id=GetObject)

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
