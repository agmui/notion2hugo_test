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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CJNMTHJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCrnJuXLxfoEfXpvQkg2w%2F9I4zsOc6f9isy9M9LCCVM6QIgAh6RzVfCO9hAKuBZZd%2BzXf441GK1ZDvHMFV0kxijsRQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIhFz%2BdDLf1LZm95SrcA1lQcZG0%2BOdlDqA1PpNiy%2B7fODIA55s728KvGCIupMAvXwF9y05oGMSin0RLqm2AArtlGMhK9JhFQ67BPUtK4Lrg1OVYop2W0%2FhuihU94yhKZHJy54D6CFc7y4anntNUKtXa3gJcsOezmyKRXBCnXirAECloxrdl2VhysCHnozYMpP%2FltKKDIMPDIw7SkgiSu4NYaPfOXkC0i2%2FiUfdXMXBP7GmPa0d1H9Wvodx8Hz6GsuEULOw%2FM7ez9ak%2B9FUuCf9PcDdf8Dq6FQbqdtNaSDhDGL1p4EHffs6NvwoYvuzUmbRWSFdbvgjpg82%2FhtteHwRSvdvkIaHF5cDUoJKOZBjYdJ%2F5HDZJp87kSuuDOu4bFMSqT20%2B5PVTUX4%2FarAHFxoIzEQOpY%2BYEbWjZYUQtOYwYgNAQzvOxJ5TnptUzAzTozEPW6CrJXk0mXkRr%2FCqnRG4rhdXUw67mftbSdZ%2BVV2hs3pCuDNXcuG%2FJ22%2FpIqU3%2BBnaUmN3paqJ6UrMGP0DCa%2BU57ws%2BFuCP1N5BHGR6i6%2BL5ZXQ8bEZlhnoB8BS3vXPaRd%2Bd1TulNNRdUuKx0Z%2B3E9ly1nxvyw4mbrL955Hla2Gm%2BqR2SEK7AR%2FJeDciRZ1PYMqEwFGQfY6NqMNb90r0GOqUB5%2BrItqQQd8ZJ5G9q77BcFDANvgn0h5mZXT19q3c5FuM1ZrurpUgMRCbIvkIzOl8Tx69JXsDJnTlEOoHZ3L%2B3SzeZZ6egpidNWK1fp5W1cwsOpnIfEEVHFc1N2lEkbZpbMnk%2Fsoyxw8WnZv6566aYdiBOYdnia7%2FJh3IDll3PrbIiKxbYJ4bk6xbe3JPvmvaeZM5%2BA6bQ4rBk2A7275o8xv%2FBhEOM&X-Amz-Signature=25890b9f11f4fd714e4779092045063aa0c872d7ac69fea4d441d564cc2f77c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PFMBAYP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDNJOLXSvY1bGo2VRI8khNyAv%2F9ye7XYchCGX9frT%2Bk9AIgNVpbrIjcasLIp0ALcs42%2BmrC1baAUNOmENnI5Pm%2Bid8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbY%2BNB58kOUY90IzyrcA3Xv6BtRYN9xuCAXOmhLM20bAurGyB9xB%2BCZ2NFPSd24r5VTnbcichje9JS%2BQmyTRg2gKNcjemqqR4Tv0nq%2BOiH5nZJzO6TDrmkfQi8qg8zhUn%2BDSerCJ%2F%2B0Xs8oB2Bj2uLpxAYQPzauevrslK4bu2hf3PVNriOXsQSo0dU514S7RlIiGTklC0d4a8OFFsCHqcwE5RmhIPn32mknWmXSBwPSAmNPKK8JoaDJrHL5cXLYcxByMFqWSAp9%2Bjt26FNCmKht4VU81Q5TwjNNHF96vH%2BGrV9GK4VbSOk0DSIxPflpnl%2FaqGxHqOY%2FhAmIYDKjNfEXZxqqk0maAb2s4V1drS4XAmiRrymoXoud%2B2%2FM%2BDbsdS7Wdl4FUVZWRMbTtDBWURGnc0fHp%2B5C6E4GRbLz4CEiAnv0COxYd%2BLDN5qeh2lVnv1f1UQv2Wv0lgnaux7ZpELEdr9c7K9FvDgz1Ftewxisyg0qLuiA%2Fx2EizjXzeIUK1m9myWZjZi67%2FFmdf7P0MNUDP1ZZroA%2B0SQpIFZ5dubzy5DKYO0nU6VpTzYViMvRvgegTmNNuOECOg95071WSJNE%2FWAkFQ%2FdPhPjGiuGw0Wm49uCWaUOYhMiJJPz%2FEBMX1a%2BpeMm8mwuCARMMP%2B0r0GOqUB0Vec2luXWUoCjoQIiOhFZUIBSyc9BngNfWfRFHsCGEwXBV6iP%2BfXU%2B1ae62Pc6HVd%2BWclH7iTug9zt7oItni%2BvSumOdkUdBGUDc3VpqhisRus8kjTEpAKCjd%2BJdVyJF3miB8fKNrKAVoNJ5icUuKDfrTV56jZXVLjsG7wXBuiR%2FqH8AQjgVSfk%2B5%2FPblj4020WidO9bbcf%2F8porkNmyCCizJugyI&X-Amz-Signature=7b0a3463c60c85c21250ab60ed551fca004a76d7d7276e94bfcd0dcb0de0d4c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
