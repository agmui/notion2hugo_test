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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUVF3FJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfuffNFLvzid9PuDGKhiVmrRnflKnPtb7m80BBVuv7YAIhAM2XYwb45repoqkc6OhEWfB4f7yXKzcvZVRXhgJtHBGcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Bv%2F58NQUnYQAERPcq3ANgH%2BZ0pNVZmEBPobmffZfR9OhrT8FZd7ONiqX0zOQl0LeOgLbXvoXQHYpH%2FGSqkkCgSYml6BOa%2FFlowQDCx7poNMnfcNQe%2B4UM873GrlXuaNgAOB3Ygzl9xISVRgwHyd5cY2w%2BY5YzyXBp%2BlRkecPsXuswyNz61iHZle7%2BUo%2FdpWcUev9PBYfD8dzWnaoXqZlWmzO2QxArmtM3ueUC2gpwej91LEpanebuI1hIdyKQZxTyuqg0GOMeB8g723aWxXr7wjlrUKzL997K8oiZfBtE96halQ1vX9OymWukmXIM%2BMJed2fke1G%2BRfWOko9Ar%2Fi16Gf0PJbcFsl0d5vdeZDMl316znwopQWmykhSYoBW7vxutTA%2Boe%2BlQ%2Bt%2B3uWEL%2FvXIj%2FOq7H7hKwQto%2BdExX0kBjiGd2kdWIKmseeSXr%2F8VeIx3XFcr6NuksBhZ7d%2BmTV5n%2FGlYGYl5%2BKPwqpj8JmFiOZtL7nPslR1JVSMz3lhyVnWcuZclojoB8ge4%2FkyURbKr%2BXNMSgrA8H5PF8jentTeT86B9hNurFuktqTMBYH3AEkuNeQNoCTLP7epQRdWx6BQPpqVDJP5C%2Fy6UD6V78%2BTOPgtC0%2BNui1nq%2FdEJmifzNJQCFzeW87mZo%2BTCO1%2BvBBjqkAauwgSRqdkXS9zrV26K1hKhayVxgC%2FZe8lpEELVrizaHl1GkdhoQtSxe7GCJ4eGoNLj8SbTytWFcXDeP68AMvUyaAcuA2%2BSanAz4uwH7T8NGDbvWClSocKzRtOv%2F%2Fmk6uhMC4ki8Z%2BwzyS8bNattK5PKsQv9WEum1s7Dd5zGwo5t%2BrRUmsg36cX%2Blco2YZN3VJw%2FykCTTH71kV2P70wXowLhI5%2B2&X-Amz-Signature=34accbbf3af9e64001926261262665c0578d695e4109f2f11748b9f9bfcf43c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSKMGCZ7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHz2v%2Fn02um6A52sXALAeTUAbuLbcqUkV7PHiCEohmpgCIQDpWoFov5tHU1oHzCmAUGXWzstv4hpJJ4P7GFBIp%2FI2ayqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqGRc0%2B7zsG67gJ4eKtwDDq8UcwYd1qdfM5UZXb1vCNcZO4P%2BSOiLHfnYSe7Y10xzf1rCpd5%2Fr0pknimewHEHskV7bqhTFfhx5pO%2BFCxrd2%2FY8RUnhDDh9%2BiEIJtS8m9NCQLvnUIcfCJ%2FnAVGGcwvf%2Bq5TAwa5yOVfndOKR0%2Fc%2F7w12M6%2F%2FywYPcetJmFtih8F3b143%2FotWl5Mn0k6J6neAITwhwcZ3fMxPQ2%2BSzA42SyQaiDYGU5okyQYkd6Dy2c%2BIdqVywKNsk2anv4BESam%2FEFEuXtOcHdYqMhhMGlNj5bKBr85DAgH%2FdPAnpyDNIXlgL7vrVUBwo%2BUeDujqFI1dY7v9j%2BX6hH8v9ea87sNtXQkrhm%2FcjyOF47t67igaGjDfi%2FY0UAKpTqKdX5l%2B0ATIdYWMLBot258%2FQfCEdpVUlxFNH6xnB1jiHKL3EExl5Yq1WdB0s1UY7G68bBiTc%2F8xeG4hh%2BwJd75ygI1YpxeLkJMnh%2Bk1BagRqSTx0IJlNBJHi1ASEGFmQquU4YUEoT89WnOJ3QoZnCZ6EU62%2FqZw5bKXuXhNdc6uFuuhBdHbfiXs17xyIoVvenGSJY0s757RtkeQrqgKmWCP%2BAFgFSdWCw7D0JyG71uvd%2B0cYYML6EwGCMJiyv4NradNUwv%2BfswQY6pgETfuHcgskPHH7%2Bj1NyAh8vwZVw%2BUNEYQAYQDMoUga%2FflFVaf88m5Fi7quFvLLJQjAJkuxDsGuG1XZN27o3PnMynmQR5Q07nZKOWRxubMHXH4ETKUYUqAKZv8cMBkGf%2By3LxRmLrNN4IDGlfzSJOWytuXLp1LkWxH5v4qI5mvh8BmKwaNOG3rNDdGYKNlR145oji%2BgsnTw5TfqHAx1auu9TZ2mrRf35&X-Amz-Signature=f5534d4c200da076a38b07c96b9e734cf31af936676a92f2bba1cfef18bd6b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
