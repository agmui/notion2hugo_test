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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YVYJLW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BYESxyX%2BP%2Bv5EN958Refirq80DjSiLmn2krNxrKYaIQIgBkTslZVuKgOIvowRN7KtCAiiTYs2A3TC0bTucs4Lh2cqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5yIYj2v%2B8jtjJvxyrcA0yivQM4yfrG%2FELHy%2BMNlTAgyIBNXd4UECS9Bm%2FOrPCCVSg1hmLfmFNABLc5Kgfn8XU98D9xaAkAdOeDDqwXmQWJvx4qkstebbA1s8vXkYsDvHZ2%2FKEwvcS2LpZL6fZXI0KZfbp1Vd66fOl7aExDnQVplXJzJpGYZL1KghjmDcCSc21SUogPNVuFaFVG4Xkfqoy9D5%2FOtGV9aAQhFkPE946j2%2Bb2yQRTGNLSjof%2FA%2BsoWdITjnD%2Fkl2LSbLZzJ0cYffIK1tJlfnO8RPnHP1isWACsIC%2FKJFByImz2e6BDJ86EI2UcVk7%2BmaHWK%2Fd2mHxXJbe5rAgqE1e0QmQZN0jdMw3kAiw0Vobhl8B2GQTPdsfzMc5%2FQxRIwuWCHfqWo22ceypHvvchZaR4f7vDWutPjo9I4fjQto0PEJGLJt9dObHI4Jw%2BbVXMF5guvmEHSV%2FeDuCs89mFuaLd82TkW%2BqSpICorMxGCZbAqzJpN5kf9O%2BBI9DkStCT64h5nfq7TL1zot9Z9taZvPryF9KQSLHgxBzj1jlyXTRUXTeG%2BYHQ4Ex7eyWqhyicr4UWNx0OOn3uxkkAo8qeEOur6ZnAiPKJPUbadHvxkxqIvThPFfc2%2FHUQNhgApX1jnQHiB17MLP8wcMGOqUBNsFjp%2Fm3jbJKZojNy3i4XIdsyT2PB%2B%2FRCO2aCD96faHyVw07QMV88ctzzHe0ogjUNkyuB3XkaiPLeJl3jNUkDWtXhE%2FvbmrGtqomRFHaeq1FS8FfkKb6hhc7pUpQPqagIVyCkdsYyoJedD3%2FgYmRxJDsA%2BjkOIK2xzih8K2w8ph7jolFLSICj9IbeEK3bZY9Zk2QqeGvDoRgnWimuw26QBC9gt1y&X-Amz-Signature=00ec33271f8f12162dbdb1ab9ed8666c9832d2d448b16698728bb4d4cc072b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCNHDUP3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T035241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bku%2FCJ5x6WNCLa1KRDBw%2B4ngxxCaaOhE0YCWUF1dw4gIhAJZz3YqBc2bYslyquzquIiVDVlCk%2B6bv%2BIHTwhEV7sQ2KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BNcLdNaPp%2BLquqcUq3AOcesGoUGuF4nROnO13BAiQZQBHfK2z2GhdsFqo3KgowmN6TV7V3KGjWDhycGI9Gn8ywe%2FPLEAuZSKHtgWaz8dlrO2jhyCaoXgGGWySNhpp7z8ZaOaGkLbvBkDflVM2oMRu3SpNE2WG5yK3IfPYMkWWBJ7aE5Vho5gqPJfVnzjHny8kTzDCcB7WK0RMF0cUFWJe2DpSSqRAJ7DjRjYpz%2BM2VFb19p%2FRVJamAg4cc%2FKui9jUe8SR8iWmxURMNFlwb6NmHMgHF4sApH1KZb1w%2Bl0kw0FwjAIDc95fDyyIYSbwD7%2Bhg%2BHSz1cp4o%2BDJytGW%2BCT74TQk%2B%2BkTfan2Mc585NScadR55l1QRyLNG%2BGHDORQxAGPIJVWms3np32uvlG5nMDdo4cBxGimoBEvVd8wTkMEsh99OurDL5CQ%2BLcYhpI%2F%2FEwIvyxkT9f6RseC12mznqL66JBvtlfnvEsvEQxNJsy0hpT47DyYdn8jFGREU3bHRYPs1YE%2BUGgWhVfJOKZ%2BFkEojTzUnhTd2dC0TdnRoS2%2BeKGbbAxDbf4%2FxpJTVVLl7%2FReRPmnIxQG%2B7mCyjxYW8kSSV8apNJ9%2Fgt%2BsLky%2BGpGRUk9Fg7%2Bnp%2BPVUP2cfolCysQuHzfkOWOtxBVzCV%2FMHDBjqkAYqy2wli3nlOTPubjc6Xsfw%2F5ckapAfPDD34NiocztT142cV2C%2FwUvpPHXyxE5GxzDIE00PTMpUJGf1r8GvFvFMtafaiUHMQHH4drZf%2BF7vjgaQnRP6FbmL6zwTMd08PYIK6Qyd3qePqSNK49hA9tRkjJu340wyiUNLSVE7ty4YCDVUqhFYUqclB8g67LopITa5imOb2IVNRPCOAffqFsKxn6dIY&X-Amz-Signature=875e1d937b02ee94ad5e1d66bd7c5ae8fb31b500ab9c095abfd01d65585890f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
