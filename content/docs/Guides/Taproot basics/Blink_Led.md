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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J2RSJN2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwKyCt%2FfYyYevwCQIm%2BBsKCctOo8MBNTDRFkvhLbhDXAiEAgnJRyvDzV%2BPNhZaR7dwkAOIbp6p5cdgl7HVfw5qWCWoq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDHRZPKgEHJQxFDsloyrcA%2FjdGhCvJqAjTkJYcec%2F7GnYivg1mwiPn%2BJbEJ6X%2Fq%2FORHo6xgRaH%2FrI9NK00AR7QDWYmnWQp6hhCX%2BSRp4b54jiLQr3s0XTV57w5OiKMwh1QYbnCJWbrICrGH%2BtugG99bVH4fd%2FKPZQd2V6RL9qjJ58omQjl2oBO%2BT1eEpeju%2BSzOsrwqAIkMACNTcluioiN9gTPSH3dPKg9oOD4g0t9Tn0LhII3uYIg%2FtgOsqlNLU6lE0l3ox%2BDcn18pFvuXc083p6a0mu4M58BPkWYwmrc6tk9dgbpTvh%2BflW97q6dCvPCayV%2Bm2Z%2BpJvSBcVy%2FSPAIlFN%2F2zkRpwjmMJlHCcE4wFBj6JAxdzxx2GUAmRyjxglAuMEp2kTBk6S3%2FF0q7rd%2BsTFRSSQyKewZ7Rt05%2F%2Bwn14InGy4gMr22bbq0s%2Be0ONv2tJnKKUk9ofsIpv9oL%2FwsptGmD66zHLKJnO6ZQzORxXdIfw%2B%2FZYu2vCN%2Fbb7neucr4z68VXJtb0euwtYbDoUdfVHGbThonXAOI815w7B2V%2BUN%2BJiHRUlnchGb5ItfGE9LWUxGPeej1GIwc4ub%2FB6aL4M2IVol2Dg1zV3RQILl%2BF%2BD3u8iHqY6O1B4thIYB5gkYITKG3AxNdFwEML7a78QGOqUBp4nLTujrRBLs%2FV%2BYWHT7pkKMbG3%2FgJM0H8i59TWxBQiQsdPx5QqTaIYnWNc%2FXaEZ%2FaQfcY5UXH%2FA2Lg%2BiLE4dQP1X%2FwEk0%2Boa4dNhuhkON%2F6FfPFvjNNY2rg7XmFJIBFyjMge0XLzMq%2F2iRmfguJCDw1XLt3vsvsBoHwTYdEvj98vTjPJrnXVd8rG%2Fua%2BpZuRH6mKg9%2B79fQq7bnt8M3FtThEmJV&X-Amz-Signature=a47e7ac9d883ca5956a66adcaaf5b3d11568742eb7367ec9b74462b415c08b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMJTQXTB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp%2BZbIaB8qNDeLpbBdLBHQpWB4GpN%2FxEj7Xg3xnQZi0AiBaUjASkcfEeIbKrfGB33QeS96IyVpwdyHtX73rC%2FR6eyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMtVvQQJJvycFihvzdKtwDv8j3dBTOGdtl8ferYZzj0JvIzgTfBuDlMiliwNkj5ZRf%2Fv%2F5rkZ0bTN5CDQN5Y9IrMlr%2FgLA%2BKLEW2Y%2Bc5SxPdHQ2gXnIXRZVu7kcTzbNTyUMZZwk39tnV0OBl%2BbslMejs8k8Zx%2B%2FAtiodOFmnxnC%2FjYMSz2kX26duanmjlg4ncPiGpq0qlEUuZkXiOSSjpMAVy4fboR%2F1SkGbmR6NKDhJV0DH7P8DhtmftR5dN%2BFKnq5crGPsByEXIIo5u1CU5DS58mAF%2FGVbpkaiBDBlfs3hj93Er5%2B6QAZxkpudurY8LNbYb1luXNLhbaHTyfojdCFoReYvzsbGcxiRIOivF0NyktXFbj62xOVO6mSUj1bUO%2Fq%2BOG12pUn1J9ouGxjc9Aqej%2ByX%2F5Io5G4mLTN%2FyTQy1g9pWV6JJlvwd5Ku9SB9vFYibE9bfAQWqT%2F1X2%2B%2Bpg1QrskJ0JPP82ZdC5mTHQbRqKongdxmO53Wlnlbh76Wq16l1CGYnJcsvoX9GzhMuhI%2Fsl8MfGgStJytVI0MKMWw0cjemk%2FHaoQCOeawS9DM6qf5h6aqo3K4e5vW7Rz9l6kd%2BF01Lv6YyNnc6oUf4vkqejDV153X1jHVSK%2BE2H8lHcLVTazwq7rZlgXiwwjtnvxAY6pgHxrg9Lra1tiSJBy8qm%2FlbzXA3twYgAa0vUL2F%2BcVG2gAkSDUFCvH1GHZpSD2TvApVrp1ubVW2fqxYBMLdCvtNSO9ImWuFgihdf3BzDLzTNrsjjajZcU%2FkyFU8nPPDcxRcbrSiI9rkMZRPAqY3yeyeEBvgFqtUqWB60MPB4Ert3YtC2LYvuzBK%2FbgYtXDUFChnNWDM4c10XS9kbcNb8Ux7JKZmfW%2Fdr&X-Amz-Signature=2e0a74f0b2cc4b48c3c864252925ae02cc11ec99c8d73baf40ff5ae64ae106ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
