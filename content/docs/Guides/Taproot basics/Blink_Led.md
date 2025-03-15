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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOKJQER%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzyijCOI1DJUkkdocCKuxVu9FWF%2FvBLJXo%2FGTFXHG1jQIgMk%2BMNro9%2B2pmdSGiKW5haFuRk1L9Aw4sOhUwAMqNRgEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDCbmaYAhv2vcjrXnayrcAyi3p2OuIkggdxjPEeFL9VVsUa7oh5kXK47CKNrTsmqqTyWQ%2BLBPFtJ5fgT4MGrwEbXZfM%2FH1HKVZ55Y1i0D32vFfOa%2FXVTbMipyTOOsiR2sLwaZs%2FwVt4vLz%2FJETvm%2B4y8%2BMLGSi256MEkLwICJ%2FWltarvTi8HWfn1xHGzIN012%2FG%2BIgn4E72vM2MH%2FH%2Bb1vFEQP1nATmrYkLehtM4lnKHdHgtHJ%2FwZc78akajyr9ZlRbe9qHE82x149T9bfZVr5yFcdv5fpUbpjrf6FmAq7jMVCD1%2FFET5A3IOdync%2BvvPqNz%2FosoJEt8wB3oWquEXhXWZiTNO6sjyvVdf%2Flg6pAztp2cRTA8sC%2BDWoDBwLQQBgTc3jlbPWL2NoNsHGJthUV%2BEoKO6NnRgYzJ3WkytkwfxYSQ4eWppXY%2FrKqT7hYH5TnDHf%2FHRyFmNjKYqEh%2FM94O1rWFlgNGDaJdtBjWIvo%2Bn2bmqyfGLXZrnqIr7ZjlYkssK0NanIDqFAnUSbYtOZRJVV1DdN18xqWkz2tef3NWQXXmZRy1eZrKS3bGO56D4EOHsGN2Or1%2B55dDr5cV3p2cE3EKcwjNuYivZzVCwCZXn4svFsgUnVDboGQzkKUvBWrY08nRjWSYkIrucMOfh1L4GOqUB0FM7dHCuUzMlGAkwdnQpIUEoKiHBQZsruo4zQRk5t1lGK61QxStdxvRat3vzU7tgEuRwmv%2B9n3LledopVRnwM78h3OR4g5aQC07fRjJGAwkctBIcSyPAE8RQzY59gUGdAAq4fEoizCO9x%2BqwsS7xziL9J5BugdreRr8PP0BvIqSI7DG78LI04QIlHNjJw3KmPnP8Y%2FtxSpJuU9tKBX7xZ%2B%2FtyF2S&X-Amz-Signature=41d0225b7a302294e01fd1be254cd2505b9aa7f295ef77a3a9c0868ab94bf75b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623J53PYQ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T080930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FoRcp9x4Hew1Y%2FgGskR%2FjEUPi93%2Fyux5nxmubx1SBJAiBALP8AWpAOtIMjTupmIMV7VodAcaYyKKOrDz1knISGTCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMmNcPAbr1PXPxac51KtwDYeHF45ofrUY01r3TjcIt03aITtZUgbeO6wuLL6Jddd42HARFQqmJNXGVYaNFymFTSWcqKrt4C%2BMenw0250xb0em6oBWbrQ%2B0PNr6w6xjVMrlt7YL3GtS2F7xFAZXBRkLF1QEhofrYYVTB3P%2Fs%2FKSSzGqGmW8hgSSKGFwHLGvxF4UNVavWvBDK3eM7KIm5pMc%2BY1c3nyEwUoeOvB2A%2FDsJRxkipH1H36bXYws%2FnHZonOv3CUhEcTkS28JPiiHsbb2wDFM%2Bu%2FrnWxGpUkeJtCJLome0r60%2Bvc62sMTUEZqAHzMKVfVdp0U%2FGVDjUJpXDf02UMLQU602%2FuVitG7jrLIYMalJKT4D9Zk5AYxC8HPcLBV2NOE%2FJTjL93oaKfOTLenf6vl9fvSPxc0V6pTzwDweo308ed74pzaRodBefTRRm50xCoApI9eZVCSd0DWxX7Ok87n6%2FHqG9QKzESpDR0liNj3vGoURuUCdzPU%2BkGenA31CTjItTVyU6hyeu%2Baq6GeEvznvWw4Hw7CbX5SVFWGbO6YEehVcYqEK%2BIKyVLqtdWtxuU3%2BxA%2FDWWxULV%2BiL7eEhO0DPlZ9bjc%2Bi%2FXxy9j6VmdZLFS4i1fw7S54J1%2FAMJW%2BZLeIv4u2p42FFUwqeHUvgY6pgG99a7J8fMM0GArD0Uhx3JDJjfSaw0dDaeF6n2p9hXFLcctnL5W3vlzHTIVXvjiOl1tYNxlRc517BQH9McaqbJyRmUvF6vQOSr9lcnrxqc%2BOqNgXohhZhH2o90ZBps9mYG%2BdUSKWWxGMfpirh6iSqV8jS1%2FcRPd%2FWQX4ZG8pEylLIgoaXifURW%2BfH9HXVfMKZdjzGk4UWXyf50xvdGixxtmg0VZj9XL&X-Amz-Signature=6059233cbad3e9f176704f74e9303a4f90384633968e758d2e3ae872da191a69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
