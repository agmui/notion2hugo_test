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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOKESMD%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIE3PfEsIe7RdtEJ%2BPcWuKeAlKl3aBU4nb0Br1QTOvdL6AiAETmMQbCELhyzjVVoxWs9LOdFaZsOOQb5s980gNRhskSqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMtNJ7HGxfNaAW5JmKtwDakvcOTbia5%2F3wcNPNeq5ujxrVOZvbcx5FZUbAM2h9G3TxkAsnoGMMRSMk7eZjSFzVq5RrQzxSLXoINCM3M%2FTv3UaLqvFbQ20YE4euiJ1sTESzRcb2fGo2xQ4yhK133h9AuygLSqc9doMMNODIAqGN3LNSVvsGtuFGkglHaldzQ5hK%2BG2XY0KE0ShTJIbjL1B1fmKLY%2B9dW85OfcclpcySwB6DgASxxxDDgQr4iKO%2BOweGT4Yu9AZBikELt6HJyq9aS0nb82jw1zL2wyCUzk6Enzgvh2TL%2BX8VHk64O%2FOug0r2jmt0GbOe2gEzwd8nK7okvoKlfzh2MlV8X7eovVlL359sKuojknVCwzWN%2Bbh3Q6gRWsdCpv3LtoxvMsVh2ZQ6KxCn%2BAOpjF6%2Fe8fd4sPsa2TEUEyMW63BM19QVvR3%2Bi1eg6hvGxVBO93r8p9uECwQSDWHzeB1WVTh81mQANzpDL0VCElg0JUzq3dthahyxTcycW9GckG7sLVfGJU2D85490kel%2Bq5Fn1YI3J1PsbBozfN17jidyl6JS8154iDxhKzVzTjp8thKYF4mj2wYsdIYCIr2suYNPey0ki6OkGI31IW%2BDbFCQyv%2FG%2FB3xGMHbJzbiPzyASSTgE%2BoIw3d6AwQY6pgH7F9SBh3PqL5hPjW4xhsXcroYKgTLsat3n2Hw%2FBLH2L6kKHHYip06eOQtE756D9DTdJt%2BFGL1FltD%2FF%2Fv%2BErsdgU%2BwgfA3d3oWRi1c8bQmFef5TabgN60eFFykT3gRu3NhAeV%2B1xtTJWlkRRQiN8gaazs32lkTYJJG0h8vEP0s2V1s2MgmmAi6WBii1wzpfzfy%2F%2BAcM4x3q%2BYfSajcYcaPIri7IJ6C&X-Amz-Signature=1c7f9faf69db33ae97578deb6ac8f35b9ba65392a7a384007f3dd8be9c524e51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGW62N5U%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDQtN27J3FkX7YfDbtBGwYhK%2BLTQveXzNwD%2FV9bohdQCwIgNF2JxMRiM0caa0SDrlQY5G1G%2BIEMgr33YcuPFjyFQfEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9HWV0F0%2B1Wwk9KWircAxZJzQAUHANBT3f%2BcK1FcTCmHvIbedrXhy%2B0%2BUshXSOCh%2F9g8krTsJEN8GqD%2BVHYLcIHXgUZTTINrC1cwk0cWr2LCLLo3hI2BWDn10mJ0esffbXLkysscAuOk6fX5lMoHOUq5AaK5SmSlHl%2F9Pocgyn04IaJeHUEYVZSDpzMumcskk7NY60TdcvqyN10eniIUoARm7fKl7jSTF%2B89E7xksaS%2BfffljizZKUZIft%2BBeDUqRLOoKto2PL9HzlFs2m3iO2hhoAiCn8JCh80lt7Pol9ifuvbJWmVlZAPM%2BG0CGGRFeZz%2BC7L%2Bzs4I%2BXdEX8o%2FbMO%2F2MQl3O7ll7vJRWGxf19pyNisMLu9mynzqoAjId7YaZ18L2E7OyCA4zv0rE7pvR8JrU7r0cFYVxEGdOAxKPXPp%2Fd%2FHYbnRyp%2BHGjnjt3FqP%2Fx6DNk3T2hzCu4Yheovu61PtBECT6c6UcBBdIJiBUT3jlsNkFmUDmxp6KWYgJBnfOEuh7B8TQjkICPTqtcT2VGNOXKzbrL%2B4WyU78Ml3SzPFdNfpyoBFcBAj8a3fAX0aORarOt6PudE3fVWQc9YFc4cFlymdUzt5NPOz5FD%2BxNHCY1iCaJcbmV9MsNw77wJ5OgEOhLot%2BQDfhMMnegMEGOqUBSELLPYvYstBJYZt6lM2TdeQN427DXd8pXpBsAvtdZy5nXBhQCHocssZjWgV2EeBIrsZaSrHdHNb5bf%2BgZwJVA9M4WCkkmIKPByR%2B%2BvA5rs18WCoW18LNUMlYnu5kHVljfSOxAHqYev9kI9taXdM0BefsJ6CCFvVYaRVu3ugVDMaKJVVJaaLEXGFhRn5DD3CW7M2dM7qwB1SK0oXwvUhzgeJANB0u&X-Amz-Signature=f8b24969a859b520e5246ee7fefdd8da6218392ebfdddf13f83d7026a7e26e94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
