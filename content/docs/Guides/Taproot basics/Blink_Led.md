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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7UQIMFH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDBQiYzv%2FsMTYLQGC%2Bx7WgR%2FZvViErBm8ZwWSvEXcUSbgIhANY7zg9Cb6xwb1qT3tLYdfSG9WWuersc%2FrJNp7sgWZqhKv8DCHgQABoMNjM3NDIzMTgzODA1IgzNeCGnzwsoEvXjMoEq3ANbWe%2B%2FctxVbjvHF%2FYlMx6jh1wQkM4wDBDJTJnH1oTJ4vXTt1O%2Bgv45epcUHJlzR07qf%2BRHrpIXuIzIQn7DfrYLCKbQ%2FhRlH25yD%2BFLbbmAFDVkjtJpX2fGN5AbTGZ%2BU14LtUL3JvrEnp3gzPNu4%2FynO2XJ6cOLV38SfVAlc%2Bsr%2F6A0lttK2gWD9U8jrhVGcE9lEKRGNNOfrnETz2%2FD3I47sLLf5KMvpRPhpYIXxvLO8VRvYrQ%2FsATzvDYxayG3q8DjSauzw4eg7q9Gs9yGQhNi15kPN2EubR07AZIlJEVOC3li6xsBG8jC9gEbQFghNVfwZERxB8moDpCmsyqVrD8M%2BdCgHPBLfKLmqC5k6b78HcAf4Fkkvm7uXEVvrz8vhHZfaPCT1wxBz6kyFD9mTp7QWJMVUh%2BFYTeDn82IK8MUfA3deQkM8%2B%2B50jjBITYxLjwyDafbHP4xo5PRujdias8R9k0IkZkKdxlxpuCBQylMrn916GqMVQxN9BpqklN%2BKlyQCdIyd%2BJ83LU%2BHw8GNVbBw9ymAzVNlfa%2B3C0PZp0Vu1PAx91L3Q3uzbqLHVmmTv4tY3YTTMoMM5pFgQBBFLbxxoS59lRIQP5Q1e8U%2FtkwM4fUFy0K4LjZZzlPJjCeveu%2BBjqkASD6xG4vMnDcKcXQCJ70tysgo0xcFgABkpgu9OZpDdzYhLmJpEJNdUJwkA%2B7aNLoQpWuLmy2HBEyZUKkwKA2ct%2FM7XvoCtEsObOaxeKP%2BZTbmu0d3IXxsxB%2BjS4WQ7hVSpF9Ij8ynFzWSCz%2BSMLBnprAOeAN2yAjaPmaouSze4q5As4YymUfssrX7rTWtyKj%2Fc5WYeX%2FpEko3ZCtjZ17lFZvm178&X-Amz-Signature=bfc1a49c1b54a9ba6e3e8fc15a6c1fc9e58fe98d318bd82c5ac05869059b1942&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JT5ON23%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHnYpcVvFLuel6Rp%2F%2BbUxCLAmtxTlgowwooCFwmRqfjGAiEAlx7j2vrLZ6HUtnILEHmWY%2B3AMvdVd9%2BzxFXqMOFkIvQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLtajs4UJGKzHJzVgSrcAy%2FN0JkLrM8qUPcF9VmWp5FAyWo14j8uCYG%2B6nT%2B4IUdppGFxwxiInqfptMDPy4QRTZP6rM0juEC5HA8mlcdsIJEkvu8%2FCQfhQg%2BKeKCF5enDKyZUXPeMeZf8bZNs%2FRMdXwf3tPW8Gc01tA6DfU%2FMhqzelrJLo%2BUlS%2F%2BcLtf8it6SWNWXqD9Zjh0o%2F%2B0zWWRixgu5kS8kvUE3vP2g5HzKAy%2BzlN3%2FVgOn%2FeYdmHjXxp%2FGRvceSpEAM69vdu9uT6E0uEIjuB6NrIGRKm3Ra7YB3Z1oxmFMsS7Ul3qnMlvFZuTEJTekOgHSdMZmJx3BgrbmpMQNVButfct9QY7Mp5mt%2Fgbt8GUYo9cD43dJduqRY8a6yTFAiQDwJmT%2BCE9aF3utyVahuMuNSLucJqXv3Pilf9GsY%2Bkgt%2Bf0WK3RyColusg2qgynCj93D5CNO%2BywWspKTEaL2o%2B2CAmcIJpLpVrupbidJptgrwhAxrbqJJO0KXDcrYa70V2h9giXG0S9aJWcfDURWxE6ow0kyuGv0lZKojwvlPtl9HMknmcCmX2XCQg9oaX%2FYjLCfmWSfOfXQXY7Uz4cB7uu0LOOuTNU5II0SoxJSUK1lCpScb0oTLT%2FLm902v%2FxBPr%2BC0keU92MNO8674GOqUByN%2B6OhcJI%2Fd%2FuUCtJxC%2Fs5pOzfUwcLP7nutwCnB8XBMhnIru4SEAqJQRK29oca0RAAWml5fxe7SE1pVEuvDvC5QQ0gCLCb579TN46U5g%2FH3CFPMGJUAbSS24I2MZ6OkiDITZrH%2FbxrPgoAuWfuYZNAj7yarkp0Hj73cANHsZ0JmBqOHHBxPAl%2FBoRe31ZtC9wB0I%2FMf4d0ekIRxE33fWTr9nddWk&X-Amz-Signature=93421a0800869205931c5e5ecc098eeb3719547d19506cf267c07ea727c8e7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
