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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKJ3F6V%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCfp63cfKbLOXOfIqaBVFKRn%2FzHJQvNPAvHnZWYXW9yngIhANZ8ERDGJWOZxvt8%2B1BxWmd0EaSytB7ypJAIqz8zZLneKv8DCHQQABoMNjM3NDIzMTgzODA1Igyk4JHBFO0NOPOuoXkq3ANA5Rs6KP9nmtgL7Y6XuTB7NKzYqIpV5G%2BVo2cpuOtjkO3lWLrHHjSgRpfGsya%2BrbKWubgnHHmC6XoUKlr%2BaDBIHrbJCgUPPnKGAbhdZzn81dfNlVgQXW5hJVRhQHakUhc6N1kiGZKjf0P3%2F0NYITck5lGKc7xA6Amrt4t4nSml6dkNLL2P9ZFPn%2BIxf06HKVS%2FfIrwhAALAacypTqb5f1QCqr%2F8WoTTU1ARQaj8OlrNhqJ6POfNNf6bJTqv9Amv8XWIb9Lupoc%2BZop%2Biri48MRQrvDz7xPGUVWXHEjYHA2BofJfaUwLtS5URDMOOT8I77MO%2FSM2K6FlCoyL2w3SkIDPOIMe44HpGDs%2BuQcr3BAeUsqor3gfNdTCg%2FIEa7brmFZmZqrUuEwIcHQWlyIaGtVA%2FW0wk5fbIggqhbY4MsNb%2BQraFzV9eLVkToryoAJFWmIyyiSLtT0Iii2OxmMszfd039c%2BlvnI2kB5FhGiC8dB1Z5IPh79a%2FPfgkWRz0y%2FhgKtixG3gKkzAEnO28OFtq%2FxXtqL0W2Ss62NjMAv0%2F3nBMBKDE9Mh0pG66bOBtUQWdQGJr4FMaZF2zwzZoIg7C4aVRc9gmdNEQIBZPFsAvp7zQHhz40wNqqw48WKzD3kIG%2BBjqkARxXHTcjIUWvhLUOYC2KUn3rwZDHDlnM2eUDuCmAjnt%2FkjKPHhtuo7EWOoX9k0hg7u7PEHgCl8ZkP%2BuKkCRZ1Fu0uBN6aGYs%2FSwn6FW3S%2F91lYmyHwt2K%2Ftk4xZfKV9IiXiWNJGMyX%2BWHqEMKZ9q2zDgPOvYEY8Fdg69LYdInqXPmHA4Kkpgkzis8wa%2BXT9oESbSYbAn1SjCHAYltWT9WngSmedr&X-Amz-Signature=98fba08a06900ea618bf49489bcb613db4cdb362e82d3a25313cf993b9022e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAZV7IJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDeRzgZLWPzCwSyuntwXrOgpy3etRwLe3lno2k4T4OSBAIhAPMC6aXutWfAo22SK8BQk2V7Pbs1EMIECD1ozR069MlIKv8DCHQQABoMNjM3NDIzMTgzODA1IgyE8ATtUq9k9O5WirYq3APdSgaJGd%2FewwEnIOQqp5sDuaRxo1kXmjc7Goh94uEEq9qcYoSX6tVHUBuc7UQqgEr31ER55wNjoLAmH%2Ftb69zSpbjxGbqo1fx6ImT09kXIgaYR1xcLyk9LILpt57QvPOoGB84w032JZctlPJ3uANpJVRpUC5i%2FXwrfrQ29ngvfN1aX0O3s9PTyjCi6zkzcsqzgS9NK901i5vcwMUVCcVnX5X%2BdV6D4sY%2FLezsb%2F4M4QJwLJSMG6f9oFw%2BA5oPMXrX4cllsOAG8DAMREHqa49tbzWAbcjhpAjo1p2mQ9n9j1A2jxP8mxhuOuW6swnBcBfIxUAINEZscF14Trg14AGYeJSWpDyjwdp%2BuXm7yTNB2DkVdgNXQ7YOxl1XjoyCrI8w8laf%2F9UrP1PtzcyzQfuXmFgugn75rHRkZm6yS02zoEW0BOZidOYa%2FuZSYcPj49GNcpRzMIKOhk35CzQqcRF7LPu9CPabygEEmfJy%2B1%2B2JH8ua87NByw618Ao7%2BSWtU16fLXVNj13CpHzCWZ4JPKOQ%2BaPn86hCqcFdy%2BciyRX4%2B38Ex66smRmXr3cRPNFx3FeJUupUg%2BzPWzBLnd6nGWCVEDSWpkOYgEdhFP8rqEZ%2Bubn9cbGFgOcf9SC2hjCnkIG%2BBjqkAbMfQZBLBOJ1YDSugZ44ZQ1UBcEkRxZZyj%2FmEqSh3rXhtGc%2BA65s8iIx9xbPUNO7Ti8p%2FtGsDs3lWEYP%2BYYqDqxIWRtDvd2GWw5sV%2BnX26bRXQW6ZQrcGh6xKYN5mdBHxeTjNxPE0mDMxht30rVSPMdVtuThpW4itecdwSTHWWxR9p%2BqMceRH5aA%2BpisfC%2Fvi1Ns8hKsaVWOkDs8kQvgWBAkW643&X-Amz-Signature=db009c7da3bfa6420a3877edc159e0a320f920c4feef925532e5e991a74466f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
