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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X55LQVDA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDfBh8buCN2UQiKrMxX9N61PE1juOMap%2BN1DdMlmrFnaAiAK%2Fd55Wgy%2BoByDN%2FD3SLIZhLbwojL2fITwspthugktLCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8C0y8Bpn%2FX%2BunayEKtwDB91LZSxMIaPJuLOlQGJjZA4D19gGuZ6yqgXOqw3yZAEzt2hvJ3POYNzE2DvNrn%2FCxV1uIUziFBezrAWji0IBOBUEjr1ZY3Gkl3QR1YjoZEqj4L1QyR2I1hnLcjGic93tJQN%2BDfWtKN4b7BLAWjCFNFp7HO8gBz4CQzTyQ39n9xliMZWiSYuutvcnazwZTvevxYm9ApfoNEmeKlQFFdK4jhfVMfEbtaY6H6oBE%2BxMKbEk9lRxJ5xLiTk2MM5n36%2BdJOP%2FD%2F9To3xyZsAFWbB%2Bry6Uw%2FZu0pe7e%2BkagiqzhFM0yYip52OFP3h2dKqOa8GYXDKKRRnipCiUDVWEag4UAnjDzB0aF8C0xNvCep1wIyjnM2vgInwY8PVzK4jUEsn4wGhi7yCv0jzTP2O6kdoU4rO%2BnF1gU2CKf6%2B0o2SK0SLAbc5FZPP7WX1p55q3eg96oQMr5yUAYsSZzNCeMTmKfSpqvUM4oXZ1T2TQG0aMLuqWT%2FJT2IqtiLchWfj3DuG%2Bc7S3BRpCfFGgCRzB23vlun1EEdsq2IAhLesBcFppZl0vTiLICpMSc%2BiJmSe%2FT5%2FqRwLhPCPpks6wydRNRBzmGt3jb0LybVojKUvwzUJS30Hw442EEl3MsCMK3EwwyKbwvgY6pgE5iOUysNLx5W6BGGRqNIU1tK8Eru72b%2B35gi1F4tLC66Qw5aDrYN7s1KEFRiQpSW0tJq6qwGj04eSFmIZUoPEl4HTZ1HliqZyzf7kwhiR23JM2mNpXiqeZkgD5QI8guf0IVa5hDDAsXKa1B3g6GN2HZIipN6hyR%2BK5ZXHN20%2FS8wDAOeMWusSL5k3ClsDhOCGpl2mVmhpxMMIZwW88Ssooy%2FHfKSQ5&X-Amz-Signature=33c04ce3bf4e0f308691e6c663aa7aec8e168f32ffe76fbb76a5f8bdf40c9885&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4VFTFZ5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCLfrJsREvran9XB46hDYkHTqTGKcsux1rERR0we%2FiRPwIgASRwZs4vMTMq4pogiF7MBEANzHNRxm7SFotVkXkc7DkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoMGxOyOSaBre2XVyrcA7DI7nNnOCdTr4XUniIIslNvduS4CRsmE6Sy%2F5xcap801DX77iSsV8dXvHr1KLUtnp9vp98Dfd6CSgACjvHaBsk2rGBBGVllJihaRrhQ6X5Lcqhmg8z0TWwmRyoJbWZumQeGc4ax3%2FEjVEe3ZKTaaJaFt9Dup0EnQagssUC8YDlYmIgmzJq9L%2F1ZhROyReAIt%2FPoiSgF2qBib%2FG5tAU6Tl23QwAGzHbDi6s2Q8e31aeCuJI4aUOkdg9qLYLrn%2Blwy8hgKFw3X4nnxQNHQn1i%2FEy9kQxYecmCJ8sIF%2F4GwxA%2Fxrh9G7S%2FeWSqz%2FFIXDmZ88M6lAr1c1NO454LaEYEeL7UN5KCt8tyJeipVQ2EvoRlv16%2BL%2BxuRwJFVnFrT1jMrV9qYX0ntad0I8SCSMYGXyzKvFE%2B6a3YDa1YVgt4qaLU79%2BAlZSvZCmpII1Lh6ooUGNcHaBEGJ9PM1ynu82YZaBB%2FM4yKdib4Y4L5Re8fanx8IVgmSrCBnsV0wItTcs%2FGZM2n7W1gTMhrp15ePX2ZsbKuHSsYHdLqPip5EYfLFHgRPk6oYoXumVHL7MmNmldZaYeot3MwpwEq4RfYJHZ2BxTdECDRNgLyic6egRisO9fGJkdjFgeUItjm2UEMLOm8L4GOqUBKSa0piOPYsX%2FXq78U5Ews%2Bi9y3tbjStfux9iE3289Zi50KSXSNhmGedJw7prSiCtqQpr4PUb6AI9wGKW6JX4NQl3TNBGV3OnAFqNdCPDp%2B4mQSD6F5naTcVmNvUIgMtrlcWjlCM0O33QHbzs1Cu8wZox%2BAfaV88LygjU7g7B%2Bazqog47n9zBFgDZsPfl%2Bzxp0e%2F%2FXWFlcL6PnpNdXJ%2FYLuvGLKlz&X-Amz-Signature=78bea08282a4d81ffdf47be2fa154a613f742e17d09e147f3e57739da5ef4a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
