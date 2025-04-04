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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGKMAAH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGX4p5wIMvqHPkamLStKbuSxyCnuxoaZIa1lNTlqd9kAAiEA3KOlB5bYzKybkPQVQiOiWZaJ%2B3bzmGjh8XKA3tewTCAq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHQx1TpxRCCRmf%2B4xyrcA%2FYGYQ6D2M2dDR8cDD8J1sufiBdkK52jbsllgYeqTvOIxlg%2BjcUi3iwzrRoSMeZnsas3qgigro%2FaykSD69W5YOpEq1XFuqBgcPz18q2NAU9HkznCfwcybjjLpFBXouSiYWXLmWJWYQmvKma68LaoF%2BWhVwKRLEY2GOquOh0GF9ojELmL4mz5JKBAIRBU545JPgFORevwqik9H9d%2BDoREf2E4qwXYXLjIzBbfAt85TZ54euKyv4lBqq5u8cckMKAOaPCz7h4hhnLALNfIn0chBTTFW8m8i92cEVoUNAT1SAukroV5lWSNoWmBPcXCOfZwbaGXxkD1mJcjs6xDepR%2Fx1UoxgpivwEkjhfDYvrx0DaqzHSPknmkjsrDVXrHN9Jm%2BxqelMEGOBlcBl7Ok8q0fC5sWI7sCvBIGGIJnn4o5%2B43y7HVwPTUzTw2nb1ElXU94TPJwGGvj%2F2%2FoRqsutUA81krinj0lLdWIlQegbv8QQ4%2FvAvXvD0csHYTRWsIEpg9MrURDYlkSRUyFD7uh%2FCFqM0L50eFbwtqHjWajViVXxCtqAZB%2FcU15Sep0JM%2F78bfQVG4922iygKkMvcPF2a20S%2BJHtBlFgk1Kn4W%2BrlD0nk8gt4akh40XsfSTlebMIrNv78GOqUBXfna%2B8U30CnB4zY%2Fi2jFnVgkcb40v1xquzrmQlTC8as1Bj%2BwcXwYO1HpWrOjUTSDT5A51BuBwCbZdBVGZT%2FX8wEowMRMY43fMphycJ5fW8VE%2FYPdWBQwmvxy9siicn%2B9NBAyTIS7AsqFyC5MN6mEZzSxfwy3YRYmbCmbEwaWPbiLMLBuE8MxMAv3cXS0KkFAignbYiHVVipCat81ZYO3fUlaNC9s&X-Amz-Signature=949afc8433cabe4be644174c6368dd5a3bf9026fd6dc0df118d9686a97d781b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUCKCEN%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6NNy5WBafNVTr2nMbo2qOnYmCaRjenCDCLXnaMKNhfAiEAybWsSaQi9ZZCfCZihyagCP005P5iPGo33nrRHYpGse4q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDN3YJdnoK4KD2EexZircA65ciJ%2BhDWDVPAKPFF%2B67QhpFkXCyLwEm%2B%2BOirwNnB0TMog0Q5nYMmx2eOWS9Xg47iwtM40VsSs6ZGNWt77cZmx%2F0UY%2FbFPUYVgW6%2FeA%2FiNo4dNT0aZTMA5EixosoH9bPLEhJLZ9%2FXCh0oE65ljMsYq1vG36w8wQwMxiAKcdvP3IudGAZZMu%2BZwBHHeUkttDituWvvUIviSZQjLM1V4489kPgCLZeQkimMad%2FkHngGoGttXK2qVOD1BoCcTvi5t8qyFap2Vzy4No9WJVZO6LOVFN1OKHzwXq05XNJMv227OnU01c1gsab6RUeaCtvZmJJfDFN5bVwlfQqXr7BUXfQtPc7DjdteLJDyx2rxDL%2FBBMiBrap%2FtlzCJgIBxvRUdErrwsy2wFcE9dOz6tpvs4wRPpNilE0h9ji99NeSB3rl4NctX8m2dHvWc6yy66X%2FRuHcROdO1OZtOySXudqkU%2F84j0ADRz8%2BmjeEjal16fz0lpAxzJZVKyta9TmFn%2ByUuaB46AXO2wY4qdlGkzakvs%2BTfIxOpiF4vLtMjw465fRS3tkxI%2F3oULVYjSllo3BjmaL%2BTIfHbiiHhYJeDjptW2Fuegsq7YPHubM%2BO606uej85H2ZcsMX%2BPzrpaPtfvMPjMv78GOqUBuhEnMl7LOK6vzA2BOrL9oJQSLoKJTXM1Im%2BXsTlD9gT4j7qFOa6yUiFW6qlIs5PUqoif%2BFGmGyiY29Gz9GHDcFn741mJ7nHC5aC0fDskGLOZesOIz0zIlBdQQtdnOYdmFjAwx2aveg7cNvZA5lhoELQC0QFPijR2E05B9sOW9%2BHYQge5%2BchHOzefHqyE0iVxSFHrRqVFbhH9y8gP3B5gIEO4%2B79Z&X-Amz-Signature=04ae53c74347677133f41c6a6dec4b7522e039fab77f23270494d24d9033927d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
