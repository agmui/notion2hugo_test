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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUHMDE2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbWiQ%2F55PyoOYvzxErJfCDrjpyqn2jcw0CgfAaKNTXzgIhANr6RJj4W62ikAPKbXBdRVkK0gkDvTwkHZJxP3Ycr7dOKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0JLzZNJCm11xXxu0q3AMheVRVRVhP4yxY%2FkA2hT%2FbIgxsYAGl9m8uD7TG5PjXbmhvlTqS%2Bxc7Nqhvc1Rr6kzYAl2MsQ%2FowgQImmXzKLElC3a%2BHOXl86s89aLbaC55MAhGdYM5x5w3iHtc0W%2FHlrCXM50nO4cu1phuNw0jZTM7FjsxawLTM2%2F8Pc%2FRn6kC7hwrHj53ZH%2BUaVtK0JDH40%2F%2FEzvArMunI89gRG42tdADnVhSlsTrkIfHh9J6vq3pDhKNoBLwafZLf35wg6VX77yYdQFfngqzPq6Y%2F4mkhHWV8qrEJB08t5tb4kdFqTHc7uhZ2zl8UInYwOwZkCn7JyMZY7YXgIcRe0wkxEynZNzl5IoDQ6aK0jECyKqE7S0kZ%2FApz41Esew6UGVTP67lm0UMmFVvksq%2Fv4BypZe3iU3UVtDncOWlGYatDQ%2BbDNAoDLeaQNqaLuu0lejyFm%2B%2BXdKkQoyBPQQSOjJbSwXqaKq%2BpBLK3ZeAUrMdiFNxUgAyE4hfdjtzt%2B6sAjdk3mgI1yCQCSMkvCkfj5Ex1tRx7cse7Rj0LKXVTbkpWcfHj8%2FbB3bqbyAK%2BZJl7w4ucH6UuzIzW753uixcVUocZl49MqspTvnlYIX9uq52DnQ8gAQhDrgc3pmu%2FjWm1ydEGzCiuKXEBjqkAYXRFcjjZpmpFQ2sb7huMshZhk3ocseonuVpjW8it1mQTrh620USLaPxIBeeAyJh4kl%2B4umvVoYRKtE9sAUFxsDBhe72mAb89WStDcsxrsoJoi59MpWuyAGIEe3VwFTlIbsQJTCpUTQ7f07JeJSyPMjP3L3fBmeJj48%2BUth0pF3nWZJrtPoIhItQVAEvQg3zS5iQtXCRK4dPhAfenrzgzXMYZ1vX&X-Amz-Signature=e1814839a879f7a0bdbfe70c6426e91ecf8f679c1f326b13621a461be92c6699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7SW5C32%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxYEeIzQ4W4P16EIyw1YiGwBsrl1w7tAqKc5J5oClenAiAEJtFtYiWWyut5LUX%2FGQN2N0ehYc709SjtfvcstFheoCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUgeOCVIGHpiZM9wcKtwDcmdMRq5racPulbVM%2B%2BcNybpB4Dnr1shK3lV3x8QGTTRb8yN7dE%2BRk%2FimKt%2FPI5XXUvRp2EN6Mbu8a21xRNgPpsxyMqq5RZaTUDIjN1pF2aRJJ%2BMXPHtXu6i%2FV9T8avlDcEx%2FTPPuqjMLNUYUt%2Fq88j2Z%2FFIsG7L%2F2EyEYly840%2BNh8kdSv22pB1Mc3MMdzTgfLv5KBpq%2Bl2Kd3TD6w3k00dGwLGrXaGHnelQuXaKYQ89kJ3%2FGnhTgvWNfDqN8AJY2Fxsw8lPH7el8z7Eb%2F9noiIZdq8h4N%2F4p98%2BImIk24nTRvmDWyqlol2Plbb4ZGagtD69Z%2BwDZypjN5T9DppYy%2BP4KGuWB1CWhqbcAcSQnywjoWJG324hmmS5ysMa5YaZuxPNIblbghx937Ht9TIKKS7UiA6Z%2BPUL3%2Fe9BL89HPMg8p%2BDIiqaxVzKeOEM2Dtl9OdCSo3F%2BXcEQApjiWVgDzRFdcZRgFpm69f3bAakVD2%2BwkYUZJ6hLH%2FlMTXxNOmgQIUqQltPY22STJD4YGWbzleETPTr2R8pG1Afo6h9vPDkZmaGyKqMmwxMdIFxGEoWe9M8poY7GVHWvLf1tkBy5DBdcUSuuO1fe7dqTWP%2BIiZIaR22nySZUbtF3l8wjLilxAY6pgG41G3l36AAblWbW0wzMgRJcolSbHOqpjM8ZtV8Bn4xCLOSr1hLnTzMU6tbf8PWCRjzbEEqpeZTTy0zT4SJLLL7yHlALsSwLl9Gm4sttrLKVVT%2BsJ2WaQqnTX6R7x5rRjWIiRrAHk1LgwG%2BfzBI0J5LxZeIeetT1tFmjby264zqUl6UqSGogjQA4NxE74NZDv4Peqg%2Bqk3RT9fQQzlFwI42TBsbX6N2&X-Amz-Signature=1c570a5b82522571978125a1dec827cc88a6f5c27b348edd4a0dfe4cfa677891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
