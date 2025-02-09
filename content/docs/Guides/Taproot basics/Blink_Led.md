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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654VJHMDI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA5XtFQRLem%2Fo4raSSvtSdL8qxcbzRayN8FN1Rid98%2FAiAA7nMgtpRiA0LqlwdjxLQc8WmehYnnBVkJfBLfHQkd3yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFUMtlngbxOCwXvF7KtwD3zWNqH9gEYgLXTq%2FfjqL7S6whdVpTCG%2BILXAfoJkeZcaVjpd61ljdhIgnB79oh0QxXZIdbYCGE0G1r5s07aTjtkRMlqGdhHT5WCEr4k11XEVq6qQK4ZVvUrATm5RE6iNitaMC1GMXNM13lcRAPXPpVcGkMcNDhy3teC3BzbpVtixbaxUjsuapC0U%2Bays0ZnMRaa4BP3j4Kdeb%2FT8LDPvFiN74u5uRglzT9UGQh7bGl7Y1Y%2FGJyjJStnRf9gPpplrsphUbqwLMxxJREf%2F5rk5asdj6tci6w7fOQMA6KZcVaVHb0Ow8%2BEgdvVowI52NAgDBDXTXdG%2FxqttrO%2FpA52dHH0UQ8Dv2RsVEqT0gWWkrZeCM%2F6qJP1D%2FMbZ5IJXQH0MtD4jP2sK8nkg4ffThSiEphLeekvL6h7CSmYFMGJBe1Ecu1SorPIhexkVJn7ydk8KV0vmVmuJJKVb%2BSNCTLHEul24%2BHEQIFzuDiYSBuLiNlsWPHAs81qMXCaqDX7%2FHEGAwxvxgOZ6wYbXkwWmz3fkJt2ZkyoIgpTX4%2F8oQd78ZQA6JrTGhSEQ7PpCZ6pghBD39B%2B5xOJbzdK284JSiPqHkH3N5x1giRzVkebL1923Pd26Cvv646me4AyA6wgwjI%2BkvQY6pgHmelu34oxcl6IgoKnxcigQENaZ30wCFY2DsO%2BZwgu2d0y7kmzdEQhli9A%2B3adpAQNoQn6oAhDLBU%2FJxjmDv7O1C0mR7an7uvUla%2BM3%2F6DspsNqdPuUbGLerue2%2FE1UkYlwL00H6FJeiFvqskOGk%2BRIrJZG0OIq%2BbUfOlUp3diHfoy%2FzW1w4GR5tH0vldM%2FMOsQk75INN5OjaAZmVWGNNMBBym3N3q1&X-Amz-Signature=ddfbe9cb95f4d5e30a0fecf698e967a687da0b5613de8874eb185048f9f9238f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5BKHH6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T220243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWcY2HpYO0w7uDYkCinFLD%2FLIYtTWVPj9Ggzr%2FP145rAiEAzzEiPOVSFaJZPtb8vZ044MgP83mJKNIU2QAc8mAspqAqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPoP5BzXOy4tHXHFyrcA2pZ8Su7FI39HkZdo7tvNhvaV7qoPv6zFLSon6nyqGcXMFYDv7OfvhafySnYhyGSelMpkzyjErCnv41tsmha6RnIuIOgPeyZLUVfrZU51k55x2mi2vu6CsPnqeqciUczIPJ26l6pVRBM31nvvqKgIVswD144%2FxyOKudPPgcyzp%2FEEl8UH0pgEElUe2ZRMVFwo5UDmxPtGGdQtGhUEx98cTJFsjEbvILcHpbiPjq6ZCjsfOzb6p2c%2BVH%2BP5JRb0fx7abxamLBfqqZlZbNVA722%2FXjUoVfAUUFVms%2F%2BeuhFpNDALmV5YG3jnst%2FzEGnZZ9jgYOecp%2FmWQVl5uFlV94%2Fo3KeVDOMoE4lwZRTA9WLOss857NWBZ1u3D%2BJsHWGZsFRWpX4lq8LPyNXOX2K8kyLd9usRCRNS%2Bz%2Bi80blQi%2FdxEs3lO9%2F3eNN5Z9MzPRvfEkVWRIG9FIEH%2FZSX3dyYx2O5XqSvZBh3yw%2F%2BulY33O%2FE52OukXdVivUP4c7YpdoOySRo9FYtLdAH%2FudTu7r5Oo%2F4cN0%2BebJ%2FDNcbS7D4LF%2BEXFaHUcH1bg3Pec48T0t%2FsIWDryXaPCa1wdilcbrMg6ALRvAMTmLUo9DjXMU9sD9lX2bONnys203iTR86GMLiPpL0GOqUBnN7K5udv0HuMtsJZ%2FLjbOU6rvm6C2hMZ5oeNBl0VwRDiyjKUXsV1O2FKtva%2F%2Bx%2B5xhuLAMiSf373YFlAYM7CgO8OSRFJkpcIy9B2EXLshlGD%2B52%2BK5goO2g6CweF4QNpuzD5UlzCadLE563j%2BdqZlpEvBzTqdtdwA2UZpjEy9kRPSmo0VWnEGb524mC5NVAKEREUpCPuqwbsanw1YdIPNH%2Bx852H&X-Amz-Signature=de87968e7061fe5bed1de43e66fe4ae6ed98a87f687f5534909c7bcb3cac9d74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
