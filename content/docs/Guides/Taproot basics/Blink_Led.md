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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL4BWDJJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEKMZYD4VZ1zLuJ%2FIlCRgnaTZi0GA%2B%2BWP5ZM6Acydh1CAiB9kvTK08WEJBxVoTCi2prJb7g38eFipmn3iDRlL3Dozir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMvG5aYEZc7%2ForinJ0KtwDMX6gRvm9Vf1FCIrIerUX6CVVvZMnLa1JkFhvxZsbS0Lfp02OuMab2JUtuJR0O0OO9ZJm0QHC4Fjp4%2BIP7Fe1MGP8zasp0Dx0N6tIq89%2F5ApQasNhaAPSJEJ5OIxrwLYYzg5OMkWrecOjlPF1n6xFmBgHua5o7tSEw9WUJAjfu%2FzL%2FvYuocJR7mwFqtu%2BI6g4AXrSMfK4vMhCFJqQOkSjDSAd8HmBJ1IsFrsfAp3x0oOf21dfaltPA2dnYsnqY86Ca%2FWB8mJB%2BvD%2FZo8nWJhyRFcr8m8IzZCIZQUEXTIDWy9N2p70BbKtv0FcDIig1z0Jl48xAH3dIwbGFWzKlogj6%2FCcYGUxKqJQijkcK9ZPcQZG1Dm4sfYFNGyfDLP5stIWPiuF3auB3FTV9CSB8BMRf4NWFLxBZ8pcrX1sIanJx317CsaJYczsq6yr835qJrc%2BiGKhghLL2W9PLHVFv%2BWtKkUxOxvgi%2F7%2Ba824wyt7qpVKiKt4Pxz%2Bvq7tMgbO7btWibywMIBs%2BwikYAqEllB%2FATthcovAi8PNLCF%2FNaUfXu57Wi3bWvDoMTzd6Ljsye%2FBEdVuiPbt%2BeHkDedl%2BMpII%2FP5LXMirzYhvkSANmq5czlOUBcQ0E2jPE5IsO4w3N7FvQY6pgFg4Adkp56VQ3KaHiSFmPlKeOmdLvtl6ndeGti%2F67Q7uWubwLlBIBwGwhGNzklKWM4b2DrItAjC4kFYF1kDmiidDBYSOFZKZmMBtm0Vv3vg7a5i2%2FRBmUWhYCoYdPvmj4%2BJWj1WIIRFmNzZlc5jvO%2FemdhXDR6fTJreDBP13SOj8CBFC66DpskqiBddAjqydRdDc8dVMjnoGrgucK3tBZd4d6jD2EXV&X-Amz-Signature=9a65d2f46453f270b774be60e34f6840bef7ea910816feb8290643b84edbecc8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QZFV43K%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDomGpYUHvd2s9TYA9isKjoAZTWHrOQHNQrEnMMpoihYgIgdI%2B8en5taWZW4BtPzBInsCmJGKp9KOnsayeo6P6Lg60q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPMppBmzdX3V1VDUFSrcA612VDQPMS2%2FdHCu5JOdJrgMC7fJ0YvsSuFH1wVnMpm8XJlzIVZ%2B92Qd1Zvdrv4GBbd3g7cq5KAN2HDVUlfXTccw2jVrh%2BnC959KUVdlQFqP5L33KnHU9c7IXscZGD9v0j6c3UrbpbZRnWQIsEmkcykeT39JKVul1t8uygdyBtnfxSma3Qb2tciCGgHX%2FnRVnfl4BAqrP3p%2FzDKUuuNuJsDKZ6YADUkWSQIFtGXOhnBdl7MyIP3cDVpo%2FdvtFy58i3EVQr2TpcxilzOkklh%2FA7ekROKzOxC1pzXO%2BRTuik3jK9tLeSrfxiAZsKZgejsfnvx9Slx7RzKN8Yus0%2B0gzxWgZoUk5f5d8GPuOt1rObov9s7iGeY9%2FvSIph1HPT2dHksDKBQ08viE9wyBZrTIdnS19PSlQs16LEdoJGCMZimWPly0BxCF%2BgT0gAinaSQyJgo9UNsZMjbEbtMOToHqPCWgnmnp%2FiCCUlsW545uxNUAMMHbyzvuSPja0jsnyyHrbKQ9C2JLjlbLJfqlPNg4OTKlhuCbd0UT84XiM6hm4QUx99h2pVkeXIriKqHJJpRen19Pev1qYgrCXr24eMAjSrUu9pe4t1Qe6oT%2BvQXBfUOZncCZSz3Zp9GKi3VUMPzexb0GOqUBTFIrzD89TXseX6vcqkKLgLJPi52OIm0BGIjrppHle8yNpmZBBrWI7UK%2FDsk%2BDd%2FkWIgOPeiZV3xWfKmZghIgv3bHm8ngIGaD4TIhZBpozHW9AUxNMyQ0tzQEYnGyageQxiEBi0yCnd2bQTjfqyeBOwYv%2By1JMQgru0HcXWAueQFqm6txRtwrK1bbA5BlwMjt6yxzq4DC4VDqm4GU9pxCR1JjClcy&X-Amz-Signature=141df91485cef596ed2b46106104d1c518cf36b4cf7bd9454d6ff10c18495b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
