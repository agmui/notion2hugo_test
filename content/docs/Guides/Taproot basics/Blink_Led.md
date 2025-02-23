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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLIAJSAO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5h4CoylVdTkenSeHisno1KOCCtBAjjul%2F6LGrbRTLjQIgNnmAeCuSTj%2BnpKbgfktZGqjqbVnvcn%2FbyWfvX2HIyv0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDCDvN8n4VESWnaHDWCrcA7lY97g7AwBOCWaoki5oS%2BYlIQAi3Fbv50z5YB9tMACynNgLJ7wA22%2BwSstJLl%2B7yIBsZJJarJhKm75%2B4Ck%2FOZ55Ll5xWAipMdsARe81hX5iRsC6Hg7llt6mjNhh4F1lDzs4ufXgPm2%2FsdJ0fZN6Doky08EdFFVPc9rvXfF%2BIX2O%2Fy7jQB%2BP7dDa%2BGwhcKB6y%2BSFUV7P9o0uzha1Fcd1T8qLNbJVaFGUO9HGvSpP7VI%2BztVF50lzGCm1D79uoHHjxxU%2FLScWF2SblkQMWrt0SDGkNod1xt2HaEaf6CuRMDp8Y5KIuFkYi11RGqlcp%2FmZu3QRY2EvCHYTGNJ27PIzwjnrCmY%2BxPbQThoszPQBhuIsEMLT7g61gqf4kTF4bWUzIgenx9cGeQO5u%2Bj4SudbbV5j6h94c2UQk%2Fe%2BsAWdW5rsZV8vtoy8JJS9Zkh6QmOpN%2FNhgovyVhVXBIcwcxe5%2FyyQQEcWXdaDRPxzZ0QQJc9c9tkeCKejHwwsf%2BU3XPVyHMjoqFd82IsC4Xlb0TUKf4s7RGhzBBzMEXoY3HRZIpiEWl6LXVRELMYFcjp4lXi0Xn8e3r%2FXL622gzRW94RjiiwDicMVn0yvji0HgyTiB0QPpEEn3P8hY5KTQGTOMKqt7b0GOqUBNjsBDfEAadDfBC1wcmWu54OINRyjiw4xI4x%2BaCbAt3mRFyFg5mDVNZ%2FPssEEXB3PwtBZIFEaKioJ6CKr%2Bx7ZvYB6NuVk5y3porj%2BaiLHF8kisH75EXTOljgcYdd97WmvZD1J4fHqYYSAClpmi%2B2JP3JuOpmyMe59z6mJ56YWm09h499S20Lkl5s06RrFYaFi8SuhwfC80V6TKuw%2B7wPtEXvYSM%2Bh&X-Amz-Signature=303128ad458cd86877faa072534efd7f89c99b985d8c4a9c5ae58415738bcf32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSCG7X7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTFMZgATQxlURHqbpxMCx1w11XTc40Z67z80pwKNfBpAiAnh90IslvFpTRNkjhaestd3NUkJ6YUa6HyGOEGHsPnKCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMszkY3WrYldjnAIrzKtwDt6WvHDuAFXnCfg47mYO%2F4rPO5BGPcXgnZWiKtfDGLEYKQ1gEA20PCSG7Fve4i1zq0TVrTr1%2BvEBTMFeNB7pEphTnMCpYkpsQy2WAWLTnzl0VaC5%2FTtBB6EjfYQRlWZ34vUICWba9Q00gPL4r%2FG5o815aho2yiWoknnJGiF1p1kbQ2vDRsx7XPlkwzND9z6b1FnLMHwdAjtqiQ%2BJGHMhJ%2FHwEdxz%2BL1SoNhmM%2BAtUy8GDl2t%2ByUAC8W5EWzkeITKL1UJy9YCJM%2FLU%2FS2SioA5Ql7DfhpOPd4zCqXsVz3ZlctbM%2FiTuU4OcS2Ny%2Bz69OOAbS5TgylTnH6VmqBp%2Fshcv9ZkY7rj5lhgRiHrwg3ksAsL5RREfhcbb8x0JBrVzT9fltDXdv3vUIUZgVBteT5Q0IAa4vb%2B4sdZPpbFluaMrTftrtPVDPYFqTjhseCcvBxFVjbXO5xMXjXfotJ1%2BZXaiQpQ4%2BXvyh1vNy9fti0RoJIJZthswEyMzqhQFd%2BcXpR2bIPWvq3%2BqAsoRCFMSI2FYL5wTWX%2BfyKyOn9aJ9eqhtc1%2BHDiDXD145eRe5p5qE1jPrV50mG80JIAtFT5JbxhL6xXka7BCo8ebIbaTRpM7r1Re1sgnNMjJ68bIfAw96vuvQY6pgFOkWiPk15lh7fWk3XnBQK0su7CAUYO9oHnrOqdThYLL8hc7qkRx4qYmZMHXCqIWYV9%2F6xQhtLL28ZHXQJdRwN%2BXtvHsKJBOqVQppSWLsiaTjgvtalHURfzZX7K1KibZWlPu5aqvWvgUmfVsKUwwntC3bhnmCOHn0Tz6C98FpG7QCqdXB2a3%2FDDH7q8eNW9s5%2BzbYC9u5vh%2BoViUr7DyIg2iEgAlhKm&X-Amz-Signature=f09228a3c5a31d10c5646095fd2fc2a1450f4a91f9a44b10edc26c6c8c6662bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
