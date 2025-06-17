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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUBHLENJ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNbq%2FyGlIxzc5hx3KSJuSji%2Fi22k5RVUYgdrmxfdRn7AiATW9Nz9W%2BlefchkVPfbgOtxWercHrQCc4ue9%2BA6dLQMSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM2BxbyYi1klfiPBeHKtwDLDvqIclIShCPTuRKd6cKjxynpBsLsrQ2kbJ4cEuP6l4CMz9hjO1V9cf%2Fd1wQ8t2xn2mMFdwzDtWdqijJENAaxqQRVUFqbWgvDKnpqNN19sw8G7gOoriEJgfJlA9UScIbfSatUDnzbIKYT5cVNTOOR8A7lEufmko3JEpW1AYK8yFL8h4zm2NDYe1WqtVU5QZB7EqCIkaNFqoMCUlZ9Hqceb%2FQ2vWf2rUIgi7%2FsRU1s8vi5icpaMIBtKdEbGOfkU5ZLOTyZXBX%2BTgEFraTU8acKWdFgm4mTzxL04wFUZisqmOu5ckBDdVHOiBAOurq4XO5Jbdp62H%2F4veX9UwAQygMrwUeF%2F%2B3GMWkV%2FtbBNm6LPcBuGgJhv1CA8XYP30x%2BVBmqz9XpwVGONcCB1rLO2OfFM4FOjKWf%2FQ%2Bjio1jIDVRDSp1H0%2F20CxnSpB7qdsCh1U5yzctQJbcc2Z1mU5qmX2GpIG50qUWNIAiXluPBDiPEyjiV7CazkH1j2DDNWuSesab5rLVL6Q%2BkV1ZuH4xHSy2pJ6BBpZiE7JngYOerlmxgCtlPDEUc0bOOnO61%2BpjRGACU1EXoYYuMxYizpmY0OrCajvD2BQupTr6xNloHO8WBTaPaa25IWiK2TJDfEwyKbFwgY6pgG32n4hjchTDqUSduVOoW4TnbFzYX3SfUBCRzTzRP7kT%2Fq1L33DPoHBj3mkrmV9xvHvcDKgMhQ69Z%2Bzqei9E403nZ0K7GciU7qCP9fQwPMq1H5mhySEcSC1UOLyBQh4P746vgCXLj7%2FOTZ%2BHl%2FexIavjARTD38NUQD%2FfKdSKtNJn0WfS2QuH51JcNgNeMDfNXE0C1fRSQ10aQCeULPEY0jcd%2Bb%2B1gQd&X-Amz-Signature=2d36d5a973f8ed95cfb53d96710e0b6f7ca1dacb17b8a3a31ded136c4e545d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQHYITS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUo%2BKInYCzuwVYL88A1SFNLcsyVHRJZmniIOKydLuueAIhAKaxQPxmmeNVg144caYYBDdLpBrllu5pkIY3LngFZF%2FCKv8DCHUQABoMNjM3NDIzMTgzODA1IgyHzUo86QvMTmNvpw0q3ANjFPPERB4WdnFLbu%2B32gieyzW%2FXyPybJPjzJSVO6YmBxJx2ZXbFXsQNUF1K5Wa9cCAWZdoLEXgKMUtHUgTLF6gLmhCE7S2FH3lXHqOX32yhs%2FUrHtaeK1xzSt6A13pwYyKFAtx5hQny3wn1yAstBbK8IyV38TakCr1%2BhsZdQG8wPw2EHPzDyz3V0tJBOKcIfkVlWMWKTlXJvjrRl8X7AzTBXMZLOcWur9x5bjoiP%2FxGN%2Bdlo73w9jlCmKhACyW4EhhQlcPw8nNOD4vqlgo2Su7z0RlS2qmoTGNcPPJMSzQjKZacbYPnE5BceUALt4EycSwk4ueY27sGiJNT49%2FjBndud43jP9iyuiAeze6bGJDFhJg8n%2FoadB0TRC3KM2To3U5MyKUmTzk0pGemmJR%2B05KX%2FB0faUtyz0namxbzguDQCgBHF3esBfczbqRtT8iRx8cZ8HGlKAXdkdffWaNqza58Uacs7epQmerjUxsOkd%2BsOqMtp8YyxgyrK3qBZSRjsklp8ktR7gB8%2BLbULTo6PzUhxky5SaFn6vjzyTHL16x2Ym14w8fUwAww%2FZvoyCJHaku9FehkKO%2BinMUdct2y9GZGjCjrDxRHnM5RSMSnIluA6Qj1zZivYc6m8DGTTCCp8XCBjqkAaxYkMTQnZ42B8o6LJOTtZBya4djasFrTahmYiJPLbfdBl%2BKIBkMxqo4AulRpp66Plseyrz2fpGq%2BDh248DSjzGpnqRa5B75mb%2Fx4gSd%2BT8e%2FN0%2F%2F9yO5npMFUUj6FnUvsgizTbk3ocXlRM0qq3MfGxrMhGDIZyO4ej%2FUpFVJC0XBR6Mo47Y5P9lppUjGa0gmh9JHbZoCWKAk4Lm1Fmh09Q1dJ%2Bw&X-Amz-Signature=5fac5d2b79e4fedb8b4587b458fba92887ac568c573e0219dc7bfed516e0d3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
