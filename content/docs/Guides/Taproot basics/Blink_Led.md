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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635H5CKSC%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwCRf5fTNJW9%2B8ls8yb10VouB7Ymh1%2FPURjDXR419LhAiAYXgOWD5vBAegTOhsgmz6J49bY%2BrteHRMhauWv0udDaCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMjoLmbURSjYNFxG8lKtwDAgLsMi%2F4GtPlUVWZpeXQsCl88Fhv5fkvp%2FkPdoBhqPcwLYt3nkFA1cDECz4iaYBiTeWLWcDk2TXVNtWQFoYIw3I5jMlVYbUJLy2rNlDRrB2Zd%2BH9pxmaGEcQmIRCcZ3Xf02vNhGFpULu%2F6vGyne70Yszy4XHCk0ZDT65TicmS8jL1fzivnbYRBEtaLYE2kFJ5GAaQb1lyMs6RKlq7QJia708tnQatr%2FShUV0MO15cM3ofW8Lle5uTIQrawhrKZp3y114OzjxVEpI110uNSNMfGQRYZMHkNEcsHxYddTNJuWg%2BHp4SWdJXETaCZ6Hb9npDUGsWEQyzqnyxwdXf%2Bmdbi8CVlJjGTBEiv2WSNNUCZJOSTgL%2FlA0c4XZzEWIJfWMDU1SYaA4A3BtKC06mNzq8PgYTSVWi5nSnK7bRREKVllE38zJEHRl0gYXBY2bOJx3nF56gcNNwp6Nlyw5vXLY%2FKo7s4d%2BICEmaCIAtE8NwUbNvnOXPsm8jMk5kUgmceyrlrCgIBdr5QGPqYDLvztFJK4Tj2rIxPmvUpzdxpC%2BJDosMMjtywfU3lWFWMeaCcQxsSs%2BOG4IlrdryS2ijDaUWDUDtIeetqxYf%2BRNhaQ9R8ve3iufmbLWjueHHqUw5tyOyQY6pgHK1G2cDAhhlHh6keb2jT9xhNACE8AINBT2hPNbtLYSFRAfLmu0EMxO8h%2FE%2Bb4x7FYbeSJvc54%2B7qKjgXKliTVdB7ZcK9Mh4NlSAUOljnjgnxDFpPiyIeWoaJxwYRvb1dx0YNVD5tNzCGLXzwSFGxkZ4Iym2P9eNKOEIi%2FhJ0qv0LfpJPBbNgWylXR4sDxlUNe%2F4pn%2FAePkIdn4oxNFTc1f6Ig1hoDF&X-Amz-Signature=f1ef0aea2c24aa744577525b9e4ea7f56d0c1d85c587179f2811bbe8eb468dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQVZDVV%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsV6D8uCo7fuVlIns9HML1X2u0rhvqFfuoOjxNWwzrWAiEA4ESoh3WT8JybeuHkuW1iQtIn6ikAImAgVHd3VwvdWcwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPs%2FJjNP8umdNmj4FCrcA%2FH%2FhD%2BuhAOCpvnin%2BJrj5IrqM1CgdigmJeacaBgC5332tRzJvwHs1KP37ESQeC63i48WHVNzXibkuHcc6%2BUZpUvWPGrwknAOp1EnKocFlzTeam0ZWKihbt3%2Fam3ZMEhTuTIyJ1eY%2F8yYhlzZ1NBgUSIy1UgU1thIYvQRM%2B7FHpKU7zX9IQH4wZOUJDUafX9BL7UqKqW64F%2F2Mk5pdPrk9Xrq4oXtsvt5AJ7sL7GE7LlwruMkRegoxR5XVb5aZ%2Ff%2B6l4VfvJwwzVGddtwuxj58v3rWo5LjS%2Fst78df1zsNp8%2BP4%2B7uP7hAqgq7KDcFaJsgV6ttslIwAMWNsptq2VyPlfoT%2BpKrsFSnYdDUha0ylKZ7r2gkEx5A%2FnGkbmnRC06joKL75XEiUKB2%2FTS4dyfZ3WOtfR9mWQIhe2uc12NZVJzPedlv5Mv9zmLsuBzdFkMZOnR7Lf%2F7T%2B8RwTnF9CHl%2BSMyz2V7EDrMgcFG%2BVYEXma9CfiEBvSWpkySMsUUwhejhUnCon%2BHVINqaZv4sklTVTRf8n%2BoWt%2BgdbatwRFxq67JUzxpgH1ebDxZAH5gHFxM14%2FEaiNe7zh3arzFERX0rohbUWCS1jpQx8Vuj01yA%2BRm49Wir3EEGgxyToMMPcjskGOqUBfiqJ4NvUbHr9iT392Ffa1maKbVI0uAkn84HcFPFTjHyhGm6eMVZQ1KzAlLFFnpB0vmoHvaZUJkMVIolJ0XULH4r%2FkD8PP2CxkrqfuC9IVThmgQNSAKi16Sgm32drNc0g258jgco%2B9xb0SkxmGOkQa7TZknUMSMItn0CyCec1NHC96f%2Fvfqk1MSH3MI6ho8MPpqvyRdzjt9Uy%2FtCkJR0sEw3%2Fv6AF&X-Amz-Signature=79d6ab347a1b21b799adfbf25d64bf015ac4258ef27bf20cbaaa2cb7fe040ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
