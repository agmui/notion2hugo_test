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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3I5YON%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEluVfOgJGVro%2BdRaznfbqcBoVJQ2g%2FTZLt80uIfN0sbAiA3oyAjS%2F100wHhrhnrvOfSzQXzBCQWV%2BHBS8FxCEqM6Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMYyQYKgNGbI1lALGEKtwDSOvDnEJ%2F%2FQVCxhrfhGnTmggVR4tobCtzAyC9r0sVfllB%2FBv%2FhQFe5Oi9BaaHYMG3iNHsbhwb8toxS1s2OufSGjqnnlk3FZHwp9aYJ1seGJHd%2F%2F%2BK9OzdH756wVpbuIAWIy9a%2FG99bZOKJZ0%2BdPlmk%2BugYpUchGDlbDp1OSz8%2FBvBXEXB9ArLsAdUccftjGbpL4JIkqoxrl1qfsffVIgDysXIkVIBiDRinbV40FMe%2Ff%2F4P%2Fy7YnPeZMTelAHQFFNxtel2rRNmKXok%2FgxkMqkR0v0jCywYSBmeRtzqhZyDz1PuOfasPJQSJ12CaFTXJHV6cuRSGiz5854fMBkvA0upcZOG8IbnCIkx%2FXnyXcRxN3%2FUkN99Krh62vHHH%2F24BqCwE7iTZRNks4usvOrB9vWuF0sg%2F88LT1bQX8uuIqNy9guLKVPz8SorpPoY2Mu0thh%2FeqGT9ktetiyBlY6bN0NK7xRBy2ShY9kIpiCLLKLlyqEri3Bcl63ilIqHnT%2BRlj0HDj1RI7vdE1q63cnDlo%2Bac7kdR9C7eQOkFS8kDbL1uOvwR0jKf2YRZjz9WM0ba8PuhL8x4%2BiX6n78ucq5qHMDxQBexcK5GNr92OQGmaNOqYFIJCMmPel89OC15icwl%2Bq7vQY6pgEwSIrItv9qYJ5tq0XOJqndcZwCHgi3y3UfroR0w2zadRiGG356%2FY6MXiUMdLgvMIYdiif6Ssu5UH645pMK%2BZ9tAFuUKs5yI4NrvYANGgYArlq0k1BofGNlDXmtutt%2FvXLhIJ%2FWSgYNYhg5%2BwzM2sS%2BciN%2BYF0i4gQAkSxabkO5tHR4FIN9qQ1N3mJtwvAOEVZodXBMYVsBTFOu2xqgZxgQdK0LALYF&X-Amz-Signature=a47b8b579b395d71bb31e97ea93fb2dda424920afa81bb55e478b8de29c083cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HO3I32M%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCKBQ4yfsBtC%2FzthEdpdNmwcfC60ESoJ1jxJ6Fz1dXohgIgA4%2FojNNuaYz3lq9yozO72zo9GorspfuWMrdYOxP%2FBOMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDdvBvn4LXGx7FRYvSrcA3XKpjWCoJryc18S07ph%2BOKKkfMDG0idg%2BGs75yZvay%2FqQCthB%2FjYUjreex%2FnHQF8t%2BQaOMUJBbPcnjOhuTkkx6jFPPQMsU1e4Q16%2BigQQsdTUaOIHaYb%2F5Eckam0vHGnlFcE4q6tH%2FT38r2Nctllo1Jl2ZeK0VSpGoHvAVkqUCvvdYFIjlHf10zJ%2F9prZiQx6vKcp8fx6pque99HJVtlkJTwBJBhSR7Yl%2FhVLTXminZgKzHGDXwvA%2F88brZn43fvkS5EjPBjdfNjCXSThjbpGhRxdylbxYefYGidZsoRlSnbz1tfp1TSjur1a1cqTFZ8azATGHQAl1Exm4ukLIUHCzk6EYUPZEJx1Hoja%2F39Dhyo70OmAofGzBTt5zRtMvGj%2BVUiYFJFmez1t8vzyRiBLVEfhrQoyPRo2jG5An9Dv8nBhKiBX9npmcgPxXTCW05W7fnFwI4Dg9853eWtM4lMGSmd202VBXnvaRbDF5ZOwhf0IPp2Zl4BFqT%2Fwkv6F8xe0hJN4R7WXYkN6xAW7qnubjKp%2B7eq7g1h3bWzqut3YSqheJMBF1RNwHtaCf1Db%2BhjLY8xPy14FScb7abPIZ%2FkRUd0TK8Y615VCrBLiv2hYGTdFjpgbAOyLeSFOvnMJjqu70GOqUBGKCpeldCLbdtt3Js%2F%2BYIki7xKvcNjBBN9hR62INYQme07EkyF7t0o4TX7Pb7fs5mO78iQitT655PdDCeYy2QA3Za5P0ORJyrqRK57J0fGK9rTA%2FnhoO9AgafN947ewjL2dvuDuKTJ3NjTYu30D9gtx4mAghbjMkadvum5LRwkLg1oeQZE%2FS%2BqZOXJ1q1%2Brtxq0ijhsZ%2FXHKLvFJz8OhHzprEdMGh&X-Amz-Signature=5f3d652f1a8195708852c3e0a9b5df9396e083b4b7dbb22da510cbf634912d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
