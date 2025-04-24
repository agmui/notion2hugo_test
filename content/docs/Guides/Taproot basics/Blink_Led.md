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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QCYLBL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyWkQ8Vbeh5BsijNpdLPG7bYaZrOYwkDn8t5NM9VxMBgIhAJbZGDffTDaEG3H2SJ%2F%2BwnJMRs58IcexUENyLZUyUvvTKv8DCB0QABoMNjM3NDIzMTgzODA1IgxgVwkc8jaJ9qEhhWQq3AO%2BxsgfdF4v3l4BHPhJpckwRSPlOnb8k%2B36PLB7TZhWAMI%2B6Yu2yvAoP4RuCUlr0opP1gKw5HZjuAQslnm2aNiySWgm236saV%2FAw6T3r0a83kvBcGId%2BJ0%2BDxmtofQivWewhmUWGxPUG7rbub5yd2%2FHQDMm%2FvJlskTPIdPZ%2BZNyxgsBoPM1N6b%2FEvnBiBArdLjXEA2v1ccPP4o1GReKxgD8VhAuMkSpktNufD7T9g4MWH%2BQsxXWg9DY9dJ9DzSENziovWOexHPctf8P%2Bv%2FDaiIsMVneOD8wQw9%2FLR6S4xB9OpTHqUzDa6Eiq8uliufW4TQMxchZeNo05655fJssKpda0Li93Qw1TEogf1RHBNhBBXAR%2FtDrGFfOoDEvVFlgrdTaz3ZP1fv%2BSu%2BWwEpkW0YREbhrlCMJ10poIeJ7D0KWEJcKReEpP5W0auf4LMPlorQuZvqn164fAMMiSvRlTitGdFTh7YteLDAwhJXQcJAoXh1yDbxW56wnYS%2Fa7Wunl5vHyjTuFOGwngITC7yd1p9dH%2B5xj6LHq0vbxdY%2BiHaKMDPb30dW62QWoXcUZJVq2V6bDhZMPXnwZaD9hm6geZcOuMNm61PoFRqalP6y83%2B%2By%2FgW%2BNMSrG7mYx2pwzC3pKrABjqkAaS9PKHtkoPE%2BCPUctMjVv9jF1ETt34FnpF1CyF2XPN962P7LArSc2qLLjaSTKOw0IaXD8%2FEeD7YIMXnsW377UuEO9VpNELQmvBfwzO3nX1b8Ss2eNA3JbQX58wx6SOALuXuxs2VeFlazQhim5DszXH80f0lAg%2FVVDmiul%2BEpy0%2FM5REoia3Do2PKTM%2FQ7UR9Mna%2Bhplj8HmuZSTv7w7puPgojW0&X-Amz-Signature=a165b3815dd0c71b4e290d345341e01dd1c71a381483d6160071af30cf7cef33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q76OGSL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRKoI0dB8q1q9Ds4%2B0Vg68OcK5FG5rDqD0qeNQO8vTEAiAvsoIdwScF0Imy2ZM7W6YKZEtgqCIViSPxrzslRYLPfCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMQ0Mrs9sMtmeC2D6XKtwDbOiNjldHcXdE8OmHohtWiKIDfOVL34EabWJIzlsNjiXLL%2FtMqhxK5tsq6FqPyLFcsJY9EIWRwkIMa3IQ6gvwPrzfMcdnlLO4JnkwCUIc5TqgClIUdvpxJsPTzNHby2Jh5PIRbrs2oUjhjr%2BXkBzmdtO9XJDBPnfmKWDsdVY%2B1XYikIFW59UlHXSI0a0sHb9JeeuWs8nBolkT1y%2BvC6THwBwpozu6rWvsXn5%2Fut81mW%2FJMI%2BWb5KrSONpDTH6aT%2BH0mmB%2BpmOUuwSGA%2BZ9MSWSEHiefNqEVGa5X9WhHqcU2LHcvDiPwipCZe08mnR7KWqQi%2FN25ToOkABsZ2gsM%2BlOq%2FBS%2FrzUhibe%2FbP631QdYKAGaDGRm%2FBllIqjDT8%2FfB3M3oEOxGWrgU2HN%2FWlaDoaf0RQZJPpu3Ge4J%2Bgd0fe88U4I7Cc33g0tw7%2BHBAKTPIefusYEGUaANWkYIVFBcL1BYCBaBX0s6ObQITZu%2BkpN5VawpaVwFFItm4yI7QChoB8uvPmygIVbN5qqKmOR3BRel108iIm7%2FfM5WtCp5bfoHQPx%2F1R%2FTtqQKide43ty%2Fz6rr9b4OGZpkKRP4nzxqKhLQMdrC1JS7JQS6FFPxK2OjVtzStD6R1z5geJ0ww0qSqwAY6pgFv%2Ftn5%2FaSLohY3%2FAq%2BT0zNKFNP%2FLpXT3vrhDaYlqDd%2BtSD3n4BYka8cjuI2hZPpD3%2BNHzV35ODoSD%2FUzWjI5NL5AeNkLPnssFkHZmYF4bGZLOh2og11XziFI8KGDUL29eNVFZMWBNGggcN5pZNXwSGS66HwODfYb6gkchTncO4vYxhSQ5i2GlMljkcHnhXfVh2hIatryKXZrpeBD0fpfWUKgEzS%2BEt&X-Amz-Signature=5f2576005073493b09d746c695733de4a995cb503485ed03f8ce28d18891fa43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
