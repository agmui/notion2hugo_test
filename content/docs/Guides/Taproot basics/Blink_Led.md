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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3Q2ZVHB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCUcKOED5AapYr158wNTvQxD5u9hBeE4mgEsXVMDuF90QIgSrNgCjveK9ALklqJBuVn0GcU4T7uxLCOeaDrXtxo46kq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEop%2F28F2Z3w2SZsHSrcA5wyetrj2e7q4OSrQv1L%2FSj7ioXSb3%2Fg41Sx2lqljSE6oDIChAUwW4H%2BjNqTQ2c%2BlQIEPMwUOHKQIppIqqrSKEdPxlv9rc49E%2F0vHXUHYNIG7XyjZSzoONWcapISo2JIm9w2Jlk4LdB4TmFbwCg0nlxWXKcKX9gWyhuNk%2BY2Kdp%2BaGt2LczQqi7vdiDi5wxZ%2BvCAbfFBiyKVWt95py3Tz1FdX66X991CWFV6BPbhIVJ6BRxvxskx%2FAUk6G4VQoe%2FYPK5rgCeWrR6%2B25ZZxuKU5QPvXj7sKfC89tF7K3zVKHiFZzy7nJVX4NdDCVHgcLOQvhCd0B6rmOPuKMbIyCSaplsTOHIWGs8RE1yI1UJsGD%2FWhEWAL3P4Il%2BzfJg4V3b8ewNplYC2SndP5smy66XCN2GU1RkrMnyfjZvhKodn%2Bv%2Bd%2FSXv1BcSSn0dXpGqwf1EFPH8YP%2FL69yP9KtuECnWoMh%2Fgx0ge%2BRdu7%2Fc0ZN279KaOkzBCUyJkLiSpOywiY6HUNqbnL7%2FHzxLqse5Woy8kDzdZ3TTlxnTheGX30lskBb6EZuDwyksmhwuB33tR9tyjmpMjqpf5ezcQH5cE2tX%2F2%2FXVORSOTnY4q1JcGY07s%2BelWx%2B4TwQhmyx55wMNTKpMMGOqUBwEyRaURJ0aC2DSEJc3CG%2FKQgjc5hcvu1TWtkMr1AzcRmp5OpVtomqYSz%2Brfuvj1x%2FINcPld2wV3HxHdsBh%2FTufrBNBhdumdlzanFsTfGXq5epFi3k2ceMNorhiKWan72S366vviKtmG8Bxk1njZjbtSjLpmK64Om0ezUnfh4So%2BQ72DVeWNJ40iBdSQX9b6UOnQyc05rLm2eOLvV%2BD7hRU7tvwRa&X-Amz-Signature=65b5244049990222bc773ecf696f2572725a3c4f540c39302139b830cdb67039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJSHJ3OD%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFRtdLeZ%2Fwfca7e556zW4sPKtmDlqf04b7wgmP0Jz6C%2BAiBmeroY4ffg4FIhDToZjBe80EZ4ciVaCjNW1ktE%2BZK7ECr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM8J2fbMEWExP01cBAKtwD0pNz54jjPbgNJtMyEFVkXlsxq585yUb7V9GeTipE4eexMQclBQBdMZl%2BNhzSxZ%2BIEco%2FPmMhapt%2Fe2NtUeGjspIIOpAmIBc5RUVSeYW0BZt1e6Hpw0JocGLSP4hYdHWi3o97vfrp0bgYbJ0gE0huRXfS7n0wRAlw7EK0d%2BxAPK%2F3e%2BY1VLauAEGoriK%2F68SexM6%2FLpIetIypPxokoRIpvbgDkYeGXi%2FNUfQKxoRT7r%2BdxL0t5QWRXS5SsukQoACVLITSgYq9WDDtGDvNaW7N5KOo8KjgkA8BPHCHq6p7t12jJ1kj%2FHIoOKso9UMbzs%2FRRzG7Zq8uI%2BFCTwVenCanUQXQMCMX7F7ijQOvlRfU1zVZ9WMXxtAlB5IOpTNx4xsLoprNkGCyKxRsi8nwO30lBSSGNSdpymObvvXPZY49HzlVTQNoYZW43egN%2Fg70f7wU8Fxhs%2B7omTHI0ppfGjMO1wCvPWj%2FX7V%2FUVCGmfetSJN%2FuriEhfCgf6KEa%2Fb5mKEs5etUzzQSil0KRJlg6h0oZCgH39s2%2BafQSXodAmWXWxrSTkzKc6pUlcmmivpzAlaa6G9entxORD7FU0PXYQ31fuPklVTmavRQGBlAA1kwoQvakh6033%2FjTdV54cYw28%2BkwwY6pgEeG%2FInR4sgo6KYxL9hNiAdkQl%2BtANROg8xnm6vmIGvGns3cNMzRb7Oxr0W8Ya3pr4fWhghdiKyJLkj%2BG6XnC2jL4sN49ohcdQwvezc07NrTnX4zkL1TjqlCL39O65CIruSNGpEIvzV8xxWiQKRE3XPuSR3JYkLUj1Je8lAhU6f%2FkDnPF%2F2SMMtyX0kj5qwPaF8FtnTTTJ6vihYBI9DiYt5LZu7Tym3&X-Amz-Signature=518aa7583164924daad219adfd90ae87306d4c32b9d3ac9cd94dd3d34582161b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
