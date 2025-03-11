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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQJ6IAC3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFYfmiU1V3Xyz2XlQx%2F5a6OQDKaNLIYGCK8GtttWcDuYAiAhI2CWSPpaor09S1a5zyTJixc3fquEdEVFyIFd8%2BmDUiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6iQl5jVig7lY7znfKtwDtoR%2Fa%2BfgGiQ5%2BYqPLAhI%2BjxILOs9yiIibPGymuORpCeuN2d7KMWxNq7Ldmx3I9cb5khXW4WbeI%2BH5sCZM%2Bf3F4wIAG1%2FgAZSvZOvY74Oy0p7Y9dbrHGMba3XGre2iPoULYf8iKjLdj4fk4E68p3EkDsFwrV1YTxVuJUBy8rvYqdfD%2BGd5eRE%2Ft5kPzvvP1leCRhCOzu%2BE%2Bpyfe4c84FpfHbsrW8m6htVSU3bKC1FgxIRWudCp9N1qCzD%2BKd%2B6sK29ienPVUQ6SbepD%2BXMlnJBAMS5kOTI%2FDawfFbYmsHU4DdOfUtF1LXiy7kn6g0e%2FrO33weyj5W5GyGraJJ4RTgPgCOMXtzmL8T4gxwGEKXRLlowVom2CH5VKFh3cbxqEpFLrMi8JTTsp8xUqDCSR60%2Fo9CJpdybifKN1EYPzr788xxZdLhsG4x%2BOAQ3qvvYcHkD0O9Hvz9WvvMtALG56I9U7ZS7OzFgBvwASM9BzmmBeEQwXSKCQVnpZSswwYIHG4dV0HccDQ80Aj9CaTkg2lE0QR4DeLEXFlPwdrv5jwRBgnw3ojPdv4GHpe9Bk4eavuHfSCfsc2vvkPqC56a0dbPcobWbTMeFts9qMZqAZA9%2BVddjRY2xHCj1lQTdo4whe69vgY6pgGDYwqvWATih4CF5Id3OAzzHA9WHvc0hx0okc1DitrUL0eaGM6C9unr0lcuwytqC01wCz4Rx3tHn1wY%2BmaslDN1cIWs5XQ5bgSqLaOlapzkPoM3jj2JnbTSfEiqj9p%2FfAdK%2B%2BKAJ6Eu2FvRpzYT%2FlQwX2wAxR%2BzNEL6PGrzAveaj8dtlJfHZVrcShmaH3RAzXbkmJXZPaArnbhKH%2BjVD1QvxrCs0J6r&X-Amz-Signature=b5d0815610d8f58f2b2a540709161d44106c3fcf3ff2572cce766c143496b69a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHISK32%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFQh25pMBTD7TFb9TDUT7puctzVmMKbJtnN9a1MuqwmeAiA3oa%2F3EaCU6t2Kw1b%2BqTrJ8bmQ2Yvcf1C7a2oP3oxdOCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaGbL5Fd8gtLvslkSKtwD5Oe2svQ%2B2k22h8j0WeJHX8ROsEe9TDcXyaA3zNIXGVHU%2FeZScLYmDA%2BcjNUWzoRhkLFqEo1AVyjj1A2zrCNmDRBbcpu1o3KPH9T2fPdJV%2BZYQcTOJ%2BoGLZqax4LDjYGXT3EAmWLSqvWi46lfDv1%2F7mN4llfa6n6RA2PT1piF4jFgU5Cn9k3wldJd73kooQ2PwFcaejWY3GhVjI1K2muBoLRBhpL5vFrHx9FCowJ8zrWMxGL2QS5%2FbyR7yzx4UbuVJ7RfGp0aZxpc7d657srkq9vtsAYGXeVppeLgsuwh%2FbPqGUaTq1h8qB1FspWOLsrbGESV3OzpF%2Fw%2FWBPYwAbNE1Hci9HaqB00GM25y45JO0jv%2F7ypVtBKC0gIjNvd4IXr%2F8WuiR8ups9Jvt8iDIY%2BEv1gnmaNhwXpiKod0mBoFlNX6Ld6jVS8F1Fjl%2BAA3fT%2BixrqIAmLX%2FUYRwd3HE7CqsA8obar68a3RlG8tIIhxSnAgcZS5wMp1t%2FT2Q9KQE1WYBRXYZ05TcqO6YW4x3PPqQXLLIpEiXLwuuDBAL7WDeDGh7b8CJAJygQa82cR25oA50I7YWj5TYO8CgOD6%2BiaDnkDqVkCBqpoywLny4wUqZvr77Z9fr5aO2D1AFcwwO29vgY6pgFNoQYubIu6TwCeZYSLS7HGgNBUDzkHBCngAqNP%2Bi66U8di6hvT%2FZ7Tpiq3fvV%2BEG00JZdcsB1j6pOEaG9GdysAoR7IWRKJkrs%2FaXoyVBY%2F1jBC48JC4M%2Fp%2B4SubNzhmJEO1f%2BTq%2FBfuqmKCJlRRjX3a7rRs1yBRkpulFnZipvKhvWXuq1%2ByeJ6dI8A33uYuCyi24bq2DE9FbbvgLtb%2BEaPlIh%2BlOkT&X-Amz-Signature=101381bc2dfc3da8cc8439a6fcbe335c12a666d7df3d8b5ffa88e7fa10645e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
