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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJDRUHX%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAymWH3ezUauaQmwDHCQESs2cJT0WeUkU22%2F78MU6L05AiBeFk87vsQOk42bVKgGqKFDDMeDKTCuS7h8kU592S75dSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ZuTKu6B6V2CAvkxKtwD7usN900ugTEHJr1ZUszomEUIm%2Bfmmc0QNF8wrohSQkobd6mVwCAyOrqsDLfRxQ7Qi75NGAd7dMgCWnc3wuACoUDtVuhqqMCM%2BBB8%2B6wOS%2BCxjXG5hzPuosJ5S%2F%2F4pJV2vO9%2BKphThTBW2rqEYewHaAZhTno5sPxS0YI6rKoJuWemSPKkDJQdxDJHmT%2F0p7ek%2FeCbFOeZ0bFwam3ufFqJvC%2BaLMwkiOEILBT4AGYMkc6Lvs%2FKtSzEzGBxqC%2BrG3cSP5BXvJRdO7cNsix2bfdpgK3Qstzy5tpGIv5nZTYslQP96sHeI4NxYp2KvxrN4QeY1JTkgvZpQlOPHpcHzNxDtb0bi5rBgBhy8wIHfa%2FuAAtPDCsjh41jIXmp9DbELC8wJn1RX%2Ft9ergsIpfoBhDzK0YU5oJqSCvuoFdkSKeseBIpK8gKfGS0G4uN3ztGkg2nnK23ZtWd18H7WT%2FB7H5nmFi2YWX4mNsrNwJmWJd3NTk3wEHr4I%2FNBjCfZxlTY6EGFRuz1z2gFMKjE%2FFcCQ5YyS%2BCwXQaduHQC7LfiVPlTH26hYTz1K1TIWwN8LBqIJWfMmN9H9QS1ZE9CO8Pct1lKDTKSh%2BAf53eMZ5Ld%2FIVkukuzhCxfS77z4ryVAIwmtDowwY6pgGuSjJ3E10G9UUTy3OEneeoL6DdgpjQVKaMXewZ0isSkdzZQ1m7HKTLDgQ9qHpFHODPiKPlrqhTiLPOHvh9IVwZSxSKLKxErbJiLjpE23FQImyF0JknxJ37AhnTspK7u7kAuNxyI0nv5qP0kiflgk5IZqUEnlKzMkbYv5%2FxwwVyY9RxSYVTsBfXmXSoxjzEbj6awCqaN7dG5kMYNzlBTFdwcEcNeigD&X-Amz-Signature=57ab004c4886d6fd32b6e1ee182d715928105de368df019c8a0240f143e51cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PUMUW6T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbTeCTCPs9qJPwdNoQs1IoczeC2zZLck3%2BGE%2FCP9unqwIhAJJxr7BrD51ZvgMNVnLhdYz44vM1nMHUSzb5nZar%2FSqKKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ6OlKCW1P6KYXFk8q3APVLv7OYM%2F3CzUrSyVDi2WYBVlmyMft9ih5X7R4Q%2BcufpcVeyLp4egX5zNE6X8OTqvY2sVRihPNnjjJENGv0hdgaQz4OB4p260igg%2B%2FQrLsTjeJZ7hJpEP7iTRoskJ%2B9Uy2mJddydtWwA1zHXuRC8Z3Lh05rWM%2F5j2jAY4KK%2BaTZzLC8KxIeq4KcKQJ3iQy9STBRqk4VEWxL%2B2t8RU%2Bf4g77ZPBqTf0phySFKoWul8tggazFZihTuDEO2yP%2F6x%2BfoY%2BgCxAGfidp7ApzOq25KGZjSoL9kh6yTuX8sm%2Fuk2nAiE9Nqrrwicbbcl3uvXBddxpdheDHa4zQzAzboENX0jj7233d5k9qNRctfMHga1YWONIxnT948ohFSO15ze0jzeucGgFKbVYUBfxzrw1aQV81FYeAjj9aNa370KXmPRntiKol%2FZ78MYU%2BnCUAnECldtSyzeGBg5hOhJ3rS%2BWMVR21BUdk5dW3ZBzqtoSGMJU8rgMEQWdZPZrgUkFs88sf3kRn10F52U0YJUU7K%2FoO6aDegeB5fslfKTgAdYiW0g0rHBSWfn9kVKgHg2cNGC6sJe7Jv4QwzJ1ekeTqqXTB3FxNLjqbWIDJNCSepwWGEoFwSRKF%2BTtKBTFU%2FdUHTCm0OjDBjqkAV5Kvp10y2HETNwLvHr1oan5OKPv%2BJnmRgoHYUzjoteYJzmrnh7fTy%2Fw6lYaMPSpv1X1psusZq%2FD9gDcx8e5KWawXKqkRQHGeBoQehYYJm58M5Vt2ARqaCBsvcoQu9%2Fu3vUaGwsxNWPuV14Fmzn2TKNrLPLyNtAhlWggyMk2ezZagwwv4UoDpN0NosX9OIb2diEw26%2FWyHUaR3QfGUVpNReXM4KQ&X-Amz-Signature=fe7e3de68250afd46e4cf448798999dd4e9562476583f05e0748c6c28c34eab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
