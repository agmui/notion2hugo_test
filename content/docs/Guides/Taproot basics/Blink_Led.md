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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7HGCMWT%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbCs0JNMK8rb2CWaLlQXNwdsdOdWhiwNtdIyR16EKd5AiEA7gnud2d%2FReYJgpVAoVcKy2%2BFsbgEtbmp6GfXJmbi8Q8q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBNBbaZlR5FOBXjnzircA4QpPcvNubWFFAma0cMJybAorOpkd9zZUbgfd7DdbVdonTuL0I7Pi2H4MrkkdevWn%2FfH6739%2B59I%2FfcWLCY2lMrTrI9o7BbEgrvzG%2BEFW3m01GEvvrmWgtavcOg3Klytv3xvdpx5L7AlDC2ZaoGjTUQWnPcDIJtZLJSdZd7KstrLEgb032XOjrx5yYGwzSNgdQ04QMobVBWllycNi2P4XyGLamAJxJbf5P%2Fls0oS9bNzFTTahDwwwDDqOevtPWB6u9VQOGU8bQrnq6NMYuidylnBzdor4I9m2o3tWtKtLoGQCJcO4zfvLyEzakZbZNfyfDaQS%2B3l2mNESQLvLBAWFmnJI9H2S4%2BaJi1sM%2FmZ0meP5glmj2EFN3wKWW0VBOBIwsgF4NdPdiwMRojyDy9b%2FjERuNEyIG5FndZgJeWYs8WzTncRa%2FHT81pQY3YJfQpv2fqDfeoVMmeXrZwo2Msg8VnQ1978P2jz3lawkdL4Y9EP63eQoWTzIPJnNwXWyjaMMZ1e%2FnWZ01JjTSuPcOx3B9x9N9NUIg%2Fj4YBi%2FYc5wEiEWzdVztyZQ3MBF76TxNbS%2FTBQAncXD44MSLxQHIKl6WNti70jBfX%2F42r3tJwL4CP0bU%2BwNODRHwKOB%2FMlMN6v6sAGOqUB2TSIKmunR91B4pefFsLTfh%2BIk%2B0JjKDjDUb22EEqB6yRk1xEodEL2ijl9HJFWLFhIN09cgFfDo6mp03q6WNt0NSaGCYp45hp5Aj22QtMS98kQq98xL5ezU0Rfc7GdewR4W9bF046kusZJXCy%2FvbJDCXqNa9gDofIwB5ROyGpPHHtSP%2BZlXy7rF4bkg9MhOiASBgzT86KaIVCpuXX2q%2F3rd3RdbfD&X-Amz-Signature=d5784e41dfe593c994cfb6654d1419e088c4c45f4221c28aae2e44a8a36bea8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMJNF5L%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPobhmqpBy8fxc%2FsFTyT5%2FzrW53oCg9Ap8Ri3wWKAzgAiEA7HDNJ9EG%2BNqEHRA%2FSN3I5%2BmJtpTow%2FwmjZ852i%2FFnscq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDBxSjT6jReedTVX8lSrcA6mhzjP3Ow0PPS1%2FF7sz46%2Flob%2FK9JWQoszdNjUBNOdPTPJwue2nkF6DBu3kprmy4LiilHPZIubjYTnjQy5qF5XEKMeGRHArTCpilKkzVDSTrNj1S05MAuDNJDiDZx9vJNn%2BZBh7H1YZBlQ0opZJ3i%2Boz1ar6iBJ8fD8QkPzZIJIP%2FjfQ%2BS8Qjlo5e3V12hwRkF%2F7udCUGAWR6NucUkLW%2Fb7e7e9JuR8ZlTXVUK21I11NaxzSoICEwlcn9x8GNBm3ARgOrxUCppbymVPIziv3Fp%2F0iaYSMYab6U2Tf9sGTg7mlFTzg14UrJ33Skc1fgq%2Bbn6zOCbcAoZOen1xTX3GLQd9Hm4IguW8Qd8%2F7S26dEczvOiJw3%2F%2Bvp7OVFDIVJbBmvBPSbJOuE0ImZVVaWeNWlB6rU4FEiIFMJFL%2FajFgkwiGnDeVTeA2c0IiVcJaznTH8Z72kZDnK5Gmn9LEmennIM9BT0qaJ%2FJJ%2BlSg7Xm%2BVioMFmOIiaW2qUB%2B27ZcBdfcwHh%2FfI5fkAQkOot7YOYqT43seb2iw0alk4FC2GN3Ji6KB1vvwiATvZ33VnLXr5BxiZP%2BU9NuEereJkbvyTVT4Es1t83Fqk3nijJBfgLrjqng%2BqFTJ8hJmbP9CaMLCv6sAGOqUBMtIzVy2tI5sWXVpyOY6lyS2Ikm1biCTnylGVVtKYg8E4S1mimG3sPBw4AQ6DlAg82%2FNinKNJzxm0GOtiBhYecBqqcLGTo68bdqESQqLdQA0dFzeyiBy%2BKieJS9KY79OqQPjLPpDHdcRErS34fiZQKyFjIIjmyOGWHFhJ6bWeXrMBRjWIpgVweMdfFObDMbRP9mrP7vbxBMc6wl%2FSeZNbWz%2BU4jjs&X-Amz-Signature=276e0233fe93825d08801575c8cb6895f25621ef2eccc51b7640b172c3c31506&X-Amz-SignedHeaders=host&x-id=GetObject)

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
