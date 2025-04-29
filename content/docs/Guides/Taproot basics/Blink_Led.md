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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB4PWHQR%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUbnM51KDI5Qyv%2BjVC89Ol9HrdmWMEASRCPonBtnTfOAiEAhkcHG8l4oXKgSdYqfIlf%2Ft%2BpVBJ0NhMoUgGC8%2F8%2B494qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHwEOBQc1gdBzh0HCrcAyDBrzdQBshUYrUQV9TINbYzVb1O5oyj4OOef55I7D96%2FkljjAopk1hmeKpOwcyHqm4ZWlU%2Ftux2NiFskwByB%2FHwoTCKqspuwpQG5K4DvYFKRDfUi1OBeja%2FFgeqcvZK5m6%2F%2FObYSvpahJcE4Wgm0CMxwJCwnJNWRZywcCIPj%2BeUVT3IcEDFxpDsBbxj%2FVNzCxxm0kH5BeRvp7MFe%2FX2s7a5P4W5mbV3WQ4QeQxCaLUOEwVPLcQit4asWTpcF%2FhOsyy18vb4dCS09lcWOn8T0KB0bauIqodehRAzmnce2l1r6N5XTwYJtaUZ0rGorb9ix3EcBBCp2LGyfYN6BawHQSuE1Z8KMdH3xXeUNjFEqndV4W7gaTXGRGVcca66BzphFMUVn%2FU%2Ft5gLyD6pNwuWW5LNAG%2BcbGAuKQims9gRq5kujmfoFdqUiPHkPvb56BpQj1CmMbjqkSHgSdSL3TtXB18SfLf0HFgFfYMu5udWyJklFI45SLAcGu0glUuVwJ5jxxqfwDmk8kwu0gf3M6wRvyrkCwLwsiSoxfyaWw7kiLGsh5T8PPXQ61u1jhrC2QE58P7ZB79nQtcDA8iz1bGqJWNze4Z%2BtUbof94S3CkKbgFn6xipV6LWSBMjqRMdMLCawcAGOqUBbwRi05BwfK0ov1ZShNDqWABlXfkYquwbx2Lt87H767dlmd1b8ZFMzaMwVWXHqin3sHTfnz5n%2BuaI4WsxsiovihWR6UG0k8HbqqnWmsdk%2BaIhascMtkF6QpdP6ladkXzGmlDvg9d2Gmi8MisUxORmG5kDfBZL%2Bhp2tbUZnWSoFbPgsGL1OVqJF2c7uQJdFuAMdl7EvNBV4MfpT2hUSxFmWbQ%2BZjT2&X-Amz-Signature=4619d26098895f46c3088aadcfad13ced1c2a66117b2703f1731cdac0177a14d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52TE3SR%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo6%2F93YLOY%2F7RdJJx9mkG1EifxX9hJbeIWtIcnVfAJawIgY0F2WP2f8QHpp3ZWiRZMbaBcOOzirlSZ%2B301h9GV7ZQqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZ0ApDXjpg%2ByH9yayrcA1WGZ6rNH8Nah3vc8fK368idvTARZRAgSeJSjcxsXJM4ykESTEaxPvofb9cL7G1gjfcSIMvwzUic3WmRJq1COlTX7iZNnHvf3G1C5IgqOrPrOm5QAnkPZYaRL1Z8gcfRASWf9J1pJu55bW3NQCCYynJ7JCYqsC422Sg8T19yvaPn6FxMI3W42em6wB62mmr8cjOhP5MuMEt%2Fv4PsnuPz1zrMiKjR6k%2BbVhav4orlEUOdWy1Ng7qO6XejwcORgP3TB%2FwJ3XmThogYhuyhxoZb5eJ%2Fd3gkMv0Ci%2BVFbElSkxhVvOHEYmaARNjT7GbqFwFmtxTLBMqUhGK7BKL98qOOeJqbKfLudYVmxQov8UDdMh%2Fa1vk2tYZDdi%2BhkIGUXP51pqwPHoC%2Bvp36KFdFckRR%2BME5j0VXQmPv9JfxpAEF4Cp8xsXOMICkp7HDZSCkM1kL4Pjbylcixz%2BS%2BgZUQsLTf%2BRiG8zWeSNM1h3U1D%2BbQe555CCYNRf0%2FGtE7eU4ITxoo6jUuxXu%2F46e8CAJqEcze%2B2HTyn6O00AeACQc4MfwuT0fSOJizyPYPhJLjnI1a6iIx5fFoUb8%2FI5ReDmFBWQ%2BFm4IUkKz%2FdGpCv05CAeeHaJobqo9PncdHm08Xv8MJiawcAGOqUBxsrtnS39q6FmPfnpiPI8f56HDkTgjtJZk5f%2FZZoYm8NFMyAxAvsxhiQMFxuU%2FwilpLMNoBTV2%2Br2FHCbK6sCP%2BkUCMmXQcMo0DEeU0KPAwil3tPWYvFa2kLO61VkEEoXXcN7pBxn046UOEVwrbiPvRZUjlfgV4LRAfVn%2FkzZjk79IIa4HnWmgzOoMvQLf4bV8h%2BxRMZ%2FNLxmyVCpenGT5zngy8I4&X-Amz-Signature=bea8039e54c4e60485af904caec5bae82b3f2ac123ac4659ecd2bf432e1c902b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
