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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4M6E4MX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK6421uD4ily78ZJhukG%2BfVTUI1%2By11EorA0PXmkTPaQIhAIW9tL%2FmGQuHRuB1ENR%2BH34qKJmagWfjK11AJUf6c%2BX0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlTOq0GKjJK8NSV6Mq3ANfS9uOTcxi%2Fr5bdEQVfqElbESFj63agLiFMkhgHQAA43UDYudecDbX4IpLUXjuO%2FWGepFo61Y5%2BpHdHMVXQ7NWiHIx8zY9nnhrT6ySNo4whuRRrk6Yld9KOk4uosv%2BTsTlmhp4hhmc87RevAoFO1Gu9FcSNE8JNkqXUrBiEAOZKmVNrgCQPjAGxZ6YsxVgYgm0hGbDlCCptS9UgNDuEJTNJQqJMifBgslTji%2BgpYB0FLZTw5zWNk1FHm%2FmAtw9auMTaSXNqjiWKtfpaajNtiPB6aZj%2FVSlJegvPGL1wodyzCjm8t0pylQfeRKanetZUX0J914pdBd4EfiqNB7PqvEOTQ8qDGjIzkaGyhaCldoIjYSuWBjGFzmjatrdCEkiWKT37y5hZdNtALYQADiwBJS1ZdpwIEKAqMtcb%2BeumwI5a1o6rQHzQ9plqylMpZxNihYDwB7R8c8NLRxsz3bOEp%2BLpcgK5mlx6a7ljG3cD3K7YZQbPYloStZ6AW2YmrsxjwUYcP4sXfuS2EM7Vd03ZFJNPUBbkQ%2Fr1cvqlPDG%2FZwbgPNxjF%2BWmDgKLeTiEpsu1LlFNjAhHncgNdGYWVT9Ava2x9%2BoIY%2BLh1f3TnOIhL1FnUsvZDAu4Q%2BYxCPOTDD3nJPCBjqkAUmEzydpVWnnJuNHiRmkM7ftVehrmIzfHbki2zIr%2Bh2HToSMTB2epZDcYP2fjwgQm3yNDAprCqw%2BA1sKfb4Ke2TKaSPO3ruRMNPI91JZlzo7MzRQXJpjJFjHfKaYnREOQxCt%2BvNF3mBBrqZ%2BXqzWOLVGNkiA8tS7nz6Gbyk35ZZB6SY1BjKJgTSTFc2pQ3HWKIk80pn4WJN6c8y%2BiEbEWFcBK6LC&X-Amz-Signature=385a96074b5917f0c0d55b7f206cc615e7775a46847fabdd6eaadde68e1209d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXUGWZIH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZq%2FDfd0qLudEbOqPJ0%2B3zWYpo%2FQkklq2fIfr2Hkc2dAIgCC1CB7TEBVk%2BvxagrLdBHttx4%2FruWOqRpPT2wLYX3MQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwEKBRWGdDaONBK0yrcA7FXAsIouSGJEmFJOUIQKk8GJqV9KF4mK2BRseOdh80oKeIFG5KogNCcOoNIaCvPgvs0lragtJ1AiaEjqTfa0LYV2LMpkO0xLk2HGQXmYllw2P4hyzfnoT%2FfcDjYY7NgY7ZZcoD0w9JvOm5jFN%2BjxalLsociqhQdotNR6FAqUSBbd76y7vOTv7w%2F15u4LkU6i8YpTJKVX6MBi9%2B9taIkXcJmmtItIsU9acHRKkkTKoqXDTWkqTxXaf1BvgcPqAP8pg7eEWIMwVv6VuS3YVcDpXHVhD5VPjaMiqZozOQz6%2F%2Bb7kMHKpJnkhclTGmgWhaxyVvl368LcoYPNv8x79fyIOUpWV1pNbLyvGo6aAyH9O0ZcNEb4M%2FyIDS4j1%2Bcuy5wx0wgzjexDuLdqAJ1JuKSs%2BAIW%2BJVkFENUHZpYhOaNUr6FjlgJ8p6UijNPqsq1QbIzoUqV3RxbgfBL%2FBQGFbt9IN1troXVWA2uijqTJd3HSwJYr%2Fgs87H%2BSyPwEHOZSo9zQ0RHby8rqvgYxDiWGpOZjjjRg2vZI7k7SE3KXuDPjx4yE3%2BXdbiP8ctB5AyHSkuqyjs5PVm45GXPNussgFF8nGT8K19AvVEVPPCNk%2Fdz2QBuYDW7t6XsTuxVECPMIadk8IGOqUBZp2iCWzhHfHTkLbxslFLwy2ayNsJ0Y2s3%2FJXryCaGhWBzBUQnkSrm72vCi5Vi%2FZI%2FK2pn%2BPHBz%2BD2sqXAj8oTqtRpGTX4NMVqmjj%2BeMN9VdscbxoKrhLt5MZO01bkDq2PkukzAWneskoU%2FFnIhvI9Zue8%2FYrCpawpDvppoYgyOXOOgyrDUwuhb8R2xWuozrVDbuo5BKuEnWsp%2BPCA8yC%2B218Cr%2BO&X-Amz-Signature=2af8a5705aa0762330f890ba39547f56764e9110e0833e74484108d29794dc8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
