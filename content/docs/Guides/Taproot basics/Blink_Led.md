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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ2REWR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCMbD8k14Ygs3dO1iEhfVcsidkVQSp3JYrADUlVaQtYawIgELCPue6%2BPsRP%2BVd1HttUJX4Wpai8akau9tEZk%2FlRQ4oqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFn%2FID7MNCWTQvt9SrcA%2BiOLtmqlrjjSkOpeh1nET%2B6I1lkTB2Cv1BdVMM3XSojUu%2B9RlYZmzRxQGLyy1xgGfBBZDQS7LEmIoSYyv5F5LGJT2A4Vn5gdT8vitvvWaiF4Y0QX3%2BQDHH1fP6b0FXyiR3E8CBDNCAzk4XDw5D322cY85jp6ORNHM2mc2RJFvR5nEzMEJppPPHQxHLNRpECSRLCq4A1%2B1qGKjxEyJ9Q287mDa%2BQ5bqPVc0X5giPAXqKrPnP9Qubb%2BybJ8p5QYZsCp6vlGN7aRtcW1FngRRl92DbD7OGNBioye2zYWNydzFbVb7vl7jG1smbgd%2BHlbJhPzeu1T16gzG%2BnKU0nuFYztP1MmP90DhctvUyob9uoVq%2FOsEEh5irtdChx8tJiCqoQ8Y%2Fxol0bRIoHbVsYvI8V%2F0TICtqNvPYI%2FqxNfAt%2FV3pVT%2BaD5KPBnfbZBii2sN2SM1Wwa8RgSDHxC21hwYxl54pu58nrtT3wp7ShuVCu1vGikM3kNeSFx5wGkAky8pXoEB0nTGLY6y93Ky2GNWH8mM0nG08vWVVVXUsNhEmvCsCTrEBY8UeIockhjFVKwS%2BcW%2BlCv3sUIOCAxEttsfdET6ZGhhcelBhKtsViZIlcOzGbm1e1aCPqi4zU1r%2BMLDr28AGOqUBUZNe2%2F%2FzP28UdK0EzKp5yKzVwd39u4pFLA3cngsMxGCqoU%2BBBALx0avw2NY99lRA%2FgGykFbKpOmYQUeX2J1jgo0IKrSJZyfvm2LJl%2BlNcaWlIJPjPkFossUqiX%2BtmN2kJ6gCnXJWxJLb4W8%2FRGEOHpsKP5tq35dmm2XY67EY%2FYsLXdOO9LMWQPkxD8qUPw22%2FR%2FWMP%2BE96XcVguGSkQKq8dMjv7%2B&X-Amz-Signature=9bb5b8e0038777b7a29ec8b4120db8983edba2f99c7fd8940cd19ad8c25f305d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ6R76UO%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQD7oryC4y%2FjPLazEZwQ41KaGKUdLfLsoXj8dbeA%2FVi2XAIhAMvzbI5cEF9pt8Xajq24Jjm3zXIqmPbh4AcmkmxAH0NcKv8DCBEQABoMNjM3NDIzMTgzODA1IgzRGOq7%2BHbnIcoRkbsq3AMzBScl0%2FAZgRffSdbTmaI%2Bi9PVQ8KOLY8%2B0BY5kAtP59ExCRrjb5eTTgjcZvlDY19ho666glwUs2akl5yTrWjO8QI%2Fa7F6KDix2D6TokkmX29B%2FTm67AMsJgHWvIcVk8Md7Ws1dkHGTJ38hBVEPtXxlcNJdMX4xLz0yW0o2k6ApkOtzlwSIJtPxY56JNtTQbn7%2Bsb96MILWc5MD8av86AA%2BN9ip4v7N%2FptISJ%2Fbfe5hXuTdmweh9ObWe95MYlFIXTMWN8tivGW8mobDcljcrkImy7h5W4z342sAaleu5ItJ2F0%2FztUxyQTBccYRQsL0UJ3QNmu3dd%2FdVTEcr10vvxaWDcUbka5gttDEZQct1tk4PfysEs%2FiQ8nGc2y0L1Zj9Z6gn%2F8TmyKb7rLfe273kuuSV46KT8s2dFUzbytYgSAf15CaGY6l%2FLVgZgNbsjrY%2BryrWh3jKqxjowgVdwzfn0bZupeEIg7u6Apw2VcPTtffg760H5n%2BnVIt%2BftDQ2B7SfgKIvivdyg4rk%2Bt1eqC69hZMtfqdhoQryOoy%2FknVtyiZcG2edk1bq5L8PQoTWw%2FlnDsWWBwpNT6%2FALcw18CAYRNRVm%2F2Jf%2B6aI0xPemvnWLCgNQlNm%2BV6YQ5tUXjD2sNzABjqkARWiGVi9lQDHRukKgw2LSgYnZ6cuRHpUl5yIz25T4dZSaSEgxyp%2Bo9xVqPJkhdhum7rlT1OO0qmXjxJOnDIAVA%2FYa%2B%2FzgA8LQsTlFVz%2Fx8O2k8wnClnwOig765VmgOAuPnovcrhzt0nn1uSeiFWH79BW1C%2Bleoa0wcaqBzCsHtGCXZ81inFh%2FKtEDhM9HpY8vxiht1t%2FPaSqco%2Fem9MnPSIYCPCP&X-Amz-Signature=1e9935dcda8a2a628744d613ff174ba91d957e40d7b62fc7fbb30aba19f213d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
