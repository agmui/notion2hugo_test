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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHN65UNT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVbQztUVk4OwReka9%2BRy5%2FGHpO8MKiUMu69gCAk0GTxgIgQGlWaJ4vTdzMHmbK0a0StzJ0jIqpP1TJtj6Pj4qeD68qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDykp%2BYV6IzCb%2FlrjSrcA%2F1eIxC%2BFOFIR77shIZdw63zfRnMy%2BBdo7E0n4VccTlDYp35QANBquYgMnM%2FX41ufbDV%2Bs99KltA2KxoS1cqLzt0AQd%2BiXM7YKYQUAIuC%2B%2B%2FMwX0PtvRkZqTpPel0iNPEJYs9Kjc%2FQYLIee%2BCpOwqdWWV16TTHzJjAj1Rs9LzXETo46exxbphp%2Fa5uBNk88EHv1YxdmVOzDc%2BMPaEN74bj9bILEpPdx%2F2O4LeAxHQMMJAHmppMy7RtW6nrdmLyLZW4xaw%2FgzNUzuBbn%2B8fxBFfc0eWNFHnGmKKG7Ft2D8ttUDBpgBrJcR%2BbLQAy5o%2BOPXZJKReLKBkb%2Fl7fQG3GMRqUyT9BLLLuGJkh2xDIYFaOpPAwEnTpXyDDDoWqAAn1el%2BQ2kHZ10gyrTZVc4nsFiPedPX%2BVJ%2BWcpN27jRRSbqzy9FOetof1ZU1jbibwKQOliay29MXbx3Qxd0%2Buxhe%2FjxPwOBAO%2BEPViCXy6q2to7MwkxNOKVLnwco3PGlHRe0s%2FWjmeChUZ02jstm1TlM3Qs8ikgzU5IO4XT5bN%2BK%2F1Rrs%2FtziIMyzMo9ytIbNPiE3n1oILscrnEUUQ1fltqooYioG0Vk%2B32uEACuyKt0N%2F4EfzwzpXwT0qiC95gg%2BMISXub8GOqUBDHo5GbZRMjWCAuL%2BjrtqOGnioUVTCxgexuDhjUnYXDUSO%2FvyaGVaipNOaw3nR8MpOy%2FHyl4%2FTp0q%2BtgxC0UpqJ4eD5C%2Fd1yoeKi1KMaREmEgDG8RVVt%2BESCNiKGmf4AZpBg1Hff9BOz9VKZxAVjyVMXcDEqX%2F6Xgg3ATrMCtSB2YYpPaHKT0%2ByFsk2Z04%2Fwl6700ulnLYPTt36XpAdAlIzpFqeeJ&X-Amz-Signature=e5bd57a664f3f92f2abd4d75be6dbf1042c3a188cd080973f1945e220a930dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3ELTGC6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6cFxtTxEniaHziuffZhniJhTiOvI%2B96ihF2hYssSBQIgG0uVeZcTD9sFF8uy4t6LVjy5ReDp5QREEv0JKnwmidAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP958VebkGf6v15bbCrcA3TOj6P6Wod3tLH%2FCLAyA9fGjSqJj8zgewkAc5FROhU80ZG4JyUrIKV8iOMJcck2%2Fqbxsg5WSPh2Tlu2XBMG2xL45z3z4yLwEb9xGouqICIpdROIxR42xfTwtkYwnY%2BVUPvq%2BP8BmfGyqs%2FCIz%2BYey8A4KgamUC%2F5Mhm40mFWa%2BVxbP6pto4KM0cGHJRUA4Y%2BPFcFNSnU6usnJvptUPxRUU1vaMqV2awEsvDA7%2F%2B3aDBSsZsWL8w2WA1HlL6SuQetIpXwZm2H%2BJirHSg95qcqZyy2tgP8ND%2F5Om0ZpJ9hzcM9d1yoxw7Z%2BsUVswmbqG0gU3gk7xoUzN%2FDgBPMWOK9dBkaGwswabQ7QlKoezd828TLTc06DLVYR9X4YgkCDU7riD5SOlb93VD2lk1U%2FbTRldXnebHX4bDcAFtSCKebPvcpKDeSda5%2Fm7xwJAE%2F8CMmbdzcrswOHVWF%2Fk2qoZRkCxdc0fVpOtFqGwAV2%2FSGSJ33rbtwWtkleLEm2YJanzFPX0CIqpHGYZJQ7Z%2FZUA7CUv7wwzHzm0xC2bPQ7UMcBC%2Bf6dpvir2TNQxHsxXunOjafHMjQDQTadwqf2U9j8o3dPxlKy80hfANAWz4x0NWSljru3NysUGAI0gLbiqMJCXub8GOqUBAoDjvdmjosKt%2FIKN%2Bej5YX04%2B3Q3olo7ATsrA9rc1judhEaORwg%2BzgJxdLIDF18jH70geFQ3X32xnHbMkVCLaqUfCfx19WhnoCfliYW6Q4Tx7Duevp0XxFZq7OdsHO%2BzbElW4zm86OGvF7uGp%2BlhFXMmFXcQ4n%2FlZM8RB70Bg%2FfgjLz0B7GawxGJkyOuwrXUhyQE4AlpTXVSBf4H85qTvx8gubN7&X-Amz-Signature=01517883b07d0309a85f189f9e2448257342297e3f798217685e18fabc347b36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
