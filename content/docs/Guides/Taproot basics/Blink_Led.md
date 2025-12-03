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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WVNI4Y7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICBHavmpcbooC0KivH6f5kiuP8J%2B33V5m13%2F%2BPUPphhcAiBF4P3QO5FLIXaKISAqd3l1qXue7E6m%2BqMUUp5nuByULCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM1HTkQ1h12HcBgbF1KtwDr04yGZhYbOf%2BkF5slQUAx7J0HumkEfOSyyDuKdlWGgu0NKv%2FbHytYSU2Fs7%2BpwbiK4z9wTpI09QzJidLgJQ%2BFnqz0MqQi%2Ftm1lV%2Bex7ZwA6OLpcY1Hro%2BMGThnYsWwRNfADgFn60MZjgcMyCJ01IvJSqzARWGx1MUprNCEEk5vYstcBnteVBMJ3uMDHqu3H0R8koq1jKKtYGOor1q6LOxwio7fVlUaAM%2FW0K9MQXuY8W4BNhAKb0hw%2FLDDlEyU5Ot15KPAPHUf8Y0zs3tfARuluDFU%2FDt6POJEl57Ovit4ga1fystZ6ziri8obYp8B8DXAYcjZkWs4DyFkam6i3VJaMXC9y9bArwXWevwstgz7UA2lT2JZaytG%2FqduEqRHqcm%2FKq1o4GAZiOn6LVlI149ZiliMUiqQ3gXVhBvHbdzFfkEeCj30ujDYGSjrUpctoeyC9pHHN2a%2F1GRNt5iCagbYCzv5aNwzs8bxxIbfXpEmdln49mlBDTSvMa%2Bgd7kBsjo5ASL1pFMSjsyUES4Omdk3vMT472GMEStOfcU7bgwmfi7MSy79WFiS6x20hDDPFfM4USxcigH63Yf3jQxLjqdIPUGOztpc7%2Fh%2F%2FawLfjSURfozOqxMnR0pyWgFUwkZy%2ByQY6pgHVaL0OgrhH8wNehoVQfjrrHIxJbq%2BmLbRZiOqwsXw9it9KlJNFA63pVgKbTcXqwPROkRd3mV7ijzc0WY%2B%2BLl63PZgao0santGlWe3IwWOIoW3wfF0OACn8ijVCTrLpjpu2BBZJtqZDZ5n%2BhqqTS1yxeIVoAs0px7U%2Fy4Sw6BqZLLEdJm0nLFfmqaEm0W6v6g9obFBvrjAt%2BmUCSNbkowBHkAAz4Mp7&X-Amz-Signature=be86def72d7ec594cc52b15645b72fbb326a707376ce4dd06bf676f92cb4fec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBFW4PF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCphetzzra2McxP%2BcaQsMKdTlLdG1MvkqMuAAmeT4hJ9wIgJMOtj4p%2FeYqJn1PdBxwdIEJd3qMLESl4cgcIFqzZk6Mq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMQ8qJdcqfGdsEZszyrcAyezN22p%2FlKYBkUWvZkj23hKrRgQEQRi%2BPDehDhuqdZ2wL7EmK8d40n4L1MVr7e3FQrVsNfhopXuflCN7JZh82Kh4L5t0ZPz1nf2UBHvP%2BqoMXoa5r82Q5Nec7szS42Yxc%2F8v%2Bh8riLMWDWnG%2FQngu9C47Yewu5LHxxcMJKSTHUsvx3yM%2FliJeaIPZ%2Bmvqodot5gCl5L5wvTbpb6RJAuGlo1qNnzvKiq7dncy7SYAHxYv09mnlW71Jc%2FMJn0Xj6Rgkbnh5CzXfFCRsqtXBIXvMCL4Z6kQ6UWddpnY%2Fsug3p%2FViKOAtR1pxGVEITJgVnlQZCGa3w31cF8ZPJW1N%2FzRPzYJiwGABBrLwx15d1mDzb3oG2zWNWoXmth6qSvtodN%2BiN8NAIgHdIfm1sa8q%2BOmZOaH6JmUE%2FgW%2FhmAfEB63roBBYN1XCvJBe0DJ2BH2QujRyPKk5ohNqx200m2eMjUFXwOtg%2B2O50iCf7g4tu2hsrKonMa3B0XQML9PYA65qMR5%2BhPNkrA2lGKNXZ2bWejX1vJ4bqxG82AOUoRgIe2sxj9aCtxC7huw2pfG07fvPFiX6F1msWk%2B2uiHb%2FLDzytPv%2BJZZqoiRrFHCrHOkEuc8EPgQRhvXSuSl2YD6bMLGUvskGOqUBvYyoYu3cNUybdlgZ5JnDPL8Wr%2FomxlzC3TomfYVZZ3Q9QJrjuMR8wd1Zkn0J2eao1bNu94lrdV23LqlU6I5jqJP0CRXNscVPHi7jAX5owMBpKVptC2lwQQNiDTz8PUfgtNBaTldNytw9EC2QJ5R8itCLhWv4Oj28vHew9UBoTDIp5M4BFX0zWRr4iKaHKx690xOtlPXJ49p0ooTedYRPVlLwL%2BXf&X-Amz-Signature=9265775c26e66d32a4fb3df826d180d932c7f801bd6328f39173ad7d2846d0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
