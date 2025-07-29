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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5SEZOQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrgt39cAauLN5p6YVtE5rsNbAiU%2BHacv20lWTL92XoBgIhAKZ4s7BfPxMv9w%2Fz7CtEUuQhYKrus3nl1SKlYRbrjgyGKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSOgmSS7H1CmR49n0q3AMD4a8JknsC3nEtVL9kIq44Uf%2BLJngCNikiuVZQu052WRihKsqtKGexDshQVYe5T6HtPSXAdRrn4oxsf50q3MatNESMhPPnfLfkJq%2BSJKPLdmZJ7bOUt9j2lujmCWGub6rjNYWUFXR8Y62qlyi6%2BoXeqdJFMSMhOyJSlHQEFIhVllmmgicXovIWY5BIhnYJ1UsjphRU0d9MHKDH9aSlauA8goNY9MMDLl9ajXIw0unyG0GGtMvKnvTFy5Sk8rKQHEHXSzCIpyBWR%2BUvZG9czGlxIfvKkVVd5ynm92UH4I%2BcCHwWF76Lw7hfLHcFIFU07jLw9SAiVj7Fev%2BihR6mlEDcslwjv4IPPBqxgzti0LBoeldtAKnRr%2B9M5wVW2WsMedMO1JHhZzeq50C%2FeKUNKr4LYrGb50FO5yngVUiOz8%2BnFxhIIsJhGmmMfEmx%2BTtztADKw3tEDzCpCVQL1KTKbCe21RTELCOEjvUKQLGQMz%2B4Tpu7IyYI1F4KMrG0IV3BtuAURD5Te26OkVBgBuEpBUzByNS8M%2F4i51G1LkAis1oNZCa%2BQ4kTlL1PfYLPxQ8Hc6u%2FEoYtzYUKqRFaJnEGVUXPCAkOIBQCOSBewxPLM7sVnEGdHIV8qT2Dnf9cYzCQiqXEBjqkAZG6TVNfCA8gnqACa6WyZB2XZibexagfM2lf4lV6OWCZlX1TJr60u5jaZbk5EF1e7xVW8WZs5RYlObxN75ZZN2xy1KO4BSAkqfl3G7NOS7TsC%2FJHt%2B5vtgW75dP9jc3YYdZqKJiiWP7ktGNE9iewfHPapEjVkTg3KseaWZXIeHh74Y3kgdE7KMO5BgadwpVThhRgQzjOxGe%2BpOPSfBcVhyAH8r7V&X-Amz-Signature=3664b0986ad9c5858168767bf3ea2d9bf61196901c0d565bde4a1754c0a6a8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2W3QTIC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVIGckwcGo0UPbMRlmsk2xHqJykE6P4L4WdS96On8U%2FQIhALNUBh2gDbMNT5a5UwHgVy7Vf2WDQeM%2BTMzB5mHBimUvKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwDOvixCj0cvSO4lMq3AOBNn0i%2F9fvYtM3EOcA8iWd2RuheuCaOTCvQKz0%2BJFZ%2Fpd0N3%2FscTz%2B56pBx0DlaBCiR1LP%2BdqTH3SMpDg7gYBw3ekgP9sjkGa%2FB9WQYypOM5MM3rY3HbJnnnPfITdaD%2FF%2BLQpl2c7kQub53dC1GvecrZh70ECqVJ0D1qnUAENMV3EcdMtyp7yWCTb6ngMLmwTBCHzYy20AMDCQfHCd1mB0%2BAD7SP6GothJ2Y6RKJDiVKNme99FYvX91hpW47JxTISEedHUm91ZmBvnQAQPePGQNnIP9%2BUcSACBaqv6I1bx%2B%2FYZ4ZRfmQ%2FfRsM1DUJpvMGEOgdKqkuAirYOQTvw4Y6PZvHfh%2BUEVYj85DG%2Bbcrwos4IeCHsL1Wy%2BSxGJRp3R8F9BNDnRLbISkV4ppA%2FM09w2CRW%2BXUkgh4JshZ7M3%2Bcypq1mccX4qLYqoCWgqlJaRLjmQiB6MwT0wcJWFl1msPJD1aswfJfVeKx%2FnA%2FdQqEDVF7FgR9MrFo7Ybxp7acb7qtxINeFb9ZYoSxLvGubcVJ25uyRoIBstavBzf5YHwLnqE3oxX8RkniG8fO4DBDecwDrGZshwfcJZNQ0w%2FXGxGWKWJG6TXRGi4jf3i6XIHoTbAbC0OPt5s%2BYw7rgzD7iaXEBjqkAfTsI88Bhhz0jIHLvfcsyKHAsdxedUadSW60RaVSxFQJ7QvaD0Il1Bo4mhiP4WKsKb3a%2FGqA%2FKGSL%2Byg%2FOlfz3AGtCk3OetDXlo%2B0u7arKYxsY6SLUF%2FGP%2FWCP0CCfDnI6o%2BHNHdNgeElvhA6JbOGLzzmX%2BPmGvGiy6eUABqc%2BzsiYVOwLSOslxLhAKmSYAJxfo3J9kGIrgjHU%2B%2BxhRh5rsA3qML&X-Amz-Signature=d9db21ed46e109e4dea7eb9be9cba4287c7b50cdf4fc70c064d2486aebd0fdf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
