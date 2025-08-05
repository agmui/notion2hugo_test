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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662327XXPS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDTI6pKU1%2FbwpR3Cic%2B%2B5oiDC59agiVSkToCszmrpIMIQIhAIjZCq5jxnhCwYp8%2Bmtmhli%2BBjf%2FeMspGvwdCo0ZW2jYKv8DCFsQABoMNjM3NDIzMTgzODA1IgzcoxnsXYNhEIa%2F8aoq3AOknX%2BLu%2BlThCSFCl1WhUnuWMhu4KY9wkVDSDUa7H1epLPC8jDSgeB91DcuHhM2q0%2FruUydAruBoj96U3gibNJ%2Bl4VYswR07bWzwkEXdnTH65QVJEdY4HhUmQxTUhBSy2C5Tj6oVCmFu%2FMjh9ktWswrA0du8m%2BmKVpGFixEUGrE7pFN0GX4qaJV5t20sMqbZkX4eFFxa0hvixtGVWSogjpLmWz7rENDpSKqAW3z2svJ69HmoUg2xF1Gzjpa2UgjkPIJqGca38ggoHvah5n59TE1taYkQjPXbi1lvuIjmeIF0l2bEnTR8vwvtkfZcBEFpQSqO36ebF3GdoEcuLsGuVdFpYjOobum8pkR6Np%2FxuY1XjO1E9sdiMMwY8FZyWrRxuAyh5lrMFKtcnoVx%2BbwS8ftL1g9j6rPukA5IoQdNb5xOwFRjB%2FGh0rTgalCrOT0xU7kaEcFoLfQcEQzcvIOo84QTfNoM3HswM6uvCFZerEE0ZTqchAmS3h5NNTyDoOk66DyxM0TMMCmlFQTj6HEBdB6AIv0%2BYfGQhY2GQ5dPxEWUaI2qoZhrqxHjAfbMHTnsNQH8fAyJTXW0LEo8%2BJbxfpqoosjwdCFdVbxe0%2Bs2O2fJ8L7CJd%2FMiewL91nCTDLrMfEBjqkAYZ9mVPYxFXqj8V9h9FmoNI4ZTjeURguVz18Mr0O7xsaF4ht9sMyOQyfsFT2edrewcbmma9ho%2BrBZtTi0wux78vn3yR02g9Qqx4igKmrwuby4diAKYsYSllLXyo7GmZkqUzuIqy6kvtqes3YiHRMZ3EHhfATbl%2FByG5LsW3R23tXgcpM653azHEx5rJS%2F5hbpNWSXmSZ5ot08nwv2Ufj1H31Z%2B1L&X-Amz-Signature=37fcb0b24fe5c71171dbfafad6ee42a181127f76a7c856663022b956884f12e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU22HTIN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC4wWUFJDE51TaHoux0pQkN2oH6cDvUHj4fLic3VTiAvAiBJWvuwotlQYpjbe9qRfwA54c43vF7%2BtVNlQjwdH4o00Sr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMaJZhA%2BXNA0ZLSDHKKtwD%2BjL5laL3YipF1DOcegZsC%2BS3ijAs3YJgmPskqcD%2FcJtAkM6NFTfmcaNAIdfxA0zdKlcCeRgFt2DyTnfRXaSfBZwh5NvG3ruA35KqKuNMhlfxzyuXH0J%2BLAHEks5aDalsKjVGwMR8cGNVf0fqy20MTFckyJqW4TsjLtDeerGUp87QQ5YC97rA353EvjimQLqc36EFaFHs%2BvjRHq3lCEzNBHcn3O9a91mY1tFL1gIqO5E5g2KRXO9YPnzdL3yRLkdVf59ytaTgNQm94JYOjE35VHsN7hfjYZREShFvIbnrd1JPQHeaFOy5D61%2B3XYJaZFBFraGBqijyPa3sBXxn4xvNJbtskM6bH%2BnrBFr7C6OyKSlez33OiYLlV3e690CV6QyMMiFwCgFZHkSG%2BEfY7xEeayXtuO03vH2h81VEr6FH3V4AIrApXXpstWyeO6nGuyy5QLxJvERVdJtJDP6zxfgVdLRTQA%2FWEbBnk7iQiD965obprEwVku9mtLYTtRXNeGTEWQZ15JRf4Qw6ZIK7zpZXe4PAXil0R2P00wDleVjblPs50Yua%2FJ52TrEMUKBsUwDzMu04E2FmTxzivqhjoJtuBPmH3aOpTRpgFWc8MsCaD7sIvx3D%2BYTvdbfTrowxqzHxAY6pgFi7zlgNpZRZioc73EVNPzhy9u2h3nI%2BjIbYu9MpkNDP7JEtRyGMHWLwXXJDRb%2Bzo4ajTWG5pGRkeIkKL5QP89gSsU9fqTTFU62lOUvbAytedDSAR4a3TqRgEk8Fv7JceRK4Glu3x5px0DTS5%2BdHI7snPYv7Y9HCNm5Eujuwx4FFyAf7S5v71pYVW3b9cKC%2FbTUvBvKWQ3MpVw5HKHjzpEIVBsxSeM%2B&X-Amz-Signature=d42aa27c75b20a7eb130810d1c791fb9f754f9032ddd584348cfdd6bbb6330ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
