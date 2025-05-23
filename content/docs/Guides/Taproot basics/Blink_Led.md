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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BHZMA4G%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIHl8ghIZ%2BYJnLLRXoAonNo5hR6w1YpvxhpVrs3mj0kZUAiBkPD5E9JLFYQBmbf2DfawKY6lvCHg%2Flh1dM4AjA2%2FdJSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKcq3tkSAmTJvKKEKtwDgGzy8OlMUm2wZRQ9jajivjgfIInSQlcMnTrIZ5FxSi6CtuwDwcSTTAHXIyDpUS2v2xdnaSjRO%2BGkidl6NGa5V%2BvzvZwung19kO2yjJFP6DXBtTwAWRttk7p%2FSXqjTn%2Fdf82Adp2pBDLxT1KOjfO3HqI9dxE9nkNVcTR%2FaGZ40vqmJApCEolTwNxu9Q%2FvQpuvz21gScpUq3qzm%2Bq7gLjvg%2FZlTFW7he2kZdfWUx6xFj9gvSsfi8d9WSN57GDpgdD%2FPBZgjIRertj2%2BIQpcd8L0go%2FHdjJw3lIlMnFFF4K1723HfnIrAQT7LBvLtXTcw4nPLSzDGGtTe0gmA4bUD4fmvr4iLNbztc2heOLk9G2CJgfQaNFj5JIvPnjINyPJjyfIG89Yd%2FdcTsYqUS%2FRdV8fJ%2BbavkxISSlLb5hEBwv13HLF9QXb3Bgj%2BEw6oQGLQ4JK7cGXXF3dj3Bx0Bwd09I%2Bs73Cz4ROUWaSucv2baBSB0LrJP5PaPefRUAd1d1pi9oC72IWKQvVkuZzeQcn30BbOjjZOxbu%2FpmRhGq0z0N5rglHBVnosuh5wOX2u402QTutnOH5mdQBk0G7LqahFK0jibqwcmSqSMOx3o3rbkSmZUEstW1WlMhZ1vC5n8wsanBwQY6pgHhiU%2FBkBRAsWdeEa7ZL%2Faen%2FqQC3shGxtvQgPXJ5gUoWQfm%2Fqjv%2FvgGq0%2Frpz0tTnLUmQKgwiI9NLwj9iLpaI6GLsN%2BEJXQCU1QFVhwtcvEBmL2ot6DQWVj1VnObt8hl8EwMb0Y9wzMMJiOhyhSiuZ3OIkYvuAuq3swr6LT6KdEDMZfaQFFwe0hz8%2FlGAu9hV%2BDmcsrWdERxEgYK0q45Eb25cpPapD&X-Amz-Signature=85e09ccc158be85632712f789e9aea335bfe83d52aa87865e25c5b26dfdc53a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMWKNFW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCijMurTfQy0IQnRazT%2B%2FIRyGiH8mIZxbd0Wj8h64YJ0AIgL5Zuk%2FmNXYEwR4LN%2BYMA5Ac9BkozQnDhCcRNa59%2Fq%2FgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyDstcT56swkczqjCrcA0%2BDPPhV1oKvvhgaaMorDMLrzsJHq4XR4P9X%2FEF%2BmukYNVLdpIPVq74Y3FO67basMsRa7PlRr8RNHGwWy2FFyxpvV%2FRYclah2lF%2FZGDD9CjlQ2t4UZcFqajhk2uY8IlNMr%2Bs1zW7nOqcEKsS69RoEYmm5GAevRPxrX5qvYH20pXRqj11BTQ5WSvxHEhGPZG0SSuHDiACtejTfcFr4amyWSJuAKybhEgVmFld0K1Kt6dMHtNfp2qET0JJt5NMdP0fDna5vGUz9k%2Fbp4LOCmLroJtrMSnpkNnak2qIwahEWEuzfnrJkVE9bMBY3Lx1czL2j3Vxq6sv%2B%2B3H9XAo%2BbGvTSVju0a6VKnj0W84j5%2BtQPeuGYS2k%2B8QZbJZjlT3SKqDHgJUAFZ8tLt9Q5OAgLMo26NkVK1WnaWqBR3%2B7c64xZ2D5y%2F5cbsc6VyH7nfUkqpysr6Hu2HUQoC%2Bq0HSPtvWOSnRJChmhB8oaMszSX5jEU1yj8ZAXla8Mgl%2Fo%2FhjzOCqEj8%2FH6x1mE0VcoSkRM81i7U6QAq%2Bz7cjO1IAyP7t1CiV4ykPzjGq1lNQtFdZjz8H%2Bizr%2FBFa9Msp%2BI7r9PHIHYipZNMkX5pGT65zTVU2vgjY%2FoEQ0kq6LyaiGD6%2BMJOqwcEGOqUB%2FJPADz%2FOOX%2FP6CdKOj9vx07kalnIyeaju914Hqik9UwxVnhYOKyDzS%2FblebQhHHngd6TOkrh%2BdxzlGEmxqJaeV9JpPkACtbyPQDCYQnxEHoo84MkBO21dw3xamb7nlPDyo5qpN1gCBHdPONmBogMV4bCC4W8ukCJ1uoTOrnB%2BuNF%2FBJ1BXnZg2Tmp30yulMwiF4bxzAVJ%2BSr5g3N%2F3YZTAN5HbgE&X-Amz-Signature=90f1c39133f87274b4f67be8176481a18f5a13a49d9561c387a9b726965bba44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
