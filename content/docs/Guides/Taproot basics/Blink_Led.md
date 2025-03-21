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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4EIIS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDrbvMTMKVy0leMtfvlIexjhzDFn60b5rnnzpfw2l0i7wIgG5S7%2FCIONb8NquJ231DM9yMeIwWVZvVIVW2zSJp8AWkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvm18RicgNeDjqKcCrcA3rVjGGBnwiEqLKKFh0oRWy3Z2UMGtIxs2YuZ%2FesWVlZgtHIOeQogrKhYV0fP5pQwCqKSCmSFrvDvg8TA3Fyir%2BeQ1OzcgSEk4U5KBB1cnOP96oJBSnrtCRR2ib4cxxuCxAjfxszEycjfkGDOsXLK8neCtGD4OqFn%2BOwrg9KM2pPo%2BEsdUB5vPMJr5%2Fey8ciRf9U4gxOKdtx43KZedYxm%2BxrCzWzdRvOoCqvd3u8JBo%2F4Cbr%2BBCxTSQ3hgWO7k5WGNh5%2BeVlIj1LGhoMZwygVBrSOtnSvHOUrh1M%2BZErSu6MEEsMTAEcuqqwepY3Cwu%2B0A9jG8xL0AX%2B%2F1U%2BXTlZFOqvq0YJQO1cZTN1jfoCav2gFD1AeFGTQXsNcWWqssw2%2F9pcBVf4a4dDGnEIQ85zL%2B7N3xE7dDXZxV1mwBKcoax837HnrqREnAQY13clkugpeCx1wprw8IsumkIM8n7BdwfAh1FUr1QJxISt6IzhbFyGdcO%2FKQlts73b3AndYfz2vhoH5V1eLSOersjLVIi16xplSqL4tpxMlbOV2YtCslRuUq330VIJjmfWhiXwjE8WrMzaDcF%2BRUDKyhZ1GEJjl%2FmpJQ1B3z61pDgUzsEBfPCyGmLSuFZNDED3tkEdMPTX9L4GOqUB0BuJit3REsu5O6tENyaNqhBGxrToAbzeDFlYn1UhSl7ErQbQbuxtLtZYa%2FKO9EuG7q88Fkt%2BsZtaGJDjHc4kou64Gt9N1StViuE9vGm0Lv%2FNE8HMAoY8W7CW3WGF2xczpZltzu%2FZ1QhrLsZLRJE4gAjnAeQSLfNFLZaxw8skbZXpxX5jDltsgRKKsVk0RRvkAGnwNOTZGTN8K1hzRUovivCi2PR%2F&X-Amz-Signature=91be745daaf5e17a26032e0c7714b2d2d4e62ee2bf5aece3e1debc77b5589583&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYLAB6G%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAYd%2F9aBaAODjaWB%2B7EzFVkueazvV8GUAZDJwooyhwQXAiEAn4vFjIMAFXZXHzeNy84tO7%2Bg0pWWqCbIdUPwe%2FWXuywqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGKEF%2Bv16IdLFvo1SrcA9akn%2FINh9R2nc0sNCKgccCeU1eziPsPIrBu9v3OelHtFE6Fkvh15U33AXXHpI9I1miGqO9gbMB%2FFeahtBSMYPvtcGVMRWx8oJhM%2B1%2B6JqBx4Bd0yso5er9dAGC22MxxxNhIxGbtHdSwilgpuBQEMV75FIiGhP4xHtRYV1xBx%2FBu%2BQJjmHsQp3hwYRZ56Kfxe1C7g8jeVjtAn%2BzhoQQF2LeDn9%2B5kXu6nAwDqnaE0GFNNZ9h5NChdTNO1pMv7uHA9p95%2BassWJXQNbZBXwTv1ZX5Tt7FQmT2rSip4rYaMWZ3%2Frtje8noBg%2BhbcNUazJPi9J4f4mTi0vqaRKxxtgar5ATtdhyxx%2BoCvVt8b6CC1q8C37fXilGM0qDeyUT5urvJjhTgqgZFuiMeFe%2F0lp8LIGF8%2FLpH5yrBDd7r2U5HEULyU61zMRSLb%2FnG7%2BPYmkn7zGqaZFg0N%2BUW8jt10%2B%2Fzy2zGpcZ9VXFtsgEFAzXzYI4qMM2U8ocX6LWTEAqyDQ8oP%2FyofCa3Go9X7mezHSLNyvB2T7Q5V5EBwbcMv8WjOyirX3vYjeYDPzun759rkivsW10nV7HVa7E9zCje%2F4ZE%2BNPIzYeUwlTuH79Pvy7riK8XMFxq7B4mEM0gzlZMLXY9L4GOqUBmf2vdoBrs7OV%2BViI%2BJecDeCAw0XBz5yIP8inDabZ0oYAYIfjeNvMRtvtOMRllNJKiY8CU4T14YM%2BhvQDrLyvS0Pda9lFXMF0Q%2FqHjRGNFmXuk3doiBK67kgDEvpjkZSDhaUeKtVLLKWbbXg%2BIIE%2Bz%2BoSMPP809zw%2BQ02j9HnnvjJKhbaawtqh4KhZXkNvlzP6OSEUhbuopFEmnw93ac8qOvuKDuo&X-Amz-Signature=23d1a6ad0b8759fa76a529b5795e548a81fe533406d18c34bed683b077c90887&X-Amz-SignedHeaders=host&x-id=GetObject)

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
