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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UUUNH7X%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9EZNJns9E09YwJZv5fS2F02%2BXocs%2B%2F%2BbzMfuZzX86ZgIgW3c1AYMuvMc%2FoTKNk1tgNsQ3qUfFKRgDbcLfhBv62rAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWfVJFymqC4WtvuTyrcA778AuRxzclc2ZZVle2l1jEAlby1%2FUghqJgX2i1SiswNTxKQ7T4hjZbLGPPUHuDOwcX9jWXYNfdn%2BO8XFo%2FIO8DFIGnKNA%2BuLVQMRACaELeVcbvtC2cHnkRdku08hetYae5K5FdAuPa0ODF2eu4ZzrgzjsAqXauUQCk158G%2FDbqJBuuSICKjNziYtlzwoZKYbuyBYQmyGmzdcL3tztgmq1Z3ic7O5MdWxzNQ1IZAddGbdTrqzwhH62G4ofkmTJtRz4bzCBUNIwaC%2F1BGD1yx9NOc6WO%2BGrSDpFsTzFzj1IDZTk%2Bx57oyNLe4iBjr75HyNuFB4i1JezOo7h%2BaXIRuPzhjxus1SUCCqY3bbkYX9j%2FvPRnHkbh0Yza9Zu4sCGL13FpjM90zCfOMXq9BQLG2oibtZgrjEYjhdyUlHKGADBEYQaifc5iWJcKZpw3YsHOLTlFZP05a9CC0BQFi9sI%2F3W0%2FN5zU1gOfOTp8Wnx2VLXxbm%2BexU%2Bu4bmtSoJVKMRRz4eqRANT8I2huwFZXaiIICpl5wwv6rhaB1cHpoa738ru852s2ABozGGIHvBZpO%2F7YEADzeCVvWLDYmDhLB8VUz725dEPQRzFTr3vEuU37E2b7I8bIRlmnZ9KiOEOMMzX88MGOqUBfQUF9s9VR60G0JRNWMVBMM9wSiaXY90TaaFPBTiZDwJqxUpJIuYQd8EWSDL1wnmF4m9WWgYjyzCeQa%2F35kZp6VMdikJhELSs5xA4V%2B4r6XbKphYa8DYg9Rq%2BeOxx91TGdKYLjgJGCRg3KUON%2BabIBbML3UbUAhjSPKW89kyrKIBY3Ycas1OXbbF%2BAh%2F5Leh5corN3av1H63%2FesaqdKQrtXBYcXFZ&X-Amz-Signature=f91da53c433faed8d8b8d57b363ce2e6e72f8c55373c6813ee48b6d9aae066ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KF4Q3LQ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuEweP%2BVr9nr%2BhMJ3pRUjG8M07ig7Xmc2yO9QWK3M%2FKQIgLYPp%2Ber6rCWMWAA6saNuOWN1O1V5nScWykjTBcteWKsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzhXQeLuPw6MJ0rDCrcAxsAmteRkTktWXRnQPnhA5m9bIjJGZhQv7JxOurS96UWM5bAtRnv71KsJA2SUmzbi%2BBN%2BdKYshhBX%2F3yFLK%2BP%2BwRQ3Rl4SyxcNPI3hSDMj2vZeNhDwgP1tCrSbhMed1Vzx7%2FKt%2BzKhcRn5Z%2FktAH9EMY5QNp7aqtb3cGyRrdLrF5ww7TbJXgY%2FHkoF3z5mSLxRD5VbK4xileRqhi9M%2BL%2FXj%2Fhy%2BWKfbQggzgMI1HSIi1A%2F7uDnQI0IZamR40vHWLBIoKGP9ahsPslATyW8VkHWUGytPdwutSiR%2FftypmheEaOAq1y4BI4ny7UsDfVpk3mVH7OmzTL%2B5zZuu0hK261UQU%2FyTvXlNYQhl7wCiOAcmobEanuYTboL4PjTbdYCPQdv4rTP2DGBSyKjxg0dUC6Fsg0FYBru5c3Xww6yYF2uJDDJmJkioFJxNkEtJ3733pY3%2BCYstp9eAycbX3PFl6LslUaRez%2BghYfjE3kurfRu2XMmnxBud9Au9j1mu9MxWsWwJy6V3Vb1GxUCOlxFlFou4JAv%2BeboKe30mahD4Ls7DyTeB1GT6hrw3PfiQedraehVX7%2FQr86mvFikZlav3%2B7K5Wk%2BvkcoLiVzTkCPVmIQ630ZCk0QVN8zKza924MN%2Fj88MGOqUBuOyQVju0UfPXVFw37bqka5dj7UvIsX4XQvhQ%2FyyvzTXaQww%2Bxdh7Cqr5SqxOzMPVOS%2FU42eYeeZ6pyeumyC9NNecxT8pWFlBTawU9RF9uIYBYuWP9ZCIA9BLAlqLIxiQpTTD7BrbTXAnNWk1OiIQ5%2Frsv27o70k8mjeycAd5haJfihJgVCGoR%2BpkATOP8r5kOm9gZQBqNhN7im%2BKJGD6x6DwoQlC&X-Amz-Signature=0901c17daf520ab9f03ec231b1a4f9b039d4e5c3d3bf6940ddab471244639e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
