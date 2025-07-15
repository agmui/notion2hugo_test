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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCTOTVM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD%2BumpBTa8UGl5EIRUxF%2B6BAEQDG%2BQooRbHt1ZQCAs%2BWAIhAMeRB%2B5Umdl%2FgmzPDgSt%2FMCU%2BYoYJSBGezzDONKd90EnKv8DCEIQABoMNjM3NDIzMTgzODA1IgxdH9%2BXquKUNhCUk3Uq3APBOdxT3fJazwuuYC3n0Gs%2F%2Fdw5eXGZgtELhQgcNRyK2RTl%2B7uWS89DCrwS8KgDq9qQfkBTiEYxbQwnMDCikYIi42F0ZnQDw798SuXTGgVbr27rZzYjRNIwbpP26uMhEaXoiy6%2FXKcXqDDTPiMbTB9PbAbHNsxWd6zVjZlsitgPmk4lrnjyDGiS%2FhStiF%2FU%2BfM3oCrhUNI2oLi3PzUFaVlqI9Iv8vM%2FSBuvSzFEtSXjHNifiiVXkwyNisfKv3H%2B0GfJT5ZGgJwsF%2BGvtC2HwWWYS%2F3qsbaeIB%2FVajyGLGtw3vY7rCzi3uOkODStPUtATFqMiAfm6E30Cf2emihBOzJUdSK%2BpXKuIwfBT4sJVkiRIAeOAliBLFpl2q615SsyJp5dCHMWS%2FAZlskJjIuUAmW9FwT%2FWn7Bz2qjI%2BqSfaclTaXSaXKdO755pykxWreDfPLi8%2Fptcmx1zz1%2FJOjdTXdJPPgnzumAM6SEazL5AZk8ihH80AhY7aK2KG3ByJUGwFC4zJ2h3AXinRRARJ%2F8gsBefJMu574OzabHRHpPz0p351SE8bwT2JPjh%2FIzYBIqSh%2FH4A7OgELvADDGiOfeSb949Os9bzhAY3Dem2ESLtYvfUCRc9oNBRLjP50AczDDsdjDBjqkAVUrxJVQ4YGpgnImHe0TIoqSKMwFPc51YV1yUWnt%2FPfJ2yGoYemapORYnJ8v3GtKtQICXwJEIT%2F3d4ImrpWilMedB9y9xVAWUKoOq4zB147mL50yt94MGhygmcMTXHidoA4O8dYt%2FdlfiUSw6cw0Wr4qDdF6aO%2BPLVevZmjATRdG4XcJw3zJHzWAqRxz%2FMqTZllqTakqtcJIyb%2BUWgAaUQDzF4sF&X-Amz-Signature=19c061773f8adbcef381fa37bd7926140deeb7fb63133968942bd1ea7d26aa72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYRID25%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBSh2V8K69KwGjDqJ6s8WEwJbgM8%2BJYpUWAVNVRRUHa0AiBqP3sdN8Mcx2wBXHGtJNkcObLqHCboHjf4TCEUiTBP9ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM%2F9UcjWNSpNLKyYyDKtwDXS7Ir7qJV8GIsPLdpcnf1OJeB6vqlMneB%2BnBp6VIefNNoqESdKEnnbmLaKfWYIwMgwFGgXRfuw0CkHHZLxXuPFjiSx0PfLN%2BHMwqfuO3%2FF27po%2BtvRJazeqtUAFRVkYitwH5GQkglu1H44onZqnpfB%2BS%2BnQsxz%2FAj8VEfgn9EB0bWhRtpxkFYKxlKiApXDnosfrtOPr3IxmOa7rXH6RnE98RCIoga9fwqyTYVBmu8XNxK4gfQqwB3Zqft1w8RX%2FA%2Fqbz7EoXaWTXtLqmdqikPVuX6xW%2FQIrlQzrecIVAlPsOEjzgkD1rTb2iPFcza91tCnuWhk5zoqAjDLSDO30jz6%2FVBFv8FXbfEkAadKRtSe9NJHuCGz1L%2F13gqAoaS8myY8eXAXHx5rX2n8MNH5PKSSdll1%2BFLRFJ1Djiw5QiTgNqp6am0HZvyN6ISHaD17BfyQrGvqOD%2BZbxv7ssG9eGUhFUhjrdynpHOobNLQSAN5P56QbmbHaMvPTTP0%2BKkryZt%2B%2Bl1G3XRCmtBa28PGxasC%2BP0vWoVOBmdLn4fxX2%2FecFYevNWEzPJdk4XjR1F7r%2B3LPEDjCs294qatmlWrvl3c8zM%2Fki41ADOkW7IWN5KZzNrIUwWBM7ugCalgIwobDYwwY6pgHL8yPpEgB8Ch4krrVmmYD4fJa7NbH0gEgM2wl%2FlKJ7DTZefO9WOUSfFypxa9lPt1bCmpB4k6OHFxr1KAyhFnlCOZJj5QQyoVvK0N8d1bO4L%2F1giB57x4JUEf9H8mzoL%2BwKSHvEkF%2FrWsePzdbeEfkSPonFt8%2BcKIdKui07a6pwG8udnf99HGa6MMol%2BEzGD20JnuTke5TPTuTOBthbq8qvEifMfDdj&X-Amz-Signature=748576a4754fa2ce54ca980f2d36521295131eae6f149a2ee285b556eba5d526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
