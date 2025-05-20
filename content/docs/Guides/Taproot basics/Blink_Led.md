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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDYDKKU6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBofospfAk2sOeD7h12QJzjJt9KuQKrvCcmbAKIT4WdoAiEAyl0lZIajS1dCX9hw3NinnVA3%2Bq%2FCyzzASZshMYjGrAIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpNGrFbha8A8aJGqCrcA6y3nXrJ7PXDVkCxr%2FvZnxaFsNfJKaB63VXKNg%2B0EzeGaU6q%2FLSimCqDhrzarhtXyIbfKeQdf8PErR3tvKaGrm8zIhxQ%2BTSq1kDRWM4aa5e5eGAC%2BqXTFm%2FdTPopH%2F1YvKbEX4EdAjeB3Bgb9WH6SfNmID2RZghveQzd1LTqEOdgRh%2B37AhLDA2OejdbFIKfmDIZFc6OvLUMxgAnbqmND8mumjo64Gwy%2BkhaFkUTDMhnGPVeCx3qvi%2FJN8N5aYGB8rQ0RdBV2RitXnP1d28ZCJ72lkMbI1%2FUdSkpdB7oOUlXLoOgF8e9M8wR9sWVpgE777aHd8nqi78HnXjRNNfPiJZqmEliLYR8j%2BZyOfTeFLZNbAZ3WvLv40IgJSl%2BB4qZm5lv1r5Qe63mdIDs2DFcYlcEM6QU1ghU5Jcvg3joxt3yuu03bWCrSCU6gmM3g1zmnZJFLMD3sHwNzmrLPqZkgOuu08zQ9sDBOFP%2FmBD20LfMckOkdSbTbjEDwsT1eJnedbZdReJtZYhLiGPj2kVvZE61bZeEkQHvd3iwc5NzVLj9CqM17wrjE3cULOpjAMq%2FDTuiolsPceAcDmZlJfiRCUpdGFTCeZen1C7A7D8EIuigSU4C3hW%2BTBzfcdyZMImar8EGOqUB6pMPvtyKv%2Boq%2FI9g7Ti5HtsY0YSbrVp4191cx1NYNP8TFjQW3sP1vOD0MkrmRpkvRn%2FEIuAMfz45T%2BCuX7wcUuuWenblkxW6eTrOnt0qjqNF2eY%2BW8yFs6BmDAAF5q%2BMwLwErg8fLO%2BIiCxtY4DswfFNlv7D8GLEFqLVOMWz89Xp5IyptLBxaSLjuOhsaNZDStOOhVnZQEw0GEg1Uaw4y9HEZ2d6&X-Amz-Signature=31d3fc041af9d9acc3a2c002cdee4c81fec9fbd468cba9942c05b8ee0764f125&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKDE6X6%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9oMyWBB4wNN3zj97hzD%2Fq%2F5hCFyWwK6ObmPbYviyz8wIgNykeDX7lrRV1rRAeESaIRcEVL7HSz6RLZITL39WI0C4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnMLQVPVAWcDK2BkCrcA%2F073Hzobi%2FT%2FuFNzPcjFWiLpfmC0X0xpBaojwvO3WazfhytFFV8XNjlhXq5hvmb9OFFvgNb7rnLYbIoqvaRTRuiqg0Wiw2Y8OZlMYroeog9cPzSDQkNYvAf1PXZIAAS5AWrC6FFPgqaEmq13Wr7mnuIRstzsBBUCDWmlDszxJNPyQoMO4K1w2%2BVEAqt4zw1TL7d0twQEhQXRd%2BnbPnucrBLZQiRDzC3cpwkg0%2FoAQYMXoUcJyNKf8z5PVlfFlDgVQ4pjgC7ZasKfESz%2FeobNrncIMqwd4CX61qpERxZF6UeJmgKJxeWUF1GLQgQ9X03qg%2B22awKl6qhudZtKhSpM3qaoUyN%2BMs2KX5xoC%2F3ycbQrfql618Pm%2BUcVl%2BQqNh77dvya8Ikes0CeN6f3panMSIKojC6eXQiPSX3d79fupK90dYfXmwTyvkKi13YVtdPLBr3TMRqVqpVtfhiSFfVAKc4FlLbUWpi5k1TLKUdjZlUkKK8bTsEPtAstQt6KlQOCwAM0E%2FFP0dsAqWwYQseXaIbuGtFhD64rugX9fu9nfcirWo%2BssybSgK%2B3RsS6eRM5UbrAvUPyhFTBgIzLeqTJxaW79OF5d2By%2FrabpgWD7LQ%2Fr0qJLz4qsq4e5z3MPiar8EGOqUBAqowxcARpokHdhuz%2BTon9tmADcwbHxyEzTqWbMzAXwMjJreO7R2kWVr6z7woCgXt4LpEL4SWdTYubXtJl%2Bn0rp6etz3zwtJWSkluSIlPUTU8jGTAh9IdrBEud0zl5C3Q7xwzAjCUGPu07X8ndYBD05INDVHLv7SkHITx9y1Ez%2FBv9JpnsUD1hmDgDtkI0T%2B9dLntnkKVFRbBxMaP7dbP3BpybymK&X-Amz-Signature=8eb921598ea69f02fc9deb0b4a07b1f91df3a4e54bff6868542533210d2d3c16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
