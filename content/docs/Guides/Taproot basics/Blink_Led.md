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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW4FADO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIBTf0p5LrgZBjiJqChNbBw7bkFl9yYZ3laMN85a2ooKFAiAdB%2FsM4DUjrR3clGmXwy16o%2FYKgzW0qyw25sP9exkPNSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4wLbt0HhjDvvfMpoKtwDu%2BZhOowN5LcFgHFP2mX8mX3JDCHg5C7mlTzJVEAWa4vn3Q%2FYL1rcoZJ4WvUQh2oVdjIAoRUoTWa7PIciPPddf8QLQ3pBAF9Pu%2BwcPAQpHoDO6xYykJ47Oem4eZbGXC8o00TTv%2FitrkM%2F%2BimDfwlb3Gaf8YlF%2Ftkyxf13eW0fjFHoTs7yPUzzrRonSK54YIX36cI8MvZw6XaOhm5pEz7uNJ4VpVfHqLpeCkUba%2F7uryC3nG8lC5IP%2FeTr9Jjgq%2BQ8rP4c4O%2F6vEwbJj8mMpbXcP5TF5pYyBY5Wm9IfUQzsFmuQ%2BmZtuI108Ub7A6Jsuh1zE8UtrvNjaQr8mJ08J%2FGbwqR8fgMJzgv8Prx2VlC1U%2FBoQjO9Z9NI1fQTbnN5deNw7dRMAVTbHX0CcAom08AZQ1ooypAr3QDSWzrQIkzPNA9Lw89FMiLEnBeZZGGZMvVqLwyC3A2naKXVhCp%2F%2Bm1rC%2BNuTp57J8dy0%2BqbF6PxW8hcBd2syI5xBQec%2Bs3TIWuZ6vq97pG8PZEVr%2B3P5BbTUqg%2FLoBao8W25heAlgKUwWFYuCLd%2F19Rp%2Bp6Qxf5BVqfzj9eefbz3SagVCIvmNXQx4Jj1%2FOBlWT7KDMBZCSTamvbsTICXdBX0mrdb4wkbmvwwY6pgFAgNfqcNqDICHxGpL2gJQjJh88eNgMm9UDcPfemK1lj3KgKjQhyM10ya7xCdSd%2FfavztUqRZ7KaSx7AkCkTU0SGL68AHdxhyhy%2BUMtakdzGMVp7H6e14I0cXgCCnQCq5n30atcNwKoWq873fiQ4ecaLo7j%2BP62PXj72b10i2WWlh%2FDu8DWpYKsfhmHw2RhodjMm3GvWYRPAphdXwG5TE4IAmrMFx9d&X-Amz-Signature=fd17de5ddb61abc8c51ec9cca50f957dac78163655dd14238c713bde8275b8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODT5W7O%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDsux3EfwuYaHnbOhG6d3iF6kJN0u%2BKBbRHWerZI2RXawIhANpO99epVOV27EHxA6r%2BRYKTEPdPyVkx2jCrO2Vqm0dGKv8DCHgQABoMNjM3NDIzMTgzODA1IgyssK95Z3dScT1bz64q3ANHGciXi8N1pFO6eiO%2F91Oqj5ynkCrNpFBCqHTTAcyZF3kJ9gcX4Au%2BI0R3dI2EnnR3QiSYn5Ur8VoqyhNjWNhhXmrAymNZr7AuiikwluzpVhJK%2Fl0UG%2B7UMO8SrKWMjbuwmLvvw4SUe6t%2Fs2h6LaDZyECg%2FHh53Poje5GYv4DhMJc3Z1FjbIPrfAAoVMCukl7R7TJTe9LBSG9Yg8NIb%2BW5ZmYek8gMwNBickjzL63dLKKo2%2Baj6IjXxuAwhcslp67D%2BTHzWl1tuBdZOyWYdMZKwmiommME3%2B2uxq7LeW%2FtePDWs9593RRpssO8qTg1r425S7h3u0aXhKObih22QZR2DJp%2FzBnhSJoUI4ROSEi18U3rg7PxByVlMHdGVlFtFllsy30%2Fc2OQ9G1O8Ml7qiHst5Ip2LTsnQ8Kx78VroFmtHy3Sg53ZO1BFI2jtZlGMlVUayIBshoG60rFULwkSAhtNZS3I1eXhXGHArXC22GkFXDPU2edhQ53vPAtnwUxg3scFtZpbYFqeO3D8Pf6MX%2FF9nzPHueLYz2lcwfx8cS4Y%2FultTeVbHXvg3GAQw4HZBtNhjDjuVOtQ9UPe7zL0y254DaHSr2GiZ5h8%2BH4yPyGQj%2B4YWMjEmasGIbQLjC2ua%2FDBjqkAS6bEQtzDf%2FO6Q3BHMSZFAbev9d2tZBkzCNRS2kNHiRQcnlWRq44OGGeLpIrbxq0af%2Ftd3FQWQyyTSB5Z%2BNakC7bvJg%2Faalw7UROmEGM5%2FrAD3fWjvO%2B%2BO%2Bh%2B8KLfaVd2YU0zC7RkAQI2oAr94lf%2BjfpmBts6i4UBdhFbvCP8TGDbUhQMrPBK0EKihDQEqn9rjdl4HY1ndczSuTXmI7WfaORmpwH&X-Amz-Signature=5a8873bb21450a86161623a5193cc2f9bae2dc5ba77e26ff1e9aaf08d0efa92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
