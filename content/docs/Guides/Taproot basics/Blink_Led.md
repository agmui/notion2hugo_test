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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENTPG5L%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICrJpx1jpIihwfcMvHHg9Ze6XtLBKQWeQU0TJ%2Bwv2D9MAiAwQMhc5qKduCQNxLiIn%2FOxnniDKlU7BN8Tre7xMMGeXSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDkonRV9zepaA1EMgKtwDwwOtPvG1vcCaRc97AEysBXq7cZ4lk5lsMTlHp5%2FdXhyFap37hBRniRqVAKt7fFWjiwrU8YG0GZd%2BF0Fx8h4GXk8CFfm0rwATi%2BSPcQhp%2B3XCB4TbZyYV6D5luPxftaa3kwNeKAiOIqGr5ktdHfx%2FfALf6C3afpTcKZ%2B8dL5c81QOlhLOsNBbXxGVkkYyon2Lk40ot6FgTeTUQ3%2FhBHMsOsVzO5oEtUKWMACoHxCGUq3nqJtcw5NTaDWTcl%2FWemOTutCI569ynQRDu%2FqfjhB6t7ctYuASPea%2BEi1%2FQVHxz3sUXMDrE5RyCf%2BMT8kucQOBap28Gw9wXlpfMWIOdN%2FfNXJoVn%2BVdNwGajJPLyEesM5ZAbIgPsmgMYY7KkBP16HdDBMkUokYrcMe%2FNCqz56ob%2Bd4vnZax6h7QeJmY6eK%2FOonu3ocokkX58e81yYhs%2FTGbnvtsmbcUBeWIBou5KJ9fBY4kqg7YbrEtfb%2BB%2BR%2B8vD8q4s7zuKjzXLywOsTRlPq6iBfAzQAUU7Ru8AajPqV7zwkn5X%2BUM%2FKmepfD4I%2FPHisBX%2FmLNMxs6PT1DobprDNRYHy5tzgDi3opRyEPSQI4U%2FWmt1ovizXuLfZFhh3kaYlkEivWxY%2FJOVjtwUwuoz5wQY6pgHF9t4cMBJ00jC213GV%2BhwB3RyCnZ7Kr9d1l5k9DHbBZRKkUCzPo8nfYtORpioE0LZ8j8jroiAE%2B%2Bjwn3GjufiEwgbdYetcNIaMYtj%2BPv5SArJkPIXAF%2BlOHVUz32vZ8lFKFikOI8T3RdQ48IkEy6c731eM8gKowBh34OIjJIuMAj3ksd9OeRfSkD%2Ffv52FljQpJFZnE5UzJdZrRHjJJ8IQNGIs8pyf&X-Amz-Signature=8b9fba43065115d2eec9a524693640fa46c3108bc897d451a7e9fc820ef782df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLBVOIXX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFOQdOSZ4TDByU6roU6yPMiFQvZSuILA6uZOuLKEApsrAiABkV7ON72cA8ChADZLkVPi7d5sdzOpiwVxib6%2BUjNB0yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQzsqu0I3w7ftGLJbKtwDRCev%2ByZaQjjp8idLa5AXcIV2PPutVH9RbndWM9fllc1K%2B0Lvh9Tesg1nTx86eaTzMVgLz9WxZfLdezHGNJrhC3ISDaBqf34JPHMfaih2%2FS4BqIoUqN2wBE2I3KEIn0klH%2Fmi%2FnA8qpvdlJEgHGgw7H%2FDMTgW4Dw%2BaFf%2FF%2FzviTbjr5B5Gfjbaw2hohDMli0KyHpykBSOur7UyNioydXEWBhWH%2FswoAFLY8skgMEQnksDGeeS2jFey9RxX1nQZoSfOKEaGYghAbT1jXQLkbK0QHOWeKsDI8m5zYNTvDLDxIrCuBbW82vpAplFt3Vdy1Yj8aCGX4wQ950vOtyoxuhRIpiA1Myel2AXxB8HG1kWGElxdbPvzSHD7oX%2FomVNYKCFXMau5TdlHSWFL%2BIAslzhNMNu%2BxeqLGfaM9YemiyiSuBTc4W2BX4AJKted0F28m2hUd%2FXsw8MD%2FmVUz9BjwLFHHb8Nw00OBV4EGNdZRFQ3ZlYjSn4MPyRH4Nw6LtczJ%2BeAePLE8UwQgP28CYQCMyyKat1C%2BzQ0jtFoZ3F9L02340pjScEhktQHlXILorCYuLPYXmApfAvwR5TjU%2B%2FpDbnWVCGOHUpOuv4%2BbvDiR%2BizcbfgLH754JkXz2R2Kgwi4z5wQY6pgFVtFajh%2B3wEcPWEERYQBpMLMYSSvE7TMf99Dbibn%2FRZy%2F7288R6rjvsP5S2e4wNywbU2BizWLzDkFJBxB0vJaSQmhpFmt1Vt20S7xXQB8ZKeGfbwt9edJCit8d5XMEIFIwKduLczVb4FvYyxk9XnKncxcXMJ%2BVckgifR6kanHKbNQP63tPzuSVrwSLGpR5eKjYZeGEzkl99vDvwZ8ip0TvXIv6tKJU&X-Amz-Signature=36bfafe19e6862ab5feaed683ee92d7c1acd575b3844e8c7d4389ba436637d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
