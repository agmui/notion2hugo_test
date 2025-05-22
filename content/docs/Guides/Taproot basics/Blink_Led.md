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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUYMWH6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFRmBUs7OTGj2oxWhbwgrBZTCzn98C%2BmmC3Ny5w6JVinAiEAotJsCUmEllWP6lSPXldU%2B%2FDO%2Fj2lR%2BSqJcg%2Fr2YqDCoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOS0kSk1ctwbgG5y1CrcAxp0XIkxKEqZdm0WYc%2B8PL4Hj9dYoq3UmdFUg4blajLKaL66nnSAp8GLikVYO1wKjXiei86xsq%2B4xqRShZs04J2o0MVB1O6iZdPNr5bDIN6WNhmdJSYw5T90SValtqz7SYOWQcUlpOW33yYxjvGqIA2%2F3CwDxW265x98lPRBfCKnztlBZ%2BB5w%2F8Cca0r6%2BSBS7jT64KBZYS34twxE3Hw01Y9K9Lc80R23yGivh3EWjJHOZAMw3MFp6KHTo6bdZ8u68SqQMdKGDjqHy8%2F842eDZDpT%2BgELkFmgHBggEWGhA%2FJLqHyvT87Wn4CMoOPDTG5fgg86AAU2Uom%2B7C998yDJW2jnBweyVTn37GMDEMF8Dy5fZle8D6IhUnLCIhfz8xtqcTMN7o87WGtuocM%2BR4cwdWCAUwqwdsz7HgwLbSHtmpJdQf7%2FTERo71N3csdQcInnACTtdU91qj%2FcNbigZvQHaCBkUyB3nnMqSMnHlKoGbdUlncoZ2368%2Be8%2BKuV6n6KwLvY7MyzoXB3%2FVf7xvBiwHzOZTXz609io8bbAqwAqOjY2X54d%2Fimg5gQteQDiNy4W5c7U8d4HYIHRfJYPL7236PQjei4vh0JvOEZ0QcgCAUrGJXG1d7buDR9iL9TMKLhvMEGOqUBwHeQAVNqrHEscmGT%2By29vlYa1zbI7dusGHSShN1aYWR5qfO5QKWRhGDdCVNF46b0uv00vmVTGCzjVeAUD%2Fl43M2b2PlzHw1Ym%2BHGklltrgHN7dn469qucegJjjpYVOE0pdX7GCCptNvXxHgbLD%2FtUVHx9NfNtXSSoimX%2FHlXLuK37xp242EfZjmF%2BQnBmQsLdY%2BgvXlWTMJ95KcIkGdQV%2Bh7CNmK&X-Amz-Signature=76415d307764aeff88536adeb0e74b37044adf34f65945b856abcf1c5de61258&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY447C3Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2Bo5uegBvqB3eaulSVRGgZbCbp%2FT3ilh4o9nzbH71edAiBEMrIa0hlyW%2F1TEsDPN5mQnzDf7jMzKsLsgFr7Y6jqnSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPu2IU3v7qkiYK5cSKtwDIo5U97IcmB8sC10l9jQ7aq40CRLzwUUm7uwps5vG3Ra48PlemZHoEzQzfwuAd%2FsYAfltnUAHGos92xKUa87gvH0IrDr18Bd8joyRHr50i132%2FE49d20W8eTSzsaonwPU%2BoYIel1s64Ni%2FNJcIYzI%2B5DnNthplna4Qzvnll%2BWGKXXWWYzDiKrHTd9TrPHuCIcbDqpO91cFAO%2BrT%2FUJdUrzF40ns4QSKOW%2F59QJ1Yd8dLHJjGDZJfMduGhspf4dGfbSyxxDxasIeQPSBmdj6ZBeUNVPEwPPd3w8CbARIe7AvR3xTlcJQA%2B5HOwWODJY%2F1nGETC5ElW4nfbgAkVLboVhXYvLclgHkc9QFmdgs4LoYp%2BJODiLVTBf9Vec6MZiam32gK%2Btu%2FxNqYcQnmpoGKTusMCuGoJ2ZJXvXI%2BziFCMLJUd%2Bg9mZ819WfZ4RXp4HaHoywhBt%2Fhlktp5HswJZ31I67okc%2FSoENwYEUM0%2BYO2yAazZQLflvBmPYJmPnudKXRqhdTihSWXInWwRpK67VVq35d%2BiEGe6V9gSfxolnzbkPJUDdZ6PrQXguTR6XVamc8IFAuqPj4BndHmhKHjcEdGtoF8Fgbi6HvSpbCfiFOZkEpd45QfVzoB0OpxGEwzuK8wQY6pgHHPMxwy5xUBBzu7r01IABGo%2BdbLV9IXy0h%2FiJXScUUJIN%2Ff1GP5bUAmAN10Nb8gwZEJ%2BFiZbQqcJ%2BN2z%2FIpm%2B3T4ICdIXD1SlsCPhlw0WZChJIx%2BH4R97oNHnaw%2FahZnkiTcgvWEhCyqKgMZknEW%2BOzQpC1YGoHOo1zgi11oNu9JEwA%2FIyHV2DULReVnretD3ZsCPFH7O8NjcHnrNxEEv5J7yEQmLH&X-Amz-Signature=7e4a2ec31f8256ecbfbefab0bbef0e16ef85807feb3b895164a964939bdd3faa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
