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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAUOR6A6%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfX8RRSiCe5nBWwr3LtjCyt%2FDQEZ5LlUMDNuO%2Be9KPwAiEA5ewOQPROznNdXhiXx8JKllTMZtSyYzonGqF6lWSgFvsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp2WTvncwxU63P49SrcAwELKmLFiXjZnS1zPZ98L1rL2gyE64G0oorrXPWq7l6tSYTWKxKnb0zRMqNkDzuRgHMc1k9kF7DdVencYfXnSNiszOy9n0VN7oRcZMQhH%2BR7qGRrnMK3WXW914ZBLSf066RTnN0fCm0JKcUgD8QZwLKzqlm0QryuracS7ndwrkKZ0qqtZsEBHxM2nSO9BAT8P0wA8BAWOqAvJF9WcqYadtkLI%2BzkpERSbbuP3Gc4vChmaeiU%2Bz0HXhnDUwVoXpWHgo%2FQHtiklRhJfUCrjorEuAEqfTaTHoMJsaVU1A%2BMWpilql55ePCkmf3fjk7ngwRWJgpuwlY9N04c2zGrpfMUkLGt2jpTuwbtKhiCi36UAyL3t1%2F0g22Y1MbBACABKNE%2BiHNtsPwa%2BZzqhi1Y%2BgYYxxmWCOLz9m%2BvUp26ApXpApZZ8JVEuf%2F9uF60WXxHFmh%2BRq72eGgP8BxC9HnRlW2NLDygPLauT2waOK%2FWmgcFDJklU9ly51dNX7FJbFlxavLjM%2FcaVPT5iNydE5kPKJGkOJDyepBvIvBuP%2B96rD6jXilJ3Cz9BF971wJAv3uKqaSeHgd8CohLtZ%2FrmpTyWnTrSuPgBa0euoYjEdANgSrU%2BakFdlldFX6mIdz1r9e0MPrsr70GOqUB4IrdxbztQ9P2gTPgV83IQzSQ3flhWqJWgZSXfrA5E1uAJZl7F%2FFG77KW9H8DKUNgcyqHXg9fudO1ICQFaeC%2FnUSQZAU7rgBnGIZqbFXeQLZFTPYIm3uRgJZ%2Fhun%2FW%2FKaSRuBigd2cyTzhkuym1NoMND6xltasJEGV7hg7tgc%2FCJBAzmQVdLWX6onrOYJYc5O6oB24ybYE%2B97cv0cqZPwv93iLzQH&X-Amz-Signature=27583c033eec77103bfcc0f79f7e437074d2e388d6b2c919a8a07bd8d5d8c1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHRBTFC%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwwcDNE79tPNh3g3P6wnw0EAKKl80g%2FxkjD7TkjbyRgIhAMYEM06ku9Ot9U0w08%2F6ewXTBxwc99Nk5TTYEwTavEHmKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUeRRAgo336%2F5ynH4q3AM9eDM5NPQHK%2FeanTsqpZ4iHV3bttoqomeTPTeO6TnOc6FcZgVSu%2FSA6zrvC4yGqSAoX%2FBLiwFimHKpTV6BVFEpB3kHq9yNjPjlEMRpTo51Xe05%2Bmpcv54CKrC3y8wwxH0sPu%2BvZM7OPsjn5I8uv8SrpyAUqUBslsnafHxlO0iWZQsdeU1baOZ4I0R0OXK%2Bidq8vcNnTChDs5ESFFt%2FmJYE%2BDNWTUYOp4lf07hwF0CumBaJhk5PHKL42ftrKcGh8mpCs%2F5nPIn2neiaG001VBcmkXMKcUMMZln1RkVlayR3jdUoXZmkGk%2FlJ17o2aW5P%2FZ3mAemI4reJWTPjPga7m3zl1gArrglkGdHwah0kDwATQoyrpNT1hV%2Fsz3eDBHfZw3AC34Dya1oe0kdfvjig0PnJpVSOXpmUyMjUHnqk4%2F48ieq8x4HHOMKWReIXs4GCEwSqZjhTpr9RiID%2FAxo6MOkIjoHjrIuBzwQ%2BTwkhetREosB%2BzYAhtm9k0aRO5PLmrIVWhCIRj2NeE0Pspk6SPqUgV%2Fi53X6krbkqaFeh4Vgnke4YlB9bHWxfw7hkh8LD9nAxUjL9ZRrA4dgsOYj6kpxaVW77s3DBIQMPsPChwlbNjMI3c%2FSZOcxojarRjDh4q%2B9BjqkAZk%2BCz%2Fyiuspm6b9%2FFc5S381eXMg9MEdD3dOjhIUutNrN0WSSIVIHNqXOIIxJhwGDgnRvf%2BpCBUqLwXxNtnBM9IdcWJh0uXbzuaXYP3Svedbz7lNjFlNBbG0fQnU5pUmO7Be3vsoaXDwuAmUQAHTMspNmpssW2tQZEJ5UqTS2e1sYGAngqe5LS74z6WSRBeKpsppVTqWgvO6oVtdMa6FOfjNn%2Bb2&X-Amz-Signature=cc9f8050fd09ba0fc64a779dd6ddfb1ab63934dbf25a5381c24cc76a42d05301&X-Amz-SignedHeaders=host&x-id=GetObject)

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
