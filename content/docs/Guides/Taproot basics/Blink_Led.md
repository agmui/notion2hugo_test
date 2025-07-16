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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754O5JJ2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGonDrIuNfOGp7dMynZ6NhQl%2Fxhps0s8bid%2BGdSSmlbnAiEApoMuCduL%2FGd7adZlOpwCHpRoWs9PnfRTeehCHQU2bhEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAtOqCRNnHZ7ZFQndSrcA26en4JnHDoSULM7idXW%2FJNvkHpFzXTiEDqli82AwSnCOtH%2FygOzyG%2F%2B6KebIkicVH5YToHTYFnzXBeZsXUbDF6xM0MerZe5xlzIiDeGe9spY67Pbbq0alopCSzY%2BsMPYHFjC7tLxet%2BGmLLvgB1OqPNEOLs7ZxqRyiIJFN2jTGHb33qeftTtfvfIfA8xSdQKGK4Sy5VCEfWWJmxrf%2FQpt4Mo%2BsvSA0QRNV9AkEZizZmyk7xENSV64qCTCI3SZDHqUcPz5n7zOf%2F7PNsjIZg6eLYyvCIVaGdZ2cYVWStr4GhiQslq0LhOnfR%2Fk5JDqHfpTQVqsPkdfhmiHb4l3WoDvVAhSsH4tPJijaDOYTAjOgY6BbJ%2FQNlzWTvHjMhrcoZknA0r%2BbJsHEIfr4SqTmW22TJQeIF6SunE0VXFyufEuSjeLjLriukJGmsgTAwmplnrTtfsSxIlhI0J9GoXxU5lHT0zA6TqCKGa88I8UI3XJavenUV62HXkmBjRAxqw6Z9wV%2FYvFVz68OXl9IT423cvI6zPja5AVkvtbYOhfxyOnIZwOsBKUyRtiW4eNZVaW8fsz%2BZStowmnyseD2g%2BZ26A8M43WJdZb1bhDOfn66R%2BdCUtXEkko%2FyW0kzTrSVMKiT3sMGOqUBlhxef1vt9v0Fctns0%2FBNSPsoSs%2FXrd7qoEAaXh4XHefnJi0ZVbLZmijPC%2FlB0DfYleVmy3J43vSQsW%2F56516JEETavmwQ54tR89wbSx4mtmoXbcl8Yc%2BZ2djb%2FeNLrtqvY5yDaHERDK%2Fo%2B5OTveXD0nV6TAOsEbe9fRi%2FU6V2RkN0FUPnUOcZqM2hxob%2F12I86oU9lm9EYDfUu9oXTX2%2F69Q%2FAdN&X-Amz-Signature=da25c19896f1f1e39968963911ab81b6eccd96c489fec7db1600bea2a1534bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQXZKLH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFlJ1FLSWqHNWyQVOIE64%2FRiVSLLqLIBvFGkgzckHFoAiEA7f45%2BzgVScbBQmA62z2FutoMaPydMkBCWWeKkGotdCoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFf%2FmWU02Dc%2BKpXitSrcA10X08xyGEXUz307KWe1O0oZ5O5vAE4qHgOZvoT82%2BfWfrwyRLKm7IlrfFTW7ItDk%2BT5o7LBWEnbu9WM1vvgHj83L5TOAzu3ZwOAIndGg0sxF%2FeuuBKhF2HoRxhWiRitSLwPCcBIU%2B6i1e7EjN2uS%2FEDcssJ5OkiKJPUbMvj4bpX4Be8aNrGDcQcnOlsSaimo7Rod8qYHaZphb8%2B1J2ZM5f9XpD9pFZlbapz%2Bq0dT0MCeXn%2FJk0qePTRksHtvoqXaB9ieQcQ2TJ6qTrxItwmUyD0YOL2%2BwRQ7Zd6zCKz6wH4nJCrwFBTILSb5bxcy%2BXT8BnpoFavTmb%2Bi%2F2V6K2c%2FFaJ2lRSQvQpHQfCoruH%2FhvDxPmY%2FJSpYXLW5RAhtzQxCr6A8DT4FpEW%2Be87T%2FoRCzerBa8NiSJXlePr3EsTJMAxGCUd1UmxDg%2BVwMzAzD6LExW4FjVKX1zjCpaWCkTeaqX6YISs3JfDfXUlPpKm4Z0gKAAJQnUSOidpx7GiIwm5JT7sYSEdcf642%2Bya4nZRvrvKwiCraNw9TOnpclhokJYlF80DQwAKm2AEDRdS%2B3m2wp2I2MyGG6PkQWmDRXGA2WwJmMuSdCs4ECakuZaGrAjES9%2Bm2zPu0DEQASiLMKWT3sMGOqUBcjsb4YKMn%2BLgOS92IhUnzzbfOk%2FwahEv7ahmTXlkZUpX2CHPFkrsc41VW%2F9IdUN2Tqs6prnex27lfejoqX%2FU32z6%2FLwpN38KzBjdrry%2Be2Hg5N55bdo7PjBagOovF5F8mhy2T2FS38vl%2FiImgGxKXZfhSaHGAMC2mMMpIxiOA5O5cUMKzreRjK0%2FWcQBZX1Xdqy8ewAkeJTpm0obWfw9cVyrWc5d&X-Amz-Signature=981db72e17690ad3b1df63b1746998a64c65c7d432647a9e5cd8791d0b9afe6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
