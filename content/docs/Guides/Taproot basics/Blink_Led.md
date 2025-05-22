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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHT7OXO%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQC7BqSr65Adbt788eQqA6ykhTq3AjJOTuKB4GmEH4x%2B7QIgKy%2B8ijwzFubfh2kdTGodCM8RYQbuZqlHvj%2B7je0EnRUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2B1uPzyJlrLu%2F9MOSrcA3a0Ed6oT05iYura3ZQAMrVS8PVX6H3IoxPqZPibbembxD4H95CDWqxVrNhfClyo0AF5qQztruqdIqmo%2BEnerUe%2FQ63LFh466%2BYYakiPha%2F4BlOm4iHAAaVvqCIronB8n73iJVthAT1Cru3i3H3MPRZC07MD0OJF7aPgcqoMmE%2By5egh1h5zCUiXSvsiNQ7los18sn6BJi5h0w4i1z5h0AFfdCfUreJgLgVzreZic6%2B9%2FXg5bphuSd%2BLe%2BdFApy6cVjkAJoosXE4TMfXJ8aoSGDqu7OEKOI9fvzSXQxuhmDGbwZ4yf9X7dI%2BFh7x%2Fje5RIjc%2Fbkoi7j%2Fwr2Jel7xEGi4qxEoA6D2oR1YcNk6mEX%2FQZkWj2m8WneWWV2d7w51e%2BjatnV7flG0xWzAipLywATLjbQuK81%2BR5bH0rDEDCKSC7Ztd0yB6dsmaKwed1KMLePYdP%2BE1X%2Fmzwe3VDtqZWOcEWvkP2PPSwj8HGaqAeZyUYT7cyhG5NGfrPu9hZlAdf35iEPjKwkqZTYQLPhQPIwDU%2FnslelpVGwAyTz9ur9%2FWfWKH%2BjJmHkYhUBzCghfNb%2Fvb3mxxKwyZOluzwWCYPx7MUnd%2BLlY%2FtnjTVXZeGGUhkp8LRIMZnkInzTQMO33usEGOqUBcLuoz3jbdsti21r2ovEkb2T69HUkLcohIOSwCgK6%2BhjrQB0hTD%2B21MNs%2FDwtrNZbmRFK2q9Xr4ykLDgNRt3W8lrgA6bCy8dlLKhJJdb8AKA4Hk1iGArw8vUcb1VMQQ6t%2FQaULSETbrxfHZkAGT0Zvzv70XMFUZa1d4cieltuSRizv4KucPp8Gvp9U5%2BPK%2BeMKHPqSvEGUdpff%2BJhSJXhdLMGMoV7&X-Amz-Signature=2610f323a512e98ee309ed48c445718d033bfa1e25fed79d98ff213d1de34a86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFWN7KT%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDcLmzfHP%2Fmb4MM1Iov9EkSyjL4o7rxJ56GW3ZNPD3e0QIhAKzqzbly5GNbPM%2B3cJiTsvx%2FBA436crAW0afHtR8l3r8KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmzExsjgN4sLhxHjMq3AOAT8L1cc6MdQcH2FXhBGt4%2B44DjoM3em53QBS0TBgd7xO4zf6gWRvIizQAkiyJrhSa1iUNuV0IOihDqK3qL4oGgiQLCSvjbW0RJTFs2akVVzNTNDSLDpy6KsgbIapzHiJxe7bDRKmb1HlW4KhfsUQS4dvJd9lOgM3biOyA1716lFhKVcuZJeVL7v4eTAyyaal5Rc33KakRH459%2B3qWUXYmvXN7CfqW029L6Qf6ZYMiw2l0mrMwiE4qj0v%2FPuZ1%2BQ5qkl78IfJre%2FccD3xJoPpYXvtf8sP%2BtxLEfIHrLcJzqqCvsUlNeQJmJGj%2BGywrEXqr50BQulsROiwCH8CMYz5bud7dZc8w1vJau%2BH9VoK%2FUd5dLI5ODJcRQQ1X4y%2BQmxLc%2Bp3VVCTSuYwLJsGvMFdUpoW865O0fx0d1ZpjSlO9O7fpy98P9tFcRr9gwKSAWzup0N5AHDHythfxJrHukEz1diwnIQnqLt5Sub5MdAVgK%2BS4ip4GoqvA3q3PfHJ9pfxBkxighT2MyNVbn%2BtwLS3b%2FsfH0wFDJl8X%2F%2FJG%2BDCsLoNbZMHcIv2VPgArYsy7JX7%2BvwNbaCLTmM8ta%2BsiDmb6yN0plY8iIHEjYuuxRzfnK7ebNbiSRpFU8FIQ%2FzCR97rBBjqkAZEX8b8nHBXGjBehyM5I5haF5JdAM1sS2RQkkt2Ap%2FfOiieznziJdHAeYcTWQU6FV6pZvtNifOkRCwtEgIk9eXa%2FxyiAuWuNr6MxLsHyjxQdBpmjijQu7OVbYvxJw50QAWZeYSjDVD%2Fm4yN0TWYMXtdplHIJlXmJkqR%2BVZJkmlQDeB78tDFHJcSHnexjGbjg152HtevdujJOP4tfv6jlPEAN3axw&X-Amz-Signature=2b1ab4dd4dfbbc360dc4f4588dfef6899c5d9497aca289f9f41ec035395fd4d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
