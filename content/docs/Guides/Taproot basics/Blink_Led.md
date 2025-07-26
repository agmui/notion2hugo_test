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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HQTDIWS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFqmIrODpjuD5%2F7r1ZaTrBwjosYBZ6qgTJodRBF82CnJAiEAlMHfMSfJ6o7PRnE%2B64tdbIvfn9rMFkN5o5DnOrJX5TUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGPhrG1%2F%2Bu3sS%2F6D5CrcA5lred5mH6MqgY%2F3A5pbyN7gyHRaPT%2BMJEJ95bE7D78gh9BYsdErifIrojG3ROxD0%2B7slQvxIXCHWX2hkw8HefnHTo7btbx8Uv4gtT96a9HtV1mqELfKrY5i2UdaArVWcvd%2BeG%2BalPUTHplC2NZPEM43auud1yFjnQJeEND1XUuB%2FeOUkTHGxzIlSM%2FfGkyO%2BoNdUCAb%2Bn9%2FnG83Dz%2Fcz6fASBGxjEQLIT%2BHlu8us5SdQf%2FqnjWSeCGKN61oQ20XLtmOwW2kn29380bY035nF9%2BtBU9RGDWt0qYAI%2FoEJOawlS4NgY9ILCWasoRfMseH1kTm7Jfj48NWWRaGHiJzi5TzyuiFasvzqTUrl1RDJyX8%2BagfboTD9voR%2F6hl3k1X8ditET0Yj5UAP5PDa5Qujj5EG95Dy6EllOmgeIwpFQY0i0UxWYuiKxWfHqmqKfOV1Qasj1Wgl9benCdY2geroIqHan9JHO6HBdBGEBgk6N3vi3wNtPLL%2FiX5%2FuswDevUdRY8H3b72fn8F0Uw4oJzi6lyM8x%2B6Wqf2y1kFSE%2BnVJKjYKZfAnGJX6qFwe5ERcX1xEvf3TRaEj9JTXOXlX%2FJoKHAcvEVYxWgVTEL8zM0XWmlLYwuXNt4Avwphv9MPLBk8QGOqUBwuhoNaeR9TF0B6%2FW0bn4AomgTtQ%2F8%2FYMnWaXc00e2QU%2BfWhuloPT3fwqdgiQNYfhI%2FXpzpi%2F6HyPnZTBT2C6DB1RQBlg%2BoIJNhRwVk%2FF49%2BbgVxd58tLkkZD7rJujr0vWlY%2BmHNv0W0rpe8P6uKgCmXGR7fsXlSzBXtNFegecse%2FbC4Zcn0bVY3O7p5sIYwXoZvZpd%2BfRBog5QAITg9H69TGas%2BY&X-Amz-Signature=e9292f576b425b37642f7b17ec449d4c3994d327fd1a52a9c42ae08102dbc784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SODOH2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDGDseUQGyCauoTWfeE8QnR0EGFZyUgYnNfdBxSbmNxXQIgN%2BttVIGL4A%2FK5MfI625Yaaoc5%2BBiI5z19Qi8Xq7jmnoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBo2%2FYQBeyYkpxKiRircA%2F98JKjHOm2nW%2FPnxRKJ7QBjM4XR%2Bqu%2BjLh0JSl5OCoBQTzEKsvi%2BPSRF0K19JmbPbVVRxrOlMZV%2B144epD4UKo8HdCvZil7t9wUIKvn1AehHIWmvzWGA59f4o%2BKVszLqwLS0pO0ExM4NE9UKrIEOGZbdNPinHu%2FjDRZSAhBGGAg9kTwDPRxdY4lmrAqhhv3OH7jQtATHd7wCiJyVRCMZTUAErPDOzA5TgCaZtL9wCm8u6WB17M4Ij0DRcAd6Eb%2FCEGFyacVAmPu4d7W%2B0nQcurGnIttNEQFmazdg51yXOHMJN4OqEhPks7bJN0nIKjLL6x9s1Fy5hbqwpyeo9RJd6dNiS3xs1DHX64BvL0yIZXZyJknrLtk2PAVx%2BVnC5m0GOxB20I%2F1Puc%2F1gJB1Tz%2BUNzARb5ZRyrFo3Fn46otJANDht%2Bw3vuXq5TmWzQlxADnQmw%2B2UhH7pthKKgPYxDcazW%2BnupugCGAwDWwgSzVvBJR173iMqTbl6gnUUlUoXPqs6JWE%2FHIQUqQq1N9jojgA%2B4LF6m3oHpyfy5wcDGGqDY7%2FPocftfLmj1NWL3NkfKee9nLq6W%2BoTCHm20BQkgr5xFFxCnNd2%2FVUyR5%2FibFnF%2BakzSrOv5amk535FrMNzBk8QGOqUBD0C7ERMJpPyTBkPHORKmOno6IchG4tDdoqvxztUXGm0vOeUj0UOR7ThvpezPoXqTi8TJ0hnnWL%2F9aA9nQGXKuHhL3m8hoQPsvqQieTeo1479yN3T%2FbWV2TuQXJHk6xJwBtNeiTzwuwIGRxSKE55asA8BX2WV7toFsRNK5x1xG8MiA8XK3BIOVxzLGZgGKyMzN5LgxaPua8HwBrqj7YqCaw9j8SgE&X-Amz-Signature=60555d9a242923c216211d748aec109e09b4032c78b96312f28a3b502e10cca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
