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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5U2OHP7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFt4IKGT%2BjdMFAdqYKA5WIw6YyL%2FqWmqIYYp0lSOhzhZAiB2y%2FWiaL5LgvS6uIQ3hHNEtj%2Fin%2B%2FAy2BJsS%2B67YsbxyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5Uj%2FfCgcy7y3XX19KtwDgRGKKDxNpTnCLh%2FSTnySnlqomfaKGTdfyZAUYFuS15%2B5llResxmfnSUP5tvnfOqFohR35BhV6CkEiblpPDslxYB9CvNKGSRtmQF6oEdMmzxE932fPcfQWuVuGl7WlnccAgPu1FXesVZjBH8Y4d%2BUAoytEvwTDmywnCs1bKPWjD6qQQwHlAM5XWT%2B9UkJZOg2SVcO7S9ToBCYp0TjcuDEX8HikLGdpHq7vJFLdAQE2vnkPavUez09d%2BOsWnLdQJPZPhmzd51RDH7QC99cd8VW4oaNF1uWVLL%2FhP%2BQr0MACaF1PkuVnOyxOtRjdp1ASkBumLsHvxoKMBR5nXQNf2coHmDWL6EdAmKFefKABWXSE4GOeWl%2BbDVfE4X4aZ3u%2Bl7dm71OrlgVd%2FkfDbYuZTEHprZRxyPL7DMoQ6cd5JacUiVP59OsfoWA8R%2FqxScUSOL%2BsdGGMHsjJuCwrAoz69%2BJV0MRvpMNOkJyMwhf3urE23yQpfBd26Zs2Zs4uorod757BdAciuUkVaqhbKMhpuY5lDBSay2liWt42n2CIIr3f08ua2htj9dGTtzI9GuRTcP%2FKiR%2Bl1oQ1RGJmYfoL1wW9whK00OE4TZEGSTdLxxlocuyeq%2Fypr65BW5ovsAw25fHwAY6pgHUKaS2RzZ7F%2BNaUJQPbP5FjjgF%2FbNyIiv%2FKqf4Dsw2M1bB%2B4J5ReejxKfJDIUS9z7dy%2Fio5nmM2jMOsHN0YDJ81bggmYryCyO6FbHr62qBcjCe33O6Qok1dBXFaEpSqT1lsuI5ei6uC0h6%2BXT6jEpceb%2FO1y9B4J6wjHtNeeC8ybIt3vB4Ctd%2FDXTRmTbIpZlvDEOnKjNGyE5QH2pyMoMbkkeNOFQ3&X-Amz-Signature=37fca2468d28f3cb009ef1210e25b488bcc75b2a397935d8f05236a62ea07759&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHB3TEO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDBzTdZXKi46VxDtKW2ekKb%2BLGtq8CFV0Zx5AzFbFnSoAIhAPz4lO2ImACeWNswms6DeqLjv11%2FXuw4LjPBGxl9OqXoKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoPAOH%2FzMy0b52tycq3ANP6sTDqGdkwwqyZRmh%2BCd471T%2FoIR1S4qFpmq1xN9tG3ECNGHQzjSauJLe1nJK%2BF61U5DacKjTc15fuIyagIDuTAHNoK3vLuG5r0%2BACVEhCMPEeT8%2BG0Ha7wSZONKcMYMUl55YMkyZxcMy5fejteWR2784rEXrQsumFb2KItaeK2qiXNTiRUdeVxrE23WaAtcI634C6ot6QPAAq5cNb%2B6E%2BF5Utblx2wBun9Ehru2MhugUnbYV22gS3JVVw1XPlHeruNGvt6g2fcaimPB%2BXR7rQTuKq1iDVrmYDe7OwYdwardr2CUQ2xCPIPHoWSh4wupK2nD2d9y0CFMxb2eeIcikJTfetPXfb4NitygcLbwN0neG4CT7ApZx2lCrHqSpCNYo8Bb8h1xdczr6%2B9dZdEhNAdcj%2F9gwCzun9W%2BVSvfohtMrssOrIFaAFP1xHbA5nz2%2Febc6CUDfioh6Xqe2ZXBJXmXFYBDlSvpw3Z6%2BZ5cI0erfUOwKAbQCnNliWh4hVieOd1%2B6NSIzqtiHPQV0VcV6vxd4ICImnPiVeiIEquYlwoqrjO0afOGsdfQ%2BpvcObzEQvWBtOPZRtxKXzyV%2BIje4V1P3iWonqZBCIT7goaS%2FDfc4aM4bZq2WXSUP6jC%2BlsfABjqkAaJmVXiw8bJCxNtgGdqkK8uAGqcrK%2B2g%2FGAT%2BkAoRYRVsk26xgChwM2nYXYwfoj%2Fhe1LN5M5%2FT1QfFe2ayxURrAxmS52sqj6q6qV9op8cjh%2FX%2B5%2Fl2p07%2BhgXmzTzCs53Gf6CDHe8xQP0z%2BuK00sFNu3DdvYMMKR3klaHZyVGhu4%2BDVhygVPeQD3b0%2FeZUnd89WEttClR6RLEtGASHNeQIkB1D8g&X-Amz-Signature=ac8afd9ac32fa0976f620dd2ca03f3643a529ec6a05aa6917c0187afac27b854&X-Amz-SignedHeaders=host&x-id=GetObject)

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
