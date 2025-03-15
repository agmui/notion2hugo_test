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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAINCXA%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGbQlUZA5N3rioe%2FnESA83MWtF%2FAmzFNtMCU2yL2zB7AiEA7a9JppAoChRi7xWf13dZo5iPw0qjif5OED6xWbZfQS4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI9%2FqI20EU9j1awYOircA%2BmXt6nojPuazW8ybhJnfAKMDK04aPuu1xcz5CPNZJuW5CHZWbfOfZOWqhxBYyXTV%2BqXoWUvD7%2B%2FmNnc3g0tkdgnjv7UhK3mAdWTDZDSMBTO4mmYI6Pq6e9NixllZ58y2PRLFsdrAeD4ga35KZD%2FaWLJmxPYYg0M%2Fg%2BfMbQk8CaKsISqBoNVr9u3tCuVBUyiS32T2wSKQp1Ob85EDaecOXH3nVM5kkf1WlzTkvejN9qG7lkh09mdKC9CS7g37B6QNJMUB9DlUkEj5J%2F8FAonNE5M7gK%2Fc%2Bl1PIdpw9TFUkmEDdgLhLW%2BgFWQfo8Nz1wwGELR4OwepqQiBw5yRm4LB1HgALF71b6r0DckMA8XAG1w8d8KTstqmTUEGQAOsVgCAlACGE%2BLviaZcKDQ90ZOEsh%2B0yhD5a4EULJ3WCTs3MA%2BChGQ7OSCOuxtlq%2FbxHc6BkpHnbPjPYYfWt4C4ogppTvhB%2Ffn%2Fp1WoseYRzZ8wQTbY970CUbazr%2FR7SnwX6D3JEf36HxCp4aSgnptofXKheDsgmHRJeIkESQfYqTNx%2FAeJyiO4HBNWW3sVz0yyXM29nrPVFgfXMX6XRg3yXAq1y5SkG1c1dURbcOhuSrHaI7qXyArzKdSUAy%2FD9thMJTE1L4GOqUBLui1yMnHqwcvnA3U6m8kSmgx0yoZW3gmAE7e1K57PxM1YTvphWp8WzyDVPeylGRIQ%2FNTSfBwgFVgdXiwNZZSQv5qpGptH6JEg%2B7p1mQ8P0R%2F0lDz9%2FieHuZdEmXDtKvtYx01bOqDGgoosPc%2FBFtdy6ml092lDo5lykyIYGFiEbTp%2FdBPdIzdmnyr8B3%2Fr3D0RZ1%2B8IKrQdFQA7jGfqjmM%2F90Kh3Z&X-Amz-Signature=cd58940962e9f20482c88b8f3ac39d3713ff3affd512f24c29b31298b9fc2be5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SAUXTTM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBFAK2FheiRxlAb%2Fb5ali39TScr3Mn0dRXA3PoZ8MZ8QIhAJu7b3xCmxlPncQkTmDhtqWE3qSKJlUmhASsV332QZQ8Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwHdZPTGgZuadVJOKAq3AMRK6oApmzTz%2FVD13VWqXSn0%2Blwl5ThN1Cs6wK7cEYhK9ta4x0iisS1AYJNGCvBdxEUOpCo0DdPWJAXSonIYwda9tFhuIyicRVM9D4c5DB35AjbqFoGWw85N8AobiFzV%2BBJfGC3M0w97O32vYM2mXKD5kSdCZH3cLnMpG6mo%2F1PQNcrmwb8yqNxiAoFuZMDRyQXpqKAoGpScIHyz8%2B2Ckwhkl2YZc4IgDJX3bYnT7S8zZ32IgQhJiuvTo2EwRFhuMA0ZCEguuaxDbGK9RIzLa8ox8CZaFCqW1pfDI1Rv%2BasA9mPlPekh5I%2FnawxTc1TCA9URdzQJdcZKaKgsrAsx%2B%2Fq%2FWSb0wL9%2B6d4EtnL6Jv50tyrjucHK%2B41z6%2Bz%2FabQeg0Ucgg0cdBMuwJ2mhzvw1FvoshfhMp4o9iCx7pGUJpgV3iY1qabBXbqCmgkaK3Rf134gYB5jEb4r8XgK%2FmXCVKX%2FPydHVAemWCF14iOvyjfRiIw%2FR3%2BOxpPxGD5pcRUfzZnfNSD35CNAT46KLdRm6Xbq%2BTXih40kfoQ%2BXQVMISRJPlkkRd9emjV0lcZZCqVzUO4eXGiB%2FX1ESfio4yjuO2eN%2BQ2eYeK1GVW1eY5TKQwkPKS2nZO2yesLGee9zCZxNS%2BBjqkAd71x6GE4RTXD0u4WW%2FFP0QkBkeOw05i24PYnvcVKyBnSscq%2B1GkiEXjssiwnjzBsxBCjrm40e8V4KxuUGfCm6uyb0Q0DVZ0Pui%2FIAAM7Z2LZUUNQrfOmQ%2FMGJIadLNdryw1%2BVS78BjtWiy1zox7xYOJW%2Fp6qT%2BXty30DwggHIhgfmFcyjaWXn40p%2FW7eZEWnYtpJEmfoH%2B1B9Dyrs0Fo3ALhFqr&X-Amz-Signature=ede7e62519aba0fcf87ecfe5122d484061fe57d4d139a5a29ebcae90c1aa707f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
