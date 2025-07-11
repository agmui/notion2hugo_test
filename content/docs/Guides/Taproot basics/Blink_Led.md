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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q4ODVBA%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx5TDRzTgIXUJIM23151Lx4B1jDM%2BazXGzN9XiueIoYAiEA29TVX4SaIYHC3Px9rdFR3CQT4ugclECqDt3rwdo9YPkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfQw7cYb0oRUCAh%2BSrcAw2Yiu95L%2B10YuShynb%2BiJWN5E%2BsVikEFx%2BdmGPsEUBiiWpVsb6RnGLc5pDvWQRC7YC4XC%2FyyXwG4fI8jOU6NKZ%2B3epsqHfQJkG7TggqcLg3psnOHabJUPcUX0BvwgiwjKOTSMQ%2FyShdelx5he5Ytm%2BAAynCFco0IbzyfgOhMR%2Fr14qgVLteHVpiekuf31TYU%2Btsv8DuG8rYfb77knZz7p8xFKyQLwoJUcvetAbJ%2FAqXW7rP0CdrxAWjNFOO4Fk%2FxkRG8fghtV%2FoMUWfEreXQRE5JuIqum6fn68lFgciCCWK3DmK7fGIWq2jkD5Fx%2FaGqCe9LsC0fCo6IRDV9MmX7vobJzHPpRLcKyvW4V1o1miAhOv8BpRCMXLHGU0wnN2Cv1zHCnPo0GcgyFL%2BItfDKg36wCSe73LV2ydjvGQnank5zhfggJJJSJuabf5O02dx3MiNQa4v8TJvBjYgtEBodCA1o6r0WDb3Z2%2FvlO9XN0tYQ4iKdh6WOWNXanCyYn4tx81LOiYi3X6uxl0vgmAqLqXoodhsjLMvqx0QbcIiFSxvwuvqyxJJkilnhzgLlwnF%2Fr4%2BVf%2FCoE%2Be21WzlrX4fZuDeQKXoC%2BRTJDzzNpeML%2BqLm2lfCuPfk89uzauMNb%2BxMMGOqUBmjgXhiuv8igWL34fjgB11nejdA%2BMSZSfPx6Wp64YbnOBvZSSrp3ZbbSk73KVUvB2J7JmLdGUo0vnW6nd31RG%2BEBcqR5%2B2dIvMKWTQBQhbBB%2BL2VWnbdzfEgOXoIjQVzyRq0DLawWxa7wL%2FC3MRxN4JU0Hqp5jsKbz3tYWGVpJuP5W5AHKpqCJxKdyybKv90TpJbAybOSoeFWfLx68YZzgej6cDsC&X-Amz-Signature=05f00e284117eead0af6dd33c1885ba356395a8369ea4c2eb7077d5f7e3dc147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4XSYELC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicMvoco5KiXQ8KsNXrIym4dXTPypbiYX1RxTX750ICAIhALcXfzYwwb%2BdZ4PvsXhHEtuPCmbmvRpuJwkloDJ%2BG5YgKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1I1G7l1qXt6qgXs4q3APDp64Jf2VQqC6qgrMpASM1TX7Ec3TJirYhQs1z4rWDNqu%2Bc4mVxT5dAd8m%2BM%2F%2BvmcQTkGRsB2aFzCl0s30ZwgiL90mMzuhHc3GBX6YFGMZSBFrZFpACnih2HRA2TjmCYRzEbEvyMoibExOM%2BAyraToknk7dy7W5IS8MOF5KBmSU2MTUk58J08imaiBS8yOlLEIrLEJ0PEMSICeff2cExPACLs0xk7QjbifFJzZzI6%2F4Wq5eAR7f72rJ%2BoBPyvn1Bx1ka%2FmFJ2uTPTAEX9Mb0WVvfsoMqE7PbCBC53VWtkB2lA%2FRteePtlDN4EuMmxufASjy5NxDOGns0Cb94NkLy5fFM%2F%2B7YDxY9FP%2FbiZe7kYIr6CpdUGh2%2FGLAnY1cDuHBmGkz13M6yY9Zt8i2yiJpEfD%2BcLLNMyTDSXjY45KUwo2msc6tFyu48mtOgxX4ELufAUNx2IGwiafbcZJ4k2wjd3ku%2BdQnv51%2Besw8K6lqLVsJ81G8hPtspqge3LE1CPpRggcuMQHT1KnIYXu%2BiB1%2F318yR3XWhpsEUBe98qII%2FeAuXKRv4kcmdSNERGpfrJ3ubL%2BIZfGPBjFRNQojQL8SDp8a3enzSyBENwuF%2BdPMz%2FA8%2BN36FfcYpIgJ0XiTCT%2F8TDBjqkAYk%2BCF58c9wBlKB3Rr4qW%2FjrPYLm2Qkdnh6OXyMx0jK6Zq1poA0ZS0q0QYpPnV%2B43TahyYuVdXRjxx5%2FWav5%2FHb7DzjCa2muhLAvjEz%2BpyyxrAd59PV5Kol0T0HKPtSfnRPH0%2B6KpF2SrzNTEEFDHt05668yq5J3g%2FoQAbqf8oBtV%2F1knJFTauQhi3LQtW4qQ9TWk5OgO1FZWhBCMR9d6e9oAuqu&X-Amz-Signature=bd475107f0f1f7bc682b4cb3838c406a96461ab389fde5cb2bc5efaaedfc051e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
