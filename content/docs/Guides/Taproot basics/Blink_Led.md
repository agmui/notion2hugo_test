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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYSQVX7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCulzObfIagYatuYwgLRy5o0msOSeXB%2F3Q%2F4YP%2F3jAk3AIhAOr5Zs%2BAqW6tEaUYJqOmNMxs1pG%2B4Gii9wtdS7mKGBnAKv8DCHYQABoMNjM3NDIzMTgzODA1Igyyfa8hZ5flM4VqPNAq3AOfh3nyXxUO4OuPV2sa5LdtUVSkN4c6IJ83cXFi%2ByXC3fqh8NU%2FHsXM0BjKoCfUC5ANui82ZT3x6iW%2ByOK1%2BQvR9NA8cmWVToJRx6f%2F8J5psO0sXdp3uzNFYJXMRHLxRjY0LUMK4aw%2FboN%2BoXcJhhfqnERN3Gs4PDU73LusjorE%2FSEZ7vqfQXyOTv6NbVFEg0uL3JAyCbcXarT5czf98X1N7PtrMqm7YkqyRM09qRUri0UkwH3L5GinTTiptj3DOXdwdegYkz65NC96m42CMMqOCMkvy%2FLRdPrR8PtpO2vbRtx9z7xWChgFFkjBDKtRVi3lxIWgR6XjXwRbLdz9lCkqozVS8z3gikD6Ya66va3ceBHTW2hCwoJ26SSW4zADl3PeRKIwGd1418ZHKUlI9xxpyQOPBgdF8QLqTsxQSNHRQbuSKECjRr4CbTpYzvF9iJe68xp7a%2BV%2FGrj02URhMSLEEgYAmTKHiatMDhA8AEZcXQfO4hSIDORNuAkQH8Bw%2BnhR6LlyXyzSxDd0W%2FVtccW%2BMtYUHF1YrwEQD19MDofahRF30NB9ZopEGaSY%2FYlIPzal0dMVwnqgM3nNTvnALHKdMUt28ax9g5B2m4LzoaHjVYX6qt9QjMtd4W4r1TCW28y9BjqkAdzfhZtDKteOsNnrk1ly0%2BJUxuEm%2F3SEbpCt8Ku4ybGm1tk1KmZuhUeqgGVDH2xiWSef8I4uK8YTQhsnm4cPrOq38iyQVmmVFfOjma%2BtiP5viz259EA5QYRhr7NPnVTHlRktDJSewdWFo7%2B9%2FMLopjWNrbluPH1QWhrivUnJ0eKJZYr%2FGtVjBr68iUTKGxOLagOtQX6%2BWCxHeG%2BK7E2C0gz7JC90&X-Amz-Signature=5710c40e223ae82f9a0a6bb587fe730e160d65998b5dad7c7570b28fe64cb568&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBLOU5QW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIA8%2BjiTt18s4ldQ3nCNZYr9CvK4ptnFduUwgu3mWqVIyAiB8VR4dCA8sEgK%2FKZBpPHF%2BoO7cyMl%2FXKO8g9va5Koliir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM%2BbGouhvRXfzrlUZWKtwD8Q2J57gF%2Fj0BIauduE91xgkQwAapNim1a2J4T3HrAWzpLUSHzhI9Gj1ywUCz78aTvHQouL88jXWjPXAd6aMTT6AERX1O6H%2BRferc8l8CKCT5PedUAv2nZQLYrAoP8vWopMR6A1fCPuTqbol85k1j99XUKUdk9LPs45j%2BMlTnA%2FPN%2FdUFH1gw4YngV6bWO6zk5N95U8%2B2lwddFvmgw6%2BgBao%2BR8qPKeMI25KCls9W0WmUBPwpWQZ%2FXqVKgoX2zvxm6S8YyLd67UblbEtdoWiJFRzOyFbrNbza0NfdVqbYAoWjV7O1zt836l0TXZlyQtyyTo0mPkdKPK8J%2FWtIMsA4XqjJer0fYYHHB49be6fxKPbZo6sCpudm%2F%2FCJZCEu3%2FlVIpzj1GQ3PSj6VOkE7mXyM9HlJ6QpArtdG279%2BYOp0kVSqnV29DTZPFcfntraOdsE54CnqHtbxRlwE8GhJzOvfdicur8ZcHfdVC8Uo3SNf8L6GPd%2FOOC0yuSKUwH9nTKlisXH674OKhIWj6N9VnrpzFT%2B2BH5JREd8c6pWa7MHqtnLwG%2FT5VUi0NFNawLxAGMJLOelPqQ%2FXF5Gn7MSVR%2B9YdNPHrlOfKhpNayAw9rOyY5H6B1sEWYZQirlqEw9dvMvQY6pgEQhijDn0QR%2BzNFRsKKrtuL0KHnAD0jrGJHCZHK3MT6Y578BoaDhntqpPCazgw64RpAkweVkHgGiRttqaquFJa5SgnKQmmIpYu0U8lID1T3FZMOniGFSmuQP%2BHxsgCFhbDlzdnpZXOtHTqMEZRZ6P6vt%2BKIg7RiXcGim8P5MHpTlCjhrj7sEL%2FYj9iFuikwESDcBFeoi3mDyIYprbEt7P6StlXZq0R2&X-Amz-Signature=713896e71850dec03d2ce14dd3ebf8947d493352fbbdb98d9197da9dfebe378a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
