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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622JHEWDB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFWERHqPV9SfhXAs2pku0gQrG5WaKum0jUT0c8NHRIJsAiATZV8c04nXS4iS6zNKx3jIkTaijuDk%2BFlHIXijgG4i5Sr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMaNDM1xKXf%2BHQxs%2FiKtwDQKOBXcLPdCc4aY6Bm46nAKXWBS4YXcSS%2FUVOLzwNM8MB7zVhExeuaU0A7dtwJJywRrYWe8KbyBCDnjJ19QyDDNuAUCK0rQPcfDyBNpZb%2FxCZmXQX2ZYQ9asdyc7ZTXpxM0oci9PHdOm3A2h1InwxLGYHPRfxDc4BN5MTYOnwN2ES5H%2ByuTdybUjz370WQViC3bKikDjXqfoZQKuVBP9OTPxE72lGdiIqfq2dSF6QoJNXnrK0yBCmoTFuiGmSn1Wpc9VUiE3XyCu6qtdLxULMRCu9SZA7iiH%2BEnPlDV2XBb95zm1ta6Ixh1TFeTVMoZTikryt%2B0sbX2XAdEDfKiErjjXq3xKOwz0cf70i32vL7t%2FYSOYzkZ7UXB0VkMuCE9AlGuBBfVuOuMmr4h43PtCGa3%2FUmhUKDarv%2FsYflLCQGxGzl54TGcQH2U9DBfpZU8XkO4gL%2BWL3kAQekNFu4pAhZJFzsd8Z6RDiOTUUeB0I7p%2FWw4BBOvy6uGZ6glAziackKhDukjeMLUT5ATA2iw6cf932a7LMNocVyMewI%2BhrSoaxBw%2BPDqhAoYZQ9eeLqL32ldOslzVsmDdcDPCXjcjwmeG%2BRxgruUnU7yTI31O9CW4lcb9WHnkgw3DzU0Ewh9iHwgY6pgGUNizHIqdzI8pHjXSSsxlsZkLUuJW%2BfPJurHg0y2zLxTPo9pf6WInzJItWyA8lFAraAUwxaVhP9Zvs38fH4JHCxnAPnTa%2F3LAdix3Pu%2Fwq4%2F70j1LZppy55XsY1R%2BRXOP1CWw7JSH8CxLTdbwnWQd0UAP3O8iFzEkdUjyF%2Fv0CVGwSQJdSRISwpFRARsXJjSS7B7qCbmO3aJctWIR0ZwxuZ9ZsrAZt&X-Amz-Signature=e76006f6687bfea151ee72178f69d6b6fcb70d6b6c21647f7adb3c790349266f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WUIELJ5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBrfkvk4WbI%2BlMnlTwpxGYObNQ992EG5H%2BAqzO9%2F%2B5mEAiBjAxVIt0EIIhnqr3c2KT3QOXZ55x6LWFiTuo1V17tQtir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMBIQh%2Bosuo5i3Q37qKtwD9Pzp79uX3srrbfRJJJrwmz6Y5Hn4CWo4spuJms0TiCS0r3xGkB4qk22NWy4aT1rGwq%2BaeCYMSocM3hVMQVVz0YcGpNe8CMCiPWp%2Bj7Sh98TycFElXzlMxvjGxBqUB3xfB3X%2B1P3jhUfLu%2FHYANQ0Kb1WtllFz1nV20L9KdpV3IPpPNsVdhe5fDDwGz7CYaP%2FChPbkhQA6kStUijoiDIBHMwFhrLNsQwDb%2BbENjli5a0nL4PLmUIaDfrSShXqngCxGQciTfdyPEU6Ubhp2qD4ZMBBWTuek8U05BEAn8fJhVp2ifu3RFcwuh5BsvwSyqAd8UlNKr8L%2FtdnL3xceAf8xCMh2cH6P%2FIyM60Do7FjQu6IFKXbiVtQt6OItWXs0MlD5JC2PeOLJtoegzUDPxRTLd4HSGAg1emfZpK%2BRKfOszteFKCo%2FxVcWTehbRsFFYdSBVW%2B0IZgaUU7XNYggFMveOq7GF7UnFe%2FHvtAdUhxsx0u327dAmMQ%2BLjGX%2FcI4HuGLf%2FnVri4QMc0cSWG6n5zbGn8fkAz7QP0gy%2Fhvw4g6iJ%2FHvMP4vFarjcbErhnwUuAmMV0mYolsKuTyKmcUHkUwfNyHpQpD4unemRL2l5tI5YgmMtw9Is1K2jmvbMw%2BteHwgY6pgGW4SgPT9pW6bygI9zl4WqE7J1oijIHmvWk5YJa1uvzNUqhO22HE8LxwGen5GDcFGBO37LegHQcDDN%2BId1myz3QsD5Ufpv1wfhqKYu0y5LALSKT42gk9K590M5CZ0l4ozFgqWtSaTnaFEfYEWn7Tj86d4lkX4ZiBAyXa%2BzE5gA19hQ3vdGdG3TUPrehOv5rYMIvo%2FGEjPis9P%2F0bEDG7C2i42YLWX5R&X-Amz-Signature=eff8f8cb441bfccc17f2b9adaaa44b7315d73133309062815421de486c4e7497&X-Amz-SignedHeaders=host&x-id=GetObject)

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
