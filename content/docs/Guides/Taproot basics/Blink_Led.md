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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPBGJ4IT%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCJpZHSR2SWeBu6Kp8o0djU7IlryhK%2FblN0gO8qr%2BgadgIhAPA2G1N%2FWxxGZm66vUI%2BnYm2Xn3Yy8WVM2b8T%2FxSuN7kKv8DCCwQABoMNjM3NDIzMTgzODA1IgzQFRHZGl7es0yXsvkq3AOIO8RLiFIsTf%2FSB%2Fmmv4%2BCo42xgSxHuauMVU0O9cmotvQrXMC8iWquFlXWDLq8IiVV32bB2mSFhheKVDcXuzJYBTuIgoECTwt6oxEzQcXKZ0uklmcmb0ru%2BY62uns%2FXhOnng9ZzUZAW5wT26HgySYQDWSLdtsJYN9UDqvnPUA8J6UL63h6XifWak7teazIIuKcRxT9k0a4e15j%2BZmSynjEOWW%2BBhn2Ko3mUKq0HJXEaFtSaU%2FWUtKpLwBoFjG4wBYqE8Bz84gFAt6%2BmmffoaOSrvCUJs2rvJmMPgdA1YcdQGX1BeqewNHLNqw53%2Fnea8l3bNY35WjoUuoh95%2FARoHbIj%2FfB4dxY0sDWxZF4Ukuk%2FQRE%2F4dmbgsfMAgaRW7lHvXLLMxQOxg519o%2FsYII%2BtZqYKW%2BjWSVPkLNd3EJUxWTewX8By4LjVGFa5KuLU5e7Q01CnwGI0Yhuz%2BfAdyFMwY2S6Zjrt%2F7YDMS%2FaBm1QlJiI2BSDvpHtjIMlYXdqwg3lcpFEgIEbGCSJwnyznn3QmzhgVpJVwj6%2B0i01Epf6uAwNyTGPF0lJmEPPS%2B2SapPgMjx8puR7NRWg9G41F1dZbIO1NGmCfv0dmuj3XiXoGdFFVIPBM0hwdq0JC8jD%2FhJfBBjqkAfPWCaK%2FGNXk5dCwcuVyFEmwStkx2lZnWoTcLeM6oh5soI%2FgjuMHVwh9NNtewHx8WdhbEIPo%2BKn0cmY6xOiplcDpg6%2B8e22ryApGm4mvuQ0MGovntlrpxbnvY8mT2ob1SiVKGaJ47krkjS1ncM%2BHwmicEwmtpILCW66Hrj3nb5apJW5rvIynL8jrXfE%2FFmoQxbpQoakGcatf6lf3Ya8LCxRz2C6x&X-Amz-Signature=58cd5f0911ec323322a11c2ab3bd4dfccce0f690f85551c826cb8a750d6cd477&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674YMTBY%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDfNMVFGvueL3EafgcHq%2FTmbZgym0y33vhBiRmbAdpH9QIhANeqd%2BVe0NDz3yul8R8jiBEpcucDs7maG4umHxJuBNnwKv8DCCwQABoMNjM3NDIzMTgzODA1IgxEOpwOmWfz%2F9JqAFMq3ANfqPXxGOIOBf%2Bf1tyXg0sSByyQz3%2Bl04ltD76iDg2nMcCJsLR3i0%2BOJBASvhVPk7TJIEyXwrQVE%2FDEobDOfjK%2Fr0cD2zzuymMoIfYBpzS2xIN67ruBoOZ4mCCktUm3uSnc6nOsJLtKSlZsZ6e8T2Lp77z8j9XS3DqR7oKsdigiZ7iMVEcfkzrVLVrsAcK61%2B1vLce73C%2BzdFACrsgYTS9R5XvGkmxGmWgFhZ%2B%2FIUV9dAyURhaULX01bNB%2FeICNSg67SoieC4No2zL4Sn6CdMd86TQx2VmTEtICMBpwunDym8pfYs8WM4Rgubf3zOBRiytyu0ajSr43f8JeE%2BBM%2BJxGc8RHAjxveGx2jJEAbLzExarzEToIZ0UjJU1nHY%2F%2B5JyOX1b76GL7QMq82XpUpAXo36WY4Fn%2FrrZuwGHRgMXOVZYwgnM6L%2B78BYUFkIDi7tT4k1UUt6ln5Os5wlqGTSDSBybpUzDs%2FzPTAPUA9z36fxBfIFn9Zcn6NUexftatW%2Bp9zOWRynLD5j0wveZRTdGFfQAj7yJfVRSkkZQjhlLn%2F%2FISBxbK29awiHSk1w%2F28UBk9lkCiDbWdrRRfcITtw98LsKnUQm0j3p273i6fCS%2BBJB%2BJ%2BO7plwLTrAlGjCBhZfBBjqkAao4GHfYkf9jmSy0rOf7Dmu%2Bb8CbxESA07xJyn%2FUVdQ3siPA6s9mUjRJbRUmWXdlfLoyoMlk4nyK0swjcKdSi0hIgNYgUJE7AgPI7wn10HiOZO%2B3OLMmRBcAaP8SsCi0DxbmHYzPvBXJoPs%2BVrTYjEi%2FBLA1q8GL1XVJvjz1aR01XkJQNakx%2FNfo8dqg23YjS374hq7bUXT9y%2Fwpama0rWStWuGE&X-Amz-Signature=bf510483a4d4789002fc2ab7db86ec2fb9bbac31ab44e3c0a85982c4b173d6df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
