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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVGU2UI5%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDE4Dh%2FSThpxnW6EqzGwWDJuOxunQwB%2By%2BooZchqAwXXAiEAu89OmTBX1pyTsayaM9qi8z61zmOg%2FDBnbwzHAGMUNs0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnA521gQCP9PnvipyrcA5tKKXislkqOaUX%2B5fHWLYOxjx4fSwJzQKKhjPwKc6Iu0PbfIZ2Fcs8ThaUAK20kpEHldcbqauyyaDvotR1%2BS%2FrauaJHA8YO%2BBZAiJNdZXXKQl7J%2Fl9oEXk6ltEteZmaQlBWJiYI7ni5b%2F4QSYYSHKgiss%2BqPtY2jgnCR1lhI93PYbx8b%2BPSGEMiScymJucnDme7lxJkBKobl4AAxBYe%2BCbVPBJU6wFUKIu%2FrX4evR75ti7TpFSAjcndvBbTXerM7FCGFxDzPOHVk7SZY1ZotZ4U2wt%2BRaGYx7YFR0DDMuvfRa5LEdTxUXFjEkgvJWxjwxfLNycRHaQ2%2FKfYkjW%2BPoh2kqLdFDieNiw69djuVeBkSxVp6Kt3mpxGFNOICYEXwY%2FB0UkMABB5jV9fj2NFnQH0DNZkznEqaKIex6suj9aYRrUmRulzo83pm18I5A1AAPOIcZ2Oo0fn2m2EEH12GmCyuW8tRQ%2BYHtQzDF23TBRUfKOF8Q8yZRKihn8RtAj3jcG9a103p3LU2dOkdTaTwLhKclQnMKNiJi0c%2F%2FwKglRZ3S1Q2BjtDvY9EznrB%2B8j8IhDpmdQBbWJ2FPenedOpB7YajBH6jSpcHg8XEzmLfQh3jQGx%2FfGRWsOMtBFMLyh0cAGOqUBLI0xSV%2BLi741i80EFQ9HI79yowtiqoeGSEDjmTleTlxHudmp0OiTn%2FFijwFTtlETZuPQOyXg3gUrqgQ1xnMe2uL4mHISb4d5nUIIBo0MyrXcmAmKXNpLpwSTYB5AlkDl6zBgsjzXcAXVzxsGW4WH%2BfPOHKJoXsEP0BJ8DnUkMKgq1gPvGiKKuyDDuO0HLTJkb%2BaqpcYrfL%2BTkQNVLTsJ8ZR1lhgW&X-Amz-Signature=7ac684acc1ca991c18a02c0b315db299c62fef545cb0da8858f2eaa8084f36b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFSL5XPL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDrQazAyjWhKMgo8s0jkmugrXlOtjUMjiu4fNMt9FRWbgIhAPwMbe8tOwy%2BHb5lncvW2WNbCPVVmLwc0f7P0JLz6y5rKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzErKZycg7uYB%2BBFpQq3APzWw6jExH6BYwgKLz4gTjKRBzGZedrPuFrA8TW%2FihuU6oiCCFBFVbvBl%2FkG43bzWJivEHIBeREeAxeN5RTi2S15duW634Hr61b%2B8jrXTgaosk7QO2b9QplIyjZlslbUZakCEnIH4carzMUuh%2BWmaKtxKgG%2Bbfxo1K8R3zt8Vrwx%2FK5rWZuuPA3s9RJL%2FCa3bh0k3R8955WalJOprUoZ6C%2Fc0h3E6YhNR8fAQzPdcoqAiQZDUHdR2%2F%2B1vRCFRHpZZBWdb3zwJ6WPoI08snhtiPFt6TnBBcwlSKdlIuApOODDQ9aM9FWVpH6VKPYwVoKdiOoMShaj0fzdWloJPMN4NnimWvdwybo6Zqfo7ATVjiv8JrTV%2F9z284hG1LiZGyKvz3mjjXEHAk%2B8cxEhKjqZKDwRCF%2BlQoNMjZf5Ierue2ZicSUlJBbfdgXD9m27AS4zA86eLMpdwwGp4Mss1B3WijRBgy%2BTkpL4sPA67VX9vOI2diddULdCrBdTDWfWwlAwsbbvIlkUdDlaoMpnxIXsip2tVcl77Yv9AW1VT3SxLhEA8gx6vOVI8Di23cn%2BZFCmCnAGPU4w0GQxzE1wNKUqPtF0qc8KRrCizA9cE%2BKL14hWMNYU5Lx1za30GBmkzCvotHABjqkAXMMJGTQKWplS1ZGYe9MU5I4UoKfkWj46Z%2Bv%2BF73h38%2BJcDdNwwDbnGhb1SKvsTz2k%2BnKPGW9c6MUKa5RkzimFNuBpjs4Altsu9Urg8Bp%2BnjTYMrAsQoZ4lmSHlgiy5KWa8lMroIDGlhl3ICPuM1nH%2F7eLcoWb6TnEwhxL0HpwttCcRydMiKfggCPYE5z9qiOwRQMKLnsXvZaCEwZfHixgHA0APV&X-Amz-Signature=a0e5092a308a2f95a614210216488e2a203324f607c3e80af71fd655efa9a9e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
