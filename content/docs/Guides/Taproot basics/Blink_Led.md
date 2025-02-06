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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUF7CU4F%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFHe52L68Em1dTKI8xtnr%2BPOoJ%2FDU%2BImzqvtP2RzURzOAiEAy3qmACeONlN8npAHwuZzQap9B8tK%2FXsyLwMsTjcVIG8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCbBQgvrFjoeLZIMKircA6e%2B3WOPvIZYR53uLObwqKDOaSvXU6xevEtNIEkLnSVzvP5lHgEnwLNMSXqPZG1IlPrL%2BDuRuOJB9u%2BVCpb%2F4r2vcC%2FDHrEKpBToJo5J1S5SiQ89jjW%2BCQJ9OfuKACfYNEXhZ3TIOMrRo93mwn5KDRMAW5LpRWoUe%2B0JZvbreo6K95BhkYmBVj3fo1l%2BjYcLl9KXuNccfk%2FWC6fzBs48APjztvMgot5%2F4lVXTguNKm32B3fsZjGM6Alsu83RBvb26l6syWgvizOvOCScPT2icpDiBt4z8WQRJh%2FGzYBBfN%2BsShajtShmPAZqA1%2Bm08hLa17C8i0ei3RQtv7uPGmcKBQ0gFSHUvMSll%2FB%2BjQbSg3BID8LY%2BBvAGCefsFX3GtzM9yJBfszrGuGQqcNobaN2NXl8glHGpU5QkS0QlSQyKwvIHLgdnMdAL%2F8cmdBwDfO1zH1zivmeU8Lsua1xGa%2F1ar%2F5WwMDfZMTnmAOqgI2rj9Zy4TyBnXA%2FrA53FfuP29kUh2TQ77FQLVrGCmLwFQyrqCoUgf9bGMd2DcVoriNS9uv0ofz9G%2Fpcfwjrt9rfDlAtU0IcQ8Q8Jce%2FHafY25J4%2Bo0ew3TRd5u1gG0ihH%2BUJf%2BLLgLJJMXyFLvaAzMO6dk70GOqUBdU3PQdNF6qSBzVM9Z1%2Fy6wEVSBZDi2De%2BgbLqZ5b09jXJzE45hx8ewihHNs%2B5sxFFryLr%2BXqbX50os1lTj5v%2BjRfTxpotNuGLRBNiXluGAsc1P6%2BGk7YmMOlHTDI%2F2gDCEOOx7U%2BhcsxN1h78ZmWOx5Ky96cn69VNaq%2BOjyULagi9jvTHIUgVTU4wrAJtnRX6EHYhCTgZeBKF8eX54XYO6UE7MyI&X-Amz-Signature=48bc164fef30a9482b4862b825cf385f75117346003b406b0d7de3751f6e9c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLQFKRXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDp6BBeJnhmuDs%2F4QGQkKokWyunT7NFJLtWCu4P8GG5EAIgVo90PK%2FiU5UVGuCSKGZLVKkd3oyF9JaQzkQEyOtwEnUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDImEu7mXq7w8MpPoNyrcAzaNGyry38PSBJoGkQ1K5trc7iHWfecPJJQJXxzdW2HPisHs1pmgP2kX6bRMBioljDaxGd5zEMDfRc1WIfMkfd%2FYw2W6vEil8J%2BhZGxzsrwxhBdZ7703eChOIpixjKnBcj16UkOS6SmidUNY2XXZETItqlqZZXYusYjAMKDwXXCWM7oHqqUP1htv0zoS4wDzHbW7Ary8qFyoUc1Mhi%2FNrdY%2BD9ivsewb%2BLquL6PuGKjZ9G%2FWsCZrtgRe0xod%2BfdHrx2XNkN2G7IRX2JQRYL9rwk38JBF6vEBYKXMtnycLqa7iK%2BqAni%2FT8Dpqy1TILacGwdOd6b16Ne7acsZvWrEx4JJiDdfn0FAAZEpA40IhhGUZeKTuXGvPPlCoTCnwB%2BS6g9x8vQzVknT3PlVqmG2Hk8xD081RZJlenovUfq%2FTt1Ims%2FhJwyORqk9GGXqYNGtVwxQKeZLnQiMBHQf343jnai%2FK%2BUDd33BA1YXfQrKUKdc4z78hHdaWBt%2FzTzb%2BEiJ21wNUOczmWqAeU9q0XTyDnMaVw64TvMVuW5KUw1EB7Ejm8lImg47gpCx3mclcVvQoJTtyBT3XYmywfET3Zy5s8tm1JMAg70KCAfBs50DbbDlOsTvgKeq6Mm8ZyRYMJKdk70GOqUBorFwAdfg0oCaz8pFSGt7tneQdj2jDPFxefaiD7Rr7QKbw15pbUqAmtWadWB%2FsQgb%2BP6e773HXDSEp4AI0Kd2wIwKdl%2B4eneBmuGRJWHqq3RjzDoKPUc4rkOyoZ27TgE5b%2BPWsymJ72P%2F16UcSWSBiCuPvk1nGlQ%2BEbRMdvwqRJFKNPpM7keBvMj%2B2%2FYnA2SQupSwY4amtCWO5QvAjGjvGudeWLXE&X-Amz-Signature=c036d34e855c763d236da4ffe4380833fb1f64648c088d8fda82d1e385c09166&X-Amz-SignedHeaders=host&x-id=GetObject)

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
