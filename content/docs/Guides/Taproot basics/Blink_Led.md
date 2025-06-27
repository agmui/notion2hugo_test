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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSUNRNZG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKoJEpW1za85Xsab91tjrnkwNLlNckUYJO%2FyE8YAE9tAIgejSlx0aW3Sz4z6OjxYgzZhwOc1hHgGwMSGx7cZQx7igq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKqvL8TaIxGQjbVUSircAxYKV50I1DeeVy1rvGlYZNrBcO%2Baj33Poo5ixWzEPqHXNqyGmgAPm1qhYkrFbdu459JwPAeFiScOODCItLSiLf3%2FyF8LzoWBOsooK%2BYtAQ3wMLotsozvJnO%2Bh3RrKRkvrxqqoxc%2FJXadyF2XzWHTbEeSyHXyK7g4JzspTO64PbVVFsIHbnid1maLT2CxgjF7BRgsx0Icgm9AZjKIMRC3djmo0Kgusd9Z5Lhu%2FlnpXBXO6UT8b%2FGUWfWe7jTn6VVQwkGxraPrhV2KLS3UL9NLuLxXLdtsJ2xHm28ov7QqJgtFO2SSeZC%2BRuv0ghjsbZea28L4jBNZ3veO2vL7aMI5MxRt76MKAzG7Qh6VfOsCJ45k2Dn%2Ffyit4TMh8scSQ7IihL0NVRuxUlQYFZXni7dKHBuU5RMaU1QLw9dfcoJdfcELREa07u%2FpyMvYYIwcntvZCdb%2BDVf7bGR0ALt7AEXq8ND2ZXwf2XW7Esp4WSSvzqBO5gl1Swm%2Bmjw8MhRavYqW2QJ9dCqMwJtC%2BoRyFRPNEM5O7ghKLeQUegf%2BLDYNXucA8hiTq7csc6H6JdPVdxdZ%2Be0hJ%2BxsokehNUHIhx6%2FGcgkPKhVIAsOP5WE%2BqmDM%2B6VqJcVepaFT%2FVcH0dTMJ7K%2B8IGOqUBsg09ZdH5aIhYE42sa3J8Pykeojd%2FuK3k26H%2BuiLaOn3v%2B0xbg9e1Jg37xEl9ZpWmZfc2GidcIz%2FUXdn1HVy0mXhWE2kpry8uZZKgUjUi1w1JHtDpqht%2Bx3ttYL9a%2BCbwRNAysvNfLg4kKRP%2FN2xbNbE54qwX1XBPeHBjtBaFsFa59A%2BcvOqM%2Bkkd5S8mCAaV%2BrG11O2UdPgH%2BtIFZCWeSaeOOoCu&X-Amz-Signature=b49cbdafc31547e05d330be3c41f6bda5246f4a0bf6ee07d4759c40bc0dcfe66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UPOMXMI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK38m1tpek2NKQkSIGFiS4plRj0QnV%2FfmUwsmcL73DVAiAOGmf3eXmoHV%2BzAAstK0jpqHEbrVIdwMx2nDqqvaWvTyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMZdrksBBLDRUAaFoiKtwD1jFqBYa5x1IS9fUFkYWdgeMOeY5XqCZ2sCxT4TClnFf41FOs%2Fl3Ps%2BNRt%2BSPu4rneN9fftCHlppD2MqLSzg5XX5izmx0fk6SYNnMp2rSV9Kom8MryVnpIQJMKzOS3DDibaCVRHLMo6bKPqND%2F0gYyp3lbFVNEyqjQGidMOv4fVl67Lbgd7z7CIXpzRMqBFj%2FUUmK5TFGFpT%2BXqnVrfzK%2F6bwCNo3wHFy5dEBsaKtJqdDPU9VryMpH83uSqneGOoNJzeoyfx1X8Iw77K%2BeVmJKyg0WIt%2Fxb7C2WQh643%2FBUMTdBOiCQ99BDD%2B2rg492VB9edkN6Ckz506vBchbFaXSrxDUxCaS%2FMric3nrLGBb7R1CA5oy8HbV6WGKSfseZfH0vPYqC29Z4Rs9Q9AeNuYY5%2FLKwWpBepfHyEYEXgRXBJhPdrFcdkDLlJ0cZOcnjDkTm7EB6Zk3DDMOoCXeP3l0f89g6IQ8vadirqaGl9plrubmcDxn2Odz50jkG7jV0nL8utJIaSjnkrRPBqEWGL5rEIl6C3DOru5g02UnyImRL1r5pHpLs%2FpUCfC%2BDc%2BsKeNeSos3YoQjt2EVvfqquSlfqLC%2BViqLjLmK6q07AXb4WZGR8%2FLS%2BveMT5GDSgwysr7wgY6pgHTO%2FQtXuSIuuvMupfVLJSH729X3ZUDVDVhQ0rT%2BnQN9v52Y7IGHHzSGHRPjg6hY6%2F5eJn36L5bc4svKznQMELv7P1RgYRIo7O7NpiA25c77lg6Gc7e9nr4lF9XGXE5ltbvEgYpyANiooy%2BwaebnkhuBq%2BtOChC68lM%2FVSDCdzdorrmHaSLkxVO1ySJbVa4rWZQ2ij%2Fnk6Xn7i%2FRxIcCLR34iJqJZYK&X-Amz-Signature=bdd2d208c59c8fe5cb490a63198befbfb28419f92eaf97fc05f2fc4e95d0000e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
