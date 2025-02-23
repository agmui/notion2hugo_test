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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YGNSOEV%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOQVnBr4JMwr0Zs8ILf7QxEvIHF3dJmXVvlTcTHz%2FU%2FAIhAOCBbLu1SCaev%2FcUfrfyZH7kx5B6we4sv%2FITuyhEmxatKv8DCBEQABoMNjM3NDIzMTgzODA1IgxICmx46fg6Y%2BDN3HEq3AN8abcmIiAS53T5QtA5FzSgJMDawm5lPGQGI3D36xEf%2BO7xD%2BfhopOX3%2FfCKf1kOSMuvIfwizMoSgCaHJrrRT%2FmbuCK79M6ibLc18GIndd5vc22uCzQE88aeaJ27q9WXS2ZJ9U%2FXa3KKfW%2FnACRbnd%2FnLKzB3nLf2L8jyI71wNy4gZw38OOvVRwW9UdkXgQ%2B8pPRsiR%2BjkHhW32ay3mbmxH9doFPyBv55ZFPCzuWOmE%2BzVN%2BX3UdWzRZ5QSNukgZtYE8RDzcRoeGamh7S%2F8FT0LqjKpXsB5n8gKzyMhv2pyI%2FpfK9cGhzwi3FNhOSzAKFbOiCvXi%2Bq9%2Fp%2F0aDL%2FaTfGLFtThpqlJsPeeDDLkOYUtGognNK8tTx54ufgLQ4KnwPYBwEO2sxb8DTLLkDRwQYTJSTqKxtja3h8YFZo1jmm7rDOZ1OwHsTZYaIT0bqJ%2FWUlollB1XMQqCZ2sQcSp9hyYrgsjGAx7rDJNknUjpdcOSIoVFZgUF5LL24AUA7gcf0tDLy59r%2BcichZSgFnn8V278z1t9fDFZ4O3oq2Dzun0ZMkv7dMbMkAuwQ9Z6EWu3akrTCepF%2F3GBTKexqbdprP8pHl%2BE9NMnukrjOi3VALIPv4igJEzeUAUfcJMTCXoeu9BjqkAeryXrC%2BA%2FopNZFkSTrnYPopdloyjlFyou88cdUJ%2BL4VEQYH8yxusP8AviOW3zFDR4C0HiBelK%2FKVap08T5LYS8qaQIm2P1TtqUyyHrJgbpYMKn%2BSScm3fONr4Tjs6FEsEG5SQ%2BbqaAhk9SM3268yodxt6a92YzIH6blYFevUsLY%2BpW1GsBNpxlUmze2LyyzE1SGzLrEnWQN1WJkxTMcJS6sYH6b&X-Amz-Signature=f837d60b5ec54d301952e18835c4cd9311076eb0d73ff2cee6ce5bf5d4b04b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVXECGD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqJtGH3BML6GOAvgXctlvxQO7dsuFeLteWEIn%2Fd8ZW6wIhANtzz%2BQgHhvhmA0vrHWWZYrS4UKfQm9Dn06NNycNx2xpKv8DCBQQABoMNjM3NDIzMTgzODA1Igz1BI7NO9o3R%2Fib%2FAsq3APYmetrissAGRbHlVypHRiPOIxFzz%2BGZjcK6T1Axu6nGUpbygPdur4oh%2BLy6SA0n2gLtR5hWoLgGFzUZpSn57DIEE9nPTVUU615wiXEGiYud%2B0XEmbKSFRyIYtdAgLeDfF%2BOBDXsG%2BAwXupgLyy1V%2F6MB42jUjlKlV87azmHq359eBGxzmQhJgAthkegsXNXRmEjKi5WOYbpZN%2FxZ1nmhbVS%2BEQvZzUy%2F2HddL3rkwDRQbbXgMje%2BmOGaaAxbxClsN%2Bk08%2BVbZUeEftuUltwa3Zf4p9yQwYIAABOZqegcJNK3CQyHGBv%2B8dcJrCZ%2BiGAd9lalEO5gtlv4Bza%2B3qBwtmCLG9cVwsuze3oRSBy1IuvCAVJbgfDkQ23SW34XxktCRvOspc%2FBf%2BcF77Gm2CjbVhu9dQ9gYeDdXEBDHOlBUEG2iTq3vgB%2F%2F7UlfdabVVuw%2FSjZylR%2BGbsYgSJ49u7MBESPO%2BkHx5WAchlo8ZK2FoPzDT166pumU3dCb4nIaOeBc2P0A29I5OqGfJ62rgtAsrBKSfDjEpvzTRr8ycRrwplu%2BtahWWv%2F9Ucv%2F4gIN4Q9gu4mGpv7uh5NNC9cXSR%2FJpZQZOJbOmk1kpGdmoTxH32SI52GU33I7x7TyHVTD88%2Bu9BjqkAQwGmSLZltm3LgdN3DJT%2Fdvi7zKKYlT1y5TkW3d29eFLHpogRl4ApIXnVBv6BBQPIeL6%2F%2BS94P5Uu9WFqx57h%2BXLB57%2Fpvt8ADKpAEtrvfSWNyFPProP2tS8%2BcFvi0YnO03bzjXZ1q%2F59poqTZLfR%2FRFGIfVsakGz%2FO24xGHhnHtZ7tPzMj3%2FVSuKzFop2r26%2B3HUyrXOJT6PfOj8ehI07ew5ZY9&X-Amz-Signature=a909a1ef0a3b5e203219cc29bd8a689d3b36ae8d1e392932ac801d54e578fe96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
