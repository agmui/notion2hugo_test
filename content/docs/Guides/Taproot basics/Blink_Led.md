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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JNFURAY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDABAUa2VWBbnj17RwA3Yx2vJKUz3IkQ%2Fc5JPLX46t9eQIgNaaHAjwGL4CWaIBbGzYI0WW41BMBdbYu22DLizzxUvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDC0dvY9pha7dOQTcdyrcAyiChZ%2Fokk%2BPnsqXWFv15jOvwWXqCvYkoQnz9Vlnk4Gcpf5RKxs1SbcQRjGNVCuGiV6rIQ1WwSb4KHm%2BD3cX%2FQVZuTvYsGv7XT5VY6Ao77rGTBO%2F9bgnLSmDmTiElfXgC5rFGfTO%2BPSgWK2QI0RWKwt%2Ff7hBTRAAVhqMN9y74so1Jfz4X0JPhtnrp8gol6NG%2FnFOk1l%2FJkyKQDw9azL%2BJgbWcTMjB2BXlsqd1V7MXLY%2F2A6MIH8OsjQDqOd3ludUllT6ZlLub3x%2FSBMoTBFOQ7zYOzOlwz2RPj%2F1gmNZ2HXp8wyQjErlpNVssMLwVmgygXoI4urcV1SAoYacjuroEdSrg1hMQ2SHL17Sy%2BDSng5GLrVzc0t8bvIYXlZt9stAcGFYUrtgSE0%2B5mcSvtSV7PrYpsNMwUPdnHJP9H31Ve2UBKWrCo5BmMTHDx39r8I1geXCrXyJgYUKtOS1M6gXJwmgs57kPQY2IDQNqIbh6uvaj%2BrkMdIrYXIUmKFTB9DXPIw46B2bJg7JDGMFUDd%2BzieAKGgfDtnjefFQsPiIuMBLd3j0vRWp%2B556P2cOwAGETC601E5jaNu1BQvGkAXOlc2FHW%2B1qcr%2FxA1IEZ4bKnWxeYThBRlmp%2BnE5lgeMLb6jsIGOqUB2S0FubFCj9XZZhjh36xDJxKlbo%2Bpan7nZec0ZGvkVXBPvtLhTfbPX19Xynkqn6BoUJ3ymDi2wpkCuyHz2pPPP6WZbt79iTQzKl26TnnWo1YA5pGsO9ABgUX9eYW96YBpx4YPSTnaBNNgtw9v7UrLFeU%2FaM9UxPk0L3LIyV3XzDaAwypkaIgylC6Fu6ZC8i1kHsM1w3Q6%2BWSfL8%2B3hudpiIdQGVSo&X-Amz-Signature=43ef8911efbfc70a77840b09c6b25a75186fd55337ca464cafe55186043c6994&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMRVR4A%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0KQ0dx4J0pp6J%2Bgjcj6JOCyZms4gM%2BpFtlfqg0T%2FCUQIhAPDi3ZgpVO49OVL6pOGsB9g2kxm9XCPDzhIrDJ8GmVVrKv8DCG0QABoMNjM3NDIzMTgzODA1IgwWbQmA1pqtELubqywq3AOI%2FhAmR1RVyFACPNCWjGQNc6oZpj1EqEmce5VGXx7i36hrg6fICcs3mXj0fa1nXtjybulZYL%2FHvBAlDiL1oDL5nHK%2BviPmqnMGmhJDPfNX0UPm4%2Bwv%2F1eCXY6Ss%2Bri4I0%2B22sHHXZvgziUF1buVPu9uuKsJQJQanfiKGoHRRzpmRirWI0Zjm2T8YgZQgdlwQtlDEA%2FoTgUJZn15%2By8dlfZ%2F%2FEzy%2BcbVFxQEbS5YqVEzR0Jmv2SE3NGOVoaK7HZO0mZz0GEJIZTmdU8qcVhOAe%2FnFXPQaXRp2je%2Fu6mKaKOwk2G1TOozgWHzph8zgCaDGVqnDwX%2Fx4EgePeURwlMkfIPMr3JxLCEBTyT9yTjL2ea6bxjWlH0EYuaxSMKp1HAXO2kZg5%2F5BqGZqGjp00QAxH2wk3JzZZ78Di6U5QRH8FjscLmFMu8oIPeKLx1RxGZhwstupa9rgz7ZtiswyPgjIXMOHHGnuaWOkDbXY6kL6ADvKiVwI7epqiT75isVZ%2FElngklOGCKoRXU5ahgLDFEgyusY6IKVLdBjYDauEhLuzWA6xo7sOZoRso8AH9MYoV1iPyX1ytzw8dxpVDyT4%2FLzDIEW9tvHzI9nPVHxSjOA9tFHG4MD7Yd9psLnxXzCV%2Bo7CBjqkAQ5rftjItW5sQHkcZWYHbrjlljDJksuz1Y2WQ6b3oog0UaMIz%2Fl%2Bgzb26JHI5UbfqGTjMgcCzTcHsmUTBpwFgDdI3MCT%2FxLqi6hM3oYLdSiHFj7KgG6FSOTukkIBzOvRc%2BK21bJMW%2B4No7gTWQGP7IVZ1VdWxfh%2BBE%2Fxrb7l1EUHj%2BPm12iTB4p6hf4bAh3lhSx0f1saNCXsYu%2BlirqF6Cd9QL3G&X-Amz-Signature=8e8186c5e2c09cb22228e03c4390fe40f7a18a7d4d278c87a27bdf96baf97f42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
