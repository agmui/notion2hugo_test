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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQAYBMK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC4dsfEvr8LCRT2pCp79lpzzWhGC4%2FFkLzjnhDys%2FYJDwIgQvkwa5Sp5mgqJPSKuN%2FuoOonWLxRYKKs7a4EMCe5wbIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNjhWQ4UdpTSeJAi2ircA9dA%2FRG6eCIQ6z9BvXOVVOYGejDRFd1WaOaBWTjRiSxwgjk7G%2BKefMLPRW0RxjMSMspc5PBMCifwpuu%2B6hkJ1leikFhOYAauvr3v7znED9Xr5sFTt9Q4I86GKWfNw2WATfyIBrJMgzsKAkVcv6fFLrgAK2Y3XDQ8LTaqhJURH4Mr5IcVz0dZp8KgOZeIPnYyMCY2%2BuIWawanju%2FQtFwy%2Bb6%2B0lCQk2jPavpHQEFG94Q56gh%2BbggwOUXAi555aN9pA2N%2BRDSL2nLWBPPCzAF97txhfq2FnRPnBsMmmJQjNvQCqqtqwlq8O7aBa0RYgKQ4FfKYNDDIaGVixbjTWI5SZoHvotPsY5f9IAXhmskXJFFJO4GYKF1GQBgZGWwk2QEE7sSQLdoZ8qkAhvV%2FEJweH%2FIMTTFkP4iifbtBhmGkqBJEJwwrAUnnCChr9a4Y%2F%2BM%2F6qXF6KtRPyXCIuqt8%2FX%2BMhps8jlnWpcjvClzKDBFbKEPjll8t3r4GI%2BUY6uBogBB6XzYsqVQ9%2FiwGBwt6fJoib7A%2FF8IFWXmPlrBuUuA4V%2FWQbSi8uIcchQMolq%2FjRrYBGx%2B1GEfaPKKEsya7G8VntenhQ%2FrFP%2BvNDZLQkbclXvY9seeNZC37cPF%2BpiyMIa%2BzL0GOqUBstFIAYOiOFyFpFoYlqxFBmXCybUi%2F0kcYceLoCWnOZpC916OPD88xZz2CFNwwSR0FrXd7pLbzfypyNMzD0AnenpIbG6pSI7yP3zAHC3tjsbVuGr4DrknwRt0KmC3uSy2XgKwKW3t2XHQyPBDM7%2FWCdfpKjmnFSjObhCqgC84WNEaMPRxd9glA789GEjBGKGnjny%2B%2FvbVzNaMUGB4Lzb1sV56UOvQ&X-Amz-Signature=4942c01a7c13eee1b108d93b9fc28fc135084dc64f4825f41f3883f97fe6eec7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPEJX7C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDFdPIMFD0s2PLyCLN1AbmJMVPV2F3%2BVc1jVSHTL0mDhgIhANxH3RjXQu1ofzF7tBXJ6CBphG5NKkOISkzsj9tCn8w1Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxHtf2FkHDrJpnqkw4q3AMZJwcPVk4QxRrY3EF%2Be4ZsRprb00bg25ROxOwKS6%2Fi475iUnCDR8F2dlHEr5SV5KNIKWwNbwcCbQY1J2JYpDWYvqVZ7%2BbLQPoKhMkBRph%2FbOCZOowlQzbwKOg336pzd5gTew2%2FBRC4l4MUlbWOZVEsBF%2BYF2zmU%2Fllfl9xVjMQI8y76%2BB1j7EPLZEn28UxpPCUoEKpegVCWbXLqxRdBasSpv%2BGO0tZxaLVvED3xWxWi6u3%2BoU4I4bi2h3RclD6IXT8H4lvKmOJmuCmnqEZCYkRp85F10ZYQFmXhFq1OVkHRoZSpAHkTEmYAf75O%2BNxGzOMjrWaMeic%2Bxn6cAq%2BR3P3wEArhES3bM%2FklMorbQsySwXYEivCutf8onq5ziD24zsQKO%2F4WXf7qLWBH%2FHgIPl3dv6C3SB9hds2jpLRfzuIffERi32%2B8Ilr9FTpa6ioqThyELVGZp2MJshMr0lGL5OgCPnwS%2FVy4OvqYLgsetA0sMkUR7S6iylySbAQWFoWSqeyPPLEUzPs0LZ15YZrQxNsZZ%2F9PWtlZ0HJAToJgb6K6lZ6elZotWhgwTKe0BQ6VaIELZFfWRu2gBnPXIglXosOU1YsbGVYG6jArrm6P6TgQBHMs8FUK7D22qqEDTCvvsy9BjqkAUJMJUwGSwXoMDTihb2eZGNiSikbUr6S6j%2FQiV3fwxYHgMIQzFvfMsxbRfw8RzrrquCDF1s7CACwI42RpijAjh4uYZ9WGC24OYHWq%2F3Wr8RfBpGyUljf6Wy%2FHMrAwDIBrC5HTQv5vofiAwD0dlkVFHysedq0GGH1g7wp%2FBSTNc812apEzLl%2F%2B9WW9e7yZbVhI%2B3O9LNO6Q%2Fj94Ydd9iHC9QW2p2X&X-Amz-Signature=a9d3944c7deeeba8383c15511e460c5da1ee65f07e9a192530889b515d774990&X-Amz-SignedHeaders=host&x-id=GetObject)

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
