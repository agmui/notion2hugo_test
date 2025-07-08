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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BB2IT2I%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQC%2FkCoj%2BPsybkLLFwD6nilj6coeLnakyTv7LPmgnxaUtwIhANtrhf4D5nkB1JXPMGO03tgdHSLpit46o%2BmaVjnG8rdjKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMxUbV%2F02Kp6Mg%2Fd0q3AP9EGP0H%2FCcFNOs4ILMnAwqpehHWKj6UImkhO1yNnSLH9uENc1bDEirzIM6go0gsraWWgfm3t4Bf1Mt3nyhUq%2Bo6icg9T93LU3DEY4c93Mw9%2FH1hnyxLUJhfx499FrxzR1QufjzAVcDlE83kYUim5xECYYgYW8HOlep%2FpOP1nWHEd%2F23TdsCR%2F9fPSSXzMiemqqs1KquXT6%2BAd%2BAc84q8NIhrsKEExTbiWfFBmNZH0weCSYHGbIzYO4vNKua%2B4wUq04%2FeIUrL%2F3hxyvL1NsccTO6pi1ksxEsco5Y26QL6mth5uYBUMenC5A37F31ho8nhcaFC1XZnZesIQoab18HmgGNUfohdhG6%2ByRX2G%2BcvmxE0WVW%2F9QTn28kj35Q50Txw%2FdfOWhPvmmTLPH3JXLX9odDV2pOQDeBpGu1n6kXDuo79DA87BLzFA%2BGs8wIrkQTBy%2FXC9VSYsitsPu%2FGVb%2FwBL61%2FtxZYcHZ6fZ0V98OQSE8QgqgJQgBkTttk4thFrd4k1Of35Du4pQWqio7xO%2Fm3pyJpJ5y%2BwPFW011OdCCjGTiQ84H%2FieNAq2MvchT37D6mFq8GwZcVOu7LYqOmfZslJKTG53SKzE5DRpVRGzFpooeJ2Zi9z5%2FBZ5%2Be%2FWjDQyrHDBjqkAfxP4tHRYcR4FD5imaD%2FTacpJXHfm6eJPUqO6XX1FKxRfeR%2BBGaIK%2BgGjBAyivQZV7Dvyn63j9wgb4vGhmDIpoPkf93iAdI3v6Hu3jsHETYQYCKR2b1WZFh0vLSfNRGOYtI345CPlv8g%2FX8qz%2FwVS1x47VWQDykZkLfOyrlRRZYi7cD9F08XtIgY3TQx6zWkpDZ%2FP4Iftbbhbt1gBKqL6vPc9T%2FE&X-Amz-Signature=c2e58de6b476571c7f7418bb7b08f475dcaf0cbeacfc9bef06a02860daabee09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YHWPBKY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIDJEXF0gs84GM6pVfHq5aUXFdsxtFo49cba8zpNeCqTSAiAhmGlZNclC%2FIs%2Bkin7tSta3dZ1QuWlFybNSspnZ72Z2CqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4EEuru67RupYvb3PKtwDHwAJlIeZGrOHZrLV719iNcNQKt6suc6sgyg4keR6RPxFls%2FQaCi%2FHcRm4YweluCEOPBwIK1IjOWHLrL0rH1TdbETtCvdQQHwbSBIrnBIPMz3wx4w3NX4vXEBI8L3uWYzIVduPY3JO6DXJDalNUvjEY0DPUFlxxiLrqL1EOHQ2PkQ3JKuTluE8Tkinj5F2RsYKp06KYFbPcBa%2B6y0PbR009D4rBN99C0rOj0xOqKoAiEyluxPpITR5VB8NWu42ZBSm90PpBC8SYo%2FmOwRV4GfE87OTSc3Aw0iTEJ26Ho52%2Bbx1conb%2FG2NxQA9pTnIYfatKeY09%2FthxFNiTjPYSBb4GNBZxf%2FwJ2358%2B4UgwwDYfmYYFffnUo88z2P6M83PhhhgSCYWU3aEvwbSlaRgaTC%2BOa8Bkh3xUAx3VmEunqTzFhtfHjwoUCgzUui5HZawIunD8C%2BUlHjAZ8NiThvB2SS81OIEGZahA%2FnQ19pW%2FH7vjIhBBVcrLHtXi%2Fd%2Bpn7UbjAFtT1GSJbc2JvrL1M6qM1GOzQE4PL%2Bmgy5PKBXQqid8V%2FkyvLswr1hkVK1jI%2FcKkrkT6hbahRf7lnhC8SUZ2g6r4C1%2BddJtqcvl5aOEi3b%2FB1OlssH40y8ppbfYwusqxwwY6pgEtluly7lJOn28xRGXppUeJXuGdVXNsCg1oul48L7%2FGTD8xskBhIjWWiW5Lg4njk7eETIvEOn6j7BJimSgq4WhfRW70KwjbAP9WIDbRAIBNqIQQ6ULjE6yMoRhajB2vNCafFpYlMm66oaX%2BkolJx0B5bD0SfRiEzoN%2F2LxflgjhCWSjEzbbkrMkn89pIYPJscbYCtPwPOf4I25YhDsb%2BLj723Qdzp0t&X-Amz-Signature=8e4f780472ad3d93961e40d1bf8fad77dc1465f0024895fe1e2d45dc1588efee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
