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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPON4MCY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9NyEEAxlYF2EwQfcJ6nfEoCwuTkyT3sFrMYsYETEkwAiEAxH83O4kshIxxeo4zIbtlSlfoW8Q9rPD0rT%2F4bu78EewqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHTVP7NSUL9feExoyrcA8DEIB4s%2BURUC1Nm9pX5eP%2FN6zuTSgTwTZTEowPOTGDLIvN8XR%2BMuB8vWss2nFDDWS%2FEp5RPgzfRl8Pl5lPWiIfeyQA7rw1wVEM%2BbsnAtOfPldnyl41QFfp3UhpvqZfu1MfOMUQzU%2BqaHsIF77UaTKU3uNd%2Bsq4U%2FBn88yggUTUSqk3dzCrtamfVcFajOs%2BnGjcN5YDeQfF8gMc3ToGxowLuCZ2Ug%2BlUTsIADxpUCZNY5MiBmpHj5BUC4vvngy5%2Fs%2Ben%2BoIyONQu8lV%2FemTKGdf7hsah%2B%2BNqPrTZsjq0ZxFguuwcLcJU1g9TxnxKnmpkpvlMfu0jkB7GNNsxJvYoSYdgdtCt8PuCdPfamarIr0lXIvnMXG7Z4OXBsuZdhNQ4iPoHKh712YYuejz1pd8XqKLdpzMG9zJEAKc5Znz%2BJW4LMB%2BJwophWBL4SjyzEqvYaepzVd6aDRRSbeMzRFI3bvSX1xYrL%2B6jmfBwqPeZIrrzq9yGQsY19y%2FfT0no%2FHrXOmB1DrEVw0AubnxokW07kyY50CEkPCRIUHOza3SPCdkSM7vUbBJMAWvmf%2FhXGj2lAwogVXw8UqXvyetcPQDFtKe%2FNEHRBp1HKPE3nRM4CNYNBwa1eZ4xnfadKFcrMJ3H5b0GOqUBrDMKUX9xNGXQm4jso5kQeKWbYElPy65S4PwFit3jLpMRIj29iwQLIhUY4vGgJglEN%2BSxMAWFbKLeMs7YOO%2FTy2odpjCd10WNu9X68rdcLtTvspJalE4Te6%2FE3BHIEVq0h5LYEKxfH8s57DysRdmOfxCOp64%2FHh1w2UfBwVBClvKl4OtYMODH8coEzNSUH%2F7cSfc64Bp0KS2M1QuQAOOpHpc0kNIP&X-Amz-Signature=6fa7b29b2b0007fcdb725a5c21747768cc518f850aef4f8e4a95e3949b59526a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNZ7AMGN%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFC7Sr6Dfk4P%2FBDK7WZ2mQShz1mW5BZBZndSAjJoirIDAiEA%2BJP6hiO5rfO%2BTRLyotScMhpulFCLklhkn56LCoalM5MqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPu66dt3luKXCfvmuSrcA3WwDiBaETAfieS6lwnsPlpgUINN7SeOz4Vcvlsyds1fX30FdrTFdtkmcFxvOF2lOPOWw8AlM5AxmoLATEnoIKD2c%2Bo%2BMgtnoJRfG7dUXtmWmC8kvFUmrUW12N2psfil1%2FddJ%2BJq7rQ6y6CTSI8YnBrWYSYEaRC91l7Es57fk%2BsroePdHnAvycwrsmv10B1RieQAMSetO%2B34x9KYegSXis5xvfH9OnXNJNp7ozvl9zgOEqHpHy%2BVQbYyG6mk63izZ1ruQhmOpf86m3B23Rw0%2F%2B9LVIh977NyoEJXL6q2ljDrLyPNT19lxhULE1M2ow0FWnIV%2F7F7AVOpj6e2zyRLHrwKHSjlvSiFhVOtQU%2Fr0Z0Z%2FMot5SVCUXb9Sio%2FT2TJKZiFsTj5YQ1G8uhHqB2QNKrqXHTDDDD3F%2Bw3wj7WvHB0X9XJNLrwRuDPWjD7SqcsmwodAAIM8R21oghwAY%2FYU7GICHDvg2A4OdN0FaQxqXwGdXBIIeUsH7mF2%2F6731uros%2FZCmnYcKty1M8rvcatx%2BYHGbUjg4vyHSQMnJRcKlhQmgxs4pUofHUnnPhzvbXCyuYamD%2BaPTdvIDjwaWYiZjNtzwjRfi5eUuYg%2BN9UummcS2kaQ6EBJXjBRGAfMM7H5b0GOqUBGuD3UaLguaQR0mcyVEXReRXa68xTsKQsYSOZxZ4c06%2F726dBlZty3XfP51Wu1M%2F8DbfDXHqsP90FGnEX3ao4QebaalBn82n3WIwrHyNG67Hh1TeXVqboJmD4q4UOMh1LDPxrIoNseQVMOc35wkcXxQJ2PusYhWZ%2BqNPdFC34vaWW2CWdi6OXz3jX1Xu6%2Be2nqcmUN9Sym2uQ5HsQN2zwksk3i9Gp&X-Amz-Signature=cfdc19a47d4f80e98842a17202de43a8e88f287bda4a4b99c622f01030a1bf2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
