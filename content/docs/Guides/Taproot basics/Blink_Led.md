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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLXOTMC2%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaN2f2UThxqMsMX99WB1GOrajCbl16pOVHpm8xrl%2B4ZAiAjfnROhJ%2Bzjp4gSO0MuBBBUT5xhGs7NV0luNH7CFOFXiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVh4Q622Y4avhniQGKtwDiH8sw7NzLp2UPAna1B%2FuYWkb67i7ivAxumAuWksm9zCCcRtK%2BfOxOdUl%2FKjvFRWHyX0CKvZ7%2B2fLb2SteYfZ3sGrWhq8FdcB3cABP1RZk2yo2Lz6gpkyOv2mWUPVfxubbrs2Yovf6LkOF%2BXjoCv1TcS27iyBX3xCNMCvQw9nAYQSsTEpWfQybbf6ltCyeBgZP1Tfczq3%2BRwkbgYBRe3b%2BPkT99n5MusAatm6%2B0G3OsGwznhrQCDOWKtV8%2FnXLf0%2BD%2Fu16jskHn%2BIY%2BEo7f77Zzczz4lZzDjSj%2FBMXVrEX%2BG2dJgJaL0xnkjv9lrW5rEA1CdHCzf1j7%2BOPEsBkbIDs8ZjuvNIthClsf6HZFWTCQpZcg2mHYJr%2B08ad32D6y9v2Gqxjy5v3Af2Thj14zT006gPGbhqAFTz4ZCGZ25DmBKFIjHQHn4qEOIX6cQdmEhqhGWrYrRjP9qSPqyoUyY69XDMTfKCLMsBP7l308w9XkXHJp6rMhACd8144WawsqSLc7ZPos4lmOjftMwL1lCvujVJYlUiwiBWOcXRnRccqOW7Nwa%2FqOaMj4tvTpaX115HmHi7t0zxXMXsNTjCoAptl39uvIo4%2BBAohB5gZ6taa4Briyxlr4IGTV6qYtMwgLbRwgY6pgE27fqoOBi1Sz9Tgri7968XNQuIxD9EG1bFd9QsYk5ciWLt%2BbSnnUGh3ZA2JkvH1Fl51YUOJ6Oq9OWK%2F4LIbpn%2BhXz2uAgvZYU3lRoF6fQmTSsnGj%2B4O4v%2FNZ9FZUB0r2Q5LTKOXtgh6dcdMNvWcjjsbsGYudPbpTHClrDq72Vn3utUP7EfCHstpGvBJ1ehG6iGVlG%2BWWsnkZl6org5M%2BOg4hOkkkO8&X-Amz-Signature=cee7b0d2912266ea5b00cdf99015d37e655f22d9a18cb03deadfdd9882e447fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SLF42LP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGrZkKhRrDyMw1zPYf4%2BF5qntwVBprY8DVdPUQMZ5XxgIhAJ7it7B51P%2BIqF5DLcAQZ9nQzrooxt3AF9juhZvPxUXzKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoztUl8zJi8f%2Biqtcq3AOtXR4Hmrd3fpPWFpL7vT4e%2BxorvOucws5SH15P5ECX7f7t2%2B%2BHuApIryQ5PS2DvPj1RaxnwEP6FlTCFz4xDWYgn1SUXSkv7nG%2FBkjW16wNTeT%2B0DmHb9z2lkOtjkXCUWnyJHL3pWnQOFurpLjpajP7%2FNJi7nyWOmSb6n1VYDmqD6wAMChnXn5KN%2BDYQaL5W9v69Zu1D4CGal2BKkFo59v4ocsXAr2wfk1CA8zE08ckd9yyxeS6Feoa%2FujOBNlZY%2FLPs%2FkaXjUK2gMxuqG7ymXi6WcmPuuOvyLXXW44ql7wXWu6%2FaRrL3BYGF2SSzJ10mHhBgMjO59%2BtT1LeD69KY4nBErSdTRGwSvaU%2FDZQ4AG2Cj3H1aSqYSZJWFulGYct5RHMdaH9CgNza8qTyfT5jTMQwHALtzRRjskDA%2BU6qS8HS3uz7iw6ZdurA6KvQopQ3jD4h%2F6Di3uSmS%2Bt%2FEwXGlojEGrQ%2BIbZMV51QeIaVfPig7xuzhO0T9kV8KfHvdRl1xAUDbw4XEAUK9u2cLBiHwN9TTvOBwJbH1lOhzIur4BPT%2BeImbyiP4jEJr%2B7ihpQGOlOlE5jmqzi0tmFqHmWW3cLiu15jwlpra%2Fkn3qmgxeu4G1SZEKqu5GOyb6%2BDDVtdHCBjqkAWkvxAdELRJNLGEXb53GwukvUcZy2Bpjmg3Sn9ej7XLrFfDDDSVDn7HVgJuPdlpnHvuugwDNgsCn1B3jBN4f3P472k57MaUhE0brh4sAcRaJB0es4dJTZeI4XNqStxp2r%2FyCPDpsiK8PdmGg9YnylZWX6PhYMykCBIWzoLyrok4iGaqPPkrSzY8q7f95N7l6vMnJbXrGT1FQG3vv8EvGo7UDgzH2&X-Amz-Signature=57bc2beebea9f050831239ba4ef7962cf104bac748739b0292daa8da6f193b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
