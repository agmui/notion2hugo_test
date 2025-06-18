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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=2f22dde0e097f48d425f92bc02ed2dccc758a7ef0d2eebdd74a558d45971e28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5ICRNY%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnekAyz8JVk%2F7OYq8wsQP9rTm%2F5QhM80eO6u6LPgHEMAiEAr5mSd86GByi%2FjqFyVsd49yjU7la4BippN99PuNFobtMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy%2Fu5Onm28aeRrPQyrcA6cXVkiOwQ3FF%2FVZhDjeDdsT5DQdqWLobGkDKe7nQN8AsdydG3La38tE17sJCQ4WQ95g8rYCux1UkeKKunUPFnax3gGqlyDgJ8C8C4sGjwgfMZtjUxTUVLOjSfOq0H4%2BQnxyNJ4awBFdimQ1OQ%2B%2Fm3GSp1mPismNienGLBNvWVFhtCd2tloKRY%2BwwHXKyr032N%2B5TpoONQoxIb66alVk%2BRMnwWmq7OvAXyHxVigCqmd8tZLE%2Byg8cktCFXlibpGVdUFYHRIXkpNV5KoC4wND1RhTVPpFgOfA992GiLFqRnmxlQVAL3Oa37VRiktyMuHFW237RDg3oigwObvgAJRl3sr5TVPv5n%2FBrrIF8l8loFBjk2m2%2BlnspJsikqu9iFuwG6BGmtAOBp66RL1TTW2ddLnoqVe%2BR2D02tghcyO2hmD1IMTzC3vUreK88xqHuIeSzkdTFJliLCKF8xqj6XSJ5iTTbqGNxFhttWUDMSxU%2B1usmarKPqryaAoaYg%2FnqvxB3iVqwu3Y2FfWtyt%2BJlaE%2F4j8T%2BxoJcFo5ZYqua6yMp%2BD0ahxW131TWmGjCWFkcryPCOMXdTPl0auQ7jgpeBAQgmcygqK3FCskPVpiU4n33ZVxtuGkTxeR%2F%2BWRZm4MLvjy8IGOqUBpoCfbCSBKtUcCQc4i5U8ga7iLRW9ez5JwyC3DLV2AI%2ByUR31qoRPKuWUp5igkIu3voBmSE1hZLX4F4OhjgA90%2BoK6WywlOM5Uw3MVaSb7Dxlns61KeQ0ia3vbYuH0p6j2I6ZKBCL%2BCNTKu%2BziWnVjwkcnBMm08ohabKd1asU2noYs4zFUlD61npbO7TK3s7Bhy6N7mS9WyPqwlY7%2FTIoSot8vt8x&X-Amz-Signature=5c0fc3edb133f69183dddab71083e1c2b933407ef1aafae6a9cb9dd46336ad5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
