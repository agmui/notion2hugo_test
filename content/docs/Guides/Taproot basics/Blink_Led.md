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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJ22BHT%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BRe2qd9okMiCyzBIaIhVDf4cDizQM5odtenahghBMJAiBaqYcp2IXU582Ymv3AEEF7zvwKi%2Fv8vCii7YEB8%2BChbir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM0WGO8H%2BRryRb%2BrVjKtwDxaB8R2rk4B3Y5%2BI%2B0pf7NW6s%2F0yVG3aw8b2cPWKm%2BdUkUogbBOtkHCJGJMqdSbL0pgbrziykpmWKzCEdAOfEcfVjb0usyae1PiV7%2FhKds3wd4yllNraEpaKu6v5JrcqQwv1%2FAkmtZqpQJVKX9Y3K9N%2BNLT9BUC8wkoLPcixihuz0Z2YLls626NeYXbffEV6%2Bct9KueHpY6RnQe309Ppchd%2BTNqpNhJzFYtC7Ar2rAt6DPKL3gX%2FLZ9%2FVICFEhcBsqNtRl%2FHQd%2BvPUuf0eJ0gtdkytXAmcWrRFZcsuuLPSS1z9zWy5qqAbW8VieRxx%2FlcAiEDv%2Fd02iNvdVfcUma%2FDTeVDRq8YNzZoM84HL14ES9IRVi0vXDXfYZqekrwGMedHoE2F8p77IcyGaxKATGEqjiPw5iFUv4ZL04IcntRKr6FAKclKeenE4n5sQtxXJyW9%2Fcsso%2FU6JLSBlSkD6%2FVOBPR2Q5hQpMu1mfoXyjIXULhhyhP0m2VSR0AS8J13tvp9i2JPmdN2iqhAvcCDCHMx%2Fb%2BvrmIWZAA98oLGycNUUmbVx7rTCL8bdyRtwgcB5SJp03Tcie8%2FHyR9qhH01hHbw9oT1ne4H1iM9RIlGnwz7VBhpRTCd42h3J2Wz0w%2FY7QwQY6pgFvs3fE%2B%2BhbNrJpA3qLtOg4NlrEWXK5TkmwxUFhuA9ebByQbMK1cGLNnNLJ7jiE2O%2Fq7nJR7S9fxZWspjtsb8Ev5PAshbq88ymKi5EEQSFISzsNp%2BUDtLNa9lR5TRpa4mq8j4DHxqLFKM%2B6yUdMjLK3EopbmCkbCLP4fYZHott5XkOic49TXfC3WCNRUB%2Bdw%2BfVEisZdyr6zEFw6g1E%2BR4Jn2X%2ByT6u&X-Amz-Signature=2aab28250fe42aa35c76e6eec4b18ff2c41bf7a5c4c56c550d20ceac44f13453&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYELW55%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCZbBrx5dQ0mHQY8gs0LArwAZfE69c4NuM4CwR7oXBaQwIhAJnn8RkaAIeUcOyMqR5CP1NtPyjUVf6ID2TnJGrOrCpaKv8DCD8QABoMNjM3NDIzMTgzODA1IgxVA3OVH6gXucLCORQq3APtU6wsxKymp5h1fQkZWSwlcIDeReMt6muKQFIVZQ3cPnQN3kk8s8aGzPge%2FrmrwuMEAd1OO6QG0P6jcldxEyqP%2FCyKVGunXjihrHd3DFSUBdouLljmUuywwee5Jo6mlPQ0aY6WYa4DtqzSN7KAwkHujwtPYLt0EYNDKWtD9%2FxgOirt554gLaAyasPNIlokMc89ifu8rEAVH1Uo%2FGzf0EEqazgkIV1bheBxO97%2BubtXCb5RgFa7IChGe%2BuFXSe4Ayt2vzEdNWHzwv1p6K%2Fa1RjxO6sQagFuma8OuD6MHoFfBQk45aPz79F8FkNVyPADFHfUlqgyoquPisJcMw%2BYcroB6TW9F6UGOJFdNt9CEZFl1TjDzwqHKqgtCQ4Eug%2BCi9BdF0lLK3qjf%2FKlbJxPw%2FMmZk8wU%2BphITSH9xRDIsfFqzuzO61FKgTK51VkOzVtcovSyqmOEF2xYy10452jc0VRawx%2BiAuaqUDrgcCj1CHZAM06wB3MsjBCNJntkS8ubsdWupeK5gzEO6amp6fLyl9JnwAY9O2lhcMKk8Yu24ambjNwZYiynZB2MdJSgD46VbiB6D6CdenHDDGG9nYROvZdv1eKbkYI3JcqvpXcUqppL4lOPlXDOT7T2r9jMTDFj9DBBjqkAbi0LX5JjD55qXTtEJdcCsdOy9TNX8RwqMZ8DWtaefbRLfKt9mObAo4jVqZc6O6odzH4Pxw2nrWBQ%2BDe704xsY4VU5j4T7i18hwu9bIfIwIFBvWnXNYeh50yXsFTPn%2BjQG0rZB7CMAvh6oo29YBSAOPfMJhDi3DTymCXv8J1L3Tv5mfTxGfRFlvMsiPoDZGoqkTqJckaz0mX7t8cI8Albm8aZgfz&X-Amz-Signature=6596c37274f7f599fcb384a7e61c8e66e506457161cb2030f757ec0bf142a81c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
