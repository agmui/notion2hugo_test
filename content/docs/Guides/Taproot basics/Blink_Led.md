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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GH56WCL%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBP4RVqErtlmnTJy5QR5Za2JeRgq0DQn89z0oRAzxIocAiEAv2IhKSYooeLd5FX1BsXZjZX1FOAiyRSuj8rV1R7Q3WYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3iAj2tNKAe4iceRSrcAz3BoyPHyUrnZJUzYSMhltte1GkeeXcRnilYGOBOcXAbEWnKt2P2o6mwPOiLwbvjKpebLxTQHbnKi8RLJqLUm0T1E%2FnMjB5m4tB0zWSWLItITQ8XcxiCwNfVMwvDIh6ZNhkIWjFlYhoJIT1iBcyBq%2BYNVwrzzBeLESGZJP6zBh4c%2BCOmsnghj8kexrjosmHvTzGBaIrs5maG1WiZ3EotNXUNzI3v4VOlBoiIbZurEWrafRtdA1s5QXIIU0K%2BiR%2FJrGpzepg9BlkpjKAnosd7ygFiKHQ6TMEJ2oaI9ZVaOy%2Fzcq%2Fk02%2BF6E006utPMc8WSSSorv7gr38PjLNYDzYPHQLdGQELN%2FDRL8bOGbFXPjVGQJpH03eWgJNaHfnRU%2FWUOFOjOrT10YvjTlcx0OeHrEr1s9%2FLiYea4ys0DmAIuwtZ8KvqWBk2OUf%2FaNl1SxPHn59rk9M0q0KQzepTy54VSVtFVxyUfME%2FTxv0jLai%2Bu6Ezqcxxwqa5iWAQDhnd12I1jIEvCg%2Bq68Tmq6NvedgIhW4Qn%2BAvtnDgWccKCAotiqO2z5p%2BUAqFadwYiD%2FHkgfWKr8R0upRz0%2FzDJebzNJcRlmmimFxClOiiEx9zvcj9N9pHlYB%2BkdiAs7Zr9dMPzgnr0GOqUBPJEuRQL20ygVqYEtDvgKH%2FneWVagf%2BFzP67whq0xpJAnSbjUimCMcM49zhXUYzgPO3RsZneTWMZOEkrBmsKXBxsjdVG05qLDd%2F4rJnsvxB%2B%2FkvPV5eEW2eRdq06084RGd7pF%2FcRJWyisMRE0bhNg8v6JvQp7PfXJgjwj89GTQsAfiNwx%2Fgxtzc6BzyXz67GKVwcp%2BMvAg0dujWvUJ9ImwOYMCO7y&X-Amz-Signature=24819ba6d96af4769b06516ffc5db970d2945a75f3c44c0a33444495fdb6dabb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUR7R4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T210210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC3R%2BqmM2I5fk4hsAyzF2T42Jm0Zi%2Be3kH2hQ4MkdfW4AIhAKlFNMizR2Xclsd8uu%2FrcQmfBGQT8bAZlokRZu%2Ba3xvnKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrDyG4aw9uBCxF6Ekq3AMcSfaq32RAgw5JOZw%2BjuZ66ISQc8SAi0eT5wvYgeNE02OMrTUQpiD3E6RB7HxlQ6DUxvrAbnCMYGR0TxYkcS2bkUS9AGTQgXCJy%2BqTjXVTNE6yyYDZ8IoQhTZuwhRDhxFtjy57zGwo63gGQtvjKFaXjJr5AhvKDtZNxyq3UD8o7CNnO1vvbFqacivhunCjksLcM8R5%2BLvDMN2iSDPz5V1kqGYNevswDF40y9Ei1%2F8GCbkIPFt%2FR5J5Ahg21rHJG%2BOfyyxWNOP62Lj9ldRVt4yFRq683RJUWwZZxkpqTfWE2vCgrAX5oWsBilqZ6OO8vcrglfCGM%2Bfk1ZfDeqtj8p9TLcvuEYAIu0ZOqVwA7%2BxRoPC%2FQ85tnr4GIXjGKSt1695yFznwuICnieZNtw5iMTSI9%2BVykpZLtxnorUArLx9ahrSUNmnpZQRmzsCVnO1BcfClKBejCpxp%2FFS5I5wP5lD15RaMfDEpS20P1%2BC4u7o2bPi5wO0MhfhpfwVzPOQeyFhV4eC8R2ATnwF%2BU5JWERYFpn2e0AS%2F%2BMHnK7XZdS%2B%2FGxa6M86a0p1iXsSN2e49SfJlnixnt8XO1fvU56FrUisySBtC%2FsvaIqP5LrUBWyXK7pE5116%2FAfufvvOj4TCO4Z69BjqkARQNtSgG1KBhFpVbp0Kl%2F3rLaej2%2B%2BWgVbEhJP4zETAZqqvJJrOjqZfRCgXik11sFNarxckFb%2FfJRaz9g1az1oNKjnwblqXdiX8UtrHGYX2Y2EYRAWUtROvRge7Jz3KhmAR3G0RZxx4rzVqa%2B5Q%2BUsCShmOsrz4276mB5WH2P4yTIOtRPoRrlxKJmdREuoFmSvjwZSIp1m9X1rY57u9aS%2FRXhKbx&X-Amz-Signature=ceaf9c1a228d58695abea256ac48e839cbaabd479ee099084deb00b9de493863&X-Amz-SignedHeaders=host&x-id=GetObject)

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
