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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVWGORGI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO0xrWIBt8BQqh8NawlEBSHq32saZtgAi5lVsChPBetAiEA1g5z3ThsNQmslm85aHhrRGjL4CAKCF%2FpoCpuW0IHVScqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP95atXiIONUmQIUjSrcA83d3HW%2Fhqtxngnx%2Be2CFvyUqktmh721k4xxp8RiyYfIv%2BHTkqy%2BAyNVUVWaik1GDWn65qsy0jnO8NNiMVHUmDBWTuc6o4cVStt9cjrz4Dx9d7OE34EYvwWQKUu0B5Sap%2Fe6b7t5m2E7Gjdz9qWanUd8gDlQNdRs1Xwh1b%2Ba2SyQW00Yz2YTQuqQ3x2dj4bjpdOO16SPH6b8p8tcOZZI9HvAWKTbk9Ww8tZ6ao8kQ7AzWQjtE8aYBxVSobrjRT2sUyVcWDPUTBZeM9DYwCOBsiQTy%2BJARyfpglNE7i9bcxK84eTH6Fh6a5DLmpERB1jti84QpTDj515fhx90%2BtusgtptjiAjDj%2FhEns6S5uDDgJrGcN1EbJqir6PGw3qWcC0uyMel9fZWGKsVMiGeJfzG7Kf8ErQrvgsY8WwsXsE1bmuLUDxZhBYHdAIMxDLdljwu7XPqV%2F5%2FBbRJtxjXlIqt3EsGpztBLJtGjea%2BR%2FLzxhEF%2Fo170fb0hrFyJmLQWiBGPZN2iIsjOp5e4rBzEpzrPxX84cZ8AXOZNKNgLP0z0ekpgPbzznnUahgr%2Bd7pmd68KmTspudjmZRVjrjXg9EtomHYrziEEIEsy8GESVwh%2BdKYEbXbeKu2vcd5u9VMPj4lL4GOqUBtyoZz4dFCbbNK3qJyIzv6BLjy%2FVz7PMXHOGTek5pksq3k1ZbgMt4sldiMn3Hjl%2B4KCyPhEF9%2BJtRYbTHldPTR9e7a8m96sD7utLQm8PdA8at8fXUkBWv9oV1ojErtAU7uXxhCiw0My4dyTOOcygtvVLxdhZ5KcFrSiGvvx0PWvWy2WLDkAhy6DgjOfuS1q8L3FORFP0ZysPph6xDm436VdAV5FQX&X-Amz-Signature=25ec7fed7c2d2f1ff39b1f1a5ee4b4dd466c0b19220f56e313e2b0bf797314e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPR4CXC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLFHLzCFfcBWiRRno%2BlpG3fYJAfTVFoZ8hb%2BD35ihV%2BAiEAugfggVQa9rb6rMSmwu75qIJBZs58qD%2BRm4IbU8EWuT0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJUVi0d7Ndltst4CSrcAx%2FQ9tlwiJTXQiLoniwartzyNIBrEHb7Zca5uwVGMXsbFokX8l773U52OOnwdSBHHGfhB6WujVAgKi0AQPo7Z4lYINM3PRCyyDkpU%2Bf2l%2BnhDypIF9kkPclCVb4TRaAEjvDVDS5%2Fc%2F0e40amqvRoBtWsaXhRNpicpdfzuxN2E%2Fa2PgkCMded68A3PTE6TQC%2BwWuwY1TGd4bbRdIH1T%2FDAubVMlkEVPuzG%2FFc3qBDZ0rKQ%2BJ0m1HRe9I5vPAsKO8Ew2U%2FRAzdQQ8HhM7CkRtiC%2FTC19XDhfXAAZEFg01HkzaclGhXKfiz7y%2FEj%2F3kXiWyiai%2BcEaINcYVbf7ffSx0McXXzYkf7qh5y1MLNCsLbRz%2BZQsOL7KMTnGLONruSdSgtdhLWdiV4G%2BTIC4J9Dir%2FgPQqW7qJe4xABeNRFwODzlmFULj%2FIAu8iYKohsVbQ%2B0IfNHVlIEkDzUQdO337O9uOHabwS%2BL3zaJQv2eHimJXiISzH%2F8WX%2BDJSP5QfPFOfLtIr3zyCf9Xv98TlGfsFlBjceZzFnnZAd84TQrz8RszJqDGSCiWlpO0DeHz57%2Fsg9fXW7IBM0pPuPwXstUtO4qz0vSHjBrxdUtCyCIjZsPMoHUPzVI95Xaq5zSHWfMPj4lL4GOqUB1P7U%2BDkDMDisvTfGPlq3sE5J51%2FzayiVZzn3ouVCn0OG%2B3xvzio9n390FPqeW5rzkZZ5ZGPqtlwMGgn1DHQOnRkzPfGy1ykg7ftUs%2BugICag4pVy22I0eKwzG7kbpG8fF%2BqZRd16YIgtDoQ7UM4w6gTCKZiY2Zb5hyl6Wcm4wmCO5m2apI71wjyY6L9c61nyeoO6GImprRMX6VWQRZxI%2FRI79mPo&X-Amz-Signature=73e3030151fdd7097103e83cf00110a20692905e6f5cdf776bea2b08d02d0dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
