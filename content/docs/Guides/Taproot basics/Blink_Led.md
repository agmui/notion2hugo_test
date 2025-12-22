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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPOODNE%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD3k0dRwkPjOL0SjI53E4W4r2nYSHilW%2BFUplXttATepQIhAKgAh2%2BVZR1qWHWjOozr8kk08dYypU0o5VfwwGr1ZnmNKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfVi%2FokCDpoXl4yS8q3AMi3Phcst6sUJGPfh42RzfSnTNkvHLDNBAFol0lKLgjeTu1d4tVpnlQv5p%2BM0Bqf8I9fh9Vl2nMw1o42Ww1DCbmF%2Bqp2B29S8bBp5yti7K1lmhPjD4OimssBbOVV2mFniByhUbP4uyf4o5lygSqtR5kAVLmV%2BkCfK4FnXjHOZi7rBu%2Fp0KMPi5Awghc%2Bfw9VwAuzoDJ3sIgQl9PWwjGAEjGVFSUU3dt5FbFLldl2%2FsSQuq0bkbD3vGNW0Zw2o056VVkSz20kNjCiA1HqoCMGgEBvZH3Z4k5Hlf5Eq41So73d8PO679rQ8nwqs53vC9hkMwob7iVKWVaCr9gJIdWhJH4B3vPtzPNmRHdlF7Hy5qdLdZXmTmH34JBQQOLkrinJ5tqge5JWLDLM75AbBfSM6qbwM3dhmTuvIKVuMfqCo7Xe7lt3SJgr2WlAcY13ozELYs73BA89PyJrRASvwyE%2BBGpv3wIvsp8quDaQGAaCirJSf6dW6aBsi53uJCobeYKS%2FoI84dnTz%2FhphEVc6p8qlWLlU7MA4hfwr4VcqUGiElj%2Fkhw9JnS4nov7p%2FSYZ2cXbx%2Bwbirxs7MP8CL8Jb7lxBUJwv4Hz6bt57ye3iAM9tS8dubA9%2BhOihgSAgKCjDQ%2BaHKBjqkAW%2F2ZCfRRndLf32NLPhnenVJ%2FQJtfLFD%2FXiqNjrkpWHoQ%2BR5XML573lj3VSRUq7VxP6nHoK%2B%2BgDhHF4OkjEjjY9MS019tqQMhziJNNL8Xnmk%2FkxTCziqtAfz7PeXH5y41%2FxI63w9t2rGKep2yF%2BNE1pHZDZnWFuD910VH0mTvSYAxwMNQ8xdBiTmqP3%2FP%2BAyCw7x35d6%2F1IexNmfcrSsh6ZRDNO1&X-Amz-Signature=b6372beefbc839391395aa9ea50c6a62d7751d521a4086543f4cb9ff1b09d995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSPNR5N%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC%2BG3XGk4lFW%2FE6FcvvFEa%2FBLeuVYfKR1foijJbJXH%2B3gIhAKaY5JYFRhe49t2kaVSQaZxC0%2F36vs6fHFwjKAz6BejLKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZpg%2FFz71NQ1zt8osq3AN69osWiBTisnUfO6cKZUSoGtn%2BybYQ%2B38JmPVwdaSVyHpA5zifexyJ1vKwpm0crdtCgLk0vRZvhhkUHblm4S3TfEpYFOT6UfUZgLfpAZsQsgsn4%2B9ASSCP7Bbt3oK1N%2FvjljHi2DuqqR8nn2%2B12sdBxawE%2FsinFoj%2FSpZPlErV5Ke6nuXmhHBxXDKCe4mcgbul2UeFFASFa7dg35GZ22ZiG%2FFK6c9voPufo8Wiovj%2B7c6BRLx%2FA1J4S3OvKsWY36IctujmdI4NmrYj9m6fRVn9Um6pstYJIzKZExfdDyk0tWptArHUBPTOuXeFe5812B6hHB5OJ9djA638124KzmsnkHTaeesWc9sVrPSLGuUa91JD5gfGHskgN16riB0ryXqEBq4otGip5y04QzJT8FVq34N%2BYOpfPkrMClPdHSKB1LJ3vk8IMYaaoW61j4n6wVDeSyk4lQZznUxUMdERyQU9qwGXcgCNRTUAmMEAYMWvF7hvzxlm2ZhYGOrB36Kk2mKkrqb17rj0jNL1sdHK5qZtZ1g5mlF%2BWaf5DDgDz9nLfjkB1H2fEe7qQ8FbTentaTd5in6s894RfHog41E%2FqIlliXZ%2FTh7VF%2FJy3yluKOEihe2F4%2B2shemHwruvrDDe%2BaHKBjqkARjPfCrAAzqFrfx38JvxALOikGm2EccvEjVY9T2X4wRGlOEtTD3xZfERvCDfKtHDYYdR2hcd995X5n2sBrX%2FIitEVXK%2FosnhYCcXLuf%2FPfK%2FWSX%2Bw26yDwlKDaFi8S0OUPXDZd4rpCqHsKbVSKVUUXE0b6RMtcf2GCmHJjD2QA6JbVywxlV54h2G3aAMFrCVIXxX7B1Dxox%2FR4S23mkHS8UbDx56&X-Amz-Signature=e59fbb3ad93fdaf2b09d166a4aee753ced761c04c8f24457a348dd86cd892505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
