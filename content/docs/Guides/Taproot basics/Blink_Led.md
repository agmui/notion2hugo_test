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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYT73XWC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICwVh2gNVdC1uECeyf2leC5HRPvvCnLwiiLxluXaBEqtAiEA2caQfhxgLRfkExPtbJe9QokEwJItvfNVtnIcjeM6swQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQFSJEoAJfN7vkHzircA8WPKyWKGoIblWN2cUViJkrFG7Z%2F6qp1AE7of9d7UzCnQA%2Fk7uIgcMdLsFD%2B7r%2FuKC%2FJjQzerEr%2FG415EAuex%2BtpefDarjz5EuDk7bNxKLue6oUdbpTY8MfzSjzdOc8UO1oD%2Bs8UL8IOUe3DlsLKMJ49Cy%2BqNWZeuwj%2B2dTsc%2BVecINVWxrl%2FayaTEmNqEC1qDWI9HefxYWk7dLaX%2Fs1HWpNHh0lHe%2Bh97oihGPgx5Pdso2GTcS%2B1%2BiulAXOSIvW0i9IvugAO%2BVRrtua4tlYQ%2BGce0q7pR9%2BbMoDBjZpJfKR9P%2BF92TFtYKsiHegqmqUadXre86598cSZ540rhRvSaDWExiAlhq8Wb6oL8QU43ORQupdOYObm0OSmvkMd8gmPf1bbU3ikoQiCVmIyrcxLCnLPxqSpGdUSLNiYbTpTFbwFGPf%2F%2ByVOOCkiZJzWhkudo0gZmcPRxYmC3sGB4%2BZ4NXczxc0Bax8OuLjCEhL6zKyhrLkS18eY%2B3qg2GdU9vDJ5Baq1uSbHjHhcoA%2BvGC%2FDFWl6A0X%2Fp7slpscepliPowVT%2BarExYswUWJwGH%2BJL3uLbryv3t6oyAlXLj5rIyBryduzxbpXSKtEGDkTifZQ9X3fSe88CEzu48KCTQMJvt%2BcEGOqUBhiRbZ%2BqIHUaFmq%2BidlhQG3t%2Bc9WoMyhPy6eCu%2FyEPH3viR%2BB%2FxOBsC72U2bVSIyuFRewB9W831RMbRf3Nk2K%2FD5xyAZLMcynhR9p77GFcyYm9l%2By6C6lSnEiUoYiM79LlY75RxvCDOkbhWpGPTLVbb7t0bCLuuspCkL5jF0lhd%2F7xv%2FRMMG6cTV26F9%2BH5ZuXb9d8TlbKqWO793Qv1AlAXuXy4IA&X-Amz-Signature=f28e687ff5a491368a0aec090233c41f07b47dd53b1e750dcbffc2c8fe4b85e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BCTDGAY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFLNJ3xcd0UQ8UOUPntwmCN6t96gooyYdJWmn5AOlTZcAiBvZv37xpJ5OW%2F9tFMO9llplfbAVNPyxBTwcCvz8OCUuiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Z6wHNs2o8z707H%2FKtwDk10VRnSHVs3hdN11F4%2FcJ4fDz%2FCbMTIwp2XKPmEikG3ObfnKLNfeqQJYXfq%2FDW15Ur7PlCdDmGEoQx6I4ZnC5PbPSL2zXTnvGNnqAAsGYoiTleG4QK4L%2FCrl5QYwEvCUnqH8DwGxQEHALbMH0pPVg7uKjDBEib9KO1sgWhD%2B6%2FLXta3t6rGxWprnG9Posmn7fWF33som39n5OB8NVPdWWTuR2RtrzyK7A%2BPwwWGXozM0hjH0PAid6Z2uNaZVgW7Yep4qf9sTXf0vx%2FfFE%2FyMBraJ8ShSHeX%2FxdJ6%2FiVl0LpwDfiqsGVBBg3E30gMRRdbjw9PeO1FF4aX7CNF4syiLkN%2BatYqjntWfj26wVfjyoetSJmncDd1zIiQmvC5IH%2BNW7Wj7nw%2FORfFNuBYE9ClekHZw%2FnDtInaSDyFbMm3ErbEjmAxIJZVv8lcFrHK%2FztvYDiKKJa2NrYglTnMEvhZJxwzC%2FZcfyL6FNkTBv%2FdgkSjCrKBABF4EDBg17M8UultKpdWCPOz8D2EtwO7NZSzDp2NrdxH28CkOKwCr18GW%2Bx645dh9QYgq%2Fep6OmpGv%2Foqit3c3FTTmQKYY7b%2BxFiknwFakNSG9i8hL0YHNvLto%2FYllJDfnqa1qZvswkwqcX5wQY6pgEMcc%2BDc0VbXsbLyDFA2SxOD1BSlAxoNlBhJGnWf7UEgWkC7x0nn20SgR1cpaH0eTt9jEaHLs%2FR5446fuvzUgLxusjOHIuk7cRdbJZ2IrOuQXW5GMM5fMFzACYxoOjHcgKdOENgYl%2BHCtmJDq5MKN%2BjHan7RrgkzncyO4GVUosDcBBIcq5WUmdrl5IrSRkdcpg%2BwzR0Mh3jbwYvi3O7pn3Pvn%2FyJkw5&X-Amz-Signature=6ac0c0e7a0804b229272d29e7c8274347521e9cc3ba8ca2d1ab51c9198eb15d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
