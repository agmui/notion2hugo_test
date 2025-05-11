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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGYGESDL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAxjrrp%2FGJa0QMb2MsIB8Po2dci%2BcUNWJZrQv3U8OBiQAiEAlO9QkUgKPVWPxVGsnKI3vIX2I9ZuuL%2BB9m8sGaz5WuMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYGTfGVT%2FBCp705nyrcAzVKoX%2FJ2f%2B9Bq%2Bvld4V3pDZByN8jIMTmtJ69NmlVN4esRjGJSqcUDfgZikv4R6FT%2Bzu%2F93nvRJO2z8v3cYYhm7BBjgVa4RLcZKC%2FW3yWotv%2B2rB6ZMa1FeN6rmDdG5vxeBxjteUuKax0urXPVzLiasItrzZq0DUbb0%2BmL5ZXlvGOBVYUR4FgtlYFVWIvJv%2Bo%2B2Yim226UWDI34m3cqRZh5nWaOSSe%2F%2B%2FuSeS6%2FhodWtql9nVYJ8MPUjVzdbtX7LiCamld4TMYi9DYCLs1GvgfpNTSQLiL30XspXS0OjDfqxA0qZi1Lix%2BEx9Q9KtPxM1d%2FjkEul9zu6ZZO5ByAXumAf65eHKLpzkm8n0Prxx%2FPn0BnkNgb7gBDHluHc2n4SqJexwVb4wAecIeOfFGGusL8wsXQxI5ZEiPqSh9qyjPZ3cYqMyjlYpgE58VbmGmFYCiOkNU7xGTxW3DQNys5XN1Nhxhy3yqH6OyTq8MwsogCAi5LmaZ0Nv6oM4gtSoQ32yiy5ENX54mHw8%2B%2BChPLxfCSFvUTzL2GHQB4s4j3YPb0mk9FLVpoR9d8WG6Qyss3rhyyYhv%2F3yUAI2%2Bp9RdIxuZNZYXRIi%2FueRoXzE7iQb7PJmFHF73NmtdspDoK6MO%2Bhg8EGOqUBMZonTXSDGmIdt6MJHiRcZxrGR8FwgX27RdOOa2R%2B7rfyrAED7d7aOSJKrHDgJk8jHEezsnfGGKAvfuGx6X9m344RzNzkhICQMVs2N%2FXlNch8vrKdKGbKwdSUr3OdhNR31tDUoIaGV2kvYyzYMP%2Bg0nlTTzM1KnHlbaNz4lgaiWXJr5%2FYrRf15vUsPp4L0VUXaPhDS8FVR6LcC%2FJqoRQxzLhXTIyJ&X-Amz-Signature=51822314a9d936e8d333f28193f5a61b67f8edcc4b05798c0316190541b4e608&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y456XWGQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQQGcFBliVd13WuYzj6v4poCsxQl%2Fi6jjmmOYWSOCP7AiEAvDZ%2F%2BD%2B9gZM3yZJXIbVzY%2F1LEkRo%2BsgU%2BFzV6yj2hZIqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEllVpAO710%2FiEc0FircA807983%2Ff61PNPwwH%2FPDRT5mjwXb3GIuYqiniPj0YmSJ1v9etLnyFR30pxfMYeSl%2FVlQZpilNlhm14rJzSvhngQjWFUU9yhe3nkg9jF8sbiIXdOWe4FPudCRvaSa6JKYX6zO%2FjMNVpaXfHl5w%2FeebTpv6Y%2FISvxVbvN0rkWO5nml7%2BEMl5lninwKjW300fxXDmTdFSzVluRHTr7BYyYXitLe31S9CxjM%2FEYn6xS08coAw7GOxlDbf0A0VFWO853asv%2FzmJX8byGw9FumbZ2x0%2Fbbz9j%2B8F%2FxnQY%2BJlMqI%2FJHAHXargyDVfB4Bu3elaE1qJFw0zOCJSzM0LElaeJboxcgPvAZodmskiiaSCIaHznA4h%2Bf3EoF42YI0llM%2B57Sd9O2hULFuPQfFggvmRAl4hgIwN7nSgkZ2WTDAaBmGvAXJVzXLor83PaCim0qhro%2BQHaH1BSHcuPeJiWAA7Xx7CyAfgEzs6qey4mpPqArr05MmTluoNIEVpNWjyFX%2B23QQE%2Fa%2FzR5eTbwNJkMX2DswZf1gttU4SAeaoFGjGxGFors6ErkBgpjury6miFzENRD%2BQzSozh0ffH74e4r%2FBDSxVljfsKPrxSALAgrB7ZpROZ%2FwxO6sh13e4qa2t7VMJ2hg8EGOqUB0XgLtlSJ42cT41Mlzz16uHfeg3YghNoQt6HQ%2FJF%2BuFahW1dHupNpMD8tFy9QYPMQnDGzhVXzmN7iqHHp6BUzCAOJRbYCAAnH7SGB09vnWa586%2BtEGe%2FPILti7AV4itVAJF4ASrHRrWaRsGS8%2FsqpMSVNJTU4YdFOSzl%2B%2BsZXSXNiYcu9%2BjPsNVP23D7IkYZyJGc9J3%2BgZUGo2uKzvyPyc7gfFx04&X-Amz-Signature=94d4aa78c0fad2f0a665707c65c843b4a66ea25ef51973bd45c5b9dbc0a86beb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
