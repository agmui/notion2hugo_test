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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZQ5ZYS3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2Z2Qoha7YQ0tEsFFbow7Bdt3r0ExKacsHLi8RlX0MwIhANWB805RTd%2F5fRmbldh4vTm63zmP%2BoGdWGmjeeiLbCcQKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLocEyZP0Ya0PtInUq3AOj%2FwUB1wqPYMUEZdsZgZaZQNjaOuQ2Y4HPSDmIyKRGgcTnj55a%2BfpnGzEfEPTSPomMJe0qpUkoPLp%2BWwbj5qh0ZKPUGbPYoa1SM%2F2opGj8OUcOT2n7LehHSgbYuN7hSHQpcMU5b25rkrS6aZpIfBPq8%2FKsWqUEAJE1tiQu02Xr9r8nTf8LKZkm7PQspL1M2IPOx1b6FZFp%2FlBLpL1Pqqj7UszJKsy4OhUowr%2FXpXc6UqQxGwIA3kTyjRkIzitppq2bVu2jzEuDdro8Ew28E7JfXSD4wxL3vYFW%2BKyorNBRmKIGSij8mhiu3qYg7QP5a4w060w4b3O9CDgrOpg610Uc3uXFUlU%2BR6v%2B4JJAS8rjQI7s2h5CQ%2BMAien0vH2z0nPf2C5%2B7CJYgTC2IXXhmL1o01oJKSPsr61Nnhaz80%2BaJBgXULWe7EVgxGs54dvj%2FCzqx5V%2BuEs80mETrBSOKpxt9xCOx3EDKdjpie42S4DniBjXO7XE%2BWFQ7M4wi%2F6yd6ETOa32aEzckYUpqrWJmv2r8qwdDWQXfwGbnLTaj1UKyitvdIS6ZdmlFHfV2AZiIv1hVMZJtGpBZmIOqDdHbeNBEnq3rSkvM%2BNmqNtxVDVfAEUhrHSUcsvyIvI0HDCe9MrCBjqkAbQi1aepYrJTuGejiTdDHfwbbZnDFxzEKItGEhnt%2Fz7zjjilk28St%2Fh0baeI%2FDqMWNVOYYhq%2FMSHMsJ0QFay%2FvBApEQ0fifyMFI%2BCGk5%2Fcor4RXE5Px6HPtT5LyHUZr3OEMTw6N2OQxmBFOM0WkBbKtCH6ojUpCEgatyk2ya58zS7%2FnmaN%2Bnvb9DHcfdzVrw0X2vXvS2j46GciHI0RuppgXsPjqj&X-Amz-Signature=bdcf882301cbe69ffb3ab49e92ab2e2e7d956b5790d9537af8ccecc6d58e0a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4HFQZ46%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC87%2B7KQKiSKR0Mn8%2BMC%2FtVmW3uWsNbpAx%2BoGuxOIPAZgIgGJkphsIeyFAIRIRfX6U%2FiOSLPUX5ItJCdvuPMV3GfoIqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0vGY0hjJXSrGw%2FOSrcA%2Bp09tZgWCWJybn6h%2BpoVlfAm5HoRRzujV3COTEciR%2FDqhOgGCIO2je4tv3px2vI%2FFKtNDQKwBGv%2FUpnykMUzyXgWvP6UJ9KvHi3u1pwsG4AvhuoBS8x8lu3mdqHEGMYirdJYQKl1FcVc3mUM%2FkDxex8txYSxZ3Z6LPBqhqAdrxcbfARlggh35VFsRb648pKJY0cqlsQwt%2FWBLyAIlkt4uqCzotizyshRYEOaYDr2qqXTthDb%2F9av%2FODxbVINcfqBtuVEzXpx3R0Vp0IeJQk10M5oDDtHIxjfDWDuI8ZjG4Q7rsIwRaTlEnijJzj7VspA833x73E5kSvvOMNgCLxzOa8y%2BqJuN6Cr7gxn9AgLsNysQTlymVFB3nzlBVVLv%2BiOTRolz%2BbjDoJkUL%2FEiS7C5zseaEKwphQ99y2cO8FStInLfWysUf9kRzfDiWPxkH2ax8FD5rHQYA6rBVQs3sbdZsrCH%2BLTBWvISIHJMHXHABqRLZYJFXBPyR%2FoyuhqQU%2Fhc54C8JQCVLZQuoTQTwn%2Bj3TpkzLmUtsNsc%2B7lkDJcUlRV0vM%2BYB3fc8mR9711LC8esNCHmSp6YAJq2UlqEdm%2BUt5mKMKHDb08cqZRxVECynmBAPAGa4rktyksH2MLT0ysIGOqUBW%2F5PZJPpgxYd3t3j1ztGuIuDdYOAF0b%2FmgrMrAEgvmkX10ZsVF%2Fr5OCgDdzuCIUYZQDVvXM3eFhiV%2BA4hUpLl0BcjVKJ5gmvek2Tsi4lopiO6q%2FW2uz%2F%2FWH6CaU%2FHRqwPsrRHaQAWjpghcno78%2B3TEKD3ViRTIs5lFRa%2BJTnOpqw0r7Iy8%2F6Cen62bnadQLyf8NlwgX8rp5nEYIcccJ6B2twtIKw&X-Amz-Signature=b7ac550e48d44ee442e2cc47ac6f256b447674ede60f7959a7834b0dd75b7a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
