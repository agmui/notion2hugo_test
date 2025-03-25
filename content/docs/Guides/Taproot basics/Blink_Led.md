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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6BMWIH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdqP6MGeS6v6TcAjdSZwj5XzhGA%2B0sKDXIQunE87dawQIgER%2F%2B5dAn6%2F4ZkxfkiRYNvtgNWtbDuDiIItQdJx%2Bd0YYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDFZA1LVuOkb38nu8dSrcA5iZrhdoVvNM8AU8fjCa%2BOri%2FyksN%2FxUciVn3PAWMeDcIoRbzAP3EJaKANmJjSNr%2BhxoLMJSdFhwcJC%2BP9RV%2BdYCkh1aLecMebGFAlmVe2htwIhOUXQT2LikL80saDnph9bcnpp4a%2FVfGseCGj5xf1%2FH9YRikuL9p9uo6N8pFcXnu1abD0uqrNBfw1q7KDCoI%2BB2QehwelHtKJ8ILbGug5vc0Sk7oRPvVRyLfCpUrlE1SRj%2FpEN%2FBYKUq6NcMOoxXt6N0yUtoaBz8QKhqv4X0THdtMMck3ciQf%2Fg%2F0nCCkjH6R5JfSLk6u0O8zznP62u04AtNCXKfIcMQxXujXK5NrE415%2BUyPDvd7oOYyVez%2FobIu3caISeQrdljV8WdVNkTKi4uUgxQUisbzXhsqhtHYbLqiI9G6mrtrVfgFcZXRg07rCXNKkvyXjpKi59pCMco7CbLPa4FwGCagPxPlHtByidW3jRqgGKNyRRjeubbtSZqARUFuPi5fg2vLmoH7DEAStn3u4uRT1K5BY5E3uX3h36qUlUB2Pq6edm0pqvfJzUYoZZDV6gq3oz0%2FNF0BelPfvOjqcbiPtkj5vESrngwoPBRO4lVj%2B8jl0sUSciNcV4oACAoCkClE2FNuUBMJPOib8GOqUBAV3p8%2FIOOUtce2ylasnuPm05ILV19xCKZRkyeBJlenPrxNwKCRE4OFmapoUSwGNOX%2FeD33DeDYtZHb2r%2F41o8xPY%2FoY1pQgeJGacst0IKr%2BKeqwr6oYpLlzVgAKbjFncygzBZaGzFUm1QrST40otYp2WjoYJIQZsa%2F%2Fi3Z%2Fj1D7Zf0mbVoes7%2FxxJDkQvZiTZZOo9kWdl3NhF0a6i1ULFQjGRsl%2B&X-Amz-Signature=f883a2251da189bc4c88863b3c107b54733198912bc7974c88308819740a764a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JQJROJ6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAjLoDOMnioaIv8efKbYT9ywse6bEOD2XFprju2akNn5AiAFIbFWfQ1xcZiX0yGH6rZzq6GI%2Fd3O%2BFwiqtP%2BAVk4wSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMRXBQJbfNblXCoyRNKtwD%2FiDBBXM0qjY6ai6KFObyGHE3OctQ5tW%2BBCrp3A2MBDQwAqUEHRuO%2FuVli6DP2ELHZaGxAPDX7jrGhn7SBX9zm2xg%2FguoI38gvDeHrznbeil9iXB%2FO%2BYi2vFYE3hA9r4ZZ%2FtUnQ%2BW3JZ5Dr3wuQEv0AqyERptwzaORaJWOTQYYIJZQB6h3VYIMrRi4LSfBpXi9A5wzgOmXby0gcHlXq4UD4hzcJY%2BSYyV0lp7YME3qgxqLfNV122FHCC07m4A9JGSfxN3uPD1icmVD%2BuoaIBh1YAxl5oqn4wxcNL6Fp2p%2BmdortD1oLrV8mnw5F%2FD%2FIwq9BTvUMhxtAN5x2nEBxgs8R94SarZTsequ6LvrXuY7YvyhATN%2BfaOZ0RNSNCOlPOlyPTxTdcVu0q1HsoG4BO7cgjXPmC2uRE51Jtt%2FswsAPevQOpV7dLOMYMDyv%2F%2BOP%2Bkbeh5lbmIGMpNKSoLOu18hTvzoNnugvQnv3L7JVcEZbJrhj26pkfdiTP1An%2Fymmjnh0hNCFnMbz8OU3wxfcCnVHPwl2QSZio7I9b4h5Re9lWzi1NZJnaHhZwlQrWgwbB7ZGjfDTd4uW79CGRX5vUwLHeeGTKU78qicG6s29xkpzKfClLB3pmI3ifaucUwjM6JvwY6pgFUSbkLQNCis%2FaVn6Mst2zlQzQ%2BnKPDFcJNHm8Jr5XX3wiC0f09335vLbh6Vcka1Aoa%2FOPhBqFNxBNwbGFJR8JloFZDoNhqHoqpDRqxodIlC5WeSckmnWbBtFuJqlyyjNzKRO26vxj1Zxs%2F4sSUx%2B8njdNiwmXG%2Bw%2BuyJNwGImUbkFjaCq80TlnA0HkfuwStVuCjN7OzOUNEitYJK7Nqoev5v7RTfgZ&X-Amz-Signature=f1aeaf07b86f9234be98b9f66f896c2cf9c2fecb4f90aa86d35bf3e94ee9c248&X-Amz-SignedHeaders=host&x-id=GetObject)

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
