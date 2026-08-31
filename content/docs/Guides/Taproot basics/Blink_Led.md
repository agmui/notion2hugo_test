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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6RQGU6%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCufrU%2BqEge9dtplt7EK%2B7peCg2TByQoi%2BiJBVPvWmLwAIhAO0MD7JUETi5VW%2Bc9xRuiIpPe0QAXyUOIhUYJuMZmuHhKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B2ywqin0qHukXGPsq3ANU3hEfEQDlaX3RV951SC71BbgXW%2BsBNgiZtBqqYoEZwWS3533R0YUSYEKmM64PlZxYk8kC0uNjNHz146Rj90AXiudCCEocMf4UIIp%2Bjpd9kYfrechx%2B%2FH%2BqLL37YEuwFeT%2BIRaEr1OVqM8eHi%2FNAeUBcpDB9IMKK6LZs%2Bnexf6FSLIFEz0a0IebaGscVUyYsNBhu570dKi0CNUHOHZmYkbLkh0sLxJNDW6%2FLNPJEU%2BQWUaHm4Jk6Kr3KaYvbCSHfbz2c%2F3IJTcq9StcNgURS7Zh13%2Fw%2FvdQmlYxP4Vh0l05%2FfC8ESn8NPP0e9XLq%2FLXwTWHyVFBr3DgTUTF3iPyt%2BOaXRMQcqPeBqPReW27lBxuoUKs5IPo%2F8pBE4wtvczyvMDPATLOz5PCW1sPulqHq9xbhS1dOPVj88D04rnFMqA%2BpxWojMhJOcWg7tbCdnSV81%2F7hIsTk4UTc2hO4K5kYDcTHb6NqXCqUrpbQRpQrACnyToiqLG5sP03oZcG%2BShwE53rLZTepsCwTH8VevInosk1hH8TqeevwWhj8d0ys6kfpomhF6n6aOATxSDn9LU3Iuf4oTc5ogxQRLhE3eymHzxgryZz4n4T%2FhJ8CwfskED0t8HuMqCNbxzO2oZsDCR39PUBjqkARjJU1dC0DHVMocKLFrjXxLxYNHxh%2BPoSfEqxXbi0yNk3RBG2%2B4VDdoGF%2BOvRPXmghCOeH5iWyXwdfrMP9o7rvXxvG90um2iXDItpe7o%2FvafnBmNvd4IwUfz0J9XvPTN6MovfBwycMOh6pyLpNaWsbzMrfiSXizAMCJMGrT2JYmx2pK0KCsO482%2FM4ppWNLd7CATV4x3xSLWGQsDp%2BjCyUKPE8OY&X-Amz-Signature=4772c9fe95c8dbd67c9b7e71f4ce7d8b7e218f834270909a6d95e998d5d61ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM66JW4J%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDY6uLJnXH5wMqtGme2C7aUFI9J%2FvPsOcP2EoQLhO%2BdvAiEAhaACUlOhtcxSE5Rt%2FvVIGYFEIpbuLLp91zZjB7bca6cqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgbGP3ovt6znVDbgircA%2FXDrf0Kk%2Fi73HKXt9hNHKuT0A8aDp2hhU9kSloeeEind0WLtACCDZRXv2S4UD%2FmmmjymoqyvyDMxPexzBmKoVe1YRXOBJtlRhknlu2oExrXnKOpN6ksIDW6iONsF5nBtKvx2MF%2BL%2BgZCPg%2F3nDMMsKAgAAzno4%2Fu6VfxYTrttD9b8slrjfVpfiPwRQiyw23B2DdN5gxpY9DsWTPPx3RWHNAKYGmWH69f%2F2EUo6jfVZC%2B20FPNtfCWMHaUQ3DNwWqAxqIsSYXHZr%2F%2FxK9VUlAW32aYcSiiCXunaJMsEu4evb3xPdV2eoGU%2FsHO9m4JA0BVmywQ8fHdsWlb2m%2B3GZivFMdwu2i3DTWAAyC28v4TNUeDa5u7K%2FqcENnB9eFhPVevOauFZ%2FqJtA3uIeixYEJIKbxhTqlwLCUVfs5NchbSaL1CQb%2BfM0sTGgFHqj1CQuv19xJpa1xZXEjgIzWiClWXTFdE%2Fw%2FjdkC%2BbZH5dHVTfMEnxH7mwQRCXA92FzngfbCgKJAWJU47UigTIK5cefFphwG6aqtX%2FP%2FTRykRXLE6Md%2F2Uaddi9OidAKfrO41jyRGCd0%2BxwQ7cKbqfQKVepvQu16lht9aIWmgmJaznQ9Qr3i5CE4GMqiJYpSgqSMPDf09QGOqUBqGXmixA%2FYzahraMKF2rQITFlmpffX1Pck1dic3RO%2BXxeJk0iv3GtBMvrPrZnn5Om1PW3inJv0tmAnEx0TXvpHe3PRvuRYaJTnHeaBShWBMpCPwI2g81fWA4foX%2BnjPRbFIfMVd%2FbrpWfV8YXCma209ujy4%2BWZyeX6FYV6Sh9VnycnKMaTaKXdfaO0fJ2cHXQOjSXmhbmIo%2Bj71ovY8EudlrqJauT&X-Amz-Signature=bf577efb2080970ef30b5950b7218981a1ec03dd5fc3e994730501ad812dd4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
