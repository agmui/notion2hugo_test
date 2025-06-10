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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGX4WWNV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHY9KKjiEY5qid2ueXuutukzimL95kf7OZJqtqxUg34QIhAMjXt11Z1vqJtF%2FWiIUFx4WRaOf7zGYdsKllYkt%2FZq1ZKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNPGYP6WE8zGZfXWIq3AMeAXLgvAdW2wTixz0LGGJvp4HQfff9Tb%2BWuoheJqP9PJZPCJQ7Ck222yxAhih1jEcBjiJXNBI5ZQu9mflaLF5VtYoNp3LZsXrSxG%2B7HOjg7n0RohrB3qpj0EreOk31QuuyPA9W5z5W5XDcuh%2BPNJsx7iWFfNNtbN0qDb3muwOxyNUUIj4pdxQ6%2FS1XhpsvXc%2FfL%2FyynkT72R4aJ4vdUjKHKBUzPf4btKpVAkIgJz%2FPdEK7mZg%2FkH0994iCERrEqPiZsdwjzHQKb4N3jfdK0hFXLRqNS8ZP3mtZNVmy9dFldIJGZxlftXzmvf%2Fa0I0Xq7%2B0bBvHvfpYHwG2JyQdFXx9zn58s1cXuN%2BZsV5%2BrYyODZhDvpb1sFeBWJyBZDJIryXrboTrfWjVhWodfA3nDx6OzLIBVhnCfs0xGmo8b8THiwsZJyaTeW%2F0fxo%2Bg5WcybMpI%2FT2j%2FWrrup4UXr38M0d3iA9I5eRgNCpMmQ9sNkiRjYhPhhxHK5cfyfpryoYuW0gNb9HoS1rfa2LOJJIF6%2FX6MAcaxQFJd4clpo%2FFszXFQV%2Bem0XhrGgdDhTDDur8TqYoayZHsjZU%2Blo4AJL%2FLfmVlOadj5RT0QJgopVYRvgWA6%2FUbymSQh8dyNn%2BzDQiJ%2FCBjqkAe5aIVn74gKHUtshYhgokVg%2F0wBkN%2BfDUIw5Cg6Qm%2F72LCEeuOVVldDQJmr53K11euoay2IhRfDWXR0doHUcpPLAFJAynsburhkr1Wv%2BeiyFXzaOVS7YxAhgERYiLMTTUtMUJeie1O8s6HNkvSQXEka%2BRln0pEqH97llITMTtQP1YKhrVwJYaNqtS3e6bQ%2F6lcCE8zx0eAU4XsbOsV3%2BIUdHcgXr&X-Amz-Signature=290ae957bb8a4e2d3226ed6d5378e836841ae4eb49f378cc22b0001adf52cd12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYAQEDSS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdxMC1NBY3fO5rgmrXAwIfCGG0SEyObs0k61Lgd6WkmAiEA%2FMdJ%2FoNUiPsdVQuZtPyZ2jGlfvsp92S5IzMEA2Z14fYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhnCKfJa7GgQAlslyrcAyB9qU4jNRN%2FUTU4McgAv6TnBfbrjImZRGTucrVOWQohztXn5kd2GcwdLQGbCo56Dw3B9qFTmQHtSzgIfnDUt1ZDjXN2Zuo1ALGCM6FofNRD1WuYCvsXOe0HZt4suO%2Byrp%2BcWVowdl9pBd2mQ4RQM%2BMWrN45RViDn4hZPXWIUmI6ytFuK5kEL2ouD2vTXK%2BWIs1kkftM3DUkA9NZs2yG78FEcQaC2IhsWcQ3qdjhiV2uv2BcKrOYe7iFzVzs%2F6OyEE50jk%2FPGgPkEdv0O4klfjqoJIeadP8THUfAs%2FXwhK6X1e8JgYGu18PowYGyUS%2FN1zQE%2BwlHDA%2FF1WqXx75pgO70k626CNy048RSUltRgbyPAzXXvx04dszwOHboBMd54qvOz1FayfBm0%2FRFiaFJdW%2BIY053l%2BdjYfHP2y%2FHNczBhneK94LK1DcWzN%2F328NgNWVfHzkpFRw351Y5T3vbdI0Vdr9s5EG%2BrNaF6UfLVwzz969JYCnfAuZ%2FrB8m9B2MhFINScHK5jXxXYxQQ2U%2B12v3hApjW%2FvEIeheAkpPvcjKIVNB3t%2F4Qd3aERBciH2KdEUjbIsvhnkNIVCbcbAJGvw2Z6yhvbrhOrqFOnDNGW59ABlom4Y3gFfJxgnoMOOHn8IGOqUBRPulCAKL0309UPh2oUx3%2BURJbGCvEdJmSkrLj23K9366ouGhGur1EVj%2B%2FHJb6k0fAj1ZD%2B9a%2BOkA49ziYhQ5hLLFtvOIi5CtnCTd6NUb%2F9m1ktFBENqJL837nQzlOTt090Cp0etf7YGtwXaLWpw9S72oRbK7yCbU1cmTIlCNJ0rZPF%2BeJ4fXatmphqFaSKbDj4fSpPHUkozGo83HAut6LiYQBYTr&X-Amz-Signature=542dc28ecb7af2e33e24244bd82fec51026963a2ed7dbe1f30d2a986735e4e02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
