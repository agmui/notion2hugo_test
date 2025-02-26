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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LXYFCM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC3LTba4MCLXtsAlqM%2F4dxF71pKtuQ5BkzuuX7fivHklwIgGcIPKWaJ%2Bm853JHJKTamppScKYB89unkZqc1V58%2B%2FRUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDF3T8i9%2Bh%2FWOd960zCrcA7LxQUdiAN0je3Jq6bXEhxq5ZtzSipMjxZwGKptJYZbRzqbJAmtGpXCz2nVnv09QcaL01L4Suakg0DsHAJcN5q5odCfZwvCmQXo1rrOTiuDk%2Fl%2FLDWBqR%2FsGBejiDRdMuJ5C1nftqNHvO7wDqXs13XqrWQEHfVoRWFCbxMoNGmc3kfIZw1nWAmZ7DdLzAgeq9m36%2FAKynr9k4rsOLrynhMXCY2TNlDWrZcP6i9fPOz%2FmW7lQZMk1wyQGsTAVOxDA2uX7ozquQt7vKzB5eglkco3mXJ%2Bk1IO8Mt1HAHCx3V8WoU1IQn3zl62ocR01owoStEn9KAEhoInohu8gHi7DeKpcaXNZdPRfr3ctTuBTE%2B5g0N7OBo776FnwuMnnMmP5DKq3GiyMsKlDMy0%2FWCkxrmNuGNTMncA8K%2BBjkxUZCDPaiZ08Dfp8ds%2Bo60tLO%2BsIP6YyfDalNaMy1YkTBXTitKa%2F%2BS87TZvSD5UuqzFh5znmFfHb%2FPeMQQ6rn8kjnAk5%2BElib6z3yObHZtudltiiWWEURE6srflGt1u5%2BegvjUKW2kqL4UKbyFmELVsaeM3OIcGhjZk91GC%2BbwKZcchwitbs6vl7ug7nRMyumlFPZZUSckt%2FxYSX%2Fu1vlcOTMMq8%2Bb0GOqUBjko7npLWG4tLvFzWhkyufKCP1RwjrFV1eTQ%2FkQ9dta8FLKBwlkqjwidcBdF6ZX3znEHGcER8zCYmzRG6aX4%2B9CXyW6hriPWfF7NFE1VUcUokVIKxQQQ4nhQ0v8K2Sqha%2FrC7Uin1Qd9VJCPjMycmd%2BG1uyunoXwaMjk6perVOsxM78DTXGtdsF0M6e805C9unbfVtqf48C24Cu9%2BYQaFKKFPnoRK&X-Amz-Signature=deef8254fd73946432accfe575a420b20b7fe2ac53062f254f85179e3f0031d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTA5VX4C%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGXKg88qU8sn90FVe9AnpTdVLzfsDoJgdPEkgJ700xgcAiANFXSq1V3Id2Bi1kzuoJl%2Bb1cjTwMA8u6e4UUTSLOV1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM5dekdl6zL6obt6yUKtwD7LTaejD%2FAjKsioNwjjmjxcykMZFsMIzef3Wej3lBCE7w6CKc481IWtpW0eH3WddxHX7LSY%2FSJqz%2FEK5uY5DAQdI6XIwrSt8ntTc5RiJB6O4BONB3NQIQ7ecL4%2BX68I4jEfB0gzmE4w0CkaQpllgOYuXXh36FUFIUIAKynJLnd%2FqtAtQdPVKvQ6SNyyzoBFmv1zj6Gru9XULo8vgd4kkREOff7hhEH0wfYtnsgJJXQ7jvqNItK%2BpFFgNKqDGVAYHFYaMoUswf1csNSbXXw9v%2FKnaJNet4rSHi6rzBRhxXX9bLZmL8F%2Bd07BgsQJc6ToQwZr35wmOxJbVDi%2Fs0UuQJLDbJTYrMDLT7cMMAGFKfVvMgrPCu5bN7oYpN98cdNMyVjhQNxbVAKfWTwlRj9zbcxOo5J%2BczZfJRtg%2FkXma%2FyGAgaltmUEIZoic6ic23DlyqeGYQOSH%2BxoNrXr87aaAStaZ16jSr9A0qhaI1wPOhKsFeIDk6dTDTXjJ56mIv%2F%2B1GUxUNBn5lAMbfPpHNvUs8RtE7rdFolmo26Vm%2BOpiM27sfldijKkRnbnn0bz2VTteEFBUGzA%2BgRkl6TfKbAZHt2VRL5Y4SpnP7yHB9O%2BCyZnjf%2FczrmeA9ffZR07Uw0bz5vQY6pgECVA578ovAHFYszSk5xSC1WkYwJwHMXa2qowSyMd7j7Yabu%2FK7eNeWQFk14ezZWjxP5O3ZIPHs2T5ymEX%2B9lErokN2k%2F%2FaNogJwfE7aGgpi49WgpNn%2FYLekUwge5sCL26p%2BAoZ29povFUJzZ%2Bfzt9SkzWAEPE2RRA0R3kxXjFhuukcf%2FNiM%2B%2B0jJzI8e0H43B1KWo%2BV9OMJopnWB9H7lsGAnjqdFNU&X-Amz-Signature=d1ab2daaf1ce43052e97001d1c7a06dd5c5beb35c5caae8a6a4d2b8cb7c7f8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
