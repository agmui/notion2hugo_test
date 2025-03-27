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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OGHDZV%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaI2Q7UhouL837dBRcNOScXHRff94jUdVTKuSOsElHhAiBsl603FDG0F7gXTZHSez01wMjiah5sLHoKSao6vnhk4Cr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMQoL%2BRf6tplgG6tJmKtwDLE4ZGPuiFnc2G8B5UMTOJf75L3zfTB%2B5vYPw%2BA2e%2FyMuMzOBlHzVDRI1dBfnPvYq1ydgM0qUNrG1t8vmDwf%2BJHSh%2FXaiBQ5qtQCa%2BihW1fWJQfqDgIsVbaUWUHAuWxHKltBe87y8aLCNZAmwmctGNFxRRHsfPhP821qjkfnY8QipBVmPKATSCFDrpb8WfKWE4HNJ0EtV01ejbA36TFgn%2FhPlF7Va8fU7C%2BK66YQOKUCaqYNeD5%2F9Zd9ELQ80Hyrfjj3ZaOqPAyh54P1LXPMDwWXa20GVWFFnZl1Q99IJrlMeNTo%2FZgEPycfd39YdiBuQCwzDi1%2FJDrewuKwgrBzAlnZeW1HXvbDJJO%2FUz3NToNzm33Hr7BsIUwnmobmu3TEPIxyaeaHhyJ8x9TNqgDz0cOB6QflQcppLNG051POYG2wukAYcI0AV4Ap8OwuEkRKPIrKuohElkdteDf%2FFazZEaGeP%2BiihAovjPtYd4PsEwzkfbH9vZ4pwvn5w1oe3CHtge0OtENRzuEvGxEvv4gKj7yJ7APDMevmF9wLeIa%2FRs3rz2k9NYAG6e6ndN7jcfulCNqE4YDcqmOqHhoU1TQLtKhHz0I0H%2FnmqBzzm5jijG7LkuAYnE%2F%2Bc22ASyHIwuuqVvwY6pgFpm92NuQ0zNFOZCOVtii2Dl9SG%2BYXixoVmtFaDHb2VUAPtYue53BFLTsgyNVZ3Z6Z9EJcguysnhbD9txLt%2BiBH3yVv29W6ZYfnArT3j%2B1lZAPb2LyTq5kzjUAJgPJ5I%2FJz4H3T53mFHFf5tdbMWLaLpwjaVn6PMnYOs3BWLQIjDfz%2FzQoyhSoMD0FRQfDXcIt%2FXzWEmTSmmuuy77eATmvmyEs1%2BmwG&X-Amz-Signature=4735c23560f2f5b22acaa3f81d468564325d61ef4a5221113b449482c62dec1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3WDRJL5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBacBH3d7GZQrzt2Pb9eXAavQaMKiNTQQ0f%2Buy7cjxbEAiEA1t9JHWqk%2BVFg2PFEKB4H%2Br1JtUBzubokD0YfwWQhkL0q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAeywpluMKxr5ZXKqyrcAwYTVefGco5Zn4U93NB0nkmfaCjQbNVAJMeaTHzq6Iowhx0%2FakSXHXUD2k3l05Hq%2FRN%2FGr0r1XrnpbJHkFX2XQNTsJE0q7UDek7tjEzOR9fOLMPMdUKwTTRl9Y2QSgHVEaZwvHBhvAuc9d0usG%2BmywNosR7Tl8wn%2FAO1kJLphHdCVEmGdlxxEMuNTI1KJ6Y3idHJ1cxySIzGLVzFVtsiA90NIpEf%2FvSw%2F%2Fay%2BUBRd6Zcf%2BmulHvNWz15ON9fPgillsZalndXqLJOMxcbZisDwNbMwLpQV0XSHeDxNdCXTTFeTUKX28DYwdXmJ591M9ZdqlS9e82kD7zIWU25%2BMs0H%2BOwh3sC5MOSy8kNJVDR8li6Z3vsbbu0bx0SFZHPXN3AX%2FjiSn2wmvLn%2B70IJ8l4DBqsYpnJHyFgIyAWjPFKsazaOhXWTjv%2F1JqAZgRtH43rmomYOV0rt1Vzl3GDqs64GYV00EC9yPgu3CQqFus76hAdx%2Bi8hyrwUC2fP%2BwKEfT8DOKaXhauIkDFMED%2FeDtNFdqCQWEwD2tIxUCvR1SqgccmmpEN2KFvpCKC1mSERmmsJ3Y0xVTFngLnpndl2IFI3jPfbm6UB7B3QMjzu2WxiikPa5zFp%2B3ZkAIz5ibvMM7rlb8GOqUB1moEdn94%2Fovc00cqZxaRUYZkQwKwoo0dy1Fdep28IYLhWsmNINRTChNltuHMTKW4SHI9yucR0e3X4tMoJyXHoRO8xbF4g1Z%2Fuzk3kXYRLWYIB9hMplD%2BzjdiG9RpfxVgGJoKgUSYAT2b6UU7MU5A20XK1NY3RJKxVbjb7uSC0oquV5X%2FhYEWhQ%2FhkthXz%2BmwWUA7I2ch3kSmrvd1%2FtRHqHXhx52O&X-Amz-Signature=8f4eb6ae5b3c2a189da08a6466cab896a1a00e4956aa472f9893337a9cba70fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
