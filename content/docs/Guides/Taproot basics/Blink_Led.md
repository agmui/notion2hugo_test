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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCQRUHOV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD%2FhcwGRWfsNZ7%2FAJxkIWJM17a1frOx5ADLTvqTyXYtLAIhAMEGhYq53VXAwVB1uu57GJnd3Bwa8iWeG8TtWPLFEMqjKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsP0ybpXymuxfMR8sq3AOTsrKjB%2BHXq%2BiKHLdNYY0rrqeC7yxy%2Fo6Ues4A%2BLy6h8pdqxHfEl2thGNS7%2FA%2BTvzbDYtCUVcPK4QWt2nEQjBR6IhxEElRMEoqEAP%2B%2BS%2BFM8skJUmspAxusi8vhjQWsTzLeoVh3vFxYvwHss%2FmkC1EJ4mS6HmoQMWNy18unYTflptdoFBTAor6YcLvDfQ7%2BYObzwsVfHWwXQbIR9WL40%2F3ucKjzFnAYY4wIBkqBKQpBmTWcvn1uXY3ZhfwxUSnLSB%2FRAgvL3csZm366fad3ZYnMwvRxkeZsilyhALSJoiO3aJW5go%2BveLy0ZJ5yWNSayJ%2BJoF9XUvSyZWmIfEYPSGcFd4BWp8pc3Fe1RO6y9uSISDWEp8nOkhV6kskHfhi9OL43zhKuPtrBQqTs80fbF%2Bsfx7dlfBOIBFX8RKq0SOMSXJRtE6AYFIFBTAJ9x%2BicQyqrvplVf9zhjH6x7Xfo%2F4sfqWhnjuqdBr%2BMyMZydwWEKEFcKsUhkc2HbuhGTGj4Nnm%2B6hnQ%2Bk6vFA4tQPt%2BfeyC6S1GQ7oe3cmyif6RX1KWTz4iz6o4nSk8uTG5xTVUgvT%2FX4ER4JFAD5sdsVJTfGIXKMm3ekTb3hbvjJdObOUKc8oQ5YF%2BRFBVDTddjCLsL%2B%2BBjqkAUddGSWN5fn7qMuVBBthWlgaJiGjpYjiucHyJjgnmLY44H3dUG23w6GtHPbIUpcT4BnB03Bma5dyKE0T3KpOb2wxsJFX8igrLWC%2BsZm67YXo5vsHAGtfqoMn2WK%2BSN2ZAAVrsIfo4UKFt6R3vt03Mk3h2Ed%2BSiGNSDFwg0zy54EGITLpMp3ykMFBIPq0TlnfiymUg59oHLAkWjTkhSFcNbHqPYBU&X-Amz-Signature=c1599d5937bedfae5f1d3b389c91edba0702ef6f420e791fc41c989c1acc439a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCCPNIR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIGD9i48A7AuaOoEzS%2BR0Af1jcftazPM6g88vt8Xo%2BX6tAiEApdIjx59KipeVh9v7XGaZMer6OzQT37kvaOrB51v82YsqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2FVh%2BpJyP0pu5Gi0yrcA%2FIBh%2Bpt2Y%2BqZb7kqdw64%2BgxfoEnS8gsBMMVCZ0Q2cCMVIqr2w4Pj7aR1E9W0hiD5SJvkiWQcI6jsQCMOUU2ied1Mg1xHelRUQCMwcVGpSWSwxk9NOlyYZJZQzmWx3UaeO566aB65AVg8U0YatJ6fiE4mVMRHF5Sw9FmN2oJxr0NLVNGExZPWpTj7DFxjhXoiCheXFKCpTxafDlPqLY392E1TQc%2FGlMPdMRQUXrnv4QDCnvCaCETopwSAJeRs0yDpar%2Fb6Y2y4TJqMncAzAPwZWBEaUtLIbsXhCaFWs%2B31r4t7qnz3x%2BaawSVTuqD7kauorqItwJTjcdEo213Q%2BTGxRqv8uKMaOAWQddMp7mkPPFH8zi%2BD9cgwADjNwv9k1oT5NNb%2FHdcc702vpR5o56Gu4f%2BLfQk8b1Pe4xJaWnZBKZnjZ52on1My9%2BWppNoXLlFmOHJQsjPcxJPMe4fCxx0I2c8lbuKKwUKjgyRgPrYsKFC2Yr4E0sK%2BgC2l0AIFMk%2FQBHzs267s0m3PawgdZrah7Ks6D9p%2F0pOFueUwQ1UMjUEv%2F%2F8PsPJbRxMnEIFYZWesxqQPgRtZ4xkl6XWB44TUDx7XlUBPSU%2FjfTqtRuCOFwqAVZihzPko4KkVDtMIuwv74GOqUBtNNC2KfsyhYwL%2F2mjzWPVIxbAsJgPQYIa9fuM7xwXAA9EXSbdr2CQGbceIq%2B1MkQClrP3zfWkUjfaIFSg9PzckIaKrcICPC3AtPs3N2oGKupclHsMWd6XchYJkhSiZBUvc%2Bj1yKYjNUuN53Vj9xHNXCEOQ6wBoNlun4%2BKiS%2BL0Rne9aDZtO5f2%2FXvwsaDKFS0Q2mUkc48sJ0We0nJEUsTpGTyMPd&X-Amz-Signature=a97a8682d2f1e593fee23e8d3e00f766d3f81b2f8d12bd7f3794d9d199258048&X-Amz-SignedHeaders=host&x-id=GetObject)

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
