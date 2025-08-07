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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6ZZL4U%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIAOmQ8svBvnYPnaGp5l%2Fg%2BPlTiUjZN5UrHp0xXWw9qv3AiEAibzXp4%2FibarHGQV%2F0LySvSrsJ5yJeO6pptO1%2B6LZqi4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3BfQqlJ8gsNUdVSircAwl9yJzxAi2TTZuI7X7cIXFaM1hXqdAaDhZa7AbpNbLIlA7AJuX1TDnXC4h4hDgHNbxVWuF1pMA%2BL%2Byjd6GslYeH8nQId55hPYEGBASFyDXci%2BURA6Hem3R%2F5JcGvRwUi4eQuZM4%2BfStP92kCIFACm1PEAipVVOPgBXCBd2ubHgT%2FFpRBLe7bhRcUbsI3azl%2FbA55ak2PIURIPo2uv7GyRPMIp8Ncb91mErizeVJyM8ADL9rn%2BUXHUiXbpDvqHIFLIM1h7qtCxEpT%2BuJEt%2BTCmWXNgB5aTzQracDOVHiu2PirrC8ibfLyAHvuwnjE%2FOlm15fRmyiTNIN%2BrQojps1N4uCdrOjj%2B9cRe5XRKkRw%2B8VYG4dc8hTA2Kr5azpSDMO8NEdA6Kv%2FIjfhN4Y6HMA%2FUR8Lhc0Zbuz2fz9xsv9bjXqR1sOctEtofuB6a%2FxgTARLxygiTkDT4Pkl6%2FqoHyLLeUEdvkmh2AuIU76mpUIOFo8bVXDzgbLCGvss%2FLWVLvCBIJI2WtxmWXq%2BW3IfNfLXc0jdYBPikEwZu6i99%2BEJFayqVdcZvRcujQwJRu6ssjlptIfIWpgnmnfs7UFnpFN4URikrExZ0NaMeG5rZe5tsuQPw7LhUYZpaD%2FU5xJMPGH0sQGOqUBwA0X3XLD2VdR3oSEzgljvjtzXBjlofjgjIHVyvcavcNdfYoGH879ohLmYEdmjTfOU0yexVa3U7GXxByp17ikbXzNUAuQ%2BCXw4daDxNG1Hh1%2F8fLHb3JvLeHKI6d5uwYVRYOZ9k%2BAsOeu63tgZMTXNet846G1F3ivcd4hdgqmOsxz9roEK725%2B6I6Hy1kSiunfFtOSvGTyxtmNO11in2D5Vp0wqsH&X-Amz-Signature=4d2b446a7278558a1ceaca1a9f99c73100a9795640656d34debcd537f8756746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBKJBJQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDW0HL%2Fmvk5MLNeqLCoIrcBsu%2B4806LY5JN9CCqlOx4CAiB6rP8FVt7uXbPE6Va6Fvcp0pXZQJEA1qJ4532zQhDwvyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6EuNHa7ihRJ1KZKtwDOLDPFPgmB2GMNXCENichnpyxC5TpOyFYVIhQUProeQtaUTDNS9nZHb5sbxByay%2BSmienpGsA776YhbBSpSpdycUvsWJcVgAX4D2hlOLC7X4A6oDgMbs0iE8uWx0BSXIRw6cqeH7Hy16cw1ZetpzOR%2BVTLwwr4RIgTvGIGQW7XoWEyW65ZztcvvX9ng8qzNOZRS%2FS%2BSjhTTyWnMxFSTpDKHyZFeewAwMNfdnWChoq3NYBuqvtu0UuimkvbPh%2FCzYiDofaSiwtW6rInEGD3r9vgIuZ1ao4RfdekF3W9vbOlPDbfBlvCVaidvFFsuCmUM7hecdiu%2Fcj2aqsuKaPqT3xtsJM8zw61V55k6GV4UjV3K88S3M3JYyYXV78pWkleviebP4%2FCaU%2BTustAiubeXdfm4wa4XH4WakVeGQ3UjgnFYbfRHr5lUQbX52jtPm9s%2FKkkzipXpXaddrg3g8wcc%2F4nr%2BECQPA3c%2B23s2TliEXpx%2BThLNSJ%2BlG7Px%2FZmRX2k2KYcNXd1S6OInf%2B045lSE54QsD5rzm2dOWiwmLGHSagFanT7tmNVxOPYFXpz9VWtXEb3tRWCeX0H22dAoSpk1HpU77pxBHLm4qJQw8yfrWWTyDUw20LraH4D1PwU8wz4fSxAY6pgFgZQ3bxH3ZHR57IM%2BLjmGo17qsyD%2FKLGtu4hzrc4Uh8%2B3wYrPzsL4wHn4O2pLc5zq6K7epNltz9mLsTMRPqbb4ApBEwriZQPKZGeFpJ4swACAlJMza188eaw%2FP9J1JG1TidPuNcCEkhaDl7w34YeLhZ7F7WF13yXXIZgzrKqyM5xs7dP3rhoLo%2BL1cMb8Ek2sF%2FZXVmq%2FJVZ%2BB5z0SgOoOcVN8UNpZ&X-Amz-Signature=6b207fc92604894b56a1a64c06bf7f22dad56537db34387c1809029ac2037c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
