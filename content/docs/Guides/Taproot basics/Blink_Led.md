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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SMDMIZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRMNEL1guV36nC9Jtm3oRk5dOf7xyJFcqmfRETp3oBsgIhAJiOdih%2B5JyyJuTmcwbC3fF4stwPFwXuhiQOLgK8clP8Kv8DCEgQABoMNjM3NDIzMTgzODA1IgyeqcmCTHl23Fr5N28q3ANY0l9qYDUMkEormo%2FZbXjvcu0tbH%2B1JoTUwdR%2FY1LdQ1pM75tqVl3Wt4LXTyDZG%2Fuf16WvlUOIab4q1ak7Ph2EZmS9o8oKN%2ByrftCXBKHkSKWAx3fG9xFGnpuGASTdOBVNJbEUcJrHrmIboATwFmmg81DNU1TfM6UitZSU5B3nei85W%2BV6%2F14aBPXpxn9%2F8KIu08FahwBKfvj2wqEeOc8D9jvwhnQnbfaEBlmo70GScBxKZgRVQm%2FSqhtoGW0JByApEiFQBnv%2FDFXE7FWC9lEdjYsI%2FElmNDyqeWVl2MpIMDgruJBdbHNZZ57d6REOIOjkKyXxpsRpymMvV4SOvtmUfFPZDCUPRrlr%2FsgkXk5Zw29609pwhKRDBwI6Etr6QQ9vjyvRg%2FZlCpkpIY8NIRM7nBEzeNb%2BTS8N6vLQX1vsARSavU3qxUwmUj1vW3O2A5m62pKVOYmQ76O0Uy1aXIyeeKr0fmzZBjx8mR8Ezh9qc4AfpMu%2BC4vWP%2Fh1YmgWwG07EH%2FhRK99hCI7xSzhmXV%2BKlcGBMaRax2%2FM8F9bB2XXU8FruylISpvOw5FTkTphO0kp9IOhYVCB8iUk1TkleqsxBdqo8EZrRaMsQhDqzIQm2zOW8e%2B%2BtOfKEV8HTCnmp3BBjqkAdXO7pm2K8hb2b8F6fQ8LYeUslNq8tm8yrRFrbCxkUp5MMe8Xd%2FlhE5Rn91%2Fg1zcAw7YeJ22cJMJGhOnN6rXt856FNrk8bS9D22WiJKm2gORHRSyQMYL0iOhMAY6YhTB5bQutD91q%2FrJaS2i1hGZMmhMp30WdrYxMpve%2Ffw2B5BeWZ7ir11cUvGda7YVhfAyUBXYa162hQ5nXHf8e0Ffq9HNbF3j&X-Amz-Signature=950aa9e60fbbfc295a3ce4c18bfb813450c52bf44d8652165863273ae5e78b86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNE7PGC4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVpbV94fhEFe8aukUDW5YhSj%2FljpASZwyzm8MFKyvmdAIgUR0BHsjt%2BXbDGja3zozvA5iRZuM1DKjUY73eXZr4Vhwq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDMAmRxJ7DFQ24924NircA63FNDUWC64z44scazp5rLY%2FKXai4WHDrhLawrMoZ4xqMpj2mt5%2FGhNLkHDND13A%2Bu4O0omauxXTxL%2BBQfFls43TUFFo%2Fb9K67%2BPifpib88Bl7JcKT4MF%2FT7OXJWKKHLpD9OdKzS1kLTTqBijAiAiFAq90ZFknfTQIOaQXTa%2FA6O5s1TyVL6dxyWeGTIJCOp38UMCPmolokYLXrWpTb8%2F0iDBIe409FEObP%2FCSytXgYJyOPxcrRZwLp89qKEuoZqvlNPU8rVN1eiS9Tloh%2Bv6zQ524hs7r5SXhQsKhlkEnvzXh17caN0FyJcBuQyhCWwS1HNDMHXVQOE%2BTB8TOcEOz3b%2B4KSxMsh%2BzdhAcugaUNYEy%2BZuMjyDmFA7pQKJxiMVOijo37vGn0Pijjka0oespLU1r5iWqUTcKkyBqzfD7TobUpvHRacEjBOZSKKkQjBck9q6ja%2FH26X4FC3Wh0pHtLvfwE1nqDCPW0GlIeiZ1bKygtfCuUhVheiP78wBhuYPidoF8WAEoWMotOdsBvV8AuWTBNrVBAoeG6dJhmkvLFmCKh2nmzjA%2BzklC06aO7ApqFx1IYq4FcbxZlKST%2BrP8GTFcvxPNeJTQa8eanTb8mk5PI2alcLghpRJvIqMOCancEGOqUBcQEV6jUPUy5oYELrpqCiMjV20SwtkF93Hrv677yYCt94%2Bl8%2F5N6hWoBlTqV3TDG%2B3pg7zFmvNJUWO5do2pAGV%2FteeNKN2kxf%2ByY1usmLkVmZYxpRhZrroiXEyvg4kguPg%2B0FGBkjHIJZr6jLG7E5lD2KXcboq0KNt7tsCG1HBz%2Bn%2FDz9HfrE%2BlDU%2FlgbkngGJxekbY2tHtj0sKmX8RKvXVEWhctJ&X-Amz-Signature=4364479c8d11ca672ee30fe8b1ca6fd2833bd408dd68766c8f065f130faa09ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
