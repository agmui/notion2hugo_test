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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BPEVAX6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYo0JGx9zNfRXrNY2XeDCL1jPWiPmI0dtsED5qOY7mtAiBVrqZe%2B9CFuwkVcQEKmNAAnfo7VTdvqFWV9NWbkMnoMCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2FLu3zhgD5CLp2waKtwDFp%2FuIaRx2qToNDzWukVDs%2FDx6Z%2FQLx%2BV7VVjyfb%2BxJtdsH%2F5e1qiyKlTPOKKc%2Buqh20oWEC604cuY0gFzK7z9N474w65221zImzpoWV8xqHXFybGHucf%2BmV6G4g7BL05XFpzbM7Rm265ea1xAR58763VKoay6HUf1x5NW3UIqtKk4uWuR8HZkc1MlAROP9xzlVrypXNOTNsyrNFPrbxTqXiTyHut01Nc6myao8KVZVY%2FHo90ocqddvVibtjDo6KbA9BlTVCPKApLDiofnt29giBVWmH3Scrjoyx9duyiMriq9u5j5Oxk6nBtVTvmxHcemGMCTd1zH9Ff0fxNIP5HMGdaEgFNrVW8CMFC0rbvY8ocTGS2E5wYp%2Bq0m41S52RXczpFiBCnfoVG3uFOh8BKKPbTZLwLNiOmhNK51GUHXIoaKgBr5vHZoZupnkF%2BWyAWLaNfuFZZ%2BInBQUJHVRgaLIpVs6%2B%2BdVQorf1mo3vJatiZEvm%2BYuELgoDhaqE5mhmZdUy%2FmvYBvtJePJHO1Zb2MB5PXZRxK76sb%2BvbviFuUoenjc%2FdllTjSdzmUkU9pbYsxLK0xh3NAV6ZVJ%2FubkuhH132XhYbxhZhZKWqCVOgIDBaXc7a%2FeZ4EvMyt3Iwp47mwQY6pgFJqXTYjt19g1%2FTENWvY8gGQ%2FmJ%2BmRsajEFi7aNwdh8UaYpme1mtY3KRJByOm9johocddo9Y%2FXvNcYtgHGPrDwGnGEU0Mc2SUXig2Pgq1wwmPl8qnNw5Ku67pIXCrnsi5Wqd1L%2BgoN2mLvT1XmUX5UOByINxlbXZBx6bawXWVP%2BdTQgakkba56gjB%2F11w0vKwrh96Nx41Vx6N4CSUOXxCmPiuSz2cxz&X-Amz-Signature=6bd7967457ebed16435469f4da555399bbcd225e8cc3f207559a81270129a3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXNOHBD%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT1Rj8m8%2BHMVInjZFa0AcbcOI5Y7h4VTBPDnA1BbaKhgIgSy%2Fw91xrPA0TfgGuhqI5AsCWJ3qaPvSNtH2WjgiKLwAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClxwi61Qipazx8wICrcA1Ce4SkAwD3lpFK48dFal3FTQBO%2FAhEiinPNF8MDRowCaoXiehi6zm4s4maFWmScX5VSS4J2rHQJXXxHo7Y7hCKmff79IajWKJJKovGjNyUeB4OcMnrkOsTQ%2BBWI4Y0kIRgnSRInKWTyQuINWM4INtgUNA%2F7WgLedbk2GWvizvHCmuS8Sh%2Ff7FfyxNHZbgetpHDWOZBsCjn6ONjRnS3dP02dAUMuhLl1NbvfPHIVJYlrEBa5U8pPrKkNlUp1RgwiDkz41K55K2YMdZlISgEkXnnUpodjwwouOskSeldl0JvCrKyu0eqACnLEobAqXQd8v8NqcYB3N%2FTb7GFGCx4zRKK8wxghjee2F7D3zn4BAGami1jfIkev3O5hMbNVSSy%2Fq36nsoL8xzt6hVMZCPuRKq2xnnBpBn%2FYp2lrb9PqPQPs6kVD7iP2BFbqdTYQWePrqE6EWARdDjbAi%2FUV%2F6gPXvZnJi8fx3W5dixe40VmLb6X8wH4HCwElzAaZ4HrmzLb8mK4kffxbty885Ob9bG5LsuwQeUSsrdirN0SMQKxw9Wgl3OLJwUCruz1CO9UwivMRgZYzHtPr9ubeQZjoflwPO1bfIyw%2BOBBwUyDKvvrRFv5I%2FBOarSie%2FwA42guMKWO5sEGOqUBcdbj%2FPaplzxtlOdZI4Le1BxrTHV%2B1%2FeYvEVxd47KH4mkG9776IGTAT68TjuCI4VRyosYPrRYmDEBq2%2BHcbN6q9K0NUzaJoklueYynbylPEQQjcvAO1DKYdPqm%2BVqfQMqDD6SFcebq9%2F%2FH3YN%2BoGl8ljcJeKuZ%2B1zNgVdkr2tLKTxq4XoDDNg%2F2hi7Jm0gD7qXzClwq2v%2FFyLAkpWcadDkOBHH42j&X-Amz-Signature=2269dd427e3a95ac449852a4d2517cbbb7df9e115c6cb0de7b41103a43c95dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
