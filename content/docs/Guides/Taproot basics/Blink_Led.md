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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVIF6V4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDEYDhtRw0xFPYO4fSnECtFnY14wk2u5AwFrCzxm7rSdAiARdojsdRsIHx54dutrLkpMOi4Gz1%2FBWxDL6QudnKNzfCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJmWttW9mLHX3sduFKtwDdeVAqV2L6DRA%2B10nqtnKpBgzj8VzPLSeTpQ7834fVm0%2B6Yur1ojlLUhwbrf51ISca1UocZQQj6n2nGNwGDyibgrDJm%2BCI%2BlfnVFPmDjaHPGHc8a1N9%2FkTKialQgmdIhccX%2FSIaopEH%2Bi2iN1%2BJlLBxK8JcZqJfr0tvQEJXOOEt2wR27AHG727YeuG16XGxNuYr5lUAVGHDShsun65SOBuyRZySb%2F9qzr464DQpK9WLzJRALwxAqIZJOQZAsHWhwgPYJcJEVavAdXlKihH3CPKPmG9WyEuBz3mR0mNtA3oI02f21ngTY0sg%2BEMBXSnVPqn3r9lyvOQ7EZlksMEVXyPNQ0IZlPWNCtKJo%2B%2F2%2BrLJ%2BB%2BwRVRfmcLuBXXUtkduCO86kRB%2Fyu8fjfIkXwn6TZyy3RUqfDaQm2olr9%2F%2Ft8r1PhuCWakUuQ7DjNHGxKjnQkL30Ej6yjQaIZvce6njrBSqfk6KBLu9vVXllg%2BTF3M37H9Nd0nvxZb9rCEpGe4%2BP%2FJbOcWaQbWXHqFskyRfoO7ZNDCrRYjDkKTeBQ3OJzM6z0NaP6WkUlyzGUF6Vc8hokmvLD9yYl6d6cZMJ5tbnfmJM55TILdpdJkUN0WbiyufDtziP%2FzvHgOKyfyY4w%2F4vswgY6pgFDYWXn9qUCq1nfQ7tHr5kA6lSbktYiz8RSIbLRc88801eRZOL23p091ex9FvAspECC2GFX4mSpIaahIecJn6JIiAFltX78O0Sf6zQd6JdnekanmYr0fjigjglo3WFD1uTgPiufnT29c%2FL7Gx46J5SXQO8476MYmd%2BTdkADIOjjDOf4CY3ePCMjxI2kf%2F3yERx0v%2BRbjGqHtk5I2Jc%2BA%2B9eaBKKesxP&X-Amz-Signature=c66aca9c0b2c2b3387840f09584b40a291d36dd8002feda1fd64336495b4f9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXFXUPU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDeUJy7IEAV%2FlQAkkPo1mzcXKQO%2FW3fJapSZrxi1dkh%2BgIgWbyGpL5daaO5Ajk8xcunZdVcDbG8OGRg7slmML1Kb%2BUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFeRLb2ahTU4LorsNyrcA9z2JcCHuXBV2rfl9UbsTciBTEVK5UYDzdN8BjiinjZ2Qm85PvNURVnqSlyrhYonVkdlkd4rVHNNmdWe3bKs%2Ba6RkVD7OWgMudfS0H5nJoN2jjypvQoqPSjXyQ5sfiQyVok9mDrfKovBxkkMrXll2rGVuGPLUNX5Z2X1nw%2BbW%2FH3M8WfBmDH%2BLM8qC4koIDvzFAgFfHSmpGCMmRkm8Vh4FQsZVTvzSObYImjDP90c1%2FbEoeKtp4CNuPMv4yyNh%2BS%2FDLN6aKOj9KEko4Mu8PARXAN8T1bvU2BCU7M80De5G9nqXJE9wXS48fGrTCJKus%2FcqYTykSEvCu2q8h4LDvd3IdwyPeIe9Jy7Qi9XYdZ0fIxJLkFCQNtWDgxPVOE50ubXREb0yXx%2BldMXySkxsVaM0dgreK79D1ukL24hyyFhjynEcC43%2BtT87SUU2tf9PXvagEMA9LKr8q7P498rUFws%2FD%2B9MsDfP0gxJOfIvIkkuNQwFFyz0ze9lnnW5kaoioRJbEaOx44zJsUFBUDcdHVwVj6bSNBk6Rb%2B4tdsBGFGRzXylocDSgOyJYQMfIv5USjDEC4HHqWekcFqo7BH%2BDHEzqyv241jCPX0S8LutePwctwz5G%2BeDnLgwVcwhwtMOCL7MIGOqUBp5nOOR9gdcJH%2FB9MPALZRtzKkgmQEFT4VRCdRghNqqOqS3FByYYLxXEuT6Y%2FQ9IJNpezjv6Y0PrjurtC1ZofJs0H6iGUgLNeNL0hwacMPR%2F3IeCxSrJNJM99ckkNQ315ooEgLLMe8D9Q%2FuhftjqDpPKFAuUOjHcUcXyi75lvspa12nRRXXSXGSMhVc3nZQl9m3fYjbeyKKhy%2F0xNM5%2BvVzF0qwhq&X-Amz-Signature=98c4ad4820f89a250918715c08c68c183b97d973dbf7d3506de26a55618a4c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
