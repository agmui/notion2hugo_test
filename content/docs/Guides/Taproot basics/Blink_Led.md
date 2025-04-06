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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFLD6C6O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMqr%2Br7hTPWzPGj0LD5Jgd4HX3%2FthFVQJ3OMpY9K9ckAiEA%2FIipU0PO5C%2B69JwlAV6US2FWMVlcABN7Qk0Esd9PDRcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGiQU2uu06F78MxJSircA690oKfBv7mlWYidg8o1vNoaz%2BGrivsgr5wgk%2BW%2Bm0mXs%2BHzbbmH9N8V8%2F4isnAzW6NmN9enw02hIUmdDMVd9IWd3zRdXwAHlrXzfQuTc2ew6VLLeD8MKdprk6mvPbEaXO1JgN3lqHUgnSM%2Fh2KShi9OEVfykokYXSIVtu3FoUW%2FVkh3E2MPEBc876t6ROhMZmz0rGS0jWqw3JGZ%2B4oqrDv1Ydutoe4g%2F07IE1phPnwLOeRecajY7qVhhDXIbT3JEURnJwpBwklAM4tY1bndUidtMi74oPacShWgW6uRyLD3ZhTAl68QEudvoKxm9Ngux7WUDRWqUZ8AJN%2FGQ13Xr8RFvD3Y35PtS1XN7cRIjSJL3TFPnTGKnohHeCdZ%2Bb9WDP6EZh%2FhhB%2BGspdQhV8Gb4DAiZiSnxQx3dFhs%2BmlF7DGuzo4oi5QdgyOYBbU1ro2W5%2BZ7NfBQjZpP46E0tOO8xy5APlKaepUUYlD9BQ6tFO8Ze4vJLn%2Fyrwz9wkNqXsh1FFLTL1BeEg%2F4o41uWiP7kIqErIYwlFCvh9zOccFL6JU1uXKIJnLtsIRAJwNwGINabnfDsuLU6FuqYnwBGIeu%2Frc2FOs5nY414cjNaEOgxnkCXgjwvm%2Fv5poHlamMOn%2FyL8GOqUBJ%2Brn1%2F7B6qXl68pvoIRPl1yLSfZdGAFVZAO7OLQbXPprnVDWQTMqvne%2FM3hxpKHybrVDtolWz2IMz1C3iUT0yVMVnJwGqsh0B58UVSLoiRbqLhrzpGNqLC0uRkiq1XHFki9izyHrp0EiLxHNIvm9AFS9qRuW5mbpES2QTjW%2B99VQEi9r01sWYtMZcJuy%2FLPMC4tWcTrV1u2lu6DS9XAOcSAS%2FVT%2B&X-Amz-Signature=96ea13cbaa38c6c3d71bfc7a2eb453be4033708b810b498cde656d8e65231336&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WEX7L3T%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE897nhV41p%2BoGTMzAfr8ff23kKIf7rOD8Vt0wr%2Fk5cuAiEAxTCPkLDY6HNUuHRkG4J3mU8XfwSLvs%2FCu1D5Esrjp2kq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGPugNd%2FhEcrMXPFXSrcA5mqSU3KEWxWZqiIrOYP8bwkAhpupUt618Noi6%2FybIid6YcTxyrfm5A4fmtsXm4SvBBEYVr1EALkoQWY0XKft2xT1zVgcYROxCleVFf6au14nC5hVfuxxRQnYsBcm5%2Bd8JI0ZOzbNhPdWxQYhGoDn6ASm8JygS93VrisxZnSaMBk00tJv1FJnMyqPWB6XnUyx4%2B646tr49bjAtkn%2BtgFNlooGNdqPSUkBu1Hv6d5IuS1BpPmhCs%2FOaZF5Zv0pfkdx97z0n0QFQK59zyUzQov6rd9bL4ZoDPiYVp59cZZLvmgMLQHU5H8MrqZyXT7ce4O6z9z46aZGsDLPgKx2usf20ssvP%2Fx4rmdk3TCVfrZLtOq%2BGanv7noU%2BhhAmYj7Gv5U21wlCoLlPtVhhvcMVBMxV4ZiOzkTACJwl788ClDoAw%2Ff4fyP5aUxMYdEe6Mvw7RTT6xFQnaCu5TTljXZlN80We7Q4t6lLa2%2FKhx7Tqt4%2B08gxuNYfMKJP4FY2lGI8mF8PmgHrn0%2FJEcutvTq73rXoVPpKT%2Bz53UVWQgP7aZkmW9qm01eUCBrUUliWWLDNiXDH10e7FP2sNOdViwr06e9EMsinnHaoI%2B4r7d73FN6kIp2T1s2UJ6BearxDY8MK3%2ByL8GOqUB7I9WstCAT8T5KrSrkpqklz%2FxjU9dkcKSJfS12w20YcgfNXW%2Br%2FvUQS1cH6gblIgCeksVwEANmpbrnbw7YjOOrzLbTzTDCAACuVZKoNzAxU1q7IDY4DBOMRGgn5O3cSCxtIU3RVUJpJd0%2FuULYkfrhq%2Fmk3j9FZLNOwAfE2MZTK%2Fi9YIdOyGlQnB0fvoGeclMeqaaYpvDTzg0Njlvs6frgk0Z4%2BAo&X-Amz-Signature=4f590a158f712131e20d0d662221f3bcc86adac2c712dd672bb1166bf88bf2cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
