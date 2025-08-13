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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674YCZOGA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8cD0%2BpQim47bAhPIm4bNE1q8Szyc6oKs3WdXPabJOEAiEA%2F8w4UjGPc8KjFm2j8ZinBodsqXq9ma1L2JalM%2F3dZhgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDOJOayCylhzWlOyPWCrcA%2BikJLy%2FFISVd1mTpU4EUqIbAo9LbleVyFB7xv%2BInCLkeewNfcHuOewZoiR1aVg7jFb%2FxPrErQPq8XhLGyUC2zBlY5SWdjUQpABkQ8ZCl2yyu9J0VNnU4YtPUivdW3BHQTwshRQtfJTlj5K8cAA6LzNj7A2uyidxMSUkRcXCmACZgNzqxLMa85OEHES0bQhl4YNXhvsZ0LZHW6Tha%2BE3p1Mowe%2BYUhMcFcIOAdfjb0%2FmH7klT1DoozNKjohWs1YQOapWlg9bF8EU1h2fjaUu3DL0SI%2FlzBjyQl3C5qWT8WWZzPnGAIyOf64T2k8WUAqBki%2F3dXjNzu2wnE%2BRyzDI%2B0tOChIOKrj5JRkAWT4AK1wGEsFs2biYqos8B7tMnvgvY%2FZYEvKx4M7qpQx6SDugoV4WoeavmRHcZpLjz%2BNA8Fg78enciBqtYM%2FkCE5e4z4yYdaIzkL5BQ%2BTnbSHVjC7GT5uAu4XTZdVdi%2BOtT4BPll52wIvVC0n%2FbcHD3GowM66ATeoCdMZzlxdmgFrFjIp5x6crLaqEBAl8l2WP75byqxz0DaKmvVkSL8%2BcwIjoqhj2FKseW%2B3brincv7fUfwIeAmEsf377xrTJWdgOHxvRr9D4YSOKx1oFBT%2FNQPEMNHq88QGOqUBw%2F7T%2Bxc8KE4zTq8MmtlFw9%2BIxYSGGTHTjWY0J3y9lie1oRgwt773dLe%2Fiuc%2B47HxodwBKepywZzfhrYLx7mIU6%2B4dnLQryEiS51HU5shTte%2BhuO1SSMNJjerNduefg82ojVHFCwOEbYSmOHMmm9qE6vNqNK03qIfeflNkpZvHRng6dZWMlrZB2OPlFUrPupMiuD8uWfntSE5iZg6Vz1YQ24ceTSM&X-Amz-Signature=7d1a4ae6b6acbc410519671a86bed3de2f36a1e61cc18f7aa5b139f8de93fb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFTVUOT3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEq07Jq0MKvHTYOo72PQYKqU3hMkaTwvVx6ZFhZz%2BT%2BqAiANnIQozCxVAXUsEk1yC7FTPM4mu9%2BziLqy8syvI%2BAVoir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMq%2BGftPi7TXRqUTe3KtwDDXLSHKLvn9fpqU8q1potSdZOaosdaDjET94japFOvvDpZyF4aFozB22bbH7mla0YQK9Dv9QJ5uWayU7y4RUEBHEKFmj40YZx%2BtxuG0O3x3Ovh7g%2B8XErNitgpKxfLexl3zIm0q2ZljAfrOdLNmoL%2Fh%2BfpUjURJ40BcwNdU%2BaVt6qqFpww6soHTG2TgMq%2FmO%2B7dPrR8smrxqH3LufAwhOjtnS%2FPpP0kCx58NG85pHzBxcLSvbtzfKIo68x2KD7QOUbiJuTLy2zKpAq%2F33Tz8ZgOKFlJvOPRysN2k7f4L2juXCdemhG7flBbJMAD52xFAQt1XzHOzzXDog4pS0ROi0P27yyFv8uHzGVZyWvZevrN92LEyFsoa46o1UZXdDPX83uYCUL4qp%2BvUdyvYICjFB1wp7A%2B0LlzjdPlJpiWalvNfa%2B6ZJLQb6AFxXlnUS%2Fr78eY8dCaVRftSL3r6MytEKT6J8c7ZM9uh6SkR9DxEOSw4yA6ucFXAfREQ5K6cS1fZBL5OiEGoj2IUWQaC%2BfTuWTRx6bGuDv5XZVQKMZvzssM2ZMpoVrCXtvG7%2F5D68%2Fks4KfQo0jUQkCgjQPpcILZPVkXapHleee1VVOXYgDO9AUglwy5Ni0SFIDfYeNQwx%2BrzxAY6pgEhy0V7YGswT8RJ56VHqG05p58b2BTtm2NJiB8gunVEfy1Vipxwr7Nng0ZGgVFuv2FcJ0h7cnP7GURYJ7xwC7my04eAuIPdpJw4aFBi8fOGlSuiu1rCQV6WB8MpJYrdfqg036OTPTUaTsQWsaODvNJp%2BmG9GMuiNaQf0jXlLCqgARRhMZ5qHi0Zaqola9hxBa%2BTGnxtDerd9yr9vlZFgxMsyCugljZV&X-Amz-Signature=f3615c4cf52e3a81bed5e0fbd8f1637086e7bab126dda674fc854871186f7766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
