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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ADBPL5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF85YMBb6isW%2FAVdEM%2Boa%2BQlEb29QH%2FySm%2BjzQxGqMRtAiEAnV9h9OlnPYZY7vWv3mQUaa9DG7ZiKmKU42B%2BQywGyRQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrZ6uxZnEbDZPSyVircA44uDzj7h%2FANWd3j0oM9kUNLe7VTMaOUVxBtNkYa19B6XzUSwtXWuF45M6K%2B%2FQbTik0MyP3iX%2FjLA6nLF7htw9U9Ql1KfPBv3BdxmfOxZ6bv0pTaXim69aFolkq9EKfL7cYZyPqUvajsysTxtwGjg8vHrTyi8Hv9Ik5R70nTn4aEo6gwq6%2BK6uBbwgEA7cXfYgOmx%2FbeOuNvcJ1TniAf9GOymAAoLt7fXknnF9r0Kwjl1vbzM3m%2FcMWX0LCeNNY4NpdUy1kQQtJQ%2Fu0bZKKucJuAGjZ7rIXZ2k7C06Pk5L1DkkCreli%2FUqzuiFzJt07xgxkbRsTZOB7bCKjVMZtM7U%2FnD3ZR5Rt2NlN0Nh01qWA3T0rM9jJgOOgpQ6v23GdVv20f60NeYy%2BocVvTlTo%2Bp%2Bkqf1IMidhUbU%2FxYM9NkuW5FYHdECnPW0P72p4xPU3XA6938eCd2Pkoin%2FR6xzEm5Wxv%2BPAid58IQjM5HmgEG2IvYWHm%2FUQ0q9PldKCYTRxCjPXL3pYiU7BhUlrorrHQ81YmJcFJUhgsEZIE5E2eZv07OQcRJWq9kbbV0VM0flDdxSnCYiqUF0hSQ3dOKBz3cUTwRLEbqa19Ql%2BEpxKWigOBABvqaw8XD%2F%2FpvKUMI2em8IGOqUBZw9jN4QXQK1F7Uo5Y8Eus%2FwyBE5aCWeXmWha7X3ydXI10QZOh7uJcexYaOh21jVvBEqD8ud%2BYitI7Wodqb4DoQioXUQ5iUQ0TO9lWmViOtee3rpWsReZw2411caW5K6X0BDVck1PrqBcZPaR7cKCrPjcTOwxXlUI4j2agAvyJGPGgCtekfZN9lu7%2F6xw8ePErXYpOfjrpBC7%2FT%2BeDnNQPM5p12cC&X-Amz-Signature=4f40c57d3fc8065d050310a14d7a689121e9e60c12a55c34a453b10b425e8de0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPTPB2QT%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBQWsG8DL%2FI3vcrZ%2BGKeMOPtNLFOBDTBeFFfrqMe2ytwIhAI4hJxCI1w1WDJ3zByL2Sia6D28e1TgkyjdASpqucw%2B2KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAWgOEvkA1xWt21Iwq3ANm5Yio29AV7kG4rdMnLH8eWI%2FK5hu0edSUSD%2FzWKl9qM7U6U65yuP7p546w6K3zu0kl7rDiFundJ0Dse43te3P51lF6T1G7bu8gcReLkcPCDG0k1HJV0%2FDQVK3NomNhxpGKh6Jh7kKX1qQMWnoYfm7VpZ8brEPGfJaLNn7FJtw3d059f89XlBgIwlsPSFtNAZbkiL70Em94CyYEk%2FmR3kYmS%2BVLqBlXEiaHl2NrI84xIlodco1D%2ByRb%2BHbOQSYH5N0ZBlH7HYG6mbd5YnY%2FFyeCRt6viqWQ0BWaKr09sjZYzXIm6IP0J20sisOIsu5TGCVjmC%2F2nf73RQYFV9sDN5oORGetGVkj%2Fb4Nak%2FUyylCxHHUZE7x6nzsoUcER31Rwdd34Q%2Bc7PsgK9vmmqGdiRIByNnKh4blvMeq7Z91oSx9C3etnCJSXU72tAGaUIY6JAtO%2F1HKX%2BP%2BCFjK2tMaRDDOkH%2BR3kVKRsgon59ucGa7B2fUkvM1lRd1%2BDMIpUUZmprHoo2YgPlj4NCuSGlpukC9Yjl%2B%2FzsdSvtQR6sfKLLwzhyURSqd456zrWm0MiZjNInfJ%2BGK8Qm%2BVf91zDS9LQMXhLIlA0dj0rk87lXk5gjFZM25Ry2nikfqZwcHDDinZvCBjqkAWw7Ljk2tsyolP%2FCtPIwaBYnsJR7m6TuWnoWeNC993XxZZ4QX91pge5xvAswuYKMRe4yX1YwKHyFei3V%2FQdn5Mr6NHP3%2BUizCHsJFPdfT0WWl8Egjqglalzhg1l2dNH%2BPQf5pFYe%2Bqo8AyvPA9CWPM6qSKf3neZb6R3MgTZAcRXEPau1hmhSw9cK%2FsNJ1CN6zgMCBApd0yZm8kNsPZg90cQ1L8Hw&X-Amz-Signature=92fe6c4dba459dcbb32ce51bd7b9166d0769ec29ca7ff4891965241c1e0e055a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
