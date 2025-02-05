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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFFA7TV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICZhr3%2Br%2Bnb%2FWBNHqLjQKINfcxnCF9Sxc0RTUw7MQIloAiEAtgCUYCRc5Up5QJtNq3t7ven3Q%2FR4juSfW6N6vGryB3Uq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGfP3a0Eh5xkf1XfNircA%2Fj5jopXEJArd9wBZWB90HVZAoZUKzUXq%2FQkE1pt9LS13zDLBxKs9XUcFhmzmh4C4OfinlA0gpPiIb8ulQtAkf%2FB%2B9jOW%2BtA%2FTsIDHpy1r6SQBHn50BltcM9dyAXq%2B%2B08a779i9l4nIC9QQIDERYv9ROuAY3rC3cKuJcFygTDMOZwuqxoXZUuOry39gR8v7xlzpFrnYGaEMZoGGFLzkGBUtHjkgAFZr0lKC1b%2F67bVRegPhyvEDFgDazaPphOAO7JPcfa1hr4JAc1gcC9dpN0H36TaXTGo9y%2F0nBB3IPt0g9Nbz3dWddkSFa8xkpZGo9rQ0jXq4p8p8MCkIKbkZZFKEtJ4fl6uZRkOiatactAZWAFnAiWip8ijyoKhn7tnLuHEiKEg%2FehUZ5yRSjf2ReLKmS0B%2BapbV8cLwTBNOx2ATCnqR0z3IlzsqYpkbmO%2BHlRUv2RPWB2gN%2BtiKZMZtrlWgZjbaFW2rdorBRT%2F%2BU9jd%2FAzPMuMkANXkjpQkueATbQZ18PLLPbSdiAOZGbY%2B1ZMRVz%2BqjHUNaS23Jwn6sl9eDr5SR4nDeM8RIUZGyhdPUYUvA%2BoZQnMhgRb2RZIqSK6I%2B6%2FOn%2BGYsg2GhQfTfBL0BQ7psND1HGbbUWbqcMNe7jr0GOqUBtiqAI2mHJMEUVuvfpMgF%2BALKvR4C6DuTOfV6xWpYJtQumuLV7L7aCCzO2KQz8K8QPt3S9Oldc9I2av8e17TYYADMJnpJRnQ8DvMzjlTsuUNbvrAtzqQANIpPvLqaagoVJouGaxk4ADOh1IS30mp0dGMCf1QAG9elUVv5%2FWJ49mDtqWlk6rrJ3RFyWjLrE%2FDjAw%2Fq2sSpue3Wx79970%2BroJ7sa%2FS2&X-Amz-Signature=c532cfdd424c5c6c5f27a81da1fba383b4d74fcff6bde4a699bc5bf8f84451ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GCOKHIC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDRfpuED44RKg3bYVC51MPu9HkYECOHG3LOaOTSz7ynDgIhAPzMPDe3Xsv2g%2FNW9x11c49QK8aZwkxHi13ycmTEbwZtKv8DCEoQABoMNjM3NDIzMTgzODA1IgzcD8vHc6aSlWiasd8q3ANwYlfDc%2BcAZVCiJLknbXi3cCjBNvXjvk9yXjtgL4der0GrJZTTyPIlgTlwHqXnvCiqUs0XxitHLiKtb6qusbBegkfkBAMZ4KY%2FdeJ3qbMD0Xh3jDEM0G0Pb6ZlGFGzahLBVcTcsy3xXYV50W3QisV7ZKlyXZFzpuDGDzxA5WU4eninFRpGPgeoZCg1ZAfo018uJLridnYSj2nfZdkKmzsdaAlxfJdiShX3j%2FceHvM3%2B606PPWXELigtxzFQRM880lPM59y4uCnJWv2dRa6chNScQjRiGT6jhZeGGARlI9hUbNYozmjgEuLVcVVx2bWGTMmXmszJVlCdIR262pyKixInb01%2FoA3jFOEhOxABUXcyoZjRnYneM1ZwI0NN4slSnLJtehoL%2Bq5pPlQ2HQxIo7AMGd7AvE357ROuhaLoknHrhL37nwr0W9Et2oX2pUfKkIezk7dBM9C7pf314bdOwDjnR3AiNhfMqmVDDDDcTS%2BoJNC12%2FOlUXuP6OXfASvLYP93ZYJUhUVIGS4fikRFnZH0wCKmFQdUPmPNTNxlnf1A4jOdblACxTtbRku6rK7HTZL4uQe6pSKQL5uFBxljbSxBWWsdwmuqI2r2A%2BuQD1VQruQ2S7SpKP9UeR7FzDou469BjqkAWC7bLC18GBOdc9WwOxV83Ctwm%2BuCMKDLQKmd5%2FvwLd5ulQ9SDRN5vSVESR1%2F7phGWiawfRuuiJyLFeFVmRBwIE9ih2AinHnQ3a%2BcTXWbv%2Fc8RHmXzI%2FAlAJkNaUt6EqKys%2FJXyr09NA7L3cw1sXHyquP7OTTzpegTkBphErrNaOtdOZPk4qQZGGWe%2BtijBs6qDE6YZqM7JMaCEpQ861gQirw%2FEd&X-Amz-Signature=ab085deed0469ee0f0879c0f6947f28f5446d73836bdbb711547648272a64a59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
