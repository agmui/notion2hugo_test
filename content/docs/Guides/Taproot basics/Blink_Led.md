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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTDD2U47%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEmd0HfCdVXvucVZX2i3DKobBNXPMZGEn7wL3htAGaCTAiEAgGWhAx5J9HslyNHqHlHWtAft%2Fie9YV8yqX%2BDm6%2FHrSAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDH2YhJ%2F%2BZKDK30hnXCrcAz7v%2BdDB6dcO8PhMb1tgoWalAME3VMF4FrkEhw%2BetU6OjP5sTd4rIiY6pq%2BJFX9TP4jUliEjwn4h%2Fk%2BLy13FMWi4CkE8qnhPdPSyocm8cA0iwewgCtAfn4csyAToV%2FGV1hdFxT8Xvz%2FGKzdkZzN7lR4gA%2FJ9htGnNnphLzxngU%2BszYzy2zROt66Lo2YFNIp0kW1Rh0aAHJEAwQGF9z1dvcCkqwupGjM5IEO8%2BVuvsPs3ygryNnX8TnKJRvuEm7Gg0jyPdt2NN4AYQNvDXDFda9qaBclDSeW9A3vqIjzwCYI7xSSwdtxmW01aZo78t0YgmTsTCybGjECaoE4Wajjr5KIRCJMZXzBCj5HL8YPaMhmNS37v4c1r%2FrDtZieTKvo19k5JgbH97ZvWZiP4GDdpdiz24QbQOo%2BPg8V9kfSFG0LFth6G6I2O5i1CCVMO0mujMApKzIn7v8qG3HmFHshGptvI2tNkbhbr%2FEbEXrTNhrdVGjQAubuSJfZFWkfayUFsxWfuATPJ3676X9d%2FheFBGU7556%2BHjjFd3x57INog210ViDSMn4lotIIEVpCNL1LyaD4ISPD1rQnasvu%2F1gqlz2P6IkJquwbFhQypUF68cyQC5zrMNkHlcnvrLmKMMNDUusIGOqUByJkIjEXD39u3UtyoGSSs9kkvxc810a08e6SB0b53g7j8DYQ7E1jOxxOymWy3DjrzYy735QyF9ZYVT8oXwctYZ3CeBKGkgb9hhWmxKzORRN28xKUMJMwXY78S6rPTolr%2BTEyd8jAsHp5innnu9sz7SWi6dGeC9oAbXOIAyr5EFAWyo3EqtZC%2BBajAuF4sedIPikkIlRjDaUR1lKAL8G99LC4I%2B0GR&X-Amz-Signature=e33de8006d947b54173c0f0215f921fad71b370e53bb10d9fefe292d61bcba89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XONQE2H5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIGQ%2FETWaDuZ0uyHPAwBdFlKGnmhpvD%2FZKYsyJp8sESZXAiBmlzwgACo4cuG0XWJhNyZer70o18kcgvBuEpMog9NuBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMZ%2BHmNBRUFh%2FsOe%2FBKtwD5yHIhivrlIp8gN8CsUCtN9v%2BTVYvV770IJZYOb%2Fk2pAafShEHQ92FSiBggpcrm1L9jxUzj%2FKYKB9GgggMBxA1nIH6DuCLi2F3dcVYe0wR2YkBPQ74isO1x9WpIFb8fvkwPqeVLwB3DdSK0s5Dr%2FOJiOwaKSgn7pGhAQISK4s63%2B3VLzJTQfRapywi6w7mMP%2FY84g9%2F2l7Wd%2BaI4hOiWPTOc8dbl08Ecd7QhXa42FHdugZZ1vx6RvrKgtfAq2rHCHtMWFuqSdKMwz0bz0epT1gCnwnGJG8qG%2F4KdZSfZl0CUKHZNc4IeqYhPbag%2F%2BUQb9R9YApsMblB7lBxXHEDNp6cHa39Q%2F3npHqkANMaY5jaFLbAKNHiF2Ng5s%2BEJDoP8E9hqEE9%2BxIygKluRxCIehkg%2B4SxVy3uUuTcNUB83PgYUIsSWVJVnFYOMnoGrfMTHekNyxSFtLktseHXXGYE1IUiW7d4NzAQKbAVnwRNwYmRjOUMQg1fg92qVKOo2pLh%2BC6kPzIQJR23wQsqWkSZGOzs%2BMtAdCjg%2BBwULmyeN9%2BXBPwsuIrnC0lMvQlMywKeD0eW%2BKKjSFxPd28C4eGGpw0E%2FxXXFk6%2FxuKYFh85naQmBn7mf%2B1O84QBo61Okw6r66wgY6pgE2aEM5%2FLGC0SBdlFFcr0QBFZe73DyljQSVqlCfTAzjHIICzb6ACMjsa1wqdQ%2FkJS6dVbEcygtZmviF2h6HQVIqoblHKBjxBivwBsh1%2BUfGCex%2FushWz%2BRSxIe0IEc%2FI00AN%2BVua1npTqYOTWPk4hhlUaMKgODHv%2BP4jtK7lpIsknMrAhOo2nsaWY7wEn4Ge3mukMlGQ3vabTkYAjKweoJha0r18i9R&X-Amz-Signature=62ab68f90c14eb50ff170bd80dd4cf555a08983a564f5647600bac9642947b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
