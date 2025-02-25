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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCKOGM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFwLPrd1ikUTXOSP7dBRXFza5BJQHLb1AaZk%2BF8n5Te%2BAiEA5pkyXDhIDHEw0gQ5GRqJWyI661xFgU0CwuYK0ZIG7Pcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBAouC2uAYUvjNlqfyrcA8577%2Fa%2FRxiEscpy4RKAne2YVPePVAa%2BXtmbR8b0hgwYpezsUuE42Lpc6MXxuC0GPMPf2bzC%2FuHbu7%2BWovZZunF%2FYwCgx6SuGT%2FuE4RIy1ALTDpOtHiSDIZiPB24y4cAew361j%2B0jPNtYerFufsQVCmIGKUM0aXgWCx7p%2Bci3ibgJB%2B3Mptw%2B5v%2Bunsg4gsNI46GDtJRLWg9ru6KADkjtrSEeLN7wbvnG%2BdBOd3j%2Bm6QrHLB5HuNxFXFE25W%2FFiASxpIY3Xhx4jDlTpl3aKLI0URcBMS19y3Odwq0hd%2FD90DdYwZ2FANbj%2F4y%2B3rbq0xnNEsRVt%2Fd%2Fa%2FJLvRfLRssFiV8iZWU5UoIZJwB29zMCjVGspKC83Xshuq7epmVA6201WpSOr%2FptNgZApWk1OwW%2F%2B0jyAzBz6XCRN965YcyBGyb6HOKb24X9uHJ%2BnRl9KlgLoF4xQxMs9t6h4CudY07iKHvxv4yhwZLhA21n3SvwRrW%2F%2FpRJ15K0ClyvKXsQl%2F0YTinkLf7NxxRQUxPl3cWM63LvZc53xV0qDAusavgvUcQmjKBCNnnCzl31bDwuB47WOVYBA72eLRgy2EfSStLdx2b6dsGKCYObGBnSeywijAVDYJpXFk9uWHqZWlMJjo9b0GOqUBTCaaACjWZrFOVQWx8SP107072HnHuze1dDurTK2ohu%2F64melcoraijE3GdP19rJvr7X57xMm3wleCP%2F0EHAml3m83%2Bg6vfKcOykx4SOShx5LEOSRu4ud1WzXF9Vz3TA9E4CG8PNerhpu53npeZ%2Fd7M%2FVNXrWPp96Y8lOczUO53kON0AEENgY6BGsQw9nrFBWrEkf5qfx3t7jzZRYgpsFVAklSLBn&X-Amz-Signature=cba2c6073e37642e6a06fef06154506567886a02a7c8678968e9e853c933dede&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TYNHNE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIDORmpdWB0DuHZDcTmZED%2F6uJpFkrs3rSjI1Ou6pQ3zoAiBfv1imAqG8DeDxS8cD8sF2%2BAIVghD8xVnCHPkZ4UHWpir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdoQVEQHPPayJahFwKtwDu0jxYBGRjgGYaOHQs3722lf2pyQZ%2B211kiS%2BkHac2zI%2F%2BqRye43GrBWZWJxeKBvh1gSjiDB23dsXx7c57%2BbFosnQLxN6QhkJ7riSaIdqt5EGYc9l1K8a5fVowyhqEYdX9A5jVZGtsnjC1XgXygSQYQGoWiW2U8WLOivafXaADxejqV4bB5UmgIEN1tW%2FdsbfLfPqjZtpwpeecEruKR9OAOfDdxAUv2ye7i0wlLMuNgBMftOkMBUDxgelidC8g6qY7aV1FAh54no6W6ADpxJGayt6qEavntGoFSNYMuVWkeg%2FsbjfBtgZEXv6QNhQ%2Fj6WPoiC%2F4401why%2BBKw0fVM8bow1yljPk0AlwIWoDDamAB8Ifv1XYiJw6svld35YWYo06kRG0BnjkHoOFPqIVe0zBa2RH5woJgjK8TF0uPUiOPvVPAKhgOiJY%2B4U%2BNi4lXW%2B%2FT3Ncc%2FSL%2F1jB8YGMH0MTcUcMbl9XdnJISVshKvVcLe3DwJqHyljuxfvncUXS8xIPxtAhgc%2FtnXKbGG%2F7UtWpcZvjmuQKFf0cG2H6Bhr5zf0sdmFhmiQAZ5nALQxyT9Dz%2F%2FzRZL0T2vAr2eqY1RdpY3gdD8Wow5Ow9QfWmka40Qx%2BiyYElt1ifFyYowu%2Bj1vQY6pgG2XQ3ThoKbVKifinCfZUgWbboMfNvEu3kJCJJW1vSp2nWi1C6BY4GzCmvW1o%2Fv597U6qjFxAOEUai5ToZA8wC1e0pYLpxjsCULGJ93OZnIzIBua8L%2FxY4QZ5wrUSxpOdyrIoWsoS6gl5yJtVNadBioYwXPtckPI2fsxe4fLuuFvEkN2WpfW5Sq%2F%2B%2B4xIApIHK5%2BObzuv6abZVmVbBZhsDSI40ibO%2BM&X-Amz-Signature=e06a44e9c9771a7125a224612f3289f8ad03c454080b4017fe467d89428ebafe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
