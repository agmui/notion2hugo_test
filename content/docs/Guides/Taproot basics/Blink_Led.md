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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGY3EZ3U%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8qI2Gtp51qpNbuclbwAjRQovKqBNAe9tQUHc1ZXqGXQIgJVBYynIsGMrXCSLQJZqYIXUiRb2%2BRj9kXpdJxnrPg4Iq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDO7lzTs%2F8lGyCHhzHircAzlr58bLMoDplZZ3E6M8ITAmrOklBETT7YZWvaJc%2FXbW7OBLbLOQ8Gr2tAASe2wlqAgXv3jBCs%2Bbfy6woO4%2BXVIh9%2FcEs0xzqQpBiID%2Fkwwrs8uDJsKNuJsfta4gfqisqd%2B3vkcy7DIb7ebv85Jd8zIp6Xsf1f1i4EcVhKQCjy9ducVv%2FhpGCPFvE%2F9PnOhRMpJ5kx%2B4a9%2BQCHPBGnSkGXtr2IVN5r8GVsKp%2BPuW5miHlD40jgH8bLZYBW2j17XZfGAwlbFcZeIfIZkLB%2BGpgfyYrB2ykP83vUpoVH%2Bd011r4NhRkNPVFk50XS5gQ%2BFyvRRCEF2J0lueLjbn%2FHIaLgaB56jgxdYDTc787Cpm6Vmg2hi6WG5Jp2I1MKvsNbNJqTrVHAnwOV55eQ%2BLJgyE%2F%2F4oyOioGJ%2B1SqWFuH4yUZQoz6vScBdBvHFoY%2BoiRaza0g5v1z2T3sRUp2mwLnoca4ftfeXZAlqOhp1xHEC3kHuht35LDGDSAbA5EvXpkcy7EjC73P0%2FKzzfawwVPchCLiJ3od3N8EM%2FMmyB47ikHWj425dHLkAECTbbF790pIeR%2FeYtDkEIIPkK16oDYrKiO%2BvqwisaC0oBUcgvnwjOq6Ha7IlLMFYxyYbzZlKeMKi%2FtcAGOqUBbFd5DIrUyrUkQ0E%2B8FU7KZMJaroz3MtrpRIkRE0do5j66FlqueeXCecnrvPsBLl1G2yWJz2aytcNBlefIqRQIhT6LldFCBNpbF6qhUd9%2Bw%2FXpUEo3pxD54n2h37rPf5f5zzV%2BHk64J98s%2Ft%2FN06blFkDnKKgo3lnVn8P5tuuCDmy4z6%2FOefZpu%2FwuSYURNtvh%2BM9o4aXW2q6pvwBkXcqJMMBfM5G&X-Amz-Signature=37d12537066f88461ff0bb5ffa74abc0e88843b2544bda7b4f27caba359cd27d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTRIQZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHqX%2FwT4naOZh%2Bu%2F8ojHunskr90%2B38kxGDkWj4ejFIuAiB3hD8%2BnWPmLu%2FtTxoN0kea5DFJXkOmp3aXZLrXh04orSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMR8%2Bt99yMlQVO%2BVtzKtwD%2BC6ex3xNVvT%2FL5zuBvuL9J1RijnUoNNh8EmwigZH5%2FHJcAMzK1TnFPMegB%2B6rfkMLGB%2FldpUh5nx0EakYBqiUzWoXmjQM7wVZxebwYCkLqaQJf%2FFD0mYOa9SpV87xLNNAGP8qQeLdi0Nc%2FWhGig%2BUw7ujJ8xJTQWLjo87bajVoHQc6vIArCS6kORMU%2FudtZIJY3g2btt3NK%2BVm97s7RsfzdRih7sGLo5i04fWXi6UzoDG8aymiiMwxmsff2OqjmRMphvC%2F0F2fFbZCUk8JDClf%2F3iWV30O2GOTZmWtcCGeo1m7keEFxCntorTFuKheqhvjQXg%2FD0IIk9cyKtua2z%2BX55ZVZOZ2%2BwtkPgWgOiDi2okzwNGgrwBakknn2UZekGy56EaD3WCAueWLvYXtaqG0p9hU6dE%2B8liFMsWhPCaEyCNFvCA8Kq5q3dZ6LM4HJZbLRlXyW%2BpaB2eQogaLoN20AiUJB9gf43p550x9M0yO0qHsuvUeSuYbXDmiy9KyhGU2LnswMdnJ%2BaT6mvmIKisglsBKO013EaC6cNhPzTn%2BilF1IZ7Sq1vRr4v9%2BeECxXvwEvi4stqj4EHW6Y5TpSITWv8uusBAKWMf6G1zX8xT1Jl7rTitT4FvSbYZ8wgMC1wAY6pgHo6Z4VlxUw8pYNs7AiOs%2FdNmnRObD%2FzuJXJxK695EY%2FrR7Nc%2FR4dwHOtE6nQ0jkrB7dL8%2F%2BH593rM2PjKnSsVXJxZWYcW3RP%2FMpqf3vGLbAO69tk3kenvcMFVrR6miE%2BmE5JtLcXCV28OvXBBgjNeXiTKrxv19arAUgzG%2B1JQ5WNBfKXLB5EQ%2FsCtHDZLg8dEBonWs3yOleC5lIyHDOesI5RvVGySa&X-Amz-Signature=a7516143cec90da7fd43411b510d1f5f65c0722d7dd935154c3d3db7cfbc72f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
