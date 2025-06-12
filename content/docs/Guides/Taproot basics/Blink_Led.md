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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXICKHT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDXfy9MJLoXsBqUoS%2FS3gFaZQn7z81OfZG398Lej7JLPwIgK027kM8nbVKEtpTfO4YJv3%2BrdxUmIZMK%2FULKrpGEalUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwCY%2BWPq2VR80vwjircA3ofwz8TN%2B2LDiHQFOe4qeF8KbHJrdi27Fa%2FX46GcduQ1TmnNNmkCoNmltW%2FDe0CCrHc9K9sJMocJMnGJm5YWE5qwq9Q5xR11O8s%2FeHqGPpmAy7J1kvtnSgvuLCDPXBONRCC%2FOiEHrFQ%2FWjrlVyjHuhSvYM3loxxOsgHWZDAMA80E5rSVkwYV7Ja9GuxTvz9LALG0eeWM%2FocUShsa8b%2BrPUNr1bitgghA5vDYMjW14K%2BjyaNyDeui8un5bmRsPaUCwQEWIcO2ZeQGM%2F9GVq0%2FfKLgqNDvUJlMYSRX90Lzxyy8%2BXi0%2FlnqkQFcLwGDauvzmuH72PlDBY%2FEt%2BLL9BeG2OAL%2BxxOd4Z4Exf%2BMFkB%2BijFcXWC7ssh%2BZh3GObTHWRqoaScTNZlbeiUS87cQVJITxfuLK62bKjEX3QWHwErGIdhfcHWd%2BV2uxUJlTC23Apsl3cTG%2BfjHj%2FCB7Q7OAolqjMo%2B%2BPfbAf0rZNAwOXRAjTE87AYL9Epvyvz7VzB3ap3tKBLNr5jhmJn3hN4GR2mJAgiUzkQTM%2FWUDrNslzaiSpou7mMxSISAxH0X9D5qiG41x2virh%2BEBl7uZXeS6mP%2Fuq8F%2Fy4fFLEuJVX%2BD%2FOgbJvvnOu6wM9IqUsAiXMKrCqcIGOqUBLv49hPbmsDxljtMJlX9CiVmgQilZEBz7iNVelLIMEy7CQsFUbIpZtLd1xmcXM3ygZjZ1PhHaGDmMgwC6W38IQ5tiKsFmCawprk99tZFj6FysvYduOjc%2B8wzUVMujjh%2FDPIdNtAFz2V4cE75tPUBQNqTOxIpDyuTx0sSBv84XxPGpivzsbt%2F%2F5Yex24%2BM0HPRj%2BkWoJBGtH24Z7BJLxH8nf0yiZhU&X-Amz-Signature=a8858e6f88a493070c75041c17af52b9baa459d6ee592a839d97bec1a6b55117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCB6MOOR%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGi4l5oG1g8JjGKXFAQ0YrtcJEt%2FXfkh8CCdaPbFM%2FcjAiEA6OodfWp8ShBxmFUDkR6vq1ldO7n9ZLNpi3mcljz%2F3ikqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDD34CuZxIXo%2Bb4lYCrcA0WRnZ8Qox5Em2z9DoLUdaf255GpXDPcQl5N1RlGDF1DDk6OxfwcKPKSRXIa051jVi%2B8NDbrMRoKE8JfzzKdJj1tAikEqh35KlluvrmpiDbNZQB9B6kLe%2BNtnS9IK9PXaJyFzVxPxQdS0sueHCnZo5SAHL6A%2FG3Ibx8eXixXoJh2hv%2FICKrsLTujpnaB7ziIumqKpEGSHL2MLxD53XvT9j9rOvzIwYpgZmgmvdUCSMORfm%2BZSuc5Zadm57P3%2FBGvpmhwsGmeKkmxk31%2F%2B5AvcfwMzkl63iPJAUNIM1exLjR%2B72Va1NUGnHI0%2B2CrDKH7ndT90dFv%2BRq8mkZ6T6oU33WCdlDOyX7GPuQbWBJG6WemDyMs4Qp0a80NhjSK2rp%2FF1Kmusiv8Ke%2FjFcRfAA3JQ%2BW23Kjbm%2Ft%2ByKpVDxautrckVnKO1phbvKZYnohzH06FzfbrkwY8PqXvbQnpm4uDzVdwz3j%2BmigGVLJArzhdmohu9B%2FWmh7yxHMyE53VIPzrlKDtk65TWi5jC%2BeEP5oZMgBdJQrEC%2B88ZJKdG7C8Wub1sS820GX4d5jbuCvWpstZJiYSjqzhD3Gza7szNr9F2SHzB26VifTwQvoNS391uAEltTW3Fprd336GqnsMPzBqcIGOqUBDB8yAD4hrdGrVeBbYQsZvsGaodLCbT0xPNEsha3X9OdLNaWHS1TS5Udqykksou2ql9pnxijQUolWEfl3FIGaKoG9So1wDlPtelnD3%2FOCtB6uNuubP6kSnvwEAHf9IVEEKkVMkDbKBUgMOh3TvbOgLXMKz0rcmiQfL%2FJvUnOOWaSWKe30KpqFVGjHylqmc%2BnTm33gFExxsNsOZ5Lmgad3i5iX8mVs&X-Amz-Signature=0eb50ebaa23f893cec0f30646c5880c4551d7e74238be2d88b67c9547cc28f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
