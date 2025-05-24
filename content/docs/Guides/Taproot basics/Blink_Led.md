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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB4LSIZS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCu2Zp8I9XneEjldIUAnw2TJXdOzHX3%2BOc6W8Td0KX0uAIgHhTY1zamCNYg8dmES4tgLh6b9QjyqQY6iNZceKpNtgcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDJ9P6eHv0drTEoNYCrcAwsEAiy2sRe8MBnib5xsAxIpdbhuzx3ZObsd%2BVHpVUblvlMntAsjp%2BrXxybO41IP9L%2FhxkMaxgdNZmARyu9GAlZfNfzYNw28eH2wUdyhuThz6R8KX7FPL%2FTn68PlNmgEHFhjOUKmtWeHderXQ%2F8FoRA4N8u6IYQxmBZFGJnGKLmPiCASL6icA2Wos3vDcH3jKWzSX0qdjR01cyuy0KnnfqLgi%2Foj00mGyV1Ota28VR%2B%2FhMKSCyIUkbltyINIC00DJiV6PhoC6a5tkDTgQi2mQcCrC8PqT%2FrEnljMyG86q4eagt%2FKeKTWXIaeAVPThiLXggfVWuFAD7QsVPsutT2dTw0GS8Gi0KdGxdYJ7zB4DD1PXgueL1qHQbFTFb41p7sc1b3bvYYimLGghZz%2BbIujwdkvfYI4DXQRrVVym8GqW9geb8JI24SPF5vEJBTFnAstns6PQVkiNXdk5Nn0hGyr7N4XHPXY01yolVNg387hdW4tJn%2FRUgj%2BJwYe7hT%2FW%2Fu%2BWSyhKP1fDmUjijxo0tUo1P2pGrRKvwlVtDFz8YGIXgvn80sRzjNhYH8UEIwBENgQlqFAzUy4hRd%2FnTsV3TO2yg84WYwgvy07WdzDQSaY2wqqWb5URtoEdRQ43GaYMOfRxcEGOqUBHN5BIKRM3SXW4ugf2Fatx%2F31Yd%2BXqEMLCT8wkwoD4SqMKVXO6bLonQHFjYEi6G%2FfW%2BJbd%2FTiBcAbafVpw4v%2BxYf93sLel0765Uvdofr2jcpLoxoLiOs1aiNJ4t8u7rJZzj5yoyTqM9GIf7RrW0%2B2r90ykRIHMVQKAuVasJGOkYp%2Fcwvrp2BWe%2BqGJJa%2BrywyIXmWUZyv0F1f4jvAdHE7NFLwuTI3&X-Amz-Signature=cfeb4ed1f59d3f9c8439f8b382ef9f23e12225f2535e432d6936dab9846189bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA736XP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIEcHastQTSycqy4mAzM%2BMXDzJx2BZAYnGA5yFwTzWr7sAiALL%2F2CskVEpkt6Vh0IidqCXfdLVeddRDMgCVGXs5UEUSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMnsZCRY%2BnKR44VNUaKtwDiC3LTa6Dmlqomn5E66t6N7UlBdANJQAZHIXBKGuHSIaeR4kNs93qszEP6lQOYbhX%2BjSuwPxoxTas%2ByMDXYDoscvGlwaTDVkO1WW%2FOGf2AczeUNHgO9%2BEn5pkmEsJQ4Lgh2rOQDGYoTCuJCEhiW660fn7XzFzLzbAMl5J04gniwcTqMm3FzxBk9naEiUUxl6S%2BiBN4QkIH9aKyWK%2FAyNtOSQmk440WIzuXtv3Qb%2FeL4%2Fq7OiT%2Bv%2FYjbTFlcMRpYb5c1MI2qFr1t7yqa4Dt4wEMsiic%2F%2BUePAP2DhZUb%2BaSyWa3HctffF4jb%2BTIxzKAERIqhn4OTfwUk2402RU9bmZ2wHBY3FAphlMpMcHPvODpX%2BS1dTJk4KOj2rrTcKhfNd6vp5QdULvjK1S2N3G0YMKukjrtVU%2BH2XHXdApnQ%2F9xuUB2Cgjkth667b%2BtonwezSRCQB%2FQh4ne9hQfl1inQYcVgeIeFUQJs8CBnrd0he%2FcnZhAdQINw5QMJ0NdGNwWVxYLVfxjQG8zGeDUzNNm9LCHJnaP80Wt48a1olxMxbEAKH1J0yUC6cMvNJ6HoiTRK%2B%2F5jYHWiTXo%2BrvrKL%2BUT8%2B%2F4p7OJTzYLMbd9UioRltyUnZfVhD1kmbe%2F227%2BMwtNHFwQY6pgGtrY1m9LffyBTfSzvIJIRY%2B3G723bqJc7gPnaggyHt4E9HVZX9odydJx4qZwfXw9rxIzSjmuZsvcnZr92zqguzJBIx7BzwUA5UN6ZgjeFiUFJtw4AubpoKnpScgdsxO1l59iH4IYclzqIlmHifA3NRC4nSyxviHNnnDBfQhdWTdiz0r5Bi%2FmV9HNu6MnfYDALe3x%2Ba2mzQZK3xTg6Ac0q6E%2FKRzplV&X-Amz-Signature=9315d0ffcaddf90ba44c8455df91c48d0e2b1eb20ab4efc653d219274d1e39df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
