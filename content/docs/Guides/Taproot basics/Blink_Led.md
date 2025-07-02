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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJALFPRQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8kMpfpt4zquiONWU9thwZWMv0DyUyb4Sc2tRxlp71aAIgY%2BhcoQvzzw2DmxqUWwf5rpBFt5aiHbBZa8rJnGPyvM0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA06K4EiRMzTISAyuyrcAxlxToK5SEyQEq2e%2BIXGdGr2iIyjCvIhJs8yOKUJNfyl1Wnors6S65k8SS6eTWFNRiDpksd1Z%2Fa7%2Ftx1YUFey86S%2BD9I5MPPYo9r4yf23g4I1eb0Sxqo3rBGtBFJJsD%2FZPUrLRkISw1UZ700q1ycwa%2FidSVaCxtQEK1xxsut7ouUbBCQA8PAKe9sebF%2F4l5KaiPKq1xBr6zd2EjBSGKL4%2FomBtCJGHjaec0C9nf1V4ZdiMGZ2EhsjiN66AokOF6OGfu%2B1WVJCBlweLKAGvk9yVWIz1PGF4ZXNfRc%2F%2FjusSrfYxNE0vUeOQEnFvb%2F8o8bUfja9nhY%2BAZ%2F0cYHkgB1YsqmiK9CFwDdFLny6J%2BbtelZXPUUA4PL6ABg8EUx5wn9%2BiJ6mDZuwdncxv2T1oYomnsBXv%2BNZ0dtel%2FAMkZ%2B%2FJD2ATFJNTMgHW5dgjF0WqPjEGm8DM7VSIbkFkndxjls3dvvwOYS58OmauRh11v%2BY5taTGNzEE45C15cpj%2FtSqhzcwrPgwMSfLMsQbEN4K7oybz29UeBsvU1impUvbBzodPSvIOspa0%2FYzJZ3%2FzDAkqsT5hkpXB0m8Cy6dO9AorpBecy%2BqQE5Ehpp2A9ViyuV46ICAmYAMqhGiJkg5YWMPOKk8MGOqUBHy1oEAhIPCHhGAAZL90xMbGQDFoEuj%2BzPxVd67G1VlCqAZDpxc0a2OweAZnWXkNw9Vj%2BBMbc3Ym35HzYw%2FQPdWBETyOq05x9YJ%2BRQUDwNk4x0iQC9T1An%2BschP6eGmVu3QbYV5kWe1hyyIkv6vurJ%2Fmf%2FKmek7H7lIJ3j%2B3gQzsm6wya0x%2FmI0pSf8MknmSRbtyDrRPhb6X4rGPTbjay9uXNGI%2Bj&X-Amz-Signature=4ef6ac78b357337a5340a24410cd046a20d3c9846135e3304db2a5cb66e49703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTWFU3BP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHGA2OVvlHwvpLHbnalnb98NkBC3mlVRWXndCW7h60%2BAiEAtQX%2FxVOekcnSOQqkSMS4PJ3CQbm7aj6qzlv4aYTHv4gqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJNsETrLGMfhMh1eSrcAyGeTnsGR7gvUH0X%2Bkwq0NywxSjf%2Fz4BIhKjUjnAeN4fnmLORO5vd0xu%2FfpNdVc15GEOH4i5mIqWGgar4%2FiauG969ShlbkCqh1%2FPSnM6wTchet0vf7PfwIKPcsKW717Fjbafrr%2Bh3pQQKvj3oXnCTI6Nz5Yd7iur2xVhNxQ4LRuOabe%2BhlvhdqulPRYoLy4O3wjwZCZDBIGQ7irgp6UQjzYCSJ2jQtU5x7RvGslfhMF7i%2F5q%2BsdnFSva8ByVAVf7%2FwjDBFH7Vw9gP%2BaBvSHnNUXy7A368BUuOxTxfsFRFX1dptjyWe7BPm2cx4J9L%2Fp6xc1RLJP7JcJmR8px3Ts2dAo7%2BTw%2FlWl1EO6kqrV8JREaqJx%2BnkAwuPp%2FYiaOiBwp1zPI5lsMTYH4XsftBukEVGGls6%2Bwfp6Skr5rexp99cQm6kfj6k1UJOW4VGU9zT01dpRjHoRh7kr2U5NmwfxfJHIhDV5rducPoCuJPnQuzToiVHakoCShI0XEKhbt5balnrVzxB1U1%2BtRt7pVTzj2hmcxGJjce6AVvdljqDQpXCj3%2FBAHb9mBZaf%2BZ7DkabZIY2nQbwmf8OF3eWXBrXePvKgI6xNTlLmVjyKVFXSmEem4U7d8llrQLD7mTzQTMOaKk8MGOqUB6DksjSqgUgtz%2FXm%2FMnsXgKF1Pvqzdtv8L6dgBym3raYSkVCm1t6dcrosLsUFGGPmpV8%2FwG1r4%2FMHzbcSYFsPKOmjBM%2BHWMEkcZ99mZxiNJUrKuXCby6ggh4NSHaGdcZsA%2Bqb2vI1w9zfhJPpFfHax65znY2m4iblgWh0a96sTexUQcdO8zEBJFp7WTFideWvgs9QZdC4j1gjwhgIzoU%2FBEya6s5V&X-Amz-Signature=2c9dce72ce41a6cca8392b98128dfee094d4678fb7f7634ce9df98d65dc6632a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
