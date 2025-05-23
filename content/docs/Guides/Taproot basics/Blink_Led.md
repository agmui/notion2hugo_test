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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KNK7DFO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIA%2FLX993umAoTHzcYNSL8wBJP4HhfmQHgdyXiw%2FPDBpOAiBKypvY8Sypu3%2BJ%2FVKU8SuQk0OQprXmvjUfNcUhZwtPhCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5wsu%2F1jJQu2g1mEVKtwDr5iU2qnEK%2Fk1qgsUa53Z%2Bl5qAN5fycOfBhFFrjSV%2BRl%2FcMLUp7OkSYzTuik9GkHRdQ6OkEaKEIrpqYuNos28xlT4HcJD6yfkByUeEBS5b5arpmOl%2BGQ81OQSowsT1iifcE3u0TE%2BNberr0jQC0CAs1M8J6QkrLlkeIu%2F0EDs%2FekrPviK9WNo4jYSDyHuTHxgoOwBb6ML9vNj7OoO0x57Ev7VHc2Ekkq5vdSyDIslyhcL7BFPeiM43gD3F2bReQYfKuQu%2F%2BwxzG%2FbiwQl7eu7lcfTVzQ6BwpnAHlyrr7N%2BDhhcst5hByCCs65zxuaBvAAYAkOTn6LfL7%2BqWmKmmA4L%2FyJsrsIf6QdpPyQgCUr4w%2FOopwcP0yBp%2F81iCQYezThFMPuAyRZuY%2FdNypWFTYbsTFn8MZgtwhI4Yw05RWl4vuIBpumbD6llKUqO3P3mSIZZ1H3msbi3Tt%2FnTqS0sJyTTI9iwQ4pZjdTm7nIM0ElRkh4CQDNLW3uCgVQfp5gScsm6cKVR%2FCJDZfvW3XurqCa09dqD76sBu8lR8fjxUwqBAthgRypMZ%2BBnhsdZKF2VZKs1crkE2t3Tir%2BJ60cDxiXEQ7Da48dXQnKDB8fVAQCp72Vbz1r2nbOSgVSNow3qXDwQY6pgEUaMArOF3aLuDEcp64lQ4L0u%2BBlReq%2Bnh34hXEpVbT1F4uPZ3w%2BfmaS32tySOGx6qkY2zXQSB8gShk9mfvEKkQ834ZPVDfpY07VONPMbzKAIbDijF9gVw3eow35pErE8Du60i0bZEHnpXHxxHGRAXyZXJoQQcJITenswFugoVmgck6F7USV4GGFQUslIKWdw80qYyJBrucP9H2LtsX9QTegL5%2BU41r&X-Amz-Signature=31fb867dc29a5297b9a1e54838b7557844814083363e4a615316298b85638edb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDFAA5T5%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDuuPZIvnfVvwY7orI7nUb7sD1BKGnGUJfKbQyimcDcaQIgRoOxn2IoGcwMdtxCRoEGNxjixxfql8PFvaNo0UvhggYqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKXCpDd3RKm8dwj6yrcA5SNlOvfYgFFU05Fa1%2BfEPGoH71SaHmq3OoUQ31PishE6SeQro25Yc99FyVjRn1kgd71LLerOL0V8Pr50bxiVXMZbl%2Flm3ALjfQHw93LIYEhquLkYKaU%2F0A5THm9XgMfkCAMEjiwPjAxhCVEefEbP5AzUptRhgbW%2F7WyI222i%2F4eMdY%2FkZdDNeLmPmkBIJ2HBQ%2BNBGX43TzQ85%2BQ2xYXInmj9XjhScw0tIh6jazKPABItuWjA%2FSqOsQmWyXiXwnHVtWTjmFAjDdmy1twFwDe5BRpEM9Y8iYt0B5q3TdzDGNaYrra6wXTFZzfD1MTBJmH1a0PTFuh7eaLNl7zkFgfo%2Fk8mKwpzHWsMsOgOsBd5LqV%2BunsVi5lay18GaGyjbHkGz1QOD81KKb0fXI75pCELW9UQgQHXZprqMcaJHsUegq%2Fdy7KuE3RfxKkmGN4efD%2Bm7V%2BwH6EMtgVtWv55zXoRIFuqUX25bk5p%2Fo2x77p70p3UB1ktPxgL3PhrUfWgQoC3QprNVRbho3Yg48A8yCA4KaU%2FMNH7JYfHi4ZU9yJPTOeyEfyynRLbHy1NYgND6HiA5P7Yisf530qF9lYmZ1TMcN6FgPLV%2F21jx6GADPFLfWA7HEJjbSTYXk4gWgqMMuhw8EGOqUBAunGmcq5eHSLDv57dS2PzgzAMZSsMzjLpqU2LexU71izum3rOg022wdqtIB7UCx8oL%2B7sxaMBVqepzYwfadyHCt1HGHU2eEw9IUKLxQRyKdGRGaoYw7O%2BNvuzRL7puZlVDoOAtjjnlwMcg5lmXR5RtlvNzRdOSc9%2BMlu1Ry25d9jVc%2BSyEUTclDdM5G3yvamJw21Nb7Fy7wBV8AiZjvsRbFH7GjZ&X-Amz-Signature=f10ab3499c7ea8b3a7fc886d0511419cc76bbec45d03f1e80283aa30b3a8fec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
