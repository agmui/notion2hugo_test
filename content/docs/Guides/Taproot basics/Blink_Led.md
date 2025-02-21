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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654JWDQAN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtee7PHdOTw1cx13s%2Fc9tPgBjKD1OxEV52G4NlHEMVCAiAryeziKqo0RQcc8odt3Pt7l0%2BJj1ONbInJQqgKn1NXFyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa2K4pQHlXGzz8x0GKtwDquseSo3LisuAjjSFXngHsQhYmAZHR7VNFbT4gpRftaDFfgO588jhs6j4aOwMXwSSDbGw9aVkHP%2B08tBTPRUoi5OJQ1a%2FGOMloNzsTR86Lyw4ZkhuiJWzvOTSZ%2FMwbVLOAWy%2B51m1bwVVWqyc8UTsStXUaw5l3STmJPzsvllN6NMBjsWSRnTuBjhZlq%2FEAF06x%2FygT2Y4rRKstJBpWtTeuAwFrxNMPj3LhBJHqhSPbeaUWuXaMHLqArFIwplvp%2B8psAqQg%2FsiQ7GO4Xe3bv0iaBqiq5fzKsQuQMlBEhJB9hRaAWKfBZlBcSb3heq2IUXY7H0LQvJy7%2FSsNJBTNFVJ0gabh2cd1R%2FkqcOMUniLAj1hOljuKOH4v6TmOkY8ZL%2FmeXY679l9nn5EusEKXI8x98NbEsw95X2MoKMSf4D0ZBss1dXKJRXipnoLVTczLWAscwS0Mle%2FZCcUjDvGUP96jcc4fCiKqIS5TgO1jAlbLnLknUCf1HHs7Ca8knMivZVlFqRiogUyozXCcD1qBf1IsQyf1g3%2BKFlcTZ6MbpEFnmYKj3Ftka1lqIj7at4npwngvjzQrAA5Smqosawj173%2BygZszUWL5nOch5%2F6oS2BErAYor9zf3FbWUgMP8IwooXfvQY6pgHsdvLcfOGeKjlWoaNWJi579aYjC9QowjDC2W0fXmj1nAOIKXukO8dpqB1Pj6LANY%2BRpmqx2NuVbxPgLiEdPCSW%2FMgeK6epnlEvenB%2FdbV6CRKzSDaF4y4gQUN%2BUVM%2Bd8dnPXVBhlXkGK87RoFfFTtyWQqkpM3DrqDrXzGtrFXEWJrBvaA9Ld5FlIRpSoeg2lfpclcueD92yhefSiEF6vQvK5uzEkZI&X-Amz-Signature=f3098f8e51c54e0bfe63438c2eb126520c5779b429b2be133a229aa8e5cb11dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RX6TFWY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhIxLrMSEsAPSIFVNTbsQE8XdTDbgLqGhMZfB5s51RwAIhALGyHScVAojqR%2F9wB5%2B8Vtd1Z1RV0%2BSIkxrtZ2xElxjyKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BcpUbrLDwBgScgwcq3AMU4OX%2Buoq2coJ62vrU%2BtwEQv3gNJ2o7cUYjqH4iSLQOp3JUJp%2BWK3Ee%2FpiN88lNrhVAalD4QTD6nJVXCkAD8g97JkLm4ZXUujJCE9ljZeii2Gc0L4GjCPDzeoO8dO7s7LojSbo3pMSG6q8REgUv0kqQkgrXiZgFMpLFKdRotpDPH1BMp6eto5aL8lIET8QruNfgh%2FMVxtNgZsR8Q63k32VMnxAXIdrLA2XQIOO1MHdbV38JqSz3ZCHZxX0V7hAHeTsiOvqBKjnuxfdH9y%2F%2FL3ewY6wvwQ9JvoSeinsJcrwYZrg9XhB9HQQugh7ov2%2FhY%2BqI0Ls2Abt12mN%2BT6f2Pjlo1%2FnhbNR01AoTLY6m3EEErk1wXbPEyQAHkEfi5qAgEcCBa885NaGYyxisshX0oihGBDrNYbPNNeE3m69et%2BTJRZbknLuANIUwPA6V1JotPz94sS%2Fz2X9h7w%2BYBBOUISFcjyK6JM0GwSduPydMXjNso38E7jiKZ0r08l4vYyBPK%2BgP1uVL7eJzirJk7vvfMMtSvlRcucsvaym8Gt7sGSuNtcWFP0egZrwn70r3OCN3VqOcK4IfyS73HifYBDnWgOBKaT%2FxIuM54RUu0eRf2bJ5BdjZKtWqaHM%2Fc6qkTCUhN%2B9BjqkAZCA4rDb37WPb0qxMwQB1VCd01WHhCpUtbz5drsnZ1PQXUpSs96UAkIUYltqsBf3I4zzJC13VZR4pznMvrFDJxH%2F4dU02tBNjStG5AC2KhE9fVlQj%2FRLLGnEwvDnEBQTvkvvPiB7OrVlXe7qi1FNagE8pWLhHqdeFH2kQ%2FbJpJJjI1Fwv07U4%2FvsXK7HwPU5O9OtEpt02K8Lw1ME8tgFd88XfrtS&X-Amz-Signature=f15a2fd6216bfe21668c7152b0848a3a2524af4c92ac5f19d339f03d61dd81b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
