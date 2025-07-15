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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SRYKXVX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIA8IGTlWEnnhSpqpk2EPbdSyZXIa70i1dr5%2FPAR7UIDrAiAeZ430HmrVg8QFW4PcyigwrRpmqNQ0Et0AfuP2mKVZQSr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMkFqzpG1br2jN%2B7LUKtwDzy690mMHC2n2ZmNdzMugBkV2Qsym%2FfcEX5XUzUZm%2BCzt2x1vZSng5iQ4YRN0GLD0fYEF%2FrCJ729Mbvwz8Yxw9e4MqhzgtCWzZdd8AlatU5iucCyGmMu3NxjEMKuAfERUNkFcEN0Ru7XbY9YAtQUbQhEUiMkSeRKQVs4wg9%2F%2B3940J%2BF4QRcWS5u8qVf7Qx0xnGmIW%2Brx8cFwWCiNLmDILdN7PxZT39CpFy2iFG4SNpdvw%2F4TSAYD5yMHCuVGhsuiRdsddnnuYLhqzNXjRA%2FVJvqOHGSX3iPDkn5ZNWqSmc4v4yewebo1t8of%2FgUHfyKu%2B1N4SNdSO8jieVcSVrVTI25IeIc1y1b%2BaZ5usQ7KdKEPhBZrQNrJw1i0Yq3gl%2F0r0ffLFrCfaUgIs31akT1lU58oWOZgn4G0CQxO8nqM9Vpo0H6%2Bs1TRP7sAvgc%2Fxyup1c%2FyUcBjViFG4Jghnt6k1%2B1%2FQreozgEu%2B%2BtZTPRH6odAzDdg%2Fx53Vy0SLzWeIyawzCxZSfRkjEX9XN%2B7g3fD2XhPEC4tZtviqz6UnMr1%2BDOBaU0m2QiAdKZDXWYzSRpJnultkdUjgRelutNczwnWPMldw8%2F%2FZYAXwT5tZRPUjPWsoqLkL5KN9WjYJAwwyKTWwwY6pgHCpCmXzN3NyhrnMEupcg4GS1luMbHTjzwzlOuUVW2PyH6L8KM688a4OgP3RLDiE9mlquZ2LIjAJMV%2Bzccf%2BGEkGYYZZWQJ8Htk8dObyHFxImcKfZ9Ot6CQRHZ%2BIhumI%2BRoqzFeVPCfFRfd68b7krTeSvhiRoHDWrn5%2BHBfnuI%2BZWGaTglhm7WWrQf6%2BJdK4AQMWDZyDz9g21Bv34VJPxSeR%2FHNQRBu&X-Amz-Signature=2e74f0fd4712cce2c246af97ff21caf1c94df4309c6a004782b6c7fe92d0da98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCC4M5FE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIDe5CrjrwiYsEmvrXTFvQMer7UzmaPYqU4OmtUSGgTJdAiEAx%2FIzla%2BLamVwQlZrmjVcHvPXPWbUlzmdD91bdla2k%2B0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDN7VoeeprvvcdtXlGCrcAwsabnea%2BCt5nxHCSfun9mrqQDR8xxI1I6nt%2FcRieSNKnRa5F7luA3ib4vW7%2FoRcA8t9Oc1HwLHZbA7iutWMNAD7QUUReZUBBjbbiOazUsYrIBhp%2BLWug%2BwEyQXMxBLysts9LZf%2FIHSJnx5p2zFsC%2FL0qQfEEi8mAJ%2BGwEId%2BeThB9ME5nBrzIUTOIl9rM%2BoQHsr5KzhQcUTPDkD4XLz5bWiEyiLh%2BNnFdZZoVkBL8YxKjkyLV612l9JGZ2NVfyZ3RXEidD8yMfgweHgI7m%2FlVi9yFDiRQUmZWPUzG5eZ9iNqUwtKDeZQKpos8wb%2BVVop6W1AWibF0iRcGC9y6iu95ZaViKVW5rf8jllAUi6xKuDmsWzrybPbUyWnQhkU6PDBqB9xgZQxFZaeuxWKDu1PI8vVLGV1wQk7pG6zNmFXTYB2S07C%2B5OH2y0D2%2FKI38SgSZPtJhufQEYaZ6kzpa4sqeG18UeBVYepgk2cWbfbuPp2yU5HDO%2FTrV4nQaU20RU4qrREjWU0f4zyvTctkxTeB51ptyJEc157s2vhBa%2B3AW0U6x29%2B2PrrE76jsLlbZ%2FRab8IfmoUjA6bklyqqNE28m4MNjfkTQdCsZL815RiZHzkTqcmHEE3%2FXoZ0bsMKyk1sMGOqUB%2F5YCbfTjzRPF0aTXR%2Bi%2B9mACYuX19Rx50Mxyuj8anXXlxyDMYO3pF3WI2gdi4x5XwHSlAx%2BIG9aq%2FLY0mNW%2FoC8En0mjktnG2V%2FAK3hef31zxM9alxtrXMNzZ0A4uxAG7JZX3C7jv5SEqSLx5lC6ihox9%2ByxTtyCM3OHZbR08Epl6Yoja97RaLWV8CLIFzir%2BGhbhexQ2UwNqrpYaI6o2fMjRE5B&X-Amz-Signature=9a78945fe288e5c6c1f9ef4bd3c53a77a0176a3db01e07a790bf22ef8de11046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
