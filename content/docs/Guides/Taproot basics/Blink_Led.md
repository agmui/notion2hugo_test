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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCDVLLXP%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1aRjEQFQ2Rw4QlA4pgaaP57%2FQ%2BVrB60a4zONZhh6NnQIhALuW0hyV5aty2%2Fys4iQV05AaxUC9pc6Mue1zcgsb4VOaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp6CERYxCmUyhVlYIq3ANZ9%2BicUHfpPxaGZ04w2OzbqbzdjM8QTT4XhQVVZXqAV5IMOX4M2aXOWm2Z8yCKKFwV7ngF5hvCxLOpEVuy3CiSmjY0rLx8uZ5d3fTSH5rw8etwk4MT6WY3jZTw8NSNbXMKjkaQJ8Q9GJkyebBlMlXTmO7DREITIhdW9k7w%2FViYMXSmzBM9a1N2%2BCUKB6VJ0HgboJqN3CsgDIClOv%2Fum4qUpmWyKOLwZvBIh%2FrIcXDHR8XUmQJamcXqe8pKX4bY0W51k6pQnfhA4j42zyVVAPmEzIgcIrbNp3oALHBPHXPOTPMxwSlY7PnXFzK4eZIHO34SA8c6umTUEqrnLYk1gzbSeKgmMLB319qHDMqP5pv97BXoBEy4U44dnNrU%2BiCW4sm35FpKG7IUxlcJDairtGj3ThjvQ12ioSdgqx89GYPoko6VSPKMebw0IHnvyXqOakVHEYn7IagvxLPqu%2BmjMEuO36OG7dbp9I5oOkGrHHMiY19ag%2BQAB5oBX%2BEWUjXpF9CkjQTZYGeAtfgxJo5nMOJt7kPQcdCxi2I0lVSTFPpV5x7GhNX7P1iMk5hCNPG%2BO8nUP09kzWN8YoWbp1ScgbjtLVmwz06emnH2vsHOqC7SkQbXULuTBWecnieyajC0xrDBBjqkAZExR0HeUNYJ4NQbfYZzo6p5eXkVaLEmWwl0exzHUBtZ8oBhKKP3fkrO2DcbAUPBImZWRzOD4AxeLLjgCLkfKPJAuDIvY8iYscbsI0kcShu4l1jwjRgBWtm7SSBtHqVRTPDdnkCp%2F%2BBlIMzKiOcja9AMW6Hp3shimruePXF6G6Pc%2BxbOdzQDjYBdpjeZ3RPCJ9%2F1CxXy68RDKDO7%2BwvfZtJVmyvy&X-Amz-Signature=1dd26d851ee6035411dc898617f74513446b1767d85ebacc3ac4ee41c6924c88&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767KSEJJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtvDHHDTCt5EI1QOdzXWBcU9PaiUxAvAHE8oZVYP26sAiA6GNlrgItEuyYGQ2S72L2CwMxre6kZ1j75W5d1WarwFSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbsa%2F8EBNpyWZLiPbKtwDy3D5lTWYXtOWxKYOGKrAWNlrINc2J%2BNYb2Ad7MdcsQ09SxG%2BgOGSHfUuvI9bN5MiAfaJylmCmVGGmz0jkBKbJR4glIlhkW2wg2bRXHBivybffv%2BRGyQ4PVRscGG50V5oKVnmc50Z0E13J%2Fxk8bwD4O2l7u60o3nKCNCP5VeP5vkS2GugYSxAatuRqSdNe32cwql0hJiQyR1LNy5V9Z97Z9upXuEpK4a0IvCt0bTI2%2BQGY%2FDjusEJIQkowwfGkAPzJf6bnnPWnjto%2FZU8Ob%2BT5wuTvOa%2B12XiyPGp%2FX7Zxe%2BMv1A4jwynuwjKRknP%2B0gbIKDy7zPiDsilTTE8JDkiRcas4MMrPw6VSZxYQhyaNR35ddoktX145oGkE1OgEy2tEqqfP3dSBKalETGjYBEgMfCJvKLKnTTyXT8gEpE5X1qzV87n8IS17rP7wXvua5QJ3LiXGnW4XvnDrZszQgc%2FI%2Boxn9zI9XpYhgjCrSJaAC8IwCmEdw3HRHGr66PpzCg%2F4zmSswUeUuubmroRK4JEztxP8v6ihJj4%2Fa7za9k14lMzdtENvhOCDoPIq9Gkf9zuCoGOHKPPU7SdO%2FgLdA5DGUnKmXklH2C3VffWspIN7gRK%2Bl3C9tziW2OAFhwwjsewwQY6pgGgzkNio6Kkcggv3V3Ezf7aRS1AF1FvYyWp0c5uD7nutBMCHPNwcokaNBIBwslO2MM4m%2BbFrW2xDC8mRmGQ7wFwyid0GPyIvD2Ty8DzCiwiQAvLAr3DeMxt4%2BKEqzy%2BJmfjoC5FVxP83g71bnJCL3kDouwU0qzAF%2FLtERUbeV1M%2F%2FdZUpBvsFh1SRS5cN4NEquqdQbcFue5mUF3Qpm8%2FdZ3UFkmuFd1&X-Amz-Signature=1586feb6ce0655a7f8d9540a9c82dd117b7476ed330f922453643ba728aeb98a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
