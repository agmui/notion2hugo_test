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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PZGUGE5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BC%2B01sOo44uB5W0r%2B5q8lY%2BHztB5P4aeWn%2BLKWceINAiEAmiOgIt7dgWFWvjaAgRM%2BHUZn1xba3AeXJyI0r9N665Aq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLUqcinCYKqsbT1J5CrcA%2BaGM1tfwQTtYusXULrjJmxxLtzjNfWokYJWMyqtdn%2F5wJLLjCWEshRAGBxmyzLE8G4Z%2F5zr1o%2FQXZrnLGDSq3%2B%2BqHzQ3aYG4z72KfY9Jpp3Uzi5BgWEwXORlhFXpX8rHFGZmi5zkrmHN8uXyOKBz3hfjvtguZ5%2BabJ534kBqguaTJXPmkcsRKDYtqKBdeSxPzhFWDnLuv2gJatHSvNayYDiHjkvLeMnAbR%2BGBbbNtIxE5pt3kbvLr3iTKgDoHtfXFs2BmSwCscXxTxDiE2jR7t%2B5RCnHnNLllfUsALOz%2FCjqy7GBnMurXTvEv%2FkB81raaiiUNX15GWaMZ6aqWgDcqyMSqO%2FW3b%2FXrR7rGFmtI3FnACGpGslNtSRZyD7J3lGLKgvwvtKDCfYi1HlDohK4KUE2X3Cona8QaOISfH1QqXQQBCaKhtqe7XWHMgdbqv9TjLcjJHu%2FkDk4UBYfYZwFzipEH7SJNGnq0FqwOUd7sr4lBiz54ygGz4N5Cj0NCeSBBLj3LSLN8hVUyi9ZEj3z3GeKO8CrrDRitg32z%2BpyFQLTKt%2BB3GaHkqvOkH5spL7Rkjx1KVawEXOV7MZRN25c%2FbcVge5uEaz9igILRKS%2FtJFU9OqDv57e7w7A4%2BwMNDQ8MQGOqUBbKdaD%2BkhjGcI0UM7hiJw75Lvl%2FsnumTWqgy71yAcG%2BPgI3WlJ1DKM15kLwLqGAqOBmBk%2FvPQpFc7xRIIScVTiDREfR1DppSjOVxMkLPkWkxAgeiKaC2OMDbckR1Hb6pRzutjvlyMPcEOrF2aP7e1e4AUWiN%2FtsWPS83vn%2BfWu8WaZ1B83F%2BTOqhsIMR7u8gCyYSEoWoNOQ560E9LvRi8P%2FBiKEW%2F&X-Amz-Signature=d0700dc0e67d524bef93f151d72c565692da1c36ce3afae59ac467fa31ae6631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5APOK32%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4eMxiEfk9j2duZjLUhw0QhbT%2BJ0l4zYIdjOvr4zo%2BAAIgQQ7mc%2FTj4%2FoZv4SmNBpj0iMU7ok%2BMWOi1URmp8kZ1AIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDN6T61HZnXwK3xWBvCrcA9lFyeRBZhIytx73onrCJeG1tbidV2d2igC4Qobtp0mWDyfejWXxBW3JBwKtMUcHdfcXMJHj5JIWaCDGA3hTU9kEovhL99Q09SC9GZ6oXKDaPzRRELo9lWGpVg7EPfTxJzQBiW6DL44vfnukU0CwoRauJ88gHXadTjWbR1Zh8HmB1ok2PNjNorMWDpeL14oRawYuw2ebgRIYuU4iSG6IEYJhI26aMZGcruFxc%2FBxgCxoYjwGAkeY6qnhQTXTdEMKG80814z%2B7w6q1fLksaKB86UsXv1rnm5a%2FZCMvvCLaIzZD5euj0fZuqg%2FrQM5mQKH1LvWVmb%2BxiOzpEEn%2FQlSveAU2eU4Gp6niRr1HpxGPpWnGLyEp7Vc0dJ6u9b0h8xYvRESQUblXZPJCG4aTQvK22mGBTdrTZFiR5bi2QYckcYczwV5Yt4OpxrBu%2FzSyGlS%2BcZcujvUBfbCFzna%2Bqb347nsBiXPPvWVJ9BsIkeamujO0PHShvkpe30%2FGJi5A0iBk94pfahwW19D0okV852kIftzWIZM980x%2F%2BEkG4Iz5RcFx29Zge%2FnjaplbY4OKkz3F2ol2LHIXJvUpb50N%2F%2FIzxa9PJQMoI5j7nY6RlopbCRzpYF2IVo9YPkjaMUCMNfQ8MQGOqUBB6SEzyvNKIfH%2BzKOekjW0b7AZz1LffwAxwMzOZ2aRklxjfkdR1jmoH5F%2B4yyTXwfY%2FmdUQuermcBaa4nDJ%2BmMai%2B21eF5t0y8F4AElw1oZkTHX24b4Ji8X1L9LaLbGI66WhvAxkTuGXZCJcYd9D6AcBpLAibDMWGVVnxfbCi%2BUAsAkewpjRJjE2n4e8Nuf%2FmnS87V7Ol0K85HrWndnrliF83318h&X-Amz-Signature=5a2c4421f61d2b1f1f45d8972374eee13d64df0bb8c7f57fdb0c1f2b4a13e82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
