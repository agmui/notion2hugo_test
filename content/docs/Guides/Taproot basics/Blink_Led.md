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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBTJKUQ6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAd9yhZ2y%2BSQJr6%2Fm%2FWl3AXmspXRG4z19ZnJbaDfiBurAiBeun%2BKd%2FjIfji9DZ5ZOcqQLTOA2DQJW2OLiB9nu7jQYiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjjva7k40RNNJRXlKtwDsEG5uR%2FewVAJ%2B2AiMrsYlSqgdq0FcuUyYv3nMcihRqTCSV%2FdemFiI7P80Wq7W1Zc6tjt%2FTxMGaCbU6LTRnNdWtwNfI45Zj%2BoX3GJATuSNpfshto5af33T11ThJds17Ee9n1RS7%2BTw%2Fpz54XyAx6m5XK%2F6bf9nVvIO20OB9Q9wZEjWOjXveAxCLDtH7USp0Vb21KD%2Bet9JBJ52CL66yuUXb%2FQLNxt%2FP98Yh%2FSzurvE1Kbc1z4Gcsndi8b8cQU992Nv%2BMUFtLkaSUdHklATFIRcjrdJWd4nTOc13GxxUoHQ2kMSzGBvdqqmUIe3qcgcMEikftkfwTklgr8dbKR0FiK8y%2F%2FhrR4gMUVyDoyErQVY1eVXy%2FZPGUafEgcSYHIG5PRj27W8y0BFpA%2BuYnf2ONlsK8hZcHtRTB3PAVFQrP1uALKLcrGZ6ZI%2BgSc0hW24QO8qaHGwRE5hwlEM4LGryxXO9pvtHHjP717WDP2xtSVNmmpQx80czJ7E2OIUbSOl0n5BJJHEQF533F2sUghc0e1KgWJQDLMd5soX2icfDw3cniizsK1s7bDJe3OfNS2W%2FCLEmJKkxKXhEEl3hh%2FAxZ9YaVQDk%2BISneRi6JND4vBLgInmMrT0MTtlKI20mMwhMmnwgY6pgHbJBBvXbbySqKyj7%2BM10VKvvr3%2BXBcwFbGbnXWjWH1vMhcJff8jxs75SdlC0Ktv0o80ntMNKr%2Fzr%2B6amx0PAlOhX2V6rLmQb%2BpBfaqGdvt4n8yyXXys1I7vW2epApY7lrUfVtS8N92c1nEKEsq8hQulNRpHNlXv2YJOwGuAp0JwsSWgVvFz2ySDswqz2uPCWzvoTq5LROUcHF0ZDDZsXYmSUl8VlEW&X-Amz-Signature=0d19efdfe159f465bcacfba369538dd64a4e4106893cac1fdd792debcae86d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SONVVNYU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDF04NjACLcL7mIN9qSfQZfVFigxnObzUgnvE9pQFc%2FggIhAPm%2FlF7uX1vr290a4jY%2BTVEPb4Tppxzfdn%2BJLsXbrXV4KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7gSfVxsBDo30U1Mcq3AOhVzYSBP3GpLTtBjdg63Ca3aOJgf42KMMOzLKGfJ5MbRrhPCReV2J3HiMQmAb1KWgGONdtUbq2L%2Bq4D9Wui08OfUPXnL7jLxwgPpXbVIRjARzzalWzQnNYqYyvSRaaEruOumuTBFsdaQ2Y7kcUWVD0vQiaDUQgpIIt3BeqQHBXRQ%2FHMDxlrazVgHbOuBBEgLNXn80ozGPVlueHNOyZZ%2Fa2P96Ep1lBADKjamuq698NL9%2B0IlcIaLI1ygJjDt%2FnZim7dtCCLvfuwpOsrjxmHoNVm7BZzj%2Bu8ly2XSErsnH2QpHwzScqusyUG68qr70uGi9gXejp1VNe4iejM%2FZv6r67QgGvZxHykzyoupMVyM%2BMpJzTBTTWQhRXY4Sm1xlhzmSyhaE3xgRgUqg8kLoWRnw2HGz5sSKvtGVDh0ydSzAGjAiUFfZuXLbEDj0FPLkjWdvRUqt4y6Qtn8I9YFycmOjiirUe57YEpFPXLsyowTEmZIEoUrwEnwR0SEfIRUUc%2BhnCopcV%2Fd2WlDpo55iT30d1V8mJkpRbeKFEwqH9kuCaBAB%2FYtoGNq1n%2BU0PvMzfiBMS%2FOYsm7P37aT27ns32RPbc7NJm6fDvaFKr6ToAPmYnNQFkKRONvdxqFHgqDC4yKfCBjqkATz9C0J%2BYK%2F2Ar2ABEtuy8AjXkGODXG9LhcEHEjvBfmFA%2BnvomwBOpGXJcpnxCayO%2FyYy7A7HY%2FxUnCTnZh%2Fx0ZKNj8WyWZcNj1LVYIpL65tPKnQ4Hifm4eBlZcG%2FqY3RhOBB%2Fw5Y9VMTzcG9EQtWNfOYaxN7Ddp8OFp%2ByZ7OFZgVE9ZXzmC0fVadCc9AjjRK8ZNo1NzbMukzwamEO49Xo9KbrpT&X-Amz-Signature=66f94f64dbd9c374c054d5118f8700bd0d329cda735f41e034390abefaa7b96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
