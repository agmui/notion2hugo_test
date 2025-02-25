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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHNR4PM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCSBpN7HYo7tdywkhi%2F8CU%2B8kVPVfrOM9grmtz6f4IFdAIgTajS3kfmr7Y%2FxA57MmEUzqsimOjaviyTQNe4L94HWaUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAA47IeooNgDBncQZircA%2F8%2B%2BRBuHuqx7sPeS8IxrRXoFOvw3jmmXds1q%2BOZ8o4r0MLnt904gaa1XgUYThk69MvWpO8SLPMLIwrlNYku7RIIZtbNwth2%2BAQUjcK1jRqG3YiV09jc86yx0s%2FMJ8vfthJVSvUDIhbS31pYuwR1qrwXc72F2eWDsJh%2B%2F65EmE1wU7VohUg1ipJFNbC4FXvyqqhIm8VkFc90cZCGRKKiEx3GuUxeOaQRtI47sCyxlI4aIWLxPU4QHLQSPkfBiKzx8DkQLFhG6zIQWK4ALpLEeYeMC7GBgQ%2BMExLWx5BRIsS7nQr2Mg6ECF%2Bx2v4cEjPM4Fq0M3nQLyFYRThaQqz7gpucgpxm5vY0VDOEjn%2Badd8cKsKlesW4nTkzFVqxfgSpdspOiR3i6fdko4Pb8ObGYIJRz0lmACEWZ%2Fdq%2Fzs32PCKzRisI7r51svtR0HZyz3Ng02C4ruDOFHl4GmwNo%2FCrHIO7rBur2915E0a2hYK3DItht0UcatnuHD7XDrs6Wq%2F%2BAgt3dlGL1JC0lYFVBvnzSaIQ%2FwE8ZwV5QiFiNVWm616%2BfmQKt3O1L%2F7wvzPKqxh4Cv67X5mPYhuVRcerl6eynndsBmFibLdWbunt7%2BLTfSyQex7F9oEKZegsNslMNOC9L0GOqUBeKdnvq%2Fg0FbQbz0JTTFPwavteUS2RiWereFveZsnKLUzei4xulyrZtk7DOwFD02XDgRMtYXqhclY47XvrcIjsJ%2Fv%2BkETIIVXXaW8lAtBSAsvAOp97tA%2FzNqCu3564YWVgR3BizyOYQ9XJJqONNz2J1%2B4s4gD2KSmK4ojEO3m8ql4%2BKpG83Sddih%2FvRzG9jYznRzEHBs0lWG7NN4xESevZqtt7ikn&X-Amz-Signature=77cbf7592eddb84116be6d9f6784276a4742bab917383c4b9bf3d7f55dfab0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFHMLLX4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGjxhBu%2F5%2FJOw2y4D0V3djcx7f%2BTeb9xRnOsGKnmWiY6AiBOod6lDC1tdDT1KkNd3vJD2%2BCyy3gzVV3%2B2CzucEpX6Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9aARcv1mGtVdqdhiKtwDneaqAuxZinWISg7oeIXRfKQaRjSsR2Gt1coRrVN02wqf4FqsKCxrYcKG3LUuuJjLWHC2X88sb%2Fx6bUyuP9ij4bGId7n2iaVXVHNp6PHUns6%2BvDjAxBLZU7ViEVa3hvBvFIS3HKS2NNQjcZMd%2Fc%2F0Tqs4DrqbHC6XNrB%2B988G60%2FmvQf0KwJlrPE4TpJkhmEckRARHMvGQNw9rfFO5DMIehdRfFwIcIixshF%2Br38mNYdd5DfNYYoWdLafrPa9o7d0PPdQGRTRVgLWK2AWM7i53CLvAIkG4c6V3kB5snrNWyqFLHiflGIZchRyFmugFgBhcE4QxllGtaTtiJ7c4QV4OpGKm0D%2FhyH%2FqOT60B7NuByrI98aRGVBE6i2zkBN8Ch0gduJ0pLqG%2BrYNfQ6mP%2Bhzc8GZciFxuVfBUt8CaDgkGj3z%2FEv78CZHQ1dl0NxWK%2BJx57PAJeVzXgAD%2BP8Em5DXWU2KixN3B%2FgcQJNxNPGP%2FQVm5%2FSmTjQYErGAnIX2fbxzYcUqhmfnRZ6%2F3Gw6ZRSnhjSu%2FNq0LM4L1G%2F2dRT7B0iEBpkponysIvedM0aLYrF4T1vgL5PiOWLy%2FxGuDFsd%2FWK8YR9UF6zD0qMXH5tBAUJtO3wN5BujutHlVAw3IL0vQY6pgHVMrKaiaCf5xOMr4DczOHm%2FqzXOiB9FHo03SpuL%2BOOUpIGMYCbp0INoLcot8tvO8E82hqZKSf9orXF39ENY3kK8hdiLZvHx%2BdvpXjt0uOucG1ktl%2FI7q2kNir9e9HBYwNB%2FQ3mdpRowxy07zTHRngLfRrPAmu0HyNWtyjhH7OSvh33dYY2wwNRh3Ri6ooc8XR0cdjXk%2BCML52%2FGdwknc%2FoGo16RwZ8&X-Amz-Signature=180d3f8df48d0eb5332392831d3dc03af71eb6d42158d684dfa7fb5f1b1bee3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
