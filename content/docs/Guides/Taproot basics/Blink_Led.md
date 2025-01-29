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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVKSPAS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeloOPZq03MLVIs2%2BHGWvYuetBH69ZFpdvoRWM%2BWLjnAIhANd%2Bi7TecoDnczmtfcB%2BDWvJmW7jXuIsr8M96jr6R2i1KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BT5cVqvWCGAywwj8q3APf8Cy%2Fryl1qiDdHdULzY2NJfQMff%2BxDyGsc04Naa5RVWcbb5704XcEgUVKqJxZlomsQ3zspaNLvm5b6R%2Bb6EySrz%2FHd79363vUPsmbl%2BRq8%2FWF77FNVHTWc0clWSTUxWGCz7wpGCdS8bUs%2Bt4YmDOmjkacH6obFAqLBBY4RI%2FmvXFGV6SIfEzpGePNlTGO32sthVWPkpdK6qyPd8Idy9xHpAb6Et32bX8LsngbqXhq4eeStquy8Yq%2BvmBOSs4rWhSiZYFF6OzklrJTJQNAE4i7fGbKkQRODgdY2ViHXQnMUeA50fJqI09O5%2B8xDNNt9xP%2B%2FUuQ29LL3nBx2vT%2F5pnYywe1%2B3Cr%2FYsm3Ww8lA%2FlBKsSzA%2BArxbqIw78hza3ZRVpr5yl18SBXPxqEv86lHd4A3LD%2FTDyU%2FmX82L29EiOFDE1c2mlKO2pvm6uCEpsBPHvfwIUitWIVcEOFsUSu3mu9XgxQOXNyg30LzanW7xUMBhKgNYy4lsHPF0dL3SRtg0Un19IfzLpp7XQaB9ljKn9GxzRyyeQzJmhVq6RTl3qlsQc02ekPlzj%2FyylhReia4WIgnMa3sSUOP63fOkxJGVUPKo0jTDuFJMKVj%2FsUi3qWf2Rz8gUqM1quw%2B8NjDm5%2Bi8BjqkAZs5%2B7ZzwCEMSuLoWYwzf7agiCLusVN7vKksUkhjq21O%2B3r%2B2yqJkyjvLQyamzoHq9hXapd%2BJjfzA2xfnARGVpYYLhMJ0PwwzBfvd18QzkxcIvjf%2B7ELS7QE3jEL4UqF4Wby5DWHpFHhcchnkEK5z6xsnMlJ6rvjOJh8RhbqcBIHwxgr0ytH2w1JjedPBtJWMifjTuoHcxRRTdrMkWufE%2BzPj73l&X-Amz-Signature=47d6aef9e87e8bcfb7af85c0eac8ae3fa1269db34894a27fe69c1a546b235c03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UVMZLY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdc5VVjWio8CpsqHINHsH6rOW%2Fb0ysWr3N1wRsPOokyAiBSWtYTrt6WU5hZ7Q6QzlfeCMZB7IS2PtKja%2B8Vlt5R6iqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhGyNrvDkd8Jk2NbKtwDFfZnFU2nKKQUTqW5gO2iqx2mR0Dcawq4nGE5STAGbZIKlKxaWCgPbMFAkCgVksX9sjNatGTS%2FeOvlDHP1m9AG%2FMfxYYWbZjDL5LGOYWNvIHObwBSnePxDVLGF%2Bqaxxrtaek9Ui%2F9cqtJQVQ9Qfw3maCfudY1A5LZEaeILT%2FARzGca0z4SZPqV9KuADTSpQDsDyIA%2Fs30pHrvwsJkzIBEYMqH8juY7tdoScOwMGzHxGUhP8jRvnVehiKV5Aje7VOPMcu3N8Vjhpc%2FYBf2gsCbNjaHEF4fbBxzHeHIUTXjqFTKrkMj88TjQ%2B1AGu1AW16RzbgMWN9ap6oKZX%2BL12gn14GrCDODqlV0%2BV%2FdcEOwTroyNukaXf7gjh6oPQvswlnwKzd7GYdBXo6c2dWGXPBWZCfkbicXuuTXAH5Zc%2FpIMyTqK5t66ApkczykseuHmOHVG7j0r9KUflr1VYgIORroEUXZ%2BQgaY8avI%2FUm44W%2B0reT5a6pbdw82kGO7cKLQus%2BR54fJh9ueP0LLYHn5wdKZHXt0QHjSHuMJUASZ6io6eBZPr%2F%2BttFp%2BzIAGw6QCUBTLaCK2E2THCvHs4hvJh%2FujFJqHNZD2jgY%2FU4NacgGFqF5oDNb1%2FmHuKNFgeow%2FufovAY6pgF%2BWufb6J9saRAMR0jm0oUaxywEfUmurYblhS059rHL7YGaVTVy95K9mS3WyFTLHIi%2FMSURA5QeWnDG7Ryj11nnDKBPiwXfnC6v%2F14nkS2U4ocAIg5NDrMztdDphCRJw10uJoGY%2Fxxxco88AP7ZXCapjN1JyzJLXqZsegSrt9J3QtPxii06iYMhNqyH2wKtIuZPm7FtyAWoblQQHG3ugeuoUgZzx6t8&X-Amz-Signature=3005dd30029570c2dbf5d174c02999f7fcaa4e2d20f66bdccf8d8c28b5ea5bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
