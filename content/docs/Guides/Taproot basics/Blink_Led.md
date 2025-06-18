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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVOHE2YL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0xP1HbMVjaNTJsdhmSxHM4ryG%2BbjUb62ZKWKmDMnmHAiEAovJ5gHlRnHukMeK0NrjJfikV4NYNDF5G2L5kfZ8fJSIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHa12MXScAuoiGLZzSrcA2oZgz4uW2U%2BBqOKT65N%2F4U8FGygLvhamqvw4SPL0zFB8RpygIq07vQs7tCv3KcAO%2FCJ6UsAMLjVkll9Zwqo6FE9YPtFbkeQVPf1dbp4ZW0of8F99J0xqS5%2BRV4Sku9VE%2BUxcEsnCIXMs5qXO5KkVanx4sLLaRdMS9CYtiDHCTxEzT0bcCDkWq4%2BE3Q%2FN3msgx%2Bnp1uHZqDoHuLniVDiEfqwQoKHU%2BQO7HTcL9GHpNyxriYv%2Bt3nxLW5y9wCuwtnp1AaQFrBXpiupQLbMdJR9aiWp29CEgP0tNHUuDSc9XOsIrfHlxksoj6BDookw4dDEeN8%2BtyEo%2BofJtKZWa3fPDoU5EaIAIHCE7j%2BcGkZn8OnMencbWwHg%2F429XNIpIqbvPPVp1yCKiPfJicl8Jzx3qZWC8CsXGxBsQiHvG0aXqVzfv08ZFK%2BuuCcWJGnF07Sf25roUA7UAYzvg%2Bdox4SxhK2niZSD7WU0MIwk0QZCX%2BfpELdmOzv5UllhZUO9fJPPeR1%2FNZ4QU2IQH%2BuXfUOX5P8bMva%2BEKHmZB%2B5z3c4h4LgJ99%2B7oKnNCGnDvMTPl4bpEpItPXoQjDCWB54CwZqko%2BGKQssl3V6LRpiRzQGmYyBjyX3NmGQWqUDaW3ML37y8IGOqUBQVdCw6gloiB3JO8%2Br8r2%2B9gDZTcqhYMdF3Y%2BiKlG87SDZs2faxVQMW8RAcK9rElbsVqT7JF7%2Fxf%2BgsFf4UHLXwHJtN4CR946zd9U9jbnrVFtit1ty1u%2BfBJheBShOQv44ZGj0vKIZ477MtTlwgrxkLX2cs5E1b32HZwwSdenXGXp0RMUVWXBr%2BHIF1C02DkjHXQgC2NrYvZ8q%2BSl3tTl2FvFJAYO&X-Amz-Signature=d407f0cf39a792db21588941bf44be3b24b6d06c870e32550f259182f5d8966d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCW2UML%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bs0qUfpAt02B5JuyyyUpquJFOBXEtAxVirtpCsSlX5AIgd25h55YKIgKAn5zbfR9P%2FjN1w0d1%2B7qAZwRYO6lkyz4qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg3A7m5Ls6tK%2B5gByrcAwAS2d0gFkTWQySzdRKFKr%2FPzw6sRz5nlo4cigNsexR18U%2Bokf9%2FNre90%2Ft%2BGDHJ6LjWyYrsnn5eDCtNTUyw2aqIGLLyd1HZlQ%2BnxcyWC6oirRq%2BsB3rGgYC1ZXIOARe1LVMdWrKqLbcqIjAkHR9c1YS1Akk5IS1DExFCsddnOEv%2B6i4aa9qZWCI9zoN%2Bt0fN8DTyQ%2FE%2Fhf1YbBVoT5VbtFn4Il1P%2FTmMlOqgQiZnNTRXCLMtcBDPln%2F6lhisL66d1A5aJ2DLLprSf%2B6gWb1K1Fiq7uwa87fhE4f%2Fy3EwvdcIyFvJY3PjDdNMIq73aJ9sfnp5xHs7GAoaGFrzR4eOReNJOweeb8ddSkrgWsZSeibvuM%2BnK5VmGBrSLTzM0gk6k4j9yTRAlrg27X6luGbkdv3%2F8UEgTtuFa9o15Hs0%2BtrXrkHTM5eLKqhWBPtfo96swubrJsX4ABMkebMEfXSJBBzjaH0ZLfuiHZbq19Sri0F6l0rDiHf%2BYvjHZ3kRtgieCokX5zwxrx0qs4PZdLGOUeuu7QOH2%2B6o7beA2JWahI4eC9nHmtEpw6aaQ5aEq3E2k9HUWFA%2BnO9KofTVEK0I7GrUl7SMu8RrC%2BZHLPtNVoPeW%2FCe0aLTwhTmuoFMKb7y8IGOqUB%2BWObw5WwWG1RdQN2Wb6Ij5HLJnMOQAInxAZvKN88qRQHAKFF75Ip1ujxmXKdszqDVGpMkzI8s0lRIy5OlRcL0ukcHSg6luacuX1WqvkzE4mmK62OPt5G7jnVmCVGWF6MPjinoLj1A6917XvauIk%2B9xoKNQLR1rm66dAW%2FwC2e8Caj7CDYffpJ2BmWjqOeLiQP1w0ZKGWuAUrchuXmuaeTU177jAH&X-Amz-Signature=d60db43061a448b04defff0b74803c8e4f1a99a42c5555b75721f4fded15317f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
