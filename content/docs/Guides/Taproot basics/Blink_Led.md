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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL4B4SQP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzwXXsZIgri8zsz6r0mA%2BxDFbTdK9ZVUGgZC3eMvKACAIhAIcgornXd4AGODWkKhWDAjxEtB3%2BQ0usIudhumQEwfeqKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4nAJbc19qlFgcVJsq3APF6XmJ%2BMNz2%2BXO0LvYimC%2BiQtSA2mxBhNVXvYx2ImNW%2BT%2FKt6R5IjEhc0lE5xbCNk%2BLFKTpFFbyBRJeLj4BdgTrrXf39h70N7s8wDseGKfikvDDpM82Yw%2BghuV4H7zWEHRgcdpNRVWLmzhcEkn%2BZ1ee%2FeeLY6G0wTki4oHqFK4u4w3bcVXpUuKHoYem5LEKI4XBhDf4H%2FsQweQKEWmba2z4hPpfsUA5nTDG9LEPZimM20jaGOdKlRBaTCwTEm%2By5v7JKYRxl2vAhLGxI4itGJyuJJVO2MWvtuuYeCsmHKaPy%2FTwrl0WmCUqOHYkh3l3iETLFGPMzfw22emIQgyzJ6CCjipLphFlfJysQ7UzLPLJAgl7od5l4z%2B97VOsaQozk96LaYkuEr5fYfhkvuhltw4zuvUIzT%2BuXLxbJA9dAYc18XT8BPAvxAxSAGaeY4lhvcgMcgMfqSpLm3Ca6x1a9%2FICUpceO%2Fm6UyLNC6ggIahEh9l0ggNI%2B9Qni4zsJ8h4zHNfKUlSAzj%2BD7qZWzYFB8a7LJNzqY6tqhwdZMdY4DSnvk%2FL4xqDL8qALSkZEwjiUj36ol2eDeYz%2FHa4waYTGQlZTiQaf4q0ix4bEb9MLMdc8DxMpcR1aMehlMUNTD2irnDBjqkAQPa%2FrVwRJiL5h%2Bd2xWnkHg4c6cJoRN9PcFf7B2P7gj4tpEBkZ9jgXbwopJQ1XECOUNeciDX1OruZctKucKnUra6g0EI5XbU%2BEJ%2F71nXzrY8U6swmhMPTddLGAqvYFcr07bseiXAyEfBRwQjlN44StyEsrjs7ou1jD9%2FGg4bsAPqqXXxK%2Bva%2BzP3o0P1MwkwE7loMXEbvqPScPOYvjJKDvp7omfJ&X-Amz-Signature=89279ba5e54a2b455a7573369f6c977a1020d25b7101f397a63043b1115d8d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625YF3KFX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNBfkOLiPs7RyAN5f0f5MWt4VeKySJBkMyUUi2bi7osAIgAzQuAg4XkqcV9jtYJuMpt2TsA6WtveqjZ%2BUFI6eQal8qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCli2skSM%2Fvi1sB11yrcA8iyIJ8DZA4WqsgA8pB6q6OHV3D8HXlzGJJtwEU6y3jWoygFaaDut7Y7WqvCIGfO1CtreJC%2FnFTVLJshgRw2mo%2F44mrjM1uCM7eMo%2FhaKfaoLH5BVjIax8VW0I%2Fy9QNrr9QbaIgC7AUZZPjr3ioDD3LJpB9DS80krLWUp6%2FWgekp5NyufcF7zGvx%2BfONyZVJuwExn5N4uzAOdSfIazeaBF6aS9IFJsa7ZvZu%2FjXbxbHeHW3ThvhRZjWkpdVM42EsveVzzSQwqRTncTP3jtbPDqpwmrxnWNsdJzw8YckFS1lNaIS%2FGJapk0hV3scAd8tUcEsw1P1%2BMYrFXrv9RUU6Hba1m6gIr%2BxSotUeHdxj2OS2VrRJQ%2FQltcbIF0wc%2FlcSgYfqoEdf5J7q%2Fc92qRE8PpM3PycvhMCX7y0CDcmlk3fq%2FPRqgdtf3QtC%2F6SqiONL081M5ZidnmxYUwx2ucqdegg847sBakW89PyzOpDGyJ7FCeV6uQ2TDggFFhoch99t4CUOUd8g6v0Is2TjuwDNVAO4gUmNKctm0D%2BVW8R34vvp52Q1slbZlv5GAM21DFtl49PGKeNzh9WtQC41EeDv9XvIiolOjX9hrTZr5LCLp9o3IoCfNtS38Hmq7mo1MN6LucMGOqUBebzKB4jajr8tyvEXomxEP8DifRqSbBkLLtbE74%2BS2GXZFJZsM%2BCjgEULuOEkxw38GpoiUE7t0oYunf%2BlUw%2B%2Bg7XA8EquT8t%2Bta%2BOC3yYdzvmkKn1vvG8Dw5QLhy02Ls2rlJLg5VSjwnzwTJGs39G6KyfX1T4Bc5ELqsCiESLRrI0xkvTk1OFIOl0wKm964YVqN16x3F3Lowep5Gxm9XABTum3Zjh&X-Amz-Signature=ae2eead43c1db50d2d22b1939568bf1ec6ecd30f6823a88483c5fe5680da1863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
