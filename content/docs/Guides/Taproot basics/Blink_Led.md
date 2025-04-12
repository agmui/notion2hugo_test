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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC6VYZZB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDHGtGJw%2BPdMghUQF0uQm%2FYy10FLDs2c4Zmeyyw4OgsjgIgWTnB%2FvYUMTgGT35SZncE4%2BzodPG4yozyMdrUP%2BDlK%2FsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETlVa5gDi3S5aIN6yrcA%2FSEwTeEJDXLA%2FNvHW9WjEBpjjmpuW%2B%2B1TXs6km%2FkVDcre0r%2FlaqWPCZ5uMdrsDOXjyRDB%2F8jQCgrGaxXOl5wVZirPn5JN1qAQxGkuz54GEkzwmHTrqBrsh%2F8ZfGFtZimrkWKg9p5EOrZZJoQy0UkjKOgwJHeqrjQq2Mf%2F4YG9GvdZo3WryW%2FsgaLMQqZ%2Fv5VKO7bQRbFXDs%2BoSYa9xmSyopGUNVvn9xiUq8XC%2FkCc2VBsjD3GNx8ihs8i7%2Fq0U%2FvLWi2mrsjpUIz%2BrwUmHFeaWtRPOApgCW%2FmQH2XXlLp7zVaE1sEEesfiGCOKrYtA%2FL37HCG3WajQAG1hMHIEPd1u4%2FS5KfHVEPxiHZb3vr51sGD3Zys8ME2QNT6mmpOxplkQoRtsid%2F%2Br944gwOoDGnHIRLSBmlgfykDgNMEuA%2BnXihwJRaaGlX8gh0rr1Sld%2Bmz4g4WptXXIqtlzQAKg9LBRNyaXk7SwsAs2Bi%2B56pQeTefTcAq5h3Wm0WaFsR%2B1n%2BnkPLp7MWzARky9mXKK3AcSh1tZMUGWjedWy25K3VhZvieUenAVS8mZLTdFaXnw2yTJ3Q0oXn%2FToVhd%2BxwYLBamy2BFYjkDtFdNz7eiWtjlG7jJxxrkP4Ae21Y9MIa4578GOqUBJi8vtP9XkhdXj6zgPcAEur52sPLHH4L0r885MYkSWTfIAvXtoI%2FH%2FbRCUpYyYFbAq9UZiZz9HqpigykHmYGxnDprYLviRAePgBee8X1TyNt8rHLjrnZL8sL5agkKQw3eKf9FF%2FXVUa%2FDF%2FSBnWr4MFBJd%2BeabPBacAGM%2F9R4PvQHHBEWfIXRhnhgpeDEE%2BB9GHWkRiaXFPO4UwAHp0cgEXhCK6qq&X-Amz-Signature=cfc2c57ddbf8ae596da8b556a838f90d78b88f4acc5c10fd0687fa181ae27db9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FTZGXD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDloIQyvnKcdWKAWDH0iF4e76tGibtgnIHbRjFwkeVVJAIhAOYTxVdYcyZP%2F3uCo6RdG9Z5lFgkjDH22VmhFffT7wfoKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBCw9cs6umEjdb%2B3Yq3ANDe8tWWrMMDktPRo8Z6q0NxtYyTmu37yGS3ydGMQw5%2Ff8bmlr%2ByEccvYHw%2F3a2YF4ioLJ%2FqWu1TvDmYY4tgMbvkSzOL%2FpDN%2FLqjikQlM86hZZrJX2elY4KKyHZFVRA92kmrwdu%2BWrdhlFkIJXNDsxOHFx1FtopeM7%2BHXGRmCrWNOnvEi2BOPDePc2T3I27xuZrAHIvTwfe%2BLln94UBSrlm4UN0KujsFEhVBLiECBfONkzYYzt9i%2FaVA9c%2BdTLWDLmiEXpvnLEe6mV6ni752kQckG8PTgsKy00XzgMg%2Bz%2BvYIf5Ob7SWP%2BPVHoOlOKJNVuxsxppL0K50S3LBCM3n4eeMdCQ6RgRVFRFzFkdVtJmWfnrReMao%2FuWASIfn4iMnWlqCWI4Pp3Ps6hS%2FQXIqtx2jiwzN3H1AHNX1ZsBDifnTfkxEDFQUAMVzw2VrInIrsP7sDFr15NfQQ8wgnpr5oDYaEJzoMATrLOo1617rPMa%2FXqI0fDxdySLfTZY6bk0WosxCcyoFtLz0bvrgS0OANq4HThhS1fQakTvOhhLPHysYhFuFSiin3earuCvfebhfenANxrXke2HjSW36t7E5IjPSYIc8%2FJOb4CCONO3wdDyvj8e2Vf7xuOkynwIEzDUt%2Be%2FBjqkAd6Axx2mJS2R9iEQ1kmb3wPX3CzKLv%2BJA1li3WvuDVKMXqZvkOGmdhuXt90o3XNuSeeh1O60aYX445RqIGCCoMVmuPzVk8YDeHjeSh8KGk%2BIqNjYBfRUO9OKxlHc9RV%2FJPsUkWf3m76b8GBKP%2BDk1Kluq5XeN3xkk97IfbNMalNIIUP3iWhQzkOiQ6cTwqZoG8TpFyYMz1IPBPHAO6Wyn0GaHoo9&X-Amz-Signature=60f347185721cde7894b89c758eef910ed66df8f9aac5e44042460f071d9b271&X-Amz-SignedHeaders=host&x-id=GetObject)

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
