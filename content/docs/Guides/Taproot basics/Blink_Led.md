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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUHKHUSN%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC3QMazLvL7O0PsK3RU0CYDfTMsSPG76n1Lbjr4oBNgdAIhAKkAY8hIxLgeXzW29odTrB%2B0UYpHZ3hw3QVMg8e1w3zeKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwso8zEsQUbxmOEQHMq3AOue%2BypfP9gdEobuZJQWrhgFAj9cenrekblqfwhsHQBEpik1lC0non7nPw8MHofGvEPAVrvp9StqX%2Byy03fgUrvSLcAiwxtG%2F%2FflVBfDFUodOe5uVCmjw5YQO1II3d6ti2Ng1QTmmwHFgiNOFqf1A6HCqcyqiUau2rUYU%2F22kVCT9Wi7uOPOEoeQsjSEKQEE9bVuC1sNOjLq1Q6t%2BIpqZnqMgOsq1MFk%2BcisuzuRI7vcT9zyVuv5YOncQJ8GyiO%2F6%2B2l2KX%2BNigEpPIugsWtj6wlNFFhTNjo91dWrvdNCT6jFOOPjJB8G6jwKhud2R5WclZbZyYxQd%2BQZ%2F4px80%2B11TiB7uNerc7W1XVouKcQrYgE4QsALt6qWWdQa0AN7LaHqwRPKvk2LJ8kSiCEReqLD0%2FKBzVAYKltNJ73FPK97Gs8WkPziIefeDFnXHQOVZoYYGfH5BapBDwk9k9U7EUueRkPcu8HzazScRzw9yjPdm7PloD27b75AJiY0oMPrcDsn%2F%2FcdpRNT7HyQmjA4eNvJXZ3yuQgkS7J29URPe6oMM3pxEax6vI9BYSc8DiTu4KH2n05L3xc26Yv7LfSHK9zkQFHiHWc03a%2Fc0aPt0VuwO%2Fz5Qv9FzSTgwedmo%2BjCF4Z69BjqkAYbzd5ix7zHGHGqlBv8RFvxoPLiFmG4b%2BaZOzD3Spoq780sKsuT2xCwYbGoPZOSmkLIRbnuloexwnjLm8Feo%2Fu1ZAveHQb3%2FQVV%2BkvtxpFVoKTJYoaGyP%2Fd2zircltUzBPojqiKsMTpmlFoW9lcT%2BZsYMn8HCr0NjpsE5a7YNIo%2Ftg%2Fw%2Ba%2BxIi6TVHG13c%2F%2B3KwYLMin83av1egHPlRXJGrY1hmQ&X-Amz-Signature=4681c6dedd1b2c82910ece4f147b0065ff5751ec14570733bc91e25b9ad897de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JEL52C7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T200706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIE5m0ULobgTtWhj3NSvKcfunZOCUqseSc1wqJwPGxOENAiEA6LfPz%2BElNzIsr5n4mFadeGkHIVtRN8b98AIDgFgyDHQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk0vXrxR3tmm89JYSrcAxRM76cNtMG9qJn1%2B1mSEDLpNnzFEU3FL7pJUh8hfOddzyg3mdEmUREONN1tdOj%2F2UyH4VR0901I6byLrzPQw0B50Cqc0yHD13F0YKZE119035DLUJj%2BHe5%2FUxyE0v7CnGWc%2FSKBoy94nmWusTFa7wIUcf%2B0i3PGMbGYSk9Yzqbc0nisQHIOmVSYRVDYn9QJrWs%2BbYKhf1Vt7%2FFfTPT6RBiaTY%2Bk7vkqLS0JQQ%2B0sSpj68Dtso6O62w6JZxPiF0dAhP%2FEfLBj0fiJdnLJgDKBi2TdB5M67kQvHEGrGA0pnVOpS29ZUl3%2F4RSfd1P7d9%2BP9ay%2BsbyyERVvuuVHyssCe0Vn2eaJCHdiaPlDHEgxFeGft9nzFNPXfaBrmnjxwsAIrOCGDwUflWTaimB518ZpR3ZhKNXtNpjjD5qCLve5rBbRL8gToQj%2BkCrNVZv%2Bh5E2A1pBC4g88rf0BqMVHA65XXMr8gVkRudQBgSZMe3b%2FkJus5EeLEZ366zEu5giEgHrN14KGkC8JhYJFrzeDnXvTNvv9S7HUyEvJiT0It9E1%2BNbfY45TLqZoUOYzEqsDe36ztYpOML0vp8EnfbNB8WGkfOCiXuQh5CwsFZdd3Ck4Pn2PsMmv6vR00KsMlkMPDgnr0GOqUB35BGS3PQxboRwndJXjB1nduTsXYWVfW9xHAk8%2F2bQS9SwJmH4o2QmDWer%2FDkIenjVChi5KDTHWI4JEF6V3%2F5wXRKCZN4y3ITMuwXAxeSiUq9doxN1jQs8augmv%2FuyeJLboAz5pOseQhHrG6RuveQqHPRgQQyZ5a%2BCw7epqfeTRX48pv2InZ6bVsN9p22yo3c6UNsNCQqEJQvgQRl98oYE7xDSm%2Fp&X-Amz-Signature=06daa0d26a8b04cbf9a09cb89bc749c8afb04e9239e197bac2d5f87c436225e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
