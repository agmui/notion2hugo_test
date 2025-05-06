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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VMYTXQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRGNS3DiLmOc9cYXZIjLyoK9zObncMit8Likoo0e8PtAIhAO7ANg5x%2BZJFt%2FaDmPj84KhZ2zjVAQZw1qGCvm77%2BC3VKv8DCEwQABoMNjM3NDIzMTgzODA1IgypOxellcK51BdmRToq3AMT8LWOcTHyQPFqxMQ3ci5jSZLjMff6NAEjKEaqzgwWqCjxC%2Fn0aAmJ24AUo5qwDiySSaK6PwFmFFRWRP15Jb6pHC0aqtOi5TyGsBPtmFwIJDYizvvZUFAmhoWIMsefQKT%2BAHnAvaNQ%2Br43uBWp95I4LZwp5wZzgoivOZO%2Fn1Uv%2F%2BCJaOVn5DS2Vao9bKjQoOsYw4AS4PDC5i0riEdQ64rKNmGqPgNsA5ZeNrIPEyc%2BT7XnerZYXQg6pblzfWpV0E78oCIE5HykeemRW7wlqMxe4gm%2F8jvELbtaHkAxTFLdWQsbg1CYuqaPD3vH27BwFkakdSm9uq2fWXLqk32CgCTgohk94VpI1NkPLb4y35HmtVD%2Bcf2nXeJvEEZFKSWwLcmH0PigrS3CrytcSGw1zCo6pqRqrpkERjyJY%2FUTMAHG%2Fw2EZCQt0JEqcfMD6Xao0dHthXT0zyazl%2FBKobUzPRisRoqOI%2FX%2FRI5jmC8XjTpzZVHeLBuU3WzAavkaIdjVK9KiSfiTLpcagZP9Urv7%2BOJfjXid7gOC0Mpidqhi7tXcRH%2BIIB%2B4z28JA5N%2FAoHMTvqoPuohOgY%2FaNlXykwUpn8oUSMCrPrbrY%2Fu%2F0qC24TrunVl4KHOSCbTcnnG7jCFtOnABjqkAdNSIweHpxB9tYz65n4VgdZhVoJwbqiUAyS0AcgpDGbxIuJSkFiV%2BXJhn2KG2gTfFG3kGPcLzvMrw60PsK3zmJ%2Bt1PPAezl7pUbb4QHDg3mUGD59LJQYzrzG%2BQvIt64OH2uyFaAHMprSJfQWxnb7uGQC1NytvreMR0IDeINm%2BdQLvuJYxvdI2qcsWlU0w%2F%2F1QImIZ6k62w5vnEzzwxE0FQYPZ8fb&X-Amz-Signature=12f4937f33f622a7cddc9faa991a876fcb39930bb94c9310bf286dd5903cede8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWL2ZB7J%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDI8hM4myVPJcjgq6I1Ra%2Facw%2Fy1q0DpAxLiNzW5YTY7gIgOPPpXM0CAZromQcyjA1cPAVMWwDGnFnSG8kELahTr0Yq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFuqRYlIpJu2b187SSrcA3J32Ef4bSTAttH5HS51NHKO5j8df0YU47EaRhMoYm%2Fw3aRDvtvjpRCJCF5wZNUvKndaCSvx%2F7jpNKUZGbDgoQK8z5KUVIHnqCifabh5JQUn7vsC%2FQN2LJJ4iCFsYdyvy6IVAJq1AyQuMLurykPGwkvMpTzDwGgC%2BvYPrBBmnap2NOBmZKx7Z6WKLvQr0e8PC1%2Bx2mIIOlaR82M0LfTqBo7oYK4qlM%2B%2BUTapWsvuFrYy3mjyJZzv1QfMe13Aybrcvz3jggFfQDZT70hSjzlvIFgPc0%2BQ131PdfcIpdEJLlUTzaXcHglb%2FUIjmHG0m98xURMBiIdWXKKNhhd6QwPzoGjllzh8HuLHjiAXkNyKxUHc%2BoAVKZKMOm0GkE%2BzvRzPtQLe2XBCXsZQUhL7kW6GuJsRJe2y4%2BRfoVc8wRZNOAF4jrqRs%2FxTfN8cn0HJseaxvUl%2Bqe8bTqrZrVh6AQ396wWWiiEeWa8jhZTvkcdM6IBAIffvlRyhy%2FkueDvkdPSHLKJCPA31%2FKz%2BUwONXLMPFGUGcm41v585y6bCR0nWZ3rCQoqGSifHR05%2FSLERoWGxeqTgFRISDJToAZssYmWRQMMV1S9OCHqzBT2Ur9jvUEI76ZRvqej0LFyZQ7RxMIi06cAGOqUBCgOi2tgJWIhJsyO4%2BQSereRtKbt%2Bld0mQ0pgyzyCNoZq4%2BVH5JLTo1dX4g6c%2FYugVV673iFRWNm98KIpRQTZ5lD8sfnDOUbNjS6LiSzvpO8Z61Q%2BP95rXDvpRSQzCnPa7Tiuh2s7iFor5NKtXwmx7xG509b1tacEswPS3Gvrp4LioyuxITFAC3u9XAlKGuyQ6odC8lZ4p9JJppKy%2BjJA7yoV8g2F&X-Amz-Signature=815fcdd29bff6591eae02f1e97d29a2d300481d9da5bce16d362fd23f9cfb76c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
