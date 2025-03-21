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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHSWJG5%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDWLnbMjQcl%2BkG2oghrSoFVZnSqh%2Bs4VaxAsnY4HYJRwAIhALCVxCwgzwo0iBaikbzFX9MvzSHUDXBDSNERAZIFHFrqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMnpOk%2Fb%2FZm6aRo1gq3APFm8KkLWGW1YsM460%2FVCDP1ji8uhYdACVdm4gCfQyyquOqvzQWpnMAjwsT9sVCFQ3RI12azrxwiTv79bKPD6mnjxYEQcYbH65ITKIUxjEmQtpesg4gujCZJdjVuOYEKUlfNAw%2FIfMtMnck9oN2vMA%2FJj7m6v0SvD3Lun4Uz%2F4p829e4Ig6WEMhEbsEXfDPyp9SojPiud8%2F7cWF2EB4bQvDKaZC4Z07RrEWSu%2BwryB6reWgB%2FkoUzQD8ya8NAEZDM0CT%2BSpewdA8vaZA4lDGSRArYKT4j0WZSHl5H6FRSv5lsbcmTltNi8OeiOrzQZPsPDHxFUaxjujamYlIOHuVSpyPS8nYCreU71tuVsdAtgVMnRbkbA6yFK1NMuFEFhQlNTZ2YcHA2W%2F92ybNGkzi92QPuFAzDohd9OXso7VrHKWSREYHwij47tU2PhSWJdtylxrZvoF1MNTZdnhemU9tc9HKSyMw5czPm2poX1RtWsECfHbnAOakqNCmyT2c5vwW6LF7otmtdvxn%2BHmWVFRcOco7er%2FU4qzarXxGa%2BulkB03gsy0npRVJuaDnnU3c1RKugmFjj1RUYUXJ7zyKi90OGzGKLf55OfBCTjcqz90hFXlZMTqqmq23KvM4gL4TCf%2BvS%2BBjqkAd%2BHsGUmJR4VXUcq4N1ty%2BL5%2BNLgu9AmV4jGsRF95oOXW07NbIdKJn1NeKgDp1Tj9W0DeArrv31OossZPDMbGhAomoNcW8Pat8j%2B8JQZ2UVSmpDh60E3R4EtA6br%2BGSUtAzH19lXVLvb07b5Hr1vboYjLH%2B0ypjGxfzMco%2FF%2FcRVM3q8sFv3b0gpgvuerfeISmNMBy%2FLaEXG4Oq3ynPcBYB9va9O&X-Amz-Signature=d9e652f2b8ff5e3933b03752af236abf6939860ada34ccacdd3dddd834367110&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKOYCEX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIBGPUSdnQcYwVfmb7fTeelvtMvlWszFYtg7U5mbFebpBAiAIhGd76Gi2eG8vhZX9CqlMp1hg3YORq1SUp%2BgyN3GJYCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvDGuf8skT4cjVVPWKtwDNu6FOJJz5jTdIKaLQow70WjWOyWOnr5EYr44wBtrpG%2BK1xIykniyqN53m%2BxHBOaMaSH999huIyZuB%2BE08HFj1iKZquN%2FCdNIEoRmQGyzmVqFFaFhZPnzjABotVxV41IZLVmEn%2F9rmWTMuouacHiB14bBryATlOewB4pDwyzAfmSnzg24s%2BltMjdYGkKV7fP4KScNF8gbXUB5L34Oyg31wXLhcAhiQF8CWtFyXfxDfsztgH3nOJ6%2B6l0fC7hcsIUxe64%2BD8BDVyhAM7J44uFjAj2VS9H7eEYiurWLcdbAq6NJhLeVAEiPCu0zex0JAEMNSic3zVWUETn5s%2FxWJYYo%2F8Zt9YJLBI22lYirYfwiqaPvLs2yN6AhdR3zAjQCZTpj228zt3P%2FObJ%2FrAIP6rLKDS389kCxVM37UCfYJXQOXzqJIaMCTmO0enrP%2BYMxJE79HsN9MXW%2BAvJCEGQI0jdrWFdhFwYeiiY2XD6oomVZWWGJ9hLFN4QdRajsJIJoqSa5nseWvGylMI%2FWwA7RQrAVmW8KcEpAeR5bCNXKukTEoA8UH8qlcHrDArrbcoswm4Rk70uSuxVL%2BFFs0KFyYMNzOksnuSF3ctWlQBzDMHuIIQ5G%2Fi7hCC%2BLKiGqrI4wnfv0vgY6pgEQE%2B1vXVONYfArodHLXeXuOV2ylddGmebsFwxzFiMDR0aKpE2ePSQYuR4W4CJYS7urCRdoYDA8w7p3lZ2Vb2M3WYM%2Bk9ptp4P6XlgsfwlKUAgAKIXxRYzCgMCHJ6IgXGdkAdKkwtV%2Byp%2BujMFFvzJkGGRrDRjDKSWxkPZGe51sVenBvmcuOAJ5t530AlJ16vWtlqf6Fo9VgH3MnZ70v%2B73cmXgY0Sh&X-Amz-Signature=31823e5c1bdd1428182b6896e37419419221f45c062eff23361f9b6379bcc030&X-Amz-SignedHeaders=host&x-id=GetObject)

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
