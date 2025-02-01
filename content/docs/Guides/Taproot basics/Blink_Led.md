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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UT2EWJU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCAXKZ1oNxzsIDKfyU22WjakfLwkYAYzYJ4I6omMiPFQIgYcna5gU4qnPPWknY7kbUsPx%2F9xCjCE8cMK0earqI6REqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsa7Bxle40kRCeBnCrcA%2BxJhr7sn4vHVcEmlZR80PEktfty3qVQnlvx1NSslK5akJ5wdY7Dg%2BQEMf5KZeueVgl%2BfjzWdyMU7V2AwQKFPOR9Xo%2FOIg0eM7JCcC%2FqRs5dQlNJhvvpYjBXq94%2F%2B12lEw8%2F5iqferZOLcPiOrl1VXzDjb1s01Yhmkr%2B2tvlazNO7R2BTIWiJOi2%2FARcpCNIF7Q9TzA%2Bczw2%2B%2F39A682YdVBl8ChQyQNnFrbuV5mt%2BkjiXu%2BFTce%2F%2B5C%2F%2BeTodSl1klKmISBfS96gjCFn82OdDYlCp3tH65XKHJm326Ga70r8i4DDFt6601pH2gwaDoL6y5wq5MoNq5r58fO2ChZN9TcxSrWWzhyTLEbqfDg50ouoJ4%2FLLxAYSJ%2FaQ7hJ0Rm7bVMdjeeXoDDAxJStQ%2FejPCiKzXfjYFZvNR%2B%2Bbj%2Bqli%2Bam9E7V7K%2FKFfhMnJHSeU5olEQsKI4N2ULJ1m0HM%2FRTjCZtGA40vQf4sZI82bXsICAAviZtLGpEJO8crPU5nPAkzHgt%2F4jfqu8uvbiEacWvoaHIqoUsY2tzZmMwYtDuKsXLEAWmxjz%2F3Ue98MklrjGD0OcgYu%2B%2BdkAxWzO3JN6X29p%2BjhdNlFaVvgNro9Z%2FDQiiW2MYn7dShX5TR1MK2z%2BrwGOqUBwc49lCq4yEjE94ciQv8BElfF6r02aQAbOrZhAFLh03AmJW14e0Nz33S3vbdWvK0TrlenzwPmYg80t0YC6qaOPHZJF2jwS5klr8jZoCFvoh1Hk5CvjoIAvpDAOU2ksRkcKrvrPJf9DXknPXGKtzFg44AJ%2Fodi3CEBg98QyZLs%2BKBSrd8nrhB2%2F80dFEj2OeXwmbGVdxGE%2BzOLffiztQYo46AqrB8v&X-Amz-Signature=8c2e261815c9a5a6cdcc8dd602f2c2042d055a2846b3de1e8847dd6903dc3f32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUU5VOH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUfV3uSSK8KnNNeg63ECmcmQp61bPFvSGSbOkq5O%2BuBgIgYKuwldVqc2H5L7ePe2uWvsiMexXJlUJVKrv9jar77SEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdbcDQiqFLeVG0xaCrcA%2BWsVBb76PakM5E6mY1%2FFIJWVxEsd7W0ZaciibUxJxWf1hfcaAtDhuhcer9rG%2B3JFB4GR8LUSA%2FoL2VOHcJW8bGbqSuwfNZPcPaZKofoqfxha4acF7MtxsmfN8aCX5gvKQq272euqaCOx%2FLuXQnt808H4oqRUcPOkMfY3KGxZtvqT1i%2FhU1A8WWOTtblUkVc6wrbM5d5qnVT86pIodyTG%2Fwe450pcS6o67iAAmoDtrNzyxrqOOu6xuNANKSYo5s%2FiOuRl%2B6%2FeHgWMty0nCnD0cezMhYP%2Bets6limofb1o53d6iD5wrBTzhIg1VTTBE9Tiuan20uxgKnK%2BO2cOYihmyuoLhltmEkNUu%2BWkI2Tg8EPf7iytpiYSDF8ieDqBQa8FpWbAGq5bSEaeeuzNDNLiCCx9QagsRVZ5Tj40x%2FrYsOinoJFXw1umF7LzVqDpYJfKV1kQ1U9iFKoG3pGzsQrGl9QZnkw7ezTvy2ARs72zynmg57BWbkazLD%2BbR9GxUtybobrwbtU7AJVbqYfiG1EUdxlNgOkqqZ7SoDqL2vYt2Ya8vPETtvv5mdNVeBTS%2BhxwC7D6mgdrP%2BRCFCYzXIAu0R3Sap1LqvKFH3MhQETXzMhtIEar4wxRwG0jSOYMJay%2BrwGOqUBoz6XKXJY2rQ1gfp7tS3CaMUKrXg8lZ27GCc4AidLohT71JRtnEzkhBQVnN94WkNeobpb9ma3LYTieWVqUuEryR0y%2FdjJwKT7N6U7g0WIPxQ9T0V%2Fs0YtlRZn3rLTSJKimSVApsXgTqGrS4lxQO%2FBzynQ%2FfBdnQQIj2HRzwVCPF4%2B98sOVrtlfIWPtbJUoNpNlEEVqv7%2F%2FxfjaR9ByIjQ7c2zX8UY&X-Amz-Signature=e632f68b08ae8cae42419ecec89e3fde4472deacf885b466422d32305410b399&X-Amz-SignedHeaders=host&x-id=GetObject)

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
