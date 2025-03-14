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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EOKP763%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApe0RWjIRn5Wgd3zkwq%2FLQJNMibeO0OmqQCB0FRj0TrAiAQpK23dP6PVqW3tejL0ksWXXlSulp8o3%2B75d%2BaqNRNbiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK5DcipFyupkvK596KtwDOU%2BA%2BtBq42iEzUoD183tWUbNHCM7qhgmW3IzXtoFVOpYpytHyAx%2BApxaiyabZYAR2%2FkeWDRRQIFy75zCGcKlprvCJON9npQ8b%2B2ZvB5jUO3CawOl3UQUFljvUZ%2BdORPzkTWOxVZbJCN0iWlSk7FPfFLrksDg0LXFfdJOYwaItPQU7LPgQ1DOvSMCmRHGfK5HdsxpvuuTmtVmMFdljBTZGgG2AYoo3Sw3U64wy7l3h%2BlxYbtz%2B1OEQGM44SlE81z%2F5zL0%2BRPiJp%2B5lh3HSszde16eA4a2HmUyS6EWaIAYss312pHoFHxKXuHwxSBCk7BEQRd6YPGpQKxSPYpcdkIdXvq%2FdzcGweIEzXQSP%2BktEVyMevtBTh3VMabJxhT%2FP2jPd%2BG0eNtbUpoVqlc9m%2Bdiwqoo6n%2BjGTst8PUVjxASiTAkb%2Fvdg3GAh049ff4kQMpfTrtW7%2FiThqaefiiR5pfbCZYjejNqhJDpFqd%2Fx8luKSEYC2w5DAWfqIiclDdNxuRiC6NemS2CdXiphW%2FPkqtQKSrSwH79rRbKk6izPf6m%2B2G6VdfFhH%2BMbDev2a7IVUeGs%2BQqANfDu0avLSpibhSa7vnRtE5SUgaM4ExvjqbiPHNz1Qqco0T3%2FtoZErIw7JLSvgY6pgGQQu6jAMlrHglgrM4z9xdwtjm22hdph%2F7QOua%2FggQ%2BFAL6nK%2FyZ1KP9vMqaAWLEPF5h69IU1sqlZbO1hrDP8%2FxJA1zf0TVa%2FDazaXwOyy2tfHSDjGCq8Rs8E%2B2KCCivJ39io9PEaeHTDqqTMkcKYSvZnjPurv63RsWgv5cwbVW2MuHDjA%2FyY0ZXqlaX8xzHRIHCXCGFvp8kURCK74f8ugzI0S5xPK%2F&X-Amz-Signature=80b01712eb7b617b9cee31d975808e7195718b54e35b7b2150fcc5a93037ad91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG2D6Z7N%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7jTEsCiMB%2Fb1Lzq5tUXutf7G%2FzGo%2BJbqBCh%2BbzR2WCgIgdW6FSqCNw9AWWfmDJsgg%2BsIfrrsnYrPapFn1nJieolAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA30Iv4kKS5PPQNPUyrcAzbMXZbP8hsbfrbtXGzVH9eBQn5TrXg%2FZvcS%2Fai6Z%2BnUuEf14C8Ihiz43blCaux923CixOXI3Z3m7jLam3fwasJ82WpyEQnWESbCxlkyF7wl3GH20w7ctRj3rAL5C%2FM69DVJKYpydmJmvskjR0GiiWwa9Ie7dejEMuds4wqDi5kovQrPg5z223%2FiHlJSxHm8Xk9iBJq9doN4rT3dslwuFCqauqJ4KgvqxnWOwnBimjzG%2B2lpKUt5Aquy%2FSiII6G3CL3PmfgsQ7ai%2F33g%2FjEPmZjhrvQPQXPvQHOF5B1juYUrpzcLZ%2FxmonVnxQ9KjQCjjHX%2FeDN88WG6D7A6RFC6Vl%2ByhsFaK3Gql9dEZNvbck0Of3baYrK40UK9WaPvxhJyeuY3%2B0tzsOqWK5Oc%2BbMUxo5fZZT5oWBOg1IOR%2F9cJypgm6BGcqfEv9DbiYz7ks0UkopC4j47it5pvhJI3tOT8b7B9tsvjx3qeOaHAhZnlG2husVrwmY858neGX6YnFtrD5ZmmZLmMpnSCKR056X0lSxZ1WA1ULxX6EdOwkvXlaXB%2Bz5HQnX2KyHMod6OEdzOeZYcuqn8POVngI4KQjCBeFh0TwBupeQiLjfIDlE1udesnSahn7Qzm%2FQxkIvWMO6S0r4GOqUBYAf%2BcXSs7MWHia46ulq1woeSpLSEQL0jFuGkTxxyottVcIHsk3cnh9ZjkyGcRnjqOpmJ25QBoIlIutrWMA%2FxVjJJbyjEyvW4eQuKS80i8c2oWu78KipoxfjTGBpTg9xX%2FZe6aAfK9ct2An0he3PZ%2FEmymmQOTh4oBsVd2%2F2KvkU%2F6weQR%2B%2FW%2BnpSIhpKmnXvgreUu%2BfTDM7OKBUV0Hpou4UeSDxi&X-Amz-Signature=1f54e6a06e526c67520b4736eb94034bd0688f41da34a03c37f9bc1ed3b2bedc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
