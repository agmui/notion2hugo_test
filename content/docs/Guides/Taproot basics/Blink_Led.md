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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U7TJZGG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFK%2FOYf2SaQ60WuOQU9td3sgCgQwdIB%2B3ykUJxyr6EDAAiAImYUuvfkDkGui%2F%2F7zaN6hgWQNqE5mxVtvekUOSfsvFCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMrE66dV%2FhkAzyuwcRKtwD33ueJ%2Bg9RtABpf9dsRUO8WWjPz%2BdqwzCDgSgZyrsjxY9QIWMQGb8p6GLpVl8jcm8Uze15X1HqKvib7LNc0eFhDvPx0L2Jb0jzq%2FIFZh6No3%2F0zTckjhLIZ%2B8kKM0mq4wWeLBTTKY5B%2F9zl29sokw30ltVDLN8NRhAMXPKY46i0FnK4J35W0%2F%2F5bRdCf9XBlx1PnOUSuarrWufX9GzUiTVAHkMrpALICOoLF%2F64Gvz5qLXAgp4z4PGX5jVGPDXKTswrtdboIN95e3Q96p3LPQJubEPQQ9oUwWWvFMAlzBg7A9qigxwFR192VjmVLW%2FnmHtuUrwQSR9rxvNjqM0G%2BOOi%2FfHE7%2Bd2TchbuedKZ0vFR4nOxa5v9pXhhuJ1uC3UgWx00Q8VTaBxbiWR19t8%2FRNMUJR7s%2FPlSS%2BTg8CkwJMmovuaZsuE2LQw1aF60YPhVtKvkOs0gKQMwQ7nnKibLNmaAXPow%2Fi5CwaoZIV5kCBGo9oQLSGfuyfuhgosBjb3gblchwz%2FLJAL%2Fe5NZyC8OKHDQO3DvvDQ77kra7%2FSrBw%2FzxN%2BaR6LQvIf795KX%2FpJsDa3LGOU3DH9BtZjPJGmANSphh6AVJb4jZk4iIkL%2B1SF7L5Pcd0Bs8abwtzJ4wq4L5vQY6pgG2ioOhS0%2BWfnyPmuEr8h93%2BT0wgShtoMCLnWoDArFXa21EraiBTwNOwEA3Y%2BZgSAYwoAk%2BWJEkguQm2kz69YhM%2FKpwR3IfRwGkxac9%2Fscy8W09wXDBPEG6Xo3T3a%2B0saw%2BATfpwRlnxiHGqAnYkHzSZvmAqVzNNRxG9UosvHNGFM1MW3YcqvVkXwXCTZn2Thp6ESdtk%2FbtuU%2Bs2UNqApt86t80IOxB&X-Amz-Signature=81de7acdecf0ae71bfcf3dc179b759e7ee09fd37d3a6b8843c02e66afb4a8925&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXVHNZMD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDofyJC3nfLXkhi5fxBR3FiLorT7InSChHanPYTXHNhswIhAJcCCQWZQ8waF4DxRLipZ56Ejo6espPetTm%2F5BN3ZXHXKv8DCE8QABoMNjM3NDIzMTgzODA1Igz6LNcgZunjZ4jIGDwq3AOIKXRJ6s9voP6%2FnEJoFIVN0oLC6R8cFanTP3LkphmRHNdMdxpZPMfR%2F%2FTyv1mCVNeRr8nSv9cadIPTfmGbgkRE9Jf55v0KM%2Fdus1UeYxP1TDc2Xm7pijET3VnTgxr1jDD8ULNmCltR1WDWIayuvOh0FRFBMQKTPespS8Pziv8np1k7RfCUQ1dW6UgX56Uq4t0tG4WBwzFe%2FzGMgwbEMp4gHn6d9kXhEznZPGMBrIowF1bSoa%2FpokiQ8%2BXmPPHOpCN08UqyNRu00SqluI%2F1%2FiA0up0KYvMdBuytPEh0hAv7J1XilMGiPyyz6eufvNDCYG29xB8%2BMOvN%2FgesqR5YKtYrFpWzcAMAC%2FzRwCCCBFjtAW%2BywB%2B51GDPDZU9y12Y39faVUkrGVSVceUv%2BbQwFlHYmFlALlJrThAMbFnlcvzGyIzV0lGQ4%2F2Y771vuKQlaK4nF7LXuhBEULBC%2BXGIRbl9XdFs4bbyWYRKpLz952hZFFBqsnPY9z4y9Xo%2FHinNdNzn9H2fYYo%2B%2Fj0WculVXbR5BeBQbhjLp8aIXc48E4u41AbxaThfj4ohXwxtX%2BU95uxc2G2nDYMyT%2Fsp2TR%2F%2BAzBiXyLRMzS8hZkT6YwICd3WcaoFE6ifyv%2F7NY%2BETC1gvm9BjqkAb7HvoOC0jnOkqOpQwFsTw1E8rkNJp0vD%2B5IXVE50dIWcYVCiV7wx%2B3MMwSgL43LQMemn8PYnzClKsMj9wywLkOLAdHkuzbWobuTnn6HePyMfSUzWO4w%2B7uSJAcgGkcnH93Atdp%2BAoUm7XH5XKretjrDFKS9vrCZLQ29aD5b1EzUnyxye2bkNLrCtF48Ob0%2BXrODzvDNQP3tE%2BZX7kmboKpuujg4&X-Amz-Signature=67ef30b381fbd785443631715bba1764f2f8f48c9c01d2e9d411c311242f448b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
