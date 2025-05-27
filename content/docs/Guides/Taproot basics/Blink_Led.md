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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JR3L6ZF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIvBx%2FVrGRfaU0gGlj0iYbH4j3IELWLWLc72BtuYProAiEA8t7euypVGlc4QUB69SraLXpaHnwQxn0p4ijfKy4mUdMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLWc7l9VW9PKJyydwCrcA9noogM0%2BZaGrPITRsQBhZwsbtiA40F%2Bft5qcyuBfTpfVLB3RgVOV5AJpz0AnjWUo%2FTJqVzZFmX2AB9LM%2F6QQ5yGo13v%2BG9ISwuetggUueWQqFZpEHBovF8CUbDsNHoBRgZDZZP2%2FAHYWFoP45DluRvSCRln5I4m%2FbTg%2BbwBQhnmIlsmmGCVvYVl4g1sGXEhJxZ97jSUT2QYbwa%2FFfbPgwveQ6aH2X3OE0zcua%2FmXbFmsjXJpBfHBFX8g7lkwvAFNKGsBMugBwML8uSBiVw%2BJzdAj6LMEk%2FdgAvxYSDBxwtyA0PgW8rfdJ2vJoqj4ARb3LaCpcz1f4DCeF6uGzE3YZVL5cogkSK19QEhrtFlHDXdORv4B%2FDe5aNRD8OKw3ZERuBpjOcwPUtwSH7RKcfRl%2FCcEx6a%2Fxw1reU1hH1DRiq2pVVBi69zWwiAqVE%2F7m9nDIrbv9eRURg1dU6NjFjK4ZyVnf4JSqpGhOPNIPpJm4u7JIx9tBtPj%2FSbaQ9%2BjTu24EZG58kt5%2Bf6uqIDTsZ9fNbClamSR4DBO%2BmsByQwLUgFgK0KiEBqWFwubSwfi4wgdo61r458jnIeyeMos%2F3zym0Gr50MbT%2BueN%2FmoafFIejruYoUvlD3TXffYbsDMJ6X1MEGOqUBRDxI4qBuCMv%2F5wacqUdA6A0LUUJz2XnqzZEll01Iu%2FAPH406vTTmHJfIfS02aggKhNnXGJkl4S3LDj4q6EzBHuvhTe4tv3IxCRmbUvx%2B2x5uo9FnB%2FsxEmwa86JfMHEC8sw6CYlGd57maLHX6g8PGdtfoDlpvZWry1QbcjnX1vGp%2BgArUMWiCnN2%2FdtyQmUddjMDvWJS0JX9dJ57Iz1uaSUfJPjH&X-Amz-Signature=c7bd3a30b0e26568a8a60ac1b0c714046981625240a3a803654bbb2e0221cd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H4IXFDW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7Z8a1Y3rmuND2c3Yd99NzVmVqWRkpwB1o%2F2m8LBCLeAiAM3Lm0qKSiLxHJ1YOkogYr1bVaFzIjLYceCsKFyKk%2FSyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM0AcbvXdbaJnMr%2F16KtwD0w4DX1IWRm%2BcDRlKUzY00SRrwtcSj4n2yk9sSGolTcDkYnq%2B4RloyqjCBDcauwRS37%2BWY3%2FI8mmy25BN4Zzad5pGo%2B2ARbWQxggOuI2F0tMKNGe15fR%2BWB2rSAmH30%2FqK9p5dRgUJIMnxLMEz6k5hrJmhJRL3HMQ18ZakEtR9p2mkAy5mXRJ6jeZBDIzZvIDhcD6ME8bfEdPe%2BswHg3odzA6BPK7G7Y5vtsD1PgNP0kwvsCg%2FwVYHijwzpjT42%2FanMcp%2FHMwQ2TZsjMPE0DdmBYTSzcgpxAuAkLGKDxEcjOUnVqOG%2BqpmPjz3kBD56TePNuZOQLaCPqpyb1f3xZBP1yQkBCSWVqxpwQoLb6kIzbTJCOgR8b3ml7bZb8xxQur0VFbwSdFnRwpZojb%2FbphuY6Qhni%2FCDyRyKmhpUUD2NdiwlTQMtTCfCC2wwQIWoGEbQauX3p5ATvcHUD6csL21aqcWvmQRlauhEHhW2KK7P34VdQF7ngBrzs5DWU0wYFhwImkEWJPAjg7guHGQXpBNhCbNWADu39YPDLg7mhPmzQ1p9bBS4eh6j8cMRviAoio%2FMav91nlOSbYymMmaMRfxf4gPMuObrc52VA%2FJJo%2B2RW%2FeEG3NlkLMRlyEykw7JXUwQY6pgEKHoLaEzKQG6Dzu8unV2Q995iYc1QWqW%2Bgb99I0YTNeRqcWo2%2BnAy1eoAfxv8Vuy5%2FHDh%2FCVeha65ej3l3PsbKLDc8BteTbcM0GKxhsDlqLQHjMVdaOlc0QERVfZL62ozDa26jVOVXtpkzOW3wFVAos08Ic8H2NljXQZJehWhYUVRzUhr%2BinA8Zd4BD4GRRyRHO%2FU3mo5lM5DEhdjvozXSDmHL0iIV&X-Amz-Signature=c47d98e2f3a9488e177c69458caee02e64504b45ee86b4fee44d34eec76ffae9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
