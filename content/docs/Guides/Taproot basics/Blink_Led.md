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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDXESEIW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIG706uJI5X%2BOmesLIK%2BgJ7%2F7v6PeTQmEYriKbhczdUL%2FAiA55yWfLp7R7YM5fwYZYCOJvdYC5MuWiSWMSwuJoNt55Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMqPNY10L8BRf3aOdkKtwDTO3Y6utHZ0uqRIPY3dPWA%2BGmUNz9Qcvwq6EpRfZpgBMo7N6wMo8xeo%2FMQh742dLrv4JFuRYxiJlq2rKYBgtpx%2BLsX8ao7zhzRfPLamUpk3e3ArcT5NFDKldnfZBDlw1Tzd%2BkLJoEqsxQP3Hw6v%2B0ytEr7co9pt%2FrX3RY3oNGJfoflDr4UQcn%2FZF7KIFkOqjf8q0quUNDic2IJcoDbogDI981YTetaB3l9ISbL71mB78NARb3iPGE0SF3%2Fp9OlDhOWbetKsUAk8VYidI550LdVZH3nHCnItr1RbKPzRWWuqKGaQxTv3%2ByYperR69K4yyX8w%2FETVeeyoVNjpl%2FzTdAK9Bx84yiPF2WoYnMVsD3j0TSPloLmXo3UIMLYJ4yFN%2FdhTnjz5jxsPDkgBEWEsRnQiDBfF7WWRg4bv49DYgT1i8UwCYbOuToWprkEfmCoP4odnJpRRF6VmBGd5srbImMXXmIpesBNflOEawsPe1uO8AceQ4LAq8H6YbpUsB20VRdRvQw5bF08e3FkDrA0SppeshjjMd7QsVAILyl9sUEK4wJfSfsDrBO%2FAR37cqAThjpdPHeUf8k4maGayIliRGxKgvJ3XeNH9F0ZFrLhW7%2BLuyZOlq7VmNMJf0VzxQw8KDVvwY6pgEvrgG6z9osOztxD2JXhMdhThC7hViTamhwBpFOnpIO7ylI%2BcKWEWXM6rvKzNngkkJ40dtKd1kzu2fbPk2Z4Fd%2Bbua9zgX%2BlgWHpPcJkbiCMlX670YuS0kmIimL6F2NU1nbs9FNs6C46ygarlH5so%2BxOubUUvkoVbWDJlbM4ZuqftvNFSTBZtPopR2pa7PQEcjHRkdfSSV9SQIqhoNCnFRBbzuXJoGM&X-Amz-Signature=f8d2ceda0525b0b57cbff2f07455c96d5aa73e6f7b72b067f80b5077a8ffa042&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63MYDMH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIC8udcQz0sR56t9VPBBdpLsIqkkQsgweoy822z4rVbrbAiEAl3BdtuR2Ax2ajK1GNodaHuXe2JFXp0NI1w5fYq%2BrZNYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCKXikOeUBfcRcuXhSrcA2k7U2wyuR46oFIP6MdoqHtpFkLNDWt%2B%2BbgiwsbloXYUdVsEvG20uANg6nfTjXqsqxbGWDz7WHLETI%2FyB0j61%2BL%2B%2B6%2F2dZHA%2B37vs1cgjDBrjPTXZpkZ5r1dwd3D53eebMCXcLzSIxsEPJ39qZTVZ6b4T41VioWnKY5zeiLaZQoiBumaV3IzQ84IcpK6RyTiWvdaneZxAI4clFNIsEOuxUCmBVUQGj%2Bw1IyJxoQrHG8pEOJ1b8jwDTQTtD38NSBk28l7itgkDDRnABKlauCuSkeZbfDdx6YcxpPxdXziEpwjnJek%2BWQn0yUQ2Z%2Ff7cW%2BEiz6ywsFZVPNNXvwuyp7aO%2FIMxZx7OEVwVAa%2BuZfakGkfSDe40J3KycroaLdA7wpOK9GycEqTVr%2BK7jDaI42t653PnsW2Rr%2BWJL4hknifUKWbT6tGqGi7AohXNS93ESgYYQ8w0eDWwZ0uoYYfOF%2Fcn90BKlggcgXAeDID1noDBP9O7%2BusOU3Yf3jTBtrFmCMqd07WH10KjXpZyDxPF78CnGuYt%2FYX%2FFHkURALLqFcKKFc1Yjk9uMNDtk0GdvRdZhGAOCsU4sxRDzNYA9qBRU3FMAjIShaXWEQkr6qC7HG%2BM%2FbYs4EvUuAySRw%2FSEMLeh1b8GOqUBDehuDqf2kyhYXNgdia24K0pTFGtGgJ4iBnsE30NSWMZa2z5WLt%2B%2BgBVNfV8EiMwcVpK39BOysPhjZcz3z%2FataUfnrAIeLIZudAb04huChT2WTxMFEe91UBbbattFwIxWMiqaG5qPGWF7XezvhTS9ej1r5qEiAMP6ygNpeCvY2z3mF34amJeVsVLZ8EropcnUDXCDrD74%2BQEmsceeK%2FIGJfUxpwzh&X-Amz-Signature=1bb6d27a539f96ef6c923a37b3bc664a476c493cc4180e97f0a5c07c3f5209a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
