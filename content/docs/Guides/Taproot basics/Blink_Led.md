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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJNKFIY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbTVhw3Ab83RZmQxZHivYTQvAHWqd%2BjEak6epZ5VGk0QIhAOgvJiOjOISrWQ4MeI8d2t33K12wOVu%2Fb6i3GJseIX%2FfKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUWfaVj21CJ8e5eewq3AMABxcqm9uPYQZjbBehmkPFyEpownFD1PinohU3IrGAdGyFV8fSpbQR%2B4gD9yMYShrW4ct27bqmeE%2BBau7YKnOivQT6UV8jFu7I3BknNIeaghe8v9DVoGAPc8GAZKXBux902uX%2FgASX08QYdntRIjxKeME5AZBH%2Fb%2BOiV1hGg0QAhj2CaFz%2F9K2Po4dbWdDP5Ju4aidDjmYawk9Go2%2FkrCnwNJUFnhqP1MciaNrAI78XHLFyonUfMxQnGaelwxTh1XM8dn4g%2BXu6BPzSyod9R7ZLO3eZ3OO4fAB7gWxoqNPlOglUp6CcKE8Y%2FmbEpwqK5rT7gNUc8mkhDEe4N%2BNjEMogN%2BQhxI%2B61GLRRRWi04ia2PXS9QPrI0Xdjyb2DBxQFjhW0HyJeT9xOjh2PwHmW9BnVb9kusptIMiiH0P2f%2FCvN7CXlBrqMwEv6N9ok3%2ByZd669zXc%2Bsntp7OjxM3R%2FtVOqgdFXiY6QzoV5hiZLe5%2BDCadODJbuFTdww4NCNnQJuAwQN170nxxmVDjKIjdZ5IrR8ovmF04HrYr1lWlqGzP6pMvH%2BjLmRbReIyTSiomOnVwU599R7l3Qf%2FDUyiaFDOvehRgM1uvwVg%2BZ3IWJYEZ8vIOF%2B%2Frg8X2056ODC%2Fi4PDBjqkAe8r298ZdjMMb4x7IMEQvtDXZ6xQWG%2B1oMY%2FE4%2FcpUyJQa04jMVMeR%2BkAoeXZkZ9RqovMFc0ior%2BOA8ReDEb1W5Mnq9BYQXhlB4CSgChdmjSFxDvfhxhYvyc%2BzVejv94qeQCJpsmtaDCs0FdOrol8r0iRNxr7njVvSApx9OZ1zIy0fgBpFOc6dCz%2BckCFULDap4HkBCf2sr2V7uCQ6H4nGjYiUE3&X-Amz-Signature=6e665618cb0816e2f5f3733b69e35193eb94acd3ccf8feb1ac6bbef4ddcbac6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6LYN7W%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFECODQkeJr%2B5Mm6VSPF1pblNlZLhTTri58nomECSdFWAiEA3Z3ZvOZrK45tndR4Gc9mIk80ZSWaxkya7eSk3qNq9T0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FkerBJVh8tmFJ7JSrcA4C6ucLOlqerg79vtKmrqT9KL32Z1OAcBKCTjxBoZG24R6tYfAJpIjTXMok5FxR4ZDWcIxJbnGSocttzBshT84b6IS%2BO%2BUlDPExkY5ZiyHphOJme8o4jwg9WUQl9%2BWosFivvT58iQtceOT6h4l6hIxcDm%2Bhw7zYl5qK74gARsLaG1LQipgrIvn9bqu07neM6DbiyUixiot60%2FX2c7c%2B95fXSn9D17Fkap838hxycENP%2FTYfy4oUpCYY2A5EN4Ly86d9zi8bGE8aeq4OMJ76eeC%2B6sPaiI7N80oBiPuBkEDAt7l8DPdBQrbyjahi1mSo4Nc9Kw8YLk%2FQYsxf4c05kNIxLecFW9BMyEqjx6jMSo87%2BSGxHb%2F0fG%2BIImyAADLCl5emFsWamWtxyljhpEJIOMdBMblJEkWsvQNU56p1PBm2rFUO%2BaKUkpNBiiwI%2FGgJot79XUQUzcmXBkuXUpSJiO0o3yi5DZjN8KNQr0NYiHJqw%2FhyspnmSVsEXzksD9Fp8%2BZItq2spnCpCgI5qNlK2htIIeRiagBy7LiXU8Z7oe51EYsDHImH6kRxdkVy%2FskT0cX3Z4He7mgE2BIMOHabyUGpDCc3DIqzDu1hzhJUMDcKLQGqT9ddIFEhWIBLpMPj5gsMGOqUBw8pFdXUDeX8jN6GT7Jltu9ajM91q8O5GnaZdEyC12nln0hYNq1la0EPDpCpOOol4VVydOmLE8ATE0kF8Sne0CBtGzdr0DSTXP%2FmfOK8r2wx9jxLS2RJ4UMZydZtJn1zB5VTT7ykOsOlEp8EMro1nYyNfI4jb5CzekFyz45G5VCGfQ8DzvrvfYzn2maNOpJ7uw07UbfDNySUh5QfaPFijZ5SvFW7h&X-Amz-Signature=952b0e3bf2e5787a19d75c257ade6d29c0ceb1e63618e9a5b583aadfa07cf98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
