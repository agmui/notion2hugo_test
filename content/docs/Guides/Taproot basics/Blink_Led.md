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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDAL5BPE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbBmYU37pYtMavIf01XduOykGcFT%2F%2F6qTUboVkavsuQIgQThOVNvFpo8YpJ%2Fky%2FVBOnc3dKoIS7RL2W2iYkd3QuwqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN48z1eH6sBiatL9MSrcAyEzHiQ8FhO5GxJp0yFkCjWzwXwCW4tjd5c6boB20oJ25xNwvjjpg1qbUdJ0l3%2FRF9Avmvyqrs6vrYqcMWp4Ec3Kl0jEVhIlIMYgHaRZRwVGAgvHat9znDQuEUpxgDG8%2Brc0CnCPIP0FIObtj6rlHMZjCfuHEqLlh4J6cOMHk3TlqnQyv59lRSYj3hmXAlyWQ6nsgwy4rTA3J1l%2FA5l72el7KmtkrQiVVOE8k6dyOh1PuLAlM3IrBA8J20uOjers2z27F0KRSyLJB55qjjj5ef%2BzBJ9xFb4rnQNVxiyYtwl6e66nRpfWVByydejS8qCWZEAgewhGFp6nvEcDv02E3elAbOhIvetlYh%2F08iTpmuiyTBRiibtCX0y6Bp5%2BQoV3g5XhF85MQBMNoaMTrXikoGeCfbNcVwNyuIW2XA16n1xdqClY63ZFdlPF6dBvN%2BzlUpipSUREvP4m2WPYnA8OboDA2TL3BQDHw88upjqlmhoFS%2F6WXfenPoOmLuLqhX2gnSd3nMipitFxC7wKcdzoq1v8AAe05VJc2TCcgHnMMSuKlJJe2YsYEKPZM%2FuBEkKvK%2FylIv7GchZahZ37B6N6EtUqPHTjklvZCtqO4QBBqOvNGdP0gq%2FvZjNQgn4zMImWiL8GOqUBGvugvcOsEdm%2BKLH18uj8seAjv%2FfVFmNgU4sMta4ARtVKiKk5OGteKmSaNorbgujFXE2isEqc%2B65Yq1X%2B39u2AfDAKB6L6JABCtCe%2FYjBjauzFWmveERYx3wxcBwxr%2BYZJBwrkmASCs7K1VRbauhT%2FTFtqYK7O6sVkVkZTMnAHneiqwcCAUpH4OEmZLuhSQ3L6XxIfES7UB1nICvhnVEKqv5b2Puw&X-Amz-Signature=3647a1dd65f2129e137739e1c4003714627c2c90a93be875773b3c97136b4b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHWLKP6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjhSnkSTJm4JA8ndR4q3CX9yS%2BpSLS%2BhLsd5xep3jFIAiEA5CHlUropbdudZuQWzGm7M7UITc%2FuzMxfKFOr%2FVG%2F9GAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLWDL7HkKl2zHRy1CrcA05M5TT9qgVw63C%2BG6dwjJqDuUwBc%2BmI9I458uZZaxPfJ89zVUfm%2BGgi79F%2FO4jtHhelfKH4SmCROocYOM%2Bnn1EEe0kqYlRM123YEqeVFOmT42fwSiLuw1GKbMMsrAWuhsWc269mu%2Ba8pd2K%2Bs%2FrTStM5iub8G7RGdSjl78UO8LX2UDonxSNaQstPiueY1gWnePPC7BoK3j7%2FX3512ichlIgZ%2BgHrWU7tpzKmnsLb%2F5OGbuJXcG5a6CLGhOqEMrePSGH0Wy7iWHMoOWugrCGdiZunYqWt3J83qdN90IkJx6tRdCOrihOA9hayWAEBAP4GgbBGsh0x6DUvHl8ZBrjONkOq6tRg1biSbdceVAMtjpxbhpQXhRBxJjx6uriuzEoZ0p%2BaXC3%2BMY2NwvkAwxZdJ92OoUFoW7Ubq8HcHOdmrDZ2fRra35PEgHg6ldbqXcxNgtOgWCwPV1BkY6F4jLQd0b2EVzHrDC%2B8U0bHZGcaib9fHKskyWkmSz%2FnMqk8k8PydOsxwMVdbyDdh%2FSpBRqH7hNuNvH2cgBGcx2M%2FfzXS1saNCgdJ7FNy8sLovbNWSBvEBlldnYx65D4XEr698s%2Fm%2B5HrZw8C45R0KOPXxVye3%2FHBZaWzCANdfvFpr3MOuViL8GOqUBBQZYbmIB46N2S42GiT1OZndCmGSziBy5TOtwFT0%2FEKI8XsilmLnPAxd4%2FVrK%2FdxuD2CXMj%2BtK6oGmYBb9rJlV4nw%2BtOeP%2BrTB5jQQQikyGoDkftWfVgOh%2BZhjsRLdygGsCzCEjKWOUidusE0OuFIqvHv5txJPln2v5yOuAU7LExhzOd5%2BAmcH12wqn1%2F9yM2vh3kZQCn8vZ9yLhfF8Mbs8eLx%2F%2FL&X-Amz-Signature=b3ee05a03986ede5a67a9d5da646bf7bd8c976a896ec83da22d68d008ecc5f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
