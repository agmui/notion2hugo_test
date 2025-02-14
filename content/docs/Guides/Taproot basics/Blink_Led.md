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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5LYYF5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC0ZngqhcKFwotndFPEOMMyktuNe1jykNPPhfl6KMxW1wIhANrsYrHh8oaYntj%2BrvFGOe4rQpL4nIllpBl0jorELbI6Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxTFSuathd%2FgnqzuHwq3AMGdyNh8BQK67MwY9q8XsxYydGhdPbOKU2mD1OynSOQ5DbItsU6uCv1V26ozVw5YO0jBZwwY8E2WZkWFlZ6msmC8jO%2FroTS%2FGH8SuSq3sU3bJyhvH2mq945f7rK4vwWAdaeYbEg3sD1VliX6FSWTIh3gDNK8Tg%2B1lI4qvKk3LagbPphoXHIcnOl0DNjhsg8gsGhM%2BFGjsQ9XPmQey16mjF1N4XzhX7pIwHdBs9lWG6lCHVy8lLFBUIkjxze6DKVgEW2HfaSKZV3VAh5gERf5Dvsg5JLJkg0M7HptY%2FFEqqpGy0xohjk9tIrve3nUSi7vuTeuWmyVUb31Je6T1eWh8m2gEdBbjHz6nUFI2ANLNNgHlmeNLz9oqlCUuLJHTu4ASAPy0lvN0xPe7GI%2F7f5%2B0pplksD9a9UvbD7Lu4PO86gYRQy%2Fub8y3hbVMKzlo94bO0ZxV70sOzdBuGwUK25JuHdc62lpfUp7NLFsiZXUPtYjtbJHq%2F7UT3Mhnam06Lk8DaIrfUrxBq9kyU87PcVdUyrjzvIc3xWek3BHZgyxCnz5A2Xln9bRn7X6Gu2PZCnORsxgqKPs9uYjIFR65Ant2akLfiSgWGzBhXiS1ugZDqvN324T5ZQt%2FX%2FveYwRTDtkry9BjqkAUxlzfyvVahijGP%2Fqpy7omPY7NgthkDk2R7TtsN1HzpqGWWQKUpwu3AngvHmmomBVw2MnIRJOABJIOab%2B1vjbAXXSpKffs9cWxh1AdoMVaKU8RjDDWKI0x83KOgtFJTxk08sWcABPgoHjxKDdQ1AyeRe5pbEx%2Fb6a5c7zx4dj2R8wmZ36GV9rT1DM53NibLaDPNNsLh56MTgFukIpoCvGUKo6q4V&X-Amz-Signature=f7a1316c27c09f3a3c072bb4edf202da516c6e78675932668a203612bed9f0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CA7O3XU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICqHsu1lmEuv%2F6kp%2BXcbGuDfQ2NXCjZ2fm52VZWsJmKBAiAL1JjYJBShlev7AOatrjW4pvhGSAny4%2FYkI6SwXU8%2FbCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMNXuQ87txvhsIdKZlKtwD9EZOksvR3k6k%2F3YoOi5GO5UTcy68juy33pViqqsW%2FuR0imfIwXDmEEi3hnnFFr0e5Rjnk2vQ2H7uoi65E%2BLw6KY2pvm3D7mcIei%2Butd1DDNwRwCRSBTKgpbS3DLRVXnlRkA4w6j7r%2FoiH2EgoUc%2FgYtR4RS9rjp1wcq88d6utHirycin39mvTxN6LMbqcssHpuR1DcOpk372Ycn%2F%2BXFgvsjCicAmMX9RUQaERBp6XdKyqT8pfSx7Jx%2Fq5Myrd%2BsRwCLNGgbXfyTKWaFM95CEzkovMz01ef%2FHJ4HuW04nMQ1i3UIkGhOesTKVEkI2dAGyExLu4aQymuFeOuFbuFDRSYqSujeuPF%2BJhAk2c6zX6FZuVEw9XTD3uIE6Ro9VvwqGgEfi913PdU7ZWxhkm10%2F2tO4LX8T3pEwbhNtOf7rydTneyXP7Y3xK%2FR842W%2F%2BceB2u1pMNK7h6LvYo%2FOp0hID0yqPx9lBg1mnsI6zyAw3bnkWPTOkBmETIypalusqRh8VFY%2FzH%2B2cKsp2KdFI4BfOI3%2FPZOCJ%2B6LwNVxqmKbD%2BTgtqPF363j3DLZ%2BoGEA5dTNGHcKDRW1Z3uXYNPvpaxIQZoYl%2BYKdGCWgx3XmWadfbsbKacHxLJUI2swi4w6ZK8vQY6pgGHILca%2Fjwm%2BJNpBBN0HbjgaonzmNzu2RRY%2BCWKp4JO0PVUeW%2FlfIbOGvmZAc%2BTH9VB%2F0WA6Fx8TS%2F3jzI6Tove%2F7mbpymx4JH0fN47IAVpkl%2BiXCpW9JeUqmWqbsUX4leJxbK5fOu%2BAkV4fUicf7E%2F4beqNTMx%2FlK4CR8Y8LWCLiaR%2B%2BL0w0tYoeMVSElt5Nu7Kf7ZngPsHw8WZJ2XafyDf3wLBLUe&X-Amz-Signature=8a92663131ce01583017f92c887457dec985a82817b6fa16fd2a96144820dabb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
