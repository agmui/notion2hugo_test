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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T57FAQII%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfh%2BdMaiYiPTOgSjj4rLu67YMraSFFF1zTEdzvemi5RwIgcvAmtDArF867IM1KvvmLZyIEIz1vE5%2FKKjy4SnPMbRwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWJE67X45BRsQPPJyrcAyfbU2Fvki5GLu4vHBMVV6Eb%2FaP6Vgs5fLfvf6Thj%2BP1YuEU%2FbLVHjIQIKhUuzAV4b6hoE2QPtqUiZqhP1V79hZSksfmX6DAH45pDlHoTc16Ih7%2BBs8w%2Fob4grc4CauIeXBqngS5dvnCi1KUj0qlIOxqqgcfEjzBNnmFcQfWiaHfCppbssXanrpv56XDggW3Odu23XLlxFxuAC%2BLR3G1XOK6jPHljRauudrishFNNsmNTkQn7ulMM6Im2804RQANSdm59JiSzYueQ%2BxT9S0RTjbas6UZyZiTOs%2F7fGyxPNN242dOhjEN3pQKRiiaLd4R%2BnEKwI8Pc%2FyE1V9NTxUsEekFtoqyMiSK55mCQEMaNIKdo57SZJCDWqhQ59RBTLONZNA6WHLTfCz3ZnhnHh3YAalcZP2Slr7b9qLfgd%2Fk0KGB%2F6d0B62qOil8KWJF1k7h4uGrg4YQpmwah0gDhxZRLB2M2lmQgeXhNjfyz%2BuHIAkrBmkZvM%2F6WNdcVgOKvbQWQrXSEfLJ3boBwnY6XUr8BDwKmdGRswmMhyaZIe7rJFrcJfyp0hKCFejWqP%2FXfepUmom5KXMMU4Xlc9%2FCMePP16fS5u6zjYOAiK8NitEnn%2Bw3cFXl8S0GLixTek6AMNOtysMGOqUBebuitqeWVNcGxq%2BH8jY%2FAHgC6GWySSHhKEaFQI06oYstHCGtpzW0dtZwsFHqh%2Bhi8IlA7eeF3ON8xeO7fhuxuR5fUVtbCz7pEKwBvlK9r7i9u2MaIp%2FaFdW%2FiauPiwAWx%2FJY7bxFMpl%2FR1Yf%2BJs0oSGuByvVbBoLbqmnV9J89pok1nb2AYi40vRVCiU7Oyuwmxhh%2FtSpPlJe6fS2kjWq97aIUx2I&X-Amz-Signature=a32bc8eb3f51cc9b3d19a9e2099157660c5ffa4bff47cc7cf6fe40b6adf12b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYGY567%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4IHsWiUJa8wYBpmOtcFxO0P91xtweL78Hl%2Bg%2FVy6O0gIgVHrGUWitIFKFZTlU0hbEkUlZ11kE1fS7DF2Pj1uR9dcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq3zxNtyJi%2FxTdhQCrcA5ZDsbEb4a0weKWwvrgRyziimd%2FmclHSMa3GlD3Eacp0U0rHkQr9fkFb8MduNvdnQBSiUYgSm6avXBRvu4InBz%2BCUQG5Zz1s1Zg%2BECBTIhUoz60Q8L1YHEM4KH24gto1ucZZZYkg3gyWW%2FcO1foYCl9VoRQnC6%2FvxLSIRHTRa8frVi3HKs1yMtyiDJsrPoDv1IZvNsMNaI5lHGIWs0tBCbJnccuTiRlnsxRBpSIZXt8LamqWWD4QoPUZUDT19ykFtr%2B4t%2FhJVcmJ7HYvvAqfLzKHJXp9MUydE7YQWI9DEOMkYFM39I%2FqecEmbUEOgq5iCGGxkzF%2FPturIM3wQQArXUBPf5Nt%2FZBSQp%2FI7R%2FdurgVeUg2igfbk6SOfvDARGxZKoe69jp63%2Bs0H4mFsH%2F9gClC5R3kms3r2%2BPkDxWLkh96vOvnN0KOlW7UppAlxb%2B6sZK6Dw3h%2BN3sFZ%2Fh8gmGTTSFd15wIKIL%2F1I4%2BPuAia2IUI%2FEgK%2B6ZCmFtrE6HcyflPslMKwtgx8iT%2FXCVD6ML5QjmCRDOsKWhxFkF9%2FRlVFW74EYZfY%2BThn1hfkE2RMisNFC2u66xheOCeXSE%2BZzgh5%2BESITaIO70KHIAUsrI%2BkB%2FTEgMZaPv0sJ%2BIizMOWtysMGOqUBpEu8kwJZTxu32MfI05CgJZYxfvrqWXhWhh1otaBCna0TY%2BVuMYFBCZ5CAOjiV7zFz%2FcMNiD7Xyo3xwRr4ywcDETd3tE0sb95UkrjdsnJf25bbAY2XJaIOp4GiCaKtPQpNMY4nW%2FIye5vfjR5PLtboB44e2MOBRKHCQqVm2O%2BYSGjzzblEC33B1Yz8%2F28ulbM7I7csizOtXVZMro6i4P5rlFeIFId&X-Amz-Signature=13713aa1a991873e25668200bffc2683924e882ab383fb449e409b4ee55df29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
