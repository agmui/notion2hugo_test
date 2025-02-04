---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5DV4D7N%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFW20rFKrToSKDTcu3wVdnIJgme7qyGt%2FHm%2BnoqxlSUtAiAMdXVB07aIR%2BJ3cM6bkMicjAybdjAlM2LbBdtM9nvtNSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMBL%2FOocyzN2bfo8m6KtwDUvnjEFlMzDFRZzfvZbfrmyobS8LqNos7Ot71uIRHC%2Bb3A8uMe950o%2FRpjY3QDi9ESluYboNs9kQlqG9H9QPyzE1%2BgEXiZAU7gUzckXTLltYV27tJzL3QtQcBNyxbmv1d5IWeEHb6ck%2Bk%2B8aigjwSkEGrMmyuq6Gmp%2BFAPTxUE9%2Fp2MogChdngXJCDeIImyv4IfP7q0N8TwYKcJ1o0nFNyLu66cV3vVVD9c0qE%2BgqftLehU4N60i7fWxhfUk5FSQ3qtgaqxm0nye4TJlbuoqZ8pSikye5f0Q8qzKyzC0NYigiNbA1pGk2ET5MGpWDYVQddD%2BTAyfVAM6vs3jqJOPF61b0SN%2Byni4Eq3B73SoEomCFymcbkHpJWiX%2FlDcAjARtzUhMMh5s2jXCend3ARv%2B%2FuDcycuctLR9hcMoTovgO2Qk0DD8lZkZa1%2FXoen3cSFnnKPszJCw1kRs8xDi2SPlItmxF2BhpkhfRPaXWFGu04gp1y7V2Fsz4XDX3IXDxfT9xS%2FhzW22e8iOIHZk9GjoOP0B4Zy%2FWRQyV6z%2BLAkUBH5mRkMcoMQzDhGjAr8NLNB6JUjOYpKAg7BpPj3LhgmXNQbsA9tgK%2BY4MQU4QZOF14czyk%2F%2FfOt8y68GPNkwnZWKvQY6pgE4Aq6r%2F6Km3zaQHJsJhST15V8o1R%2FTdo1kxiF0Pk6Mrr5XPIy5AEQUpRAXGKskMeL1BqxIeODSgxaWFnruhx7KRXf1oyoA0vDJD14LBk5Pr4%2FA1k%2FSHE92iEVh4H5Z%2BLh6MQNGn8tzKb3UVdMAtaftM6yVPf3d726fKaGovaTvoej0LL%2BF%2Ba%2FkegmHlSGYa3fSSybMuXjD%2B2Pi3VXZNSEzAOgRGYt5&X-Amz-Signature=f58e91ee2e5e030a13caf724153c9fbc8784efeaddf4ce87f4099b7b8771e81d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626RS3PHQ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC%2FKDXtHjmvRVX1zM%2BTQP6blBdMPLCD%2Biu0tvWmHGxTpQIhALK09SG6ze0uvYu3o9Ss13TlOTLjXI9aQlU8JONMLfK5Kv8DCDcQABoMNjM3NDIzMTgzODA1Igz1I82qtN%2FFdiwSlkAq3ANjfRxPDSuDUXmPn6bG9v7ryk%2BrqjZStQqXP9KaBVy%2F3tGPBcZjOxDzGDNoccDZhA4JOSB9sJuDCfVDEhKbTnwv16r0ZdOfMqdorqdyfSy5Ztq4XyQ7rn2gz4cKlRPxMYk0mssx%2BWhEFkhrqkvsOe%2F2hf%2BkywbA9aePucFfk3YxxgAbZoftZqY%2BHdEptkFQFSe3KFN1Q1aMitZ7iisdaSuuLhDIOyyzZtzgAIHeNCK88X1G9m2K0hY%2B6rKzHdp%2FpaAMInMCfDt002RHXlZxneOYZ2mP6dfw796pDdu2obFJ%2Bti08VkIzItR4ghJMG%2B8n49Fed0jqfidePSkBrqWel%2Fo9yZju6Y12Q0Qmd1CiEeBSnVSGSa9Pq3rmlmzzBDy%2F50yx0JnOsY4oQ6UF%2BWGKQATpeI18gjXpxQpZ79X1dXYf5ZI%2FG5aD3HMk9VymqfxgeAu1escQSi57XxLol6EAMHEVQ5P3TT6RHVF8EUE0wFUoKd9FWdFokqRmZJ%2Br4mz3f%2FQ8cdf%2Bct0gKEXuhXS%2BzgIDMad9z3irOiaFEvdlTYY85H9tpICTsgfoxBhltLcVdMcpsSomik2ue4XC4YVjmwf%2Bh7Cb6NKytxCzEQFOkWX67sbAhwlM0qeHK9f9jCUlYq9BjqkAev7h2PakpZSXIT3YRZEW2KmEBH3LEj9vq5z15csgaDgUuPhGGclEwKCk2ab2X%2B3Yn3Dlj16c1wnxs6gXSM2lPkcmavDI4Hhh%2Bd4fqdQa4I4W3YaVyqCCC1GhcbKtHYWxyXMkIacDVnHUKrdxGIzuvnGTDseeNU6aQHobJxYqHwMwpUBqG%2FsrKqF%2BkDgca2fF3BvD7n1HPWxgiX1SZfV0ZCUfGF8&X-Amz-Signature=c864edecdf829ef63de01591345fd65ac84add10b634320b2df3b0dd88f423fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
