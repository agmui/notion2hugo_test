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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7XQTEI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6%2FdjhybdW7W9xyZ%2FYVI%2F66B29n3t8nyhUSfGD7%2FuFoQIhAI%2BRM8jB7zC0EyzV77BwrI1t2AMVDpEZnAGAnTf7ISTgKv8DCE4QABoMNjM3NDIzMTgzODA1IgxRsLdX7FMie6vNMnoq3AM3LfdVQ5z3EC%2Buu7E%2FSufWKVcSof90IvJa0YUc1utmXM3RBWpyZK2Fwha7Ft85gFzZt6NhDFSAfWkSqmHAcb8%2FzocwYEIl%2BPZ7xX1IAYwnMBDS7th2CCKZvMUZ4FWEjx5tugjZ%2B6p61Hm24Wv2vpDGzGuAu1efuObEua%2BA2ePYagbeMpaw%2FhtDbYySV1M51xce45X2ZDjjYbD7ZHKwX2wK6IPPr5Mk9gcc7PwwsmlEF65oTPGUNV42ZF%2B7ICiRfQi4%2Bx%2Bqnq8WmcFtrW10NG5oGcdE8162qmHfpYKsJUEbU8VDB9U7cqDQ9eeydi0WtoTlwJ%2FvIcyT6KwLM51izVI5wB2Sx7lJWK%2BFc9i415dYZrzgye9bvy0FcwqWOOV%2FzmDAE19OmXnL%2BCaBnVASas%2Beb9%2FXP6qLdMqjzABpvXXQie5d6XRqfCVlfDRASzHkJaID9Mn8%2FFDn%2FtBxUxRGV9ya2zEDLvTGQb6GReKqFWS9%2FkYBtLWvdfRBYkEAED1mtWwcpev%2FsMZiIq%2B6YM%2F8zry7zlPlQ35n70%2Bxw3NXxIhLIWSAHFcORtQcKoU6StGGE8lg7cf6aUs9nA1zNc4IjZ9TgmEyHJLgvUMpGmlg7%2BM6obIAQGrhd0iXBRhO6jDMrIDABjqkAY3ecPwgSeveDEO%2FrHS52WVyvmqPfBKr%2FXdEyO9ihTCLr3g5KYF%2ByRoHOr4CQ9oN8iIuRsz7OEZvNA7EIW1pOs5RTRlZig4T0fB5ZWHybfstykTA%2BGFZ3pfVHXAskxyz77ybs9e3HyuomZzv17i6WP2TWiHyV8aAea92cXHE4lRP0SqI8tnEawW1t5707onMUgUWaP4wCRiYe89EPxwhgBebibYu&X-Amz-Signature=52989d99d91b091a833d4657f91924834b80df2943459d4df0f26f050bf23c15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT7YTLC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9VJIusQLQPha4Tim4M0ytHElCfsJmiS%2BQxlG2WEl%2B3AiEAu7shMhXBC3HjlLaVG%2FRFfBOcFcbl009nSzQoE%2BHiszwq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDL81HsjCLVQFn%2F%2BkkircA2Tdjm7ZvvyzLxR9ydrs21L3eX2l2JL9ZsAy2KdX%2BrtJ9nWQwFitZiSMQ38nX0bjA4D%2F3ZpCjEecQu7rNkBUVdRQP7JHPAHs%2FZCHFmAtHykxtzHsS7jJTCthTKcf88C7SG%2FSfIv3M%2BDVVSY%2BKaPaF3n8Kv92ye9DB2zogbT5%2BkY6mzF1v1Bbe%2BDbdovncf4wgUcYwVdfBVIrCYg%2B7589DRkNgmh4ysEm6Qpro4nvg2tuMF708FnTgqw6T4TMLbVNwdlksIs7FhTucm733Rkk6J9dqktZ3J8rpDorgoJ%2BE1g4tFOgnYbF%2FSouZ8gcQVYbGa%2FYixG9eBWTHQH%2BXBuFsXB%2FpNQneWVzqaIMg6KL4eagHWYYct%2BLQKAuhq1bladd50MusUyfXjlwvm7QXQs4kB8P10ka7OxjhBnOv8BHTdtVQQfpm6%2B6K7LGzPv0nxg9FFWqCUfDBaMW2g%2FzNVVC%2BvVCZRSAdjNUI84%2BfwjWvkNThipRGRS6idyVod8DLtO6Cp3tbPFPJmI4C76m1cUJvyRHEF78GAp3l0Zn3U13xcbTvVlqladVP2MSf%2BkR9zPo%2BB%2F6bmtPVI4QAkWx2PlnM668FXMRfHoUGOD3LDr2eHRcsKrh%2FIqJGVVvIsKGMJqsgMAGOqUBIc6l%2BFKjKC8BTkXfXXiIkCz5jJ69%2FL3J1Sz6RLUODfnZur0HwanfybVLLcsxcHL3pJfA1NES2iK4NXCrhmqFnK%2F1%2BsM4JvXsBYRnu0xj%2FuIKjuCBKR3NNzKm5WuQKYCNWg0zKQ%2B2r4haxua3zgIerzD%2FQPQnIhZmoCI2fvWzksTKilROR3ioGAh2ksozYtXTjktjrTQMuQIvA5CI3frEH36ezfo7&X-Amz-Signature=c81535e10e100a51ab765bbd7c4e1d875927d966a3a5965640bf22f29e72b7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
