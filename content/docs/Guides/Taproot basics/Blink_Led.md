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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3IPDJYK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICS4vn1Y%2BPlrJtDTLguOmi1E1VmblLIunazjDpZB6yKQAiAxQXxTgRtLv26FBsiI5nx8KeIxqQTZiI0Tmerr3nOAbyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMy3jVg8AGkhtXFqgqKtwDoRYYfP9V1NfxhwXd5lIhpWYIuNmtPQ0CZbROjsw3BP7xPhssI7vb4y5800EIOgGwTdGev%2F2GyDg32w33wa1gqHu0tSzNg3oHs9K0DrT9KDGMJ%2F9hykKpI99w8dM9ETjJWF3EdxL8uSA0uUyTpf%2FgyTnP87aYQaGGeu9sK1OWCNll9xaI%2F%2FOGiM5zJL2KEh6LH4KzObMhQhqJnG7KtgYnvJ4CRD94wJVLjLap2XG3DH5oSjAFl%2FGXABhMfgqI7z%2FvbI0yFUQ9so2yzWHrv5tyvr627h8aMLErABuTiJ5cP4gdpMzkbHaatHjKH1FoV%2FEFICqj3bQvvxhRH8jj3lKhke9xXMTo3unRf7CxuwIol%2Fl3a83fW0wCkECMqaA8svu57qkhHJ%2FqfJGY74a2l%2BGhyOWq5zARLY1o5eNu5jpPEi0BpWjq6TZk%2BeEayvN7lnDkM9FSY70uC0Hl1wgCgNY42SOlgwaq99s5X4uraLwXbQC7ekKsEr9Zx7BAg7M6%2B4NdbXT2IOBiltlYnZRNHr%2FzkATdqSduZAqAPBA7FZdre%2Bjd0O8ffwurJELWNZmZyHi3WRiIejMEQCrLxEhCVXSkd2QhMbhQyCIRRh59FBiTg%2F802F4aPxLv8Bmb3psw8pmCxQY6pgGVd5wQUO%2B0AJMAFQl4E%2BlgJEZ0EKlAMI2A6LZrI4bKXN3b6jZmDcMlziX%2B8dNlH2re9tLl5bYr9%2B4TEgaaY3terXZf5cmIYNOaJ5b5rDGwxufdu9dQVgsTDu9oDwzJ%2BXbBVR13PckL4uTZixI9ThcuMwQse6yEqHpOVgePulyUa%2FCnmeHMHExFOFboNS56fKLjzF%2Bww9ugiobdflCsQbRrXPjM4s1f&X-Amz-Signature=424e8137708c92a7a9a178c63ce256ed2972e65fd3190f44f784a4f9b602dc24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JYXBIR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDGzJ%2FCVecHsGQ8xv5E4m7CyChIvvTbsV73mCP2snqQxwIgI7QLAX4G8x8hrZ9dC0cJ1RLu3jCW2MU3mS37f3d3RT4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAEV9M0tMTAqVJnZ9ircA26ZI01f4bVeZ1QUiCQTjgpO%2F%2FD3ZdOv%2B9M6kLU6bApj9onDwUpfLBdW4POgQ%2BYleRZ0H4rH75DOZmwWzLoebFRF%2F%2BECf03QVqtcqP2GvLY0oIWc9PLmyJf8b1WJu1%2FhbN2UHkoTfKB63FVdH3Mpy1TfTwqEfwWI8DcHa7HfyFZaM1eTfEJk811KjlEE%2BleM%2F3paq2s4U3nxAc30LzZFN8SRJmCXsr6pb48KnXcU6jzy87RYxPCG1QqStV8J6qngLK7rK0yhYcVyKEl8QJdEfB18G27%2BKyMX5Ba3tP8GyobfGh1e03IaWp8a0mK4n1yRAvZg%2Fm74dSBA%2FaNVQU4W%2ByL4mQfgSnYCpNgS897QSQ9eUevOXTxrg4zVe%2FhiRvyb06Pvc635S4r%2BjT2Zt8FssoJmyJlpILJfOmGvWPEVSIBswYEEPcYhW6cMCAf0DEX4fpWzPGcP8vqYHDAbag5n89EIjzNGk3R6FxeVuU12Z%2FJIPUyF9q6tjRZH5XQezq1o8aSS9Ysd8TCLtDqR9Lcenni%2F8wvwAVnG819td3eUvvuzm24HNRGOrwJjuWrJ47tmHsRQeNZ3y%2BfB1Yv%2FZkat8Sn10MTk5PwKFVnJ8IQfvQXejcZwD%2BHTo5BJIHi6MNKdgsUGOqUBi98lEwIVTEt%2FXNe5FrL5Onz3w1CL%2B1917iishJhmHFiO2yM3CLg5e8RQQurMcVZ1RSoMcZqcXtBFYuUNVX2GV3Z1x1Y%2BfM9TRQtrscWMdOjsJLAZ596GBphwAau3%2BQhXdBDhnPT43%2BMNsmxLfejxp13ZHNKPB7S%2FOa0M0HSY7apO9tYnp1szOfsQUWhb4P574qd3Be4isIunR4x10Tue7emvuf1E&X-Amz-Signature=4004ff0a0f48f08610aeea3cc7b84ca83be0b50e98202ca9d0b0c699705199b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
