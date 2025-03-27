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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWKFBL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fh50moTrXdZf0YKrWnnfdbUESpkuwjc8K77xn1FdPEwIhAN9pxCz9LVNJDJYC9Q6YnZpoZuWza458uVjtFZRTBdIsKv8DCEcQABoMNjM3NDIzMTgzODA1IgznixzhV%2F%2FQH1szkh4q3ANK6rrNXiM3kTsIMeaBboVjg4sXUtBEwfljqCheX6KpCP86aEUmFJfA6ntCbNssaJjCMie17WLodMZeWXJ0WU9Lujkt5MDpD6fNnwdD%2FbZ4nhS9My%2Ft7jgaS0JY%2Fel0ilbpjFbWXu0%2B%2FzJcV2wGsNkDN5BBkaGnqDwRwKmP9veUh4Ad8mWG2I4JdzKhaaMVauPS%2FN5aocm6QPjcaoSeTCh2L5l8G2DXXz54hnbkAQZ17ceHFZm2vCf%2BR69UPLjPqt79WYiOKidhMgI74vtcAyVzq3KzehbYZRLjdvbsgTLOAmjx%2BJAsaJJrHAFnSJLmfObDpYv4TBR8a4CmRCUclvGSJOZJ7fTXUdFzLCwRo8RfoNY%2BG%2BMY%2BP3%2B04jW4bKcaeucBJdVHaqQvx5NClEbekz%2F6pFfDJ%2Bv0tMozwQ%2Ffpd6bnYVImshZyf52hRMtgvQ5VbKB1mbI8v7qCOkt%2BSMd9oahewrCFrzgazHgDzqfkK2d7ZhLRZDeUFuEwnzSRDck0F9Sg8mWRahL4TocZ%2FxWrRumdbBnIqf1p%2FRwRnMjoXmoin%2BYUoWHT4SbTWn9ryu77zF0iZWqxhL3BDra19g8W2qYFiBo0zlY09yZ6AtV7fjTH8uNpPNvFTJXpct%2BDDlspW%2FBjqkAafaT97ytqk2csyodVbVlwf27IByi0XDVDGlVL3PyPIcxIxtAZLep3ggAx09cgdgDmSpqsHjmGB%2B0TcVoeYKjzUKF1NP%2F3aZEZtNDeMqKKvSKHyjWEyyNIaZ6HRpjFQZPYY3Dls35ABO7YW88hg4S2bQpIfMqmqCKvOFDuuEvQl2CTO%2BPquTdemvJZk47Ky9zwxdFJVyKwYH8sVNtzsBc%2FS2AYva&X-Amz-Signature=259b75709809fd816264ebbbdc6c8fccc52711ee75c0bdcc0edf983e8c9f3640&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EP5PHQT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV7YbKb4Ds4BgvFpejz%2FflKKYsd1EJjnCtJiXiCVK54AiAd0WawzRzJFoupnsBL26Z8rcgYJ8sLbWW0hMICcVPIxCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMezxDPaCpJKXWCNbWKtwDUdd86BXSfIAgYcGIFcOG4eL%2B2%2FF7ookJQG2u7GTZaKfJPGPS6jXfZdC%2FfcgBe8Rivp9HWujRXMQomIgAVZKv3L49FlC5cS7AwqgT2kDhna%2Fxoswkn8LS6WGOW7y6MMJ5pvy1S3eyX3TR5Kpog2nUE0ff3%2BM6Cv7RPDqusP2nKLnx5ZLSXXD0AfyDunhWq9FMgJ5WvQys%2BMopX%2FSoueVgYi0V0IhzOaZushgNtmLQAQN7UpdrLi3uBqupSGodLaY7ucWR8ml52o1LKDx9l9Hy4fIKBwODfi3%2F7X%2FOnnxwso7caBlotx0znLcBqwLiKZZptLhVOGCWjO%2B%2FNB96yQUcINxNq39ys4LYGygbp6WG2vB3%2BzIBvxpzmkygOpB9WKYhHvneBbH1ei5kPxt8%2F%2B5inMthV8zokM5bdXNintBjRabvDbnjIXcLiwAGw76IYnao28qemZ%2F8TNMNNJPvk%2BH7m4lEIzzQFTgvSnsnnqapzvfDeebfY8YlidNooVJaN0LjJHDQRvqv00wjuHOjtupoXu%2FPnSioVBbOPJ5TG1vutIkaoOPdF18pYT74iJ%2FPOhlOpyXo67CvIVhvmO09NBlPbXf%2F5NO7LpFyAxky6gmczP5i1lp5%2FZhlgHWxt0gwuLGVvwY6pgFh%2FJAP9sjeYBl3%2B9MExMqBCaM7wyuXzMbSlBdRSmgHcZ7GArkJUrLhKgXqOTSJQNMItfxAXDpAkHf%2F0lTPvjRr3k0dj4nHJHRJwUHxSlWVinTa2qwA%2FvR%2Bk%2FxIEHKAOUDvOIY3O%2FzJWwDEJAT6%2B56q7q528bf4Bh7JJJCkqRrn8CBXgcF1Y%2BMjHNWDwsq1%2F8R5mlUeLbNT29z2NBNmSDEN7fd7FvRo&X-Amz-Signature=a45204f9a6c30dc8dfa45b14d1c0ae05cd1b3bf0b7a5e1f47fce3a7195ea7706&X-Amz-SignedHeaders=host&x-id=GetObject)

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
