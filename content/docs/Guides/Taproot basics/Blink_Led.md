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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5CLTAZ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOnqYZAgXnwxsIVMenWdxfNn1XIxxgNpT1JcXl31t0KAiEA7Uv0DYmdb58AKYN1Ab7%2BTIsmUJvM4UMe%2FiuGa%2BeatTgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBhnB%2F7L%2B4yDZvznCyrcA%2FCAN28FqhbTVFCt1jota%2Bh9OmJ8PaPBGWPjJXw01Ah4C3jsUrt3w%2BNaDAdWwFrgCTbENZDMlMYGjKrQZl%2BVLIcWciHDfjWUO3PxgloNOT9eVTDrCCWa3Hr%2FqTfsQ8W%2FcClhKlT%2BXNgP5E5EO%2FaZUumPRrVs8NwnUGT%2B34yMAGS6xkbL4Yc0b%2B0MgAcWjtGhqA78gRY46el%2Bu0I4keDSwW%2B%2BoxmVq6Il9IubHALScrvN6s%2FAeOJyF7pUuCKTFQbSJUdrMf52Pvw%2B%2Fo2ZfMYqq1uZTXZxAOs5oCLZO%2BPrizm7NiSD84GsWSZS%2BYTOLdKmz6ODe9PHNubqMX%2BQvVRdp4C24fwkr%2Fsc%2BdoGDrTa6w%2Bb%2B9anwf8W5VSEceFsJhW51JYNj4Lxa9IUeDqHm97ZkThDbAqmqcqbPJiwCfYl%2BgvoLM3HQTbrAUOcZibudXiWa2lXOSuFz4UdCaT0gpjFAJODwBKBqzWRIGSks%2FVCBggQtHwq784yEHXxMfNhqwjen9wSRv17lmvEFhReb8QWjZhD0Pc535VFSG9XKNn16eKLbwR3yi30xpTlrFhaDGNDaG2%2BkQoAL9hhp7OAAu6aSRFQFv7o0JT%2F89LDj8Sq6HvApIaSbfEYkG7dAEX7MMLykb8GOqUBRJ6Ys%2BL72gXgd4tLUKvuHq3WUBr%2Fmv2Gh7CBIkevmCoRDvpe%2FestY6nQCfv9463CaIn%2BwK%2By44ZzgWZs7x2sVGgU6pefYA%2B9AwpWr7ARJVtyO1Oq%2BQZU%2BjcE51epoBBRp%2BAt8qqfAtVERla8%2FLot5ZzeGnU%2B3DLghzNe%2F%2FdwWIHTFzrDEkcW6p01bEbTzf6HH1EPbZdaakqi%2F%2BxiImutvJ5EzVBq&X-Amz-Signature=50a502d41a20b147d6d4365d2c7a08ebf5f7125e07b652ec8939637bc3c08fec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDUUQ3Q%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl9bYVrn6E0ZqiHaqEvYx2SzOOroBg082UP3sJU66aswIgNq5NFqdLwMZjZUJTf0f8sTDTTXz2dlPkCrfTdDv8cmwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKeOlpSC5DI%2BhRw7BircA4K%2BIa8tAb1rwjfbDMWDXc2QVx2IA5a5M2RD8dFW62FlnlgnFIOokrfzCbIbOYT3Vo0X70HmTCq%2BY3WvQWBPGTVO5RrhujA6Bvl424bW5cA0y7TgsD%2F6O3WvT%2FZAZkbb4xSSpYN75PkBBxM77dE2ghX5zkOmGJMmCe1z3KxMYIWLTvZPyAfI72Zv5iEkIb9LRt2nFu%2BAusvS3Vdx%2BZto4t8xe%2FFppK7gHtBEM8M3QfQUsoltHlYeG1Zp4qBTsmeriuXzCf5MJ0J6qVvE5ijnF%2B0gpYB7yrf8qt7vSu4%2FTuHCqdPwxqpAuwOgBaFasz1Zgu%2BwedcbMcrCgj1FzW14FxEZvpKTrxLBJ2P01tSfBzSY6VTn5AepXSdUoWZmToMq3NMLf6NhVp3J4REHG%2Fv2W9RbLRvtqhPEUPUi2VPisvaHXt6SfDz7sOuDPRedu8iKFzS0tPNXDwb89hTeYaRYsPRhWubcTdo5nFIukdFhnTnUr1LIQEoIO%2FZO2Er9I5WXq%2Fpu5gTOsry8B8AWP6z6yVLDRHz4s7s2kVJ96kFvb9pkPt2Oo9wUBCdh7N4JYnKA7ye2qBly4v77mzUwXRB45g5U%2FZM2mpmZp3rdQamr9o4PEL6s%2BvaYmwPcGvOdMJnykb8GOqUBtZ0855%2BD2DpFL5iQOVFejLy7XuirPlOSm1EFyRGbLrsI8URF26IGqgK8qsdKDiNaPDIxHRwPbCwdXAI4%2BT1GfZlc%2F0Cjq3o11XmJxePkobxraAVh%2B2oxiF6RlJFcq6M6jvl2qiooC%2BH0zR2ByNSwGtnCxfNTYlayto7a2mghpB66nKmq9Y31Xr%2B%2FIvxOIc%2BpqpzbrL3%2B%2BvynEXs2rTn%2Fy68qBxeM&X-Amz-Signature=d9675e929cc32b177bbb091a326a9673fcbd3333f587ad678579242e2fd0be23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
