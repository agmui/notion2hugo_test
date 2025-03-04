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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRWD2N44%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwEo7L%2Bpz68dH5v4Z5qyQrgUVmizdXDgC79hnCyvjz5AiBU3GzE%2FFiovuZIOnjQSDWFw9M3A99jWivlJ0ciP2e5mCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNAto3wAXv%2FiD9aasKtwDZgcVeVTpTHWWmuqWmVylDYTInJHV%2FnoRo%2BLu5eTybNzLfMq1LfqFEBmUft7akPISZxwb8v2FTYFZm%2BKnczE0sk6dNh9HIg8eDrHt%2BhNvVGc6bcBdHVkGf422hWg0PiryMQsiFykl86LGnpIA4MSbLwkFNWm7zTslke0etvnSjAxKnkt7xLCvmthngCBuFli%2BGYuxDz2WoL65gNNbkhb5Vmm3Xpf83xxojVnBUTztrQCezGmQQ0gmZHRseGA0CxR9%2BAVCeKPm4Zen10%2BvKMCoVvGPtE2qLoCotnAxde3OMHRNkAfTUIU%2FPd0ehqjuZEjDNvg7%2FSBAq%2FdScJF%2F4oeL9lB5G3c61Zo7eAfk7q3CImjqXZxxQrTtPDByrJgvi%2BPm8XCdNo2yMhkeDwIKvsWOb7adKQTgZWNP3JFOugfoggasI7Q7Du0R4oydnoffdFsUcTfBgHA4BxToQeBc5Op7zFqNcsDU6fn9o2PqGXr5%2FqZhPVkmD%2BJiXNdZckF91HrVUmYx1Vpo6U06OKz2Ux8t25gsdB4AvHMTldd7nLRbV3bvpTD52eu%2BPyjNkcdLGxyQK1unD52A2g%2FwI%2Fw1rf0PpPeFuQVBcnYcIrwz6fMyAzcJ4I%2BVisKCXsITsgYwzaObvgY6pgHXLNM3aHr1KokrjPp29%2Fv%2B5Wl7oq0hDYLjkOgwgh0NiqGlV8e2vsV%2FTxzb5aOU18IAOPRk%2BTWtxI%2BHWMNoxB1TlCWd%2BFTsM7mfhPPdpLa08bDT7y5u9Crv5FbrhP2OeJ5VdoMhr59Vdzuz%2BULh%2BHKnS%2B4K3jWnlV9ps%2BWGhExyH0tpmgIctEkHKcRLWXDsdCSSh6BtyoPPcNtbdl%2BKerGmCOQR%2F0hF&X-Amz-Signature=55873960ec3f7c716781bd3889647159a5e29a5ed59d99fae4cd179231dc4437&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KKMKQ3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuGGTvCCpTS8hgcZpbNeJIRBns67WHIbeDG3LApbfdgwIgM7jBmu%2Fxgjn%2FMrIGiOvJmEblmYVBMh9l4crs5aBdyRoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC75aG6OdDpp9oMQ7CrcA1%2F8S4rGvWZgAYqFYY1W%2FpPe%2BS6AmnB6QuXVAWCIlsrv4B9etJ2wPBH3nvn6hW8GGthhnJoAxwAdx5uQl9vAMTPUFGnZw0j00wM4oZyq1STtA5wKxX76XF5TN2koP0RC9U9niHgr%2BWxwvIjx6IG57hdRlCG%2FwBKhmd5l4eQOZCJ7Zi8GXR7Pl8eejsY8wvlRZTP%2B%2FuCzaMHv1pM03xjcAQDoet7TQp35BJ0XFG%2FdX59IE7nZr8M41lzl%2Fyag8AT%2BwMPU%2B4yRJL0DCetvj2YRplLrUmhuR6NHAPYGpkPnG128t4ZaQg1XbUijOZdPHvHDCXxUkTXx1NTU3QUhEzAN%2BUKVizsqof%2B%2FSpix1U81j%2FAVeKTmRiYP7JuRDVGcKarMwBm1tODCtW1O%2FrZ06oD4xRAYMOk3PBNOIOjZ%2FavKfDgTyCLvgRQEXOmU3VXyxD3IhrQMvQTrPaOCI5%2FRlWLn0Cb7JYPq7u3svOpXA1E2G4pTC8bd2eWnWZTQzsX2tsl4tlUngU873bGxlsXJj%2Bp7%2FqTg%2BLchypzpT806eueAi3GMbplT0606doqEHvLjbPVzWc5dl7z8RubkOTSduGG6c115Bw9uICHJ0J3eev7Rj6GoTok9cQcLmFVlVyMcMPqjm74GOqUBGQv1uP7U4pqY7fi1CaoI7uk6KWvZpV9pAKeH2bnueIsgfQxfjpB0UxJIpSEQ960tSejZAxsQlPlbrHP1vZYkHBbJRLUD5lBtS%2F7ClFN3UcVYzwwJH%2B1bRxPM90sxlxGk4451fLuEVPfpA%2BFgPrzrYY9eEHEuRIJToIMpNCw2qhgEDPxn%2Bql6GqjrhGaGTA0u0SouIlNcTvoz%2Fj%2FofB0Xccq7OXx2&X-Amz-Signature=c61330b4af0e1b9cc67ebfb7d72c50ffa3934074ed6fc36c2db6231a4c5f97e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
