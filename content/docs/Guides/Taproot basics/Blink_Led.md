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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWAQYPCD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIH34C3IMidG9vlntIjPkNf02FAbta8TgUnGKlhTWjJ2UAiBmStfoGM1fHZORfSMK4bhIhyyHdWM0%2FW%2FT%2BvEG%2FHfH7Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1linOkgBoNR7t7PXKtwD5SvFzoia7eIUsORroQla9b0GKldmOus9C0R1cRtKkpHtZqgAriMw2RSV%2FseYKx7r8IdBR4qjUoHLwyMU%2FAUSuM9s%2BpLVVF8QyLE3XptDbXOL84EG27236JZMcFNx%2BFXMPFM1iaWEaRBtZlKhFK3cWSjtNtoLwWUylOpkUcD4EixgWAJ6wo1lp5aBrhL9%2B%2FJ4QLsLZxpWmxdHySK3VDolAPTfWHfyJyxVbLhAVdE%2F8Wp1fgL%2FwyMFjazztuMFjNj0LsNUXOeXR8xWC%2FBZmoouAR1vOBx%2FsiYlr%2FijF0B5osPtGwVb9dsyt5g2a4996qZbi5r2fMXWZB4hwoiE8bxY9acLIJ7bERmt1%2B%2FR2L%2FQoACGGcZlH6viIRNNaiDW0VwaNSBkFan8L%2F7cvXVmebsmV2cOOaJGPVBSKwvYqkEf6DJupNXTvRv935gt%2BJIXMMgge705J73KP9s%2BDoL%2BXh54X8PXacwBXOKbPl7EhfUrV8211LvOq48IYUOssYf4GGiW02hsrmE1eqAjZBuYRPt5DcZMm0jr6LFgFQ8639OLkgcS2mUgbBw8YImc6DhKwv2APLhQSyE9802fw5PBaeDTFTjAI3KnSO2JXgMBzKsjMc65Hwwe%2FiUnrxOfL%2BAw%2FI%2FvwgY6pgG33hDIK414MPlPdnxYDljVC6s31VO3ZcR1BPIv7Gc%2BR8fqAViny4VoDKAz9nhIj5%2FUt3HWN%2FCpN1Xgfu%2FW%2FlDKY0ch%2F0zG1YlaHAcaTf0DpxaYhqDJiqr9eL34wlyC2cJqmlUCx%2BQlVVoZQdu26Mv3uWR8U7X76mWmqircXYwM9qjE1YMzl%2FnldtUGY7v2BcGqueMmf3HYjr8ybcXyUV9tN2t%2BIm%2Fm&X-Amz-Signature=87825358af59afecd519851a41f3db2da4d92dac9e6fe4a7a007549e6b093349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Z4SWZM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIHo2RBQ12avWhM2WSpLTFX%2FagJODJLQ2rGl1b8rRwS5ZAiBduvFdZMvz6h%2BWPNQ7Mwz%2FoGHo4LX0SjteJZNuveY7air%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMU5qfmdTK8iyVSTgAKtwDBfdR2UVTPzI2wt9n3ZHTZ1cUfWS6ZAZIao%2FPr4XSp0vOZlGJ%2BnTGJciyy5GBMNFrEn1oBdxzcgpm5Fd0x8BthD2Ia83YVS0nKxdmGv%2FVQSDLF9iH3%2Bj%2BeUXmNx9j1m56ZdoOsGS8zYhjCXFlCncCV2Nhmqv40RLgnJBc3sX4fygdkrtgj3SL1L8nzoKmwxd1nQeyjfeYNSfBIel876mW9jsJ%2FDblxeUTG522GBg4F1VA0g571Tw6RZXqNrJ1OwxlyUDuqx3fdXiEs%2BRWjAvJf5IIi1uQ5zlwiz8Rvb%2F05QX2TEAg2b9VwmtSRXhXnraWNMm2NbVlEia%2F7NBU7x7H7%2FoL8vB86NHhPK3%2BC9PXljVsTHBppirxSXdfAJbvLbO9rXTG%2BaCIqvhlUaKuDg40D4%2FW7xmehDnw8JQJqclxVgjtZ5xquetY4qTQizuvdrfE4Eb50g6f%2BUavRmR50C5xba74QtaJIuTZLIpx5YfELM6j1V8zRinCRIhVasMXHjD7vXEYIM7dnITU9MmuBnuHWHWPP7CWrmbPll8lBuknNvdn8Js7cP3DGVMxNTUsu8Uz1kX9rRuZMtJLagzgC6kyxtCnUFA1rOCtiNfpHJp8FCT7e2MMka%2Ftw8pqEfwwxZDvwgY6pgGtd%2FjEB9v9okKE9RpQrsB%2BsSOfT4i%2BO280610mxoHnqgvFPpNuqqt5nJmqPd84Mm4qxaBrDqM6xhhCr%2F%2BC542BnVnWiZZdW7um7QsZbMFDvVAc1Npn1RFPJoRSQClvupJd1LuDEvlwYpwatz7ZTM08IGS2HDiaZcFTtkeLkYjgxD%2BEvjA5Ym%2BvH2aeqJJWMNVzaXAazunOrs91meyc70nnuvCL1%2F9z&X-Amz-Signature=f44ee88aabb601b91dfb357a69d66b13ccae296cff1674bd524287a2eb8d4d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
