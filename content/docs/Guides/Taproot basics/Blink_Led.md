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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLVTB4M%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzb0AA7q17z%2FqzMLias6sXfmU97kZt%2FRjNl59xqVOEECIQD3Xg96ur2Vpq6rSBR3oFXUptOJ9DkLNuALgrgPlUVWLyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMYaF5CrJjMD%2B8Ew1qKtwDdSoYdDH2stFWa8S7LNFzQ%2BASRWdhFgzXCeWmjQlBptG9FjTySxJMOldue8Myk%2F7EW5wTwlSgru%2BKE1YP1no0p5nqxrjMitSULWoRtETC5Td71n8HOX1WqlFLFGewELq1VnTzTJxihFgBT1OIzJWZ0vrF4%2FMWSlT80NTVax25ZsbQUFiM3HHQ9jjt6iwk8GgrOpfdIljHSLd4Y1iTYOBcf%2BZIsnstEnkZ6RnBDfK2KwZw4mwiPWBGhZuX2Ue42RFvtZsH2oWJICEYZ49UvJo98JXuAK6AF82hxk%2FqpYJRM1WsFkkVgUcKYrvNjPIMhtk9EbFUnKeDWS%2FBBtpuwZyEyaLIGotGyG6d5IizYXTAQR0XjJZ0pZcUCkKAedgY%2FxKb1leWcmSRBXP%2BV7IOaLQ1awh76c2Ul4eVbyJLjR3OybVplzV0DDPD%2BAIHXN%2Bj3TtLf097ktrt8hMoO6xvyg5%2Bd90SXi3OZh4GvwI1JCVfpo6gID2INJ9sxnf8%2BfxnPUhUm9g4OA4xlFQJaaI8EyWPRNLG4RVw4F1F39fp%2FQI6zRLYZi7CbkuEAwmCYpfk58s%2BC9ertxRoxfVRSYPXB6X0O8qfutL8T2vtQ3EUX4ACr3P64JVDcal84L5AdDUwkL%2B4vQY6pgEU%2F4NNpvZFUwDKT262f0wZF9%2FWeT46sb9b8v1KJf54B1g7lmiBI9NMLCveYw6Y26YRpx3DML09ZbKlo2DaFKVcO6DuufajTsLGZMBlKZfboJ4tkifRRj6gZVPNmLvvKXtm1J0zgOkTeAF%2FREOm5QXqxHfVt%2B5XKm9pxLYlPiiIxOugeZhFyqL%2BcrsxjRLO%2FcPrE8LGj%2BmrE4eFDqe8v%2FwQSeCXQzdG&X-Amz-Signature=52401e48b49bdb1cf9eb7740c66055a4ee95fe05fdc7ba2268559d246c95375f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQYDT4X%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUnhXnCgTSuX3Ha3g2oGMnYxrmjQFr1MeX2fo14lHJsAiEA5pvFrxe5dE50a0lNrDNdFJ7rUF4pYbZ6BSK2xxzpxiIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGn2cRKxNbChum5dqyrcAza%2Fbz65ROjxWi4q6N7Oy%2Fj8oJmrRsQOAWJeC5fuy%2FwvNZoSc2rQe1oMHhqLgloD%2BtlRgsbV5KnA465QzrEAhXCWSCUIimF%2Fio%2FhX47iQ75QhgMBmDp1TOfa17OqsnBvKfrxU6frH1geKwHfDq92R7venMXLs5u%2BvYeOY%2FnJWeVjcT%2F6Ap0vmlqS7hQkfpDJK7YtmZXPLFY6nX1O6CAF6jKoR7XJV2Bml0Dd%2BGcfT%2F7m4r3pZyLJbZB07EvUsdQZov8tf0wAElQWJWdWeUnHepQSLo%2B52qi9QUBOpX5NzwFOlNL6QG2%2FOG5tizKSBDXH1o2C%2FJXzalcnVF4tQ8yCZzMKBMeRopkhkWBKao4n6u0GMcdFOYrR7Hp%2FuEmqGyrse7NvZ2rcJJpvZUECbn%2Bcxa3%2F1evGaNZo3LOVYHaP5jzUtJhqHs1UJK8seLr7CZZ6%2Fnhxjzn1E2GLKHAmPNyo29pRjBbtDr%2F3I1d%2FUn6A6znqSsg9pl%2BOVDcBewMRtdBRnNRwpmBS9Sh%2BOrHwwZJhyvqbuQCMsTVWy9dBaXelkSrNfmwGoDDx5f6cQWJBb16DUkUYRtTf2nYrdAyFZDNX5%2FqghTK0MNyvoadmRAooJgctNl4tW3rUybXuEzCbMJG%2FuL0GOqUB9eojbuim232RKySxWLtpVN%2Fi1zzW8ysY6H9%2F8dSjjDydIqDvInmsTKdx2RwDU4fTGZq%2F9ce54Wsmc4wFsRQf0nyleJJXtWtrziGXQtbwwgHoTLgt9S6w6XQuAHPD7ENKM1E8buKmIbE5fNx0RoLYimMxdBiaVOrM07u8%2BXOZ%2FQoY3OWiQ55e9QI9Mv9yFMAcpHH985MsEI9oRH%2F6X4F9KvT8c%2F0c&X-Amz-Signature=ddc035908933abc43e6ee5120346834fb41a57ee407c128315b0b8b56870d82c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
