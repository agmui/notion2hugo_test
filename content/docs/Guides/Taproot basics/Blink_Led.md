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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNK3FFVS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFvOrVf43wdfe92uYnL1JnqtKICTTuzzbLD9YdrDT11vAiEAoFc0h7DZARVQisjEgh1TCetHoyzwAF7%2FR07vUcu4CokqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4NMOUBO3O71k7goircA13G0fPr8an5aU6oAl7lSBgkW6INRF3NlVrqs485Afyi9YWfduxgPvtBz2K0nkdUmDQYYZr5NyVwMA15SPNxeaGtmopMyUjoJQVgPs8F1Z6qLzm8qTE9frsd5uauRPB7VNwLL%2FmK%2FkOdMb7110Z6Ma1w7nGMKRKpBdYC90cicBu6wxn3n1uWGB%2FEee%2FYqlB%2F87oNdDz%2B4fLIOgd3qpuvS7aQxN9ZPKMG8tuiCRBtv8xvmHXRsakIQ9irDMMejKEN0Hy22vwBJHJeTzcsyIC86L7MHgY7DV5xsq%2FnysYcA0S92i99w4%2FzrZs5%2F0ZTIsR5e04yamKMRX7OEPC8pF%2F%2B6AoNECTNQxsjgHy5XFhpYbaKHRZKAnXz8G92%2BYE45nTo2wd2X6epzxQVGx3TKM49mpV8sN6donwG6wudFXtm7jdgQjgRIlU%2BdmzvFPEicqxx0QSoSTDWyN10zUriLJxe1axydoId%2F0NbXWM%2Bljaj3ZZB%2FL9PDORxtwIlMoTG7FFCgpQvg3sDvhDfIc6YKWL7VhlpfU%2BHwEf%2BVS2PhHwGLFE0hzhJWMR0hEgSrSGnYyvdBLQHabxBKT2Qd3UCdqNLzmh%2BpKTmqb8scMQcVGCRhb9QBKdmpss7txtyRSrHMKrDicEGOqUB9cL09S1Nle1i%2FkoiMXUS7LGSD6YV5v6AOgVoT8b8aCa4jSCnvPsI7%2BL7FqO%2FydDHjiyqYtg2X%2FlvMIY2JwGM0pldw1R2madJWn9I%2Fie0nuSgF%2BvrTllCUgBR1mHYCjn%2Bm4IseCZD8wY02SO4p%2B3zTCy%2FWVqWMehBG0U7cD87TT8idW0z2fXcncMGo7Ufn9leiQONbnLvegfUGHpkNJ%2F7o9XBq5%2Bx&X-Amz-Signature=ed1d038d742b4f9031461e47970a7422409258e0d4c27e0926eaf9cd6bef5dad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MG576P2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDAz8kEH4U250bRLstmand3qu2P6%2F56kzROkuU3eWo3BwIgbhoXt%2BjHmXDCPb4uF0Mdfmc8cyStXOBuaX0%2BoNluGtEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmv7BB5FG0IKGwwuSrcA9yzfspLXIlv6COZ8wSmGnHXFrsc%2BpeKM66bICBtwzWWzrRrKFr3gsWNBTOYiY9U%2FORT%2B8usLH71MRONKlEwoULqH83Ky%2BU3pp70F22aCmagrAtT6%2BRYpCzWrUOR08dUI5etENyRt36tvipOOkkDbd%2Bn8oTsH3ef5UR6MORrHQJhMvyo0pQqbdy9PQ86mAJgUAXvdCXIgS29B%2FktSXB4RQ4kxD29w%2FO4EV5yOd8Mozjhp%2F9Ox3AFz%2BHdLMZ8jHzLjRipuTE0dvaLFO87xu%2F02OYDOlV%2B9qrfNSLARhSuXc3bj7tjTH9YUInPSu9FrtVzAtbq8lQhuquSW04YuQ%2B4Ml%2FHGzmbdUSXM28wa5rvzOZZkec%2ByfytpGJys6oeeHvm%2F5p0KaWDPLTD3LnRIq5C%2B7bp%2FlMEpgmnu5KMAdpCksVdS23DQLTtHTkpLok%2BKWGtfAQWrgtzVPHYu7d6GYVPGnYGNZWpD9c7OITztG2tRCcDXCtM8wooYwWljwJCwPbcekEk%2BEtofG4N0BRHq9kjm8aYQ0K%2FhMgoJ9heyQIdk1IDkWrnQfWox6F4eNuxVakiIZIdWYcu6e%2FT%2BNQGN7Ymq1VLSXwovnlkYjKz%2FjYgQ16AhNYWma6tNnNGf8MzMI7DicEGOqUBueYct6Zed%2BqFTBc55Fap%2BBoz0ewLNw87dWcsbjuAunmubUjAjX%2BZ%2BekoYLMJHgX%2B%2B43CQaiC0i3o1h5cH7tqZme8lSzWPw7ivVlMaVKimF5a4t%2FXf52y3MglyApPlF8f88%2Brs4GSD%2FhZQZvn5LAq1I8Ddx7TGgOwf6MSPktr5qfNg1kBM7PzltU1aQ3DCDmL04pfHbkrp05dBHIy9DyXsHGvfdQ6&X-Amz-Signature=b4846f1718d67f7290f88dc98c82114861089b9e57e1da80fbf199d960eedebc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
