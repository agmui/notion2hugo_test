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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSOAA3Q2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBoa98mXS1bIi4Ad6KWUGB9SiVqBZAFdhrhzOb0QFqtpAiBeYz%2FJRRUjuIoXlBnlBBvLkqCc6FexqarLqO3Ogz0D3yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa%2B8Bi5rwpjZL%2FK8IKtwDIa7xcdXShM%2FniMTyq44b6T4uxoes94INrQRaDdFe27e6IT%2Fk%2Bp2m4JHuMgRJ4dQo4jnYUoWHJYDLEMizDuDOpcN5uqy6j8e3VXx6tl23DhvStqfYiPFO3Ne%2B%2BOgXFdyAGrmDIuqFU4%2FSBoMICqIsmlb8QzJqn1JRDA3LOuKxrpPRC6f8ak6Lf2goZK5sMwRsegN2vSN%2Bsc0O5bXrIv6HPvIchx6%2FbipZoaVqiv9rZOHg7soGnMbtsboj2xmBdnxpdXBM%2FT8ZUWcPtZTaG4O%2FN9UWfTljNB1F5TwkohF9OW%2BupkR3Rwtf6oWfkRknO6jxoWU60hrq9TdzsCYK0vQBqYHPdnrZ%2Bd0IAZ80KD%2FB6ld8J%2FyAEMan%2B9DL8WnbhgRulKsPq1T%2B3ncO2Gjc7ZljU1vM1C21%2B1Ujyic%2BHH6cOj4riDvctF5Kp1GucVYfHAMpZ2D7peVfUMSU%2BzBrQ0uIEqkRRjcItbh3bQjje88xtRyuPajnJ0iCuicfCTp%2BRp%2BraxvrpxC%2B2h2xJ3IOO1Lf9RK9K5rUTzBOwjR6zAcfYO4p6Xw%2BQRxceX%2Fr9vsD9ATMdHja6KWpudetYwL%2F6A3v90lGipH8Ee391Cdea7acK4zBMFIut4f%2F%2F0pfqBMwg53FvgY6pgEOoa9h2J8b8dVVA%2FTbG5UC2uX3r3MXpm6%2FttyJfax5FX6kuW8DYcYx4NIDLclBZJuhsS%2BDpRvSkD3%2BL%2FI6jTgIVVRS6uyxdGzwftu9hvScVKsFahoWhrLZIvAKat%2FGlPUah%2B%2BGUOIs4PXK7VRAY8oDqdbeYoLE6bVeg6vtazUkzznVltnmswipUKVTjIv68P4oIxGUGCEJO3ndGpAo1yHLs6bbSJ5a&X-Amz-Signature=f6df9032a63379097b8cfaa38d69dee2df19261c96e1511335796fce8af7a89e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QKGEM6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHbjHmWpcWRGd3Ya1qI1IRP1OEabgGv4XlUusHwdSpT2AiAqKVsDnli0RaNcnAYbK6X0iXau9A%2F%2FzKt4c5Lf5Skb%2BSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUSgnYpSVgLnDPNRyKtwDN9nEnNYvpl9ib%2FFFZN%2FoLmzH%2BSdiSNu7j3bai5waUPLhRxMnKtjLTdGDCXpoupWWIONWpxOTLekvzOW03uXF4TbH3d1SlJbIY%2Fp%2FpVYWv%2Ff5ujEGYacoBJOuSPuPaXWV64YgwVIEMErkZjExd631GfEuxu28vbx1vnLzOoeJ8NQDZ8k65PQzNCA6wdXEX2Poaff73JAlpMG46Wb666XNWqsNodaIQ%2FvPlNRxybJF2ESJpgQzo%2FZ5nDedF2KTynj2XerIyQPeaeVu3KU6RUKVS3OmB%2BzSS2sBm3NFeIUOl1rJ9Y%2B7WeLKusjYHChbPOenISpER7gKgm%2BR0VyaMYDSsCQE%2BsTOUj0PgIUzfVDV5kf4UDGx5F8Q8CkB2VK9tBkD3hwEaS8%2FTZUF%2FLKIEznZKiQUeVX%2F2XYke2nMm5ZDlSTZoeV13eB5Bjz546OImIYOcemOspWVJF7usx6yQ6sgH38YAol%2FzaGkx%2BVa%2BGcTeRMxq30zmFTurU1x0Iv428sZpnMasGSaboVeFV0Z9yCzRI2TD5M8CarQ2wugaXZtEPoqcZmaFLkpQ6H4EkaKdDR3o1zwsW6H4%2Fd0SSo5RbMgemiap1xCPjx6xYHPOmmQ574Kuzi4PqLfZudCBb4wqpvFvgY6pgFlev0RLjcMy8JO0e1I1CRu9ITvBMvajxHwlYQMeOpL4S4bX0gPhQM13Yx5oJHmkM98XUePVgZ7l2A5qMssraSw75b6y7IIOGU6weFHREBMs7udTMRcQFNsboaIF6wag1Ixk6fBseOyUKprfOjvLlf4CdXa0IOeVSZ3riztU0funUKBU9KhQi3V064zlaXNj3GHUS2izwHEKy6%2FJ2sPV5gpdaIHjMJ1&X-Amz-Signature=402160ba5c1c3aa5dc7d9a2cb0441a568ca691649c07889c079a31edc49f6879&X-Amz-SignedHeaders=host&x-id=GetObject)

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
