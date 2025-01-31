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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUDEG3H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEYinaznFi1i7znHAXEpDS76S%2BM5ZxH1xiU4DEA0njHQIgViXnBzVU5R%2FWuwHlZhLPq%2BHjTB2Vpqd1WJVnorTSpekqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETGQ4t3YNb43AiGNCrcA3gJXLPcXMnSPSp23dEbPXd65vzpXhereiJSMMr6g4l8uNsMdQQpBFHFg0%2B%2BCgR0Z1JKGL%2B57%2B5VJO%2B9NmkxyxHsYG7ijFy8H08sA%2FcJuy%2BIWIF3Pf4mP6GwEUBizibT%2BVKsJC7X93Vv0eqyFnuxwYH4bozO9T8H4KIXiOuTu27UKsUGwUYmJKUrEhrP%2Bf1Y2lChhZsuITET4NDvx2k6M98XC2EecFJyJDTvrI9HTkpnm36U%2BJTLROUTY%2FXDOSjxT7trHDdURHJLmBPb3NPmh9w6lX22wORytprvP33RLi9cwRsxywtjgXSdQ9lQSknDORK70kA3x4cKKldD9JH8Rg6i5G%2FJgJ6xIsOLjmIBIbmjHiYjM6VDCDJpaW0nzNtZHfhbWST1SGQ5FFYjqwj%2BlBGx1jEgLF79MGyO6AvNrD0Wp16h1GoM2RQ5zA1ptmsmb3k1Z9RTKfNfEOCUx9XQiKo7frOCbPh%2Bl2Bulh1SH8cMWeQ35SU3jmfmE%2FeaDlgJU54PjFUKWrA2lzmO2IrQnV4cBpDQ4V3Mu92k9PLy5AJRy3e%2B2EFQZ8GvfCjG1jXlUxdzrrYJIkL28enMXImy4UY8eB4H7%2FBtUxEvCtoVYvsXiIkQ2MT8Agmab3ChMJ728rwGOqUBVA703CcYxwQx5cAgLEWND7jbJ%2BSr9qAcNUtYjBFpgM6wfS1O0AbnLR0HaCV%2FXP719wMeGVvQtvK4Xr1xzw4VqfL9lGiZr6CJ5wZoObBMZHeG15blMF3BTUZTN%2FuIDCnQi%2FyYsB%2FQhKPIMjis1LmJ1JRoRHCGvr6MH6LNDE3BihhZwBj3dKzd8P3hjUJGK8iz1T%2FNKUeM%2F4vGmlEpZmbNRLd03lK1&X-Amz-Signature=74574cd2fde1732f86ae11884269bb247585a60e3b005fdfe7113840d1cf66b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JLFPQF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T121306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkxVQS3P%2BKfumXn0WzQHC5vks3LlMPEr0UJ%2BDYS1tzwIgErp5zhq2Dv8H%2B60T%2FXlsL9MKDRIQ7zows1%2FygeUK2dEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQVRUwDgSZa42ycUircA%2B83AuMC60N3QAOaFY971VPXsHleH5TPGiQu0dc%2B3tXcxGIdBbrGm3U2O%2BhiNWfmHxh0xBpQGaKMEIb%2FyVN%2FZkRP8bjIzxnAeh766RA1XeHdCCDvThTOtddJh6lIpefCJhMXiAyTVwEFHQlpJPhLs88F3C16ay2Iy7V0XKhw1F6gRNbUFq%2BfTk97eNaiHjkgAXT4KlycxkGbNzt3uwPJUjxfiwp1zPEZlu2Of%2Buz9upHLMgqX3ypuCdb7hE%2BK2rXQR9Vdp0OD%2FbS%2FeSuvCRa5YQ0Zl0tus0%2BE2Ry5AIzVK8J4BwW1IaclZ7U2esnoHkb3oZS9TYfwk0YmC6ipjgoIfQXuakggUgTX1HbIEuSvh0%2B5HVbmWcVqLn5r7cfRT4g9jG8dqsYdGRdcIZ7BjaUZtUIPwqOH6PMrLLIN5Z7FvAg6yDrhAyX19DSSK5%2BW4UIj7kk9jZL71fED4BUhQs5c%2FKLLJzWBBwAQ6FeWrl2GIeXmPqPjO9K46Q%2BDYFjPGwbFhRVuWT%2F1bi9SyWmHFdHUVCeic%2FD5k4CH5rjN37Wt4mW5H5aZu8NEvmVAf9nHMTMD1tvnmvU152DhWPcpYnv3BGPk8H47jD5upSSK%2BQhccDIMdjmoKCHTs9HVjNOMJ728rwGOqUBQf9Di7JdDVcVOJmhEPVGI0duHuZagRL%2FxSoR5TAm0PXWrvXzg9MfVjgB0EQsxu%2BWXND6QdEcVZgxvwSvOG6%2FZUtVZ2ai%2BFlYsL4FZNkIs6hEMF28ut1Dn6vw8cZK3nBglQCg3zSpoVspKqhaOMGQTYK8jVlLyrEczlNqmHJ1YZbpeSKWfFcqrelpCIy%2B7Dx5y22mItveR5RAjsytGplVFg9OVq4j&X-Amz-Signature=641d7fd675656ced90839df02e5c82c5cb96523c54f750d882e450f73d2a82ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
