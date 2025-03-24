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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD3DVS6C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoTEzp3IbTvef2xsBhUdFRavYmVXyNbzXYwWLPgRNzdQIgKm%2FmXycH8X%2BkyqHJugSufBBoBDLI4V1Xh%2FqUNAp9wpAqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZPiFBiUAchkx0CkCrcA%2FNfpcQA1qAxpoo4buW9Il85DJxJs1c%2BSj4r50A9tL50NQjm4td6k9Y1re0ngfwe%2F911YXNch3QZvxIQwFLLdlK2ecJqCcxQWwssfYLlk2F%2FI%2F2cf%2F2E42HlEqLBEd6BNOm0Z4gB4DCVhQ1zim6RR%2FF1IrdapZo015fKFqFDH8N%2FputtNrCMhkBqOO4e%2BeuvJLbraU7gNOyKW9gJDPmx45L2Q%2BV6iQzQF15lorVKcjuJp3e1fVzFukWV0nVWwYDZl8njEgvfVtwtrXex9%2B4y8GECrQ0e3aGgVMWjI80msCPjuiUxOkwSdTVInHxOXoQsn7iyiFlcJoE5v7qewHfy9w3ExMjw5pk8JlXMmxbJmsl6yGCxl5ck4mtBReeub6Yxwtx35AXHJUuz265B%2Bz%2BqIOWUl2rFunJ1Q85J2c3WxWI2nxo9uI0qMJs%2FZ71OlvVXLtludP9lD%2Ft1xVXbelkRkLJnC%2FLKS8EXtGLUeCqk%2Ft6bFmguujQwmhOmx8yAWKu%2Fv7jSduiBSkUliYYxuqWjAWWbGc%2BJ7NVZMvfnHzYGAXK1MfeWVOhjBBsIWjtE9A4iu6t4mhfftZmbyRgIx4nAjBVk3bBLUon1Opg%2FcYceQ3Dqi2B8Cb1uzga5cPLKMMuxgr8GOqUBruI%2Fs0SOVF0ROrOaVgPHMGhl%2BSDRFTh1D5yEX5YWaZSuvw9gncgZYUZ1xgARq2wZyMjeJEvg72oaoPWAp5RofO4wTBjCNzIlBriIurqdN5g8mFSFV7EsMj%2Bh7RQyM7xdAq6FNp3i%2FjnVkl%2F8efXXFAsVajJFhRVoB09UjzCi%2Bz8Crf9DXjGLKyHMSTjNJAtMVCm%2BY0xTXjk64BpaLY7%2FKhXI5MCX&X-Amz-Signature=c321e139011afc076f0e8ba4956d6d438a514708427a28bb7f8e3000d914587d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVLLVEKX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHf9Jh7AxP1389CN6cq%2FQCKpL7RDBPwt1o1s5kMkWbKQIgROSxX4oTLSKRp7FyARdMYhWQg%2BjNNQ3y0o%2BnDAHVYtkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTuxAjPeuffNVaDJSrcA5tG0B3cvk8EDH3Mx%2BuB5ABYfjfzQJxJuXytBCulXKDwHl7aaqXlfnRTYScd%2F17LqHK7IhbkRbFMRWm4jrMtEi7Aba9N%2FxaMfZKiIoHbsw7FKtXrEtzh38gy7o5C6x8NxejyS02W1bEMQxY14Gg7%2BRyLchd6sY9lYVuN7n1nU%2B86ZXKgYKwNB6pg3L7GxKHeNCD8p9xHT%2BieNbvpVSTKPPoKFHZrsJWoZv%2Fftjf3VK67YcmVWGR8suVtcQBB0X7%2FC4UAjwv6%2BXyL1FZXE6b5msw4zJxMMWurBwzSf%2BRjUeSnG3E49%2FpKziU%2BRa6q5%2B%2BemUP8whcVctC5O5j1smK2TY%2F013pNBn2EzT3H%2FgAtKEjJOi1nEJASEERmCanzwB2SSwo1FXUEI83LVZikgI8tQkdnG3Cv5OOb%2BkPyunU4U9413ppXokmlXsBRjmryCICcX0kvH%2FINFcFs2zNkEgqw5RBfWA2ywn1v3CyeRzHc7uYT6%2FbXiK2u3Bh2INlO%2FH5grRDOMr04VrljasiDHF184miGyh%2BaWBLNwUoEgHX2NSaisHbPRcpabyCbaZ%2B6ZqyOdn9LMZSgRE3eerox8zouxcJLKDFNGPfkHdhMcwCiyDMT6SvUeShi8TSOqPYbMIuwgr8GOqUBJpV419f9vSFA9w7S%2BvqHEWkxIXsjXJRfX%2FM381jQcRMvMmSlZA24T5Z5uoEr2PJg03UYWvOPy88kRuDg3per0Y5V1PGkSyQIpjgS6gkwXeaKqE%2Bj5r%2BeGXLwCqQoWH3Xy%2Bgy%2FFYgRaYRwFME%2Be2psMWXiqep8NVASCAFEtBZdZRXnEYF7CH%2BqkUFqtgzvr9pAcPwKffj4Gk2wxOiSaJ2Q35nzWxs&X-Amz-Signature=ff7382acd93971385943ae68c61905450f57e1fe84a774544a07e2ed35f558d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
