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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7V4ETA3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2ByIZr1U8LcDbFJ278ProrRPOOUM5XoH27e1CCGqDQYQIgJooQSKyBdHoe5JrBXakTkirQjKe3f9FjmLe9sXNLgG4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3cWeSozSQ88iNfNircA4f75PtvTrJ9jVPjfguC1SVFATJsoHQc%2BbKA028%2FyP%2Fgn7nqzJ%2FNgE%2FK%2B4Zg9%2BTRlJsr287xVjtHrRc8uDT5%2Fm8HiOtkYnqgPHCtJOusgtAtbULwZeDn%2FBk57RT9ILleKJ7U2enQk3ELn3mnv6RCp52BOrB%2BdrD5gkx%2BUgWEbiA7fvCo6Vhn98BUWBMmBt1NqnVyxhMv3Ea1R1c2%2FhDDJYQMuQvoQUjo419eLxgjJgtSJdSG9VeXOPkcJnwoQT4A4pVoVgfLDKqEKSTrgRFLk3kQdB80EW%2FxylISW%2F4UOe6eohznuxIWW25MDBzEejGkHOntLFclGe4WSlnBnJncSwPWGPty4QeRMjqHXbzRyZQ70Ru%2FCIykGtYckIr41%2BxIciFfoTEZMgnBgrOHbHiHPlWGFA%2B%2BdXl2bmSnnVqfNDJRfJuHf7aKHARmlcy4Qojo%2F%2BG4t4yqe8ZKTCmNA0qHH31TevD94A4rkDkdPNEd7E3fQMvGKBTY65v1ueMwmoQUk7vm7I8GI8KGz6qFt1%2FWmJ%2B7nhfWjihKYvJR9k8D7LW0gBWyiEHQA7i66A9QvdjBvqp3PwUZ3pJhx%2F1txDWT%2BwI84TUmcY9qFgvdIaDyVEA1WOxEoxHFlEoDko%2FwMM3Xj74GOqUB%2FYld7EMZt9CKNXlMGC%2BYzqlIwirQ%2FNgc6G9plkYtUqMJEo5sdhgBj%2FqHjJMgNL0SO4c8LdFT5m00KzJmOlM71lL0qR6kwucXcGyqaNCFQH%2FGZKf82J2QpFlzaFFnUUTJZIWdz1CGgJwSnCxKlz8%2FxAgiVfpIvQ%2FYlgGX%2BFXVVVvuSXGkI4ambp0Pbx4BbtXM%2FWQhhH2g%2BiC86EOOL2Ype5MPebTi&X-Amz-Signature=0d291adb9a6d1fd8e54cdc7433336dd77e7b15a51afb30e400d24896352b6930&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFRUSEW2%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDJNQJqqD50dVrpRcxplb0NJvEoE4N1m3Ydw5E8yKpneAIhAMMBdmtPb%2FsH5L%2FEtDbt%2Bc7JE%2BFZZD0kft9mYnaQPevCKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8ONlI9NhYmtuPwPEq3AMEo85%2FPD0qa%2FGeyRNLPUqJ5sWuqc%2B4I9fF7nDxLaOsdKIkFoX0TIqVUNyitfKHFJ63%2B0k5W450WjezxCDM1MY0hq%2FX1ZqpEw4LfN3ZGVQ7tG8QB%2Fi7UYrRUOAs83Zt2SDL6dmwcUBO2M8rG7IiK8cn8LO0YQoKW17xpeIfN%2BjGvFa5bp2%2F%2FFA0JOHilC6JC8vxobU%2F3YuBc2opO5XrgMYK1pnoL%2B%2F0vcRWxGZdN6ybVJB5G2LgwE%2BxBTfIILKwKch7fUI8AZpUcTmO1KlcDhDEqaDXGxs8TegzoEahZfHHqITlGTrTTqb17KaoTV9AZbb149KwQl2TWgBtbqd9SfewS1uYeVDUZBTNl%2BwedgkVYsa%2BgGQWXIKXK0Ju1Sg7%2BcKGszHw%2B7tJZ5s9ic1cj5aicHWC1IQwmKqMh1n5nXI5tLvmP9e%2BWUgAN1vs0M7Ory%2Fs24s77YenUePwAt%2FeqaVUuIo2SjML5vm9ReHyXdQZF3Edym9TnMyUWaNt%2Fr%2F%2BwMt0TwFek7dqTHhYet%2BdwoiEA3D5rlEofxQovfPBpvmWMMfssVG3J%2B2Q052IIssnW%2Fk%2BrMrpiK4mM%2BlWwKHJexPjuQ3HnG0t5%2BFXaOqR8OrScH3AfkpjdP77BQn9NTDt14%2B%2BBjqkAZtw185UCFBeMOjUnsbn8SFYvdmccSg6cfZWsV89rfGp5OkaH9YWQcdzoI0rKKbamVwrTV4YDWHjSJT%2FVRXqS7cLeIDCAazf0VKsVY6t5s472aE0UR6hutHz1EGeISm3BAV6dzVWVkUJ02FLb0xjS5xAsUABtMVIyaE2uP9tiPs6Uhdog6BxgXG5OHuVbiCFDU4O3J9A%2FKw3dBGWo2gtizc1H9KV&X-Amz-Signature=0d8ea56cf2a07257b605ea6e3633a9f64e87dd1f569b56323a2f027240cfbd2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
