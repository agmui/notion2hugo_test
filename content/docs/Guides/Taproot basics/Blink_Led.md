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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF3YBAUR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ90UAVjL%2FaslZIQg1tvBelSEyeAnDs0hgpValHM2iqAiEA0tk3ycgQPwhTYY1KeGHJyXrM%2Bs3ZQ02NT%2FWJ%2F0wqrEsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYrkakqew01n8Tt7SrcA%2F8qZiv22zGSw1Itd1Ssyrl20870N97GWOgYzz%2B3G4XqFTsV2vKFyH7GZZOAkIRBYDIFu9RJccQHCTFEDG8FcFgkVxqE%2FOJv6FE4piuW3vw991ZOE7UKEjdxJeexmPGADzX17Bq3TToOPIoeXQjl%2BnB1CNuvGUC686M6GJhPdgkQUKGr9orZP%2Fn3a50cCfUhLUArxL7Yxu28XaFR5RjkO1d8ZzAQog7n%2FKDOaBWWe%2FT4nvojoBT937nOg%2F6PNZEyiuFi9desNVWzAowQ68Q1obA%2F3MCGzFsYqtoSI9p2lrSqn%2FI0fhxtnl3NnfGRsDOtUm%2FRLzVn%2FOeGiBoCeL7vnxVEIL%2BVuCJ7XVNJgr3Sq%2BjfTLDLiANHdPfZ5B1AxHWsdV0I%2BtlMoUhNy3ZUZhETgqnBVEMHobOKV%2FwtPcZq5qckfKqEdxlygCzok3v%2Bn9bOpA2Qi1Y7GbRMkExBrROQ4baIvviXf8NNPqtSXzM6G1vEYpgV2jyrFrLGXa629lLTSC%2FSMkvnUxXJAQyP1LA1%2F7iG5UneqzEbjyhMoE%2FJW9jiqHtYquMJvx7dduhlgBQkTem%2BbbHYYmIAGru%2BRCqnVO4%2FokaE04EBDYl2uXptAEzL830tK4wW%2Bui8Q79eMJmxrMEGOqUBjVvcyCcaNA2BjoNJ4pv9YpucLch%2BGMsqb9RKTHatJ1w1LMom4BkcI5WZuLGsXqgK5pPNOaEOiRwl7RKc0YrrJAnDCAStT3BaRKFDWGwhZAnLQDXNCHwDJVIzFHVrqg2XOGGkUIF0mkkYrI0zT4yWEAac9tDkpuKrK4QF8xDdeU3cR%2FjpmQ0mD7pnjH7vCiAKw5QpNifGfK%2FFL%2FtHMgcoOIMdMwlL&X-Amz-Signature=f797319afdde2a3e93350f1297040fe906cc33063e2257391d880edc87b1ae6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQTYKEKQ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8dQ5ofO3D95DwTixGlW%2F35fb%2FVvo9gYuH3Sla9dsL5AIgZIcydFUP4vCVnax53Q1FiFDfsoKCqWXvuspLDCLLTJoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGy7%2Bgzr9uBzLqTcCrcAwmOSTYoeAkOmkUGc24%2Bdo2q1QWXxi04K1SnD8jRmv460PsHA2upaqfraP0y7bzNnJsmKxZIEl2GZUGx%2B3ALymZHp5pjnoFXGmsRfpEAzkm%2BsC5Q5y94scXgoxzzPQkM1rXJYvnPAZp1K1nM52lZdZ6KG%2BzwzA877is0XGu7Z2TjC5yfJtwp3RkLKB173224bG4U%2B9nPjPtP0ghP1ENrjYagDdr2MRAEZVkZiyw8NJ2P6Ttlc9tbbslDlDfVt3XgGXNwqxEt56%2FlBVfru3attlRg6EkRH1Dj0ZaP32KAhUv5IMkgETiOoBuwT1eP1Vn8l3TnIg51xp%2BckTBKZnjxxyDGkz5I29uVKGa9ulU7Wl9X6Gc7JK2nLT%2B1T6uH9FmXvJbrHpU6VfSBnA81ix2qxBekWAiTRGSB%2FiW8Lj2lZzCCZzdAreZQqd9cVNTOkPHsXxyvDrkbrzuo097xDaxODiKMg5pD2i2wG4Ux3bmCmHoVnsLvdBRxB0tzL9n493p7ryP%2BPtyREuHResxT%2BiM8Yiep%2Bn3yZ%2F3C6fbqYc3KUje28FJjB9c1kAz0IzYtUqRNF1kzEMu3W2lkmWX3F%2F%2FvPy2SDKxJ1k8TpCpu551iTy0yv%2F9Wj1V6DFkZDwSRMIuyrMEGOqUBhjfxOi%2FDCfQcsriS%2F4AkOFa3NV639%2F5A6r51%2FOp2bflslu92c6A0ZND4vIqXQFkKt6zYVN8uoDrJrYy4EDlD5rtxN%2FU8xGoPClamUtiSO77kT2PBBJicGcFklIjvKCIDlOBrfHcj7RCLjeOyGB2sHgy%2BnMBIz4FFUVG6Mi7G%2F65RrIkCKsAGCmp%2FLCOGm5jmT9%2FNeKPPyBO9%2ByDh%2BbtoX2LJHIfv&X-Amz-Signature=e908cfa0ef17ad45fec62aaf8b5308cae060809de6d8e501d4d6c6931463ea72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
