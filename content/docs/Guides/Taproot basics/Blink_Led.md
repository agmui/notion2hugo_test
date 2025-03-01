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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MNJCGO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIC6d0%2Bjb2yaJ3qqL%2BxQ09x5j12YBKVJzBp2hM9sQ2WOrAiBb54MwOpjJJI0Dp%2FSOgdZBEm%2BzI7vWh5VksvFyw8r31yqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuWu3axxV2UldHn6yKtwDijFqIE9X350iYNCBZdkmfrZpFvXdz2AGqk8ys1jrrjwKSxVNzVo63tTg2sQA3nkBxEAtPlRW8Iy7iVyvyJtG74%2FR1Q9FGbinPWh2EIuzbdQzbicWoUlPaN%2FNR4OxpMEj9tbAhhsfeS9bOV%2FhwKASCQg6BbRyI6ADyALCsvT8i3FesNehF5J1qAHTYAN1EqZnizsls6W6HBpVWise5jRlobm%2BnWGhXxd2KcmShZc1Pyku3%2FAdKh7Vfqjw75YHFC4BFT78qa7vKDWybcZ9mklp6TL22bVX%2BWC5O2RUfqLgJ6TgVoBZNc7a2RAwF0SxBv3htbMX15TSgDHBmfJ93SkNhbNyrMn9qRY9Al%2Fp1qrq2T6ZtUgXeVhMgStHndnfjQ46iC95quznlhd%2Bddr%2BaFpu2gcaI4EV7A%2FqCsPz96bCys9fe0KhkUavcDT%2Bflz03Nt5b37walbWHm3rbZngUnnyRxoh2MqnUPeWWoUJutRNChCPx016SDmUfbC14ubCjD%2B%2F5qkHV8KitAZgB1Q7104CPt9iH%2FhdXXeIYS%2BalETZOW0mzeSYn2mfK0miwfTw7iKwZeKd9AG99NeDoXVqiCR%2FLWSIUcT8G2B1xnBO8gQeKNZAUABfOW%2BDH8xP9JAwoJCKvgY6pgHdo5U0VwbAoazG0QmTg%2Fm6c%2FZpC4TBRayyVJWqZzECywSrvA33LKMHUB0r%2B6ZYJ%2BDlPlX1MlIgjtFyI%2BVFCswDkBxtD800ZnlxS5A1qoT%2FFtuTl1jo5oyIssQfC8KaQKicjC307ulsX%2B%2FDQ75MmAWhQ4VWPFq3HAZ%2BpRrX6IgeZpf%2BIxWPpg6WvSqhgJ0zSiL9O2AB1oTRmZjNySrMR1QE2rpzN42E&X-Amz-Signature=99b70608452c4647cfbffd6622bf6b743b7f303dc2d35ef91bd6fbad4ac039d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYEST72%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCmz6l8NemN5xfy%2BnH3zrq8rAib2YLJurYQ%2FlLET%2BkqkgIgZ%2FMeuhjwKWKbP6Shb4IqewAA2fPlOefTQ80IOEYB4JEqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3FRx4pkp2WiWxHbSrcAxWsSvfuRV4yyZPIgQ3lnhjIsVTqb1nFigXX%2Fyw6K0FsjUWfIWArfKAejqOl5RAOfC6Mj7R3TE9A%2BNmu%2BNDXK748kgjG9hZl6Nfyi%2FsOVIYNFuZB3mPYaiFRjXcbdLLDd507MWiWQ4b5kGahwi%2BDGf%2BVkR53NqRqNhROOnsESzupj4JPrKMAoTGHJYxdISLbE6b5OZh4C1W%2BMdfkbyWnXZooh2U4OMhcRqaP062xORTuikQs5b2yR3yTViySuRjYu%2BVak6hnDM0EfFkA4EJU7nc4KBtlE4AKIWlA3VZf93SDYCyPJ7eJstQVkIClYcvXUKHSpCf6JWBCB2mzM9q7Nw%2B5Tgplsx47VkmLuqpF5S5ZGUNHGM6i%2FJioFvWID%2F38jC8YlTTcCxP%2BpV5q%2F2vFFpqjrbW7Bzrd6wTQn6x78M4IdLoIJY554hQqZ4xUfb2xS38hI0OyhBbccp3mSCcIQooP0M4kobUmCxbPP%2Bb8PEGESmj0o%2BDsBByqc8MKHT%2FDlKGNwdho8A0uPPi%2BAahvcTXhKUSbrpLPbBbDbzvKg8x0vYDV4nCKLpxwN59oBwyQx%2BCmjWLzd8k2ylPAuq0BJOkrwgOdMuuH4YFI%2F5A8vhgMgAsdAiF%2F9WQ72cOeMMWQir4GOqUBdBIngIgt5zZ2EZJ8LtdqZigBobQ8HnbgAx3Cm2%2FSR6R1NK37hMLuszVPXBVQIJaZWsABJPclKTcs3SPABog7I0whqFzrAn4zXa5HJqN6zpN01EPe%2BbX4PPK1kAZx%2FWR14TLXjtD%2FT0on9wSZmUhekE4sLCpa2YW7ia88wFr0U%2F8SsCCdZLJ8sJvn%2FwKyPbGs8XdpyC0o6w7sVrjFKj9VPbuX4M3q&X-Amz-Signature=afa9673670b5e2f239f2a1a56fa8b53e360b90a252d4235fd1193a7dd6beee4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
