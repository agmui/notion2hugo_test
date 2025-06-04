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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7RXZZJ2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIHSenmIZjBaSAo9gfJY3QFwXxPf3KxC8exyMjfyKsEqPAiEA5%2F4A6xu204rPFYdWnVDX1nS8eoJ0L77%2FqBXlWjDTmEEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBgHJhTCxeMQCfA8BCrcA2pKBCi6ZY%2FagFRaKxiWLyffSFx5HlDTvXS5hr1i%2BlsBSmO8I%2Bts2rWtLFXlNHxoigysTqICOpHYqI%2FLIVjF%2F6%2FPpW2jN9oj7aWvdddqkvuqu1EqRXEsmKVgiF19fedLFkHfr4ajxq8jYZ6b7E28jsLwrQWwu4wjiuQgQAYI3JtuF3jQzST%2BH30VLBleOgkXPCSbgI1%2F9eDMMokT75ieY88eCxZCE8ZNiNzrkEjIwwdsv8FmlcIQQ08M%2BDj5JoyIg0Sl1PsvQ0CxKAiIgrE3ma9COzLnrAofGaeVJR8NAEuLlp7unaK12d8L7Ob0s2rzFpoyR5cfX2U2bpH4j7lhTUUEXyCIZb0U6d7wyLSic1ZvjE3ZRD6Pzav49BNfH9a9uJbJuB9ndlJYSgNLp5fhvE0ZVPf1XspC8O5dMg5otBnn%2BUzd1BVf7FW0hmN%2F1XGGaPFMsqIiozktzurEWXP2NijBmKs7Rinkw8E9SRPSdSCnp2izM9DMDMbO8Dr3MZ%2FFlrC3flqWClcsdvUhpD0VENHLBa4qKz9T5MiFzec9CtCn6rB0icBEXGUuUdWBsBFE4ub1%2Fh9BaixgpyLicNALDOIBCSC0MLlIkbGMMJkGLqXVNacccSnjEEOxJHhMMPTm%2F8EGOqUBYJruRe3qPpoBhvYkXrZravAlY85847m1G7mgEj3PrenGvAEO%2Bi9m%2BhV5OLwuCXIHxfXqsQxSnMu8SJB3epLUjt2gKVZ%2FztbVDOyumpA9Cgbnu5CkWaB5DGQpZfmOeAS%2Fwj8bDTX%2FT%2BgqiGXsZPtVyy33cukc8xM%2FfkLZHr%2FlsuHgF%2B7JHDPk1ogySYPHrczduFAanpD4%2FWDiqzXr%2BUOecjeYe6uw&X-Amz-Signature=1d58d79a7f16ebef2c2392f1f533db72f5fe7c05bfd946eb389935093110bf2b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YK63XZB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDeW5BzUkz62lEN6csNj%2F8kIYb0Z45M4HuKox0z%2BBO%2BGAiBRpyzxy3ZjvnpruX%2FreKgOW0SJQ2Tyhicnk1dy0vPnNCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMQBY%2FvkV10FbZR6%2BiKtwDDAxY7oX8SYhv5jCsYFxCnVaYEMrnTQ9zk95CkgDenxRklhd0Nb3LfxJNVJkX0EME7AahTMzF1oGPMaXSQNgfVyZ%2BxwnAnuGNJRIAsFqMxRSX4jzMy%2BQve2M%2BN6NDrtvVEJ%2BcZtQT8GtSubTAjsZxGaKWj9oquBMF%2Bv%2BRKiupXDotp7VDi7ATm6zmCnp%2Boc%2Bv5ApkxdIdTvRCbn5IhsbOll8dmD24UydildBptI7R3gp4xqVQ0VDphIWtcHKbz6ov9Bdkxlh7zXVxv%2Fn5hI6PS8%2BUY1g6BPhs4I4zLsiLKn9W%2Fs4%2BI8tpL4Z2Lc%2FY0j3g6ZV1%2FcEpzUH9QQtRIkzDo58gPQzHQUopzkUehXbDud14kD1E7%2BHjHT%2BwxIHTYSSgKqOTK1CkD9L5JrVDOIxue0EBTO5x6MUeRBwY6vCD720jXX%2FCtsUMbwoZlkwTVgUka5r4exe57PfHR6O3O4JeEDVSx%2BLxJGh5J8lcH5DZZfZppRvFvTfzr6wEf5nzMa4MbW8REl0G96T%2FU75N261RERRzqYpuhNhzLYRwx24Y6S6uxfv8qod1TbNecU%2BKWUFxYKAw9CGtfSZ%2BSlvYJ3vg50JgPj8%2FWwc35%2BKg%2BW11WusiV8h12KIxzX15siUwvP7%2FwQY6pgFJO4SGumliybDeeofUl9kVmLxEw9U73vP7FTtAYGMxnq7yYqT0Z%2BIVJW0D3A7djPqaNJSLudBGbtNMrJoFwBhxICYtZSKrNtOn6EbcACnAqcFDInzs3uVE1WxCXL%2FHu%2Fg1Roxoc9zln3wV%2BLoaCIrXnARaRmrxdIBoqFTLQq3sCkj3J25uaIZQHH8To4fv4%2BM%2Bwc7POwbe1UPbBJVXf7X9EA6JYAks&X-Amz-Signature=59384f24f3b2444c6e8fb52510111fb80828094a74db110fb4aff6e538b4f257&X-Amz-SignedHeaders=host&x-id=GetObject)

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
