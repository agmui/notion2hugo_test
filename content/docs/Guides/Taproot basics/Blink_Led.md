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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K3MXMYR%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCYpr2IYYg7EvaNFjSKVsmdDIWltnBgKRep3XrH5M2MZgIhAMfTNE2XIyjES2ou5HlSp5pCG81M19qBCNf5CRg2cUT%2BKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypXf8u%2FXIbK1S9HoAq3AM9ywDCXvd1fHZYT9hyX3A6Ue9vG4GWulE8PMLZbTnK9eKfBpoUqaRYmiCO8rfaihg1Tf13ot0Xta7Jbuwesop4GZRi%2FDl%2Fb0MGrUql5Gg%2FquPKSbD2AAgPGQ6HFHAfT99P%2Bb1XUlRye8%2BGM8PtNxHEJmNjN9ToQ9%2BnpYxmtfX%2B%2FYX0PJYX0oDvzZLTLW2LEVuNM6n%2BOGyAq4iyEiyZVFbiCkqZ6ZiUGcgPOMl6GAoFSzZ83rEFWYG7mLd%2BJBJyqjQHZeO2RjbXWVlO%2B7G4OYXcItZfbzxpZhJrmkdDOk%2B9Yw1q8Tb21RCVQuKEJlYNH%2FCOQe50gXZ49%2B1d1aMLTWppDVcz2QmqNh9VQoxC4umkeji3S15Pc24uQareQyVGFG2y%2B9t5JDvUk17mTXXzhu7ceoWswHkNcJunZONgUpFOtDEe3nvOVEPAWXa0d6%2FR2mgW09tRhrwjbMtDPXYgM1X1mwWBhgSWlP20YKfX20hV4Fb8x3wckZUC%2BacOPtRrXXm1N84oCnElqbBM2s3A6NtdZQZfYR7Ta4oIEITjYvbGYDQltSGnCJLn5AsAyPCWnV63c2Fy6j2U96aXGUKwkd8A%2F6nFevYqcoV8RRpVzDgEJjx9%2BbVfURk9PvEjFTDGi%2Fm%2BBjqkAYkJNx1FSaHz%2FOT623Z0hzvC6b83eTHMU4loxRk%2FIMb3z5tnv8EI%2B%2F5EIbq8grXfC%2FEAanedEUmup3EHREu2lj6GN5R1JGE1Zd0OAgJF5Eahy96a4xkqmSPE7wzHHwsTxUcHx0T8lkUnjxDydM9LYL1hvU51%2FT0WI%2By8ka5%2BTty6DMMbi9uOV78sYIAspn9qHS5m3HBVX1enpSbC%2Frw4%2BGvcvxYu&X-Amz-Signature=8ea74afac182b118781856290491a523cc63dbcd64fe34e3df1d290676efc2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPCZ7WHG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T061007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDulW4u%2BjSw5QpIgv5UJZ9EjX%2B3GlOalIClddbAn1MGTgIgGIQ9GJRMB8HDXcICYVgxEJRyhE%2FbDXCh3bfeaJWUw7wqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuutzuAWwXMjYiACSrcA2jfyU%2BNcd9YCcTJDSB2jBxqrm5%2FrD6hvf1ep%2BUxYb4YfCrkz93ihx4TW%2F6tloy99BI9qv7%2FdfI8b4Ue5XKCjEzjFrdOKxMiXJ1uutttixiucF1edqEkc7q9O1moj98g%2F45oSrUTE8rCBWdLWHPK6sYuyRehVQ7h4Iqa%2BUW9Sjk4zTqorDf7YTYNMGOnwJDPEllv%2Bn30bed8RPQy8YmvDxZq98MFN3rqFuNUe5fYWCui3e8ilaodIYt0LLwmWsx8pSW8BtZbiIwg4BusK%2FBNjwNiaCk%2By%2BzQF9JXkP1b78%2BrAHHmmGwp1%2FT4mQwqH95s%2BpH0T%2FJp6sZTK0NtKsic0zRiRVvLcOh2a%2BzqWH1wFPW5dR1QNjDc1JRj0c77F0ABJjOLHR1geozarFex9rb1VPahBTBPay%2FDp6kpHoi8vgRWiDqslbvaAkPGy8vcco58OWkg%2FrX2YdjxkI0nJThGad1FB6hZVBKbeo6hj9t5HENC%2FpHdRhpivMon0c2%2FpiZgPxS3VpXz0OgjJyXG0Z9iIUSNDHdOaseuGGvkArJAMlB%2B1URpkGde3S6simbQ%2BjNE9FL4%2F7U9rEXhc9xTusMBA%2BHF1HwHN7hyv%2FQSwj8Mbm%2Ba1xwRCvW9d%2FptGL08MNmK%2Bb4GOqUBvN9rgRi49DlXUHGpFKkxhMCpbW8Ln0kNoCdzzaoGDysCoU%2F2a6r%2FSsu7Pz%2Focb%2FEDXEOiFMQ0Y6svq0bo2ybfnoKfU73QzOLi%2FkMNZBGKySba5KovPY7pyrCPZYrx9VOU4T5MJsvL8GrFJcjqkWp%2BB%2BaR0KICUrcr5mjR1FylpRgUHYJlVKDaOK2%2B0BmkAa%2FIAY7A8QE0IQBDO9fx7LjLsII%2FkGR&X-Amz-Signature=d2889168c0eb51f78fa666475828e58499a949992479a62e68e635417310fc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
