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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAMFNAJ6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHuypH0FUxrGbWi%2BQKO%2FR0c0e98lFKfuL4AAZWtuxsQhAiBhRo4wz0dFcV0J35RXt6ASa70CYON4LQvdxrWWQCld4SqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjioIDkUq8uZ%2FomoGKtwDYWM40b%2FIKNkupIZqnR5n8PG6EZONzHy5EGJEyOzItuZhZwEdzt6yZfpX4Vu%2FXTTdMXDjMrPgfm%2Faiy056VOn1rqcyfIn1x%2BS0b0YIVTW%2Fb05R%2F0zYRF7Gi%2BojRR9B%2Bpx6irWPI3FKXyUx6EA4KyjWzS%2Bx0ChiAPAGCI4MAgJFfU1yca%2Bi5xqT%2B6%2FYfmyaKqSIWt9%2Fk7Z90aYSUJyPuGu3%2FnTNTNDmA1bR5jXxRJc6C7Ud5C0TIohC6mpF2z2mVY1QI4EdpPoLuFvYr09%2FmSThxB2ZltZTgC74TtfErgCgv5NZNMNJICSJrvf3uPjuV0Y7P9kL7BQc1a6lci0G67rGRN0jVcj6x8xTfWDjWXtes8XaeQZaE4anjKO2qOWFCQEsPYVo49cIPD4dCtqc4K47H0AS9JRAkN2gFQ%2FkQrFuWafoGXVaowAbMvbJEztkdhvrCLbPNgspL8ayxvGBO1ESB3lNkQEuF%2Fflag2Nw1OvyuqRSzWIPfR8w8%2BUqO4Wbu7xmG8hIsIT%2B8rKb4EKpHQtQEBK4MzaclV3sATvJVMqxTGHbtqcE9VIg7HRDCD1VQR2%2B0WAAAWWbSfnGQNpiaayVxxk1jxutLnxGHpGfeOPBLOyi49RMVxvdq5%2FN0w8%2FDPvQY6pgHB62C9MUyUqHdOvmkrBKXn9mnCqukzv1us08t7yoeRjcxQn7mZrnD92gxU9DV7IqJJtHW%2Fr92MDi1ecLVT7wUspxfDOsGxxfITN%2B4no91HyIngtx%2BRar3HbbzVpAtD9DIC7TCds7prTkbQHxwUBkGD2RGId%2FkGi6ZAxWlQqpsLy3jpUvHho5UZ4FyZoYksxvOkPmRti1g12XBcmaK0wCHhdgwagjLi&X-Amz-Signature=8672d88e3c7a8c636e11382561fcdbc4c812989654ce231dcf19f0de4099a805&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP3MCXXR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIEIyJakrKjmutq5FL%2BG6BUjK1bA%2B8w86SoE%2F9p0KgPc%2FAiEAgwKMi0fFEQwT%2BpmVUVKLsHPxZ23uK5GBdC2djkcv3MwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvnNoaIRkV43at8PircA1HcKlPgJGFRVRYK0KizSl7EcOTH9eSA3nfl%2BFeFc7gxDgbV2oQb3bRd7v%2F875QKE5dDutfSC5ZzUPYTQYHV%2F7at3DFn5buduBhdylJOquQxumGxPqVCwcxOFvBibcb1TfI1c67bCKI%2F%2BNp5H0tE2FkZiXM%2FoyoDMVmH4%2Bk3%2Bhz2botw7XOny84%2B2BdtyuQjP%2Bq0rsbfGTDwFrpqeXeTCYl%2Fho3pYzKMoUupzuEAHVVVXES7u05PWg6XHxcTtzhziX7Tf6xbwjkH8CTwxGhz5wTcjahLWnFTrQ%2FGUIDc1RmgWxvD5tnED6P%2F%2FjYREenK9%2BPxIz5EQESVBQsgwaqlFyUPhbXtcCaWbz4FcPVzxhSSWK5bLcuwsH30hkfJEwQj9SWV0fExLAuzNGZ%2Bfw1vm5r2ClMICV77uoJLZ3Qhy1xq5tVrp1YWH2NUnorypRXZ4Phj419tlaLYtlkwVjKA3u08giYhkAXKFEt%2FPu1Z327R6XxgV7SAPScI29JvP1Ws97DEWCyA0FC4T%2FjaY2tey29D00oczBDrAyCoP0EkoElDSqOKztYPIy4iymDGy6MBdgj7dyTs5o%2F6AlXcg3B%2B9VKLGEE3IMes0Om6a3eFDmpueceIsjGCCdqJxIdmMMTwz70GOqUBEmNUYcYDfhZ5%2FqMv1YJo3wS%2FBYViIbCITG4aaaBK91OU3giSE9Xy5cYQwzcX8u37nJg8fa%2BDcTtcKVlr6u%2FkWPq3LjJuoN%2BDgSm4W0jv%2BLyaJNn6Hj3uz%2FSqWfLvNrdfQolizrydwZnx8fwP%2BA0IZcJh%2Fg07xom3OHj3Ho5pVwe6pO6hNHFOBaBFqbT9AvN8oEjlT9T0FZrpZCNzg%2FV4SgHPtKhG&X-Amz-Signature=6ca61b640535b5c098b9bddb69ebddbd0e1db9d765c0815cfb6fff05a2b65a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
