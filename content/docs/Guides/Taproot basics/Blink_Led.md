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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEKCM3S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRB0c49hsrW8kVIMdVSgXNNl0Rh2vsHUxQRBzPNd8gCAiA%2B4gzMapvSu474q5KlFsVjoRprLkqwqZ8fFkdUX%2BzE0Sr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMvcdauY0o4MmHGrD%2FKtwDfhPtt9QGLe0bntE5WORZZQ6fLCJcBs4yaX3SFYg2Wl0%2B9I6kEZ3xMhoXyIEgbZNVWzJjRGIyXvXLo5zA4QaDB4nb5jfEWEJIQKkSPwc%2BNKuP%2FQvO%2BAjpjdZ%2B%2BmYhCrjyk8tGnTzQxF8QPDsBAB7%2FZSeIBxVrxIeO6kAfsbQjjf7BEFmkbl49ZembA1%2BMRuRyjn5yQZcs%2BjWs405WTajN0I3BkKopA2APBPOhnUmbVry%2BPfSHZaoIyW77IDSlmAKavTGwHmykf5g%2Fm6LOxVyk%2BQ850T%2BjDHwrKm1%2FfYSrZZfXq7LvT5HOPzKm4SWjsiMhMNF7wLsY30EW%2FhCNDzd6j72ANBLmrujKlhfJj3ugBA8OfLg%2FepPGt9m5Ysb8WOzqFrO986AnAyDcXDTen8f8pJbFKtjQQjwDB%2Bv8qewfumMFDVy2nPB9QjD7XxlftYyPosHCr6dpoErEsBKwtFtsMu2bt8rTxMKSiAQaCudlfzXhDIJ5mQCZBpwnBRJlKrczv%2BqheufF5NpjjYzY1pr1lp4EmhBXq3nqWSm5%2BBXNcXBYy3Pz7OsmeR66X8Qq%2FKT6iWaAcHi9TVFoqFuyREnSd1aqh1WBBWw6tU0eSC5P60Ybe6v4NclDAJraUtMwgY6NvwY6pgEZB6HKthA4rEaswn%2FOEaPS1VE0BqWD6uHleUsuBRR8MRc10PH89UN73DhGwU1rCrcfmHMapXFJgCDz1PAx0kQgTpg4xA85C6Cxh%2B6lBCdSF4oARJHy4Yry4syCUZNigJvRAms6KVNL%2FjXOlqiguUec8SeXv82dGa5Va9Mn4V2vKZjDcVj9h2wSUzbGuUxT9Jya%2Bur8dZUTjCjkJNRQziFqL897DxHz&X-Amz-Signature=964d6e17a2d4721bb9017b88f28654aaa275a98bf23ebf170f800a9920299ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUEMTAXA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4xf5AqGtpeO0IR4k55X8C3FhqtPQ3i2ev6toNws%2BcAAiBC%2F7pCoucisQlzqdlocF87gzsC%2B0hCAvMJaH%2Fha%2FPYoir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM6TGkEPXAGoBbqfS0KtwDeGK9RiGG9IJutm3k5aFWb2WUuxGvIgzGFt248zEuI1CzMZVSmpX16Sn7Z4yO82ZYVVEjwiJNmB%2B6YJcOD%2BEdDqwC4bm7mqGFROqJ0TPcMFVtR5VffamhbdX%2FaXqxTD1N523%2B4Xq8ZcMjkusMjARS5sforn9wseYKwYAmsfUhoysyR%2BiK5xfclmYQbxPASBPfo7J0p6YZn%2Fo5Jhuezye3vz66DHGTr49EmYkNjA%2FLjWMwXecmdW46CsObOAnCPDxoO%2Fs7brRJnf4oNPI0WJvMZr8SjIlrP1NyzewLp2c8TGadyQp6vzuei4yQsVPlpHzSYryTSp%2F9ZKu4XeQNQtGYm1V4ddy0fMZvlFJ9KvD4GXHaBDFH7MSa9o0cqrE5TUqjH4y73fBvcNpak5xFXSK%2BTveDbloIwQO0rGGJ4by1CA5CwBCjv561U3RVTzo3nAWX5e73Xd73zbTd%2F2%2B9bCHxYo7NiSL3oIrp3NGY3yL7tfXv9eyerg0Wmc5pWuQnFszvaIlLOMTnImutUnKnl9Hm84IhMXqX1m6EBsSs9KPP6TaUfZDZHGgrfonyR2%2FPXxWE1uArTgST5qS1hTDoHfUg2i72vrktKrBY5zx%2Bly1Hseac0HG%2ForRg55fnVbEwko6NvwY6pgFNDaEbtDO6PANnb%2BYnw4BAAINL7ZxBF7H11d1t4mmM3la6pHd3IKT5%2FxBRcsR0JlLgsmY9R8fOsI96gjOvkjkAme84tS87f3jME3wgqbnSohlJ3uobqIIIh753hZacV5V7VgmBXmI2oCoCba04uwmjvtGGZ%2BvMbQSoF%2Bj6wmkf3Oyz3akCjoyRsM2E2TWNrDxjWP%2BKW5vqjhDPOzfrZY3uMzKrjHEu&X-Amz-Signature=69bb4c34725152c100a5116b39cba74ba4877e6c24f362d923d3b6b3c77694d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
