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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BXLCE33%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6SapqOs4xxwCpeflyH6s6WD9cCfTKnXBaKACiuzgSFAiAt9bBJEc0xMjiiBXlWfA1DwiqsS%2Fn8meuW2fb4DKfSVCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMeM6mux%2Fo9oVVF5fFKtwDWWlOU8OtHz0WW2v1THYPJkRz4oPDtdTsVxRB%2BqMPjs1dcQ%2BAsQO%2FwBjUJZlSff0uOSkVq2VQiJedzXnWyFI6u1IoLQj9mwmCISNG6Sog02QM6eOp75U6HnaTVzcBlpc%2FgIdm31cUE1NNGhBBo4tOZKF3v8UfE2MeN3oOy7kk%2BZ6aqEYRhGAQHiFgNVXGOV2iYZ22teTIno2eThLWXxuMOe1bFQbvhK%2FQKRJ5S2nC8NQ7XJbBafRYJeAsjss6yREQfvsZSoI4%2FW4NRyqcqfLcXhqxiS8UaFl7rMq%2Bv6tUcNMpHBJywJlqES9H3JW1XxVmBdV4%2F3RD2W9%2BdMgqfdcEX2mhTxwS0DROa0fAD5EXmNbMzCKyCawMs99%2Bi%2F50SQ7Y6wEBSibdLvr94Zdct8ZfHM3Od%2F0D6luE%2F9KsMo9bqbz6N7MppCzoYX5BKNzuNekR%2FEY8aMGuKUSd6zIPihVJwXdOMfeMAnnqzXCfrvb%2BL0ec3c3wsjx4MMKCL%2BTRUk6MqmZ2pbLeOj7%2ByEGmXl3Nxh9n93HpQgdY9ngMAcqVOfFREhrraSbLRpLSxvqnSH3MhAlRupsIJCz5GeTnqbg6XP1u4gbTfiyz2aVNRpGzxi2wzDZe2wsoSoj66iswztOQwgY6pgGdrkwA7n%2FcOSdCRiE4g9kBQ5%2BmhyKmQ8Q0sO%2B2nexMfFkRqYpyR%2F8rPqWjzNJztDOXHhHjJJ6zIZNSfZzZohmi0AI4k62%2Bc%2FJqt7Dapb6O7cpFNy9TUsLQiliGsC5DPtLMVL5zngldsvXmT8kNdGFpNEbxIWLJ8CJtRDHfsaYNDmvNwGHvretOzfloimb9KmSJmWuA5b44lYBh6j2wuAKWvGzG%2Fd7m&X-Amz-Signature=f1eb0d2458d0596ed4a6adae4d61f469de0e8a4280dbc1033ccf12f945d9fa6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VW3Z2V%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3J3a1fXfmt6lUZuuqxCncrmxIItFYkl%2BSxyp6UWMdhAiEAmVx%2FSfFaNMBDAxYXZonFjoCfGwwXr%2F2fFvXJ7F2KI4Yq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL5%2F%2FIWHPbSoju%2F%2F5SrcA1fCZ%2BjZXbUphZuJCtRDavWfCuDv5FiicO7FJP8GFtGq4Npq8FpsXZcp3qbTLILIV%2FCxgfW3pH%2BTJ%2FXNulmOG%2BAF%2F%2BWDpFCwsYkCsIz8gS8T17qqEOUyfsrecVfXn5P1qOh1BZZfhA%2BLn1NYuZd26Jf%2Fmm%2B8ETnXb0mAh6HXTlvqMasJaUxM5XDgLyCxfJcCHzDT9YLPJZKkRoSO1CSnZLVEl2mqghF8NBrUNek%2BolGmoakgdk5a51VoCN6x6tdYjeOy%2BdQXsTThcQpQd1AvvyUmHsxVPSoKmvvnuTcQ3Vxb3L3BoYo4XRrBU5os%2Fm5Yvtne4CsrmUWcKqG3ROHQTZFRrw%2F7qacc9ePl3lmdueFL%2BIaozcn6asvR6r3jNUNAJzkB19Aa6mDXsp1d0fXJYMGg%2FzUikaWSG6N96kxRhRIvK1%2F7YcFuYWHxXXNY98yhbYv4DiGELVHw0FIYLevIBjqj5BSjG2Gszi8qHsRX0t8jChS7p%2BvT%2FjLuA50PCZbXRyllHOrMUTPOYhPCSKFuVbuqUTVDk68ZPlfey17RIbeH1QOhC8jUVC3sHQEwUclGIC2PoUmF9Oi57DEX53kEq%2BcgSt99ciJa8PAvqLBqsoBMo6BHsjL6sp5DnzusMOzHkMIGOqUBWbkX892hGqfcUldw%2Fyo75OJPcJaF0vUHnjPaPZLv%2Bl%2FsAjtbMO3Uw6i2lSSfIQs4h3k2DUHDuj%2FwjyIUAnM4mdoSmWYPFMemkBMyRZAu6BV%2Bcf8Pij%2FML9oq%2FAtFHj%2Ffmn0%2B1i1%2BNx5CysJRvqJ6FvuE5mfVzeQXwF7C1nCkH2NM1Gl7DTwBbAbPgcfrEfB%2FpZ3h3oI3%2Bf0X%2BcarCl8m6sLNEWxt&X-Amz-Signature=a22855ae03c3d9d61970d2b39cbfefa6380d0bcf768d2a11766d60472bce5450&X-Amz-SignedHeaders=host&x-id=GetObject)

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
