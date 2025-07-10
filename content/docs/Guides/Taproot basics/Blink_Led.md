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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N4B626F%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrqKCIg2igszY0XyVghdTg0b7RQ4k5DFoxdhFgCCCcdwIgB3Flkw8QJS1FGE%2FXzp8bENJ7XdHZZRlfUrt7%2Bkw%2Beg8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2cS5USogCxP696oCrcA5c%2FPqmMUORBglIVY%2Fg2sogVRwyJVpa4QS8NSSUa%2Fj0y6KhB2ci3MzVdzlNaxR7q58%2Fvgn51k4GlyuAO81KrH%2BzFO5ZhP%2FdTY2Km3CrxRn6oGU%2F6ATpZIAvaKdrSCmWQHueU9pkFxCOPoN2xq9B%2FYrMdkjgZcVFQKa3iYzqvo8wEwWGcRBkADPZNRjnf6Zkw9X5Go9IWULU84GamYHX1ETZRbnyIdzSv9bPON%2F4xcpOk%2BKcUFplZrgBQErr2bYegKKsXSbLCdMZJGExHWVHAIDHaDfrgRicqNqtUzPBkJBh%2F58zzv3S%2BA0s7lagSHX5E71glttkuHNgE2879QFlGyLETXFtEgTyQ6U3dt9PhJLFyu0iC0l4n3gwTPSPSKiATPbVenk1htegSbKCodGFSQmJAg2yHcWRgSzMxw22wxj8G9Amy93k%2Bc6Jtle%2Fmby6YgJxVlk6ZP51TILcQs9JUn707N2s6H%2FXBYrFgMiGrqv2R1LKNu%2BI8z2QlW3rQeMOagQN%2Fp0ru%2FeG5XEUhFG5JYRIV4voQFQhFcXKQnzZf5Y7C6RdJJgg49sSjawZxNqOIbR60Kr7XvqvGuxNe24%2BwJwxKUrMGYOxP1kR675lsMxXqiiQM%2FKAu%2FFNqwmCiMKD5v8MGOqUBeV8%2BJZeZTvYREezRaj3k%2BQIoOC1o7e5jL5utsXNDl3JKP3eNupSFUfg1GXmNdzxLirNG4%2FIpxAXdneSGzDybcTuG9rM7H7iz6iNn6vTwDTAlWeVWrAtMIMBN5ViTWSyvRISkeyDlSPArUy6mRw7xWTgNPnGawMAV5tqf7JARBvYsCuysy7jxBzbXGgsElFv%2BTINsQB62Zg80AkH36JrOo19GrRX%2F&X-Amz-Signature=2db8f3266e8fdd7b09a726b828ee439808894dc377f2082999899ec6e9d5712d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QBJ6DYY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHlZtJIALl4Vm%2FCZK4RaZgGlMQTlcbQvKwyWm6z%2B%2FEAAIgQRZrLuyFiVn17fDnAeOyZvQbG0sjWXUNgnAdAxHEEnUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqo%2FBmdI%2F84hvx9RyrcA3g8hQ1lPBh%2BygDhrtZcAVtDYYDgHseLu27GgEX%2FI2vyMsOY0y6j8T6%2BwzNloGS%2FUaKTi4u5w9I62q1MhFw%2Fa43cwVlJz4J3%2Bj%2BeJ0FQMH9y6C9MPT%2F0qIYJ8dfTgIw1Apt9Y%2FIhnY%2F0I3R3MIokP0GVY0gWohVWYBlIEPaQzRTEhMulujSqHlXAmc0mSzYWc%2BZ2UE1uifNBSntDK%2B%2BbuCNYQ7YvpzFKcozXpJo0X1OqYC1bm%2F7e%2Fgvqz0VphKSnNsGXmhQ5FMVQxtlCS1v6PWnK5LXAhMVOCgGpjgIQoq8OuQ3UJdl0I4gc55Su3WX%2BJ6RB60goYD4MeS6aWno4M3DF%2FCMjY37t9j8t%2B9PQmjNhoMN1Z8C86js6UhuFwkivYn3Bvoo2NOTJPNhx77T54Sqb5YDC%2BvPtFmeJ05JQnBeRT2%2FnOcopwb23VfLPsHriSKhjFux%2BkaKtGz4kl4r6DvFXKaRbpe3pAhBgH%2FfDngZOfRpvLxSXwf50DfO8KYRwa8PmLInCbhiGxzMd9dTMj9VU%2BXdc%2FQeWOhtW2hhcrQV1FHdEoK4NUQJ4W%2FEd38Qsda4t6lzXUaWielvBY30zFH53hc9uUh572tLp3NhHC7WCg6Y%2BYvNqQu668iVNMOb4v8MGOqUBZi6l9ZkJbQkarWTVVocQkRIRsHTHY3pEq%2FDINo3aPt6FKLJ2alw1Kbin6mpBjMS7vAZtXNM0VLnO1vjiZLL%2Fv%2ByF5SEV44Iw8Bdv08%2F0elbE6owwsq70cKmPblLWRd6ixWLD%2BIf4KVEGozZ00q3DLJCUm5uOh%2FM6%2FyBaUJ0ds8iQ4gsABXJ57HO1QN8772gg3NxqDDeKa7%2BSFtXr45PHxkZSrLZf&X-Amz-Signature=996dfc2e9d7204dc567be5ae7b365d3f5ebdaf729b647ee6729747ad73ca694d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
