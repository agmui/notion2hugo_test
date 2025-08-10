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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAZNSFV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0PlwwIoHazRgMuD9FPzbMoDh2EYKerMUUrEtFPNQjqQIhAMCJGsWE0583EQRnSRyTHo6ACZpuvuJA7MpDHH7597SZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQzq7HNrXCC%2Fj6JSgq3APnYf0GGotFx3K339IVEVMBwK8NYrJKKiWe1j8gLQGHx6ly7rIusm0Z7P%2B132wv7NZKEAY47LTV3JFMpW9UtjGyOLDwlxc5QTRniuJAHnIjhQDaAJ7MJQbWenu6AvKHr8XLmyuIszBCwc%2Bv8zvQS4m6MY%2BCpInsXFrzHVGzUyBz%2FXSJ2JQSRNUmJDLv%2BuXHiwXRPsw6ls00%2F8lrwgGeu8CxHfrQgEo276x%2F1oraDX%2BUPkDNIgQWDsuvNSFhZJOavmq9YAqsgTZ0KDdVtXeAWu3QIUVTn3pY2wzopbML63GaAYSs%2BEoa3kloJPxwZvv79TVT6OKyQP1DNODzzuf8Od6DnintDX7m3w8JNjz4uSpPSwBla3flm529coK%2Ff%2FHXKpTpyiFNyMa2kXdb670t6Z5mTidoKAij7kBBBUXBONYSTYSF0ywpuPj08yFNRtbJZ4rHJfdryi6kVridzegtMWqi9m%2BNtVNBft36HqqlELWN1Qa6bRVI82PXBATKg4mUpbtLJFNCeqilCXhREhffu%2BNtc8aDom9o2IhaDvZsukG1W33B2JETN%2Beg3aeMClwpp3uvT2ftaS%2F08dUsEhPLAQIydAczVODtqAjHrBkvXWfGOYcij%2FC9y7iEKAQo%2BjDGuuPEBjqkATdBzrpn5jwIHG%2FvCVXNE7n8hakQK9cJ9qwQzds%2FhGGhxdkQGe4rXfTocCxDiApx2sWzGCcrXfrm%2B9Vt2XW3U%2BAZVuqsdMjRg%2BEk5CXBhVmDepzniJte3Smgj%2BtmxlJrdqitQyVyRTErjd758F2GCgLPkEJiBdQRGDdA4JufJ1FzFuCG%2FRQtK549YCbH8Go050zpSNs36hvAI8Sl%2FLASkQFKXz81&X-Amz-Signature=518ccb1f089c0d0fa1dae9856840c892443cd919ff6ea6448e1958ece44123f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTRLIKV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARO5DoN7uRs6MmGDLOhHUfCNjptpH2YAwcePAMkGarqAiAwMPTJlkAc%2B6onXB4M472qDum%2Fa%2FcUOYzk%2FDluUSGijiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84ddfOLDwJqyvptfKtwDbXiA7dLSYzbCxK0YTe%2BbPomrKCuA1s90AIhc8f8KoOWkIyL7AjXGilW2xn6M%2F99ZQOZZv4x6h5JT9RjrAfF6WCaYIZHm7sTXFJzmgAQzlsOKRm0NWbIKicijFvIZU3fC5YKrxbnqhbgDeOpNLj222qQkpOPq0y1XIl5J9RSqygx6u1dpMQtYVNZ1Nce9StqHHm6kvr8S2BVHAaWMwT3%2FIEZ%2FyCBkjaeV3khgi%2B2HQF1sfVOlWfq4LRSPaVa9AK%2FmopB1EwKMXfcuzeb%2F4YBqwNFbTE1Ba0xsVh0ssDxNkH9bayw8NhZ7ddFEA2smBYPNYAKhdp4Z94q4HrFaPJZ8%2BX8rZ2e5uD%2FYwS27OE7Au5KoIE3H2IlhQTzgUmFlr2GDkIY0Uqh4PBRdgvVf4TO3qu8FVijqobyig4LsyPIWQ0QSMLLoakgfDNDArQLwn8q5PYp8AOgZvgc8v%2FV5E7X7cXTZjQy5K4X7TwcTAfx6PUsJPQGc9U8p7Lb%2BChZ4M9jUw3IdXU9zVwBu4eVhwNgD1YxZkzAlQJnjB2ibKX%2FANwIYqfic0mLcJqTA%2FU5hNNRqEuoDbY2F%2FlddNf0z86lxwLwMgK84ZbBDvrEivAlLxUC3lY1mGl6t7ca6KIcwhbvjxAY6pgGLVdYi%2BqSiBrugA%2F%2FlRg4xqfLo%2BbkBl3CWMJlwYUpe8JDmczlc2WnZrcnNeZFgN4Px2tJ8WWPO1xtutw6xuxOd9ptCcHQ2AMV4LrZlm3nmxiLRvpXdx%2FZUPU2cYj5wuvmGGT1m1oHt0ZIbYvzOoC2cnMhEXbAYA1ihWJB%2BWFeBakFZZO2APeePUCidE2Bh2hWX%2Fds3C5ZpweGWtO7dpcfkvOn0RGZm&X-Amz-Signature=cd9ee9972821809d252e2eb9d242534ab7f72d49fb22f80e0f181c919441a6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
