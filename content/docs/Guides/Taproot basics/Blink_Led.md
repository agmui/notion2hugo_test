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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBE6HN2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDuamIomlMn6BUeHJM9L5jpaFZzzATPf%2B4ht1fx9U%2FxiwIhANCgoLptZUvaxUSDURFMF%2BErE9IhPNLrRkEgEhfl0UZFKv8DCDwQABoMNjM3NDIzMTgzODA1IgyjU1b1G19NP4uWhmMq3AP3R5jM%2B3A29DNgCiwi25RiRfB%2F8A0ayfmNxULAn1EdGVT6N4xlMz7q%2FlxE%2BtjIJwDTzDVwIVnBLhpVOhlwQ8%2FVOVBhAM32Yph%2BS%2BfncqjVpU%2FDIAL1%2BVLi0tLCP3G19ahGa73LLSP%2FALnqYn92x%2FCq1bHv6tNBPKwlN8Qb5%2FUExgNpco2yRX1jA5NucxFf4LZLjXctJK8kL88lOeZtJn%2FexT7lPzfit%2F9ihZoWEbLuWJTrtYuNj%2F3GHWR9RdC3zvOjvuuu51AvlG7OHdvUaOLdYNnWrgEPavGzQLEweyWeTSxCPcFm08aY1LpdWFHLxdpfUzGA5Sitrh3Pc539nQ3UKr83VBGVcvw3lXcWVGQtYrHKc24uByU2iw68cvF7%2FedFM4cqimU6D4ZEMFZgkvXnbNJZZYOIHx%2FbFp8uJlwaEU4VIrCOJ6xWd29oETzfusJeKqRaJ3SqNFkikG%2BZd3fjvGOYtAyfmhye9hRTw7ywgOEMDY8Cnh6sGPawauDF1fr6aMvL4ykdlq7byZ7QjLGe7FoSIied38aMNYUs5jAGWTYaSfWK7ZhcLmLfixdmiZET%2BsPsKllZUNm6QppFHNjP4I%2BdW09CQdaDK3CDsc0vazQnLnbKtrjN8zFHWzDYiYTCBjqkARgfK8mVd4HR7tbYEaPObQ2CoDr%2F%2BGwiJfpDLj70vk40zXqT6F6kj1YenW6NNmkbII1hvNOzVB5MTinxQRT3KAJdnx10JcAtKisSO936aKBru%2F5HmTRn5YzlzwuM454QbnlvRO8a%2BbT%2FWq7346lupfJs0rCUiB11kwhqjzASax33kdsPAXnyv61zSIuWV4UN0KoZxsB%2BKM5AUXtdKuuXGlKWAbR6&X-Amz-Signature=23d15903ce8c751e0dbcfb8445a134b1cef2b0a76a3ec828381a16236ca50edf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHDW7K3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCCxlPfYIdR3jndeuwVNDUq%2BrbHBFd2x63MNNXBOVpJUwIhAN1cGYYmUUhAroxi8xX1DV5bkFKaGNngNsZrzwUXCS%2FHKv8DCDwQABoMNjM3NDIzMTgzODA1IgwN7t1oP1gTtL7j1xsq3AMpqCNDzz98o81vMAiAYEflRD489z0MJJd89L%2BP%2F6TPscxCjLlF9mRlKKzSSLQNXO08aEvF1pkkvx2Ed3E07lz41GjHZHiZikUEiSrAMMpCbPlUx4Bb09G9ELtd9N8Dr9M8TXBlMYH4vtcKGVwyoAk5ntJxJERCd0Sr9kzQyGfRFCDSjXc%2FFVUf87bQLI4ChkyipBGLA7wUv36FC4ucHjF4kW84qDSAW1yH8k35gq2IuT9AJZJOAvnw3z411lliWzLQgvHdhDJBfmQ5%2BtuZuAUeR3bnnTcnPPOFYlm8wfScnNZrjVuuIEqudqQgN3a5PdO3HwkO7DyRX8YPovdjd3y6m6FFeRAb%2FDzefNtsw2w%2BLJFy%2Bqte68udzgdMIYRMxQB6qJTnuqfmRdU6cSiBAltu5L%2BbITBbJXBp3QFOiXhk5m8IWkJkS%2BF7OEEzKdTQzt9UzGYSbxPu4Tccs6wVNVptPFs72ZXrjU7B57cdidnp0lQTV8GiuEZbPfBSCYJjCGqvGmAbjpmI%2BnmwCRnL%2Fz%2Bp%2FcQNi2rlVBT98cTXHs%2F66R5cbJLEEjhBhpgQ2XtzScC1og5545ZtyUgdyrjz4Qhbn0AS%2BIThVMRldz%2FBX0iM%2BYMb%2BQCZ1%2FOBdioqgjDciYTCBjqkAfsEhReCXL2SNFPomAP8tC3Rz600lu%2FvmSC1oTkYarPepBsn5yWpnIEsjh0xQTDpJp0gyX72n1OQMNRlQWG69iN%2Fq1bC5yzys0TALnl3LXcQjyHr2TpX3ZxTbG4QG8kk4miP%2BjtfuSYtHnrs00XQiWrty0escMsmJLwrDPmPb8goZtKJoOLNOG5cKAksmkX5UFnTqQ6yTSYqpigfzOJNvjotuHnw&X-Amz-Signature=6130862a1bd1632bee8ee3e4dc1bf2dbdea98ff18e69ccb90f57f04c34bfda6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
