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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY2OJPIO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqd8e%2BKI5PkxXzvV7GsO1yX1NsyfXqiVD4V8riFBg8nQIhANbIZQ5icUfcA0EoO8gyTuk4LHjHGEHU4mNoKBWiHKwBKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyAvWHYftjM8EDQGIq3ANNMteA7jaBZOrlG3x9nTJwnm8%2BhtEK3HELhHSj%2FieUxNa7W5Lfns4QMubwdjQxYcFe%2FOht9DffRGw9iiw5EjeTAqV%2Bj63MYTyWZmOYy0Z7ScjXdnjcO6vikvsy9IqedcyU%2FJDBkdaI3jOj%2Fuqt1VtRf5QjaLjDp6HzsNTTzWFbeoZB81dYqO8oSBS68n8we%2FM6YPYbRAp766CamuafdGa5CZgIVlSvpbsbTE4rhFnvXn21%2BWeFVy5no0J72uuTwB0VYijWUe8L663NKzr4NdI%2B0bcW89xwJiY5Y%2FjE0YG1zw%2BP3w1YAzY%2FiV0oB9%2Fy17aDSySv7ZcY0WbPwXnXtMzKSZuqmKbSQcYqTx5UUG3BDJQKWtl8dN%2FW2LxpaJyljZv%2Bs%2F2zXF8WHXGVP7jWGuCv6igz29AmH0GFBOiROsWFY7LhGkCkh57TuFdQuEyFF%2Fw8fLTZoNQYKTXtnfbjFrLcWunXTp1nNZu62o086rnb3G5%2Fdu5VCVhPJQGxMF7DJhaBVfQjjmdQ7wt5RbVT08Mv39n%2BpXwOC1rABNYIXaZ%2Blb%2FkbA2WUaaGNiD3sZ9%2Fygu%2BTGuqK4XuJ%2BLfGD8HiuPy9AW8it65ZI3ESomb0F%2BMqBtO4p17uUp07n3LITD8qbK9BjqkAW3kFOGFroJOqRKOskjD%2BeMAhAy23lFGglW7jiBkoAq4Rjr72upRrw6ip4TNREyoE2s2nFedQHsHwsFQwoFZ1P0xc3qvgKTdmsHMen4nQFoaWdvW4eni9MbDGY3dewQSCgidH9E8fj%2FbNQ7Hbq3eiHnr6LlhwtRQWF0M0XGMheGLRFGGNVn72nw70o7arSKVLP3q8x%2FT36sQ1dhyfoRfiU7KdbSB&X-Amz-Signature=e480d061c72e7dbad9282d0a0abf6eff4aeb3baed31e3e95e608aab982a30d76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY4MNCP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8yhXvB6Dl%2BS6UYNr37tGJYCGaHSPHTWJ2rXm9EnA%2BnAiADrL9B68iYr6Pul6RDMbmxepvR8CrY7Bk8xap8Vgq5iyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwrkAjCBb1Q3BoMUvKtwDgX3ZGp5QO9tZ2Z%2F9nUljZTg9F9bNzJ7FtaI8rt%2F8YfOUrGE%2FM7A28amWgecP0vmW6mUsmvW7VV2DZ3gZVOSSsDvod2uTkdL%2B17M%2BPwhAKyFkOxJlWEjn9rhDX5aBdbyVRnqWPlihDHFs1Mb7%2BMk%2FDx25BM%2BpLDqF2ZhitCiGrPtFCAefoMNcjtE9EgNx%2B9N4NELPeiXyWSxSubziHq7Kea5%2BKAaffeoTck488jh0IN3vJ6l%2FZJbWMG4aBsAs6ONtE5HFZueWr0GaRf4IAZTfRLl7lUNqdW3ahDF3fM%2FpykTNxDKoHuCSZWVvR0c4d5QMQxajEPi%2Br6RJbKH5RsZDswUMyMQPImGfphjv7z0bHho25dg6atjdclrbdtk9QKgg0G1FfndN%2BV%2FXmD%2BaTCranlLr6RDdG13OeoNwexHWcZsXcBZXUIo9%2BOj%2BG%2B5jWrKfDqe0lSbOA%2BHKlhLbF4oQgrjbjIhvxgpySIKsEPX98W98CXd1ET25Q9i1GNNAomdTJyUgzuudJJEnXgeHhAx30I2FJeixxqkQw4Sr91bKlfevn8%2FByeDAKR4lBNfiDvzZu1SlOZLm0j8bv0CcbZxy%2FQ0RcDFEDQjx840TDirjxBXUN5FvummY3PCNq6swmLCyvQY6pgHW%2BW%2BcWZMOCddvNc8Y08U4tS8QzNgpayGQvB92qKFSdo75WKjw%2FemRUROWAqZyhap8UkbuVMfcTcMHC1hdmVLBSrdxkOD88p6yIsHHXteVW9GCshOheSrGfSCLchVtstvrB7pfHXCWrBpDJULpSRXN2FmNjo0NUEDdCxf1Yps6%2FZQaVTOjC%2Bs1USx66HsYEQ%2BSPbybRQa50OxdeTWQu9DM4%2B5WCp3m&X-Amz-Signature=3f8a735842ccb92fd7533d9486f69d582658a94c2b1125afe18b449f8f68be14&X-Amz-SignedHeaders=host&x-id=GetObject)

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
