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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMBR3QW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdzhbjeVe%2BYcg1wbun4tzY0Rf%2BrBjvUPELWSTEAdW2TAiEAy7YPu%2BnOHj2zzf5sBatitampF%2Byx8T4oRbbsozpbzD8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG398VEkoZy7UX8GKircA1GcPZMOj5NlemtA1HVmaL%2Fc8nVBnVEAiqbvmhW%2B1KZ97Uw6twVkMuq291NAo4Sa1HPeACzPB7qUpUPJiMysUU74eb%2BFVDRMj%2B9kMjHUdTQDTxZiAhBZxJ9sP%2BeHtlUGB3kwuk1FQKsj5rpx4DF3PjryjR0C3i8f%2F2GGUTCK3w26MDKxG2fPOhlVI8OSgMQTCZ4gD%2B2Zlw1JHIOs6ftXUNjGSUvgHbAMYoMtB%2FOVsCyaRftDQTPBSB%2BSYlaiINFCA00TMVN9kFSNYBBUhGPij4FQP%2F4G03z7dhcBVp5b%2BxY7JnfMXj6NCHgawanL6MdLrbIBnLvWB09VJbRHzlTn4Pis1CNZbmmmvs%2BjKGIIWlC2QsF6BKuLV2s3P8qJzWlmuQRpOkcCBHUMXgDTZ%2FY7BCm5lToSmptoyAeY%2BXVQns7UvzukPk3lzA520uv13F7FqCTmiuvI%2FOlmMplIyEQ6LKUAFZYC6Mn3fHtVoGfgPJerXKH65%2FQeq3PHHyZPOO5aLZzuJesEbnvj2joGKYMyThfYeZYc8ggMxG35KlysPc9ww47ssq%2FALgi%2BqfogWkulmOXOKNRTsu%2FqffMmg2NG3KxeTKw0mRLHMqsdDCDQqv9SY4PwiE8Yvchmt68FMJyXkr4GOqUBpGTql5UjmFyvkO3IAPnb1rgeWeLz7Em5Exj6qK%2FEbM9tHsahGOCPo9cD1xzxkqAU%2BHP73gbYJ6SStpcDU1wzblE0yCuVBbCGLmCcx9o3nl5%2B3LK6lqknLbs2S7541LYY1vxdJYREVrKQstVbrKkgT2D9eu9A2DYCTrhspmoXFqrRP0GMgxKmxt5TDEfhMInE%2BgqRSqJ8RPyWQLL4QTna%2BpmSg57J&X-Amz-Signature=de5849b1e799bb829304855a767325ca900105ff66766fd795f406e6eecacaa3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VUPF5AT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa8iCaxdqX9kWYK6Yt%2Br%2B6jdWTJfvt7HESjMwk2mfHvwIgEjU7WOhhnioy5Tb3eKVn%2BbObe9ufSOB7wq3hsECafIkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEtu4QrMYcRGMFiBircA8mMmrpt4P%2FuM7eM0vZrTUOCHWejb46TdlH1Uc066rIv%2BCyPcKg4ltCNx07Z1deESDCSE9koP%2FeY7tEKdU6IJkDyMFzP5KEqI70Py5eInCOpMQolcqYKsDsvgnm%2FEiZbXI3GDC5kleVFM2%2F071vtlg6RE%2BVkJsJB5RZ1jMrvdLM5QtGLNmbw97tObdRq94lYLywgI59VU96JgT0uSpj2AqgHUNkUCB3MH0YCRghnOLgoeB0%2Fnmc%2Bg1vdjSYdZvewhKlB4T%2BxT%2BTUY4y%2FeMjDzztQ4P8G1JEen1HCtlkNUgtM1TbQXIsiEI5NaS8L%2B0u%2BJByGCPpkqI1YblPb3YxrFuLbDcVkG8Vs%2FvAsF96sISxdx1WWbHoWWPgNdmmr0ks0G%2BGZRUCzroLT7WX29SUysNN8C6%2FDivJvWYL%2BCjHx5JB4iBZSqkWkx1PACp02tMB6G3xfe%2Ba37J8P052a6M5swAAnN0ZGDzypNYR28oucsyqQDwDdpRE460LnhHxQu9aD%2Fe9W0jy25Cb8u8PP6%2B9cfTIUPPmHSCtSqjUqzunJMMQCpejnosOYn9sHfWO5qdBFw%2F7PIHP55hnhnc60bgj0AYSn0cm7gIPR5lCgnBygZmRRRNPnvwYPU8FVW1t2MMKekr4GOqUBlMpkCz6JX2qGh8Ql3QOBSoMqbZT%2F59tr3SYL1emdxLVtkjBA5rFDWDYJQ84VE4V%2F5LGwf2tACDyO6qFYEdMF5yThAmfMS31o0xOrszwMhIC9mGPvzHPtOmyijvcB1Aq2bXTRV1yMeC%2BArxH9NDs5qpc4xwM7Pwl3aUqVbsp9i2X3%2BljxkIsxLh5GHk00KTcPxsTjxAoep8EgUqpJUG12peYVK4ZT&X-Amz-Signature=bac4e6778833231143090d20a3823ae01ee089ea9e492143bca5e66c54c0da8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
