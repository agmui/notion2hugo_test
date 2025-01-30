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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FE7CDLR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAp1LICzWnivLABD10P652jdlis5GK8IEpGpQTb3ngSgAiBGFzK6P3pssFDGcM8Ck%2FCWvGo%2Bv06NgzRjbBApidESFiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wROaS%2FdX8K5A7FyKtwD%2FrF%2FB0HnnXSSdyxcOijALVRJa3jkXpdUK6zOG6cRo3%2F2AF07jbAqyBsHhuRzo%2FaF4EfGS8rdeenXgpMeBb3lmiks5ySRr31oV7MScVwVSiDpKhfIh2AX%2FNuDdK2j%2FPdPE7OL2ze80nPHtTa7FdhTkiGAgzaBP6abZJDVjVsZRYiEc1OjF%2BoFHNj5jLYhLUvH2SgmPxx6Y%2FJSwYGRqLDvhdpsGCs6uB%2B9LaiZZpGf%2FbV6LldLz7TTVZW%2FO61JarqBLc%2F08XV8kk%2Fovkkc7Ba4dL5D1kWoSImeIxd4wnoF6CIkP58lyFYv19Trs2aMFb2tECUhRLSDM%2FLwTbLmeeyuWkthF3Z7EHKMvUaqx9a7v18pNfuMZCC1dOgQ32zsS1Occ03Brp8uFl1dp7NsifwbZsIVyC5a933VjcvsCJAwv1N9CueFo23oqsv9u3et%2BPGvb4dhyQSf7yaApWh%2BQAyjV3GGM4Jb2bGtvCWPYqw0ByVMY4f%2FnIpAGfTQO7Y%2FVO9Ok6blMN6HCfVw3gRuLzWCHGdx4zoEhBEQjGG7c13t%2BH%2BhhMVqvmiSl7Go6Dv82ZqM%2BOZUG9Bc3ly4jlKj1NnCILzvU%2BOqeor5BUYFNliQGaNGYq4shaMffr21uokw36PsvAY6pgE6T0MaKBNrgqZEhGgaF2czzxq4y4JZ52HgQEfWllBwkAkousyzGBpelKyoG%2BqFEe8hxQrJZGzcKH6djK0PlvttoDjn0iStzQ1ylhlgE3IHdpHkAFDXkEpyr%2B9zKDlyDf4PsrjqEkoudSaHCntxYprmMhONQVQISZRu05Cdg8nGkwjJluvCQTqFzvWJq%2BahIO%2F196XlpIUxyhzzZxkzpd3nKKY23G%2Fv&X-Amz-Signature=0ed952fdf9bc6601c157820053bce2c6652ca6a513a10c42d3a118caa9b45fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HZAKUU%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhlqeTXQ0kUDfcbwBMRr7ibtTL3Te8wZlSMi2FIOmOxAiA3Jeo3HQXvfWa7zW9uVp%2FltkX0QcYJWBFiEnP6hW3H6SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlOS3u%2BXpWmeq6PcHKtwDl9qrpqmze5fvnVWzlnxmsc5I22e6LXXyjwG9VA4NfcUADp3sqfdcW6MI7%2BgqN2dxXVsADWZyiYg%2Bm7jM%2BO8W4iahClMVm6e6jh7AioIF5ERpC903LqcACj7jbEOyyJogXTCMiQ9LyH2BgJfBwD2ZOF0OC5dXjBgplhNo8916cXewg5r9%2Bgb6XALVcD0%2FtCRqDTpM5W2PSX1BAR1CyXc3Udmi%2BYD9kEXK%2FXoDXxWZLthRefWutYrHeTmQ6uhp4d%2BgoKQw5FllDIuhNBFdPfhm7H6UB6%2F7a3et0JM%2BP27CjKy7rtByn8ZyFLIJ63vifr3r3VqZZhs5mhp4W9BvF%2FGhPGa3Gzjk9L0BAPw6fZZ%2FUWmPznow6QN2wfO%2Bd6koVKCkWYsnsWsikrKlK%2FdDTsK3zGvGKRp6tccKic3xWucJGhVLpDZ1e9oyHm4OKdT9ZHOvyPOJ%2F9mwrxfWRAZG1N7P%2Fs4j%2Bc63shvo6uBQbRYJWK8LCb6lBpn7NqR3iuwTn8FdKGzWdZAi%2B0AHUuemiXUDe%2BrRJc3%2FRdtvX9NaXj4zVXkqS0Dxai3%2Fy5w%2FHBoohPKmmN%2FkNUtEPo9FYNtLppWTDiOigkGUHsJLPy5rR5ukGJFaK6JbM2ROAa2vrfYw1aPsvAY6pgFBlGN2ZUecLsl8OmZTJZ6S7B6MdCFmLfkd2l5qjtL8ia3nNZvLgMX5pwfnG%2B2ZGynAhKYeFn7A2FV3Ql8VEh5Hw38fZnEQwxXf4kle%2BZHls6IfHeNj4y880h%2BqBw%2BDc8v5v1wTUxBeGK3YRW%2FnighMhh%2FT6BraMqbKQMv74dN8hxfmelF9tv2%2BGm%2Fz0vSc%2FlRNtSj6xkE%2Buf2u7ub5DCSs56X%2BxgZa&X-Amz-Signature=cec3f15739f88b50410aed4aed0e4fe0591d742fb3ac807c4f1a77c4b3ef9a61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
