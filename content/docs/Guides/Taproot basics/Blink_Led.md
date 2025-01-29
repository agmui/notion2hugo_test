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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJL2IEJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvyq7beCZ46MGgqet0fw9XQS6OshR86PoOt961elrSiAiEAqKEqk0gg%2FABXZYmtu9vBbG%2BxqX43kOOq%2ByAFZYLojlkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7vmpAx%2Bu9AvV14fyrcAz01TOzZyhcrUY7OzPUELeNlg6t6%2BAlJntJ2rBdPGK%2F%2Foe6ce3M3y7zg1lAfMArEvf5jvHzbhorKWdjU2avjfGv81EaBT8ql%2FEp75cRiDJactJG8w9ptSrLF5ai9zeeS%2BGHwrWlGP6GKJNurXMaRrYus3Fo2ZpgraOMMsBZZTAhlcAtj3s%2BMaUyzRsoqYVjbz08ndrUo6IMyXiCoRZF3MSX8wRJopb82EENsJG4IpGGU%2BhWvU%2BJJx%2FC81CPj7wLxckj6imXs4Hr0f7sYUWvPCYVbUOALjOaeu4hx1Pwf60I5F6EeGWE%2F1fUHWXlPXyP%2FlyHt2fWPdI%2FRQ6sUD%2FQAqpdGN2otqkgIrGFcg2c5pwrkYdsMBGSaWt4WuNOq2f%2FCpnvKln7iwX%2BjrA6ESU89Jzis4MWgC01YedfET9axJU4GoFwNqx04g%2FNNgf%2FWbWL8QN1mYE9UnNufnYOfbxkZHsM%2FT6a9iIksmdBYHvggk%2BwaR4t%2F6h%2FFK34iy2qYlTTThgYz%2BMK9bnh6WHo14TVwK0YBRzTX1rHcem0eHuiCidthU7SvRgHL0OZK6gws%2B%2FB37I4dHPkPEL7x83psynQ5j03cbH%2FboHYqM%2BHvAzzZDlpfACRR5HbO6w%2FYReW8MI326bwGOqUBvmQFv%2FANSBWBZdddlB6lResPNFH%2Fotak3mKFbS5aUD9NJFtIci927DkrNX7W9%2ByGEXTpCPF8qRF922Q8dnBHH1ndkUQ2drKJvLn46tfETQWq%2FB3oE8oLEYCXUSlQrS%2FL9Wx7295qLpAyPBV7F5c89PUsmbaJAVZTgu1f9NZKVtW%2FXxfaNnstj3uVrDDIGSktxJ2yxtnMDu%2F%2B5wk7u0qrSNYym%2BVd&X-Amz-Signature=2159d89ce4c9cbcd413a36e9d3bb925b5066a4cce7d348a69b048ce04c649186&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25FF7QE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDONqwilBLn3A5lPGowLrdQME%2Fiornm4l9OzTM4rwIm1AIhALkbzUuLHcIZgbS31cU1iqOwxDcLoz%2BrcHg6uUBJ4OCaKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLg6BV8N1uWHpke8Mq3APrHYYDkEMaaGy8dIUJ%2BHNPh9zhH%2BBNL4dzB7OHauMYt1mgR0iBrXR9IXdZUwvPfXnQxFu0iFK2shkDQfVZGlPKgujFrxsYLV73N64E6YgVXedIFcRSpWzZREUDL1fUmx4ISbtBSGVVtQR%2FqMvP0gEIp%2F23Qpq83SsmiK8xmr07tHLRH4byqlBzm4jQz8y%2FPO2efx1YYiEHQvDBaAMXq%2FNpxLORoaWxSS7pz6prZhiZssU4lCq6PCSRgrltk0xpFF8jzw8t3NP5EbR1GrOLIttEGH81r%2FuFZKdPrMu9Soe7AOPU3oJn1soPgJIwaQCQDgRodYvfvS9gOUPaYfkr5%2F6cHMe3sOoIHjVSjh%2BASMB3XDFYyEJIIGZPyWkJYom690DYYcSJ0Ngp9bSR7Ch3ZqhijiryLcWddhcH6fhP6jSSsUKeHFftv6No3NM2JoM5XmD7au%2BBGhLo4AIRuN%2FGffvMvLGgaKsrvGXQ6YqcVm5Lk0LI1sB6gPPWYZvZkNxSW5y2Jn5f2DpcfEmG88YQ%2FPfPUNFUYI4RK7qlP6rQe2CmuoCiHA1tGj7JEr6ZMPWPoLYmTsp9E4fiO4LvHdZVOEq8eGq61h5UjwVnLXkvp60pUfjeffZ0I5jNBKSolTCA9um8BjqkAXtoJfEWjEz3Oo04f2hRNcOa36tyZJ0SUuQD9e1r3S08wvA%2Fo1OGy05b1B8QySD%2BcirbGeF9HuisBQlYsNC8e7dXu0s%2F33q2voZvG%2FNxeVowu2758XTjHtrWJNnBFTlXRkTD6PtJG6SG5kgjlMAlYeTjD9Xsgq1UG3P4Mm40C1jak3PSZ0%2BgPnb9DrS0dTG2533fVSWjRsEhUQYV3Gi9577alYqH&X-Amz-Signature=dc5ea67f5e0e0ee0f49c190d05b3f09163eeaf22ec1bcfdc8a3b7744d53faea7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
