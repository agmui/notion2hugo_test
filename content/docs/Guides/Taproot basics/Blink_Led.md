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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQNY7UJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5vFSsOBRsfwApr9ToMl7Fy8Or3EIACCMR%2B7w6ZJnr8AIgYJKKl%2F82Kll2sjbxHodNMwg2hBDPd%2F0eD2BKzSDkNjoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOsisf5syiPRZXGvircA7RKJxMyNjZDMQDHNGDR7UCH4V4dV9IBDF0j7546EWxI2ROC3k814p1shWqhTQ%2BxdNYeir7FDK4iet7Es9%2FZDr3x1WtiMsfK2lKUyT96pmbV0RZBOmIa9H471FIIvHrVyVdbGUquu6rmwrvzbBJ5ALshbYWCpUu7eB7RoK%2BQs%2FNqaJTbahP1gLGyLlU1Nl9hfHh7jEdWM50KX%2Bo7PL%2BkXD5rChYEjXHvgyOm9lxKI0WHcsJPUEck67d94VVafD%2BwL8aUeQXg1aXNJM%2FVZGg7saBiN%2F7V2D%2FguIkkXf9CPq3qq%2F%2FOaK0DKo4sxUFgvNLfWqgHle7%2BTLXboyfmnjx7z1rFCFsVyWIVyi8RbWRauy0OKhSkpYUHZVxfUMWU%2FUQxUa5j7aCRXMejGDXZM7DDBxODJ0edujlnJm6qZj4oMlSD5jhxF61zqBowZ5QX6MveQ0CCGPVz32Sbgsdb2S3eEQiCmOyz435m6RECjtitcTcvw%2BomqUYXzrk6Yk%2B2W4yffphZcOVquo0BVdculgZF6jN2Om4snlj9qTh%2BeK3ZmbGClXBdZZF%2Fwil8R%2Bc9Srz6SW%2FFrDrFPQ0eIjxOzk6qtcvab%2Bz1ukR0djOg0bKGq5QnB8C7Zd2t0iXfs0woMPH%2Bw8MGOqUBeJXgiY%2BQyK0p1%2Ft1dYH%2F9H7WMwDYQmbyxTSmAP5nfVlnuCRpLto%2BCUBYuSrgVPOfV%2FyYKEwabY5wYCKVw06WhBNdZdi9T7buqRKrVqz%2FmNbXL8wnRW7p852plipw4FS%2BDmZ%2FM%2FKvh%2Bix152bH3zhsvngL9bt1khi7QppN1rTK5ner0CCouwNTF5AlhnMk%2B9bQ6Y%2Fbp7GT%2B8z5F9tl2Xt8JpzEXI1&X-Amz-Signature=5729244ef88303cd7450045421aed3885cef20c4531e4eca0800ffb572c577cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4KJEV2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCqIb5iERQGm2jRgWI18elckASZH7BdYJAJK1jhCDRAgIgfB6GpUS2CqivmXv9pYXQ0dFBMrvC8UTe2ySMjY2SzUYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ2aP1Pq1jY9LMQQyrcAwC9hUX5EN5YNfLllQTB9SQdM78TK%2BB1SPxVXwRrb07rkjVLsLQt8UleKI8UgK5EhBsEJVUE1UM0E8Tt5JDPZfKexkF1UQ5SN3Iz39kLHz1befMHaxhSBfMtf888H8OgmL50LVusetj%2BFIGFeLlMCrks3QKyyrgvbh3r5ZVmKM%2BsXYWRRXZv2F3lKztIMSBKAz3FAGBDAeGh3jjJIChh1mdX0J7CsNnZzoHHLxpIfSUn4BqlaABR1LtwQB9EfEKskBAuoYHBjUr1J1w621uHMA5F4SanDu4p9pwizuloKXo4%2BJizOLSOj7mwml4BO4bwd0idjTddX85F9mJIrPDItqrzW7KPZtG7iBmCd%2B%2FmjhjOvL8F9jq8L%2FAIGGftA8XfLdsuBOWqnucyvOukhC4bd0fX8PnMW7%2F7hLTCfznRn5WBU5TQqVSkmdTGP9jbT4u6M8yxo4aHRZEKMOXlWDG1%2BX6fggPSl%2BCHs8TPeBjiJ%2FlwPfD7Ng6ocrqeTcR%2B7pv4xQxGkq5vz67rmECcuJBZEeY%2Fl0fmRs%2FSu8RqvRFolmLLBrh7gsoCRp%2BgDHKqVQMIg0SBYZkKuof1nQtqyJhA6oI%2BjsISjfJVcrszRKaro9LuhVz9kMF2GEaqhu7kMIP%2Bw8MGOqUBpCOJjm0cCL%2FYoqZt25%2FRhcEoWMO6hmlX3JVczLo%2F3MhAAN6tLd3sk4gLB2W5RaxLFMbGOCpKq%2FKET1SB8XS%2Bu1M0HinCcFCVXwqC3oQvUvA2H4KD3Mj%2BJwD3ZactDbKtkm%2F4Ndag9t%2BVLSkGpZpS60SnW4kgt8Vtv%2FWtTiWRak0tW5Umg0s6leNsbSFMHQ346G32Pd%2FZSUPJmbwwvrI%2BL%2FQslTp1&X-Amz-Signature=8637e5005c8d034280b67f66be22ca68bbc7b2e36ce44d09e0974939367b3724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
