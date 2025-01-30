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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHPXWVA6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzDl4AVYnpmU4Iv%2FO3HyKk1MF%2BWZnswSpxCP%2B07zxXLAIhAOsX1KAp7cVe7tDjwRi03iANh9O3jDy6kci4Mhx1NNYgKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtXPllDW%2FB5rV1A7gq3APK8QhFiSIqsZPeKafK716Br9TeiKsaFtyhKiOvA6syxJRK19Xmc59ZLzCPsMBVBBVm7rGC5UMHNBdboE5d0wCpO%2FiYR8VzgRmKPhlmV0ztgDM%2FAuhN7xYrKJtIVM8RsUb5tEYD7A57Nl7uPrCaIqO6Q0pjOX8yWMLWPeHRfW%2BiFrIoT5clDNjy6v0rQomyY8xvQAwynqlPFy8Uwlnt9%2BG%2BKOk1n7gmoDgJBJ%2Fk7tqcoO%2FGWGGjIoDxAiO7UYSD0mRnXv5s5UaD9mIpSX2EgNqdpj8zKS5Fc7Ce1eH2xLBW9Fe0bVbmQONaGI11icxsQr644klwVEzd4uH6YHJvMvdTxdN3r2Ou4v8RgvkwYDwEj47dnUGGS7QVwJilYQfr6Rk5SrjbF6kY3ahoLi2jyXqjuZKkrLaCW%2FVtRepjPcfHSIIDyctkQOh0cPEUQQ6sQh4XeBvpy9i%2BmM4rca2eZp8i8MQD7h5EvjI40EN%2BEQaAQpGAUBydmssGQWPqrvDng4laEZylMmobPxxGgeQCAK0fqjrMNfDCQG14%2F0R2Dh0H6jKVt0JcR0AXua5itPyIBYXuL52shQ0gNc1D0jcmeVuNTq8RWX%2BHOgQV%2Fm41dQILESrWsckqiTHty8v2kDC47uy8BjqkAZQD59%2FD90Tv1er9H3PbrKCZiPouEVhctOs1Ey7cqtLDA7CH0fn%2BuEFyf66akGl3%2BbuH4Daeo69UthjVZ5AzTGEKSjUJjDigy%2BtKX%2FiY4roCCYeSmxtxEwT6l25gj1F9wyzt1Yuw9nsU1mCrPETdrT0xTqQjmhZOGklowCG%2FSsxtq4OvmmTHpAuo%2FJ60A%2FmCJ4rohNCoiSLTjTeCH4SBGg7WbiV8&X-Amz-Signature=b92c008d721045947489ec1a6f437f2e56877f743f4f4844790ea33674849aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBLG4YH3%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPPqblPD5QFprLmxMXt5MibFny4Gvo3N9j4lc9xeRJrQIgUSBQunUsAdxTUJicNAXZgpCaC0h%2FXwdyQAreapYEDrEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiVX26W%2F%2FBBoSZqiSrcAzv6c8xvLg%2FDqK7NcjupscK1tK8cSHr2r7W%2FJ%2By5y%2FJMKiXvWLT4WPFZGF3oedN0HymRxkg1EXyTjtnKtakzSz4U7gAGSuZ%2BBchbutEMmsCFzrnDCu3P%2FsvzGbckZZxtps9zaISNBFHmFQKcFXgxWITKwO%2BzY4MqcytTQMZyH3CX9M6ruXdquUO1uEr74SfCETqIqoFs7bWPxGDMyp3sYKTcfENLZ7bWmpxGZ%2Byr8QdnanHkIlwbD0QSjSQI9xaswvxEE%2F1THy0Zt74K934PD3fn4tFk%2BAkzwLQdTozExXyIvUaX69%2FfBwXSKKW510sfya6FcTPs%2B0UgCMsWpuQxTxmrnam060egVd9kxBHF90XN89HegPfrYWsxj8I9BTi3v2A66aWhObIa16i5iGxQ8QCC3tXw0ggY1KTtd00Rmf6pAXVCbeFeN1WJUo0gRVcCe2WvFEQzrxHFQzk3b5fqVPDX7JiZiBuc1KLJOOwy7BluHLzDgmg13%2B6qEYm56R7Ji7LEZy961dBaNSNrXS3kNUQMmzjUcvmHPeYnROyWMtyk1354pJ%2BMZtsD1viu%2BrZSxJjzEGY0Iw%2FEkWJwlp%2BR4nenEP9B2JUSsk%2Bi7mtQ8ylt7xjqRTbnyJ9mEi%2BxMO%2Fu7LwGOqUBSeWrErkswjWOzqJNLJYzmQi5O1eO3SxzQLST38j12AwHlMMbWCtRTf3UAgw7s9JR3KF7bW9iJeiW4cLJFtwZ2clVzk4CiWStsFhJd%2F7eaRouCpy2taAcmTIVgZE%2BeG34%2FuCFDi9AnzPziymn16BxOaJh4SGC0ufVgtqGWkVvY9zzpRufvTcoLaaBpFWg711COBVLL16UuX%2FcGuyROkve3tiCKUV2&X-Amz-Signature=8b7a1641c09a164b8bf664e67607a31d2383dd9d0360bd53300d23a5f929ff44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
