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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2YUV65%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFtJmq0wbD5KolGaI6LemkEW8Wc17jZ2ZL%2F40S5Hxk3AiEAgagQncQBLN6YKxA7pDSSjMCFzViTsYSMgbkJjFw8hJEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDOZoaqEwRWDuU9a%2BQCrcA4zXlSCwaphUDel9DDMIfbTXU4OvSIMqkNzofU2eD0TBwrLZHRoKEroldMayp%2Bc6hU6kjyHgFT2v%2BrXsQ7u0LlvneBdSUbvBFflcGSnRrCpVTh5ADg3VPY9pO6EAbiPh04IIIk9BsVxpYKMMtjTsGjqWx4ludOv9C2fL85o%2BoElSWHTRNNH0%2BVr8gZxnC34gxmFWpdD9cbt%2F%2FZ%2B9uivZ2JrjInT8WeFleLBnMvEcvPhVr0RoHb6nYBDxlMy7zdf6K6jCWdV1EM74d%2B4WLvhkVZ88OMRC92XyejO%2F5fmUkx3omAdUZBWgFsW2M8g72b86HpsztTtpWPTe9QrVdHMAKoKfeKSgnPHys9zFOmc45yGZlSlRYvD4IPcUvx1NBpcsp8ZfHh%2BygYomfpdXAXAZBd%2FXDvj%2FMQ2%2FoaOiPiVXqGgPLM7ZoEtNE%2FC0zdllhodz4HCjINUv%2Fsaz1OODFqO1xMVUmqDlPvrgFeLOql4uroOkrp7c6E79kTKaHToYHLG22FKFLG%2B8hsdLXntqSVBH42nbL%2F7QI%2Ba%2F319FMzXGjc314kF5I8hdjvO0IVi%2BW4vvms%2BUxNQChGRSKCmAO05YNGuJwexY3DKInLU6yrNv7R99oOlsHRpudKp4H1jRMJ6fuL0GOqUBnKaZkz7CKDPwk9pRITp7x6MNcj8vFjdrHRXc%2Bm7KlTmS85%2B3WlwQF%2FMVrajGqkh10DSIDhhLWdCr9DiPqrYVtpaAtPpX%2FunR7EYcHYxi13ytAQNXiGGKRz4eOFp3GyHhfjzRTbC%2Bq0cteb1AjxaL88SqoLXGBHufzx2wOtNEb%2BoOxrbqmBMybPZTj5OczQym3iif8NkQBKO2vFjg5tdpF489PYoz&X-Amz-Signature=bc9cd160888147ea73b0f6e8c638bea4bdfc03f96b1c7d7316a9e1d0f2040205&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HJLD5G3%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T160935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FHhFbR00OYnHQ6oHNxVcCaZdxli3eImY%2Bqo7sHOYzWgIhAK3nV7uJSrrfkjpLapzVT%2BBmN5WpGPQ1mF8EcgNFidSUKv8DCBkQABoMNjM3NDIzMTgzODA1IgxcFffEhbvSlPd5ZQAq3AMO4Nq9jyIsxkVFEvL7E%2F1F%2F7Kbg8%2BKp75DbC%2BxzExFa%2FR73NYllEwiphYOkl%2BIF98NStD6Bpc6jwRfPRIP3Rp1ueIRnurPHkOkZyAu76CoxOxWEW6qi2RhqdRrgV9UcTBs%2B8i6pFAJS%2F7iGOWBMAS0mUdWVhz62g8eYm4aAhXVzclqf5w2dedYTwrS0C%2BKRF%2BMrrzMSckKatW%2BIjL0nnqU04rJhQ0tPAREs8t0heO1yxL7b1WT1ulEoI1eP%2BUdqAppMWEME66PnYGvtIbTBkzmfPP7MGkN9iKw9SreKWxg2006e0ZZcy%2F2fHQja0WInzo2hQDNyrfrB2PyDtyCNIhyLlmYv%2B7sqVyd6u3Uwdmw8138rwh0odFH9XWjJTGkgiKGqGQFKEelUtdsUk6jLDi45KpC55xUgJ1DvUx0vxYq09khjM5o%2F95Om3QGphXFdIKwDeRKblf2tTmnLlYKyQ506WWcjT0wNnp6m6U3LsrxxMoPSVBbbbID1GVkkm6gv71oFVlMcA7FxAJVWHc9fyZsuqIlWl0ZfaXow6VG0BL5iFJ6MIvRPWoUaL%2BM5zxN0q%2B4h3iZFsfxsAYKG39H9l1paRMx149312iEZM4PRujh85qGHcCeHljWH0yyQzC7nri9BjqkAbXxkN3MlYoXNwftM3sAERvCv0L2lWzHiklkNdap8C4GGp01t8QNPPia1gqMPdNwOahqf91QuGOMOxy%2BzlRwQ7VxO1e58qB46t2JrUWmfsfud1XKCp6H%2BaquZtADU9GK6OyP%2FQfoCk7r0VtTwLE68bEIp0oZMcDfN2vq9JVNDdZhw4ygSIPlCrojTnqPP%2Fw1jUzgK9qAtG%2FqGMlDZFKoK%2FAcERYs&X-Amz-Signature=563b5928342c167de2d187d91c9ea2d3a8914bdab487c4035eccb55b9a41b7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
