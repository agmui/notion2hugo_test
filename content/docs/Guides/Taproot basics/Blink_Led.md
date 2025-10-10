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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPOW52R%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDtuIm5qbm3SCHw%2FnPJ0WuGT2qQGHEltgxnWjyX7H8ZvwIhAOARpqSVB3Bqnczxgcpf29lmspAgB2ln9wt42RNk5vRBKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeUK3LN%2Flnv7CC8k8q3AN83pVD3MhRdjxTWThETiqow10zlxJ90UGjganJxnRZdXDGtbr7TJqI2TSs7MY5Q6f1bCPSlMS8rC%2B9e7o7aM1hv81mye3NhhTAIbf%2FBvFe5CfX%2FGNmlKWQyZ7D915IpLqQf2zbzn3sZPmI%2BTAswowcyd8wjvlcIuZx0fyLIUp5ZYmYMiPUA0mcaQJBvlJcAC5WmsYc4inwHNPjY5KYQBiXR1GDMXRFDXWJGEtRFm%2BR5x4xT8Qw3ATiTqQI4xUrxPINMCi7j5p6Fo31SleWMqI4AFxeqmyyabGB7YeserbbkhFpj8UKoo49vNmwjoHLlkrz6Gi6d1DpkAffCR8uk3zwcOp46gWDG%2FVM%2BGTgRbtfrC%2Bl2M3t09Jea0ndvBagAEKbx8UvliTIrS3s2K2aSpSc9cFHtIlxHdXtaRHyjbvdIrd0LgAoUi4bg%2FfL1T4y8%2F9b79L3U041Cz3ScZ5lXm5NpyPc%2FlCgehhAzkkNfLKp%2FzT4uK5rW57VutpSJr2TcsglMaDOoBvL3W8fGqtimKYQ78CPkfNzO7e75HhfRPcJrjNDR3pTvtMVpBx3A1B27uxvWRkeQ26ylSPzdGQ9jXhCYqihHDOH%2FJlJFA2YnwhLeManmCOO5z52cvjR%2FzCRqaHHBjqkAW%2FDa9OSbJiJHxilp0M9dw3TRiyZRMKfLzsNsgMRJMyZ2eliBpaa%2BTjfGR%2Bn7yRCHDm7AUwuJzEzf9pRiQtW9Wje2WoxWVVqHTCm%2Fg1TYjM6mT5xCtQfHMZXmv7fyUzlI8gC5simXbf2CTUiFXe0ugmCamOGaVZIHeuxEyiGcmjy1fpEaKEXmG7saBWsV3d16v3abDAeGnRALWJ4mLG5q10pM995&X-Amz-Signature=95afacd9e835fc4c79627da14d14c873e9c39fa486d594d1760e5576c7458cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWVI7W6%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDWOjua%2BepxEoNv6qeY7%2BLArUqKlHiOGwRRjrKkelJ6AAiAZi0zQJTUoswA3Qs6fSjrWAJ9rUFZ91VWNeRAhFnMdUSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FXGD548D93lRWJUXKtwDiOWDPISrONgrNfI05tQZqv8pqeb1Auy9EkWj64In5HUvUGv4eugPrx6rbaIrIO9TIdvoxGThDBZjDOyIgjhUYcNzpXZPDwmzt8Mu4lj%2F%2BJyU8uu2vi7nnUFJXp4gnVNct3zmWSOXZiwHTiO84XMBBPbBlyhnYRLmMdEryttv4WdcGBhx2rY%2Bdrw%2FtkyvIeHGilU7s%2FUeIG91BrzqCR%2F0G9qikWksBaHfaimaocyUMjqIum2At0s16HQ52XN%2FoDsmEKGD%2BSM7qBVv68bN1EkLOr3nft4V4ZWJpANI3DxIwmvVRMaVh8Wje5Y2c62%2FeRiT%2Baf1gTtdq4%2FU2JhOwBUIfoj2I40qswHxtDAW1sNV1bstt%2BMWmRZbJzXXn%2F2ViGUyMSy4s3PFqg%2F2KXvZ1%2F7gGzxqzf%2B3MDJooOxbaVsm7qpdwc11QhOKPAK%2FNSKFEb%2FenFE2JR0awr0zI%2FlKvb3MatwKvCCGNDQxCNplmxqc67UQWQa4LR%2FoABIzVUVCNN64HU0jxz0aEjql%2FeXNEZmf2t8ZSyEijS4qktWwYGlJeo19lk10oHxNHvcPUtvOeRHtidm%2FuzUoLr2J44sSbswve5%2BVKejZKh6hNo5jAGfC6cvDAiu5%2FVcIwXZOItowzKihxwY6pgGnhkmtj1svBqyzETxe4APVDAlcXlIux6nNPba3ULPKs0z9tfh1q37h8%2B9aALfljUwy8mnTPOC4NNkEHeVxXVj0WgTDLvJvWGypZkbpDtUfy17sv5WagTVsNeswq5GhZzyKZLCVeWPwVHLOp1lilHR0eMjMyeg%2FQ6ZFiBY6Fc3fgntKJh40uvrMAH4XFPNHCiHhX0l3JiGCd5uoZ9l4csK8YSBiWHvq&X-Amz-Signature=768f5617f4b95b88555c084163cf9ce8bcad27e20e4ddb56bc05b35a12bd182a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
