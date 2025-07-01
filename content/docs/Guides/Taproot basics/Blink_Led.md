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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5MCV2L2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcBPGquBTgztXFUAiwCdg0dGVFJ%2BFupMFBNE6y8TXq0gIhAOFIpe6WqWoCZEEgG4EK%2FuUx2dExkgx3VkaMWMYnRuUkKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygXF4cpCP6%2Fi%2FG6fUq3ANgWXHq%2ByYU%2Fxo5QHuYEzSYdIoU6fd%2FjZKJ9D0RSuNmMYpWZxYa2pJPk65gteM76jPYnR9EpyrDVixEKJBdSqqROLyNPv3CxIjTyULQ4HY08UgqiUn8sxkCJfxN3dYvec2Iw8cGRRYDae8dfGs6fvayjhWLR%2BsF8PpduusgOwioXZRoTY%2BLcyhEQC3Di%2FMi%2FriZ9iMxi%2BlV5XvlE%2BTY1L8HV7Fa0C87Tj5EvTKlSQCojkr5ix9QXYUkzs8tWugqhGZaszo%2FAa1WPXOPeLYJ5Ii1sZKcTgFNFZLciFttpUbNMN0pWXF5JsPohylnFUOlQRsxmby4opkAIiaFUsRN0ZtaFmNUe0cVWJeIzitu4aoKUoMaV13Pj3hi0wgLbuhiM6zy%2FAk9evNWfeWBhTG3WfTAEje0uKsgw4donnfJbQULnLbblEb%2F%2BVH2ouXiWa6sBpa1ZlZsEMGJfbTTQV6Q%2BI9fwO%2FF61dZrbMqlklMTzC%2BCkTaccNBNbTJskJEkCvQ018FxCdayUrlEndhe4LU0T%2F582FOUbjYIrEu6cEWPFur4RJDx0iDC8kghRKf%2FzRRlFKiZKe4fngk2hAMivqS7H0D87%2B%2F4cGHSDIeCIeEFnth3G0okzU36qSPK%2BB%2BDzD%2F2o%2FDBjqkAQ8V111TJqWs14Z5YIciUba8ZBqhopZUViJkOz5f2IJVVfWK9bYTy%2F8s4msPs3fsrWe58bpmf9kN8pc5%2F%2B%2BBwNjIuAW1hjO8CkyrVeD6V8X3maf3vrmfgmNwMlkNnLHYB0Y8Y2OKiorE5tVnTvx3Xmo4Qs%2BRP5SUZwv7oHqETwzzzgaR5%2F%2BUFqAK6XVw10W5xorIMbdhKDFuM9ZA0ZWsMkzawbYs&X-Amz-Signature=10f40d68a40e76ce108863aaa64e00069c27bd2a833963df3a7ca366f3ed9efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT7RHIAT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJGRa2ca1SmYHo1tGeP7a2DpJG8hkPIfJAqU0U7gobMQIgN3p%2FbsaS5fPa5o2EkYYFOcHsdfBhfqTfnjGWR%2BeaVnMqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJaZVV007E8tTEmCrcAxM7mFJK07T2idtfgS0YrgeIfAEAorGuxU0JVIJJ%2Ftymck8DrrrIEY784B5hV%2BYw5R6KKqviBBXDE8Rar1DTOuc9h2X4ccLvUDNKw8l0sTCW6epng8Ba79YWvkphkhvcOE1G8KsFG5%2BtKdJtUhCN2sDerf1nx1bmi61CVNWxJhlOActBHGNY%2Fly52JB7QjQMLQCNokQQvfvTOtYH7Ti6KDG1jlw2gP17P9YGwu1qw1nn48j8eGyyv09egrZbajXjzOLbVPxfp6x4pawQyf2YV2EcDLebKYf15G3IOn%2FcP2G1deqgKZRZeS0vApbA5BkWKcCuAoW4cqXiISj1y2%2FK4af%2F6VbwgQ8hTdewLTnPejPfs6R6KT5AwbsomW8sGZv3WbthB7NXruUGul8x4ryt6BNdtynRplsVQV%2FMRkSsQU2jCZj9VmdmRH6uqE%2FhYsBTJRT0jP%2F0zXQswjw1Ntsuj5%2Bx2aNkihDF52vpXhU6Acj5%2Fo9bt5CZRw2TtI9taz01OYTJZtdEpBWtG8TihzbbNJuUE%2B%2FkQpbNg8i6Fsn%2FlWHeUHSSVMSFdgFyWQSI4o%2FjyVpSBIRZRaAA5pXGSQlvJ5oAwyROEvBHipWQHYU1EbDIkb0qKR%2FQ1HBzCOccMJjaj8MGOqUBhNhlZqWfdp0UW6Yeq4%2Fa3fK18k9QjiKZts9GmrvuhyXuLLTAv%2FaYsFR4TmywfM5wcT%2FbpIIzRbsTUOEiU2Fp1bv9vALJtiQczPSZkQkCrUu3S2vJe801iNT7r%2BWfyJCdkWlLSeonDYXYbHNiZ%2FaNTn1aX6QwIeUrLHv2W4Iaj1te%2F0CWZlfv6Tys6hIJaO%2FlIpb5V8%2F9WYCuKEaEp8EYZ%2Bl43Hwh&X-Amz-Signature=28b1c0ec73afcf60fde4c62bf46108214ba5660345118e88432211eea2c4776e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
