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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OYFAWA7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQD7ALPKu%2FP7GsyV29WmsEMxDAzwZTmmMoEcQ6XEFiY7iwIgf5vI8HHRuan0rxdqJdXfq5qTE5IlYZXj6RpyynFk7FEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOE5G5kKAaI%2BUFgPOircA6LRdT7wAYMtn%2Fg8BjTbIQHQX%2FXdV%2Bknk8zBsXSiXazm5oZ44cKezSTIlgdp7i5Yyy9EpW0ORlyLH653OwqUMw42fTpTaSKjpb%2B7I0ZJAvHM6lklaqU3oG8Az6iQix348xFCS1I%2FSWXN%2FCQHg9xHQNQNgbSPHSY6hC3ShmdZqGwQ4pR2C%2F2yJCXyoRFXDTh56nNArR%2Bny8OH%2BKZBpioJHnWGkxmD8CqNqrMUahWTieAHeMyUU%2F%2FGEhAt7Q2QO3t254gGBN0FTxFvu1LdPYI8xKCJLFLtFWLke2NxvS6brdjiqX%2B7z1wdOcWf%2B1fsWMW1JZ5fKLk0I0aj0lonRtjnnjj4vje6fxMk01td%2BPHabhF2uz5cWm5jKcQREUYOp3%2F9eVhZG3GNaTUVoRjZ0Dysr7MPGZ93xMn%2FzHq2de%2BrUPhqjpc29SHBrpzrScWTjIuWViLIt%2BKhIscOAQfWW1dP0O1w8T7YxtlW8CCgEi3J292V3DFBU%2Bfsf8Wkyq3Ay3VG8B9ewCn7ZdeFzJuAqe298N5sMxRofOrPL1njT1L4QZ9pPGtnl%2FN%2F3fpzhVSHeLOM%2BzO5ej2nWr0dMaiIOuPMui4%2BcmF0u06QsNgt%2FQwKCFese2HGAbYlocwp1ECdMKS73sAGOqUBVuFPqED9Hmc4g9bS4OfMaymmqvkteQY8IHhQka3PxRPCLxK8FfiwkRH26c5F0%2FIJG7cpuspEENQo1exIYi6axD7TAXz124k4WXukQu1k2QcBlDt6bgAfIXbNfuNP6uevluVpVdvEBmkn85ufeFZ7%2BsfPppdrRl4BkZ48IYX1xki2OP1JTwf0BZJIYU8XHjgbEjJ6do6NMDI6UuieoLwJGxcMT5uU&X-Amz-Signature=32ac19bf23a73748574ae47ef8cce735c8813388c9c25efd34a02778f2c1e538&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI67TPEK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDSRDO2rH%2FDZPL2h7TfWOOim%2FAylAZRddpOLqYSzkU8qwIhAMTpKu4GnqZwtoYdF8%2FZhJpEle6%2B4q5vZzdE%2Ff2rq7mdKv8DCBoQABoMNjM3NDIzMTgzODA1IgyJzfCDEzOvBd2fY2Eq3APdjDc%2FpzjFaeeqc2TXvlSJ8qyP7TEAjxPQphf6qXbaVqHdLpiDCcfVNtOFuuTHFdvu6UxF8Hy1IcrFlpWxZ3jRR2cOMdRek%2BztKHqsOSZUkJ2oArSzO64DphXEIEhDTQey5ZYplAecGcmqARyIZItVunBo5TBzT33%2B%2FWRBdghIlE%2FI8DfAPJlhZ5oTz4o4kYV4Nu4npgJTSCPWSuKFa1bJl3rSmQHjYf98Vr1MlCcQI9qkpipYvrrjNc2Tz4IVXha9dHxv15jp%2FRUIIZwIDOxCg1fXWIFXy%2FnZBPj%2FhTwJXEUwdzFwve2Cs2Zynx1bESHCH5IoAyn%2Bg3EA5U16BLbNqDaP3OlrlW39V8J74nY6TMUJw%2Fs448RuuCUonFkwWN%2BG3VJOeyKxNpU9%2FZAJ3CNJNyi%2FbH0N3oBMcIyJiwuib0lLxERjAc2RlxCsEsiB2Vye0WnUuVArGYsRPho%2ByNyZiIO38dS%2BWsHRcE8olUerGtXjVMCOTTG%2BEzfg35yPVEIVmo2S%2F0DN9aebLFrsCSyUJkKDfSlusUfAV3w4efLW0qPvGYAOORZ%2FHRjS%2FLBhsjt9ZKg3KnWs7P6oKunDDr%2FfCkK2WKCpkm3WDxEqscG7rDMdwvpKNAr%2B1HLKDjCPu97ABjqkAd9nERg3BDzFK6Nx26F1yp%2FZaHP994%2FOubczVDC3Y7UFD5dl3Ph4iTmMKSutiaJHrCPsM%2Bat8O3TaQ8JLT87fnqhr5w6df2mADQeje0dMnB%2Fu9VEgCVreZ4D4uz2l0Qp5R3VdiIke6STnOhPqUPKPqc1AZgtQFMqqf4vid4g%2BDb2BJQAGkMRofiBggW5RYUm5KE2KPse6U9TJWlo4YgE4f3CYqVo&X-Amz-Signature=c7d8d94c403b534550d41c4ddfb5d1e45ea2907bf94d80a716b2f468b26f92de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
