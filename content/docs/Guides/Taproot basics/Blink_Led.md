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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LCZ4N6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDgIB3LDDt0wn8HpvcH1MN1DljVqfOUhHLONj9wO0lsMAIhAKd%2BKFEBHA4ckRYibq1%2Bi7Nc9FWMPPTBlj0QH6xhzCPAKv8DCF4QABoMNjM3NDIzMTgzODA1IgznjZ5M%2FouYewRtJywq3AM52n2hlZDm5%2FZcQeqDcXOk14%2Fjmiq3gilk4sR6esohaaruKaKpb%2B2LFezhRk6adIOO%2BYOjmc7JrO3hYpLKWSN8sMReVp%2F2I1uDAHavOD%2BbiYgbdLeY%2B0cLEDY%2F1lEsUSBFm8hPkxcYNNv%2BV5PQQ75rKjTQ%2F7BwtKIBxBqH2dZcaNoQskkVUaMGtPNSPPfPbnzjiePkUT17lQYLQW4yj5zopGxg3W7Oh6wpKHmq58EWSfWugMd6OqZudT3ok%2BmjRyyjQ6mBMsVoj4mVa%2BvzUCceEeYV57mXGuUd0cuzkpSKNEGurOs0MFgPkijkqxELJFY9zlLy7GPxcojgwv%2FuZSypcO9obqXghe85yK%2B9Xkru8sET%2BcrsWt%2FeWH4oEde1T6WkBOEy19tZZSoc8vPpmaepCkvISNX27VGuV8x42J7VfJHWbAIPXLuE91gJa7KYjr0U%2BCvSITOQJtJyXdePOMIhQozDGBKHM94QpFrUH7TojKX1aal8cmdHKv%2Fev6ha0DurDAc1x3Ga9fxLVyZe4znW62B52%2BxsCQSPIpumxwcHjAmw8L5NLAFWusSAcPrQrHVPoe2qFM0ytFjc1DwopZMrZ1yBdny3w5VoUDXd4ta93P9mY9PO258UlFoDZjDvmcDCBjqkAesZioacOKPRpO6YigC706hsijKTmIEqlC0gkGc8L9bk4my1nf1YyETYDz4Oo3I%2Fp21moV%2Fk5TaYxxCzGmnnhXg09TOlGW8Uhf4Vo%2Bt6M5uHMwlGo%2F61biA6vJ9N4klDSNInFKCvKBNJy30IUgNQIR%2F3CWD6bCFABGdsg5XI5RvmmBYT7WzMKjSLrtxjlio0ygDuVn9kpr1ptg6fOhjMt5jtU6Es&X-Amz-Signature=d2999aedcd02ef131453e7722b83b99810d4b8610d2a7bea6015549f3920132d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4C7XZS2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIEzAyqbgaVww%2BnHhRqJFWrHvqZXBuYPNNxjuKc2DLDlIAiEAp%2BCaGcR9OgWhbUKEDLRVptuz63ZH9ozP56wh%2BQeRjBYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDNJ7yuEQZ0AW1dwPjircAwI%2FChKNFFOXu04aq9EFWS%2BfTaffR%2F8bBJ7SRdA71YqGKw0%2BEf5WXH9Alrs0guHZYlbs9rXPdU%2B3ZlhF8pYCxTiP0b%2B2kAyM3YhlneQyi%2B5pZt6qActxkgcx20LKsPb7Ubr68n%2BmBCvbRPsvFJxPUrdPEdn36mibSFiSCvvxWCazBxAp5pDqGJmcEKyyXWXFfPg6AYj120WQoDYqQeC9o%2FZABbd1MgPARHaDKXdxIPeKDNLi%2Bz21oThGcvn63eaZ8wTB6g%2FuXKdKYbrO6n07rqkOKH0UCzmQoUyxhP5Bu3ipkdL4ZojyPKBFypUZj5CFFQdb7cWRoEMtVhPxi8ZPRCQWiWQL%2BhD%2BZJG0n9%2FpMLzFrmqdG%2FI9UDOxwyKW7gCWzpw5rTaHJ86UX7Ab6pJNWxEcR1TfHTdMt3QDbsSMAk7bKUk2MGD4YoFsUNk16BrrmeRMkU8yQn%2FQtgee9ZdtR0p%2F%2Bh5vG1h9s0BCm6eFtRRcbXer7%2FejdN4QGJQ5qr544W3X6jZEhebC5OYbfRCdpGnDy%2F7bM7ykw4elt9hX2wyEaN8sXR1SOOuubM3044s5DCyQqZjR6EWqiQLZcBNP007UaJxxxJenMjEsl54fXgegvoo%2BrPTjHj8qL65oMN2awMIGOqUBK7SKMdn6qtTfcX9LQIOkFSGH749eUKjam%2Fmx0s79i%2BguJq1P4efhOkJPr1eKVzXVV1fm6nUMXewbl1mdVwNRxu7aleAfvS6VSZMVnV6UrMkdocqy5%2FF7wKwWYRRXsbH2Q4LxWanduOUoL67TgIYLES5ncuuCYTt0D8BVJ1xQvn7958LZ7him3bAdUntfItsP93MmKpa8LEfwlWbgNYooTLWPJbij&X-Amz-Signature=06aba3bee739b2c8f376977e773c91475a4468babd5f1282dbde32640560bb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
