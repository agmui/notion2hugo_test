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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYQTPHLV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC538M4E2lNHCnITaXIfcfja3YFp%2FeQ2kctuMijfLUvMQIgDltZ1xGlHmWK%2BM86nswey7pFkBHBO46o4APEg8JVZv0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfvYei6CSLxcsdlxCrcA%2FyBhMa97lcb6ag9qdmputrI7ceVWbQMhE3Q0ajUqIAz%2BRy8TZvVs0MxH%2Fe0tW3aOGl2c%2BH%2BXzfOCxdQZg1zlA9hrrr3XAXc6Ef7K6rBk6%2Bgg4m7%2BMor0LTCZhqb3IFoF3ErBnZDA3AEW%2B8Y4u9BFQscl5y%2BNVAnnRJP7Oygdgc4R9sXhNWHNqdgbU5EP9NZmfpJlc31Tnnwl1oAmlLNEkMxfBo8LAR%2BMFzYiA%2BcotxkKvyGiiyz0LawFZ%2Fq7VK%2FaG9Kd30WnriDyyKr%2BUqrnhYPGAW0EZVUkhp7HMXr3xAssi9iOCnAy3eemS3JhqIHpwEqvUPjPDoJ6OSSBYYvvwnEGEXpzw2ERarZgidPKvKeXAxHtDZx6IOvknOenRhW6lrmKNkPATS1m22nnEEf146VwbqX8wd8R8qWzC8CxaLOIKbSgKa2ZBhoeYraSR%2BhgWV7MQLWW%2F1EnxgONljIB9lN8Q38IRxlEw%2BMdtoOsH7OGJxWK52bNGffW3lY26sIoQIITnOa4gJJpIMH0OSRkTXTC7VVvPG3vbl6mgcAAJwMzfsNp4yWeygus2Egk7KZY%2Bg%2FKg6RHxDDmYBEo5QN59WgNChpRhca1AWNc1YBS%2BEhtl%2BWg5Jw6ht9pyHUMOmwu8EGOqUBv6RS%2FzqCiv0qHkKSEy8wRM07WbGZBJ%2B1JnEemGh3aXVovipcWdsh5ieAGARccIEwz1HcD2OiYHM87M68%2BuAipbb59c6XH1bxQGJOq%2FU%2FhyusSASI4oHIvaDCeZI6vRieNg%2FLD8ubGgkGgOsRvj4et08sc6p6k1Ul69wotniFqZpGWI1h3u2ypPmMAK26ow%2BItwSIsuVSEMHkm%2B0OraSof6SRWWyU&X-Amz-Signature=ebaee5b4d637c1c05f73d483cb9206d6f8536f4b3056650304e8c9e2dcc89e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLEAFFQJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFpfaFTm9NwyZvnqZ7vWOHX3g98MRrIh62mO5frvLkjsAiAJUUa5LjeWfrN1Gi1mY2ggJJUCOX6sZFXiDGWYNzc9DCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY%2FPQb8Y5HnxOd4pbKtwDMJ00eIzGPdb7%2FJbnXycaAhGsxvzOjj4zV2mO98UYsztlYvN7HD0t5SCTAxmBJJRfecSQwgB4L%2F5FmOBbwPzNWF5QykVVyd4Q7fc175RT8hd5o4%2BBoYS5MeN3wAn0ekPMdTEJKPWUMNdQWrPTslneIGCCN5FzxhsfS6socDb7CssZUFRGYreb53n8MrzzfShrGHk6N18u3Gk53u4E6MStKdKvtre4zL7wKtxBiQI7462B97r1j%2BHTRJHrWdT0WNjujToGVqIbWyT9vgHxS6zIjSe2zGFHsgfv4OfXad7uLKjRF0cp5zRbX5Nlhj40WxIGZQW4erecfUz92VTmx4%2BsGAiZmP7zp523nWO9kFRBFLik4h2KFmA%2FP9Jfo9NbIOB9seK1UbxL7182qN%2FbrZ6SYGtsbuO7lnSuDTsjtY0f4dnAr7Ac0jV4%2B3zBhJoaREuVTmjGuAOgeXB9j%2Fl7wwVyZU3jhfwzuBS4lSeX4nS%2BoQmi0%2FtrScxXjXdFVIbMCI4S36x0BUcTnVHRacI3STXSR4J2CnczPCsmZBYBQhtwNE1RtPwfMPskLcs6MCZAkGclR2yeNxUGaCykPjRGvx6m7Vyuv8OPuBrXAMag1UZw9U77lzbxJhFDaL1oJs8w0rC7wQY6pgEQ%2FkjVrgP3b%2FDx5Bz6Nx6SZ4YgHUlMhib2mstc7nlTdRXRSdypBz9aEkZgt8kAiL%2BAL%2BkfnmDE%2FQtmAL2zCZFFFTdrk7V%2FtrjcKtZPYF2VmmzD9v0DClNCyTV8Zafd%2BqA2jzZwUV%2Flt593MIy99AgvPHOcPCcf%2FVugT85NWeuA2UhIHqv43y%2FUr19qaNz96d9Csucx%2B%2FrRPi%2Bo1nFCDHFf%2BYDDIQzz&X-Amz-Signature=bf94dd2a70460137c1b8043273b0e97da4a6ba472716e43991f834fcf88b435a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
