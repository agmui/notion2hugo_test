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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VBSTHLE%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIG35NJsvX6RN3ehT96EmcFFdDYrqxCZo0vwW8ezWB%2BinAiEApVCo5SANQEXhTKz%2FzNI3SVHbh%2F3Ocg1TDcJiMHasd04q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDVwh27rPCyIoyKWFSrcA19CXfYn5txcVzKbMu7F42smxM8IgLvznTEDica9ZLApuQtsjJbkkMlvJsYVnwP9VMRNio0s0Yz0ttYYQxLudYsSBkWeP7AWT979FdlbC5m6pwsQ57Bxz3aTckuaGoxC%2FHjwNvNX3rKVsUzkU0mAijkT2dDTjQTgtU%2FuHRifPYoVoX%2FsrmhqwracEVVi5WjwSzJXdNxhe6MyZxa0SNloo2jxNSzFZGbWwfstjwZFS4khc%2BjOFzoNuSmxZRuKP82AYtGasP4aInz%2FSZmOQIFZW67AW84tX50cAo7Mh62mFE66uUS1DpW7Ad2ug8uxdVR4PCrY9hDl43TLHAE87TYlH5psqiYSN2mwRGwbWuum4tI8%2FsWkMjU50wXw2bib8dCONybpHkub5BJRUzaS41ADPdmFuFeIeF2oVMAxKD9l0KNJVOvg6z0%2BM7QZ7mj0GH91QIYdNNKLngH0lEdnptY9s%2FozJPtC2Y%2B2RS4x%2FjRZY23jrpd7yEgbMNVz5uxpeVYbLnNnE%2F3ShYOMXTcSIHu7okB5Jz9mqxM3dnb%2BZ6fl6Qc3ws%2FsRw53lEZtKeLCbVE879ugjh6K1NTCWJj%2FTaoK0w1y9AQvihr35iPKNWr8Nf6d11QOEXqi%2FKHHJ03pMNyKob8GOqUBIi47mAKXa%2FLQzpBetxFW1eozMQmod0PYOSYPaNRsopjGhLut1znPLqXbNNCMUSO1di8TrL6yxG700jjdJLfvC%2FbRfbIF%2FtjYg32ey72CO%2FZiSlpUfJg%2BnZ%2BxfPGeunq9iQdG4xX0SW9dxKyDHVks1inms76o5fp3pYhO7%2FIKZFL0xU5Tv%2FRcrRq3a7ktHd4lsh322FICxoUm6SaASWTfRp5z7lby&X-Amz-Signature=8f1d76ad6bba9afc12c5791cde7e1d7e3079f58acf4a93d63b7f90e4986fce74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFH6QPAA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T200746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHywJdvQjoh7VW7TpIr8qlIDbVrWx8HnB8CysJNZogYSAiEA0rKmiMFfIa4CDguxa2C%2BQWWPQQ8x0zAnEn3IJhvNdZ4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJrYAzUyyOuj4paJCyrcA%2FT8WktvjDKpbZQWFlKhonIydXhV9dr%2B5tWzjns%2Bh7Qea5DcuL%2Bdj9grtcMegn0TtUvc5kK2NX49MXy9nsB13QOrYACCHjdG1bx4fHIKMPYyZCFzTN4uuaHuOsT7TkHR%2BFAo%2F6sG9kmD2pJXGzqiNzH1u4rrAkeVGIq4HqQs%2BG7nN4zrrieGV0luj6RXI5aWE%2BvkFG7G0MNrGJRVSVpqsrMk1doIsOUX7kywstq1DMVrHFJhP%2F%2B%2BzqdwFY3ddW1haVp%2FOrQKrN4wZ7W8LtdA74f4EbMCcPuOe%2F2p%2BnLgMIazQzaiDfnL%2BQ806k85qsB12BijMwGmdK4nnw8yCQzCcGPyA0qawNySJhOxxwwMb9uHX9Ww3Ztjicx4PwhMsi6yKyQpE0DmkzW0gNQQA20ba66YdEWVPil7ayIAMpykCjyKvU6KZ%2FaXFpji50Kryo91BoonssLpq9E%2F2QO5%2FnyI8E0jYOx1FG5onnhoxbCZD03e0NWIo6emmULEyjzkiObA71Q4CsbqxgfGYgvOX0kEkOR9RjvdxaKRP6GTK%2BrLZOjajL1Z9BfKkZalvSWe3GIlaq2a%2BtCR59SYb2G156%2FWsFqUCs5iD0A7oBH41dgCtW1R7l7ZqGcFdJ30QVkuMKqKob8GOqUBXT8rGS6HMyONwsXsLrVwuP4qH6ngUBUu%2FtF3eXAnuhA5KzEJ8wuEtqJZ1RUXAMTdefsFZqydSAvmEWvmxzXkvPjR6x1bx0exPPiS5E6p6ZSW4bqL3WGGYa1l1NSZNNjgjnZrK9zmESjEiyfxr%2FWzLBSDUpnxGuEKZ88N0H%2BBolJWQuHuI%2FGbbdyK20SwGgOpC7E9jz8wFTKjA0DbS33%2B5%2BK9TmNi&X-Amz-Signature=9f7908311254ee3fb115149ded8c9475eabd1f4861963083595c15f72d90fd14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
