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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVO7WYOV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqGGhXNe0GfKKRURZi73gLKdvHr68h8SS6clcb65gEWAiBRCBW0STYDt9UyekxJwFQkJcciBvghQARb0TpEuInGOyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV3aUp0N%2FX0qC6v5vKtwDryw2DgNQR2XFmP0A0OTI%2FpIn6zSfNaQDLQb2iizSFLjJ7Jo9MAmu0AaoShRFKQ7KfQxFefcBaIkAnsvvCzO1ZKI%2FHG8TzureSlXKaG4JDLD6dlWUdKwuGjtZwEXNXYKZrOdxBglzc1%2BtVp%2FZ2l676wMO3WWGkGWYqMSbDtALzRrrRjY78NjUMz9JWywwDmiqCQ3dlmnTvYN4Dq6CnZyT2PdfkCpFuNEDQWvX7O%2B5e1yTQzQ1Wa%2BmhwpbJZRvSD4LvOhf3mWlyA4qv6F8Fneizmr7%2Bn1SmmzDdkdsn%2BhB4aq5t1MsjDw2w9jfsUIc%2FoLvXKQK3SF%2FJB6RzEoq%2F%2B0x9fuDndPDwqi%2FPxjwdD6NG2jBOYJYdriz0JLMqsYYBaPZRbmCL%2FF6yCKitEE9K24%2FqA1rUWQ283jn%2FCfkkb1ldTP3xziWYHlfYYKA%2FXTG7BB8EGVcBmgynMJAh2Dk6MNFzNiOX4DtMAS98NOL3A68TXJOTvzCgxfQ8Pnvhld6%2FDYrYkj1jd6GKAE2rgZ8YcRIEGy1dsIzlL%2BLLSN5fjN5RUDXqKIPE0Hsm8LwCjORDN6TXSOlXztqsWknNRAfV8mV54DNn%2F%2FF9y%2FK5e20VU6k3wQoztXlbOeBLI4niYwwsKaVwgY6pgG0Gtg89gcoqfb0ZROKb425f2Bts81WjBvKFlF7BY2GtgdvgvqkKfwgaZO2FNs76e%2BwwvVWwb9fwXEiLAYPZuswLKwHvoTrmrtNa6up1z8xy%2BH43gbLnXX%2BOKs%2FuJh4RSl2D43s%2F%2FbvdXmTeNO2y47qA4aLt2xDRlaNytg0hIr8BG%2FlY5oJV9nz3VN6y7SRhsv78%2FEq5P1JPm97pKrJKctmrvrmXvxV&X-Amz-Signature=de819851e87d4171de4720460c9364849d16617728093bce8b472ca1c735fa0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LH6TMEI%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGuTcGeSdjE140rxGydkiHbbkr46TNUW6qIxhRib50rwIhALoEtHqnpvtfqRlf%2Fv5Nn3%2B2pLaE%2BHKVT%2Fm%2FXYVo9UKWKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznjAAG7Qrw1xSY%2F4gq3ANFIUs461B8W84mxR23QnHUJ2pHdVG2C7Gm6%2BuZL6MGNngAMLuuLk93D7fOTuRVHr6mJ2w0eAxWDp0S2YxtZiymicB7sv6MQ9bjTKuQXnUbhV8AXEFijQpaDQNhwjyesOuNDvIp1Xn0Pth8EQ%2BSF8qGx%2FO5voSm2fMw9gqShaVsd2jcaUKxvY%2BoTBtugAaVoMdsjYn89P%2Fz%2FJiGriDWtI3HGdBSD%2FiqZn9H5M0KDZAEp%2FIXiGAIK8PJUVxy4bejrkk1BxaP9zqokKFoIB0zLKC%2FYeGp6R86xzmqDxWXQgvsRDQBMG7yCsP2zsB12cFwuHMcKYbFBRH0Bv%2FA74Ocsx5P5GmpCTzKs116dtN5d2FHzTmbvm0%2FrV1gopR6iC13UnUlEZMXF137PdCccC4xmxZNmdDCCwklyWn86b7ePTpLRf4vFvOeYjUOyVnd0OV1VQ76jbc3%2FqW0Xyd9ew4m1ztysFKDqsxr0qx7ZmsDy4FwWKGR%2BpUj4oiVZD6%2BQR5DBeKoLlKcxvFLERG2TGryephSZiwlX3tEXUZn%2F5tNIs6W1vbyelXV3T7q0JkJ3kHaqNcHVh5NChzARTqKiR7kkFc2n4mog2O6OCa7qRfw1YjPD2Bmf3m%2F%2BHeswFncFTCx5ZXCBjqkAYTGX7Dvk39pACbp%2F1Mqp09ihqkNNf%2F9S1NTiE856tnNrCmsKkUsgKhl%2BiNVYoJ8mYszesAt9aBVnlNszs5GgDnKbQjfjszzW3aXdC%2FSf3hKXlo659OonXQi9T3hitgD6ZLzar3GI1zb6CGoEZdwHkC1aK3Ru%2FfXTcULC66uaLeurXzMH7NDsrf2KIhIUm8pBMN4sySk6bxmVeJKqspAQLuindXY&X-Amz-Signature=a819c47fadce0c332e5b3db91f4a16aa4b421437bf2bc023fdcd90349cbd89c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
