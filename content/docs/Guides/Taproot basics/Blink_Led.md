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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6ITJFV%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbBa3%2B9mZjecfBDf65FqTnN6xq2OHMoxVqdzk5YMslNAiAsBGdVKuJprROyaPY28xBrtN1rqydzBbGlr7X%2BscfiHir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMiOTz44fwzuM%2FNsJoKtwDgn7PuMB4N%2BDjaa%2B9iZZwrj8Mh5pSd7wwoxP03SplbQLDd%2FluQkwfikzQ59%2B3LRDvtx9fmfoZokdRt4tXScnQNjQKEh1pVUZSYRZQcURaR7XdYnlPbNYMZLMqAYzYs12yB2ZqFQEZsPnOHs8JUfsuymMf2Z1IIYsgZVp1NrnOtaA6zSS1Hv7L2lMMlfjF2ds9gGw6OJZkpY6USmzNgHPy211TK0xg9QQi0qzh4LM56umOrSYBfFYTxCd0wANoplC6cHnLbb5wZLaYdosRNRsYlvGkQJI1jWdQId%2FGkCm%2BIrTqmDbQxZ7G2bPb1%2B%2FzS46aLpbWM4xow1xsFcd%2FhOgPOYY7%2B5fyH%2BlFbOTZQFZI38RlFh6ur03wNf%2BcVug6BmpMqcRwX4nt2ko%2FuSOw8z%2BWeKOqv6TIcv0KcnJjLpdk0hEdGitWmLELGm3b5LPUah3HE2sNS8%2FNYQl8e2our9Qvog%2FPdfCoHMzyOC65q4ICqpoU49bi%2Fz2DpHA2tjKyTKOjg5PKLRWNYO5Z7l4aSLi0RmzyJIhcF10ipCsjrTX8pJXAIEy1cWMRt4RRVNKGZL%2BowIUZPs4BkM20jwa%2FWG85O%2FmUqJGrdpsaYBLJbidqXTEYOtv9A8G894A2YSEwzoq6wAY6pgG8Z%2FCTh7zyy8mxXGPtsX8Q1T%2Fcz8FV9%2BkRXmjbglK6wVb74e61H8%2BqwbWQscdWEit4fh3rFFOOE1LqJydO7Z7VL7K%2B%2F1Pu5eHS8j%2B%2BotcpKAh1BkKU5WVsOqsOpZIi1Rip2jXAJtyRsYhwDClAOOAM7lJbPrYslcTVap7szmeFywJk3EDAdOjOHP%2B1VzIAdEiuJ06ICzQzK6u3acw6c5xwvG9Y0yPt&X-Amz-Signature=856dc6a1c72889e4b3f66037244292b549ac6578654ebc27c6eaff21f01aeeb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GICSQXW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5ns7jh37QcY%2BT0zpRM3YWvhpWpRqoqIwW2kWekylrYQIgdAT%2F36htA1oDPne75qiWMjFqYmvPT82t3dmi%2FijaHN8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHbJzDLtX6ZA9YUAxyrcA%2BkX8xbCJ6dMwaGlOnx67QqmB1jmoHnEYCkOlw%2BhuJvJe%2FhosZxuTUy%2F5B%2FrXnxMq3sI3BqfRhQcBPG68UkCAUzWGuHarN%2FI11iWhBolLUJ53A5Nd4e%2F8gPrUod2vmmYYqv%2Blb3tmmxv2pxoPzRQINzjCB109x4qjxlZkapCZi2ovR2afhktK%2FhYJ0dzXhk5ZYAotr5RBtH%2BgGyctC8u0kCn0Up2NnaQCHozgpfP9x0R6RUI%2FK34MnvHxkqeflpRJnCOs1JIGLvUXjKw2lkUEunmWdH9dhVvyL64YbyQAhXfO9xtqqouezX%2BNahXTAY9jv1uaGniuNKzg3S%2FbDrHoJCp7GCAMRKoTjHaCOEagPQHpl04fHb4wCkbTq6epm%2BM%2B8b1hzXbdtuAklXVgumilyutPSYC58C0SOzFxLnkIjBM6spCIPN6hPbHOHi%2FfiEe9yhvkFwuVZQbzxAZ2NHIwChlg%2F9PvvhpLUloarUX2djt413FEdOgu2j9uDx%2F3lWPDsDvv44NgNAoAqVpjs1lmWTY5tuVdlmdV7M5q4okCbYmedQKtehElTXqkzxR3DlIrJV72N9KBTt9VzD2iEK8LIRbLBqyemc%2BT1Umg8nsWRFGQRsmdRSL0uq6gvMeMP6KusAGOqUBcTfEIwTHJ5YKAQQY5tNQ24id28yznNmtMqJW%2BRFbJRsZX9nol3Lc6lPvNOKRRLhTfv5%2BomrBN9PFwAsCJLzZpnfU%2B0RglHXd1lxUkJiHlyNG6TQSJ9UYIWFMyiDHuLHJmnVJqmOe%2Fq3E46zFAdJs7sXh1tqL6wifM0nUcQIaxd8OQQ0KZapbZDGT2%2FJaD42%2BtMIpY6UpoX4VPRluTtkDUD%2FLNE9Y&X-Amz-Signature=95f11b7717e5464a863f09f2c48958ebbf71ad43bc779843e4631f7ca5f4493c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
