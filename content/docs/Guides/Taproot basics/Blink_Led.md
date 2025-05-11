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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JF2TXLT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCb91IV9ZzgpX5zqBS5rNSkNkbBDbAeLYC%2F4IkcDnbKTwIgcCKSoTxysdg5AMDDA1GDzOPAkrFzgtnPuH9rxHmLYKcqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN01wqR0S%2FXrnTh%2F%2FyrcAw7NQnEBQkE%2BvAdU9xU4ncORcxxUEFdmUfeZudbT0Qd3xhdwwi5kNpDsxkbJB%2BklqhGHBrfdyAKkPutq6hIKAxTxEiP1uiAE8SJsyRL5FC1aSkhiIjhXnjo0aE7KTayUSphWCm8QVlcSydAK9mU20OmAVrucxCmfElqS1CCj2YRpWBw0b5%2F7vR0w55pu30dqJ3bnqsY2sgjyMyDuOwWQdsF5ivLwOmJIBOeaLYApXx76EOunnz11%2B93mjFXuIgfJQtJ3SFqrBE1yK%2F9q3KwKpaO3%2Fai%2B2zjOLwvFdji4%2F4yZUGlxbbCKWqHFBJXYMDe0ThkF1oQXMMgn5f%2FngMAKU%2Fd%2FdiUEWVFKpYyblFSaRRV4M%2BmZ75CwAwmirtV%2FXV5eWDIo2BvZNI7FYquWT2ZKOck6o6Dv0UyXyMAhUsHMERC78Xi65E2Fe6UvP5ZSXiTEyyeEoenr4EAuXANOMcRros5v1KTjhnhRMUKs8WhVmmtZis%2FE1LX2OI%2FUt3d12qwK%2FfTer5ZBGgVvog7EZTNp2nhqkrP9K8ScmxKbyxlf9zr8Awkcw%2BhvmlC8TarY1mNCMPtqdg8knyA9VHbj5izrhiwvsy5aXmjFN41QSxDbYqBfN0E9iHf8ILTr%2BES%2FMJ6hg8EGOqUBjG6iq26a8Pup9%2Bj3rjXfQxBG9GQmDolgIesxJQiCWHXCTH8P31xyV17KkAQkSzI8sdeFDIwpyFznW%2FtIe9esaxdZYnWaboxv%2FhO53otGhptE1fbDvtJ8MFwS6WJYjrTlWffN661xORvW1baR%2FwPO2JjruLevFPJnGawK69t94GRBqO5ipfQlbYIT7H5m3n8y142g6nKX4LADcsutiJ8kjJTvc4ZA&X-Amz-Signature=daefb5748ba4a9c6f814ce208e3c1e27c82a5ea5732ce24bdd8f2de3676cbf36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2AQXD2U%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDG%2F7v0gtBC35woaYUDAuyzZaJXtKnDBFp2JQac22LThAIhAJtyMMVM%2BvajBlW3FOChMHicrvVsiZgxTVMNGSxu2lpuKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzh8Yq%2BG9Vy1Tsust4q3APpcYzY4G4LjR7TTRn76P8oqJ%2BxTgoTUmRsL%2BX5fhXqOW7b2Pxc2Pz8OUmNOMNI0D4oZmtaFh76R%2FTjtV2Kuy92pdkogZ5IxM0n%2BVGO5u98TfDiIw%2BDMyilJpmaSz0Qk7ueqlprGVipKonKA1rym%2B2WA17kNb9fi5O30daxj2tk%2Fy2A%2Fad%2FJw55GPaSDCVuWXz%2BkVVetH8mIjXRE2fZPCS4kDp3NM%2BFTdqsZ%2BFoXEMHPPfwG3VX0bTKwTF%2F4w4ZXXb%2BN1LxJPfjp5Xm6KwLc5ovOwV656LZtdb1FSYvxnpCgv3Wdb6s1H%2Bfs4z3E5CI4geNfCwbOT%2FcnQV3%2B8EX%2BM6Ct31VIxW0HqnVB9F%2Bzc9Alt240wUIeHI6APYOgv7zyFMec1uMSenRVd7D7kBgGg775BfpLNL5%2Btu9WToe0a3CCw%2BAvxXB5g5hFQ%2FkT9C7SV7%2Bztv8fznsJpDfGwuQfctu88A7zqOorcPG3mTBhV1SZAW2cQ8OeOpDud6icOltp%2B0l4bkjvsOcqlHzFZwqUveh%2F%2Fx6%2BnxNcYh6Z09UVfQ8tsmgvZ%2B2%2FuMv%2B%2Fx6mYhdyw0nO3sImHnqLy5Jw3u3WW8vLu0QxbjE2d3bTzgR9JkeYnFQVfoSnYbZRtfhEjDBoYPBBjqkASYK5tt16%2FupdJ5lVWuf60HwSx2n9I78Pfbrb8vD9vwd6SauxBeP0BqeDJ%2FuyI0Fi6bvMuPp7UXXhul6Od%2FEbtI79cIEtIf%2BN%2F1Wo%2BM39gwe4y10JHDS%2B%2Blk%2BjxeZbdXSZ5KWEVk7380r2Kh9GL3zEQDVa%2F5f9x%2BOTxP1dpuZF093rjCgzyS%2FbbSTGGSm0PRBtLDrmYCwe9kzxwYZtl8HOZ2UmF%2F&X-Amz-Signature=85287b8f47e198ba28ad9c1d22e3eb97044c593cca8301402823f86641ebc95b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
