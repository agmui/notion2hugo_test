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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642TQ6CR5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDh3zD2EefpxyWtxoOCrbRwcr%2BWuNTTj0ERHawuGBxt3wIgJeqmMZxUVLBFSWmbrSc8%2BEjaNFqx5TQZVc62sq4LHyEq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDLmvZ%2BZqXtkymdiL0ircA84nZ92bheOKZumHJTx0elELnpbFDojXxKuekf3xOBKLsNnerpjys9Q1Sfqh6J9Vl8BgNUv55y9g973uTug0Utx%2F8jFu7o%2F9YMypDSsHWSBPSH0hDvvaeHEa4JFv35vEfzQp%2BQs1Dx%2BcN408iT%2BcZhqcPozaR0GlYLYC71jfJM9C7xs6FIv%2BWjmWY3gM%2FSuinbsCEcLWXcQh4FOGrKq16nD7n0am3OICAvE3TrUllTU%2BVhDTQfBMH7v2Sr0tGXrI6qsndI2z%2FTWveC6t%2BzxJvSeCr3Y4WLlnF%2BkoQbQKFeqkTt8i9C444QrF4OynJ2uH1N%2F%2FGiy%2BdYBVJDmk%2BpPAI3z1%2FXa6JAGGFqH%2FqVBtT9WLnjDNRfc1%2B%2Fg%2Bjy9paUZRO5g60chcF0eBEsgbgRfHyyx1DpdDutKa%2B7F09fp3D5QNx%2B8E%2B5fdn1O67SfW04Q7YLfRcgOom7dBRXP%2FaHqqw2Eju4zSB%2BAwMnPD%2Fhwn3A6h1u0ilP%2BJVHabzutOpki1o97osIVXaQZwyL2oZDANvPhz9o7tQYls%2FhD3XzsTvr8TD7d49BK15KLngDeNuvM%2FfrWGVtK3DyUg0Yh3CwYFtHClJGLB5TJdhHMKjGORrzDbqU9YAygogKc6JZTQMLn3%2Fr0GOqUBOhGD0AEJyklyZ%2B63ZKR%2Fc4N1nbAemGDwiiHm%2B7xVqE3wC7udy9DQeGXPV18QeBc3U4mfka5O3MpMh68YgMH4rb%2B9RCCb4rDwuU8kQqOZz65QiSxxMF5%2Bqj2YAOTz4NOXuLTRGQdktY%2FmpYIhZu6yR5MN6EODn1niUZauT%2FgnB%2FiDyqVqVisN7VK26Jyd5frZlDUga3AUrrAEX7UqYR8HLsh4b%2FtA&X-Amz-Signature=aa91752e878790f0d9a04800b24c4d9bb710358c9f29de77999fc20b325ad8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEWEXREM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFFHxKVbIvETjtNRjdwCknPpY%2FZeTrAGXBSIN4lt%2FxucAiEAx2yzB%2BRLnwHsW%2FWAM6B8WBEYPI8YamK13DiFBHwRvsEq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEI4ScMa0pLvTDsw9ircA1g%2F6IypOv7%2FYandL3E4ts1aW8ea5ZSQ3OTLqDUVHC5sknj%2BLk5Sl2q0WDZNHR6qRSKIrhJrCJnfcfqoM51d2a0aF2zmsPiRgM6vK5U9aGK%2BLdihaWF%2Bi%2BxtbUaTCVocUs0JEwi3LyTxNosTvBy8t7uK%2B9VGgY%2F%2B5nqOFJV8b7Eq%2FlurEN9q1Mj402HFpwC5WRn%2Ft0equlJCH6%2BhfPdSvvb3Nqvy0DqtEMB6AvoiEZEu8lu20ygL1xMfplOW%2BkSZFij%2BHOegKMOIkOaJ%2FG9yjpJCfEAD1OACN8JhM8X66xSAmo8HAPGlfsdlLTj5U03ZO%2BuL0vjsfi9P1TMeWvSOoiWfI137L4EOB9V1RmA0sQuKgmfb83n2K6emMhVGJ4olARcuRXU9YSHWEVHy5vvLH3T1MMLnYGQjqrCkKUIV65XV0lDzCysyQ9RTTAG7aHCQw8w3cdw5dptX0p12fgz%2B2drD%2BxcKiQwpZFV2P8QqUw4MwwREhodLk6cTNvQOgxiozztHzYdkTLIzAhk4RGBhol%2BJXyUEMb5s2uALd2Aw%2B2RlDeZi90xo0M3n231FqnGz77q0KG3a2j3X9qD8krFP0B4hK6qLFX7OPOthEuW24V8Vlzlxk%2B7FCky9yGogMJf2%2Fr0GOqUBuTkeMWEW12I1O0zHLToiOpDpKCy6T0L5A9ByFzxMjqtniJr6wvNVNoSYYszGRK0GnBwS1g7z78jth52dPAkW41ScK6oHgYhbXhnOHqDwV50%2BzlfeJrNWhFPzdE0byscjLa4XRIoXqlxcoZp7yNDv%2F8SQoypUzQ5Ul8rcDWOGI8CPmf1MJM6UyqByUGP3NUSSpnEVJOqYhEUbBCO2Jm%2FHOdllj0Nq&X-Amz-Signature=60acb82addc00fd3f83a340a76d31f1b91e9e9bd6a290542b5c980fee8eafce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
