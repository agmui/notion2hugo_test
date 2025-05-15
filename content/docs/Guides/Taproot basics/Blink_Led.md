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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLKI5HBD%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCkjxbvufrPx632bCLGAuK4HVHst956W0NXRH0lLWHZDwIhAKpEIsUdljgolD6a1gzeBiu218ClAvgwHs5HPD1KpA8mKv8DCDIQABoMNjM3NDIzMTgzODA1IgyUSpUQ4ldU4PH5xj4q3AMiX44zY%2B728R07T%2FH4U12998lCDDvGltp8UP71lTiXqpzzmx%2F95IQeal8IpPnBFx%2BfLOUTYEvsgMS9pXBSl1eOa0xlzRsEdNVhfAyZQpXMUxRXtJCFNJ81Au4Rr8hWtfTM1xT5lnsUcBKfyNiaygLC8JDCRsWPMD1uFIR%2FQibqcizp%2Bx929kjBDA0PGClvn7g3T7EdsyvOWuEnJYphnroNGPO14In0kYmSaD3%2B%2Be9C01LAqdr%2F3rPWydIl4lo1Ksp3ue4hS%2B8%2BPRMjGT5W4MzFX92JWyTKLb8q4M3TeRDcHgOy9qmBvDyH1KydW4QE2u77ks3qCR5EHz1jez%2BLJ7phMl1f4kRurYZcuu85yI7gaxBQZniTZcjAp3h3hp8k0cKNjjbV663fAfayY3SHbrVBlXGDpSVc0B1iNXE5uPI4w9iQ9ZDYtUV1I55dUOTXtu4gPLc10n0TLCt7nLecGLq%2BnvZNec2fYuhjAlxLfI5aU8mxV30RV7exHcc4ooBHdb%2BKZdyrSwihP2TTkpFbCpE7ArxjR%2FJWokPWFeBQzj2p3xGxT2twPIVGmg89rkIbgLv9zqPprs%2B9fWjAwtkbvmBpu2brkaqM5HZem6OZmBnn8IPu0UqeaV%2Bj4zCe4jC5xJjBBjqkAd5Jua1Hw%2BSB4sLZAJTQaC7loghRYfrDHSg0RBVTPTLqjdqG5DeKBMxdgGCwcj%2BQGNq3orowrBvDuZz0fJ1I7od5KFE1hwJb6cEBarB42s7Zs%2BCI%2FGaGvWHQqEe6SgmC9CjmaPS7e%2Fk%2BKYteuyk%2BHHw5LCNCLblqWzQyf8W56QzoFd5HWaes08OWF8JAbZlI6V0fT%2BeTD2I%2BevxL10RLJqQVm%2Fic&X-Amz-Signature=ae9a357ab2ee036a02729cc008eef111f96b5c6581b900859da2560114bd24aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YP7DNQY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHy8%2FwMZ239y86VyYE6aCWD20aKLWQRjyfKxqjG0C%2BnTAiAv4wADM3HTdRnnDX%2B%2FYEZfjrEJV3LE%2FoZd%2BuvxvVYNJir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMxnwYZa6uLp4Pn%2BaKKtwDiiyxE4EIBrMbsQbJ0JNFCkKqTr%2FbPgtLnlLZulUqVMX9gKPDqhlfKmSEr0k4k1Fa6e6tSxlRJ5vRJEcxyqCiFRUk7iB%2FCuPTKo9p6%2FpThjZbhbLTL%2FEWwuibTW%2FWDBbJCrCFG2Dx8zJQkbNZyW2UJilq8vOKiLE5lHHfhQYq0EXIRnTecuerLBncrKXC6u%2FZS%2Btg6GM6jhNgSPp%2Fw8K4%2B291YaEPYhQgSxZk%2Bc4iDElTb2IaQpe%2BIKafxgBfvEh3QrwOa6%2Bt5N6AAO7JBRTVvz1FQKlGmnjaelnVv3pzSUnnAAE3oalsptBuZZyFBdcSKRaOhI%2BjBkBtPivUsUemL8QXt1ICLpzN6DGAx1OQc6TUGber1DVWoPAmA%2BK7LEcKEcTqmck3ILehC0C9snpBbuMN7rKdceIK556mO2MbuadfVwKjh5Jcs%2BHuZ3Z3vpXdhUllWusfknSqMOvSjbyKiqB%2B2RzH6yA7WKN31LfkVaDy%2B5ZA9F01%2BglG3ll%2B1bWwFmuEqQag7lqSsQRPbZiskRxjDypXuP5beHoYB8FvclgRr8a%2ByxMK%2B%2Bj9UCpdeMK02ywFKmmsmd%2Ba6KZiXWM%2BwtEIIR34gTql27HC46r%2B3PQfZ7XbUJYOCS4XnW0wjsSYwQY6pgEnHm0j4MIIG35bC9ltYEBnNu4%2FgH2FUi2%2BKKmdcyY9xYl535CC3KCtokm%2Banhu%2FVSEozVGjqZTeBb5ixDI2KdQSd4yicaEpMR39qs1BmmeDEzrvL2k4sqiBiBdqMc9%2Bp1oFPMpduZ%2Bbp%2FKMjUXyw1C%2FIcgCvww8jzOViavAjW7QqRRPWUkKdVfxTW%2F7GgrzXCzMqNtoG0oph%2F0kQ9o9m6kJuFLrtJ0&X-Amz-Signature=69706477a6a32f9d85956643b481222720819cd923733115b1b2b389aa7c7767&X-Amz-SignedHeaders=host&x-id=GetObject)

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
