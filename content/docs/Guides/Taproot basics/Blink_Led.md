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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWBWF3YB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDrx64%2B78Zpi9b4UBh2jxV3qcUjnNbWFG1wJCvp%2FyfDtwIgTRt%2BBEdy%2BqoxWhhGqssOA%2BZmFUsxvvvXGQv0nQOjOVAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC1pvzyKpYTzrgcTCrcA4DV7VtHFVguwsHv%2FHE%2FkstQl0G56A7b7%2B0OwRzEaFob4R%2F0GUuLAeSl8yxdqIFH1Olt6SzpFa6VdIqw2i%2BhPjd04ZRNetwfNbiBBiMSH1xmbmHxeZUoEVy7iUQr%2FRlk5TZByUKEVilQuYDcSn1Z3TAJ43xcPjWIdM8J2pB94yBsnIHcvpeI5zxpOIxHUovl4IQHfbsXeHnjauMif3pdgGWAcpe2hOm2ko%2B%2B5m43VtrGU%2FtOexvLWFzGv3PbC%2FEnuQr1bmYlXPdehlwuPa6S72lcb%2BdU5BmYlg913CNMqFxOzpxYL8Ff5viIxHPd0MipNp2nNupo27HxmP3%2FVZUfAVkfTEiSqj4hA5TNMBlHkVGaabPzfEaPeLf0RdybfcFjZHq4boB9otPxdhpioACFgjj5e5FN6%2FYdwJJIi8oPF2qM%2F0eZ7%2BzV1JjUyzmQ5yE7akM%2FttyDPOZSF411Kvxgwres9xLoDunzdT0v7nJg2jM366Ej2p1bDROK9iFp4%2F%2FSsowYI63A84UiuBQAbU4s31KTi9t0HukdetHdzpcklm3godV26R6xPUhw5hGuF%2FkMdevNqRbTkUHFBddGKTOtlfTG1c1gIimOOcI8ZxD7vVv4O50vt%2BxDXCq%2BIJYOMJCKu74GOqUBmD1ztjtEO90VgFfdgh4k2oHwHtGMSI9ewefS%2BMaiOaBpd3JZ71nOJF8IXJecsrdDEXVtk2OXqAcYoZyXXkjgUOOAIQIy%2FjNs%2F%2BQ%2BNg4LUvU7So96sC4F85vI4XQJGENVMgjglaO0aTF8a94l%2BITWIV2d1WwByoOirZyk0ZZcY06va75O%2FRfVhDiAgy1l%2B8DXv2LbDebA4lugNR%2FyNFX89tsx24ZF&X-Amz-Signature=e4fbca7e1ac7ed32e72822046030fafbc3771d24417cec2fd69e5612ae172012&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDEPN77%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCZ49GVq%2B0UyF4IyVcseLGVHMHXznjAkGbm3U4jTumTlQIgQ8D1qsluMhGPyChVCA0WFTFOUNb%2Fjwxm3ZinqCmrEAgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeVCW8O11BuDZEyPircAyjE5U72%2BL0Z5NZW%2BPjzBNx5qme6tleKptEUa9oufybZhF%2BbRH4jehMYl8JhhFab8fqtGaL6lm7k%2B%2BiRtCZbaf2AT0cZNcM3leDwKwto9dTyApPNTu73VzUZP3OW%2BSjYvdu6oMAx6kZ%2FbGWhFZuTiyoDOxaaME8cH9NePZ9lSyW3ivLUohsbWOQoOE66JLTUwr1wFqJfhavNvcaN2IuOclYHOHCOd9aRMcqz8eBUH4XqgoH%2Ff9ffe5e6Sndb23zIZ107kDpYUj4H5Ci64RFF4K5yEL9GYCNnZrassh9dSV%2Bg9syYPNat7isuWy9hxRTdf13DyjdiyJvbsfU8X1hBWQ60UwqZUQ%2FeQ3Bbtdmq6l9pdPP2sgphRrm0yFYUgQwZYEHrsSz1e52%2BhyIXdylibV5clXTVGuPPllSaqgp%2BkSJj1SbHT4M7DxptMKaFLSF%2BHWkEZWaK%2BGUf4ejp09queU3PrARM%2FDn0RruiWq6UpixvZ09anv5WVIq%2F8m0ERtbCn8BJD4hDDTLPNbfWrZLG%2F6Gw8sFKNRQ1Mgs6%2BLy%2FzD0ixQr57EYi0wJn0860n0AbLJjW8U037dLKDDhGUSDTHA%2FlWQl1oQugEZ%2Bcu8HLvSiLBvBeHClXyAkilk%2BYMMiKu74GOqUBP9K3IWd8XnZJ%2FcD70jDkUPlepsDvI%2BXwXXLB6oCFkCw%2BzWqoQqgptJtUNDw8%2B1pXmRWFCNlnlo6OCjnBQo12C1ogxbauc9mqaGd0DUcDOQwdKZOjqKPzDl7SBsuczKLlubOBWeQJScdJwBNsBPnN%2FqYGpuHpfcDLQ%2BVE1RuTFQlW8wEMAo8IT8sn63qrLO3maFJzbmzwlZdBBBXJiW5npmd0rNKt&X-Amz-Signature=1ac1280e84b2cd8aea53d8d98a4a18b877b3c941c2a2ad4ba9195d9890c876a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
