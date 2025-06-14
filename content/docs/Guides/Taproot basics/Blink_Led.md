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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU5Q2733%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC12lhfnWRyTriRW5aa6GTso6FjQTYA1ChcAEFA1kj3TQIhALA9KOsjAJxS%2Bwc0tZ%2BBkhojZF8fccEaNqyScubv3%2FmxKv8DCC0QABoMNjM3NDIzMTgzODA1Igx%2FzsWya6KhXQzPSM0q3ANOVwF3oYUcSXUMDmFQgqjiYIgrkFcPgqxqntRROs0U6%2BQEnidAgqjfpymhscwdi5cXr0IJODi2KDVuVvLorSMNBOnecAEX8L%2BHIZPQLtUrOk3oJGOXe0UYktMnbEK5qrUeK8Hbh9oOZbiWcsc9h5krun%2F%2FASksE86Zbd3znOzkTSgDS7P1s0g95OUGctnM07cY12m029KbyHbpkNczKe59j9ryMSks8%2BFEIRFwMkwexvi4oY1lEQiaPhGHeJrg66Psxb9BwQEKzj1%2Fn1Ry0%2BRagjSQi%2F3NdEF6UYWedRh5h7Am%2FBPesC46yLAmgbAgJUhIf3p9lFRfhVHp3ey%2FT7IOjUasU4rAmAa%2FhJrhV0QJbR0QUDcq%2BG9dd0%2BvQPT1b2gHLWuNEjP%2BGmNGmuXucpGYZCXqY308WC7hE%2FKMC6atwCbbmE3bA1hVN3ujNuQnaN1CbTKANttNQffagVDVf2Dpy2EhyUcx0Igwrjja2kMKXRAZEwjlLv6Z0qRaEsZxmmg22YLytxWYZlt8syjHOSWGTPpMQWGO82IB1q65DOH7EZ6vgtcMnatetIkZexaVZ4HrsxOZyF%2Fq5SVBcZECndHg85gID3olPIj0VYXn0dH6Q2K496dHC6mTQkIO1DCywrXCBjqkAVCL5F4wgnQozgawg9v%2FpJH8ZvVMsSac1hKosy%2FmoxD4MZl2ofyNP3UhLuEqlBvvGICwEttgjMGZHFIw557zpZEP3UKZhQ2PCkrJOtTH4KfIpLcjo9HmM1nu%2FW%2B78o04FRjxW5B2XDS6K%2Bo5sGSsBkhGmmgGkkhkbKPMSPEnOenyub9yuPBynyzU4R97dxR1K3kBksY4lLYGUWLX2rTlyTamvQFx&X-Amz-Signature=75ab737ef1a6694f3a6e0fa6c4af7dea1ded8c7153a180b0d4a5c7569b59ba33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXSPNU4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICs0B28y3Htx%2Fqnxpta2x83IRkiZPXTAtXg8zAGfIyiLAiEAwClnan1ASpj%2Bfv%2Fwm2HVZQVVzq1XZQRvbmlIeXkFDLIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNKIPqycsA3ZzkZ5AircA8h7QWiSStof%2FENfOCBXBbuh%2BEv9LXbp682MDM3syJpOJUNqPX7rVzaCRutAfxEKtTNQIfBLq4datW8q%2BCQFU8xwqLJxC2S0uco1CkVPP6TVUpapmNEmnUifFfVVV69iNjCYUoC12fUz3wP%2FbBiwgYGrBYj2KE3F%2F4RxeVWtaBQwR4MXsYBruFEOid5jDMDkq4PWiqrJn0Zsaj73fbejM%2B2r03tYDv9%2F%2FGshWt%2BOeOLJRCrTu3CGLFYttaZwNHQAAq3xtu7RFVewq%2BYN%2FIRFck%2F1RRnHkrTi3tEG4fbf8BhL64lsjMEDMIx9e2%2BMTM%2Flpo7q5MbnrUvHemyLiOk6FjZm%2Brx7ANPdMSWdjC2rXiBdCznrFM9J0ZTDgqCRGy2%2BA5OboAWtdsrztiAvkRI7xseRV5zt64ktgfUWS0gbEyN4HwDAVktJMw9h508CPST6CCS7HyKfzHV8OmWgt39ebyA1x7lftNEai8a%2FPrlv8JxA8OH13LZhG8wPqZh%2B6DMWykNu%2Ftd5SXDtAHPYSJhhEnvltrUxVylUQBP6%2BgmoOJAx0ks1UPNbRG9iel56crJB7uhlDcNcldirYJnqVk9a2AO3mwRBDCXFrd3pbgzybaAGtXH5LP8%2F29VrHWFrMJvBtcIGOqUBzOz8VGNYcmU2frZLJfXJLvPkYYGR082o8q73y7QdEYWIo1exh7zEa5VkTvvoKav21vQhNzpl8t540zy6I2iNTqVa09rKKKFypwTqBJrPV60kWuLs6519cK0pWyh4Zt9kyBnayYTbeJFo02fDPGlX988mza8DdgkWv31P59Tjo%2Bp%2BG5q7IkxOTI02SC4UxrwDFD%2BT10USxyDRfDhGfUTglSby%2BMOm&X-Amz-Signature=93cb09c0e9dcd616ae27d3eafc882a911a640dd9d32766c10d25d265d8caad54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
