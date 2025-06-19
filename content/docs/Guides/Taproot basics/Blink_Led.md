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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUDMETC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtC5Zgjl5zF%2F2ykuSHnZahG5%2FN7%2FyhBauBKmPIGKfekAiAwEB7XLSlnNVcDRoyC1w%2FbEPifnN4rgFYO0aI4JQSBniqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJBH5Q7KyxN1A%2BDPKtwDvRp4gp%2BOlhd5nTN9It%2BS1hH%2BKZWTL2XD3MUQBZ87clnZeEGp0bhLHGDW%2FPtlTFA0zYGHk%2FIt%2B8PjplevM9r23HlrjnIrRjC00O6fx7NSw%2B0fyfc1hQ1smS9EXTfh%2BXkC1m0kpVRE5elSYpzwL0ccNinnCNbNhZy%2FMtW6xT5Gm6LCvBlylzxWThYW8UOWJNM9sq8yWyhH9snC9mpkY3AAxl3xV3glyTW%2BpmIcj8a316shEeeIw6k6CFIWSjb1%2Ffq6o4Q2HLOX6pn4X%2BwGG%2BnV15%2BrPpbfzNYeDKw0f8TXOH2GBDaJKvAcFcB5mPRBTvP95KOdgJQahBl02jhAoRZ8bqo61N7B8m9KgIc%2F2I6kFMsynf6HWyxPWVKQO%2FRVDLS7lxt9LQYQKu7ggXZNcNMGOMB9rMDRoj6amPqawWn8Inb2gsTQnT7PCf%2FB85S82DdJYU9JrffrRZ1%2FnJ%2FU%2FD8w3svrF3diSWBfCZSb7sGr2ZFzO6w3bsdGSFE7apXTWsA%2BKS3RTGc43Kgw6N%2BVCERBcoI0c92AOw%2FmlngBeaHHvwKjEMYFD0cUM70445NcCb0jpR%2F1aVcv7uWhJMUje29MAmWJofBakTtEMxVtFopjA9lM1EZW5D3%2BkTwma8Ew%2FdHPwgY6pgF%2FEVWvwubvF832NpbKQ5XipQtxCT%2FTSzAnJLJAUR%2FF9aGCPBudqmFNulZgaGINUp9NFItJ5T4W8Samj8pFyBB5AsTd0vQzrNkb2xHXnzY4jlIl9xfcB7fTuaB1atxmXrU4GffZHW4dA1NrT0sU%2F99yn1zJYE3TiQSWv7z6La9wgqTlUW3vkX0TD4FSVn%2FFOR6q39rO9Oq%2Be8t%2FqYPrrx7wHrJgk7mq&X-Amz-Signature=fd40d3e5e673a4d6798017a59e63eccd7c98f8f8ad79c9560e3af8488fca46b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAAVKBUY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBRe3qvc2BA1Db%2FXQ46wtWyDOINIOodThnPQAooPYjZAIgSooaLxVtmaEcbhvVvGq6OHWpQCeplQMbKZN1g3QG6T0qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAy0deP9epA8LzLXyrcA%2FxKzPSXnRrbKOmeD%2B7NAhu3h8A7M86MbsULr8HbyiAbZ%2B7Ze2%2FRXUvwXpF40GvnrTakESeNg6bF1NaWhMBoatij3BQzb3VzeWLoWh6czn3cxtLP9YqQA4T%2BuQzM4NmmL9CRKlElPhY8nRRsxsmU81%2F1Adb3qh6TIoUjQBM84fOLnjQUK4kWMKAPHJ7eUShHKt7kKw4DYP1k%2BmC2paCEY6890rgi8K2Wp9xGTG4vsqAbl%2BsiSUl0ymATJcmZPmRy%2BQVCOrQIbvZ5zYhNAEjbiz4kEZv1p9mB%2F1t0zA6YyXPKXRX8BFtthC4VAEsBr%2F0EKnsVyxXB8fHEjDxX0j0ETZYMOINmaBMjHdcSmkjrmvwBEOdV7Nw9hoUqH%2F6Bck6PxAlAIeZ%2FBNZRBTSgpXONBHcEDmZ27A8w%2Fhez%2BrLbaLDCNuGuvUr63Sq7Sto%2FxXxfSoVSVcDCbTKSB5BMWhPlnTxZfpkbgEk3yAYe270TkYJdHHYhqi2uDKL%2FY8GXZoNdNI79O8WwZjaBgJ%2Bq2pH9VEj1syfjvyp1kbiiOyxjXceYWUd9lgZU33fqElIays3eNJcG8tnqVTezbuKzwi7MNMRDuOjbcRu6IF5OI6m%2FZakpBlf0FlGG6eHs15raMLrRz8IGOqUB1FyLpKR0dvSi89LQ83uT%2F%2BiTrxElUzRapsHzgz3Se9drDajexX8ZgSEJohCSoXbquwqnI0J4XI%2BMM5JwPS%2BgK5OuTw68oRAhqESR6Kc1t1tV2e9JE271LXsP3Pxu0TiiUxNNgKWc%2FGStDT2hdzLGpAy%2BD4B3RJ1ARoLlKjT2M2cKQY1y3h0pdMu74HFEgbHuGCtV4N3%2BErvzjZ6SEUvbMStAS%2Fap&X-Amz-Signature=1bb4e8656d275ef7be48106c50d7fd8ef116ecfef5e8b3798ce52d6f8d9ede16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
