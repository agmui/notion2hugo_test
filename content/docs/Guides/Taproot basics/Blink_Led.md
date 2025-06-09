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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM3SNHAA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDao7VVQM83kD2n%2BvibiB9zbof8BA3GnSvfF6v0BHLt6AiBkDBgDNviWViH5YMdBu7dmj%2F2HWMwSQKq68PZ7R5D%2BWiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7QVk3zHHK6XS4XoMKtwDY6qI%2BC%2Bym0it%2Fu8HBCfNuman%2Fs5zG%2FHnpahUtEaiFRyvjI%2BJiX6mmPPv%2BH2G4OPVlT%2FdrW9vtrG7i8LLWsQZXgJqfeVK7ABSkdURkeJCZtJoWEouA5iq9X6hrdi0KjPvpSTUas4p5artpbYOvNmXzvrqU5G4auLlCBp%2BAelgYL9De0Vozu1E8n9RQWJ%2BkWwTtPp2qIz7htPxQN3koykNAnhMRNNQ2B9zoZiuodxhiOV7rnjudpLxDsG2JMxDQAUbnR%2BQkjw2ycgc91zWL80mZvnqxamuX60RiAFhv9GtM671g8gaBuu0qEUlqmg%2BaXwVp9y26CYa14Av1Vz2kF18JQ5iL9GmBKYmJHeuWjX%2FbrMlZX%2FoXitofx02Nudi7wnZn0ryi0TipL6qB0gAO%2FPjMlVBJOfOS8pDDTqc7c0VP6bzWc2VmZTNXIiYTmYsYh%2BAecKGUxgU1yWiwjzIdO5yweINIkbCKqjuMlFIiS98eL4OGkFYfmA0ilSit8epEIPP9by1s%2FfvG5EZY%2Fg8dJfAPnqM%2FvhZiZQiGoCmfbt9GsfjvSgZuRnWFFh9wTWQVokJmhpQBuZQC43wHg0e5BbUEKC2zuNJDBeQronoM4I1ipV9c3vq9IIlSkOAK4ww3ficwgY6pgFSO7K4q0YzvManAaANTP9SmOAmkqkTs%2BuzMe1S5uoSRT6FOrqkGkAJfw9UwNyOp1fIAHOZCz9UKdzG6a%2Fw0%2FvUSopviSm1EdZeI2z%2FSTKZK%2BGHzbG72q1EG9cl40PcXN17yeE4OQ1HwI0srB4khiF67AUXxokhbyM%2BfKinHXBj4wxlKFFYOz8Koyf3pSbC%2B7m0MvJ5mEYu%2Bmgw2GqgJi5w7Z63E%2FoX&X-Amz-Signature=44021965029c7d7490f39333fe852697dab109b49d05d101814500298ed1f71f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRP5F7KE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnY3uUuPneSYWkYj0vIOg3Igw3OMXNsD%2FgN7lVQDv2DAiAhhI0QxjL2SoRfJvRCkhHpBthYLK0jL39HaOoLCicfmCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFiXX8G1C2hvS7lJ%2FKtwDInERmCN2%2F1oczSrSqWY0R4JJI8M0Wmb9iSDwRlwVarvajGRuOdMM7CsmPUPU33FqcmK4vFSmDIu7RovGuEWWLOGR%2B7oPN3AEWjL5NO%2BZNyzj9XhZnZsdNJYtKML5%2FHhrlTCcvAdXH6VGmKamoToHR6Np66park3pYPJAqWjL8a62YplJIyVoPzRSuuqsfREBPyklHXmajOftkFure3jMWhJ%2FNcZdw0ItLk6lpP3XnW8uMKLbH4pVk5vhaH23zKnkODlSNTOpBVYVMvHKiEbwLl0VFpBPDGOqySSFdOCTzSjWKwR72Lp1oa98pe4rHTOuaW%2BRpcgAkmaselzoaNVbTDz%2FafAvfEWjM5%2F6nSovCZAfbmovZQr2CZE%2FnplFwoZdiUu2lnDofky6hMBrJ6wmxWCDkd9pdf5GgF9kU9xEbJmQbrO7wXosJU6ZGXVXdnZyIodk8JY%2FhoZXkoOHVUGWjYF2kOL1Q8ElknvXvx4RNvEadwyB896rijGLdcISi1fGnNTwXquaIp66Pj1XqhesR2dI2WAf7LZ%2F1%2Fg9JrMKegj6tXzLPliDlzU12CI67%2FB6r4ambHTvVz7a5hUFd7GLdxEXY4P8%2Bk0LxaKOPW5LgsmiW3V7xl97CDYgPTQwmfmcwgY6pgGFE0fLR42vdtcDAIAICJIx7QpEzs8sJDaakClCInZArYfdyEngRwucbHfqOKDxhWJHC2hAbU6%2FNRRr9xZ%2FjKdaeFyraVmYIwjz6jOHdwbcNJklaZGtXyDsQ3UCMIjLHCB0ELJlKxZ%2Be6O9kylZXl7BTx7eKlmMHvL8wJMnzFMxyKn21ut85IFLoChiivczqVNXJfThsYnFbbCg663f9SWXHyC9mdZl&X-Amz-Signature=b218e44a7ae6baf000e12e0ff4c3c775b18bc04b678bb849c5c92db6341f447a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
