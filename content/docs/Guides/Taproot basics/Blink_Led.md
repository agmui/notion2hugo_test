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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI7KRRFR%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHt7v8O4c4VZJHyYqxZzZ6kWF2i%2B4Ozl608lktdpJjrAiBKGd%2Bp%2FNUi7d0E%2B1joBXEeDD%2FhR9WgRUgL%2BPdr%2BUG31yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM072QuXXX4BCepzG7KtwDgrWzS1s2NcXJQeMqTjnb07GccdPi19oS%2F81X2e%2BCF7FJ0ePuISwCBrvq60P%2BR3pyvzINybAR4YEWs6B0TWuegr0NNbWZJuwUgvL51cK495O8ri4T%2FGLOKlnC6GmspkJ8D%2BWX5qxSWY8nXnhZlwtjor57CEDIuuvq67DukV%2BGCV4Ym7IBX4XuyKMoREzekyXRv8alUZqnx9npSsghclE20%2FoP5%2FjiGen56xnUSbvXpFQRVtwx12S8lNvsG0HWv72pOetx6y7qFqGJT55u2OO5WbiXYghC0LzKMBwzTyVEtIBWk67JOiGa4Sesicx8GSNGDF1v8UxzaIwiCyRXnGZWJacW02z6DrSnhrcSy8hC5zXjoEUZ87H58GcVwrh4HJa%2BkOaZ%2BJe2M6E97lPkJiA6SAglzxJqOSvbyg0cpd1Bn41%2FpJDwhLVssV%2FzUpRLXtjn3BVIsAlRL2r5r%2FojeG8h9L%2B4q3QIKaJYlCY%2BZjaq0saTxCspsuheqMZ4maotEYDE2MXfxgD9Zj5bCmXJiLdRN6G0a6zHH7O1NbeclYnk8VH1JvPgKv4IYlWtRPxhMXUXap60LtucavB0bH7I%2B2khN0L3E35qSKM9iE3mE54SiR%2FXvTYbhgNrEXSWRVwwsfXvwwY6pgGJg0%2B9tZBPOza3XxGdh8ihm8ZAPEhiA5NZRzJK6a%2F%2BhY9UPYtSdTFRYwRm5WVWIv6qNahSP2jmaQD8qmgYUM3C5vH3q6G5DzfqEV3U7CbJZvC4r2uZtOQ6WpK9mG6iiVqjKRvssT7vwyr%2BNsGEu1Z9RpjPemCDYV8wYFuc4EgbaVGZvNtpSqPnbiWMO3QTr32D%2F7JFTyjGGQ7eCmu02I%2BaOMzQkrtK&X-Amz-Signature=6ad978496ab31c8abaf02daba63740df55a32367c0f1ce7ca4afac7da3e72c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2AQ7MVK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN4A5fG4e2NlWUV%2FFDz7Ncx3oTGE3l7s9AwF3E4CeY6AIgI%2FZg8C%2BibRCZKv8xPyRQas27t8BFEsFqwJPziZRvJ8YqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyLjuEWiKBpL1roSCrcAyPl27fz6FnbPVeFlnhEOjD25ky64uQz%2B%2FuNqgH6rRTgxQH2P3z3ZCAhf%2BG9G%2FCAsnIhoZCdfrBZ%2BEjpag6TDyJCPeMP9hd6VNnNCFRBdusUNcF%2BZjdenXHjJ%2FUPvQw1ahY8LycQ4rihbVbMspRxdd7xn2BdxHEISuZxXQknlWo4wjlowIvsp4HFMLZO4oZ%2FqSwdbIGH35at9dk2ed%2Fd4s0hogELfsGRfRZp3DowKpl3p61mb5BF2HKYnh8uBm5E9Ctyo1DW%2BOXHUFhNRESqtj%2FBRSH0ciuXU%2FCA3oFtQCENKh9P58DBvvzw7XOrUbgWXhj7FQLcyFr%2FOg3%2BRSFZaSRwRvPnfwte9R30LW4H3naHcPo17sjH6YC6UdOWxek9amIEXWu2FkMlxK0Oif%2B24uJaqvP7nDwDeuK%2Bmkc6iMz%2FU8aH5s%2Bchro9DtW0Ns0aLSF8I%2FSgsgzIm%2Fwg5tosYHZKLk1Clx9545utJHQg%2F50VHpx4zFhuD%2FWR%2BLq72rISJo1C1x7r%2B%2FiDjsxD52tzAzh53oZlHaf6I9Ts%2B8K5nQAbpm1qkW%2FJlo4BO%2BanUFp8qFTWmSLmw7PBbd1vO4mq59%2BvIwOH%2BFDTQ8xcslrt4a3oAXlJvbssFCsfQ%2FMmMMz178MGOqUB2eRMdhLUCewXNAzikxAv9kSu%2BWizIgPiF4uR4FqYXFu2TMr%2BcEVlE7xFmJ%2B5yYCUKKuBYkf1ODktqK01RnMhhMNX9w3ekVw8HARCYbHCGYqr%2BcaQ39Hv13eNRJzpFR2OFcQf4LH8EIXtYuRIU9MzW96aYBDNZ6SSqYJ2po6LGQjMtY3nUw1SIxIVZ2jeLJf2f6lodqkNkXmtYHkn7Sj2y8OWbSoq&X-Amz-Signature=792e96d5222d571afb384446e99dfeeec9bfe11737a5ea16ac603df0177da7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
