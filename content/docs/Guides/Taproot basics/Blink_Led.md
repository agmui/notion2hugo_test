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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666JRMFGV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCLPJmLNWJesoFJXypzv%2FKJmBpiMzeIO%2BOsuKrwG49GJwIhAJjIF4giMFBSjRdTGoSWT%2Bvcfd%2B9McR8AofMDdy9AOj7KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygqxrkY5KzEHd%2Bvdwq3AMWdY4mdvCLuHtxT65unhW%2F%2FdVyXjmFxOmnNMr%2Bgm%2BUdW893zoySa75qdQdjvOREJ%2B10n9EH14Fp%2FXn0zCxJ4P7xu%2F4jYPA9vZP2t5pSceI0pYfF3SaVeXdmSe0i7QWwBiG51O9peUL2mjqHr75KMrEDCNZqMcSY89d4d7BCLvbNOwq%2FPKi3HfZoCgk8KIWF7R0zDNBFpVxNderciPR0huobSAFJMalFYe%2BH5531fEvN3Dx0HNshIol7ndYpTo1%2Fu%2BvW5tGamEEJUFUjAOY6JmRzvV%2BDudbTw2%2FYfHOHNdM0i1o%2Fg2Rvl98MIwH7fQu50xXA5v8K%2FC5L0CWswvRoeNLMW%2F9fsmi2RetJJjHoL0sRbSpCjvRS1PAR%2F0t3A%2BYMO4vVooj5JU2%2F5PcdjiHthEip5ybTtmKtHEp93KQTT34jSIpxdmhBUpzj6jEXumw0G%2F5XeLaVRmDiGY23ay%2BKWZ%2BsOXsqG7weq6io4T%2F7hC%2BABECAq167mJHQlKfmV3xjfrg0VVE%2F5SF61ghJleGFNpEx5uzSobU3JHqihttBv%2FUmm7ENc0dPAWwJAXk5kA8HiXGLys6V4y0i05X0z9TBT%2FFFRV7m2PKSsJfJLgf3hoOMHwRBA5jhGVLYzO%2FpDDq8eS%2FBjqkATuUAtCkGjlFVfbW2sovo3qQbhvmY1cvp3SmmNZLWsmaeCUYpkXqKk4cDZbDKJKP1rDSTwvvgfdNroGOpEgD8wzsD8uF%2B7kh1KKBy3YIazXouFku7B7WKofYzj%2FgfGDbR%2BupAHKHtamph7kb%2BK%2FIQL3SWIu8vyY0OjKcSnD3FFOY2YLoqevt5Wr5oQjyI947IZvmBinE%2FIUABvEJqqJ%2Be2FvC8l5&X-Amz-Signature=e92075ae6be196dd27c86c3a7d68705e2845333b4f301f85eaefa217c64f4ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJS5RKS%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCrj%2BcJuS6V%2FB2QhcnvkIhGhNrsWyqINI2SRAw1qV6hVAIhAJOXCIlBEkr6eAu9%2Bb26795HaNGum6AQNSySIGPS8%2B%2BPKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQeSZ8ER2cr%2FOts0kq3AOzuCaqh7bse%2BcQUeBQv5woR2klr9pHqAHoaTxQm5URBFs6ms0BXIDYRa1aqdzOIEE6ZjVeee9DYvyHxVxJHmeGnjhlv%2FxpkU%2Fpam%2BvP%2BloM%2BTXl16gEirJAWJ3Ymo4tfv%2BBkgoksVs68ATixA%2B50s%2BZ3i5n414eLm7uQd7EwqEp2bBxLyixF6AbuluUMhZlYflN5s8fFuVa%2FR8GbjtfPijV3ugj209jTdjddR7QDP%2B8drzCvQ3JgBFutJNmBR73nFgrkY1fZZ34tmH4dOMFkbBHgv5Qmiq%2FmK98AUEakZks0CwCNEfXVWUx3QKrQfmJhUQ3GfxbuS%2Bkg0DPbmHW0g%2FeNG9KfDm8zSJ3GB9xcJVGoT6bj8zuWAMnIPoGuUlqXngi%2FXqH3BOFXKWlv%2FVg82TPbCr6dTNXw%2FXYm1t9Sh9klUPyIaervnoa3FWSgZZRVfWLAeM5xenRWkCvuDkMSqrnB3CrKUV3JtlCOrtGIMwbxSesj1DEgAwvAF7MFweyk6U%2FlTBx%2BPMybLUKze3SNlINwpiRX2SUe3VgJm9QNg7SyDNalzLoGR1veSvdoWlLXkH7ULoLyL599HEKn93lBrSs8tzSR33aN6pgJoenJqUYSWvHMwfxkDQsFwzgjD78eS%2FBjqkAZEeAKCnCxqevuiFORDP9ERASCO4J0%2F4iwqZBtoHXBSr5TjxwBWKSwVzxE5A%2FvCiHg1FJm7yQQ8HN%2Fejz9woFhRVibnxdCl%2B2AeA6SVDczDPqMlNNw29BMiJVksdGyJIeRrj7rD%2BwOTF60wjRzOvgcFXW0nkaUExX5HkCZs2NBojHaJiQFho3aeo0EtL9gPRLrJ3UoZl2ranIFMoNrPqkgKGNXh%2B&X-Amz-Signature=a9d0ef4122ce1e1324da5e3a3cb0b76e075ace953c19fd718358695a527effcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
