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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAUJPL6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCrhvtEg%2BhdnkByTLF4u9t40rK2gBPBu7zFo%2B0OCrOZ5QIgeHsUgJ%2FiQC8Vd8GLAsnrFBd1GKBwhTXWespDctzupy4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDC7nCh8tRQhsoqNayCrcAwd6pA1Xz%2B9gaaUVmMVXJ81Yxtkk3%2FBdGKMuCaesVd2HYgk%2FNd9JZ7hwFvbPVioMtcnVirI%2Fkc2OK6ZpipvO73bmfbb1AFVAkGXiZ9apHNrQtCtjVk3O8kTOxGdXTIKcck3AgggGjgRFDNFsiWM5zXuZnLhrSuhKt4ffMujG2yXEUBIUOkAKaY%2FRmik%2BSnO4AIpSzzMvASKZpv6tRYMZBnWzsgaY%2BpWRUzEb7z3XuJJLYx3jLkRbqb96tNykxty8wZl7t1RrcvYu5cJQ%2F3ObCgb%2FBt2UDRT%2BRmr%2BRKag%2FdXme8lWLmTGLLyh1WQXeaao6EzFnhQp%2FvonhRki8S7oUC2XjCRcdbr1QrihfXJA9rFHM1LjYS6lyT0aY19l3JEJ7BXXSYHVi4jRLznLH80GOB1NP%2Fv6tfj8HjYo1%2By%2FNgWZPyjtsShsxDcQT%2FRmyg54qe5B5l9V6B2sFjOuS56d%2FNIvI2C9ieQVKJJvSjVJrggz2jAQEkTJhlfOLdDRm838zwdawvZzWzeaajDrBYOty7aiaFkvtrUrerwnioCukeP7IdJCLo0jmWNmIVMuQjlKHE%2FQQAPzaCYXWSaFEzsb3ITQakP7w6Cj6iOMFdGNhsIPS1LM2XdGnVsdj0LCMN2V5b4GOqUB%2FjxVdwG4DQF14nWYFXYoMdgAfBnak5lM6zZQfx8Z6wG1WTTtuaBKyHebPZuWhoDmyjJ1nVUCvkgfHIbhR0GzG6LNKmRuXD%2B0OxDHqdvQshkyil%2BBk9jo4y8HlP1JT73LeGKCboHKnmdx1aVudm%2FrOkvqmCR9EMM7hT27bhiZnAK3ZObmj2vrNvEoEiP%2F%2FYKND9NEDkaj6D7TmC6X0ROMl5sI%2B1j5&X-Amz-Signature=67652c42dd996822948c46b53aaa145bd06508f32cbe0224a5fc9f0a9a9eedb5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVMJWFX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAK01wk6HhtiAk62wGQvOqDakqhniNqHWoJLcx17iA2EAiEA04GQ7JicmLIUEsfjeEjfoTogfuR8Pdkt%2FMtObVy%2FtfAq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDKsgd3gT3M%2FwBrlRZyrcAz6w1oflotbWQzSCKMtvHC3H80P%2FcNUYIjAOgJUpcbFSyRtZ2FSZE0wZB8noZfHTvL8bBs7gXy2YV%2F7dU1HWiZT%2FtjHARsuNqS3zF7QSWqro4YSJtS9n9%2FG%2BAJHM7XazHrAXeqZ%2B%2FEam3psWCVO5TN7u3r%2B2nDFEAcx3FxYvCd2PuxRdvMTU7wwYbRjtoOuGknNXFGkQuX5HpX%2F6CPADiGNDfsQFmXJwE%2Ff%2F%2FdalRzRIFwSAdToV9Xp7Qxa10JZw%2BN83lsUCoceAh1F1wO5LY7nYmg9RN7luQRkT0kw6P2jeXJnPY%2BWyPn1Yt%2BrH8P5HBYhZLNcA7pcJEJZYTj9CGFBBPkodBmdrdzb0QkKRSzigdfAipgVm%2FiVe1Qvf464sfYtRtCgzb5YjwqBNKOo8tyjqxyT05tb3Tqjgl83qeHyv5RywEswBQU0pu5%2F5QC8gcnGj%2FmdOhTSX2ACgFSd5BrNruwz5ZL%2B%2BNACFtzByZFIi30d2d3abyPAHlOMsQN62wO30qUT8Pvj6%2BIM6Q3qvxaKc3bpWcAO8BkMCMkubyEuuTcsO%2FifkLXbYrhlPhVdAMFD%2B2OxAKpkKNgdE4mIxOKGPpqwCWmJXTkwSYc6gOx%2FnCSdrQ0UhJM0qy4w%2BMPqV5b4GOqUB9ueEgzy3eRaRFLv2ljRv%2BjmP7AC0ZvWYvmjrny7YMCh8qM6ErL3b8DpGAg1iFOXrjQoViKzpmQ6VGG13YPR2PP8fs86nx0Im6okp6yLvrzbQZrlmLVCeRoPFW2jHWSw7WfSeBt6qyJ5fIvx7rkeRoKpYTdxGdZSPNEiDwnvuhhOfk26HVnWV7xSYjBA8BhVS8N%2Bx4KEwa52T3pH%2BOdp3c35AqlhK&X-Amz-Signature=7b4be3af9684b14e23b0207acce46fcff1cd00b5e5d5a4c2cb7820cc11d5f72f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
