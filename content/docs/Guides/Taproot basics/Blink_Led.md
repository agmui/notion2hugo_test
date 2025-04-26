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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CCCGVFO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVALewspNb97AYhu%2FxFf5v%2Bd37uLEXagsg6G8n%2Bmlo8AIhALX0tVo9kBtqZfrJpERYfrzlkFJNrvdTUHP0EJM2WF4CKv8DCEgQABoMNjM3NDIzMTgzODA1IgwCfRUPY2UcRcAxh78q3AO%2FXX51Q5UFcCrA7b4Q3%2BdcthkyD8BTFIlja6w8ceODye%2B3zeM0awnnCPJI%2FAN0QidBrzGeaBl%2FGY5WydQ4uqHPrpzXF%2FQ%2BpxeTh%2FjEou%2BbGToD%2Fl8zRTMYdO3RMIiZrXHVxPP%2FBu5it7ADuvjOW7K5p09Tuf0uZyg%2FeOpGvV%2B5QV9iZq57Prt4j2jsrAnY6y2omKPNx2iuEkuZxGKWe185MG5CoFomxbrW55Cr8KfMIZnL8VcwLSHrZK3SocPTVYZYLNpQcLITSVUohFOmK7ChaVD1Pl0UxszMT61oASIAGm4r3LvzZcZ1RiHXWklxBp2J6w0mdacTt3BpvVBDDX2QSqIbWZI3503tqeCriwPtuLQUEV3uxYuzYhx5efzFdgWi%2Fozi0gSjZkKBp0mGg5WfNniscHqzrkEvVAKpehIQgJoGTAk7hy5VOzxNKqUQa9NaIWrQQAdDom0n9gzfUpm0tlYf2yesV5pOzNacr9rYWUP09LkY%2FmkQLBd4kGfJTr9mffHz0v%2BRvMQlaW6W6PqfsFbESinmpQNX3wZ9iuFwCRUmUP%2FEf7bFEpi%2FoxmtPOC6Iu10Zzj62gDHy4AaE8spHAoEN5EH5voO%2Fp8Us5Q5EJY8ETXf1cvls2P0mzDv5rPABjqkASqibBhUweuJ2gLrKkLgkgBncgUU3uOXjkbtl2BjOo6LGdtThKZY2RderkXPzUAvSrkpJId9J3SgeTlDGHVyZNMu67DPUJ%2Ft1PU%2F%2BQgYZ8EZT6cG0rUT6bWTZi8MKS0DQoFodLE1oUpiRbAUlLnMcaEmsAUHSBZoNUAD46WXkMXkcvXrGTBVGQbmwf47nedxpcx%2BlLTJEfXY8XOH5%2FNAUcsCkBJn&X-Amz-Signature=4e2cf6725923401a29b2b2ee39e0640670dced67968c0e2ca6a936290d9a68ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUYTGXA%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEyVEDZilEtMEGFYykvP7zUQmfI1ciqHShhxfZFscXKAiEAlwWZiODmd9HUtZN7h%2F8el%2Bu4A3w4qTcUBs79CNHMBAsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK851lulVuNgFyQvxyrcA5w39PdJ%2Bch5x2FvzlnxZgyxEbdAhJ7oe1MB4MZ5dC0uUgBZeJps%2BSEhY5DL604UC59yC33hAT3Bgkxtzwa98CUs%2BqngiIV8bJTt%2B9F1B2WJLDo5wJQJ3BFirr5BzfHkOOXv7qQIa9T38bg6iFKOy8%2BTH0lGgWjB%2Fru9wmxCKqEWvPvoQpqrgJxBmrur6vkqZm4dC7vIDeqLcZp3vYKGK3v4I4dY6%2FtlbjzyFe7dRiX5JmwxJc5WedjNYqzWnO4a11g6JEaTXn8Cq%2Br0jVZRAnuY7XwRlWrfJBCA4XFo%2BeTOKYRQQemHSyl1IQfLFeNlsb9Gz8AXCR%2FjGE9qYYDY2FPEwjpGFJ9DXl4SnzMDmQr6EbymRx%2FrPhmWcAwYerFW0hZTVjQlqu3pgTcX9HnRbJHAYqN%2FYJfLOiQduOK7jegvEFuFi4EfkXrmWV%2BY4c3fR3wJaJp8Iz4YZPsiqeC7DfQtSJnR9WKAuLBHsnfnl6Ps8CkiLWUvtsXg%2BcDneCyOdjvVWtgy0WZuTfW5GHaI9rcy4hf%2BytxxtBkhk3RXWUmIKEJfUzsauEeqB4eozNPyBdi5xscSaa8lJhvBWi6%2BXYE7AiuaX39iRSXwWs%2FE8wnEo0lZtJsfMaD4VZPQMMbms8AGOqUBMCmVMKSH16%2BYCWZH0yezvXVE%2FSvwxnemLkYFgCJKUDkDb3%2F5ZjNAslFcb5t7JEpUo18A07j2kBh1CgVK%2Bkt0aK1vyklx61zEyctkFXpaNc1tvTBjzz5jC5OpbaeuRUJprdXfR7pa2FTmi8Ehm7j5f0ybzFg6X3Nk2nYLF9WRVMeirVmr8z0Kq5gJBkO3K7hGQhbeskEMEqF1RCK2pyuW1WMAwtTe&X-Amz-Signature=3816389486de4756cc9f7de405706ff2a1ae4d1b05936744f1dd0f23fc917df5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
