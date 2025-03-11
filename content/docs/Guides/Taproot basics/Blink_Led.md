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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMC2HEHA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGTrjaibXHenqtYxeFeqcoOaxgo7cp32RKFTNzJGkyfYAiBmyfFKiXHb83U9ChwE%2BO537rQwM877IkA%2FgLRIFOIWvyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqjr8e9uAmPOCxOS3KtwDCQ20Isab0HiQKc52bRZY54eJczi%2FqlnN8K59uhaaH6JxmD%2Bo7I%2FCh%2BYYh%2F2bGMYxZtUBC88iakdgw1ltL8bPle2KpYNAMd8xm3zAAvBWpAyC7Kzc3mDe7aYyU0BuhSWKemn7riTzslQSlB8ocEkbhQRusb4LcRfWEYjsSU%2Bfe%2FesLcZkCkdQeQTkNco1yCkZ3mQWi%2FaO%2Fagqj9f%2FVxTWW7wR7TWfGloyvOgDI%2FA3yLvXxvaBYTzH5%2BkKuvTqbZwvjJ2%2FIC0t0D3ywnGDRFejgJemjpuq3u0vMlHceGHrcV6IKYntprSJdRpsa8DYP%2FzPKejkKuU44LmaWv2EySJKl%2FRWm7cWDypw9NC1lJsMMDsH9Zdqb5klHbtu4Z%2BgWESor8djmsiNUy1Ctc2icpF8NiX7y5lzTn0eQ5IcF2qfiPwWAYycJ44kAk%2BZm4Bw3AewCH55%2BGGNdIumU8eqaDFc5xczYG0T7GLJ6kXE%2F2zGPYZINXFQcBlA8fHGCvSoeO%2FosC0RXQequ4MDcmTk6CmMzGXMs5XlHsIw052wDA7CLXqRPmeUb8QIyHObrYcFruN4nlJwB6fa%2BejOgAH3g%2FKexbyeri6lVmVw%2FOhJASm%2FMWsbqsUw0HUqYoQz%2FsUwqPPBvgY6pgFm%2BV731yu7VQkypWp78LmuTbeBkB7RgnXkGWE7GJUBaqRGg8PpdrKTvXRAGR8vasmRC7GaYfqn%2FJ6WWUzKlpq87GAUMSK1DKylE8uqlzsHAgIFIMHaqLGi8SvbWO32TOlIT7AuQJkz3N6SbpXMB%2FjIMxGhLZhbuBHbDz51wfasfO3R8xK8WwSRsFse6%2BJ%2BTUV0%2FAdthuZu0tLM%2BDk7HRhXeQgEow63&X-Amz-Signature=90634879f56c133b26f2c5024f46540d105ad481115776e0475b0d384e4f46e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5C6AG3B%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGWf%2FkF1ioGAg9ezG82cB7%2BafG9SuOn%2BXzyCERes6SSRAiBTHQzVZgb1gKdnkdHAMMZW5eqWoXqqSgayFJ%2Fkh5c2%2BCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kPGJqGkq5JYf9mCKtwDerPuFawtJeoKBZEWGH4yRu2vK6kReq4aN2EhbEJh%2F1B%2BVuLfYFyxCDkmkkjFuJVX4zGXSPMd%2FkEoF9MiK4m1GucxJft%2FJBc5LNFOzp%2BzyVacWyNIlj7BqA4mui%2FO1e024cLDB9HFiLsMsRcGzbsnM6hwbI9M0Wh5e9Axg%2FCztZH8FXijSzjayjWImQAS4SvAjCYsZ2v9bJump26%2FJnXXUaLZCGJW2Li8%2B03P7EjDa0ndPcAXjDA0UgIb5tBgpMWZK6Xew9M8h5a8I6CbGr2ffO3yqw3X4wZApr5QeZ8mbi2tYa7SPetmmlFQwxblTWXgQg1osTYDvlpiR1uHO4R6uuqU%2BsullJCOAVJJh%2BSKQK5aF2vshWgJ4f1dMCL2Z7qPE6kDaknNOpfObEz%2B736Q8JSZ%2Fh7GKbn3odu48euqKYIBYlkONF%2Bo%2B9YVIB1rkdxT9683kv7kI4HgTK26a4ugSURHxCWQ17yhJzQr6Jcn%2FkKZzA%2FEoEwxrLgXt9d08IyrZ%2FNXZomNKbqQXhpRJFYkvUJc6xL1fUOZa1Q9KiVSJ4%2BSatSAZLMl%2BUN2umTygfhdkXpyVGJBjaK9q51CXGLvq0KJi5AVmTRjmwj%2BAYQT07FZ4cn6ckysbJEhOl4wwZDCvgY6pgGjckfvnZ93QHW%2Ba%2B8ELi4vgbRXGwFKXJXNyalg6WAGS827zoBnMoM3S7C6vtdSaSg4pLNlDuWXzmT0DHJrxVW8Bu31u6HaBzSZv0FbAxN%2BmDidneoO1Po%2FMjyoHnu00SZWxqPWZs65ZAKiW6oqn%2FnqBE6ErAyVSulw3nc7R9yJ8%2BBp%2ByHEM%2FPhG3xAxb1q3lpkc2UZraO4mL9BoxS9CQBP3av5u0AU&X-Amz-Signature=189ab95c3557faad3d0c5ce73426ab94cb530b7634fc2b58cbd2dd2d9acc6ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
