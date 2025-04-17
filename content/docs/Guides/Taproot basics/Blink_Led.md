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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CJ56JF%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgpWsvDgwjauSCWuMPljgR8gk2OJX7Ta0omjXzPjV2WgIhANUNauBwEsD1S%2BiR0%2BUtXpVlV5coJlw0lgtC4BaroiyaKv8DCFYQABoMNjM3NDIzMTgzODA1IgzHye5BLWcKQbexA6kq3AMd7zeNLW2GCSXoAP1K51Xml6qr76NGrrSYC6hu1mhTxxKK6XUbhjibGKA66ke0NZEF4AIPHcmHUaFz%2FlJ1dOQY%2BnkW98kurctFsh97dpRg1g%2BUCrmMe8GeHOPoXaELT4bi490yxJfLLVZPECknQyxK7q%2BkBAdUY5tf6HghNuVohaX%2BzjvGrKWN3ZiFB9bK8HadYXjDo9nsIiOqd%2BqNcttJl2pZBolzJbjhiMhGcWpnc1%2Fd54uRXYOE842S7fKYczozz4rX7qZUZTSPxcjB76A5UU6zfCNEHBI2nsoWg8foTNVxsKerHOusMVgO5vZrIIt1TpgIDsT3kiCrr2qPGxuCyHI7DbyBcAS%2BEEqvWJowGaRwFaFF%2B7pCh9nd9PEJCwDR74zrRoV6KYQFgSATJXlE8TmQ4fzJPVVwsjBvrxkUARZogItI6r0RS0qjR0ZJ%2FjeCaURlwhs5T5v7YUZivkMmjtMHJsLEKND673S7xhaKd9ycQPI%2FP9HRiTUUe%2F2u3zizGld7p6QM5OyMRjMFmSNSKUm93acEsoSI4%2FArY1MAZ%2BNAMcjikE7N%2F4cZlVaM%2FIH6k5%2Fs4umH3RAaoknO9MIPKVked4KO18%2F1OTFKAbn5On5oxpYKj%2FOVfrkb1TCClILABjqkAdoEtzF3Afz6aG21%2FMUs2OY%2FgXbbUQz6opmBLhaKeGMVxm54IaxrWjGOiLfcCctC6qvJp0H9NyZr3fmHGK17qqdicBgoWdaU2EDNJgW9LNddrmuFeHzwyZasZbFSlMaWUDF%2Fo7277jIBomTt5mY%2FGTQv0y6IreZoCmtu3GSqT4xuq7660wE99wxn4HDwlHt%2BvNO9Ld%2F6938v1ll%2FJMe%2FrLasvn0z&X-Amz-Signature=ca71e5d5733fee502f2720c7ccb4707a2bae0f4488b539a55b13f499a1711235&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YXD6OFM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNLkjcSJ%2F8jlyp0R4%2Fva%2BO5%2B8Y4n236fBmbuaYQtJlMAiBo5AYffEYQk6SNXcvbSwcL8SWBqwhV3xWYdBMqoYRJRir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMLpWupiXWutPoTQtWKtwDJPHEXSb8Xz%2FQem5XVdAoRl0qT4%2B2Zu2FA9Z1AGTw4GaHfujaQ45pOIljnr498stPvFBf%2F5yjaGmmoe4wDykccqSZeowGb7yQxkEdnEUfQFBiWocfGGOu0Q86ihO%2FE5wRUoqj0gUdIdlUJ1JL%2BSP%2FRU3Uoc0Z868a59KKiVre7L0WfLmn%2BtbuHECRwZ8wOhpmMWDtEgmoDm6pxMJ4qlC2V86Cvl%2BI41QDkgUotQkH6rZVNyMBrzPhbTkvvtm4oh5WS5fD4%2FcrNrmWOj1kPvyfuJLbQ6lhPF2xUJ%2B%2BHfSfHhedA9nt2LqsXwaxkuqDktW4phAL%2BhI7%2BosDuqcWM5wg9kI%2F3F0huVvi%2FWVU9egbuEdKPUEc4V6WCXPfR6n6oeFLjTKxFx0HzSKTeHAqUwl0wYa0wBTmFRTm5lweEBx2zRAy5gsceQ9ucV2BKn24fPv1YgxusQ8PHCLulRBH8P3YH2k9i%2FIq6mBAoxzOCgImOKZ0Uy8deRbDscphBawGs3oGSJtxsKw1GWZ3d%2B2xpAHyt0IL8uHKuLF6L0ZwjPjGvxXfllad%2FNSnSPnHgESz6%2Fs3w3s%2FvkCs%2Fz538emKnQXUggm610bbn%2FJ1WvYo%2B6Mcxbbcar8HbkHNfq2u6DswiZSCwAY6pgH2RW2%2BU5dpn9YL4UGNhD22l7ACQTUJVzWztgKpIwA9Q7tWG3cExDx4zRLpeOIW3LuoiKTAD99Wo9pFSapnjeoBW5cfzEkJakLSUE%2Bx67umfJgaK8Rsqpf5aPo5cHjsAf%2BaDTQa9hgNP9IXUup4tt%2FSY%2BEou3D7AL54bp5GH9JMv%2FO2K8tgCuKS777vMNBPwjXWaCB4%2F4%2BA%2BlDSs9yvsyGbeCvPsx%2Bc&X-Amz-Signature=35ab6f8045cffc61f517b236e91ca14443abd3ad344428ed4029526566c54f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
