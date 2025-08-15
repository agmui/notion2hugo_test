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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHOE6RN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFwHtLq3AabV4%2BE3L4vir8xShs7j2ULllXfmbCt7cj20AiATcsDUVopAXc55sKd8S%2FTQkzA%2BbjL286BaAdpKHv4nBir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM8EL6xo0Fz%2FWnrI0nKtwDouSgTiIVv5BORXr7OZokl8LbRepfaXYYuP9petBfuJ3sOAFEoXgKSKVMDBbrlP5hEz3tsb2UQ0qGcmd5FchJR2r7%2F%2FhtOljloDfE3dv7qSV%2BQzQljn11kDRhj41fsGqm6IBkwFLXeKF%2FIbH3H8AgDmFT4ajWPcocZeAItQY9JA9BbMF7B1JAem5GgZZoWJ0tJCOhIkR6m3Gs4lkW9EfUT1enlptlsvH6zE1PIcibb4pK96tALkUxKjhSVtFwfocXKyWL%2Bb09nJ2BIaF7mxT7xlxzuQ5PvtAcanFXQSvNFJP15DIao75NRm%2BU8CwE2b258jVcsWRbNnh%2FJ1jNu1xgGXTFmTVixwLiwvy8qlMP%2BR%2BFNyJ1bVbD6nnioJhA4FUxiZO5HnhUet5dVxqtDxaPUGwhMQeFc3Xdwu9PjKnoQrebplv%2FMEJjJttWMGHCDE%2FTv5dNRZ5W6mYT2ue8h2sfGS%2B3LJ0Pucz5Mb4C1ey7kqPmf%2FNIEdylK2JOUulnLu8qwYcydf11V784o2Eo2roxe5aa6i%2BVo8vb5bna90TCUMgM43ZKHMtZMRM2C8II95thQ6M0wAKRvJztikZOxpQ1axqzeWgAtBvMza5aG%2FtRNjuH4bkuQT1YgI2SEOMw6rf8xAY6pgH6v2UTpSh1U6tQYP2IzRnf28vzZk6vpRYlBCwOG4pdZYMm6zhwrXGUgyQuRd7YpGfo4ZEugFyodNxmDYKDKmarwyfOSmu3d8lt4q0AnlA2Q0YHUmmatXuVF9zrLjIBGc6jvfeyYkujexRWNZLe1DYnk3ExqXlSa5UgeyJmTUzT1Siu%2B%2BmqAu4hRACYTCA32gIk1chk3i19nu8QCIfxRr0gnvq6Os8q&X-Amz-Signature=0cf3b9049ada4be1e5767553e8ae2720437300de43508f797bf8a0c7729691f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XMIFYY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGVhGy4TMGmINH4TqUAUwtsZp2STe1DKnFrxYeHCvbCMAiEA6yDuqGDbtUa%2BXpoOyxnARJCHX9y3lw29MHmcp3UqBaUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCZcanUTin3KBNVmxyrcA0HLofUqF1gxZ8Y992lD%2FrUI%2BQfJaznfc4VyO9waQIME1SqXk%2FFHXkUU1rZIaZmkx0OT3LHPc07Vsh6RdwXZA3hOwjcDfo1v7VyLfr%2BH08G4EgobVPxRhMRymrRcj8r%2B7vZCqGrI0qlDdJ8qX%2FG%2FZO4OD3HwlxSzlaqYgl9LgX%2BUFKArqQlUbjJnFbFDwfxXV%2FrP8fuRnMfvISbhIc6eFy5J4BuwFGHIOUahaxur2q1UJ%2B4cHb8dKm2YeqAenJ2mWd2cvb7eKlhw7XpMvWIVOKZDklFVvAAr1PngI5LF7YQYVE%2BKVh7y%2FdtwOxPIfVokq1kVjZN14ho0ipl8bfbMfomq%2BasE6wyCDFNLgVs17nNyYUpflWRADp1nagJi4aLKcbVQrPhmDj5JNvJy98w8h3wRE6Avn3yx%2Fx%2Bq%2BFHB%2FYR2cIOw5jxrnAt%2FcFq1pokETuyU%2BIZeZ%2Bh6SPOTtfmjsa%2FPXJMwwzTZMTiBIk%2BRn8z0ekiCOlUK%2BjkIPpGRdnCNS56wYwGOSI8uz4kWNM14RXAmln2UgoduhQpIYEMSuLCLDGYLl9h%2F0awhFQlOYfm1S7aWo7lLbXlddjg8GvTWWunIlbEh3SUFZX%2B9ABL4muN9FqzuyG86Dg84rafcMLC3%2FMQGOqUBjnOOcWlmUzwPzFAD4BhQ%2BN92GiJuV2pt52p64V7MFuC6%2Fri8Fr4RBnmajAa1GyYcG6szfRtu%2BpF%2Btc1dtR5v9OtYoj2CpBaUg6N01%2B8VwREVzH19OoFQbtcA6e87fZoMl4jeQduQ6Lhx%2F16x%2F5dGANJB4jVFvrQFpFOm5vsknvdhDVRIFm639wz6FDHZdLejYtKSth2GEEs%2FNm2yZbpm3SdmXSRX&X-Amz-Signature=dbb843a25d638ddb5c7d43cc1fe6c3a14b2656adf2717545432d16db553b0771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
