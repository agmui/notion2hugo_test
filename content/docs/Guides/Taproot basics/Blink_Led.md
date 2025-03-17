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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVDD33J%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5FOzwm6S1wEo%2FpxzQ7xXAmyk6oNSFWiJE1ELtzX1fmQIgQNY162Mj1g6B6YUtBMFaqI0r%2BMyOqKah10yHm4je5jMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDP%2BhbBPqEC9pBgbrMircA%2BhS0TrKYp3pXAIlZoeRH7IfNoe358NRs%2FI63gT3Am4X0Xl1t1WgcGJ4rDRY16Z8548MTPIC276ZnC%2BL3xAXqcIFIiDhF9CL5Kp2HyzkNe8uAKw0WG2O6YYYpYkZJXYgQ0KAg9POJX867qTB1u6QFxFKBK20OLJCL907dC0ebGDTOrvRtWgkw4CgqbjLRZcxN%2Fn%2FkdudQHU89e%2F4bd5leDiT0B1VvNxwCdf6oJwQjyaLsywYk36KdFDBcrCI63CZE4h5N5auLB6E5sbb88Ji0j3GrdMNazLlnZ%2BjdtRU6fCgD40J7ObhwZ04jBORBBoC0v8UAMswh1IBjwjV8wSVsTRLyKBPK%2BDvxUo0EcwDs0g%2FHn1tbXsUsKCcB9I32Z2JoUw11DTWCYRCQR7fXhy8xG7tL6kAD3%2BxACwNf0h%2FBieH9MsYTWjDD%2BPIJmbInum7RHpOwMbaeED6pg%2BnM1E1uH92s2%2BzAZrNlNifvu01cugXucv41CbW7I%2BXeowQG8LrhGuDEGdcQqGcsNfQbx87mm7PPXXfmByGpCpuRl1RbTsB9HRGtcYNH7BDZ4CNWp8eoytU8oYAGMcVsd4iiQXYsnQhsPKhThWNfSzqZQJHUBhWI7vH5hbVXv%2BFsuykMPna3r4GOqUBxcyTfcppatgPDI5kWnI2INxCL4oyG8aNS8TbU4Zd6LkL%2FnkUrNW2rg1LY9VytJ9i0lAxgY7WIimE%2Ft1E7MNEUU%2BuV%2BVq4njuXP%2F7Un%2Bn%2F3I0zVIIXTlrxK2wk8z%2FRUKckmRaH6QCKMp6wahIz1XfZx%2BKQA0Epn0Ku8u70ElClhvTQQr%2F5Ap6SPBNDtxPF%2F98GX7sWiSbAqbzNzg%2FFYInoz5ekVkB&X-Amz-Signature=009611d107ba2f3a9137cc8bd8288241e45ce48ec637f046cf6648f7f864c8ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFEKM3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDORYHWsfuwX2giTt1dyZxDQKbRVUeklbN6TV1kHsFRSwIgSAx8fjE25Qo5bqtTeo2heQVyBOMlJIG4taLnopyRvPQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDDKlQ5idOEw5WJHOircAxHrcs6FyU%2Ff3vMBcGC3oHOtK4KsgFT%2BtZmdqwb7hwa%2BVZcY5WZH02DTdCJY%2F9a0gt2CEAjkdNs6EVsDkXqJSVBsv2HQS%2Fa7EFR9XFrWA6uSeT%2FJG21F8ArVxhOWwr%2B3kWA62GogFErc3B2gUdPQ%2BOh%2Bu9X0Xnb2y5sJXresKIxRF4QFQz5V3YXOLiTH2%2FuaAvCUk91dKZnvTmZDBrBz3wzoFmkmJ%2F2CQLbeTdsYcjMryTLbhTpbBjWobamM56lcPrC9HVHkHjK8LrEkmV512qJaOtdT4ovNFo0fEHEXktIuEjVnv8rdM3yt8u75Z5dtcbuqJ1wf2x%2BKz3EusAfuGNrFxx%2B0waDGnX5Fu2Fj0U1VxpmNM4quwYvwOt%2FyLdAOgpx8uffs82EWOuzp%2Fjznxo9UMOe0RqSa9tWdxsmdZlpyyP%2F9S6hatD5hTcCFi08a%2BFz%2F5XDKtO33VYLxrGJEMpHXahgTwktAExWlGBeVr6Z4SDBF3vVyEkY%2FUT%2BOxXeQBfL9BK%2BXdkwgP9jlJW92cShk9Io66ka8Td%2B4JHe%2FzIYnfo6D7Pqrhkd3mTbnTQPXW4f5wBPY5BtUrYa2BZw3a15P8ASIxiFZGTxlXfgRBep%2B2nUg1HWue1z7hZf5MP3a3r4GOqUBvcCHdC%2BQdxViSWUMBF6M%2F4wmhktGGbMicrHK2HXy6Nq2VTGCW1OlYRGGlMoVa%2Fo2pACblkOjfmai%2F1oH%2B%2FC5t5HJx5M8GczfgIb86yO8GbtLPQiUBb7X4ZdtCdzwh1m0z9lgt2xq2tOkJ0J0sPHrldydll6TTVk3BfCPmk3FwwVt2ygHBaWyGynWXh%2BD3g3hBsm%2FHNWJG9rhHsvKs%2FAIck9%2F%2FbSl&X-Amz-Signature=00b38eff5d1aacf84e83fac9dfba6033c53d5f487242ffe0881371b673536160&X-Amz-SignedHeaders=host&x-id=GetObject)

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
