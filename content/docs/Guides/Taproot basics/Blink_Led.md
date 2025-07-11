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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2G6QAJP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8SsRmykW3scNyju6jJOgeyINui7GL2QP0q5%2Fw9N0llAiEAtm9JHFUkT275bW8Ya6YPrRq6VYH1u2XFLUOUsaer5qsqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCdfHvINH4fUaJbNyrcA005P243WezRouSblgQTpMrGOTw20N50JtB3ofG45aY66qDlBXOG0Cno24JsJMhATNMkdqJSN78qpfOr9R3rUSDBEVY7f5L%2Bqrlacl08CYUNi8KSpHc%2BHcj0N1M6qbtSVBWba0lpBc3QR9hxczMqXvBzcrMYcWidsGll7r%2BYmzHD5KR7vcMyK5H%2Btz3PW9xPcSdWkVVRJnodfUx7CdF3qrR55Bk5kZIKMoY1wcyYoFOw%2FJ8194xvv9vH0IPiM3znxpUSnKUEU%2FBbpBZHMRFAFdtO4o3ijt98xq6WKmuPI18lPz0VwnWjCT7gtTWUXylr7aXk%2FKLv1utFqabbKC%2F0Epo4tEoJl5UtBxkBKD4%2FYbmII%2F2ZvUpRkTQWduh%2BDJKqkf9%2FnYpQnROqnfgGR3MN8aGBEuE1RHigyG66nyt8%2FVq7YypuOTWrphPDywSlwRCrMvt98mlJAO%2FH%2FfyPDt%2FLJRpN%2FOX%2BBPpCIt5X1EiDtqHSYnVZszOF9vmYjSGsjWZAa4y%2Fl82%2BHefiFN2ggWeMRAWo8IqNs5XKiyew3LreOCSXjyX1gFpnBUQNmpY0fqfoCIqFU3WnSWQtxxvX8TloAWKahMzk%2Fk%2BYB3ft9daaUQL8C04a0Pueq0RrETRWMNSpxMMGOqUBisu7XBiDq80HHDfnMu5Akb1L9VEyKb9zNIQCDz8nKt4nZxihs8dUgDX%2Fwq36%2BdToh%2BQNnciyhKuZac7IfZ1t6Vh31jiNW%2BVDqA7HZaCi%2BPNC2Wah21%2Ftl%2BGxZbq3PW9TSvwzR1BMid%2FQAPvJb5xk%2FQLikvgxVL9A4DQPKccY4eWv8P7FL7vqyud23fRiK638RsNa7pQxx%2F6xlDqjcWBKR7WTOhV2&X-Amz-Signature=8158aa7650711c111dec55b7ed2bc73c30e59f9793451ed4828a19a0f8c5b9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJ77Z4D%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuCmviTQTtVFufnrkJGJHwPb62RiBqfcvh1QmY2MVHaAiEArv%2F5qqBg3v2XueINC48FOCU5k7lJ3y2elNdnjj27R%2B4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcxKVkK3WRdG67IJSrcA7mSUcml3UyD9PqIMMTjrPvZzEVPujanqTikWrdCA6YoCef4Rf08Qb88OH7mnQIFj3xbRe%2BNKyet0zB0Wxn63vFQqjFF%2FzBEQJUWlnUu5BfFG21U9a2EBtSjlEo5no%2FLw52YnhHuObO4jdwzYzWwB%2FHw0j0%2FVNDwAuTbdJywdW8CAH39t5P83%2BdzQLNPqFBKTiMU0S7oE6TH%2FHPrCDWxsP7eaNB6lS0Yx15VBuGf15HgU8NvQUGM%2BasFk3t13DFkJ3Fm4Jk2OxqxJ%2FBTEyRyHt5ICDENSRFQY5XhOCOBphdud%2BNnKqg2qPFzgofl6pybXBpU0FjvavBmk1RYMqnwN9IxNXCCLbq7iLl6ki3O%2BR3jP1jvXzCZ%2FEzytAI9vjr%2Bn5sAyCp%2Fz6upZDQKdLj7wzVS8weN8cT4zT0X9Uz%2FbFNMToCMtqncj9brGaWRQT52h4OvTvcNaUBeEms%2B%2FFV4yh6vDKpDOu3Xx%2FRIzGNVxOMKnd9wm6Vg4n6qUzdLDjthMje5RvdZA5Zl5G1FYdc8xPigPEgQjnGeiUo9pS%2Bzc0jONNYhit1N9DwCLmdve2fHjjhkDkX2SJJ%2FS0iPqhHDnd0qHFyKjY2R4ngB7DIX7m8WMdHwn%2FSp%2BfUk%2BACIMIGpxMMGOqUBD9XsM7%2Be32Ac3eIPafUbnHoCmm%2FCb%2BLMuIqMLzO1Ca%2FwsXhCEu52hfxaafSEWYBrvimCPoaqSPC%2FsJlqLgmyxvac8qK%2Bsv0wU7WoLAwKpTRTDE7s9af0cGTFrPlvj2DdqTMePrA%2FAbTibmqFXgDv4hmuZ3ulULZgjwKEHSjYCP%2Fp%2FWb%2BK2eO04Pbfsb9smgHD%2BQanSB571JRWfuDZ%2FytpmegTTA7&X-Amz-Signature=78bb41bedfc227b972378e1622af5590c526db8504a5f8f114e8a6f09c594efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
