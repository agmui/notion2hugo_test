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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7XUNCS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO30Dc31hHBVKyRJ5Je68gGVk%2BaXzp%2BPwHaDfXFriQSAiEApd%2F52KCs1EraMD%2F1WiXNNs4oSLrU0B7x4pOZnspm1GYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAr7LYhi9ZcnA9SEYircA4BpUimvulqrEATHpHpa28gLjRnbiqL94X1vjyn1e81j4KpVy0hptTFYgpOGJaxWoBkCn74BR8pTh%2FoaUXap%2FhUoV57OMILxyqiWDgHD4RzyNwZvdTP0Kj%2BgGGN8un1CgS17CcdYKWi9ByhM91Y%2BGlA3fYjOXmMZNEoksDnCxxOJQ7uwp47rp7f9eKOhWICTZjeL%2Fipt8VCv6%2BR%2FThr4QdV7eA83kIOtZGfgdE%2FouYjweOSMYzUJiYEh0gydYWW3mGutk4rsgI2d5OJ%2FunwzftLt9OkzfL1T%2ByOkPwMvDvtKoM%2BZyv2jCmIMx8FfEFx9dQjP315gQhQaMAe7n7WqENiq%2B%2F%2BWhY96mtHRAwwdxyEi7DmF%2Bv3fW1jVXWozOfYXTRh8haGXumJuZrhAXE654x7piRJhzStUsd4wyWeHosFapFoh6wVNdCqogqV88gMcwYH4BMNSY8Y3%2FWfutm8KNdFQ3%2F8DsMomxIs41cyT3GbInV6dKktN23ZJBXUkTigzCZI2536yOZM7SFiO6e2iUNUpDl1UMSk4%2BERwiH9ltDU7vfS%2FnEmIcQGpCI6%2Beo2ME3fqonQU4NFhSsSqNwCvPvKB9RRO3qyaU%2F3b63ENb4%2FUIqUn6CD7ddKrNDo4MMfF4b4GOqUBJuawlOCgAYg4aEGx68FTAj%2BEoFUMRmQAiqXL%2F%2FkRq3q9O%2FPnWxnrpxffbscWmZE4LAWO3kT0ZcYi19DnG8MTXIZYr5rlKTBKcX3infdss98zDzVMpprP9Odb26cw4o3aAaTcZxDykueU1wC6FlqYwutZkc8xz0ma6Cy5M9ADcJP1nDJxL5daT%2BTma4lC1xgbZ%2Fd4OMIZDEw3zIWXev1t0v9u27oC&X-Amz-Signature=74e68b1b2e0b14d37f0ee35ef38cce8d925d1ccf75865ece956ef90f4616960a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NKNCK4R%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID30VAPKRFJEh%2BlxVeKg%2FqWewAMuCyTuUC03qCDvfQIvAiBdV7Wu2eRVUgSlxN1M4M%2FC78jO8veXq97uoYPkIWdOBSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMgar6d76OQB6u4tIlKtwD6ylTOd%2BrVV%2BY8G9AM1eXYul4SklFbRr6K7K7ooSbj9bTA6j7WI5GN4GrYEQtlngPwyfcZstSqLg4GPHt7j%2F0Z%2Bkz9G0RXH88CxS4iQ1isp8XTqLXYl479Jz2sPfYwT7Kjo5T%2BOrSjKq8JhFDTdcIrRiseU8a%2FnJUnkyKfOxXJ1f5vd4%2FzEngUn5l51sCdH6G14aLPecaOLuW60h%2BoejzSKcunTAe%2BTMaaCW7E3TupBzYhjXsbOjI4Z5y%2B0ky3kP%2FCD%2BCPphrBlBkFnbf%2FxWsmyM6I9yYwvXpbH3T92LxtPI8UzvsK%2FlQVylvG6vAgC%2FT2jiLqYIf3FLve7iZrxoUoh8vzjqZfoHuXr8pBkagnOtblSpZkXOJqyBM4JpV%2BzhDwoRHWdOyJLGN9XrcZBWCV3%2BEkKE3hU5VckBIvO8Tsi1JyAPnvpJVThER%2BBrmfKqS7nEflXg14yNPb6TA3t9Zl7yLQZf9yNDdNjJTRIRPahHIjlZbDDEmvDQMri4oEKi5GYvrUcgfUkcqXdZMe2mmALFxVdmFzq9enuAx8byqcESqk%2B30BmHe6xuN8Thb5omfAl3UdejnremqASDC3Vm2IxgSzAYUfs7BZagjpZzz0YnUvpTs90luISIHBH4w08XhvgY6pgFfD78nZ8NnEsh0Eve0Le6fvmuACjgHEQkit13s%2B5WVbt2QtoOBLeoRVxzsyRCYZ5p%2F6uEayfpg9SvffDrXDqKa3QKhbzr6bSb%2FYgytwCtSklvwzwrcPgf%2FBuVPCuaolGSWjzAPOOrPGL%2FZh72k3LZbrJ9WhRA39qYkdOjy3oVapAGbmaqG56UV5ylCykllK54gB1v2zWmbNugXoeO0cx4tOM741I0A&X-Amz-Signature=2439e10da64043c66235ff0c86e2259acf3faca5fee1972c68255fdf57738ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
