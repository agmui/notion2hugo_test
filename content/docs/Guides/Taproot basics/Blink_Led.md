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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFMENWU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEVJ3ksDsrpExV9g%2BEnlR%2BK2%2FeW5lreO%2FBYxHDbmshzeAiA81AmL0Xt9kjCSUS7H%2FALRoGACG%2BTt6JdMJeGud%2BjV%2BSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMYAfTBUAboGTeWvS3KtwDX1KkueAasKPS07%2BhFOQtmjlmR5CUYiEcT%2BT%2BtXo6oHJiSOI6wwC1Sr3zPciicUAVhSkaVxLtQz8LKfDvd2RdoODa5NfRhnTXM4WJb6%2FODZP4pfG1xpy6idajvWHO7bBermuCC0mZbsCzmrmxmh%2FvKS%2Fz1J5%2F%2FkNYpCq%2Bn9FSRpQmXaRb%2BoYC63FJsndqBlPAOGdUc37mUiNsaVfmj%2Foozs9LqpwjXHS7JQ3Ki%2F8xgJjWmervG6mbKIgMJmj73bbVt2y25TjAHoBKfTOSBCPm0jdw7LfyYbaNXR20SGn6cOPvvUvUsAd8rPRTW0pJ92LvRoBzOMnkASD%2FGLcnQevpaLsgwuREBnB60GbOpIqd9s7axShzJrCBymWIW96ziSLXyoxvlVT9IYQ5PyfFD4zrag%2FyiLfc%2Bp9jivrDMA10771hf2nv8wWW%2BkjzEcnTaXpOBDzY4FjsVVsLPSMlFWVmCRGC5NDG8OuW8UKstO5lkHrXCGssebMbDroRlnN6%2B3S%2BgBtSDSG%2B%2B7YOtDyVgV6plFdf7HW37ptd2P5PY77bven0z7GOgs%2FTL1hJJownIwpmVWnSYvO5nEdRNc1D67eTmGZX7jEiQPf7ZUPoVpjZdVJaE%2B1c7I4lpvS3BVsw1OrOxAY6pgHr68IcDokDAqL%2FA17z8bxVPaOgYEyXNrX6hK7RqiWSnqERQWNKFASHmtJ%2BAv0cmR1c13FaS7F%2F7ruwWycaVaUytTYyscIBzfWMz5Phy0YPq7wLGaHzamTw3ym4Se1%2FwS3EXPOTMKEV%2BivABfrWYnFLkDxRmN8Dhc%2Fx9ayukAFzNCtJiLhHQR1I45pg6sGVJRbQvJmmGw4jQxIwyLIcLwfNF%2BK8rQYp&X-Amz-Signature=61199d9c6e98e1e821a7878612c5d6d3d076a7df633dee6c0e70f4065f119431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTEBWND%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCkmuvcjEPRjJL3RwVNVRkDAbqbfsZzbmFX2q5Bw45RDQIhAPZ%2FNHk7BVDd6jN%2FsVI0cBAZoBTG9QXUXalkt%2FdpXtYpKv8DCH0QABoMNjM3NDIzMTgzODA1IgyVO6F73tLpOzyyzr8q3AOE8g8rlutYkRDM3Rl8DQlKeozeqxrTDX8EluSDVyGR8nwqz%2FIVf05N3jGHT422pIx2Z%2FEZHoOaymXHhub%2FEIuEGlq%2Btq3%2FRfqRkMVd6XhLdQxbUMNUjAzt9Jj4SWTXYdOWAR5nK2e14thdAcCz1N4B1LzyRjBism4rxvdo46sToDfBIa%2F45e5M3lLCLfsvkva9wvhiOWicvEn30%2FR%2BjwCroiPIZbDPa7r%2FjIFgrXTnYp4c8%2ByWipNdGoqaU657Hgj6aARKbxiPoLwjv4QbBLgAiHBsKXrF8H20FxqY0xB956RQihyplxQyXPrvLt2%2BL%2BUdrbD%2B6oAp9AnWep10ylQoaVa6y%2FO4yydot3rdUvf20b1%2BGQnVsj5eMlgUxlTeSFHguy9iZyENEmr9QLg4Ud%2Bf7JBl8ycwc0bHTg%2Bla2WfyzBlD%2B0MaBWrYLeJz0jJHLKRl0TGXEajzgjr%2FSo1zkyZ1L5gg%2BPTxgocWnlpKhicEpuIpyqFe%2BhAg0N%2BjqB7ja9yyKxOVvWY5RrjFxyhnJrdG2eKINlEmOeFB8UGM48DHHPXkkzTW2tB3qlDkmhXxmdcHW1xLcdFFu6MkCjXxCY1WqfcJ2Tv%2Ftor7jOjdMrc%2FQwqofIAkdeAXixcgjDd6s7EBjqkAWVvCyJHQIrFUnW8aisxjtyxxsa%2FX3QQXkcpxoJixn30rm9QiDuK3LGx0hcoTkRGxABFJc%2FI%2B70%2BzO4NHO4R34YHKLew1t4fRYMTkTsPEzx6ug2h9AmABYvw804jiEj9ASqq0UbdrXIjyzj7X2vUd4%2F%2FQ7iFXBR3pfae0WgrsxLTlIkQTcckDScaSdoDo31cmba67EvSft2sY8B%2BwUqIHfIcpPWr&X-Amz-Signature=914cd050723a3a17e2657156aee1f0bbf40b55016104d7cda405d540902c2999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
