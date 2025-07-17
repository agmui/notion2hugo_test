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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ME7YZUI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICkIoX%2FX2SNmkULNFtKdfcoBnm9z7YWlt4r44tEc3iCSAiEAqnFHR%2FdonJz0RUP0%2FiUtKLi9xilsvOAb6d2Knqc8lwgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJoHbwox2PmhP%2BIQkSrcAyErfkmYDdV5EpqQy1L8FvF4gZzHh8HYB5fjY8eOmv5PBulmRBpKgQD%2BbXug43GOg3G2JFigOM25%2BbexyLeZSHsoE1o5Xp8Z5ovNmiK5yD8%2BGICxS9H2qxbLiCCKQbz4uCEVYLUvlqpbi%2FRx6a%2B1drcnQth5nfcVugwDGs3wk31dezeIbphD%2BAbrRTar8X2f8xZ7vpS8OBMQkObX7u8Ba2YDM8i31XacRbCG4m1PRuhM%2F%2F%2BqhRz4u%2BkYuPuvFJ5qgcFbCrz3uMdZeB3AdF19dTO0vMQvd8Y1jtplRgCrfv9U2v4eR9%2Fs%2BICl%2B4eoj7I%2BJ5Kd5jlcVEUot%2Fr9SksiQaRCq5rQU7vACqh1yKDFJ7R%2FVT29K1o2pmQLPdtb44dV6oYbQuPnjZrFJ7%2BCAZBLhpBPo0iRIK8RHgQ1HcX6qAzc%2BJiWQ4VLK5qKAUvLEGlnOY0njHX6Dh1%2FYTTxvtroQDkQiNSlRGyrDGotjkyAiZWG7aYJcypVccGv3n%2BKPSu2i5uireeVI1xzcmBZa67j81fd5z0JndfjfrDOHseZsQypp%2BoYqD8nGaW440u1BrL0y31SDj2aj%2BMe%2B9%2FH7wYOKOvSUmyzcH4KA9ET1hD2vuWpnbskSfQGWXSMzFlzMIju4cMGOqUBtdleID5o8bdTPjCWeg8gX%2F4ppnpM8ByUf55L6%2Fhx7dTc%2FIDPmC1GU8%2B0hF8hW8PGYGvOZVxpIz%2BIeQ5ac8qhee%2B0ZINWMkdRc7Jg62Yloove%2BCAQVgW%2BNHO%2Bdodth159NmCvim3HnZU3y%2B7Z6ioTpj%2FJ99TWY%2FyTK%2FWCVSEnCF%2BlBPnvgY0opPC9q%2B8Sos7LrF07E5mr2%2FowDXN0i38yRydXXpkf&X-Amz-Signature=74ff10643f397381ac5888672f2391ec727c49593366081da2a98839e3a094b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GY2SRU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCFA47Ra%2FMAscL%2F1xMfVN9E2BsyxA4i%2BbZL1BAVjtaucAIgCS1rn%2FxZAuX9vK5Oue3BCecng2OFKtep67YYA8AfG8Uq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCK0foN2CToOyPvp2yrcA3zMf%2FvSfEpvB%2FuVyh8rjjzvSuoThNiMk%2B3ZeNQN%2Fu8siDfnbZkP7wZswYAL6ZQjVnjYHzZ%2FfNk%2FaVZ8miWZ2W2AHwjY3Vz8na7D%2FL0gAharlhK9sTupTcPtNqljPIxner9nBX8uwGykf%2B3gxaf0h36I92HDqD02%2B3TsUCdlfmLOmpqwvtjUX2a3nzXFk4PYdtEAQFh4FrfP%2FXpRewl8Y3XCrZU4n5KiMfM3qc2Gxxu5w%2FkAbfzdCDsZUZ0WHWlF1JU9vCVgYru3J9uZkiIAB2e6lH0MrnKHGdX%2BRAyIEHSYyLCxzpky1UisZwzSlVq2p7wMTyMttXMYWWTX%2FR5QAjNhEvdYeW%2BYVQaRiN77T1%2BQnaXwD6WKNvVs9rtc%2F3MgHR9uH9NRVMZ6%2BJpBcEsRqGQ6uhjjEShYk8W9Z2WL0BEP1Bz0LUtmgUeUyTLVY84dQznGUuWOc5dLeklXGqySMniCLVekSJZIqCx9ZG1I%2BXcQVSJMT%2BZy01upx%2FBkb1wmTwOkGe%2FbSfIN5pQA2fgGAzKuurMmI2SAEiM%2BsuCvnrVDyQaViRcBwDvw1DL5fThMTA7H1SCMmunob3xMm%2BZbxNHd9l8TQ7wO6CULmRzXijRXBKCG9HcIRNp6kX4ZMJHu4cMGOqUBW6k3cD1LQxW2v0rQ6hJKShze%2B9cC0iONTIPyI%2BRJK8NqC%2BiHbOjbWOMdpKWMKS6xbyr8plN4F2P8ItkQ0OoZCY2ZDZc9zWpxVFx4y9oQM%2F4NPz3qJARdfLNU2mec8rp2%2FO6oh8x6e84S%2BzWC5LPzyMpIWue1A40Ykqab5W6VveocKpJCP8yMquWUONRBbLz7DbDG3I6Ya0SGM20s2VGUAsR6vAV0&X-Amz-Signature=938976f68b00ca0523141acc552ab40b24e800c2f1684ad703cce7a4a9ceac1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
