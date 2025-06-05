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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYKUV7T%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIEtM2xdmyHJnTqoKIZx6JYDC1xeJQeXjL2LLCtPt3VGCAiBepf6TueWb7QkdwMlRZi%2FPOs7rBhzSzfDCpZxYRsPx%2Fir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMNx%2BDSVYZ4vttr84LKtwDSjtZNmPdH%2FCrefWUxM9qJPAR7qNnOwTvffJi9CphmDA1AoZcwfYbAqamNMx06MSQdPI%2Fd4ru0wbZTalUs%2FFwMxiSBs2tzUy%2FP%2ByFx1Uvb9TOHz50WGnJY7t0Tt0YuFkaUBmTYSoYOk6BAezOIg82JWvD9hNs%2FiutqpRA95GLnb8edJWNKTi8XVb1fcBcYRx30Zgp2UEtLkcZ9DV71rdq0PDZ4kdIMqhvG5Re4%2Bi6587pyD2TM4tk5WjNXV2w0TezP8hJ7exIlKF16Jzs6OuO8rYhZtN8xzR95P6r9wxn35GBjzTiWZSAQ%2B4oky4yK75RVuL%2FMJvBavtfbxvAQCKUvzuKiahu4uK3sxxZrsnVTbzfs3U7UiuXydX14cTPuIvmf3eGkWzJdxkQkX9Nurym%2FTH6ob52YHMetgcrbg3zTdOc5EwkK5i0hVev1vXWLv50VS2u8eN8wEfMJZkTQfU9r2gPjXU5seQ0lp5Jh%2BaOwDcSWQE%2BHh%2FAxVT6U%2BYz7qu5h2P77dK4aXnlUlyH7GYMy2aIs1Lu5qQNZPXRUhuG0psiK96kiyDzA1ENtk4tVJnqOw5H2jWgYLfY8fw8sbva04fex8zLilG4CBRscYyBTIssPFrLy%2ForJ38TcZUwgNiHwgY6pgEiAJ9oZm6oF5Mshrx47MNQcBQKfLd4iZn9bO%2BBzfWoA1kF%2Bhhlr6SE3%2Fl36EQ%2Fz3lLKgP%2FjNwmIQhM2UyqcvuyxDm5cvIIZjIbti5Jqvs1PC4o%2FTSaFYBtSLa%2F6xNnS%2BdG2QyCFgm5l8k%2BtT6g24aaXsNjpWcrxgZN9j%2Ffq5H3dZhcZ7EpXaT%2BAfjpU1EHbCZoqmjcbwsWOy2SkpDWSYJsR27QYrz%2F&X-Amz-Signature=f66cc87602b39c3fa7b8dc6f3bd0264458d01f9b1fadcd43035ee4d6daa5d26b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRTAF2K%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFEGquyHpgnUZeiseLZwF%2FeI67f0ytDomSbdNAc5SWTaAiAUp4nm7dPL0d4k7MS%2FUrUDsuONURj8i4MVDI1%2FCAs2myr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMPRmZdlqkWBp2hf4rKtwDTWan5EQFgE3QyDg4j5%2B72yYBCmsi9sNDm0hOl5UWE3ShgMJrEZhi1oLAa1FJzZkznynoaXQm%2FLlNXgXil6ZDe%2BqLbvtPI33PSvjxAKfPO2cckcBSEe0SGGGCCPxQ1dAPBFW9RfsUjzW6m5%2BfqGeba8uOmbuknMbM5GSYciVRB444%2FUwX%2FhQBBvSgiOe8YyXl8Ddsu2xvUlT%2BHvkCOcVfuo39Rio8NytqR95e%2BqiRPu2FE7%2Be2en%2FCMqaUovDU6JQjgfNN4V4OOT1909IAN7P2oQ8Q72a13f3mmbGVSXuS7tZly7l4iM6HLNMWIbjXgxi6Qy6p9Tqo9RY0e0bi%2F4Lfhkz%2FJZltUXFQ5j0j4sq8bkd7jBXGNSW3RBln7h6gSQFeMqJHNW9RPkR6LW0us4yl7RDQiY4%2BZ8vZ2JAbLsQ7UWbzlEGsu9CwC%2FzlSHKGNmYN6uYc4wNQANiGgLHNsf5yTuXnb0Gsw3CdbU6TxCLl%2FQTnql%2FxO9QM12XKmDsQcjmmLUO7FyjbfEmBOSnrDqfW0%2FbrWqGhYdqtvxpmPQTq5Fp%2B1h2AH%2Fsu801K%2FvaiVrvEx5XpMd2bjNuc3X40ebZ7Jwhw5H7yoZ31H3fJ3PmIkmFoLQ%2BtGAs6GzHIbcwyNiHwgY6pgFwFdP9Hpf7ipJLc4Rn5FQ1GbenNv3tcI2jkvAvoK%2BB%2BY3%2BAeH%2B%2FXRP8zr%2B3KvDjdB7EiNE3VxRXxu%2FsEtgIlh%2FWa5xokWeLiLVnQproU%2BhhW%2FvmobZRbuTN%2BbfTx6aH2YsZY%2Bh%2FjxJO4kuLFzLkDkx5rcYqifTq82W1LUbS9Fn5YuXhVBA0kniP%2Bim%2BvwW34ltcae0i1LukIBBjlDRGQIhvtOdDZ%2Bt&X-Amz-Signature=531ae1c129f9c85d69fb0ca0f451dd3ace3f2a58edceaac59140bfe18d33298f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
