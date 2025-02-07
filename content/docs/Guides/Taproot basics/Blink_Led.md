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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WL5AQIC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXBEt8gg20EcjiWifwpwbzMs%2Bt1UHn9XsqxLuz7GA6cAIhAM5lkfU7EJiqZwJh7yRJwuROfku%2BckTYz9VLxBpPq%2Fp7Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwrWHoq1GyR3AKb8S0q3AP306oUdq%2BVf%2F9cGS2%2BgZct2kTLgasb7nnHEvbD2V7m3twYv%2FzoMAlz6nbLs1BLYbWND5bFWSIL6%2FqCTw9GRN5yQb1ztgAKAL%2Fmwpg20P1KCRIaT2ngph5I4QGgU8bulD2xr27srXwH56gi47cH3CE6246DL9SJas%2Fu2TAceyYNLPm%2Fs460fmUQEc7XWjdZo3tuGfF%2FV1eGyS2YP%2BG5U7DMApRcMcW0g8%2FP8G2oiB8cf4fXktJz3shaPYtk7rMya1KcwPGcisSxc9rj5t9wFyTiF0fo6SsPkfA0TfNHJlyiRM4VtxfMdoxzJUf%2F3BF1swvLiCjjYEY2xN8U0LtXO4LDtnYvQGUoscp7qUYXMNBKVGIlzGLoPWcpqJg88%2Fm3bOhZE1VkbS1KL6pMUY0%2BnYT7HEiUOqtXp3bfQpf9aVs6Yk9oPIvPW3Pj2nkiSo9DrMwQWhVcJNpIJ5pDNqck9vWMvcvfzAWAGCtm45BXXr5tQzELULCYHFUl8IbpseUCDYfOFF8qHT4lJpA2bkpXO869Xn7HQPDEgmXaMvHdJ2yel74LV0H1l0xx02OmpQHdn3fMfN3zIjjW8KWTLv5fEfrhFXUYzLAQeX90Hr09omntrS%2B6GksIppljiF3M%2BDDQ%2Bpa9BjqkAXESEILX7D0Ky000rMr1nxXymHJnXMfsZEmrBah34yMcmXQ1jhsC8kDw2Dqu2SnvwJGXFU6ZF%2F2OC3Fs37ebMXlvi1MxL57%2B1TMjy7Yu%2F8YSEncM0auKRPIlhvNSxvFa9noBZaft%2FuHMkUD%2FFxXdZt9NFKit5Fw2ZZRxksRMwGstS5p5P7f62y4TiXk5u07QARbzsIIQvdO04HV2BoG1mltwldSa&X-Amz-Signature=45e3ddb4d53d7f93dd5f51eaf14f176364f1e1ff13be8c7821f17ed66f7d4f77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTAFZIL%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGslrIC64zgttya2xaMovB2twzgZuv8XRCr8XWNk6oqrAiBlvSAl0RdQ12m9pCZOmoj508IgvJkMQgheWKQRZl2UKSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMI1bu8w28BLVYoWiCKtwDC85d3eYCtCydJtmNd6FaN0NHNOv%2FXfC%2FnzA1%2F7ATilK7nfHDeS%2BPjps0QfaO6Yw1lFSSZIroORTZlLONil5M2qdUWASDOZSSRJDnOc3SJ3VVSUwElXGqce7Lsv2L2iIng8HXoDXdmgdDOuHdOnTRgjJqu0D6ZHVEoYkofM%2Bx2ef%2BA5vOf3jb4tD9mKaULEv%2Bjs72VFDz2e0wEeZ2tPxkrNXPs8tm%2BsUDGbzR7iEaaKvi1sAeIGJbBXGE95%2FG8MGuGkecNiyyg9hrhR0RX9xMx0ByXm6aTyHWRq2MLQ5P1M4uNJn6aqH3Jh8tIYB22CqSS4mYnQXlGLuJafrFnYSImsNaKQHllELB8y7qZMuiGor4tMfeLUwORtfsDmLoekRROpn3EnRHuovdI0dvCj5Zf%2BC%2FFMuoFB5hONQnYCrCckBJSi%2B5U7h%2B4TeyCv6pSTrm9VZ5MSjgYWHz6ocJK1mVozty5NgmBYiJPPAWZC5Kag8c%2FcbDeW29aMLvCCmTdoXKABKM%2BieIA51Z75vNOz4jIlc2CaWX7hmqOaThWRB1CtTJVUhUVW2Ue7cs9dI8XrqVa7qmAAktxaL1zECxK%2BpXTs8ywRguMZOqJfzhRlunK%2FKObFpZ1GgvkUgeBRow1vqWvQY6pgF%2F63kUNhi0qodn7UUOyJ61%2BMFmUoFdUtpkxcpjOdFjKGPrBbf4Mw%2BpxQyB6%2FetEsn6EJVCjGt2YYID9UrO357vTCC25YDp6%2Bl9KAvUex0dRztpY4ffrZRpZ2aGNitqKfPiC1zwO%2BDEdhUSEosQ8NfB%2FNiGiXTQKz3YiMKqLClxEkS77idygFs1Ef2o%2F6qoIOT4Q1gNUmcgtLNK%2FdZHR0aRSs%2Bfskhr&X-Amz-Signature=fe51d03d17c9964cce727509b66e7a446ccd25a9ff287cebc250f3b7af45926e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
