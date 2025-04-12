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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SGBGKOB%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDP1NU7LJsgUy0kNCZTlgcu7lEeStr2hDw6vtXGtWlKEgIgUlXLHbhOLiuHmyGwAjOywZTKaZJJPELMT9T3DhLLmx8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKatg0IQ5h%2Bi47tsTSrcA%2BhPw9YP0fgFSqRwzRG2e3mHH0h3MDF0UrqZ7Cfz2%2FR7yL3BD%2FweYmn6fkA9XVyafy4KTvq8o2E73Q%2FCzuUv3uwfk6oo9DKZ3YT865i7H6BSN0KNNvfooKKDxnJ7uMPgjnT%2BMAfHfdH%2FbjGwlHqncuEvDUOpCbVjXevkGcIyGpyGpO5847anvzXVHd4oRgWdQNH0IzK5pc52VKG0LcDeGEMEVAD4fivDnkwf6Iuzk5IrJbzryIbxOgoJ%2F4dUkcMjFj0uhpsaVl4USA4hNP9a93YuB6PrMYT2rjnBC96Ye3ENf5uPGbBQUqrL1MZMSf7yQ02WLgOUxIgRQX380%2BbdSPVeh8aDTkUdTiJdM3CZQ0ttxzXAER0nZo0Fcq%2FzCcEIsKPstHvJS%2FO8og25jyiR2ZeJAmTPfjdhEGUVt%2B8lQxY9E7a5jVhCp1mhQ2Oz1T5uYvHF%2FLew%2FeGB2CCtwKcxqHi%2BP5Y%2BlPTfq0Q3QDTO8u6VABZovk71LB2cNfaBgUO0nmn5RVWwhc9O%2F%2B8%2F7bQjagQrZ6hTBvMjlKEztDUYBJ87st3VZTlK3tys0lGYwEpX9%2F1wzxL69%2BHR9cUhgpLPxZ2bvE34fhfXRBhUvdQbC0r4U%2BoUcY3D%2F%2FhztM39MIKn6L8GOqUBcHVhnQeeEP6F9O5QGbvvO%2BQfLmLuoYhAvzCjtcV9qJe6VQiXv2B9K4FsrZLaJbkZLfQA5sVyCfA1i2DMNKSAtdPSy7go4ct2023qs5vx4D3MqlmbtbEOP3FXdplaF2qxusseIOf8kjAAzLUhrcxGQEdI7JKK0Eyy3T%2FBO%2Fxy9Mc1h43PSQMQswnz8gTHJKQ7cWlWLEyeNL6zLcAm34gLl1Po546g&X-Amz-Signature=e6723261ff4e2c4af7a075b06ae78a486b338e779ac6c0c21cf48a971021bc26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODQYBO5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDLMNkaJoQrW3N7FBQBA7%2F9LSbBUcGLn4LQZHeoROKGfAIgZb%2BlTK24o%2FtQh74gWGdoZAOHwoBUdiouVNzYlBJetCEqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOXOJCiwhLrG7W%2FOyrcA4FFQg9pVf57%2FDZN7DLmI8a1UjxE4l%2FssYIBV4upsGw1xvQIjv%2BQe5A%2B%2FIAMcIFRk3cB5RPhwv%2BtUh%2FFWMwNLVD%2Byhq45fdYdOdTD9dAttrMrOIv%2FuyF9QjvsSLHmYtYzpeZSAkWkGULdh%2FJ4CCG9hHeKsdxojCdWoBOkIyFQPEOZCQGd4stHzzOp5HxuTrIh0Ri5WsqS2qguBUAE4GhqecKRMwV5oJXtSQYhHJZ4arck5oZ7CjuVSAc2HbEcBajiGML5tsYqsOcmeYliqqqXifOolX81rFfWilsMbow9RPRN%2FtdF9RulVcp7xFmYBzFbXNMWv7gCLVtoDD%2Fu%2FsDpsoVw%2B8gS7Q8RB9qSvI336suSpKy8BmjosHZ7vcZACBfjMOop3BCaAQmRhoSN%2Fzy9OHPed97DTjgnJi93RbuUOAcELZg75%2FLUGV7B7h6Fw6ZzQbZ6Msr2Ywt%2BL%2FPxLg6C4PlGK7iduoIHwtNmiHMELo8xBNfoVnYYtIODWi5ICD2X3bQc59rAD8X3EOCoNifduBZlysZqdRrZZCPxuhHNzuWdi6N%2FqCA1yTYU0LEzrGfBS3CsBqHd3fNV%2FJDEiOVq%2BVdq1EEYSEoL0YHQFg%2B9Q3lLeZQ0Wl8zOWqlayYMI6o6L8GOqUBNwvrkwqFq32H8XXyBOlJCF%2BnH61XTRMj3kfC9HP5tijGNMlFjTP9eudKKtSy3smC5LEQ2ip5bFKY7DQ1HvZ7y0627YGyF8ORAFZR%2F4ydTNYf2HmVTXYaT30ECdDAqtSydamxFCEMtHus81beWEWO8WvAAYMIq7xoNQ17Umjmob5YYJdKx1NlYSwcB%2FtQXxy1CGaEiB9QEqtxQqYASOFgttaBaoM5&X-Amz-Signature=afe7a33d5180598879fbcd5ebeadd478a81a78d38343831522ec360777f8993b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
