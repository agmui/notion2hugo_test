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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ELS6IJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYWTWps96mzAau8Y%2Ftisfx2n5DhmfyA%2B2AUXXzmX6KUgIhAKVAmwnQVSUYS4BkPppjasr5l%2FwpsEo%2BJ%2BFrb7Qo07UhKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UmyErGHisue%2BwHYq3AMxm1MKoHpQfRHkRn%2FKEGq%2FbGFon%2B8XlPMLbcqXQcHytptPOy6r5aRZ2D0pV6TCOieMus8hNf3%2FP1gnpSbHCeaOSu2EDH%2BxMluw6JC7E%2B%2BuQR9bz72nLz43Q7Ng9nikDnRSanOn71w8zdRp65cLliLQyBPGTNvys9ObTmzUDVfOTn6apG4VsV3dhO3gFwuBIRTiqTzWn1sGrEWh%2BnO4d3%2FnL2AURInw910ZAdrIT3%2BTk%2B18IZ5wWE5%2FDBlOc73%2FlabwBsjVeBjcRKcd8ZKf2exkl8dIJj7dwKSCT5pHQZYs%2BIBCzEQdZ1j6orAXhvbdBN3qLT3eKFvrJbCT8UCbZnR9DKevEcPs7amKjp4KqaNEHDu4EV0H2KyviMm9L%2FYeYa7xSfXmmd6wto9QrW2bkrNS1ioSp6onFj3dEXcyxI4C0MZr8LvN6WTTMd%2Biy21d8iMxdINmsXITYEmUINFaXI9rQ4ZKLZZ2LCQlp7L5M78Zd%2F0HgTnUbHpwCEur%2BVp%2BbrhMDCFYl3KaFzyh4dL09FYN7tKe4VIHaaOuhjz4%2BSlb3NZe%2Ba8ltCQmZ0%2Bz9Q7pfqa8oZxwjQM%2FsQNaXdWlPr7gKgSAcf8Bxpz0KH1vnFZAE9vHUu1x4UpJH5V33jD63tDCBjqkASX8GfzmrJW0n8CwTQ%2FV%2B5nngQ%2BzWQ8cVdavS5Y3cNOZtJiS4%2FtqUy3X01GqlkWbU0ODXmvSBB0BWPBy7mr16N9Cr2C4BdYT7%2BmAHIfxVOvyJfBbVNBx5eH3YbyBfBrzmC4AZ%2Fcb8mTT7QJ50UEngLGbCYgS5T5GhMQyDNQZ4fQwcHTE%2F1TjIyS5%2FR4u7LkotRj%2FMp3v8FTbf7%2Badq4ou0FN8eGD&X-Amz-Signature=b7f75eb2c2f7648e2554fbb8b9c9cdb72837ce193cfa4cf62e37a7679a841ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM5BDOVQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPiaq%2FrDqSEwP1s%2FLoqJaeruS93Li%2BZ1myTkgElevgFAiEAlSK4wBfhUeljQyjuz9q0eAni3QotD4CGK0GkVg0qgksqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iR1ICIaggMA41hyrcAxcbZUtz%2B3hElX%2F9a1tpeGXJ%2FlrptvGejXIfXL5AFBXRT4Bp%2BeTlGsQNaEt5zom8glOpZuJnkJ4GBPBoPKzhGsMizmiR3T5390hy5uIp2K%2BdLmlWvBWOCovFu3v7v0jH5a53HBypKEB5HTycKWFv5fUfq5FnTbwNj%2Bo1%2FN5zwppGUPSeP0u1mCXl2vNmGOoBRx21mgwzETsUk6nDtju9dDOdSrROvKGZ%2FkXq4no6JQ7vfhzJGizcLyjvDU5gzniDaiG62NVo2bbCcn2oZiwKzdZPN26KgQMSsbC2bmwHRCm%2B5vh7baG%2Byw1zGgPx1OYBcBS6ggPi7lmPQ%2BZ6rFZxj90WIZi0oa%2F7qXO4NREggpUGK1rSBXChbqwqfR%2B%2Byfz65YSm%2BH7nhmAM7XiV0sb0AjiBXFErSz8HXtsoIY6E4chDjR7WhXTbefr4xX3IG6t6w7w%2Bw39FOBDv0oQ16Qdffl9GcVPDtxXFKtqBXsT0Ho7V4deqAgMynaNs%2FhZkEx4%2Bo5LH3LY1QG9lig0fs75oGdczqyP0CwAvo2XZV0QDoy1gvFeEncli8qeuCk24lX5rJtNseC3LhKKTzA0Mv1Be00DX9ZOWmakBNBqqHeogAhCtuG6CVoxow%2B6gWjT1MPbe0MIGOqUBRPCoi9Vk%2ByKiDA%2FllZsDtdBwSDq%2FN2d%2F68q8ii%2BRtM80V%2FEnElgmvcDdZf74TBXhIYqQX2C%2F%2F6anwa336PbDKn4vs8mUFnbHWz9wu8NDCYPoWWquoimVa%2BgrUl7HKqCIvWSA4U9IgikvyJgWJZTr0FXsDE4jweCBMb0aQOs7%2FbiSSqCYgpbE8sTQ8LikKTrtEBWGGJJWYDwIv6MpHug1TQ8khI28&X-Amz-Signature=8d397c312fb89f14f88edb8853439f81d1c39aa2f8d2bcddd1ea14bfe8762c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
