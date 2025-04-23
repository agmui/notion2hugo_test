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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GRUTU5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFfLOfkR99hzPRMe%2B6Sb6oKq4d6LoNisk%2BTPX5fmY5wdAiBwDXmigDrcRjg%2Bzl3CNm6xmvEmrKUYRXEf%2F%2BqjRFLgKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Yvmh1QspCx%2BMZDsKtwDGalMik0pAmn3ZO65zVQDYObAsOqVjRICjtroQH0Iaz7CW5u5l1yfrdRZXLYlC40MihAep5SVSKE8RaqHCYQ2SXgcz6VhlnQD287s%2BfEmDp4u%2BQxrcG7rQ7SB1w8B8NMHDJdHH%2FJS2WaYebVdoiNtXUMHF4PUF8K58r2Xob4S1se5r33YWdh6rwECsMDWjdaFhlFOFAj0sZsu1I4y6K8y682%2Bye5qd%2FDluuzHeonqo14Hq5ffhv1O4JSSsuKYATAIIbzCqFluGnssrpUR5KIcR8ZBsxJOQ6%2BEVnsxd%2Bi8nY6tAGUInbYiszhgA7wI61iXDDXtkxDbxVEkluopFnOCgcKPDaZY8OGPfrmMlkA%2BYwwH5CqbY%2FcYSiWb1cq0ZJQkASBfmYUeuFNd%2FWYyKm9FKwnhPmxxrlU3DDGTy7b5YC8zUyW2%2FaKZGRxYkGbuDR%2B3Hgctb9O%2B2mqUe19YKayfUpZnbbRh1lZgy0Gnc9b4Zlin11MysT7551KJ5%2BiTl1QDXFMxR%2FOroSEufC6ayk33Zk1VF%2B%2B8PtyP4lf%2F3S0uBAQSlACTiNIGKmNmwW1vxqjxjKjA12x3aMBFwdL2cT7mMPzKkT7VzxpNTkqu3JyBhStJGHFPHYLlocaGOSUw3%2FKgwAY6pgEtf1R0TvsWK4MXB%2Fd5D8h5bnSPziQCkr6VdssExg1K7SFMGZ30Iw9GF%2FD4M19FT%2BuyO7AOytIHH5%2BYnFJOIL59AzhiEeF6y%2FGtNS6tBeFpRlrdjzdzxSNxu9i5IMpBWgewsRa%2BOqjYLBUVSbHuE7y%2FwO%2Fa3dhtvDrqPYYSDnUSO7hAs2ke1z6bseWnq5novsS7s6tuZlYDoWnPQn5rXgOQs%2BXsCp4u&X-Amz-Signature=470ad848ffe483f504cc6ca51dac6105104bc96144ffffa4a9e17cf27be9ff9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2PBIL4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAdVE3j%2FA2E2ArGM8bzc8Q2y988Z%2FKoWh%2BkgbfzqPYZkAiEA41qA9R6MxY5tpSMlk0sGZCFhkaFgeF%2F1vrGDtlxPedEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAixOeGwKuvnc%2FUvyyrcAzVtWkA0z3N%2FOSj6hs%2BTp1FIp9RECBtAdUw%2FMHka1dtu28KOkDpyCQdRsgzo438za%2BZx%2FS6cGloGsN5AZWICMc5FOhef0%2B3W2hIw07xVOEYAjHFNJqXXMkZjwSuFDe6mV5bh7%2Bs%2BRYk7jqx4eYpT9hSriZJcYTbkvNH4PoMbN2k%2BJVmtCfz8NPKA%2FalpXSh8X4huc4JLW9FYbLVjZzq0dWm1HmasxMQmU2ePjlA8rkvSsesuik1f%2BqRc1KjWMeQPNA83fbFZWfzCO%2BuTw6jHKqMsQMB44V%2FZAS3igvnYj8pxANCNX7D2cKNlIpHzWMLU8Aybq7YuZlA%2BD%2Fp55sBCHb1a3ZWVs4NbuJ5rL0jHgC4z0GXha5T1hnd1kTtb1kNvzsN%2FKQoWoS308K%2ForpB0D4RTlfu0Hztpp41TldKtf60H14eNewt%2Bh5%2BhkXjx0I%2F%2FSgf8HmS93%2F1CQvrBF8x2yKrXxiBcNQmo4iNeLSIjPZ7%2ByzICYxM3rD%2FNYdqgOVf3PnSZxQWRmJs8z1heZiL0yJQDrqlmBKM7o4laE%2FIRe6DF1h%2FPyOnDsbzz5ZpioQepdfWx12CZKXWUaWqZmcYRE4M40IgejyWTjrmwMHFGWvZfTeLs8MNq2VfJQwY1MOXyoMAGOqUB8euaMN9XOmcgZadhN4qCLCEiOeG%2BQ1Uu6CVHGEsDNDwPgo8IjAMVjybv%2FUAMhykG3SS17ROqxXw0MKP1W57HpJTufVPSfEB3cAnGMX5LFIzDAd4qRxq99neVY3a8FpO8sbtw5%2FwNsfJnu1jrzvebudoGdpuNQlFtiUbORnWpfM9ZX3bdpUHuotobCBN2nEwlcQ61Lj9eW7LFTuEG0FvY%2BKEiEqJZ&X-Amz-Signature=3ce1225e8c8270e514c6d3f375526362ec70697b583f9c969bf445649a002ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
