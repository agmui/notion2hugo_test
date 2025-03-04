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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRZNML5H%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd1cHmBiEO0GzfVcdQXPu863fI895AExL7D3A5spoYxAiEAlWErYd6iq%2BkOYFRtIdp3SGzI4T7QQT9EIZAQiCxrw3EqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFwEszgRR3V8Pr7DSrcA7e53mHV3bOtqR6DW9WAZLp4w%2BB9%2F7kHuGxykfQT2dEN1MKZSO5h23l1KhoYUv472jnO23Cm6UeMKyAoUYYUt4Wj29QH40a6gJ4AMwRESOmy%2FK4iWmQjWyT0PNLOJCGDzpLEFM9hYH7y3f30Ir8IEhHypGG7SwwCXEkg7CZGJIfXVAVeJF3jKWTgaZISmRJudOakVZn8oFrTo2f%2FUEBxvx7bOTUq4Bo%2FgKcLUcEnVgWglrsRJEb1JXPu4LV4Hasx%2FZ%2Fj5l6vWmlRHDgBFxy5yOqKhhfnvzEQC807N0w6GOINkj%2FmYePgd8vTsMfnH9p8vrwOh9R5Q0QyRX5G52EQwj6Rphrm332%2BQFAtjtnWrvKWQ8nYqNxscIFB4Z15BR41XSv2dnmn2AOwl0Mn2%2FkP0iiaK7TOh6R0LcjYo9qKCfMrcs5DVeHDCirzMUj2%2FSd7HV2Pal8xFBunURIDMmnfHx%2BPj%2B%2BACBkrYtCh0ov%2FKSDE8EVmJEmV75Ks28SzkMjmXRIP1ySpX5syZh%2BxSCLcwki0TalL7yV2yHu%2Fe3UlnXSNz785NSA1nAw0pSVi452jJtsKMTtDNbmc6nA3xE2S8xEKoLV%2B6%2BkX9uEgtj1QJNO0ImK0jU9DTa%2BdOAfRMPOunL4GOqUBfKfOZZVsGzJ%2F260%2B6rjuJYgzDGf4AZem6%2F9VjFmFSz3eG34lBNXjMET%2FUEaos4GFEtYQmV0Dqu3MSQzSEsbQCY3eRG5P%2BuqRg2ufGvVpFv1ARUe3gH6x2TyOUmSjNgqEv%2FQTwEolwLOPZ6%2BcwQMawWfY2I7ytL2%2FFf4%2BV2dF3ECe1XEtQQ9flBuc9Qsz4iV5w8JlyX0xsgsUKdOOBTlr8lEMbSGc&X-Amz-Signature=2d56de89a92ca923f9d15f58c2a165b9d0bba086e68504097078df87fff4addd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FH3CPM6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpQ%2BaOb643Aoe%2BrTtf5vRlO0bOe9DmbjfjMNrfL8AoigIgNiFs4lGmsnzmtDD6bcyEu8irI3ZdrjuTzQF9AhHUjbsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCUKHwGC0eKLv0XyircAwkn2egQRe7DXMdSpakg7NHTOC8%2FVUq6SLy%2Fkxs1t1fE60J80sJ0%2Fykybz2OadkH%2FbUeJ%2BLFxUrjmks2z19icsJJRE%2FQJuoRFMla6TscOvr0O2hOLtLlYjTsNKG%2By6bxEBcJ9pHBbedpweGg%2BWSsaOHhrKApW27IdXE5PjVhK5GaYeaH8HQtvP1TnuuzAwtOiHlfFQLWGYKE8zdydgif8vZQxSxwiHGptoERW84eS%2F1vhJbUvv%2Bx9DU6L3vpZKnDQy0KdIxZQFTIV6bLp9LCUuswS%2Ffr7%2BZ3Vqw5Rh8UHFT7jlc5qLjZJy7P0RnqTpvAxPagQC17Q2y4UgRECG5MBPZOlXwn6azrybKgGnMupJ6Ak8YP4%2BbVMi3yGRxH%2BKWMKEQ9dcXT10y%2F68sre7NeBKg%2BnPWB9pycid0pkQn2TqIAzqExMTIyishGYfI%2B5hQes%2FCfuIV0qaRmMu99kHkaZqtKGfBumJpOtEy10gI%2FXQTVWr%2BvR8IyiinKy3xtaEkCA0E%2BMLHCh01VWAOLZn%2Fj%2BdoiuJ38UDBJXPKhKqPUFNfc5uhQvlvTzEW0Bw2IT8cWIpU6EIi5%2Bq%2BYB4nVoonNdtjsc5zFBB%2BucKp6JLSzCThsYYSZx7N4kcskLrtZMOiunL4GOqUBanrVeB8SpOL1%2BafqsqJjUNWNvc0xVC8XSX9PWRt%2FNzQbRQfU7L5YZYmamsKs44y%2Bqv1GKQwQXHC%2FT2fq5s8oMfz8vb7tKcB2w%2Fkem11vo7iyzoxpsLya1MjWf63uf1Crszo853YwXXF3ZoAAxCxft9%2F7Dg5ZKa8pRrQZtBVhtpkdgBp0c2OYoBfEyAvmNVHQkG9Il2YYmQGoOGLcJbsN4%2BfBiwVp&X-Amz-Signature=00ef661a2c1234861ffba9add29c5a164f1ef9aba686be08da23f0b6a24f78da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
