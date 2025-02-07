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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGL4ICS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCj04%2FCidwvYunJC5tP4h4uySEfyLovnafVul8EcbM8AAIhALkvqA1u8fDxF14RXSufKXKjjBDS0jHMFLSkCLoJ3jMSKv8DCHEQABoMNjM3NDIzMTgzODA1Igwbx74eBBxg0m6uqHwq3AN7Nod7FQBgiEWiN5e0CWm07BNEsf1K7vluJ0sBg86hTw%2B6HJYStdZhRwAW%2B3M188qhlUu%2BM8hCD80e%2FjCU%2B6KTog9kY4QWJ5NbRgDFtvfTuE67X2rQWf%2FXc3hjiTrS05cAoMyZE0Mg3ZyTkc%2B4GkqpNeuSnqtT%2Fd2ME9RUOuxc4rRhqovWCBHMstpWVD%2Br8xf9z07ULRpo8YyZySyQCnx%2BRRvM48j8%2FyLOoGdpZLzW%2F2bNbWIvZ2Op72zVSbTNnmhMxpaXzx4Wf81W%2Fwuo%2F2xLaxthz9SmcrU%2BKmfYI52EJLY9yUw2HSIvwHvz82yTWF9rbe75EEA28XvRIyolsCJZ9lkfYA0cxKBEtXdcjqA%2BNjChgdlPKHMhA5aC0sXHj2UPKdWbdjZXtOVbk9%2FgdZP1LHbbMk8RsinZvLXKKJiXQXlUf3Pjpn5pbuYY5LUmbNSdRZEENTB%2B17dfV9LQqTHuCojOXJWRPkcN%2FXWWnZwljXv0K%2Bs7kku%2BqRIU9Qdi5z35IyVPdnVnaXWPwRta8lzIdBriv8h%2BiunpoQj0fiKPZ9fIh1ZjRTMBQWBV14UdMC%2F4pJ9oNInfL%2FAHnPxRWdfeFJwgnAS6thYlw78zNsUsL1JflaDSbuTqZzSJDzDq%2Bpa9BjqkAdqzZQB3XKQqMdFLwUIMyEVlCWt6rqu3Tntv4lWCrReoRLiJIMUm%2BwD0splEfv%2BC6QzvZ%2F4bJxrqrRaZJXn%2FJrxxfwrJ6XW5M%2FraCrLKhvnEEtsR%2Bss23F1pAaMP7w1zQ3JORfGgJ3gCCLSNBODSvud3Xs3rL6%2FAhzWQr0cJdR8yTyAie2xeDzKjVirydRtAvY1K%2FzQvucxtfU3x4jerx5bYpZ2i&X-Amz-Signature=86c9e0c0418ac0396c5d980fb5ef95dda123ec50ab6e3590f3d7a443a49c4de8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XAHCQNQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCBln%2FOYGMaDiTL6k5YcgQm%2BM9No%2FAOH9jGu9B%2BPmjLegIhAKAxWhQDIoE6aAw6QIpbRN71HsL5fHcoMMugDn9QRuILKv8DCHEQABoMNjM3NDIzMTgzODA1IgzgfmyY61PTWh3si9sq3APCyT6YjyTtDYpQV4IXYMMmSXRHJK8%2FW8C9UrsVNH34HdVmQQz0eoPt0c%2F17gQ2mYY1eDRaZyds015pF5Rrq7Ff%2FAz15l3%2FSrSxq2Ytb4qsy0wxkOb4ntx25LZhpvsGkV2Akpew%2BcUfnI7308sr12BFhooN23O6A%2FJKWe8WjHUligrejQ4JOOEGoYqLlR%2F0FIBRsfD0e9uqwp%2Ffm1eN3SHREIDkGaTa53fHb78iJM%2BfLBfhD4LD3qOoxR377wv4AdqPbtRVIEdDoLjsIUICuddKN4igS8LEkjfHXdhLySJMJYHQL8M3diqkBm%2FNBfiPpNC2IV28960Hkxq1mVFVwp3Cp0idebAL2PojJwdejb0ll5RJtu8lDRWV75p3CQfdAuNo7YbFmURNISdyaKftQHvdRgXRKuOqDetPczm15SEIfCYNS2d2tbMYAkfmOSWtpF01F%2BGz5Xn0o517DhewDVOGotaeg3ibSBenWmMgo8%2F6wzxiPopf4morg42jXR4jAIEGInff1HnrlFK9bc0ND3gQoE9y1uEp59%2F93vWpljUB0HsR8FhtVHm6oUISB5eevIRl%2Bks1BUfK0%2BjPLncYTN%2B%2BWQPgumt2h%2B8mjAU9TKP%2BNKHTc%2FmvZtXK%2F8xc7DDv%2Bpa9BjqkAYjrIhINV4M8QXUO0uJ1XPUXlOxKnEiXsMszWC4oALTCuvnmt%2BhdM4rDvKYxMQW60YlEK%2BvgMKc2YjFkohvxbqd9ZY1LVnBEYCOZL%2F31yOKBe%2FmHcag6%2FWzTa4OqW9yoiU1RGLA3TKBJnKSF6ixTMemke5Zt6Ns0IQJmp92btSMmIJ1l8qVI98lwV%2BPIMerfngycRXmCCgxGcadcZqupZtwS9inv&X-Amz-Signature=4e0ca1ec0ae3d2e03261205dae70b3ed24a4c50ab7346b20a0531ebca7ce6d83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
