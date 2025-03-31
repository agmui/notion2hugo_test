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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YZGIEN4%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDIHjiRUOJwq1jJO7IbeDPLolNRZUXJ5elOjMyxudOmDAIgNmOFodu0SJgS6YtBvgbORAhf68bj2D19vnioXonl2DkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4uWwFoVjyVvR7%2BbCrcA1tUyZCH9zx1KuBdCn3Ckv%2BC4ysHtm8PX1EZy8jQuocq58d2vUmovRB1ae4J6SN33QYgQvOQ4A8DdLCF90atbhQv5Z34D8gjmzkA4wIbS1RN1VEZHOUARcGsoHYQO695QSyAxgBwHfCpK8D3hNxZsslqX6odC6IWJbp2lxmD8HSbvr0Xl%2BKz9zxsprjcZmjkxg4L1gfi10xXGakpZHVUaPRnLZK2rfEu7RS%2Fxr%2BKz%2B8CNZLdT6%2BT1PmcdIK1aSVz7YFq7EEWeIHBqGGtSyNafcnowHjrwhjxCXuTDHsAP1ZMDwazkdaCfFUrS2SSd%2B4SouAVcghTN6BeEX14ln9qGBTQ%2FAalqlsEkTPy6lzj6Ql3WBm2ZWOvuslHvgh9z9itcclONfpAcJUKpJkeBVucdpyeoNveLbCfG%2FbC5w189qySE9qHQVJvFvG%2FH1znH%2Fhh8syp7xEwb795d9CERv8d6nBhJmo1KEqFYWIH6JwkfyuBTyoXWxynvPD%2BufAZRtPldaRBflKZwOMEQQyU3rHTKjCDgHhjpXjyp%2B9RblurJVlshLCzU%2FT85W23JVmYgjD1ENIIm1rqnip%2Fdm8tsNJ%2FK%2BOR5c6h4IskCb7K%2By3dIEJomjrvTU2d8XxxwAx3MMu4q78GOqUBr26kTGrU7qqfsSNnjI%2FsVu64AzZSAQvwFp2y6jwBw9C%2BW4klOgKm0QMLPnIdtMSFZiREpTkkAp3wkoF2cUMgZQUqUCCBRFeVoJGZNIb8vsOkOwAjXa3i%2B0ZV%2BQY8FlOgQsNZL7K7z%2FzqmMZ4ba0v5NxybVMxipmRirWeGUqyRRrtUAmgJnEYmMghJgXkKZdfg3iSCAT0K73g01KLI4VITnzLfYmr&X-Amz-Signature=35cd75f06f6252625572023dd4d49d576757f244aa66b1f942eff98de2f4ad6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJC7QRH%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGHKgU9hkvlapGAAyTmJzcIN%2Fhrcn6OM5jDxGvDtALhKAiBA7u5U9zn5slPcPceHEgPoAFQ92Gue0Fk8B%2FPQJzLX5CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEew1qKcqTHlrw282KtwDA4Xd2l%2FaFk1s%2BWmhmWo9OSLy1CZmoyH9HP0uRsPUuB0surAhRWaTnSFC6xVNirRI5WRTgzAdxCp7mYFYZvgzwD%2FuA060HlyZDTuhdusOeO3xKDWQSD6RN6NfrjGp%2BghnskZNSBxpeWhFgZfzzAgccULxdkybndDgPpZ2SKDvh5JETeUz6UABZNml%2FuSnqPmxHZyznNnCozzQtPUwLHkCldV1JMKQ%2FCNmZO1qGbiQA8%2FPSUGk4gwdFH6SX%2BawUsamEEGS%2B89kOJlrA9M7FVVmb%2FeLmj%2FGv%2BGasUN%2FSOjUdqlqVqqMhfEyNpjpJ9XOnZvoP1ehKJ3sFR1RSLp%2BiF19Xtj32FPoVuXrt3KCscznIQJWC6jQk%2FOUUqeweN4AZTFxsCoZWGOcR7wfmYYBW4%2FA059Q74UANhEr%2Be4vwXYOJ5EofA8Ll4fuBPHVYpwwtJs2doa6irysbL5%2BVz5OoHZDWBWwDxz363E%2Byf6bhyhv8uuvhkQe1wSa%2BDYhjDb68Gyd7DwOGieIH3gXs1SeAnncitSNRgfno7wGXnYqVQ05cDXuoPUVkBtiCgz2jSTtxWirYSpYTvIG5Nj%2Fs1fjjb%2Fy6dW5jrBpZxn6FAXHb5sWGMw7LRi6fWafyf7kEQIwwbirvwY6pgGfuXxkzPMOXeD%2FNjsnBkLX%2B1EZxkwoW%2FGYgnNVgYb2AUCAWYs5we7eSo8XbVWHyrfCIIHIJXWzALj%2FHJMhEfQdPwN9Hrn6UOXkYo%2FTcJZqq8b8AZMPt%2BZ26dENk%2BKBN%2B3ulHRQPCKcVZn%2FDKqRuhIL%2BznM9bWtgKmzW376pXcWimi%2BMME1sKbyCej5dBOmVQGD4Tn3RqlYHSw1maosRGHFeqxuaQDH&X-Amz-Signature=353fdacd0f64ceb08f386ac137e5a1561f529865188f51a1f4ff0b78c5629158&X-Amz-SignedHeaders=host&x-id=GetObject)

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
