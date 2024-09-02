---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-09-02T12:56:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-09-02T12:56:00.000Z"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T190130Z&X-Amz-Expires=3600&X-Amz-Signature=7f0a8582f1e27b805baa27524ef2d0857150ad7321fd86bb76c8866a2751de6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T190131Z&X-Amz-Expires=3600&X-Amz-Signature=4b20a2b04fce1f2bbf4a3eca9356b3cc3a63eba51aea8a824d6b26941a7537f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

```cpp
Drivers *drivers = DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // intalize the whole board
drivers->leds.init();    // initalize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, True);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, False);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"

int main()
{
    src::Drivers *drivers = src::DoNotUse_getDrivers();

    Board::initialize();
    drivers->leds.init();

    while (1)
    {

        modm::delay_ms(500);	                             // sleep
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        printf("LED switched on!\n");
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
        printf("LED switched off!\\n");

    }
    return 0;
}

```
