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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLO73YUQ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVrZdLm%2FUACZ4HQH5TTguFYsA795YrHT82Br3LV56f9QIhAMmYuvAY82GQdSFh3W8E%2FegGoiiXUmCvNvRCzxTdoFYvKv8DCEsQABoMNjM3NDIzMTgzODA1IgyoBGddTVQwx1O27qoq3APPIPWEhLWChq9DV2uCDosvPTHYIn8WDPn1DtD%2FXyujCXTDpec%2BlTSC03Q86rxY5eEsI9vdQXo9TCW52tkjI2hyL5cltAJ7fj6oX81najR6fQpVmeeQ5iU2gYsb7lJ0OQ6vypym9VcQuSWbl2dKbvr5RgYHI9qhHnIFfvFxYoqolUQhIPm%2BJ3CaBHAhQ9g7QG5KpAB3EJaNhSGTO0F6ruU2MABWE%2FETSj43B%2BNa%2Fcn4%2FlvAqxMghMTSOGAq0U0RGXG5TvZVqrfua6rzfmMX0LRBvtfxs%2BJ7HHiXamMFh5tva2gh57xCyNqXRzT3SOUIyW%2FPbtLR3VGELG8WrUSLxC8qW2GIY8jQcNcHd9%2FLZDl60RoBtb9i9GrXVN%2BRMil3Xm6lKkJe%2F%2BPcmMdbFgvO89FA0a8hr4Vs4eOBrxqI8DL1rAfg18%2BPKuKwfWSYV2amNCSTORk%2B5hdiGyZp3yrlY%2FQxMEZY3iTi4PHrUvZeSSuypRhNSLb13F59md4Z%2FfOysO8tQcUwsU6tdyR7FjiqR0yEPI7%2FEN5Ro1BJHzA4cN9YXsO7U9Ne4gxKfWaAy%2BYx9nRBu%2BGN22uDHT1HDuERAzb%2FlCnQXVVNaWxC05ND5d83zCszE8vZJ10cgWP8mDCA9p3BBjqkAcOK0RT1CRfVpLyqP53%2F2FZOurwTlm0bcdznLJgEIlg4hMnqQsRczxwXXkGyHfnXt81XT0UYOGWJW9pk%2B5RLlFfi4vkJomjXBhEr0i7toTaRqDMgC6VpezJOCiqPwkIgXdoOR8dDIwUvGx81EDlKpEHRRT3WbJKHrqUVqkTS5mXocO69HDS8OyhnbM44O4RPtkPBaEJdBKU5%2Fmi3SMveUNCqfFe2&X-Amz-Signature=663726d836c60ef0f18cbdc8f95e507fdb32b29ee9dff7a9f41b3852fc418b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7K55KS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApbMZ%2BeHxYnnB5K7hbrl%2BhidsVGk3R4OLUb0%2FQp4cilAiBI0Kqsqu8nXUzRj70b1gGSGW58yiJiu1ZpYeE1lHq0gCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMgAtEbPbwhN1DY5PXKtwDEkA6whUh6PBz89pH9m8Fsp7buiM6DQdSymiVQah4kGCSoXRsVDtT7tiffnJmqUTsCMutsoa2vMAYmJiEFJvzfEWzifekZ%2FCRZqgz8oJWlSsK2TCoQ5L%2BUhEbXfj8igirZSRChDl0ZK0esZibIWxfxnpZT0cCxbSAX140v02dCuNFWXqDILUu0NVPmI9%2F8hLfnUlsZCP7aEvWg30HRtsmnMkOIjmnLtaMqJAYgTlLPIo4IMgAHoojzP5xAI0yeTJMSiC7wl9Jo5k9xm%2Bnhup%2B46SyVvT2wFMAMpo2VtWeRQALCuPMT4BC3CsYe%2BbBJiIVVkHNv%2BYyapEesX0p8wKIsNusj%2FFEsz6WIFsS2ybdpAg1CG2MoDlxM%2FYNVKqaBPk4uSrJv3d6b%2FBgqlm7H%2FvinxVwxbSNMDZmrr9ucN5KA0ztGDKRgRRlv%2BgnB3z30jZ0pRUQ6muTjsHPtJG19GaT8tGsK2lOvNW566c%2BTJSP%2FoEL4H6asXGqUgwfZcWnqRQms81ze9WRTD8JleHyY5uvWp0%2F05%2BaCi1oLlS14SVchDfQ4k07Lh%2BPGxF%2F%2FBfIUlYBLaP54Fj5DcmID23x7oVceRTnby3PzSRCxFWM6ji5mide6uQbP%2FI4sTJvCIUwxPWdwQY6pgHahPEkSKcTIByfa9m5%2Ba51koLjWy3uAVxIIeJChV4I%2BOA1z3Dby8mVSN2F%2F0Xcf%2FD5SGWFFAPOyrNkBOs1t24uulXmLXrtpmGPMf6s0hMWYdsQHMK%2FrcVhToV2SgfXNjFUylNsEn6jSLHG1TY0NtMdMEQRwBDE%2B232275WmZUiw83dsMx%2BkruY%2BBsAmu2%2BwEHGP%2FU7AcqfaAzRsoKdjs%2BDaoPw1ohw&X-Amz-Signature=37a1ca9f0a01a07cf7534b7110f9ecbac20ade87c8a87829c30ee11d13bcf942&X-Amz-SignedHeaders=host&x-id=GetObject)

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
