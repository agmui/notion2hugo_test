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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJKDDOG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOCe8dZJMcq7yW52UN%2FTmXn6OUuAPrNHzzymkiVS93zAIhAPAtaBR8tzYnj8sPczrtKLa5ZGczK2RkQpaaBw6vxfdXKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRHOmyKUUiaAIXbJQq3AMZOecrToN20yiYbN0QI5lBtTa5zgiGqArRNswye%2B%2BP6y%2BXt5vDQgEnPF8vfMg4sSijDg%2B8aRcy1RqN4Oju32YaBysUTzlZcbf6%2BK0kNdb%2FltJNQICNpKyT0EGjFrjb%2F2jBMR4lLTUqGb2IhjwgneFj58wYsZEWBl2bXDXMsXZLk1SLb09lZGtfEYeDKlcYVPxZ6p7gNdluJ9IW3hT1o%2BpOhPn0mW%2B8%2Ffs4I6YwJstUnKN1qI5ocDYt1oX56KR%2FGEeD%2BhyBk5GAsIgguDFuzqzvNH76auzxNSV7tEYiEdsXJWDFJLmqfqzweHKYVyWbCmmd%2FZsCRR728YIBqtGWGvpTC4E4FFu2B7UvlRNydcS%2BFPQanocIuh%2FuPYOwtpAxSazzIUWyZzrLuoe6eGCL%2F3Lq9KXSBMfXqDSltF3sQ2r1wqWmgylVgjOtHKcSPpBOjSCAXSzE3Wia20xC%2FBGvfcdzq4nmLT8inBTkli5s8RRVKIIl37ULx8%2BOHPU6LQQ4lDSikWfjNEQ93P4fdsElGeIm44cS%2Bqnsbw9JAOqALXiKfGm9aAhW5c36g8fopn%2BijS8qc3T%2FCdH0Clq%2F1M%2B1qZEsDHrozGzoKy1bZJhuhsULYiinTGnJY0hWUFTx5DD9ipy%2BBjqkAc0gP7md4wU77oGM8ZYrwn9sW%2Boxc%2B3rQT7%2FOALVdqLndkX7EredjP4ZRWu8DDF2A3F8IxvTev4dgqLo4KmqeCSle%2Fvxr5xrIY6sT45yf%2FffXMbmqK8i48sSDgNZmTTmVZ3EVuiNPK5seb6HMD4nZk0D5GHTEMhV5N%2BDV0Bd1WGvXKoEtQWIkj4r1XOM2PON4Wfh5sYizygY0Xu5mnd6T%2BLTF9Bs&X-Amz-Signature=260f68cdeec5d5c365c60228cd324d2482d49f077677354efa49f7012409284b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKBYNIV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDavjG9gJUGBPBU72D5TkwDTbdtrmczmEBcx01oLQuHlQIhAMh7f4za9n%2F0OQKvwznn63%2ByLqDogB68AefK91%2Ff41lEKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlfaQwjyYI3RE4pqAq3AO62q7ZAOHUGnoyS2PXiXl%2Fw3rJLW5DBI%2BLkRWbmaToozAHyu28%2BAX3pwGqbI5tjpRvwYVG1oZeu0pe9T7JEsoqqDf3dJbNR%2BkYI3V7HJL9t3K3FmDf71oZ3isZoUTNfE7Y5lcgj%2F5oxD22Um5%2BWemzbGRAKup8aXn9jbCBcW6D5trGSAqngeNHreptEL3graJSAOg5AMdcoYsOW%2F6%2FbdX2RCUYCvoignqb85pwmkYOQhfqi8d72dI25GgXOwyq2B93gtdzD8AD%2BBIzCMEBwFB00gLW2ynhog5dQnLvvKjYUVMDZ4zNAjtRZ2tCw0DhSKAZK1knKOfbjXrCx%2BplSrdrD1lIWI%2BnQevRVWL6qwLFDWkOO995LIP0CQKBZKpTQkHsPmixTFAligd7%2BIY%2BLWn1J3IvFWNaoqNfodQnbx7KBFNF3iroURzEuf8%2Fg%2FXfrT9%2Bm4QN6xwljpDC4U0tIzOS919kA2hsQWSWT0pMtp200fab4M37CVvjKbZWObU3weTsNxHzpnQUnVBN5jqmF%2F5sXZny9mmzrOjfSkscBWk5R0aWYUm%2BF%2FeSCkhHelJaUuMvRR%2BJx0LfnUvdJBDNriFVwD3ht%2BuRUraIyy1sJT%2FimFrOCVMzpqmQkz3%2FKjDsipy%2BBjqkATgvw68v00yFY7ZqRrgYh%2BAx5MmeicJIBalzgQKC6KdtU%2BI6kFPzJ7a2fXeH85fpzX9vMpibCUvMkbmnwvR9EeTQ25RXydZRhdMVU4FXvWVHOSDfdn%2FTkzH4U1dMUpt0ppN6Mm6RQtY2TXNAHbO4ZB1VEdM8zZHRggukEQt05QCTPDmFGY8RoxRj%2FRi8jrseY2%2FeoesGZ0uz3Z%2FpVl7WHZ6fH5iL&X-Amz-Signature=033a70d4d45250396afc4f757ddb75ab72c0bb70ec77d0ba1c7daebb9cf73a43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
