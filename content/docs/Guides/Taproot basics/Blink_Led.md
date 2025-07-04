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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZJZX35%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBXv20g%2FwiO0LVi58VZY9ET7zM5r%2FBgucIQdOE%2B%2FsKEeAiEA2muNLiD2rcetLfjIWX%2BDqEMfG6OGbgq7LEoFad1Avekq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCT67tp%2FPzP4qpgHJircA8rlEbt%2FT7Use4c34GDY%2BEXH7q7KG40Sm7EUmMNnsa49LkuDwfjbKc7i0VKKmDG85FjR8lH%2B6fyyqPfvRdxDxZKAtjkUv%2BxJ7DMnFdBfuVGhekEqnXlxmtvEX96fvLfYJ2bWQYkMHQj2FKzVcZR%2BuILJKNjXtenSRd3ehayeG0yExGAIgflm2uBdpF9F5oJSNIIOHBPfcOCP0zpW87VBLA%2FR92ViYKygH%2B6S3cwy31cU8amAEqljtk9US4u7g1Dwjf%2Fg7P8wUTmLO42bbf4LQioMEjUdv3e%2F2xdMr%2FxGCSIypjdgn%2FAmwrXWcZuE9n3uMSY3qPMy5kkXj3R7fRmm0aOCk7aVdt%2Fjp405E2%2FEzVu5CDESk8YP84Exsj%2FwMu8mjOYj3iAk2FblBVMb5ZVJYVahMMcJwVK6fAGKtU8y38VAh8J3kk9d970ynfbDO4TDh9uC2lZsqf4yYUlZt97t0A2ejo61qCjkRBtBC5dS3ALOnrVFKc6dwSoopVCD3BrfYRvC86J4E%2BxUuCVdTH%2B%2FROildFBZnHArjQSt7J5gx3AizQ%2BP9r5m0QsxjSb1UqTISEZdZ426fxjc9QBqHd%2Bd%2Fcoht00MreTf4n3oolAhy70WoRN3f0%2FIGI8TKRebMPDgncMGOqUBmEXPCXiLz0Vl62qvb2%2FUNrDYg2FSntWdHRid9t0OuWqpuuf7YqwlttlKL3YxnMpKynFwAxESHncHPU5IFr2Qlw8lG0mHD3b1HVtQmRT0Bg%2BypuOhLDRcswtJCV98Mn8by5qiERidkUAjXA36GnrKtVpnD5UhFff8sFVfnyw4gS3KvV7ocnqjeKA6N3XYWb4ESoWJiQMlVBj09hCXGpTk4I2cbI2G&X-Amz-Signature=05227175b4d8639b6c6cb3dad668fa91d03e2be22a98f156b5b3d054890942d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS2WWAJJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDCjPtqZ8SBuCeOZe15pKoAY9FHLPWXtLSw3PpPdTGsmwIgLsNi6nzv5IHEmZkdabtoiHouUAkAQB6QUbp2bTTRU7cq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIPjPxzjdVHy95hVhSrcA424drw6xYp2DvfJyjYtLa%2B4Q%2FEznNpHGS%2FpkNK1IQBlTcN2j%2FLXByiQRBMYf3WvI%2Barq%2B7ShTKpQlShwZJGMMyWukYBZd%2FHsfF7oy0VFdh9ryo2WVxKaGjqpW1CzxqtgIm4E9h9DIDReDzO04NPKDcMSDnttZMqz97xCnrA7TMISGFW0dJnIRwHqOQQKG7XfzYRuAwly9S1MEmrNIf9Vc0xpBPfPNgH%2FuJnEL0zrxsJQ6FwUSI7umFGZ27I2QI4qQ5rR4LEdaQfdq3AOdfsdB%2BiUoB1oZgdHmmaTgtARfeZifUgFu32fPBnHetQSO4TwMNMKp6vmQ9i0VO%2F%2BkFiDiPyq0OtMIohsop55bBSHxedBEKEjwjpad4c0ntxv5lbqP%2BAQ2oX9CNlU85ddyAMFlRjh9R%2FLu3jzAexMZCBCwkJA64%2F8CqVgGn%2Fii%2BmLAYd7O7Xars8y2hwQraTILxWgMXoPRuZcuIcQky6nVY4qzu7weMx5AG9%2BImBm8iY7o48gRs5jM5uyJk4pDui%2Bsv%2BGX4movslTCySmUQdCZrkXdvuJHAzsah5Y1%2FxRMJbGAu3IYwAyxOZdD4BM%2Bfi%2B08KWhUqu8rto6Kjbus3oJukxWz8%2B1BYgHFHZXRyKRqQMOPgncMGOqUBtlya%2FBjLd%2FMNck8NWcSrqbLV6ovTlVOaIYvG5EM07fC76OkTu4oHt4FeLGnVfd7t9rAZdbptBg1srajP7WTMmUqVuKzA5tAXqMDqZGrKSPLiMBp6obofFxraKNrKWKoKgzTsXp9LVoLYOMLlTP1BxLwaK1Kt%2FuKEljtFqbDZUHpV6aWVvgVCkKvTpaPe55dzH2z4yEfcJhIOjhTERz5eSYizdWWq&X-Amz-Signature=9c818e1ab44919d60317c594bf753422c5330d76c2f379e998d76bb8b3abdd73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
