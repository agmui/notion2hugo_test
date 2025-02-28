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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637UU5RJW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHTqE0GriwL8TJLRVCMf7ubrF8%2FyW%2FGwJB16pk1U5MyMAiAGapySmRdTWIayUdSKd%2FDD6L6eE9Lh9iCbls8QzdFfsiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWoxSflvvpZOUdmwOKtwDsmxbHwf95Hr7tCoK2pTV5POOIiI%2FD%2Fugq0eF2ISgM%2BOCvG%2FUcCk0aNFQpw%2FeH2XuE66%2BkoFUYZ7%2FPRturyafvu5GpHxrx3thIr0JfUzyybxZocakOC98oma5tSYAHkgvXoCWnJPq0VaEx2e%2FfQ1SkgK9IUwi%2FLB2pZh%2FmSWoRVeV0l47emlVs4EPG9TnhbIdJ1uRTBehI8VIIvsl%2FU78q7TAoOwtI%2B9OYulNRf20x6j3e2vGVSdogKPn7BzHd9j4Znj6rKjK3ykO3BCNr%2F8FU2bh6QMhzGtVV6wYW7xFnpO6pmj%2FA%2BFk%2BXAKg%2BZ3jMhQBfF2BK43GtcZILX9CUhHGNPdY9AvFkfz21mFn4oWFmOctoSFkmfzjcL0b5AR7F3I0pr2PxeFxX8HQzlD2bo7D3IvSzbxWcaYUGONZ%2Brk6qStevvqOGV5CkvJ22x%2FtCDJ9Bsg8j2pwOIzOMVs9s%2BTlOQdlKk%2BB17WuYe7IjSYqwjt8dAVHkaudZ9T2R2BhAdOiw1c5UMRzvqMmpZDMAY3ATXNFoHqeRD8w%2FgOqB9GCvWLguIgLi9Fa24TOCGXouFVWjPe2t6%2BTpHQKjah2UwgFmU2%2FdOm%2F1INWs93v5UVhGe%2FPVZaOShtO%2FTRyuwwmbGGvgY6pgEhfADbVa1fHUubJoVft%2FTRDIhzh4i1nDzkzvmiADdSAi%2BsT%2BrUE63mi%2F66wKqnlEISlsFqX%2FwHVTfKYIg1OhygMqG40bNnLAjDHnZeCSAc8EF2HGjDnQwQBnigKTQalnvZmsr5jQVt6PTz75AceZVAXdMvoUxamJNHFPOYFDhLbog4iK0L4VypxA%2BfzuT23Qqb4UBUm6hRSmcl9%2FZDFc8HQSowboHa&X-Amz-Signature=e9cb8905e2e12a3556a8b058a7a29df1984725257c0682d8f43bb56646cdac0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5QTM56%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBcPU4pjYjsHWOaVIiI0gwMkV880lUvKlygbFhfWqDoiAiEAygTYoCgtqT5bNyDKeekBDjKBfnuY3Ujl0lHiHg440gAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjYuKVRv6RbVc3EqircA21%2BE39LgG0JW2EFWFdtjeZWlr62KPGQXZgla4%2BbAMt86h%2FvuqgPL3HMKvosGghA53b3AejkL1tDK6ByCf70uE86Sf6pmXZ%2Bele2wtDV0ufGYckmEbPT1dbFCRc%2BCqq2bQ%2B%2F0FDKsnIChLDACwpo8kdtzjoma35vomLPwyjIkKmYH9jaAkYU3aRQBVjtwUAa2chqy2F1mZJKpTA3RHQg3IGf6VIIdfJzWjtkcFkroYNykB7bFMEtoG%2F1aEq114dJi4P2RimLd6aBCnWBLZlZ5uUX4l5Z9RwH1XvWxjNb4dszus%2B5x23LvVx0FcXcvkvz8q15RGjg%2FA%2FnSPXn1FA6YZ7xiNCxPgny4kMQhNkIzh83gWqtnti43u9b73c08HHGSJaYLssWw2a%2BteJ4ziSX5bBJ5eRGE1%2BEPAHNgkAWb0JnvA7nsqqOYe%2B34u5H%2F7fEmvim6TRFu1yBOzfh52Chw9EjTCt7LQcrO%2BAHZVS3zu%2BgziK5PK7HmDL9dvcXuFHQs2cIJm%2BiThWC6oYnI0%2BsATyD4gaytP94ZAb6kPRdBo6AAvurh%2FZP%2BC6J2kxJOjTkSy1eENI6R9KFHZ%2Bvme9G19jm1z3Ou1R1zouzOr8U%2F5Ix7wF7sZ4MqRbHDdjnMJ%2FQhr4GOqUBvd4RvhoOKX5oIUxrjbHz94YRCIuSlXmk%2F7L66j9YS7%2BMNourFnVnJvgJxuabvmRpU1GCBs34I03RssAozNtzd2b62aBLlbAd1WA0UUiLL%2BiPX68VOgG%2FZlY3B2sTDnmPYqILWNAMD8uZljVhFXewcU0kMEBe3BRIixvUFM9e4vh1Lr13diEy7GF0VTe90I4oWTNRehynsQ1ACM9eXO3zbwJQzMYj&X-Amz-Signature=8e2308189234dd18b96b2acc5a85154eb34f040f1443afb1a4fcf5476b7e7b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
