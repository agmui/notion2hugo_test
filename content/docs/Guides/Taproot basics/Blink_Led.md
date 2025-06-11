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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKJJL2QL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDJC68wk%2FqG2ioKmpnsK%2F2LHj9HbeqiYQU9r6jPcTvxiwIhAOrqZJuIInYcAVIwxKa2nkKy2FJ0gDh96bq5MCnrI%2BpRKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1NUvJ9qJGSRPOhssq3AOtLLiB86V9an59yYucGPZ0zKFJFKezww9ojpp4LrUIhLFJs6NjrfZknqI20oD4ikN5U%2FnElnKp%2BdL9u33EsFT9JzvvlM5BlV%2Bbq9oN8tWqO57ieq%2FayFns55V9CD%2BQyccFnWmND2KzVUBDW%2BURVa0h5l%2FhFGk8Om24MqWrd02z6AaiKlnw11rb22UpY0iRYxf%2BiHh3y08cArXEu9X6nocGBKCUNDWLY%2FR7VpJbMRRDvVm%2BDHM8cTX1EgwsXZxTiZ0VBWvBv1aaTNHwcUQgVrT44%2FrLlTZCKaOKNaJRRobqtciFaCLYSgronn3p72%2BR2l%2FwsEk8fiDXKi%2F456rYg7Wc%2Fbs79KJewOgPluspEfrENLfBaFMUfFzVzCEZk7O4bIMNxvnmgw9nTFRq8%2FRQ%2BSkAxBuIaNK9advzVh%2FgJbDQNZRrwA1eCCFi5OjV0Yg8hquy4HO%2B1P2LP%2Bdtw6E7WX6efUcmW1vnE7Psi3kGuwJnC%2FfTE2tHENPRpG9rt2wnfOVy8y5co8cEIuH6JS%2FOSzm6dQ4GHkOwEz7u0g%2F%2FKqVxjy5vLv02h0BYtXnlykRGVqCIzG2Bd7ajCzCst06Pf3EfCZ2GS9sVQzPUIYUok0N%2BwqPQJiV3eTlrtXpN5TDohqjCBjqkAY0MNfN1Seb9l0AK9s01JlJDuGTyXywkwd0%2BO5x4wPXc%2FqS6DvETjI4h5Joq3OWmfMp65oiAMos7%2BZ2bcuNjUheS%2FN2AIBz1OOSzJvCF95JvVBwA0lWRSsp%2FPThtHhONnntg0a0oUsVbm6C55mFxHjREfhpdTgixmv3rrcOOdpGlODSSez75r%2F61WAryH1Blxl3bgZUvDIIvNVE1A89WgDQB6nPr&X-Amz-Signature=0e51f00a531e5f9372ca0eddcb58c67e105c8c1263dc2dffbc402cc6b5f44da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOUFEJY%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIASnamEWCWqVPLYFXEAMEm2%2BtXOqcDWFUae1joRpdc3AAiEApxn2j45SKOvExqS%2FbczTvOBPcHoKWnnZgiUw58arNzUqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANgSjvx0LlDvzY0vircA0U8iMMZeD0XqgnWnk%2FOMd89qBboYLZZ3mlCragKKB%2FBS%2FPVvgbIczs7a50cDN5wOKrfcKxS9qlgydTcaj8KGsdlT3KhAZtJNbBENrdljSZ%2Bh8J6HjuIrZRlr9hHdsntDyd6YYbrVQ%2But58cbjTwikYKPEmbrJtzJkiPEC2KGXCPPDZIBgao5xcAozs0CY2XutOb64MIlUzmSY1gG3pTSHx3Opnnr0%2FhQwAMUL9fc0cMXq1DDSxxEl5%2BI9ccXsefuqp22ddGEpKAHbXYw%2FecRDDWT1HNKlKQDZ9Sv5vQVI7f5SrQJdr%2B1ZrPSguEkkcvFFcl9R8Nv0NNTbPbPuNNqkpgSWS4Rw1s0276AVxHfEL6rvgz5fm%2B12FybvWAPYmKIAOCULeZfFFDLJVCV6AhEnD15lk3vHZlkzrqB%2FdLJbOoLTiM2LCRhD40EjFjdPxRDDGrw36Y5pD32gQT8Co9NLUvFBCZ87obH2W34feqhWO9N%2FyL1gQPFsIL%2FJHseNmVTxTG9tkBhbnMFceIXp8H5dz6X8Pg%2BEibAhuql72ZRqnaDL56ccwUOB7SimM%2BBrPL2umPJ%2BX%2BYL9EB%2BUhQ8H8pYeNCbBdKPTytq0oesekVym%2BQl6N09BB%2B%2BBJ1%2FFFMPaGqMIGOqUBSukXTA3d%2B5H86TVGlprPM%2Fg8AbiL70R3VVcMKp%2FUfrYSJTEv6xS6Hwt2qBlbyY2LsTwo8Nhjo40XioDjBzIl8s3lkBT%2FTqrGgz%2BJaYJFv63Tngj9DuhOtQyek7oHTJWgYMRRhpJwVoH%2Be7PKDxV551cRRtSC4h%2BmzdZO8ty3%2B6Wrckirtl0E8V8tim7MceJxcOLn83uh%2BAQIGWytJFIX494mB%2Fwq&X-Amz-Signature=8978980d15cf1aa8e8d82c1df0e900069258d4feaa6cfaa87665164a6b3c0f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
