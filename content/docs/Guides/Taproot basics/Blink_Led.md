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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632BEYPSN%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD9p9D%2BTPr5J1qtqiaMaQyjO2izRs0E55SVV1PiX%2F93AiBqJDvhKz29y01G7NXbAZWXEAyO3MxCKRlsUfnb8C4hGyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4iYqxRcatkyDO2j9KtwDJH9YJPu%2FkyIYv6FbL85DqHHnEmC7GFc0B7%2FsaEuidgEQKFySckLSPha8EmDaKb8%2FDQ3sCUpd0ODe4%2FmWmaajcD9iVoBSkL1sU%2BVy94C%2FERIWyQpVFvAJUO5wXhSLQ1ttrDpGsSwSxJ6b0FxlJxuXT58JhxZ5utrLfSJVSIQyD7%2Bg4MkPdRKzkFS7liCBqLIhTB0%2BBnpTJE1%2B8lmX7r8469iQ%2BjySOW6UHWDmztjUv7pcfs5LmG1NQd7GuDftulU8Rfva7%2BVo2eUJjqVxhEgDQ0Z2joAydRKgQhpOPiZe8e15SgRN1Dg%2BO4pl%2BbS0Y9rdhEPHGeOz338ujLIyVzQ02Q%2FP5JJVCtvdcmOBMAgs%2BuwEYcpENb9Ry7qqfAImUzQu89yH8%2FDtTc%2FlQAyOHuG1Mio6RxFKYqQRkTOSLpoi6i0hTekO%2FvS%2BmHuntRYl7G0FWbb2wOXLnLX5FiCM2FuLIcmm9CetjgtPkxkGqkhcEjPgQ0oy9L3jcK9FngWiwEI14eSBmJovZKz9Ls8wiUNM9oET0CL99ss6QVKqeqTHx22I3aHhxXJEoL%2BPHGoKLNVCN3%2FH1UgkKd2lsgMQV8%2BLvexZ5KglRYymZ8iRr9GUuggEegfyzN1UNa4DY2owqZ6C0gY6pgHF9cOgob7ZJ9Xz4t64Ff1jOFW5ax%2Fv7GWIChzwu8s82eiOb1FBGlhBYKaRME0ejElcB2ObrB%2FDW9DMyFtBNU%2FrTz7jaQzPsb%2B6Vb2ShE8jVddhnCZT2LvyHKrtG6KwfEl578jJhbmN4bRDlUzXNi775fi4i14vjp51L5v19YXx0Um%2F43bv8mEWNxolVm0gEd7paD6QNECTY2yUpyGD%2FjK1N0rQ9AzE&X-Amz-Signature=3dafe9c4c3a4255933222c91f3e0c1cbee46c014ed7637cfd70cd1c44689df8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5VLHQZM%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDk4LbmNL7fw1Q26%2BozFkbpsnW8n1FRLn0vf4U%2FYzk0oAiEAvGUKW0BE8YG5VXl2fW9CzYYkNSgzAHieB5iuEEP2MqsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBerrFIQk4RKOPCfESrcAwEQajC261IRKQ94587eCa4Vkmv6y7VMLjJYghkePvjeTM%2FZxwTKODZK%2BUDrEJs19rwbNx0IiObYxQYFQ5up6LWMkI3czv%2F25wYuMgAL3JsL%2F4zMKSYHfyyZqpRihxYWb2SMPwLUEGTj3bW%2BhSeuLLfGLlQHlPprbCpKWPZb1I%2FYCaNZnIdxS3559c3hOe3EhsTJ9CHu99jigkpGtZ1uPWz%2BbcfMmGWEcsdVvyM%2Fcq1sfsicmAWy5MtEp6BHhBZbyr2rGfWxmWACe0fM5rsDfb%2F42zv%2B0UjYdAEeTpvftl2ZWKrICkLMAGP9o6JU7aKok1VcQnSl3blOhaythJmiyivZIjdYXBcdeRCbdAo8RKbXc5S%2FYSHgc7v4arpKvLencDLGbY7WzGWOcwsGjQzbShV3tBMUHG8dgDBiZmYtShcfHVoh1p1V7xqT9Uv2UrRjlNUqMWj8rinRc7%2FguOq%2Bw8M0QZAWnRpqobWnD0jf8fevh09jCDfOtTwBLPCT32GAQGZ4RwL7hvH5SyZer7Mi2%2F1EvLOjq7%2BrIAwOvlZSCd2xKDlo%2FFzxsZwGhgCUKuuxnhj79cu5kK7FywSjWzPwz4k5qVRlfcYC4edcR12jMJfFPx2rB7lp27KAoEfRMJOggtIGOqUBZ%2BFRF0WgUCSSZcQxYkZOXzw0UvZeSmFW0d%2FNVkrckTiP2avkvMmeMZq5%2B9FivdS2lsXMK5MkRL2gWAx9dmmkdXFcxtg6byj7hRExfApcoadgQgr%2Bva3gJGfpRseh9JWg0yO7%2BEmC7QlNl4oph7OT2eONqESWBYA46m74TmV0Bit6o0eClUNbQB50Pc3ZUHLYS7HQ0OHl4jcgNMjFaP7PeZRq%2BPop&X-Amz-Signature=3eebebc839a92adf3a4d14440c590e218e586f8f2ed326a50aaea1b3f18c9978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
