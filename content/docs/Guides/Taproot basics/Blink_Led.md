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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVCUYWS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKwINbSq5gHBAbCF8HbwkALB56NBpSN%2F5PoJok9ZaoAAiEAi4ZO%2Btcz9o7V%2B%2B9AuxPiPhNU11wQOvhBKWP0Aphi3UQqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaXKHBrWsc4E0xZWSrcA9kipMoptbEsDWfoo4B7i0ymWeENbwbxIrDbOEZGFsP4JnnvjDZAOyjCL1lBvrDkdzrcO7YmRqqbeb8cdXC7eZV8FhxuJax75qdSyzPgrk5cIipqCcWqRR8DXe1AAiTg%2F%2F7BY6X5QJC9DuV1CiEE0QmwPe%2F%2BBY33cnfz%2BQkFuDdWZvIjv2byONiJRA2EEgrX4tj0QmjR%2FFlUjaHgBPwradk6q6lyZ7QCuRnY5iCWjQ8Q05mfABLHoleYNebqOf2sOdyv6KruCN9roeng9qPH62zz%2BoSRYSt8phqfJGF6WcghbC2gpyi0CGY3xX%2FTJ1SYtUxyh%2BlbUAjDkbO1IbUOofKfrj9YKQSsAXh6O6DaTGahSDLW1NfOTvsE3VxmvdgmEXFBlK0OxEMfiubrpqsERNrmrXmuMrRtyHuThwCGL9Qto4mLlaJzFv3WFTjR%2BpbhtZYn25kVEogOkMvtXkiA49zNubfZbBfPzM5FA04LSWK05O3dwlYSQ6OEmQhzFJuLwnnScFXQKSW%2BVnWH%2FB1jHRZ4tP4MlNJYQPOVqi9tXX3cxTCJTEnINN8Uv7QMUDK7kWu4nXX9K8ofvzZ2bJb4gvl%2BmBn4LxHb8b5wuNERKqDhyKSJgwZk6cC6ws7qMJH5%2BMMGOqUBMBiV%2BGEolKJQQBjllIaJFXRod5nbkJO51PylrPlLEEG6xsyUQRqm0KLKbq%2FGcJvhtCwSuQn1zDUrs3eMI%2B7LA0dxwnxpis1CmHlIFpfFfdD0%2Bp%2FrHP9Rs0YmMF4dxlYO9lxg8eS5DCRxjojSfwmhPpSzKRtfwoaq%2FOVGANIi9o8nWqVqCP1ohEhyjqg8x0o8SPRBWhRyFl8smdn7cgvpo1IyrgoD&X-Amz-Signature=9a234284a45d91f5403412684f6071e4d73eb559cabf7d1689c8a9f831663021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZXFFM3D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRSElzFH0UdxD2lYim7MQgRQAfcx5M4anIiRj%2FOkXotAiB%2BMnGoy6JjZ2M%2FXK3gS4OlGocRGX1p6SuukRt6TJ8jKSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKRbi8595W2R742ZZKtwDzJLBdpOdhKLC044xtQhVbZnluAJQKupNIwYeoI1K4B0BG2cv%2FbwikDYTTj%2BO8qMakOm1xpponV2%2FN5IA1wJVp3USnGMjzos4m%2Bzjd47Gwe9UoG%2BzMCX9vRUbsNhFLHFYRjppt5s0wzhi%2FPsPBLxT5epUUZDhrW2lza0NzUj8pK1o%2FfBonncouLmntqr1XPji%2B0C%2B1dgjYOPoRe6UpiDCAzYkRqbjzo24tV5k4fubcGJ9kb9Vv62NixSrwhrZB01PMdVXsziDjJyxTZCdwhe4937%2BPUfazH9c%2BmlqnNmlymG6a0mX6LlhB%2FixhOq8y%2BogNexyqyNdofxRz0ctQJmU7KsUvcY1y7J5iE05v7bC432%2BuNu2AcCBEeFeLoehi%2BWeEarPEaxKbc6%2BaW3X2CPFfMaAowmG7UiHjLH8q3Yzwe2Hw6S8UtrB2pck6gZLjYFgdt3GR%2FCjJKc49%2BFe4Nl0XkUb5TYjH1Xzh%2F2P2brC%2FSCfJIvkGzxPZCTyLasRoD0WqVYUS5Hv19xpBuMgCpJiBBoQSMNDJEmN%2B%2FdXuWvTLMcCd6E6XdTHvbFYO43mJ4MPvieAeR2JOAYuMHbD7p4bFu2Vz2O3UiHJFG2mjiA5yZtKWE%2F20qBNtr5ZUiww9Pn4wwY6pgGaRBDWCr3neKUv4J1%2FY0GjJ5QEDsX%2FvKKdrX%2Fk1oHWQXJmu8yAnIMgjlacKQ3Ioo5B7yrBkirQDicwESW9%2F%2Bo7KDWWt15DWKamLs76%2Fl49FCdRJxFh3Yg0U3e%2FbJ3WSbM0LcjEYWUpC2DMwJtj1t1f7vD4z7xgkoh9BAqrm3AK2AcPJPNODRTbJgFKU125IGnJR2VRhqY87tURjdyeYsWemG6ai9Xh&X-Amz-Signature=cc4cebcbc96e50aeefc382a1e34f0c7908414d6d1f6b40d7196197f94da2b226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
