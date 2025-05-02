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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWPE2OHI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIB018Rtyym2YbU1vxbq8lQOoNqqntGhF1j6XTvbzOSRLAiAxGyWK5M2MX11SdlTZaLKVDMngY4ROsoHGRglLmFPmcCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbad1hpaWoBhddIKzKtwDVV%2BvA0fkN0%2FaMFI0tG5u8Ti53X0ez94SZ1KC5muGucW2kZwmVNmLQ7Cg2BXphl4Dd3drIsjK5TMRY5eC4zM%2Bzbdu3HBxrk7t%2BW60ogt5VwD9lT75iO%2FzVvkdAL4%2FbyYXqDEeB%2FqLgUJ%2FmNqRjZz2hJNDoT%2F74MhfXhmdifTTcEvTe1XethpqwdzpVl3Rl2EMsVgsA4feeKjCMJKT0QQAxYQ50RoOS4JZeuVRI9EcHdDXO0pdf9DbkKdbXuSGUO6n2fUGIYejdeJoxK7ml4XepEBBIpnSylkuyACk12jAfgEd%2BWC2HAK1mSCNIk20PewdJpbMWmcoGsj6q4jRt%2FA0NUoncoczWfFEcFHGpHYBp8ZGgFzOLiTHy1iGJCY0qtZKIJICO%2Bj%2FEV4rtxQDn91kgdaYLwPZEVt1WG%2FJ0UV0yAm7d9Or5GMRBD%2FO6R5lo410wY1p0POxaDVIOgZdUr6qiF9YpksvlQw1NCrrrXHRy8JqNk9zM7IhAX10%2FDSJK9Wzizhk7jhGgLX7tqUPTTTD8RdLGAinpyn%2BBEZSlccT5QhjXmD6tE3mmKnKSkunG1zpopeOqyalR300Hx0WHf5LVlWGg4%2F%2FgUu2yCd86IilCbavoKKTXElpzFkattQw%2B4fRwAY6pgH3T%2F2FiywdHP%2FuTOd77NGNdGs9y6WH15now3ofNdSbXMEkltyS86WC0bdPiX3zDFwgZLNqeY6gEjn2xuzIy5aZWD7DpSDrlX3yOGkGpVkKkRQDDW6i1q9rqo7O7M4Sr7GCnKUsBVfQKi9JqL6pPNVPq0Vn%2Fr664I8j97khnFK%2FKq87D%2FThTAEXFxUldIV7Ib3FexuKqOMM%2BYyoEnHkdZtbQE7M4XZr&X-Amz-Signature=e09790fba3293cadedeee6fd4cc59ffcb081cf3d7b3824c61378155f760cdb98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQN3NYG%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIDZtMdHBeYZ49dh56yC3pbEBQsSCtiRRMjfwNZ3dZ54SAiEA2uF0IUpTKSzxgdl8RMTioLzB1VRHAZUFTD52AHbz8%2F8qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXnhlQ%2F6zKcvSu0DSrcA7b22wqPrAbpXS09Oe85Zb4r7deFsD2xDG9AfTu6jn9MxMw0XWPyIpEJOakZpRs6UOFrvLxgGbf8JlHN6jodNdFNzALXJhWp456YCyR%2Fgc8FaGnEk%2FYVEN8lFHjEQ3X5FseSNvr623Zt8IKGbhcO8gf7aaVrJS87GDxlldozsg%2BXjr82H%2F7vMBWKKAMnppxMN6pa1yUnLOMIUUqlyYnBCCHswkXFYStUp7VmBlt1B7ukIRUZUwJHFJega4XkL0moDvZZwdhDGTbFQ82BrlouU4YCVaUzs2tKobup5X3UtAVDTMTkDYuQlX4U4f2MDbPZ3w0ARWhaeUOJTw%2BgP4a1DjRiqEY%2FxoFm3uuF0IdO6VBD%2FrfhLew0gyXh6BPQ5agoRCeaL%2F30dsYKr3lLEySse7Pz7XxLVDdwREJFoLyautF58i1Lf9g5Jbfx7tOPl6RmbejOcb4bb%2FqJO%2BJ%2BGn8bfgDRB4qNyRh3DPuuriehffLoe%2FSZM29Qn40cUo3ISyE2bF2Tx%2BXboOyzo39HownmvRQ21L%2BbFo1cpU3sVfjwMHSJhatD%2BKr0vpbEASC%2FOjrqcEk4b%2FAjPiW6eLP0dwjRcsShcwEkXlFQf2djsaEKxrp%2BnlvuShsAUmJInH0uMNiJ0cAGOqUBmY1gwc7b3rvRq24KZyW%2FlF1fMls5X7wa6%2BTXn66nqxUhYmPKLTtbVBT6rWoxQph2iLa%2BDDPgHKwl2wI6NPDMw1LTSnNm2PexHMggs0KUzCePXwaTPL3bj3%2FAc4qEmQ6VdM0XFyhYStpyzbqi7OCaqJc9vyPwT0epzohagrDjV9ocWeFGG8GNn0uohhFwxSuK9yqbUEdBCv3oLrVfMDTRcUXGD%2FRf&X-Amz-Signature=b06882419a25525bc2f747ca399d7c821652d79f5f6eb9001815d3103ceeafdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
