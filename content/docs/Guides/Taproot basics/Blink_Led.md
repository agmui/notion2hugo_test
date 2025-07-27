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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKJC6YH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD0OU8btOKLQ2nTsoRzrtk4UmQbOeyoSqt30I7CXe%2FHUwIge%2BbPOeFIbCRR%2F3OUmHovX2ZQfXkaJPlc46eEiVfZubkq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDIFbcYUd%2BsPv5tMLXSrcA4gQ%2B6HgHZ6oNpcS5Fi61wz2HfZTQ%2Fhx4uwvVudNAbfS4%2BRqGhZiJvFtM6KKiyQ1zYmyb%2BLiSgoHDCmlp4BsRbdj%2Ba9glXwCILB9UM8nR1p665vkUtkgcLmlz86qgwYJ%2B2oJM7Ib9mufp5%2B%2Bz5pe5OvVbf4V7a7oRNeAf85w2G9PhCiMqUPF2qidngxs3hv368oP4uXDQlUvdk1kIE0yn83%2Bpx0mDjWYgAG6CEUsBAhNI%2F5nBvV0nR7%2FZK6n8%2F4JhzxMcK7KMdbgI%2BA8JpX3nbbFY91JlTcCaKycTaXKI4iZ6ELyu2x9vKr1EiWHkFWON8iVwLG2vtivnq1Mk7jECuBAqgPBGOqYaLcpiC1B%2FCJ05SrJdW3NYmYzxkkGfcyHXgRShKf45CXfARW4Wh0NgEt%2B78zv1jOqp6jdbfCEN7ZWM3x%2Fq%2FfDC3NcjSmIswLFoDzpqNX7F5RE5KY%2BmGa%2FVbOamVDBmLXaR%2F2EnKIanF1yUlXAGYlQuOX9UdGozo9ghLWvDyeqntd%2B5l5dlM7FfEgVb7TuANkxTUvqNz2wh5I6r%2Bf2wKdeWQxl%2FIW76%2FAHhqBHWtYk2K113uJPZIGpHjzEJjrRePrgR0DGG5vDEPgHiecvhU07bviSnmNoMLOkmsQGOqUB8jW5YTDtxLsaAAnos8jBoo8NyKy0r6R1D6HrP7%2FLsJr44e27eh9Y8qPDBxdu55LNnbN2I%2Fg6AznWslHqsJqjVnDzRaAlgypxOXiwzzyZib6ARtW8Xl2f4amQB0PXQw8kFToEgHz5mecg1rwRnzcoghrXgJg3B2%2FDHVrIpceU9OX2UjrcmMLvddKlhpbEDmooN3S%2BogJVyzLP%2BSf00QJ7FtwzCKGQ&X-Amz-Signature=db518c0291d814e1ee8a98233999bed7763c8d64ff6ebb465bee9ca678095563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLLWALZV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCDzzbV%2F38dQgvdhWUsz7zmg8Sp5UO%2F6iUxAuOAgG8X0QIhAPBeHcfZY8Z3OIQkdV57Y%2BBjbaRDX1j56oU8Ag4LAT84Kv8DCH4QABoMNjM3NDIzMTgzODA1Igzc7uOHtCeOJQ5bWxAq3AMfxKAitEe%2BNB24uihXrDHlo5kWIijEXLqTN3o6vCrUzhvrlfNQ%2BHe8K6zQ2RJjkCjVGfLwbodk%2BJ%2Ffhx8g5krQQgkDdr7ygP0BJBUo5hRBH%2FfMVlze%2Bxn0fu%2BCVR%2FOKYoo7cqYaUHBgiq%2Bxr%2BPW1Ht9OhmleolB%2FESPvsP5JpeDMEuKPHTRAzxTYCgJhHUY%2B7961g%2BNnQtnYdTkTN6AK3VlsblYv8hkBjDoHnJbTYXJeiYhwqygub5UP2hQwSUyYVMUeIlovS3qor60Uj5EKlxFwkx%2BXobDw6L%2Fm95A%2Bn%2F3grCWV4TJHvK0OyOndqg1cju8iyeDwpgCV3jdBrTXBTKPGUOg2Y90WBlcBqo8rSkcBZXGPZIOCEpcmJTVuKJ60WGpjYExf77uOm9kRFISNSPAjbZ9nNLtNq6xgDFv9xtxreaC%2BuW0cwchEAiCGT5ofmNWb2ih%2Br8JmLt6YG6Cuu9FrzI2A%2BxAiI%2FI40K18aJ6MsmEUulqt1u7DWAA2dI3PVlOVFRIoG2KJm%2BpWL1q1G4tuD9veuLbP%2FE3Qyl%2F%2BQLvWK8ggF9ivh72lOixTZ0LultNAuMivi0%2FwomPzD5X0Vm2nZ64RVWPQHSggk4MddsATC%2BSNgmZo2cEjbcxTD3o5rEBjqkAYnff3EExvl4nxtHnCfFBQocVWvZTbXZmtkKr8HZAuO0fRa%2BOVfRvYO4hKjNfNd%2FEmeBpIAq7taDgCYfqD4YB%2BSyivldnPFEkuCt9ljADjt5rYGjtlZgL6ErJUCUZN3HWgCdJHBiBR1JAtp4zFOHelP%2FiROQUiFNRs22JW3yF2%2BuOxQfs3UvuT9i6gOppIp2KYnFaG3KHQdsm21p3pC8UuLEOQ10&X-Amz-Signature=4d93a3339f71b0c0fd998991b03e974b77c337da60db052341d8fde776ccf7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
