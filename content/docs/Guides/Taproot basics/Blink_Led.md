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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVN2WIFR%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC85ePF2%2FIvgueFV6inuNlufWEhfMZGIucnXbmg%2Fk38jwIgLL53%2B%2FmCrjx07wT%2BxsxJStf39JpmiuADQc4Ajgacq7Aq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMCAdxQz1Eta2WFBHyrcA%2BuODvR%2BRVEMbmequpvpOz02eeIYkVMdNr1UK1vCkFhxRYKTV93dJT5oRCcd5A38rVaNJcTeFucFj7pLk9dErgGo8eCwLugdrd%2Bsw%2FbGCXX0AZ6J1e%2FFcoODHhtxQQYV9hlk3a3pm7vknrHh%2FrpFDu3kHKa6OG0YRaXYe%2FIGRXJ7b2v7EWY70g%2FeV%2Bl3dSw4yuMHISuei8Ab7kLM2ILE2irpShqwD5QDkCaqb%2F17vxitvpIJwm7%2BOii06NPuFodvnbrgjUrN3%2Bp84OVnL7HOvrHmxFvSg0vgQdwMFjh7DES60wBu%2BzuB1nYAskyEeMxs0YqVA%2BK1UK86ydDLgI5mh0lt%2FYqFSy%2FiRedszyQji2Yva8leZ1Q8LbTitw4pp1VBDRey4yBdKqT8ed5PlL02P1oJpeqj8rWnh4Ri7yNJS2R6A2q0BmHx%2Br3IWwPk%2Bz4pUdLBvJn6N850TAx0eR1HFvs1i%2Bk974cXJiMRzI%2BX7np6Vsft55S916MkBAZJhLfm0E%2Fs8lfVNrs0FGeFA71rSnVMPveWqy1GTr29xpGvbjM2x1KUQT1gFouIwmwMcFb9AICXVwN%2BhwVSgz408S8HqXcgbTEUXWo8Mob6CLQJR%2F47%2FbkIR0BqaSMrYFGMMKDQ0sEGOqUBdLSNRCXX7E0krQuHKITTlS0rhjENBhpdKHrUhEbQ0hCslMB8fPTjkW5%2FrEJ5nX%2BMbo%2Fu20oR4yJYrJzOeBSKhFQmLWcNLjMUYnLSahX3ntwh4mWUueP8zg%2B80c7C66bKr%2Bu8MVIOB3%2BU8ozteeDgvy26vZfPPvLk5xSQ7P0fuzYgJwUXdmcPwdxtxrhJFnW8e6B%2FmMY6riXQltKT3KsFi7oEJT2f&X-Amz-Signature=2c524e56e4293fe604ad1afc099af2d589a5f8174f48872e2ca933d5dda33c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXLW3EO%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHXAm%2FOhuvUkwS13BAYV%2BXWlg4mbH2x8B3oCqM49fwPQIhAN1UswfiIpBeamr6gdi%2FW8P7m%2BOxOaxnqFcOlq9cvURNKv8DCEsQABoMNjM3NDIzMTgzODA1Igzy0HEoIcLIo%2BeKp%2FUq3AMNpMZkpMYymB1hPvejFZIPfzf0sitXNth%2FfsEgFaG4gLs5BFuzXEvV30y6pJLaRUMsh01B1bapwXsZdAWzWYabALwhJXO2t48jkr8RC5SmBQs5tG5fYQBhKvcOyF5w0f6MN1eA4iPFIt20fFSQNbUdOsvQOR7fx6kIg1rJAL9BW0JFS1S7%2F4syBgY4xiegkguHKaDXIoYeJ6hXVXLj1pfaDIqk9ZfhN2tTW3KKMTw2mjK%2Fiu8wStqJnxnMz6FE2J2gu1N2TKg556QYMvVL3w00%2FWMdU74zLzCpWLd3CCJZPZ1GAlUBy2a6%2Bw1YCSiA5kMNI%2FrrhPZ3eqd%2F8Moad4tveMPMKXouUj%2FOYHP5RDNMZfMt%2ByM%2BzTiU7j8%2BvtNkfQh2S5FK3WtvrWk%2Bqy4vEpixHA1BCV9VgrUcDhl8ntpYSxtxfsTTYdvRzdVZbCLOD7TvCSsFidq%2B9ATRQZQDyHfnDHu83QFGL6n%2FdCkWeGG500AtfWfR8rsRhYHtg5lTgYL0Drh7e0pbXfV%2Bok01WMMe500zVVq25W7C5zh6wVyr9YVC3jJHCeV6M9jYBlQjistiXb%2FX5EFAmOkyYb%2FWGQmQSnkb9TSIZRNTMpmpDFkLHtk9LtCnMUCVfXyvCDCX0NLBBjqkAbzL%2FMh5%2BRqLnJLPAI5yHeXV6Oz8Qc3Hg9RJQk1K6KBkcKT7v8x8a02f760O2c2K%2B7eUO1SS8YNyYz0Qh3p82zabpa9Une7Zpue5b7XWXlMxIZJN1lJT9s9VHV%2F75ny7PCSK9mH%2B6diXQ9%2BtAftPYZqsdYuMHSjOXY%2F5PKtzLrY7ZnD9D%2B4D6hh4%2B4sewaHunx2IClz%2F8fnsJqQJzNrOERwiulUx&X-Amz-Signature=5792802807975c0a468af9b72dbf3dd8720721b7e460913ac47ba36b7ad1f1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
