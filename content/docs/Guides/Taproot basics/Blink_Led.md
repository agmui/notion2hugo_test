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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZ6EDOM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDMA2bh9sBtY4W7ZZpUWLs3shmAlMaXuzUAu1BFU3l6DQIhAJ3Psgev5%2BaBhdgYupuX0MYcagEOTVI9Hm%2BS9P1FwEjBKv8DCDEQABoMNjM3NDIzMTgzODA1IgwmfOCAY8gwXhRHldoq3AO1WBUuw1XFBmXQ3I7jQoCD79pyQx920%2BhyvacUKpIRqhZ25eMmUEr4TXFpFM%2F%2FEVnpmvzUlzuo%2F%2B0DBS4VohS7LOsnnWbpBxemPGdMk1UQPYxWOrbklbg5XVblQ5zrb%2BuILlcUGnVvJpp9nJ0g%2BJgRGO0r%2Bqlf1knEmseIUNQ2j%2Bu3LkgXxXGfkoIdLLnF7MSI43SAQ6bZznQLr3Te7oZ1evFdr6pW2qMEYgzd%2FJ6Ik%2BudEXOcpDLjyDY0uh51KW4n0hmyKU4ODQGEF448b8lUE7H9k7qaTrp%2BHxsmECLSfK%2BYRuTl7MRwcZtSLzqPEq5%2FhD0MyOPif1J6j8MiqE%2Bz0JmIo7Shmbvdiya094vMEndfgkVJGINFXnKvqE1n2HCi%2FkOYDzgk%2B40ytUNbh0VuetaQQPd%2FXdl4KSiMSjT2x3BKkpjcVhe7v7bON9bgEh26wpHadlWFEXNR0zoSo%2Fa0r6It9wGLAjo4RlqmyRVPeuGN1hMoY53Gp7nJ4ca122nbJ%2BevfpHfa5u50rX46oxNnmQKDeWHE%2FmXHJTdfsdsvcY%2BIL5vLxdEJWZgbQnNO%2BiMUiK%2FnkoNnTAjEckTJMQPo0Ni0sA8HfUk5j6AZJCihMtZGdpwkV7Z4PA%2BzzD4%2FszBBjqkAenj5hboDlibVHXwgNVstEzMj3lcpXuHegeMTJWJiN4jIK7mFbKjx6OREHX2vjWc7Vv3YkNqNgHatBqcQduhMRKlAwHp8LYdvFw%2Fk5%2FOPY9CurWxBpNViie%2Fc5e3sW4uUcuOJKpY761M2BjmwrEs6L658mUrxUJXAisQFWGLKwqn64SGmgELAjzG7GyukWtq677WLO%2BD2skPbzMoG4hRg4TT8CDM&X-Amz-Signature=4dde912710df7be985358970da453d9bfdcc82f6bbb1b593b42554d9be9087d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2PMOGO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDeI7b0VD241q5%2BW9Jz3%2FD2xsnrTKPGtvRah374fUbSxwIhANrOQrMYOPepPEhAPb5Zzp%2FCvOhtu7Z2WrmIgzlfF1iqKv8DCDEQABoMNjM3NDIzMTgzODA1IgyEKzv%2BO2Cl%2FZtnWU4q3AP4d8DcRCcSMPp8EPwfKZf%2F%2BHiBzUAIAoTu0Gh0ktc%2BOuttfUGJ8IsOPeGtDmTdLuO%2BUUOqonwvOtGvhxX6sWscegcZkBCMqr0EW75oaiA61R%2FB53yLbdf5DyKh2rDp34lf628vtT64mFvqWslnpZwkm%2BgRDPmi5bIAqVoTM3%2Bq7SWtm6rThw8wqfR5GSlIopOvo2Sl3ls%2FaMT1HOh0gkJ%2BTdA3jxMknejlTW0Je0m8H56PseUPQH%2FOrVLeEUVZh9SlTLtuGWLSvmuG77OP3hfUCQ6HoknnBmHkyIVBQ8m47v5hXuCKJGy2UiEDBnPGXhKXZGVAMLUA15GdRs3%2F74WyUN7kJdyJ7hlmgF9lwrFkJqvRkxAKmMffRG8KOW%2BU7yN11lvIlxcFxnD0Pu0gA0WtuDRKEkuqhQC36PZx4ZtQjpw0M%2FS29DjZtnk6G7S0OFc0mOICtOBTMDBZojhGVg%2FJCnEoKM3w8BZPKaGZLi9uFMMpbvDsSr4jQ%2F878TXb8JoS3gtSiVAdWejUzChXdkAzzQbSGJXTbY1AUKI6sQkXcrx1jNfT2B8DhsyBlU%2Bt3U1Mzy%2FKGe%2BmajS86I77q%2BifhceeYRYJSIKRHX06ukJRI%2FEMZ5kJpRs5t28XiTD%2F%2FszBBjqkAcHcJ38d2BrglLIJG%2FeUGXKk81yBeTS2EfW5m9nG954T7OCvS%2F5PQ4PW3HKRsE1IsrVIw10fOqnRTl0JcIs8vL28UMx1AZO7Hc7z%2BU2GFx%2B4NWGgqfHsWw%2FHwd9O2Cb9y81vUKsNSzfLSGpxnIAABQGC0%2FTZXge5pV%2FVsDQqVqG0v4y70WdaNz%2BvYvlnsllxDP6i2ym%2Fgl%2F%2BLhdkjaolhGuRaiHg&X-Amz-Signature=b674c94225355f3954da44c8016a16eb275dda1aaf9e72780d00fe78b4cf9c69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
