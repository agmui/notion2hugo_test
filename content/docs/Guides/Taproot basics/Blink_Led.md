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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIUUBRP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDszxU%2BqFvnI8EEHRytvq2h9%2BtD84zxlMhjWzL5II%2BJAAIgFOHwDBJ85lhBHQWYCfQPXSLmQ1KIouk3oFeMbCLECKIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUqa78srNnuH7qObSrcAyVI8DTgMLMezjo20OiQad03W62LPiz4bOPpQqtodLldINhsMCi%2B8Y6xGVt2p6vDKwEPyEedqZYrrdZfQd%2FLJsCe9UWzNLO933StFOmYWIe8S6vfoH8k%2F2oKC4C7ya8phhy43EIRB7h%2FujQhkcG8hEdUCiPWSDYGCwurOqFEQhOvbUCiNYTEN7%2Fqw9T6DFcbQbdMFkEvg6PZ9hcAAc8W5oN4Ab%2F7W2R9r4kCBNrc%2Bpms29%2Fv4Dtcf16X1lT2JJ5pgf6wB2djwV%2FCtmpqvDwfZT10Kn6omaKkVQ5UcL1Dx5HyIhJgYmcY7pDg2kRxbzh25NOcB023VGN3iGcX14EOBCvwYAbVFsTfE00Pjr0HhbHs0xgbfgqVVcRfeGDHs3pk4z9YAI1TUvF%2FYn%2B%2BpNeptzezah3DG%2Bzh2lXl%2Fg26YickvbW9560aUGUc9eSs85U2G8RqKogr8gtdvV17zGEFwiNr4LgbAC1IYd638ZSeTRckFl%2BOHyjW8fWsL5ebxJtKR9ZWPjM8GP3pXQ88V1saSu2HFXr654fuIWxv1qJmrAcpN8MgfPRrrnuvApJBVSSc%2F1vP3EnzOrYzwNArCHcQiR8FyYHkEqVKS02pL0cGT7QycVsmB%2FudHQNhS%2BTuMPne8MEGOqUBK%2BcL2xgjJHFxVpKbK09IwgqIdw9ik9aSNAIbo2QiYr2Hn95cMYP%2BWqZWEwZ%2FM7urHTVkB%2FS7%2FvpejOfc0nu39TmL3rUgJWPPF0S68b1t66nA%2Fm%2BWqZtMen9rbnbxSbyN%2Fsj5qJGFagZ%2BftjkkGNTlBBUFBPjqlGk4mWzGH5%2Bc2EIC0I2o994KYw4kayV8vUJYGyaeKxPUMdswx9ELDSBsyzPo%2FMn&X-Amz-Signature=6761fbfe68c98533c88e0817c25ea157a9686f6ac43ea71335b28469b3c0bf7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJ65CGY%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIC3c65npIUQb3NVUxPina5j5ZtBski8jdaMRSR73U90fAiEA8%2Fbs6rkMCtzFMd4WXCYJK7ewg6JJuTDn8j9dpuUTCtEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEMOeghjG8jmbebYSrcAysPbp18jDxqbR5b%2Fqjh%2FjO57T7V3msTsmCJnB9Js%2FWQDxZhGE8wK21l38NUOzwucX%2B%2FaMRmMjfdQ17QesZpS4afuMu8HeGEZLjZiGlnmk%2FhxotfCm3%2B0L4ONWCXv8BDOY%2FO%2FHuDiy%2FLKBHiRlVE2iCWZMN4p2H8KymCysbcUSlIMc2KHXpbEsTqHWAyHyIf5TKR8ZqLIZnhbJZodFsK442DfsWkXyt9EceYTCxf%2Fsr2oaMfQYJmL9y6GbgpPlRoQKnE8tHBSIXOivG%2BmNoCDo2cV95fwjdorWHaF0IzOmphBROs67kDsaWIu2PwhMykxDvdo2gGLHooDP6aZcYegLUhWs4lDVZnwq3oBJ7%2BqWRFxsyaijDfPAvRfULa2FC0C9lW1kqwhgTjIfe0TVIeNF0SwvDSvR%2BdLjupfrc%2Bm7Orhf4xZ8ROCVx4GxDtc2ESs4NaHcleiefuCQk7n3JDx1g2gynI23XoxyWmdSY5SDJ8BHcLAesGcUPtXwA1Eo%2BOZNupi0VQ9yJcew8GUF7KVUGFabvpGEuaTMrUuhpM216vxi43k80G3U8S9moCFpmSABm8gc45UVSeFlUWyd2Ngs5iw6kFGR10EAQI8YsQ1bO67hL4JIa6W6rPeGwRMKvf8MEGOqUBrTAZtjK12Qoy%2F1KMenU%2Fqtu4swzGGaDCoT4s92n%2Fp%2F4ibYuWpTT9zek29W7Dx%2Bh%2FkEd7jpJ6MaiIcIONzgz5DdT1b5pk8m2qKwykBAu79ew17y8Ih98UGxVuVtutPQL4Zu3c%2B5ww3Cv1jy4BEfr0XliXbwZ%2FmHazsusXvH3H8eqXRTmOq%2FQRm%2B4m4BrFmrjPmplMZ4tEGDNewKi%2FrwMZ6AySKrDw&X-Amz-Signature=b2de0d2fe5cedad87de4210b8efe0fe220b642abe60df846ad0335d4798e6512&X-Amz-SignedHeaders=host&x-id=GetObject)

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
