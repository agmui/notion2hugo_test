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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZPLAVUQ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHHeFjSkeKZnAe5%2BY9%2Bw75x%2F75bzhZbkpe2ga1vSZ6SCAiEA4AmhK%2BKXxb%2BcbkEuxta3IetpPan3nYHZV6Ah6bqs67Eq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCZA4y%2BslRLyN%2Fl3LCrcA9yEMY4lnFW8WyNPSrW3%2FGXAMvj5j97B%2B%2FCQkgsoMaOWTd7Qxbc8%2F6DlO7a8It%2FqNkmdXADDBlFR3NlffX7aNN%2FhONiBIecfPh3SocNXWfO1NGIqhToDWYWndvI6NmP8lcOVxQLMliJZN0vQLWJbh3FvaLih5atAL91pTnjpysYSx3WwmlWrXoikDctFxPRPsVzws3FRbDRBJ0wU4hp3D%2BpQejVKxg8FBiFGWBpQq76LpStwDVRIy9NDWT3om2lgg1Ry%2BjW4UlLr1IVk97cJUFY1XfU7BG9ElQuEq8WJ0b50XeOUYBp%2BlGr%2BGcMd0yjprTCR81%2B0m00lgLLyH5aaHpaRnkRs4xSkD923jfPsrI%2BVaX90dls9BLJaRF1vRd%2Bif3zFgbjVaSeSrkmBIIiAa7KLkVKYOT62PqjvvmrhjQ39WSqN43hT35nLEgN1d%2B97sbNDLRBYHLde4C6rIAdglIrMFv7Z6UFP4wGxbpy1nzQENLGa0oTXPnjDyxOUdO4aRUTQdn3xR7KtWP9xqKyIJkisvxomlVfj%2BMM3eI2cX5s43ZA65COdPxYJ4A%2B7NtGGFTpyckx1hiqXoyw7FeQCMvvYQDSODh86Btx8EtldN%2BM%2BfHYKS1Iw4bYKZUZvML%2FwpcMGOqUBmBXk0635CQxXj6mNqeuRgtx6sIELHG5Xc9M3BwpC4%2FiNFs%2BNY%2BD7xjpyxxbeQiwncxki%2FqdIj8FnMMPMAIJc9I6a8jLsmc0pqf5f8jQfn5mUIj2xyywXRBNmRth1an9G0swB7naw12%2Fxh%2Bc8PukfIAsscDJC7M03cIdiE2WS0Io%2BaTgsjQ%2BDfTed6eegENDCcaCgZUSw%2BCikIk%2FIpVU7WML7IBpo&X-Amz-Signature=b191a8c3bed2cc961265a846d36e25a8f2cfa2693beffb0a10ec267eb87cb26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQGHKUF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIG3jdwcZmNUbXz1zYWl6rHHXMLiyTtZCf%2FiwqwrkJ%2FHMAiEAmgInMgVr7NplhBB5Z6v5iOOgZ08daTWd18UpsOK4Yskq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDA2EI8IrJ8%2FOgPkhbircAwbzat6Gu9asYN6d9Eeyv67waRi%2Fgpcg7Sw%2B5V3aBljYZWMDhx6Q7kVdyLtB8zwTtQ9CVAVHwe3X6ERiWtIvucVMo8%2BZp%2FlgQJcHzSXYc76AixAOYn4fOT597Wkz5Kt%2BWhdTjOwKW3jSv1jNm0yL9I8WMX4GnHhS2Y7xqewv4TNLNkUxFJ6PwnynyBapfs7JhD7wUkkC21EO5tQGjwkJ0jbVYt3dDMHw8LuRvb2iju6z%2FAU7jpCjGb0%2FESv7BOUQWBxjIpOIjxaYB6FJN1wr4QOjghtCN5sIxM7ajWw%2FnlgbC4X8MfgfgQvOHt0GXfR6hrxh6MZeBJb4V%2FUTUiWpmED8xzk4z14fE1x1Awbq1xo%2FGrw9lP4L2RXacq6%2By5IN1LD2dADlM8dJjHYDKlwmedUhcuf1XEwnDQGVtLzKFo08N0jhhEUtKNWrskeNMSOmirpyOdwaynQiOvakLidc8gcTbAXyptWJN16no4xhSDDv4NX2r5slVKzB%2F1gy70%2Fxyk1tuvwhFvoKEwnWAcjDv30QDvZ0kVYq2XN8ifkjgSOp76ddjUYtNy2dugh35kh8EmQ2OL%2FjDgpVi0RU1%2BAIAmmf2%2FLQ9Pn93AtVnTkj4vp2gHwUt88b6u7n8%2BWTMObspcMGOqUBaT0z0F1azYjuTIqvQz3oeAJDyGpTWOVcE%2BYm1fZhmnHiG%2FRvuyIcwV%2FZ6voMUPc%2BtIZuZHzbMECbpLMtqPGAEbGrRmX6ASTcmUFZGdGJXkdA5GnYImwknizmKAVJRCOHnRDb3jTObC1jCixt9g8t1zWbUA6vO8u%2FtNEMT71qnU5BbuIP4COUO3Rw%2BCwi5SYNMRZyDdT6pO0URKEzoi5G1ibJCsCB&X-Amz-Signature=853d44d542e2a1fa1a19a5fa3bb479d2a56616536cce9887471e36b8fc356bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
