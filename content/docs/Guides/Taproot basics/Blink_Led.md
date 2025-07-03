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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJVE2PAG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFIlk0QgeLTGAyYUtkOpBubyejqPRoaBjRh5UNhpL81aAiEAzcC0CP8PwhDwFsogeo7bPZy87HkHAjOCtmrgBPa2NhIqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDceY60hEdFfa3rriCrcA10LUM%2Fn%2FDyRVbHOMZVTn9oFt9Nj3qqsQBWra%2F%2B9otkwU2aJ47%2FTqhBbNXiKctCxtwhyksWcPvZN%2BCD2LOMSPgGHrpuZ5UYclVigU%2BuezzWfaWCdQLzgwDQOQO6JrgLnMD9pzSynqGUd7UhVAQU4sZHwTqNZDuxjqTD00l3GoZoZRf3H58rFLda6bvZ5Iia%2BzYjDXoB0kaO%2F5vfVnWfUOCDQcUkfFVd9MOQUVJJquOZObbF9%2BGgRAQ4XNs%2BnMT3GQpHp0RwnWZzhnqAGnKBr38ADPDf5F1EMprVXF6GneGjNUcUBCTjwgpmc3NbfuZGCK7yQC50hCUb5TfKUOgoLFIvL133ve%2B8UILcEaxQttyc9WLVNYZzbt0F%2BysntV4j6WTV5q8Q7evkZ2HatJY7ui3%2BUFGPQeuqvNyD%2FT3h1b4ncmGk5q00Yho87e2YM9N3qc899NpiVaDhW61HVehUSf%2BQOXgNOnmLSj7sctNsRURw9EXrlvWbAnxqZDQdwqYgxxxPa6ZH6MdgZMcduD4C%2BdeeUXRiefnbtzS%2Brgoi9G02nhWSBXI9zrw1RrqHPSz%2FdB7fvrgqzAHklHDJ%2BS1gD6GSxU0hoQw7z99y8ZmKWLrkLTNpWUpsCF5HnWW6vMLevmMMGOqUBtVcE3elE6bcJI7K4URRYbFpiWA2xkrUqkAykKUDzD4%2FhTjfZghbUObghjKVhbkwkIv9WrEuDJfUxjpjLy2co%2Fkyr26B2szLsEF3KLVHFDEQpsCFOXLTFrSOEoR8ARJsKdRv%2FF4Od2znz3EknT%2BDc9jggDVUNp5cE23K1aDYhZo22%2FKqmNGJqPxxnEiKQXwfDJ28o5KOQe7druS%2FuUzPbKZnVnsKo&X-Amz-Signature=2bdccdeba6f4536611c5712ebe3d4cde67d27f6a16576f41df7ba91c77a80977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKP5ULR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCOKyfdUJ8JEeoCMnVBwQIpQnlR0H1q9ZLHbm2T1RcT%2FAIhAKn8%2BHdpXa8r4a1gJADyo86wgdkUF%2BX95Y3HgMaMj93IKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7YntZiiV5847TJMq3AOC4EcB7G2a8z%2Fpk7D4q1itjRV6BYvtHEWgQRvJ4KjgkbjMihJ7gHU1uk4%2FyQiMd9LLGTp2CzdwjCnODJmv8Hx01LY1HBvSgX6Z04mbuNHy%2BLBqz66cpHHOeaJnSQ7T7oT0SkuwLcCaLw5fD5NOeiSCbwuoFdoL1%2FUFoXBOwYqy0UU2sTbCuA1B6ISjy9nhxZ4ReQOO69xo1Pq11ltAxHBcvuRP72VSaUdDFRkNSM%2Btrs8ybWeyS%2Bg9IIHFs7i%2B7mZMPrWWBXu%2BtKK7QutdZty6e6y%2FV1xF2jt3%2BF3uiFXWpTfgVmKyb2E7jO5bXx24dEmU4JKj2MTMFOwy3TBKjEMyiTVf3gaOhDY9Y%2Bpts15aTgKdQ7C6h2Mqp34NJt%2BEENJngvwhyLtBk5n3muCdbZA6a8AA2hO%2B5oWOTlcAWm1lT4DMWfNiGYGPRxzd5gcLZFkPRbYBlbp4kUl5x4NoqJOBZ3C54r0kQSEWrLT3n8n8MDWj5vPLqhNNuu%2BObPgObxjU7czQFw2zlX3w4dNv2FKdhxiFa8LAgy7YEZWvjBECltT61aCkvRASCnMRc8JziNXOKkg8S%2F%2BXsDfyFu%2Bqhokeij4A9X2riZTAwVDvgQ5sF%2FIVi%2Bs65toZQ648ZzCssJjDBjqkAQVKQ%2FPs0Lshvu%2BE8PwcMUJuPJlfXWt8xixriSL8oBwISqbVWZ1%2BvSPuBNbqax%2BdEUa3FaAErRFt38eKVQkh0ukXiOSSM8hb99Z7A0CN49O1SKGIA5WVvFryGKuozt5jV4YIzBRhcws96aavxh6KZSHBFGOFJI%2BwV4FOY0rLvEoQcuXaWmXCKFmbBoJOPPDLKcJvGFpZHkkmLqmL1LLSgyTVigKg&X-Amz-Signature=43c6d01f4a6e5483150c034e26f379265d4e0e5641d3cb19425957d056c18059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
