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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMIRTYHY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbWMN%2BxVhGcefAC3EMbXEeHp0hAxRqPVx8z75y9aAfHAiBIxA8i0pbVh77%2FghveNz%2Bbc6XEidJjvOFkPF0xVYH0hyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYfWQZTuS%2FT%2FRn2JeKtwDUoPZYxn7EJb5xKZxj8JvMQB7bwPLxCg%2FufLgVr%2Bb0imxohNM%2BRDAFaB0KRh9z6UseEFJF9W%2BSkL2Pg74nbG%2BzWbe26xSBxEVziU4BN5Gm8siCbqEk5BsQadXMi1%2FAyPwAr%2Bkv1jgQm%2F2zoGCxE5V2g4jvF4P5vANKkxsTRbUP%2FiUYM2sNIY5jt%2FTBTiVVhZaf6GZ%2Fo8vJizbJsAQspMalMj38bZ2hBtID1aKHWL28IPMpqFxq7Jbme22caLdAuHlNrmLt8QfK3%2B4NELkRyn8Di2fazSxqW1QBjh8piS6bSPY8eWFIY3hoG6PWf%2B1TkniGoUzkCnQe42SYcgyVzPWvUkyP52mXK3tWSNY3J4yyhJ4P3bcE5sH7E%2B6o%2BGZbmzYozjGs2BBPF%2FoB49aOLavqT5Ur8N9YwsmG4jOPbAdH19GJKa9Bytnx7Hd7XefSx9rYS2mJCe%2FSSRsR%2Bi%2FC%2BDEz%2FuUDIkYrj%2F%2B3FNQjuxTzb5m5QmxFjFiQADCoXC44wLCPe3t3HbVlY4qycOdyaBv8oNObiWM2gF0Ed6Dv80U4XsC3dL0RImd5qmH549v3MqK9KLqflf%2Btw7Jf6xgakBQ9oBt2erLgWUG9X0w2%2FhR7ORX4tn8q8XfU7o9A8cw1%2BqKwwY6pgF%2B7x55mcOYpnj6tlG%2BdNREtpUrYWsOuen8%2FjY4Nva272RBW00H8G81Vesd3ZgVW4ZiM4UoDKxFd5cOdKHLyVKwLzo7%2FeO%2BEdrBs0bcnruZLkGt%2Bg7p7AgAdwnZGa3NouEM7V35%2FgeETgbkkoZDtreRWnW%2FhA3k%2BRjyxkg0qLWTmEiUNF9zDRipTnFZo06ypHxT%2F0AabWSr%2B8IGqFkASm%2FqQCGxbaIf&X-Amz-Signature=d8a8a34ee83004cbe7da131b6d85458c6e9b9034d8b7499d6b49142b117447ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAO7OZ5%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqBaFpxoG8apmOrF1XzYN55FQFbCzHpk%2FWsbmCZrFjlAiEA45KomucfQxtYYd9L5FxX2ifjYYyoc%2BF1vqIo1o3X3P8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2Iw2BkOBe7tuVJVSrcA1YjHnDE1H1n2AtjylC0nE1YR0%2BsE%2ByCZzPK8CJUIIIcs1EMs4Dy2gzRJgv73sjHJSUtB1Hfya%2FBp%2BQmIXXso8ziy8jmL3kUiEygB73UHSADTjfDreHsZEXvOxaYfZCXhK85mEjX15G%2B62TNzY1PAX7%2FT7ZNq%2BcT0UJoZjQ40w4flB3%2BkvY1WZC0UAxfY%2BU3jNySvjB%2FIKkaJCQLqvPcSFxhbR7UuzyIYti%2BkzGyi6J8cnTNmH5Rcnmw%2Bs0gl1boufOvFti8r2uIh89URWmEFLXti66qrkiJ%2FFSwHpMGnc7AjWFsRARg7KSU87gNkgiSB9R6BnniFEbVrUHGzq1FddhoiiRmQzLjHvzohLjXpoePNnnbVU%2BzdhPQlvNKZc8pjW9LXLTBku9NFW8RwXCdKl23tHZogzv2O%2FqO06LAt7vLFNtQTVygzCHZ8bX8%2BEgpX%2FGKzi%2FHq21JQIRpqQL0%2FVuFgTnP4AIN87ZN1vT%2FKusXKBjqHxEYuQCLFhwchiWNaIZCAxWWi4eg0fG9LTqpaL77MnB4Y1WJo0PTIBc95e7EN6VAmjKyoFpBt3tZQd43lk2t1sDWBCD5rr7zgn%2FOlhAgG%2Bp7QRQ4bxC8ew8kAPQiSiB1KL5bxnAgJBxeMOHqisMGOqUByphnpOUc%2F%2B9c8AvIZMaL7WJnHw5ns6nuUV%2FrJjtS1F9sIpgD3ZGjkjdZaAhCJkqPK5q2ekCHVxr%2BjmM8zIGGQOJrBfSvMU2yWF6eXqJCHFkE2TTgb%2Fxapl%2BUh1oJEDT0%2FBKOmfWQSPxySaDo7fU6y7ZJa%2FaiQoZ4YfhN0T3I6%2BSFee9qZbpdcHtym2F24sOBX3QWfD1igm9HKpp7tGJ363KQCWJ2&X-Amz-Signature=256536d6a54dcafd4311da82cbaff322de7bc554f7e1d1b1fd6713f05678ef95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
