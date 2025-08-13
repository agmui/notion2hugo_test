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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPDB7HC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIpO5etiwKw6cKXSFTI0M9f3HcTuumuiQgMwGJbEA4wAiAo8QVlwJtxCW1EYzT6qOUGUPuaFcSIHNQG6ckTJp1dAyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMdshaltqMPvd5mjvxKtwDTuRWTB4mCY%2BBgTYLy7waUoJzOOgtWPszHsJPrXiu6F6FTAyN99lptMgJ8wHp82HltftaStswMeFu7MP%2Bh65T3V8gOIS%2BYSNGs16%2BBFk879VGfLTW7zgUrizfF%2FOa3fsgV0nqdrtZ4sIuVKRYc0%2BNPTG%2BePKz7JOjSrNeYs7U6sXv%2FUS02wg%2B8bNGT0p%2FZ3pT8tPYv1pcvRwSXRqsXQcvKo6OPFfPO9jHvSeB%2F1fTalI%2F2pYtvRbDNaRYF7m4p776TC%2FDu4dsQvr%2BmJ3zsh9PtcdjUJ4hEYvkpBsJcpt7xoy7jzsrn2cTvh8nRIurDdutSz5d4m3BEzCBa8zDtlq8c4pWgJfbecw894T6WL06pZXRT2N5LhgmWdGDPZT3Q3OV1PhTeOoWOvZlojhNQePf%2FDSZCzoLpOwJbLUTziESQjYj9okkKGlrOud2QcIWjsjLiFXO5mVJxQYKNtsMT6npcIgpHlGGuEvOb79k56ZzJ3xeY2Hw%2Fcz5Ol5wrFyxdvwkF8iU4EwklhL8AG9TJVj7NqLnn7x5QsxCQFQBHXKUp0o1ORIMjg4qWA3sVT8dXbV8wv4Lg65a7SmZgYLH0LOzEI9iJvhMpyo04L6FF7NvMO%2Bf4kfT8ia5kEPNhLYwzp%2FzxAY6pgGOYLyGLfC3L0NIzM50ANh%2B%2BD8k7CQq9%2B2FzLbeXgxIsHHwdTARN22vAt85C4kB5w%2FBPJJt%2FpI6uaiLI43YKyxtYmJBwF5V1dhUeTJQ2rCXc4K%2BFo2J8xJoqcO3CBTaJsKF0kazHIXaCJGh8M8lsICng%2F5ryEGf2mrU8ebFyKM3Pr9mzS7sJ%2BfIGXwphxKAKOAoFmqZiZ5M3eM4IldnvBgwU1oEZrQN&X-Amz-Signature=3cd3945982db2bb5e741ed9919e44e90dabc5bbb124f4acbf530cbba5fb6a63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2YUO5A%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVKGNc%2BV%2FAB6iRQgMyW26LrZPvelmYV99Q2BlcyqE6wAiBkL8JIzBTPV1kaCPZHGlplvpAtYagsEehZufSaRDfE%2Bir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMsnhazxFfxUZuRfliKtwDjAdG20NsPme7tMjV9zVz14yNYLYBiVCbPgnayRg1ILqoVxdFoKHawdFVzSSUhBDfE05Yc5VUO8KJ4ThRql0BDdqFdmPS9QfosSM0Ldd2xzH%2BPL32HzK%2FjYTQIET%2BrpQlGwMiA8%2BrPWTo068gZzqsorN2KwduUpUGJzkC4eyyabhez0xeI%2FYTox7sLOsmxky2eS%2BP38tK3jQ4PyH8lL2bkNp3G%2B5nibsYA2xeE4TUg8Qz6YGpHA%2FIs4t2%2FC2aSVyBrkW2V4tgMUsqOrD2KRmO3tim3w%2BZexIEsmCqawb0BnCwcMwOV3HiFycGoNutdbFItcg1CqeG7sH5u2JrSdol8Kb47C18m87fBBpcd7k8K5S4UGDUc%2BCMkBTuWV3V1YsRfofCGwYBkCJjFjeg5a7xfEZinBglHqtcmavAOTF%2FbsgBPU7%2FuXkMg5eEC3ULkpTHrCylR%2BX6JWREZ%2BN5fBsxsacD309%2Fgqr%2FIaxKv3uxxYubQzA5fxrlCMQrbbX%2By4uyHiMFB0zh31DNWNsMDGrAFNWrys3NLBGF6Sl7yr6nYxysbhm7dv97Ie8U83URi0q1WQtLcMCI5yu%2BCGeVf%2BcTcBlDNPiZSxoHcRWsRiuy5QX6OI3MpIA8ZcNG6bQwzqDzxAY6pgHOVa2w3im8ahZMPFN5jkZWgNoVs6Cfo8O5NTbpF47hlgrhcFy3FJscOosbITPSMo%2BBYzxWA4wOHGY0RIY4zF2bm%2F%2FA3vR%2BU00rByK2Ru7rw%2F8OOMBn3U9RHm9oufiIsu7R0pVBET0xEk3ZrrlrPepDUq%2BZ5CMAcmqj4kuhTnt8m9GHwTz9mkJ4IenIbj7UXPH4UaaHP%2FgU5EhbFycLMej4Y1QHUsHl&X-Amz-Signature=cac3e391bbf04ba0177ac67cf7692265fa1a944a5694c90cd7ccfe0f4d9b8b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
