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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZ57TMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS8AcpPgR5yWk5CcOE3xhTPZh5%2F6FKBx%2FMqNgxRyPJ7AiEA3rIPKkmM16ELFhBijhqkdEF5tK0rABsejGuJH8JMu7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDN78XcQUf1Z2nyMxayrcA8Q8YpeCifmAXXBSMGgsK98VtoMYtESHb6d%2BoHPwQjyqpl1Z0pVAuIpr7Kl%2BFsDBByYeIh%2FDrp9BvvF%2BYTQzp%2Bn6%2F9%2BU6y%2BsyC%2FIEwqe2QcY3cFkKnn8zBojEHJ7FQkKZegVi%2F14MHKxRn9G7tf%2BbTEcH5xZrHPbLp1YnZVzwwpASKze4trMrEYSsx1mrlzlAOxDaLLaQCQ%2F4t7Db8rWNs8hvi1ocGSspJz32cbdOEJtR%2FChSwe5RCLR5pM9ne05P20bVzIV2yGQN7igudYKZ8NLrj08cbteHS76sj%2Bs%2FpTdvDAG%2FrO0YtFuNn8uLd3IYE83dueH%2FEouIHEYMVLQLA5OaZXjyOyYbVmP1mik5xfW%2BFijqQ%2B2WFqS6lsFTLp2SVhuajHPmtAfNldFE%2FJOmWo6L96PwvTyXVkbwoAl3R9Id%2FGGJ9x8yL8O4jI2QpuUVbRkyKPa5BBbBNGu%2FwHYdBa79EjHOVEFN3JaPLOPyFnSthNnG%2F2KQV6YnZJnlUCVlqblBhqwK45p0i1s6vTS7PvctEOJQ6riV1g1l36NayfwZfOJiz7mO%2F1I2XR33Aje0hDP1tzt558Lth6huGJd%2FklmANE18WFKzibZ8K0Q735dIUNnpO%2BQE48i0IwnMOGF8MQGOqUB%2FOCOWgLirYikrWQWBQNxACzxmKXtwROHpQCgE%2FQH4eaeYOjVz4EIjZUXojKB4ysUcFUiZKJdl54ZjOcMpYJpvPwC0TCQGbTfbHpnnzbAUs1coifjVFe%2BMtuk9eqOL%2B7FwDakxagvpDugi%2FYY2173NqxNnfP08yTFsGz3CrGa%2BFpFlhHvEr8a7mgTIu7C7ehGqmb7DdCR4tYWylBw4aO21oqLUEn3&X-Amz-Signature=7a26b962fd65b1df45002faf0c2b0b6d60f3c4a8be7c8486d2757e102970b242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKM3TNJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCueWW7VacIQBR4KGtYCVrG4LewEYwFLkr2YaCegLD%2FrAIgB4OLuU44a%2Bm9LyyvSwEStrGCU%2BBog4vg%2BGO%2FKq9fbv4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCNdcXLgD9dtb5qE%2FSrcAyvlx%2BIfqDSRovt7iajd%2FNscbqPrWNRi2Aj9xNoVnUmY50ffP9Gd%2BOJp%2Bd3an19PQuTJwiZ%2Fp4K8MT7lvR3DRu74rolIdJEXPJ4zxBONzUzzYMvmU8mKxZak2si%2FpUd7iKuVPqarufDTNmxuVWNXbIzbn8Tlrk7bE%2F4v5OW1pNm2xO1KoPVi%2BEpylZJj7VFo25Q3wg6Dm2fRdLZvmVaLLYXrUJGwo1%2FV3%2FIBwKTs5Cc%2Bd3nCS7j8130orJqXbZScc0c%2BklsZXIZfatWxNt2tET5gpwLGxTRIjWWokbKlYHzDslr%2BLd9W6f9Uu3eATZR5%2B8foOT7eyoUo1%2FgMGfBoujZGoA6%2FcG1dlYzXKlc2CCwYoPnvfaKHLfzDks6Ymsz6o7eWSJiQ4Z%2B%2BLpLH1XqTCQAn%2FUXIsapWuXRQeYxGxq07TfvAF42UKJZc1JvIqzHWTkqsAtjGIOgUsMM%2FvAnxfPypAZtwSjNrUFGGXzjMYiMHeiVvEVKiEz%2BgGDcpRAI42fEt2ImzYRic%2BCDAaakRZosXqW7uH3Leh5c%2BfDD6FX9JhIrnwZzjqVrUV5jI4paeBU56Dw%2BoFYmiHXYdODuSae%2B4YsWVui7Q3JjfoDNRwt9wfIaK0hECeiwTeaNmMOmF8MQGOqUBRfT0iRRUUQOE9YYinsRDsa44YAwLZ3TGUweBwsvx9JxDqkK3jUdIgOBDRQkTLl6ez1IrG7acSpeq8HB4NhVzQuxyJtiHaXn5Vz3BXO2Tuc7Ua%2FOGPVaNw8dZyCWR252DtLa2T2CWDQXdmmpNvt4RiRY%2Fc5d8kwuQgW6yXduIFLltQ3S6YZFEvaaBdrTWdZosC4E%2F%2B6V0sExn3Gdm2txBP9VrmybY&X-Amz-Signature=9459c12c1f15e9c0c5407a69c0c159c0a14140e0601b66181cf354b922bba3dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
