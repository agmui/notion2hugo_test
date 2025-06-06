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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3YLL6L%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhy%2BGrjMg02BhyyoJn51%2FoUdKFbGzW5wGDJ82tnguwRAiEA6ZXOHR6%2F%2FS3v3pVXPWiHkIw05%2F7LHeTRqQx%2B6fI71Qsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCiGzwf%2F6Biw%2Fa6RkyrcA2Fcpd%2FEw0VVYU8Er%2BUY9zMb7fXM7hEw%2Bz%2BsgkPlunDvJWq1Mq9JVvwYR%2FYzjG9E7op2bmRfrgxeyaoq9IbFRsxKKSclr0zvepW93ignAbpkPA6kWFC6K9Y7uVXqPzUh7IqBT%2FqYrP4%2FMWQH%2F0MmN54IE%2B5aZKDXlNToXn%2FaNnVKl1O%2F0kjMcArLXPdV54UVm0u1Nyk0PBq7Y87Z%2FwNswi8tgRE3L0nBihjzCbo7n4Pg4b5ETGVd%2FEDw7MTZsAs95oTBjuu3fbsbFOSbwYL70%2Bnck7k5l8ht8DSxVEBP6%2Bj5b2ADKCFnuDGQXgcjyHAsqw2lETS8dNs%2Be9MNZ8%2BpPZuVVNZ%2Fj1PD25GwIiDuZcD%2BdPwBl0usEdAP0xyRKc%2F6bQV92iyVIFtaEALqRUq7fY4JK8MHD5dqUTj%2FY3yefEvMspbvPCTqnc6n0yW%2F97hqxHmGKdIyvrJnwXclpAVJTGVHBRMQIr2BIfpnynrM7nGYDGQg%2FJp%2B9njesMAHCpD6JDYB7B%2BaAP%2F%2FuH89%2Bm9CXa5R99Yj9qYxdPkB9%2BhvkAuQqwKRYu9xhEjuK5enphX32KfQWwdLStWvjcPVNqjpoZJnLDKDAqbsj9swSh1kzyDqsWI2owR0xJrpD4gWMP3WjMIGOqUBJjQbeq1L2of1Os%2BF%2BRGFa%2FMeerluHh9SVj880jaVqRn9TbCcutyD9%2BDha5ZhzCSxfByQ7VyW00P%2Fau6AralTWNfohjVxmIZWO%2FgDoCJ6bBqIphTM2J%2FPh2oLKD1RcKAW8jgD6O6pW18d6zTC02nOAx2QOYNByty3c0eDa0ZAplNWwQuctsxYD%2BBvTq614QcCaHNfD%2BAkuh6r2hrRLhYe4En61%2BpQ&X-Amz-Signature=d7bdbeb70e28413577364ebfa1e9bd041f0c0201c6f968b6f304be679fb9d842&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPJ5EB4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtBsUZdclmqhA7EpNfoM6SwEZGXpQe8ZSHG7F8MLuLEAiEAnSDVXQBvfj3t%2FNopufeJtqsVw6J9xRmP8b5NxQeV5Dkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDL05G5scWMeu0DQbSCrcA%2FnVhrDhA2HQ36L07jCdlawvrBngjhDiw4xM9wvqPBkyQp4Pr2dZ9DmntdGgo972ZON1i9TSdY%2FXTQApPdtwFmDz9sotSwkpuVUiLdb6vT%2FTYleOZ1mvfHMfszQUeGNzxPMawZwk7Tjh9CXZTB44snE%2BIaRbAFvoOhltOghkbsI4eCp5qGrygQ%2B1P7pojRG8BprcFDGQEo7uP0vh5LGE4UagCNnCFRNs%2BswrkoeKoMjQxqEul7wAzJEmM6XMvfpnutqL9iZd4TcavFAyY%2BCqBQ4%2FpKrgbFTWGKBx%2FTkw5tHAmUZwDumwTt6U%2BJyBoqA0%2FEywmLFo1U2brmbUPHB6HeOyfFHPI0Wjgb7nQnLpzGYqqlVTPim%2F9Wp5lFCvl0y%2FysK%2FfryelLyWFXYKwA1l4ZmFrtByL7rKY%2FU9UO8bCdmOliPeXpq1w2iAdZfFjoT0WWdN4YnoSGg%2BAH2F9n61kf4%2FIPfFgD76DgnZixpp1%2BZsUnRXiUaYqIjLaAHFGM3USbYuPOCDr1wq9qhv5k3radSx14PF8TTcdiHPeihZMU29mgJmTzjE8cE3x8qiEd7H8xLmJRexuuiQoS%2F%2FH%2FmkJfDouUykut8rsfrcG52bdDtqx6EbThyqR52JKdWPMNTWjMIGOqUBimCq16wHoJ6dZy4JaRH3uTCUlffKBIL6hQ%2FusP4XWyzRUd419f%2BedpTQbXdJ4Gi5Z5nlAgBfIYirg5zDfu991GTbRifdNn1qcC9wm4kQW0GQVv2LjMzS6BssYzcMM7r2XGINQ%2FoVOo%2B8z6qHj72d%2B2GVYi4GVSUchtV7In16WVExMQfrxOwobZ0%2BX%2FxhxadCdzbIeER1LMfSFgKdSUZ1gzw5dHYb&X-Amz-Signature=6ff65a570e06513e5b658d2e9fd683d987da879cf326ba49506092c0b3e56a00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
