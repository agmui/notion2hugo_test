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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXYJ3IWK%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCUm7Tf5RG8r7Qh2HazfEfJhFImj1CI78pXyqKygm6MywIgZSEd1mP%2FYcKVyMBIIbp6q6LzPBafsug97qWRE7Yb6QQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFvLpdQIoek7c8VZCSrcA%2By6QstIpzmDWpTaOTcc1HjpJmkNKl91Lw0T4oSmtm8GgPmWQpdtMLd8xbJxYrLL%2Fk4pVkZPxAlBy9%2F3kZgy8D1EHp1Q3MCXVaNFpu5Or77AsKYVxqRmbJm84Y%2BfAaTu3V0IJ85YU5SazHnsgWJfi2bpsltfSuqrwid6KDfi2sjPvZHS%2B%2B5%2FVBtpGkxS0J%2FIbjiN1JegdcpmS6CKKFMfXvfifLSS%2F8mAZUayrrx0fm9nYsBp4AP6KMmKReC2Pf4%2FSF9BvAaqf7SvdetO4Lbm8uAfGyrHaS6B%2FuLxyL%2BZa%2BQdXKB1tvINWMXxu%2FmY0i%2BeTSeZU3MeAQx8i9RanEgtYRZeuYGrVW6GaoH%2FiN3bIMmpbh3Pp%2FXYshdhONEtQMeqw%2BW7Xmd4gyTORAYlDvQ7s%2FM0us24UY%2B48mD6sXIgQKIKMavBAtx%2BYkWT84twDvXreN99zF9TW7Q3ZVMkSsgeB9DePDRoTKFaNLeK9YF7UKy%2FqvE2%2Brj2z28ICDSgomsnliO8NIbUBh0NAEn1unU1bSeG3ENtoZRAAwR5wuoAbHN6LjFUTLC0Rj002fcUuWmYVb3dFMf7BV52C11mF1kYoLtWqTu81cCHJsLGgwQ6Dcrumyq%2FR3%2FUZL%2BmKuYqMKHv1csGOqUBArldegiZwxbWdmvgqQMXS7gF1mWEYJFkGjh2bvHBsQTUOlhdj3R6hUL9MTBG3keI4ZC%2FT3xsnLEuiO47UfYAowF42mDKB81xGw6akHtbaAcL2cHhLsP1pbzY2wGSTX%2FgX10WlavUEZO07%2B9M8QB%2BfC4FYgjpY32CzKTSAW%2FsL%2FhHYJS71GoghQB6ps4puW77EyvEmqa12I4F%2BXPOMcoc0NOOlg2v&X-Amz-Signature=a647ee6f48aa063ee6610d76c2e91c6ed664a738a385a4399008b5c2d507e9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRQVXZV%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDBmQSzDUsuD8YOR5jn4%2F1KErKyZavWZdSTI5x%2FroZEkwIgVKLpcg%2Fs5SauabmzD4nCIPjamEX6lh1rLX6WgbTHpk8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPE0hWflEyFNaoIglCrcA7dLAzG1a2PzI24jqiwOa9Y3M%2F5CeTK1m6lZHkLevXBnVQLUIWTR9dFR9vG3k2PtuWe8pve4IN3BobA4gaAwlDIyjqgNeGhqNQIdkxPDyEZSBXYO%2FpVzKFCFfpW%2B2gZd3a%2BcJOz7O2h4glFQF25b0QFXOiODjs73sH9tnMSdi%2Fr9C3EBJQCeoGJh%2F9cskRM5Q34Yvz8SYHSLaWojC4fxRBSm09oV1y04RU2u3SQxAFicjqLPqhGAHT4Hbs28kUIaDlu7%2BVARWHdu%2BNsiC7Q6UZwmhn3Ue10DZw0rmqZoilGr8BxXngrvzDpkGjg5fEk93ZkTJ6kreJt7Al9LuH0bPEnx8Bxtz6lgDNFAFL5AHOJf0rk%2FeL4EBzMCjUW1Cbt9qS8phe8cHjQOv5ieuGXxfs6zoPuugaXr6wI5Xbro2T4O%2Fi3YDXsCO6a%2BoSZO0tx%2Bxz8qJXyLUZJwIilIkVQgepZ8VIoBPVIFLeEEmE3raiKTvoz8GbG%2F5e5H525e0ZZNAt0H193Ei%2FGbRWc6I6QJlgelgGSIY25X3oMcLPPP16WX9GgbbG0P9kqIiiy5WGhZGJ6dDim%2BouctCYdjgIeEvt8%2B21LGYidEUXwc4GZSB3x%2BkMp5Ke%2B9L1uLfX77MKLv1csGOqUByaE3ZGNe%2FT%2BDX6X27u8PfSCU71HHdmLJ3GBS1Cyt%2Fmr1qRXH7eWC1nNzaVZyy59hl%2FFI0CSbHXZOZBRdL%2ByQVCVyQAp3%2BYuVdwev8WigmN487hejsuxdRaoBEkHtPG5Y7u5KStCKQNHZDkecl%2BrmHe214J%2BXvj3eWxXl2d31vVlFOQFh%2FSRWar%2BFo7PR0XrYdVEpo68yKfekNVO3F%2Fnv7fc3Lh5s&X-Amz-Signature=223066114d99803b6ede94a20ec7526a70b82f8e1077a31b0649205ea0bbc61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
