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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCDVQC5%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhgZlhtPekS2HBmqTUMB1cMPA1bG6YEbUJqw3D6ObnOAiBkZxTlrGXHutrDR2O5w0u9xchnBLE%2FORsEPcqcrgzFqiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlxrAIw0BzPuB4Z85KtwDoNXW9XYqErul%2BHkWSeOnmjaVs9VcZfFogDsqJqiVgVwyaC%2FINKVjqSdMwhLsWer%2B8ZB9VTUrEp%2FVF2Ni2txXM2LwqTGC5pqSvAbMSUGlfV5Jo9%2FeF2dp1SXHuPDmjEIUAVDwtyyNr%2FtdFcNOx7S98yz5im8ZBVprU101TzT%2FhorYeRKFkzwNY%2F2FGg%2Ffbwn7IPmw0lNzbqtcciUyzB%2FweMoxH3Mv7DwXxv3u9HCle1iEXCQ76otpLcX5urEQJ%2FmnDxwLaPTXipNnOEBtiwVEZOaJdaX1MkNuKr%2FIXJqz4oxX1OgQ2NAPZMAfqqWstB5V3u5XhoNrQXq12Vt2Vz7W9M%2FxSj0MbpES2d9PqxUZnEfgBM6M%2BFGIdDu0GJpCj1uV0sVfJv%2B8qa3iPHlqE%2FAQObflAQsux0BcxB39sSYoK1qpeWJcPL4AWbaWTeoeOdM0johp4tMalDLXVFqXYW2GoYc7UoRfA4Xrch4pSnxupDfqnQTFbQzzZ2injODTXyJE8y1X3x4XKx%2BsFsPXVvTU7PGc0O11M096Su3ZSZ0X8Ke%2BqZFENUX3CM%2FtwSg16OkXH9CrluUFHy%2FyLVpKhvq1OcR0Zv25dfgtKf79VygYDTP7kzjWH5TbC5VxKJswv6nQvQY6pgHBRGEPA116OwHE7Y7FFf6%2BZ90kRCYO%2FsoBO1GT5hCKTj%2B7ODN0A2zo%2BchVUbQy%2FDYfJEuRCFk%2BYUpGifsTppn9zRDw4hWOkKBlZ3S9%2BF2lmvx1XGA%2BYSsoUFz8sz%2FZFyh9UZhpCC37kIVDtsxScIHSItR%2FqdPfaUlNeszVBXYe%2F7agBzOABeynk6ZreDffLgNYD8fDirFRI6yVAlERSDX4u5xhxXeZ&X-Amz-Signature=72a695de87e81b863567cb38ae7ebb0c44438bc863988c8ee220d1f5d8d43fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWITLARH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIChnDdvrDkqkKzD%2F6OdMPniLsoF5aiOkk7wIr5KP%2FJzkAiAGgBQHAFpxCsFS2FSllZLDeQBJqVtY43ObBn2Fd7aGNSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCwNzZsFrZjMQylXnKtwD9I0yEsNCdXmg7CGeSL3Y92Fr7GM0723lcbqilTZtYNBWRNzBC%2BbNJaNAIaSqSY%2Fc3OFkM6%2FTjOkvtyJCJgFDtInyG%2FDtUWcLdO3qKaJvIXcB%2FYJ76gfTKgiXpI2NCa8P5pDMtzKuyCcflbI5Ee9VxRHbc1pgWmPSdZk28oaGzEb81hMIeAR93nBL%2FElxgrv1nMFaIHB%2BFaDMybsI3fq0cMIp%2BheKBhjaXB5mbdtl1f4j8qJDr7EdDNp9SWjl85HEvSaLX3%2F7vVCelBBRBDqUayqu9i1zymwnaqdd4mf%2B0IBUJeyDMlpH70CmET905QZUY3jrfY72K0955wlRH4l5uDmTjTChze6TahsmnPdkHFeRmtTRjHSE9opamvaYujXBnRoFEMX3GI%2BNIFeZblHy%2FjGLFqO4GG7TO%2FmknsIB2Yzw0KqlHECm8zfQoFb1NfL4P%2ByxW6iTcywzvJ%2FQyx%2B%2BbbL5Tn0pVhrpXJ6L%2FuJI4fgOiBT76TE6I3z0ccfIjj17dBfpJXGZhP%2BY%2FH0GlLX3i7FRuB3sghxflVe3AzuiqkXoD3AnM6CX%2BRAs1C4xAxQz2VmsYoYtxYYNhkA1kPvV1zupkxB4%2FEYgzNvqhbKt7OA6uZpwTkL064s6VvMwzanQvQY6pgGv1gevwqjsgIBSaPNXFsfaBA42%2FErbruOCDk73eb1D6s0noH9kiNHbFPK827Pr66NLI%2FSJfPrvSpQ4RPp7CQsC211wwObyGseu20Z9istCmrcInzLJrcL7moWhrXKpgqI%2BIy3AKh0k1INowYHfa7OSMA79U%2FDGTj%2BjhXk4fmcG%2BRObdHU0PNH1kXnJAb3zOtctTqiVbFpYBpYo6u%2BZuvTx%2FmYmp7Sg&X-Amz-Signature=6bd50a94098897a96bac9b319b1665435c25a45db45f2ce771ab59c83ed595d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
