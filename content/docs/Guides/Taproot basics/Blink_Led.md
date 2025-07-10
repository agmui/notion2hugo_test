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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U6EW6KL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQBpGUCPuck449TaGoKsvCcJAhAXX2I21Pk5cdV5JNZQIgdvESwN5y%2Fk6b4RiUM8MFCtU7ltuYTeIigf5Ah79J5XgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLcPg%2FIv%2BvF%2FXzGVCrcAwhBaFM6kzRC2kAAxEu9lVqJ5schUUqbGVUBZ2hD4ZYTmUUgajMD1VRuJ6subIzM196jV9e8pWyYb6tCquS89Qwagzs7k6le9beSjdOnvBcgfTrcJlxrDgygyN6zYn9VMXJ1GEEJuDi4UXeYZzRm82%2BJ05rAAsfJE%2BmA%2FcVbeeyHVRFv14ZJuLsuGVIzDEEU4swgtfLLftO1WT8wDW9wAuYHZC9VzGvOvaBw0ftW3zCyg9gDvQZ8LIkJkG1J%2FfvQ6aqtRJmArxjaIU6gZJgziqfRNufTy5BExN7V3jK6yLOZIqRO5WPa92PRuULtf9QsYYDajfjlv3OZX0uXGTizPs5SQvFQyf6fXId8yo7uwLLEbta0UMGleOQWla%2FFuXczB5xBQbGPgt8yPg9tGl3GwJq%2F85k4D5q%2BQ9GuAD9vLQzCZ0cLaUBiphFvJqxqXn07wqyigK8%2F9J8iqXD2KOTuK7UM5pJQC2JwbsKOScTjQS%2BMk7yIR%2FvKjbFxy3g%2FdsKwxDgsvcgKmAqfRxd4Q3PM2Xt0jf%2F7RvFyYC1MCO1v73RWnMMZdayttm72kmPE2w%2BlgFrjsKhyCvmMShItMsMR9rQnA%2FlPPxL%2BEU372PpEkdq%2BBZixQUKL7eP9A9F0MLXQvMMGOqUB0pirNHD%2FoefQ0yrodddrqoxbo4LXMyhFhkaeR7ZJzE4DxQt3fsGsxeWDfmywVIOL4q4SvbFmKZBX9ikzTX9Dc94k6xcWZynWX%2FcTTPc%2FIe47bsL5vu0U9If0NVdVvzCoZj35GKBNtIWWp6oSTu0fwZ8aba9PlugFmSzL2dXS5vO6D8rcuVs1ToA69DJK6cdeVGCQ1o9Gq%2B0ZO1empg5jpq3DqtWl&X-Amz-Signature=b3a764fd2e14d1d4898d9099e03e92c57cdb2d97f5e98d9052f02cf5dcc6ea8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PASNG6U%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T034537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhtd%2BUHDhsKk%2Bxfyh4xTx2Up7JwAx%2Fg6dOB6acOCh2rAiEA%2Fm70VAE8b8V3MtZJ7x7CnL%2FxnbivRSg37GC3KwIaa3EqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOn%2B3J%2BYadlwBK%2BH%2FircAyhduRAG9PHuJkyih3sjCrNLjAgtE%2FYjG%2Bba2frHfnnxOXP50SBnl0iBPvzpdVeK8O0tq9apO91TEW9PRHRZJ4EnuJykclfS7saoKYrmYqmrcLNYV32MQBaNXLYcbLlfMS%2B15N0p0z7UyE2hj6K8xDm3jmTSz76nGWVRTRUhRDKtzXqI%2BLTEoiIIKXz6EFJuYifQEnaJxAUXDm6x9PCnmauqfl4hEkIJUepeoTmkGWZGPy6192xvpXRwufVX9fZPAfTkkEisdJxewec3BQtBcrpjaqnSJ3%2F6qHQxYnJtZR0lMNPyUr1CmzSZey7am4V33CqOYt5BxgzNbNNFYNpmTgyi0RxRh3nBqaZA%2B3%2Bkdog9Oac9%2Fd2sUWBFw6Nt4OjgKb%2FrS5hq0ZDUkt4lsUKtOayRdUzl1G6Zp%2FgyNjNztuZoH0t6Ik%2Fs5Rq5wPkyd%2B%2BegUHAyvotBkVyyMnqSYeRrptqIma3Op6joZSGbPHrCVKrk3SZ7pSd%2F5LpnhlNf7MCwa2DlTDwgFOzZMfEz0edpyXNq%2F3vGQTFUwTTUz5fgjKMcC8hPOwj1uZZM2TxqgY%2FvDvqu3h02SnGTvWvDzWlI7cN%2By2tqKNtmzfQOaYYQrjiIThI2UN7a%2BwuNXYwMLjQvMMGOqUBvA9sZVH2oAQJ8Uc6dOdItyzHObDlsXbWIphu4MTcfG0cWy7f7myIQqsLyZvE6228kmq5gWxy0HLwUdCUKXz6%2BG2TB3YQiTGEl0wdxbjrmjLYOQiEh4jZOtSWLI5XwGgFeLRK0hcTO1xerya9gr6QBMloFW9HSL%2FC3GZLSlGbtNaXGt7WMkpspQHzjv9x9UcZlOt5zjZ%2FaBgbtJLe7jGMv6eEBEgW&X-Amz-Signature=ab8e9084ed93ec0084b9ee5e1640f71d9a889498e4d8fca617438697306ed655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
