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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RBGUSRD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBRGY6qCNqXoztMb%2FkXAfI06qkdqgDI77pXPCMvC8%2BmJAiBLIvoQJx8V6M2ycP3wz3SbXWujyYsPx83%2FMxCJJqRDACqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFvfKuLUAztspgmPEKtwD7gT%2BCOZbttyDpPFNCyHINCgOW2q82ImBlukgE4JFFvZcVeF1MhpFDB%2F1rAua6qK5n278oXNKUl6zs3AEEdnHyfT2UMfbmfZp6nWflLUYzx%2B0bbsfKyRmK7EKf7WZobs8VYVWxhEGiggqaQvycknkLIEm1VYkXtl5TILSy6zE8r94z%2FzkAPSSUSGvmkdBQi6CbWTi%2FVLB8ca2z6%2FQzx6aRYM6AcisL4eszIqKw8XSkTNVvni3oesr7VNDenN%2FBWDgl4P0zq63TGY%2FkQVm8EYqukJbtaGnhBXix7DK0H0Y71wZCrXQmXEAh3f3hoMTuyDilBeaIK5lMKY3enpGLnRxrkumvEMjOAcBjVZiPG2blV31hfp6F4T9tdaeH3iOVVJ4HHqKVaXrJKNbECxE5Db73g0tSj5JzcBatcV0rpAiiQm%2B7gZTM%2F%2B4NjMwLNBK3n3sLU%2F48RfqsYSXjdzcGpDHHNYAYTbd6NPGCORTiIRgLhPwD6AEF6uvpGxKqCcVJoFoSICdiTBeugArL5uTa7yMAMNNftMKrWi6M3%2FiseUK%2BMez7zMYEqOMhvZeB3EJaStqjOLycSfwidTeGoEFQZZ5eAazqHMQzD2mOEd%2BZkvJ%2BvoofhnYCNaEZH9BWx8wqouzvwY6pgHih8gnX4OBzaKunMMWLXY9m%2B0%2Foi2W2Pa0oWO5Im0isvtV9UY%2FOm1RmLx3TPQ5ZdvXOG7JDoXNj98WLCZtcQt4hfnrIKuOkCn81nwFR0yMUCJ1uZ%2FQNu23xogmUND1K0PfB8viwl%2Bdp64uHDanzypG66ONv4alSNXF8Zsw6bgHUqXTmkGplsvoWkKAXD8Y2MP0fKYPo3bK0g8Wdsm9MkY90oXhYT3s&X-Amz-Signature=3d6370c46be21110f08a868e6de8ec3733fec89e9879da4e9727740469f4a787&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDVHYAOV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBIySnhF5N1X7MYAOkv0kh77vjeIMDxeObY5Twm5nEV7AiBT4AzGpSsaHqdhn81VJUW23pcxHVv0yWiIdanaJZYVbSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTd7ges7Vc%2BpyarwhKtwDGIAxyobxSxWvHtbbkBae%2Fs6N5Gaf%2BMYFYG0LwB51VA9BKjgn2nJ%2Fuz2Ep4AiniXvE2fbBlmX%2FtyYOm1bPGJjmrCrJID21cMsXkzcHwZYar37LCg2ioAkvODUYWy4mVAhHkfu500PcUmMiqv6ERF0l%2F209ZUoTbq%2BKsoz5x8hiy5hWwOJ7RtEpqYuVMUpE9xShQf5Z89iqkYkuKfoV9Pn9X0gb2pYS6yW7bJikjbGEDCe1IE9uQDA8ByslrcW5eY7OpR%2BfBSoNEd7qAHkYOcR%2FLigLVCSHnussYnLxhDVGPnPS7cbCf2MswuGptfoJwFAG9Z5KkdoAvtrN2EnDNog89ufL6q6rRt2%2FOJBeVMVUWICkWmH5l6oL5mcoo0ZO6Y%2FylCgjgcdimHJavOuwUgdg%2BuhTNgxlrxB%2BLRQI6MnszVjQH0Ue%2F8yCLIxVpiR%2BuyEFLUQwRRQRdwCWy9G%2BOBnIoYWnHqCrNnF0BUbm5LJDUVAcTPbDUJC%2BA7B8ElgRTPrteDXuv1ORZqKt3W7T%2FOoeRrPSkNCzemSybZlAwI27DvIj%2FtcDw2E1MHufttb8tkjT0XQw3%2F8chcqmw%2BquLecmNYJ%2FmfhLErMfZMIYKuzmhLDoOe1sSdWpWdXq1kw94qzvwY6pgFbDG9WEhp1FrQ1gLW2r7BVvBfNG6gcEFSqU6q17qaDxwvcFXkZwK4OvdHvi87uC91q9iApXI54QN5IDCSIrdSDx%2BHbMIhtyAuz8D%2FOec86r8ejB877XyHN2ji4RphYxqxKTK3ALYFYJQPjKo0qGKAoA%2FwcR2WBFNkt33vB0OoUp7lfTSBEYgRLPJdIwVRHdpAXGQXtrKSwp4RjuhkNVlQJXrv0C6TF&X-Amz-Signature=f762acd4ea50d889deb22140569407c2d9d18add048a6c4a140d23b7cad7feef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
