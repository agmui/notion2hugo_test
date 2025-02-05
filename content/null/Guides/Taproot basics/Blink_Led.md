---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG7OCCWZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCEAZtzloput0brYmPDx3ZrHAWB3lAmeaVB1PbWUX5j9gIgM1SF%2B2JWmbg59ulTXySnyh4SWbjNeH0QqoIKy2dQlwIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHp9q%2B4gM2%2B0AdQvGircAyrYyGVNyHRUv8NYGVN3Oc7UzpIerPltdM4iiZ7hdxSJtwrMqwze%2F5FmSMjQV4DTaD2v1CFDjJfG6BnrD1DE1gMRuuI5%2FH74pDKZnvLSXWK1ANWv1C%2BLCBvhOATO4cAZYW3cXydoj9HSXg65yRT4%2FE9Qm4qXvgJ3Q0TfF3zjElIF3snQ%2BhUvhBITtVbNnROZ9vH%2BiCCMJBekpY%2BdxGEr3CElfNFkOpkqQ0PRIjv9%2BpM3GhBYCdcu7HN6v4gnOHWPPyH%2FJVS6yJPrOYcto09MWy%2BVKufRw61xxwadl6OEWlmAaRTNpVG%2FwraBuFMjenw9h1i8D4bkfJxfWWu4sjuCKd9Fg2NNz4w1LbxExOM1eAlz4r8%2FODv3e8PDaQ21tHLI%2BA83m9uZA%2FkfdzC9cztuoUikfocL1wCbcTVthaJ6Q%2F76eJ6oMbYOpVny%2Bp5T3G6mj4Mw6J%2FEdp6fc0v0eK98GS2lsaCtSIZOWohpMnjese1i2Sk5ORSFt5KVWI7kvHnWLjYXitRPgLpQW7FWGJE6MZALoRns8QNwhSNt4ila9EePKRf9LA6YQYcq38LjxALaa3KEx%2BgI2PXmRhT0NNoBzEuMRZkC8vczneVyJfvzSJGKaMs0LpySdzCS8vZ0MPaWjL0GOqUByCcNSAt9%2FG5mfEkWoxqFzSgJi7Qz75LO9bTXINbO261x8Ue%2BnoixEblGc8wUiFnmazhzWc0zVDzk7E8ulTAKpj%2B4oo3sL1ei3PDJC6sWRiuP9HKXWUYj0SD2eaB85uOwqVLgQFqupGNb22zq4OeKFmBp1QNu8No4bDCcDsEjtjLfo0jLxPyJ3ZQ2hwgfVeA4QN4FJeuqEzzIA8YA4N%2BU8mp4B3CG&X-Amz-Signature=f741fc9abcccc1ec2cf9a21953d0f15d7e30e13db9d4229aa46038a08b9fb4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUZLEVB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDmESxF5rHJas%2Bok3syA98owc70IzzQKFZU66sem0rjvQIgZle7RT6lD8GiMwe5RnuB%2FqzwwOoaOkBDjnIbNvNPcRYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBJQB6uHUp4Gc4UfVyrcA3rmXl09FWe0FMXgRCOeGMRkYNGyZG52nQ4oYnOrZD7hx2U%2F3RjWCB4X2ucnUUgDjUirrQE5CgpytszY9iBg9ZJhRJdes3YL0KSW86OhILUZDEtnc13DW0BHVgKbiUoaMU2pRZ7fMUh9vVSo3yjqBq4C8QrIk3NNAhvMtGR4TC2iS7jkUTj1ywtd%2BORzcAdail%2FPoWxfNw5jA0ZaZNIehQg1biTBU6krAQHdM22xXtgouhb5gigMmv%2BFPYyhcSKt6pPZo%2Bb32QLhKAV7guMV7RgO6rFY0Fv1wJ25ESEYpuqxldA6uk9yXEL%2FauOFxbVHZS0810zqIXRmvSoVaY67FF%2F1hglIBnk49922zOhY6CAtQ3%2F58mcFsdUzGE9fRiycsbuMnEevrmdTXitrJa92xJcL0WnMmzOKyv1uBVn9PYeG6OZoZ4PLorEBjTazNXm9ig8iufAmh%2FS4k33yqTmPChQ5bcNRaYOatW5cpXoaUaiHQIuuiFTQxicM76s5ozz%2BQ9OAM%2Bh0Xlmhm5drrAmMo6qNgwZRa2qj3FUl0kIrmE%2FnLhLbbMskaVxl32qs1yf3oq33yJM%2BCtTLl8QH%2BZDngcWdsrjKDaOJ2in2HIWnO52hS372T13NKTQ%2BjFXtMNeXjL0GOqUB00%2BBOzK3pUhzZX34G3haffku0jYW9cDS7Cre61YEr1zaGJVmOIL2lty63kXLZ6AeL93Hv51qn1ENZ5JIuR9TAbnc7KcnrwUUAYl5HYfXeFtzjwpg31bPuDTg%2BuY7HB8SKs2u3kbwwkNbodQ0wt%2FNWBmKk2kuVdhbSA2sNXZ2vBvF5oZ62Ro2aqW5bW9VqpMquJj9afMGru7DVAtwR1wzk5kFmCvG&X-Amz-Signature=83fccf4044a0a7f06f4db0a2efe22198896c6ce5a0cfce392884a15d191fcb9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
