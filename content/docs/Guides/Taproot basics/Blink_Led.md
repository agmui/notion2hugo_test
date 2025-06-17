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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3Q5UHM4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEt8NWx59qLM4yuVtkjW%2F6fF7eeKUrAwongLehrMn8pfAiEAjvGdgfC15l1GykMVqXLHfFsruTm6lbbKVicXtvzL7Ngq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDObATIsIv%2BG2zfnlHSrcAyn%2B10SC73ek%2FJvJriGJmBsFiEYj00EvQxIEdxKNVEPDlDz86ej9WU90pF0CB9qtZA7ZltC0IErCuD%2B7HZYcRRVZYDINgMcGX6jGDAbNOLztSRp8L52df%2BdBVwma4LNU%2BjSedj5FShnhvOcH5WHLbC8A4M818N6dZ1BEsrNTyLbp9LqTS1HoJYLCfRBcnJWMiBg57%2B81l3qTCwzRia81SSmCl7%2FTBoLqfKoNdQU1y2rWp75vf09JbpbGrog5yXD4SAuwswhe67Y2dEBjaP6ZcKxnJWHGZbJzVCV%2F8tftCZPkYZe06icgYSLNUPTRiikpMm4n7L4AJDXDNqO2en7QRFklLCxqldmK1%2B4Hy7UEnznxKR11r0wWxTq6lWdncYFW4V6sKgYvdX3dXEAHDLE3aSpOrluH%2Ba8rSSYkJuHPd1CqvBas%2BqL6NYjxJuWm2cvvSuR3J0rXhG907k8H8cGXWhfR3pFuirRANiYbj1iMCFntkJjJODYW7d2YJa8lrTWf7Gpag8PGOOTNNKKGnSPrSruv8Alu7wD5ODseAe1%2Ffx92kYkYpjXQazsQS7tEXBOx0rzTdgI2zifAVSklnNISSwO96d1UiIS3VwedqDdaTC%2BJvkTmPytKWvppI%2FSiMO%2B%2FxMIGOqUBS7E2j9aOWqYfWJSJ7OdFGL7Tii0gSgx9GKcOQ3szG7x2fx%2BZSESt8L16%2FBAMWH%2FnUew25SfUV4mCKrgo9te%2FgUGFkQlP5%2Br%2FpKfzOcelowNL5oqNDmSzHe6swFSlBYsiSPgWYLmT1lYrm%2FjIoSM5XhFHG0iLfbjYr8iurvkNv8u2oiidIOpifxA1Wt7Bz0APrRnW9Pd6Mx33z09oZ3j1aF06h7PX&X-Amz-Signature=5c0b97d98486352645884a57c02f39959aa26d1465974051815aeb645c6a043f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA3WDRB5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Rs%2FuRa96u6HRfoxA%2FeVZE8xEBJ6etudSONuh6ocnDQIhAJCER6tCXUuqiUUsX80FsVLj9x%2F3U8Ivduc8PwGfZijlKv8DCHEQABoMNjM3NDIzMTgzODA1Igy27VKrKM2bsJfbOkwq3AP8wQFrCexqZ6uRhcZGST5G%2BJVM2A5TeqHaEbWeHe1udzHB7Gri7M0KDk%2BoTOSVYqRm8fcg0neHCLKerWe0%2FdBbhec5UC19l5YABFH%2B0iK0Kifixa1g%2BwqV8rLwulxmFZftLuAUPwRLJTDAkhtjaTpdWTIaN6a%2BwtlPzxjKhcYUdCl6cGt95R1NQW%2FqSIKQZYumjQStbckNgzzMXZ%2FQ%2BuKfCmlQnQRfoypOESZGzPe4Jy1A3aFyJAykO%2BPNWuiub5w9G1%2FY7hyCDihs5AcurwbFzqfl%2FUjaILkKQ%2FFRgzKUy68dDSz%2BcKcEGFes0IiWXxWugM5Ryqh%2B4TvqOlCVq9rXFARRCKLAnR3n549IzCTP%2Frxj%2BcwVYoG2u79FroR2LNN8hJZSCQ3xXcwUgBS1B%2BFCle450zEK97A4w3CYgDFT9ck9tzmnxFIUPv0ozZGwbru1ifSTQM0F8VcjmLCsJWJVCL5NnjNeBUFLaEJQDRoCXyggQrctjFDxVs0xP43Iupu4bGEyT2ghkwAE%2B6fPnhgPhxH0dQnMGeBwsX2Q3IrHhLuA%2B9QMgH1%2BiAbnvvz%2F6fhtYlgprgJbpFToMqYejEJoirTFtvRVQYL41rxmJG8N6Pss8rhwmYtjROc9ZTDFv8TCBjqkAeDWxp29Xmp2yJmXHAaDpMNViwMoM3W83yosmszJjxrkH0DJmWXwYFo4JrQTKBsY3bIzRkfl8tCFUpXaIgmFIymuBTmkh%2B0L1nxv1Js9ZXffMrScoUFWWNabI3WAX6g%2Fc0vb4tlN6gLPiVCA4ErUFas9KwnIOO46MYX8UmORK7KUZTydm%2BP3RXVLqiww%2Fr5sh23MYzPmnZt%2Bu4xBy83XvK4p%2FH%2BO&X-Amz-Signature=74eed08a3565772f4a440e41392f815c48bc6c23a6c4c01351057d6df30bf4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
