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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QEUTALD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcWCozUlhF6W7Lymm1dHDsaPhEdPBgVK%2BOWcdxjDHi8QIhAJFc15dyEbqP9XJ02H0tTV%2B%2FuN6S5OHei0valDl3gy6kKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW0G0xRPEMcZTi92Uq3AOO98kmrFACjo8TgSoKEtgSK9A%2FlK3surPb%2B9uN9M8c5Oq04rkKtUuqQAcnUS7L7Yk5sfISc79HuwVRgof8eHMAkONPvYu5Qcfr1RjXfbY9gCA4UdMI95FtbUZZspSJ%2F9eMERSvrwYsduId3YHxkxH59T118GCYxWV6uA4C0BxbBsqLIdDqWYLkokIDcgWSLUxF8yKYdi2pD7TIVokAs9rxVhZ2sA69BQcSDk00IkzYmkbtSf0u1w33isoAir4PihQxj1iFdZ7ODu2GsO22jLMYrbnw2OjkVhPYONFvIz9hqzAF5%2F83CPZl4UWyvam2fkMM2yIYSSZNFhiHgrvdm3TaO0AiC2Zpyu%2B978S%2F0CtOnmfOnP1bJw7Da%2FOZhtCAbNfyFBuQe9QqUse0WcmheYWUYiqeTRxilAEj6mq9Ks8T%2Fnw%2B5XTjI%2Bt4nsvtOr5j9XHlOqYMhdEvliJtpJ%2BpppfixoHPcXcj6DWNIYeE8mNhLyjAzzbtnZUDMitt4%2F477YgLDPxDmc1oyHQSB4w1lP5x7sv5748uei3ldq0%2FG9UWaNrGu0Iw0yx5v9Qciy62vCWA43SmRluURwX4jF%2FRDGb01XN9%2F91Gz%2F9BI6xCN9wqM0dgS6FJ5F9KKIRrYjC%2Bu8m%2BBjqkAZQELFq5luESrRp76gVNAQzk45AQ2CPCLyIrVp87kN3Gm8MpW1cnb9suzYmCeejrTopE%2B50AbMgEsKBKpnv4Mna3925%2BI%2BH%2BEl6F%2BPzArZo8aTX8fdBPu%2FkgeCHoI0WJ7vPEcIjaef4txcObqGFoueDc8ynDPH3n5sgxcATGuHZlvR26BUgF3WYmLMiPwOQihmgbMt6WHiUCuBeCki%2F93KuFTdqM&X-Amz-Signature=6ccd472f8623edb236d0dcf518b238cb4cc59d18d11b853e2ddc197f17367b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCRATPW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzbW%2Fikq2Fe2iavK0bZ4EDE%2F4E0Uo7ZCwm7CX%2BVnYWWwIhALcHWsJXcyJzZkCMIwLzp%2BIhQlJuU6O5nVPJnBuuijFqKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjmAfXmjboPkCZUsgq3APVu3D9NI9rdp9CC5EuFPoCG%2FErXmBPJJ0P6s419v%2Fud1mVp1k9NlUCIafyR%2BRvJ6ZvZu1LPjAWKtBNcD9LpkqQpUo6sh%2FtltW1%2FoCIn6UJFuBS8ggtnkapYoy4XDeFd5g7PUp%2B2Z00%2BMVdOyvtrxkXgaHwF7qBgYcOWYuLMxlxej376h%2BX9k5lQudvMmJ0YcfrfXmZKkgRuRAThgdlDfo9ZU9oR%2F%2FrjfPyjt6bAjnyqn5Dt%2FApAl%2B7Y5yjtJyAzUDbdThNgpfYVg6xKvMFT3n7ej1xqZYU3s%2F5cYdszVAjB0cJh3x9Ve%2FaRZcO5RIlUyYosoVVNdTvOvSOHjVGrUpNk3qHG7WRaC%2Fy5IeXLE6t5ExeoTumgDiCR4kKqtqnpjGL%2BUjmGNj%2BRKlZt%2BEfIksQh2MREvuM9YJdsGy%2BodePXopnceF2BkhJ2rFMf54q7jWpT3PSw3YGc%2Bn2xEu7QaRXcq%2B9c06lUWQYrbuXsLLkFgh%2BepDi8%2FKXL57o2RvY%2FQ%2BWPsQgGTUtS3UD1rbBYCxKa1dgKSRHAz6h%2BpThEZhJtMtMYY5apJeLcwU7wBQF5cYnpepkjxXgPl8%2BYjg%2FRssBapbFrpvQgyVR3V5XNv5v3xNrluDoY3MYX6LapzCLvMm%2BBjqkAcr7lGJshL6youhBThzYtvpTdoTJTH2er31iYpAmQGHECB0Q6LBM%2FkMMgYgzhXtYVm2RyAZNdrIVFFK2ksbtxLmgVONqca6%2FSGQVFi1cN3%2BkJQ0N3AcN8tZWJ8h%2FB%2Fx1P%2FFYvw1dP9Iaz8H7zbMbgnPQKzuur8OS9cuCNqmictbZNEgTdEZ7fSfSUUjDBkV0GHnqyNWr8eq%2FLc58n8PemSfscCJd&X-Amz-Signature=07afb30773f11d1bea92dcad63b09be30a6def1892fe56a3005fbbdc4a454f23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
