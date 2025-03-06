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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EQI6656%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqwg4GMeq%2FGygNL2TTmUJ%2Fi%2FBOTaEwNZL%2FGVLaAjZi2gIgGrcMYEywMQXUWjq8EJRZeAhseMokxDvfdnNXo%2BkEU6wq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDO3PgFFBNjth%2Fs7oUircA3TG%2B1Oi5hgoJVpvFdZAb4SaueMN%2FoSRaQLica60u5bX%2F%2FK%2Bqtuz2amrM3mKg6UXkEkvV4gxAN9%2BaKDrBpONh2SBepywXOHKApN1oKszOA%2Fh9jp8iR%2BPZMVhJFC%2BOTuU%2FNTFf81Wmp3UPDwmkXu2YrZD2agpasAazQhXVrDjugEDDX5psFr9O1yOmsSfCKhUyMlJYwY%2FJyr7xJmrUBAVp2t8OUJlTH2QOVisUnSEvS2AtZabSbm9mxzaFt6tUCwY29QxPSG%2Fy%2F9S5guYtcd%2BcXEs7Lh4kdR9bdlr16Pr2wB6aqkke6QkRsgx97XbhD2BrbKrJiPGSimInJyOj6f%2BqeUepT%2FxYkIcD9K2uf%2FLEgNRIWngea9jmCScxCBXwYFacnHJIYUBS2xe4wod0JezX7HzFbPBKiep83rBOcEIgVwyhaQtidCNyU8ix%2FHyThbiPQFQdkl67Q6YFDIrMxq%2BzcjlU8iz6xWwtS9K0nybBNsK9sdCNNFz3fcn0q2vdvoKSukf8m%2By1tnf9%2BIPQSOr9e7tr48NzyjZ4ebMU3cICdUo0qbDlR8p7as83m9lzepRW1SKUyZPNWVsViKgSgol4TMeZG6tKHHGYCdPg%2B8lUwAoToQEpif5ybfxJ1IFMIPxpr4GOqUBk3vkVVbQnyt1AQ5JbMTm%2Fhm9WqBpayqvT1pSjuNPfcALEqTYwTDt5tGOPyjGIsRxfuCqjAO1X9aRCV9jeitLjA2YB8jQxaUQvpdK0uXSIUmgaXZtPx9g8DjFaetc8ASfuhRF88KPCARaZKhYgLHBhOUtMOtGa%2FHQUjSMQTSa%2FZoSonF3VjP%2Bsi7rHGXxltABppfE9KWvuTINOy8nWpWefZb7tTYa&X-Amz-Signature=ed722c800fb814580c9256c36acd54781309ca8362d32db43c82b7eeaced181b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHYOV36%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDwWhJI61om3swTi%2BHDY7skJjLviH9yg6Nc8Abyl8eMgIgC1fQmaOnBOmWRwRMOnhCGvCGgFxEggXy%2F2HGLso%2Foeoq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDN7Gyse9gn37TWPrVCrcA1I21cWx3dBxYBSHbmQxliHX3RXcFLPtJIEF83yxPWiqmUW5YwUTXRt1YzbbLazfx8bDEv99jnGhbQLpVuAr9YPm49FUr3SIz40Mv1s8Lf7z1Sx%2BI9WOxKwy140%2BwRPwAgyxJA5r%2BTtvIC1S%2B0p%2By1dkkoTruw1rpt0dBGFq5ZOwT83Axk4D7PW1pb059yecrEzHg2%2F03ftoYJLaqD3Tm8TU7r0yZXAca2vZeyDU%2FJSZS6WoEf8NUCPbzYdgNSJXl9bXJ7%2BFK7uoviWGgxOUbALFIf30ZDQS0%2B76aXPLXxiWHYYyWN3%2F6zA3SLlgAEeJ%2FNwL1wxtfuTUObPlfAJW4O2IC1SqocrVnqGX%2FdWxGM5cMvfcZ3JBuK2nmOiIt7vwnlM09FV8%2FIvavcANuh2hWif50Tj4UxUNPCRbjHveCGDY40NK2hKToaLCJb%2BUYP71WJiX6tmjZjzenAmYEBfK3DGbrm6Jl24JDdBJrJIraFuj5BptaxMWaRnPzdnws%2FWWSe2LAUhGTz9p2uTEVeWCiUNbqCC2OumoPZrOgQ%2F00CGXXDo42kXlqdW40gdp%2ByLDVHHe%2BfKePWzpYhSb2g2tMEgRNiC6i7OqrYNMigP5pD1BegRyQRJyzm%2FEbdVhMIHxpr4GOqUBs8vLC6ZZXOhb4fYzHvzs471LrJkkG9AiwCnYDXrnGlEzjGn6AJF%2FE%2FvPYvgliesmEuRvJKolydUOXGLxvg%2FB9cvU14%2BCtgohCP1DTVQaiNJ8yWbRten9xLI%2B0Q2qauPYxdqoHX4umSCsGH6617S4FBjTi1WlvbIcP8dueNDxIFe66ZbRA%2FSqOUrD0xCFKdN%2F71XR7GSGY1uvNw6kRlwHZr18R45c&X-Amz-Signature=6a690d03b22884fa92ea1c1e4bd9b584fc326f292a03fa04c430567a621738cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
