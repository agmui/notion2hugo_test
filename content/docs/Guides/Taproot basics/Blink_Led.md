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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PD6PU4D%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEiwxVO2GFT06d1KMapQJMFr9NKSc6hBxTEZZ0S3ZdvAiAlvPIwiHZtbMI30VZ70%2BCpt7np4IhZ2uNxw%2F3zBmgYXyqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBXCbPriv82b%2B1LV4KtwDapVskHbxVwMBFRvn3CopSdxiyVm8gZr1D%2Fn3Esf0dPU6cclkE7L0ImKDNIT2qATg3du869LXjdvyj2nKFSZuFI7UIz0mI9GI%2BoA103nslwhtWHhpUMU4F87YG12woMDckSJ3lefKRiGOA9doo34Ik7jP8x4GDinSdiBjcOjyTZJMViXR0mZVIwm11RFPZCr5AP7m%2BXmeiDQ8VcFR578QTzGHKjx7i7PyXFO30dAGqo2HiECRYu%2FqqxMh6GFF8%2BMrTQN5t%2B8rzCgDDl71U1sjiixkjDkdSa4qgQoyios8DSZzTp4RO23oj3sQSLJDvXr1QYMUhJXuEyyLFyrwlcGm1IvN6%2BMw1FApkCzh%2BNJskW64yDXnMq1C2NruAaclmDr5Oi7A0B2Fh3sJYDll79dYJ2%2BntcIR0tCuvY%2FdYnEIYV0W%2BHgqgof0BACVJ%2F02R687fu3LIpNviPQgf1wceAaZctKRiu44wuppYUYg65CMZ7ZKEQJ4hTqTfkR3Vzq98M6qzIcVzhH4eIX8hVTM5uX2o5TO%2FI0LcYq86H2b0w3k5HBEnIeiCfxVYdIbacxejcftEIijy7QCVnYjUmnU7gF2dI97YyY5C%2FgT72W3mklLdAMnnfEJQad5GgZU8SEw2uSiwgY6pgED5Zygf3Oo2ObpSciQy5iynKUTRAtzBiw6Y2y32ONDNZKfZGH0an0U68TytUrf8C%2BdMkv8fWoP%2F0t2IJfmIqutdXlhlKsUr1dSLwVAfClEefyeskIcKxnA5VBQ8bUndij%2FjWShGLTEj1qr64yJf2YzvaEBm7tVXvmhvd%2FdVIflb%2Bfpx93OahsBLDKhGfxsWBuSoYbQLnisGGRUEu5MiE3LvjD8ndwN&X-Amz-Signature=2588cc4e3519dfc3191c192165e2151ac26d5937d7f1e574085d9937b386b48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOHIDHY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGINeCCDFsSfXmlk1ARJc5LDSy38loSmxWxTAheNoHA0AiEAkL0FJyugtVun1NzvSXSYXVVfMLnY10O%2FGNd50I7dbNgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPme5e0oYzjDB3WOkircA0EsfFIVgcfhHju%2BQZU3UfnaCQM0U0Al8vmFU0jRAJPRsHQrn3PvcyyFuCMGc2%2FgIjgbtJHNR%2BkcqEr6IZcd1YPg39UeP7uJ6W63uwsFrY3oWFcpi6YDOQoCX1X9fmMHd1Fc7GqT6ilxUQOfqsYMOIFk8c9B7q8Wl%2BkW3t00EL3PKyYELIzq2NJFxwB%2FlyKRzqsZzrstKGqkB5k6DqJVMcYFTj%2F%2BZZCx6yauQbI%2BLYCooTV3683ilZveCuf1fc7O8%2BjuZySetrKo%2BrngD%2Bd45XHK1v8cV%2BUX%2BY55vJN0HUxIVjqeOsTfTdbJC4YhZNUKQevagkQBwLZFoBP9cir737DNEWIM6%2BLvWYycalt45dpbO8mDnhQjcJ21P4BDZGtt%2FHI4Tn6IPFcK2sf1soa8cZtpMI1QTl4m0t1%2BJv9LdJQt55qmFsygVjh9JVtN1mtsoUlKrt%2BS%2FjuigPpYJLqRwGSJAk2U8S9Gx1l1Fp4N9ToCgCZWZXdcrSYU9Ria36E4jQhc5Nd44KmeJBgLLB3v7oO5UIwD1Riyt8SwkIuuWSkgLu3lg8JcECzHlgBWHTNU4osAD8a6UPJYx2VqPyCvThxKH%2FviYaamkkXICQCaencwX2snfTqKOVi0qKu0MJvlosIGOqUBuxUjXFaXVM%2B6TXQKFvwDLP7iFnUwb2fEVK2b9Ez1JCAe2V3MbXXQ5FiIkWJgCOO8hfjAHAJ2meG6VsRRNfaffs0atc6nSB%2FuXo5HtxAl3qqNVebg%2BRq2vfjao0eT9V3fxmpJ50CBCStw7qPGl8UH2AdIJfGdmkGLIMOsfXjbKLZf5okgK43Av0a5wiGhznHy5DVEvCHl44Me7bY1t%2Bg1UY6OUX2b&X-Amz-Signature=180e68f33deb681410988f397130591b6135a11e3ba92f2a3e3cbd12b03f3c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
