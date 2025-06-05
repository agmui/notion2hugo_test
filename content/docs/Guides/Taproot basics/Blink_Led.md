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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL7SBNB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCd50%2BB9B2rjqvsFs7ecz1J6iIoK5Xr0T1CKgW2wm7%2FngIhAKeoCknj7kLl6zzhJtt%2F1SAJ3F%2BE9jiqZl67VkGnDgRHKv8DCEgQABoMNjM3NDIzMTgzODA1Igxqwajw%2BVTeBoAG28Aq3ANXner%2B8aBa2KDQcmj0EFm8%2FiQqo2og2RprKGC6nG0li0dqfoILqe5IEHcFxsvfA4Ss0FvtGm%2BykvdUNyUU7o8bbM64Pi97ni5d4ynJNgfxo98GG1IPCgLauuPcmOtzQ0a%2Fv3AxEW29l4qI90Y1bs3frlB4P89nTR91vikwA9h1JMzArbbupf4%2BHXYyfm%2FORBA1cJt1NOUGYfqQtk8gGl%2Fl8QhL7rqlgpRIREbcGhBow8Bmt2rPrA7vnIBUMfCChfRumV%2FztgZv8blwn2MX7Yw9XdI0L65nS9M4MEDHlyi6yDzT%2BXILOL4cYOu3lG3QKW%2BJjHVeilvXrB%2B1Eu%2B8nCqwiFqy4JtWVK7OyNQlAtO4Kj9dAKLDD1deNrUPv5zPiWjWYzwzinDzFMdz2HzH7DX4MaCQcqwt1%2BkbvtgMSp83tjZAO%2Fm3ZPbJWwaMqxi4mREomL7CVNCncKJV%2FHLYaJvp3ZqWtAUjDEuJ74PxpjWHVswf70RYPeacQUBnBFQcsNTbMwWhJgSkZHKHBXJgn2CqhWlm0IUYVSSt2%2FzfsEs%2F4AdzmLxm4oz7Bp%2Fgmytkx1tLUHqq%2Fg4IoszOe%2FfIJ%2FRQ8hI8WmyM8LjugJGUdabw7%2FTTbtF55kqWo5KB9DCr54bCBjqkAe48l%2FMGzxMCS9jAMpacxv0Cn0DN8RURgR2S%2FVh7NBGZdoCgenspzr9PRIAQzkZ2zsXYcGRvzydC3OeA1Uwa652dhHEGFXU71lyx2Rw65zoSdOWnVlE7PnHvkShVzuMGmtCyvogFPvej7gOamOWuhCwSaxJYz1yqdbzGS1zFAUBoGUWbxh7jTeZg%2BkAUQbPFIQLaEquk0bIp2POHRksZB0J5tADw&X-Amz-Signature=6b88265f525163eaca7883330449b91b9f307499dbf546c153499f8c85adfc7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652MQFACJ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDN1842Uc6V9ykxsPzBuK%2B%2FQkSDkf2JXo18J3ZGhjAiZwIhAMyaN4LtCNki%2FhBPzxSnb%2Fxt8h11javQpQFjLIalsTAqKv8DCEgQABoMNjM3NDIzMTgzODA1IgyeSYcLtkmAwHzOChwq3AN1abffPM6Wbs3VMP1aRAQ36iaHWjlPT1gVaQUl2SJgSqvmLwRjkkkNPDpuCV0KuSTpl4%2FBypw2K8UY9kuXTDZm%2FJmQgfuCMjh5%2FA6TKVkmURMavhqRA%2FmOvnEk%2BPPGVWKiF%2Bph6Ko%2FPhvV9QJmnG%2FNOo70ygl45ddMs1DbWbq099VTK1hyTpWWuXz1EliXRykEnjaXTyiuesZ4P4%2F8a28zHzP%2FoCPCf08hyb9iXYgxjbImhBTgPArt9CkzU1C7eTaOOI1h0Epp%2BDfyriB1%2FgguBW700rqtg7Fxf63Fov%2BbMNNVoAY%2F%2FPt%2BCrqz8k4Ia8gVggpLtlOG9cb2WiwLjUlzY5Q0BFRV4VMsxpwhRBLWHGWp%2F2zPsC8u7D%2FQxKNDsEnK%2BFRro0U2z9RiWd%2Fke7luFYCc94WiRoUKPlOsm6br1ykc3sx%2FUmuPsApiSJvKWXEArILYhIVuibHpUSOWfnbjcLAj%2FEpxMhaSvCs8CnMWeSqz4swMxy3RJatAmOGtGLzrFu2F20wEga8djVJWnSR28bH3L8uZPcF%2FGVlKsed1C%2BX2H6dWAdnGgmgxfRI86aUILEmXoq4jodhQi6g8kfoy4ZSsj1Io10SbTrhi1v7ZO6vygNegrAf3PTE3ajCO54bCBjqkAcKjAl4Dw75NQ2R%2FgJCTriifpEVD0pZxN3Grn3wWNdrI6Hi13VQlgYxovp0v1mBciYsOWsB5HVMnrhKpWWyGDEorzeHz9BOrGNOEFysV0dGPFMKPC9nKNdHTa9v9i3lNaJs489ZsQ3yFd6ABt9uZ87tjfeewKvNwbciZwI%2FOo0DJ89ElkmlyQRB6NidRtPpjXA6MD7RCAGG5NFI2zXSGaNRITliS&X-Amz-Signature=ce7eb5bdc5a1806b5b932a4012d86674f418e890c5cc0adbe40b3bf069908f24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
