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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAQDEX6V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIQCUtTXxgxqq4r5%2FuB6BCo%2FNU5FM4YW4UVqyTUtOPbvJdgIfCw3J%2FndPtOI2nMcpynyj9U6bRcVkRhUIBmEpxGeYtSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMsQKozWuutVR7RjbXKtwDJk5O9euI4DoDAeqygUfqsRLcFue0Bbt73ae%2FgXDS0SQ4d4NAyEy68TTtn8eatKLm9rmJ96qqReeQgiRvy7oiXUmF81t2DwvSStVyx5gkZp22P0B3%2FfyLSUu3dvAf%2B3P4KwyDDx9r2Ssvk6Y73tpaBD2FW2XFoys4i2mrotHrOUW4f8j0XWWCoIhk0vCeni3XSPsexO8dEDj5wyEPiyxWSkutyiq2AeFw0B%2FhzJv0OiHabl6dIzIgFcIW%2FEvG6WxbVF1KIqMwYKh%2B6yWGOqKOFg66C%2Fv4eK3l2kKItQKAPAElciRRin8yfWZFKew9gu%2BbDpEM2hydJ0nW%2Ftn78305toSSEGJjJIJbMDg0XQtYHmxVZ%2BaDJBpW6AyMYvgnoJjJRayGUf%2B6HUZ6tZR04rgPxW7PbrfPyUrfUt3DmEXanZPqDbgV8f1a2POzAcXkfyXS85y5%2FxwmF80GIlap4fK%2FhiNhCx%2Fn4ruAJTY2B5QfE3%2BUao0F%2B5vyMh%2FoyJbXQ2st04MgW%2FdGamj%2BvDYoBpvBvSl982nuXvK0qjEy7CZEaLQD25BE99WsAA8RkYo5ACgFpMcMA53pM62%2B71QvSG97soFz3klaluZxde9Twde%2BZbHvOVyWy2S2PfEX0SUw9unAxAY6pgGdk1x7GWDfjmY27%2FgrO0hb26Poo3kYPXp9Sdgw237ooI6PcZaR9DqCV57wkyz0gP42jklU87BooSU9pZsdnpvz0bZ8SmpS7hE2p77Yi%2BcnzKuqNFOfyC%2FmvU3LBkF%2FVZGh55FTUNtTtvLDOJVnKH1cwMwTgqIZ1vVZdulfxEmSYcB1lqcPigZONK6nZ9HUwfFOmhbSkdHqX2qo0%2BOWpbkxWn2PsoVS&X-Amz-Signature=38f913e84f4fc9a2fe0845c524518cf1288cdd2c9cba1b57f69f946292dee1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3Q2RIFW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCr1u9%2FILF8tK8X9%2FJorMvAlexxYLzHZipetkh2C%2BMfwIhAKhTsJ2KmWFnMIwixyV%2BZgKJEYz3k1TvoTbqmZuUI6fQKv8DCD0QABoMNjM3NDIzMTgzODA1Igy%2BidQmGIPsMBf6EHgq3AOl4FRB1vjqPnQyCC%2BmB7P5Ti2KrS1VfUhgUoFMJnN9N%2Fi%2FfHX33UAQSjQSgns%2BYp%2FXtbhDvi58Wl8RGCQoyPYNvaLga2J5fFq7ccDwe0n4PZlnOutRFD4SPyaEbTPDfoe%2F0q6mgzzCPVIL%2BB5gyITQ64YeaOMQuO4%2F5GO17mcBiRfWlKm1cdoNWLzd5duNWaxweYzaDpIdMQSOpbSkOC4jHPQ6aDyIU5sopwMNPuYk1QIljdcO4lIAjDvZJl9hYqqaCZdN8qF5aSQnOGZv8tnbTdGCRfrZk5xL%2Fx1vCE9wuclljiZTOhchgywvyNzjCEE%2FJFrMRJrw02wstCHCjrJsdt%2FH8CALqrd%2BEiXFh8YnJJDPpyi7Cj0btXGDBgDsYWZVOqPHsB%2BgH8zYOIpYCGG1o5BKiDcVv%2BBuR17qTbMhrIL5i2T%2Fcf2O6AkFuItlpIeY%2B6dMGYrqqY5jzuJhZxDPSUxBzXcZYVYb7yRwpo0U3o2yHiy0wOSh5LwobP0SwyFaV0gRxc1KvRZ6QOG58Kr5wBElaBFopjeoKVzqhdoqKUMyVxJR3nBahOMZGTTSzFaYiwtbmU%2BpfDh0RsWTUZ0FYY2ttoNJDFUhwJExCOZTaLcZNgnixDFw%2FNmhCjCX6cDEBjqkAUpjxfkn64loNY3Q6Lm1Om90wuRYJo%2BhNGsW6KwhkcybdbKSxQ0Lpyov1hlktCcbOYU9i%2FvqKKFxzkLewrgvzE%2Fktq2XDcVXix%2FvsVMPypn7HJ0j3JzSFn6nNtJyCwQAWvW5J6iU%2FYU90QIz4OebfDOxVAfU325e0R%2FUZkxgIyVtg%2BXaFPFnJqoON2cLRcrCHHoHEjI85L4%2F%2FoRoiJp3vZIMqgj6&X-Amz-Signature=1797abcb2e1a401a040a17c678d33843294217fadd9a89480e941cd4470d7c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
