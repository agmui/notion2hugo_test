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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPINWEAO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCakJSCRrbSeydN491821um2OcCh8P18dhJkh%2BwMZjO2AIhAIhI2PsINxvne0Fbct%2BP2j0TyYL3g9NdJ9kNcm7jtne6Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzQ7iwr%2Fu8DiJNT91Mq3APofiHi%2BIDkgfK0FDuqXPwVmtKaJsqfD0LAJdTyu9Bw0i1ChlSdSqFqJzMU5kYJucj2b6hzDOjcvxBfyQd%2FcZORf21iCM1BfZdqhyzdM4P7XbUCOhHVJ%2FbMatvJRZFCM1IGxo1DRudSU9m0Gs3zkcvdSUho5uXIlSZlWug2JOWPfoDDLMAr5ai69oaYSLIU%2Fi2SJgYTzujd2j%2BACzlNLdqgzfrk9OhX%2Bjsr9vpj3isKwhEu%2FTxQHVR3iSALnoITupDaPTp9AUQeyWadV8PeIu382yFY0hEr1UPBv86WzfWQqXnBclVjq%2FJIRfN8vBi12U6XG3ZVOxSBrU%2Flew7zndgpAAGSpHx1%2BpXxqoiflJFNkcuRINQaONg1zigQbHxjdj8Xt7%2BEAwpKNAORjw8XwBBhs2xuVjFN67s4vElzLnnCQ%2B42M8auu%2FyD%2BhKVuqcO1dPegXL45wvovxP41uCl%2BILQhrSjd5zr3L843UGdOB5bzB9O5gO14QKI5BQdSSEh5wBzy5enz0b7ciWjKwtMNYkoeDTVv1ZtOOyhI2xoYH6EHvqronPuCIYchosBmCPchqh4YIf7yAY5kmcohT05737bNB9kSSc9bl01ZoXNbccF4J%2B5jtaQn9H1jgMQdTDx1ILCBjqkAVBjlfiRceGF%2BnTuLclV0TAh6SNzjNQ7TkTJRo0MZVusfz%2BJV5glQ1gvKivo4VTaEFXoHzzGblQqnoexXBHhdjabwGnrhDOvK75SH8MjXVYtc1JmTpupT1inhAGDCKfupyZne1LMkxUg7YpVOpNH2Bprk%2FdyTWZ7R0SYqdbFsz6a7N7OOLejp9NCpcbjjpUH%2Bfk42e3B%2BrxqEN6wJ093rhCWtzMY&X-Amz-Signature=d6e19faa2985e3e2fc5739f5201f2a03b4f79f5018d43460b76e257f84565b93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDK7R3E2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBO3gnhIC088qHq%2F%2Bp0haEES%2BIm5VTIHjRUmfc8Oa%2FlAAiAikmKgWP43fU%2FAJnKAaJOnHgi341RSN8N4c6%2BhWsLI3yr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzwGGwqddCzPskvvfKtwDBXie%2BOMpWNxO3iMIct6BONzpi793v5f6%2BGmcCK5FYbHR6h4bCBn1rEJooRb3RL32pMBlFFZhkF44jxRpJPE8tbIgbYZtccp3kWH9i1NJbbsLOV0SkZjWsCi9B0zlXhRl08FT0TTkbcvh7vwFEgsQ2ZGq15vrMH7EtDJYt1y4RXitGbI0GP27zsbOBeFMM%2BmM38x1EyFn39TDlHRS0AZhk6u%2B4EJaBvTtmZFJ%2BQsn7Bj8DqXGiinB6WZJZ5n63%2FY1GJVilzySDDJg8hrGKqi3aoE0qdwZk9NvNoNQJou9EiaKOmM2GulTWw1TWjBEAoL40jAQk6vj3%2F1gfhrXKYa3jeHwwWxYNHrQKL9ZU4UVz%2BOE1HHcusH%2Blxbu8ockCpiC69BQDg79rQOqBgU8%2F07j2iSilSCZW4wIj9boY7JyA47kng4G5fEowSrA9p7PscDRrFGTl3kHvPUoZLKiPZWuROseGFT0AuCY86Tv5b02Cd0hUczOBr0xuT318%2BEiYmq60VxMBg2ovJdLsXS98POw5M5XKNuGXNsiX3GtDaGjvTQlIGCdk%2F52WXNqfK83rctR9ZYDdmPAaCEZ2uINM5n2rs0m04jzbO9aVIP7Tj1HRQYjJd8qZIOlbZNlsNowjtWCwgY6pgFeOLQAPT43F8Klthr7hrYsnHT068vdUgHMLX8sMzICVrKGwh%2FiSG38ti1lZxppo52fc1QSnAA8DV%2BJcbOch2MqpMjzUWuAa8jxa2p5Dwb1ZrF74ugRUuGQjBALbAyW48jpieSMH4%2FeRDaLDTlaZf0%2BbnKsDdUfW29tV2QkoEd6JVh8rlx7iaT5RSUSlWDfmXhvqoVqu5y%2FEPeynF5bTCXJSVozLQ3Y&X-Amz-Signature=51c20b60026f0e4751aec9838b82586cba6feb62a1280c89c4ab43bc6cf69143&X-Amz-SignedHeaders=host&x-id=GetObject)

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
