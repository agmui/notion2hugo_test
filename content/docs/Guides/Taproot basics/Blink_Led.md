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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDI3MB6W%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD7Rnq33fdChqZTa%2F1C9PaKyzpW0UKLWmz%2FuyqwsNzdBgIhAK2Vurd9gmipfdFDJkd7eDX34%2BYBpCdUs4DHwElBU9oIKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk8MZbERj8iXoyOOcq3ANmSJjd15wqJWpn5OIlW6zmD6krLKVq8fsuZ%2FABYF1Zo%2FrFeULyhVid3znXA5s05ytTI%2B96HTmYiV%2F4ZsYzohodFMtlf8CDqXKT%2FCdbqsEZ3RyAzNA8j%2BKcOE2Ql3F%2F25z1Oprb80h3BG6AtIjci73d1tI6kF2umUF0hxUr4cB0abJ9Y3RKrkDewKI5krs2doEwmzMsXzdA8GztaaHdU2inPFRFlqRvx9TofrxZDcgVC5kbLAksADsmzl34pjsCHwZIx%2BSNN1KOQi3bkfT5wxVHay227yUboKcdASKdoNHS%2B%2BJTR3dTD7slnGxcMLVGnNStJ3x6stfKuyEPZh3n6ynYE76KcUrpstg7NXtEMzB5H90Y11AyaWhuhm6R1kvtuXZsrJXCMsgT8PGhqrwgssF2%2B5DJq%2F6yRs3d26Vj%2F5iMvekfWZB8ZhAsu8yHFI9EsMy44sN0uVNq19sUPo7lvtsu4wRn8A%2F%2Bb7fBVIOHTar3JMaHg3PJpsaPHrOsKY5Iexxe86wCPXlcmygGOxRpNJo8ulFQw5Vkp17T%2BV9xo2RHlGrIRBPOBW%2BU3ak2HdPweeiM8kxs4R8r0jhUd7ENLW3ztUNR%2BxrOaSuKzBvzDgYvLz8xX%2B5z66Fz%2Fhg5OTCS6bW%2FBjqkAUxdkh98YOqYD7KeNBK0cg1dXCpRZT%2BXNZeveqKQ347E1eQp%2F3MUaaYhfuZ4buuyx%2BTtRoVV3VaLoS1kezHPoDSZcidWua6QvVwhlDVgkkXS6Mu%2B02ChTzwRqdrsu5UrOew71HLNRDPtJc6Z2X4ZTzt7%2F4pNXamASRChl17hpec2mEb6EETF95u9kBjSpQSlsJLKX%2B6lHf7TS7uuQSdIjxc%2BH2sr&X-Amz-Signature=bcec055302455b33eba8346426eeef11755c2fbda1bdb7dc9214b644efb63345&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TID6TXEI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGKf4K6EMuJnvmNjeAAw7RE3A0y9qheSO2RrqB93VaM1AiBOttdALos8Yo9YLhmwX6nK1M84qu6SNkE09fK%2FADIe4iqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoi6fPe1juasDy5pXKtwDEUcnKEo0NEkpwhyz61%2FWiCPHSwy22VnbTiMqDOgQuSrRWKYpUEL3DGt776SxkIXbqG4A4cjGjOK6V2TDPLmIOQ5CSlGoAXZlSozRar7n5BXh00e7ZGozR3oluJD5kOtAR4ntEKvizDfWFBmDFoydruRzodBAh173ZiA5r5c1r8SbT62nmK9SUVygD0U25KKEDWQb11g2q5DogT6PxB7SB1UFmHH9mbZfdo6O1jKQmlDs4xTbwEdzxti%2FGfiGyFJCWCcPmbabRPExmcaR%2BpI8oFRAPIejXeO%2FdLm9JmKpN9CvCfBkRHrWUYEkxt6hFDMpynQru3qjZXE1PTl8utRyxAJDUJFG6W1aD9qpjrchPHbXKCp105UwN9HY%2B928HwvEG3qkZl8iAa2G5GOlhUSydZxdfJjFzn3z1741hdckc1zJZQxbIncSfopsuORNN5WbBcWIbVMUDFmPOqLnIvJ4jIQI1%2BP5m6Hv0HdVCGxyZTC25UF3THpw%2FpmntyJKGQJXAYHD6URDaZJCVFJ7v4n9rI6m6wBvSCgX0Tx145CJJuqs%2Fg%2B4YKz6n2OKJ9%2BB5hCRqHCj%2FFiDhXnqvNYK5njNfixTf5ihuYa69zXW%2BVseu7ehkA3kFpj%2BVSn%2F%2BYgwoem1vwY6pgHgvWX8I3xmYXYCmSjTVft0GxQm4qn1ZfjorHtaNSwCMtmwIj6WEskOeYTH5eq1zypY5QSRyyhEP4iT5pjJupzly4TdtY13DLGiajznqB1CswcOt14%2FwI4iVbyCGydHWspdNikKM5G%2FFVb9yC%2Fw4h3Oj4CcbLfA35Gn3jBeHQSco3u8iIbBVFfG9ed%2B4wD54nRCSWsarQCkukPmEgeBSKr9%2BP7MuEq2&X-Amz-Signature=908f4c4d7fc42c10dbbaf3172e545d9de1dd287a033e915c076a46da7c96a828&X-Amz-SignedHeaders=host&x-id=GetObject)

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
