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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRAS4HPR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzoJKeE8FKiWq2nr456sth4aJ9o6wYGYCK7TYksVsLbgIgf6O4O%2BDZJDJ%2BMVs5xoLJdrhFwuVtYCC58lzZy6JzrHIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJzZhTS3Ua9ZO%2Ba6dyrcA%2BpMU02AuGVFz1Us09LcqNrvPlka8nQ2tdzh5lj89ML%2BbOfYdwC5JdXOT33b1WdV3IPWSQNc0zRrbQ7dEa5Iu8Mc6cG7UxznWYFXTF6zREKchS8f5IA5ln239UyQVFWD%2B%2BomwHH%2BmiYdmBg%2Fd0LONMfHjjKFoeSKji1SHuvC8ZuI6MbAnbyp9hkZoI997TGAiUE0nWhH%2F83FVzXCnQCEhRcx3dy7%2B6j4wAkHLZN7kpmYVYxBNnt4OSVUYxFWKkX2lHOXFxzSaeDaPwgHSCSp4BEjxBFdcqrVUlh9eB5wAwBHXfdbGEgh5oVwfrtxZb5WOrN4mjBa9dQUg%2FdWERRHkkpwnoxGoCtGY6jOzwuOlh7OHVhIfzmTtZoCftGDndLxPYkzHbuEkhaZ6yb%2BVCsD4Yn%2FHk4eNgaGKgolRgAvWzCcHeScYUx4PzSoJSoQLC0LC1M3t3PEickqBFDDvVrifh8zIrWRNqZ3NY2DDczpmn8Bu%2BxZGeBLkeZGanBn0h4CUMiQREQUj2tLIkhSW45HbFsrRdmL4Ky4ZU4802Oq%2FF%2F2F9uMEzDdQKJj%2BgSuZOSzvD%2BqzoDIdfLfOhyL964VHEhe%2BskiulGMzYJw3wk76x0fMH4EkmG%2F9SjkSxByML%2Bw7MAGOqUBIGS00p6x5wsXscl31q6RN2CrrPUfztHf1JcX%2BP2dXOrMEvTgIE2MaG7DJESYaGhyBUAw5lqQEJoQG4HZDsytSaWtKTCuoGJIn4vtpUiObaycrUJOiOq2h%2F6lG5ydc69ttCqaw0Q5mdS76TVRhBViHWOUOFFNQLLLF3iT4obbYdNsEYu%2FQyMk0iUGTFLJw6tOXPowH4GPsT1xBGtaUXha8xii1aDV&X-Amz-Signature=c006db15e87cd17a17587e033ae1695e35090ab292ceb8909438972d3ecf79c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CVBOXZ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAB9hD6wx2JejnDWYpuLoFm6D59Y%2B6J4fYIkjYQv%2BViQIhAIHSq1jJT2mPJPEE20XeNWr3vjBscIEmxZIf1wW8nacvKv8DCFoQABoMNjM3NDIzMTgzODA1IgwXUUgObkiIDicXEJgq3APklwQ%2Bvf9BJk92dgCNl5J7o5AnvuSMesZSZ%2BdNKdnaJ%2B9NfY%2FoYANEU8Ot9hNdrz8KoEBNtxfh%2BlKjP56jNHkyn9sxg8YkdQQL5bppj1bh7vz3JY6LuSRTFBYmaNLrYCkGpE8uEJ0DFPDKdgROPNr0panIvyEIZNFxCkVJrMsP1iLjrrFoXHphrL7mAB%2BrHS3RXjLDt%2F6X4c1yT9pDnswlxSfWPZmzi6a8oPpjbRs0za3LJ5kaCxTp%2BLD9V6YhJIuYcz2MnGYJg0XW%2Bze4GgimLmG8iGxTyo4TvB8V%2BkGKGN7uvJwMZbZBMZiNaovp4D1xgBKoYooQqDMOFH4Hn%2BJ4nqhx73oS65jM%2FPof2VrWIQKKfOIiwnc0khDi5GjnlDkulIHGu8BrK0mGzkCyHtMBSCiQUPRUmQIzJbNO1OrPQIIbeji3rXCLTP18laIZ%2BEBpIcbj%2BibfcbhAOt%2BldVX4wjfHJbqkNaeP50KGB1AL8WJK76241duCxuE0kdcHOSDzT8qY1sL75fBYxvPDfOTSuK5AUPBD3bhlj9gqcS8dD2H2vB2SNPRU3fJ6GrbXu5juKId9RYPSzn0I7JL5%2B4wF73UyjXpEtbqMTra8fESWS0jLsbz4Yv0Q5DzXFzDxsezABjqkAetjg1RvLQ6J6cvpbM3pkENUes%2FP%2FrOipJlqFn2Sluc0vhj%2BXUQ7o%2BLfwGbt8bT0Lygeo2yRGSM%2BOJzKXZoX2OmkTUCDP3VtkVSF11f4rZsJa1UJ0Kipt1XawfdM2BZpeFOAJpnc3A9B0BAuPF6nZqHTp09zaj1MfV61CnhJTd48hrORQcOBPnStono7jZg0HzPRoEEZr1%2BOafJ1g4snHW2nwIn2&X-Amz-Signature=7874a4d3ec6a5c4b380d028b2b4608c3180ee5d6b6d965c5c78d8e1545d59230&X-Amz-SignedHeaders=host&x-id=GetObject)

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
