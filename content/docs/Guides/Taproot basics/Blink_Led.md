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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA4LJBRI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIEdcopQ8KPphFL%2FCEoL%2FjG9cIDjuJPQdbukl6Pb9Vtz%2FAiEArcIaHAswgxndcT1MCP%2FAc1SaWHcWLnFHyQcBB3WHqH0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhz9E8dlWuvwYlUhSrcA3qFLjhfbJ3zYoxrjbttlr0WO%2FjYW2eqgcae4JYPqK3%2FuRPdwUPT%2Fk1Z9kiPpUdWpWkAQWGv3qMtNZYkpXvGgn%2BpCpwpJQBvRPLKnkkfWhW6W%2FGKUK3agKPOL1adZsnFIPnYeA9Xq0rQvtge3U7pi10U8ywVAPSNp3f2hEP2hxdVuxpyGp0ven6Tg2ObcFtQolunpyhv1AiwTge9ChGoBCFiAJaOV8hXSzXbIqfYbSDfLFmVPPqdoF7nO8x6UWgyPmEfLzdXi6SiqshoT%2Bgew0JQf1GRYeZOi1uHBxAItOGaRtnpS6KuuTZeH4XmUfnw7%2BFL39Bkz3rfBhywdbETLMeWUiOqMW5nYD8YmXlAokiHzg%2FQ3sqwgOC%2F%2BGDOIQ2q7cZvHWripOfmGBN%2BZtIFjeAcQ5cZ%2FxwAX8zClT2GICp7XD%2BNF24wLns8gNAD7rwo%2FtiBZAMQM63aHkJCPsVoxaRmzVERyY3eh%2BaIc9%2F4tauJHyihDwBHk0G4wnWQ%2BP8NofAm6UjUNzCAJuvRgwEeDaKgVFTS6%2FOqFHkbQbR1XAdbJg0XLCBm7CceYuF1SrRz%2FBQKaAlpkO%2FIr%2BPLVaW9MYqk%2BjyIB%2Bum3OeMqSq2JUbeMFXe6KZZyyv77iTlMIOVzMAGOqUBiTDPo7OQmGtXNOJ%2BfAQekRjL0DfzV%2BaUcTq2d8deanFIT5c2HgigIQgqzzW6M7HlFRSRLNs384wdUvqi58G0II5MbuAhaEsTDm7UvD%2BT3PIdw34UoEqZcPJiJWuX8%2BVCTRhYxjbwc19ItabEvySVZYdm%2FvHJuO%2FyrILWCqC5EjC39rq7vzJUtv4AxhRSOFTcHk4BkNpBMyQ1KPF5UslxEV5nt%2BwF&X-Amz-Signature=f77d111af5f12231a01712b95f004118e7857235662317fe42087596e89dfdea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TMGBJFS%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFpOow%2FeALWqGlPuNrZm2kDr6U5FhmsrMgIvKGqcerPoAiEA6Ue8C7uJBQAUSg3uW9l%2F6yYKZhK6i0OOrcYl%2BU9RTHgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2F2%2FTu%2BGWSyY%2FSfMSrcA5nIvr1MqY82iWH53wJDh5ymMILZGa%2F6ZfswJXnTNTHHgYJPhaOeCoQSYsjE0qKKeSqvcqqmQU7aoDWGc4yTJnSmCDtAduwIAAInXvFhY6pPNQcGjwQKawL4opodhq8JwTe8Aa9Q%2FWpD4Xirv31UNGWux64207Qf9MnJw0VVpcVvRBwsdioqdbTYejUnguKK6SWkZxaEnYS2BTxaVAwvFVF%2FgCKQcxTjYvUN4is5S8r6gwU%2B1NmPAuC1IgXnOtu8VJujiynlyoe72pimLTH84oS3RZQxjAc1CrI0HLooJA7HZ%2BlYC80RYdnR4bXSaf%2FKm3mL%2Fq68aQ1F%2FSn8cuZZdCiLPix3hxd5u7mmt%2FU34VIssWP9dodcr43AQj6H43ABg0L9MxYyO4nPXsfuwe2SswJ07X%2B4IcwSjdoITlDAVEbyoyp9DUtbvPqVOu2F0qofHCz7K9Orzq7g26GkpMmYj%2BK5amIKGp2IVPIcALZ%2FS5iYmMtLphyRWbczE90zscSSJdg%2BmHghLsdHsy3z3M9hrqeFA1yau2TN4ebycX0P%2B5PIFlCJSRYpWrgPKAtah%2FyolISttyqBlW5TXB41NtXmlyCaSphsj37ccV5WDwrJUKLkvNTWfraTjCitT4n%2BMPmUzMAGOqUBI62ooaEuzDUaZFCDoIYD%2BvjcQULHRu2M%2BUSV1PlYdfPbVnZs1k39su12BBqhOTyXra7N%2FPhkfxueWzLwCoYwFUK1Zu4gPNWcjasdvo5mcSKL%2Ff5NgpVqTDuatdXHsmjbTbsk6ZxmxT6cjI6HeBUI25Mj51ox7XvsyFykBI6yy%2F6Qr1zolNiQ1oylKqWqhBjLIGPoUW5GIcW3oGRJBJyMQk1oi347&X-Amz-Signature=19284d41c698d82e7db0c68a1fc44186e489e3eaf4134daf8c43022cb02909a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
