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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZD3LLU3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDnOENe3UXkmA8OPbjlInolQsXIboNLZVj1GvKDBA4cZgIhAPvbNCwjeIJzi2KpJ3vw8mFtIKKXCXO9iSGu8NsdTs3mKv8DCBoQABoMNjM3NDIzMTgzODA1IgzYcQeyLM31zbGJIMYq3AOoDLkEv2rX8sDZfFmIlrXi3cFYVK02SJ%2BVHSSYH7z8J6tkMqJCES63Nzgc5Qh3y4JzwV%2F%2FE8UfbQIxAQVzaAX9hYB3b9JC%2FwC8YIvlaxOqXqrZzGZtzfNRxW%2Fcp%2FShQCou8NsjFNLRvOAJRCpB5F59MEb1luCHo7rGdw5olOKRbU6%2B5HGrv85YMo3yyrepOQ09olFsx05kCyQ1Le2JJvmQTRNLhx0ovCKpvsfm1b50PLZDTjuzSUluCh7tDlkCJyvxcSKQyFihirapbay14eYoOJ60sBMfwjMLaRSJTK7HvDdHEqJaJ14sAAUXC32AkOg9ic9hEIcH3Jvc8m9xlndsIsKuxCEbcpY7figk1CwCQkJorfj4nOweQHrmxTq01gci5ChenYcv1UM0g1GjThPsymWOXynWxnzZf%2FTnYYOfSBtFHIzwgCmeTcfUwsNtjG8AWf90mY%2BtGlluZIO844GdVE1Li7M9IRlNTzkZ5lXKWuqOAEqpKpEdEnohzJCJfiIZGSee40juLr8%2FAc1KHuITSoQT8FItIIFqmzI3EH3bErPF1UykMFlGYZY0XolF5fm1Tyci99GlWVb33bUeth%2FXzqdOvAaU0m54eADMETW0olVbULiEGg2S5%2B2WTDCQ0vzBBjqkAcnk08INhRpDeMee1yZeb26zadZ54b5xDrQxVUFZPwKkj0blhSta4i2xJ8S4EeuCekUBvE6h8AvJiYWRfeyQDGq3kJYrWsCpyrYHQvnCE8qiAg60%2BsQgajX6%2BuChe%2BFYHiyL8ZlEo5BpTOksiA6fHw9N1M2d9Q01p4FumzTDTvJrjcP5VqQSdCnTYdQ9m8E2V8AMg3nLdulK7C4oQW2eNALMbOSE&X-Amz-Signature=b4a14b2790356b920fa220e149f4f0a5c442d290d4af1a3a3001f6382d1fb599&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOQAMJT%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD9jxqbsq7RHmOBdYPBgiDNNmi%2Fq2WPf4YOFDauOjshfAIhAM0h8NdUeXTFvdrXMxqzNN6rUKBb7QTsKkUtZ4ovdVFnKv8DCBoQABoMNjM3NDIzMTgzODA1IgzTFAcdVlygd0cGaU4q3APlpUxPt%2FbfAt7G9uPZDhWJHTTR4M0umz9LGlzA5L%2FmA6ssygrFfzw7pCS83YvAu9CufEhlZrI4vIIPC%2BjEF6Ej2yZp0yqNzAKfcxly7VRJcKmumu3Efa4AQmVidtnt2L9IHlb7c1zNM3itL6H8hiLlfW1VwAl59sYTkvf2M7ZOrCRsJItwIS8VriDD%2FFOu2xcQQPTzBeJjYp1tO%2FDhQyOpNq3Ng%2BZ2C6ORKprwF7bxyQAiKdtf%2B8eAqpXlO2DwWu80YXqd2S96sZda4kUgk%2Bn8ig30sXeXYB87Rr4bjlvTm9ekJuA9%2BBQBDZ9CsJyrWGqGPYdDnYS9XRLRdAWTJ9vH4qH0rtAhaxg8nwt4XiE5GpvX6eGNHR06hwbfoRg9n2KFN4PYDKDx%2BABAW93udU7lZlQBY0xEjspM5YQ%2Bsky5EbaWUISa1%2BKJNemruFYEMVVr1cwcdRYZygQVkKm6NiHObcnd7NU5dpXIN90VsSRgQQMcJJNIbY2JwLW5gYR9FGgvQWYcV8%2BXNReg8UBSF%2BnHcjb5EwOM7vnzR59s72qmSLL5srCdcH2zucGtlM1mX6BEyYcMzm57jrX1nqgaDRVbmw3f59nbV4s5hwuhmRTnx2z3H7nTyezuwu4aTjCR0vzBBjqkATzplnsZr2hJnxg%2B0UNYjFKr1bmCuWjFFKNujm0h%2B0QMLlyi7OYQfI2gcD3LVkpiseqhdDRm9Y0ehEjl2O%2B2pMBCFjoUmRBtSKSx9%2FfOCFbcHc7qu2mVPCbFk6ZqS%2F%2B3uRtH9%2BbF9E4JDPmM%2Bk6J4S9o89GvFq%2BmPUaG152dVT2a8MpLOKQqYVTKkTi0WX8M2pVMwBQ%2Fj9atWJfucMZAhXcppP%2Bw&X-Amz-Signature=0fedbabab33c22e085bdf6ae3503a7ccc53c69104b84cd153a7ebf16c315109b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
