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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZU72ZSH%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBV55Pi7UR0VxBn6OXxExq1iDvO7%2BMzroB7VuUw2hDuqAiEAmMrGZ5QJ59v%2FyNtYjvompUJOVRiPK6UnyjAgBY263hAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLkB4TxeiUNZytXxTSrcA0t3zVExYGWcFalXrBNwMZJuIJrdbqkqD9S%2Ff%2Beza15cA2cOaFQ0Sc3chg7aotRHhFnmziaGyD0s%2Fovs4rJpuTEeffW90TcB8Wl7G7DeETwGrJb4uElX8bZl%2F2Nne93Lfq0Rk4rMDwXc%2B7FLbzU3Cd8fbh%2FiFvut2LC4pLCh8Dl4dPDi4dzRpgT%2Fm%2F7NzGUIAVBxrkw9nM4zr%2F5cdznjzQv6peMyzcxoOcJNQjTqIFjOY3JO69WUPvrLse7o9963PMDRk2Qx9LCK1sh1%2BA%2F8PIbPaoFGWFLXdGC5J1GH%2Fjz5yu2M4Ah1gaSTgibOlOVfmpaoJl9uyDzwAQhjZSVXHvP0J9ZSNMA5rvs6Ebr5Cvqc21Jp8UZ7bmuR9WiUicYfDG9KPMq7FGPQAiKdUcfbAlv9cB3esXuSRHZntvS7iDt%2B4TvSpwRAXkUmCEl0SL4biftQJuhWW1QpgN5fhLveBU%2FCnkN%2BE9J%2BjURLflfppNfb29xSJIXTG%2Fgunw%2B0sYM4Z4WAKzPgXCOZ%2BgIT86NVgd24eg1bzhu3wAm3l31sXC6nBn4puQU5Bt4ggrkktueMjhB9Srz76Ag2w6XVw4JJ1oEuKTvSQPZmx2kmgJm6ZwfEsj%2BqFXIlQwztx6rsMNyH08MGOqUBmSi6p36cFtjDfH1ZTa7rIjLfQnQSYMh9GhNLVwOAMyBpXQXgN87MqxVK%2BamTJQmDa0z51ogJiE2rC9dQBH8QcKo0HyGXz5qoL8NeBE4XsCmbA4SfeWWFwkhN7MOr4AWMTisDBJKEb9ZZY43p%2FMpFB4h%2Fk%2FfOnoCNYZg33VofmjOTRl0rFg9cGQcQVarRIOwR6n%2FuVeHawfbWn6zQf3JAhCzdj8A7&X-Amz-Signature=ddc23e6c1660f046f05bab8ab2eb2f3f96e8286e8f901d39025b78cda5cf57c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTQLGJ6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIGMQrUkr0LZj6k28VCH8zoZfLL8dr8gVd7puglY%2FVLpwAiBGAoNva3bp%2BujKpwW%2Fr2mgWKOHW5Qa9W13Fe0IcyB%2BBCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMWBKqP3j2hJPZ7LTmKtwDFGp9xRzC2MYX%2FERbBWciPHqqlL379FzwwZUBuPrvntS98g1uQkLPhyaozQQRluLVs1QjaH%2BGPQOPQHQxATVQ8PZsduGuk41aKJFSytLg5DhbPKJaJdVdUDI1HIrVIqyqZ4MHp6eX8zVA5GE%2FJjmvR%2BbnL8TbTVwLn2iyzwRh2mG2ruuE3%2Bw2rPp3vN1GJf4sMkGorg3cj3w40Lbj1B1%2FNH00qVcNbtuo0qU7jVkluRkYZPqodpVs0nXdxQ18NqF06556LhVPyDp9ZCsTDY1%2B30v%2Fx7o%2BZ7pXfH5MhgcjVP4vGYFHKQdGkmTsnrWQHE1QMNWFgz8M%2BIuJsIBQXN%2BjHz%2BPk4p90ys8HS0sQQFb2WHIbOm31gMYR55FptFjujcOOHHgODVGwxyB23EeqqQF8Z1rLEA8yfiYBWbDAbYy1xreLorHOx2f4Tr5Jp090FIXdDLOfromKO8zGyPUXO5%2BXRtOEhs7skorWGLiFlQwcWtAciK2rFgboedDzeEeFgpYnFm4QBAwi8Nu5OpxxqHwxQ5AIm6WX6zC4z0yDyjbVRpCwr8JlgOfD3s%2BO%2BwnW4Fja1eBkCNW2KrTx9stvXCYOX84xsAGXfPzKrWaN%2FIIeXEh84MHyA5KOvZc4FwwyofTwwY6pgGkcxq84CQkhPgaNQKSforA%2F%2FzDfRvBZTzwtXuDi6hH7C%2FR4RX3SRCkDSiBYmS3dn%2BTOoo0LDuC3ktJKZ%2BNERknctoUJDy9CbWJ7ArRh9QzO2ixjafmOUxPF2lp8Y%2Fko%2Fz22ATtiqz0tpsJUzfaKGW%2Byh5fuNPZb6dZix1kzgJf1uhi36Iw%2BFjO9MrxdmKTOhfNC%2FiUJRlYLXnafaFIUM82LmmFzpPJ&X-Amz-Signature=0ad744d5ca90d467094ee7b8206f6b4ed12d7d76587fb6aefb927cbfc20b16a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
