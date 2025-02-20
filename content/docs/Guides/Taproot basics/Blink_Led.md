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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77EQNJC%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXAFrT1TSiqr3Rq8WWt9Me6SlfvjUkAozP7FWNBbvTdAiAvIdhHqtOLq%2FYKoXD233GJZ9dSzoL6cnopBbGzsn6CGyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6qTjGfROXHudjuVvKtwDuCfIVCMzX18vMHQ9Wxn%2FDcTaGr7qW8j5fjZ%2FsN8Vt5Olc15EL627WT9HfDub9IceyUCADdkYGLLvSiE%2FjFPKwhT0TGZvktCXwC54197imufDaWbAr4fbxa%2B58B8TDMJ%2B%2B0qHNgn7XNs52GM9FyR5sUQs16n7VeSY4ngHAAjk%2BiEuGo2m%2FByyeoKx21yS0Zr%2FXtrsyCPKLK4UNlcO1uPx6U%2BUplxDG7Z4TAXj4uB%2BbG11ia2WaM8lAGx7L1FYhc5YdqOW%2F%2FTEDPerJhve0Ziaj0oecq0mmnFMS9SVjSyllkNCphRsr3N5FlmtVVrRcf9%2BJ9jEBIAVdeLU3dMQheZkVpBy%2BvkrwJNfnOg3G1w09Isq%2FPnrWjxBXqfCML9f7eNv4HkXe026tchZQdCoHdSEQ48Wb8M%2Fz0DHFPVGr2xR%2BZEEuiMGaXDu4Cbcus8O1UmROxwmqaq7d6fSr6xGlLiPec88T8QqsUi2IUFUfCcypjDINduHPcbdNPXHqAlnvx7%2BLsUxpoIplUjzdMJIEbTnzt4k%2BZWuhjsL%2Bql%2FPvgj1XuJ1TDRw1yCStzh515j64fjWQpzZSxjrACANrtTTIxe4yXhA4EQkQc3LtAqrdaw8mVsDgIVIqruPJaYDWwwiKfavQY6pgGhkpRurwE%2FggTKIWcY7BFfdJ29c%2BmZHA4awgSQuzFY%2Fi%2FQRVVZBHo%2F9qo4F4emmJ9NKmd0HSNY5NOo4HiA8km%2FlKQ0mZBl7qIL4c9YzuqiEuNWVquCnrae3Bld7mYaHb4JSLtH6Wbe3o2TobKerehWQecs7f%2BeZZpTjZUWOtPlzaWHhPfMKHaM1rbgLMxrIlVpUQ3pjCjqeuTOrIemb32H5b%2FaBdKx&X-Amz-Signature=f9fd1ad68c2a98ce8c2bd4b74dd30d03b9c9b6d9c8febda772e3ffb3360b0ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBGC6HG%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdv6xolF81kQ087wbtzQJY9Vl5uFpHt3H6YwGeVUgwEAiBv1c0rJDz1sgt4R2poU%2FGm0r4mXiZlsTiMVV22DZLzhCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpALyEOKGsZTHiRyUKtwDcM%2F9skhy4jpib2HkqMh6YMtpFqdk9pB6OrodQ5kWGXefiaMUQELOd1B9dvgVdHrnJITRBz5y17jb3Cph110jNBK5YLUoZtTggn2BJ0vsI%2BsS7ARAi3g8wBMl8IKI5TM7udP9POgLLPlh50bga67MkTS9t%2BWScZm6lbGhxAf9Xrw4sgDcTNdLTgf5nYWEqJCUKvgzuAg%2BFZxRCRgd7pdfAXxW1HUPuAFA5Gag0I4Mw8zYbvOTBvmJTi81IT3v6MIbDv36GGGIZOLr6x7O%2BPeFB2%2FYYa0svxgjP2hs3KcWhEGiSNYLRv07wUDVObNFl9c5zeqo5P1eKArsopHzHQKi93%2FM1GFhUJN2yTtuKmPppMzpNor3i15g6slkbmH9hgtqpYZmsfjaXYELOOXf5Y4GljP7XdKe7nJWnL9sh3FMK3nU7TGcoAy3U%2BD0Ebol3RKKNuKvcFDwJkT4gqjo4NYWD7S%2FSOArYuZXU61MIXrgJpYsGH5btPJDSMRWqQJME%2BY2T0hikgbI3m%2Bw7qzIsXKl13LHwk%2Blq9%2BXzX2rQl7gVv54FnoHmZvgd4B2vPj5a2NK6xzezYuSw8X4tiPVfyjvaJ25kXXHJQEJLDpWJF8EV%2BqhoCvOYY76QgcdHdswvabavQY6pgHRLi0M%2FRgtGglQkYEIyWap%2FXntwA%2F5%2FUMjxsevLh3qk%2Fq7%2Fw4P%2FfXOrG8HtRpTvCZNe%2FU3QmuemsRaFIxCcQ3B7nk%2FN0Nuf%2FP71einM3EjFSACJkoAZ97Iq%2FoyPdW7BYETz%2BqMIoJra3lzJd4jfyWP6PqRjD7OYJyl1iRvsfFST1UJR4ob486BeQQLn3dZoMmaRWG9GIDivgV8cl5BdpRYFk%2Fe%2FbWt&X-Amz-Signature=c06340605005eae07b33af22bf0faa9057c6cf3598fb10a323e846fc7430b5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
