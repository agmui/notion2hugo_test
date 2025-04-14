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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOR5KUW%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEecKCnZZeLRVY%2Fsp0srVAea%2B8Ia5qgl1Xho8bdsD9%2B7AiAnNAzLUnyRBdaa3RmzLKCKZfMeuML9urTRlEMvtxqsryr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMfWNF4R%2BdMPuzSMrcKtwD1FaOkg49tiDhNr95C5%2FguU3E46AK5i5Elj0NzVkjmNFKQd8MgNh0jEy%2F7MGaOQXv3fkgOE%2FDa2QbA6k4%2BxJoOrE9xwuEiX1J4kGMG9INXxmEKEA2WQ0iuE6aMsV%2BXj2tmsBy%2BFFUESvdrwPhZNxJJmdbWH6fTl%2FAmvizfeWw1SD8i5XtTr1hBMlTof396RkpNQary%2F73KFcMi%2FaBjGAyqDB5pZcYz9kVayDL4ettZakTPcx6Pz9bObV%2ByocDQGPMnTGWoeU1Uy10%2BEGNijxYgczXsweQOQGQmy27yZpbA1M2crnjCDBPJKC4dVzNtEyDajSb3vZg756BDDMXdU1jc2QU559KRHsov9KU0q4BM4sP7rSSPZB%2FddsznAwEjDUblvi5uurJ3%2BQvDtmZHlOhBv1iRc6EFVviCiliXdThkR12ertW8WGhbWkYwL4XWr2i1Uk2z74CeeblE3cHfsAeXsnO8qtgNQ6KS5ktypM9GGKgF60ue4l3EnjWiFoUsajFYTAgHWWxHMv67VGaSuahhrqB111VA3HZM9XBGJUajU3ygxDoA5SDLgS34f41xEcqe7MhiTcRtVzrQkDZwR0ZngLBZE6ywoq3Nxn3oZChXZGLPGEt0BNIS8RuiFYwjOv1vwY6pgGRMGO3veDIWGieaMWKGF39JoQj2shdHld6wJ7Fye3M6oCKCa0nllKSntPtZzOUh12IM3ioFYaHt8xDPXbW97C1HyR39s73gwhg2YxCexcALDj2yob2RhGKHVr2JOqB13igGfKed6YO%2BXptX0hnJDtalmfgHrir4xZ1TvpF1DOdcaUkNj%2BUCL4UteCInYgTdirjawXOPu7YEa9KLf3%2BDsajOoREq7Oc&X-Amz-Signature=0404163d4271a088c0bc24ef89d518f3aa17d29b0b5d460578162c43dc56fbda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X3XRAMN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7EBfvCd%2FhCAfXcxX7zPOHamSOesd75M58lWPkmQhtsQIgWP8ZbL5Lmt%2BU71W5ge1qdwNHipkV%2BQXcgaCUaeZMV6Mq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDBpzrcpCr9vemwl0JSrcA22mEwZ2d6z6%2B4catuburSFJdPJ8l1Zv5GsrM%2FMpmvfiITHkT1DptzTLFkAKcIU0nuBRbYCMPZUaLGnjCnkNvZYF%2FrUsaCQKmOZC4koGtOBHKUZ80FfQFrBReTyP1Viub6g29I2EG0%2Be0Kc6IUJOgrr%2FrYBpQfURePfbjabidnFW%2FMYTRAEmpQNYyn9z4N6JI8E2wty7oFAPy8C8vvAxP8CVdU%2B9kmuwb1wy1pcVem898UifYAPaRaTYQnFM9l6H%2FLXlkeo5cj%2BgIKSOHtafFMfFAvaDHRrRFourOqbXRWdIQpvEeFKBx4i4ZfcA%2FS9OcfN3zmIdbbdEQVSzceqdBCJnyqCvQ5KEy1ycSjrLLjsLLuwjuhdBG9GyOXzKa%2BNwsxGMxdOsFW01RBp4Y2%2FquoFXEi7H4sDwkNqXDxWM0nrQDRAg7GXqbyFdrvWx4JZY2Ew%2FMPMY6jziQeQy7syTNAWj6Lya2lHHaCdjS3cQ5Ux0gkboD7X6WBvcOlZXs%2Fj4ibL8FlUpjBHYscwYw5jDH1sBSiJYhYGgrJZU5cTaNX329Wmq1N3s6L7gNDTSOytkVSkMLOAz7eKSLcd%2Bp5RW0f6cEsPItgxwkCj2W%2BjT7Y21OOCTeXZbOJWEOOS7MKnr9b8GOqUBeqmIxrySB9pL8YqN%2F3mSIJRtDt1r3H4MFARmiyO0uhn0K30srXKPZU5UJr2pc3jsKN0IS7eLtgSNLwOHkkm%2FNfJeAhxq%2Bxf4IbGXIFcfwRf4%2Fi%2B73Gf5bHnEcrI64eHY9lgA81zDBHbMiu5xu5MBfukCIrE3yebsAThwHM1KpLmjSBEJJcCEKma67nn2JeI%2FimdN6NBs7wZbb4duhyb3DF3q16wo&X-Amz-Signature=fe1e18526ef60f8dca4d35d811a510355e4e65707a279e21268363719e59c385&X-Amz-SignedHeaders=host&x-id=GetObject)

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
