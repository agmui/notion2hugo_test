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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJDG3VM%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnP0IgsUSFG35nU9Jt87uQ9VVJtWOjJTo0KqN6BX%2ByyAiANO%2FkiMynrq3wQsIsTvF0YquaZz7hZY8CGVgQeVgGSAyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMejeVWjmTKhzdpX8eKtwDXQk1FM389r%2FjScyzkZ7Lo6Mb8fgmVHOyVNlm%2FVi7XDfQ6PYoMz7NAh%2BEyJZENUR0QNaHncucnP1ov%2BZJd7FK%2Fy88J5kDkktnImCaZZk04jpCxJWtwMjNmI2eyu%2Fh6v%2F8dDXGqVc5obwzMUU3jmDliHe2m4jYDRJs5Z%2BlxCIobk%2FP3L9V%2F4jJ77DHDLb%2FpVxhTQySzPQZDGIfw0PfHMkXBKlI83HtqV52gF5cPcYYlmGhKCxlFm4OYP6wxNhw8Ovoj8KPpsw7bsYWmNhyU%2BNqtWYHzoDhN1hsQ%2FpiRmIs71d4mpQ5l6UzC%2BJRS%2BT0NkC2TroU8wZTilR2atIDQMuiz6fd0o5McBamI1g8pNyXjQvA4w8OMFrzKSxW8aNCcvA3taRdZS7XGer%2FMD8G0zRPKP4EfhB%2FMWldb8b4xKCrnWQXH42TYqIn6fhmf7MFYoSoXJbA0Sv4uv6WzYblJ2nIP7KHQXOJ4wRtPWmMvWlvfs4AWl7wwhqMOLM8rx92zIARX4XFWKy3k6c%2FIUsBsOJbQ%2FIpoPHGIEN9PYQLJp61Gq20gJO1Gms5zTvnm5bpFVY5sR0V7TxuQwajmuO0vKu5tTcLJkodk%2Bgvv5CcMR8%2B6szhO%2FL00aTzqiUsxQEw8rD1xwY6pgFb9b8JzriaSPq%2BDht8eBCgp6oesMl1ksjmfxkADJ62Ly6jAvbVXnEjzNEIOIN3fzMZX744e%2F2RsQZ2rzBcQtBp%2FhEgb%2Bm%2Bzd%2BAPmCMvf0fEzN%2Fto0iiKsYwqFQMzGdhjhPVaED3ZCoQMlitjEcgDBpjB%2FJHccY62IK17GqTpZEeZPxzHWR5epLKr2BKqUrvcSd%2FLKM5XH1uec5AaAdil6BHieU1mp9&X-Amz-Signature=4a94e7304138a560619811b2d4ab13e70a5b0e86b3e5e88b1b00b8286e7b1432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2PT4CEK%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfcb5HLjR9B2rJLmd13jA0BclRmmBZtD9UwvTFrvPx4AiEA3Oy6oTxwS9X2wz6LE95izrpNj7yOqNpY5XmkrtcMpjIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeHdlpt6CT7KN1rHCrcA8NLQy%2BuV%2BL3CcRDipQYEamgZHMwgcda6N4NjGO9ZzqRFuvYAI%2FtJDyZny9SuVUqLyoWKMsME4fKWBDhNaiC0Tqmfw3XKLNZjid4x8Cj8MuRceE%2Fnu7LjX6Gw8UCorJfOC4wZ5tGMFyIFaMOFfaHVuRex2seOFQLSCqe%2BXRxEwJYkkZhpLJzN7iGlwIkapYP6gaZjwh7RQcIccQhjHJwKNGyTpiDlxeLTIZtIyv%2Fy46R%2BFhQnum1a4SO5hz9Zyvds7LuSzWb8fiQZS2%2FGYmCcgWdb8Cf5%2Fk7ttXjtXyvnNWWwtJliXsjGmk94GXxOZuVYolPOKERXgKQpw4V30281q7toPBzJgE9COegtWYEEJm1PAoz5rcJ%2Bm82plpox3Q2z2ODbfHeeA6EpfkTGZpxoGReb63GTLsJfB84w8A31PUvmIULy5gXCZo78qib8isDQe5138f6XqkahzrADeyq8ZYmJvaBxqsSD1ib2PAw86oIdvtcyU6305UHBmEXIhEBRVFCQZrZq6%2Bj60m76i2AWk65oomtlCglrZXMPZrCPhubzWq3hdd0rTG9JMCpmHfZMsBcSsqExpjT37KzX5zUUMbFKqlx%2FakRnxaG%2F71lt7SwLx6pOIHmTa2hrj33MMG29ccGOqUB6tiLWdgyuv6dFB3GzkTexT3f7p0ZfLYwd3MnqwqhgsoDw%2BuhNa3q8JAHGg0FzFdWVp0mLDWFljuOlHDt6HKkNxBANBJTVYEGFOc0jZPkORzfiG%2BuznmdHrEr%2FQFaAnRtdF5lRcv2jdYiZ0tAgyO%2Fwss3zhOM4pbzG2JiBBmWLcLOsphf2kmWO7EHwn30akJX6%2BUFNPtMBOZs9F%2Bh2sIM6Ubp%2FlYK&X-Amz-Signature=a74f2cabf70bc0a8099ed41ee1aa9f02794e66e1abb14437ffa47f2b9d4a20ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
