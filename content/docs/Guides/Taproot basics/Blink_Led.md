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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665VB4VIU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHltH0NaqLUL%2FqknmsoBWbFlO0FAZpmq7azFv4emoCcvAiAm%2BgkwEj8PpkC6dNUPdSUiHWJkj5BHc9iy6KpO3%2FNmHCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMyVyvn%2B8PRus94ibpKtwDBSJFGBghVcMhpRh0i25S7m%2B9JlbzVNOVR82%2FdyybA67ZDJOfanaOJPem5Sd4dGC7LcYLZQ5k9s183FFmAzp14SbjJQx8227VH5qb89mnPQQWQ%2FgG%2BLyJNhKc4JTO6PLo43RfjgUp5kl1C%2BM1bTLCF3eUsBeXuVpZ3jJla8JCkoD3qHPqeruZgnuP5J7jmPGZlQbvMvil7pSPE1QL9i65%2FanAg%2B6zDH2mgbNKryuX5FArt7dWtqcFwV00KO9385QCcOx9ki9SqqZhHf0sTMSL3VLA91xgfn5TW3ulIQV0o6G8YJCCgpC6b8cWHlVxf%2BFDDNc0AoibGvD5XVys%2FOE9IrEJ2%2FhItqrlcDryMa2qSjEh4Oo6v87EPdlDSLKMajsJ0E7Xd40%2BFbNENINgCM4aDdZ87vlzPfXj2zYMrwBS0VzCZk4wX%2B%2BeRKBVU9Q4LbxVBaycFYOfydmrRnKoe96YG%2F0hmCSGfuS1SUY7b%2FLNp9W3Vgx4JmKDpr1%2BUzZ2DHiTQXYUKIDcI7v6mPrQI9wQIPTkpRjXLZWOLxQJI%2BBybX78SI008qUGRFpvHJi588CDbb3vu1nlhaJRpMchrnmmHYtNmGGEyz8Ord5js%2BTzsnNFFDRqrxpsvewSli8w06CowAY6pgFfM0IYlmrj5ELY6hdB4DybRt0TC0I2a9i77yYO8nqFpXwKcCp3dFt4ZJ2HCI3FVA7a2kdkapn0Ai2BcTx8iJwMKorwBWFjNdD28Err7FS3MPYrPZiuN8N94MaIAbPdSLql%2FxWv%2Bwilapy0eKI8UiOQPsPZAIOwvqFr3FhKolyH1vrRh4rG%2BSGcSCulscksdCoq0%2B%2BSMjKqYHQAUESVVwOshMz8%2FKg3&X-Amz-Signature=41c3b6cb0d039359d1e3bd5b50d7332847e8732d43b79864899ba3d1a8981fae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFRYVXTC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAqbe5CFJ3uImTlFeL5Jy36XoL6cGC%2BkfdJKCI7bDtBxAiARfWBOYIQCQIenjfKMNC%2FzbnbMLzEqo1mEMBVRokKi4yr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMhsrn6HNd0fOqiIKmKtwDCLRizflw9Ka6bbf1UofBKaL2F%2Fs0uYKaVflDOEmFWfYwXhGFhKRkA%2BYbtnukvM8HfxqSJhZ%2FeW77USdunT83dqctCCLTV0ROf0TbzUi971cfxw2SIhMLzMqoWYPnlMBVL%2FJOI41x5XdXzBOA8jwlYI86OOulHLD2NYHbWkX01MmfgDdL9p1J%2BowmzWMb%2Fq3XBu%2BairqC1FBhCpz9iSx0DPbifJ%2FNDSGcJ4EvG%2BVX6pPtRcLPcN8lNax8Yg61wXUAZsix5scD7QWhbrlmbAz39caeLuLPFPUrfVavIrak2Vq6AWNhRCAUYENzISZvG0lAagPaABj9hwnGt4LAAJNU08HF1t3HcrsP2lPDYc2oKmVv3bu2Gr%2FPkLqDA%2BXFsr62%2ButGJpRlxFtvFtYTGCDAtXpPvQV47%2BIVAXzwh7YehEAgvOWZ8SohoXhFWkldIbYX0knYs%2FW9K3TEM8ndCAbI3CS1Al2fK5OxigjPh0Rrd0IUs7IxuFRndxIx12m6%2BY8OoL23CYYscH7EukAXLXnKAFRpm434PQx%2BB%2FD%2BowN7VrLKM4292ZXEx%2BY3EQWq3iUJknnk98M5GMoDRVot%2Bzdms2t0rv%2FIhMfx8tZX6i5tjOO2R8CCNojq%2F7alXJgwxaCowAY6pgGAehOQ5sxO%2B%2FQHlWSrXEQ6Vs0%2BYWWaEyNOUhX97bMvZ9rg0CElHl3tIeGnmvzgdYaLkv9T9iLl%2FEW%2FwhdXSWsl9cuOzglYUcOvw7i9QmwLCRkpzGwXystZaJUQ7zqRMimOy5%2FpYhQatcWp502OxNiTqgjqqtGIdepv3iCMVEfiL7siVOzN5Ms0ZiL0WE8nqPc%2FlTWnLUcoyz4br64aVbch8uHrBYtB&X-Amz-Signature=f72612dd39a9e2a0a9bd0b910e7fa2a4e13f13e89ed96ee15eef7d29204185e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
