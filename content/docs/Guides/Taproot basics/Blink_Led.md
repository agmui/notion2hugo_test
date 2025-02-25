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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552RUYYU%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBZIJparByw2hBBhTbKXKX9GVKFKh9RJFtUxjcQcgQHRAiEA4osyG6p5ix5Xq15LOaJWxqYe0Hn5SjQ4J5JqKqx76fEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGComvkybFvVuMbQCircA7tl4sgfGW%2B9ELrMV4C9XxJr0Y%2FDwh8YSz8l4I78J3iCT4Mk1MsBpImyWpJ0jgpzopj4DYakZX2EPDVTsQcG7NGNfsJV4C6hcWcbtAeWZpS7fsk0Wz3bEKIC%2F8FIr4e%2BE93JUyNOwAbzdbnjJwEbWlNqZ9mGPhIlymlVLBfEdvHcweF8%2FmoF9MAGlLDAkn5LzAImnO%2BCUnuFFj3ybc1Fbp2H9sAqtSc8LiGn1HWMugFJ0A%2B24i5n4PjHqZEXi9ClO%2Bs0YCibQA7TQODgI06350v2t%2FrVF0eSwO7hUJh4lUdH4YzcWhxjhxWbR%2FnRcnvRid2ibCq9uC%2Fn6VgAQF81LZdhECV%2BFmS%2BkYb66HlXz2JOmNwcMvAA9kq%2B90j9gCotrSdd%2BhbGyGoQ1qd7bqWyED43k5ls3l0hOtcmaFIV4H%2B4Kcveb%2BG6jRHDO9kdbsdAF3lWuI7sHXlL1Uo3TqaadWS0L5NVK%2Bv40akG7laBScGigQekprJFPvgZw42nrYBiC%2FApyjV7GE0XP4gQ3%2Bymzaw0IfYDGzTxhAvuEGNdALILRCAzDdgeeYt4XADhg95Lckt1%2Fmg6eCRpF%2BED5fOgyFey9GXADeJzuWT1vxtchaGDQgSBQxCT2Vf%2BZa9fMLGh9r0GOqUBGE94LnHt7yarkcejj%2FaimvnSTgvqYetYTFLE0xEXScfpA9mVvDLpq8nG%2BOqb%2B6d1nL1TqkLY6jNTclxqn2EpNQHrbkGEyWiX7QAleKIZgWjDyeol0UtoLoZ%2F3tHgV9woqh0dgP9xHong%2BEKmUv9PylbI6XUCLEV1MmEPpu7u7JiO5biaT4f%2BbCUJK7Wwax3R8bzdGuvyHGVXykaXoN4o08Q9R5VY&X-Amz-Signature=15372537ba7dfe04e73d63d90f1aab32a043888a63a9d09d604366e036408c57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBYHTX6D%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCklfaFMrxGQPDxT2Iodje%2FU3bwy8uaQw%2FxLfPPWyuDJwIgLqQVzxmx7%2Fcf5K68W%2B1woIlgGOSxNwXD8lo5BYrGDmQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDjc%2FT%2FxGtWT7QnAzCrcA5gQ5kKI%2ByDmYZqMvzXuzEXPRItsf5tmx5oOeE0EEZ8Q1KPRJvwTKYb4%2FdHzRKr364sTntL4nAen9PSpLrDP84qBlo7brggnwYZlZb%2BpJ81Mw3ebwKaQ67JlTRYIcqwBbS7I5fi3C%2FYLyw1S%2BBunvI6e1MFNGa2fLCJrovxTc1%2BsRBZmhZCKALBLZgbfgZROmlLfLNndVRns%2BqB0lKt7KZEWek8moPROKv4XHsYlC0b8pm6kvLEtyNfFkCuHYwDAjI3J8g4q2lm4uBLxJBq2YkUjOLUKAcO2UUVZVGySE%2BI2G4cAukqDNtrDm4h680MoSUVELcJdoYx8TnX8rkP6eRKCn6P7dOE%2Fn%2FfjGpcTqNLrJ9RxV9JSE9JDtuxRyg6Eexuptx7d7tb7bShIh8w8dnVoMhb56fsOh11V%2FCiPlFbBodk6dZN5ELb3lvxLuE%2FvKICBz4E5TDbSlHTI2w3lUzLjc21Gr98Ozn5FG5iwFpi%2BnImPNd%2FgU%2FOeTV83q2991o7CfA7YKRnDiaq4RVJzxiM8uYU6zMaEb%2F195rG69lz1wn3Be6%2F%2BRYoY37edddZoEsE8IxYFwRwJDCrYHXl5n%2FoF0qwQy0g7HMkb9igfcNEleCvju8tI1PcHqOX5MLmh9r0GOqUBt2O8teRW5V2Bt2zz%2FdeaUg51GRyHHvcXJOfavAXP0gN3glLD3y7NNK61rLOaKGB8fiwt9GYF1NYydVLLIqFlZDTIMJTn2INkw1F%2B5K5YDn3RkvEuQBMYHXuwACNhY1BZ4KDL21pNdIEx1l6P%2Frx8ZWlDlMah5K85tQrrvZrng16hoUQYkEI6NIXV%2BHoqQUiaaUWEik%2Bn7RTsa6jBrftflISLymb3&X-Amz-Signature=20d32fcd2bd61312cc64536a9dd223bd52ce29528824a627a65fe45b9146076a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
