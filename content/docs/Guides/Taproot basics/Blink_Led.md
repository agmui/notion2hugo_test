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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKWPCKDK%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYn44T4vc4XTBJUVl3EsOpmMAo0jlF4gypOTrrWclg6gIhAPxSGlXytqyQS2nqNJq%2FjsEZ%2FOE3CbS8YEh6IfpbTn7AKv8DCHkQABoMNjM3NDIzMTgzODA1Igxh0hgsdPo%2B6IFi68Iq3AMqt723Gok3zxjK7exh2pO8sYWVKJ6ZQ0HimMEbBNdZO54scVTNnffWqCaYYcqasPhuMbmW09n6%2B33JE7IzAIT81vLXrjaMLBuz8%2BQh39PPdPwJ%2BE0vEtm9htEorWaLLEmkbirmQWnvjGH%2FBSALm5jWMW2t1jj719dU6U3gtY7clTlS6Qe%2Bv37PCs%2BK4M%2BSryuHseHJCHMSAEamjeOjQ0e4jCTUf249VpTTtu3rNOapW2ePXGLGRAnUr1YoXUc4%2FasWJ2kXufH13P9pW9s6lPLEGDIFugqhMm4zjMQuOI9H77UJsMf82q2SVi7v2xQVfTiUgXrq5kb%2FCk%2BF0dn9vBTAEtLQ2mPEAoFDgXtBXpBWJncpFST1eFWgzLAFNl159abXE6M3AMdAB%2BNOISyBNLmKsIiYUTlzCnFTGCmW%2BR1kksdtqZL2eRWF5l0Aeyche%2FkmcKAYFNjKIXytv2d4fHWSOt1Z7tj8Aq0KMUXO4dY3z0%2BOMoiJXBtyr1%2F14mbIoejTwlxMkJFwJ8mDw0ngm4qVX38DRYZ3qa8COi2UG8mnRHRbnWnxS9xVh0hxy9oWqxCS99BaGLOeYk3Qk4QHZDRoSUEs1n4zOzVhvvUZN8GIpo8w7HI8oHjViBV2ozDVmfPABjqkAQd%2F%2BPnwxAKbmFjvycrtdHThl1L29KLBoPtQH6ruBcRTQZjPDrRMmhq%2B7avFcrhFy23j4bYOuLAy1SVD%2BTSUtYw6az1A1MgqKnFfk1%2BqZRD7cojz8ieM1PT%2FO3VL1dssnKfWJJvf%2BkNET6c1fNErnoLAnPDh%2B5WyrJDhwDN99FjzC1sulPEFNAPfK2i7OWpzYtPKwhBRXnYUqb7aO4VYWRE5Wq6X&X-Amz-Signature=fec6c2b7f1d6af09528ab73047a8cf7b319754ba862d3930cfe1f6bc9dc3f9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYXCFT2V%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8ib5SOUrt2bzRB1YzBVjfB4H31SBHZFM3lfVn5vnLrQIhAMg5CI6I%2Ftwz%2FlTF%2BcUOxUWiwqh8H1FF7N4b7YN%2F46n4Kv8DCHkQABoMNjM3NDIzMTgzODA1Igw0W13RCUUTDyoJh7Eq3AMdduwg2jOgJtypKHG%2FpK%2BZSkzRf0gYoJO1cwWYZUmzbVrgFr3O8QP4XH%2Br94R0157lV9bpcQkhYlqV3JzYeRez%2BLElyYtsDwjtGjKgj4LJJXLQQXTp1zOPEz0VSMxDf3J25HJMzgivglcURhqXl3tW%2FGVkOt0FqaHF7ISzrdWlJeBX2oqfQLOVbT2hH%2FDutqYknqAf6GubUYqX7QhgO9vT5uFs4lDxz1f8ewwzsuIVd%2BOokbOfkvFBSyjYJUSf8CeDP6RfI39qWQxvIdph4u1ZoOso2W4JI5Dvpw%2Fj3%2Bb1EGq56zsdO4srk7qOEaS%2F2%2FmRGBpz%2BfY8JzxMekTftpsDPEIj4CjE3TbpeXo29ixUxpxItfA9fo35Oc7nF1xxmXejSLotB4EfUEr5Vi95jDSVcEj8XpW%2FRkeYNGKpdCL5upoSJxbtOl%2B5OJ8hx1mx0st8N0FDMDr9wbryx7BiE5nUi07%2B3RdSf6mEYmTP2aE0EtwpH0%2FQH8Cn9eGrtNXRHQlVQqK5TRhpdhggj10t50IroIp%2FAqslhri4RTt5PFlajOjCJqCR%2BBds04laXMlrZtv8NIgLqz0VOEBuxkbOrMcpOsJSrPaOjagS5NfipYwGy1Xqq0X5prLIiSrTEDDbmvPABjqkAU%2BEI5CVQX7URcY13P5bih%2FLlZObrN10KXdL%2BYnf8CTXL3Q37KUdPyFtfKNe93Ozt8a%2FfdkTraehqDvJlH64qtMwVLCehNseau%2BQqr0xNrwCtHa9gbe5cMX11yokjYbo0uWgGs%2FEM%2FCzw14ovmC8VwP3UNIrkjymZ13OYm0p2Zs8BxNYZUUcwdThHKfo7%2F5bzDpy74KQy7CFfMutK%2FxFV3I9tXr3&X-Amz-Signature=2c7fa4101027f5f3cad1202a8c8e5d43706e62df940afd957020a1f1494924ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
