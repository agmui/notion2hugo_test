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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ7IB3OT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqaRUTZQ6h7HpLkAwuSQpLufP4HWShEc0KEUVILakg4gIgD2uEPwhdlcaMikIImArkUdxc6mXtIHZffKOBbC8icR8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BPvdOeyODED7DZ2ircAzHsSxu1PrF1OuEi0FetV%2BwBYIRwdc3cjRR6o48PnMmOLFfORRwrHe7id4YW7Vyx0Q%2B8gOZebWSyEVS%2F8Rk7Eb2yc7vEU0k0jIwWXQg1q9%2FW2U7buguxi0uhFXAbLaXMz3DdVhYjAQ70aauLy2ETS3eTHr9Ub2Y0ZY9IzrUGf4Ofwp8W5JWgJtPzfkROIHuE%2FotcqhN8fubx9OIRbPnFMC6Hek9QiYTUs8DqAaGComp4%2BZImMBOKO1H60%2B2ox1tLFuWUUrhQJ3nBGr2Ufcio0XqmFsZYhW0WZpYH%2Br2p%2BD1sDFwf7dXJknXvUy81%2BSO8LhUkEqxo8Pm7QtupdVxc8lHqPW3Vtx%2FyvgN7CtuzFqWCm%2FL84x7EIc4ZVJNL6Ia30O7mIjuDLUJFY33lEEK0qTrz1yTY6lgestWLWiZEJMv4qieI%2FpiScGqTo0sadd59QTbZKTzatPmAkTNXpUGn1MeupkRWlibusHoKuz2tbBrReWpg%2BuRstrb62JpfYndCdetDYE6MLbVVkr5Lpqk6eMAgOdTY9fThhesBnwMSDf8fB5UMtDNzpNIlftOU%2FpvMTZFGki42NwjFfEGIs9X2%2BqMrZ94YOoNTlXplBJRsqiz%2Bw9NkvPTskPqZypYgMMGtscEGOqUBMVXcKyS2SaPxIG9PWucTHaOsUZBqD%2FQpwz0hXyW5v6TcakcX7aJU8e%2BihGIde%2BPcs4jM5YEh1kONref8feZWnIxYRqXpc9w2FokaF5%2BdyCChIrQqEwIQ8qB8uAIgLNuD4EeruYEgoIC%2BVgoTIOQymxA7YGkx7KwXhs%2FQ3Zl7Ol78ONcdym3vUG%2BAOu8QU5MLk4wdH4nihCr5B9ttQ60Bic6DCuDs&X-Amz-Signature=76406d75d6cd189bd35658680bc7cc41c146dc0cf290fa5c1188e066843175d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNPT5PS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnMydwTDFaoSallQWS6cvBc9Fh07WoIDY3rcvOsScw2AiEA8FZFmltdfrVIpToIMphxQRHMXYktIuRvd5SWcEcFvUkqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVxUjku1rAnIFWMkircA2EFycvV9KmNwDEOhKnCx48GsVJznK3eCYB4zyOU1wZgvTJvjhJvDYB4nzPPBzwGSUCC00RSW4KZpMMDNyHyqnAkf6kh7%2BpdKcEo8ch1Vs6UYnQ3Izhrkpuou1gcIox3U5jVVswFK3%2BMDNIIfU5coxIZxYTD63UBynZpYEe7GLUcSGXK4XBV93CvpPex92PtqIO2DsM36ifiqa1hOm3RLnJDSw5zbASjXz4aoe8mhJVcBM01rqb8L4Gp9Dt0eacGY2bDTcPFg5jnx9XUunpJZ3YKU%2FiC3r4vDX269%2FHpAHL7M0HnE5nEc5sAJ3eFBUkdg2KdbxmEJhWwDCOfAlqhpKW1c%2FSIDQVbWlRjAwIbgrRzI%2Bdmz15lhUT1Lstdavn7OgOk7G8C021PXIh49SNdE5jkreEmIhMYc0BzbkfQXueIw6Blqc%2FJ5j4sgeMPPfMF%2BsUqpTbzOfA384bNXAZMeF84JM7gk238JzF3jxFKuwQcP11NLXPM7HaZdi4KOfbUm%2FGUuBVK9Wqsf3cAFZU2mlB0ORdVmmcpnI0iv0yINusFOTd%2F4xFXY9mZqHuD%2F4pDorTiCtGW1VfR032GmaqbKcmbxcz6DUpiRODYz1ycWOOrX5NerY5ZSW%2FaQOHDMOGtscEGOqUBLjIL%2FC0ukvPalpDXo46Ez0k%2Bj7pXlATWIL9HMAcGFWDPuXAVAlTK4d7IO8MSjekyYz5l2n9MZYav1gRA0TJW7hYeD%2BzRTL7cb2J6byx18E%2F3fKe5ULh%2B4HJNT%2FgOcImoD30ClfqjTjaJTT65%2BB%2BZaRC6ImzX4XUCxgcgsnH%2BavTHjc3RB80vCZT5mJ5kJeUsdVqCy9pnT%2FiLhqGpnAEPojCFyLdw&X-Amz-Signature=c8694794b1a4e827ddfb4333ab61f25907f865146f1d91202c53a2f9dacd5fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
