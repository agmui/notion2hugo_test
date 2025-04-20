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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSDBBW6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDLxSnXgniq%2FfQYnJcRsWNrkaDvGu%2B9g8%2BkgffY%2Bl5DSQIhAOOGECkZMEPzuzpsipim9JhNcLrH9EYRYaSOSKSTJgczKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNwUIfeHqvOmfZDC4q3AOiNFkMxVIybjwkoaR4ujqjyxa94DlZJxQewgLalkPFIe2rsUhtGxndrnGLZ%2BBATuB15v7wbI0SZD6J6GwiVYqOVfhUxpfNiWkiKdX1H5VcQXqaDZqnN6nwfWwBJBNNavnLe6%2BVI7YJ98HZ6EJCiKxWN2D8VTJNwyqmYlhpB8iwUQzr7Znfhvi4ku5ImqkzaNnOs2C0AlLv%2FTk81lOArEVbdSUfFP3loS8jiD7oQq3Mj4wHz%2FKGTyo1xoG88tVP%2FrTC5sN5bGrlXjx2iCHXnAw4MkuHIS41yLnhLvRzsjUot7dRlUaEGWjw%2FXhmOHEQPb1k43Iz2Kigyp3OK2F30XwQXqNGiKnofxsuUrGNFXt5dpX10TB%2BJksbn5sGj4d3WovIg8BFgdXU%2BC16QVU66%2BwZyKrVrjgAIicmq2C7djyypLtsW2Ijv%2BLjiG3aPjnt%2BpXxrmI1SUjR2rcALbUAF%2B%2Bwn2lBo0fZutZTvuIxZFUambtV4KtudXOP2gTnsU6z3qP8CXzbBSEfiGmkRA9mSNoiR8hLuyxQJx%2FGtlOctskqfg%2BWVTzsY0pfENErRV5FMCTm78b5PZA3AzRqbQiAUybVc3XBuw%2B8xqUTCPOmcBOHI8FB4liU2T%2FqWWIhTjCvgpHABjqkAT6f4ycoaD4Ov32HogPhcpKrOACOfoS45SETtaIWXTMvcKIG1PgEfPdwKdD9NpAw7W4lJd4TgB9%2BGZMK8Eqvom0bEl4T1D7RjykWuhoH0D3XE%2Fpb9Ddl2ftml2i5Pq8QxG0Y2YLIZYZmk2PgcBAYiguVLjuiyEb9%2FNpntP7I8ULZdP1Xt8bXNbkcyjXPkVD4WYe%2FDBAC%2BO8UULaSSFnBldy6jbo%2B&X-Amz-Signature=910ce648fc9b8d0975d41459747d2339e01f13ba400b6fd7ebe8072b2d563729&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665REJBSH5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF3w4J%2BQA0qyl9H7JRv7h5PgZxQgDiZgele9O%2BdShptAAiEAugdefY2B07UD9v62wGUuSVJfPDk6cDT8LDuuLBFpbGUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1S4FOBek50Kk26oCrcA0UDzdLx5k50LTIi%2BuZrKUG99vgelb1ZR1uGZYETU3QLLHwz%2FGdYCEXLxRyeinmDnt8WCb093wnbuRuvRJQfd4PYswjWaFW%2F60koiq6xwzxEZj6SCxYP8wx55Rb8rzwjaBLR242q6PZR4JZutFICFYHy0OVgE8bVno11%2BCO%2Fs%2FT8el60nAkntd2QK7Mq%2FKojEURfMT6y7Gsmo2qUckeaJycDjYd%2B2BFUWp8OWLl83ROHeiI1PH6HZ%2FiP%2F6ovd6rwO7rnypWE6FY5edxQISaW7VRqGhPNy6whvdIyk9Rtx0CVp%2F4U2moYN5KDNQVwygkfYIwps1RrL4K6ha%2FNC%2BG2Gz8EpDM%2BD40swKKqHXLrn4KOVTVj05UBUA%2BcetbHkRdmmjDNTC4d0qDomIwD7ey2v6e2EO8rCFuEFIz8IE3cYiSAG1OGRMvhAVuYv6mhgcG9GCxLvhlGDBtDFLdRIrk%2BC3PkOE3IZlcjsyDtOnXF266BGtK7G99rI9s2BBajgzDYxPPopNRFZCl9kdiZLkT%2FdwN8SmGdnGMdY%2FVgNRBRYb4a7sSlzVFIHE%2B5Ft8db7BxhSAvTuo9YnMggIey%2FSQxJ4AoJbadUMmXhGvY0LOTR07WuM6Va%2Bh3ad14RtoUMPGBkcAGOqUBh%2FywIlx%2FcLGB5AloeDO8Pl8EIugu42qPh1%2F3RCETZ3F4fg5t9F6caNHM3N4HiD0CmXCluwoIMnK1%2FZAlibVI1DCvI%2FYnUkapRcQNzNAJb9TR6S8XPwgLL6Aj5HqgCt6uaft3hhkO4ZPYmHs6D190vs5qcBk%2BBXraQTytXUC4wGtIVfRaxSGBr0g7fL%2B2DQ6H3BoHjHg3nnnNGl8tkE9LqO98wSEE&X-Amz-Signature=cd65f180dd89178c79e5142ed33659fdd5a054300ca42a1b0103281db36858fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
