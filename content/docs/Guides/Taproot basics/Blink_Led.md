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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2SK7SND%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHbYL3q7%2FrReCJ8jmCJ3CWSKO2B9v6HIXMuAjVHVxLNiAiEAtJRlUl6ob8yW%2FKV53f6rtxQdBTrkoUvOW4EMW%2BePDCUq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDAboAzXDtzzrP6bISrcAz46ln97F%2Bo2ctIrNzDbgVxMIVgjfM6wftXvtOBg0x2leDMynz2XmgoAkj0fCR2%2BFodPRm%2BDMmrJmVB70%2FWtedkRdeU%2F6pQDvM20rs79yBxB20TF656qT%2FvN02nz2NI2AYKhJWuWakx5bvrwECIFSr8BTJxWG4Nhm9%2BUNICijoNjipPuERzSa9R%2FY63c984LGWHUP84jXmWMvEnHxHKJt315OF4WcngKYfoFYv1mdbDDAahi1Vaty6EGmTifZ4sW%2FZPbMzxl3GnHQBCgVtKyL6j2kxUSXIYxLmkLOPZiCtDrjHBXv5t8Y7R62iWJKmZrbNjol14iPXANftRpOA%2BVNQ122txoalOtWwz2Zm0fYu1qzsvCl6GA8VBF0hc2qujMwqoHsEhxVuHfLl%2FFRu6YiVG6CFQuJyTq%2FrbZkK4J8upQb7jC%2B7ud5ADCr40Njg6w5x5Wrx9sFxXRptcDq7RrhCr5AJcCEK%2F%2FlxTbp7VIz%2BjL%2FKkHn8CnSGToXqd7g1jaPlQw3WIwzfWSb7%2Fgm6RgP7A%2F4sw1x6y83m2%2B3dSvCpDFjyfkkzPs3It0K2t9nnx%2B%2BWrZReHgnvfK8wAhWmoLBenrROFPl9jouuCd6BhmYwUmTQ%2BzN0vQ9l2rIRPQMP%2FW5b4GOqUBG1yZE2ldlgvKOi7mL0XAnGxKAGKa1k9JJ9623i6BEdj9cMX8%2BGpE7bsN1tu7EcZBjrubbonruIyzdCjAY9X4OJKNxZ1sMDq9xNhyZ%2Foiaqit5DafgVwW%2BrR%2BXUnKrnJ%2BRBdGqzOsX4iBdFQo5KBQ1Bi12fcVkIOB26cNgHVljUMoe2lRNti4Hj5OkFP2imaSTMNfHMetdTWgnEPEWgYFKbvpmd7N&X-Amz-Signature=80f359b8b015671cee56916ba7ec925a83a7f7ba148a59321d0a5b6ea2b048a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXU3RM7E%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDQI71tvsPdUeJI8yS%2BJ2xIWBxiCkJ6lv5ASq8uLh2pLAiEA92bSIn8puKGXCVi2qIk9S%2BmOmqcC8PsWCnTS2dQOsCAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBQ8uHZb3Si17Csf9SrcA5d9Ydd%2FBSkymVQX8x8h0MSYj4yMcXmLLOo6AAl5%2FbWBML6dZvSMZx4hJwS14iy%2FX8Gp6x0o5l9LMUTGtohAMSBQRcRt%2FjEBN7P0cmDJ8Ar3ZR4zYSbCS1uG9ezbiJCnkh7MKoJ%2FCGrhOh9EdjaGVyiAu%2BLPUSaGlCPP%2Fc9g0GZ9W6VDlijWB%2FzFFHFAaLCy5J%2FZn2AVu1xH07QsaYfDkIxQJZeyBL5KFaP%2FJCEeGVumlTReIp8oanx3EQnjquWm9E%2F7hNzq6sl9mjEPOgengoY9ySSHuyxX7Q31WHr3OhqSf37kJp%2FApjr9qdcqMRZk8FlVIDQdQ26Bk21k%2BJ5pMKHE0fgDK1HIJoa%2F2a7q%2BPWsIXCe76pV0rakgSnnJ%2Fbk2cOxCKxhC%2BM%2BJ12j5NJrYLdZ0eldFDGASf%2BiqlSYOlZbFRxpbA9w1ioQ5gUK1Lj%2BDuJk7EEcbqOPb5DXlBZpI6vSLJJrCGCFnmCo0d9PyMxo717ZAu2DgW6eA6TaxpH5FRmPep3%2FxzJ%2FCCMQGH9bTNTUqjhbmZ7finv%2FqiqeJ7FHXC%2FTTDkan%2Fg2%2Fu%2FLeYFWR86kLPBhSRr42UYq%2BMBiajldfiaqW2rXfw7q2Gei6aqrZfg0BoHt5sMhEr%2F2MNvV5b4GOqUBQGCpETgfyGC0NlnHPDjoTMgem0a0ta7GSa9%2BOffoz6qt9zReE770iq9ANzgvjYzAfIyg6TjjtcipAHVuQjDlCbhj1YQuVoihy64Yhedv0sd4inmmcmPxXNCQ6sgKiBjlcxixPN3X46xHzoLCXRkVSTcFuTxY090o3TDi5uyMDr47A77amkVOkIRQ0LxrEGD8QB%2Fx6OqAnLBR44UX2QsPhLkKuNBO&X-Amz-Signature=b3efeaaf829f54b56d7ef885f7e3417abc0ed02ed025e425456e142967a8c1da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
