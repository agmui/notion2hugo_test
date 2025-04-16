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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTNHHIJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0WnVtu7zhX4aXVw48E8mUor1664NgUlGBWz9cATS9wIgFdEohHh1dfvnsB8o6b5rc9z6WeG6oTzotENX%2BjLJ5vMq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDO1EboUoxbFvtMkqHCrcA1DnZrAijPCpYk9SfuXDvYx9PxmblDMDavmKoCAj7ZGyRdcaD2WdhucbfgXDE%2BfnM3v3%2By%2FuhR9flcwKeqTJ7fSOzW9AzN9GP40czlwOPvXZsRcOZtRhRXFrPe7Xc38zaD82I%2BFEVvsMTqS2Y%2BuMSXQVTBJOZYC1kQLqeYkIz6Oxcblb4k5I6Lq6QJyIbxYx%2BDXvK9h04DiATrEvMRWl05dgS9qkSNJUpfYJNZZOkvp%2BfbHYbG8r4jQWfIkgmBzLKNspB4BSGCxDShMykRn%2BpKbpUKt%2BRIbv1SvuNhTb8ayEJDJYLyTfI9uACigz0dIY1ESMtnUuieLPk772AIWfcOI5WdbYxn6nBeljUIpZHDXohkllenPCq2wvYJ1fFrn4P1oDJaP7MBw52h0xI6wmqCzrsAEaMvJ0Manz4rag%2FUW5AO5nRj1DbItouhRTaypbvpyVIEeGGXUmaTukh3weVFA4EFNe74GSbpwPLGJNPtsgfSaEZTLuYPJmLA3oq64XA6CXoVaTd8SHPzuJGQIYjHSwFfIyxpUw0jpDqaXhZqNEEFB6MzmHLOLNskmMr1c6sIR%2FmjBRgJLndaqJduJsnxco1RkSkJlNznLvMpIvedrkhWIY%2ByN3faYyWus%2BMKjf%2F78GOqUB%2B6G81eXhZYoWY0sc%2BoPsmz%2FJ7bjxjfSkbSb0joEoG%2BBXm4OtEBubRclRPRWayeGNS5nIvDYcsojNgRo60z6MTKih5VlqX4UWbeezDYlcjldAv7lMk%2FQiAQi8Hd%2FpTW4FRSg7cNLZhwgON9a2F5CPi48nzptyDKSORsiJo5af9QHT2Rr8Nwm1ox0MXdM%2FrfjPvuHHgEiJhvXf%2Fp6O89W80bSAymJB&X-Amz-Signature=8b1e708a8cfb49da0f73a44db1c5c810a40293a51a38f2e0d290fce1a0abbe44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIOXGOQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgP7mmhCp6TcG3D47b4VSA761uqK3QGrwN0tVGYI9GPAiBmB0LYw6NHm5iEkgE51AG2HRSEOzBnSx%2FiENsa8nDt1ir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMLgpvyobvMo0Btd87KtwDsh2FxOe1lNG7wzGV4Qg6GfKYW%2BnJFQTT3nX0Gnbc47Pr6%2FF5NK%2Bk6ZiGmiJuCZzyRmN8R3HONcnvaRriONoLkGWFy6ePDnDvSOxLdR1zyy6ok4GWX8dN4qkXkBvljLkQ%2BqaggS%2FQg8FwuwFWK9rnM9eKb%2F6oBSF5LjR8RAftl9G%2BvHj2ksvW4qZUXY9MI%2FuRaLD%2BRvaQgN%2FOwlafQczfwFMcY15jZG3xKGXTTofCgHHyVn0h8XyjT%2F%2FnWjVhaSfBLAG5l8BpqXQJNG9SsN%2BUfrSX7JH2syj2JhiQwuwIsJ8FRPiglzGImeiX4X3l9yatYsyRbrj9tFngNozbtEbFe7aHgCqlg98FHxPXQO6z4lGs06a6Mi0the50N1PVrNy%2F3jCE8iUl5S9XJWyWwCRj8cEG4pxHmyF7XQQXkUxU6Nh6QoFWY%2FvE7knRJsMtDrjjvJIEw7jOekmluLaSY01ywmAeFW%2FT12hmzdkEBcNegyPE6wPASE9Yjro2AnO1oy2YZBfZBi9JuA9ubBxUaeySYhDNFSNPsYXGLTZSXNQqZk%2FLGjFoRldGVBXjl0KKqqV%2FiolSAjhEwiZxyqqNjKVBqjDIvdxi1l97WgJqeegYI0qFR0TlyR4Jhy2tMtYwyd7%2FvwY6pgGVeCp8yS89wKpotwEoyFBZBMDdmY7tlqAH9TJ6YUQIuiPbYQv8yssyxjuYoKwJ647R0Is9uEvxTPiqFn5wx0tzAe9FF3vi7SMWmQfHPhIq4%2FfqPSeyqXLv%2BkkUSBcuzh%2BPFLvDIKINYMgvNWC3sai0CWvBAy%2FTfl%2BzKT6%2FnZVKEbty4y7XCoUlKmVOWMftAzYjDysPqKgCIpsLxjX2Oy1daZG0iHnd&X-Amz-Signature=5e86ae9d743ca940c7448527c1d8ebad618ab91b979d5687fc2a6d701c6168fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
