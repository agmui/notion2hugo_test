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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRB6JGR%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7jzKqw%2FxCK7jVYP2PB9W5t4t%2BrNZU0FeRvJid%2FPhcnQIhAKdXJyDljt%2BtgivPl4THpB9UJtAKah6IKvET6DKx9URuKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrzdXQIzuOxJZkHQQq3AObumxUYeyNMTIUTATM77tu6jV3WkABVAo90pYg3cxOfLgcjfNJhyzs0sV9GDwVRf%2FI6SvYvhLWmd1Jxmmwr4LrSu%2BH5J5fVddQ82Y5esfRfUMQ9DOtPYYAsyG%2FLQbFNRPCenVhM8WxlV01MZ76IT9s8k2KTegXj2cYUhy7PNntdOPQs%2Be0jr6jNuq%2BuuAQ9nFHI4vcffJQQlrNdeRAK%2B3c4JNk54CaGajT2J7rb5AyJVASZD9s4j1i51GCyqzTd%2F15Vsf3ccZhKFFxLv2GQw%2Bg0C8YzDBDXGEGYYpSpaOjIakoN8TtvV06SItOVwQQmZLwsOHfFXjTE2dUGrw8c%2BqhJtJp5neovGvl6V4mgTmguEdy7mGP90i3sN5UUQY5fei%2BW6LkTFS%2BP%2ByXkbdaG18HfKPeDnnsuHhrw3s6RN0fUp%2FGwdzT18IpmtmAV54GUhmrsTsC%2BXqGMgdMmadiCuQU%2BgJHhbsC%2BBFnCRoAzxlrU%2BXkUQGICAA4xDbxQy8Ly%2BcW%2BviB82QCzCXhLlO23yPv4uLreSKhZzJZQHEw0Vfk9o7FzMereSD%2FndTORJCzUCEEv%2B%2Bia5wfnh%2F8TS%2B2VxGiw8cJWmWHx7E3n7GYID8MkikvuxJlqiAnk7C7KzD3rI3KBjqkAWzPY%2FnLEMlP8IJKQobfu9tbiBQYQ0VuCsRxAjh0%2BxiSI%2FOeT9TsjhBgRi%2FdpdJwFK%2FJDvE%2BSqacWZoPMF0Cju241uX2hVTjZpXFDq0oW2zFRQAzOxx2RX6uOKh%2FfIJqWVqrqi7USnAu1UiqMOMiBHFLrMLCgjmlVLF2jSRVbJbe%2FYB1ZehpqdrRiwaM7oKMVM60ASVBhYomA8gUr0BzKJAzWwaD&X-Amz-Signature=3ab69a40884ab43e7b723eb21a65c1daa0fa1fefd31477212d0cbbbc636248ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLQ7I57%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFawC4w1aBK1T3rZfywed7OIDDrDLnn%2BMoxrVPlVKseoAiAxAvkDgXIMJsOtRJ1kcIMS%2BmdBwJeByob%2BYzLYUB6DHCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY%2BXnkK2y1dgTZKJEKtwDFRb%2Bp0oXZeZzk2dtycRVBtBVLsEsBCtFZC56vx97QJpMpQ5vmcmImH4Ix3tv5%2BY4xDOdvxAezPj5fB03Y469gpmEqV8jnzU1jHv3WoxSHmynHLRzA%2F0o9eDcjuvoqPOOIKR2a7eAne4dzqWQOsR58gFkvL4A1AikVgitAWnYaj3KFf7%2BhNYrNYZanNZySlo4lXCyidjmisyPNpMQIJhaRKL3u6%2FkbuyF%2F1QpYGfvIT0tMS1I7035M49lCL4gN%2Bg8mN%2BhwTKbIq13eORXPzwLVwO7M84PHXawow9dBIOEyC%2FEQn6F6vKN3Jl3i4RDD%2B9i6Vh1t6oMgarepsdxqYFagUk7G%2FkEf%2F%2FKYs27%2BBCkxlJTbEEpmMkwCAumjefxZocWnXqm3NMcHfDgYBmv2qglBxZ%2F04fGWPE19SQPA%2FHir3cl%2BCKrvIacE%2BmlSMgNyq%2FmEh5jEm8o%2Bx4NBC8PRHoj7PuQlnKeLO1%2BEX6kK8NbZYQdPRv23AHY2FW2Qj%2Byo3euFww91pKiTmd%2BhHfLuBuUewpEXVdV2QTKA65AvAp32GizSRFh3DipjL7MbagQ7AfkpNeAkRR1NZmbRXELxGwqPxiSdcYWbqAFaC%2FbXA0W8VWKitjy0YDLOdzxnSMw2KyNygY6pgEyyjaX2yeTKGgjZKKcBXoyY7Go1fnn0MVhBv8GYbJqo8JCuPqBXUBcBnwlHWCxe53OZPnMXB9dDyUcqPnwNjgLOG7DV7asekUIAENNwESg%2ByqUfWwfS1HvbRUGJmVVkdtYbl%2BiZAIt6acXyyX871oBcMErFnSNp04IL93ijcxgIr%2FHSFGZJQECk5N%2FxMUu9p5gAwEu7g25KpzYG%2B3quzvd5MhYki%2FO&X-Amz-Signature=df37e3187fdc10e3d93acaa46ff08e387dfb19e1a0aa1107d4c93b4411f31062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
