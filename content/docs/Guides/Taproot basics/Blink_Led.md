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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFCY255%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIFa4uZmFqfT06frsvD7GMUSuctDZ9s4BTghub%2F%2FeFptXAiBLqiYIfN7HF3gAjDNRx8RBUl6%2FZGamTPTcUMhBduwTCyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFvttb4C5Ek2mScJ2KtwDI%2F5R2pkhbxxDC3shHbgd4N%2Bzt73rCJGPskJRl2aCCdiAU%2FdloAr1PLxawKLhuZxyaRzpbDRriC5smAuyndRgGqdoRB1u8QVdeq8cWUwvSHgPDwRgCZz%2BGqhEOVr1Q50VSkgswX9KjS5yZQ0XdxYQCkOmXmt9F%2B8c15aRS90hcC498ZEymDAMQ6TFowlRVhJejQZBDUIQpzl5xbg44cMit7wrqYo89gf86pjPgZ32EqvdsiGvILxXXihArCyw99trCyebPrFrNYjwpcPJl8sPcKZmqOAyaFrj%2F5zA%2BpFDyzHgqMPyqFYXOiuD%2FdrALBBLJTTi8kpYx3vGHKUViS3IPF5p%2FMAFPwfStVLFn15MVelig51Uf%2BHep4DoQNqd8YPFyDNdXHaMLuvcoZsJaE%2BV3TAFOiV8dhaXVfpvxeNx5DBswQAtgOCAJ5yf3BE6lgtjh1f6u7O9Or5uCSZnDc3I3TufYE27pff9w9gjMEeCclveLDQr0OEt49q4zDxJjQ6VYYhQ5Do14ZLvmUB3qWI0mv5Vdtc%2Fpr3HsqT9HS2vR1Sr4uZJPEIBSeXvNN5Fwddn76B23CW8u1SDwDLO18vmB2OhTS57V%2FjQ8%2FW2RUIYEXO9FmkEY7dMKWlFAwsw7%2BaixAY6pgFWWFqMYCBBaYm3o1w%2FOwxQIz3jDmv5xix2io9YEG5jmpwObpIhllRcOG1EZNatbFuoHvlnse0p5tqGKz30TBC92aQAmXJbglGyoMNSuCIlITY1VMu9XDa5SlBBxZkamr81Gb1oQt%2FOvqXdz5djDRl17j6trjTP4nBlZIS9y%2F%2BJfUcpjIH%2BubAojlNPZKPIFzYY2bbZTIbXnn2X4cj3lxJwaOHoGOba&X-Amz-Signature=ce3ca2d2ef3c21e5482e1de2e5f037b19054c1f1a64d860601ffb2f48b66a2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PA2CYU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDA5ma25IkYv6lnDZU1WvZ0UO9uyzNxfOg%2BGmmw%2FqwBEAiBS4B8TLhRP2%2FDb09XInOlHbe1Ma7Yl%2Bl%2FeWsOWuQsAEiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG%2BpHOGKGThQ5yw3cKtwDHtcaysMWQ3vXAp8dP9llnyQEVbzsD5u8XsZ0smgEvgK78gv7u8t1ISnrKVf0B7QooYWX7%2F%2Fz2kQqAH0C0PgllekXI%2F9rzRMG3ihLrOBIHpRE0S8hKVs2OBc176We7a7VbDTUoJywyYcRxdh3zIz3Vazy5fczcod6RLkbesZlsUPo2sk6z%2BPz35Mos9h%2FNywgEVRk87CenQlBQtRpzUFq4l1S%2FLlFfsGjceQSUBJ7O6oIRtapJaW%2BJuCjKBgzR4Og5iUYLTtI4vPoFVaBgdvkB1p2pjonVTxdG0DyUoiyVdVjeL3bRVnD7d%2BeFnLsAyesh4QeBFHxy3SIR63TE3ZF%2BgSYaFBHh3tQ%2BxqlQpQBiKDk8g%2BV5ihTHcq2BVX008xsHuKt9dUuerRYePOKqjLoNfqqRjt0SlWH2m50TN9Iuusqz2IWwLuzyJh5TCKJud1W%2FCAH4VWIMdkPcNS8DOnwYTUJR2SShPahflFxBMbUQB0djmGv7FWYjVbLW7SThyR8V0iyb71rt9AjEqYIwx02n0kCKtQQ50LHqn%2FlOPAwTS7w1Pnkl2Mj%2FJERZL%2BuBeuR7jU5vDOVN6m2mI%2Bou40VhAb7n0VrLVXKsYA2lLmaox5q3ZAeZEr2QVMivPUw1eeixAY6pgG7xP3IDoh3ZtHAClCpaf50CMPlbzrayiFZjHhTSd0qOvIVd3lsRyMCnS7s7fBnEuznerrACwY8izXNygwLZF9oT2vMbQMbiRh%2FZtYuSLklNVAnlLrge8PLLVAkYTshBXSspdLf4IPc9hgPI7K5wZozaOHj6t4BmfMugLsBUnQdxXliOMoBJOYZ6TErwBpcKKSGvs8L%2FmJwBnhgHjrRgFa7VnkxsybM&X-Amz-Signature=f73a7050a04dff9653fe5345c3a2c56ac43beeec780c13e679b2022cf155b2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
