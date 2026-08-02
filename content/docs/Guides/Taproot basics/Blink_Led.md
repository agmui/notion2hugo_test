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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357HBMAT%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGdA89Yj5bjPNJOML3ResSKxAEg1o%2BGB9%2F0UY4ixa9xOAiA0gRFjxpFhKoaRRXYV%2FdgJ5R45E1Tnl7SuYm6zHKs5hyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcQkCJ1oKxy4C7mVdKtwDnB3%2F6%2FH7JeXOy0Gsl68HPLerZWSv1j%2FDmUlKqwNLqOpr8CHkYtEcD71rhNhq6lwRQwXOmOarIuZFW%2BIKXDdawIxDPk9EP9GIZihgbKmV5ljoE%2F7mESOgPf%2BQITFBFPPUxskKkGB42TZd%2FjZTqFlA5XOgMKQwt10Vc6o1uCxSct2QtOfyJpe2UVE7cUuJmoax%2BjdI0kp1%2FN6DiO%2B%2FMiXEnqENQvmtBCGLQSUkIIhf97K0lPtishp8bVasD%2B4NmcxLb2SOwlhxMzkH21egEsMgiSWg1p4%2FjdfUFzdOsWnPngEHiD0NbsXdWoinhSfrdq5Rji%2F52jNk6uqGpsPuSUVbNav%2BfJ8d%2FSbR9hEfo1mavvM8psyMhaVr6TI8BvsUF2zkOk1PN5JXPDtpuNUjAMykJXV0ptnNwrvHXN5e2xhyU%2B0cn1vA1ZsQgsV6jX7HkW63PoESVqOrhdYcrw1az3Vw78zc9f%2B1duC86jiFP3ENLXs4GdJ03f6%2Bq05gAkqSEj4lxz3EyJNP5tfc%2BjtuOYkNh4mAiMDbw76QdAnXTbofHT8viDTtm%2FOgDWV6mKoryDrRvgd0JwIftk9lLA1BJTFLrRlnjiXwpry4an2CTf007mfBozZmre1u9CjLZ7gw28C60wY6pgGULfJtRCoSBYCmoX0UmKqYm1IgZcq3H9kdRWhiiBQwPRY49FA7Xzmi3TFnMKJnU15ZWFS1ubf8Na45rEvOxRYNq2GtadihpEJQ8yHvhEEeV%2B2aTq1mh5AIhXSXpqbgQ%2Bo9ijUn0QLnf7KW1kXU5p6RX4bXF3d5ZtVTDNSkUfylZDO3bIGa%2FQfj8S%2FThserqJH9p%2BXbvFC9j0%2Bw0xFG%2FE5GFsbG7yfx&X-Amz-Signature=66219a3a870f69d5736e661901067bc898cbdc674f6bc6000db7c65d2dfe4e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIHNXBQ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIEOJM3lXyiePn7cwtg%2FO62YDHeR2GGNjgVhQZuT3aJMJAiEAy47kKFmKFaowfn2fBAU15JOIVvmSh4hFB2i25cgzRaIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM853HSCjU09Id0QfyrcA7bxQ60CsULUIVi0J6a0XIIlcazWp%2FkXF0UoNEABxUn5iGaktMQ8OJlGO7Ec9ixy%2FSrMg%2Bw3OFYlS0jKP%2FFtzcGcREBJ9EIe1rRgQsAtj%2FnyhR6fmQqwbhzRGQeZO0qRldF%2BDMxMS9U8sOR7bQBa%2BsLcLPXnKG2npclBKqgHag4qnmy%2BTVXILA%2Bh2f%2Bb1QQOo5GyzqXDtOkEpfRq4O6S7zH%2FLlkl3J0phDSvRcZlflGi543B%2Bx0rXVyJQUE53AlmXHgzlRIk0SXZfOW5YVn71%2FNnprLMWk7rUNtulFxLidErlNeGClSn7xNCcyKYmBZztBYBPk1GlCRUnvPWipMOfji6C8jGotQ4qAS5bZHjoH2Z1ZtGb3%2FrcYbEy239PaB81Qh2TrbdWUb8Po1J0wUHgpMTQJSIi0MXxx%2FUpZyxF0C0lj8eiTFqkW5UtQspio2eU7DMQS5vcCsFIox49AhOYvg0C5m8X6H%2FoY%2BoNX0h%2FjDFU1uRoP%2BlbSRPb9Lxc3ReA7GTgy7wcrdYqdONtpVr4gCWeKm6z9Q%2BUwtub50BwkNEjDWbDfCPRQrvjJ572ykmf%2FnxFh0LXqA13LMMl8k6oFIpzdq5epAp95WJKEqX4U%2BZ1dj6SXJ0M3HNa7ftMOzCutMGOqUBA1JenQcJvnnsUzr%2FBsJXa%2Bqn9nvrMlrBys6TNBmTJBjunS%2BCeYMSbWUlzFCFewY%2Fl8830L%2BjLJX0dI8vMIZyf5huU6hP3W9dkAjSZ4SzcBlmkb6pFBggxwd%2BT76p4VNwn%2B4OvzupDWXjrZJHnwKPskXYP9miTW6fTXwC2e3rj1YhJRFkzvGiSLxnLfbbHZNKBr3hz7vZxnCguTbMzIiAU5PvYhTA&X-Amz-Signature=e5d368d9b7476365751e82bc51d7b64e88b3badacba428fa710f6bdd81e6cfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
