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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYCS5F7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkmt4CXhp6nwtLuCRm7S5MEeXOB8KN%2BpXeZgdM7200TQIhANXxsw%2FtJz2ZpJYmvPe3InLPQwQ9R0bdx87vYehWv66MKv8DCGwQABoMNjM3NDIzMTgzODA1Igwq%2Fhn0chLpQVisZIMq3ANIBB5VEN%2FAYt5tJnp2Zr3G6Z%2BgMnk7mb2Y96zIv2Un%2B31DRH%2Bw6hBkCWZI79plvBHeG%2BY7pSzwh6F7XU7QgNuNe5vtNX2JhgIaNOul5%2Bziy5WPI78CMzsHXfV5E9moHDKb0S1hcUY4g0piWs4szh6D0uqBjYvFotJUmtNKAu8QLvlN8k9WpX1o93rZwIjdinB81NQhNfUtmJQuaxSbOalatrxMXJ18PTjigzz542cpC5VlSLKlJTIW%2FJ5yADB0ApHb9mFaKkqMdLVrpW241mnAQ9Disp9BrgAoHsAchBYq6Ldc%2FpYMYF41wcqAdW77ylanuh5rrnF7KyC0Qnkv5O5WPKgbKiJRMnc7DGdsHpKJrfU8rFFbMO76R9jVUMLTLtBuq1daVLTjaxkF04mlsq7IS4IeghE5qPatEm5qAfNi%2BXzpXvaqGDMyGf%2BjgUVotkdKa6RBldefBqLIp0S%2FiOHiDvfdsFG1C%2Bm5JSRjA96R71SlDwTFmHTIASfICJ27py7NJ7Uc%2B%2BZmaFFaq1zfJTiCUEqR9%2BODANaXWu1vAd1C6HCDVvXrUVorZMpoV0ybIJTaUwmhOsXuS%2FyriIlv7L%2BPwj2vH%2B1hjA3d6Kh2rLabPQ4Zvmjkbr9c%2FFObSTChwvDABjqkAQ2mwaI%2Bo9oVnhy1S%2FqMUk3AGfPtjtnc4UwdCLTc07rf%2BdfkhmrM7BOQpELjtNLuIDAvEB1I9FIwoXVK2vFq5pkuZi1uPXcNfQbDStDRC3AaH6GBcTmKON18NsnrNu3P84uSbjULbfWvYQHtGmmRw7%2BTqRUJdQFYWrmDQ2XnHbGPSkpgdHZ5%2BKxnJ3fSrvL%2BRG1877myflw9kZ%2FfZrw90dX8M4gq&X-Amz-Signature=680b21fced09449a8cd8ecf7c0dae00ea1c0ddc7fb642d792fb6d71e0895908c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXWFQVC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7Dsbx7jtbFGCw3dWVyWRfuU2TLBU7zjtSwlkDt2VQ3gIhAMT6FHlWdNFcaCqH2dbZVdLbKxdnCy0jp2kWz5tPL2P2Kv8DCGwQABoMNjM3NDIzMTgzODA1Igz1P%2FHJoWm6AeBmhdgq3APnGjSVj%2BMhuwx36lzS1nh7NGyYy4sq3r8WrT7Klvcqcrxyh9NupBOPylelgDkwusVJOjL5ui%2BWSlbJQ00RmstJKJRakn9D70x2WQ5Yy9qlEYhBBUBLMoRNYe30%2FpwzYGKrJO0dP2YjGVJ74r1wUAqMW6yTMtmIp1RacIPfA2Qt%2Bpdwxq7xFDcowuNulNCXe1tb8M2YhX7lAIoe%2Fi2gctMnvylQiGk%2FONx9L7LAEHtPrdHF7BNgX8pGLPWd6NKuSZMP7pSyBcnI1INfZX0zAX6HrI%2BepLzlaTiDMXXQlTTDO2eivKlTUFwRbftQLoG8T%2FjGir%2FFOJU6h3BkHFHnJJzLXBd%2F1Ox5ZSOyeL0Ow3V%2FyPT7s0ARw7AOVsBzx1T9JhhrlLDzuemK9XCFrmBk1nNcFbGdkdTx0cKLqKsT41XQ680qz7BIzMSdccFr24IFfOIoiS8o0V731phYuOpoCCrhc1FuJagUgBVeieS9ilmPNxifbrj0MrPkq%2BDRSqalDAU9%2FAYFV0JT4Aj6L43lfYg2dBJ3K03b8YyHp0WA0M%2BLpmFewvAgCGrPfRo5zMSRNabBEd7fkFTL8PMcS1ez%2FT9GRFuv8YTLUe9VkHU6Gbca%2BrpegIpKSr3NCh7LmTCWwvDABjqkAW3OzrJkHFjX0zDCyVOLiVqbVLn7b4ACouNTBzfa1eZpsyzCP0LHDM%2Bx8%2BrqIx8lD45peRXV45YcSKFtTGpIwBK%2FEx8%2F2N07X8rucJLwKZS5A%2FQibNztuwEoS%2BdmLS2wxxSw9DL4v5mNlgW6bAuqLcDgmWjAjqqQlq9vnPEZVl7JFJisPV3Gj5ej0sNR1Mw4f0d89UCaK%2F6x4APv1DJZMonpnnJp&X-Amz-Signature=b3a5e134546cc9d426d8b923a3d25fa7728345a7b54f1faac38671423ad50df7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
