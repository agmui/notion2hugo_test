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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BT4UKBA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCpqXBeLPooem6O7AH6fdO9i%2FdLxYYLnJ6OH59whnswIAIgLsxlgLYy6osIwnevQNp0XgZsNEG%2FgyQxaRY0scuaVegq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDM9rvT89eXRdhKjVwircAxYekgr%2BKY4g3PlaHSF5Qxw0hWXYhRZiFH77yw8Tw%2FJ%2FwMza0Ax3aLmmNzv1WzOelGaH86ppd38ZnEc5iGr7sBTmBwbIvlOPnQFkz2jP9v%2FUb%2BKgn8uFIEIr%2FrkvHemMlxhnt91IF9WbL5IqocsFLXl0AefuARgpiV%2BrKqjTNuvZQiCJVdk30aU2SVV9NstxHG9J4Cc%2B1Rc%2B1UT2Y%2Bdw5lW3XETVJVqTuXGIEgFGwf17fq%2FqgctobOLzbuwoqb6MRSw0ERisg4b4wPibZkGoKlwc1DDeM2lnMprjCzppSsWvcECrv8q306h2%2BO2FgVEZSeprjXt7ag%2BXE%2BRiKhoB%2FBkjKYpGYS68uvrmoIYrQHE%2BAyNr85Eu0pq8iKaynHrEE0mx%2Fb9RJznEx%2BqBiVTfRzm8pUQf2%2FvvYIgHkn90MaquJm653Y8tCpvrXJdNZh3oWxXA%2F54M5EqPZRFvVuy4epi3pwTyUxHCPETXdLFBb8DEJQeqF2Mcj4cgzB6lfZXWkXJzAV1e4LqWg6rrU56vdlef5whPC7z3yOjjDbBbil%2Fw8zF5vvFiq3x3bQzSA8PLHuXlU0eErk%2FP1Fo0uzi43Mk5cL3EudYUw4OoCR33KG9CIzhWOWxB9paxOQSNMPrA9MIGOqUB9v%2FMFkzJGIES3yNguwl4ViiJ32sTQXIo67ppjuu1AARvWCkBjYEYz226Ttyt6AMr7h%2BqgsINuW4RX2K3TK8PYoaUsilMmhxJm6Lpf2kZzdjetxx0zeveWzc2Z9A2pT3SLBtAw0x22W7DrQ1DfjcMW0Iyr0v1qmgi4Oh479WOfRX14iXDO%2FD3m%2FV3wm3I4jZHAyo7jBTKltNxJCvPStgoHXzfnL%2Fq&X-Amz-Signature=82dfc0e86e5fca7b8c7a9da2eb5777bc1dc988590c31505339b1da25185f8a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664V5DBA2%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDhSkmwCmeBQmhQYWWO%2B%2FDQOuWcN3ChiTTJEErESyYGrAIhALrT3cNHd9EC8bX6%2F9F3AYI5O0Rc3s%2BJFtSwYgyOnM4dKv8DCF0QABoMNjM3NDIzMTgzODA1IgwFu36DNp7bRAO16TEq3AOaVTi3RX2cIww1ByiL0emArvkOu%2BkH7TJlvrquEY4knf6vgLaoqjha02zKnPaW6IqFxW9A8%2B%2F9qe2nqB4WvVo3y7%2BvsCKFhVvD1AnSzBPxfI1hEtEV8v3WJvV%2Fw9Gd3QI1ORLO9cvjx%2Fwnz5c0yAXBr6FPbr%2BOL%2B1uhJIG923JsqfGh8nQe1pBMUE8KUdiKvJE1o1xeI%2FZGibTV8D3otfqGseRpuPt%2Fsj63alQVRetvfZygc4JbRi75yG5wu0oqz1BN1r%2B%2F5qETDi8YvlEeGGhNXYgeY4POHdh1Hnm5EC1toN3qv3feeiOq2INOsh23a3jAKazWdysWlttSOwZ1DprxCUMafLl4x0sgb0FYJMU71h8eCFSyUOvAu7r4lhBJHVbqteTx8yknG038DT4fpDnY7nft%2BbHnZYEoqGhN%2BnPknZwLqF049XXGSp%2Brndx7g2AxiDQHSgYX4egSRbaQq0cKEvDA502loYhGS%2FwlW1J8A6D9TJgYd7qCGPA7AScEDkN4uiuWlyGuO7ED2rWbt4LqMfkiibIsiLxWuJrBSqYs5l6taAt1l%2FlvW8aPbNldWW4LtdeXQmSmUWC6b%2FZJ8g7MvFzVXYs43Msl4e03RKa4iP4D6zlzt88NH0%2BTzCT8%2FTCBjqkAfFRG3xbqw7ASZPVFyYvnOFAfikEomT0J23aIDCiVrEi8OwYl38l4B40V0wvj1LSRIeYzQgMvONXPC%2BFUPACXcEntKEdOM6%2Fjf9A8wqvowYV8Sb3fDgxboadIHP1c3a%2BFkZdsKgr%2FEtf6cp83Mk0e12Sur%2BhWc0tFsL7T9qk306mF9PXuSwmk5sDdncVeVl38ijulQ9HPhTog5fo%2BrmcgKkpXEFu&X-Amz-Signature=8de943161f6d71bf9489437ea724a32ef50a585a7a39e9fce6b51dbadfb91d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
