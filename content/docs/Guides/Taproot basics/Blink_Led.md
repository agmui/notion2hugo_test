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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGZGJP4%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9tsRchd5z6HXov3F49pa7lFtkkMJBeI58D0ajm0FguAIhAPUC44uanTXE6GivWQJcRHOJjp5MMVw1Gvgwqc9n0zADKv8DCEkQABoMNjM3NDIzMTgzODA1IgxbNZxfxJu%2Bxfp%2Bj0wq3AOoNsYKLfe4SJod%2FE4cWIFd%2B2Kryl99w3OZp0KY8Az%2B2NIEOSci%2FYQU6%2Bj9km45srQsLWMkdzH%2B9Io%2B9X1ZP0CCRqNMTgZVz50wSGk%2BBJkKRIBYz0iDnBLBPGnz5MJCPPwrAh4vMZ7n9hIe7TIgBrIL1Uc1m7v17xzrv22Sop92U4JDTa1FVqx%2Fh97zX1SGHgBz9Arhv1hFfOU8v2ncyJbW4fJU46u63KfRdM0fmi97tuhnkn4g1apwSM7xqVinEz5x5veqsKpvckc%2BwW4Q0gFRDenZjsANmApmh%2FX6mpBi4jHlDgOLmS%2FH%2BkvrtZzJMjUOnpStOfQUAqCZipAgbvUH%2B1ZMKBJhoVZCgfKWycUqBfYku47FN7u%2BIJIjch9mHsock9BcHZcdWplBDMPiyBTEElrZniLOjXniY2OAYUxYkWfKxpHrLzzxvlGTGhn3R2G7WD60vH0mGRow0WjWzxODDPDhL9cmvqEStY%2BQhKz%2BC6qJD8gc%2Bu9AjxElu1gL9AqHbCLF%2F6vcsWWNHv27%2FC8F31cMHH92xbhsvttYOtgv8n6PXTaH83TLcMGfUrne2Phyqsbvj8A%2BZLJ1lmLEP5gBwJ%2FptZdbwsW2JwI4xypLcdHM6Xy4IO9S36mA7DC6ktLBBjqkAQfvj4EDYJaaKja30HBTy%2Fuv0%2FKnJJVIML6T7bSrGrX3g7qRsfJkOwy%2FPCQO0xKXYpglPiY7PMoV8RW4%2FypsMqhx7BKfEZWf%2B4zKmnUuW%2Fafz664Xq6VxBjRTjlI6qsJQhbe%2B29rJAs0X22%2Frs65chwLC%2BwSpH16YyEUsjhEqOwwgUpTxQGtjM0vkE6zsXE3J1MeqO8SRqYlyKgYp36fmS9cdU%2FW&X-Amz-Signature=4708a5e5364673b6aef455c81691bcb35185760876a8d2c44aac1f70fa6b7065&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHLVTA2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOtNLZociKwZKHHDYzdTxRidA8f4pZb71m2c%2BRzojOPwIhAKmDotiW7h3DfIg9reusVhxsxVPCW69G4mwV7VRdtHzcKv8DCEkQABoMNjM3NDIzMTgzODA1Igy2GtXyo2EIztfvWvQq3AOLnsLPnyAaz1BPVQmtCpGv0S8sybyJUF%2FHv4grJi6UvYARE4E8XaQTPAQgytQWhjtWCt0HUaZVPpVM2e4RJIuUJaEDoE8YNeUuYKCj50IQY8iDT7w0PaPRNOg037OIgKBr9zYSrNzHdjh94IJGQjL%2FUqGYdZVylh9N4LaoHfQNL4RifyMeSs0YFIFZ6ADgU9MM6BJLwdcAQADLuf1pRSukjMANBP1leH5b2xmDkUzsarzhNIiW%2B4EowRAe6LsF6zwyRywAyd%2BCyl5M0e8VnI0vWCtDDmvs4XdjO28k2AmEAQIqN9A4oZp%2FE9nOb5OmwwcnFLGy1cmVIrdiFZdLJU2tPdC1nd2E573KcLfGf%2BGYa%2B2Ur1It6dg1w748i2j77O0ZgA%2F91q7bzddkt0fww58eCape4RZUtI3QsjsOYeciNMQPhE%2FC9iJWX%2F1616Twmf8FMlOkvRYiZYrHP6u3dgoc69Qvshm%2FSGb2uesVkVerRXJNnu2DAtSYMqq1Aa5vsMY1P2I1CyoDADLc1jQ%2Fi6T3n5kfSxWrq3nlCzjrC4MgOlX6frzI4S8eqSqmTqJ6as5EdvQvcre2d%2Bog65jjYA2hmNusS%2FSkp62XoM2KwCUJwxJa544Eb9Q9iPDKszD5ktLBBjqkAWOb3j0mjrV%2Fuyy6gKkDgBqpjskAhJ2Gwxh%2FU4xr1V3LjG0TuWuIDrzzIbDnemwublwlDox577J2aO5fMQEQ9pgBTnU%2BJcqOl0XXv27w%2BQOk2uZ8Tfr0VIJnbu5oERcS5DY9inLLf60tE2nQy72tY34Inid0D%2FgiMpYkNZcQB2hpd%2B4OMmYHK5SKUqh4wzbjEIryuxt6wzHVeUKWvamRVUGnGCi3&X-Amz-Signature=d1be46b784092a7bce955c9071b157baba1227acd9a8fdce616fb8e4b4c90f00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
