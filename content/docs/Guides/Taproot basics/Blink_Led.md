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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXMPSHQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG48lsgvn9EEIG4oq1Qb1%2F5UrdCxWdBYP9dSs3PfwPfCAiEAnys6WsD9VeGZOU%2FwRpV0X1wvJHzUQJ7d%2FTOZYmH0MtkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJRsuvXFY1MXdHDBSrcA6OJOviQTjdkHbz9a7Ycmz1N7MuFzgO57S3s31BTD2SJH1Zny%2BWTzSAvPH%2FV0GXcj%2BOpFOpKgnDq%2FGJAWWdyK2GKaxQeJyr%2BBy7ezTiDoIq2G8xQ%2BeZNJxsvAX%2F0yD5uNQsG%2FMT4yt6iQl1TiBcI0ZUzuMohi7rCEaSH%2FRrY8jQcT1wGO%2BL%2F4kqH7DFf4FyKE6UyBQAb2mssKUR%2FQ47TnygsjWm8mXD3Zq1jOvE7JdfAusnQDoy0CiepBcxXWkKh%2FgMN9yWEuVg6x2imEUiXSi0gc2gdHJe6HbBGqzuN%2BOGnUR0qOBFof0uKr0hFK%2BZ9GDIsVNSYMLelR2DzQEDC%2B3TWrc0XoPTO2HDLkoThGLmWjOToJ5RTl0BIQTNQe%2Bq%2Fh%2BYMrn6ZhQtB%2BcQipnaRssId8uN0fTX%2FmveAte7eCJEfOdCDnWX37N6TKxWIe7mKKA0k04ag0MR6D7Dml3z9%2BoZkZ6LBxEHRTvY27H6aQF8MI%2BylO0Mj3BTkvcPbxcBkuiny83kyxUtWwalq5zOYhF6eUlcdlJF6l4uyozf%2FwEI1Q9F6OoTAnC5Wq35gx1wU524q61q9fxuKXpkpxLzosscac%2FaGtK1zoMIbLi4Uy8qNAd2KjH4moJ2xUEBeMJqjicMGOqUB6m%2BTgWt7mO%2BXgUolGD3U6axTxaW4nevldMu57XodU4vNqjLVk89ip1iYMo5ArkFVWc4DzP9FsZvQPr0tuax0%2Bn05cOba%2BoneBwAjJDIVLZs4rXPi%2F6pt3FcgcvoDjCqW75kMslrdW14WxpdbjR3UHMJO%2BfAMnLM7o6TQfYXRgz2EI48a51PipM5%2F8eLM%2FTsR7jMRARGSF6Ulok4Da0%2B%2FP80aqGBD&X-Amz-Signature=4d457ac80574cde67b3aa84c2d4a280c43e8708130f23b6ed1af363dffce64ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNDV54AK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDiKKrw3eRzyzKch1OFqwX1HCihwxGzgIKHOBPxkyKFAiEA6ow2FAvKoeGEKNU4GFS%2Bz%2FG%2FPcC8jojh9T1Ft1YAi2MqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpPuAop%2BUwQtbre0SrcA%2Foa%2BQAfe8eNyU%2BWK7737BG8J9u4bUj5tIPMhPez0NrbPlpR5lblJTNaqZsOJQvQMzY0ULrULvcEX7quonTgLQgNt%2Fy67%2BfAkSGMNO76o%2FO2GUZqeYxKkGAfS5xTqNc6566XlNXTODe3FRZJ9EpuKRTqNsP8nJcTvmzjFIEvrHApABYsPPD%2FpTkQP8q1TNH453RphZ86sPTDPH9YIXWT4VAdQMhbc%2Fg1ZQ2Zj74fv5Otlkul64v%2Bv%2BoUe%2FuAR3c4hZ8gWpUq8Ev4QX6ngXPE6tewNOzj0a2c7mN22vmLREuRtih22SbHrN%2BdCpU9uKGCQb%2F95Ix1wTGD8QGQiArdCLJdc9bnoqZXEEDqG9inDq6Gkf5SjQJmSggGgA3n9vT1fP862D0YybgJ84EYfVurbGWBFs%2BoiRjiMd2HHE6TMt8BDdVnZnRfNJ43ijNMSfHXBcgAsev7Fcpi7dIKe8puJfSLZm6I12%2B8jK0qeYSMafSVYijxUes1NzpI%2FCGDxhvcAihdnRqvpJLM2riRhJA0B4MHqaHHesgjmP2%2BKW2cr2EWh2oL9Q4ka1eddsiXGkSze9snQ3WFxyq9wSvQDAfpQVXrLYICIBf%2BZHuO8u403DQHJT%2BhOaXZkAnHF3fCMJuiicMGOqUBvRUIK7iMAtV6vzloAkXJv1av2MG7nR8GjpvRrXEmKMapakOzIKr3pQ%2Bk4gpHWhbGK2j5tI7F3O6It0dRbnQeXg3xQfGFBPFTcvONFhm%2BYch8AUugWti5FurpDRDLeIHa7mOaoliSdYZBBKoTkLwnIRn7Ph6RZNudvByRFVgFNcXrmcWkXpn3giFhmT%2FcL2fq01y8MOGXDyfIcTZS9lNHtSBhRgZB&X-Amz-Signature=cacc4751b193826157b25439b68b4a7bee8802d8e9149d749779a76ca147e42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
