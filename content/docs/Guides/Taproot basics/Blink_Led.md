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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCZL3IQ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHZZBhnIrsq7I2XUIovuw%2FROmvCETNIVeUP2tVIDG6wUAiAA7yRescEPJUYH%2FPn%2Bf3PbsVG%2FCdbtk%2BsA7F2QdfcLuiqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwdzS%2FjB7CrvEZ%2BKtwDdY%2BDCSlhE6nXzHMRGwRlTiTbZ8ZF1EiJcv0%2BP233xJ7gcM6AIBEX41YW%2BLfdx1tAieWv%2B7KpNumGRTEh5fuzBKdhwistB7Z%2FqvJBUFv8xCwgtoTdjdg4bKLdlfjlH3ddHsELz3XPRCyD2QxYfaUl40AJwCIXXsD5EDo9YduRbcDS0uLkRqi3BjO8Jtv95EqtXvIxvW0a6OImeKQqQsUWpMtALQ%2FNSVEIpM7epslUA4sGYJ%2BX2BI4F3ZoxKIux5EFnulMUTSFBbRuLVlOhXz%2FTguKEv5aP9YCuFq8g2PFK7Pf%2Bm4ZEOqG96eQwCsxkHxYKQg4DYob0bgO8NhSG7%2Bz%2BylZevWVfgWD%2BoCHh885c%2FbFfFFqUHDK8PaxrbHAiPKeh1tKZJr3ABSAJnFxeQe51hOV%2BG3AUK3d9RqxvZl40zblvT62BmG2n%2FG%2B%2F9SjkRQOCF48%2FQmBcKhvA7fIJIgWxWpHcvJ8znDvcGQH7x3NJ3DIZ2RLrb%2FQaUF0wMItoNunHPb80cvMQw9zYaSWX4cSxCp0ADZAfskt9JWK0wS1LJJuFW6gkeMtzJXKZ2CfLewjO0OnXt1bJg1VQXtHolZ%2FAzk%2BDjlXAOGr3964hkK2vPHLMbHNtSzirEh5AOIwtKmxvwY6pgFU5Vnq%2FfBiq1oCx1okcUfTxncGFkyx2MorxUorUxvM1qoj2ztOqtxuJIQrPjDwk%2BPGipZKzjERCWCdOcL02Wms%2F2oKlczdStHvNVpIrxVmOxBaArasto5I7bKGYZUQXHYrLFqLuVHFyTrXaX51IFTMhpPEO6iueO52ZC9vCHykvB7qTLqN8oUV2DHA7MClgcZaJU1BKBMM7oGiu44WzaJB1DLzeHsa&X-Amz-Signature=262af31983d1c486cfc0e4af8134aec1c056d8bc023990c0a49de58946716453&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5RTWDX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCgGBYCMiZ67pTU2Je8xspzoSDygQu07BjkTLxA4KP3zQIgXh5%2BenK6GX41CreSbTjIW2vrzeHVGwaGOb4dhTHyNxAqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhvKDHM588KQ8%2BPdSrcA5kAIr8HQUSuvWoWZhtIGu%2B%2F2qu7Dk6tTYgmb5er4jvohI83onUdAzXdjLdFZDUGbCCdSSlbA3WCJ30ICpVWjggA7uuflZzpX7syw6WlR6vDNndAh1%2FQxBbZ21WWvuhY13RWgl9xCSGnl3%2F5fgpBaR%2BYQGTuHRAEhIyLsZc4v3Fe%2Bcdd3kXI7poth99HNrfJY8HsrCIo5c6l5AIskmqJ7%2B%2BeONyxpgtxsHvp5JrUkRd%2FpXmG%2FpIEiI39tH3ixM%2BiseSyt9Nnxz4JqFZt32wAEa2wUdbDmlCg%2Bi0pbbISrGb3CinUH8CK%2B4xOC5jYWWQdPCdb6GrFhTHVMgaJF%2FAwxW5itwALcty%2Fhdj0E6wcbU2kRXy0bTUK0fL7A%2F3Z58VWe%2FnWMx4i1yPWWN9740gqrM%2FqQJV7x001pr0KYgLq1JGx4YETnQYT9BXVUToNZkgwEIM9cuPuHQY9ngSO9f8b8Wb%2Fu1KsZ%2Fa10r9x%2F%2FBPJ9%2BK0H%2BbJRBOzsCSisoFQm7dwf9mnTuZyvDh%2F7RNP8LzoNOdN8OsDjUS8sM9mlAHcjDG6YB8ec6EqzL0EIUxXBc6y6eS9xXRWsXGQkmeMcxvAMu2DkjpKSFDeYy%2Bi4cMCcjguMKYy%2BSajTk%2BDrXAMO%2Bosb8GOqUBNE9tIiStZ2B6CHyXzTmTAMFTIieohleYDklaMpUdWPA6tanfsHyDv2wJphjpNNcBh5dFEubgn4MkVSfox3d8iZYV%2FyTVNpZ8cgLeEB%2BBHywwBGmq6WwHp1D4vnLNx10AGJff9P3utC0MGUQHXLP%2F4fe44slwUH64w90EQcJVTjmVBSTaKR6DWaTW3%2B0S38Zh0m6mQekCnnMTWL3ueEX9rqwvDYzT&X-Amz-Signature=bc0833f2b5a9fdf11df35abbf286e9b289f51b192c91d4665f6b050ca0e69f03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
