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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6A4TPXE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAuefZ69IS%2Fc0dtGKZP2C0syx%2Bbh0F49DQNe0PYjUmdWAiBiPa50SqGK2lv9PCpmmyNu%2FyUja1UOcLmnJt3jcRmQECqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1UxahDNKhIKDShhhKtwDQaFiCf4%2BCtoEfidX9MqQD9vN%2Fs%2FK1e3zBCCDepfDWrYMi0IHITxxPRhvjXgH9Ss2K3Jxvu1WzrXKtHyX3BM7xTKbwHXSE5fb0BuMXC0on0VkTqK3hOfU%2BYE%2FMnFyuV%2BRI6l0JCnI8d2ahy9tRSodiOXIIxGQtAAsO%2BPUYIZeeo2v12nU4PaLYdsF1mW4tfvxhKJjt4TOBAmjtAK%2Fh6CZkuSVeLiFxIEhawJ8UoYWtlobqqkDgwQg1op%2F3Q5%2FwOFJYVE7CmJ4TeGm1N0PqqKSSGtdOHs7LRRRWQ3eAX2aCFhEPtu3poHVCpBBQttUk8BcNNh%2F4X7Nwoh6wsMcyzncxH45e7bSFN6D9v5esjpHaaek0et4AGceIDXQHElPevt8MvLVNEM%2BIdlB%2FsgbdT29jdN1G0oAgt12BTyXboUnMSNr0%2Fa6IgOkbjj4sRM78zIGzoQ8u6qZI%2F16a3SuOfoYzaSUbjfsQ%2BfZ1UhFjWsmbvt9CgyTBMq7zLALVNPJKvRwLa4ZTUNToHieN9kprd1mK7YiuASiR60kGJXQUsKK0dSmnFlamVooTZ36Qq3Frbvdhje9bFoFDBDFtbJRMiAZ9inhbriq3Ug7ZA1jGQy90RxPvcVhX3lvFodTizEwqv%2FFvgY6pgGxyu6rl1yBrPvESMukquqTzfTwj%2BlCZIclJQYAjvgxCWX23CDxiQpk0VnBMcEe3eE6YjFLh3OpwXj%2BFdZiGduU60Mq5LChuvaGUzrdZyl%2FbY36461bkrEV%2BeeQoyTjNWQotJ3MGvoWi7K4y2L6jZipT%2FYc47EbuRAOcOm0nsVkt7oDgBItTBFO7cAodn6ofbLtLDhKMMA6GBgHN9a%2FqH%2BlwTCuHBrh&X-Amz-Signature=0cd779802c638067c4406a40ad71d102338e770b882cb5805bc6714c1a828833&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6QHFZY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIAkqgYR4rpqRcL62DoRkcKu%2FSsLlnfVJpK0Iysl41h7YAiAfZyToYEkmP7MExOw6UArItRntFZDSFGxXkF1Nmbkb0SqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2i%2B7fdDOVHOi32GaKtwDK2JMMEXbJdCl0XSQgOtlVaFpQoMsxDGXjbFJ7LExb%2BfIr1PU7jj2w1XMtNom4VSp9drlOBHNrOUK3RBkkikrdFgEQzRxeEY5bPKCwqyF3jXNViggeKzjUrAG6UjfsUeI%2B8Nzor8M8SFg71n%2BSn1jOG4jKl%2BV80mElpA6FiI%2FF5HAEW%2F0r8GxgticjuBInAuYJFvpDWX85qL33eL3fHmB4iguiRud2pTHNWUYPwn%2F7a72bi%2B0yrl5B82OXCfkJRhRYgjJt6gghqbdqFfIsCEuSuQ2IaM1HTLHl%2Fb1Ve3CdSXOblAORCiXMfeRdSwbrjwrNTXcXWiesG4EaI5ONcyLoJ2rJUursgSXMxZavMZ%2BetoqvIeb0jQajhZ0VuQSkYFnfrZESpEA5KQPxGuEoaeS4To3E7%2Bkzr3n8MXQfi8cPTalajGVEinFCbov7cwWNXbpcrZxpDoQyX9Kp3uglI6cq5OhvZCI%2F%2FTHxJgTYuusmwJEyaM9Ycs89gwz5mc8SFknBkBhoIXXuk1TFp8jApOQ7QZRoS%2B6AGhYZYTCrdVEE4XE7BarnTT2zciB7bCi9DLH84QtGxqpb2Lns8z4ulq6K6BLZmOj3x5mZxd5Jx%2FUYML1c26K57ceHFjVZcAww%2F7FvgY6pgG262S73D3ZyHnnCwOwnK5YsG1A7irowXLduwb190W6nnks%2F3c7hQmbjAz0IoBq65BFV%2FfpEAkq7ixOYmfuZBwXdSGf6JE0sp6%2BgIOl%2FrDNu8MsChSiHnwQs9E%2BZbFUAWEHmhr9rCU4iGU%2F8BnkXhqzkwj6Xxp1Qa6%2F9NP%2FdlyhUknZZUn15R7v5ySYwdtdwz9o2OF9dUO%2B4Q7dXODNwJhG7gXRo4Y%2F&X-Amz-Signature=51d0a59d06d64ad90c9adc3a2e2731dbdd9b79ea6788e78749df7c982efb72a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
