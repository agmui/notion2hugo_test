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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFADI2Z%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHp1KRcAEN0hbUf8VqQRJAdFdH2AUGer%2FVfr3nFpgSvxAiBfy7FwKHP33CG4j%2F2FWefWXbP8%2Brokns2iYK9DQwCdmCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMQfSdhojgw4%2Bt9qCrKtwDlhqPrn8%2BppMGXYMDDcqhEgueJ7Ab5%2FugHzNHcR0HeLEWXT0rqJ6vFp8uWl3hRJaux2EIgXRe%2FMwXBFd%2FqCJwRJXpZsiGNjLkmctRztyq8jHVedgyQZVdLzf%2BPzrteEP6jHBl7nmuk9SN7INwoQQegO4aLmCcnT%2FdAPiKsz2WeY7xrc8BmJO7p73%2B4VLAOzBFyMI3GBvQF5UgY%2B3Fembkku0N94jdlYf1zuYxNgUqTUQxAMU1HBgIWt4VNQt8yjKDEF8pO1gWVxmGNc7EfIHJ%2F6CO8PY%2F2%2BAMnTqUw0UMWtKYJ2pgw%2BGZIS7cZSUVdYExwQdDr6Kae7JKjJxGBQWo288YRIpPTZxYJ3qXB9zeAs8TExJDYUIRjjRvkqBcLP7PQZV9GbDD%2B9rNFTxCuCn5dFn1edGN3FlxaXP75zzlmh2UUWIwS5h1FvenCeGuCqJ6OQ7kb9%2FJOn0ibax%2FqVeN1iyuZGPmTeWHWlf4RVqZLFc9%2BaBDcV6cEuksBCisl4UBd5zMQEuGe4f%2FZtgLOpbxb8SHYtJHLk53yAENCTQqvpxdYSdjB5a4DNBYIwwKoyd6%2F5YAaDuINglLEUIr%2F3UPUIwYuQc4Phq%2BSZ6aGCYQQNx%2Fj3Bd2iumjTOuKo0wmKrywgY6pgFoD%2BZDQZp8Olb7AaXaS1ys7yZu0ZHhObqJGxMQBmo3eya9ZcHXeKdrN2Y9kw4EOmu8POE2H%2BznUyuZ89iMTXu6tJPRMpMt25mxG8yVmbOJzUhaZrGcpMSBaVLoTqmL9m3rtHxpLUMpaWqV0Wk2F6BK7i5aI8sdRkxGIGAFCsJzLa%2FnWj2WkToZpURUN5QslV0iFBqrbN1NH175z1OS%2B%2FJ74FEyA6Lx&X-Amz-Signature=2430ef0178e7f0d420cba4f1c6e098b3b0e6c31c9b197489c373d84e7e70bc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MNAQQPT%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjKrOUp33r3DCZfaOzpF3em38CnakNsWzcEbYxivctHwIhAJjKKimozPVm%2F1S13DXi6R2hdDtW4kv5G%2Fk1tN3VM7phKv8DCFIQABoMNjM3NDIzMTgzODA1IgzFOnX7%2BvG38p9SYqIq3ANHJNWDAWwMGvhWEBvrtO1QtIFOLihOwvvWJxiuLUX4OgiqNHHN0xBJMNNMuYvai95Z%2FYpTpZv4%2B2CZzmr3zTmvwoeeRrBUB94yAb735ElODvt8dW4oY8f3%2FU1nioEprynoiVAn1M%2BXKt3gMSGOEvN814TF3FvGLwXuP1RJVJZq2E9wTOGnZw1vtW6ggkFi3kA%2FhibK7u3CswoLUFD9%2FrFtz41qcO22WD%2FkGvQfqlZZP9ktEaQoD2CHW%2FOsdD7t2404ZhxLoR9sb3iVJTKkfW2YBm1sl%2FGngL0dYOmkikGtbeOBS1B126hGaHOUqkH%2BOUC7NaB5RLLWszbRK6Mru2qrvQaWlZ8u8sfMGXHxXSfKgfakBUtfQ4odm1KNahdASAQUAh04Jy%2B46GFiNJfl4YKY8XM4bNuV6jmj13%2BqezoPDx0l6VQtjrKu9VpaQ%2B6eCuem2kkHWqMa4Px%2BRbixiL0vQUQYWfM2ziYuSMYaaRq8Aa5xrXHE0ZP2VUX9tF4qg%2Bo%2FFn5WmFwW1onYRgwzpxueN%2F7PZbG56qxsJGCIywncZDkNORwCzwW%2FdXU95ID1iiS%2F%2FyYBxqV1vU5%2Fn2XJx69OD4Gz%2FD%2FAvwsdAa%2FaPpiEM0AvUZhteibbYS8BuTCSqvLCBjqkAcFz7m%2FpOLXwVWivmjbcmkVOCRsGJswjlgnuJ0OiwDRYJnnTUsDHJXP52zKfIkTcKi15WQB2pDYfylJ54txsYOpBwlGYtzga%2FT7I%2BlrJCSuwdMkFy8jCI9xYWurjGEmN7Kxnjp3HWwpLeNJvokjLXNfChmY1olmYot8eiB9JLvYmkQ2UiYSGB%2B%2BjT9Uv9M2UJgbQ3Ry5N%2B62bQUB8Tzl2IL5PIH8&X-Amz-Signature=8d8f663de08ccdf553b9d79e63770b4cbceda6a8e7abfc3a09b8b5687f1d4310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
