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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OXXP5Z4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDZ%2BTb9dczBml8O6PVZRiQafd%2F4SIYQt%2B6Ba%2F%2BMGIkx0AIgbZ0iyc%2BHiUEfq3wZJqz3MtmUUCW%2BUktyt5C96cLjsPkq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDq%2F491027KOCguizSrcAyZL6K8m74%2BggH3Ed1n6k090FG2z%2BWK6qkx8uOtedtVkV44OcGo4SuHEsUyH8NrJjGsbREuQt4KTC5JLjGdi1DItNGBfzotoUJ8cfCcZdngSzEb5yiywykeFPNkU%2FqStD%2BmvB51z79P5WViueYMMKDx9h%2Bb8hFiuuGegiPHvP9Qqekj6YYkEhUXQLSX8hkp9VkpK7QKUMJBg7%2FBbIK46u553B0j5hO9BVUD7fkIdg97GEed8yKnhPm8dKNZ4QbhvaOBx4hKDJx6IyAswZwMZJ9uzkhmVexT6Ri0eeqdesklRUCAnsw1FBIBvDmxvHeODPEafITsTi5JmkCpO0v2g6%2FFj%2FanIR%2Fv6HDTVdkAaOgnl4sjfhH5JxirUNPJZmIrPzHkw0lRw5OMmpUSnAc9%2Ba55APRzqIgFZlau16nQVV9NzT2jk%2Bk6m%2FeAbsZdvlLP5FMaaTbrIEXEK7sy432Qxp340%2F9RZBOl%2Fg852hGDYHV57eajl6selN7nIG%2BsYo0FOh0W4M%2FbqvVJpFxCmM3mtZI7J7S3ubQ34VbeoixWAgg11sRTkI215cHmlHs6A97FmXokTf%2BxbUPiMfxdlKQ8VGg1s84iAHU7bWQ16xDX4Ymk0uNvoaBTDTvX9L%2Bn6MOmAxsEGOqUBK75gc92F79ipmQg%2FnY7rRfcRiTUu1XFMLHhZDsPAn2rHVqCocoUSaQ%2FMAIBRmFqWj8%2BzjpEhHAjfNvmMXSpDV%2FV2aW8p15lgPQGTxpnEvKun101a7Xqb3G9W5ierTX49RVxxiRolT9yPFoZOMmHm24D0gwz90Z2vVu5WcvYtqbBvxaTypSDXaV3al%2BZ%2BQiS3k0ZD5KoTWCip9k%2Bthl7CMrzZbzMh&X-Amz-Signature=46a65b10d55661c1ad9045b7cfd9dc0b2537878d5e862b896e7dc1df47fcba83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673Z57JIB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCICFA6bcbcsh3WrMvN5by1W6U2h6AVq3HJ6XA01hfFqSXAiA2ZWZ0UWB7B%2BcAkMc07xYlHo93d%2BI%2F9ZLXpOMurUW24ir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMnx8NOOFLrDQaY4OSKtwDVyz2nS80kaPXdCaG%2B4lB5svR7C4fwz29fFIwmMWZabAEaAx%2Ba2j%2BScp%2Bczs0dnkF%2B%2FhUMHyr%2BSZNWBJ8S%2FmGxejPRxpA8jR7GEM%2BZflykaOhwI9fp0SqYyoep6HBrt4PBBXU%2BuDsuk4N%2FRJdlo1bl62wCapbV2ZIeUJsrnti4ov%2FyR0RXXhpbjzJO7AKs5InSYNw2QXap9fbTJWaDpz7mzEnr6aa7KbQMKkpuXHhfuHrHmUmZENMHL6pPe6AOfi%2FhDkH%2BEzb7gHerklhExqfVbOZtzudmwZXZVqUyiXJLWdhl5fQoj5%2B%2BJzVkGEuHEpNVOjmzehZq7XLa8ZGRMY4MR7G%2BIy3US8PHSwx35ShwqAuRoh5Gvx6Hfn4u8mdjoeD7jdLeSc2cyNJYkTw2eDK2MO72VRmNwMDicem57XAc0QAt3M5RrXr7PJVp6ZoB7%2BCzHZa595e93N6ipEnwwJpO1P8DAB6086RdSdG13j%2BXZ0ESBIkRCFNlJYR%2BzjqTCEEz10jNLffaUbg8lvWp5TDjFXZulhfyHpl4AjxgvF3JELnbLX57%2F7PyEd17naaLmSPVZf1zzD0kOQ2pDCTSz2B0diA62js6qd3ZknAX5VeZN9y%2BfcmQPt3PSrjf%2BQwjoHGwQY6pgHMPEF7sH9xzOktFw6krUXKQF4KRf9FaZ7Z8I38TMdLY2cWepmGHDo4E4j%2FZWmSZUUl0MCFwv%2Bq08k1FNxwInTF9mnrYdbCdCnley%2BGWr42cbrj2VEXqF7ntNJHKIc8FAUzNWYMUeAp6EcVkE%2F3reMGM9SrQjdl2%2BAAVDqdEZLaLuehjLex7r0FYTjOiJGUSe1mW%2BNVNUWo0N2pHMMdgkv414%2BUhDOJ&X-Amz-Signature=9eee363719b53f8ab5135ae00a0ce84511367a566ba5a4479a587ddb68eab017&X-Amz-SignedHeaders=host&x-id=GetObject)

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
