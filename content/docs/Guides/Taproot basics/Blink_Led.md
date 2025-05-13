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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TKJETGM%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGDBDtculjADGuQgHwo%2FSqpQTUC8D7CCpjcE6Dt%2FRQTDAiEAhtBqiQwIIEEzd8DttLAgWbIomMAkmqqo4W72Sj0u0YQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPx0OB1eY1D4v8uBnircA0yUz6KpkW0hGAU6AnsWcK%2BukzYDD6ZZ2lsILUzOFtiBOuX1lvgbkpwH%2BlN4pZWyCtGX8NcDst7UPMBhGWYX%2BaXdIZEs3qq4UYiiR0ytx6VdRYu%2BfGMbBjXjV4H81Yyrny2m5QVAUUoZV%2Fk6FulVVoPI3kUKEcycM1zeqqW%2F5QqSWDp0KJK2N1yc05gs6QQIGudBem1nMvbtgPik8a%2Bcxrtry2iMhS2hyV%2BYvSAu3ihnF0H%2FkqOrqh3V1OQOvMz2odjppy23HdvCK5DEzvwzjGxHhTlNHoIy3mWQh2OLVHW%2BhaKtEtyW3iid3yLQeorJHSf1M5lS1C%2BePiY5CKqi6UwtWDsuILfTYpNYbTAqnI%2BF9Iy8cplc6u%2FAdNCMJY5Kj31%2B%2FwGE%2B6LU3fcxubX8qmiyrL97QBEr0sG8zzyTTCWftD%2B6Er8gsCvD8qxaKZ3VfNykodmtZCbyxR6jcpm%2FMy9W2TF%2FHWHRQpEYWTVKLa4TSgIfHu2UXv2HW8gfHz3LwIXhkURYqPd%2FHJaeZ90Mv3obJpU33SCHECItrLdk6FVF9QQm2UFzQfnD2m2mbquceL7a0BNp%2BOqn1icXFW4BnsRigseqjNyuXcf6EILrN1g%2B3pWaf%2BoliodCm7prMP3BjMEGOqUB3XfS%2FZlsCYryfvkbzZtZpg1oVBWqYw%2FHhpluscx9qg1%2B17u2gGWtZW4xPmz1%2BwReKockSBsikWTmICn6GFGO2PFQNe4H2mNPnuprjFS1usA3qaFISzOgG6e8eP2Y2exsGmSwB4O2Q%2F48Vf9klJu07c6u9XuzNXxodDgXsFFEE7mccX7wPrMAIHXPlYeIYXtxh8IVb3IfleNZQkdpUwIXssU5F3B3&X-Amz-Signature=d2686d0788e91515495a564f450eb70d6744c6b21dd724968dac9c797a6cfd56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIUYCJB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC4tzMEmj0Cc1r0VoX3He%2FAVqbyr%2F2jtsmZX5cGWc%2BFsQIgRYh%2FV8wGVVONkMTWLHr%2Fx6f0RSRybCgh8LPZCqR6vSwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZeBdk0kkuzfaTw3SrcAyFIEmi1bm5WhAmF825UOTJ5eADgNWtozf8RjGzFTGgzgVeI5VOgI7xRcEiJfmfO5XucwB7j2fSpOAsGsRy05ElErl4kBSc5jOenjhjnmz7uK2foPnYG7VPA11yrhtwp5Haveq2Et4WEp3BwmER8ITBQ4hD4Z%2FBQwqiWMzfl5ftrzqTUH8AyonVPmiiIQKl7aaJhIih9LuLU8trMRAkUK5QXg%2BV9%2B3cKi19YO%2B%2BGzwFKAqV9MiMsi9O%2ByU%2BBbbEROzI7Z8RWqQhBskycgx4j2I1qOW29DCuENozOF0JArm1VSB95d30SpJn54qaAdbm7KXktNBINDfCFjhVdF1o1CQJyHwywmiW350gmGU6U3bfFQgYxia6Gt3xj875Ikq8uv7hrplWSm1vucNB9n7NT6eRhB1anQGWkyRqF0RaPBdxmq%2BqAxaE1%2FVvxW0Is8StOGTrknVGibh13dX%2BiDDctLDlfi1tEkYPyltyhccfpPvgFd2KRtDhK%2FyMsv4V%2FQqL65dplvszxd8cvn8I4h%2Fl7bIxaYoGGyM10d1CC1EdsM69eT3HRpT0LAz%2Blhhi1WMLmqU4DzDI5%2F2Zo3242UobglLrwVQlD%2Bah252pVsb4JEqfNuAN%2BhroGBuf668uTMM%2FBjMEGOqUBmZusMXEblSmZoIhN2hOy5HpQdIavLtoXKE9o14tDPWVVAtnDaGFP1lE9XxWNWP8Kh9XFsgxsXIGOoEiiM3AtyK4wX%2BUyjPBil9%2BJLZgiSyHyK8ThxDuJGr8Gr5tzoQcS3wXQHtMkMtlZGXHzsJnAyqoH48IdyK4OfHhcdKmrZFUL1Mv5zAiPYPU0AIKsphoccRHbrMHQiNnPb1nAoGFVDNuhl46i&X-Amz-Signature=a49642efd38f00e5a144e754ee9c0a71c1b28b54c48bb826b025eda41102c0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
