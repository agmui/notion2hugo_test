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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75FEKV2%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbGPekoJDO3XFtW1xq%2B7w0cY2O17zUN4k4fyppQQXAwAiEAyAn2Dt0skN3dtATNVV2JzkP83pWQocYzt4QPDoEtTEcqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyS1PAf1gl1z3TFayrcAy4tfibaSoprf%2BwqlX1ZMDb2LrJ5cOjVLdWONGyHV2LG0TUy5gDJIw9mYyjrau4ZLFF2W3EiCoNNTYQRhQUTQMZZsgazrum1NvUplnTAe9M7JOF5NMt%2BnXGwSNuNRtY48x7gfvKkg53KdzOXhYio%2BHhgUf0pMkhZeiCtVry%2B%2FVA2hF6cCjwTqkXYK1ws7ezChrc9wf1nfXs1VTYPwyuNt8XPA695HzwgwM8sy8xlukzOYLh%2BEFK5c5Bdh0xS1At1Jyhd%2FpCYBRGIoW9nFeclfuvEjFsRlg%2FO2IkZP%2BLtyPbBxw0FT%2BvE9b%2F9CIgQ90%2FycqifKGVwDuv3YY84JhEXRarQt6fECvxxS1T%2BrcNp7F%2BS00zsLIfWowwomym0gZdeoYu8d74%2F6SbmZPWd58V9zfHNH9Hi6xTPs36gIfhhz7RsH%2F%2F6IYVgYmBrYlePcawapcI2tKLYOuTq8H1yBcy2upzZDDtYLmM8m6xwxPjzzuOGkH40flPBGUHi6kCLyLHRhl0vHRRxXO2hy1D8Ctk%2BZo3Xmu7FxeRGruHspizfkaUOzKo5yyDIJG%2B91g89bYGzi70SP8srko67%2B0fvyv1MsiMXQHDnxuivbN2jjJGly3Df9FP%2BKkXEhE9HK25CMK3YzMMGOqUBl%2FedjRK8fvs72zL35irA9XnIJQzuuzpN%2BWZleqtW1k%2FX7dGYp%2BExje4bZ5OMO%2F4Ll5vS6gOCloposE%2FYeRK89jC%2FPN%2FNA9wqenP5aVShlboHQu15uHTyMryDM%2Ff4VTqx6jVkjC21FEMwwB4Y%2FDu6F1A8GFdR6oF4qbfd30Et2y5Ze%2FJ4qba%2B%2FDeS6CGbLSthzH3Na1L86z0%2Bc%2FNGc1%2FzSHsquvM9&X-Amz-Signature=7eba352005deb9f45945a21078ac547c924abf347f2ed1967c67297f86a6b5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654IRWW5%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3edHqjDSvAzyZMX2a38g955DFFrsP%2B7uNpxV2A8OqFgIhAMevQSVl0VZ30QbZWqS%2BREB5MBHkxkkiZS1eFgqxWw1yKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzwwjr1KPf8xmSKdqYq3AO2dGHdDR8hU9Lhvsz9%2BC46f9yiGyfru%2BF2ndCSXXiOPgfACxwO86I3zdBJukW7w7N3mcGWjQT2G%2BZVfxzoZ8Eb678Kza%2BxKaowSmwTAzUUM3XfCcsh358R95NpSi%2BigwSMfy8miuBMh%2FYcn%2FeeO%2BAj2S0kDPMtwVzWomx7OcfArzJvQOESpOvoxgW8K3Mn83xKLqqV3LbBShph3XVoshfVdeWiUtagNu1y9JvRxXdUCZoDUKhl3pe4VC1PxZ21OGZFYnsy9B4H5pFUPsCeiKkUBHoSnYAlJJOU5CwkFz76WxJcYsJX6ffEi%2FfHj1VcwYkjWvnqSiTQoVq977doHf36eMJuCDr1alp7ttlsuGktac9msyQSi5TrBs7ndHDwEzpcj89uAae3SfUcaZgrBdV3quIWmX50VdRMQcnrO9%2FTpMsH1KAm4KUseh44YDnT1OSFie5aC6J9nhpn6Kje6vffRr3%2F9c2LCTDdH4WZ2Z%2FR0tXGrVe21rZOjcsfTtNRVVN61Q8r6fBRdT0uz68NFw8rBN%2FkX1OMjo2EJ3iDGMLPMvE9pY7uXIHJkikeAOzQ90KJQRK%2F52hW7QFXql5EBvAGSyL3hLekp8tPJTVickNVbxaWuYC7%2Fsya%2B4VX7DD72MzDBjqkAfyss9%2BYFZV50AdAf1UOYaFt6GKVUevqab%2BLH8pyNWJVLuD1R3EdyO8C5aM%2FSpYGU74W2SO43Jc%2BiLKXfEvCQEuEpzAlsezCBuhktwAIyXXxAy6ORD2KIBu2FyZCsSVbza%2B1wVxFal6SFEehx%2FrQ44MBH0JzRSPJjqOKhO4rSuVWV8B%2B5F7zVu27qKGaJZyDhfga%2Bkv%2BMMDgeJvB1N2BK2bz17R8&X-Amz-Signature=beb2c972c50a03f22e6b502907525556900d7130b1fc69e2f2322e3cae734c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
