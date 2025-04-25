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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXOMIFIY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrZ5YIXTU5Kr0G%2Foaqt70U%2BDiZTdn3y9m%2BYieWgDY7aAiBI92G1ALsys%2BruCk3T2UOOqUJEneedcW7VVZrmyEqjwyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIM7CVO5%2BEhjcPJYqVvKtwDh3ga%2FZVWgjGRSIDUlJ4U7fPEVbOjh0FOucJyNB5mW8Xix69RZWeXA0K0NoGTmhb2TkhI%2B%2FLiE7NcQ4PC9uoyeRaYLKPwVOD4a%2BinChvimehu4VkHFiQtGq9ZgUhI3yiIgXlCqi0HpORYBzm9lI09sJSpU9POiSgT%2B7bgCfnT3G%2FKcoVfQquVRarVYAG4se8w7dh3ztUO3uwd5U0MDqi0hz%2F23dJ0jfySFLaEJe7kQ9QHMQwEhkh84LPT4x09tBa5eaJ2iIpj90aKDfeVt5JzrS4GnAgwPD1qZ6SgxwSQjQtlhOn7U6KJzXAmJ3x08sqDZ06HLQm37BsZ%2FfS7AFqwk5DcJ%2B7y%2B59aIYfKGr%2FHaWHFhcUjEMK9AuA%2FRf1NrgWr0DlsN0ed7CDJ9qUS%2F8CYip4Avu%2F9YUVEhATfBIGbpD6whlTisP47r6gsBRCYrfoySQXHkBtp5IWpSzmaxw3E%2BVRR9xqcABkquTtIeZWSd3moAdukFzyF6xGHZzLWft9U7w54y2WugBOe5X6fyS0AN6OUxe8aPXI0ErwlhtTI0jpt85WrWGX4XmeRc9kqToBXqLta6ZCPmleRCCnHk5DKACIMffzG2%2F8MAPHxV1wDPAgVkhcOAoOPlwDXEBIwjeCrwAY6pgGEz5QVBZIlkOFpGOGLynzWtvHCdDflQIR6N%2FOb4k1R%2B0Ff6xiFxU9mMI6AJ0E5sgeQ2xiP85Oz23z3g0qrOyKjZBDbIHn1TV7%2BKAnGqY6g7MeA092sYsJeOFy0cH1%2FpKWjgEyz%2B3DqZSxvrfmEnwHkqq4WL4j1LIwAO3GV5gOJvRaFlApCTs79IPVOiedlUAjU%2F66sUfJELEqlDmxXZfsFZadDX6EG&X-Amz-Signature=5597d7601d5b7424e2d1227ed33e9bbcfbd4b87cbd14d2ff2be686f2c7b5b4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJF5ERU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDD7Q0%2BkrU3c9OVLzsSRaJooI1KnOR6QJ%2BZVuCaUVkYLAiEA%2Fn%2Fv9TEQL0dHHtYOPWmK2BJkgJwMajRdVpDAZCVaTbQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHcpZwLmkUyeSvkwNircAwEbBZeUWx1SdjY7MAYEzhlhX0BGpUT%2F9Uz1lvvDa67L9yHdIip7tPpouCIgMwpT4%2F27ZhMzqqhhH53gnBI3oXrQtatvvUvVLSbaqJ9BySUQuNrKF8uv140%2FSKGbDa7UjHWSA3ItpqnCl5izgECnEgCQgchYLUKt%2BBQT%2FwJTiBppwKcaep3SFwEsAt0j4Y7v9LFVn1ujb4o9lXwzcAsm5DBjn40xa6KkLC0cI8vIXQgAZI9IPjnOz5iERfIgRX0HWcFz2XwO%2B8xFSClaEyqDkb1CDsWpc6SQpz3r0ZxaZhlUWSS1Id8RLW06mVTx6Q2WYgKAfKorEcptvH3GNT45PwEJ%2B7rBqg%2BfBHwURNstnkrwbpe82NF9TbkM0CcUgwU3ALJvMJEJ6b3E6io7ZtlYJlaqNwODhkpSbAInTKkQog9d6eUzVnnxGYS9LrB4bXxsA%2Fd7Sb6O8TswuyUt5YWrwiaACbGu8BCK9B8D0DzheprkJCIsI4an1iqRCVGehC1Lu8YNRfn%2Bt6Tqt0Og5eVYxyW4NSRjqj0%2BqKRydP0PUtOBjZPETcC1rFsWwhXlEOZiAZ9FUzv24bBKcVCh%2FSv8f4LEBAAqhOUYF1BlRxWatP5SkblnXXr0am0wTIBkMP3gq8AGOqUBWs1%2FlGkqapPRFr1ZI%2Bs5jRkufFlI%2BYvLxQ3%2B%2Ba%2Fr31vjdf0%2Fi9WgyU83X1Z0ybirsvIrl5V%2Fpa4gxUaCeaLyc%2FB40pmv7bEXuuKTvJbHBMjYMiL1qFB9SQauMAcoV0e0ZymIehBRM9sGgsBBF%2BR41pvlhs3nm0xIvhSlY6tpL77symRS7buwApEpO29j1boKH1V%2BzyNkkkQwfv3OwouDVgSOcs7i&X-Amz-Signature=26ef825067f9997e13f68e56263006ef49d3157ac02d8aa00abef694b8ed5ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
