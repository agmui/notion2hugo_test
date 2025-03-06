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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M554J5P%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxZw%2FhQ6y333Mw5Ky4qUERVSwh0mlmnNYjUe8IKR0vMwIgRvExhwi84fMcm41a1khAvPlMG1Tt8dHl%2F9pUhDx7he0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNU1RFbl2YKIQqxk2SrcAxulZuB1Sqj0jpVjIM4JddMusHQ9WCkaNOwckjiLvzLbLpapfmu24PHzN1wrhbZCCkcZbZmSHEvPLt7c%2Ft3YC3TF5iEGX2jHf4QQsCFI%2BmkhaTHmsCMbDzZygs6M%2FQ0DNd65%2F0q4wj2Ku2Kz67impixhZXbGPGQUuKYQmVL0rjmfy9jSNR2wS1elwZ3qp2Nwsc4dtxSOqY3zuVXh7Jfh6yeNnqV0vK0gcR7cy6GCFt%2FAApXsATlnFPM%2F4zPuMqIoYMmp2AREW1SGPdMJ6dIV3y4YeP8GtTiA85qFj7yK5kFNuWSxe0Y2eIMkYIqr33tlbGYkXph7X5orTF9DNpddpa4rmd%2B8D%2FW%2FxHLvpLj%2FJ9uHPuif%2FiXjC6RsCe8Mm56REAnYr29mD%2FUigA%2FZcd5RnjeDxAZZCu0QHZAuaVSZoqxGiz2CHX6XOq5K%2B%2Boe6gA%2FDvmXMO4LO3e8gLbzAMlWyKwxXbXbZ1lQaXVeFbDVQrpBB2kvr9V%2BmTt%2BGQUpI1AyAIuSZKNutQLloLxsX%2BAGX76gbi5X6jYlD0Wbu9N8TAfFtxLs0gKR6U51qBrVM9GJ57v4L%2FoO9ov0KxELBcLeY54C52pYsuoMeqCB%2F%2BdIVkKWEmfC1Zy3U0MvHzNFMMbNp74GOqUBpYQXqTf2PXx7368iZS%2BnlpDU6slPQWMmBp%2FHMNZ9vkMsBXgGb3mNY1ngGKyHg%2BvlDq7DYov9uFX09hk46pdTbkZfteVgoKv8f4hqxurxhZOa6819wUpcvi87jOAXCoFe1v1KgLawJSZPz3OQ6dr3boI71IJy%2BWWpL8YO7ImadbV6Fs3CWdkWEQmrdzpp1EPRkRSiIFVqr2yXVr9RtZpCCOw%2B%2B%2Fxq&X-Amz-Signature=01be33c15e3d9c2fc21755d531719b1646b306e56e44b3703253169881b4cd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPR3ZU3M%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNYYL79uaphgZNNQ3%2FgIF3B0SdnvwzOjG176t7Wv9mxAiEAgcYA%2Bxom1ZOQd5fi8nGwIK7TBP8U6l%2FUWDIUn05fSvIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFfTOfRJw1tCtypC0SrcA7k8uWvh5jmNjKDdwa4H7bfb%2FFsn7MLp9fzwCOYpGaSyIGanB1q03yn6dkSuUIPHf9J5jdFpCHKIyaJqkwmkqOK7HqvaRo4PFwRR0l8%2BLJl9rV2sQ7K%2F%2BAHlbmHuFW4CE2i1hIQFFDiLFIZ%2BK7PY%2BO0AIJBxpaSAK2DLIqLBcmpxozAaEKZXpTVKgUDF0CcyalmnZXKQ5ouXkfgFBfbvkr9kflqkEmUn%2FOEq4UKj2nJZmNlvwSfHoKIQkOHDlal1%2FINyopbiN6QplmKNwIKM%2BHTpSMGgvrQoJ6rwrjBjlNFClmWSi0YrozONGcssmtl8SNgPilJY815li74RWqUMrbxM0f6mAmRaGxzbb54X6nBHr1t3yVotatR8bFDPyoigxAvVtO7e%2Fql9qApYSfP010wAxQlQ2Q4T0Pkn9OdijrrFiJEBP3%2FGfTbbTypqjxgJoMvnhvXQomhoCkZ%2FTkeoJ%2Bho8RGSdAg5vAoyR%2FyW3yQ6QhdxavGwkRgNJxzg%2B3DeDudxFg9X2ZYEfHfKoKA0Ik14fsGt%2FHPnxaqT9l0EomJbF55SkcFd4dAMDaZFDfquzVqPfJOvYls1YvaNT9NIkrFF7onP%2FQ2QSIRCKJcel%2Bc%2F%2BpC2un%2FdnLDEtUU6MIDOp74GOqUB8U6QHMKxQTBOx31LR%2BBMvGIhAn0A%2BS3E%2BXGgkGyqqu3xPhuMnVXQN3jTueg40YApZfAakrv8inNOE4UDlZt2EjDWXMtYiSeITWnSySPQhzhktWYs8Gq5cNekW0WO2yAKXmtj4tsQPLEY%2FIDMcC817AgNHBdS6Rr21IiKvZYxMO4UE7vVQUzGicXsLpIM1K6Cbbu4CvPbxwlYvO5REqprobSlGtq0&X-Amz-Signature=21f98cf9b27a3af2cf3c286b24193d3c6b52ac04ff8109f5dbe08ae062d62077&X-Amz-SignedHeaders=host&x-id=GetObject)

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
