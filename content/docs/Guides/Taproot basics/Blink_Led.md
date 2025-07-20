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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOHJHAY5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvnHDAWwKzITjyNZiCCYbIRUo5MsiTnqhNw%2BvkZZxnugIhAN3TY597D4APGOhjHpT3d%2B7iWwfxJuqMoHpcgF7vUZe0KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCSVz6tuDEndoZhJYq3AOjvVuP5tFaM17P5gEdQlwyQrNNi1gc901gCPqQwb7kYSHt1rAKEsJmGgC9BzTWQW17odKyC0UBGtMPc68jS%2BiSxQVCqgPKXhox5CcsbWcTXB9j6hviP4Sw3fdVit%2Bc38oRnRfAw7Rkti4eD%2Ft3csIejCEF7Irg%2BqAbUcqObKG9MiF5%2BUWRhavu%2BTrU%2FUrO1s8OgkINlFlJzxZXA7ZAjXmyvTyr%2F7G3YKF%2FpXFdJj45LWrEUs7rZbyLBwBWFUIK%2F8eGqZG%2B3%2B2i0mazb47eH5iZIAvasBgg76M4w3yiCIZg%2B%2B847re480WWcihNsxsgFtl%2B7z5Fqn%2Bh86pB%2BmdweybWCy0Rm7nNj9o8mHhpaAOm0A7EkPnvcEzM%2B8ZXi4FwCKVEQsI3mCaA0H3wZWvJRHjPyxleICXVedCaLLNubRabuQqswN79O3TSi8bZVzesRPPd3ODM1YaS5ENIVkCSEjNRMt6melo9riwOxK%2B%2FSYqNlnlP9IUtVKC0kmsOsGlMK3vmLUXy4IoGzsksfXp%2BPWsBUC1rDr4pb6aLMaGJLJcbV%2F%2BEl6rlf7EFYLBtfQNn18iuwkNBWCvohpwbf%2BoB8c1p2RS%2BONrTSPN%2FkHrKrOO7q6Z2fR96xjRQWDk0pTDr9e%2FDBjqkAR%2FAxnNqvD83%2BDAKvTo0%2B%2BG9vrp8L9AsG%2FxknQY%2Bbl0r0sFAdee1uy%2F%2FbOMdleNov39yE4Er4SGp4TjEnUGj5f8591OkrnHuwozV%2FgXma6EJWnqgYD4F82KW68gZ4OuUObLpKr25m6Q0XDshkBr3Xxd24gpze8FZ%2BslgYlFNWqvAKkiKqFQep5E%2B7usJAzMA8QC59SDHVe59SZUHt3SjlIulyMUK&X-Amz-Signature=bf8bb196aeb17f536c9ed9e07591f185ad1c2dde89f0423ff9d1028a36ae5c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIV6A4N%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbEPxKWYtxMKxsffnyyqGLgAlwb6oTGF5%2FrSKE0ISugIgEDlYMpafrILoeNlTKhHf1MimaTIfPj%2F6pUzk0AwRwHMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiBjIRXy2WUI%2Be1ircA7UQMeB7m4XyS5Ai3YL%2BFzMt1L5N0seCIoi4YhId4lGhHbRqRLVOsNbBz9L3JkSFFLv6H%2Fzzv3TXi9Oq0N6QhlYMRu0MApYz9bX3LJOQtQn1rJui5rJIC1BVNUinUzger96aETumO9lormzD1Yy%2F%2B1qXRl1nz%2BQK373u6hEX%2BD547464qcmFvLEcv%2BceCyc9DOr6AM29SB6uzfxbytd5qMI144U9UAf2%2Fv%2B2IyhznUuQ3oNOiI1FSLvcMRRbygoV384Y9wMS0U8JbF8UASpI%2FMNqi7Kyu%2FABvprWqVZGdDITVJfh0kl52beuLOkUsi3cfwtUsp0J8OtGF%2B5bTqdGJYyhEI0h0SoU%2Bk2T8%2Bgiqharx0AQr7wwE3egb4r6%2BqH2U59DKPU%2F1r%2FUXE1LqQraP2ykiNY2jmmFv1bJXs4BiK4wRR6h4XwLUfMaBeJyPTzIuZxmxt%2FM%2FM8ZGo4jXaVh4608vBn8JRCvlbT25Q5hEjtDobIV9a3a8Ov8LmK%2F0qo5AreuaWh9nCuceLmApMOWfbDRuHFZHYjTH4oLsgNKYs9R4L86t6DcoXW%2FSwLeR1wvw9Li9o1Fd8e%2F%2FJs7PTKXnZ9iqTnzqPvTwXQ1hs9DPSqDJCxruUQwH%2BzFJgxHMIb278MGOqUBNA86mh2E3rC%2BM%2FfStfHXUpria8aUp81O33kvX3lrLScn3Ga%2FwnVtuuYoRgTBhC5V8q6jnZ6C97ylm7k4qrTH9HpS5A6ChqK%2FUKJKIxMc6dOm%2BAxzuItr9HtYuj829tgiIy2ElD4xDgvIngFAinB4sDlP92x8nPDXyy4ZPGY3BWruziprHZY5u8rZXBJhai%2BrNdGiNdJjs%2FYAq85A8fahL4UqDy6j&X-Amz-Signature=cb63a7b4963b1ab6eba5c2de4e03ffd423c32c3d6b0bf8fac8a3bab1ab9c277f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
