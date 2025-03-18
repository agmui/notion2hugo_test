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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VZ3ADI5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICf2oPI3tDIpW5y5MOUX4FUR1m78orjSq3OZTLxjkYqAAiEAjZO8UxZvK7f4YQ%2FtU8KNnVcp6sISXk9UVGv9FFGKQsAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFgcCoeESOhmSisjOyrcA4Ld8OCG3iBiXfRDe64A9XuIrWmnDgC1CvOm1rxeosZbxXanb9QWGGHfMg0cfM0qTnnGED8SZMLG44iNK6seMCSz6M8eKzhfsj4DnEGYV8oyVa2tn%2BRLttiX6HVoORjwdDNc0bbwHQbJOdtzDuqcxXleB24xnAt%2BPMZEBneuwtz5TVwmoMZg4AabYyLm5%2F8p%2FiVx96kCg8r%2FHsGlmACupeqlHac8sEGnZRdsYRMLZz3dF8i%2BMJj%2BuBJog4Cyo7urW34RhEYTzh6nI626mUZxVDlwKFZIKpMDK%2BFUHnfQcJjiAv5bl%2B3nVXh0bvqmGoMnpYiPTGCReUD1nNAytayw%2BdL%2BdmSGRQuX9n6B%2BhCf0lkNPMm1iBuw6F1f0tX0YuXOmeCazXXjlZorBcaIstgxjLtJiKZDx%2F%2BsEnUnLxbrcE3KhmgEn8tjgIj1jww9NwzcpsUDLZKmOniaWBdTG0cYS457Mjpieaxz8xS%2B%2FXzfzmTmyhj8olRpRASmIPcVyx4GTdr5eWoedr%2FiB%2BmelRo7lUGIgmkyml2TjoTVZ6oY48Lsuh3PUrPZH9WkYnNceODmmqUpqftEM2BK1U6siJl07VoeSxPp8WYaxlmmWNlZvcBPUPmM8Wr%2FwfqwAEcIMPS05b4GOqUBv8Qe4mBb7GgFoMgybfSwEhtrLuWpxT2PN2Xw2liOf3wX9L7frpiblvLXcfs%2BDEmScji8WLVPlm95Wu4TtRiZdxvGytBSrP5mz2wBuX8%2BhT6OOiAUaWJk8ksYB%2FeBI1kuWsW64cDEjeQP3qL4DYZMQd%2BqbdwLhUFGqgOgumt2c1MEnllSAXQNoHGhlsYsHX4VcKG0V2HOxfLlmQ3qzoR0iMYjMZOd&X-Amz-Signature=7c3e2ef89ea27c7fbccd2736b13ab0260b9d20cf029becb7990668ecef9ae1d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQD3BKAK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIH5tYhHdWrhcNEs1m2i3F5ylyfA7ogzTTtM7UC84z%2BBpAiArAEBwt7gDjmTZKRJ1nBkPO%2B7hnK1d6sAHoOPIhTgfASr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMDe0BgbFyIVyzKJrRKtwDu7ArsCikii3YlfDXRbtaA1nOiOtYtB35IIPLMnNNxWNtbc9wIgWqDqLJ5%2BswBVewtgiag3wtNTQFLV5Tc%2F1BEX27Eers3i7ooFrpHlYXqQJV%2BzEo3chuHC1ckvrZBZYZtKr8SL1NHg904s8kuqq1ejicIAdZ6u5yOxQEFsxes10P1fsHLBKRs0uhE2iPm0V3cPmzXJln8%2BDb4UgUxZiGN8lWLsY2OcfelS84Q7q6o7GpDhIGsbG6BrFOX%2F3Tvaqt0TlXuuEVwwAWZF79HAxmv45jmxizZbac6XMu7g4VkaM8ivmCDsYyy6Ortizkr5zbDvmPoqGL9518vuQT6SDRJWcvS7YnmBaR41yO7HVg6x2i3ti3fb9blPM08PQjyAKHWRLPJzG0xf%2BdeJQK6w0rRXKcHP%2FMPhdrc7%2BAzjYeSCtmF2IsRcX61rNKmerDbAEzzD7hhjt4KSoNAOfirixRHYUvZLFXO5VtJUc8H7TtRnpI%2FQF0sQmXuY%2FjMab6TGR3n2pqF1cL2AGgfO3HkW4Ib9eM5nYBlvbW%2B7NGLqD22KH8mLOSOvlKCHVW%2FRzkaJ%2BEPLhYk%2BDKzO6zeaoh0F9nKE7A%2BJkW2W%2BrtySFl3NYwVuUPNmyaw0Psn%2BsLekwrrXlvgY6pgEenUccyM8Gz0DgeWOAcB7nSHeMi%2FfyBQBz0qknAl6nJbhj%2FNIfqepKFYt4IeNSkeRDgzhcJW1NenqABxh4q%2FeeUcR8O20Vf7N6FAanUyr7JxxnrfauEZUyTYEuLGgCSxCCfb3o9WkMYmvZh3zdJJivjNy%2BmALiWfzo6b4ABkdZRDiSficfmxlFEmLA%2B8YP9Al4zL5CAKsHnu5M9MaUheJUbn1pD08o&X-Amz-Signature=91c71123d9151ac23132dc06a38c228bdb569d947114ad284bbaad92aac9e95e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
