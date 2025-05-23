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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHDTRK5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBnfSg%2FEZTqRoJJlt5E0FB%2B3mFhf3LQbDxJq%2BIpjAlfUAiAAi7oYzVbMeMN19lt6kbwNoSsSWiCI49jVvCC%2F2o0W6yqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Ox5sgj1BXENfEQ1KtwDxG50Ufsne2nmjK9POAL07XhCRwxy7Dd8fGlnZfk7MS7NatHO3q9NTimhufNqU2%2FGWrubqbZp1QvwSCgfwAT5CFDYAie%2F7VUvzdG6k7Pys0fgua3GElZLekf3d1NcTO8CBQb9SffrUntPp9F4O52M7A3E%2BUack78NkRVamLv6kYDOzmN3xSGHTQY7DJpWx5O2BNqOydEPJpqrlrKL6zk1%2FyG9Yq3u0wxWFdRIlwej2ZzEnm5IxfhM7k8TOeTmxl1RoNJ6XxHNYZKvGdzCLU1prJk92wiXA6fe4ALp7Ly4WFnsxaxh%2FzrPgC0gSiE5VRpTrj7%2BNdCkQoT4TFv65VxeXmpDtLCjsFUP%2BhoZXrzTh5alsh%2BbjACBrd2CJoxmP7tAc%2F8beUjWUN2rrqZJNKb4jqywS3A6JYjrDakfXAJnbEC2EDH2rVRUkpvQxeAukhqRdpZ0ymEZbj9lG1lPlY2wxWyDLShrZ9ZcYGM1HDMFDJR4B71kGlsG1TVJ%2FV8%2BvxOuRUznUgiL5K8yu7srIRMqoa%2BstpBxVtOswaeO86y5hWCLfOje7z1Eh%2Byvf6a66GII%2BjBlhNNqQlXi%2BaGzcIdimWbaiOgF%2BDL5U6rbBe2lNJUtweEhCKaw4kpEhJgwmI3BwQY6pgE7a4mArufelJqNGdFp2rvl5egm%2FPb%2FprhJU%2BfMu%2FkfFXSvDe9gIp7Syovs%2B0wAXe0dHK91HfsiNidrn%2BXCdmlIcHwS%2BLE2niP%2FfeSAuGl4ACeOfg8M%2FKNx1u3d2OniM2i7NTqqEnT%2F9XYMJXWpiT0za%2Bi0FsHm%2FtaAbhRWJVJkFUqLhsxK%2FU50Aq3IgzcOxa0Y48OOnvV%2BMB2IBA%2F%2B2DZw4HL6lgmy&X-Amz-Signature=e80ed4275abb56333b54b96dee957e5095bf67606ae16b704ea8e93f38831040&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYV5K6NY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDHyLi6KMd0yu%2FDPVPKaeDkFjxQ5VJiiLsmUgLKs7c%2BbQIhAOaecFqPVgD9h6IxJlbo8TJ3WbBufqWdx4NCXcWZTTtrKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAGsHT2l%2FYHHtL7mQq3AMPt8u4Jk0iCFOQLOMPKfbFxrxxp1Z8q%2BNHw%2FWcjkF%2B6dMfHWS5CflmKel0cD%2FALJnq25%2F%2BuS0pqppt1rArYtQkyr%2B2IupS5aanknsTjJ54v2%2FMVyxSDePTcMYY1AevQwxagRL76hq5p3pRDv0MbKzPeu%2FHu8rRp4p3P%2BmM7Rja2rc%2BGFULp6Td%2Bdzk77q4T4LFMOw993rxXL%2FcnPnaSuQ928kLNuT0Xcb7p%2FBmjKeN0sV8hkrt9TUL8D%2BWilKJuQdr4xegW7SgkF3kkBLvQpKjGxYm%2FfNj4PGPLqBASrSNfX7zpXuIxerX658nby5G2BD3S4g6yDfFpr934yPVsq5OC%2BpjgMYaYwNmS%2FLLWV0fnPNywHoSggoH3ywnLo1JW%2FHmRu8BWyXV9qNKDrITgYeGWne5udLQTEL%2BaYZGMr4kr3QvavGL3b0J9JrpImxn1iJvp09igGuxCvY26lqpqTGtxsZWn1UR8NDxc%2B6cT0QkFI8V5WGevMyp%2FcIN350IHF5LB7AvsFzvqr%2FQMEt%2BmCS7ITqaHw0BH2wbbVct8I9ysN6J%2FXhqR7%2Blp3g%2BNw%2FEUqh%2BmkQGMWgC80Gbt3oVyUilHBJ10gFGPA53mYbvtQ%2FmcTAHMrMBfPeg5VjAUzD0jMHBBjqkAeSDSFswqe1bcugG7dzvChxPIVXe7xkIgHSLRRH9ghiura8pyRtIoLnzNvorfDAqoOmXvBtpe6Y0pKWLdcgoHtYdRR5JKsdcwJ6dVlhigs6OUvehxXlnAP0ryVpyNVYWaMyFbsy9jVNNKxeNr1DZCC0w9GdbXiDcVY3LfnWd5NnBNYt83wu%2FsbRJqOmVIN5C938sK2Q87ejLrs%2FElCwPVFpCkMpR&X-Amz-Signature=35a60e8c42a8a2ec08cbaf65aa813f12053fa66e59c03ab6deda2badd35b2f44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
