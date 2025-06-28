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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46C7UJF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQqCBpFqOjCEngzIXZelgI8ts5T%2FlZK6ryza98HZe4DQIgbQraFgHNyOGqT5m24fWAEWuxEpiHe4eWhVfFtdLjK7AqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjsjzRP4N81PsnewircAyEVsxOMFxnTbMMg3cLmVJCJ6qFFC%2B4f7Bh7LgLsxJnnt2cSxsNv3%2BzmY2hCgTQ77PSOYO8eyHsTSUgcp2ULWbDQwZ2DA1rwMiurg7vL2BHyc4YaAOYSNzkzbOEHW9AHe9l%2Fc%2Fj20TRnhMsqQQs%2BmSfMgM5RE1R4gX%2FMEwlV%2BymskROR4WVTrzx3q0OWEz%2FG%2FbJP06Nzg0B4QAN47yebKblmHoeKHtsfHWdxOLaUwy2l%2BtYf6nw53WOO8w6b95n7DovnvvgS%2BE1NDFQ5CnFePkj425ka5XQKh4LOD7yx3CGwAiK%2BUhRk7F40Y3BtNO6yLFZtJIVyQb%2BAUYS%2BTkA%2FlWFdHAWtyjKPv6wcmX%2FfZsmGU42%2FB13E2FImmip1Jq%2BxzNzz0Eey2NtISdmpa46GfXFqxf2br52KL7jc7EWi2YfjBaML93%2FlNXdvGyT6eC5VInrqBjbpZ5XphI86rPTDx%2Bp3mEEdTYuSFHugMuARXyhpDWJOKfBGLumhnKJOxf0Pci2yUl2Rh%2BOFx5VXJvNTd7mv9s0O1qkSHyQF8hXC5VbHs28%2B9QrrIM%2FXqijl97LQRr1QqlP%2FEZq%2FDMAOlxuf5UDClpKBWXPZkjxgn22CEUw5L72lTImvXSd3%2BW4AMPCP%2F8IGOqUBhmOgKep4rhm6kR3hwwRrB%2BT7pUx4HLDFg%2Fao0pjqK4XnUGImcP3HuD15l80rIJkIH4YSGGpyML6LYbmmO9P01FjVAKOqNX00RflJd731EyMUpW1mQo2qzLSjR7XgUZ%2BZmfRrYnFLoNhJbT4RIgSAm5uZf%2B2dhF%2Fs5aigB40julfBH3aAupklvwag1fErjgai5YZ%2FsMbUCDT3jjk7KWT%2B6ycd2jPg&X-Amz-Signature=24663adf90157f8b35c76a4d9988840a1d18c54be376704458c77500848a444e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6WAUVID%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7cCHpjksdkXp%2FiOonHvdCzaFjs6WVl9fkSrvzilTC1AiEAziyAKo3IXTjpHsumDpy1hYq76jrEW47o%2Fn97xz%2Fh36YqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONa%2BSKdyTkQud2x7ircA9JWyq2R6LNHuowpy9Z4i5xGl9R7OzVpV8CKS6s1pDO7O0DBmguH4g1Gn6ogI46Qnk37CA9IH6YBkbfu6FwOSEh8497FeyltIi%2BB0K0nT2BF96j6m1nyJZgtvzppnyFrDn6Gq7S4IKPvNmmC%2BbwjbsJvuaoNKtdGryJomhd7a0rG2nv15dK6qwaPUH2swFGvLGDBjVIBmWrl3Q6BaEZqw4aLaaMJtYyLYppsxdGHR%2F83A2nkNC%2F%2B1571aOZOit2bZCbtaXNB2pu4GuGGXYaOmq1X51QJ6JeNmHkHRtqLCWcimo5ynO8hBmYfBNoiaopQF28aa489BNHSYAT4dxlYSYX%2FZNAv1glM4wKHx6YsAT5jRgy76Br13LkzQne7J8w96gC5pFNkxyzLCup193kEv4E5h6IBaZI3Zsf27fBZIBkx5AlgJT6uGLYJVO9I%2F1l7xyePygnjjAF82psbOI1hsgjZCtO%2Fivr97ZFXj2a6W5nWW%2FWZb9o1H8yz8ShirfPyfsD7b2xXS2sc5AXW581ysg2vhEWpXkJ6CYRSL2SUtCV4uG5lxL%2Fi0KKgkbO0Pc15FeB0Ave5ZMxcLMnFPzFEVj%2BXQycq1g8sjDl8TJCt4Ea3EwuI72DvSMPi%2FKXNMPCP%2F8IGOqUBb%2BafpIl26YQ%2F%2BMtO3HciNJdpXPZBJWGA5jOXDdqzuwHTAKHLuPyoFUgYmKldlJf85RVUTcjk2TUuF7%2F3YJf2mj5xDmRsT9muhFbjVGeB03jI9mdOfNjiOM%2FS9HAcbG9h2QRWmiCn3pkcEyEfxn2bhgUylmEKs%2BWJq%2F6B4v0jF9VyP6TEnbcAw4%2BoEk8McwxWvuvGCnf34J3Z9kQ8m%2FoqdXY9WtEp&X-Amz-Signature=a9e3216340a3bbe3714841f9810decdd91ee489caf4f2f7ee5928d510ee85bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
