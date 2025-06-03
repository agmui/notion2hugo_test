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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6O4RDU%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAEW4DRF8iWXIwXdbPeor7ccLFkUnecIRCLyuaPa%2F9VWAiEAnAEH70Apgd9Z5xE%2FYzp7cSk8nBx56N6hGi%2FUHIlUouUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBeTGYvO1okpcjHxPircA%2FkPuukEe966LO2k4M1Fl7snMSTfxI2MDnMkAzcCHTUkjdBL95z2qcXhF4bTxO6m9%2FPOESchka4rS719RXauicoSlk0x8G6iRu718uTweD%2FCmuGJpP7q%2BpgI1QHQvO0p7gTSvqXX6%2Biy1pHfp1FBQKFoci2YUfEFmREQOiDD14EKWEPHxdALlxWi7kxXAwQOMr8dpwAN9%2FIoiHkcRLrlHHmYCpZCenih9OPXFoRTqTMU8jcBTpQWx6tUq4eH2JABV5K%2Fu%2B7kZrmAnruHfBJ9OAvAuq54pfi%2BTM84%2BynnxR7Bhx2FUblrxoBma4NFzjnp3%2BTwJv2sqCvg07eeKKZf2qr%2ByJjEzyD%2FvEXO2jpGVDie2Jzz7Q86P0cInUdo%2BuSG9oKlgrtLlWBE1qCOC%2BrCAB%2BNsaugblTYI5yhtp%2FMoKzUwySV%2BaKMAgJMxl4%2BsoJ0kVQzE4BCfIWJEiJW8h6J4nRYdQ%2FZ4OXg4435pjktLNM59%2FWwoy6ERVdePNaCXtx%2B3faGdJiIAqOFsrn11tvBxoiPFL8FH2w5taVCPJb%2BxPPyVl5FCH2OZCS7J8kTQ%2Bat5lugNCefSPZ%2FLrtT9tXMM5%2BPL5AhdlV4JEPtXEEUAtYkdqf186S%2FKKyznjT6MKrm%2B8EGOqUBmFmw7mPtFUYryddW8s8TCWkAPl5Tk%2FSt9bAUiM12Q17%2BreErF4ymxW2psS8GpEWdt1%2F54BAGeH7veuEpuVy5OJJt9ebImWVueiZyPCpo4pHtl1l47%2BDr4CR4rJCa8cv9O2Aog9IF9DVt2WL8FvW8VwOa1UfnoReuLi46%2FBglZsDc0au3Zlq9fm%2FghBDaVuGHN%2FxlINuoH6lbkQGldf9E%2FTx0tGBi&X-Amz-Signature=1be7902db6fecf0bc9255341a3fd534cfc4ff5622747a57da68ee0b1a44951e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPC7FN4%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIDJ4duVYtNltTTwHgURvevci24%2BrX0urCMsMd3dXolwjAiBQTenFQ0K%2Fgh5NTbIeXksx5NCqP95pC4mZ1GNK0jXd6ir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMAvBCgu%2FniFXctJioKtwDheYLket%2FZhJ7Qr9ejHu%2BdIQjq9dhoHwcO1MtxDMbB6XLwozIYuyj1j%2BhtVynez%2BSDB7j3gyvJVPo6yHgDaSvh3ir4bHdXi%2F5aKcDxmtMYnCPzjqiHZHZq39cvOpeCyWFOHha65LkSH3zhPxYpEdL2W%2BWxVxR2CWLghm7jwYAhIBmx9GkkXeYrSC77nVpgdo42PwLk4eHKswQyDZSeoKggd90u9KmyOk84%2BPw8tPA2m1CA5m%2BmYNM%2BZvfx4TOcJHgYAQxo4WWlQfql0pY9OB7dAEaj3M0PUkcokYgahze9%2Fs%2B2AnGmnWHw2etbDrzt4JL0BwTseSY0y2wsq6Z2xKtN3mEPd5UZwGNJwfBMma8s8Cdr3IZK5xleuEJr4GX6xd%2Fsz1ArJQDN4924g%2B3eDb2XdtUeLHoV8WMi8guBrE5iwfKp3dhg%2FjkO4jF%2BwuAfpvszfLOHYCZcUJEO9VwqFgFgHPJmNtl0I0bxrz3%2FFwbFqh1fg4N%2B6F1tnW222MCp9aM3uheCYh6YhKlDP15dyIqaNNlgQUmXgAiszzEmX9cnJkC6GXO3c8PRwJnoFoiJp1AvFCbGbAZNuY78BbyjRQ4%2FlrmfhkADvTPboQT2nm8IPt%2FZUPQ%2BleNoe4aM1QwrOb7wQY6pgG%2F2UxPGuq96ZuYON2u%2F62xwzwRiTNBUl4x195TRMMxJ8HFDQW5crUwr02tVbK%2FB1fFawHzFhitkUm4HGZXGMvyaJdwmVk2lufyvtHZxjK%2BRLR8%2FOIzWbSCn3M8%2F767X1dxSbH4hAvDuI3kz0iG7azEh3ZFtzk1VpHzhRnXOPnWiJLl7oLtodUl3R45yEIFmSj%2Bd3IALE%2BhuOJgnif%2B86j%2FxryHmyrf&X-Amz-Signature=170241a10ac193b31749e1718e31d8e616be1acd0add5831a9a8f24de87e6cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
