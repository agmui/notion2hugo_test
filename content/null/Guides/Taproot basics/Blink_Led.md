---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFTUUHD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD8Pd0EZlkeFyp7BYcaipQt8Q2N20%2B0GWAMZHKVYwcKgAIgRd5lB7%2BlZQvspERb5EG4sQ54HJvxZab7nBV3RNo6kx8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIrZqF4HQ6zuGa0uKCrcA3aL6WlvEdRYSyaErPBpsceFA2OxI2bD5LQBxwJcxqz8tMWSMmYMvDxgQ%2BYE6PltYHUEQ4VIeBBkMG2xn56vu4Vb3mLAD%2FTvzEOfDwrLMc8BqFn6%2B0tV2hDmDz2wUlU%2F08cqic%2BDo085RfML5JfbtsxRpC0QH3TFb74NQEVaF1xQtU7HjDdkBbT7lTRCBPHifk7vXo4N9ABTQJsSSwhQ1dZb8KSt68zg0gtoLDs%2Fls7wrmIlTfAuD3b33E8%2B8YXGRQWH4U20C3WW%2Bwin4GqoOv69nQN4uA9VTGpEhEeKTB%2F8B2SGe6dTNbZHfCIn8WVr5mPtpQQGvll9dLSQcsLBgDggNCvOnubiJ2CP03nEuuEzjvM6%2FU%2ByZL3we%2FHdKsNnNE40hEqzYkQFy1Q0DWn7E74HdijyaDQqoUadJTuO7t046F4RySXKgwVF%2BnpOsdvKh8HWEZbFgXA9j0wT0c0xiGd8ogt8K5jc0h7%2FRGR9NZOsAaQjb6fMS66Dv4WPFjejRCsv%2Fl%2BsxM6WyT%2B7rlF5yuE3SOSGGEQXQJw%2BkbezjixMs80pxhcHLCpVK1%2FUenCRHgjWqa8x27dZugv1wqmWY4QhbK3ZfgTg4Jmgf%2F3XL9T0GVU06bHAhia4rDtCMLXPir0GOqUBpeaNYhKI2UD9EZLBv6L6A5ZHtPqPdBifB3GzXOVK%2FexumLbn4BEAQP9mJ%2BkDZ2CDDgLOVhatR3hWslJzRnoiCI8Ha5PRoUbbQb4RpTntCdeJ2d9JQvEFg5UsQPNjyomfLtFZ4cH7znS7OY4nWcuz49ASH3YO0ZykJrAsC8pENkNVE8ia%2F9Lsv1gHR4XzsRgf4dJQTJH2wuZF6bpcDmPOED7Nwl2H&X-Amz-Signature=1bc973e50948a802753fb4c3a648ab10b751aaf9312e4d10f7488c3230c8ef69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLICT6XT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T020801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHIbkXlfIjL07mOkiVw5OBC7riqpVdET0nI%2BoXNikS2lAiAfb5%2BXof2fbEktE99OfCTnPIeJF%2FhOgE1czGFnWQ5tfir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMg1T1PY%2FjroiprL3JKtwDjBTxNAwUe2dYCGXoEqUdKsEWNJmVuUDxWXDmaXNhQUScOnKWbeh%2F9MCGSqaJV4yx%2FyB7vW9%2FAm82fO03Q1JzmzYmydj9SAcQdtlsN3e9xpdb60%2FPXjpR9uvvlfrjxkgS0hb67VXxzanIdwq2SOYG79fX627jHG8Kt%2BCzdtHvKvuMLclt5lk13kS8QkwjbY8pnWEErTRpgCjCNa%2FjzMN5gC1YwhY03gw%2Fjhi23l%2BojhOXJoRvajJUu376XR9E8mRJvf7HiO5OY1yKp0gqefK%2BvOlgk7VRQ059FkMwRVnwVyMBqaUzbMSiUeykzmVD3rJTEXs5jlUvbQ%2FC%2BPbEXJpZLMAYuvZ2B01Ysz6bcUrq5ZNg8VoTKYdmCMy9iJ2pH11qkD%2FzT04wP8zCfMKFkidHZnFE4qTBvayAj7Pd1wIzVwwizDJOTBRlsCZo3C7NxdcUKby7XvwpK9nA4eDyTdvJZKGH%2FmpcIsVo5tW3FyjB5hPFjxzZCAfSSBPcb12oRu3tqVQbQBVp8HltddZJPH%2B0p1LIP2Df0J7iHT4wEeAQsjLAF5KSOsDFjKEjfoTo0IjnLs%2BhuyCus7EvCh2iFu1dCl7pztqbf3lq6ThX8Ov62IOi3i0v0hsDxvpsVtMw6c%2BKvQY6pgFpqL2ES3p2JtYoumcUJZFxZnjlld7NLVyrjwGPdH1v2bRzhld7bi6RTzAkRM2wBbSQowm%2FDfPhDGc6w7qfZmN3bLSfOxhaGprDi0cWmJZb%2BYpjez3hcweJ6HfLu3gmJLzowQhje7jSaic42J0Cg76cpAh9ELjcM9GrvJgPlIRQbj1bdwhVoi9tqngZvd92VVuVuMX9g3iHJVg1TlGk7P4r%2FNss8cDf&X-Amz-Signature=a0cc8d46505b756b3b8631e0285f2a6c856353352b69b4d15ca3ce3d2c507b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
