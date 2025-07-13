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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUEEIIO%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNide6iLUMo3XWlfogjizuqULz%2FHksz1fB0cMcwBhZ4AIgbDwAh3XwULe8iJF4TYdumnBNJGELWJFzbmibI9%2BJQM0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIFkR9H2Md3BxaJSHSrcAxwCGEChuYsda4UU3iiKhJ9EkvcZcvbuHwTwJhBOSIW2XHrNSIP2KE5lD020W3FmjNQvX%2F7hptfwm0ZbqhSxoK95IzN2Om2sRJOgsBZbOgVJjo8DUFyM5R8WuF66NnH2WM2EZc2%2B098wrO2QsIRncoVNEp5fGyE%2B%2FNrtbPoo%2Fdznvp9z7hf1NhMGt4Q1NT1w%2FYsHNw1GEXOLUFA7SsvhnXZ8oflr6bRg5%2FYOs1d4%2BGc%2BSH7y3rKZeYAuDyTBO8y83NmvC4XzxwmQF8NXIujYgPZEkiax2Oo1RlBZow0VW69NKmjwHYK2EtMTKtP1IWEdvdqMDfY%2B7aoJCCX8Z%2BYu1q9fTwd9ApAzBPf0BeV6gJvZoZckRHAf96p8A72ZWOcUj0z9R3l19TE8agWXsOfO%2FkAUAGjn%2Bxuivs67J5Ixl3Nhy5EjPuTtvazu7itHkZmTB8nuBQtaVd8PDFx1jqDoBbRFChUQhgciLXJ7UlcgZECf0sStBe3i53dRbR9cODJ2k8psd%2B%2F%2FDFRmqnr6sb0nNsLTitvm9gbS2EDuvoQas7dLp3hp%2BtisEwDG5zPbCYorD1dHc3i%2F3NZ0Hep2JyqcyqnPvaCmN%2BbWatP%2B%2BsLuZS3Cl4SivheaYp7KmZoKMKqWz8MGOqUBF%2FK2urgEEskJgmB60SEnfg%2FJpRvh2fVHCrlwRbgWtfHtFSRVXOkZmQcEQaYrsZGq7I%2F76zSVp0Xsc8AJ%2FaYSHkBKyKC6jxGBOrxrF0K%2BdXndrbtPIZ8UKxXnMynqWXohtB%2BRdtGZoPRoSYRlA9XBe%2FEQ24foyLkrngqqZZaWHi5aaduW%2FX3lRBJ6EZoNZwW8QzH%2Fq4nLh1VePCbiI2gbn9ZzE4tt&X-Amz-Signature=b3f3a0268718ecccf3cc6a1cead6b9691478fba9740ea18926b6cbb73df60f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RLGXVYR%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDVRxQb2aimePcgkMV9c%2FRqvrckXQDzpsdCDiRNZgbNQIgQqRArQJxJSksO1%2FAI9XnmQDArOmIyhw%2BWmbHiVeG8cwq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDK9yInfadh%2BplvRQHircA%2F6o3pivHeTZcMM3SdLDfpAnMEDSXpYNX4vpSmGnjEzIDk6fIoltALAboz5wRLLHsvPGt0h2zmW2zbk%2FBEOf5TyTkdYf4a1j%2F3gqaqgeN%2BsrBH0Hr0cnOJ0ZxBezZgcNQKfQyprzi72p342RWlASQn1EuoKKlUrX%2BUrdv%2Bs%2FRL83xNhSaEnzK3fKauq6YvhZVmXAwep27C%2FLgn%2Fjzo%2FGKDxCGCWenuplY2KFG1%2BA9f75fxYZ%2BblsDwN3o%2BynlmbyLlZxsBjBZexuScPjMDxWiiCUMZ2OVWbsW8HNsswHahfIhYPOlvyAuX5SonOvwF8nptS80wIzX9JgmEbFvLoKrP3zHnK%2BeELUvlmLU0RAaR%2FD0Aby6cr%2BIL6KYfBcqofarw5YKN5sa9%2FkXby5y6dUmquBwe1SVCEj7mXmHoq3cUpkDRejnMVrXMAS%2BHQnoZDE9xAp0Q84ACtCXnAkfXR4IkBoAkQTrtw%2Bq45Xz9eIFIls2o%2BOoQxoLTksgmYOARD%2FI725N0Phi030zssAJ2HPxAnzn%2BL2KJ26EbOYtPConKwEkBsR%2F4gX3f9AN3NzIn8SNuCJgmCjwW07zQ49YE85EfElmaGP55imtCcvXt%2BEC6u%2FilUAUOVHiM557y4lMMaWz8MGOqUBdtQgpY4FN7APpt3cy96MXjnQIbgnWqTtKH41OBGerOJDl%2Fuw0qaj6zmb5tlmGPF8wfckhwiI69xf%2F7CysnNGjPtqEsQWrNIV%2F6Y3UI%2BPMX70wJIAxy3npLMexYYajeTaHhZycDVIqyXH791TJp31lO4duMcGk8uun9FFYBwxwvKESfzvBeWVTNyykIl98sREoGMzS8t4LDdlnTa3GQWK6HU2pQ3f&X-Amz-Signature=8ee43cf07ccc48c82475d6d501b9a8d357b74470b28a4958bd9ca7e8740de0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
