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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZYOWUJ2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIAFWOEJqsQt0wR0R4FHgjK5Ye2oW0%2BrwpLmuceo45fGFAiEAthhK2vb6VQhnORlzH8OD%2FU3KZpBjSL1MxZi7naukn%2FYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyBvbJ9fjhdKogR8SrcA%2FbfI4WlED%2Fh3Ssx3ZDbsjc%2FcCf8bLsugd3Py5ygQVtrrG99Mrgv2qe7sa1bYd3J6XSpf5UW4ppmwxfAy83nAaE%2FfNpZnK4fQ3xN0Uk4x%2FQQncIvLnTyCvyzhF7p%2BqI%2B8Uz2mbiW3BuYr%2BJ2VuCKTx5o7Vi1npVn%2Fg1WIEjWl6ziyrNvPc59aZOwn85nbyfGdT7lJHUD6b5xlAxKX%2BwD%2FkwWKd%2Bhvwb35Q75l3yJVchWPggMcjk9MyB%2B6PzDPq8sjPMub51PGOvGmnguTDSuEf2zv9ywdpibtHrc2YlIvF8sh3Nh53Sh1WyoTa2kAygtsFaeZizsWKB9VmgG13v3EPbuR0p9S1FIk8sjxUh26sQqzuoOuwnREqti6YpeCrOqKQSgYuz%2BCaD%2Baircr8XShZETOtXTZpVklQsSYsCXQln8OY7zOEcXvFkVfo7N1os6GU9Oq7q%2FRNFfxiZvYjbqdZl70%2FmxV%2BWGFgjicOcyKBqCdvZdEs5fXJPkQEz22DDWw8khylQCKluzq5IZCQrCjK1vLiYzQXox3utx8SBJS4CVIA9aLLzKstYZ06%2BPuQS8gqBbAsG%2B5s6qYbXe2PW1kZ3nG%2BsAjWVkJB1dCP6a9nE0Sk8f5MgxpSbG0utWMLK1q8IGOqUBgDDzoEiWgLd8gzZMo3v89rKAMsrjpqoy8TZN%2B%2FBKy%2F1aV10oVetPJfBKIwETUZB%2BtPDFPRmNMG9BGCrxuc3PkiRMIlCPD%2FoyJguHe5tdKlmoLoKYPIi2eHIot%2ByZmLdqdgHyctgPgdh5%2F9W7iSMWT0aC4h%2BzvEx3TnlTYHKT9ZFPU1JuALimgaN6aBEg1P5uG8XfPWwsO0Y6TvrRW2F81blWqlsG&X-Amz-Signature=5b85013334f9b68d41189f14c0a2dc3651063cd60643518d62c4def5d5f4a4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMCVIBS%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC8nOVjrpos1UT%2FTWZ%2BfCOn6qLyBUqmiCflHG2ucWD5hgIgbBdTYZpOgQSPUt8lKrPfgF6rUrBJitBE%2FAymXZpL7YoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFTBPe09Emp0ET7ECrcA1cU91lHNmg5vio7tk%2BORCSRq%2BTFgBzPfuVscjsyFaRN0cSTDUBn1ZoXtORWvogw73BVrmpsWLfd19MZY5e257oEhjqr38C%2Bwo9i2QGX99kngNymkp0YVx2PdRDxtgMnz0pSO0L%2BC1%2B1i9jlJCzNihvnTx%2Bxs%2F50Q%2FHxpz%2FyUnzmPWziO9qzVtvI%2FB7S6rffltdpBITw9RmVqkC61rOnrpGcPyAZ08946Y6G74n1EZunOevPSxNaBTh2%2FXDoSLKaSYAO0KkRLFrfpoIWJVYITGpiiRRsxy3bcgf2o14rFNCPl25aAG%2FjsSed2BhUssG1Dw7nom%2Ftjg1TnSV%2FdNuT8NPrrbCL60dTAiHE3tYCHouaL4IdEnlpw0tNaqxhmQfzaXA7xSw%2BfjXAeRfzrxGhY%2BzkAkNjb5MIkCtSIA%2B6DGFsrNDAC4obdM6JLhk2uHlJUycqDf0FTVhloDJ3tEshCS4k5ufLjIkkFoktBiEw2PIz7d1D9N%2ByFkrRHtmfZq5qpcXK3d4bjcsh6tG4ySRohhmYcdErwk5SaRdbdsPT0kvt2J6eg07NnBvC4bM9XKL1xBQUh5u5qwtMuejeJbuFVZMH5XbWkpVvxkhjTyA0r6IDfoIftqfdkkUioR3CMKbEqsIGOqUB%2BoOwRJMA9YNLSd650LG9F%2FTuEaNA4HRtjeX2%2FRToY5Ry70SRxG2tPbUETMzZLOgbLDDeEnoCt2LijG5xi9oODeG7LNzrzjiWx72FzIidYpDpKC15LGjPRWEBPdq4WLaVkq8%2BXU3EbPHkXmvneFRJrPu3YGlrKczzOT25AvNB5Tq8ExDSVuoGWHXEs5qr0%2BmTAwpTO%2FicXK6EtZVn1mrVQsS6pzjO&X-Amz-Signature=9f86b27f8ba89b2e5bd017e1cbbb2c9ef3491cb39f8b10278adb27a6cfe8d477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
