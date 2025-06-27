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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FOFIHQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCoIbyjY56oFW2NWMag5uvoEggjMagDRB1qBK7jbk5LowIgCJVBw0jcXApluo7pZotzB84cg9sSB045I9ErDW85er4q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBDWOZvYTV4lO0yITSrcA6QY%2FIO9IcoqlHvlqnoS0UFkPAM29Tm5jtwpzAigaaRNlt72H62ufnw%2FPEUR2yzt0KhDHxuQx2VllVYJw7LuBJHsYrukbbemwOJ79YL4Uvp%2BCRaatoymYEKtcF%2FSzYu9YsUkhSOV15grp1Gye9QCLJ0%2FVThtw%2BJKjJK4hkpnKiooomkAPBd8uNuOvEeviy%2FAvKRlulIa9VVyNtcCFM63uameSFahpJJpWb9YvOLp9k%2Ff%2BAjDFTAOn7FUgcL4UKVkGG3jQt5J6F9MedW%2BCtuWGDRtpiH%2FnoEu46US49bEyNzA7YEGdOdHsOgsFvDasItp4v3UQMgbtlBg3Ubd1%2B58IyMXr9J62MNb5dt9nm8Lwggc4J1qKUjOHvQN2ClbmVSgWxi9iiGMxYf2OUg9sPTyzRZVT8DoXllxu6NCRqmrzsbuIbSFUiUcZgkmNusAOYWvuTyIe3iRlfyKC2tMgZAts6lmGfMKHd%2BdRsyt%2BjMyTZ49EoKWlWmc9rmBSMZ6Z5Zcf6SD%2ByUHkJG4zh%2B%2B%2FjlGeGfh98x6h1xiGNFL7bXns7ziNhXmdNO3BfYaIbdFEK8PmtsPHvTrkEPU3C0lx4Hr%2BowZ6OuzELjd0%2BJYO73lPOzazWIfQ6SJ2GHMM%2FYhMNKm%2BsIGOqUBVa%2FskU66tgqQGQJPWPJpE2q9mwbrGsKfRXGGvSvzz5OmHzh1fSW3lUsL1zvd7%2F7bw3FFmcBWNx%2FGewyhqZCgWhsHTItoBuswHwLbtm3KgPkz%2BOX%2FpK1Js7uOCN366pAF3ghli9RS116uCwrNqbebRYU0bvX1rQDTC7Fn4cspcaG8YgozcKgs1YfTNva0h87ClREIvMBb82LHtxL9NCKGPpcinEHx&X-Amz-Signature=28939d4882b9f7b595334b1568b326d18f96f9ee64b60458daaa9bd37f71f33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVDJLOC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCPHnBXQnzNfJ4l8lI4ppohYvZ2d7%2FI%2BPko7aTkB5a1yAIgVSlgdz8IXVTDyk15yjOwABVlhPxUWfCmusuxEf%2F9BFkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIT0sYwaoOSvUm%2B3aSrcA6cpxhdCKT9Ek%2FHt3ObGa%2BeahACPLSxSkNcm5Phbo3mCM4KWHgSS2GYujrXXB%2Bs4qJIQn61Aab84fkoWqLw1cnNSXagHKYv%2Fa0j%2B9sOiNIQTflXitKDjT%2FUL%2Fsp%2F9cJ5H5beFahwhWmsBNbJXatMyTA4QK9cHWSOblozdatf1hrsd0V40mOZ491A5J8KL6p4t5S%2FwQbR3QtvgZSoBVwo9tnf0uMT%2F1yTooF%2FPKmicX1UUgM%2BRKdz%2BuU714Oca8%2FzLAh68CFJq1bPJYmt1hYHSmvxxJuU%2BXAQ7Syiqd2hgRcYDxhOlc5enUTZCuxiHb93l%2BodzF8iFKoN6zoN%2FRrvMNrYeEW%2BKGp6B01%2FdQA8SkLR1fGG5cL2YgwcbR9uRbyt11u3%2BwB0WFdtnONB0%2BgNdy8MXEskhVLzQ61wlLNnJUCtus0qEVHMXT1%2BNtbpRSxLm07s9u14DIMtXUd71MdFAEEe1UpiNRDwD6M4LahLA5NvhjomlPwoG87VrUCtRnqYMP9xPGFaskvk%2FTZE48%2FKnbo1DyDjN0WuWnAtR4ffeKS9bdbsGlciF1uUaWklHPtpbI5GznBt5LUQBtFZWbDxdV49hKsWaO0telejBWEODpS1R2sg6zFW3sAaBzT1MNOm%2BsIGOqUB66dqlY9VegHBnw9taDiODF2zd4k%2BS%2BjdeXSZhIg%2F2p8uljFtu1h%2FgF%2FIp095%2BKF565Gyq%2BY%2FTtMGHIikVHDpHvG79Z%2BzjGjfmaBXLHZkmjHzhL%2BcnxJhoCKRUN3yv1dfId59VIa0vCtAPEackHsLXiYbP1B7KWjEaCRhYM1YK5Lcs%2FAYzILxGEBl2eY16a%2FsucFkY0fovnzU2ij4N8ANAjk%2BE5vk&X-Amz-Signature=72f96c2cd3ba8ab14b42fb4bb916612bc1c1e6223acac2b355a36d0604d11711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
