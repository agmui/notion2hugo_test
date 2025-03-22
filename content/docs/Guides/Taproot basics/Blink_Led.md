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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBABHDY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICr%2Ft11poJB8E55FPzvsZluBU45eaXF%2BcJSvz6fnn2trAiEA%2B3%2BQ0APFJ9%2FuWvnFNmkHQsfv1O%2FVHWUVxreJEjAyFXYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4Kp5lCriq8BzMJiyrcA15yCmpfyoVYQ%2FOPWF%2BPTrjJpGqgiFB4CT%2BuuuOdhqFblEw9Glj2B0QtWBU14t58%2BitIVxbwHg9h5oyaILpeHnyRbuQMTptZHpE3s%2F7ci0bJf7M%2BXnR9VfhaJkS8CCmZnGCBcEb0kod4VsaF%2B6wFpLF32pDb5g3WIWmTwJA%2BE1riNCVtCzZ%2FeqkZjOLyI3qp4024uMHK3OvDhmwUSbeILWF%2BX9ABVvJHYQNjubvvmgXs5ELVLkJ7bEU6WmnAY96eBx5Ki4lh6BVz25hG4juvA74rwOBZoFVxh2fmeGhpQrEW0XW3Gy4yJwGaWYRvxveJauneQJYYL0NDB810PvRoFTUPDL1uQELXHXspxiH7RseXKSUfayzcgjUbgPKfCQ4rI34nXDmrbBoq3shX3sc9FyIQdRSNmMQJfFR0B7W1GU4i71xxWJ0yv6Eyswil4NMRpCvnCi4n5OuQCSPBbsodrNDHYkhz%2BW7qVfaa0UWlwYmLIr1Wfh%2F2AQGZsoJ6wlRcv%2FeRstBHQvZu38O7U5exr1kIxEDusjw3Y%2B%2F8oTw4FcOzG4S9nkAO1pysVFgvDXKunZ%2BdaTo%2FwquFvUzucX6vse6SFt958V4goUBtnrWZMp5TsAErLssErluhXMBOMK22%2FL4GOqUBkTrXvri5%2BFwsj7PiP8JjR9XWfusb98o4auxzyE2uQy83Kvfzm3asAN6yILVuYQGjIZciWx7tbYm%2Bw%2BDqfqD4sFcYJKJu7tIST7EvoPtZ%2BETINVjSpzv3GzU9xhnJF5ad7IkRX09lyKWzf29%2BwHEi%2BV5gZtgiZzoG3XTUitn2UvJTovMe%2F%2FJHcbrTwWgis2c3j330us6lmy9DHDrmSyhmZqRDsOdo&X-Amz-Signature=39aa0e63484c360de9a8e4d77e394aa33b2b8413769d5eb2e1292e1bd305a35d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWYVEAL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCu3Sx7oJXohT%2BavYR0CYmJ42w7sPK21uF9F0hqmZLs4QIhAJe2EnIwTNMw8yggS6iIaWpGq5TKcmc6hWseBkcktRPNKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FKTKQM58twNUUqrUq3ANAsvR7e8g7%2F3DVZacssY3mi8iPCxRrZhLflnQIolnrHjlOZdpaXUfZaxunm4LkvGaouo9abHFWeV4FDlOIO2UwBXDYfIvrDZ%2BNnfzBzVwiOp08%2FY43Jm0nnZ1NP2JYFvEbynsnBqPjgM32o8xn4p3631%2Fpph9qwN1CpK%2FptBQZmHIYfT5FH%2BuWRyXEWExf5tUFBooHmLMWm1bnAL82idjU6Hk0hcPH8Ky7daN3HuDZ6CP4QwLKeRGrVrsqCcSCEJUNJaX131EJwZCjbEatiC0SDFo%2BdrCIabPO4TsDze0Zu8Q1eGgPgI%2FlYnYRp%2Bd2AJiLJ0hDtOOpnLmWSLbSPt2ZLT3e%2B3dKA56Xw%2FJiQp1kFwgTTtmFSz0%2FbutvVPnKEhaf0WlT8iqFIXFC%2F0L0d10KBmjww31BCXjJnQ3gQc0Z06IBZXX0J2cO7hZtdmr3zplSBjCDTkVxKwUTzjiTfeXyv2NdXXuvtof%2F%2Bncq1FxmyPMn8f3pJ4%2Blwut2NPGuFLERgyQoefY2Loz4FUQEP51jUyrrcHN3YrD9KkuVTZxrbcw2qKYDzi3L916dGGj9l7Mc7ybobJjiLibAlGOFLlSNuumegUtZEpOXG2lWKIMO08DF6VrEEihM7Ftt1jCktvy%2BBjqkAbQ8wcgclmeUQ%2BGoprdqunQJI%2Fq1RDFOHNmN3aodAgXirX4o9O44boQz5hlCdfXCgWenugZk4MeLSOLBvES%2FFdPPfobS3OLiyWlz6ZAtR17Wwj4Q8iXYRGk5IhXnBz8qF3JLoDCo%2B00NXBHnkYiJpfoRIY%2Bp3TQIfkLDuvgOwl4Id2e2BpmMJLG4%2BjsTZrp26fVRJG8%2BovcdXtOQh0k2mT%2B9UD2T&X-Amz-Signature=cccff14a80991bbf8284e4d32e199f7e62df6a62904455d3573397d37fddb1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
