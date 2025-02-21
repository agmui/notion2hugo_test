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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJ5NBBN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNb7a0vZhE8LTwfGY%2BGnJJZad1HucU2Y4TzneBLWKYcAiEA5QiZcyPJBNM2WfiJck%2BqSthdHRTl%2Bq7JWikq7Q%2BwvDgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCydnDHXpqz6iXqHircA%2BSNx3qeWys7KYj2Xm1yXEHQlPRPcS8F%2B5gM5EevPsG4XcuOP%2F6raE%2Ff5DLrnK1DMYKbivsFGMwcEXupkgqq4qMwz9WG3%2BnSesZidcRF5LbtdgtrR4dgcrTIWFLo6rfmsXKT8oKuK6RqS0DiObgLVu3ZAD0qYOtdlURaDxJyi5LctxUmZbXHxTFQ9MgmPOjGvlrvhXk7RwxPWjfLCjyL%2FukOUkfcv1PuQcmt%2Bdb0ET6cOIvKYkKN5qHtaxz2d9Bq2lubcxYE9TFfSpNfq1ezerCPAiF%2FhjLlnnZiWMUimdhiiDYUftxmO88QqOCkwhZJ5m4TmEJzcALfJkt45hqksCGkXRvO6jQqSrnBCzqbwLdNANgnuw7JxVKGltSFH0d1RgXGoolduEDT5XGcYp3byPr%2B%2B4mZyZHLTkoaJobxUhj3gEYLG5Y%2FbuSsOGxgpAlj1bEso17%2FIe1xedRYtb0005vHF9Bt28HsxGT7rjCdYfwU6JTCDZiHipvD6Ks1pGr%2BbnKrvaEEwqTm0qnSDHrPIjpykltC7tymMJkedotMwtNks25AioA11KjKopqI7kvXqjGf85eqm7Ghwi1bCmF6Qz8WF0e2kjLFp%2FtyLVicuZvsVBniGNhe9rp5KpffMMOB470GOqUBmuPM8N0CLA1FY4a6X9Ya2O3%2BVC77zy%2B786izcoaYLULad4ndS1VhhOzU9kh%2FoRcgwtINhq2yyXQNI13hP6NiMBAKqNgbi347nELNTnGehWUzpO6VpMZhsTVCHOezmwpB56biR5sEZup79%2FwuHHEkGXOScSlBh%2BOHSRBor7%2FbsI62R5loq37wgC3fYEFs2LG1bRZf9OP7mHCU3dhS4mG2I5LhkWyu&X-Amz-Signature=14deef63792b1aa3317773d909a70ac2eddda8888b09e5a481ceb6c4068f6069&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665COXXLSO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ2wdU21q9%2Fd9ZuVo5XAXtQVnRYkOzUXDYkJwJy%2BOYmAIgScORYjN7g0I%2BnGzk8WOPUSQrYIhKZEj280u07k3rdUkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqA0rUyFOqeS3nhHCrcA2J4BBqWL6jj2lvZiIeRISvdPu5M9p5I1ta6bm03EL2l0J1fUWed%2BVF9nKssBr%2BesZvGNlRROYkqU9r5Ul5v3yWKmx1780omMlJ0CBc9B8V8sZ10sVAug8x0fL96LSq%2F5e6cei36weMWeTvQPCJ1Ba%2BjLZCHfl81BokDeZAL4rvzcLS9VERNSo2EDpDIRX6tsHfmDT5hxpfZMmv6DIE%2Fj8QhOF0Yvn6poRo1gvpco9FYuA8lzzeVVeskZOnkp7TtIVJRjmoPh63aNoaQxIU8o8FwUXrru595VeY5BJsVMnmoetjgXR5BVRIyNAuEAocXZj2NhFxkT5qDu5Zy0EqiWA4D%2FQKP6IIuiuOksAE4w4QV90xWii8kArPugjQ2Ca8VLJXKhPFu9Ul9jPWSk3WkdBYxUMJgR5EIjRf2f9CIXMXBXCC%2BdP4lAb%2B8yEhIfB92IOgX9BjoTj8w9EzyP3rTNYICGYcq8x0Nnv4oKuLRIQwtqaUujynRP4m6MpJXQqNGsvgGg3YBWRJ8n0n2Q9VzTce09z6Tp9tfWx9TV7KQVNwSLBC6tDUtstS9ibwB%2F1XUvJzkOIBI9ZnrcWYC7CCnfpwJR2wMYQwd71xSO%2BcScXmTGt17rwtqRwu%2FY5uGMMvj4r0GOqUBPmmERSnGB6P3jWI0DJCIFEoZXu16j3gkGvHu3A19knvgP0tpxdthnvNtX4yAzFQHMDbv3eCAnjGaN97q2axQXIuo2PvKBhQgpdZOWtmoSL9LtmC0LX9aiEumlUrIJm0qHFRM%2BFo5B1cXy6ldju1XNLzOpTSgk4ZDvuyrr75p5PXZf55oLPpupI42ncOeIV6d0yl54WmhPtXckEcvnOCXlf6uDLFZ&X-Amz-Signature=549efdad54b8dca870fd2bf8172d70ae2c1783b51c4db27caf6166943b3eb3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
