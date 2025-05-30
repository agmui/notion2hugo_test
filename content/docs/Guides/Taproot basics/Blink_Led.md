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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJPPAYG7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTFLvhZv0zOpbECzeAO3r0kXcZcl6zqnWnUMn5lbbK8wIhAJY%2FtW%2Fex6Dgei1NPhSxLSAFOOqkVm7rjx9P3D3DxdglKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw08wxKDc0Iqq3%2F96Mq3AP%2FIQqntB%2Bmu7zJiZEXisgoCo93dx6xOGm1zSq4vk5eFXHjqCiSh1x5nGwFlba8nMguFC8y4var6h%2F%2FqKxt0lOFhYM7LsweHDWuFExB8WYhCr16HfhJhk50cjO%2B0cyvHYXmAkG6wDSzJFDPHKX62Yulv%2FmzcAPsrz%2B8Rk3VkDbggAmEQmJRkrtRMxdYkQfHkHTNz8fQJ1F7PNQMk%2Fl%2BNBSP6tJZ5uEFnTr3EL0IczGv3BjOCAXUYONlI%2BUNumDmP%2BFliEINpQNGwDQE0RjsUXZ0xLbEEnQ3o6%2BVRxov2eE%2FJQMftxLj7xq544dteRv1cFSplm4SdMGAVwRO4sGbwDpGDUsQhCP7jrvVavQhrCCRoF18I5gRRLke03JB9dVr6Wd6tOeukn5q4QLxi67wWDSBfI3JKyPRvFYVfRiVWpf%2BQVCk9NkxEpeSZ%2BU5JTG%2Bt0R7Sp8meDyEBq6XUwgO4kf0YL1tnBnReZuFfMiE4Q2%2FjcjKkuYnMtz3QuHqOJRFMsYXPW5U7drmMj95omqZ4O2mTQdOVoacVgl3aa4Qk6EJGJXHb91WF5qawRSP1C1uaxSiTf6fZ6wLyL69XLEngjxYqE8PDEUjtw3feJ6m5ytopVgZZKPzLDv9XBiAPDD%2FxuTBBjqkAejCep7VsRVaWO6gN3SLG7dJIkH81%2Fij8IFOa9MJtKPma8eVt0TRH6HBVCSr%2Buecm6nbtWM%2FtBV4%2BObHRs5ZOGvrUnJ26jZEIbsk8pT6wrRBQBsLAYNiQmIyfXjT4L3Sd9AQBcH9pxKB7A6d%2FJ5rPJ8wLUy2Ixs2iUufKuHWx2SDClq2ifCZWStYYvin1JUTidCWyWJv4%2Fw%2FNvTijG%2BRXbUG2Cy%2B&X-Amz-Signature=c2c562ef842bd9e3e476c80c03691075a1ba1c31199e119ea561e45a4a800abc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WHFBMRF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkbePRd8yRZLb0vmvOyuAe%2FOjxhM%2F%2F8%2FzGWE2u6RFQJAiAW0BY30Zbuygw90tUsXq8M02VDbKTUjv%2BZikW6qB1k%2BCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXRz2sCJwvUfPmnQ3KtwDc6gRs6v4MSu9lazEydy%2FS8aYyxUVEi5wkXc%2FDOnl90%2FmyvciFWZWr4P1ZgAtQt8KDU8Q82zYV1fx1MTdxRLvGHuI0IbJyBWq1QPFXb9Uv4RPy%2B9rXD7sMN09Qg8137jYkRcR01R7BnLy8kkqROTLRUTPkzSNB2lsOuwjTqK82ydXIX8yQXU%2B8fV58%2FU2lNCPQGclt%2B9x0Sn%2BuExCvk4obcckP6rHUjrzEkiEeW76R7G1wCmmeqVDeTDijvyeQmUHShflyiAIgU5aI5o%2F54laJjrelHBcci2jcOxX3BIf3N5u4h%2BLEpBgeAgX3sWnfmby5DIestmiLRoRvQsCPPyogKo%2F%2F6QoIE39nbPQg5tWgVEkHht7L2SjLmQZ37ucmnE%2FZlloDrXfwesfTCVEJCzXay7b2vxVmX9uBizecW8f7G062ZaoMeHbAtrk8HnZNYCyho3lqKzt3S%2FSYcQjfVjLJUBokjj%2BqUXUwV2fKwf2HNzFpL3H7vR8fnW7bNuT%2F54Ua6MgW8RB8XVvb%2B%2B6s389YkpR0N9T937WZJPvZ%2BvtEUnCSuqG%2FakplZLZjyxa2ADl0E3NZKLK5vrHjmdfF%2Ftn8AO1dV0s19AylfrUKPfqy5sDKY3GDbWjg2O%2BsDkwm7DkwQY6pgEVb1hjBJjiAXfCvaETLo240jY9s0if8NwtO50CkT0Bgj7fEYuTBmndE%2FywRTjTpTWPXDvVNfhSiMPxZfR2qQUu0nZWuEm3Gwi5jUq%2FI35qU3fazXFfAGcu22M19HAE5Uv7%2BNgMs4R8P3ygiiuFduQiXtGw2Wi6pCksaqrxq6UOJN1LaMqND0msNSaB25U30kaeJoo2bRYOsANwjOx37iVkffffM9D8&X-Amz-Signature=a051f70e48f147712b9d14482ae98e51c1ba8acfde2c3584f512a7b2b17ad2d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
