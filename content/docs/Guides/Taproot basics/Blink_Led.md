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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY327XPX%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC03NLjdjpGs7D5SDy0KZMEoV63nejGPPBuckJKiDecUgIhAMc65v%2FebilKzr1tvlb1c0vwE7%2BRfns5RupySXuhjitVKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm5GH69F%2F3zNcbCYsq3APx389yafDKBdrUVKEILwBLC%2Bdo76bQLxYWApa52AYCQ%2F1anCBXBmgEVQPFGD%2BterER%2FUp8NbWWb%2BOl%2BhkVwqP5blygmQ%2F9mwbJ4EnHMSvR1cAdU77q%2FUHAqMhv5zqU%2BV75qrKWMu1In5BFL0%2BS99PsZLj6Vnbno6V%2BtJ2DOBM1AlOOAL9jtj2LmuNO0sCyavRP9cKL1XXYtUOxVELYUwN7cc9r8Lbr6WXeb7IfNzR9X5VWC1OpVyOeaqJNd74rCcL54%2F5zyEJGWc9rbmDWu1PBtpdZA7VNFHZ3XIgONOD8eHXVf8OxqkyGcx%2F%2B5Cfydx7BSXUrHdkJsQyKFO3gj031frpqDqECWu5GWj2Yc5HC0QH%2F3aSn8ddM%2FTqvwRBZZv4OjNFhpNa%2BNUmIC7u%2Fzo7tifLWz1b1KyEJJYOZJZarEjJtrBXZXHIizG816DRd4%2BJH5sbXhXbJwNDUpHeYomAC0hs9aLhbvjGZZRAGU%2B%2FFh2nWm2iP0x643wainPD2oMHb4M730eGIh9sYdVmykFEDt5THtMcWBhU7UnDeT1JgduWYjGyZV2991CI3AHCTWaegNbQHe7KURYM%2FjnRWxCCEkbosOj%2BmaiB8kaQcFNVlQ5SVJ%2FYZYclGtGAfaTDNjom%2FBjqkAXfIJNxhVTQE%2BmZ96aFx2UyzRD8vu5bKzgyIfbm3IcGA2DoCaZNdm%2Fs2l5ASDmfM3Ty53TlJZy4knLxQPNO1ZEw%2Bhk4aIiwmXT%2BXD%2B0wqFMUhWLPtVa4ZdbnYex6kBLVInoe0ZfvDtH%2BOyeO5CaHe3Wn4DCBR206d52mzCxeFzO2tDSZn6Ale10o79jVbxEXpS4GK0YjW1fJif5FwE1h%2BwJ7%2F2mu&X-Amz-Signature=0efbf5b44b748a167388597f7ca8f5c6d00ef6829d754f038ef4eadff08d89f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5Z6GM4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE3HtiqpIqSTs%2FYe4w3ExuFesOzWYkNgbatQvdJsXzvAiB5RowdDyKea40Nm57PXFV%2BzpIWRXjAQrplM58uLDrasyqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMybbL9r7Wt3eSQcp5KtwDaazJHAKvZiYYO7JjRT9u81QwpPCsF%2FkRDv%2Be8V7S3Pcxu%2BwHCcxYNjiZHoaWj7wXAxTzVZQd6lZ3JftUbsku%2B5niNQa1k5GNdtE3IqZYlHdiTW9iWBK%2FNq6Tu7%2FzHKvfRwyey58tSm1V0sRyJ9UXbm4ghUD9O5ebdXxpajI9XQOea2hQBsUihsr%2FuZyeh4ZTYN%2BUi7hoRy%2BXzmq39Grf3I88QdEq%2BlooNM1LMnx2Hs5qYhH9yukwgYILcgA8mRKREhd8lY56eWs6xz6u6CN2VGz2JFBsGlB0qWzZub%2BbnxbL3CYyc%2B739ADqpnCQVsk2gxE0DyJ3TVK%2BFINlri05o%2FhrWDFMczdkNemJGr%2FNamOLKrmvVEtpHemFbchxEm0%2B2EIq61V4aVhbiZxWtwhNmBBWlxLo1sKwbkS6roMi123wDRau5j%2Bt2otQsqvYcLykn11CI2ylccTAiXRl3KdsJWaC4G4eC70VDltINsVVQtv1XD2q6jKC8JprTNp5tifnJsrvht1weBNa3s927h5HgbIyB%2FGKV0d8F73NVxwlZCTYi8fWBMeCaG01JrhfVvYrJWWI0srXnhJ9ObOFG3vio6zvGDoc5SEsHfhaqDKB0RWxtxMbTX%2BDmXo7mksw9o2JvwY6pgEbUXvP7ri5R%2FTQAnj26f45ieN7cG5VPllO1wgAY0SohmY1b%2FGXwZlNYRvd50L%2FpIc2r8h1cAZjNuGabnprSr12qlY5Y8Mdpfth2Anz%2FbZOD1KKXCGJz4VBcLIYAHF5T0OQvxKUDo0032Bt90%2BDH3eOSvXaHfu9%2BVIkgDJSuAdsn2tGgV4RnmkYJi%2BdqcvitWQMzQmHR89tP6bO%2FIfXY3al67cqL1Dc&X-Amz-Signature=10156dfe3b01f6c81b8b001eb7bb1462490fc617e8272a27b9f834ae220cf20f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
