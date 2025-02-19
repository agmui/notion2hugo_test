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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZUFBRFT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDBSA3BmTBRucl5nUo7LHWjBpBlimMqMHdWQeZPajCwKQIhAKle2%2BnodY0cXenmkNTwH5YAZZ3kk0q3bJqAqDTLh9GsKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaI29%2FbuxzcUTleWIq3AN4Rc77NlzhFPjAYX8Eynmo4k8Ahb3PWTUU%2BiwRvCVrVeUB6gR%2Bd4Z5DcXMWi2SNYyKGnEQzud208PzYJfUmap%2FzvDz6lq%2Bi9BpauEnjhrRlh70cIhnqY2RJ6SEcI0C%2B8eHKS2qfeFJwalwTTiB6B9yO8BHbA%2F%2BaatFmbR9ffOGohGZEVNszTIGOztP3AKJ4d3Kgpd75kanvGlCmkA8WZ2uJhCZzIEUJZ%2FfvaouzlZW1pZ7gFwiEHKBLjKy8ck3woQxHxD0W7jORHoI6MAQCSCmRoaeYGBmNmhqe5%2FVGGXkMQRL4mKn9UE3EgZEV8MkrnXmKCXeg1h9Qi%2BBb5Oo%2FlfD5r11ofKthSdK4qdj%2B4p7gI7jgAzgX8m16PvC1qz8UgUFyL7BYfQ1SQZBJsagr0EAdH7XLedoL1VvnRbH4y591FtmM1wIMQp5Ts16vxC71Iwu%2BP5UuNvq98GByUiTjTENTZLlsZ%2F%2B4OLbWeF8mxF8%2Br5hXWKc5Nvxx8%2BCY7r%2Ff6kuod4Bvc5zEyVrFy1ksgKyWscNE8GWuqhLVZVc1f2tHoIYbytxl0tGde5T7wl5vb%2FWFHUTE3Eb1r60AFjrDBgpSO6ydu1JNLLNX%2F0S%2F8WiLPoqFjKGfIi%2F1Kdv8DCOn9a9BjqkAY7%2F7Hx%2F0LlmdRZvgQqv%2FbbHfAFdlPMqEMKNqoulUSxUR%2FCKKCadiXdabkJ7j8BgYAyZcGjQoGDXoNSE0d7YkiwPMx83sixaqNv4LmlztD14FB5lleUPlIn9Tgtov44aQXUCgj0sz1dw9X1%2BhTkk0D6ne9UZFDseaqdrP81SLQgi552Uta%2BLEhigpQB9A59H4WMOYa1xpEyI%2FzdJZ1Q2E30GiZKJ&X-Amz-Signature=402149dfb562ebddf7afc264f10636daa35d27719539ea5d24650cbb3b32f3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMMX6C7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHX%2BsURK6XdrrBDCG9wFwzxZ8tczncg1F%2FGZOyU667dUAiEAuTs1cou4RLosIu2%2FxyptDm8Fkkcl5ll1Gck%2Bb8i129kqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNuYBe1GU8FVRw4QSrcA%2BuHEjnUlvbsoN%2BtGbM52qUSJm9jfncWTi9RzgMouBxsZfzbMLa9N6ctCRvQsyScb05fA0pegzvoBq04QnTyn75SbF0w7%2BenM3PnY2GjOrN2pr2UkbnKtHC969MEp7KUtQT4I9gKzDWW7987N%2BtKV3WrYDP0Iqom%2FdSrstp6X341oioYEdAPYmTq%2FI4GlipcvbsVXIgUQqBrat5Yp4CQiQ2sqMzkmkVJcBNo4TZ6TotobF%2Fn9%2BQgt68QI9hPa6S%2FqQuD499VJVghUowPT6c1C%2B89rMUF83qxp1UayqYc70%2FDUo%2BWBq8SE%2F3XkqEwMUn8erzwAVQSp3b7RxZgC85FzCHkhyOlTHeTIzEbLUtWL2rBUHWP2tqMsVbAgFvITN2zoWHp7y2AR2KVeKsWCIe591Okr4u1W%2BMSClIfQ9qXFn5Z7i5QcdcwdhajBblYSDf%2FSpw3qQ%2BdLwIFHZogEjpis8V2tRBOIz0h1yo3a5b%2BHNsmstkuElBVNuqoS%2Btmuf%2BwcVbcVio7l9fx%2F8jR5d84yWr3G7YWJNU%2B8WrhH7WAYxE6RaXYNBF6SPQ06QC82jArTT%2BBuvFjqCY0v4tG%2Fhd5MdPn9G5ugxoyBAHQFgPdIar95F7MPmDIaZ0cg%2FzYMNSf1r0GOqUB5hc7FkM%2B4XaEdY6H30H7yIjXg3l9Af301%2Bt8I4ugmVRcvh5ByaF41HVSNFFwL4POEAHi0MrVanv3MEVegxGOUbTJ%2FFEiOpma11o7h9HIbig%2Blg1D7LOhHrKcHBwnhvBTGuXQxFtmiG07ykMXeO%2FhgsloDEGmBSm9m5MFsyZLZPNYs5M1%2BhpxWLMvKVCpo2xQpkkstL2Z4GMuZqCMYhVsdCFtvDUf&X-Amz-Signature=f58ec1d3d8b9898225baecbc6d65fcab97f4d5d68e321509bbccdc96e9f37ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
