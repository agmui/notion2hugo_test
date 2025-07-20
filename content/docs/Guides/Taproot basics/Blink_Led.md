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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMESCFEO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm1g%2Ffg4RQQMEu%2B9zqmoXVqwIYoL7usFjyvUIZo6YoEQIgXw3OkucZ4lTQHMy924%2Ft2u3nL6caG1waFFNIHg03%2FI0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq5E8AzFQTHPsfE4CrcA61Y%2FSQhxhrGqVvTdkMeu%2Fly7XBQk3Fuv8QP7UyNNWgrPHRinfGvoYaxT21Qn0qGWK2%2F20Vgz0RflPuRTxtgKJ8MXsW90toltffc8N3YC3CmbpA8hNLrx00Z1oc%2BOmU9TVMiqHpHymbycVheveY51ZwBkcCEaRbkpar1bY1BuK9c7sRcefPhd0Ln1LMaemWELqG2Jw1jG7Fg9d2oOQjw7TlHuhYnoJ41cwbaJztKmYwe9Yt6%2FCAfYf%2BELnJ3qIuYRE3tWT2HwiDfgvMkZSjp6CksKChL7F0kBwVqFWxq9Fp634II7U%2FO3XRkM6zvwBF03g8NA5wgEl2moGv1vHPbBk9uPyBIjA2p6ysuFi3cH5XX8NIjD4VrhNAskUooNOIt1EhwXo7DOeV6HXCBA69sC4o%2FAlNtkWMEE9EmZuwGdNcE3Fh%2BsnYJIAyKX6nMHR8XLbfOLjBRP1QdV%2BKjEfhfP0oGa8WVRDTpSFtQDWoA3GfpoUl%2F3DfM4auBLwIHf0oAkqksNYuxkt3UDLHT3On3%2B3qGSBvxjgfOt%2BK8OFrHx0L0pyZO2Sqg6Ey5nKPSQI6BhlDa31y9lDFIuSnW%2F45lBxGwM2GtETZf4nUUcAxAuKtFimGO7EQ3pd944v2SMIu48sMGOqUBFj3VtP%2BPzB2o1Dy3vPIyOOIAghq%2BLhdKj94SZLce3arvQUvYIQSMmgxxWjUnramXsClzrOrbD13aMIlVz04aV8%2FR6JyLf%2F7qSFU2L0OOl%2FDfnYtwZI0ceXWaD06u%2FfH3XT%2BM7kdpKBtVIsdmhklPOWpAdNPRkiQfqDCKseXb6JCKLF8AuFzqgDeUFL4zbDOxxhNNP5Dx5vUYVs8%2Fs5up4U1tc8bs&X-Amz-Signature=ee9c85576c24af72207fa3690b75b559b1d0da83778351e83b563ecd98ef4f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQTHBJH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4LZ%2F9KFEDAX39wB8%2BRQFY%2F0F%2BkppjaXmujH5kE2VyeAiEAmyeUkaydZOajqnAHJFy91w7oN3Nzh1%2BsY4etoMzrRF8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9jAj9tArpgcHJ42CrcA3WRwFkdtKbfs5Qe5Kau2a8zoZsArMnb4%2F%2BX68tHcjpenSKrnnSpmt9r93bA4xuIs2mu%2Bk9PlqEIJR32JViZMt86YwtZyhmPi8WPcMjNEOqCvB76QbxF6tpa8Nx%2F9RWVI%2BqUVoeuAUOX08Ic9cnNVrjqlT0inGpSSByORVdZVEHTbGqT1MMcb1LfWVgUz5oHEDVKzSFYQoKt9iuxPEMZ%2B9nUpYa5YMgrsVRPeL6CPZCVnNCpzLbcW6mtnMp1jTcKa%2BxJpRFw7f%2BFl7aIqe5VYq8VEUOIaCawpnfCMUED4m3MQ3Vj7fe7VZtxLbZBTuQRpho8g%2FrDuSE2gXJx%2FoPUYD6CFKI6EUqOeWyCpXKoeLJ8aqWkt%2FmA86K03OEVTuyKPdq6AdgKrmu4a97MY%2FFHU5NcluHIfoqAN2%2BnfP2c%2BG24wNZjvTAwFBIc66uhavaPLM%2FLOszmwEKdafr98a134AYsm8uwYCoyyFoYRFWiY88LD2ASucpOGD6T77zQBlebQSNun%2Fv7ZuzpwEME0Prd9cm8eBcWuLkY0DDrj9J%2Fzw4yUZe9iXowNJTaz%2FPENoLTwLVxZr2eseMQPvpvcK3PW40U84AE9%2BNlcvN7TVszqJ%2FELjUCWe%2FoXfo4n91lMNW48sMGOqUBwovqBBAeTDc76q88F%2Bn%2Fz8%2FGKtZxlk1TjUZs1hgl8mWjbA3AZs%2B3WrGLyVtM4XgZmAzPZqNPqOLh6JZ6mL7A%2FVlkmYFli559Y3ji7fVTPZkP49oYejlAnrnEbBt93lto7ddzXBFSI%2F1Cq%2B%2BZVXSLBF7H41BXnvCvsZyzmqCR7L13Sn5EmalgsmPlg4ffStDOku4IiqcDtV7M%2Fe1aRC1UQGyybjRA&X-Amz-Signature=2a2eb31d657059873ea89c8dc4f55382219bd832c50e9834fb0a5f93c251e30b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
