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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626GW6XEQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGuylIbY1VqCNzaAzSDoDPoF%2BVQJwPJfUYRERbaKrM1XAiEAtFoPJQbmpskhz%2FesIaUGNbCnLTWe17dGAxbv1f3zOQYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDH6Z5PCyzC1DKsTINircA8UOgAnXctLImbQK76xbe7HffBeVfvglf7auI32DQivK6WXmsYR2%2BdpCZAxTeVe6U9BI9BTi84pnf%2BD5kTzUb6ZQP1V1fuWFAMvCFUqBXBaoMJDPR26TFek%2BLdRY0cP1dQiorIarWURHUVbWuD1nTcgRG6pApj%2BTUENoUhNU4BXV%2F35O%2FSpJx5yVXFjiJz4mf%2Fi3ejxWCOwPpt8MsNdpvRqO33n3Cqy7lyckr8EHNmwZRh29USOIyrf3fFHAFhMfzTjT66EMdNu55vjT4TbfwMyd7bkxbeJx04Rd1Z6Iw%2BWuuHdgEtQnGZwRKORxKTsp0Kfm%2F1AusNGXfmb6WhgofHccucVWvxiBAQdLHCXDA%2Bo1nbk%2B7PCRolqoh32BbpFLeZRETlYqZiHjNtZYrbKzO1KtsqCWrDbqljlQD%2F0VG5aXaGP97fo2KcuhNzDEWT%2B%2Bu99SyZTzPJAnzoO3FUf8xSOqVA7sNqCVK6BIz8LcMUOKhkU3nqoQfQHDotNRuBNKnYxkUetHVxBVt2FkHtrRlwwRFvkolpNSWUQ5vbjf58Jl8IO2HFkmEw6TbFN%2Fo1zfu4cDsKVpXYpO9Nxv7sNhBOkvXer1IzlvwimjgKxI1GL58vox8vfvpxSV8OSzMKXo%2BMQGOqUBebYPj1EzVVHAB4qbp4NQtlmxcl423eZr8nwTxgScMJHDfc4ddJ%2FfMQmsPt1fSuFrafxkWUQ9NGf%2Fnlk0HK66ElD3gErxCRiSExt8DWnOaw5azGMo2BRix8WcYLpDAydsp7XXimqoIdjdZK91RZKPR7DAvWQ1MsSlPpWlek9rk0neJ9aqvh944hxrMbAG5RoadvwJffTq%2Fi2dZSAuhZtl2EFmQpPD&X-Amz-Signature=e56d57b3605c1a0067101a4837aed7330d2e83b137766443fc71ca77c42d5b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT66EGNX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDEICbb4%2BaPJ3oGnjKMKLWWSGSrDAMHU8K6RXIrs7XkmwIgJrYtJ3vmn9UQt23rN%2Ffm001Lv9QFWUAvoVVou8f0LYgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEV1Vw8A%2F37x2LyzDCrcA67mvtSNEUKCiAd7HAAQjGkInrFjgIa6fFUARCZvGFxVKaN7PWvVWFe%2BF%2BaOZyqrI168PcupYAuxrgSyIDxHomd43thKYTyk33A%2F%2FyqAMhMJL%2F8khIgevW35Cij952e8ArHlD0hM%2Bimvbg9bej%2BeMd97VznoqVqGGGufi6QjB7%2FoFxjJhkSRpQQ8zNBzIg%2Bs1kcOynTqcBjQmL1U79EXBajPBORt1DP3BwjAaHNT7nSfWrzxNSPsTZgGu5y0L4H3FZX%2F8580py%2BkPYnU32YOrt7BOi%2BFQKG6DP5OiAuiNMpgT8lQXyU3S8MvL1g4gQws8FWEEM6VHdYLvQjSy8yuqtW3QNXrVazO1ooU6JqZxcuOfTiTUCwpi0PAUULeefh9WdispDvEGilXVMCf3Sp5L0B4lyaptvZ2sdxuRMiR27ozSTc%2BKpGoOI%2BKWl1uIad7paMEpNTIfg%2FT0ar70naooB65RMjYRfQYG1Cb16vl%2B628pL1yRiSBS2p7iiToR6Ybk09BwvWzfZnaRjHU7k1rQPmAregsd6cvFIgRCsB%2BQ07UeJzYyKE4T1xe1myL1%2FuSR48JhjJEncOjHD24EiQKihQX7N29kYVJJYrqw7S8EsI6dHzfohV%2Bnm6TJI3DMK7p%2BMQGOqUBP9riKVixu9wIn2vREOz7t3vaFbpFdiesPvtZKklN9QiXx7eutPFVhwNaLtfldEg8hppBFuqyidh9JRkiiCSLw8oODHPtq2hkXAcAvpGWfm6Yicz1%2BwCCwjOH73NoTwxeKNKX3L0Q2xNJ9qxRuxfK%2BuuhEG0J%2FVUIPkY%2BVd5W0AXs%2BmJ8jCp1QmG8WAmFnk9lhampYm%2BO37UQNAeREhKXuPBuQZZg&X-Amz-Signature=c2fda4eaee9f9b08c10c377918878c5476568282094ef6c0b5a477fd67b90879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
