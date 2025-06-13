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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSTRFTL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICARfl67myEQnu%2B1LBzL8WAwowKW4ruO3BSMQBm6jn25AiEAnFbo4HovULF1OZymgtAdP%2Fm4RjLcgOV%2FC%2FDrFYoMA7cqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5vdmd410PvPax9eircAyZAn1DEjywq%2FJKA3h%2FoFFa%2FzZ%2F2m8rHFT8U3oReByfLmKa%2FShGVwrkX7ilnHMfZx24UARwJZXRKaCAz5sjaZvb4eMjCj%2FXjwkbkpeA5hUEjku%2FTgfGfSst%2Fs2xXYGOKzbPBW7WxJ%2FL6VZB1YShU5S0nfwkeJbRlwZoF057IkQZ%2Bl6FBNn%2B7J2gk9lnezXplvdKAurYL8weE79Urlc88uID6j%2FymQMnyvcfAAHgWe9HmLd9bpizg5mEYAWGgx0%2BSQTcRpZiHK95yw4veR%2FM5LRK2M57K9GrqT5ykC335M8C%2B2%2BEesaHiYqeg1OpFLAplCTKbW2qKTqxZyqmpyUj0bqz7kqnKjnrq3QV5xzd%2FKijZnG8HV3Fzwy0C3hiMPeqk7kaZkFxwxp8Uoepm26AoNWnY59bgkOg3VZKxSKRcuBpJtYo278OVFQ0ZfbOHudGUXCNVClWrdtrb4pTQGQJ9dGIiMXu%2FgMdrpkQJdLPUqKi5v4TKNdgyq4qWPSz9Pz%2FcrJ5x7dWS8I98RgQjkFRBGGDG%2B3lUn8lott%2Fc4gXr%2BGo5X%2Bkcq9uuK3QaEHk7xwtC7MS%2FvcOBoj3eFm%2Bi80qwnEP%2BNDs5pkAilAQqKJj3BM2SbfHthYmm00tRiaZpMKbcrsIGOqUB1KtUjoeSS7GeNWiKhgyIkC9tQJiopMN5MWCIRW2enE0iBkbQ3gmlSvgAAcidw%2B2SVFvehctiiZiSxun6pvHWfrx3%2BHeNGrI16JwbY77205Uq504R4AgUCE9IZIdk9exMiaA8Rsbquy4TwjRzOjLNxHpaUjsToMe%2BpxVFglaFKWpjH6KKwAdlnmY0trvJmbZI51VFdB2Nb7nvfT%2FrjaP1ouJMi33I&X-Amz-Signature=05e3ab5c14ee76b571d43777767c7ce29ece7030fc496da82b356c6d214b6930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PSWWBWV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC%2Blc0M6qyWtKVGuvo6SEvF2bKvjcjKD2oRPm%2FYMiSnSgIhAOa0%2FZUe20B0Ar5WMlG7W8i34tKaFTx%2BmXExMn%2BvQ8KyKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZSLAQgOob2cgJ77Yq3APN4YYcBRg7T3yUPGFg9pXEgkEAPBGQTBfpOMgNqgfgvUybNArlfbI8QNjo3QgxRTw8qVWPIPvP09byGqDyq2y%2BptMshPcv4deQDFKmCN98BWNnirwFChdNbw9r5fbuNq5bL6WcTrWXANyCfALbVXs9Rn%2BIuaWJD8y9RW6cqzbRsAd80r2FIrk4%2Fny%2FKQf3TO6N44sTPRwzgkhKyD7fEO2vxZpKY5QudfmrRw5gjR%2BPo18rq%2BVeoYKREuuglH03vCU%2BTSP13Dgn3p8vTi%2Bg3pbzn4x%2BAGleSbmrm4HQz5WCbdCz3QQeBAuwfR5aWdMZSpVuTL3Zr%2Bqnnu75%2F4%2FiFhMA51ORtRaXNzhkSCVhIWB4GtuiMahUs%2FdjwHi3dyCRc2KDFzRqB6IFm2j2ys29yo1A5EFgO9p7YrRne0RK2KXFovA%2BtKIrN%2BmsxU8BEvQi3KC81ZWRIQ9%2FQ8iKqBY1735gqSSfl1DOQYIWffyccTPbJ1rGigvvuQjwZo%2Fdhbr3RdK2O14aMyYMvQVHCnqGsKkKocmh8i8AOezQs%2Bj6mS9Km%2FtJFHQBENj0Adt9SQyKe0DnlPBdutcIjB09DW1l3zJpzHT9BDJbxF3hIEHVq79EeyLbvTrjbalIYo1vFDD82K7CBjqkAfoS%2BRjJtHDmD%2B4HQ909OcqLXWEZURVl0H%2B7KJ%2BusLfG0vqdgGWsEpMMgXohovpxx1%2Bft%2BQ3P8v6egZw%2Bff5gvrzSfXqI0BRUluxE4fXCnvvLWYj%2B3F2uJs26zjJmy%2B34DZxdDeNDf8F%2BqEuZ114cTMpY0kyK9zwBHQIKgQVhaisBjBhV%2Bqd46fx89ZJ8inZ2yL9pG5ujNWOHdHYCuO%2FAwV1kbnS&X-Amz-Signature=900e44bfa241dd17162ddd1d850036b9bd6e12441f54c8dbf55d67238df700de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
