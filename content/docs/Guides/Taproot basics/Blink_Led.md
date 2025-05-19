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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GKXVKD3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkg%2BCbrvMntHr7xHOF7FiueQFgj3o5j0saCgcvBPCA9AIhAKIz%2FzIHbO4jqBtDu2adI9J1HnerUSC67La1VqT%2F2fbsKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZe8VMFvm04Hs%2Bo7kq3ANnRv1kx3jaFwCR8hMt0apvDAyPV4M7QlHZeu1l%2BQMdM3AHoCfye7h0pryS6rjWzko7nnUaNnlANsdxUin4OlWWvD9gZYtCmBUj2KnHGIE9wVMdfTfaV8wO2joarCd7pUINxrTke3Wm9wID9Jbcn1bmf2gBkJ%2FrkKbCvJiz1XJxUR7w1pPc0z76erpsoJFMIpQgll6kVKtWreO4ZpmbyG5iXa%2FYQPvjQrxDuPeArUDin1x3iN0F3XFMx%2FVPMmRc20%2BkDYVygzoyEIMXipYlBJfi7WkooYuL5KhqKhLEth%2Bz5rnIBVH9x9A%2Bs5OiYNVKhmCZYreHET4Xz8u66DnvLdn5avi6bcLx1IlBEUw%2FtbgNToc3ahxLrafYcNBLWlT6SyRlxcVvX4kbGLdroWPo4WSWo0NxMKz8MynTCRDjmYuChXI9lcZn7dsjZAgIj9%2FP64gnxNhG3SWMovuWMGgGwu1blIqK4O2xKgqzyfLkp6ayxyrZMFW5%2BhU7y3jcy1DmIlYcTR8dj0e0V9G8Dy%2Bw5iX84FHA6WL8eg4pC4xPQwjUP0xqi4MSDi%2Bh%2BDYYtHkFhNaULOMXtmo4gwCkFwX9mVi7loZ36g8JW4Nqe4ZOzYrAbM9n18i5tTVNzFrWUDCr%2FazBBjqkAeSO2skSXH0c3rX8UuZF1G9o7rt3tLxNSHrfSPF1%2FhWtN1bZba1pHXmvjDVcTCiATDOQ65ISZZEB1Jqa9LUtnXqILGN3wnOgX0fK%2FhLwm3tMZtl%2FqR29qfkp5PmDJ9qt8QYTCWxyhuetEvJeEy%2Bo9a3O13bNh9agi9TAYKzDYWpmrakadBCmkLqfACOU9DJwzOlJOhCct1WNBGiCfbV4wMjdXedM&X-Amz-Signature=dcdf356269cad225aebbbe98c2a1bb8aab46167492a86ee29bc87f089b63c43c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657RA42OR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4PjYTYItWAEAl3rD%2Fcc0bujVjHmDFzGgy%2Ff0WbQGwtAiB2X0WBQ8%2FobH8%2B%2BEjg2PyHZC1Kx7Isebbn9nAGWpQ8iSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEdiygVfHaA6JikQCKtwDbMCscfsm%2F7je%2BU3HTZaeT189VSySDrEMw3%2BTiUeIsbvG6DwXjfHkd6H%2FjNsn0hcH%2Fhf%2BniRqv2NQFrF3sMXUC3obCaiYLNmmBCjhEeTSfRwSTuCkrYwfnULcI4BDqDBoDaCmPb3uq6vvYMBdoypxieogNMFw0V6D0jClwy9SyWG16e4PAmQyXpR6a%2FSFKTedCjcNfMIh9Adu0pxNtTvB2AhuZlW2EdEiYPt7SoAiiy9JF2srMGvrTBN8%2BOGRyXQhbfoPyLscpiOj9x8RddORR7IELb4b9duuJ%2FqppqrldDJCH3%2Bo82S3zIq%2B6bw56mPjDjEUIvTOcule%2BgAKr2sdeCdPLev%2FmIfKCWVvLXpOnQ2VUEDEKs6VtLklx%2BcwFyq8sOxG9pfaiomnI3qLPEGvSvHcGsMyceGLX7ccp7o7Mp7xmfbPI%2FkhJdxTpMF8i8TTfZGvVQHTRtWtzBk5gVsBLCdS9ykpRXXowJku66M6g78PosbnSFuTbdWsJsW52ZKBYXsX%2FXll0rCJTgIegZzxcUVw7AGRLZ21zN9VhYiQqjERMP8%2BxSeBHEUk4eQ3QEjMTObp7c%2FaXMMeh2NkfhqG72IWcS6IeQw%2F9yAUJxzbpNk1PfZlMao4Z7L2Bqcw6v2swQY6pgG0h5wiM6sh0xfcXrjier4EC8SkBeeGzEVIcT3SdKu24jBaqZ%2BnGxIgrzeqx1D1B3uq5gKFkd6y7noOwW%2FwKmm0A0w9Xs4sTYRB6kiLNhd0wsnxKwOj5z0MX3lgDxGXaR5fu%2FPQ2Vsd%2Ffxgo%2BN9eNmkGt0aQzjo6K%2B3aTYHVLxKXfQ17aagR5pnT3GACTv5GcZ0n71c%2BRgaU4TqXVKq5WECNBEreuyq&X-Amz-Signature=111022420ea1e77e5ba4c24cda56f2b119d547175a8f3efed3d76b1a255d3c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
