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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMLTTREF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8cUZevlFIO7I56V%2FYkvmJc8tsWA4T9nEfjtlOy1d6eAIgHwHGCy%2FwmLWQ07dVHFOJvzh02tuI4B7102fPMw%2FQtDUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl%2B9CbUgjl9vmZskircA%2BerzmI9xCWM5dCq0W%2FvpzWiPAQiqzL7NVs6G7tvQ2jl8es4bhPz2uQ5CkgBdaQMENSTJe6y%2BeO7xdwLbQ%2BLB676OnL5LrT1GSwxVXBoJpiFMO8wgLRtsnvU0WRIDWLbT0IgPCffK3OU7qWZq9yeFr0yFiiLwptAeG56Lh5TvPg%2BAwBnG3kt72TOtQ9l9onnqBBERbFw1VMzBWUlehwjUiVC365l%2Fh6h0vwgxbbzMyvOLFmzxdJfn8a6xdF4jvOdpkrqpWZ9HyHLvr5ezK9A%2BTza9RtxvivAS1RKn4RqzPEvmgfFRTlBFaCSkXkhrbPv20XeHULIVPheIOQS8gNSr0iJivKwXLprYHBGDr8JF407EqLagvTD3LToLxef0e0fzZg43U%2BIwA3MurBxQA%2BDqADu3tcUrSPafay0dXQkh%2FJxlessOH3af6TjI1oYZjejLL66DKD%2FVG3O7cfAEVq6qpYJHn51oqqxsu5bu2IOU%2FdeSOO%2FNpdju1XGyr3EiHzr1E78yXCaiLDFISKcQImxcsNdAY1U76IQadKNXcJdL96nDWQjVvb5mf0mX%2FTFsyWE3Gynlcb9XVOSuoCwoH27coHCU%2BMUiCWWm0JomAzkOqZzNbyR309IRmPmefqoMMiP28IGOqUB6zsYDdEZaeRju3n%2FmPJSu1zqE85%2FL%2BRH9CWTE1Jpr3uiFMzV%2FeU5Gk4DRFHTx7HDWxyTVeL1w2UHXfRGipBPDUAQXo3H68v9PKjqeCgkEj6X4blfoaK8a7O9iK1pt%2BqDt6ZlBH3HcdjIdmU6CHFzWPab5bcQUPA4m5p1FkNIOlEBQnkaqqngi2NiRWBXAVO3zUFpttZxQ4Yz54siy6a2z4FGDoyY&X-Amz-Signature=29e3eb14fd1c5535ee7f9a8d0c69535f036a73696358b6a10954381c61322f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNKEJXBK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTDIawQWO2sWTCfuxM7K4iK1amGshvmxZzpCciOwB%2FuAiAnAVGzllhmVDvxUuv6hW9nbqE3NAKug6C%2FIRDeBKFRVCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3%2FpWDxPwe4LxSKYKtwDYUdGke78DMgsGUB5yHl5ARHGT%2BUDr6ZG2Wf2wk2Dt26QNHBnHJv11vziXxaKo%2Fop8VXsfq30OhCZ3ss2y%2BWgJEsHXmuVv41%2FHgOwHV52ki8dTS3QhpXO3sQQZ97b4iCG0otuoK9uLa%2BbTf7amPkItZGfZ%2FZaSU4ue91A%2FEvWo3AbaqNdPrBS7P0r3OnCzxpKIvWcqaTZZ0ZgGg4iviuRH%2BQDzCVcdAaXPYoNEIGcS8xSHswRr5K%2BxVw2qdCPSdqeQGICDJ4fKrRwxX9u10BgQNOVTOLLbEovrXobUWeaiJYw3AG3EC243XCR4jfIDmHY%2Fnrj9tR0oYkHaoCE4l%2BsaCQuq%2BI5P4pSnIjiML4vRVKi0H2N6IV4p6jg%2FkVPsyxFwaqzvEftS8B4d%2F3dlHZOfwXTzCh9mj%2FUT7jjJQFiG3Yw7AHERDKDIhJxDX5BLe1mgtrlaOPUPlEvYRR8EqFl8t1qU8mmFdORHxFP0bqY9CuGqWNor7S6RaVFxPQCxZ%2Fmln085zAKEUVMUDXJ9gGtGZb2xBl9QNhlmOg5ufSyki1Jc568J8S4iV2eC932e0KuXMUk84beKoThISz9WchwincGyvSPV%2BzTkKrnGN09Y6nPdK%2FwkVKAOoa2p%2FYw0enbwgY6pgFgS9hGrjahU5jBqa0%2BSl%2BiMGU4DI1uzBAlTwWsn4jmR%2Bj%2FJ0XKaO46zUkW5FsvNlxlff0NvfnvAyii6YSWO2sU8GFsGZCaoxOfrQhTarnAvltu2ciKT9c7Gwta2q9A1jT8RpOfLw2eZsRMrHzjAtu0joNrfZUB6D9UhQziNEKKTueYUqmafCRXw5G9Bk1X%2FYhzSnp%2BBukq5BfTU9tHrP2915v3PKpP&X-Amz-Signature=3ec639c0ce49f0e33df8611f2baa9d77e57064afffb6cf3b5f16a8d5a6e5091f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
