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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3556GGT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEfr54OuoIEbhqCC1RhW5LTqh%2BDWQO5vyXg5XDsIQsxnAiA%2B3oKaMG7NsUfcdI%2F9HMp0HJy%2FVbjhGIBC5IbsDWLXkyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Vws3ImYe%2BQMfja5KtwD3OdFyqkKXCqSMF91pr8jYUfmm4G%2FtD9RhmjhBGCgxPydIR1lyfGAaytft6oIVQdRfMEep0Ow6YtTFqCBi%2FfOxEQzaBMkjlYhIixvFJ71pFWXFZ%2FEneJXsvlUnuP9hoX1jI2IG4dRJX1wYvSJYt0wVnOheDOGTOQkCQ4XoXomECrU1fglDyHCX2HjKKrCawGd1jdChqEttxLXAcZc%2FZboMqV80g7bgr3ljM%2BCwS9pE%2F8BKHBDTaB5v3Wlm2HLrQy58XFAjUCt9bCGXx7d9qYlCvuye1Gus%2Fp5djyxrtZltryeSkjsPm20Q5YYer7ssHc5KlDTZlPNv12haagVksKyBBJorT4N6nMXFBuE5ljBV90q8ubY%2B4y9JajkSgXsgPvXENHAszjAOwqaE2o%2FYbz1zGB%2FcZebfCAKSeokCj%2FadEDTR8cihSgT%2Fhw45vwze8OJNNVqDqAK3O8T2cue64OTEDyzKLJJrfWiyKbe5atBmjzPx3S8MsxSHjMP5ecaY1VcsaIB4%2FRTJDa996CXFj0zJWAG3CAyP%2FRh1P3wron5VsvobpBYEjROHiv5vK6XA4QCgQLzcAeJN5%2Fva4rwX%2BIh95%2FUxE9g%2Blzi%2FePurLWc026RwdAIFjyZ46j42egw6vuMwAY6pgEVObdNhXwgFX8oSCBKLpfc4TNVodfi%2BDZprb2sg12E0eyhAe3PZqrc5cO8Kw5jKBsDJ4K36Gis6bh%2FzyeGHO8RemJasT4fEdCJBMkKuRShbR7L0Rt6ubIQESJXnCqKs0IC9pOO8sV2xZBA%2FOH%2FWbebMcta%2FoxN5vBh741ou9vafy0nZRWj1kbnTUr4inuRCV%2FZR5blKf7E7WAodOhOGJ2sDj3xJmOy&X-Amz-Signature=2425e28e03f983f70ff0e6fddc248296fbf997c84ebb8c24ae40575e852b29ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SZQP2C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGMlZWLs%2Bf3xICPhCDHNIaxG8whSa%2FTp0HMLjSn9%2BmjAiEA7y%2Fs0O8hMScErEQ8HSAkPqNvE7TC%2Bn66gVIdQtvfZaIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUKItvQSNZsOU6pLyrcA95qsuQQ9ifKqszFR9JoWOGvkenfBVi%2B8Fd66gFlYoJaVcy75eyeqRQT148jaD1G%2BhmRvZhSJog9NUHvOiN2hZ6wchZzxK6Pa46nsNKspou5KMH0IdJCpVboXQrP%2BkgjCdUOvMQLSPcZ118ncOmN3FUZqLZtLo1R3tDCKVmVEHKZKpgCES2HpmxNqwBY9fwvr5IuONhr3jcm8GQOKy5UBZqQeCvUcfsP8vNuRwQ2u4K9oLCkHh7bc4lBpFOPHzwYJOjyTL5dqrp6vc7PnAiRXrleGAUHjPEbL1KLqtLMdImu5sd1tL3H1CmbdU4%2Fh2H%2Fh7Slso8wzq2XrqM2lwDW%2B19uBCIyzpxre64Jvo%2B1Z%2Ft%2Fbj%2FwarDyHc9CtFs3cY71UnepYfb2G1deCsg1FpWIy4UmyzuFDjPzJe0jGffTTYa4%2BwERTGpBmNGCWterqDGCTAWg3jXBOdPELSDv2vXlp%2ByTwgWXh4ZKaiW5gRnANJbiAQDLkQ0ixZ40SWgHiv6JApYzdBIxutFngFxkP2olsNVtPBwMzJq6bn8HUThE6b0vo5xrdLSOS1Q181wRcN0RJfBeFHLUcDjNXLEd7PLAdNrijcGLvrSSxL%2BvqqzEEYGs5uIK5Uq4E6sVmC6dMNXYjMAGOqUBREatJfTnsytOBgqCJQf1QhULO3CMQZ3qS0yiQNo8q21XmG8YTOlcJMkniaeVsn8E8KO0K4TQSdAs5AuxMhYYx8kX%2BRwOF2tTxEPAHaySn%2F3h4xZbn%2BQQhyEP098JRgLt4C9o%2FAuPZJFJWgBIMzvNQ3R0cEj8aJQessa%2FWut%2FznPIvhPu70h9NiDsilvBFc5KNS%2FikHDbRI7%2BmAO8ef4Hm96apW7X&X-Amz-Signature=79d7f4a67c472cb887ac5d832211beed9c07ca61da1eb770ce7b1d18a5468d29&X-Amz-SignedHeaders=host&x-id=GetObject)

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
