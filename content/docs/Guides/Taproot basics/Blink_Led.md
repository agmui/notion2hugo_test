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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666733N5OO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBFUU0nPdKdkNH4CvkekISWz5rt5n61B3a7f00WRqAfFAiEAhfHzB1X%2BalgyFmwAqp%2FMeUC8cEWTW8KLm8H7Q0OXaxwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3fG%2BQRtAC9das%2FuyrcA6rMfnUJR44odLNvy8sDRwWN8dGB3dxAkCZwul8QlAPjriiecZtaMtX7SP0zalZUUK%2FbAw%2BBQmfqEgyNpChRG26R3WvCvXRSImZ%2FVkl%2BCf4IWHVHsgADkSTvZpD3k5qrhOAljs7YQU1xo4q5V6kUbKABKsPooNYn6u5hsLS%2BV3REHrewkzhlifAyee%2Bqn3Vrtn6B5bZh5nq6nn4y2yxnh%2BIWHH6qcBDfCudVr11fJ5rQL4hYQgGWzWVSN0HlZarRgeppsb5hyyggMnqtUGQkv7xZVYE%2BA794RpUEdfeMlNbSRs6wsaIE%2Fxwm39RMzu8Ei8ntFU7eJ0lmIfBh%2Fiuz15WmdartEPDFgW%2Fs40GHy6y0PPqM3gOPbsls04h7wYqRmXy6PjrweASxR85u0gcQfuQB4%2BHM6h0%2Bl7mNUFo5UzVXo3U18jBTiP9GStCHEHS%2FvbI5jd2%2Bt0aYYurRmoKCFtREglwn3L8RzSfoFf%2FA7kvLroXmh2%2FbUuu235IFva8413tSxpIR00VEgMv0wrCUpPSrQWkrXy%2BRzb5Rvw6LRaM2O5taaoV425izSI0%2BYRQeZkzHXH8ETC4%2Bh7ksgWT5HRm2Za4MtyxhSb%2FnsgeV4H6TZrVMKXtdvcm0PvlsMMX%2F38IGOqUBxXCfRokIdhSIKyG9b5j%2BQUwhps7rhKrprHv%2BZ2edKeKHe0LWP4PzGPC4MPJUGwmsDEwv5gBJYtYlXmX%2F5gvVSg9i%2BgEL%2FccplNxSK3YabygqEXWAklVplN4jVds3Eh48z8DCWWhM5THJSMRR%2F89h3OebnSO95o5d97XADht7CKDBie%2BMkv99UB0hCD%2BxU3HlZsILmOBTxWvGqBs4XxfrtAV2jjWm&X-Amz-Signature=fcb768353b2ffb2e94dd87006a184162aa93f8ae0fca6243d22fe7fb871e621c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVATRNAK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQC%2BnbaumZDhg4%2B3KP9BFHL6jNNJ7Csj1%2BpeBl4DssJ5ggIhAJU3t2sas4Q81H1%2BOjzNr9I7eMsEzDDaIV%2FLG7Mg4p5EKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BuW8LhQNah86w68sq3APHm2HzXZzwOfm0RfP1s9JtGLFzZHEYMO36E5tj2wImZVxBEyjVRPLOkGolI6nhMoLm1plYO3KPQyA%2FhtOeqWYUjZun6lMogJqvgq%2B5C7%2BxFQrY3x6A4ntIr1YTyN7pnj5zCHRNhZvu3%2FUjNEKCQD837OU2oigPh4%2Fvdz5Ybhf%2F28W3KLgk9%2BcA0jiWwgP%2B6l9e7jBdaWNuRKcoTO4NsdV0kcYLnvO2ctCFxI8AhF5dPVJAhUH4kb5evVbz1exQKHmNRTKPwPBFQDzt3cCV7Y5LGcCEfFNgpOHyv0l7V%2BQYXvGcaiR6F156gYfBGGlwlx8sGIf37aWc2AcSo9IPXV9tKSd14KV9g36nV4BTFNcqt1BFpSZ4%2FIZ4yaV%2BGqLzweXcwx1siovsKinTNKcSwcKsqJLtSHPH%2FO1UbjiKKRUQuEdXb4SAu3kiCBSCjjB%2B3AdOQsoPGRtvI4PRclhNwGQBIf1frWnEcBb%2FYA1Pjl1kY3CNOUpeKZlB7Ks%2FKuljr2TqTz9VNi3kIs1Z53u7lCDn232pbJk%2FhPCSH1lyH%2FA9iCF0nGGwj5yQOgWgUaqXqHYuJPrQu9w%2BVTNBj2QFQMl9iVRBAPSZ4%2BXK6TzEqmI%2FD0wb8YOKKKwI%2FTo0bTCez9%2FCBjqkAadCtSO4QDGNjODzikMW%2BcNx9l0fMhcS6BKIS%2FBXYz53Mzz9zXfdcGKp8U2Os7gT6waKmBVAubEJyCqYj9wjGEHjajv2vURPdW0s1MxefS3C0YIz2R8Ps4Flp5YppKMzj58R7knHdR4pEyN0dSAuCkqqajs%2FjnM14vg2ksaQ0U2Tw42optp1NwXLuSz1DYOU90RY1x944DBBc0bJUl3xc7bYdhou&X-Amz-Signature=2ffe082a0c5bb338c376df95f09b475520b2787f5718cf3dcb0b35406e31adc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
