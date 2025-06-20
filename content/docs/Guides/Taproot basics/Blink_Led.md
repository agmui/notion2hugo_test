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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC7G3VRQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc5iVBAwvg%2FbT%2F9JIn69sFeDSTZ05BDJeK4dVABJhj%2BAiEAu6Jc96mXyKOU2DufXC69jWC7gpxsBGKE%2Ff%2Ffapyt7SMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BQlp6NfjZY3tz5iCrcA4B6Z9pt6%2FttI%2B2ofg0aKYlxRQH65PbOX65TgBJw3zDKFEpiPHXWYdrij6psoxRZ6KavUQ5a4atb2IS0g8GJXDHsXknCBVLR4NTg67uHueT7RQ83DplY2yrL37Lp4L5qdo%2B4zJcf%2FmtU0LYt2G9mN49vSkUJXQpQl05qmUCz4XW%2F%2FIM%2BrsVJ%2BbP4P4QVcSNKRnZ3SVNfsGywbHUOeov%2BhpNzCk9Niq6TqiQ9Cv75kDcw9R7bMd81r3lBecrSgvAJ%2F3aj%2FrWFGfvcmwmFn8n7YfcspkXCn5KBMNWdmG5iG2UYyqlsDlVRhqY0fZxS5CSAGvnYHdBCEL4fuzz5ndntfklDN%2Bk%2BYud3SDQZW1Q96ywbkZ0lyTN0lyrQn1cUFjQe6oNrV4gqvBuJToWo5rwjg7IRRwNsyB5A7CwUlSoZpLltsvDbx5X4X%2FI4qQm5o10XVd1nvILNHFT%2BA8KUqHDO3aFjt2Z7HTJ04gsFoVQbDdvDriCfNpCivXe8QiElTEA6hfMIEmGi1iiLDEV%2B8C01I64poYNVxfZT7OfgzRlZw3gG4rvNN2FasNtMCEICirU1nPXcYYTtwZb%2FqFW5GAP%2BiS72iKEVKEjML27tLbXoB2WMYA6jekIrL067BmsNMMvx1MIGOqUBm13J364mOoxfYB5kI5TTiMmho7Xy2tB8F9nqO0hTro2Pl26HlBg8wE27v7%2FRe%2F72UepPOHcvlWCyXJezucl8N4Xrp8UgdZyBPIf4UlyvoWk5dlmqiF0Pht%2FyfNn7zZzgr03oc9sS0RFuArALyEZttf1n%2Fnpmg0kWGiqhdGehB9njBZS8kAahCBlK6ZEDAOTe578IyLrIsSlaeprBgMGqHuF2DSvz&X-Amz-Signature=ab7a9d25f7be097c77766bd033dddf66fc7f56b2253726f412d3ebd2e85c38cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBY5QEQD%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2rOTjBjL%2Bj17SlJOQ5eqNQGydf9a6P5GJjK%2B3eSCuUAIhAPx4nH2RcMNauTvym0jxijMsj2JcJ0H3%2Bffow%2FZh2o2NKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMX5gBdSiMpkU6goEq3AN4akB63z0hE%2FvTcAyy6Y8CkNBBaYbCNNHRou%2BR064aRLGqA78x8UNpcFMv5c9dKkcyIL8IWJP%2Bz%2Bv3H%2Fuoadp7eQWzhDsXYCkQsPZ8uEUX%2FnqVa6faHzq7vMnjLmd17LAGZH55wiHOhmNtteb%2BKrDHuotVAJOi2qTioZtyNNCefVGiVZzXc8gzmTAqq7KwDL5xr1QQWa4sd5pxpFW9lzUvELiapLKQmnviW4syEa3sgFiUg6w2YeQvR1%2BL3befDsQdfRTqHvRH3G3y%2FaJYPsBKhtpzt4SH6uLDqwMoJ7%2BtpILbuDxQseMV1z7E92X2jQ5gi48D6g%2FtlbN2ZDuYwHxZpDdMCIuczzPmVR0JfO2e14caatW89FB0Cdr0TNnLCJGC6D0i%2FdZV4bH4P9%2BkMN%2FUtu6DVWVxe1b7FjsZri%2BDaRVcGO249lLK8BG5wWMIgNO3TZ%2Bpd5yvJY3QnD95kgzTeftnJ7Mdfyk7hRCnggaaPgUkY1zIzEqTG5ZmWcb%2FaNV%2FNUDBQi3siDCl1lktRgF%2FMExyXTDkGN4CTf6g%2F%2BveZgfyLb4h69xOXgbe%2BRVwVT%2F1Jl6q%2BHTcj7xTq6JSi2Ko0tARgQBbM4tSAMjutXjHSyMS8BIaPsfKtZVVRzC68dTCBjqkAUdks2y1gxsM3ETSp7WwB5DtRrWNkkZJLGnrWCKNT7nfDNpH5CHWtadqhTbTiZIl2XK5EFWY0YPgSylg%2F73u2xR%2FHRJLE8NgErJ3k64%2B71zpXRGi6bpwvRhfdy8%2BcR4nZQRXdQbz0R67g2ntMXNtlQK9sNxQMRMzAhSvebOM2XF43bstzYZhCD9RuLEVL4czeq7zgddpFtmMQng3cfxcVL%2FFcv6t&X-Amz-Signature=4e55e21f2e801f67565d7c0a00b9846ed22f8accb381bae8c3b6e5cd533be3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
