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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIYYEZ36%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDPowEVCVGnDEnE69VdOOxciKmGu39484W8McWWM899YwIgY9z8zGym5AF3Awa0BoILKthzgfHoYntKijAK2MF%2BWnEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGqMa%2BkrcPbnoVbKsyrcA8zVHPeWbHoOQLRI5gaLYNG45YOOiFjxCJyuLaIKg01CHj39c1J9tkttbHFF1%2F9D4U%2B%2F4w3Okz81nUudnpnMjeIC7QfYPbWZk2Y5ihtw86glA261QP5DLjhwC8Fw3G0LdjsNYkHZqiCyCj2K5pN3xKqKKvJ5vQXS184KYlcSbzJxS64kyr%2F%2FKwvDaEcgsPAU1tZHSJfxiO3ySO4dBI5PAWPfn%2FwHMaIytVhXtZZEahs%2BIguNCOb3z4oocJX%2Bgr2TBTGJHTtzJ7fw4be%2FXByW5dtukRrtYh2xY3Z%2Bi2ZFMIW%2Fg%2B6YIs76Sx9d3iDMVlNm9fcXwP46HvmUSQnZ3TKomrbBocEcGxSYQvyB5TDRePzrQvvuUf12vApzj3kpc3ApEipracLHRJgDfZuhZEyzC7M6DWSf4e62yJvTIY0IPQSkP3LGXGybv2molNEoUxCBLvMtilPsSChlYypkqZU6ma8qpet0bY%2FP26gMAL%2Fq5WKJVqn7Sdq2ycUwIXw44Fv7TZJ5PXyqepV5Miq7qWjhTeldVbC3h2Qo8CZUT0gwDqim1WeL1XhvoVolJt92qsPmJhwZ0RP%2B25bzbYZiLXkkI24Gj25VoA1Z8Rx8f7hvg9Xz2j2MCQ3P2nJetf%2BdMI6IysQGOqUB3s4aPVb7H%2FsLAGxqZksxSgFGaY7SLnxxkNBTG1vPwhy%2FPkDhi7Wa%2F2wfjUACzwSVyVaIG%2Bvy84nUcsU8GmX6FaEserOqbBmOsWqxAnwvaI9R3%2B7OKRWHojIIEm3tLiFrMSCj5MZxoGrA2gz9NPQj5CQAUsjstjOCR2%2BvnJw3B4AVuyowXplqE1Oz4KKtVWkns%2FrLANnt%2FOUzUh8mn3%2Fx3cB6P1Nn&X-Amz-Signature=e086e2c849162826f97b6b2ccdc9618969d38de96665e476519206a5f778b4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMHND3S%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIHJ7OUGmqQ2Vfr7yufkVC9U9xyhq1HlPj7Qw1RF7Rbk2AiEA7jVgZALjyeGhX%2BvIsI2WcBChNR642aFoeL5SHvK63fMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGSaF2%2BicWzviCntnSrcAxrKmsixypLebzrKoA8G4ZdWGrJO623ScC4pDW7NlB%2B1fBYra2tTa%2FQdrOINHjwVZVtlheLFTRuBIIZ5CL1AC5usZxb69rUAXurRgoIF5mVwVMEmO%2FVXHF6HTHgHUXJXkcm0l3hwDVQl39c7LwgMGPjHpWgNST6a%2BtR5iXBywNxjBAPySwWGllBUf3yGnL2DcPkKiB%2Bm5NfSk9yShC6hsUCbEaIl3zOwYZIZVtWcIzJDSHEWqMVd%2F0%2Fqt%2FCGkxVmRlLre9U9XCTfMddqxpyVHxF5XxViPtylGOtY%2FKySrL0xkirIe6l%2BSqM7biNB8c6%2B651Hv5B5R2dDt2ZH31%2BcqvWnVtl0Ycn5fp0NOqZCoqK48AhQv6UBZHMT4S93hGy1BDFrhvIbmyxEcUKoCwwROSmGzLi6ysyejRlUVaPtzbxt81jcU0ogBWlkbKAYb%2FZ%2BUgc4%2BTyAGxh7U1WDYGKYNOjxyd1SfLrr5W7Q0K3EBKK7zTXMUfpJt3scY%2Bj5TYDQcUh5FdRwkyAsV9es06cqpOlnMWploTma2h6sSU%2BBgL1GbJcShyJEK81dLF%2BBsPy%2FC3Y517535uLOfGaaj%2B30Iel7Yqyv3UY2o78Di8Gp9AHnT9%2FqTsgyqf5%2F4QV7MJKIysQGOqUBdOtkP%2BnC1cgULZGjktzXVGTQR7tJ1J2R%2B82X8OKo5Oot79X9VAIFpR2w4C8CrPfCxCSRIzG3VHR5sdwHBAF%2BxR9hIJ3F16S7qtRjcIC8WJgPS7fDqKb%2B%2BSqKTq%2FEtgQ3S3BwgMzGyHr9lzde8OybMMz9tVK%2F4qCtinKp8e8gYlPSCJFOI8jSDNM%2FXIdH7%2BXbMO1tN02ffFAasmyK%2BLVwMp5G1YpG&X-Amz-Signature=e1f70a09f0b11f4a12c4dd1c1f46a7c90674bb6051920de5a7953de9c4ea9d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
