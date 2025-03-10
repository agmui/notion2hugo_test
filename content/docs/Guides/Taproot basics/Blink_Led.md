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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2V6QHK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD1GFvYTQbOAY0%2F4%2BF2gF%2F9U%2BTdvPZy%2FZX6jg7XyhpfegIhAKWzSatg8nHkhr5wr3ioO5dvVmIwJsFe38%2FgVh0GkCf5KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwioonRMB0PweCUtVsq3ANo5qyz4V7hamWXQz1LAE2iMQq4xDNLjlZuKh4lAE%2FtRoEHCW6EFyvu7%2BWKLAnhK%2BepRm7BZal%2BZpCNwcOs0nX%2FaUMFOlgU5eyVRa5pZDKnKstre3ifTQDdnqVYsE87TpDvaKgkHnKwUXTeKBGtQ3D9a0taUSbOU3%2FtSt%2Bc4iOhliFrliPT%2BhwqXAT5ss0CUffejFRGVSzhQGV65jgxlnYNQn9Rp81BvQFhAIAdRPZfJDWyIsqsxUrGMce2DFLneabIR7nNDAt8C%2F1qsNnFWMx76qjS2gxpkpbuLMfpRIu3jfyIf7GtnFpUKqnvO6XmaFmTJzNU8gGajzHD5AxMdCcWZzKmHr6tAWdwm3DrEpSka9W5mMhD3DCnHnNg4ZsVXhHHahc%2F%2FfO4hShaNT1f9p8kCM587xtzDtRVHgNjCnAWl7o%2BU0PsGKv4QEDpo4t1S07FeEQb0yH7kBQKnbceZ9n6EWpXc6w1q7xtQsdcDkU7wNDr0qMxD8A8i5lZIFvovvqK6SRp7FEKI0p4CgFPByaDnczlFYmij0nw0cWXaMvDuTS8oqaeATM7jNUBEJk7qpX0XaYuVuSpT0gmlZ81zXnmcNnU9%2F3jh8rgDyyqPWlPtjRL8b6qVPKAz0yHXDChybq%2BBjqkAb92sXFL%2B0u5ANVlUpfqT%2F6%2FZIGH%2FS%2FaIS7pO7fQb0m3bwdq8Hy7aHv0XCWm4HxUVq%2FoCI5Knpdqdya0jCx6ewSzHSCGCfQD4YkiExPpUrSMA9BCcRRXYvXcGPgEZxEyNFrmVvmYU0GRO2xteNzP3FbW4M8oKV6Z4s%2BAzPoE7Z3w2ay4S0uBFqlQIlZbdqpAFbbnaMzv%2B4wkCh269k%2FveF%2FN9Y37&X-Amz-Signature=e4fdb56177ce66216876759da617e9d9be575d1178264eccdef69a4736f035e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZZ4ITF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH6JaCvgs%2BhgTPWNbSUdXtmha9F0xoo0eUicirl6IxaGAiEA66kqElSTp0ShGx%2B1dgdD475%2B5EpRpt75Bhz%2BlTuQ%2BscqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcY4ZDToay2PWoRAyrcA8QuNGy8n570s7CNTka816UUPJMvpaGrEgZ8EmVk4HT%2BgAZ%2BLkRcnpV7Ls%2BE2cMK849uovUT0T%2BDFbzFIBXHqQj3O39%2FUn8km%2FM6yF51z1OMmsUadyqUIKLbkevPbrbNl9z2sqzjuNdCXycNvNok6daWNxMcg1mRXirYVlS4YruCvrp%2B5a3I3SSwR%2FvXVP%2BHsfUWKzmiEdDIQNOFhFypeyQFdvfCdc8YARDJ7yjwbEeIamT6F5%2Bc7zXAqFj6Sp%2FVfVyqX%2FpeRGsMTo6hTSlvDNEomBH0ECMV4lMhB82CPV%2B0PeVDICRGsdC5t8o4fksduvTO4ZOFdLjBLaAHkO0diQvPz1ppi2iXoOC77Vehkb3HNxhfbm24G18T%2FF7sqDIGxGSoJKUfOJc7%2Bh4sZYFNrBQKNuqH0GwrY5BZIgDqbDVZtB63uVdf1vzRUE%2FZoTHsX11%2FcnPyd7rCEYcLWU2CmpHc0ol7WjFx46clBNZTKFNMPgOy39I8ZedAoqrkw89jwaSmfvd7pMFj4%2F7p1O51tYC427JYHwJY3ZoqUCAeca8TbG%2BwQVnLXc9eFPsoBEiNfs5NIw14caWAVk2GCJODvqCY9j3b6UhrNR7evwEMdTwAJ%2Bv6QTo%2BPChJF%2BOMMJTIur4GOqUBzy5BR%2BnOSWOGBsGi5o4hLEj%2BxM8yQpESZgWS0BpEtFcK5Dr3LpndxfhPVYXpvGVzYnSn5DCfbv5iywuiB%2BvikB%2BKRmlcttLvqZn1836a3kqmGrlO4eJNS%2B1M0yOwCUd1aqtSQh2kkP4l8FIR64%2FjbceIoIdbrHqqkhokqqufjOJr90oG2%2FX2pcqaWxR4%2BBtdq5A690KOLKK6ST8CR3Mjw%2BXKnjcn&X-Amz-Signature=d5b270380e730353cddbae42a56fe4ebae0d2f22fa60bdd3486fc63438592ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
