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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPW6M24Q%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP9lc5RhySSCLJ9RTlCVxFxUeZWMnhUFUp4dM75C8tYwIhAMcm8r08SBvWMd0ZEo88rHxK0t6jV60I0J90WIJD8ew8KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL1Cpm1FBBnKWMLx0q3APIKS9ENlY%2FXa42sotHtqPt2Pjp256RBQG4%2BxsAvuFKUEJsprKEiVs8V7OjSk61E88SPjzJzIYWpjmaKYgX3D%2B31cS%2BfpS4mcl5fUp2YhEEMv6yYDwHfFWcSpkkW9W%2FPLZ%2F%2B2suDkfXoc7nzkbsFt49UIXmwkUGACzzueEIj2ujSJ1D6gMiGvtv8JBA1JeEnP5zHYIUgNyhTAVpZfkZqNRsHZfUODwVAFKsAg7t7NK%2BhN4j4FABx5nkWlovrOWy2M%2FIuNcEFTqqE9F8i8UDdDkoUImr8r1nahXmzJPUGc%2BW98aHTK8FpPDhUoMDW6cUixgqnRYSsVj78FQlaiL7a8G1%2BGEhuY72w8G9uNFoyObLvZHFu4xhNOIvwPvQHsRVWFKhr89iIEJ0EKr3pl60rG1%2BCnLLv4VJckfdkJoAAL6dqCkCwwWJ0V%2BkgOnzughK0XuWMl3BHvi1l1L6QuewPfKQx4vrApMWns8sp5%2BzlqifjSJkFzuqeoKKGdkf%2FxO0LBAF0%2F0CNaembsvCzLy0oVdKjzIIqudPnVAWHsjDyW97J8Y4y0Iqiwhhq%2B5vXMV7AvImW72WEKGMm66E%2BrxKrG0l0AEQ2QcDghJ%2BQ6SUBb6zh9kSqNuv0YrIp7%2FyiTDWn%2Bm9BjqkAblJ6PHe7DOfnEjMiviyOrWV3%2BCsekw59YD1M2ldwd8swwUMSft2LGGP%2FwHKrnV%2Bk4Ff7Y64hFBjcOKOU%2FiUnU1Odo5IINCsdYvQhQmkhOywgjka86bgwbrPHZJcfiW2mTu%2BXUYh6AlNk9soruoetel%2Fa0x80GcZUE4zj6AX2THJScJKlTPrO3c0sMnj5FIYl6JW9JnnFmh7q2XTr8PZ4ZH0pI%2FB&X-Amz-Signature=2ef1159684ad416a2ee9a861da3cd2de255657340316a45895e665880e5fb3b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2V26MSZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKTF5yhMcNilgTvrhiWFxORoHOOZywGjXifiBS5ol7iAiEAwZQ4wVWXyP%2FhzZuhEvHnBJ7wEW3YDtAgxFC6EKt80msqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYNdW1uuZVQQshX1yrcA510uXaVeNkb11G9SDWfGdq3z%2FUwE5%2B5WUHCzo7R5kYoeJINNJqEPz4GaoqoipUxIngyINrNEVNM2k7j6vMLGDu4u3apdU65cZ5B6qYy%2BAXRBL9woVq4%2BIiZn%2FCP7YxRb4XmLDb29%2BKx9nVbKBkOAtz0l%2Bedo%2F%2FAvv0gQ4QETXIHDtKtEMHDulX0lJfE0rDqopVxuTqABmUseyE9RfM%2FPlous1JOvCZubyMEMbN3eo7a6GcMvXlc8%2BYCz3fe2C8ykNwBOYkzEFyTi%2BP3C4ipp7MPRO2lBdMJGcCBynuwjHFOiP5kcLbeyGDcMvxfveoCn%2BUjzqs1afcTJOvrsqWeDHIhtUEtD2PSKgTezT2IO8tVjK1fmZQ6E85PX6pW%2Bc%2BPqTXR69eAbeHc7Eb57SoREq1LWRHGo3n4bV%2FK5xOJIDR41VOTlwHd94pDA2E84kuXj51lturDYmINjY0dUPO3a97vcTauBpIl85qkkh4x2WGyBmIBWyr5GIaRsOA15PtRvG40tXcp5ogFIWGSFNokrOPfQJbDKrakO0d7v2TSdHtHZZRkUn1wVG%2BLox4Opg3HjejAgswNF2b0wJhq1q%2F7kHPQ6EcuPyAgr5u7YJORNGl8sf30uoIxB8mYwD1ZMOqw6r0GOqUByqTTFxJPPTu7aOLqkL%2FV9rEST5joWcVNCJN%2BNPJR8va%2BFJdFptBOMbPwXGQNEHNGRNJ7T36wGn0%2B3bFFVGs1%2BR7axQ5FZOMlwji2lJ2z%2BcMmWtzV%2FLIP3F3Y4I0Q5AH%2BJk35FSiASILICCU%2FXcU5nkGC26yKn3Nd97dEEW%2FSsTGo9QDbyHs6G1qVzwJRIBCkzVr2XTybclAqd2pc8Eky5dwrosda&X-Amz-Signature=21bcba84438c1afc8847a8794409125557bd9b05be5f142018a5f27c9dbc3fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
