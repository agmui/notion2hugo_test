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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH42ZZNN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsdIfTao4CEVc%2FZO06ofNaWmxcKoGCA%2Ft3ft%2FVsvOl1AiEAnNXFUFk8XxKqLT4T5bjZ1V7sgMkYALSu86KgwAfephsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWRT75saJI%2BTwnUgCrcA%2FZXehj9XjrWFG7Gg0ZYkkScqYr20UIHGDNjxhqs%2BrL%2BXXsnIAkktHQgbBL0CJfkTURHgNZVo0lU4YWWD2m6ESHDY7sR8SFoJCDcX3wHsZdDzCR60VgruW3Tqyw0G4%2BO96c3HyQnV7ltOaYdcCDJ%2FaR2QwAkQfKiwC6rqPefDmKIUOKkV6dHn1ugg37KErb9VP%2F%2BERyInWzo8e3AcW8MT81clnglRss3wYBYtsBh2Omo2h5ikuwPN2FUAsYXvQt4G3PPmOj%2Bp8fTT2Gr3EcYmnofqEiG9ANpvqtPaUnvjFBKRd0hp9nhXd%2FeJ%2F4qSFsHDmL3u7gL7YBKsrVmuJJB8WfIIUVBWenc3ER02XSjTnl8UDhxznZsXQbqOrrUQR3grldCxKsg%2F%2FJd4jzHDsmzfCyfJEg7nFQetknOBEl82lfvDSk0atqvLm%2BF0DCbsnNdEZYFPaEUBUZjJPMJ92jVy9GS4odWCnNX70eNcgxjTs8vt%2F3%2F95MXM9AOBdQ43NOfbr%2F0MzYIATeCidMnwEa1Emovg%2Bl%2BfR0uvfU%2BGTl2RqByyLiflfnhwhybnx7masz%2BnpIPyyzmTmRoxKZQ7G7m%2BrbDnLMYJ%2FAM2kzJxQmTtXxxH4swXKHsFdiue1vuMLzMo8QGOqUBgc388KvZuvDNeipQoQuAYVs8BJD0yOdGWdLcKOO4CPMIqDnP%2F77sM%2BppYwxXnDZBerk%2FX0IP%2BNIedJgg1K%2BbTXmh9wlBABWrPufzXKEFFJwlBcsMbZDkdQoeKsNhS2LNfcbcxSBfaGpKz56cEn9E3v1rLzUPpCyFe1Klk9oiL%2F8h%2FuTQMDmgQp5JDc4KOfEBEVpG0RgONlwc0V7sbnPq16y5qNhg&X-Amz-Signature=b8714e7098fa15c4a523fe9e453f4d98c592430fb1163d6d66976254d52baf62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI2WBI4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T161143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEK%2B4%2Fp2xnFl8Yw5dzDyYwuPRlTEeseip86HAkarxlJgAiBoUpWcGBuZd9wM31xIAluwJSbwxvSvwiHszo%2F9LwK0KCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdE3qWO03XCwVpiejKtwDbbJBw6h4bKjR9LOSiBldGaevV8uspfXF9mMyDvhDRn5eFnRPFsoAljXcjC%2FmX%2BR64bACWjhqQSEWXe2IArRTsagZ3xj2dWQG%2FCbq7Ekd5Yzj1L3Dyt4K4ylicg3YDJZttKujXb7T4M4bDh5HQFVCJnkI3t73qyIQI4bWr7NvsTYh5M9X7BRliAbsJr4q%2BYtGDJffF%2BqzYsDeX9OM1ZaGVmgZFf7gBll66vaTNUfBfEChygIrzZfrvVRPcigs1nuRP9B2maq2WIgVXpTqJ2kM7LWEhpbxHasKwnkIAq2X15lCEFW2Kje6ArTZqurdQa1MuNsRym7KMuW%2Bfon8Le1U%2F%2BtWNuT4Uymi4CeYE01vnhHKuaXgNg6RkFZiukx6%2FM0Y8T6xRLivS%2FHLcNIB10vp1comyLicg9SFfBYLY%2FolLkzYauIBQgz2HDv4oW4Rf3ynYI5CQ2qOhZLb953Jx1iAmnjGX1FCisS8Tp3JqY4nt4Nsg%2BX9ruFFqnKb5mOFKQqb8bcn8pC8BT8qragzQH75x%2F6T7VJmp9RMj9cR0PdA54R0bEnX9PDNKNbZGbkkbTxPYmCeYlr4xRi0%2F%2BWXObVoZedP2L636Hs8Um52OwW0sqtKFQWAyS0OM80V1%2F4w4cujxAY6pgEe9554IPFppbLtgZkxVLI6edTv9Hpz8iO1M0M4lnTqIm%2FATo1c%2FZY2DkYirA41i3e6HJCB7wFuFyI0YtftELY8A%2BJe%2Fs%2FpA5V6CJQ6TtsrscVOv3kdYFHnrIsaplOx6TUQGj9Agx%2B2Mcqr%2FNflgbJiwRAsMYER7mkF5NMmPxCNWRcf3CyDG7SAn%2BeLjIJVZzVTiKhaqYcPLIo0%2BrF3Giu%2F%2B5bpI4kz&X-Amz-Signature=fb0eb77d46fcbc353ed767e5b37c41b0a5ff82ad9084e44df809807425ae5c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
