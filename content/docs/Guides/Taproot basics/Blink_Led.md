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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUKTS4KB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHR4ifohX2buLh99ArJr7Re5JI6DyMJcjZhLCHEnGThUAiALq6o%2BM%2FfRKWCGxtqlF66PZFmN1iHT5NKZU0%2F%2B5zlLISqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7qh4kUyJ0atlqOHKKtwDxOxXFxneWmrMeSrfyhaMgQeiJ3cTMqAVuDnpsEm7QXzUQaqq9mM18rMqM%2FI8AkwbLIR4GIhIhpMfLg8Z3BR9KYeniaYjuvXUcfREPWlISTpahwPyEc9mOzNdglNhSKBBBHB0Ea%2FEMgqGEHRmjjnbx6kTFBQ5LOCkCMbXxO0qGcPN6MdpSXMKODTm4F9cHha7TVWQ8o84wi65NpwJGdKbgAOBmwvo3DSH2uFlFp2oWVYO0fn377Q7N6shmZF1b9AfNjMWp5ZZD%2BoSs3wzVTIUqSzpqYCg8waj79y4Bg%2B93TpdLKNP5pKCT4U1Hnom9OzlY8lgi3diBF3mifD6yhqjuqUnG3RJDPC54LpFlLcPSuq1%2FM9CEXK6o2Y8%2BJyXf3vt8uHbX7MeVcI1%2B1g0kNEgpaAaohcovUNdjpT02kRynRDmzZTeOq2PEQrxY5xeeDkbdmcr2BdnjvcWHOk6l0i7%2BNleb8YPCT%2B8FK0p1L%2FmlVsfcXv4OOB7kpaCUsgWtqWiR2RFqdn6R9H3uQqWQ2Npe0QbqNqKUngrqRlfOxeHt3e6yH2%2FJTEKu%2FFpi8%2BigOGpU89MIm65JWkvBFX93cX517RYuf2l7svpk0Q%2Fbv4j%2BWuXQdzsImlJMLzZKy0w4J%2BjwAY6pgEMf65CPv2vaFvCI9S00Mj1Tx3PxuIpwO%2F72NhRO%2BerHEDavtCUzF%2FnDoCpz1ZX0ZXryAIUXbwqQf7Tw%2F10B81l1gA4Vf0v1l4C9dVUbuLXYidJIVFYuYyCxy9YlVqL3BGMosKYUE4G1Rwb5qqP1nNTINteWFgX652CEjiUzpYDIpD4x499usRbjdl2R7Vtr9mgCQOVQd2q8%2FHD9KtTSdKeBQmZO%2BLT&X-Amz-Signature=e7519bd434c504f672dcb4b2b842e1db0e1dd2c09499615213110904a439aeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6XPJE5Y%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFRJvmBSpF0Rm8Bf%2B%2BGVUUXQ88e%2BMDBq5I6cS4h1Y7lfAiB%2Bzn7z%2FVYczIsX%2FuEIfrXHTaM7xmX5%2FtRy5WHgh0gAtCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRjNAxMDF41rhJqQGKtwD%2FELw092vRGnI6TFwmkKQUvriBzKEBU2qs%2B4dEYTZ5%2FcFjphxGVmM4vbW6JxUbLlzAaMbrF5KJekFChdIEv%2Bn6MDOGSucPmlJITswHkZUXYp90WTalmFJeihiOPoclxCmdq96%2Fx5K6RjpMG3aCjIyfGEEB9xMSsRIEtuQMNMTVMUoozmZJc6jk5ubHp7IDXTymZGjvlskDhcd4BK7w%2BPi21DWnxAsQm9dBLKN3IaVAQKRTWqYBMINd2OHUMScjmskeOpPYca0Lif9QcsCaWuOm41oAWs9HTCzHqbNmz5KRCa4pUidHTuoS4XD%2BQ8jq7uC3zLj2fHf92oxNT0Gk6WlrKI29vmSCqvFmU7XSXbtaO8kYPssMw7pJ6uFH9%2BC5PkxTVyXQu8pZroZ1jvWf0DAGA3cHXOEJXt4wgntQoE7n0gcYRHQu5PBuRBfMsIn6rpk3O5Q2ARG8moy8dynpaps3GzhDITRoccNBT81g%2BlABlr5STtFdPCh4pIlhXHYavbPIq%2Bl5dAxAgEzDxuYbCE3HTRrFfKJfsWhIJQR73s%2BkddOfot16bd3JJccHL%2BYVwkmyb5iC%2FqH%2BgR5CFnEnVEGxrVt7PozlW6SdoN9YEu8Z4R5noARKmLqcnEtknkw8Z%2BjwAY6pgH%2FMXsj0%2FNIMTw26Snze2YPjr6hQG%2BWD3%2FnD2jtpigNzcPWgvaOV5cDm2UPBjc6lCJ%2F1FH6RpS1Z9AK4Ea7DtG1CYkZy56e59dyaYBSHOPsRMdvkcHuzJucJizlpUqA1XTkZmRv26zP0%2BrDRf58AQqkZGe6j%2BH%2F8exoNwxfpxWAUWrWCKpHzvjWhbBsiUCJ9yoNmPtcK3ML1qTRZWdTQO1KAtfpwed%2F&X-Amz-Signature=9e0c020f06c3f7598d0cf2c74da9d01b9addf7c1b9e5a3abc12859bb7f029753&X-Amz-SignedHeaders=host&x-id=GetObject)

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
