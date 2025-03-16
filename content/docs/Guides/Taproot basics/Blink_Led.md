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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSNQOEU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1MtmS1Adl5UxhiIPBjKAMt%2FP4uxqbtCejvb%2FjUDBaBwIhALzS5iRmAOI4UfeHNDTP5nCHIsM9FD913kc5g5xDM%2Fb6Kv8DCDcQABoMNjM3NDIzMTgzODA1Igy4VieMuUltutst2pAq3AObqT3Au1%2BqjtSujybVvc%2FAgrpfUrghvz0Vzbn1J5P%2FQgS488GFy324gQVmfCSu5Y2O2hl0EPrNd%2FndHRXUnESfpIrjA%2BtKEq75E0HOHyqI1E6lO3EZfnGOae5ZBovugx6QtT7XltOgATx%2FthJa45taxD2Q896dkJ%2Bmu%2FYUuqCQA%2BZA2dIN1TUxvwCl%2FkTB4DGcdvwd1qNC123FWicBuagyeMvumYg2I%2F%2FJHoumV2zrnBDbS6RuljAVgqmUmZ3J%2BHr%2BgqTQrNqdlSylmbWlRbYM8pdeqnDQVpoJTc8aOs0kJr%2FZikcLRT2%2ByU2i3oM%2FF5e%2Bg%2F0VS1EEPIO%2B4p5MSvV9v0X12DBnaRXuSIm9RYO7V5OvPO8XVquXiRDHpAfeMeTRBZ3FRsLKQcM6cZSlgRo8kbXo3fn0CHVDtG3oMZ03njYysMEQ2biATV9Qv8DN9SyY%2FZ2LAsPWXM6Z%2F897fj6mJmIgXwP5ODSvWhXN1soabx4Scb4n89nkCDDDe5grBikWPjtzDqHlkqPx6bpUwnPJYfseg1ePGj4GFHJBG4VMILH1%2BZ0AJDBnygpwI%2FRnge0v2CkE2dyMD1YJGw%2BcV6tmHdPe5I3dW2ITITTwJ5dgB2GKbxEkHCDxRMQQYTDInd2%2BBjqkAffKRA%2Flu8aWQb9f6nOHVIVfD%2BlNAsdvAbtnFfT2Gb4%2BnMTRVuAJCHUrkC7r%2BS2vGyPWhgfQfMaVIx8RSo1b0QZPjdv3rqpN7xTeTVg7T9Meeiw4QZ%2FbUwhW867xxb6cwVs8UWzPuR5MD8TjGc%2BkmLlXNnHrgEkznwrZyYrM3%2BuInwI7MiV5rj2SrZLY3PhB6EglorX67y9Tn4drsORVw%2B8%2B%2FWrW&X-Amz-Signature=fb0d5f85757a48f1f5cd9fcdad681561f1f37603f1ce136cff486f5c39b8794a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DK566GL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqHnAtbqv9NY%2F%2BMkMV0s147KGQ4exREHOW02I66duFwQIhAO22ZHR8QzwRYxYONgzraVAeTU%2FFu8zKQZ2UkqaylokbKv8DCDcQABoMNjM3NDIzMTgzODA1IgyHqm%2FPhQnsiyqIGmQq3AP3l2UaAWibNHKuJfQj%2BT01ehiJqMx6W9MPexj1DzSSjzLtKriFLH1pnn7Nl4FmEHh1dzbWHDEtZzThHxg9UFavWlW%2BjoPVeDDPRCUElIzarLn80nYLjNfzkFH%2Bd1ThRKeyTbH1trvv2d2w3bs%2FK9ezuckrSntzaeNDJ4WvBvKqrK63c%2B1IDWcn489gRnqLzFRhQyZiU9mIdfQpag%2BGo0PRP0z0nwqEngbof5YAigw49K%2B8isX4saAwx7PZV%2FYovzU7COFBgpf20RatnRYYHQ7bI2zv3me4rAWqqWw0ttt%2F5x4RuZIKAzRv4UbTjFfSFoF3HHwA102Djsgr1j%2FmGugzk2hzNoMVSjE9tJUjNTnRcfikhyd%2Fw8kdjKfDIeR5jwLysNHx9RJCvp343SoSmd2Zo6n026%2B1p%2FSAbwPnnIWngIMYzah%2F4PHsZUWolyGGBS6XZVDd1T5az5ww93Zh8iXo6PKNPydpTJNcdlBXy%2BvU4SIH6ElKTjN5sYorW7o%2FVLMUJnpgsqwg3pRyODJromkwJdVQIkxjFzYutNDA9za%2FRottDq27vrEpgyX0v06QWAib6%2BbqX3ZnKBbNyK9o9dcfyc1DqBL1PutoWH0xEqvM3DvoW2PnWitcgnYazTC%2Bnd2%2BBjqkAY8zutmIHU8ndVw5l1BwMHZQhehL6Fof83y3aLkEG3zNr%2BnpHQFK50y6I19Et2NTGlCPvSNJTOd68cDJ9tzgXLxkBpTAv3gicPu7bob2wDxapPgi%2BuP%2Fkf98aF8IAwohL%2FQQbwXRCBx9C8mEUSgTPcvbRQC88CjSfHUTU7jt%2BzkBDfF3fu%2FW41ibxI114gb7KDtJXaxBxwjKd4ifeJCMoocji32m&X-Amz-Signature=c89e039828859cf3869098dc3b1f51f476721e7d3356d816d86cac16bb24bddd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
