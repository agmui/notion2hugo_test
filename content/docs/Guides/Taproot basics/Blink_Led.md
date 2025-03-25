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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3WFKOV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh3cjabyrg85J3uBzNe5fP%2B6SA34KA1p6wsG6WMoYJGAiEA1a%2B%2Fusjon1Cir7AOGEKbDK927YOr%2FksmiySVioX4M9oq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDsep3OjdC2vtVk0OyrcA4zmGoEtjIoMW9zMxynIGrSThTdiSwTPu64SMASEgwp%2Fa2jafIZOa%2BJ03dkXIE9OEssw15VHdrfIGxAL1jZDokYAkb5cLdfZgDWUCbpIZ%2F7OHd9JSsOT1KuYZ84By1ycEXeZNOR9676c60Jv2EeAoI78%2BWMMZRlINCR5IJPuI8IANjcby973wbX2WJ1u1fE2Uca0zFnOoL6AwxQX2dC3cqIrP9ZokiCIpZgWe8AuIUUmoypwYdUcCnrQYBXbf5KetCDEZaUGXrySPLOyAJ0wuthxOWmS1oG7mfx9apgFXmQ22Wyhqr4VJC3RCNGvIk9PU8PgHbjURJQ1oMxCDsB2U65NUI43I2oeXXp8u4LFRVMUl263KiMODfIgH2QrfDoolzkWhzsYGoJKcKxeoAZ5ak9NQ18eww1vg1ACwT1xgrg9A1HEiLc0WQSi1eMAci3nlO5M1ZEAOoAbkd9kj4O3eQ75iR481MfJcu56Vbozh2xOQ94inOlLuN9%2FOakJdZtk2ORbJ0uuavqWygmh5VyPr0Renv1vmryTORsTLyDLnaS41f3wuVy2XVDZAAp2A%2F3irh5gV%2BJDW1NGbkpUnONQVtwIiTUWJzjx8gPjixD%2FM40tSZ%2F2Vb7Qv%2FQRWFUmMPiEi78GOqUBmfP%2F9Vqx7KosRa2Timgcqf%2FjtuJxR2IdGI%2BhKM1INwNjdtxTVThgyKRpc4vknZxZ2GaopRmP76qZom7RyfyMTy6P3YCjqW5TiOKtptNbAyDO%2FnDhb%2FTfzroEYTyRQnTtbCzKxmJ47AYjwGcpQ2PXymG6bBJ5pvHseagh5S989jCWj6S0yLjV%2FWLE8oLXLEj4TwGOrUjh43BU9Wto9HmIJdZIKO0D&X-Amz-Signature=04669c910c1a6db2f8cbdd54f4338fcbec4ecb9196b89cebce3bb54bc762ad03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N3XLVR6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE67hU0HPe6%2F6SFDwLBXuzXTSi5pYEofMf5iBObZlRVAiEAn4TyamBmAuhfgxEvhJka%2FPhLrHCBEAd9Z8AOAdnDQwQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDA5erYWDjSTy7jEszSrcA%2FqD0dhJtJtEL%2Fgurz9FA1xFqTruIkUjCaUA3rge9l37kpg0gCpjaI7sbZAa0XZ7d1NBumhshlR1nGfL5XOMneX66QN17xYm612yLmaVDFtd1QoMJ%2FHVaEhDulocK371r1LAw3%2FbpCQ8tOVm%2B5HTS7lXuQZQoGKfxWiwB1ZG1YXoyJHZzR16sXcHJbpo8yalGlGUZ%2BtAlhjQc2tdThHD4eavUQpST%2FTfrXPis2OV8Bv87c95Dnx1yAf905zO3Ho95GXoVKPFOECGby23tMX0Htvw7fOMEY3SAAQKJ1K%2BfECTutW5Q5X4YG%2B6B1ylxBD5lpqfdRrp7%2F88JotnXEqH97CD0RqkaYiL8AJnJO3ya2mV3Ie%2FELMJgve6BcuxPtw64RF6BlvTKnctF4DLusy3qC7aXeDdW9KPZAf88KWPFA3J9Oxr22e08JmUjw6VHrpg1udtvQ8rgCHKkpHPXWtT3mnycoeJFYjYhcWGjn1bkD%2Bng1KBkD2YZdVUqsuA23Hcus8GLUIvK7jxtMPDrToUdDzjrJntf1pfcDqJIsU9AodXVJ433SiVy9FoAJ%2F%2BeAOgY2%2FZ5Pm5ONmvA6dyyI5Ze3Sb2f5TcuO%2Btid0GXu%2BTUTnknSWowVfArpOu0HDMOiFi78GOqUBMsy2LpNeGTBCcDNuXcQd5aGD6iN4l8Vh47klxuTiKbLM4grPes%2FxHMxKc7xuZQbldErXTnuQbkFjm213i6S4BBtNeRzGDyVFlUZ%2FRJzRdh1ecygQHtJDNV3ywvFFFggxcDgpviGj%2BMG%2Bp3Q88pjHHHfY2k%2F%2FouWguBvi8odErr6s86SkhiFIdgrXIH0ejrR0TG%2BLpa1wXbaTCSZJRZGJxKpk4OrM&X-Amz-Signature=962c83b13cf2a6e547d27a84d8f7aa247e83e790d7c22a9028a8d926e7d33995&X-Amz-SignedHeaders=host&x-id=GetObject)

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
