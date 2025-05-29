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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FANH2E%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpYi5iYQ43N0vPweN0A%2FVjVk5xRZLXAfR9NPbZwEG%2F7AIhAKEooNwOLrH%2FimGFkdJoQ0O%2FaoRgr6U%2BSgrh0i%2FdXk%2F%2FKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkLdGVTJjHXEDEEmwq3AMYY822mEhts08SL%2FN71OSytad%2BHfwNVBvtIXZjG4%2BgLqvpvph%2F6KjBTe5ZtY8uG0Ek8r7DAHy1IhW8cOnELxkuYbPzJabhP6AtpA8jxq3Y9wmN19D4Dm36kTUuLiEF5GW7JX4pjHpfVdBcjBNIbm3YWMrSZtfa54r8t9fl%2B3uup7PDvwSC3rI4u3hTNTSeSD%2Bjx8OZcgX3yaFxFpSFEPjF3t5bdOkufwHjl3xppirTEzWDxjr5vN0dMib0RdcuJK1Eoao7HYhi1pnprm0D7cZLGfPuTFYh4e01w07Nci4Vf1LtJGjEylTqJCURVfIw8%2BMD8Xq5kUHR8O7DYWQ8o2vbvkVgv13I%2F8GeurtpeUac%2B3sGvxuRe8idOhD0h7xJwoP%2BhnKdu2Dw674sNNZNHEa280FOHW%2Br4yDPZkXo9wmYVwpIpiQxalsm53IloWcMCt57WoJTVm6ZqWZAypcKl9EEu6Riq823uJDOPxejh9bSYyPcOlPgeSigMQtRDid9SgjUyyTEkLQkNkiH3EbCcfcbQhvaK90mUvOP9JCXNICD4tkZ9GXyOrDzMs9n4S3McSFemHeaqa4aS9QDlOwjT3Zkcbqobj%2Bkn1sav7H8tvMiLiR1gO8X15ASO7PtXTDLsuHBBjqkAZ4kNFUNGhU9fjj3ctX108X0Dq3bW1YPGSwpDNSB6aVuU3k00EaM3Joj7ROEdwtL0kP50FU47luWoOd%2B2JoT%2FaK6w5QbnZliZiCzP6DjPn%2Fk6UWdtssgd9QAPbsEJtuebLdt%2B9L3tBqUdmPzWc1oRB2KO2tIuo%2BRL%2FduL8miyCYhf445ZoA7GRN18m%2BsgtPSKAep7vA3WZzDAJyJr2Ej0P9K%2BJUh&X-Amz-Signature=c7d699e1732d55b31dbb3dab29dc9b6f7523bc95a9dc8b0577d2a54b15b6bc57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JPLTVUK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMmBgxhFxcu8KuX5n%2Bae4jevWMo2Mkt4TcgY3B7I%2BmogIgC1XwhWEOKKGqZ4qKnwlynf3kdVPWG0N6zHUY9eKeXzwqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHg16k4X%2BvYg7C0ISrcA6c7yNViTZ62zXQVqZJNetw5vI3xI5wQLaMy7HiD7YR0yvt2107i6cuVkYQrtrE%2FejFUEWdlVHljk%2Bm1qoDnv3UEDEWjAwIx4R8frD%2FBevVAKHF8N6p8biL%2FwgHoUMhXgtMmHgudeQbdtjRD%2FcWz%2BwCDz9%2BZKfuYBhJgFZOK87%2FyVC84eIoCN935HzxqVIQ%2FErBSpYCwdgan9vEZeq8nJcUflar1yGOQUAzGqGkSVQTLxsEne75twV23AUEKeJrnGihHer6nhPPmF2w6UB09OvYEdVcrsbcvjYmukmJLORqqGjH%2FYFanHJEh8BwmjHp28o466PU0R%2FdxdrND99FPytzvoqhuD%2FqVTdV%2FYWEMh0M9Ejgjf%2BetsMicJ23OT7z86W9HKSnztHz2s4%2FIF9q274sivbXEJ%2FsfjSOGPNGlvzBxNoLDMNq498E5qIpBeQCM6444HCngRX8vAZtG9n7Ac%2BiqHD9U7zpFTergmTLxI68vxRN2VoVAgrPCL4zxoVrywNZJ5pxbZxyhjnY0kYsUG%2B0xnXEXgo20SI8%2BfXvGAvUpKpOpQ%2FqFcJAbrMqIX2WfuxvmJ3bCQAjk17nxXm74jInk9lfkt4daDtqEi5G%2F%2F2HRGFeuZRNR6JTxN2WDMISy4cEGOqUBxCc6ZupZhaHjEgedoy72Lpd3KqL2cqxUUB8gfoZKvMosPZuhMkFt7oBUdSGN2i9pCSmOtOiu6EAW7phv1re6%2FkpNgRIgDQ0XCCFToKyuOfTUOa31tq%2B1UOzv1rfQLdGlI%2FlyXmqJqVK86E11DP3E434WVruSqC1jWBjiGHeWXZ6A6BwJ%2FfXHmF5uRMQdQftBFhGYS0HdVlu%2Flc6PFNOgdqXfJVSu&X-Amz-Signature=0092c53178a77d53eeb2423df3042578f9ab4c7d73985b82b82453a7cb909d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
